/**
 * GMOユーティリティー
 * @namespace utils/util
 */

import * as crypto from 'crypto';

/**
 * 決済方法
 * @memberof utils/util
 * @enum PayType
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
 * @memberof utils/util
 * @enum Method
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
 * @memberof utils/util
 * @enum Status
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
 * @memberof utils/util
 * @enum JobCd
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
 * @memberof utils/util
 * @enum SeqMode
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
 * @memberof utils/util
 * @enum DefaultFlag
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
 * ショップ情報確認文字列を作成するin
 * @memberof utils/util
 * @interface CreateShopPassStringArgs
 */
export interface ICreateShopPassStringArgs {
    shopId: string;
    shopPass: string;
    orderId: string;
    amount: number;
    dateTime: string;
}

/**
 * ショップ情報確認文字列を作成する
 * @memberof utils/util
 * @function createShopPassString
 * @param {ICreateShopPassStringArgs} args
 * @param {string} args.shopId
 * @param {string} args.shopPass
 * @param {string} args.orderId
 * @param {string} args.amount
 * @param {string} args.dateTime
 * @returns {string}
 */
export function createShopPassString(args: ICreateShopPassStringArgs) {
    // 「ショップ ID + オーダーID + 利用金額＋税送料＋ショップパスワード + 日時情報」を MD5 でハッシュした文字列。
    const md5hash = crypto.createHash('md5');
    md5hash.update(`${args.shopId}${args.orderId}${args.amount.toString()}${args.shopPass}${args.dateTime}`, 'utf8');

    return md5hash.digest('hex');
}
