/**
 * カードサービステスト
 *
 * @ignore
 */

import * as assert from 'assert';
import { BadRequestError } from '../../lib/error/badRequest';
import * as CardService from '../../lib/services/card';
import * as Util from '../../lib/utils/util';

const TEST_INVALID_SITE_ID = '********';
const TEST_INVALID_SITE_PASS = '********';
const TEST_SITE_ID = process.env.TEST_GMO_SITE_ID;
const TEST_SITE_PASS = process.env.TEST_GMO_SITE_PASS;

describe('会員登録', () => {
    let TEST_MEMBER_ID: string;
    let TEST_MEMBER_NAME: string;
    beforeEach(async () => {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';

        // テスト会員作成
        await CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    });

    afterEach(async () => {
        // テスト会員削除
        await CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    });

    it('サイトIDが不適切なのでGMOエラー', async () => {
        const saveMemberError = await CardService.saveMember({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: TEST_MEMBER_ID
        }).catch((error) => error);

        assert(saveMemberError instanceof BadRequestError);
    });

    it('正常', async () => {
        const memberId = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;

        await CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });

        // 会員検索して正常に存在していることを確認
        const searchMemberResult = <CardService.ISearchMemberResult>await CardService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        assert.notEqual(searchMemberResult, null);
        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, memberId);

        // テスト会員削除
        await CardService.deleteMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
    });
});

describe('会員更新', () => {
    let TEST_MEMBER_ID: string;
    let TEST_MEMBER_NAME: string;
    beforeEach(async () => {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';

        // テスト会員作成
        await CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    });

    afterEach(async () => {
        // テスト会員削除
        await CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    });

    it('サイトIDが不適切なのでGMOエラー', async () => {
        const updateMemberError = await CardService.updateMember({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: TEST_MEMBER_ID
        }).catch((error) => error);

        assert(updateMemberError instanceof BadRequestError);
    });

    it('正常', async () => {
        const memberNameAfter = 'memberName after';

        // 会員検索して正常に更新できていることを確認
        let searchMemberResult = <CardService.ISearchMemberResult>await CardService.searchMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
        assert.notEqual(searchMemberResult, null);
        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, TEST_MEMBER_ID);
        assert.equal(searchMemberResult.memberName, TEST_MEMBER_NAME);

        // 更新
        await CardService.updateMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: memberNameAfter
        });

        // 会員検索して正常に更新できていることを確認
        searchMemberResult = <CardService.ISearchMemberResult>await CardService.searchMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
        assert.notEqual(searchMemberResult, null);
        assert.equal(searchMemberResult.deleteFlag, '0');
        assert.equal(searchMemberResult.memberId, TEST_MEMBER_ID);
        assert.equal(searchMemberResult.memberName, memberNameAfter);
    });
});

describe('会員削除', () => {
    it('サイトIDが不適切なのでGMOエラー', async () => {
        const memberId = Date.now().toString();

        const deleteMemberError = await CardService.deleteMember({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: memberId
        }).catch((error) => error);

        assert(deleteMemberError instanceof BadRequestError);
    });

    it('正常', async () => {
        const memberId = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        const siteId = process.env.TEST_GMO_SITE_ID;
        const sitePass = process.env.TEST_GMO_SITE_PASS;

        await CardService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });

        // 会員の存在を確認
        const searchMemberResultBefore = <CardService.ISearchMemberResult>await CardService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        assert.notEqual(searchMemberResultBefore, null);
        assert.equal(searchMemberResultBefore.deleteFlag, '0');
        assert.equal(searchMemberResultBefore.memberId, memberId);

        await CardService.deleteMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });

        // 会員検索でエラーになることを確認
        const searchMemberResultAfter = await CardService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId
        });
        assert.equal(searchMemberResultAfter, null);
    });
});

describe('会員参照', () => {
    let TEST_MEMBER_ID: string;
    let TEST_MEMBER_NAME: string;
    beforeEach(async () => {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';

        // テスト会員作成
        await CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    });

    afterEach(async () => {
        // テスト会員削除
        await CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    });

    it('サイトIDが不適切なのでGMOエラー', async () => {
        const searchMemberError = await CardService.searchMember({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: TEST_MEMBER_ID
        }).catch((error) => error);

        assert(searchMemberError instanceof BadRequestError);
    });

    it('会員が存在しなければ結果はnull', async () => {
        const memberId = `invalidMemberId-${Date.now().toString()}`;

        const searchMemberResult = await CardService.searchMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: memberId
        });

        assert.equal(searchMemberResult, null);
    });

    it('会員が存在する', async () => {
        const searchMemberResult = <CardService.ISearchMemberResult>await CardService.searchMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });

        assert.notEqual(searchMemberResult, null);
        assert.equal(searchMemberResult.memberId, TEST_MEMBER_ID);
    });
});

