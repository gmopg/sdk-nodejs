"use strict";
function initialize(args) {
    process.env.GMO_ENDPOINT = args.endpoint;
    process.env.GMO_SHOP_ID = args.shop_id;
    process.env.GMO_SHOP_PASS = args.shop_pass;
}
exports.initialize = initialize;
const Util = require("./lib/utils/util");
exports.Util = Util;
const CreditService = require("./lib/services/credit");
exports.CreditService = CreditService;
