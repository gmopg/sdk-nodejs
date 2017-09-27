# GMO Client Library for Node.js

[![npm (scoped)](https://img.shields.io/npm/v/@motionpicture/gmo-service.svg)](https://www.npmjs.com/package/@motionpicture/gmo-service)
[![Build status](https://circleci.com/gh/motionpicture/gmo-service.png?style=shield)](https://circleci.com/gh/motionpicture/gmo-service)
[![Coverage Status](https://coveralls.io/repos/github/motionpicture/gmo-service/badge.svg)](https://coveralls.io/github/motionpicture/gmo-service)
[![Dependency Status](https://img.shields.io/david/motionpicture/gmo-service.svg)](https://david-dm.org/motionpicture/gmo-service)
[![Known Vulnerabilities](https://snyk.io/test/github/motionpicture/gmo-service/badge.svg)](https://snyk.io/test/github/motionpicture/gmo-service)
[![npm](https://img.shields.io/npm/dm/@motionpicture/gmo-service.svg)](https://nodei.co/npm/@motionpicture/gmo-service/)

node.jsでGMOサービスを使うためのパッケージです。


## Table of contents

* [Usage](#usage)
* [Example](#code-samples)
* [Jsdoc](#jsdoc)
* [License](#license)


## Usage

``` sh
npm install @motionpicture/gmo-service
```

``` js
var GMO = require('@motionpicture/gmo-service');
```

When using the GMO Service SDK, you must provide connection information. This can be provided using:

### set environment variables - For example,
``` shell
set GMO_ENDPOINT=*****
```

for test
``` shell
set TEST_GMO_SHOP_ID=*****
set TEST_GMO_SHOP_PASS=*****
set TEST_GMO_SITE_ID=*****
set TEST_GMO_SITE_PASS=*****
```

### Debug

DEBUG環境変数をセットすることでリクエストのIN,OUTをデバッグできます。

``` shell
set DEBUG=gmo-service:*
```

## Code Samples

コードサンプルは [example](https://github.com/motionpicture/gmo-service/tree/master/example) にあります。


## Jsdoc

`npm run doc`でjsdocを作成できます。./docに出力されます。

## License

ISC
