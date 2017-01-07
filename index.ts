import request = require("request");
import querystring = require("querystring");

let SHOP_ID = "tshop00024743";
let SHOP_PASS = "tawzswh4";

/** カード */
export var PAY_TYPE_CREDIT = "0";
/** モバイルSuica */
export var PAY_TYPE_SUICA = "1";
/** 楽天Edy */
export var PAY_TYPE_EDY = "2";
/** コンビニ */
export var PAY_TYPE_CVS = "3";
/** 現金(GMOではありえないが、決済方法をここにまとめるために作成) */
export var PAY_TYPE_CASH = "Z";
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




/** 未決済 */
export var STATUS_CVS_UNPROCESSED = "UNPROCESSED";
/** 要求成功 */
export var STATUS_CVS_REQSUCCESS = "REQSUCCESS";
/** 決済完了 */
export var STATUS_CVS_PAYSUCCESS = "PAYSUCCESS";
/** 決済失敗 */
export var STATUS_CVS_PAYFAIL = "PAYFAIL";
/** 期限切れ */
export var STATUS_CVS_EXPIRED = "EXPIRED";
/** 支払い停止 */
export var STATUS_CVS_CANCEL = "CANCEL";

/** 未決済 */
export var STATUS_CREDIT_UNPROCESSED = "UNPROCESSED";
/** 未決済(3D 登録済) */
export var STATUS_CREDIT_AUTHENTICATED = "AUTHENTICATED";
/** 有効性チェック */
export var STATUS_CREDIT_CHECK = "CHECK";
/** 即時売上 */
export var STATUS_CREDIT_CAPTURE = "CAPTURE";
/** 仮売上 */
export var STATUS_CREDIT_AUTH = "AUTH";
/** 実売上 */
export var STATUS_CREDIT_SALES = "SALES";
/** 取消 */
export var STATUS_CREDIT_VOID = "VOID";
/** 返品 */
export var STATUS_CREDIT_RETURN = "RETURN";
/** 月跨り返品 */
export var STATUS_CREDIT_RETURNX = "RETURNX";
/** 簡易オーソリ */
export var STATUS_CREDIT_SAUTH = "SAUTH";

/**
 * ショップ情報確認文字列を作成する
 */
export function createShopPassString(shopId: string, orderId: string, amount: string, shopPassword: string, dateTime: string) {
    // 「ショップ ID + オーダーID + 利用金額＋税送料＋ショップパスワード + 日時情報」を MD5 でハッシュした文字列。
    let crypto = require("crypto");
    let md5hash = crypto.createHash("md5");
    md5hash.update(`${shopId}${orderId}${amount}${shopPassword}${dateTime}`, "utf8");
    return md5hash.digest("hex");
}

export namespace entryTranInterface {
    export interface Args {
        order_id: string,
        job_cd: string,
        amount: number,
    }

    export interface Result {
        access_id: string,
        access_pass: string,
    }

    export function call(args: Args) {
        return new Promise((resolve: (result: Result) => void, reject: (err: Error) => void) => {
            console.log("requesting...");
            request.post({
                url: "https://pt01.mul-pay.jp/payment/EntryTran.idPass",
                form: {
                    ShopID: SHOP_ID,
                    ShopPass: SHOP_PASS,
                    OrderID: args.order_id,
                    JobCd: args.job_cd,
                    Amount: args.amount,
                }
            }, (error, response, body) => {
                console.log("request processed.", error, body);
                if (error) return reject(error);
                if (response.statusCode !== 200) return reject(new Error(body));

                let result = querystring.parse(body);
                if (result.ErrCode) return reject(new Error(body));

                resolve({
                    access_id: result.AccessID,
                    access_pass: result.AccessPass,
                });
            });
        });
    }
}

export namespace execTranInterface {
    export interface Args {
        access_id: string,
        access_pass: string,
        order_id: string,
        method?: string,
        pay_times?: string,
        card_no?: string,
        expire?: string,
        security_code?: string,
        token?: string,
        pin?: string,
        client_field1?: string,
        client_field2?: string,
        client_field3?: string,
    }

    export interface Result {
        acs: string,
        order_id: string,
        forward: string,
        method: string,
        pay_times: string,
        approve: string,
        tran_id: string,
        tran_date: string,
        check_string: string,
        client_field1: string,
        client_field2: string,
        client_field3: string,
    }

    export function call(args: Args) {
        return new Promise((resolve: (result: Result) => void, reject: (err: Error) => void) => {
            console.log("requesting...", args);
            request.post({
                url: "https://pt01.mul-pay.jp/payment/ExecTran.idPass",
                form: {
                    AccessID: args.access_id,
                    AccessPass: args.access_pass,
                    OrderID: args.order_id,
                    Method: args.method,
                    PayTimes: args.pay_times,
                    CardNo: args.card_no,
                    Expire: args.expire,
                    SecurityCode: args.security_code,
                    Token: args.token,
                    PIN: args.pin,
                    ClientField1: args.client_field1,
                    ClientField2: args.client_field2,
                    ClientField3: args.client_field3,
                }
            }, (error, response, body) => {
                console.log("request processed.", error, body);
                if (error) return reject(error);
                if (response.statusCode !== 200) return reject(new Error(body));

                let result = querystring.parse(body);
                if (result.ErrCode) return reject(new Error(body));

                resolve({
                    acs: result.ACS,
                    order_id: result.OrderID,
                    forward: result.Forward,
                    method: result.Method,
                    pay_times: result.PayTimes,
                    approve: result.Approve,
                    tran_id: result.TranID,
                    tran_date: result.TranDate,
                    check_string: result.CheckString,
                    client_field1: result.ClientField1,
                    client_field2: result.ClientField2,
                    client_field3: result.ClientField3,
                });
            });
        });
    }
}