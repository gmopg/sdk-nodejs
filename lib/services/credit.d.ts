export declare namespace entryTranInterface {
    interface Args {
        shop_id: string;
        shop_pass: string;
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
        pay_times?: number;
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
export declare namespace alterTranInterface {
    interface Args {
        shop_id: string;
        shop_pass: string;
        access_id: string;
        access_pass: string;
        job_cd: string;
        amount?: number;
        method?: string;
    }
    interface Result {
        access_id: string;
        access_pass: string;
        forward: string;
        approve: string;
        tran_id: string;
        tran_date: string;
    }
    function call(args: Args): Promise<Result>;
}
