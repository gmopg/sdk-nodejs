/**
 * テスト環境変数ヘルパー
 *
 * @ignore
 */
before(async () => {
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
});
