"use strict";
function initialize(args) {
    process.env.GMO_ENDPOINT = args.endpoint;
}
exports.initialize = initialize;
const Util = require("./lib/utils/util");
exports.Util = Util;
const CreditService = require("./lib/services/credit");
exports.CreditService = CreditService;
