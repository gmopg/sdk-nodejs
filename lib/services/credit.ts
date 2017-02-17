/**
 * GMO　クレジット
 * @namespace Credit
 */

import * as querystring from 'querystring';
import * as request from 'request-promise-native';

/**
 * 取引登録in
 * @memberOf Credit
 * @interface EntryTranInterfaceArgs
 */
export interface EntryTranInterfaceArgs {
    shopId: string;
    shopPass: string;
    orderId: string;
    jobCd: string;
    amount: number;
}
/**
 * 取引登録out
 * @memberOf Credit
 * @interface EntryTranInterfaceResult
 */
export interface EntryTranInterfaceResult {
    accessId: string;
    accessPass: string;
}
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
export async function entryTranInterface(args: EntryTranInterfaceArgs): Promise<EntryTranInterfaceResult> {
    // tslint:disable-next-line:no-console
    console.log('requesting...', args);
    const body = await request.post({
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
    if (result.ErrCode) throw new Error(body);

    return {
        accessId: result.AccessID,
        accessPass: result.AccessPass
    };
}

/**
 * 決済実行in
 * @memberOf Credit
 * @interface
 */
export interface ExecTranInterfaceArgs {
    accessId: string;
    accessPass: string;
    orderId: string;
    method?: string;
    payTimes?: number;
    cardNo?: string;
    expire?: string;
    securityCode?: string;
    token?: string;
    pin?: string;
    clientField1?: string;
    clientField2?: string;
    clientField3?: string;
}

/**
 * 決済実行out
 * @memberOf Credit
 * @interface
 */
export interface ExecTranInterfaceResult {
    acs: string;
    orderId: string;
    forward: string;
    method: string;
    payTimes: string;
    approve: string;
    tranId: string;
    tranDate: string;
    checkString: string;
    clientField1: string;
    clientField2: string;
    clientField3: string;
}

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
export async function execTranInterface(args: ExecTranInterfaceArgs): Promise<ExecTranInterfaceResult> {
    // tslint:disable-next-line:no-console
    console.log('requesting...', args);
    const body = await request.post({
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
    if (result.ErrCode) throw new Error(body);

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
}

/**
 * 決済変更in
 * @memberOf Credit
 * @interface
 */
export interface AlterTranInterfaceArgs {
    shopId: string;
    shopPass: string;
    accessId: string;
    accessPass: string;
    jobCd: string;
    amount?: number;
    method?: string;
}
/**
 * 決済変更out
 * @memberOf Credit
 * @interface
 */
export interface AlterTranInterfaceResult {
    accessId: string;
    accessPass: string;
    forward: string;
    approve: string;
    tranId: string;
    tranDate: string;
}

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
export async function alterTranInterface(args: AlterTranInterfaceArgs): Promise<AlterTranInterfaceResult> {
    // tslint:disable-next-line:no-console
    console.log('requesting...', args);
    const body = await request.post({
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
    if (result.ErrCode) throw new Error(body);

    return {
        accessId: result.AccessID,
        accessPass: result.AccessPass,
        forward: result.Forward,
        approve: result.Approve,
        tranId: result.TranID,
        tranDate: result.TranDate
    };
}
