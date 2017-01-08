export function initialize(args: {
    endpoint: string,
}) {
    // TODO betterな方法を考える
    process.env.GMO_ENDPOINT = args.endpoint;
}

import * as Util from "./lib/utils/util";
import * as CreditService from "./lib/services/credit";
export {
    Util,
    CreditService
}