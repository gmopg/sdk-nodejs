const GMO = require('../../');

/**
 * 会員登録・更新・削除サンプル
 */
const siteId = process.env.TEST_GMO_SITE_ID;
const sitePass = process.env.TEST_GMO_SITE_PASS;
main();

async function main() {
    const memberId = Date.now().toString();
    const cardService = new GMO.service.Card({
        endpoint: process.env.GMO_ENDPOINT
    });
    // 会員登録
    const saveMemberResult = await cardService.saveMember({
        siteId: siteId,
        sitePass: sitePass,
        memberId: memberId,
        memberName: 'test'
    });
    console.log('saveMemberResult:', saveMemberResult);

    // 会員更新
    const updateMemberResult = await cardService.updateMember({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        memberName: 'test2'
    });
    console.log('updateMemberResult:', updateMemberResult);

    // 会員削除
    const deleteMemberResult = await cardService.deleteMember({
        siteId: siteId,
        sitePass: sitePass,
        memberId: updateMemberResult.memberId
    });
    console.log('deleteMemberResult:', deleteMemberResult);
}
