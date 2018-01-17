const GMO = require('../../');

/**
 * カード参照サンプル
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
    // カード登録
    await cardService.saveCard({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        cardNo: '4111111111111111',
        expire: '2012'
    });

    // カード参照
    const searchCardResults = await cardService.searchCard({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        seqMode: GMO.utils.util.SeqMode.Logic
    });
    console.log(searchCardResults);
}
