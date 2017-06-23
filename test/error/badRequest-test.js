"use strict";
/**
 * BadRequestErrorテスト
 *
 * @ignore
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
const assert = require("assert");
const badRequest_1 = require("../../lib/error/badRequest");
const errors_1 = require("../../lib/error/errors");
describe('BadRequestエラー', () => {
    it('メッセージがundefinedの場合エラーリストは空配列', () => __awaiter(this, void 0, void 0, function* () {
        const badRequestError = new badRequest_1.BadRequestError();
        assert(Array.isArray(badRequestError.errors));
        assert.equal(badRequestError.errors.length, 0);
    }));
    it('正常 該当なし', () => __awaiter(this, void 0, void 0, function* () {
        const code = '***';
        const info = '***';
        const message = `ErrCode=${code}&ErrInfo=${info}`;
        const badRequestError = new badRequest_1.BadRequestError(message);
        const error = errors_1.errors.list.find((value) => {
            return (value.code === code && value.info === info);
        });
        if (error === undefined) {
            return;
        }
        assert.equal(badRequestError.message, message);
        assert.equal(badRequestError.errors[0].code, code);
        assert.equal(badRequestError.errors[0].info, info);
        assert.equal(badRequestError.errors[0].state, '');
        assert.equal(badRequestError.errors[0].billing, '');
        assert.equal(badRequestError.errors[0].content, errors_1.notApplicable.content);
        assert.equal(badRequestError.errors[0].userMessage, errors_1.notApplicable.userMessage);
    }));
    it('正常', () => __awaiter(this, void 0, void 0, function* () {
        const code = 'E01';
        const info = 'E01010008';
        const message = `ErrCode=${code}&ErrInfo=${info}`;
        const badRequestError = new badRequest_1.BadRequestError(message);
        const error = errors_1.errors.list.find((value) => {
            return (value.code === code && value.info === info);
        });
        if (error === undefined) {
            return;
        }
        assert.equal(badRequestError.message, message);
        assert.equal(badRequestError.errors[0].code, error.code);
        assert.equal(badRequestError.errors[0].info, error.info);
        assert.equal(badRequestError.errors[0].state, error.state);
        assert.equal(badRequestError.errors[0].billing, error.billing);
        assert.equal(badRequestError.errors[0].content, error.content);
        assert.equal(badRequestError.errors[0].userMessage, error.userMessage);
    }));
    it('正常　複数', () => __awaiter(this, void 0, void 0, function* () {
        const codeList = ['E01', 'E01', 'E01'];
        const infoList = ['E01010008', 'E01020008', 'E01030002'];
        const message = `ErrCode=${codeList.join('|')}&ErrInfo=${infoList.join('|')}`;
        const badRequestError = new badRequest_1.BadRequestError(message);
        const errorList = codeList.map((code, index) => {
            const error = errors_1.errors.list.find((value) => {
                return (value.code === code && value.info === infoList[index]);
            });
            if (error === undefined) {
                return {
                    errorNumber: '',
                    code: code,
                    info: infoList[index],
                    state: '',
                    billing: '',
                    content: '',
                    userMessage: ''
                };
            }
            return error;
        });
        assert.equal(badRequestError.message, message);
        for (let i = 0; i < badRequestError.errors.length; i += 1) {
            assert.equal(badRequestError.errors[i].code, errorList[i].code);
            assert.equal(badRequestError.errors[i].info, errorList[i].info);
            assert.equal(badRequestError.errors[i].state, errorList[i].state);
            assert.equal(badRequestError.errors[i].billing, errorList[i].billing);
            assert.equal(badRequestError.errors[i].content, errorList[i].content);
            assert.equal(badRequestError.errors[i].userMessage, errorList[i].userMessage);
        }
    }));
    it('Error継承', () => __awaiter(this, void 0, void 0, function* () {
        const code = 'E01';
        const info = 'E01010008';
        const message = `ErrCode=${code}&ErrInfo=${info}`;
        const badRequestError = new badRequest_1.BadRequestError(message);
        const error = new Error(message);
        assert(badRequestError instanceof Error);
        assert.equal(badRequestError.message, error.message);
        assert.equal(badRequestError.name, 'GMOServiceBadRequestError');
    }));
});
