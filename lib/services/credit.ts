import request = require("request");
import querystring = require("querystring");

/**
 * 取引登録
 */
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
                url: `${process.env.GMO_ENDPOINT}/payment/EntryTran.idPass`,
                form: {
                    ShopID: process.env.GMO_SHOP_ID,
                    ShopPass: process.env.GMO_SHOP_PASS,
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

/**
 * 決済実行
 */
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

/**
 * 決済変更
 */
export namespace alterTranInterface {
    export interface Args {
        access_id: string,
        access_pass: string,
        job_cd: string,
        amount?: number,
        method?: string,
    }

    export interface Result {
        access_id: string,
        access_pass: string,
        forward: string,
        approve: string,
        tran_id: string,
        tran_date: string,
    }

    export function call(args: Args) {
        return new Promise((resolve: (result: Result) => void, reject: (err: Error) => void) => {
            console.log("requesting...", args);
            request.post({
                url: `${process.env.GMO_ENDPOINT}/payment/AlterTran.idPass`,
                form: {
                    ShopID: process.env.GMO_SHOP_ID,
                    ShopPass: process.env.GMO_SHOP_PASS,
                    AccessID: args.access_id,
                    AccessPass: args.access_pass,
                    JobCd: args.job_cd,
                    Amount: args.amount,
                    Method: args.method,
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
                    forward: result.Forward,
                    approve: result.Approve,
                    tran_id: result.TranID,
                    tran_date: result.TranDate,
                });
            });
        });
    }
}