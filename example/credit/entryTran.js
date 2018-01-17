const GMO = require('../../');

const orderId = Date.now().toString();
const amount = 1800;
const creditService = new GMO.service.Credit({
    endpoint: process.env.GMO_ENDPOINT
});
creditService.entryTran({
    shopId: process.env.TEST_GMO_SHOP_ID,
    shopPass: process.env.TEST_GMO_SHOP_PASS,
    orderId: orderId,
    jobCd: GMO.utils.util.JobCd.Auth,
    amount: amount
}).then((entryTranResult) => {
    console.log('entryTranResult:', entryTranResult);
}).catch((err) => console.error);
