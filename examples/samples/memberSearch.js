"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const GMO = require("../../lib/index");
/**
 * 会員照会サンプル
 */
const siteId = 'your siteId';
const sitePass = 'sour sitePass';
// const siteId = process.env.TEST_GMO_SITE_ID;
// const sitePass = process.env.TEST_GMO_SITE_PASS;
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const memberId = Date.now().toString();
        // 会員登録
        const saveMemberResult = yield GMO.MemberService.saveMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: memberId,
            memberName: 'test'
        });
        // 会員照会
        const result = yield GMO.MemberService.searchMember({
            siteId: siteId,
            sitePass: sitePass,
            memberId: saveMemberResult.memberId
        });
        // tslint:disable-next-line:no-console
        console.log(result);
    });
}
