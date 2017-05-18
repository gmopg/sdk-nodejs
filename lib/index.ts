/**
 * gmo-service
 *
 * @ignore
 */

if (process.env.GMO_ENDPOINT === undefined) {
    throw new Error('NPM warnings. The environment variable "GMO_ENDPOINT" is required for using @motionpicture/gmo-service.');
}

import * as CreditService from './services/credit';
import * as Util from './utils/util';
export {
    Util,
    CreditService
};
