import * as createDebug from 'debug';
import { OK } from 'http-status';

import * as CreditFactory from '../factory/credit';
import { Service } from '../service';
import * as util from '../utils/util';

const debug = createDebug('gmo-service:service:credit');

/**
 * クレジットカード決済サービス
 */
export class CreditService extends Service {
    /**
     * 取引登録
     */
    public async entryTran(args: CreditFactory.IEntryTranArgs & CreditFactory.IOptionalSiteArgs): Promise<CreditFactory.IEntryTranResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/EntryTran.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                OrderID: args.orderId,
                JobCd: args.jobCd,
                Amount: args.amount,
                ... (typeof args.siteId === 'string') ? { SiteID: args.siteId } : undefined,
                ... (typeof args.sitePass === 'string') ? { SitePass: args.sitePass } : undefined
            }
        });

        return {
            accessId: <string>result.AccessID,
            accessPass: <string>result.AccessPass
        };
    }

    /**
     * 決済実行
     */
    public async execTran(args: CreditFactory.IExecTranArgs): Promise<CreditFactory.IExecTranResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/ExecTran.idPass',
            method: 'POST',
            form: {
                AccessID: args.accessId,
                AccessPass: args.accessPass,
                OrderID: args.orderId,
                Method: args.method,
                PayTimes: args.payTimes,
                CardNo: args.cardNo,
                Expire: args.expire,
                SecurityCode: args.securityCode,
                Token: args.token,
                PIN: args.pin,
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq,
                CardPass: args.cardPass,
                ClientField1: args.clientField1,
                ClientField2: args.clientField2,
                ClientField3: args.clientField3
            }
        });

        return {
            acs: <string>result.ACS,
            orderId: <string>result.OrderID,
            forward: <string>result.Forward,
            method: <util.Method>result.Method,
            payTimes: <string>result.PayTimes,
            approve: <string>result.Approve,
            tranId: <string>result.TranID,
            tranDate: <string>result.TranDate,
            checkString: <string>result.CheckString,
            clientField1: <string>result.ClientField1,
            clientField2: <string>result.ClientField2,
            clientField3: <string>result.ClientField3
        };
    }

    /**
     * 決済変更
     */
    public async alterTran(args: CreditFactory.IAlterTranArgs & CreditFactory.IOptionalSiteArgs): Promise<CreditFactory.IAlterTranResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/AlterTran.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                AccessID: args.accessId,
                AccessPass: args.accessPass,
                JobCd: args.jobCd,
                Amount: args.amount,
                Method: args.method,
                ... (typeof args.siteId === 'string') ? { SiteID: args.siteId } : undefined,
                ... (typeof args.sitePass === 'string') ? { SitePass: args.sitePass } : undefined
            }
        });

        return {
            accessId: <string>result.AccessID,
            accessPass: <string>result.AccessPass,
            forward: <string>result.Forward,
            approve: <string>result.Approve,
            tranId: <string>result.TranID,
            tranDate: <string>result.TranDate
        };
    }

    /**
     * 取引状態参照
     */
    public async searchTrade(
        args: CreditFactory.ISearchTradeArgs & CreditFactory.IOptionalSiteArgs
    ): Promise<CreditFactory.ISearchTradeResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/SearchTrade.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                OrderID: args.orderId,
                ... (typeof args.siteId === 'string') ? { SiteID: args.siteId } : undefined,
                ... (typeof args.sitePass === 'string') ? { SitePass: args.sitePass } : undefined
            }
        });

        return {
            orderId: <string>result.OrderID,
            status: <string>result.Status,
            processDate: <string>result.ProcessDate,
            jobCd: <util.JobCd>result.JobCd,
            accessId: <string>result.AccessID,
            accessPass: <string>result.AccessPass,
            itemCode: <string>result.ItemCode,
            amount: <string>result.Amount,
            tax: <string>result.Tax,
            siteId: <string>result.SiteID,
            memberId: <string>result.MemberID,
            cardNo: <string>result.CardNo,
            expire: <string>result.Expire,
            method: <util.Method>result.Method,
            payTimes: <string>result.PayTimes,
            forward: <string>result.Forward,
            tranId: <string>result.TranID,
            approve: <string>result.Approve,
            clientField1: <string>result.ClientField1,
            clientField2: <string>result.ClientField2,
            clientField3: <string>result.ClientField3,
            errCode: <string>result.ErrCode,
            errInfo: <string>result.ErrInfo
        };
    }

    /**
     * 金額変更
     */
    public async changeTran(
        args: CreditFactory.IChangeTranArgs & CreditFactory.IOptionalSiteArgs
    ): Promise<CreditFactory.IChangeTranResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/ChangeTran.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                AccessID: args.accessId,
                AccessPass: args.accessPass,
                JobCd: args.jobCd,
                Amount: args.amount,
                Tax: args.tax,
                ... (typeof args.siteId === 'string') ? { SiteID: args.siteId } : undefined,
                ... (typeof args.sitePass === 'string') ? { SitePass: args.sitePass } : undefined
            }
        });

        return {
            accessId: <string>result.AccessID,
            accessPass: <string>result.AccessPass,
            forward: <string>result.Forward,
            approve: <string>result.Approve,
            tranId: <string>result.TranID,
            tranDate: <string>result.TranDate
        };
    }

    /**
     * カード属性照会
     */
    public async searchCardDetail(args: CreditFactory.ISearchCardDetailArgs): Promise<CreditFactory.ISearchCardDetailResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/SearchCardDetail.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                Token: (<CreditFactory.ISearchCardDetailByTokenArgs>args).token,
                SearchType: args.searchType,
                CardNo: (<CreditFactory.ISearchCardDetailByCardNoArgs>args).cardNo,
                OrderID: (<CreditFactory.ISearchCardDetailByOrderIdArgs>args).orderId,
                SiteID: (<CreditFactory.ISearchCardDetailByMemberIdArgs>args).siteId,
                SitePass: (<CreditFactory.ISearchCardDetailByMemberIdArgs>args).sitePass,
                MemberID: (<CreditFactory.ISearchCardDetailByMemberIdArgs>args).memberId,
                SeqMode: (<CreditFactory.ISearchCardDetailByMemberIdArgs>args).seqMode,
                CardSeq: (<CreditFactory.ISearchCardDetailByMemberIdArgs>args).cardSeq
            }
        });

        return {
            cardNo: result.CardNo,
            brand: result.Brand,
            domesticFlag: result.DomesticFlag,
            issuerCode: result.IssuerCode,
            debitPrepaidFlag: result.DebitPrepaidFlag,
            debitPrepaidIssuerName: result.DebitPrepaidIssuerName,
            forwardFinal: result.ForwardFinal,
            info1: result.Info1,
            info2: result.Info2,
            info3: result.Info3,
            info4: result.Info4,
            info5: result.Info5
        };
    }
}
