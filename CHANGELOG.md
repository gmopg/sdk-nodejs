# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## Unreleased
### Added

### Changed
- 会員カード検索で、会員は存在してカードが存在しない場合、空配列を返すように変更。

### Deprecated

### Removed

### Fixed

### Security

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
