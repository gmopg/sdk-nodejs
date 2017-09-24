"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const GMO = require("../../lib/index");
/**
 * 金額変更サンプル（仮売上 -> 実売上 -> 即時売上）
 */
const shopId = 'your shopId';
const shopPass = 'sour shopPass';
// const shopId = process.env.TEST_GMO_SHOP_ID;
// const shopPass = process.env.TEST_GMO_SHOP_PASS;
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const orderId = Date.now().toString();
        const amount = 1800;
        // 取引作成
        const entryTranResult = yield GMO.services.credit.entryTran({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId,
            jobCd: GMO.utils.util.JobCd.Auth,
            amount: amount
        });
        // 決済実行
        yield GMO.services.credit.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: GMO.utils.util.Method.Lump,
            cardNo: '4111111111111111',
            expire: '2012',
            securityCode: '123'
        });
        // 決済変更
        yield GMO.services.credit.alterTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: GMO.utils.util.JobCd.Sales,
            amount: amount
        });
        // 金額変更
        yield GMO.services.credit.changeTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: GMO.utils.util.JobCd.Capture,
            amount: 300
        });
    });
}
