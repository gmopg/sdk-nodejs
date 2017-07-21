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
const badRequest_1 = require("../../lib/error/badRequest");
const CardService = require("../../lib/services/card");
const CreditService = require("../../lib/services/credit");
const Util = require("../../lib/utils/util");
const TEST_SITE_ID = process.env.TEST_GMO_SITE_ID;
const TEST_SITE_PASS = process.env.TEST_GMO_SITE_PASS;
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
                jobCd: Util.JobCd.Auth,
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
        const jobCd = Util.JobCd.Auth;
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
            method: Util.Method.Lump,
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
describe('カード決済 金額変更', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        let changeTranError;
        try {
            // 金額変更
            yield CreditService.changeTran({
                shopId: '********',
                shopPass: '********',
                accessId: '********',
                accessPass: '********',
                jobCd: Util.JobCd.Auth,
                amount: 300
            });
        }
        catch (error) {
            changeTranError = error;
        }
        assert(changeTranError instanceof Error);
    }));
    it('正常 仮-実-仮-実', () => __awaiter(this, void 0, void 0, function* () {
        const orderId = Date.now().toString();
        const shopId = process.env.TEST_GMO_SHOP_ID;
        const shopPass = process.env.TEST_GMO_SHOP_PASS;
        const amount = 1800;
        const changeAmount = 300;
        // 取引作成
        const entryTranResult = yield CreditService.entryTran({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId,
            jobCd: Util.JobCd.Auth,
            amount: amount
        });
        // 決済実行
        yield CreditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: Util.Method.Lump,
            cardNo: '4111111111111111',
            expire: '2012',
            securityCode: '123'
        });
        // 決済変更
        yield CreditService.alterTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JobCd.Sales,
            amount: amount
        });
        // 金額変更
        yield CreditService.changeTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JobCd.Auth,
            amount: changeAmount
        });
        // 決済変更
        yield CreditService.alterTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JobCd.Sales,
            amount: changeAmount
        });
        const searchTradeResult = yield CreditService.searchTrade({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId
        });
        assert.equal(searchTradeResult.status, Util.JobCd.Sales);
        assert.equal(searchTradeResult.orderId, orderId);
        assert.equal(searchTradeResult.amount, changeAmount);
    }));
    it('正常 仮-実-即', () => __awaiter(this, void 0, void 0, function* () {
        const orderId = Date.now().toString();
        const shopId = process.env.TEST_GMO_SHOP_ID;
        const shopPass = process.env.TEST_GMO_SHOP_PASS;
        const amount = 1800;
        const changeAmount = 300;
        // 取引作成
        const entryTranResult = yield CreditService.entryTran({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId,
            jobCd: Util.JobCd.Auth,
            amount: amount
        });
        // 決済実行
        yield CreditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: Util.Method.Lump,
            cardNo: '4111111111111111',
            expire: '2012',
            securityCode: '123'
        });
        // 決済変更
        yield CreditService.alterTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JobCd.Sales,
            amount: amount
        });
        // 金額変更
        yield CreditService.changeTran({
            shopId: shopId,
            shopPass: shopPass,
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: Util.JobCd.Capture,
            amount: changeAmount
        });
        const searchTradeResult = yield CreditService.searchTrade({
            shopId: shopId,
            shopPass: shopPass,
            orderId: orderId
        });
        assert.equal(searchTradeResult.status, Util.JobCd.Capture);
        assert.equal(searchTradeResult.orderId, orderId);
        assert.equal(searchTradeResult.amount, changeAmount);
    }));
});
describe('カード決済 決済実行', () => {
    let TEST_MEMBER_ID;
    let TEST_MEMBER_NAME;
    let TEST_CARD_SEQ;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        TEST_MEMBER_ID = `gmo-service.test.services.credit-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';
        // テスト会員作成
        yield CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
        // テストカード登録
        TEST_CARD_SEQ = yield CardService.saveCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            cardNo: '4111111111111111',
            expire: '2812',
            seqMode: Util.SeqMode.Physics
        }).then((result) => result.cardSeq);
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        // テスト会員削除
        yield CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    }));
    it('会員カードで実行できる', () => __awaiter(this, void 0, void 0, function* () {
        // 取引作成
        const orderId = Date.now().toString();
        const entryTranResult = yield CreditService.entryTran({
            shopId: process.env.TEST_GMO_SHOP_ID,
            shopPass: process.env.TEST_GMO_SHOP_PASS,
            orderId: orderId,
            jobCd: Util.JobCd.Auth,
            amount: 1234
        });
        // 決済実行
        yield CreditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: Util.Method.Lump,
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            seqMode: Util.SeqMode.Physics,
            // tslint:disable-next-line:no-magic-numbers
            cardSeq: parseInt(TEST_CARD_SEQ, 10)
        });
    }));
    it('カード登録連番が存在しなければエラー', () => __awaiter(this, void 0, void 0, function* () {
        // 取引作成
        const orderId = Date.now().toString();
        const entryTranResult = yield CreditService.entryTran({
            shopId: process.env.TEST_GMO_SHOP_ID,
            shopPass: process.env.TEST_GMO_SHOP_PASS,
            orderId: orderId,
            jobCd: Util.JobCd.Auth,
            amount: 1234
        });
        // 決済実行
        const execTranError = yield CreditService.execTran({
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            orderId: orderId,
            method: Util.Method.Lump,
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            seqMode: Util.SeqMode.Physics,
            // tslint:disable-next-line:no-magic-numbers
            cardSeq: parseInt(TEST_CARD_SEQ, 10) + 1
        }).catch((error) => error);
        assert(execTranError instanceof badRequest_1.BadRequestError);
    }));
});
