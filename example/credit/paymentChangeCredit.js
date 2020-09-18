const GMO = require('../../');

/**
 * 金額変更サンプル（仮売上 -> 実売上 -> 即時売上）
 */
const shopId = process.env.TEST_GMO_SHOP_ID;
const shopPass = process.env.TEST_GMO_SHOP_PASS;
main()
    .catch(console.error);

async function main() {
    const orderId = Date.now().toString();
    const amount = 1800;
    const creditService = new GMO.service.Credit({
        endpoint: process.env.GMO_ENDPOINT
    });
    // 取引作成
    const entryTranResult = await creditService.entryTran({
        shopId: shopId,
        shopPass: shopPass,
        orderId: orderId,
        jobCd: GMO.utils.util.JobCd.Auth,
        amount: amount
    });
    // 決済実行
    await creditService.execTran({
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        orderId: orderId,
        method: GMO.utils.util.Method.Lump,
        cardNo: '4111111111111111',
        expire: '2012',
        securityCode: '123'
    });
    // 決済変更
    await creditService.alterTran({
        shopId: shopId,
        shopPass: shopPass,
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        jobCd: GMO.utils.util.JobCd.Sales,
        amount: amount
    });
    // 金額変更
    await creditService.changeTran({
        shopId: shopId,
        shopPass: shopPass,
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        jobCd: GMO.utils.util.JobCd.Capture,
        amount: 300
    });
}
