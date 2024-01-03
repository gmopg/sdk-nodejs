const GMO = require('../../');

/**
 * creditサンプル
 */
async function main() {
    const orderId = Date.now().toString();
    const amount = 1800;
    const creditService = new GMO.service.Credit(
        { endpoint: process.env.GMO_ENDPOINT },
        { pool: {} }
    );
    const entryTranResult = await creditService.entryTran({
        shopId: process.env.TEST_GMO_SHOP_ID,
        shopPass: process.env.TEST_GMO_SHOP_PASS,
        orderId: orderId,
        jobCd: GMO.utils.util.JobCd.Auth,
        amount: amount
    });
    console.log('entryTranResult:', entryTranResult);
    const execTranResult = await creditService.execTran({
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        orderId: orderId,
        method: GMO.utils.util.Method.Lump,
        cardNo: '4111111111111111',
        expire: '2812',
        securityCode: '123'
    });
    console.log('execTranResult:', execTranResult);

    const alterTranResult = await creditService.alterTran({
        shopId: process.env.TEST_GMO_SHOP_ID,
        shopPass: process.env.TEST_GMO_SHOP_PASS,
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        jobCd: GMO.utils.util.JobCd.Sales,
        amount: amount
    });
    console.log('alterTranResult:', alterTranResult);
}

main()
    .then()
    .catch(console.error);
