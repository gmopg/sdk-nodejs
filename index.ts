export function initialize(args: {
    endpoint: string,
    shop_id: string,
    shop_pass: string,
}) {
    // TODO betterな方法を考える
    process.env.GMO_ENDPOINT = args.endpoint;
    process.env.GMO_SHOP_ID = args.shop_id;
    process.env.GMO_SHOP_PASS = args.shop_pass;
}

import * as Util from "./lib/utils/util";
import * as CreditService from "./lib/services/credit";
export {
    Util,
    CreditService
}