import * as createDebug from 'debug';
import * as querystring from 'querystring';
import { BadRequestError } from '../error/badRequest';

import * as CardFactory from '../factory/card';
import { Service } from '../service';

const debug = createDebug('gmo-service:service:card');

/**
 * 会員クレジットカードサービス
 * @class
 */
export class CardService extends Service {

    /**
     * 会員登録
     * @memberof services/member
     * @function saveMember
     * @param {ISaveMemberArgs} args 会員登録in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {string | undefined} args.memberName 会員名
     * @returns {Promise<ISaveMemberResult>} 会員登録out
     */
    public async saveMember(args: CardFactory.ISaveMemberArgs): Promise<CardFactory.ISaveMemberResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/SaveMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                MemberName: args.memberName
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            memberId: <string>result.MemberID
        };
    }

    /**
     * 会員更新
     * @memberof services/member
     * @function updateMember
     * @param {IUpdateMemberArgs} args 会員更新in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {string | undefined} args.memberName 会員名
     * @returns {Promise<IUpdateMemberResult>} 会員更新out
     */
    public async updateMember(args: CardFactory.IUpdateMemberArgs): Promise<CardFactory.IUpdateMemberResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/UpdateMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                MemberName: args.memberName
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            memberId: <string>result.MemberID
        };
    }

    /**
     * 会員削除
     * @memberof services/member
     * @function deleteMember
     * @param {ISaveMemberArgs} args 会員削除in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @returns {Promise<ISaveMemberResult>} 会員削除out
     */
    public async deleteMember(args: CardFactory.IDeleteMemberArgs): Promise<CardFactory.IDeleteMemberResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/DeleteMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            memberId: <string>result.MemberID
        };
    }

    /**
     * 会員参照
     * @memberof services/member
     * @function searchMember
     * @param {ISearchMemberArgs} args 会員参照in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @returns {Promise<ISearchMemberResult>} 会員参照out
     */
    public async searchMember(args: CardFactory.ISearchMemberArgs): Promise<CardFactory.ISearchMemberResult | null> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/SearchMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            const error = new BadRequestError(body);

            // 指定されたサイトIDと会員IDの会員が存在しない場合、nullを返すように、特別扱い
            if (error.errors.length === 1 && error.errors[0].info === 'E01390002') {
                return null;
            }

            throw error;
        }

        return {
            memberId: <string>result.MemberID,
            memberName: <string>result.MemberName,
            deleteFlag: <string>result.DeleteFlag
        };
    }

    /**
     * カード登録・更新
     * @memberof services/card
     * @function saveCard
     * @param {ISaveCardArgs} args カード登録・更新in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {util.SeqMode} args.seqMode カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
     * @param {number} args.cardSeq カード登録連番（登録時は、入力不可です。更新時は、更新する値を設定します。）
     * @param {string} args.defaultFlag 洗替・継続課金フラグ（0:継続課金対象としない(デフォルト)1:継続課金対象とする）
     * @param {string} args.cardName カード会社略称
     * @param {string} args.cardNo カード番号
     * @param {string} args.cardPass カードパスワード
     * @param {string} args.expire 有効期限
     * @param {string} args.holderName 名義人
     * @param {string} args.token トークン
     * @returns {Promise<ISaveCardResult>} カード登録・更新out
     */
    public async saveCard(args: CardFactory.ISaveCardArgs): Promise<CardFactory.ISaveCardResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/SaveCard.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq,
                DefaultFlag: args.defaultFlag,
                CardName: args.cardName,
                CardNo: args.cardNo,
                CardPass: args.cardPass,
                Expire: args.expire,
                HolderName: args.holderName,
                Token: args.token
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            cardSeq: <string>result.CardSeq,
            cardNo: <string>result.CardNo,
            forward: <string>result.Forward
            // brand: result.Brand,
            // domesticFlag: result.DomesticFlag,
            // issuerCode: result.IssuerCode,
            // debitPrepaidFlag: result.DebitPrepaidFlag,
            // debitPrepaidIssuerName: result.DebitPrepaidIssuerName,
            // forwardFinal: result.ForwardFinal
        };
    }

    /**
     * カード削除
     * @memberof services/card
     * @function deleteCard
     * @param {IDeleteCardArgs} args カード削除in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {util.SeqMode} args.seqMode カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
     * @param {string} args.cardSeq カード登録連番
     * @returns {Promise<IDeleteCardResult>} カード削除out
     */
    public async deleteCard(args: CardFactory.IDeleteCardArgs): Promise<CardFactory.IDeleteCardResult> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/DeleteCard.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError(body);
        }

        return {
            cardSeq: <string>result.CardSeq
        };
    }

    /**
     * カード参照
     * @memberof services/card
     * @function searchCard
     * @param {ISearchCardArgs} args カード参照in
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {util.SeqMode} args.seqMode カード登録連番モード（0:論理モード1:物理モード）
     * @param {string} args.cardSeq カード登録連番
     * @returns {Promise<ISearchCardResult[]>} カード参照out
     */
    public async searchCard(args: CardFactory.ISearchCardArgs): Promise<CardFactory.ISearchCardResult[]> {
        debug('requesting...', args);
        const body = await this.request({
            uri: '/payment/SearchCard.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq
            }
        });
        debug('request processed.', body);

        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            const error = new BadRequestError(body);

            // 会員は存在してカードが存在しない場合、空配列を返すように、特別扱い
            if (error.errors.length === 1 && error.errors[0].info === 'E01240002') {
                return [];
            }

            throw error;
        }

        const cardSeqArry: string[] = (<string>result.CardSeq).split('|');
        const defaultFlagArry: string[] = (<string>result.DefaultFlag).split('|');
        const cardNameArry: string[] = (<string>result.CardName).split('|');
        const cardNoArry: string[] = (<string>result.CardNo).split('|');
        const expireArry: string[] = (<string>result.Expire).split('|');
        const holderNameArry: string[] = (<string>result.HolderName).split('|');
        const deleteFlagArry: string[] = (<string>result.DeleteFlag).split('|');

        return cardSeqArry.map((cardSeq, index) => {
            return {
                cardSeq: cardSeq,
                defaultFlag: defaultFlagArry[index],
                cardName: cardNameArry[index],
                cardNo: cardNoArry[index],
                expire: expireArry[index],
                holderName: holderNameArry[index],
                deleteFlag: deleteFlagArry[index]
            };
        });
    }
}
