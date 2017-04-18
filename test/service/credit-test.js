"use strict";
/**
 * クレジットサービステスト
 *
 * @ignore
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const CreditService = require("../../lib/services/credit");
const Util = require("../../lib/utils/util");
describe('カード決済 取引登録', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        const orderId = Date.now().toString();
        const amount = 1800;
        let entryTranError;
        try {
            yield CreditService.entryTran({
                shopId: '********',
                shopPass: '********',
                orderId: orderId,
                jobCd: Util.JOB_CD_AUTH,
                amount: amount
            });
        }
        catch (error) {
            entryTranError = error;
        }
        assert(entryTranError instanceof Error);
    }));
});
describe('カード決済 取引状態参照', () => {
    it('オーダーIDが不適切なので参照できないはず', () => __awaiter(this, void 0, void 0, function* () {
        const orderId = '********';
        const shopId = process.env.TEST_GMO_SHOP_ID;
        const shopPass = process.env.TEST_GMO_SHOP_PASS;
        let searchTradeError;
        try {
            yield CreditService.searchTrade({
                shopId: shopId,
                shopPass: shopPass,
                orderId: orderId
            });
        }
        catch (error) {
            searchTradeError = error;
        }
        assert(searchTradeError instanceof Error);
    }));
    it('オーソリ後に参照できるはず', () => __awaiter(this, void 0, void 0, function* () {
        const orderId = Date.now().toString();
        const shopId = process.env.TEST_GMO_SHOP_ID;
        const shopPass = process.env.TEST_GMO_SHOP_PASS;
        const jobCd = Util.JOB_CD_AUTH;
        const amount = 1234;
        const entryTranResult = yield CreditService.entryTran({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId,
            jobCd: jobCd,
            amount: amount
        });
        yield CreditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: '1',
            cardNo: '4111111111111111',
            expire: '2012',
            securityCode: '123'
        });
        const result = yield CreditService.searchTrade({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId
        });
        assert.equal(result.orderId, orderId);
        assert.equal(result.jobCd, jobCd);
        assert.equal(result.amount, amount);
    }));
});
