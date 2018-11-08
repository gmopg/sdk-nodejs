# GMO Client Library for Node.js

[![npm (scoped)](https://img.shields.io/npm/v/@motionpicture/gmo-service.svg)](https://www.npmjs.com/package/@motionpicture/gmo-service)
[![CircleCI](https://circleci.com/gh/gmopg/sdk-nodejs.svg?style=svg)](https://circleci.com/gh/gmopg/sdk-nodejs)
[![Coverage Status](https://coveralls.io/repos/github/gmopg/sdk-nodejs/badge.svg)](https://coveralls.io/github/gmopg/sdk-nodejs)
[![Dependency Status](https://img.shields.io/david/motionpicture/gmo-service.svg)](https://david-dm.org/motionpicture/gmo-service)
[![npm](https://img.shields.io/npm/dm/@motionpicture/gmo-service.svg)](https://nodei.co/npm/@motionpicture/gmo-service/)

Node.jsでGMOサービスを使うためのパッケージです。

## Table of contents

* [Usage](#usage)
* [Example](#code-samples)
* [Jsdoc](#jsdoc)
* [License](#license)

## Usage

```sh
npm install @motionpicture/gmo-service
```

```js
const GMO = require('@motionpicture/gmo-service');
```

When using the GMO Service SDK, you must provide connection information. This can be provided using:

### Environment variables

| Name           | Required | Value         | Purpose          |
| -------------- | -------- | ------------- | ---------------- |
| `DEBUG`        | false    | gmo-service:* | Debug            |
| `GMO_ENDPOINT` | false    |               | GMO API endpoint |

### クレジットカード決済(即時売上)の例

```js
const GMO = require('@motionpicture/gmo-service');

const orderId ='orderId';
const creditService = new GMO.service.Credit(
    { endpoint: process.env.GMO_ENDPOINT }
);
creditService.entryTran({
    shopId: 'your shopId',
    shopPass: 'sour shopPass',
    orderId: orderId,
    jobCd: GMO.utils.util.JobCd.Auth,
    amount: 1234
}).then((entryTranResult) => {
    console.log('entryTranResult:', entryTranResult);

    creditService.execTran({
        accessId: entryTranResult.accessId,
        accessPass: entryTranResult.accessPass,
        orderId: orderId,
        method: GMO.utils.util.Method.Lump,
        cardNo: '1234123412341234',
        expire: '2024',
        securityCode: '123'
    }).then((execTranResult) => {
        console.log('execTranResult:', execTranResult);

        creditService.alterTran({
            shopId: 'your shopId',
            shopPass: 'sour shopPass',
            accessId: entryTranResult.accessId,
            accessPass: entryTranResult.accessPass,
            jobCd: GMO.utils.util.JobCd.Sales,
            amount: amount
        }).then((alterTranResult) => {
            console.log('alterTranResult:', alterTranResult);
        });
    });
});
```

## Code Samples

コードサンプルは [example](https://github.com/motionpicture/gmo-service/tree/master/example) にあります。

## Jsdoc

`npm run doc`でjsdocを作成できます。./docに出力されます。

## License

ISC
