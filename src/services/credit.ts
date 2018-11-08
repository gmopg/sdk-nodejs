/**
 * GMOクレジット
 * @namespace services/credit
 */

import * as CreditFactory from '../factory/credit';
import { CreditService } from '../service/credit';

const service = new CreditService({ endpoint: <string>process.env.GMO_ENDPOINT });

/**
 * 取引登録in
 * @memberOf services/credit
 * @interface EntryTranArgs
 */
export type IEntryTranArgs = CreditFactory.IEntryTranArgs;
/**
 * 取引登録out
 * @memberOf services/credit
 * @interface EntryTranResult
 */
export type IEntryTranResult = CreditFactory.IEntryTranResult;
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
    return service.entryTran(args);
}

/**
 * 決済実行in
 * @memberOf services/credit
 * @interface
 */
export type IExecTranArgs = CreditFactory.IExecTranArgs;

/**
 * 決済実行out
 * @memberOf services/credit
 * @interface
 */
export type IExecTranResult = CreditFactory.IExecTranResult;

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
    return service.execTran(args);
}

/**
 * 決済変更in
 * @memberOf services/credit
 * @interface
 */
export type IAlterTranArgs = CreditFactory.IAlterTranArgs;
/**
 * 決済変更out
 * @memberOf services/credit
 * @interface
 */
export type IAlterTranResult = CreditFactory.IAlterTranResult;

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
    return service.alterTran(args);
}

/**
 * 取引状態参照in
 * @memberOf services/credit
 * @interface
 */
export type ISearchTradeArgs = CreditFactory.ISearchTradeArgs;

/**
 * 取引状態参照out
 * @memberOf services/credit
 * @interface
 */
export type ISearchTradeResult = CreditFactory.ISearchTradeResult;

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
    return service.searchTrade(args);
}

/**
 * 金額変更in
 * @memberof services/credit
 * @interface
 */
export type IChangeTranArgs = CreditFactory.IChangeTranArgs;
/**
 * 金額変更out
 * @memberof services/credit
 * @interface
 */
export type IChangeTranResult = CreditFactory.IChangeTranResult;

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
    return service.changeTran(args);
}

/**
 * カード属性照会in
 */
export type ISearchCardDetailArgs = CreditFactory.ISearchCardDetailArgs;
/**
 * カード属性照会out
 */
export type ISearchCardDetailResult = CreditFactory.ISearchCardDetailResult;
/**
 * カード属性照会
 */
export async function searchCardDetail(args: ISearchCardDetailArgs): Promise<ISearchCardDetailResult> {
    return service.searchCardDetail(args);
}
