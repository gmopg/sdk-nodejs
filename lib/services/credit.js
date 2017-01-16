"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require("request-promise-native");
const querystring = require("querystring");
var entryTranInterface;
(function (entryTranInterface) {
    function call(args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("requesting...", args);
            let body = yield request.post({
                url: `${process.env.GMO_ENDPOINT}/payment/EntryTran.idPass`,
                form: {
                    ShopID: args.shop_id,
                    ShopPass: args.shop_pass,
                    OrderID: args.order_id,
                    JobCd: args.job_cd,
                    Amount: args.amount,
                }
            });
            console.log("request processed.", body);
            let result = querystring.parse(body);
            if (result.ErrCode)
                throw new Error(body);
            return {
                access_id: result.AccessID,
                access_pass: result.AccessPass,
            };
        });
    }
    entryTranInterface.call = call;
})(entryTranInterface = exports.entryTranInterface || (exports.entryTranInterface = {}));
var execTranInterface;
(function (execTranInterface) {
    function call(args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("requesting...", args);
            let body = yield request.post({
                url: `${process.env.GMO_ENDPOINT}/payment/ExecTran.idPass`,
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
            });
            console.log("request processed.", body);
            let result = querystring.parse(body);
            if (result.ErrCode)
                throw new Error(body);
            return {
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
            };
        });
    }
    execTranInterface.call = call;
})(execTranInterface = exports.execTranInterface || (exports.execTranInterface = {}));
var alterTranInterface;
(function (alterTranInterface) {
    function call(args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("requesting...", args);
            let body = yield request.post({
                url: `${process.env.GMO_ENDPOINT}/payment/AlterTran.idPass`,
                form: {
                    ShopID: args.shop_id,
                    ShopPass: args.shop_pass,
                    AccessID: args.access_id,
                    AccessPass: args.access_pass,
                    JobCd: args.job_cd,
                    Amount: args.amount,
                    Method: args.method,
                }
            });
            console.log("request processed.", body);
            let result = querystring.parse(body);
            if (result.ErrCode)
                throw new Error(body);
            return {
                access_id: result.AccessID,
                access_pass: result.AccessPass,
                forward: result.Forward,
                approve: result.Approve,
                tran_id: result.TranID,
                tran_date: result.TranDate,
            };
        });
    }
    alterTranInterface.call = call;
})(alterTranInterface = exports.alterTranInterface || (exports.alterTranInterface = {}));
