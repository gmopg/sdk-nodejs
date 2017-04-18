"use strict";
/**
 * gmo-service
 *
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.GMO_ENDPOINT === undefined) {
    throw new Error('NPM warnings. The environment variable "GMO_ENDPOINT" is required for using @motionpicture/gmo-service.');
}
const CreditService = require("./services/credit");
exports.CreditService = CreditService;
const Util = require("./utils/util");
exports.Util = Util;
