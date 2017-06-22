"use strict";
/**
 * gmo-service
 *
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
const util = require("util");
if (process.env.GMO_ENDPOINT === undefined) {
    throw new Error('NPM warnings. The environment variable "GMO_ENDPOINT" is required for using @motionpicture/gmo-service.');
}
const cardService = require("./services/card");
const creditService = require("./services/credit");
const gmoUtil = require("./utils/util");
exports.services = {
    card: cardService,
    credit: creditService
};
exports.utils = {
    util: gmoUtil
};
const getUtilOnRoot = util.deprecate(() => {
    return gmoUtil;
}, 'Util is deprecated, use utils.util');
const getCreditServiceOnRoot = util.deprecate(() => {
    return creditService;
}, 'CreditService is deprecated, use services.credit');
/**
 * @deprecated
 */
// tslint:disable-next-line:variable-name
exports.Util = getUtilOnRoot();
/**
 * @deprecated
 */
// tslint:disable-next-line:variable-name
exports.CreditService = getCreditServiceOnRoot();
