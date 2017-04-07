/**
 * テスト環境変数ヘルパー
 *
 * @ignore
 */
before((done) => {
    if (process.env.TEST_GMO_SHOP_ID === undefined) {
        done(new Error('process.env.TEST_GMO_SHOP_ID required for test'));
        return;
    }
    if (process.env.TEST_GMO_SHOP_PASS === undefined) {
        done(new Error('process.env.TEST_GMO_SHOP_PASS required for test'));
        return;
    }
    done();
});
