import * as assert from 'assert';
import * as CreditService from '../../lib/services/credit';
import * as Util from '../../lib/utils/util';

/**
 * creditテスト
 */

describe('カード決済 取引登録', () => {
    it('失敗', (done) => {
        const orderId = Date.now().toString();
        const amount = 1800;
        CreditService.entryTran({
            shopId: '********',
            shopPass: '********',
            orderId: orderId,
            jobCd: Util.JOB_CD_AUTH,
            amount: amount
        }).then(
            () => {
                done(new Error('entryTran should be failed.'));
            }
            ).catch(() => {
                done();
            });
    });
});

describe('カード決済 取引状態参照', () => {
    it('オーダーIDが不適切なので参照できないはず', async () => {
        const orderId = '********';
        const shopId = process.env.TEST_GMO_SHOP_ID;
        const shopPass = process.env.TEST_GMO_SHOP_PASS;

        try {
            await CreditService.searchTrade({
                shopId: shopId,
                shopPass: shopPass,
                orderId: orderId
            });
        } catch (error) {
            assert(error instanceof Error);
            return;
        }

        throw new Error('失敗するはず');
    });

    it('オーソリ後に参照できるはず', async () => {
        const orderId = Date.now().toString();
        const shopId = process.env.TEST_GMO_SHOP_ID;
        const shopPass = process.env.TEST_GMO_SHOP_PASS;
        const jobCd = Util.JOB_CD_AUTH;
        const amount = 1234;

        const entryTranResult = await CreditService.entryTran({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId,
            jobCd: jobCd,
            amount: amount
        });

        await CreditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: '1',
            cardNo: '4111111111111111',
            expire: '2012',
            securityCode: '123'
        });

        const result = await CreditService.searchTrade({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId
        });

        assert.equal(result.orderId, orderId);
        assert.equal(result.jobCd, jobCd);
        assert.equal(result.amount, amount);
    });
});
