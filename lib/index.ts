/**
 * gmo-service
 *
 * @ignore
 */

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
