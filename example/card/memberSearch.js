const GMO = require('../../');

/**
 * 会員照会サンプル
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
    // 会員照会
    const result = await cardService.searchMember({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId
    });
    console.log(result);
}
