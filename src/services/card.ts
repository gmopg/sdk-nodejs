/**
 * カード決済インターフェース
 * @namespace services/card
 */

import * as CardFactory from '../factory/card';
import { CardService } from '../service/card';

const service = new CardService({ endpoint: <string>process.env.GMO_ENDPOINT });

/**
 * 会員登録in
 * @memberof services/member
 * @interface ISaveMemberArgs
 */
export type ISaveMemberArgs = CardFactory.ISaveMemberArgs;
/**
 * 会員登録out
 * @memberof services/member
 * @interface ISaveMemberResult
 */
export type ISaveMemberResult = CardFactory.ISaveMemberResult;
/**
 * 会員登録
 * @memberof services/member
 * @function saveMember
 * @param {ISaveMemberArgs} args 会員登録in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @param {string | undefined} args.memberName 会員名
 * @returns {Promise<ISaveMemberResult>} 会員登録out
 */
export async function saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
    return service.saveMember(args);
}

/**
 * 会員更新in
 * @memberof services/member
 * @interface IUpdateMemberArgs
 */
export type IUpdateMemberArgs = CardFactory.IUpdateMemberArgs;
/**
 * 会員更新out
 * @memberof services/member
 * @interface IUpdateMemberResult
 */
export type IUpdateMemberResult = CardFactory.IUpdateMemberResult;
/**
 * 会員更新
 * @memberof services/member
 * @function updateMember
 * @param {IUpdateMemberArgs} args 会員更新in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @param {string | undefined} args.memberName 会員名
 * @returns {Promise<IUpdateMemberResult>} 会員更新out
 */
export async function updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
    return service.updateMember(args);
}

/**
 * 会員削除in
 * @memberof services/member
 * @interface IDeleteMemberArgs
 */
export type IDeleteMemberArgs = CardFactory.IDeleteMemberArgs;
/**
 * 会員削除out
 * @memberof services/member
 * @interface IDeleteMemberResult
 */
export type IDeleteMemberResult = CardFactory.IDeleteMemberResult;
/**
 * 会員削除
 * @memberof services/member
 * @function deleteMember
 * @param {ISaveMemberArgs} args 会員削除in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @returns {Promise<ISaveMemberResult>} 会員削除out
 */
export async function deleteMember(args: IDeleteMemberArgs): Promise<IDeleteMemberResult> {
    return service.deleteMember(args);
}

/**
 * 会員参照in
 * @memberof services/member
 * @interface ISearchMemberArgs
 */
export type ISearchMemberArgs = CardFactory.ISearchMemberArgs;
/**
 * 会員参照out
 * @memberof services/member
 * @interface ISearchMemberResult
 */
export type ISearchMemberResult = CardFactory.ISearchMemberResult;
/**
 * 会員参照
 * @memberof services/member
 * @function searchMember
 * @param {ISearchMemberArgs} args 会員参照in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @returns {Promise<ISearchMemberResult>} 会員参照out
 */
export async function searchMember(args: ISearchMemberArgs): Promise<ISearchMemberResult> {
    return service.searchMember(args);
}

/**
 * カード登録・更新in
 * @memberof services/card
 * @interface ISaveCardArgs
 */
export type ISaveCardArgs = CardFactory.ISaveCardArgs;
/**
 * カード登録・更新out
 * @memberof services/card
 * @interface ISaveCardResult
 */
export type ISaveCardResult = CardFactory.ISaveCardResult;

/**
 * カード登録・更新
 * @memberof services/card
 * @function saveCard
 * @param {ISaveCardArgs} args カード登録・更新in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @param {util.SeqMode} args.seqMode カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
 * @param {number} args.cardSeq カード登録連番（登録時は、入力不可です。更新時は、更新する値を設定します。）
 * @param {string} args.defaultFlag 洗替・継続課金フラグ（0:継続課金対象としない(デフォルト)1:継続課金対象とする）
 * @param {string} args.cardName カード会社略称
 * @param {string} args.cardNo カード番号
 * @param {string} args.cardPass カードパスワード
 * @param {string} args.expire 有効期限
 * @param {string} args.holderName 名義人
 * @param {string} args.token トークン
 * @returns {Promise<ISaveCardResult>} カード登録・更新out
 */
export async function saveCard(args: ISaveCardArgs): Promise<ISaveCardResult> {
    return service.saveCard(args);
}

/**
 * カード削除in
 * @memberof services/card
 * @interface IDeleteCardArgs
 */
export type IDeleteCardArgs = CardFactory.IDeleteCardArgs;
/**
 * カード削除out
 * @memberof services/card
 * @interface IDeleteCardResult
 */
export type IDeleteCardResult = CardFactory.IDeleteCardResult;

/**
 * カード削除
 * @memberof services/card
 * @function deleteCard
 * @param {IDeleteCardArgs} args カード削除in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @param {util.SeqMode} args.seqMode カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
 * @param {string} args.cardSeq カード登録連番
 * @returns {Promise<IDeleteCardResult>} カード削除out
 */
export async function deleteCard(args: IDeleteCardArgs): Promise<IDeleteCardResult> {
    return service.deleteCard(args);
}

/**
 * カード参照in
 * @memberof services/card
 * @interface ISearchCardArgs
 */
export type ISearchCardArgs = CardFactory.ISearchCardArgs;
/**
 * カード参照out
 * @memberof services/card
 * @interface ISearchCardResult
 */
export type ISearchCardResult = CardFactory.ISearchCardResult;

/**
 * カード参照
 * @memberof services/card
 * @function searchCard
 * @param {ISearchCardArgs} args カード参照in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @param {util.SeqMode} args.seqMode カード登録連番モード（0:論理モード1:物理モード）
 * @param {string} args.cardSeq カード登録連番
 * @returns {Promise<ISearchCardResult[]>} カード参照out
 */
export async function searchCard(args: ISearchCardArgs): Promise<ISearchCardResult[]> {
    return service.searchCard(args);
}
