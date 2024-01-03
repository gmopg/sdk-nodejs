import * as util from '../utils/util';

/**
 * 追加サイト情報
 * 他決済代行に対応するため
 */
export interface IOptionalSiteArgs {
    siteId?: string;
    sitePass?: string;
}

/**
 * 取引登録in
 */
export interface IEntryTranArgs {
    shopId: string;
    shopPass: string;
    orderId: string;
    jobCd: util.JobCd;
    amount: number;
    /**
     * 3DS利用フラグ
     * 2：行う（3DS2.0を利用）
     */
    tdFlag?: util.TdFlag;
    /**
     * 3DS表示店舗名
     * 表示店舗名をEUC-JPでBASE64エンコーディングした値を設定
     * 25Byte以内である必要があります。
     */
    tdTenantName?: string;
    /**
     * 3DS2.0未対応時取り扱い
     * 仕向先カード会社が3DS2.0に未対応な場合の後続処理設定
     */
    tds2Type?: util.Tds2Type;
}

/**
 * 取引登録out
 */
export interface IEntryTranResult {
    accessId: string;
    accessPass: string;
}

/**
 * 決済実行in
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
 * 決済実行(3DS2.0)in
 */
export type IExecTran3dsArgs = IExecTranArgs & {
    /**
     * 加盟店戻りURL
     * 3Dセキュア認証後にお戻しする加盟店様側のURLになります。
     * 通常は必ず指定してください。モバイルアプリSDKを利用する場合は設定不要です。
     * URLに遷移するHTTPメソッド(GET/POST)は、CallbackTypeパラメータで切り替えることができます。
     */
    retUrl: string;
    /**
     * コールバック方法
     * 加盟店様が指定した戻りURLに当社から戻す方式を指定します。
     * 通常は「1」(POST方式)または「3」(GET方式)を設定してください。モバイルアプリSDKを利用する場合は設定不要です。
     */
    callbackType?: util.CallbackType;
};

/**
 * 決済実行out
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
    /**
     * 3DS認証ページURL
     */
    acsUrl?: string;
}

/**
 * 決済実行(3DS2.0)out
 */
export interface IExecTran3dsResult {
    /**
     * ACS呼出判定
     */
    acs: string;
    /**
     * 3DSサーバーへのリダイレクトURL
     * 3DS2.0認証初期化へのURL
     */
    redirectUrl?: string;
}

/**
 * 決済変更in
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
 * カード属性照会検索タイプ
 */
export type ISearchCardDetailType = '1';
/**
 * カード属性照会in
 * トークンを指定して呼び出す場合
 */
export interface ISearchCardDetailByTokenArgs {
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパスワード
     */
    shopPass: string;
    /**
     * カード情報トークン
     * 半角英数 64 文字。
     * (※セキュリティ強度の見直しにより変更される可能性があります）
     * カード情報トークン化サービスをご利用の場合、取得したトークンを設定します。
     */
    token: string;
    /**
     * 検索タイプ
     * 1：独自BINに設定された情報を返却します。※独自BINはショップ管理画面にて設定します。
     */
    searchType?: ISearchCardDetailType;
}
/**
 * カード属性照会in
 * カード番号を指定して呼び出す場合
 * ※カード番号の取扱いが許可された加盟店様のみ利用可能です。
 */
export interface ISearchCardDetailByCardNoArgs {
    /**
     * ショップID
     */
    shopId: string;
    /**
     * ショップパスワード
     */
    shopPass: string;
    /**
     * カード番号
     * 属性情報を取得する対象となるカード番号を設定します。
     */
    cardNo: string;
    /**
     * 検索タイプ
     * 1：独自BINに設定された情報を返却します。※独自BINはショップ管理画面にて設定します。
     */
    searchType?: ISearchCardDetailType;
}
/**
 * カード属性照会in
 * ショップ ID＋オーダーID を指定して呼び出す場合
 */
export interface ISearchCardDetailByOrderIdArgs {
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
     * 属性情報を取得する対象となる取引のオーダーIDを設定します。
     */
    orderId: string;
    /**
     * 検索タイプ
     * 1：独自BINに設定された情報を返却します。※独自BINはショップ管理画面にて設定します。
     */
    searchType?: ISearchCardDetailType;
}
/**
 * カード属性照会in
 * サイト ID＋会員 ID（＋カード登録連番モード・カード登録連番）を指定して呼び出す場合
 */
export interface ISearchCardDetailByMemberIdArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     * カードを参照する対象の会員IDを設定します。
     */
    memberId: string;
    /**
     * カード登録連番モード
     * 以下のいずれかを設定します。
     * 0：論理モード
     * 1：物理モード
     */
    seqMode: util.SeqMode;
    /**
     * カード登録連番
     * 参照するカードの登録連番を設定します。
     */
    cardSeq?: number;
    /**
     * 検索タイプ
     * 1：独自BINに設定された情報を返却します。※独自BINはショップ管理画面にて設定します。
     */
    searchType?: ISearchCardDetailType;
    /**
     * ショップID
     * 「検索タイプ」に 1 を指定した場合に必須です。
     */
    shopId?: string;
    /**
     * ショップパスワード
     * 「検索タイプ」に 1 を指定した場合に必須です。
     */
    shopPass?: string;
}

/**
 * カード属性照会in
 */
export type ISearchCardDetailArgs =
    ISearchCardDetailByTokenArgs | ISearchCardDetailByCardNoArgs | ISearchCardDetailByOrderIdArgs | ISearchCardDetailByMemberIdArgs;

/**
 * カード属性照会out
 */
export interface ISearchCardDetailResult {
    /**
     * カード番号
     * マスクされたカード番号を返却します。カード番号のマスクはサイトに設定された値を使用して行います。
     * ※カード番号の取扱いが許可されていない加盟店様の場合は、マスク形式が制限されます。
     */
    cardNo: string;
    /**
     * 国際ブランド
     * 国際ブランド名(VISA, MASTER, JCB, AMEX,DINERS)を返します。※判別不能時は空文字を返します。
     */
    brand: string;
    /**
     * 国内発行フラグ
     * 1：国内発行カード
     * 0：海外発行カード
     * 2：不明（上記以外）
     */
    domesticFlag: string;
    /**
     * イシュアコード イシュアコードを返します。
     * ※イシュアを特定できた場合のみ返却。
     */
    issuerCode?: string;
    /**
     * デビット／プリペイドフラグ
     * 2：プリペイドカード
     * 1：デビットカード
     * 0：上記以外
     */
    debitPrepaidFlag: string;
    /**
     * デビット／プリペイドカード発行会社名
     * デビットプリペイドカード発行会社名
     * ※デビット(DebitPrepaidFlag =1)もしくはプリペイド(DebitPrepaidFlag =2)の場合のみ返却。
     */
    debitPrepaidIssuerName?: string;
    /**
     * 最終仕向先のカード会社コード
     * 最終仕向先のカード会社のコードを返します。
     */
    forwardFinal: string;
    /**
     * 加盟店設定情報1
     * この項目は入力パラメータ「検索タイプ」に 1を指定した場合に返却されます。
     * 独自BINに設定された情報を返却します。
     */
    info1?: string;
    /**
     * 加盟店設定情報2
     * この項目は入力パラメータ「検索タイプ」に 1を指定した場合に返却されます。
     * 独自BINに設定された情報を返却します。
     */
    info2?: string;
    /**
     * 加盟店設定情報3
     * この項目は入力パラメータ「検索タイプ」に 1を指定した場合に返却されます。
     * 独自BINに設定された情報を返却します。
     */
    info3?: string;
    /**
     * 加盟店設定情報4
     * この項目は入力パラメータ「検索タイプ」に 1を指定した場合に返却されます。
     * 独自BINに設定された情報を返却します。
     */
    info4?: string;
    /**
     * 加盟店設定情報5
     * この項目は入力パラメータ「検索タイプ」に 1を指定した場合に返却されます。
     * 独自BINに設定された情報を返却します。
     */
    info5?: string;
}

/**
 * 3DS2.0認証後決済実行in
 */
export interface ISecureTran2Args {
    accessId: string;
    accessPass: string;
}

/**
 * 3DS2.0認証後決済実行out
 */
export interface ISecureTran2Result {
    /**
     * オーダーID
     */
    orderID: string;
    /**
     * 仕向先コード
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
     * 承認番号
     */
    approve: string;
    /**
     * トランザクションID
     */
    tranID: string;
    /**
     * 決済日付
     */
    tranDate: string;
    /**
     * MD5ハッシュ
     * 出力パラメータのオーダーID、仕向け先コード、支払い方法、支払い回数、承認番号、トランザクションID、決済日付+ショップパスワードのハッシュ値を返却します。
     */
    checkString: string;
    /**
     * 加盟店自由項目1
     */
    clientField1?: string;
    /**
     * 加盟店自由項目2
     */
    clientField2?: string;
    /**
     * 加盟店自由項目3
     */
    clientField3?: string;
}
