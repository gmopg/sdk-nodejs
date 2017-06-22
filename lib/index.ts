/**
 * gmo-service
 *
 * @ignore
 */

import * as util from 'util';

if (process.env.GMO_ENDPOINT === undefined) {
    throw new Error('NPM warnings. The environment variable "GMO_ENDPOINT" is required for using @motionpicture/gmo-service.');
}

import * as cardService from './services/card';
import * as creditService from './services/credit';
import * as gmoUtil from './utils/util';

export const services = {
    card: cardService,
    credit: creditService
};

export const utils = {
    util: gmoUtil
};

const getUtilOnRoot = util.deprecate(
    () => {
        return gmoUtil;
    },
    'Util is deprecated, use utils.util'
);

const getCreditServiceOnRoot = util.deprecate(
    () => {
        return creditService;
    },
    'CreditService is deprecated, use services.credit'
);

/**
 * @deprecated
 */
// tslint:disable-next-line:variable-name
export const Util = <typeof gmoUtil>getUtilOnRoot();

/**
 * @deprecated
 */
// tslint:disable-next-line:variable-name
export const CreditService = <typeof creditService>getCreditServiceOnRoot();
