const GMO = require('../../');
const readline = require('readline');

/**
 * 3DSサンプル
 */
async function main() {
    const orderId = Date.now().toString();
    const amount = 1800;
    const creditService = new GMO.service.Credit(
        { endpoint: process.env.GMO_ENDPOINT },
        { pool: {} }
    );
    const entryTranResult = await creditService.entryTran({
        shopId: process.env.TEST_GMO_SHOP_ID,
        shopPass: process.env.TEST_GMO_SHOP_PASS,
        orderId: orderId,
        jobCd: GMO.utils.util.JobCd.Auth,
        amount: amount,
        tdFlag: GMO.utils.util.TdFlag.Version2,
        // tdTenantName: 'xxx',
        tds2Type: GMO.utils.util.Tds2Type.Error
    });
    console.log('entryTranResult:', entryTranResult);
    const execTranResult = await creditService.execTran3ds({
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        orderId: orderId,
        method: GMO.utils.util.Method.Lump,
        cardNo: '4100000000000100', // 3DS2.0テストカード
        expire: '2812',
        securityCode: '123',
        retUrl: String(process.env.SECURE_TRAN_RET_URL),
        callbackType: GMO.utils.util.CallbackType.Get,
        // clientField1: 'by samples 1',
        // clientField2: 'by samples 2',
        // clientField3: 'by samples 3',
        // AppMode: '0',
        // Tds2ChallengeIndType: '2',
    });
    console.log('execTranResult:', execTranResult);

    let searchTradeResult = await creditService.searchTrade({
        shopId: process.env.TEST_GMO_SHOP_ID,
        shopPass: process.env.TEST_GMO_SHOP_PASS,
        orderId
    });
    console.log('searchTradeResult:', searchTradeResult);

    // wait callback...
    await new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('callback received?:\n', async (code) => {
            try {
                const secureTran2Result = await creditService.secureTran2({
                    accessId: entryTranResult.accessId,
                    accessPass: entryTranResult.accessPass,
                });
                console.log('secureTran2Result:', secureTran2Result);

                searchTradeResult = await creditService.searchTrade({
                    shopId: process.env.TEST_GMO_SHOP_ID,
                    shopPass: process.env.TEST_GMO_SHOP_PASS,
                    orderId
                });
                console.log('searchTradeResult:', searchTradeResult);

                await new Promise(async (resolve2, reject2) => {
                    const rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });

                    rl.question('VOID or SALES?:\n', async (jobCd) => {
                        if (jobCd === GMO.utils.util.JobCd.Sales) {
                            const alterTranResult = await creditService.alterTran({
                                shopId: process.env.TEST_GMO_SHOP_ID,
                                shopPass: process.env.TEST_GMO_SHOP_PASS,
                                accessId: entryTranResult.accessId,
                                accessPass: entryTranResult.accessPass,
                                // jobCd: GMO.utils.util.JobCd.Sales,
                                jobCd,
                                amount: amount
                            });
                            console.log('alterTranResult:', alterTranResult);
                        } else if (jobCd === GMO.utils.util.JobCd.Void) {
                            const alterTranResult = await creditService.alterTran({
                                shopId: process.env.TEST_GMO_SHOP_ID,
                                shopPass: process.env.TEST_GMO_SHOP_PASS,
                                accessId: entryTranResult.accessId,
                                accessPass: entryTranResult.accessPass,
                                jobCd
                            });
                            console.log('alterTranResult:', alterTranResult);
                        } else {
                            reject2(`jobCd ${jobCd} not implemented`);

                            return;
                        }

                        // rl.close();
                        resolve2();
                    });
                });

                resolve();
            } catch (error) {
                reject(error);
            }
        });
    });
}

main()
    .then()
    .catch(console.error);
