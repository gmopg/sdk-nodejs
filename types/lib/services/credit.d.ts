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
export declare function entryTranInterface(args: EntryTranInterfaceArgs): Promise<EntryTranInterfaceResult>;
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
export declare function execTranInterface(args: ExecTranInterfaceArgs): Promise<ExecTranInterfaceResult>;
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
export declare function alterTranInterface(args: AlterTranInterfaceArgs): Promise<AlterTranInterfaceResult>;
