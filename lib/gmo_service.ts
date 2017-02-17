/**
 * gmo_service
 */

if (!process.env.GMO_ENDPOINT) throw new Error('GMO_ENDPOINT is undefined');

import * as CreditService from './services/credit';
import * as Util from './utils/util';
export {
    Util,
    CreditService
}
