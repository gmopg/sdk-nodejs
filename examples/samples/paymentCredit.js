var GMO = require("../../index");

GMO.initialize({
    endpoint: "https://pt01.mul-pay.jp",
    shop_id: "tshop00024015",
    shop_pass: "hf3wsuyy"
});

let orderId = Date.now();
let amount = 1800;
GMO.CreditService.entryTranInterface.call({
    order_id: orderId,
    job_cd: GMO.Util.JOB_CD_AUTH,
    amount: amount,
}).then((entryTranResult) => {
    GMO.CreditService.execTranInterface.call({
        access_id: entryTranResult.access_id,
        access_pass: entryTranResult.access_pass,
        order_id: orderId,
        method: "1",
        card_no: "4111111111111111",
        expire: "2012",
        security_code: "123",
    }).then((execTranResult) => {
        console.log(execTranResult);
        GMO.CreditService.alterTranInterface.call({
            access_id: entryTranResult.access_id,
            access_pass: entryTranResult.access_pass,
            job_cd: GMO.Util.JOB_CD_SALES,
            amount: amount
        }).then((result) => {
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