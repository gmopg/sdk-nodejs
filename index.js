"use strict";
const request = require("request");
const querystring = require("querystring");
let SHOP_ID = "tshop00024743";
let SHOP_PASS = "tawzswh4";
exports.PAY_TYPE_CREDIT = "0";
exports.PAY_TYPE_SUICA = "1";
exports.PAY_TYPE_EDY = "2";
exports.PAY_TYPE_CVS = "3";
exports.PAY_TYPE_CASH = "Z";
exports.STATUS_CVS_UNPROCESSED = "UNPROCESSED";
exports.STATUS_CVS_REQSUCCESS = "REQSUCCESS";
exports.STATUS_CVS_PAYSUCCESS = "PAYSUCCESS";
exports.STATUS_CVS_PAYFAIL = "PAYFAIL";
exports.STATUS_CVS_EXPIRED = "EXPIRED";
exports.STATUS_CVS_CANCEL = "CANCEL";
exports.STATUS_CREDIT_UNPROCESSED = "UNPROCESSED";
exports.STATUS_CREDIT_AUTHENTICATED = "AUTHENTICATED";
exports.STATUS_CREDIT_CHECK = "CHECK";
exports.STATUS_CREDIT_CAPTURE = "CAPTURE";
exports.STATUS_CREDIT_AUTH = "AUTH";
exports.STATUS_CREDIT_SALES = "SALES";
exports.STATUS_CREDIT_VOID = "VOID";
exports.STATUS_CREDIT_RETURN = "RETURN";
exports.STATUS_CREDIT_RETURNX = "RETURNX";
exports.STATUS_CREDIT_SAUTH = "SAUTH";
function createShopPassString(shopId, orderId, amount, shopPassword, dateTime) {
    let crypto = require("crypto");
    let md5hash = crypto.createHash("md5");
    md5hash.update(`${shopId}${orderId}${amount}${shopPassword}${dateTime}`, "utf8");
    return md5hash.digest("hex");
}
exports.createShopPassString = createShopPassString;
var entryTranInterface;
(function (entryTranInterface) {
    function call(args) {
        return new Promise((resolve, reject) => {
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
                if (error)
                    return reject(error);
                if (response.statusCode !== 200)
                    return reject(new Error(body));
                let result = querystring.parse(body);
                if (result.ErrCode)
                    return reject(new Error(body));
                resolve({
                    access_id: result.AccessID,
                    access_pass: result.AccessPass,
                });
            });
        });
    }
    entryTranInterface.call = call;
})(entryTranInterface = exports.entryTranInterface || (exports.entryTranInterface = {}));
var execTranInterface;
(function (execTranInterface) {
    function call(args) {
        return new Promise((resolve, reject) => {
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
                if (error)
                    return reject(error);
                if (response.statusCode !== 200)
                    return reject(new Error(body));
                let result = querystring.parse(body);
                if (result.ErrCode)
                    return reject(new Error(body));
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
    execTranInterface.call = call;
})(execTranInterface = exports.execTranInterface || (exports.execTranInterface = {}));
