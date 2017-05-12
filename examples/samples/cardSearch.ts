import * as GMO from '../../lib/index';

/**
 * カード参照サンプル
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
    // カード登録
    await GMO.CardService.saveCard({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        cardNo: '4111111111111111',
        expire: '2012'
    });

    // カード参照
    const searchCardResults = await GMO.CardService.searchCard({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        seqMode: GMO.Util.SEQ_MODE_LOGIC
    });
    // tslint:disable-next-line:no-console
    console.log(searchCardResults);
}
