"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GMO = require("../../lib/index");
/**
 * creditサンプル
 */
const orderId = Date.now().toString();
const amount = 1800;
GMO.CreditService.entryTran({
    shopId: 'your shopId',
    shopPass: 'sour shopPass',
    orderId: orderId,
    jobCd: GMO.Util.JOB_CD_AUTH,
    amount: amount
}).then((entryTranResult) => {
    GMO.CreditService.execTran({
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
        GMO.CreditService.alterTran({
            shopId: 'your shopId',
            shopPass: 'sour shopPass',
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
