const GMO = require('../../');

main()
    .catch(console.error);

async function main() {
    const orderId = '1511764732893';
    const creditService = new GMO.service.Credit({
        endpoint: process.env.GMO_ENDPOINT
    });
    // 取引作成
    const entryTranResult = await creditService.searchTrade({
        shopId: process.env.TEST_GMO_SHOP_ID,
        shopPass: process.env.TEST_GMO_SHOP_PASS,
        orderId: orderId
    });
    console.log('entryTranResult:', entryTranResult);
}
