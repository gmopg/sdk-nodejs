"use strict";
/**
 * カード決済インターフェース
 * @namespace services/card
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
const badRequest_1 = require("../error/badRequest");
const debug = createDebug('gmo-service:services:card');
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
            throw new badRequest_1.BadRequestError(body);
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
            throw new badRequest_1.BadRequestError(body);
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
            throw new badRequest_1.BadRequestError(body);
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
            throw new badRequest_1.BadRequestError(body);
        }
        return {
            memberId: result.MemberID,
            memberName: result.MemberName,
            deleteFlag: result.DeleteFlag
        };
    });
}
exports.searchMember = searchMember;
/**
 * カード登録・更新
 * @memberof services/card
 * @function saveCard
 * @param {ISaveCardArgs} args カード登録・更新in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @param {string} args.seqMode カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
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
function saveCard(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
            url: `${process.env.GMO_ENDPOINT}/payment/SaveCard.idPass`,
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq,
                DefaultFlag: args.defaultFlag,
                CardName: args.cardName,
                CardNo: args.cardNo,
                CardPass: args.cardPass,
                Expire: args.expire,
                HolderName: args.holderName,
                Token: args.token
            }
        }).promise();
        debug('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new badRequest_1.BadRequestError(body);
        }
        return {
            cardSeq: result.CardSeq,
            cardNo: result.CardNo,
            forward: result.Forward
            // brand: result.Brand,
            // domesticFlag: result.DomesticFlag,
            // issuerCode: result.IssuerCode,
            // debitPrepaidFlag: result.DebitPrepaidFlag,
            // debitPrepaidIssuerName: result.DebitPrepaidIssuerName,
            // forwardFinal: result.ForwardFinal
        };
    });
}
exports.saveCard = saveCard;
/**
 * カード削除
 * @memberof services/card
 * @function deleteCard
 * @param {IDeleteCardArgs} args カード削除in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @param {string} args.seqMode カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
 * @param {string} args.cardSeq カード登録連番
 * @returns {Promise<IDeleteCardResult>} カード削除out
 */
function deleteCard(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
            url: `${process.env.GMO_ENDPOINT}/payment/DeleteCard.idPass`,
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq
            }
        }).promise();
        debug('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            throw new badRequest_1.BadRequestError(body);
        }
        return {
            cardSeq: result.CardSeq
        };
    });
}
exports.deleteCard = deleteCard;
/**
 * カード参照
 * @memberof services/card
 * @function searchCard
 * @param {ISearchCardArgs} args カード参照in
 * @param {string} args.siteId サイトID
 * @param {string} args.sitePass サイトパスワード
 * @param {string} args.memberId 会員ID
 * @param {string} args.seqMode カード登録連番モード（0:論理モード1:物理モード）
 * @param {string} args.cardSeq カード登録連番
 * @returns {Promise<ISearchCardResult[]>} カード参照out
 */
function searchCard(args) {
    return __awaiter(this, void 0, void 0, function* () {
        debug('requesting...', args);
        const body = yield request.post({
            url: `${process.env.GMO_ENDPOINT}/payment/SearchCard.idPass`,
            form: {
                SiteID: args.siteId,
                SitePass: args.sitePass,
                MemberID: args.memberId,
                SeqMode: args.seqMode,
                CardSeq: args.cardSeq
            }
        }).promise();
        debug('request processed.', body);
        const result = querystring.parse(body);
        if (result.ErrCode !== undefined) {
            const error = new badRequest_1.BadRequestError(body);
            // 会員は存在してカードが存在しない場合、空配列を返すように、特別扱い
            if (error.errors.length === 1 && error.errors[0].info === 'E01240002') {
                return [];
            }
            throw error;
        }
        const cardSeqArry = result.CardSeq.split('|');
        const defaultFlagArry = result.DefaultFlag.split('|');
        const cardNameArry = result.CardName.split('|');
        const cardNoArry = result.CardNo.split('|');
        const expireArry = result.Expire.split('|');
        const holderNameArry = result.HolderName.split('|');
        const deleteFlagArry = result.DeleteFlag.split('|');
        return cardSeqArry.map((cardSeq, index) => {
            return {
                cardSeq: cardSeq,
                defaultFlag: defaultFlagArry[index],
                cardName: cardNameArry[index],
                cardNo: cardNoArry[index],
                expire: expireArry[index],
                holderName: holderNameArry[index],
                deleteFlag: deleteFlagArry[index]
            };
        });
    });
}
exports.searchCard = searchCard;
