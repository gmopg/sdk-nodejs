const GMO = require('../../');

main()
    .catch(console.error);

async function main() {
    const orderId = '1707345277910';
    const creditService = new GMO.service.Credit({
        endpoint: process.env.GMO_ENDPOINT
    });
    const result = await creditService.searchCardDetail({
        shopId: process.env.TEST_GMO_SHOP_ID,
        shopPass: process.env.TEST_GMO_SHOP_PASS,
        orderId: orderId,
        searchType: '1'
    });
    console.log('result:', result);
}
