"use strict";
/**
 * GMO　会員
 * @namespace services/member
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDebug = require("debug");
const querystring = require("querystring");
const request = require("request-promise-native");
const debug = createDebug('gmo-service:member');
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
function saveMember(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
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
    });
}
exports.saveMember = saveMember;
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
function updateMember(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
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
    });
}
exports.updateMember = updateMember;
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
function deleteMember(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
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
    });
}
exports.deleteMember = deleteMember;
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
function searchMember(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
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
    });
}
exports.searchMember = searchMember;
