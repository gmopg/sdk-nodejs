/**
 * GMO　クレジット
 * @namespace Credit
 */
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const querystring = require("querystring");
const request = require("request-promise-native");
/**
 * 取引登録
 * @memberOf Credit
 * @function entryTranInterface
 * @param {EntryTranInterfaceArgs} args 取引登録in
 * @param {string} args.shopId
 * @param {string} args.shopPass
 * @param {string} args.orderId
 * @param {string} args.jobCd
 * @param {string} args.amount
 * @returns {Promise<EntryTranInterfaceResult>} 取引登録out
 */
function entryTranInterface(args) {
    return __awaiter(this, void 0, void 0, function* () {
        // tslint:disable-next-line:no-console
        console.log('requesting...', args);
        const body = yield request.post({
            url: `${process.env.GMO_ENDPOINT}/payment/EntryTran.idPass`,
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                OrderID: args.orderId,
                JobCd: args.jobCd,
                Amount: args.amount
            }
        });
        // tslint:disable-next-line:no-console
        console.log('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode)
            throw new Error(body);
        return {
            accessId: result.AccessID,
            accessPass: result.AccessPass
        };
    });
}
exports.entryTranInterface = entryTranInterface;
/**
 * 決済実行
 * @memberOf Credit
 * @function execTranInterface
 * @param {ExecTranInterfaceArgs} args 決済実行in
 * @param {string} args.accessId
 * @param {string} args.accessPass
 * @param {string} args.orderId
 * @param {number} args.payTimes
 * @param {string} args.cardNo
 * @param {string} args.expire
 * @param {string} args.securityCode
 * @param {string} args.token
 * @param {string} args.pin
 * @param {string} args.clientField1
 * @param {string} args.clientField2
 * @param {string} args.clientField3
 * @returns {Promise<ExecTranInterfaceResult>} 決済実行out
 */
function execTranInterface(args) {
    return __awaiter(this, void 0, void 0, function* () {
        // tslint:disable-next-line:no-console
        console.log('requesting...', args);
        const body = yield request.post({
            url: `${process.env.GMO_ENDPOINT}/payment/ExecTran.idPass`,
            form: {
                AccessID: args.accessId,
                AccessPass: args.accessPass,
                OrderID: args.orderId,
                Method: args.method,
                PayTimes: args.payTimes,
                CardNo: args.cardNo,
                Expire: args.expire,
                SecurityCode: args.securityCode,
                Token: args.token,
                PIN: args.pin,
                ClientField1: args.clientField1,
                ClientField2: args.clientField2,
                ClientField3: args.clientField3
            }
        });
        // tslint:disable-next-line:no-console
        console.log('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode)
            throw new Error(body);
        return {
            acs: result.ACS,
            orderId: result.OrderID,
            forward: result.Forward,
            method: result.Method,
            payTimes: result.PayTimes,
            approve: result.Approve,
            tranId: result.TranID,
            tranDate: result.TranDate,
            checkString: result.CheckString,
            clientField1: result.ClientField1,
            clientField2: result.ClientField2,
            clientField3: result.ClientField3
        };
    });
}
exports.execTranInterface = execTranInterface;
/**
 * 決済変更
 * @memberOf Credit
 * @function alterTranInterface
 * @param {AlterTranInterfaceArgs} args 決済変更in
 * @param {string} args.shopId
 * @param {string} args.shopPass
 * @param {string} args.accessId
 * @param {string} args.accessPass
 * @param {string} args.jobCd
 * @param {number} args.amount
 * @param {string} args.method
 * @returns {Promise<AlterTranInterfaceResult>} 決済変更out
 */
function alterTranInterface(args) {
    return __awaiter(this, void 0, void 0, function* () {
        // tslint:disable-next-line:no-console
        console.log('requesting...', args);
        const body = yield request.post({
            url: `${process.env.GMO_ENDPOINT}/payment/AlterTran.idPass`,
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                AccessID: args.accessId,
                AccessPass: args.accessPass,
                JobCd: args.jobCd,
                Amount: args.amount,
                Method: args.method
            }
        });
        // tslint:disable-next-line:no-console
        console.log('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode)
            throw new Error(body);
        return {
            accessId: result.AccessID,
            accessPass: result.AccessPass,
            forward: result.Forward,
            approve: result.Approve,
            tranId: result.TranID,
            tranDate: result.TranDate
        };
    });
}
exports.alterTranInterface = alterTranInterface;
