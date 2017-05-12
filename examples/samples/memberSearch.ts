import * as GMO from '../../lib/index';

/**
 * 会員照会サンプル
 */
const siteId = 'your siteId';
const sitePass = 'sour sitePass';
// const siteId = process.env.TEST_GMO_SITE_ID;
// const sitePass = process.env.TEST_GMO_SITE_PASS;
main();

async function main() {
    const memberId = Date.now().toString();
    // 会員登録
    const saveMemberResult = await GMO.MemberService.saveMember({
        siteId: siteId,
        sitePass: sitePass,
        memberId: memberId,
        memberName: 'test'
    });
    // 会員照会
    const result = await GMO.MemberService.searchMember({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId
    });
    // tslint:disable-next-line:no-console
    console.log(result);
}
