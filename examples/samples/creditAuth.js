var GMO = require("../../index");

// COA.initialize({
//     endpoint: "http://coacinema.aa0.netvolante.jp",
//     refresh_token: "eyJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVkX2F0IjoxNDc5MjYwODQ4LCJhdXRoX2lkIjoiMzMxNSJ9.jx-w7D3YLP7UbY4mzJYC9xr368FiKWcpR2_L9mZfehQ"
// });

let orderId = Date.now();
GMO.entryTranInterface.call({
    order_id: orderId,
    job_cd: GMO.STATUS_CREDIT_AUTH,
    amount: 1800,
}).then((result) => {
    GMO.execTranInterface.call({
        access_id: result.access_id,
        access_pass: result.access_pass,
        order_id: orderId,
        method: "1",
        card_no: "4111111111111111",
        expire: "2012",
        security_code: "123",
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.error(err);
    });
}, (err) => {
    console.error(err);
});