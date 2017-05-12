/**
 * GMO　会員
 * @namespace services/member
 */

import * as createDebug from 'debug';
import * as querystring from 'querystring';
import * as request from 'request-promise-native';

const debug = createDebug('gmo-service:member');

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
export async function saveMember(args: ISaveMemberArgs): Promise<ISaveMemberResult> {
    debug('requesting...', args);
    const body = await request.post({
        url: `${process.env.GMO_ENDPOINT}/payment/SaveMember.idPass`,
        form: {
            SiteID: args.siteId,
            SitePass: args.sitePass,
            MemberID: args.memberId,
            MemberName: args.memberName
        }
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new Error(body);
    }

    return {
        memberId: result.MemberID
    };
}

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
export async function updateMember(args: IUpdateMemberArgs): Promise<IUpdateMemberResult> {
    debug('requesting...', args);
    const body = await request.post({
        url: `${process.env.GMO_ENDPOINT}/payment/UpdateMember.idPass`,
        form: {
            SiteID: args.siteId,
            SitePass: args.sitePass,
            MemberID: args.memberId,
            MemberName: args.memberName
        }
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new Error(body);
    }

    return {
        memberId: result.MemberID
    };
}

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
export async function deleteMember(args: IDeleteMemberArgs): Promise<IDeleteMemberResult> {
    debug('requesting...', args);
    const body = await request.post({
        url: `${process.env.GMO_ENDPOINT}/payment/DeleteMember.idPass`,
        form: {
            SiteID: args.siteId,
            SitePass: args.sitePass,
            MemberID: args.memberId
        }
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new Error(body);
    }

    return {
        memberId: result.MemberID
    };
}

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
export async function searchMember(args: ISearchMemberArgs): Promise<ISearchMemberResult> {
    debug('requesting...', args);
    const body = await request.post({
        url: `${process.env.GMO_ENDPOINT}/payment/SearchMember.idPass`,
        form: {
            SiteID: args.siteId,
            SitePass: args.sitePass,
            MemberID: args.memberId
        }
    }).promise();
    debug('request processed.', body);

    const result = querystring.parse(body);
    if (result.ErrCode !== undefined) {
        throw new Error(body);
    }

    return {
        memberId: result.MemberID,
        memberName: result.MemberName,
        deleteFlag: result.DeleteFlag
    };
}
