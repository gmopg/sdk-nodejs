/**
 * GMO　ユーティリティー
 * @namespace utils/util
 */

import * as crypto from 'crypto';

/**
 * 現金(実際GMOではありえないが)
 *
 * @memberOf utils/util
 */
export const PAY_TYPE_CASH = 'Z';

/**
 * カード
 * @memberOf utils/util
 */
export const PAY_TYPE_CREDIT = '0';
/**
 * モバイルSuica
 * @memberOf utils/util
 */
export const PAY_TYPE_SUICA = '1';
/**
 * 楽天Edy
 * @memberOf utils/util
 */
export const PAY_TYPE_EDY = '2';
/**
 * コンビニ
 * @memberOf utils/util
 */
export const PAY_TYPE_CVS = '3';
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

/**
 * 一括
 * @memberOf utils/util
 */
export const METHOD_LUMP = '1';
/**
 * 分割
 * @memberOf utils/util
 */
export const METHOD_INSTALLMENT = '2';
/**
 * ボーナス一括
 * @memberOf utils/util
 */
export const METHOD_BONUS_LUMP = '3';
/**
 * リボ
 * @memberOf utils/util
 */
export const METHOD_REVOLVING = '4';
/**
 * ボーナス分割
 * @memberOf utils/util
 */
export const METHOD_BONUS_INSTALLMENT = '5';

/**
 * 未決済
 * @memberOf utils/util
 */
export const STATUS_CVS_UNPROCESSED = 'UNPROCESSED';
/**
 * 要求成功
 * @memberOf utils/util
 */
export const STATUS_CVS_REQSUCCESS = 'REQSUCCESS';
/**
 * 決済完了
 * @memberOf utils/util
 */
export const STATUS_CVS_PAYSUCCESS = 'PAYSUCCESS';
/**
 * 決済失敗
 * @memberOf utils/util
 */
export const STATUS_CVS_PAYFAIL = 'PAYFAIL';
/**
 * 期限切れ
 * @memberOf utils/util
 */
export const STATUS_CVS_EXPIRED = 'EXPIRED';
/**
 * 支払い停止
 * @memberOf utils/util
 */
export const STATUS_CVS_CANCEL = 'CANCEL';

/**
 * 未決済
 * @memberOf utils/util
 */
export const STATUS_CREDIT_UNPROCESSED = 'UNPROCESSED';
/**
 * 未決済(3D 登録済)
 * @memberOf utils/util
 */
export const STATUS_CREDIT_AUTHENTICATED = 'AUTHENTICATED';
/**
 * 有効性チェック
 * @memberOf utils/util
 */
export const STATUS_CREDIT_CHECK = 'CHECK';
/**
 * 即時売上
 * @memberOf utils/util
 */
export const STATUS_CREDIT_CAPTURE = 'CAPTURE';
/**
 * 仮売上
 * @memberOf utils/util
 */
export const STATUS_CREDIT_AUTH = 'AUTH';
/**
 * 実売上
 * @memberOf utils/util
 */
export const STATUS_CREDIT_SALES = 'SALES';
/**
 * 取消
 * @memberOf utils/util
 */
export const STATUS_CREDIT_VOID = 'VOID';
/**
 * 返品
 * @memberOf utils/util
 */
export const STATUS_CREDIT_RETURN = 'RETURN';
/**
 * 月跨り返品
 * @memberOf utils/util
 */
export const STATUS_CREDIT_RETURNX = 'RETURNX';
/**
 * 簡易オーソリ
 * @memberOf utils/util
 */
export const STATUS_CREDIT_SAUTH = 'SAUTH';

/**
 * 有効性チェック
 * @memberOf utils/util
 */
export const JOB_CD_CHECK = 'CHECK';
/**
 * 即時売上
 * @memberOf utils/util
 */
export const JOB_CD_CAPTURE = 'CAPTURE';
/**
 * 仮売上
 * @memberOf utils/util
 */
export const JOB_CD_AUTH = 'AUTH';
/**
 * 実売上
 * @memberOf utils/util
 */
export const JOB_CD_SALES = 'SALES';
/**
 * 取消
 * @memberOf utils/util
 */
export const JOB_CD_VOID = 'VOID';
/**
 * 返品
 * @memberOf utils/util
 */
export const JOB_CD_RETURN = 'RETURN';
/**
 * 月跨り返品
 * @memberOf utils/util
 */
export const JOB_CD_RETURNX = 'RETURNX';
/**
 * 簡易オーソリ
 * @memberOf utils/util
 */
export const JOB_CD_SAUTH = 'SAUTH';

/**
 * カード登録連番論理モード
 * @memberOf utils/util
 */
export const SEQ_MODE_LOGIC = '0';

/**
 * カード登録連番物理モード
 * @memberOf utils/util
 */
export const SEQ_MODE_PHYSICS = '1';

/**
 * 洗替・継続課金対象としない
 * @memberOf utils/util
 */
export const DEFAULT_FLAG_BILLING_OBJECT = '0';

/**
 * 洗替・継続課金対象とする
 * @memberOf utils/util
 */
export const DEFAULT_FLAG_NOT_SUBJECT_TO_CHARGE = '1';

/**
 * ショップ情報確認文字列を作成するin
 * @memberOf utils/util
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
 * @memberOf utils/util
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
