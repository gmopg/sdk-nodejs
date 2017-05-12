"use strict";
/**
 * 会員サービステスト
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
const MemberService = require("../../lib/services/member");
describe('会員登録', () => {
    it('失敗', () => __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        let saveMemberError;
        try {
            yield MemberService.saveMember({
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
        const saveMemberResult = yield MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        const searchMemberResult = yield MemberService.searchMember({
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
            yield MemberService.updateMember({
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
        const saveMemberResult = yield MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        const updateMemberResult = yield MemberService.updateMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            memberName: memberName
        });
        const searchMemberResult = yield MemberService.searchMember({
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
            yield MemberService.deleteMember({
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
        const saveMemberResult = yield MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        const deleteMemberResult = yield MemberService.deleteMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId
        });
        try {
            yield MemberService.searchMember({
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
            yield MemberService.searchMember({
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
