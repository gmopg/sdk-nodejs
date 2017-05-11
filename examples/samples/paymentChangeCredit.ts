import * as GMO from '../../lib/index';

/**
 * creditサンプル
 */
const shopId = 'your shopId';
const shopPass = 'sour shopPass';
// const shopId = process.env.GMO_SHOP_ID;
// const shopPass = process.env.GMO_SHOP_PASS;
main();

async function main() {
    const orderId = Date.now().toString();
    // 取引作成
    const entryTranResult = await GMO.CreditService.entryTran({
        shopId: shopId,
        shopPass: shopPass,
        orderId: orderId,
        jobCd: GMO.Util.JOB_CD_AUTH,
        amount: 1800
    });
    // 決済実行
    await GMO.CreditService.execTran({
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        orderId: orderId,
        method: '1',
        cardNo: '4111111111111111',
        expire: '2012',
        securityCode: '123'
    });
    // 決済変更
    await GMO.CreditService.changeTran({
        shopId: shopId,
        shopPass: shopPass,
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        jobCd: GMO.Util.JOB_CD_AUTH,
        amount: 300
    });
}
