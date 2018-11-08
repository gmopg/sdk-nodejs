const GMO = require('../../');

main();

async function main() {
    const orderId = 'SAMPLE-1541576721-005';
    const creditService = new GMO.service.Credit({
        endpoint: process.env.GMO_ENDPOINT
    });
    const result = await creditService.searchCardDetail({
        shopId: process.env.TEST_GMO_SHOP_ID,
        shopPass: process.env.TEST_GMO_SHOP_PASS,
        orderId: orderId
    });
    console.log('result:', result);
}
