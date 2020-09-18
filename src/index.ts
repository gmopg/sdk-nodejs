/**
 * GMOサービス
 */
import * as factory from './factory';
import * as gmoUtil from './utils/util';

import { CardService } from './service/card';
import { CreditService } from './service/credit';

export import factory = factory;

/**
 * recommended
 */
export namespace service {
    /**
     * クレジットカード会員サービス
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