describe('カード登録', () => {
    let TEST_MEMBER_ID: string;
    let TEST_MEMBER_NAME: string;
    beforeEach(async () => {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';

        // テスト会員作成
        await CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    });

    afterEach(async () => {
        // テスト会員削除
        await CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    });

    it('サイトIDが不適切なのでGMOエラー', async () => {
        const saveCardError = await CardService.saveCard({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: '********',
            cardNo: '4111111111111111',
            expire: '2012'
        }).catch((error) => error);

        assert(saveCardError instanceof BadRequestError);
    });

    it('正常', async () => {
        // カード登録
        const saveCardResult = await CardService.saveCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            cardNo: '4111111111111111',
            expire: '2012'
        });

        // カード参照
        const searchCardResults = await CardService.searchCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            seqMode: Util.SEQ_MODE_LOGIC
        });

        assert.equal(searchCardResults[0].cardNo, saveCardResult.cardNo);
        assert.equal(searchCardResults[0].cardSeq, saveCardResult.cardSeq);
    });
});

describe('カード削除', () => {
    let TEST_MEMBER_ID: string;
    let TEST_MEMBER_NAME: string;
    beforeEach(async () => {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';

        // テスト会員作成
        await CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    });

    afterEach(async () => {
        // テスト会員削除
        await CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    });

    it('サイトIDが不適切なのでGMOエラー', async () => {
        const saveCardError = await CardService.deleteCard({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: '********',
            cardSeq: '0'
        }).catch((error) => error);

        assert(saveCardError instanceof BadRequestError);
    });

    it('正常', async () => {
        // カード登録
        const saveCardResult = await CardService.saveCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            cardNo: '4111111111111111',
            expire: '2012'
        });

        // カード削除
        await CardService.deleteCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            cardSeq: saveCardResult.cardSeq
        });

        // カード参照
        const searchCardResults = await CardService.searchCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            seqMode: Util.SEQ_MODE_PHYSICS
        });

        assert.equal(searchCardResults[0].cardNo, saveCardResult.cardNo);
        assert.equal(searchCardResults[0].cardSeq, saveCardResult.cardSeq);
        assert.equal(searchCardResults[0].deleteFlag, '1');
    });
});

describe('カード参照', () => {
    let TEST_MEMBER_ID: string;
    let TEST_MEMBER_NAME: string;
    beforeEach(async () => {
        TEST_MEMBER_ID = `gmo-service.test.services.card-test.${Date.now().toString()}`;
        TEST_MEMBER_NAME = 'test member name';

        // テスト会員作成
        await CardService.saveMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            memberName: TEST_MEMBER_NAME
        });
    });

    afterEach(async () => {
        // テスト会員削除
        await CardService.deleteMember({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID
        });
    });

    it('サイトIDが不適切なのでGMOエラー', async () => {
        const memberId = Date.now().toString();

        const searchCardError = await CardService.searchCard({
            siteId: TEST_INVALID_SITE_ID,
            sitePass: TEST_INVALID_SITE_PASS,
            memberId: memberId,
            seqMode: Util.SEQ_MODE_PHYSICS
        }).catch((error) => error);

        assert(searchCardError instanceof BadRequestError);
    });

    it('会員が存在しない場合GMOエラー', async () => {
        const searchCardError = await CardService.searchCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: 'xxx',
            seqMode: Util.SEQ_MODE_PHYSICS
        }).catch((error) => error);

        assert(searchCardError instanceof BadRequestError);
    });

    it('会員は存在するがカードがない場合、空配列を返す', async () => {
        const searchCardResults = await CardService.searchCard({
            siteId: TEST_SITE_ID,
            sitePass: TEST_SITE_PASS,
            memberId: TEST_MEMBER_ID,
            seqMode: Util.SEQ_MODE_PHYSICS
        });

        assert(Array.isArray(searchCardResults));
        assert.equal(searchCardResults.length, 0);
    });
});
