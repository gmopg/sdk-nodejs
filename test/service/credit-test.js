"use strict";
process.env.GMO_ENDPOINT = 'https://pt01.mul-pay.jp';
const GMO = require("../../lib/index");
/**
 * creditテスト
 */
describe('creditサービス', () => {
    it('取引登録失敗', (done) => {
        const orderId = Date.now().toString();
        const amount = 1800;
        GMO.CreditService.entryTran({
            shopId: '********',
            shopPass: '********',
            orderId: orderId,
            jobCd: GMO.Util.JOB_CD_AUTH,
            amount: amount
        }).then(() => {
            done(new Error('entryTran should be failed.'));
        }).catch(() => {
            done();
        });
    });
});
