const GMO = require('../../');

main()
    .catch(console.error);

async function main() {
    const orderId = '589716351692188xx';

    const creditService = new GMO.service.Credit(
        {
            endpoint: process.env.GMO_ENDPOINT
        },
        { timeout: 1000 }
    );
    // 取引作成
    const entryTranResult = await creditService.searchTrade({
        shopId: process.env.TEST_GMO_SHOP_ID,
        shopPass: process.env.TEST_GMO_SHOP_PASS,
        orderId: orderId,
        siteId: process.env.TEST_GMO_SITE_ID,
        sitePass: process.env.TEST_GMO_SITE_PASS
    });
    console.log('entryTranResult:', entryTranResult);
}
