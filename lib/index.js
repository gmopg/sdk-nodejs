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
const cardService = require("./services/card");
const creditService = require("./services/credit");
const gmoUtil = require("./utils/util");
var services;
(function (services) {
    services.card = cardService;
    services.credit = creditService;
})(services = exports.services || (exports.services = {}));
var utils;
(function (utils) {
    utils.util = gmoUtil;
})(utils = exports.utils || (exports.utils = {}));
