import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as CardFactory from '../factory/card';
import { Service } from '../service';

const debug = createDebug('gmo-service:service:card');

/**
 * 会員クレジットカードサービス
 */
export class CardService extends Service {

    /**
     * 会員登録
     */
    public async saveMember(args: CardFactory.ISaveMemberArgs): Promise<CardFactory.ISaveMemberResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/SaveMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                MemberName: args.memberName
            }
        });

        return {
            memberId: <string>result.MemberID
        };
    }

    /**
     * 会員更新
     */
    public async updateMember(args: CardFactory.IUpdateMemberArgs): Promise<CardFactory.IUpdateMemberResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/UpdateMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                MemberName: args.memberName
            }
        });

        return {
            memberId: <string>result.MemberID
        };
    }

    /**
     * 会員削除
     */
    public async deleteMember(args: CardFactory.IDeleteMemberArgs): Promise<CardFactory.IDeleteMemberResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/DeleteMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId
            }
        });

        return {
            memberId: <string>result.MemberID
        };
    }

    /**
     * 会員参照
     * 指定されたサイトIDと会員IDの会員が存在しない場合、E01390002エラーが返却されるので注意
     */
    public async searchMember(args: CardFactory.ISearchMemberArgs): Promise<CardFactory.ISearchMemberResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/SearchMember.idPass',
            method: 'POST',
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId
            }
        });

        return {
            memberId: <string>result.MemberID,
            memberName: <string>result.MemberName,
            deleteFlag: <string>result.DeleteFlag
        };
    }

    /**
     * カード登録・更新
     */
    public async saveCard(args: CardFactory.ISaveCardArgs): Promise<CardFactory.ISaveCardResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
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
     */
    public async deleteCard(args: CardFactory.IDeleteCardArgs): Promise<CardFactory.IDeleteCardResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
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

        return {
            cardSeq: <string>result.CardSeq
        };
    }

    /**
     * カード参照
     * 会員は存在してカードが存在しない場合、E01240002エラーが返却されるので注意
     */
    public async searchCard(args: CardFactory.ISearchCardArgs): Promise<CardFactory.ISearchCardResult[]> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
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
