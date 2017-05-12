"use strict";
/**
 * カードサービステスト
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
const CardService = require("../../lib/services/card");
const MemberService = require("../../lib/services/member");
const Util = require("../../lib/utils/util");
describe('カード登録', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        let saveCardError;
        try {
            yield CardService.saveCard({
                siteId: '********',
                sitePass: '********',
                memberId: '********',
                cardNo: '4111111111111111',
                expire: '2012'
            });
        }
        catch (error) {
            saveCardError = error;
        }
        assert(saveCardError instanceof Error);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;
        // 会員登録
        const saveMemberResult = yield MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        // カード登録
        const saveCardResult = yield CardService.saveCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            cardNo: '4111111111111111',
            expire: '2012'
        });
        // カード参照
        const searchCardResults = yield CardService.searchCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            seqMode: Util.SEQ_MODE_LOGIC
        });
        assert.equal(searchCardResults[0].cardNo, saveCardResult.cardNo);
        assert.equal(searchCardResults[0].cardSeq, saveCardResult.cardSeq);
    }));
});
describe('カード削除', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        let saveCardError;
        try {
            yield CardService.deleteCard({
                siteId: '********',
                sitePass: '********',
                memberId: '********',
                cardSeq: '0'
            });
        }
        catch (error) {
            saveCardError = error;
        }
        assert(saveCardError instanceof Error);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;
        // 会員登録
        const saveMemberResult = yield MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        // カード登録
        const saveCardResult = yield CardService.saveCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            cardNo: '4111111111111111',
            expire: '2012'
        });
        // カード削除
        yield CardService.deleteCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            cardSeq: saveCardResult.cardSeq
        });
        // カード参照
        const searchCardResults = yield CardService.searchCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            seqMode: Util.SEQ_MODE_PHYSICS
        });
        assert.equal(searchCardResults[0].cardNo, saveCardResult.cardNo);
        assert.equal(searchCardResults[0].cardSeq, saveCardResult.cardSeq);
        assert.equal(searchCardResults[0].deleteFlag, '1');
    }));
});
describe('カード参照', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        let searchCardError;
        try {
            yield CardService.searchCard({
                siteId: '********',
                sitePass: '********',
                memberId: memberId,
                seqMode: Util.SEQ_MODE_PHYSICS
            });
        }
        catch (error) {
            searchCardError = error;
        }
        assert(searchCardError instanceof Error);
    }));
});
