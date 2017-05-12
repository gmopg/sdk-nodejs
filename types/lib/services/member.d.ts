/**
 * 会員登録in
 * @memberof services/member
 * @interface ISaveMemberArgs
 */
export interface ISaveMemberArgs {
    siteId: string;
    sitePass: string;
    memberId: string;
    memberName?: string;
}
/**
 * 会員登録out
 * @memberof services/member
 * @interface ISaveMemberResult
 */
export interface ISaveMemberResult {
    memberId: string;
}
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
export declare function saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult>;
/**
 * 会員更新in
 * @memberof services/member
 * @interface IUpdateMemberArgs
 */
export interface IUpdateMemberArgs {
    siteId: string;
    sitePass: string;
    memberId: string;
    memberName?: string;
}
/**
 * 会員更新out
 * @memberof services/member
 * @interface IUpdateMemberResult
 */
export interface IUpdateMemberResult {
    memberId: string;
}
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
export declare function updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult>;
/**
 * 会員削除in
 * @memberof services/member
 * @interface IDeleteMemberArgs
 */
export interface IDeleteMemberArgs {
    siteId: string;
    sitePass: string;
    memberId: string;
}
/**
 * 会員削除out
 * @memberof services/member
 * @interface IDeleteMemberResult
 */
export interface IDeleteMemberResult {
    memberId: string;
}
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
export declare function deleteMember(args: IDeleteMemberArgs): Promise<IDeleteMemberResult>;
/**
 * 会員参照in
 * @memberof services/member
 * @interface ISearchMemberArgs
 */
export interface ISearchMemberArgs {
    siteId: string;
    sitePass: string;
    memberId: string;
}
/**
 * 会員参照out
 * @memberof services/member
 * @interface ISearchMemberResult
 */
export interface ISearchMemberResult {
    memberId: string;
    memberName: string;
    deleteFlag: string;
}
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
export declare function searchMember(args: ISearchMemberArgs): Promise<ISearchMemberResult>;
