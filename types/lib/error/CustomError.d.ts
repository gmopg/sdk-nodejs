/**
 * カスタムエラー
 * @class CustomError
 * @extends Error
 */
export declare class CustomError extends Error {
    errors: (IError | undefined)[];
    constructor(message: string | undefined);
    /**
     * エラーメッセージパース
     * @method parseErrorMessage
     * @param {string} message
     * @returns {Promise<CustomError>}
     */
    parseErrorMessage(): Promise<CustomError>;
}
/**
 * エラー詳細
 * @interface IError
 */
export interface IError {
    /**
     * エラー番号
     */
    errorNumber: number | undefined;
    /**
     * コード
     */
    code: string;
    /**
     * 詳細コード
     */
    info: string;
    /**
     * 状態
     */
    state: string;
    /**
     * 課金対象
     */
    billing: string;
    /**
     * エラー内容と加盟店側の対処の方法
     */
    content: string;
    /**
     * ユーザへ表示するメッセージ例
     */
    userMessage: string;
}
