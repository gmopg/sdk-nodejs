// tslint:disable:max-classes-per-file
/**
 * transporters
 */
import * as createDebug from 'debug';
import { default as fetch, Response } from 'node-fetch';
import * as querystring from 'querystring';
import * as request from 'request-promise-native';
// import * as fetch from 'isomorphic-fetch';

import { BadRequestError } from './error/badRequest';

const debug = createDebug('gmo-service:transporters');
// tslint:disable-next-line
const pkg = require('../package.json');

export type IRequestOptions = Pick<
    request.OptionsWithUrl,
    'headers' | 'method' | 'timeout' | 'url'
> & {
    form: { [key: string]: any };
};

/**
 * トランスポーター抽象クラス
 */
export abstract class Transporter {
    public abstract request(options: IRequestOptions): Promise<any>;
}

type IParsedResponseBody = Record<string, any>;

/**
 * RequestError
 */
export class RequestError extends Error {
    public code: number;
    public errors: Error[];
}

/**
 * DefaultTransporter
 */
export class DefaultTransporter implements Transporter {
    /**
     * Default user agent.
     */
    public static readonly USER_AGENT: string = `gmo-service-nodejs-client/${pkg.version}`;
    public expectedStatusCodes: number[];
    public expectedResponseParams: string[] | undefined;

    constructor(expectedStatusCodes: number[], expectedResponseParams?: string[]) {
        this.expectedStatusCodes = expectedStatusCodes;
        if (Array.isArray(expectedResponseParams)) {
            this.expectedResponseParams = expectedResponseParams;
        }
    }

    /**
     * Configures request options before making a request.
     */
    public static CONFIGURE(options: IRequestOptions): Pick<
        request.OptionsWithUrl,
        'headers' | 'method' | 'form' | 'timeout' | 'url' | 'resolveWithFullResponse' | 'simple'
    > {
        // set transporter user agent
        options.headers = (options.headers !== undefined) ? options.headers : {};
        if (!options.headers['User-Agent']) {
            options.headers['User-Agent'] = DefaultTransporter.USER_AGENT;
        } else /* istanbul ignore next */ if (options.headers['User-Agent'].indexOf(DefaultTransporter.USER_AGENT) === -1) {
            options.headers['User-Agent'] = `${options.headers['User-Agent']} ${DefaultTransporter.USER_AGENT}`;
        }

        // options.resolveWithFullResponse = true;
        // options.simple = false;

        return {
            ...options,
            resolveWithFullResponse: true,
            simple: false
        };
    }

    /**
     * Makes a request with given options and invokes callback.
     */
    public async request(options: IRequestOptions): Promise<IParsedResponseBody> {
        const requestOptions = DefaultTransporter.CONFIGURE(options);
        debug('requesting...', requestOptions);

        return request(requestOptions)
            .then((res) => this.wrapCallback(res));
    }

    /**
     * Wraps the response callback.
     */
    private wrapCallback(res: request.FullResponse): IParsedResponseBody {
        debug('request processed.', res.statusCode, res.body);
        let err: any = new RequestError('An unexpected error occurred');

        // tslint:disable-next-line:no-single-line-block-comment
        /* istanbul ignore else */
        if (res.statusCode !== undefined) {
            if (this.expectedStatusCodes.indexOf(res.statusCode) < 0) {
                err = new RequestError(res.body);
                err.code = res.statusCode;
                err.errors = [];
            } else {
                const result = this.parseResponseBody(res.body);
                if (result.ErrCode !== undefined) {
                    // GMOのエラー結果
                    err = new BadRequestError(res.body);
                } else {
                    // 結果をオブジェクトとして返却
                    return result;
                }
            }
        }

        throw err;
    }

    private parseResponseBody(body: string): IParsedResponseBody {
        let result: IParsedResponseBody | undefined;

        // 期待属性に対応(2024-01-03~)
        if (Array.isArray(this.expectedResponseParams) && this.expectedResponseParams.length > 0) {
            const separatorPatter: string = `${this.expectedResponseParams.map((responseParam) => `${responseParam}=`)
                .join('|')}`;
            const splittedBody = body.split(new RegExp(separatorPatter));
            debug('body splitted by', separatorPatter, '->', splittedBody);
            this.expectedResponseParams.forEach((responseParam, index) => {
                let valueOfResponseParam = splittedBody[index + 1]; // splittedBody[0]は''のはず
                // tslint:disable-next-line:no-single-line-block-comment
                /* istanbul ignore else */
                if (typeof valueOfResponseParam === 'string') {
                    if (result === undefined) {
                        result = {};
                    }
                    if (valueOfResponseParam.slice(-1) === '&') {
                        valueOfResponseParam = valueOfResponseParam.slice(0, -1);
                    }
                    result[responseParam] = valueOfResponseParam;
                }
            });
        }

        if (result === undefined) {
            result = querystring.parse(body);
        }

        return result;
    }
}

