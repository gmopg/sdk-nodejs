const GMO = require('../');

/**
 * カード登録・削除サンプル
 */
const siteId = process.env.TEST_GMO_SITE_ID;
const sitePass = process.env.TEST_GMO_SITE_PASS;
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
    // カード登録
    const saveCardResult = await GMO.services.card.saveCard({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        cardNo: '4111111111111111',
        expire: '2012'
    });
    console.log('saveCardResult:', saveCardResult);

    // カード削除
    const deleteCardResult = await GMO.services.card.deleteCard({
        siteId: siteId,
        sitePass: sitePass,
        memberId: saveMemberResult.memberId,
        cardSeq: saveCardResult.cardSeq
    });
    console.log('deleteCardResult:', deleteCardResult);
}
