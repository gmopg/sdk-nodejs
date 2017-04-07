/**
 * GMO　クレジット
 * @namespace services/credit
 */

import * as createDebug from 'debug';
import * as querystring from 'querystring';
import * as request from 'request-promise-native';

const debug = createDebug('gmo-service:credit');

/**
 * 取引登録in
 * @memberOf services/credit
 * @interface EntryTranArgs
 */
export interface IEntryTranArgs {
    shopId: string;
    shopPass: string;
    orderId: string;
    jobCd: string;
    amount: number;
}
/**
 * 取引登録out
 * @memberOf services/credit
 * @interface EntryTranResult
 */
export interface IEntryTranResult {
    accessId: string;
    accessPass: string;
}
/**
 * 取引登録
 * @memberOf services/credit
 * @function entryTran
 * @param {IEntryTranArgs} args 取引登録in
 * @param {string} args.shopId
 * @param {string} args.shopPass
 * @param {string} args.orderId
 * @param {string} args.jobCd
 * @param {string} args.amount
 * @returns {Promise<IEntryTranResult>} 取引登録out
 */
export async function entryTran(args: IEntryTranArgs): Promise<IEntryTranResult> {
    debug('requesting...', args);
    const body = await request.post({
        url: `${process.env.GMO_ENDPOINT}/payment/EntryTran.idPass`,
        form: {
            ShopID: args.shopId,
            ShopPass: args.shopPass,
            OrderID: args.orderId,
            JobCd: args.jobCd,
            Amount: args.amount
        }
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new Error(body);
    }

    return {
        accessId: result.AccessID,
        accessPass: result.AccessPass
    };
}

/**
 * 決済実行in
 * @memberOf services/credit
 * @interface
 */
export interface IExecTranArgs {
    accessId: string;
    accessPass: string;
    orderId: string;
    method?: string;
    payTimes?: number;
    cardNo?: string;
    expire?: string;
    securityCode?: string;
    token?: string;
    pin?: string;
    clientField1?: string;
    clientField2?: string;
    clientField3?: string;
}

/**
 * 決済実行out
 * @memberOf services/credit
 * @interface
 */
export interface IExecTranResult {
    acs: string;
    orderId: string;
    forward: string;
    method: string;
    payTimes: string;
    approve: string;
    tranId: string;
    tranDate: string;
    checkString: string;
    clientField1: string;
    clientField2: string;
    clientField3: string;
}

/**
 * 決済実行
 * @memberOf services/credit
 * @function execTran
 * @param {IExecTranArgs} args 決済実行in
 * @param {string} args.accessId
 * @param {string} args.accessPass
 * @param {string} args.orderId
 * @param {number} args.payTimes
 * @param {string} args.cardNo
 * @param {string} args.expire
 * @param {string} args.securityCode
 * @param {string} args.token
 * @param {string} args.pin
 * @param {string} args.clientField1
 * @param {string} args.clientField2
 * @param {string} args.clientField3
 * @returns {Promise<IExecTranResult>} 決済実行out
 */
export async function execTran(args: IExecTranArgs): Promise<IExecTranResult> {
    debug('requesting...', args);
    const body = await request.post({
        url: `${process.env.GMO_ENDPOINT}/payment/ExecTran.idPass`,
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
            ClientField1: args.clientField1,
            ClientField2: args.clientField2,
            ClientField3: args.clientField3
        }
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new Error(body);
    }

    return {
        acs: result.ACS,
        orderId: result.OrderID,
        forward: result.Forward,
        method: result.Method,
        payTimes: result.PayTimes,
        approve: result.Approve,
        tranId: result.TranID,
        tranDate: result.TranDate,
        checkString: result.CheckString,
        clientField1: result.ClientField1,
        clientField2: result.ClientField2,
        clientField3: result.ClientField3
    };
}

/**
 * 決済変更in
 * @memberOf services/credit
 * @interface
 */
export interface IAlterTranArgs {
    shopId: string;
    shopPass: string;
    accessId: string;
    accessPass: string;
    jobCd: string;
    amount?: number;
    method?: string;
}
/**
 * 決済変更out
 * @memberOf services/credit
 * @interface
 */
export interface IAlterTranResult {
    accessId: string;
    accessPass: string;
    forward: string;
    approve: string;
    tranId: string;
    tranDate: string;
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
 * @param {string} args.jobCd
 * @param {number} args.amount
 * @param {string} args.method
 * @returns {Promise<IAlterTranResult>} 決済変更out
 */
export async function alterTran(args: IAlterTranArgs): Promise<IAlterTranResult> {
    debug('requesting...', args);
    const body = await request.post({
        url: `${process.env.GMO_ENDPOINT}/payment/AlterTran.idPass`,
        form: {
            ShopID: args.shopId,
            ShopPass: args.shopPass,
            AccessID: args.accessId,
            AccessPass: args.accessPass,
            JobCd: args.jobCd,
            Amount: args.amount,
            Method: args.method
        }
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new Error(body);
    }

    return {
        accessId: result.AccessID,
        accessPass: result.AccessPass,
        forward: result.Forward,
        approve: result.Approve,
        tranId: result.TranID,
        tranDate: result.TranDate
    };
}

/**
 * 取引状態参照in
 * @memberOf services/credit
 * @interface
 */
export interface ISearchTradeArgs {
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパスワード
     */
    shopPass: string;
    /**
     * オーダーID
     */
    orderId: string;
}

/**
 * 取引状態参照out
 * @memberOf services/credit
 * @interface
 */
export interface ISearchTradeResult {
    /**
     * オーダーID
     */
    orderId: string;
    /**
     * 現状態
     */
    status: string;
    /**
     * 処理日時
     */
    processDate: string;
    /**
     * 処理区分
     */
    jobCd: string;
    /**
     * 取引ID
     */
    accessId: string;
    /**
     * 取引パスワード
     */
    accessPass: string;
    /**
     * 商品コード
     */
    itemCode: string;
    /**
     * 利用金額
     */
    amount: string;
    /**
     * 税送料
     */
    tax: string;
    /**
     * サイトID
     */
    siteId: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * カード番号
     */
    cardNo: string;
    /**
     * 有効期限
     */
    expire: string;
    /**
     * 支払方法
     */
    method: string;
    /**
     * 支払回数
     */
    payTimes: string;
    /**
     * 仕向先コード
     */
    forward: string;
    /**
     * トランザクションID
     */
    tranId: string;
    /**
     * 承認番号
     */
    approve: string;
    /**
     * 加盟店自由項目1
     */
    clientField1: string;
    /**
     * 加盟店自由項目2
     */
    clientField2: string;
    /**
     * 加盟店自由項目3
     */
    clientField3: string;
    /**
     * エラーコード
     */
    errCode: string;
    /**
     * エラー詳細コード
     */
    errInfo: string;
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
export async function searchTrade(args: ISearchTradeArgs): Promise<ISearchTradeResult> {
    debug('requesting...', args);
    const body = await request.post({
        url: `${process.env.GMO_ENDPOINT}/payment/SearchTrade.idPass`,
        form: {
            ShopID: args.shopId,
            ShopPass: args.shopPass,
            OrderID: args.orderId
        }
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new Error(body);
    }

    return {
        orderId: result.OrderID,
        status: result.Status,
        processDate: result.ProcessDate,
        jobCd: result.JobCd,
        accessId: result.AccessID,
        accessPass: result.AccessPass,
        itemCode: result.ItemCode,
        amount: result.Amount,
        tax: result.Tax,
        siteId: result.SiteID,
        memberId: result.MemberID,
        cardNo: result.CardNo,
        expire: result.Expire,
        method: result.Method,
        payTimes: result.PayTimes,
        forward: result.Forward,
        tranId: result.TranID,
        approve: result.Approve,
        clientField1: result.ClientField1,
        clientField2: result.ClientField2,
        clientField3: result.ClientField3,
        errCode: result.ErrCode,
        errInfo: result.ErrInfo
    };
}
