// tslint:disable:no-implicit-dependencies

/**
 * service test
 * @ignore
 */

import { } from 'mocha';
import * as assert from 'power-assert';
import * as sinon from 'sinon';

import { Service } from './service';
import { DefaultTransporter, StubTransporter } from './transporters';

const API_ENDPOINT = 'https://example.com';

describe('fetch()', () => {
    let sandbox: sinon.SinonSandbox;

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('transporterが正常であれば、レスポンスを取得できるはず', async () => {
        const response: any = { key: 'value' };

        const service = new Service({
            endpoint: API_ENDPOINT,
            transporter: new StubTransporter(response)
        });

        const result = await service.request(<any>{});

        assert.deepEqual(result, response);
        sandbox.verify();
    });

    it('サービスインスタンスにリクエストオプションを指定すれば、リクエストに適用されるはず', async () => {
        const response: any = { key: 'value' };
        const transporter = new StubTransporter(response);

        const service = new Service(
            {
                endpoint: API_ENDPOINT,
                transporter: transporter
            },
            {
                pool: {}
            }
        );

        sandbox.mock(transporter).expects('request').once().withArgs(sinon.match({ pool: {} })).resolves(response);

        const result = await service.request(<any>{});

        assert.deepEqual(result, response);
        sandbox.verify();
    });

    it('authオプションもtransporterオプションも未定義であれば、内部的にDefaultTransporterインスタンスが生成されてfetchメソッドが呼ばれるはず', async () => {
        const options = {};
        const service = new Service({
            endpoint: API_ENDPOINT
        });

        sandbox.mock(DefaultTransporter.prototype).expects('request').once();

        await service.request(<any>options);
        sandbox.verify();
    });
});
