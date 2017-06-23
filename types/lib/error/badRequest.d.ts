/**
 * エラー
 * @memberof error/badRequestError
 * @class BadRequestError
 * @extends Error
 */
export declare class BadRequestError extends Error {
    errors: IError[];
    constructor(message?: string);
    /**
     * エラーメッセージパース
     * @method parseErrorMessage
     * @returns {IError[]}
     */
    private parseErrorMessage();
}
/**
 * エラー詳細
 * @interface IError
 */
export interface IError {
    /**
     * エラー番号
     */
    errorNumber: string;
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
