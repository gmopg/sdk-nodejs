"use strict";
process.env.GMO_ENDPOINT = 'https://pt01.mul-pay.jp';
const GMO = require("../../lib/gmo_service");
/**
 * creditテスト
 */
describe('creditサービス', () => {
    it('取引登録', (done) => {
        const orderId = Date.now().toString();
        const amount = 1800;
        GMO.CreditService.entryTranInterface({
            shopId: 'tshop00024015',
            shopPass: 'hf3wsuyy',
            orderId: orderId,
            jobCd: GMO.Util.JOB_CD_AUTH,
            amount: amount
        }).then(() => {
            done();
        }, (err) => {
            console.error(err.message);
        });
    });
});
