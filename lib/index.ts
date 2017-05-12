/**
 * gmo-service
 *
 * @ignore
 */

if (process.env.GMO_ENDPOINT === undefined) {
    throw new Error('NPM warnings. The environment variable "GMO_ENDPOINT" is required for using @motionpicture/gmo-service.');
}

import * as CardService from './services/card';
import * as CreditService from './services/credit';
import * as MemberService from './services/member';
import * as Util from './utils/util';
export {
    Util,
    CardService,
    CreditService,
    MemberService
}
