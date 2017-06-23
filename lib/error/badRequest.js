"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @namespace error/badRequestError
 * @desc エラー
 */
const querystring = require("querystring");
const errors_1 = require("./errors");
/**
 * エラー
 * @memberof error/badRequestError
 * @class BadRequestError
 * @extends Error
 */
class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'GMOServiceBadRequestError';
        this.errors = this.parseErrorMessage();
    }
    /**
     * エラーメッセージパース
     * @method parseErrorMessage
     * @returns {IError[]}
     */
    parseErrorMessage() {
        // 継承元のErrorでmessageはstringに変換される
        if (this.message.length === 0) {
            return [];
        }
        const errorMessage = querystring.parse(this.message);
        const codeArray = errorMessage.ErrCode.split('|');
        const infoArray = errorMessage.ErrInfo.split('|');
        return codeArray.map((value, index) => {
            const code = value;
            const info = infoArray[index];
            const error = errors_1.errors.list.find((data) => {
                return (data.code === code && data.info === info);
            });
            if (error === undefined) {
                return {
                    errorNumber: '',
                    code: code,
                    info: info,
                    state: '',
                    billing: '',
                    content: errors_1.notApplicable.content,
                    userMessage: errors_1.notApplicable.userMessage
                };
            }
            return error;
        });
    }
}
exports.BadRequestError = BadRequestError;
