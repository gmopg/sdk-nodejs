"use strict";
const GMO = require("../../lib/gmo_service");
/**
 * creditサンプル
 */
process.env.GMO_ENDPOINT = 'https://pt01.mul-pay.jp';
const orderId = Date.now().toString();
const amount = 1800;
GMO.CreditService.entryTranInterface({
    shopId: 'tshop00024015',
    shopPass: 'hf3wsuyy',
    orderId: orderId,
    jobCd: GMO.Util.JOB_CD_AUTH,
    amount: amount
}).then((entryTranResult) => {
    GMO.CreditService.execTranInterface({
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        orderId: orderId,
        method: '1',
        cardNo: '4111111111111111',
        expire: '2012',
        securityCode: '123'
    }).then((execTranResult) => {
        // tslint:disable-next-line:no-console
        console.log(execTranResult);
        GMO.CreditService.alterTranInterface({
            shopId: 'tshop00024015',
            shopPass: 'hf3wsuyy',
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: GMO.Util.JOB_CD_SALES,
            amount: amount
        }).then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result);
        }, (err) => {
            console.error(err);
        });
    }, (err) => {
        console.error(err);
    });
}, (err) => {
    console.error(err);
});
