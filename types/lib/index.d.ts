import * as cardService from './services/card';
import * as creditService from './services/credit';
import * as gmoUtil from './utils/util';
export declare const services: {
    card: typeof cardService;
    credit: typeof creditService;
};
export declare const utils: {
    util: typeof gmoUtil;
};
/**
 * @deprecated v4.0.0でutils.utilに以降の予定です
 */
export declare const Util: typeof gmoUtil;
/**
 * @deprecated v4.0.0でservices.creditに以降の予定です
 */
export declare const CreditService: typeof creditService;
