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
const Util = require("../../lib/utils/util");
describe('会員登録', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        let saveMemberError;
        try {
            yield CardService.saveMember({
                siteId: '********',
                sitePass: '********',
                memberId: memberId
            });
        }
        catch (error) {
            saveMemberError = error;
        }
        assert(saveMemberError instanceof Error);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;
        const saveMemberResult = yield CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        const searchMemberResult = yield CardService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId
        });
        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, memberId);
    }));
});
describe('会員更新', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        let updateMemberError;
        try {
            yield CardService.updateMember({
                siteId: '********',
                sitePass: '********',
                memberId: memberId
            });
        }
        catch (error) {
            updateMemberError = error;
        }
        assert(updateMemberError instanceof Error);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;
        const memberName = 'TEST';
        const saveMemberResult = yield CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        const updateMemberResult = yield CardService.updateMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            memberName: memberName
        });
        const searchMemberResult = yield CardService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: updateMemberResult.memberId
        });
        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, memberId);
        assert.equal(searchMemberResult.memberName, memberName);
    }));
});
describe('会員削除', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        let deleteMemberError;
        try {
            yield CardService.deleteMember({
                siteId: '********',
                sitePass: '********',
                memberId: memberId
            });
        }
        catch (error) {
            deleteMemberError = error;
        }
        assert(deleteMemberError instanceof Error);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;
        let searchMemberError;
        const saveMemberResult = yield CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        const deleteMemberResult = yield CardService.deleteMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId
        });
        try {
            yield CardService.searchMember({
                siteId: siteId,
                sitePass: sitePass,
                memberId: deleteMemberResult.memberId
            });
        }
        catch (error) {
            searchMemberError = error;
        }
        assert(searchMemberError instanceof Error);
    }));
});
describe('会員参照', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        let searchMemberError;
        try {
            yield CardService.searchMember({
                siteId: '********',
                sitePass: '********',
                memberId: memberId
            });
        }
        catch (error) {
            searchMemberError = error;
        }
        assert(searchMemberError instanceof Error);
    }));
});
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
        const saveMemberResult = yield CardService.saveMember({
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
        const saveMemberResult = yield CardService.saveMember({
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
