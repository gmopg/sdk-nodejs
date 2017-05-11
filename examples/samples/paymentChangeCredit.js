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
 * creditサンプル
 */
const shopId = 'your shopId';
const shopPass = 'sour shopPass';
// const shopId = process.env.GMO_SHOP_ID;
// const shopPass = process.env.GMO_SHOP_PASS;
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const orderId = Date.now().toString();
        // 取引作成
        const entryTranResult = yield GMO.CreditService.entryTran({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId,
            jobCd: GMO.Util.JOB_CD_AUTH,
            amount: 1800
        });
        // 決済実行
        yield GMO.CreditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: '1',
            cardNo: '4111111111111111',
            expire: '2012',
            securityCode: '123'
        });
        // 決済変更
        yield GMO.CreditService.changeTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: GMO.Util.JOB_CD_AUTH,
            amount: 300
        });
    });
}
