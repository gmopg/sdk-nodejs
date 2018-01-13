/**
 * GMOサービス
 * @module
 */

// if (process.env.GMO_ENDPOINT === undefined) {
//     throw new Error('NPM warnings. The environment variable "GMO_ENDPOINT" is required for using @motionpicture/gmo-service.');
// }

import * as factory from './factory';
import * as cardService from './services/card';
import * as creditService from './services/credit';
import * as gmoUtil from './utils/util';

import { CardService } from './service/card';
import { CreditService } from './service/credit';

export import factory = factory;

/**
 * @deprecated
 */
export namespace services {
    export import card = cardService;
    export import credit = creditService;
}

/**
 * recommended
 */
export namespace service {
    /**
     * クレジットカード決済サービス
     * @class
     */
    export class Card extends CardService { }
    /**
     * クレジットカード決済サービス
     * @class
     */
    export class Credit extends CreditService { }
}

export namespace utils {
    export import util = gmoUtil;
}
