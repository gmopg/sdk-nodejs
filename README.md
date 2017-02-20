# GMO Client Library for Node.js

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
