// tslint:disable:no-implicit-dependencies
/**
 * service test
 */
import { OK } from 'http-status';
import { } from 'mocha';
import * as assert from 'power-assert';
import * as sinon from 'sinon';

import { Service } from './service';
import { DefaultTransporter, FetchTransporter } from './transporters';

const API_ENDPOINT = 'https://example.com';

describe('fetch()', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('transporterが正常であれば、レスポンスを取得できるはず(useFetch: false)', async () => {
        const response: any = { key: 'value' };

        const service = new Service({
            endpoint: API_ENDPOINT,
            useFetch: false
        });

        sandbox.mock(DefaultTransporter.prototype)
            .expects('request')
            .once()
            .resolves(response);

        const result = await service.request({
            uri: '/xxx',
            method: 'GET',
            form: {
                test: 'test'
            },
            expectedStatusCodes: [OK],
            expectedResponseParams: []
        });

        assert.deepEqual(result, response);
        sandbox.verify();
    });

    it('transporterが正常であれば、レスポンスを取得できるはず(useFetch: true)', async () => {
        const response: any = { key: 'value' };

        const service = new Service({
            endpoint: API_ENDPOINT,
            useFetch: true
        });

        sandbox.mock(FetchTransporter.prototype)
            .expects('request')
            .once()
            .resolves(response);

        const result = await service.request({
            uri: '/xxx',
            method: 'GET',
            form: {
                test: 'test'
            },
            expectedStatusCodes: [OK],
            expectedResponseParams: []
        });

        assert.deepEqual(result, response);
        sandbox.verify();
    });

    it('サービスインスタンスにリクエストオプションを指定すれば、リクエストに適用されるはず(useFetch: false)', async () => {
        const response: any = { key: 'value' };
        const service = new Service(
            {
                endpoint: API_ENDPOINT,
                useFetch: false
            },
            {
                timeout: 1000
            }
        );

        sandbox.mock(DefaultTransporter.prototype)
            .expects('request')
            .once()
            .withArgs(sinon.match({ timeout: 1000 }))
            .resolves(response);

        const result = await service.request(<any>{});

        assert.deepEqual(result, response);
        sandbox.verify();
    });

    it('サービスインスタンスにリクエストオプションを指定すれば、リクエストに適用されるはず(useFetch: true)', async () => {
        const response: any = { key: 'value' };
        const service = new Service(
            {
                endpoint: API_ENDPOINT,
                useFetch: true
            },
            {
                timeout: 1000
            }
        );

        sandbox.mock(FetchTransporter.prototype)
            .expects('request')
            .once()
            .withArgs(sinon.match({ timeout: 1000 }))
            .resolves(response);

        const result = await service.request(<any>{});

        assert.deepEqual(result, response);
        sandbox.verify();
    });

    it('authオプションもtransporterオプションも未定義であれば、内部的にDefaultTransporterインスタンスが生成されてfetchメソッドが呼ばれるはず', async () => {
        const options = {};
        const service = new Service({
            endpoint: API_ENDPOINT,
            useFetch: false
        });

        sandbox.mock(DefaultTransporter.prototype)
            .expects('request')
            .once();

        await service.request(<any>options);
        sandbox.verify();
    });
});
