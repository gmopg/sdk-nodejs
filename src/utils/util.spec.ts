/**
 * ユーティリティテスト
 */
import * as assert from 'assert';

import * as Util from './util';

// const TEST_CREATE_SHOP_PASS_STRING_ARGS = {
//     shopId: 'xxx',
//     shopPass: 'xxx',
//     orderId: 'xxx',
//     amount: 123,
//     dateTime: 'xxx'
// };

describe('Util.Method', () => {
    it('支払い方法を取得できるはず', () => {
        const str = Util.Method.Lump;
        assert.equal(typeof str, 'string');
    });
});

// describe('ユーティリティ ショップ情報確認文字列を作成する', () => {
//     it('返却値が文字列', () => {
//         assert.doesNotThrow(() => {
//             const str = Util.createShopPassString(TEST_CREATE_SHOP_PASS_STRING_ARGS);
//             assert.equal(typeof str, 'string');

//             return true;
//         });
//     });
// });
