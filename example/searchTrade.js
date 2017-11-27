const GMO = require('../');

main();

async function main() {
    const orderId = '1511764732893';
    // 取引作成
    const entryTranResult = await GMO.services.credit.searchTrade({
        shopId: process.env.TEST_GMO_SHOP_ID,
        shopPass: process.env.TEST_GMO_SHOP_PASS,
        orderId: orderId
    });
}
