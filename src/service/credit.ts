import * as createDebug from 'debug';

import * as CreditFactory from '../factory/credit';
import { Service } from '../service';
import * as util from '../utils/util';

const debug = createDebug('gmo-service:service:credit');

/**
 * クレジットカード決済サービス
 * @class
 */
export class CreditService extends Service {
    /**
     * 取引登録
     * @memberOf services/credit
     * @function entryTran
     * @param {IEntryTranArgs} args 取引登録in
     * @param {string} args.shopId
     * @param {string} args.shopPass
     * @param {string} args.orderId
     * @param {util.JobCd} args.jobCd
     * @param {string} args.amount
     * @returns {Promise<IEntryTranResult>} 取引登録out
     */
    public async entryTran(args: CreditFactory.IEntryTranArgs): Promise<CreditFactory.IEntryTranResult> {
        debug('requesting...', args);
        const result = await this.request({
            uri: '/payment/EntryTran.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                OrderID: args.orderId,
                JobCd: args.jobCd,
                Amount: args.amount
            }
        });

        return {
            accessId: <string>result.AccessID,
            accessPass: <string>result.AccessPass
        };
    }

    /**
     * 決済実行
     * @memberOf services/credit
     * @function execTran
     * @param {IExecTranArgs} args 決済実行in
     * @param {string} args.accessId 取引ID
     * @param {string} args.accessPass 取引パスワード
     * @param {string} args.orderId オーダーID
     * @param {util.Method} args.method 支払方法
     * @param {number} args.payTimes 支払回数
     * @param {string} args.cardNo カード番号
     * @param {string} args.expire 有効期限
     * @param {string} args.securityCode セキュリティーコード
     * @param {string} args.token カード情報トークン
     * @param {string} args.pin 暗証番号
     * @param {string} args.siteId サイトID
     * @param {string} args.sitePass サイトパスワード
     * @param {string} args.memberId 会員ID
     * @param {util.SeqMode} args.seqMode カード登録連番モード
     * @param {number} args.cardSeq カード登録連番
     * @param {string} args.cardPass カードパスワード
     * @param {string} args.clientField1 加盟店自由項目1
     * @param {string} args.clientField2 加盟店自由項目2
     * @param {string} args.clientField3 加盟店自由項目3
     * @returns {Promise<IExecTranResult>} 決済実行out
     */
    public async execTran(args: CreditFactory.IExecTranArgs): Promise<CreditFactory.IExecTranResult> {
        debug('requesting...', args);
        const result = await this.request({
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
     * @memberOf services/credit
     * @function alterTran
     * @param {IAlterTranArgs} args 決済変更in
     * @param {string} args.shopId
     * @param {string} args.shopPass
     * @param {string} args.accessId
     * @param {string} args.accessPass
     * @param {util.JobCd} args.jobCd
     * @param {number} args.amount
     * @param {util.Method} args.method
     * @returns {Promise<IAlterTranResult>} 決済変更out
     */
    public async alterTran(args: CreditFactory.IAlterTranArgs): Promise<CreditFactory.IAlterTranResult> {
        debug('requesting...', args);
        const result = await this.request({
            uri: '/payment/AlterTran.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                AccessID: args.accessId,
                AccessPass: args.accessPass,
                JobCd: args.jobCd,
                Amount: args.amount,
                Method: args.method
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
     * @memberOf services/credit
     * @function searchTrade
     * @param {ISearchTradeArgs} args 取引状態参照in
     * @param {string} args.shopId
     * @param {string} args.shopPass
     * @param {string} args.orderID
     * @returns {Promise<ISearchTradeResult>} 取引状態参照out
     */
    public async searchTrade(args: CreditFactory.ISearchTradeArgs): Promise<CreditFactory.ISearchTradeResult> {
        debug('requesting...', args);
        const result = await this.request({
            uri: '/payment/SearchTrade.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                OrderID: args.orderId
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
     * @memberof services/credit
     * @function changeTran
     * @param {IChangeTranArgs} args 決済変更in
     * @param {string} args.shopId ショップID
     * @param {string} args.shopPass ショップパスワード
     * @param {string} args.accessId 取引ID
     * @param {string} args.accessPass 取引パスワード
     * @param {util.JobCd} args.jobCd 処理区分
     * @param {number} args.amount 利用金額
     * @param {string} args.tax 税送料
     * @returns {Promise<IChangeTranResult>} 金額変更out
     */
    public async changeTran(args: CreditFactory.IChangeTranArgs): Promise<CreditFactory.IChangeTranResult> {
        debug('requesting...', args);
        const result = await this.request({
            uri: '/payment/ChangeTran.idPass',
            method: 'POST',
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                AccessID: args.accessId,
                AccessPass: args.accessPass,
                JobCd: args.jobCd,
                Amount: args.amount,
                Tax: args.tax
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
}
