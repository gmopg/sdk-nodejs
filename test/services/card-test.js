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
const badRequest_1 = require("../../lib/error/badRequest");
const CardService = require("../../lib/services/card");
const Util = require("../../lib/utils/util");
const TEST_INVALID_SITE_ID = '********';
const TEST_INVALID_SITE_PASS = '********';
const TEST_SITE_ID = process.env.TEST_GMO_SITE_ID;
const TEST_SITE_PASS = process.env.TEST_GMO_SITE_PASS;
describe('会員登録', () => {
    let TEST_MEMBER_ID;
    let TEST_MEMBER_NAME;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';
        // テスト会員作成
        yield CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        // テスト会員削除
        yield CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    }));
    it('サイトIDが不適切なのでGMOエラー', () => __awaiter(this, void 0, void 0, function* () {
        const saveMemberError = yield CardService.saveMember({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: TEST_MEMBER_ID
        }).catch((error) => error);
        assert(saveMemberError instanceof badRequest_1.BadRequestError);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;
        yield CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        // 会員検索して正常に存在していることを確認
        const searchMemberResult = yield CardService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        assert.notEqual(searchMemberResult, null);
        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, memberId);
        // テスト会員削除
        yield CardService.deleteMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
    }));
});
describe('会員更新', () => {
    let TEST_MEMBER_ID;
    let TEST_MEMBER_NAME;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';
        // テスト会員作成
        yield CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        // テスト会員削除
        yield CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    }));
    it('サイトIDが不適切なのでGMOエラー', () => __awaiter(this, void 0, void 0, function* () {
        const updateMemberError = yield CardService.updateMember({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: TEST_MEMBER_ID
        }).catch((error) => error);
        assert(updateMemberError instanceof badRequest_1.BadRequestError);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        const memberNameAfter = 'memberName after';
        // 会員検索して正常に更新できていることを確認
        let searchMemberResult = yield CardService.searchMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
        assert.notEqual(searchMemberResult, null);
        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, TEST_MEMBER_ID);
        assert.equal(searchMemberResult.memberName, TEST_MEMBER_NAME);
        // 更新
        yield CardService.updateMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: memberNameAfter
        });
        // 会員検索して正常に更新できていることを確認
        searchMemberResult = (yield CardService.searchMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        }));
        assert.notEqual(searchMemberResult, null);
        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, TEST_MEMBER_ID);
        assert.equal(searchMemberResult.memberName, memberNameAfter);
    }));
});
describe('会員削除', () => {
    it('サイトIDが不適切なのでGMOエラー', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        const deleteMemberError = yield CardService.deleteMember({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: memberId
        }).catch((error) => error);
        assert(deleteMemberError instanceof badRequest_1.BadRequestError);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;
        yield CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        // 会員の存在を確認
        const searchMemberResultBefore = yield CardService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        assert.notEqual(searchMemberResultBefore, null);
        assert.equal(searchMemberResultBefore.deleteFlag, '0');
        assert.equal(searchMemberResultBefore.memberId, memberId);
        yield CardService.deleteMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        // 会員検索でエラーになることを確認
        const searchMemberResultAfter = yield CardService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        assert.equal(searchMemberResultAfter, null);
    }));
});
describe('会員参照', () => {
    let TEST_MEMBER_ID;
    let TEST_MEMBER_NAME;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';
        // テスト会員作成
        yield CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        // テスト会員削除
        yield CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    }));
    it('サイトIDが不適切なのでGMOエラー', () => __awaiter(this, void 0, void 0, function* () {
        const searchMemberError = yield CardService.searchMember({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: TEST_MEMBER_ID
        }).catch((error) => error);
        assert(searchMemberError instanceof badRequest_1.BadRequestError);
    }));
    it('会員が存在しなければ結果はnull', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = `invalidMemberId-${Date.now().toString()}`;
        const searchMemberResult = yield CardService.searchMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: memberId
        });
        assert.equal(searchMemberResult, null);
    }));
    it('会員が存在する', () => __awaiter(this, void 0, void 0, function* () {
        const searchMemberResult = yield CardService.searchMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
        assert.notEqual(searchMemberResult, null);
        assert.equal(searchMemberResult.memberId, TEST_MEMBER_ID);
    }));
});
describe('カード登録', () => {
    let TEST_MEMBER_ID;
    let TEST_MEMBER_NAME;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';
        // テスト会員作成
        yield CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        // テスト会員削除
        yield CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    }));
    it('サイトIDが不適切なのでGMOエラー', () => __awaiter(this, void 0, void 0, function* () {
        const saveCardError = yield CardService.saveCard({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: '********',
            cardNo: '4111111111111111',
            expire: '2012'
        }).catch((error) => error);
        assert(saveCardError instanceof badRequest_1.BadRequestError);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        // カード登録
        const saveCardResult = yield CardService.saveCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            cardNo: '4111111111111111',
            expire: '2012'
        });
        // カード参照
        const searchCardResults = yield CardService.searchCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            seqMode: Util.SEQ_MODE_LOGIC
        });
        assert.equal(searchCardResults[0].cardNo, saveCardResult.cardNo);
        assert.equal(searchCardResults[0].cardSeq, saveCardResult.cardSeq);
    }));
});
describe('カード削除', () => {
    let TEST_MEMBER_ID;
    let TEST_MEMBER_NAME;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';
        // テスト会員作成
        yield CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        // テスト会員削除
        yield CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    }));
    it('サイトIDが不適切なのでGMOエラー', () => __awaiter(this, void 0, void 0, function* () {
        const saveCardError = yield CardService.deleteCard({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: '********',
            cardSeq: '0'
        }).catch((error) => error);
        assert(saveCardError instanceof badRequest_1.BadRequestError);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        // カード登録
        const saveCardResult = yield CardService.saveCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            cardNo: '4111111111111111',
            expire: '2012'
        });
        // カード削除
        yield CardService.deleteCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            cardSeq: saveCardResult.cardSeq
        });
        // カード参照
        const searchCardResults = yield CardService.searchCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            seqMode: Util.SEQ_MODE_PHYSICS
        });
        assert.equal(searchCardResults[0].cardNo, saveCardResult.cardNo);
        assert.equal(searchCardResults[0].cardSeq, saveCardResult.cardSeq);
        assert.equal(searchCardResults[0].deleteFlag, '1');
    }));
});
describe('カード参照', () => {
    let TEST_MEMBER_ID;
    let TEST_MEMBER_NAME;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';
        // テスト会員作成
        yield CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        // テスト会員削除
        yield CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    }));
    it('サイトIDが不適切なのでGMOエラー', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        const searchCardError = yield CardService.searchCard({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: memberId,
            seqMode: Util.SEQ_MODE_PHYSICS
        }).catch((error) => error);
        assert(searchCardError instanceof badRequest_1.BadRequestError);
    }));
    it('会員が存在しない場合GMOエラー', () => __awaiter(this, void 0, void 0, function* () {
        const searchCardError = yield CardService.searchCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: 'xxx',
            seqMode: Util.SEQ_MODE_PHYSICS
        }).catch((error) => error);
        assert(searchCardError instanceof badRequest_1.BadRequestError);
    }));
    it('会員は存在するがカードがない場合、空配列を返す', () => __awaiter(this, void 0, void 0, function* () {
        const searchCardResults = yield CardService.searchCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            seqMode: Util.SEQ_MODE_PHYSICS
        });
        assert(Array.isArray(searchCardResults));
        assert.equal(searchCardResults.length, 0);
    }));
});
