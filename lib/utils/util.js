"use strict";
/**
 * GMO　ユーティリティー
 * @namespace utils/util
 */
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
/**
 * 決済方法
 * @memberof utils/util
 * @enum PayType
 */
var PayType;
(function (PayType) {
    /**
     * 現金(実際GMOではありえないが)
     */
    PayType["Cash"] = "Z";
    /**
     * カード
     */
    PayType["Credit"] = "0";
    /**
     * モバイルSuica
     */
    PayType["Suica"] = "1";
    /**
     * 楽天Edy
     */
    PayType["Edy"] = "2";
    /**
     * コンビニ
     */
    PayType["Cvs"] = "3";
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
})(PayType = exports.PayType || (exports.PayType = {}));
/**
 * 支払い方法
 * @memberof utils/util
 * @enum Method
 */
var Method;
(function (Method) {
    /**
     * 一括
     */
    Method["Lump"] = "1";
    /**
     * 分割
     */
    Method["Installment"] = "2";
    /**
     * ボーナス一括
     */
    Method["BonusLump"] = "3";
    /**
     * リボ
     */
    Method["Revolving"] = "4";
    /**
     * ボーナス分割
     */
    Method["BonusInstallment"] = "5";
})(Method = exports.Method || (exports.Method = {}));
/**
 * 現状態
 * @memberof utils/util
 * @enum Status
 */
var Status;
(function (Status) {
    /**
     * 未決済
     */
    Status["Unprocessed"] = "UNPROCESSED";
    /**
     * 未決済(3D 登録済)
     */
    Status["Authenticated"] = "AUTHENTICATED";
    /**
     * 有効性チェック
     */
    Status["Check"] = "CHECK";
    /**
     * 即時売上
     */
    Status["Capture"] = "CAPTURE";
    /**
     * 仮売上
     */
    Status["Auth"] = "AUTH";
    /**
     * 実売上
     */
    Status["Sales"] = "SALES";
    /**
     * 取消
     */
    Status["Void"] = "VOID";
    /**
     * 返品
     */
    Status["Return"] = "RETURN";
    /**
     * 月跨り返品
     */
    Status["Returnx"] = "RETURNX";
    /**
     * 簡易オーソリ
     */
    Status["Sauth"] = "SAUTH";
    /**
     * 要求成功
     */
    Status["Reqsuccess"] = "REQSUCCESS";
    /**
     * 決済完了
     */
    Status["Paysuccess"] = "PAYSUCCESS";
    /**
     * 決済失敗
     */
    Status["Payfail"] = "PAYFAIL";
    /**
     * 期限切れ
     */
    Status["Expired"] = "EXPIRED";
    /**
     * 支払い停止
     */
    Status["Cancel"] = "CANCEL";
})(Status = exports.Status || (exports.Status = {}));
/**
 * 処理区分
 * @memberof utils/util
 * @enum JobCd
 */
var JobCd;
(function (JobCd) {
    /**
     * 有効性チェック
     */
    JobCd["Check"] = "CHECK";
    /**
     * 即時売上
     */
    JobCd["Capture"] = "CAPTURE";
    /**
     * 仮売上
     */
    JobCd["Auth"] = "AUTH";
    /**
     * 実売上
     */
    JobCd["Sales"] = "SALES";
    /**
     * 取消
     */
    JobCd["Void"] = "VOID";
    /**
     * 返品
     */
    JobCd["Return"] = "RETURN";
    /**
     * 月跨り返品
     */
    JobCd["Returnx"] = "RETURNX";
    /**
     * 簡易オーソリ
     */
    JobCd["Sauth"] = "SAUTH";
})(JobCd = exports.JobCd || (exports.JobCd = {}));
/**
 * カード登録連番モード
 * @memberof utils/util
 * @enum SeqMode
 */
var SeqMode;
(function (SeqMode) {
    /**
     * 論理モード
     */
    SeqMode["Logic"] = "0";
    /**
     * カード登録連番物理モード
     */
    SeqMode["Physics"] = "1";
})(SeqMode = exports.SeqMode || (exports.SeqMode = {}));
/**
 * 洗替・継続課金対象
 * @memberof utils/util
 * @enum DefaultFlag
 */
var DefaultFlag;
(function (DefaultFlag) {
    /**
     * 対象としない
     */
    DefaultFlag["BillingObject"] = "0";
    /**
     * 対象とする
     */
    DefaultFlag["NotSubjectToCharge"] = "1";
})(DefaultFlag = exports.DefaultFlag || (exports.DefaultFlag = {}));
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
function createShopPassString(args) {
    // 「ショップ ID + オーダーID + 利用金額＋税送料＋ショップパスワード + 日時情報」を MD5 でハッシュした文字列。
    const md5hash = crypto.createHash('md5');
    md5hash.update(`${args.shopId}${args.orderId}${args.amount.toString()}${args.shopPass}${args.dateTime}`, 'utf8');
    return md5hash.digest('hex');
}
exports.createShopPassString = createShopPassString;
