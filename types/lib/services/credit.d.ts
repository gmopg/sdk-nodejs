/**
 * 取引登録in
 * @memberOf services/credit
 * @interface EntryTranArgs
 */
export interface EntryTranArgs {
    shopId: string;
    shopPass: string;
    orderId: string;
    jobCd: string;
    amount: number;
}
/**
 * 取引登録out
 * @memberOf services/credit
 * @interface EntryTranResult
 */
export interface EntryTranResult {
    accessId: string;
    accessPass: string;
}
/**
 * 取引登録
 * @memberOf services/credit
 * @function entryTran
 * @param {EntryTranArgs} args 取引登録in
 * @param {string} args.shopId
 * @param {string} args.shopPass
 * @param {string} args.orderId
 * @param {string} args.jobCd
 * @param {string} args.amount
 * @returns {Promise<EntryTranResult>} 取引登録out
 */
export declare function entryTran(args: EntryTranArgs): Promise<EntryTranResult>;
/**
 * 決済実行in
 * @memberOf services/credit
 * @interface
 */
export interface ExecTranArgs {
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
 * @memberOf services/credit
 * @interface
 */
export interface ExecTranResult {
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
 * @memberOf services/credit
 * @function execTran
 * @param {ExecTranArgs} args 決済実行in
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
 * @returns {Promise<ExecTranResult>} 決済実行out
 */
export declare function execTran(args: ExecTranArgs): Promise<ExecTranResult>;
/**
 * 決済変更in
 * @memberOf services/credit
 * @interface
 */
export interface AlterTranArgs {
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
 * @memberOf services/credit
 * @interface
 */
export interface AlterTranResult {
    accessId: string;
    accessPass: string;
    forward: string;
    approve: string;
    tranId: string;
    tranDate: string;
}
/**
 * 決済変更
 * @memberOf services/credit
 * @function alterTran
 * @param {AlterTranArgs} args 決済変更in
 * @param {string} args.shopId
 * @param {string} args.shopPass
 * @param {string} args.accessId
 * @param {string} args.accessPass
 * @param {string} args.jobCd
 * @param {number} args.amount
 * @param {string} args.method
 * @returns {Promise<AlterTranResult>} 決済変更out
 */
export declare function alterTran(args: AlterTranArgs): Promise<AlterTranResult>;
