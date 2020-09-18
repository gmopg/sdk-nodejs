import * as util from '../utils/util';

/**
 * 会員登録in
 */
export interface ISaveMemberArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * 会員名
     */
    memberName?: string;
}

/**
 * 会員登録out
 */
export interface ISaveMemberResult {
    /**
     * 会員ID
     */
    memberId: string;
}

/**
 * 会員更新in
 */
export interface IUpdateMemberArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * 会員名
     */
    memberName?: string;
}

/**
 * 会員更新out
 */
export interface IUpdateMemberResult {
    /**
     * 会員ID
     */
    memberId: string;
}

/**
 * 会員削除in
 */
export interface IDeleteMemberArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
}

/**
 * 会員削除out
 */
export interface IDeleteMemberResult {
    /**
     * 会員ID
     */
    memberId: string;
}

/**
 * 会員参照in
 */
export interface ISearchMemberArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
}

/**
 * 会員参照out
 */
export interface ISearchMemberResult {
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * 会員名
     */
    memberName: string;
    /**
     * 削除フラグ（0:未削除 を返却します。）
     */
    deleteFlag: string;
}

/**
 * カード登録・更新in
 */
export interface ISaveCardArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * カード登録連番モード（0:論理モード(デフォルト)1:物理モード）
     */
    seqMode?: util.SeqMode;
    /**
     * カード登録連番（登録時は、入力不可です。更新時は、更新する値を設定します。）
     */
    cardSeq?: number;
    /**
     * 洗替・継続課金フラグ（0:継続課金対象としない(デフォルト)1:継続課金対象とする）
     */
    defaultFlag?: string;
    /**
     * カード会社略称
     */
    cardName?: string;
    /**
     * カード番号
     */
    cardNo?: string;
    /**
     * カードパスワード
     */
    cardPass?: string;
    /**
     * 有効期限
     */
    expire?: string;
    /**
     * 名義人
     */
    holderName?: string;
    /**
     * トークン
     */
    token?: string;
}

/**
 * カード登録・更新out
 */
export interface ISaveCardResult {
    /**
     * カード登録連番
     */
    cardSeq: string;
    /**
     * カード番号
     */
    cardNo: string;
    /**
     * 仕向先コード
     */
    forward: string;
    // /**
    //  * 国際ブランド
    //  */
    // brand?: string;
    // /**
    //  * 国内発行フラグ
    //  */
    // domesticFlag?: string;
    // /**
    //  * イシュアコード
    //  */
    // issuerCode?: string;
    // /**
    //  * デビット／プリペイドフラグ
    //  */
    // debitPrepaidFlag?: string;
    // /**
    //  * デビット／プリペイドカード発行会社名
    //  */
    // debitPrepaidIssuerName?: string;
    // /**
    //  * 最終仕向先のカード会社コード
    //  */
    // forwardFinal?: string;
}

/**
 * カード削除in
 */
export interface IDeleteCardArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * カード登録連番モード
     */
    seqMode?: util.SeqMode;
    /**
     * カード登録連番
     */
    cardSeq: string;
}

/**
 * カード削除out
 */
export interface IDeleteCardResult {
    /**
     * カード登録連番
     */
    cardSeq: string;
}

/**
 * カード参照in
 */
export interface ISearchCardArgs {
    /**
     * サイトID
     */
    siteId: string;
    /**
     * サイトパスワード
     */
    sitePass: string;
    /**
     * 会員ID
     */
    memberId: string;
    /**
     * カード登録連番モード（0:論理モード1:物理モード）
     */
    seqMode: util.SeqMode;
    /**
     * カード登録連番
     */
    cardSeq?: string;
}

/**
 * カード参照out
 */
export interface ISearchCardResult {
    /**
     * カード登録連番
     */
    cardSeq: string;
    /**
     * 洗替・継続課金フラグ
     */
    defaultFlag: string;
    /**
     * カード会社略称
     */
    cardName: string;
    /**
     * カード番号
     */
    cardNo: string;
    /**
     * 有効期限
     */
    expire: string;
    /**
     * 名義人
     */
    holderName: string;
    /**
     * 削除フラグ（入力パラメータのカード登録連番モードが物理の場合のみ返却します。0:未削除1:削除済）
     */
    deleteFlag: string;
    // /**
    //  * 国際ブランド
    //  */
    // brand?: string;
    // /**
    //  * 国内発行フラグ
    //  */
    // domesticFlag?: string;
    // /**
    //  * イシュアコード
    //  */
    // issuerCode?: string;
    // /**
    //  * デビット／プリペイドフラグ
    //  */
    // debitPrepaidFlag?: string;
    // /**
    //  * デビット／プリペイドカード発行会社名
    //  */
    // debitPrepaidIssuerName?: string;
    // /**
    //  * 最終仕向先のカード会社コード
    //  */
    // forwardFinal?: string;
}
