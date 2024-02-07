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
                ... (typeof args.sitePass === 'string') ? { SitePass: args.sitePass } : undefined,
                ... (typeof args.tdFlag === 'string') ? { TdFlag: args.tdFlag } : undefined,
                ... (typeof args.tdTenantName === 'string') ? { TdTenantName: args.tdTenantName } : undefined,
                ... (typeof args.tds2Type === 'string') ? { Tds2Type: args.tds2Type } : undefined
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
    // tslint:disable-next-line:cyclomatic-complexity
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
                ...(typeof args.payTimes === 'number') ? { PayTimes: args.payTimes } : undefined,
                ...(typeof args.method === 'string') ? { Method: args.method } : undefined,
                ...(typeof args.cardNo === 'string') ? { CardNo: args.cardNo } : undefined,
                ...(typeof args.expire === 'string') ? { Expire: args.expire } : undefined,
                ...(typeof args.securityCode === 'string') ? { SecurityCode: args.securityCode } : undefined,
                ...(typeof args.token === 'string') ? { Token: args.token } : undefined,
                ...(typeof args.pin === 'string') ? { PIN: args.pin } : undefined,
                ...(typeof args.siteId === 'string') ? { SiteID: args.siteId } : undefined,
                ...(typeof args.sitePass === 'string') ? { SitePass: args.sitePass } : undefined,
                ...(typeof args.memberId === 'string') ? { MemberID: args.memberId } : undefined,
                ...(typeof args.seqMode === 'string') ? { SeqMode: args.seqMode } : undefined,
                ...(typeof args.cardSeq === 'number') ? { CardSeq: args.cardSeq } : undefined,
                ...(typeof args.cardPass === 'string') ? { CardPass: args.cardPass } : undefined,
                ...(typeof args.clientField1 === 'string') ? { ClientField1: args.clientField1 } : undefined,
                ...(typeof args.clientField2 === 'string') ? { ClientField2: args.clientField2 } : undefined,
                ...(typeof args.clientField3 === 'string') ? { ClientField3: args.clientField3 } : undefined
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
            ...(typeof result.ClientField1 === 'string') ? { clientField1: result.ClientField1 } : undefined,
            ...(typeof result.ClientField2 === 'string') ? { clientField2: result.ClientField2 } : undefined,
            ...(typeof result.ClientField3 === 'string') ? { clientField3: result.ClientField3 } : undefined,
            ...(typeof result.ACSUrl === 'string') ? { acsUrl: result.ACSUrl } : undefined
        };
    }

    /**
     * 決済実行(3DS2.0)
     */
    // tslint:disable-next-line:cyclomatic-complexity
    public async execTran3ds(args: CreditFactory.IExecTran3dsArgs): Promise<CreditFactory.IExecTran3dsResult> {
        debug('requesting...', args);
        const result = await this.request({
            expectedStatusCodes: [OK],
            expectedResponseParams: ['ACS', 'RedirectUrl'],
            uri: '/payment/ExecTran.idPass',
            method: 'POST',
            form: {
                AccessID: args.accessId,
                AccessPass: args.accessPass,
                OrderID: args.orderId,
                ...(typeof args.payTimes === 'number') ? { PayTimes: args.payTimes } : undefined,
                ...(typeof args.method === 'string') ? { Method: args.method } : undefined,
                ...(typeof args.cardNo === 'string') ? { CardNo: args.cardNo } : undefined,
                ...(typeof args.expire === 'string') ? { Expire: args.expire } : undefined,
                ...(typeof args.securityCode === 'string') ? { SecurityCode: args.securityCode } : undefined,
                ...(typeof args.token === 'string') ? { Token: args.token } : undefined,
                ...(typeof args.pin === 'string') ? { PIN: args.pin } : undefined,
                ...(typeof args.siteId === 'string') ? { SiteID: args.siteId } : undefined,
                ...(typeof args.sitePass === 'string') ? { SitePass: args.sitePass } : undefined,
                ...(typeof args.memberId === 'string') ? { MemberID: args.memberId } : undefined,
                ...(typeof args.seqMode === 'string') ? { SeqMode: args.seqMode } : undefined,
                ...(typeof args.cardSeq === 'number') ? { CardSeq: args.cardSeq } : undefined,
                ...(typeof args.cardPass === 'string') ? { CardPass: args.cardPass } : undefined,
                ...(typeof args.clientField1 === 'string') ? { ClientField1: args.clientField1 } : undefined,
                ...(typeof args.clientField2 === 'string') ? { ClientField2: args.clientField2 } : undefined,
                ...(typeof args.clientField3 === 'string') ? { ClientField3: args.clientField3 } : undefined,
                ...(typeof args.retUrl === 'string') ? { RetUrl: args.retUrl } : undefined,
                ...(typeof args.callbackType === 'string') ? { CallbackType: args.callbackType } : undefined
            }
        });

        return {
            acs: result.ACS,
            ...(typeof result.RedirectUrl === 'string') ? { redirectUrl: result.RedirectUrl } : undefined
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
                ... (typeof args.amount === 'number') ? { Amount: args.amount } : undefined,
                ... (typeof args.method === 'string') ? { Method: args.method } : undefined,
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
            ...(typeof result.ErrCode === 'string') ? { errCode: result.ErrCode } : undefined,
            ...(typeof result.ErrInfo === 'string') ? { errInfo: result.ErrInfo } : undefined,
            ...(typeof result.ClientField1 === 'string') ? { clientField1: result.ClientField1 } : undefined,
            ...(typeof result.ClientField2 === 'string') ? { clientField2: result.ClientField2 } : undefined,
            ...(typeof result.ClientField3 === 'string') ? { clientField3: result.ClientField3 } : undefined
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
                ... (typeof args.tax === 'string') ? { Tax: args.tax } : undefined,
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
        const { token } = <CreditFactory.ISearchCardDetailByTokenArgs>args;
        const { orderId } = <CreditFactory.ISearchCardDetailByOrderIdArgs>args;
        const { cardNo } = <CreditFactory.ISearchCardDetailByCardNoArgs>args;
        const { siteId, sitePass, memberId, seqMode, cardSeq } = <CreditFactory.ISearchCardDetailByMemberIdArgs>args;

        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/SearchCardDetail.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                ...(typeof args.searchType === 'string') ? { SearchType: args.searchType } : undefined,
                ...(typeof token === 'string') ? { Token: token } : undefined,
                ...(typeof orderId === 'string') ? { OrderID: orderId } : undefined,
                ...(typeof cardNo === 'string') ? { CardNo: cardNo } : undefined,
                ...(typeof siteId === 'string') ? { SiteID: siteId } : undefined,
                ...(typeof sitePass === 'string') ? { SitePass: sitePass } : undefined,
                ...(typeof memberId === 'string') ? { MemberID: memberId } : undefined,
                ...(typeof seqMode === 'string') ? { SeqMode: seqMode } : undefined,
                ...(typeof cardSeq === 'number') ? { CardSeq: cardSeq } : undefined
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

    /**
     * 3DS2.0認証後決済実行
     */
    public async secureTran2(args: CreditFactory.ISecureTran2Args): Promise<CreditFactory.ISecureTran2Result> {
        debug('requesting...', args);
        const { accessId, accessPass } = args;
        const result = await this.request({
            expectedStatusCodes: [OK],
            uri: '/payment/SecureTran2.idPass',
            method: 'POST',
            form: {
                AccessID: accessId,
                AccessPass: accessPass
            }
        });

        return {
            orderID: result.OrderID,
            forward: result.Forward,
            method: result.Method,
            payTimes: result.PayTimes,
            approve: result.Approve,
            tranID: result.TranID,
            tranDate: result.TranDate,
            checkString: result.CheckString,
            ...(typeof result.ClientField1 === 'string') ? { clientField1: result.ClientField1 } : undefined,
            ...(typeof result.ClientField2 === 'string') ? { clientField2: result.ClientField2 } : undefined,
            ...(typeof result.ClientField3 === 'string') ? { clientField3: result.ClientField3 } : undefined
        };
    }
}
