import * as querystring from 'querystring';
import { errors, notApplicable } from './errors';

/**
 * エラー
 */
export class BadRequestError extends Error {
    public errors: IError[];

    constructor(message?: string) {
        super(message);
        this.name = 'GMOServiceBadRequestError';
        this.errors = this.parseErrorMessage();
    }
    /**
     * エラーメッセージパース
     */
    private parseErrorMessage(): IError[] {
        // 継承元のErrorでmessageはstringに変換される
        if (this.message.length === 0) {
            return [];
        }
        const errorMessage = querystring.parse(this.message);
        const codeArray: string[] = (<string>errorMessage.ErrCode).split('|');
        const infoArray: string[] = (<string>errorMessage.ErrInfo).split('|');

        return codeArray.map((value, index) => {
            const code = value;
            const info = infoArray[index];
            const error = errors.list.find((data: IError) => {
                return (data.code === code && data.info === info);
            });
            if (error === undefined) {
                return {
                    errorNumber: '',
                    code: code,
                    info: info,
                    state: '',
                    billing: '',
                    content: notApplicable.content,
                    userMessage: notApplicable.userMessage
                };
            }

            return error;
        });
    }
}

/**
 * エラー詳細
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
