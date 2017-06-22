/**
 * クレジットサービステスト
 *
 * @ignore
 */

import * as assert from 'assert';
import * as CreditService from '../../lib/services/credit';
import * as Util from '../../lib/utils/util';

describe('カード決済 取引登録', () => {
    it('失敗', async () => {
        const orderId = Date.now().toString();
        const amount = 1800;

        let entryTranError: any;
        try {
            await CreditService.entryTran({
                shopId: '********',
                shopPass: '********',
                orderId: orderId,
                jobCd: Util.JOB_CD_AUTH,
                amount: amount
            });
        } catch (error) {
            entryTranError = error;
        }

        assert(entryTranError instanceof Error);
    });
});

describe('カード決済 取引状態参照', () => {
    it('オーダーIDが不適切なので参照できないはず', async () => {
        const orderId = '********';
        const shopId = process.env.TEST_GMO_SHOP_ID;
        const shopPass = process.env.TEST_GMO_SHOP_PASS;

        let searchTradeError: any;
        try {
            await CreditService.searchTrade({
                shopId: shopId,
                shopPass: shopPass,
                orderId: orderId
            });
        } catch (error) {
            searchTradeError = error;
        }

        assert(searchTradeError instanceof Error);
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

describe('カード決済 金額変更', () => {
    it('失敗', async () => {
        let changeTranError: any;
        try {
            // 金額変更
            await CreditService.changeTran({
                shopId: '********',
                shopPass: '********',
                accessId: '********',
                accessPass: '********',
                jobCd: Util.JOB_CD_AUTH,
                amount: 300
            });
        } catch (error) {
            changeTranError = error;
        }

        assert(changeTranError instanceof Error);
    });

    it('正常 仮-実-仮-実', async () => {
        const orderId = Date.now().toString();
        const shopId = process.env.TEST_GMO_SHOP_ID;
        const shopPass = process.env.TEST_GMO_SHOP_PASS;
        const amount = 1800;
        const changeAmount = 300;
        // 取引作成
        const entryTranResult = await CreditService.entryTran({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId,
            jobCd: Util.JOB_CD_AUTH,
            amount: amount
        });
        // 決済実行
        await CreditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: '1',
            cardNo: '4111111111111111',
            expire: '2012',
            securityCode: '123'
        });
        // 決済変更
        await CreditService.alterTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JOB_CD_SALES,
            amount: amount
        });
        // 金額変更
        await CreditService.changeTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JOB_CD_AUTH,
            amount: changeAmount
        });
        // 決済変更
        await CreditService.alterTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JOB_CD_SALES,
            amount: changeAmount
        });

        const searchTradeResult = await CreditService.searchTrade({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId
        });

        assert.equal(searchTradeResult.status, Util.JOB_CD_SALES);
        assert.equal(searchTradeResult.orderId, orderId);
        assert.equal(searchTradeResult.amount, changeAmount);
    });

    it('正常 仮-実-即', async () => {
        const orderId = Date.now().toString();
        const shopId = process.env.TEST_GMO_SHOP_ID;
        const shopPass = process.env.TEST_GMO_SHOP_PASS;
        const amount = 1800;
        const changeAmount = 300;
        // 取引作成
        const entryTranResult = await CreditService.entryTran({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId,
            jobCd: Util.JOB_CD_AUTH,
            amount: amount
        });
        // 決済実行
        await CreditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: '1',
            cardNo: '4111111111111111',
            expire: '2012',
            securityCode: '123'
        });
        // 決済変更
        await CreditService.alterTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JOB_CD_SALES,
            amount: amount
        });
        // 金額変更
        await CreditService.changeTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JOB_CD_CAPTURE,
            amount: changeAmount
        });

        const searchTradeResult = await CreditService.searchTrade({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId
        });

        assert.equal(searchTradeResult.status, Util.JOB_CD_CAPTURE);
        assert.equal(searchTradeResult.orderId, orderId);
        assert.equal(searchTradeResult.amount, changeAmount);
    });
});
