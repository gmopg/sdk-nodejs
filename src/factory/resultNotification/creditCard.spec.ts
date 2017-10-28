/**
 * カード決済結果通知ファクトリーテスト
 * @ignore
 */

import * as assert from 'assert';
import * as sinon from 'sinon';

import * as CreditCardResultNotificationFactory from './creditCard';

let sandbox: sinon.SinonSandbox;

describe('CreditCardResultNotificationFactory.createFromRequestBody()', () => {
    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('リクエスト本文から、オブジェクトを生成できるはず', async () => {
        const params = {};

        const result = CreditCardResultNotificationFactory.createFromRequestBody(<any>params);
        assert.equal(typeof result, 'object');
        sandbox.verify();
    });
});
