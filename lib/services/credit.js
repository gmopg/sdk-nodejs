"use strict";
/**
 * GMO　クレジット
 * @namespace services/credit
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDebug = require("debug");
const querystring = require("querystring");
const request = require("request-promise-native");
const BadRequestError_1 = require("../error/BadRequestError");
const debug = createDebug('gmo-service:credit');
/**
 * 取引登録
 * @memberOf services/credit
 * @function entryTran
 * @param {IEntryTranArgs} args 取引登録in
 * @param {string} args.shopId
 * @param {string} args.shopPass
 * @param {string} args.orderId
 * @param {string} args.jobCd
 * @param {string} args.amount
 * @returns {Promise<IEntryTranResult>} 取引登録out
 */
function entryTran(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
            url: `${process.env.GMO_ENDPOINT}/payment/EntryTran.idPass`,
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                OrderID: args.orderId,
                JobCd: args.jobCd,
                Amount: args.amount
            }
        }).promise();
        debug('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError_1.BadRequestError(body);
        }
        return {
            accessId: result.AccessID,
            accessPass: result.AccessPass
        };
    });
}
exports.entryTran = entryTran;
/**
 * 決済実行
 * @memberOf services/credit
 * @function execTran
 * @param {IExecTranArgs} args 決済実行in
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
 * @returns {Promise<IExecTranResult>} 決済実行out
 */
function execTran(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
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
        }).promise();
        debug('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError_1.BadRequestError(body);
        }
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
exports.execTran = execTran;
/**
 * 決済変更
 * @memberOf services/credit
 * @function alterTran
 * @param {IAlterTranArgs} args 決済変更in
 * @param {string} args.shopId
 * @param {string} args.shopPass
 * @param {string} args.accessId
 * @param {string} args.accessPass
 * @param {string} args.jobCd
 * @param {number} args.amount
 * @param {string} args.method
 * @returns {Promise<IAlterTranResult>} 決済変更out
 */
function alterTran(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
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
        }).promise();
        debug('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError_1.BadRequestError(body);
        }
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
exports.alterTran = alterTran;
/**
 * 取引状態参照
 * @memberOf services/credit
 * @function searchTrade
 * @param {ISearchTradeArgs} args 取引状態参照in
 * @param {string} args.shopId
 * @param {string} args.shopPass
 * @param {string} args.orderID
 * @returns {Promise<ISearchTradeResult>} 取引状態参照out
 */
function searchTrade(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
            url: `${process.env.GMO_ENDPOINT}/payment/SearchTrade.idPass`,
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                OrderID: args.orderId
            }
        }).promise();
        debug('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError_1.BadRequestError(body);
        }
        return {
            orderId: result.OrderID,
            status: result.Status,
            processDate: result.ProcessDate,
            jobCd: result.JobCd,
            accessId: result.AccessID,
            accessPass: result.AccessPass,
            itemCode: result.ItemCode,
            amount: result.Amount,
            tax: result.Tax,
            siteId: result.SiteID,
            memberId: result.MemberID,
            cardNo: result.CardNo,
            expire: result.Expire,
            method: result.Method,
            payTimes: result.PayTimes,
            forward: result.Forward,
            tranId: result.TranID,
            approve: result.Approve,
            clientField1: result.ClientField1,
            clientField2: result.ClientField2,
            clientField3: result.ClientField3,
            errCode: result.ErrCode,
            errInfo: result.ErrInfo
        };
    });
}
exports.searchTrade = searchTrade;
/**
 * 金額変更
 * @memberof services/credit
 * @function changeTran
 * @param {IChangeTranArgs} args 決済変更in
 * @param {string} args.shopId ショップID
 * @param {string} args.shopPass ショップパスワード
 * @param {string} args.accessId 取引ID
 * @param {string} args.accessPass 取引パスワード
 * @param {string} args.jobCd 処理区分
 * @param {number} args.amount 利用金額
 * @param {string} args.tax 税送料
 * @returns {Promise<IChangeTranResult>} 金額変更out
 */
function changeTran(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
            url: `${process.env.GMO_ENDPOINT}/payment/ChangeTran.idPass`,
            form: {
                ShopID: args.shopId,
                ShopPass: args.shopPass,
                AccessID: args.accessId,
                AccessPass: args.accessPass,
                JobCd: args.jobCd,
                Amount: args.amount,
                Tax: args.tax
            }
        }).promise();
        debug('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new BadRequestError_1.BadRequestError(body);
        }
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
exports.changeTran = changeTran;
