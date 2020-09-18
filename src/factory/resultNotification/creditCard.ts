/**
 * カード決済結果通知インターフェース
 */
export interface IResultNotification {
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパスワード
     * “*” 10 桁固定
     */
    shopPass: string;
    /**
     * 取引ID
     * ※：同一オーダーID でも決済手段が異なると、異なった「取引 ID」および「取引パスワード」が返却されます。
     */
    accessId: string;
    /**
     * 取引パスワード
     * “*” 32 桁固定
     */
    accessPass: string;
    /**
     * オーダーID
     */
    orderId: string;
    /**
     * 現状態
     */
    status: string;
    /**
     * 処理区分
     */
    jobCd: string;
    /**
     * 利用金額
     * 決済または決済依頼をした金額を返却します。
     */
    amount: number;
    /**
     * 税送料
     */
    tax: number;
    /**
     * 通貨コード
     * 決済に利用された通貨を返却します。
     */
    currency: string;
    /**
     * 仕向先会社コード
     */
    forward: string;
    /**
     * 支払方法
     */
    method: string;
    /**
     * 支払回数
     */
    payTimes: string;
    /**
     * トランザクションID
     */
    tranId: string;
    /**
     * 承認番号
     */
    approve: string;
    /**
     * 処理日付
     * yyyyMMddHHmmss 書式
     */
    tranDate: string;
    /**
     * エラーコード
     * エラー発生時のみ
     * 複数エラーがある場合は下記のような形式にて出力されます。
     * (必ず、ErrCodeのn番目とErrInfoのn番目が対となります)
     * ErrCode=E01|E01|E01|E01|E01&ErrInfo=E01010001|E01020001|E01030002|E01040001|E01060001
     */
    errCode: string;
    /**
     * エラー詳細コード
     * エラー発生時のみ
     * 複数エラーがある場合は下記のような形式にて出力されます。
     * (必ず、ErrCodeのn番目とErrInfoのn番目が対となります)
     * ErrCode=E01|E01|E01|E01|E01&ErrInfo=E01010001|E01020001|E01030002|E01040001|E01060001
     */
    errInfo: string;
    /**
     * 決済方法
     * 0：クレジット
     */
    payType: string;
}

/**
 * 結果通知本文をパースする
 */
export function createFromRequestBody(body: any): IResultNotification {
    return {
        shopId: body.ShopID,
        shopPass: body.ShopPass,
        accessId: body.AccessID,
        accessPass: body.AccessPass,
        orderId: body.OrderID,
        status: body.Status,
        jobCd: body.JobCd,
        // tslint:disable-next-line:no-magic-numbers
        amount: parseInt(body.Amount, 10),
        // tslint:disable-next-line:no-magic-numbers
        tax: parseInt(body.Tax, 10),
        currency: body.Currency,
        forward: body.Forward,
        method: body.Method,
        payTimes: body.PayTimes,
        tranId: body.TranID,
        approve: body.Approve,
        tranDate: body.TranDate,
        errCode: body.ErrCode,
        errInfo: body.ErrInfo,
        payType: body.PayType
    };
}
