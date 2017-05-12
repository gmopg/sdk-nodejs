/**
 * カードサービステスト
 *
 * @ignore
 */

import * as assert from 'assert';
import * as CardService from '../../lib/services/card';
import * as MemberService from '../../lib/services/member';
import * as Util from '../../lib/utils/util';

describe('カード登録', () => {
    it('失敗', async () => {
        let saveCardError: any;
        try {
            await CardService.saveCard({
                siteId: '********',
                sitePass: '********',
                memberId: '********',
                cardNo: '4111111111111111',
                expire: '2012'
            });
        } catch (error) {
            saveCardError = error;
        }

        assert(saveCardError instanceof Error);
    });

    it('正常', async () => {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;

        // 会員登録
        const saveMemberResult = await MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        // カード登録
        const saveCardResult = await CardService.saveCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            cardNo: '4111111111111111',
            expire: '2012'
        });

        // カード参照
        const searchCardResults = await CardService.searchCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            seqMode: Util.SEQ_MODE_LOGIC
        });

        assert.equal(searchCardResults[0].cardNo, saveCardResult.cardNo);
        assert.equal(searchCardResults[0].cardSeq, saveCardResult.cardSeq);
    });
});

describe('カード削除', () => {
    it('失敗', async () => {
        let saveCardError: any;
        try {
            await CardService.deleteCard({
                siteId: '********',
                sitePass: '********',
                memberId: '********',
                cardSeq: '0'
            });
        } catch (error) {
            saveCardError = error;
        }

        assert(saveCardError instanceof Error);
    });

    it('正常', async () => {
        const memberId = Date.now().toString();
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;

        // 会員登録
        const saveMemberResult = await MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        // カード登録
        const saveCardResult = await CardService.saveCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            cardNo: '4111111111111111',
            expire: '2012'
        });

        // カード削除
        await CardService.deleteCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            cardSeq: saveCardResult.cardSeq
        });

        // カード参照
        const searchCardResults = await CardService.searchCard({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            seqMode: Util.SEQ_MODE_PHYSICS
        });

        assert.equal(searchCardResults[0].cardNo, saveCardResult.cardNo);
        assert.equal(searchCardResults[0].cardSeq, saveCardResult.cardSeq);
        assert.equal(searchCardResults[0].deleteFlag, '1');
    });
});

describe('カード参照', () => {
    it('失敗', async () => {
        const memberId = Date.now().toString();

        let searchCardError: any;
        try {
            await CardService.searchCard({
                siteId: '********',
                sitePass: '********',
                memberId: memberId,
                seqMode: Util.SEQ_MODE_PHYSICS
            });
        } catch (error) {
            searchCardError = error;
        }

        assert(searchCardError instanceof Error);
    });
});