/**
 * node-fetchトランスポーター
 */
export class FetchTransporter implements Transporter {
    /**
     * Default user agent.
     */
    public static readonly USER_AGENT: string = `gmo-service-nodejs-client/${pkg.version}`;
    public expectedStatusCodes: number[];
    public expectedResponseParams: string[] | undefined;

    constructor(expectedStatusCodes: number[], expectedResponseParams?: string[]) {
        this.expectedStatusCodes = expectedStatusCodes;
        if (Array.isArray(expectedResponseParams)) {
            this.expectedResponseParams = expectedResponseParams;
        }
    }

    /**
     * Configures request options before making a request.
     */
    public static CONFIGURE(options: IRequestOptions): Pick<
        request.OptionsWithUrl,
        'headers' | 'method' | 'timeout' | 'url'
    > & {
        form: { [key: string]: any };
    } {
        // set transporter user agent
        options.headers = (options.headers !== undefined) ? options.headers : {};
        if (!options.headers['User-Agent']) {
            options.headers['User-Agent'] = FetchTransporter.USER_AGENT;
        } else /* istanbul ignore next */ if (options.headers['User-Agent'].indexOf(FetchTransporter.USER_AGENT) === -1) {
            options.headers['User-Agent'] = `${options.headers['User-Agent']} ${FetchTransporter.USER_AGENT}`;
        }

        return options;
    }

    /**
     * Makes a request with given options and invokes callback.
     */
    public async request(options: IRequestOptions): Promise<IParsedResponseBody> {
        const requestOptions = FetchTransporter.CONFIGURE(options);
        const input: string = `${requestOptions.url}?${querystring.stringify(requestOptions.form)}`;
        const params = new URLSearchParams();
        Object.keys(requestOptions.form)
            .forEach((key) => {
                const value = requestOptions.form[key];
                // tslint:disable-next-line:no-single-line-block-comment
                /* istanbul ignore else */
                if (value !== undefined) {
                    params.append(key, value);
                }
            });
        debug('fetching...', input, requestOptions, params.toString());

        return fetch(
            input,
            {
                method: requestOptions.method,
                headers: {
                    ...requestOptions.headers
                    // 'Content-Type': 'application/x-www-form-urlencoded;charset=windows-31j'
                    // 'Content-Type': 'application/x-www-form-urlencoded'

                },
                body: params,
                ...(typeof requestOptions.timeout === 'number') ? { signal: AbortSignal.timeout(requestOptions.timeout) } : undefined
            }
        )
            .then((res) => this.wrapCallback(res));
    }

    /**
     * Wraps the response callback.
     */
    private async wrapCallback(res: Response): Promise<IParsedResponseBody> {
        debug('fetch processed. res.status:', res.status, 'content-type:', res.headers.get('content-type'));
        let err: any = new RequestError('An unexpected error occurred');

        let body: any = {};
        try {
            body = await res.text();
        } catch (error) {
            // no op
        }

        if (this.expectedStatusCodes.indexOf(res.status) < 0) {
            err = new RequestError(body);
            err.code = res.status;
            err.errors = [];
        } else {
            const result = this.parseResponseBody(body);
            if (result.ErrCode !== undefined) {
                // GMOのエラー結果
                err = new BadRequestError(body);
            } else {
                // 結果をオブジェクトとして返却
                return result;
            }
        }

        throw err;
    }

    private parseResponseBody(body: string): IParsedResponseBody {
        let result: IParsedResponseBody | undefined;

        // 期待属性に対応(2024-01-03~)
        if (Array.isArray(this.expectedResponseParams) && this.expectedResponseParams.length > 0) {
            const separatorPatter: string = `${this.expectedResponseParams.map((responseParam) => `${responseParam}=`)
                .join('|')}`;
            const splittedBody = body.split(new RegExp(separatorPatter));
            debug('body splitted by', separatorPatter, '->', splittedBody);
            this.expectedResponseParams.forEach((responseParam, index) => {
                let valueOfResponseParam = splittedBody[index + 1]; // splittedBody[0]は''のはず
                // tslint:disable-next-line:no-single-line-block-comment
                /* istanbul ignore else */
                if (typeof valueOfResponseParam === 'string') {
                    if (result === undefined) {
                        result = {};
                    }
                    if (valueOfResponseParam.slice(-1) === '&') {
                        valueOfResponseParam = valueOfResponseParam.slice(0, -1);
                    }
                    result[responseParam] = valueOfResponseParam;
                }
            });
        }

        if (result === undefined) {
            result = querystring.parse(body);
        }

        return result;
    }
}
