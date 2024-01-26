// tslint:disable:no-implicit-dependencies
/**
 * transporter test
 */
import {
    BAD_REQUEST,
    CREATED,
    FORBIDDEN,
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    NOT_IMPLEMENTED,
    OK,
    UNAUTHORIZED
} from 'http-status';
import { } from 'mocha';
import * as nock from 'nock';
import * as nodeFecth from 'node-fetch';
import * as assert from 'power-assert';
import * as qs from 'querystring';
import * as sinon from 'sinon';

import { BadRequestError } from './error/badRequest';

import { DefaultTransporter, FetchTransporter, RequestError } from './transporters';

const API_ENDPOINT = 'https://example.com';

describe('transporter.request()', () => {
    let scope: nock.Scope;
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        nock.cleanAll();
        nock.disableNetConnect();
    });

    afterEach(() => {
        sandbox.restore();
        nock.cleanAll();
        nock.enableNetConnect();
    });

    // tslint:disable-next-line:mocha-no-side-effect-code
    [CREATED, OK].forEach((statusCode) => {
        it(`次のステータスコードが返却されれば、レスポンスを取得できるはず ${statusCode}`, async () => {
            const body: any = { key: 'value' };

            const transporter = new DefaultTransporter([statusCode]);

            scope = nock(API_ENDPOINT)
                .get('/uri')
                .reply(statusCode, qs.stringify(body));

            const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET', form: {} });

            assert.deepEqual(result, body);
            sandbox.verify();
            assert(scope.isDone());
        });
    });

    it(`期待レスポンス属性を指定してもレスポンスを取得できるはず`, async () => {
        const body: any = { ACS: 'xxx', RedirectUrl: 'xxx.com' };

        const transporter = new DefaultTransporter([OK], ['ACS', 'RedirectUrl']);

        scope = nock(API_ENDPOINT)
            .get('/uri')
            .reply(OK, qs.stringify(body));

        const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET', form: {} });

        assert.deepEqual(result, body);
        sandbox.verify();
        assert(scope.isDone());
    });

    // tslint:disable-next-line:mocha-no-side-effect-code
    [
        BAD_REQUEST,
        FORBIDDEN,
        INTERNAL_SERVER_ERROR,
        NOT_FOUND,
        NOT_IMPLEMENTED,
        UNAUTHORIZED
    ].forEach((statusCode) => {
        it(`次のステータスコードが返却されれば、リクエストエラーが投げられるはず ${statusCode}`, async () => {
            const body = 'body text';

            const transporter = new DefaultTransporter([OK]);

            scope = nock(API_ENDPOINT)
                .get('/uri')
                .reply(statusCode, body);

            const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET', form: {} })
                .catch((err) => err);

            assert(result instanceof Error);
            assert.equal((<RequestError>result).code, statusCode);
            assert.equal((<RequestError>result).message, body);
            sandbox.verify();
            assert(scope.isDone());
        });
    });

    it('レスポンスにステータスコードがなければ、RequestErrorとなるはず', async () => {
        const body = 'body text';

        const transporter = new DefaultTransporter([OK]);

        scope = nock(API_ENDPOINT)
            .get('/uri')
            .replyWithError(body);

        const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET', form: {} })
            .catch((err) => err);
        assert(result instanceof Error);
        sandbox.verify();
        assert(scope.isDone());
    });

    it('GMOエラーレスポンスを受け取れば、BadRequestErrorとなるはず', async () => {
        const body: any = { ErrCode: '12345', ErrInfo: 'xxxxx' };
        const transporter = new DefaultTransporter([OK]);

        scope = nock(API_ENDPOINT)
            .get('/uri')
            .reply(OK, qs.stringify(body));

        const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET', form: {} })
            .catch((err) => err);
        assert(result instanceof BadRequestError);
        sandbox.verify();
        assert(scope.isDone());
    });
});

describe('FetchTransporter.request()', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    // tslint:disable-next-line:mocha-no-side-effect-code
    [CREATED, OK].forEach((statusCode) => {
        it(`次のステータスコードが返却されれば、レスポンスを取得できるはず ${statusCode}`, async () => {
            const body: any = { key: 'value' };

            const transporter = new FetchTransporter([statusCode]);
            const response = new nodeFecth.Response(
                qs.stringify(body),
                { status: statusCode }
            );
            sandbox.mock(nodeFecth)
                .expects('default')
                .once()
                .resolves(response);

            const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET', form: { test: 'test' }, timeout: 1000 });

            assert.deepEqual(result, body);
            sandbox.verify();
        });
    });

    it(`期待レスポンス属性を指定してもレスポンスを取得できるはず`, async () => {
        const body: any = { ACS: 'xxx', RedirectUrl: 'xxx.com' };

        const transporter = new FetchTransporter([OK], ['ACS', 'RedirectUrl']);
        const response = new nodeFecth.Response(
            qs.stringify(body),
            { status: OK }
        );
        sandbox.mock(nodeFecth)
            .expects('default')
            .once()
            .resolves(response);

        const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET', form: {} });

        assert.deepEqual(result, body);
        sandbox.verify();
    });

    // tslint:disable-next-line:mocha-no-side-effect-code
    [
        BAD_REQUEST,
        FORBIDDEN,
        INTERNAL_SERVER_ERROR,
        NOT_FOUND,
        NOT_IMPLEMENTED,
        UNAUTHORIZED
    ].forEach((statusCode) => {
        it(`次のステータスコードが返却されれば、リクエストエラーが投げられるはず ${statusCode}`, async () => {
            const body = 'body text';

            const transporter = new FetchTransporter([OK]);
            const response = new nodeFecth.Response(
                body,
                { status: statusCode }
            );
            sandbox.mock(nodeFecth)
                .expects('default')
                .once()
                .resolves(response);

            const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET', form: {} })
                .catch((err) => err);

            assert(result instanceof Error);
            assert.equal((<RequestError>result).code, statusCode);
            assert.equal((<RequestError>result).message, body);
            sandbox.verify();
        });
    });

    it('GMOエラーレスポンスを受け取れば、BadRequestErrorとなるはず', async () => {
        const body: any = { ErrCode: '12345', ErrInfo: 'xxxxx' };
        const transporter = new FetchTransporter([OK]);
        const response = new nodeFecth.Response(
            qs.stringify(body),
            { status: OK }
        );
        sandbox.mock(nodeFecth)
            .expects('default')
            .once()
            .resolves(response);

        const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET', form: {} })
            .catch((err) => err);
        assert(result instanceof BadRequestError);
        sandbox.verify();
    });
});

describe('DefaultTransporter.CONFIGURE()', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('既存のUser-Agentヘッダーにパッケージ情報がなければ、ヘッダーに情報が追加されるはず', async () => {
        const options = {
            url: '',
            headers: {
                'User-Agent': 'useragent'
            },
            form: {}
        };

        const result = DefaultTransporter.CONFIGURE(options);
        assert((<any>result.headers)['User-Agent'].indexOf(DefaultTransporter.USER_AGENT) > 0);
        sandbox.verify();
    });
});

describe('FetchTransporter.CONFIGURE()', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('既存のUser-Agentヘッダーにパッケージ情報がなければ、ヘッダーに情報が追加されるはず', async () => {
        const options = {
            url: '',
            headers: {
                'User-Agent': 'useragent'
            },
            form: {}
        };

        const result = FetchTransporter.CONFIGURE(options);
        assert((<any>result.headers)['User-Agent'].indexOf(DefaultTransporter.USER_AGENT) > 0);
        sandbox.verify();
    });
});
