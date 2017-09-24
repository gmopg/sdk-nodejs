# GMO Client Library for Node.js

[![npm (scoped)](https://img.shields.io/npm/v/@motionpicture/gmo-service.svg)](https://www.npmjs.com/package/@motionpicture/gmo-service)
[![Build status](https://circleci.com/gh/ilovegadd/gmo-service.png?style=shield)](https://circleci.com/gh/ilovegadd/gmo-service)
[![Coverage Status](https://coveralls.io/repos/github/ilovegadd/gmo-service/badge.svg)](https://coveralls.io/github/ilovegadd/gmo-service)
[![Dependency Status](https://img.shields.io/david/ilovegadd/gmo-service.svg)](https://david-dm.org/ilovegadd/gmo-service)
[![Known Vulnerabilities](https://snyk.io/test/github/ilovegadd/gmo-service/badge.svg)](https://snyk.io/test/github/ilovegadd/gmo-service)
[![npm](https://img.shields.io/npm/dm/@motionpicture/gmo-service.svg)](https://nodei.co/npm/@motionpicture/gmo-service/)

node.jsでGMOサービスを使うためのパッケージです。


# Features


# Getting Started

## Install

```shell
npm install @motionpicture/gmo-service
```

## Usage

```Javascript
var GMO = require('@motionpicture/gmo-service');
```

When using the GMO Service SDK, you must provide connection information. This can be provided using:

* set environment variables - For example,
```shell
set GMO_ENDPOINT=*****
```

for test
```shell
set TEST_GMO_SHOP_ID=*****
set TEST_GMO_SHOP_PASS=*****
set TEST_GMO_SITE_ID=*****
set TEST_GMO_SITE_PASS=*****
```

## Code Samples

コードサンプルは./examplesにあります。

## Debug

DEBUG環境変数をセットすることでリクエストのIN,OUTをデバッグできます。

```shell
set DEBUG=gmo-service:*
```


# Tests

単体テストは以下で実行。

```shell
npm test
```


# JsDoc

`npm run jsdoc`でjsdocを作成できます。./docsに出力されます。
