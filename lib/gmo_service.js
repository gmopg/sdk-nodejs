/**
 * gmo_service
 */
"use strict";
if (!process.env.GMO_ENDPOINT)
    throw new Error('GMO_ENDPOINT is undefined');
const CreditService = require("./services/credit");
exports.CreditService = CreditService;
const Util = require("./utils/util");
exports.Util = Util;
