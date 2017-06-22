/**
 * カードサービステスト
 *
 * @ignore
 */

import * as assert from 'assert';
import * as CardService from '../../lib/services/card';
import * as Util from '../../lib/utils/util';

describe('会員登録', () => {
    it('失敗', async () => {
        const memberId = Date.now().toString();

        let saveMemberError: any;
        try {
            await CardService.saveMember({
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

        const saveMemberResult = await CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });

        const searchMemberResult = await CardService.searchMember({
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
            await CardService.updateMember({
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

        const saveMemberResult = await CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });

        const updateMemberResult = await CardService.updateMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId,
            memberName: memberName
        });

        const searchMemberResult = await CardService.searchMember({
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
            await CardService.deleteMember({
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

        const saveMemberResult = await CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });

        const deleteMemberResult = await CardService.deleteMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId
        });

        try {
            await CardService.searchMember({
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
            await CardService.searchMember({
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
        const saveMemberResult = await CardService.saveMember({
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
        const saveMemberResult = await CardService.saveMember({
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
