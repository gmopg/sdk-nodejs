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

export namespace services {
    export import card = cardService;
    export import credit = creditService;
}

export namespace utils {
    export import util = gmoUtil;
}

const getUtilOnRoot = util.deprecate(
    () => {
        return gmoUtil;
    },
    '@motionpicture/gmo-service:Util is deprecated, use utils.util'
);

const getCreditServiceOnRoot = util.deprecate(
    () => {
        return creditService;
    },
    '@motionpicture/gmo-service:CreditService is deprecated, use services.credit'
);

/**
 * @deprecated v4.0.0でutils.utilに以降の予定です
 */
// tslint:disable-next-line:variable-name
export const Util = <typeof gmoUtil>getUtilOnRoot();

/**
 * @deprecated v4.0.0でservices.creditに以降の予定です
 */
// tslint:disable-next-line:variable-name
export const CreditService = <typeof creditService>getCreditServiceOnRoot();
