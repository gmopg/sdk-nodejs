import * as util from '../utils/util';

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
