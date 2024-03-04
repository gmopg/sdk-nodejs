/**
 * ファクトリー
 */
import * as CardFactory from './factory/card';
import * as CreditFactory from './factory/credit';
// import * as CreditCardResultNotificationFactory from './factory/resultNotification/creditCard';

export import card = CardFactory;
export import credit = CreditFactory;
// export namespace resultNotification {
//     export import creditCard = CreditCardResultNotificationFactory;
// }
