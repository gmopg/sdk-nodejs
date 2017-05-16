"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @desc エラー
 */
const querystring = require("querystring");
const errors_1 = require("./errors");
/**
 * エラー
 * @class BadRequestError
 * @extends Error
 */
class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.errors = this.parseErrorMessage();
    }
    /**
     * エラーメッセージパース
     * @method parseErrorMessage
     * @returns {IError[]}
     */
    parseErrorMessage() {
        if (this.message === undefined) {
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
                    content: '',
                    userMessage: ''
                };
            }
            return error;
        });
    }
}
exports.BadRequestError = BadRequestError;
