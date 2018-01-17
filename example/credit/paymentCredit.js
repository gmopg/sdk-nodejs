const GMO = require('../../');

/**
 * creditサンプル
 */

const orderId = Date.now().toString();
const amount = 1800;
const creditService = new GMO.service.Credit(
    { endpoint: process.env.GMO_ENDPOINT },
    { pool: {} }
);
creditService.entryTran({
    shopId: process.env.TEST_GMO_SHOP_ID,
    shopPass: process.env.TEST_GMO_SHOP_PASS,
    orderId: orderId,
    jobCd: GMO.utils.util.JobCd.Auth,
    amount: amount
}).then(
    (entryTranResult) => {
        creditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: GMO.utils.util.Method.Lump,
            cardNo: '4111111111111111',
            expire: '2025',
            securityCode: '123'
        }).then(
            (execTranResult) => {
                console.log(execTranResult);
                creditService.alterTran({
                    shopId: process.env.TEST_GMO_SHOP_ID,
                    shopPass: process.env.TEST_GMO_SHOP_PASS,
                    accessId: entryTranResult.accessId,
                    accessPass: entryTranResult.accessPass,
                    jobCd: GMO.utils.util.JobCd.Sales,
                    amount: amount
                }).then(console.log)
                    .catch((err) => console.error);
            }).catch((err) => console.error);
    }).catch((err) => console.error);
