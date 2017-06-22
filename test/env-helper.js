var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * テスト環境変数ヘルパー
 *
 * @ignore
 */
before(() => __awaiter(this, void 0, void 0, function* () {
    if (process.env.TEST_GMO_SHOP_ID === undefined) {
        throw new Error('process.env.TEST_GMO_SHOP_ID required for test');
    }
    if (process.env.TEST_GMO_SHOP_PASS === undefined) {
        throw new Error('process.env.TEST_GMO_SHOP_PASS required for test');
    }
    if (process.env.TEST_GMO_SITE_ID === undefined) {
        throw new Error('process.env.TEST_GMO_SITE_ID required for test');
    }
    if (process.env.TEST_GMO_SITE_PASS === undefined) {
        throw new Error('process.env.TEST_GMO_SITE_PASS required for test');
    }
}));
