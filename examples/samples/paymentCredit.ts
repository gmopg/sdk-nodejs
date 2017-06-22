import * as GMO from '../../lib/index';

/**
 * creditサンプル
 */

const orderId = Date.now().toString();
const amount = 1800;
GMO.services.credit.entryTran({
    shopId: 'your shopId',
    shopPass: 'sour shopPass',
    orderId: orderId,
    jobCd: GMO.Util.JOB_CD_AUTH,
    amount: amount
}).then(
    (entryTranResult) => {
        GMO.services.credit.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: '1',
            cardNo: '4111111111111111',
            expire: '2012',
            securityCode: '123'
        }).then(
            (execTranResult) => {
                // tslint:disable-next-line:no-console
                console.log(execTranResult);
                GMO.services.credit.alterTran({
                    shopId: 'your shopId',
                    shopPass: 'sour shopPass',
                    accessId: entryTranResult.accessId,
                    accessPass: entryTranResult.accessPass,
                    jobCd: GMO.Util.JOB_CD_SALES,
                    amount: amount
                }).then(
                    (result) => {
                        // tslint:disable-next-line:no-console
                        console.log(result);
                    },
                    (err: any) => {
                        console.error(err);
                    }
                    );
            },
            (err: any) => {
                console.error(err);
            }
            );
    },
    (err: any) => {
        console.error(err);
    }
    );
