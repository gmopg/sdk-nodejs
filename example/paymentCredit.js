const GMO = require('../');

/**
 * creditサンプル
 */

const orderId = Date.now().toString();
const amount = 1800;
GMO.services.credit.entryTran({
    shopId: process.env.TEST_GMO_SHOP_ID,
    shopPass: process.env.TEST_GMO_SHOP_PASS,
    orderId: orderId,
    jobCd: GMO.utils.util.JobCd.Auth,
    amount: amount
}).then(
    (entryTranResult) => {
        GMO.services.credit.execTran({
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
                GMO.services.credit.alterTran({
                    shopId: process.env.TEST_GMO_SHOP_ID,
                    shopPass: process.env.TEST_GMO_SHOP_PASS,
                    accessId: entryTranResult.accessId,
                    accessPass: entryTranResult.accessPass,
                    jobCd: GMO.utils.util.JobCd.Sales,
                    amount: amount
                }).then(
                    (result) => {
                        console.log(result);
                    },
                    (err) => {
                        console.error(err);
                    }
                    );
            },
            (err) => {
                console.error(err);
            }
            );
    },
    (err) => {
        console.error(err);
    }
    );
