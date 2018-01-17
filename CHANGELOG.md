# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased
### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security


## v4.2.0 - 2018-01-17
### Added
- リクエストハンドラーをカスタマイズできるサービスクラスを追加。

## v4.1.0 - 2017-10-28
### Added
- カード決済結果通知ファクトリーを追加。

## v4.0.2 - 2017-09-27
### Changed
- transfer repository to organization.
- exampleを整理。

### Security
- update dependencies.

## v4.0.1 - 2017-09-24
### Added
- circleci設定追加。
- READMEにバッジを追加。

## v4.0.0 - 2017-07-21
### Changed
 - 定数をenumへ変更

### Removed
 - CardServiceネームスペース削除
 - Utilネームスペース削除

### Security
- 依存パッケージを最新に更新。
- [@types/request-promise-native@^1.0.6](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/request-promise-native)
- [jsdoc@^3.5.3](https://github.com/jsdoc3/jsdoc)
- [nyc@^11.1.0](https://www.npmjs.com/package/nyc)
- [snyk@^1.36.2](https://github.com/snyk/snyk)
- [tslint@^5.5.0](https://github.com/palantir/tslint)
- [tslint-microsoft-contrib@^5.0.1](https://github.com/Microsoft/tslint-microsoft-contrib)
- [typescript@^2.4.2](https://github.com/Microsoft/TypeScript)

## v3.6.0 - 2017-06-29
### Added
- カード会員で決済実行できるように、決済実行のパラメーターを拡張。

## v3.5.1 - 2017-06-27
### Changed
- インターフェースをエクスポートするように、indexモジュールでのエクスポート記述方法を変更。

## v3.5.0 - 2017-06-25
### Changed
- 会員参照で、指定されたサイトIDと会員IDの会員が存在しない場合、nullを返すように変更。

### Security
- [nyc@^11.0.2](https://www.npmjs.com/package/nyc)をテストスクリプトに追加。

## v3.4.0 - 2017-06-23
### Changed
- 会員カード検索で、会員は存在してカードが存在しない場合、空配列を返すように変更。

## v3.3.0 - 2017-06-23
### Added
- 会員インターフェースを追加。

### Changed
- indexファイルでのモジュールエクスポート形式を変更。互換性は担保して、古いモジュールは非推奨の警告を出すように設定。

### Deprecated
- indexファイルのルートオブジェクトにサービスやユーティリティをエクスポートすることを非推奨に設定。

### Fixed
- BadRequestErrorのコンストラクター引数がundefinedの場合に、適切にエラーオブジェクトを生成できないバグを修正。

### Security
- 依存パッケージを最新に更新。
- [typescript@^2.4.0](https://github.com/Microsoft/TypeScript)
- [tslint@^5.4.3](https://github.com/palantir/tslint)に対応
- テストコード調整。

## v3.2.1 - 2017-05-18
### Added
- 変更履歴追加。
