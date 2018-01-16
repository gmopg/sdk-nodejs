// tslint:disable:no-implicit-dependencies

/**
 * transporter test
 * @ignore
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
import * as assert from 'power-assert';
import * as qs from 'querystring';
import * as sinon from 'sinon';

import { DefaultTransporter, RequestError } from './transporters';

const API_ENDPOINT = 'https://example.com';

describe('transporter.request()', () => {
    let scope: nock.Scope;
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
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

            scope = nock(API_ENDPOINT).get('/uri').reply(statusCode, qs.stringify(body));

            const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET' });

            assert.deepEqual(result, body);
            sandbox.verify();
            assert(scope.isDone());
        });
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

            scope = nock(API_ENDPOINT).get('/uri').reply(statusCode, body);

            const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET' }).catch((err) => err);

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

        scope = nock(API_ENDPOINT).get('/uri').replyWithError(body);

        const result = await transporter.request({ url: `${API_ENDPOINT}/uri`, method: 'GET' }).catch((err) => err);
        assert(result instanceof Error);
        console.error(result);
        sandbox.verify();
        assert(scope.isDone());
    });
});

describe('DefaultTransporter.CONFIGURE()', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('既存のUser-Agentヘッダーにパッケージ情報がなければ、ヘッダーに情報が追加されるはず', async () => {
        const options = {
            url: '',
            headers: {
                'User-Agent': 'useragent'
            }
        };

        const result = DefaultTransporter.CONFIGURE(options);
        assert((<any>result.headers)['User-Agent'].indexOf(DefaultTransporter.USER_AGENT) > 0);
        sandbox.verify();
    });
});
