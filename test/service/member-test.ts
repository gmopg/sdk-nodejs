/**
 * 会員サービステスト
 *
 * @ignore
 */

import * as assert from 'assert';
import * as MemberService from '../../lib/services/member';

describe('会員登録', () => {
    it('失敗', async () => {
        const memberId = Date.now().toString();

        let saveMemberError: any;
        try {
            await MemberService.saveMember({
                siteId: '********',
                sitePass: '********',
                memberId: memberId
            });
        } catch (error) {
            saveMemberError = error;
        }

        assert(saveMemberError instanceof Error);
    });

    it('正常', async () => {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;

        const saveMemberResult = await MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });

        const searchMemberResult = await MemberService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId
        });

        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, memberId);
    });
});

describe('会員更新', () => {
    it('失敗', async () => {
        const memberId = Date.now().toString();

        let updateMemberError: any;
        try {
            await MemberService.updateMember({
                siteId: '********',
                sitePass: '********',
                memberId: memberId
            });
        } catch (error) {
            updateMemberError = error;
        }

        assert(updateMemberError instanceof Error);
    });

    it('正常', async () => {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;
        const memberName = 'TEST';

        const saveMemberResult = await MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });

        const updateMemberResult = await MemberService.updateMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            memberName: memberName
        });

        const searchMemberResult = await MemberService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: updateMemberResult.memberId
        });

        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, memberId);
        assert.equal(searchMemberResult.memberName, memberName);
    });
});

describe('会員削除', () => {
    it('失敗', async () => {
        const memberId = Date.now().toString();

        let deleteMemberError: any;
        try {
            await MemberService.deleteMember({
                siteId: '********',
                sitePass: '********',
                memberId: memberId
            });
        } catch (error) {
            deleteMemberError = error;
        }

        assert(deleteMemberError instanceof Error);
    });

    it('正常', async () => {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;
        let searchMemberError: any;

        const saveMemberResult = await MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });

        const deleteMemberResult = await MemberService.deleteMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId
        });

        try {
            await MemberService.searchMember({
                siteId: siteId,
                sitePass: sitePass,
                memberId: deleteMemberResult.memberId
            });
        } catch (error) {
            searchMemberError = error;
        }

        assert(searchMemberError instanceof Error);
    });
});

describe('会員参照', () => {
    it('失敗', async () => {
        const memberId = Date.now().toString();

        let searchMemberError: any;
        try {
            await MemberService.searchMember({
                siteId: '********',
                sitePass: '********',
                memberId: memberId
            });
        } catch (error) {
            searchMemberError = error;
        }

        assert(searchMemberError instanceof Error);
    });
});
