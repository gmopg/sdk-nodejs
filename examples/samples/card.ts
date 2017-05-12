import * as GMO from '../../lib/index';

/**
 * カード登録・削除サンプル
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
    const saveCardResult = await GMO.CardService.saveCard({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        cardNo: '4111111111111111',
        expire: '2012'
    });
    // カード削除
    await GMO.CardService.deleteCard({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        cardSeq: saveCardResult.cardSeq
    });
}
