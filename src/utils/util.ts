// import * as crypto from 'crypto';

/**
 * 決済方法
 */
export enum PayType {
    /**
     * 現金(実際GMOではありえないが)
     */
    Cash = 'Z',
    /**
     * カード
     */
    Credit = '0',
    /**
     * モバイルSuica
     */
    Suica = '1',
    /**
     * 楽天Edy
     */
    Edy = '2',
    /**
     * コンビニ
     */
    Cvs = '3'
    // 4：Pay-easy
    // 5：PayPal
    // 6：iD
    // 7：WebMoney
    // 8：au かんたん
    // 9：docomo
    // B：ソフトバンクまとめて支払い(Ｂ)
    // C：じぶん銀行
    // E：JCB プリカ
    // G：NET CASH・nanaco ギフト
    // I：楽天ID
    // J：多通貨クレジットカード
    // K：LINE Pay 決済
    // L：ネット銀聯決済
    // N：銀行振込(バーチャル口座)
    // O：リクルートかんたん支払い決済
}

/**
 * 支払い方法
 */
export enum Method {
    /**
     * 一括
     */
    Lump = '1',
    /**
     * 分割
     */
    Installment = '2',
    /**
     * ボーナス一括
     */
    BonusLump = '3',
    /**
     * リボ
     */
    Revolving = '4',
    /**
     * ボーナス分割
     */
    BonusInstallment = '5'
}

/**
 * 現状態
 */
export enum Status {
    /**
     * 未決済
     */
    Unprocessed = 'UNPROCESSED',
    /**
     * 未決済(3D 登録済)
     */
    Authenticated = 'AUTHENTICATED',
    /**
     * 有効性チェック
     */
    Check = 'CHECK',
    /**
     * 即時売上
     */
    Capture = 'CAPTURE',
    /**
     * 仮売上
     */
    Auth = 'AUTH',
    /**
     * 実売上
     */
    Sales = 'SALES',
    /**
     * 取消
     */
    Void = 'VOID',
    /**
     * 返品
     */
    Return = 'RETURN',
    /**
     * 月跨り返品
     */
    Returnx = 'RETURNX',
    /**
     * 簡易オーソリ
     */
    Sauth = 'SAUTH',
    /**
     * 要求成功
     */
    Reqsuccess = 'REQSUCCESS',
    /**
     * 決済完了
     */
    Paysuccess = 'PAYSUCCESS',
    /**
     * 決済失敗
     */
    Payfail = 'PAYFAIL',
    /**
     * 期限切れ
     */
    Expired = 'EXPIRED',
    /**
     * 支払い停止
     */
    Cancel = 'CANCEL'
}

/**
 * 処理区分
 */
export enum JobCd {
    /**
     * 有効性チェック
     */
    Check = 'CHECK',
    /**
     * 即時売上
     */
    Capture = 'CAPTURE',
    /**
     * 仮売上
     */
    Auth = 'AUTH',
    /**
     * 実売上
     */
    Sales = 'SALES',
    /**
     * 取消
     */
    Void = 'VOID',
    /**
     * 返品
     */
    Return = 'RETURN',
    /**
     * 月跨り返品
     */
    Returnx = 'RETURNX',
    /**
     * 簡易オーソリ
     */
    Sauth = 'SAUTH'
}

/**
 * カード登録連番モード
 */
export enum SeqMode {
    /**
     * 論理モード
     */
    Logic = '0',
    /**
     * カード登録連番物理モード
     */
    Physics = '1'
}

/**
 * 洗替・継続課金対象
 */
export enum DefaultFlag {
    /**
     * 対象としない
     */
    BillingObject = '0',
    /**
     * 対象とする
     */
    NotSubjectToCharge = '1'
}

/**
 * 3DS利用フラグ
 * 決済時に利用する3DSのバージョンを指定するフラグです。
 */
export enum TdFlag {
    Version2 = '2'
}

/**
 * 3DS2.0未対応時取り扱い
 * 仕向先カード会社が3DS2.0に未対応な場合の後続処理設定
 */
export enum Tds2Type {
    /**
     * 3DS1.0での認証を実施（デフォルト）
     */
    Version1 = '1',
    /**
     * エラーとして処理終了
     */
    Error = '2',
    /**
     * 通常オーソリを実施
     */
    Auth = '3'
}

/**
 * コールバック方法
 * 加盟店様が指定した戻りURLに当社から戻す方式を指定します。
 * 通常は「1」(POST方式)または「3」(GET方式)を設定してください。モバイルアプリSDKを利用する場合は設定不要です。
 * 「1」または「3」の場合、認証後のコールバック一回のみで済みます。
 * 「2」を指定すると認証初期化後、チャレンジ後の最大二回のコールバックが発生し、加えて以下のAPIを呼び出す必要があります。
 * こちらの方式では加盟店様側で認証結果を取得できるので認証エラーの場合はオーソリを行わないようにする等、決済フローの制御が可能になります。
 * - 3DS2.0認証実行
 * - 3DS2.0認証結果取得
 */
export enum CallbackType {
    /**
     * 通常（POST方式）（デフォルト）
     */
    Post = '1',
    /**
     * 直接受ける
     */
    Direct = '2',
    /**
     * 通常（GET方式）
     */
    Get = '3'
}

/**
 * ショップ情報確認文字列を作成するin
 */
// export interface ICreateShopPassStringArgs {
//     shopId: string;
//     shopPass: string;
//     orderId: string;
//     amount: number;
//     dateTime: string;
// }

/**
 * ショップ情報確認文字列を作成する
 */
// export function createShopPassString(args: ICreateShopPassStringArgs) {
//     // 「ショップ ID + オーダーID + 利用金額＋税送料＋ショップパスワード + 日時情報」を MD5 でハッシュした文字列。
//     const md5hash = crypto.createHash('md5');
//     md5hash.update(`${args.shopId}${args.orderId}${args.amount.toString()}${args.shopPass}${args.dateTime}`, 'utf8');

//     return md5hash.digest('hex');
// }
