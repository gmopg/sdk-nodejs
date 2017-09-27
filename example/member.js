const GMO = require('../');

/**
 * 会員登録・更新・削除サンプル
 */
const siteId = 'your siteId';
const sitePass = 'sour sitePass';
// const siteId = process.env.TEST_GMO_SITE_ID;
// const sitePass = process.env.TEST_GMO_SITE_PASS;
main();

async function main() {
    const memberId = Date.now().toString();
    // 会員登録
    const saveMemberResult = await GMO.services.card.saveMember({
        siteId: siteId,
        sitePass: sitePass,
        memberId: memberId,
        memberName: 'test'
    });
    // 会員更新
    const updateMemberResult = await GMO.services.card.updateMember({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        memberName: 'test2'
    });
    // 会員削除
    await GMO.services.card.deleteMember({
        siteId: siteId,
        sitePass: sitePass,
        memberId: updateMemberResult.memberId
    });
}