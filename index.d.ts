export declare var PAY_TYPE_CREDIT: string;
export declare var PAY_TYPE_SUICA: string;
export declare var PAY_TYPE_EDY: string;
export declare var PAY_TYPE_CVS: string;
export declare var PAY_TYPE_CASH: string;
export declare var STATUS_CVS_UNPROCESSED: string;
export declare var STATUS_CVS_REQSUCCESS: string;
export declare var STATUS_CVS_PAYSUCCESS: string;
export declare var STATUS_CVS_PAYFAIL: string;
export declare var STATUS_CVS_EXPIRED: string;
export declare var STATUS_CVS_CANCEL: string;
export declare var STATUS_CREDIT_UNPROCESSED: string;
export declare var STATUS_CREDIT_AUTHENTICATED: string;
export declare var STATUS_CREDIT_CHECK: string;
export declare var STATUS_CREDIT_CAPTURE: string;
export declare var STATUS_CREDIT_AUTH: string;
export declare var STATUS_CREDIT_SALES: string;
export declare var STATUS_CREDIT_VOID: string;
export declare var STATUS_CREDIT_RETURN: string;
export declare var STATUS_CREDIT_RETURNX: string;
export declare var STATUS_CREDIT_SAUTH: string;
export declare function createShopPassString(shopId: string, orderId: string, amount: string, shopPassword: string, dateTime: string): any;
export declare namespace entryTranInterface {
    interface Args {
        order_id: string;
        job_cd: string;
        amount: number;
    }
    interface Result {
        access_id: string;
        access_pass: string;
    }
    function call(args: Args): Promise<Result>;
}
export declare namespace execTranInterface {
    interface Args {
        access_id: string;
        access_pass: string;
        order_id: string;
        method?: string;
        pay_times?: string;
        card_no?: string;
        expire?: string;
        security_code?: string;
        token?: string;
        pin?: string;
        client_field1?: string;
        client_field2?: string;
        client_field3?: string;
    }
    interface Result {
        acs: string;
        order_id: string;
        forward: string;
        method: string;
        pay_times: string;
        approve: string;
        tran_id: string;
        tran_date: string;
        check_string: string;
        client_field1: string;
        client_field2: string;
        client_field3: string;
    }
    function call(args: Args): Promise<Result>;
}
