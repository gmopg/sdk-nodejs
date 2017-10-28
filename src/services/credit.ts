/**
 * GMO　クレジット
 * @namespace services/credit
 */
import * as createDebug from 'debug';
import * as querystring from 'querystring';
import * as request from 'request-promise-native';
import { BadRequestError } from '../error/badRequest';
import * as util from '../utils/util';

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
    jobCd: util.JobCd;
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
 * @param {util.JobCd} args.jobCd
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
        throw new BadRequestError(body);
    }

    return {
        accessId: <string>result.AccessID,
        accessPass: <string>result.AccessPass
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
    method?: util.Method;
    payTimes?: number;
    cardNo?: string;
    expire?: string;
    securityCode?: string;
    token?: string;
    pin?: string;
    siteId?: string;
    sitePass?: string;
    memberId?: string;
    seqMode?: util.SeqMode;
    cardSeq?: number;
    cardPass?: string;
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
    /**
     * ACS呼出判定
     */
    acs: string;
    /**
     * オーダーID
     */
    orderId: string;
    /**
     * 仕向先コード
     * 与信を行ったカード会社の会社コードを返却します。
     */
    forward: string;
    /**
     * 支払方法
     * お客様が入力もしくは選択した支払方法を返却します。
     */
    method: util.Method;
    /**
     * 支払回数
     * お客様が入力もしくは選択した支払回数を返却します。
     */
    payTimes: string;
    /**
     * 承認番号
     * カード会社が発行した与信の承認番号を返却します。
     */
    approve: string;
    /**
     * トランザクションID
     * GMOが処理を行う毎に発行している処理番号を返却します。
     */
    tranId: string;
    /**
     * 決済日付
     * 与信を実施した日時を返却します。(yyyyMMddHHmmss形式)
     */
    tranDate: string;
    /**
     * MD5ハッシュ
     * OrderID～TranDate+ショップパスワードのハッシュ値(※1)を返却します。
     */
    checkString: string;
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
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new BadRequestError(body);
    }

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
 * 決済変更in
 * @memberOf services/credit
 * @interface
 */
export interface IAlterTranArgs {
    shopId: string;
    shopPass: string;
    accessId: string;
    accessPass: string;
    jobCd: util.JobCd;
    amount?: number;
    method?: util.Method;
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
 * @param {util.JobCd} args.jobCd
 * @param {number} args.amount
 * @param {util.Method} args.method
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
        throw new BadRequestError(body);
    }

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
    jobCd: util.JobCd;
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
    method: util.Method;
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
        throw new BadRequestError(body);
    }

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
 * 金額変更in
 * @memberof services/credit
 * @interface
 */
export interface IChangeTranArgs {
    shopId: string;
    shopPass: string;
    accessId: string;
    accessPass: string;
    jobCd: util.JobCd;
    amount: number;
    tax?: string;
}
/**
 * 金額変更out
 * @memberof services/credit
 * @interface
 */
export interface IChangeTranResult {
    accessId: string;
    accessPass: string;
    forward: string;
    approve: string;
    tranId: string;
    tranDate: string;
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
export async function changeTran(args: IChangeTranArgs): Promise<IChangeTranResult> {
    debug('requesting...', args);
    const body = await request.post({
        url: `${process.env.GMO_ENDPOINT}/payment/ChangeTran.idPass`,
        form: {
            ShopID: args.shopId,
            ShopPass: args.shopPass,
            AccessID: args.accessId,
            AccessPass: args.accessPass,
            JobCd: args.jobCd,
            Amount: args.amount,
            Tax: args.tax
        }
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new BadRequestError(body);
    }

    return {
        accessId: <string>result.AccessID,
        accessPass: <string>result.AccessPass,
        forward: <string>result.Forward,
        approve: <string>result.Approve,
        tranId: <string>result.TranID,
        tranDate: <string>result.TranDate
    };
}
