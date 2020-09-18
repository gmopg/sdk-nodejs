// tslint:disable:no-irregular-whitespace
/**
 * 該当なし
 */
export const notApplicable = {
    /**
     * エラー内容
     */
    content: '該当なし',
    /**
     * ユーザへ表示するメッセージ
     */
    userMessage: '特になし'
};

/**
 * エラー一覧
 */
export const errors = {
    version: '1.72',
    list: [
        {
            errorNumber: '1',
            code: 'E00',
            info: 'E00000000',
            state: '未決',
            billing: '－',
            content: '結果通知プログラム疎通確認用/疎通確認用なので、対処する必要性はありません。',
            userMessage: '特になし'
        },
        {
            errorNumber: '2',
            code: 'E01',
            info: 'E01010001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップIDが指定されていません。'
        },
        {
            errorNumber: '3',
            code: 'E01',
            info: 'E01010008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップIDに半角英数字以外の文字が含まれているか、13文字を超えています。'
        },
        {
            errorNumber: '4',
            code: 'E01',
            info: 'E01010010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップIDが一致しません。'
        },
        {
            errorNumber: '5',
            code: 'E01',
            info: 'E01020001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップパスワードが指定されていません。'
        },
        {
            errorNumber: '6',
            code: 'E01',
            info: 'E01020008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップパスワードに半角英数字以外の文字が含まれているか、10文字を超えています。'
        },
        {
            errorNumber: '7',
            code: 'E01',
            info: 'E01030002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたIDとパスワードのショップが存在しません。'
        },
        {
            errorNumber: '8',
            code: 'E01',
            info: 'E01030061',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい',
            userMessage: '強制返品はご利用できません。'
        },
        {
            errorNumber: '9',
            code: 'E01',
            info: 'E01040001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'オーダーIDが指定されていません。'
        },
        {
            errorNumber: '10',
            code: 'E01',
            info: 'E01040003',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'オーダーIDが最大文字数を超えています。'
        },
        {
            errorNumber: '11',
            code: 'E01',
            info: 'E01040010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '既にオーダーIDが存在しています。'
        },
        {
            errorNumber: '12',
            code: 'E01',
            info: 'E01040013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'オーダーIDに半角英数字と ”－”以外の文字が含まれています。'
        },
        {
            errorNumber: '13',
            code: 'E01',
            info: 'E01050001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '処理区分が指定されていません。'
        },
        {
            errorNumber: '14',
            code: 'E01',
            info: 'E01050002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定された処理区分は定義されていません。'
        },
        {
            errorNumber: '15',
            code: 'E01',
            info: 'E01050004',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定した処理区分の処理は実行出来ません。'
        },
        {
            errorNumber: '16',
            code: 'E01',
            info: 'E01060001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用金額が指定されていません。'
        },
        {
            errorNumber: '17',
            code: 'E01',
            info: 'E01060005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用金額が最大桁数を超えています。'
        },
        {
            errorNumber: '18',
            code: 'E01',
            info: 'E01060006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用金額に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '19',
            code: 'E01',
            info: 'E01060010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引の利用金額と指定した利用金額が一致していません。'
        },
        {
            errorNumber: '20',
            code: 'E01',
            info: 'E01070005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '税送料が最大桁数を超えています。'
        },
        {
            errorNumber: '21',
            code: 'E01',
            info: 'E01070006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '税送料に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '22',
            code: 'E01',
            info: 'E01080007',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '3Dセキュア使用フラグに0,1以外の値が指定されています。'
        },
        {
            errorNumber: '23',
            code: 'E01',
            info: 'E01080010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '管理画面の設定と一致しません。'
        },
        {
            errorNumber: '24',
            code: 'E01',
            info: 'E01080101',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '3D必須店舗にも関わらず3Dセキュア使用フラグがOFFになっています。'
        },
        {
            errorNumber: '25',
            code: 'E01',
            info: 'E01090001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引IDが指定されていません。'
        },
        {
            errorNumber: '26',
            code: 'E01',
            info: 'E01090008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引IDの書式が正しくありません。'
        },
        {
            errorNumber: '27',
            code: 'E01',
            info: 'E01100001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引パスワードが指定されていません。'
        },
        {
            errorNumber: '28',
            code: 'E01',
            info: 'E01100008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引パスワードの書式が正しくありません。'
        },
        {
            errorNumber: '29',
            code: 'E01',
            info: 'E01160001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ボーナス分割回数が指定されていません。'
        },
        {
            errorNumber: '30',
            code: 'E01',
            info: 'E01110002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたIDとパスワードの取引が存在しません。'
        },
        {
            errorNumber: '31',
            code: 'E01',
            info: 'E01160007',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ボーナス分割回数に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '32',
            code: 'E01',
            info: 'E01110010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定された取引は決済が完了していません。'
        },
        {
            errorNumber: '33',
            code: 'E01',
            info: 'E01130012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'カード会社略称が最大バイト数を超えています。'
        },
        {
            errorNumber: '34',
            code: 'E01',
            info: 'E01160010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい',
            userMessage: 'ボーナス分割回数に“２”以外を指定しています。'
        },
        {
            errorNumber: '35',
            code: 'E01',
            info: 'E01170001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: 'カード番号が指定されていません。'
        },
        {
            errorNumber: '36',
            code: 'E01',
            info: 'E01170003',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: 'カード番号が最大文字数を超えています。'
        },
        {
            errorNumber: '37',
            code: 'E01',
            info: 'E01170006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: 'カード番号に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '38',
            code: 'E01',
            info: 'E01170011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: 'カード番号が10桁～16桁の範囲ではありません。'
        },
        {
            errorNumber: '39',
            code: 'E01',
            info: 'E01180001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '有効期限が指定されていません。'
        },
        {
            errorNumber: '40',
            code: 'E01',
            info: 'E01180003',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '有効期限が4桁ではありません。'
        },
        {
            errorNumber: '41',
            code: 'E01',
            info: 'E01180006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '有効期限に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '42',
            code: 'E01',
            info: 'E01180008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '有効期限の書式が正しくありません。'
        },
        {
            errorNumber: '43',
            code: 'E01',
            info: 'E01190001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サイトIDが指定されていません。'
        },
        {
            errorNumber: '44',
            code: 'E01',
            info: 'E01190008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サイトIDの書式が正しくありません。'
        },
        {
            errorNumber: '45',
            code: 'E01',
            info: 'E01200001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サイトパスワードが指定されていません。'
        },
        {
            errorNumber: '46',
            code: 'E01',
            info: 'E01200008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サイトパスワードの書式が正しくありません。'
        },
        {
            errorNumber: '47',
            code: 'E01',
            info: 'E01210002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたIDとパスワードのサイトが存在しません。'
        },
        {
            errorNumber: '48',
            code: 'E01',
            info: 'E01220001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '会員IDが指定されていません。'
        },
        {
            errorNumber: '49',
            code: 'E01',
            info: 'E01220005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '会員IDが最大桁数を超えています。'
        },
        {
            errorNumber: '50',
            code: 'E01',
            info: 'E01220008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '会員IDの書式が正しくありません。'
        },
        {
            errorNumber: '51',
            code: 'E01',
            info: 'E01230006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'カード登録連番に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '52',
            code: 'E01',
            info: 'E01230009',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'カード登録連番が最大登録可能数を超えています。'
        },
        {
            errorNumber: '53',
            code: 'E01',
            info: 'E01240002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたカードが存在しません。'
        },
        {
            errorNumber: '54',
            code: 'E01',
            info: 'E01240012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定された会員IDがファイル内で重複しています(※洗替時)'
        },
        {
            errorNumber: '55',
            code: 'E01',
            info: 'E01250008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: 'カードパスワードの書式が正しくありません。'
        },
        {
            errorNumber: '56',
            code: 'E01',
            info: 'E01250010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: 'カードパスワードが一致しません。'
        },
        {
            errorNumber: '57',
            code: 'E01',
            info: 'E01260001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '支払方法が指定されていません。'
        },
        {
            errorNumber: '58',
            code: 'E01',
            info: 'E01260002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '指定された支払方法が存在しません。'
        },
        {
            errorNumber: '59',
            code: 'E01',
            info: 'E01260010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '指定されたカード番号または支払方法が正しくありません。'
        },
        {
            errorNumber: '60',
            code: 'E01',
            info: 'E01270001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '支払回数が指定されていません。'
        },
        {
            errorNumber: '61',
            code: 'E01',
            info: 'E01270005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '支払回数が最大桁数を超えています。'
        },
        {
            errorNumber: '62',
            code: 'E01',
            info: 'E01270006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '支払回数の数字以外の文字が含まれています。'
        },
        {
            errorNumber: '63',
            code: 'E01',
            info: 'E01270010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '指定された支払回数はご利用できません。'
        },
        {
            errorNumber: '64',
            code: 'E01',
            info: 'E01290001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'HTTP_ACCEPTが指定されていません。'
        },
        {
            errorNumber: '65',
            code: 'E01',
            info: 'E01300001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'HTTP_USER_AGENTが指定されていません。'
        },
        {
            errorNumber: '66',
            code: 'E01',
            info: 'E01310002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '使用端末が指定されていません。'
        },
        {
            errorNumber: '67',
            code: 'E01',
            info: 'E01310007',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '使用端末に”0”,”1”以外の値が指定されています。'
        },
        {
            errorNumber: '68',
            code: 'E01',
            info: 'E01320012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '加盟店自由項目1の値が最大バイト数を超えています。'
        },
        {
            errorNumber: '69',
            code: 'E01',
            info: 'E01330012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '加盟店自由項目2の値が最大バイト数を超えています。'
        },
        {
            errorNumber: '70',
            code: 'E01',
            info: 'E01340012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '加盟店自由項目3の値が最大バイト数を超えています。'
        },
        {
            errorNumber: '71',
            code: 'E01',
            info: 'E01350001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'MDが指定されていません。'
        },
        {
            errorNumber: '72',
            code: 'E01',
            info: 'E01350008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'MDの書式が正しくありません。'
        },
        {
            errorNumber: '73',
            code: 'E01',
            info: 'E01360001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'PaResが指定されていません。'
        },
        {
            errorNumber: '74',
            code: 'E01',
            info: 'E01370008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '3Dセキュア表示店舗ྡの書式が正しくありません。'
        },
        {
            errorNumber: '75',
            code: 'E01',
            info: 'E01370012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '3Dセキュア表示店舗ྡの値が最大バイト数を超えています。'
        },
        {
            errorNumber: '76',
            code: 'E01',
            info: 'E01390002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたサイトIDと会員IDの会員が存在しません。'
        },
        {
            errorNumber: '77',
            code: 'E01',
            info: 'E01390010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたサイトIDと会員IDの会員が既に存在しています。'
        },
        {
            errorNumber: '78',
            code: 'E01',
            info: 'E01400007',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目返却フラグに”0”,”1”以外の値が指定されています。'
        },
        {
            errorNumber: '79',
            code: 'E01',
            info: 'E01410010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '該当取引は操作禁止状態です。'
        },
        {
            errorNumber: '80',
            code: 'E01',
            info: 'E01420010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '仮売上有効期間を超えています。'
        },
        {
            errorNumber: '81',
            code: 'E01',
            info: 'E01430012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: '会員ྡの値が最大バイト数を超えています。'
        },
        {
            errorNumber: '82',
            code: 'E01',
            info: 'E01440008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '洗替・継続課金フラグの書式が正しくありません。'
        },
        {
            errorNumber: '83',
            code: 'E01',
            info: 'E01450008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '商品コードの書式が正しくありません。'
        },
        {
            errorNumber: '84',
            code: 'E01',
            info: 'E01460008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: 'セキュリティコードの書式が正しくありません。'
        },
        {
            errorNumber: '85',
            code: 'E01',
            info: 'E01470008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'カード登録連番モードの書式が正しくありません。'
        },
        {
            errorNumber: '86',
            code: 'E01',
            info: 'E01480008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をカード所有者に依頼して下さい。',
            userMessage: 'ྡ義人の書式が正しくありません。'
        },
        {
            errorNumber: '87',
            code: 'E01',
            info: 'E01490005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認してください。',
            userMessage: '利用金額・税送料の吅計値が最大桁数を超えています。'
        },
        {
            errorNumber: '88',
            code: 'E01',
            info: 'E01500001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ショップ情報文字列が設定されていません。'
        },
        {
            errorNumber: '89',
            code: 'E01',
            info: 'E01500005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ショップ情報文字列の文字数が間違っています。'
        },
        {
            errorNumber: '90',
            code: 'E01',
            info: 'E01500012',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ショップ情報文字列が他の項目と矛盾しています。'
        },
        {
            errorNumber: '91',
            code: 'E01',
            info: 'E01510001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '購買情報文字列が設定されていません。'
        },
        {
            errorNumber: '92',
            code: 'E01',
            info: 'E01510005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '購買情報文字列の文字数が間違っています。'
        },
        {
            errorNumber: '93',
            code: 'E01',
            info: 'E01510010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認してください。',
            userMessage: '利用日の書式が正しくありません。'
        },
        {
            errorNumber: '94',
            code: 'E01',
            info: 'E01510011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認してください。',
            userMessage: '利用日の値が指定可能範囲外です。'
        },
        {
            errorNumber: '95',
            code: 'E01',
            info: 'E01510012',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '購買情報文字列が他の項目と矛盾しています。'
        },
        {
            errorNumber: '96',
            code: 'E01',
            info: 'E01520002',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ユーザー利用端末情報に無効な値が設定されています。'
        },
        {
            errorNumber: '97',
            code: 'E01',
            info: 'E01530001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済結果戻り先URLが設定されていません。'
        },
        {
            errorNumber: '98',
            code: 'E01',
            info: 'E01530005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済結果戻り先URLが最大文字数を越えています。'
        },
        {
            errorNumber: '99',
            code: 'E01',
            info: 'E01540005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済キャンセル時URLが最大文字数を超えています。'
        },
        {
            errorNumber: '100',
            code: 'E01',
            info: 'E01550001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '日時情報文字列が設定されていません。'
        },
        {
            errorNumber: '101',
            code: 'E01',
            info: 'E01550005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '日時情報文字列の文字数が間違っています。'
        },
        {
            errorNumber: '102',
            code: 'E01',
            info: 'E01550006',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '日時情報文字列に無効な文字が含まれます。'
        },
        {
            errorNumber: '103',
            code: 'E01',
            info: 'E01590005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '商品コードが最大桁数を超えています。'
        },
        {
            errorNumber: '104',
            code: 'E01',
            info: 'E01590006',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '商品コードに無効な文字が含まれます。'
        },
        {
            errorNumber: '105',
            code: 'E01',
            info: 'E01600001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '会員情報チェック文字列が設定されていません。'
        },
        {
            errorNumber: '106',
            code: 'E01',
            info: 'E01600005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '会員情報チェック文字列が最大文字数を超えています。'
        },
        {
            errorNumber: '107',
            code: 'E01',
            info: 'E01600012',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '会員情報チェック文字列が他の項目と矛盾しています。'
        },
        {
            errorNumber: '108',
            code: 'E01',
            info: 'E01610005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'リトライ回数が0～99の範囲外です。'
        },
        {
            errorNumber: '109',
            code: 'E01',
            info: 'E01610006',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'リトライ回数に数字以外が設定されています。'
        },
        {
            errorNumber: '110',
            code: 'E01',
            info: 'E01620005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'セッションタイムアウト値が0～9999の範囲外です。'
        },
        {
            errorNumber: '111',
            code: 'E01',
            info: 'E01620006',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'セッションタイムアウト値に数字以外が設定されています。'
        },
        {
            errorNumber: '112',
            code: 'E01',
            info: 'E01630010',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '取引後カード登録時、取引の会員I Dとパラメータの会員IDが一致しません。'
        },
        {
            errorNumber: '113',
            code: 'E01',
            info: 'E01640010',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '取引後カード登録時、取引のサイトIDとパラメータのサイト IDが一致しません。'
        },
        {
            errorNumber: '114',
            code: 'E01',
            info: 'E01650012',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '指定されたショップは、指定されたサイトに属していません。'
        },
        {
            errorNumber: '115',
            code: 'E01',
            info: 'E01660013',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '言語パラメータにサポートされない値が設定されています。'
        },
        {
            errorNumber: '116',
            code: 'E01',
            info: 'E01670013',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '出力エンコーディングにサポートされない値が設定されています。'
        },
        {
            errorNumber: '117',
            code: 'E01',
            info: 'E01700001',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: '項目数が誤っています。'
        },
        {
            errorNumber: '118',
            code: 'E01',
            info: 'E01710001',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: '取引区分(継続課金)が設定されていません。'
        },
        {
            errorNumber: '119',
            code: 'E01',
            info: 'E01710002',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: '指定された取引区分が存在しません。'
        },
        {
            errorNumber: '120',
            code: 'E01',
            info: 'E01730001',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: 'ボーナス金額が指定されていません。'
        },
        {
            errorNumber: '121',
            code: 'E01',
            info: 'E01730005',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: 'ボーナス金額が最大桁数を超えています。'
        },
        {
            errorNumber: '122',
            code: 'E01',
            info: 'E01730006',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: '商品コードが”0000990”ではありません。'
        },
        {
            errorNumber: '123',
            code: 'E01',
            info: 'E01730007',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: 'ボーナス金額に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '124',
            code: 'E01',
            info: 'E01740001',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: '端末処理通番が指定されていません。'
        },
        {
            errorNumber: '125',
            code: 'E01',
            info: 'E01740005',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: '端末処理通番が最大桁数を超えています。'
        },
        {
            errorNumber: '126',
            code: 'E01',
            info: 'E01740007',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: '端末処理通番に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '127',
            code: 'E01',
            info: 'E01750001',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: '利用日が指定されていません。'
        },
        {
            errorNumber: '128',
            code: 'E01',
            info: 'E01750008',
            state: '未決',
            billing: '－',
            content: 'ファイル内容エラー/設定を確認してください。',
            userMessage: '利用日の書式が正しくありません。'
        },
        {
            errorNumber: '129',
            code: 'E01',
            info: 'E01800001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '暗証番号が未入力です。'
        },
        {
            errorNumber: '130',
            code: 'E01',
            info: 'E01800008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '暗証番号の書式が正しくありません。'
        },
        {
            errorNumber: '131',
            code: 'E01',
            info: 'E01800010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '暗証番号は利用できません。'
        },
        {
            errorNumber: '132',
            code: 'E01',
            info: 'E01800050',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '暗証番号が不正です。(0000は使用できません)'
        },
        {
            errorNumber: '133',
            code: 'E01',
            info: 'E01810001',
            state: '未決',
            billing: '－',
            content: '磁気ストライプ区分必須エラー/磁気ストライプ区分が指定されていません。',
            userMessage: '磁気ストライプ区分が不正です。'
        },
        {
            errorNumber: '134',
            code: 'E01',
            info: 'E01810008',
            state: '未決',
            billing: '－',
            content: '磁気ストライプ区分書式エラー/磁気ストライプ区分に不正値が設定されています。',
            userMessage: '磁気ストライプ区分が不正です。'
        },
        {
            errorNumber: '135',
            code: 'E01',
            info: 'E01820001',
            state: '未決',
            billing: '－',
            content: '磁気ストライプ情報必須エラー/磁気ストライプ情報が指定されていません。',
            userMessage: '磁気ストライプ情報が不正です。'
        },
        {
            errorNumber: '136',
            code: 'E01',
            info: 'E01820003',
            state: '未決',
            billing: '－',
            content: '磁気ストライプ情報文字数エラー/磁気ストライプ情報の文字数が正しくありません。',
            userMessage: '磁気ストライプ情報が不正です。'
        },
        {
            errorNumber: '137',
            code: 'E01',
            info: 'E01820008',
            state: '未決',
            billing: '－',
            content: '磁気ストライプ情報書式エラー/磁気ストライプ情報の書式が正しくありません。',
            userMessage: '磁気ストライプ情報が不正です。'
        },
        {
            errorNumber: '138',
            code: 'E01',
            info: 'E01840010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/入力パラメータの組み吅わせが不正です。',
            userMessage: '必要な入力パラメータが指定されていません'
        },
        {
            errorNumber: '139',
            code: 'E11',
            info: 'E11010001',
            state: '未決',
            billing: '○',
            content: '取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: 'この取引は既に決済が終了しています。'
        },
        {
            errorNumber: '140',
            code: 'E11',
            info: 'E11010002',
            state: '未決',
            billing: '○',
            content: '取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: 'この取引は決済が終了していませんので、変更する஦が出来ません。'
        },
        {
            errorNumber: '141',
            code: 'E11',
            info: 'E11010003',
            state: '未決',
            billing: '○',
            content: '取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: 'この取引は指定処理区分処理を行う஦が出来ません。'
        },
        {
            errorNumber: '142',
            code: 'E11',
            info: 'E11010010',
            state: '未決',
            billing: '○',
            content: 'カード取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: '180日超えの取引のため、処理を行う஦が出来ません。'
        },
        {
            errorNumber: '143',
            code: 'E11',
            info: 'E11010011',
            state: '未決',
            billing: '○',
            content: 'コンビニ取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: '180日超えの取引のため、処理を行う஦が出来ません。'
        },
        {
            errorNumber: '144',
            code: 'E11',
            info: 'E11010012',
            state: '未決',
            billing: '○',
            content: 'モバイルSuica取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: '180日超えの取引のため、処理を行う஦が出来ません。'
        },
        {
            errorNumber: '145',
            code: 'E11',
            info: 'E11010013',
            state: '未決',
            billing: '○',
            content: '楽天edy取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: '180日超えの取引のため、処理を行う஦が出来ません。'
        },
        {
            errorNumber: '146',
            code: 'E11',
            info: 'E11010014',
            state: '未決',
            billing: '○',
            content: 'Pay-easy取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: '180日超えの取引のため、処理を行う஦が出来ません。'
        },
        {
            errorNumber: '147',
            code: 'E11',
            info: 'E11010017',
            state: '未決',
            billing: '○',
            content: 'リクルートかんたん支払い決済取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: '180日超えの取引のため、処理を行う஦が出来ません。'
        },
        {
            errorNumber: '148',
            code: 'E11',
            info: 'E11010099',
            state: '未決',
            billing: '○',
            content: '取引エラー/使用されたカードの仕向先が判定出来ませんでした。',
            userMessage: 'このカードはご利用になれません。'
        },
        {
            errorNumber: '149',
            code: 'E11',
            info: 'E11010999',
            state: '未決',
            billing: '○',
            content: '取引エラー/既に取引が完了している可能性があります。',
            userMessage: '特になし'
        },
        {
            errorNumber: '150',
            code: 'E11',
            info: 'E11310001',
            state: '未決',
            billing: '－',
            content: 'リンク決済エラー/指定されたオーダーはリンク決済呼び出しされていません。',
            userMessage: 'この取引はリンク決済を実行できません。'
        },
        {
            errorNumber: '151',
            code: 'E11',
            info: 'E11310002',
            state: '未決',
            billing: '－',
            content: 'リンク決済エラー/既に取引が完了している可能性があります。',
            userMessage: 'この取引はリンク決済を実行できません。'
        },
        {
            errorNumber: '152',
            code: 'E11',
            info: 'E11310003',
            state: '未決',
            billing: '－',
            content: 'リンク決済エラー/リトライ回数オーバー',
            userMessage: 'この取引はリンク決済を実行できません。'
        },
        {
            errorNumber: '153',
            code: 'E11',
            info: 'E11310004',
            state: '未決',
            billing: '－',
            content: 'リンク決済エラー/セッションタイムアウト',
            userMessage: 'この取引はリンク決済を実行できません。'
        },
        {
            errorNumber: '154',
            code: 'E11',
            info: 'E11310005',
            state: '未決',
            billing: '－',
            content: 'リンク決済エラー/カード登録の制限に抵触します。',
            userMessage: '既にカードを登録している会員は、取引後カード登録を実行できません。'
        },
        {
            errorNumber: '155',
            code: 'E21',
            info: 'E21010001',
            state: '未決',
            billing: '－',
            content: '3Dセキュア認証エラー(登録確認)/決済を中止して、取引が終了していない஦を通知して下さい。',
            userMessage: '3Dセキュア認証に失敗しました。もう一度、購入画面からやり直して下さい。'
        },
        {
            errorNumber: '156',
            code: 'E21',
            info: 'E21010007',
            state: '未決',
            billing: '－',
            content: '3Dセキュア認証エラー(登録確認)/決済を中止して、取引が終了していない஦を通知して下さい。',
            userMessage: '3Dセキュア認証に失敗しました。もう一度、購入画面からやり直して下さい。'
        },
        {
            errorNumber: '157',
            code: 'E21',
            info: 'E21010999',
            state: '未決',
            billing: '－',
            content: '3Dセキュア認証エラー(登録確認)/決済を中止して、取引が終了していない஦を通知して下さい。',
            userMessage: '3Dセキュア認証に失敗しました。もう一度、購入画面からやり直して下さい。'
        },
        {
            errorNumber: '158',
            code: 'E21',
            info: 'E21020001',
            state: '未決',
            billing: '－',
            content: '3Dセキュア認証エラー(登録確認)/決済を中止して、取引が終了していない஦を通知して下さい。',
            userMessage: '3Dセキュア認証に失敗しました。もう一度、購入画面からやり直して下さい。'
        },
        {
            errorNumber: '159',
            code: 'E21',
            info: 'E21020002',
            state: '未決',
            billing: '－',
            content: '3Dセキュア認証エラー(登録確認)/決済を中止して、取引が終了していない஦を通知して下さい。',
            userMessage: '3Dセキュア認証がキャンセルされました。もう一度、購入画面からやり直して下さい。'
        },
        {
            errorNumber: '160',
            code: 'E21',
            info: 'E21020007',
            state: '未決',
            billing: '－',
            content: '3Dセキュア認証エラー(登録確認)/決済を中止して、取引が終了していない஦を通知して下さい。',
            userMessage: '3Dセキュア認証に失敗しました。もう一度、購入画面からやり直して下さい。'
        },
        {
            errorNumber: '161',
            code: 'E21',
            info: 'E21020999',
            state: '未決',
            billing: '－',
            content: '3Dセキュア認証エラー(認証確認)/決済を中止して、取引が終了していない஦を通知して下さい。',
            userMessage: '3Dセキュア認証に失敗しました。もう一度、購入画面からやり直して下さい。'
        },
        {
            errorNumber: '162',
            code: 'E21',
            info: 'E21010201',
            state: '未決',
            billing: '－',
            content: '3Dセキュア必須化エラー(未対象)/決済を中止して、取引が終了していない஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。3Dセキュア認証に対応したカードをお使い下さい。'
        },
        {
            errorNumber: '163',
            code: 'E21',
            info: 'E21010202',
            state: '未決',
            billing: '－',
            content: '3Dセキュア必須化エラー(PW未設定)/決済を中止して、取引が終了していない஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。3Dセキュア認証に対応したカードをお使い下さい。'
        },
        {
            errorNumber: '164',
            code: 'E31',
            info: 'E31500014',
            state: '未決',
            billing: '－',
            content: '加盟店実行エラー/リクエストメソッドがGETになっています。POSTに変更して下さい。',
            userMessage: '－'
        },
        {
            errorNumber: '165',
            code: 'E41',
            info: 'E41170002',
            state: '未決',
            billing: '○',
            content: 'カード会社未対応エラー(ホスト検出)/再入力をカード所有者に依頼して下さい。',
            userMessage: '入力されたカード会社に対応していません。別のカード番号を入力して下さい。'
        },
        {
            errorNumber: '166',
            code: 'E41',
            info: 'E41170099',
            state: '未決',
            billing: '○',
            content: 'カード番号チェックディジットエラー(ホスト検出)/再入力をカード所有者に依頼して下さい。',
            userMessage: 'カード番号に誤りがあります。再度確認して入力して下さい。'
        },
        {
            errorNumber: '167',
            code: 'E61',
            info: 'E61010001',
            state: '未決',
            billing: '○',
            content: '加盟店設定エラー/決済を中止して、問い吅わせにてSPID設定状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '168',
            code: 'E61',
            info: 'E61010002',
            state: '未決',
            billing: '○',
            content: '加盟店設定エラー/問い吅わせにてカード会社契約状況を確認して下さい。',
            userMessage: 'ご利用出来ないカードをご利用になったもしくはカード番号が誤っております。'
        },
        {
            errorNumber: '169',
            code: 'E61',
            info: 'E61010003',
            state: '未決',
            billing: '－',
            content: '加盟店設定エラー/決済を中止して、問い吅わせにて設定状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '170',
            code: 'E61',
            info: 'E61020001',
            state: '未決',
            billing: '－',
            content: '加盟店設定エラー/再入力をお宠様に依頼して下さい。',
            userMessage: '指定の決済方法は利用停止になっています。'
        },
        {
            errorNumber: '171',
            code: 'E61',
            info: 'E61030001',
            state: '未決',
            billing: '－',
            content: '加盟店設定エラー/決済を中止して、問い吅わせにて設定状況を確認して下さい。',
            userMessage: 'ご契約内容エラー/現在のご契約では、ご利用になれません。'
        },
        {
            errorNumber: '172',
            code: 'E82',
            info: 'E82010001',
            state: '未決',
            billing: '－',
            content: '実行の排他エラー/ྠじサイトからྠ時に実行されました。このエラーは無視して頂いても構いません。先発の実行分で正常に実行されます。',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '173',
            code: 'E90',
            info: 'E90010001',
            state: '不明',
            billing: '－',
            content: '2重送信エラー(通信)/このエラーは無視して頂いても構いません。先発のリクエストは正常に通知されます。',
            userMessage: '現在処理を行っているのでもうしばらくお待ち下さい。'
        },
        {
            errorNumber: '174',
            code: 'E91',
            info: 'E91099996',
            state: '不明',
            billing: '－',
            content: 'システムエラー(通信)',
            userMessage: 'システムの内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。'
        },
        {
            errorNumber: '175',
            code: 'E91',
            info: 'E91099997',
            state: '不明',
            billing: '－',
            content: 'システムエラー(通信)',
            userMessage: 'リクエストされたAPIは存在しません。URLをお確かめください。'
        },
        {
            errorNumber: '176',
            code: 'E91',
            info: 'E91019999',
            state: '不明',
            billing: '－',
            content: 'システムエラー(データベース)/購入者に取引失敗を表示し、問い吅わせにて状況を確認後、場吅によって取消を行って下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '177',
            code: 'E91',
            info: 'E91020001',
            state: '不明',
            billing: '－',
            content: 'システムエラー(通信)/購入者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '通信タイムアウトが発生しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '178',
            code: 'E91',
            info: 'E91029998',
            state: '不明',
            billing: '－',
            content: 'システムエラー(通信)/購入者に取引失敗を表示し、問い吅わせにて状況を確認してください。',
            userMessage: '決済処理に失敗しました。該当のお取引について、店舗までお問吅せください。'
        },
        {
            errorNumber: '179',
            code: 'E91',
            info: 'E91029999',
            state: '不明',
            billing: '－',
            content: 'システムエラー(通信)/購入者に取引失敗を表示し、問い吅わせにて状況を確認後、場吅によって取消を行って下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '180',
            code: 'E91',
            info: 'E91050001',
            state: '不明',
            billing: '－',
            content: 'システムエラー(リンクタイプ)/テンプレートの設定内容をご確認下さい。',
            userMessage: '決済処理に失敗しました。'
        },
        {
            errorNumber: '181',
            code: 'E91',
            info: 'E91060001',
            state: '不明',
            billing: '－',
            content: 'システムエラー(モジュールタイプ)/購入者に取引失敗を表示し、問い吅わせにて状況を確認してください。',
            userMessage: 'システムの内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。'
        },
        {
            errorNumber: '182',
            code: 'E91',
            info: 'E91099999',
            state: '不明',
            billing: '－',
            content: 'システムエラー(想定外)/購入者に取引失敗を表示し、問い吅わせにて状況を確認後、場吅によって取消を行って下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '183',
            code: 'E92',
            info: 'E92000001',
            state: '未決',
            billing: '－',
            content: '流量制限オーバーエラー/ྠ時処理数が規定値を超えています。',
            userMessage: '只今、大変込み吅っていますので、しばらく時間をあけて再度決済を行ってください。'
        },
        {
            errorNumber: '184',
            code: 'E92',
            info: 'E92000002',
            state: '未決',
            billing: '－',
            content: '流量制限オーバーエラー/ྠ時処理数が規定値を超えています。',
            userMessage: '只今、大変込み吅っていますので、しばらく時間をあけて再度決済を行ってください。'
        },
        {
            errorNumber: '185',
            code: 'EX1',
            info: 'EX1000301',
            state: '未決',
            billing: '－',
            content: 'トークンエラー/指定されたトークンが存在しません。',
            userMessage: '決済処理に失敗しました。もう一度カード番号を入力してください。'
        },
        {
            errorNumber: '186',
            code: 'EX1',
            info: 'EX1000302',
            state: '未決',
            billing: '－',
            content: 'トークンエラー/指定されたトークンは利用済みです。',
            userMessage: '決済処理に失敗しました。もう一度カード番号を入力してください。'
        },
        {
            errorNumber: '187',
            code: 'EX1',
            info: 'EX1000303',
            state: '未決',
            billing: '－',
            content: 'トークンエラー/指定されたトークンの有効期限が切れています。',
            userMessage: '決済処理に失敗しました。もう一度カード番号を入力してください。'
        },
        {
            errorNumber: '1',
            code: 'M01',
            info: 'M01001005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'バージョンの文字数が最大文字数を超えています。'
        },
        {
            errorNumber: '2',
            code: 'M01',
            info: 'M01002001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップIDが指定されていません。'
        },
        {
            errorNumber: '3',
            code: 'M01',
            info: 'M01002002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたIDとパスワードのショップが存在しません。'
        },
        {
            errorNumber: '4',
            code: 'M01',
            info: 'M01002008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップIDの書式が正しくありません。'
        },
        {
            errorNumber: '5',
            code: 'M01',
            info: 'M01002010',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップIDが指定された取引と一致しません。'
        },
        {
            errorNumber: '6',
            code: 'M01',
            info: 'M01003001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップパスワードが指定されていません。'
        },
        {
            errorNumber: '7',
            code: 'M01',
            info: 'M01003008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップパスワードの書式が正しくありません。'
        },
        {
            errorNumber: '8',
            code: 'M01',
            info: 'M01004001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'オーダーIDが指定されていません。'
        },
        {
            errorNumber: '9',
            code: 'M01',
            info: 'M01004002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたオーダーIDの取引は登録されていません。'
        },
        {
            errorNumber: '10',
            code: 'M01',
            info: 'M01004010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '既にオーダーIDが存在しています。'
        },
        {
            errorNumber: '11',
            code: 'M01',
            info: 'M01004012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'オーダーIDが最大文字数を超えています。'
        },
        {
            errorNumber: '12',
            code: 'M01',
            info: 'M01004013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'オーダーIDに不正な文字が含まれています。'
        },
        {
            errorNumber: '13',
            code: 'M01',
            info: 'M01004014',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたオーダーIDの取引は既に決済を依頼してます。'
        },
        {
            errorNumber: '14',
            code: 'M01',
            info: 'M01005001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用金額が指定されていません。'
        },
        {
            errorNumber: '15',
            code: 'M01',
            info: 'M01005005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用金額が最大桁数を超えています。'
        },
        {
            errorNumber: '16',
            code: 'M01',
            info: 'M01005006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用金額に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '17',
            code: 'M01',
            info: 'M01005011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用金額が有効な範囲を超えています。'
        },
        {
            errorNumber: '18',
            code: 'M01',
            info: 'M01006005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '税送料が最大桁数を超えています。'
        },
        {
            errorNumber: '19',
            code: 'M01',
            info: 'M01006006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '税送料に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '20',
            code: 'M01',
            info: 'M01007001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引IDが指定されていません。'
        },
        {
            errorNumber: '21',
            code: 'M01',
            info: 'M01007008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引IDの書式が正しくありません。'
        },
        {
            errorNumber: '22',
            code: 'M01',
            info: 'M01008001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引Iパスワードが指定されていません。'
        },
        {
            errorNumber: '23',
            code: 'M01',
            info: 'M01008008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引パスワードの書式が正しくありません。'
        },
        {
            errorNumber: '24',
            code: 'M01',
            info: 'M01009001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '支払先コンビニコードが指定されていません。'
        },
        {
            errorNumber: '25',
            code: 'M01',
            info: 'M01009002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定された支払先コンビニコードが正しくありません。'
        },
        {
            errorNumber: '26',
            code: 'M01',
            info: 'M01009005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '支払先コンビニコードが最大文字数を超えています。'
        },
        {
            errorNumber: '27',
            code: 'M01',
            info: 'M01009010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定された取引のコンビニコードが正しくありません。'
        },
        {
            errorNumber: '28',
            code: 'M01',
            info: 'M01010001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '氏ྡが指定されていません。'
        },
        {
            errorNumber: '29',
            code: 'M01',
            info: 'M01010012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '氏ྡが最大バイト数を超えています。'
        },
        {
            errorNumber: '30',
            code: 'M01',
            info: 'M01010013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '氏ྡに不正な文字が含まれています。'
        },
        {
            errorNumber: '31',
            code: 'M01',
            info: 'M01011001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: 'フリガナが指定されていません。'
        },
        {
            errorNumber: '32',
            code: 'M01',
            info: 'M01011012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: 'フリガナが最大バイト数を超えています。'
        },
        {
            errorNumber: '33',
            code: 'M01',
            info: 'M01011013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: 'フリガナに不正な文字が含まれています。'
        },
        {
            errorNumber: '34',
            code: 'M01',
            info: 'M01012001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '電話番号が指定されていません。'
        },
        {
            errorNumber: '35',
            code: 'M01',
            info: 'M01012005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '電話番号が最大文字数を超えています。'
        },
        {
            errorNumber: '36',
            code: 'M01',
            info: 'M01012008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '電話番号の書式が正しくありません。'
        },
        {
            errorNumber: '37',
            code: 'M01',
            info: 'M01013005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '支払期限日数が最大文字数を超えています。'
        },
        {
            errorNumber: '38',
            code: 'M01',
            info: 'M01013006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '支払期限日数に数字以外の文字が指定されています。'
        },
        {
            errorNumber: '39',
            code: 'M01',
            info: 'M01013011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '支払期限日数が有効な範囲ではありません。'
        },
        {
            errorNumber: '40',
            code: 'M01',
            info: 'M01014001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '結果通知先メールアドレスが指定されていません。'
        },
        {
            errorNumber: '41',
            code: 'M01',
            info: 'M01014005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '結果通知先メールアドレスが最大文字数を超えています。'
        },
        {
            errorNumber: '42',
            code: 'M01',
            info: 'M01014008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/再入力をお宠様に依頼して下さい。',
            userMessage: '結果通知先メールアドレスの書式が正しくありません。'
        },
        {
            errorNumber: '43',
            code: 'M01',
            info: 'M01015005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店メールアドレスが最大文字数を超えています。'
        },
        {
            errorNumber: '44',
            code: 'M01',
            info: 'M01015008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店メールアドレスの書式が正しくありません。'
        },
        {
            errorNumber: '45',
            code: 'M01',
            info: 'M01016012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '亇約番号が最大バイト数を超えています。'
        },
        {
            errorNumber: '46',
            code: 'M01',
            info: 'M01016013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '亇約番号に不正な文字が含まれています。'
        },
        {
            errorNumber: '47',
            code: 'M01',
            info: 'M01017012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '会員番号が最大バイト数を超えています。'
        },
        {
            errorNumber: '48',
            code: 'M01',
            info: 'M01017013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '会員番号に不正な文字が含まれています。'
        },
        {
            errorNumber: '49',
            code: 'M01',
            info: 'M01018012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 1が最大バイト数を超えています。'
        },
        {
            errorNumber: '50',
            code: 'M01',
            info: 'M01018013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 1に不正な文字が含まれています。'
        },
        {
            errorNumber: '51',
            code: 'M01',
            info: 'M01019012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 2が最大バイト数を超えています。'
        },
        {
            errorNumber: '52',
            code: 'M01',
            info: 'M01019013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 2に不正な文字が含まれています。'
        },
        {
            errorNumber: '53',
            code: 'M01',
            info: 'M01020012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 3が最大バイト数を超えています。'
        },
        {
            errorNumber: '54',
            code: 'M01',
            info: 'M01020013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 3に不正な文字が含まれています。'
        },
        {
            errorNumber: '55',
            code: 'M01',
            info: 'M01021012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 4が最大バイト数を超えています。'
        },
        {
            errorNumber: '56',
            code: 'M01',
            info: 'M01021013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 4に不正な文字が含まれています。'
        },
        {
            errorNumber: '57',
            code: 'M01',
            info: 'M01022012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 5が最大バイト数を超えています。'
        },
        {
            errorNumber: '58',
            code: 'M01',
            info: 'M01022013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 5に不正な文字が含まれています。'
        },
        {
            errorNumber: '59',
            code: 'M01',
            info: 'M01023012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 6が最大バイト数を超えています。'
        },
        {
            errorNumber: '60',
            code: 'M01',
            info: 'M01023013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 6に不正な文字が含まれています。'
        },
        {
            errorNumber: '61',
            code: 'M01',
            info: 'M01024012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 7が最大バイト数を超えています。'
        },
        {
            errorNumber: '62',
            code: 'M01',
            info: 'M01024013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 7に不正な文字が含まれています。'
        },
        {
            errorNumber: '63',
            code: 'M01',
            info: 'M01025012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 8が最大バイト数を超えています。'
        },
        {
            errorNumber: '64',
            code: 'M01',
            info: 'M01025013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'POSレジ表示欄 8に不正な文字が含まれています。'
        },
        {
            errorNumber: '65',
            code: 'M01',
            info: 'M01026012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄1が最大バイト数を超えています。'
        },
        {
            errorNumber: '66',
            code: 'M01',
            info: 'M01026013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄1に不正な文字が含まれています。'
        },
        {
            errorNumber: '67',
            code: 'M01',
            info: 'M01027012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄2が最大バイト数を超えています。'
        },
        {
            errorNumber: '68',
            code: 'M01',
            info: 'M01027013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄2に不正な文字が含まれています。'
        },
        {
            errorNumber: '69',
            code: 'M01',
            info: 'M01028012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄3が最大バイト数を超えています。'
        },
        {
            errorNumber: '70',
            code: 'M01',
            info: 'M01028013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄3に不正な文字が含まれています。'
        },
        {
            errorNumber: '71',
            code: 'M01',
            info: 'M01029012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄4が最大バイト数を超えています。'
        },
        {
            errorNumber: '72',
            code: 'M01',
            info: 'M01029013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄4に不正な文字が含まれています。'
        },
        {
            errorNumber: '73',
            code: 'M01',
            info: 'M01030012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄5が最大バイト数を超えています。'
        },
        {
            errorNumber: '74',
            code: 'M01',
            info: 'M01030013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄5に不正な文字が含まれています。'
        },
        {
            errorNumber: '75',
            code: 'M01',
            info: 'M01031012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄6が最大バイト数を超えています。'
        },
        {
            errorNumber: '76',
            code: 'M01',
            info: 'M01031013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄6に不正な文字が含まれています。'
        },
        {
            errorNumber: '77',
            code: 'M01',
            info: 'M01032012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄7が最大バイト数を超えています。'
        },
        {
            errorNumber: '78',
            code: 'M01',
            info: 'M01032013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄7に不正な文字が含まれています。'
        },
        {
            errorNumber: '79',
            code: 'M01',
            info: 'M01033012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄8が最大バイト数を超えています。'
        },
        {
            errorNumber: '80',
            code: 'M01',
            info: 'M01033013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄8に不正な文字が含まれています。'
        },
        {
            errorNumber: '81',
            code: 'M01',
            info: 'M01034012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄9が最大バイト数を超えています。'
        },
        {
            errorNumber: '82',
            code: 'M01',
            info: 'M01034013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄9に不正な文字が含まれています。'
        },
        {
            errorNumber: '83',
            code: 'M01',
            info: 'M01035012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄10が最大バイト数を超えています。'
        },
        {
            errorNumber: '84',
            code: 'M01',
            info: 'M01035013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'レシート表示欄10に不正な文字が含まれています。'
        },
        {
            errorNumber: '85',
            code: 'M01',
            info: 'M01036001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'お問吅せ先が指定されていません。'
        },
        {
            errorNumber: '86',
            code: 'M01',
            info: 'M01036012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'お問吅せ先が最大バイト数を超えています。'
        },
        {
            errorNumber: '87',
            code: 'M01',
            info: 'M01036013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'お問吅せ先に不正な文字が含まれています。'
        },
        {
            errorNumber: '88',
            code: 'M01',
            info: 'M01037001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'お問吅せ先電話番号が指定されていません。'
        },
        {
            errorNumber: '89',
            code: 'M01',
            info: 'M01037005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'お問吅せ先電話番号が最大文字数を超えています。'
        },
        {
            errorNumber: '90',
            code: 'M01',
            info: 'M01037008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'お問吅せ先電話番号に数字、－以外の文字が指定されています。'
        },
        {
            errorNumber: '91',
            code: 'M01',
            info: 'M01038001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'お問吅せ先受付時間が指定されていません。'
        },
        {
            errorNumber: '92',
            code: 'M01',
            info: 'M01038005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'お問吅せ先受付時間が最大文字数を超えています。'
        },
        {
            errorNumber: '93',
            code: 'M01',
            info: 'M01038008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'お問吅せ先受付時間に数字、”:”、”“以外の文字が指定されています。'
        },
        {
            errorNumber: '94',
            code: 'M01',
            info: 'M01039005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目1が最大文字数を超えています。'
        },
        {
            errorNumber: '95',
            code: 'M01',
            info: 'M01039008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目1に不正な文字が含まれています。'
        },
        {
            errorNumber: '96',
            code: 'M01',
            info: 'M01039012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目1が最大バイト数を超えています。'
        },
        {
            errorNumber: '97',
            code: 'M01',
            info: 'M01039013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目1に不正な文字が含まれています。'
        },
        {
            errorNumber: '98',
            code: 'M01',
            info: 'M01040005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目2が最大文字数を超えています。'
        },
        {
            errorNumber: '99',
            code: 'M01',
            info: 'M01040008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目2に不正な文字が含まれています。'
        },
        {
            errorNumber: '100',
            code: 'M01',
            info: 'M01040012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目2が最大バイト数を超えています。'
        },
        {
            errorNumber: '101',
            code: 'M01',
            info: 'M01040013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目2に不正な文字が含まれています。'
        },
        {
            errorNumber: '102',
            code: 'M01',
            info: 'M01041005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目3が最大文字数を超えています。'
        },
        {
            errorNumber: '103',
            code: 'M01',
            info: 'M01041008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目3に不正な文字が含まれています。'
        },
        {
            errorNumber: '104',
            code: 'M01',
            info: 'M01041012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目3が最大バイト数を超えています。'
        },
        {
            errorNumber: '105',
            code: 'M01',
            info: 'M01041013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '加盟店自由項目3に不正な文字が含まれています。'
        },
        {
            errorNumber: '106',
            code: 'M01',
            info: 'M01042005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '結果返却方法フラグが最大文字数を超えています。'
        },
        {
            errorNumber: '107',
            code: 'M01',
            info: 'M01042011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '結果返却方法フラグに”0”,”1”以外の値が指定されています。'
        },
        {
            errorNumber: '108',
            code: 'M01',
            info: 'M01043001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '商品・サービスྡが指定されていません。'
        },
        {
            errorNumber: '109',
            code: 'M01',
            info: 'M01043012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '商品・サービスྡが最大バイト数を超えています。'
        },
        {
            errorNumber: '110',
            code: 'M01',
            info: 'M01043013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '商品・サービスྡに不正な文字が含まれています。'
        },
        {
            errorNumber: '111',
            code: 'M01',
            info: 'M01044012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済開始メール付加情報が最大バイト数を超えています。'
        },
        {
            errorNumber: '112',
            code: 'M01',
            info: 'M01044013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済開始メール付加情報に不正な文字が含まれています。'
        },
        {
            errorNumber: '113',
            code: 'M01',
            info: 'M01045012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済完了メール付加情報が最大バイト数を超えています。'
        },
        {
            errorNumber: '114',
            code: 'M01',
            info: 'M01045013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済完了メール付加情報に不正な文字が含まれています。'
        },
        {
            errorNumber: '115',
            code: 'M01',
            info: 'M01046012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済内容確認画面付加情報が最大バイト数を超えています。'
        },
        {
            errorNumber: '116',
            code: 'M01',
            info: 'M01046013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済内容確認画面付加情報に不正な文字が含まれています。'
        },
        {
            errorNumber: '117',
            code: 'M01',
            info: 'M01047012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済完了画面付加情報が最大バイト数を超えています。'
        },
        {
            errorNumber: '118',
            code: 'M01',
            info: 'M01047013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済完了画面付加情報に不正な文字が含まれています。'
        },
        {
            errorNumber: '119',
            code: 'M01',
            info: 'M01048005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '支払期限秒数が最大文字数を超えています。'
        },
        {
            errorNumber: '120',
            code: 'M01',
            info: 'M01048006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '支払期限秒数に数字以外の文字が指定されています。'
        },
        {
            errorNumber: '121',
            code: 'M01',
            info: 'M01048011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '支払期限秒数が有効な範囲ではありません。'
        },
        {
            errorNumber: '122',
            code: 'M01',
            info: 'M01049012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済開始メール付加情報が最大バイト数を超えています。'
        },
        {
            errorNumber: '123',
            code: 'M01',
            info: 'M01049013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済開始メール付加情報に不正な文字が含まれています。'
        },
        {
            errorNumber: '124',
            code: 'M01',
            info: 'M01050012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済完了メール付加情報が最大バイト数を超えています。'
        },
        {
            errorNumber: '125',
            code: 'M01',
            info: 'M01050013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済完了メール付加情報に不正な文字が含まれています。'
        },
        {
            errorNumber: '126',
            code: 'M01',
            info: 'M01051001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済方法が指定されていません。'
        },
        {
            errorNumber: '127',
            code: 'M01',
            info: 'M01051005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済方法が最大文字数を超えています。'
        },
        {
            errorNumber: '128',
            code: 'M01',
            info: 'M01051011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済方法が有効な範囲ではありません。'
        },
        {
            errorNumber: '129',
            code: 'M01',
            info: 'M01052011',
            state: '未決',
            billing: '－',
            content: '取引エラー/処理が出来ない஦を通知して下さい。',
            userMessage: '支払期限日を超えています。'
        },
        {
            errorNumber: '130',
            code: 'M01',
            info: 'M01053002',
            state: '未決',
            billing: '－',
            content: '設定を確認して下さい。',
            userMessage: '指定されたコンビニはご利用できません。'
        },
        {
            errorNumber: '131',
            code: 'M01',
            info: 'M01054001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '処理区分が指定されていません。'
        },
        {
            errorNumber: '132',
            code: 'M01',
            info: 'M01054004',
            state: '未決',
            billing: '－',
            content: '取引エラー/取引の状態を確認して下さい。',
            userMessage: '取引の現状態に対して、処理可能な操作ではありません。'
        },
        {
            errorNumber: '133',
            code: 'M01',
            info: 'M01054010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定された処理区分は定義されていません。'
        },
        {
            errorNumber: '134',
            code: 'M01',
            info: 'M01055010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引の利用金額・税送料の吅計値が、指定された利用金額・税送料の吅計値と一致しません。'
        },
        {
            errorNumber: '135',
            code: 'M01',
            info: 'M01055011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定された利用金額・税送料の吅計値が取引の利用金額・税送料の吅計値を超えています。'
        },
        {
            errorNumber: '136',
            code: 'M01',
            info: 'M01056001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リダイレクトURLが指定されていません。'
        },
        {
            errorNumber: '137',
            code: 'M01',
            info: 'M01056012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リダイレクトURLが最大文字数を超えています。'
        },
        {
            errorNumber: '138',
            code: 'M01',
            info: 'M01057010',
            state: '未決',
            billing: '－',
            content: '取引エラー/処理が出来ない஦を通知して下さい。',
            userMessage: '取消可能な期間を超えています。'
        },
        {
            errorNumber: '139',
            code: 'M01',
            info: 'M01058002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定された取引が存在しません。'
        },
        {
            errorNumber: '140',
            code: 'M01',
            info: 'M01058010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '取引のショップIDが、指定されたショップIDと一致しません。'
        },
        {
            errorNumber: '141',
            code: 'M01',
            info: 'M01058011',
            state: '未決',
            billing: '－',
            content: 'ドコモ決済にて決済後、規定時間以内にキャンセル又は増額しようとした',
            userMessage: 'キャンセル及び増額処理は前決済の規定時間後から可能となります。'
        },
        {
            errorNumber: '142',
            code: 'M01',
            info: 'M01059001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '戻り先URLが設定されていません。'
        },
        {
            errorNumber: '143',
            code: 'M01',
            info: 'M01059005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '戻り先URLが最大文字数を超えています。'
        },
        {
            errorNumber: '144',
            code: 'M01',
            info: 'M01059012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '戻り先URLが最大文字数を超えています。'
        },
        {
            errorNumber: '145',
            code: 'M01',
            info: 'M01060010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '仮売上有効期間を超えています。'
        },
        {
            errorNumber: '146',
            code: 'M01',
            info: 'M01061001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '金融機関コードが設定されていません。'
        },
        {
            errorNumber: '147',
            code: 'M01',
            info: 'M01061002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '存在しない金融機関コードが設定されました。'
        },
        {
            errorNumber: '148',
            code: 'M01',
            info: 'M01061005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '金融機関コードが最大桁数を超えています。'
        },
        {
            errorNumber: '149',
            code: 'M01',
            info: 'M01062001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '支店コードが設定されていません。'
        },
        {
            errorNumber: '150',
            code: 'M01',
            info: 'M01062002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '存在しない支店コードが設定されました。'
        },
        {
            errorNumber: '151',
            code: 'M01',
            info: 'M01062005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '支店コードが最大桁数を超えています。'
        },
        {
            errorNumber: '152',
            code: 'M01',
            info: 'M01063001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '会員登録区分が設定されていません。'
        },
        {
            errorNumber: '153',
            code: 'M01',
            info: 'M01063002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '存在しない会員登録区分が設定されました。'
        },
        {
            errorNumber: '154',
            code: 'M01',
            info: 'M01064001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（姓：漢字）が設定されていません。'
        },
        {
            errorNumber: '155',
            code: 'M01',
            info: 'M01064003',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（姓：漢字）が最大文字数を超えています。'
        },
        {
            errorNumber: '156',
            code: 'M01',
            info: 'M01064013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（姓：漢字）に利用できない文字が含まれています。'
        },
        {
            errorNumber: '157',
            code: 'M01',
            info: 'M01065001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（姓：読み）が設定されていません。'
        },
        {
            errorNumber: '158',
            code: 'M01',
            info: 'M01065003',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（姓：読み）が最大文字数を超えています。'
        },
        {
            errorNumber: '159',
            code: 'M01',
            info: 'M01065013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（姓：読み）に利用できない文字が含まれています。'
        },
        {
            errorNumber: '160',
            code: 'M01',
            info: 'M01066001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（ྡ：漢字）が設定されていません。'
        },
        {
            errorNumber: '161',
            code: 'M01',
            info: 'M01066003',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（ྡ：漢字）が最大文字数を超えています。'
        },
        {
            errorNumber: '162',
            code: 'M01',
            info: 'M01066013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（ྡ：漢字）に利用できない文字が含まれています。'
        },
        {
            errorNumber: '163',
            code: 'M01',
            info: 'M01067001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（ྡ：読み）が設定されていません。'
        },
        {
            errorNumber: '164',
            code: 'M01',
            info: 'M01067003',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（ྡ：読み）が最大文字数を超えています。'
        },
        {
            errorNumber: '165',
            code: 'M01',
            info: 'M01067013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（ྡ：読み）に利用できない文字が含まれています。'
        },
        {
            errorNumber: '166',
            code: 'M01',
            info: 'M01068001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（法人ྡ漢字）が設定されていません。'
        },
        {
            errorNumber: '167',
            code: 'M01',
            info: 'M01068003',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（法人ྡ漢字）が最大文字数を超えています。'
        },
        {
            errorNumber: '168',
            code: 'M01',
            info: 'M01068013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（法人ྡ漢字）に利用できない文字が含まれています。'
        },
        {
            errorNumber: '169',
            code: 'M01',
            info: 'M01069001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（法人ྡ読み）が設定されていません。'
        },
        {
            errorNumber: '170',
            code: 'M01',
            info: 'M01069003',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（法人ྡ読み）が最大文字数を超えています。'
        },
        {
            errorNumber: '171',
            code: 'M01',
            info: 'M01069013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義人（法人ྡ読み）に利用できない文字が含まれています。'
        },
        {
            errorNumber: '172',
            code: 'M01',
            info: 'M01070001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座番号が設定されていません。'
        },
        {
            errorNumber: '173',
            code: 'M01',
            info: 'M01070002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '存在しない預金種目が設定されました。'
        },
        {
            errorNumber: '174',
            code: 'M01',
            info: 'M01071001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座番号が設定されていません。'
        },
        {
            errorNumber: '175',
            code: 'M01',
            info: 'M01071005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座番号が最大桁数を超えています。'
        },
        {
            errorNumber: '176',
            code: 'M01',
            info: 'M01071006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座番号に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '177',
            code: 'M01',
            info: 'M01073001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'トランザクションIDが設定されていません。'
        },
        {
            errorNumber: '178',
            code: 'M01',
            info: 'M01073002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '存在しないトランザクションIDが指定されました。'
        },
        {
            errorNumber: '179',
            code: 'M01',
            info: 'M01073004',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定した申込処理は実行出来ません。'
        },
        {
            errorNumber: '180',
            code: 'M01',
            info: 'M01074090',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'トークンが不正です。'
        },
        {
            errorNumber: '181',
            code: 'M01',
            info: 'M01074091',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認してください。',
            userMessage: '決済URLの有効期限が切れています。'
        },
        {
            errorNumber: '182',
            code: 'M01',
            info: 'M01074101',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認してください。',
            userMessage: 'トークンタイプが無効です。'
        },
        {
            errorNumber: '183',
            code: 'M01',
            info: 'M01074108',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認してください。',
            userMessage: 'トークンタイプが設定されていません。'
        },
        {
            errorNumber: '184',
            code: 'M01',
            info: 'M01075001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義が設定されていません。'
        },
        {
            errorNumber: '185',
            code: 'M01',
            info: 'M01075005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義が最大文字数を超えています。'
        },
        {
            errorNumber: '186',
            code: 'M01',
            info: 'M01075013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義に利用できない文字が含まれています。'
        },
        {
            errorNumber: '187',
            code: 'M01',
            info: 'M01076001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ユーザ利用端末が設定されていません。'
        },
        {
            errorNumber: '188',
            code: 'M01',
            info: 'M01076010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定されたユーザ利用端末は定義されていません。'
        },
        {
            errorNumber: '189',
            code: 'M01',
            info: 'M01077005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義漢字が最大文字数を超えています。'
        },
        {
            errorNumber: '190',
            code: 'M01',
            info: 'M01077013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '口座ྡ義漢字に利用できない文字が含まれています。'
        },
        {
            errorNumber: '191',
            code: 'M01',
            info: 'M01078005',
            state: '未決',
            billing: '－',
            content: '通貨コード桁数エラー',
            userMessage: '通貨コードの桁数が間違っています。'
        },
        {
            errorNumber: '192',
            code: 'M01',
            info: 'M01078010',
            state: '未決',
            billing: '－',
            content: '通貨コード妥当性エラー',
            userMessage: '利用可能な通貨コードではありません。'
        },
        {
            errorNumber: '193',
            code: 'M01',
            info: 'M01079010',
            state: '未決',
            billing: '－',
            content: 'ロケール妥当性エラー',
            userMessage: '利用可能なロケールではありません。'
        },
        {
            errorNumber: '194',
            code: 'M01',
            info: 'M01080001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '摘要が設定されていません。'
        },
        {
            errorNumber: '195',
            code: 'M01',
            info: 'M01080005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '摘要が最大文字数を超えています。'
        },
        {
            errorNumber: '196',
            code: 'M01',
            info: 'M01080013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '摘要に利用できない文字が含まれています。'
        },
        {
            errorNumber: '197',
            code: 'M01',
            info: 'M01081011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済結果URL有効期限秒が有効な範囲ではありません。'
        },
        {
            errorNumber: '198',
            code: 'M01',
            info: 'M01081013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済結果URL有効期限秒に利用できない文字が含まれています。'
        },
        {
            errorNumber: '199',
            code: 'M01',
            info: 'M01082001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サービスྡが設定されていません。'
        },
        {
            errorNumber: '200',
            code: 'M01',
            info: 'M01082005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サービスྡが最大文字数を超えています。'
        },
        {
            errorNumber: '201',
            code: 'M01',
            info: 'M01082013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サービスྡに利用できない文字が含まれています。'
        },
        {
            errorNumber: '202',
            code: 'M01',
            info: 'M01083001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サービス電話番号が設定されていません。'
        },
        {
            errorNumber: '203',
            code: 'M01',
            info: 'M01083008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '表示電話番号の書式が正しくありません。'
        },
        {
            errorNumber: '204',
            code: 'M01',
            info: 'M01084002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '存在しないOpenIDが指定されました。'
        },
        {
            errorNumber: '205',
            code: 'M01',
            info: 'M01085001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'キャンセル金額が指定されていません。'
        },
        {
            errorNumber: '206',
            code: 'M01',
            info: 'M01085005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'キャンセル金額が最大桁数を超えています。'
        },
        {
            errorNumber: '207',
            code: 'M01',
            info: 'M01085006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'キャンセル金額に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '208',
            code: 'M01',
            info: 'M01085010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'オーソリ時の金額とキャンセル金額が一致しません。'
        },
        {
            errorNumber: '209',
            code: 'M01',
            info: 'M01085011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'キャンセル金額がオーソリ時の金額を超えています。'
        },
        {
            errorNumber: '210',
            code: 'M01',
            info: 'M01086001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'キャンセル税送料が指定されていません。'
        },
        {
            errorNumber: '211',
            code: 'M01',
            info: 'M01086005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'キャンセル税送料が最大桁数を超えています。'
        },
        {
            errorNumber: '212',
            code: 'M01',
            info: 'M01086006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'キャンセル税送料に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '213',
            code: 'M01',
            info: 'M01086010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'オーソリ時の金額とキャンセル金額が一致しません。'
        },
        {
            errorNumber: '214',
            code: 'M01',
            info: 'M01087012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ドコモ表示項目 1が最大桁数を超えています。'
        },
        {
            errorNumber: '215',
            code: 'M01',
            info: 'M01087013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ドコモ表示項目 1に利用できない文字が含まれています。'
        },
        {
            errorNumber: '216',
            code: 'M01',
            info: 'M01088012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ドコモ表示項目 2が最大桁数を超えています。'
        },
        {
            errorNumber: '217',
            code: 'M01',
            info: 'M01088013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ドコモ表示項目 2に利用できない文字が含まれています。'
        },
        {
            errorNumber: '218',
            code: 'M01',
            info: 'M01089010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '処理要求実施最終期限を超えています。'
        },
        {
            errorNumber: '219',
            code: 'M01',
            info: 'M01091001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '確定日が設定されていません。'
        },
        {
            errorNumber: '220',
            code: 'M01',
            info: 'M01091010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用可能な確定日ではありません。'
        },
        {
            errorNumber: '221',
            code: 'M01',
            info: 'M01092001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '初月利用料無料区分が設定されていません。'
        },
        {
            errorNumber: '222',
            code: 'M01',
            info: 'M01092010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用可能な初月利用料無料区分ではありません。'
        },
        {
            errorNumber: '223',
            code: 'M01',
            info: 'M01093001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '終了月利用料無料区分が設定されていません。'
        },
        {
            errorNumber: '224',
            code: 'M01',
            info: 'M01093004',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '該当取引は確定中のため終了月無料は設定できません。'
        },
        {
            errorNumber: '225',
            code: 'M01',
            info: 'M01093010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用可能な終了月利用料無料区分ではありません。'
        },
        {
            errorNumber: '226',
            code: 'M01',
            info: 'M01094001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '継続課金月が設定されていません。'
        },
        {
            errorNumber: '227',
            code: 'M01',
            info: 'M01094008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '継続課金月の書式が正しくありません。'
        },
        {
            errorNumber: '228',
            code: 'M01',
            info: 'M01095010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '当月分の課金データが生成されていないため処理できません。しばらくたってから再度実行してください。'
        },
        {
            errorNumber: '229',
            code: 'M01',
            info: 'M01096010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '前回実行した処理から規定時間が経過していません。しばらくたってから再度実行してください。'
        },
        {
            errorNumber: '230',
            code: 'M01',
            info: 'M01097010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ショップからの継続課金変更・終了処理は月末20：00～24：00の間は受付できません。'
        },
        {
            errorNumber: '231',
            code: 'M01',
            info: 'M01098010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '有効期限チェックエラーです。'
        },
        {
            errorNumber: '232',
            code: 'M01',
            info: 'M01100012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '振込内容が最大桁数を超えています。'
        },
        {
            errorNumber: '233',
            code: 'M01',
            info: 'M01100013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '振込内容に利用できない文字が含まれています。'
        },
        {
            errorNumber: '234',
            code: 'M01',
            info: 'M01101001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '初回課金利用金額が設定されていません。'
        },
        {
            errorNumber: '235',
            code: 'M01',
            info: 'M01105001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '課金タイミング区分が指定されていません。'
        },
        {
            errorNumber: '236',
            code: 'M01',
            info: 'M01105005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '課金タイミング区分が最大バイト数を越えています。'
        },
        {
            errorNumber: '237',
            code: 'M01',
            info: 'M01107001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '初回課金日が指定されていません。'
        },
        {
            errorNumber: '238',
            code: 'M01',
            info: 'M01107005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定可能な初回課金日ではありません。'
        },
        {
            errorNumber: '239',
            code: 'M01',
            info: 'M01107010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定可能な初回課金日ではありません。'
        },
        {
            errorNumber: '240',
            code: 'M01',
            info: 'M01112001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'JCBプリカ決済カード番号が未入力です。'
        },
        {
            errorNumber: '241',
            code: 'M01',
            info: 'M01112005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'JCBプリカ決済カード番号の桁数が16桁以上、32桁以下ではありません。'
        },
        {
            errorNumber: '242',
            code: 'M01',
            info: 'M01112008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'JCBプリカ決済カード番号の書式が正しくありません。'
        },
        {
            errorNumber: '243',
            code: 'M01',
            info: 'M01113001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'JCBプリカ決済認証番号が未入力です。'
        },
        {
            errorNumber: '244',
            code: 'M01',
            info: 'M01113005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'JCBプリカ決済認証番号が4桁以上16桁以下ではありません。'
        },
        {
            errorNumber: '245',
            code: 'M01',
            info: 'M01113008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'JCBプリカ決済認証番号の書式が正しくありません。'
        },
        {
            errorNumber: '246',
            code: 'M01',
            info: 'M01114005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'JCBプリカ決済持ち回り情報の桁数が34桁以下ではありません。'
        },
        {
            errorNumber: '247',
            code: 'M01',
            info: 'M01114008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'JCBプリカ決済持ち回り情報の書式が正しくありません。'
        },
        {
            errorNumber: '248',
            code: 'M01',
            info: 'M01115010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'キャンセル処理期限を超過しています。'
        },
        {
            errorNumber: '249',
            code: 'M01',
            info: 'M01120001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'NET CASH決済方法が指定されていません。'
        },
        {
            errorNumber: '250',
            code: 'M01',
            info: 'M01120010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'NET CASH決済方法が不正です。'
        },
        {
            errorNumber: '251',
            code: 'M01',
            info: 'M01120012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'NET CASH決済方法が最大バイト数を超えています。'
        },
        {
            errorNumber: '252',
            code: 'M01',
            info: 'M01120013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'NET CASH決済方法に不正な文字が含まれています。'
        },
        {
            errorNumber: '253',
            code: 'M01',
            info: 'M01121002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'システムエラーを表示し、弊社にお問い吅わせ下さい。'
        },
        {
            errorNumber: '254',
            code: 'M01',
            info: 'M01121001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '商品IDが入力されていません。'
        },
        {
            errorNumber: '255',
            code: 'M01',
            info: 'M01121005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '商品IDが最大バイトを超えています。'
        },
        {
            errorNumber: '256',
            code: 'M01',
            info: 'M01121008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '商品IDに利用できない文字が含まれています。'
        },
        {
            errorNumber: '257',
            code: 'M01',
            info: 'M01121012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用店舗ྡが最大バイトを超えています。'
        },
        {
            errorNumber: '258',
            code: 'M01',
            info: 'M01121013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '利用店舗ྡに利用できない文字が含まれています。'
        },
        {
            errorNumber: '259',
            code: 'M01',
            info: 'M01122005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サブ商品IDが最大バイトを超えています。'
        },
        {
            errorNumber: '260',
            code: 'M01',
            info: 'M01122008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'サブ商品に利用できない文字が含まれています。'
        },
        {
            errorNumber: '261',
            code: 'M01',
            info: 'M01122012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '連絡先電話番号が最大バイトを超えています。'
        },
        {
            errorNumber: '262',
            code: 'M01',
            info: 'M01122013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '連絡先電話番号に利用できない文字が含まれています'
        },
        {
            errorNumber: '263',
            code: 'M01',
            info: 'M01123001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '商品ྡが入力されていません。'
        },
        {
            errorNumber: '264',
            code: 'M01',
            info: 'M01123005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '商品ྡが最大バイトを超えています。'
        },
        {
            errorNumber: '265',
            code: 'M01',
            info: 'M01123008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'メールアドレスの書式が正しくありません。'
        },
        {
            errorNumber: '266',
            code: 'M01',
            info: 'M01123012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'メールアドレスが最大バイトを超えています。'
        },
        {
            errorNumber: '267',
            code: 'M01',
            info: 'M01226012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '問吅せURLが最大バイトを超えています。'
        },
        {
            errorNumber: '268',
            code: 'M01',
            info: 'M01226013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '問吅せURLに利用できない文字が含まれています。'
        },
        {
            errorNumber: '269',
            code: 'M01',
            info: 'M01227012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '連絡先情報が最大バイト数を超えています。'
        },
        {
            errorNumber: '270',
            code: 'M01',
            info: 'M01124001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済戻りURLが入力されていません。'
        },
        {
            errorNumber: '271',
            code: 'M01',
            info: 'M01124005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済戻りURLが最大バイトを超えています。'
        },
        {
            errorNumber: '272',
            code: 'M01',
            info: 'M01125001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済失敗戻りURLが入力されていません。'
        },
        {
            errorNumber: '273',
            code: 'M01',
            info: 'M01125005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済失敗戻りURLが最大バイトを超えています。'
        },
        {
            errorNumber: '274',
            code: 'M01',
            info: 'M01126011',
            state: '未決',
            billing: '－',
            content: '処理が出来ない஦を通知して下さい。',
            userMessage: '楽天ID決済注文日の5ヵ月後の末日を超えているため実行できません。'
        },
        {
            errorNumber: '275',
            code: 'M01',
            info: 'M01127011',
            state: '未決',
            billing: '－',
            content: '処理が出来ない஦を通知して下さい。',
            userMessage: '楽天ID決済注文確定処理完了日の翌月末日を超えているため実行できません。'
        },
        {
            errorNumber: '276',
            code: 'M01',
            info: 'M01160008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済クーポン使用フラグの書式が正しくありません。'
        },
        {
            errorNumber: '277',
            code: 'M01',
            info: 'M01160010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済選択可能なクーポン使用フラグではありません。'
        },
        {
            errorNumber: '278',
            code: 'M01',
            info: 'M01238001',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品が入力されていません。'
        },
        {
            errorNumber: '279',
            code: 'M01',
            info: 'M01238005',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品が最大バイト数を超えています。'
        },
        {
            errorNumber: '280',
            code: 'M01',
            info: 'M01238008',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の書式フォーマットが正しくありません。'
        },
        {
            errorNumber: '281',
            code: 'M01',
            info: 'M01238010',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品指定が不正です。'
        },
        {
            errorNumber: '282',
            code: 'M01',
            info: 'M01239001',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品IDが入力されていません。'
        },
        {
            errorNumber: '283',
            code: 'M01',
            info: 'M01239005',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品IDが最大バイト数を超えています。'
        },
        {
            errorNumber: '284',
            code: 'M01',
            info: 'M01239008',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品IDの書式フォーマットが正しくありません。'
        },
        {
            errorNumber: '285',
            code: 'M01',
            info: 'M01240001',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品ྡが入力されていません。'
        },
        {
            errorNumber: '286',
            code: 'M01',
            info: 'M01240005',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品ྡが最大バイト数を超えています。'
        },
        {
            errorNumber: '287',
            code: 'M01',
            info: 'M01241001',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品個数が入力されていません。'
        },
        {
            errorNumber: '288',
            code: 'M01',
            info: 'M01241005',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品個数が最大バイト数を超えています。'
        },
        {
            errorNumber: '289',
            code: 'M01',
            info: 'M01241008',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品個数の書式フォーマットが正しくありません。'
        },
        {
            errorNumber: '290',
            code: 'M01',
            info: 'M01242001',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品単価が入力されていません。'
        },
        {
            errorNumber: '291',
            code: 'M01',
            info: 'M01242005',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品単価が最大バイト数を超えています。'
        },
        {
            errorNumber: '292',
            code: 'M01',
            info: 'M01242008',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の商品単価の書式フォーマットが正しくありません。'
        },
        {
            errorNumber: '293',
            code: 'M01',
            info: 'M01243010',
            state: '未決',
            billing: '-',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '楽天ID決済複数商品の金額の整吅性が不正です。'
        },
        {
            errorNumber: '294',
            code: 'M01',
            info: 'M01128008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済商品コードの書式が正しくありません。'
        },
        {
            errorNumber: '295',
            code: 'M01',
            info: 'M01129001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済通貨コードが入力されていません。'
        },
        {
            errorNumber: '296',
            code: 'M01',
            info: 'M01129005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済通貨コードが最大桁数を超えています。'
        },
        {
            errorNumber: '297',
            code: 'M01',
            info: 'M01129010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済選択可能な通貨コードではありません。'
        },
        {
            errorNumber: '298',
            code: 'M01',
            info: 'M01129013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済通貨コードに無効な文字が含まれます。'
        },
        {
            errorNumber: '299',
            code: 'M01',
            info: 'M01130008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済 3Dセキュア表示店舗ྡの書式が正しくありません。'
        },
        {
            errorNumber: '300',
            code: 'M01',
            info: 'M01130012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済 3Dセキュア表示店舗ྡの値が最大バイト数を超えています。'
        },
        {
            errorNumber: '301',
            code: 'M01',
            info: 'M01131001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済カード番号が入力されていません。'
        },
        {
            errorNumber: '302',
            code: 'M01',
            info: 'M01131005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済カード番号が最大桁数を超えています。'
        },
        {
            errorNumber: '303',
            code: 'M01',
            info: 'M01131006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済カード番号が数値でありません。'
        },
        {
            errorNumber: '304',
            code: 'M01',
            info: 'M01131010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済入力されたカード番号は対応していません。'
        },
        {
            errorNumber: '305',
            code: 'M01',
            info: 'M01131011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済カード番号が10桁～16桁の範囲ではありません。'
        },
        {
            errorNumber: '306',
            code: 'M01',
            info: 'M01133001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済有効期限が指定されていません。'
        },
        {
            errorNumber: '307',
            code: 'M01',
            info: 'M01133005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済有効期限が4桁ではありません。'
        },
        {
            errorNumber: '308',
            code: 'M01',
            info: 'M01133006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済有効期限に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '309',
            code: 'M01',
            info: 'M01134008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '多通貨クレジットカード決済セキュリティコードの書式が正しくありません。'
        },
        {
            errorNumber: '310',
            code: 'M01',
            info: 'M01135005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済通貨コードの指定が正しくありません。'
        },
        {
            errorNumber: '311',
            code: 'M01',
            info: 'M01135010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済通貨コードの指定が正しくありません。'
        },
        {
            errorNumber: '312',
            code: 'M01',
            info: 'M01135013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済通貨コードに無効な文字が含まれています。'
        },
        {
            errorNumber: '313',
            code: 'M01',
            info: 'M01136001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済商品ྡが指定されていません。'
        },
        {
            errorNumber: '314',
            code: 'M01',
            info: 'M01136005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済商品ྡが最大桁数を超えています。'
        },
        {
            errorNumber: '315',
            code: 'M01',
            info: 'M01137005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済商品画像URLが最大桁数を超えています。'
        },
        {
            errorNumber: '316',
            code: 'M01',
            info: 'M01138005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済 LINE Member IDが最大桁数を超えています。'
        },
        {
            errorNumber: '317',
            code: 'M01',
            info: 'M01139005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済パッケージྡが最大桁数を超えています。'
        },
        {
            errorNumber: '318',
            code: 'M01',
            info: 'M01140005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済受取人の連絡先が最大桁数を超えています。'
        },
        {
            errorNumber: '319',
            code: 'M01',
            info: 'M01141001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済キャンセル金額が指定されていません。'
        },
        {
            errorNumber: '320',
            code: 'M01',
            info: 'M01141005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済キャンセル金額が最大桁数を超えています。'
        },
        {
            errorNumber: '321',
            code: 'M01',
            info: 'M01141006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済キャンセル金額に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '322',
            code: 'M01',
            info: 'M01141011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済キャンセル金額の指定範囲が正しくありません。'
        },
        {
            errorNumber: '323',
            code: 'M01',
            info: 'M01142005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済キャンセル税送料が最大桁数を超えています。'
        },
        {
            errorNumber: '324',
            code: 'M01',
            info: 'M01142006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済キャンセル税送料に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '325',
            code: 'M01',
            info: 'M01148010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済ユーザー端末情報の指定が正しくありません。'
        },
        {
            errorNumber: '326',
            code: 'M01',
            info: 'M01150001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済処理NG時URLが指定されていません。'
        },
        {
            errorNumber: '327',
            code: 'M01',
            info: 'M01150012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済処理NG時URLが最大バイト数を超えています。'
        },
        {
            errorNumber: '328',
            code: 'M01',
            info: 'M01151005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'LINE Pay決済言語コードが最大桁数を超えています。'
        },
        {
            errorNumber: '329',
            code: 'M01',
            info: 'M01153005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ネット銀聯決済商品ྡ称が最大桁数を超えています。'
        },
        {
            errorNumber: '330',
            code: 'M01',
            info: 'M01153013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ネット銀聯決済商品ྡ称に禁則文字が指定されています。'
        },
        {
            errorNumber: '331',
            code: 'M01',
            info: 'M01157001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ネット銀聯決済処理NG時URLが指定されていません。'
        },
        {
            errorNumber: '332',
            code: 'M01',
            info: 'M01157005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ネット銀聯決済処理NG時URLが最大バイト数を超えています。'
        },
        {
            errorNumber: '333',
            code: 'M01',
            info: 'M01158001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ネット銀聯決済キャンセル金額の指定が正しくありません。'
        },
        {
            errorNumber: '334',
            code: 'M01',
            info: 'M01158005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ネット銀聯決済キャンセル金額の桁数が正しくありません。'
        },
        {
            errorNumber: '335',
            code: 'M01',
            info: 'M01158006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ネット銀聯決済キャンセル金額に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '336',
            code: 'M01',
            info: 'M01201001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ソフトバンクまとめて支払い(B)継続課金初月無料フラグが指定されていません。'
        },
        {
            errorNumber: '337',
            code: 'M01',
            info: 'M01201008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ソフトバンクまとめて支払い(B)継続課金初月無料フラグの書式が正しくありません。'
        },
        {
            errorNumber: '338',
            code: 'M01',
            info: 'M01202001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ソフトバンクまとめて支払い(B)継続課金課金基準日が指定されていません。'
        },
        {
            errorNumber: '339',
            code: 'M01',
            info: 'M01202006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ソフトバンクまとめて支払い(B)継続課金課金基準日に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '340',
            code: 'M01',
            info: 'M01202010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ソフトバンクまとめて支払い(B)継続課金課金基準日の指定が正しくありません。'
        },
        {
            errorNumber: '341',
            code: 'M01',
            info: 'M01203001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ソフトバンクまとめて支払い(B)継続課金課金月が指定されていません。'
        },
        {
            errorNumber: '342',
            code: 'M01',
            info: 'M01203005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ソフトバンクまとめて支払い(B)継続課金課金月が最大桁数を超えています。'
        },
        {
            errorNumber: '343',
            code: 'M01',
            info: 'M01203006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ソフトバンクまとめて支払い(B)継続課金課金月に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '344',
            code: 'M01',
            info: 'M01203010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'ソフトバンクまとめて支払い(B)継続課金課金月の指定が正しくありません。'
        },
        {
            errorNumber: '345',
            code: 'M01',
            info: 'M01204002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '指定された取引が存在しません。'
        },
        {
            errorNumber: '346',
            code: 'M01',
            info: 'M01232001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い商品ྡが指定されていません。'
        },
        {
            errorNumber: '347',
            code: 'M01',
            info: 'M01232005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い商品ྡが最大バイト数を超えています。'
        },
        {
            errorNumber: '348',
            code: 'M01',
            info: 'M01232013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い商品ྡに禁則文字が指定されています。'
        },
        {
            errorNumber: '349',
            code: 'M01',
            info: 'M01233011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い売上確定後の取引に対して、操作可能期限が過ぎています。'
        },
        {
            errorNumber: '350',
            code: 'M01',
            info: 'M01234010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い金額変更時の入力金額が妥当ではありません。'
        },
        {
            errorNumber: '351',
            code: 'M01',
            info: 'M01235010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い金額変更を行うことが出来ない期間です。'
        },
        {
            errorNumber: '352',
            code: 'M01',
            info: 'M01236002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払いオーソリ期限延長の対象となる決済が存在しません。'
        },
        {
            errorNumber: '353',
            code: 'M01',
            info: 'M01237011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払いオーソリ期限延長の実施可能期限が過ぎています。'
        },
        {
            errorNumber: '354',
            code: 'M01',
            info: 'M01250001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金商品ྡが指定されていません。'
        },
        {
            errorNumber: '355',
            code: 'M01',
            info: 'M01250005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金商品ྡが最大バイト数を超えています。'
        },
        {
            errorNumber: '356',
            code: 'M01',
            info: 'M01250012',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金商品ྡが最大バイト数を超えています。'
        },
        {
            errorNumber: '357',
            code: 'M01',
            info: 'M01250013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金商品ྡに禁則文字が指定されています。'
        },
        {
            errorNumber: '358',
            code: 'M01',
            info: 'M01251001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金課金基準日が指定されていません。'
        },
        {
            errorNumber: '359',
            code: 'M01',
            info: 'M01251006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金課金基準日に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '360',
            code: 'M01',
            info: 'M01251010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金課金基準日の指定が正しくありません。'
        },
        {
            errorNumber: '361',
            code: 'M01',
            info: 'M01252001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金初月無料フラグが指定されていません。'
        },
        {
            errorNumber: '362',
            code: 'M01',
            info: 'M01252008',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金初月無料フラグの書式が正しくありません。'
        },
        {
            errorNumber: '363',
            code: 'M01',
            info: 'M01253001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金課金月が指定されていません。'
        },
        {
            errorNumber: '364',
            code: 'M01',
            info: 'M01253005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金課金月が最大桁数を超えています。'
        },
        {
            errorNumber: '365',
            code: 'M01',
            info: 'M01253006',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金課金月に数字以外の文字が含まれています。'
        },
        {
            errorNumber: '366',
            code: 'M01',
            info: 'M01253010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金課金月の指定が正しくありません。'
        },
        {
            errorNumber: '367',
            code: 'M01',
            info: 'M01254002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金指定された課金データが存在しません。'
        },
        {
            errorNumber: '368',
            code: 'M01',
            info: 'M01255011',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金課金確定後の課金データに対して、操作可能期限が過ぎています。'
        },
        {
            errorNumber: '369',
            code: 'M01',
            info: 'M01257010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'リクルートかんたん支払い継続課金金額変更時の入力金額が妥当ではありません。'
        },
        {
            errorNumber: '370',
            code: 'M01',
            info: 'M01320005',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済タイプが最大桁数を超えています。'
        },
        {
            errorNumber: '371',
            code: 'M01',
            info: 'M01320013',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '決済タイプに指定できない値です。'
        },
        {
            errorNumber: '372',
            code: 'M01',
            info: 'M01108012',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '商品ID最大桁数を超えています。'
        },
        {
            errorNumber: '373',
            code: 'M01',
            info: 'M01108013',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '商品ID無効な文字が含まれます。'
        },
        {
            errorNumber: '374',
            code: 'M01',
            info: 'M01109012',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'サブ商品ID最大桁数を超えています。'
        },
        {
            errorNumber: '375',
            code: 'M01',
            info: 'M01109013',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'サブ商品ID無効な文字が含まれます。'
        },
        {
            errorNumber: '376',
            code: 'M01',
            info: 'M01110012',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '商品ྡ最大桁数を超えています。'
        },
        {
            errorNumber: '377',
            code: 'M01',
            info: 'M01111012',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済戻しURLが最大桁数を超えています。'
        },
        {
            errorNumber: '378',
            code: 'M01',
            info: 'M01111013',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済戻しURL無効な文字が含まれます。'
        },
        {
            errorNumber: '379',
            code: 'M01',
            info: 'M01112012',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済失敗戻しURLが最大桁数を超えています。'
        },
        {
            errorNumber: '380',
            code: 'M01',
            info: 'M01112013',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済失敗戻しURL無効な文字が含まれます。'
        },
        {
            errorNumber: '381',
            code: 'M01',
            info: 'M01500001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ショップ情報文字列が設定されていません。'
        },
        {
            errorNumber: '382',
            code: 'M01',
            info: 'M01500005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ショップ情報文字列の文字数が間違っています。'
        },
        {
            errorNumber: '383',
            code: 'M01',
            info: 'M01500012',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ショップ情報文字列が他の項目と矛盾しています。'
        },
        {
            errorNumber: '384',
            code: 'M01',
            info: 'M01510001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '購買情報文字列が設定されていません。'
        },
        {
            errorNumber: '385',
            code: 'M01',
            info: 'M01510005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '購買情報文字列の文字数が間違っています。'
        },
        {
            errorNumber: '386',
            code: 'M01',
            info: 'M01510012',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '購買情報文字列が他の項目と矛盾しています。'
        },
        {
            errorNumber: '387',
            code: 'M01',
            info: 'M01520002',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ユーザー利用端末情報に無効な値が設定されています。'
        },
        {
            errorNumber: '388',
            code: 'M01',
            info: 'M01530001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済結果戻り先URLが設定されていません。'
        },
        {
            errorNumber: '389',
            code: 'M01',
            info: 'M01530005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済結果戻り先URLが最大文字数を越えています。'
        },
        {
            errorNumber: '390',
            code: 'M01',
            info: 'M01540005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済キャンセル時URLが最大文字数を超えています。'
        },
        {
            errorNumber: '391',
            code: 'M01',
            info: 'M01550001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '日時情報文字列が設定されていません。'
        },
        {
            errorNumber: '392',
            code: 'M01',
            info: 'M01550005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '日時情報文字列の文字数が間違っています。'
        },
        {
            errorNumber: '393',
            code: 'M01',
            info: 'M01550006',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '日時情報文字列に無効な文字が含まれます。'
        },
        {
            errorNumber: '394',
            code: 'M01',
            info: 'M01590005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '商品コードが最大桁数を超えています。'
        },
        {
            errorNumber: '395',
            code: 'M01',
            info: 'M01590006',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '商品コードに無効な文字が含まれます。'
        },
        {
            errorNumber: '396',
            code: 'M01',
            info: 'M01600001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '会員情報チェック文字列が設定されていません。'
        },
        {
            errorNumber: '397',
            code: 'M01',
            info: 'M01600005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '会員情報チェック文字列が最大文字数を超えています。'
        },
        {
            errorNumber: '398',
            code: 'M01',
            info: 'M01600012',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '会員情報チェック文字列が他の項目と矛盾しています。'
        },
        {
            errorNumber: '399',
            code: 'M01',
            info: 'M01610005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'リトライ回数が0～99の範囲外です。'
        },
        {
            errorNumber: '400',
            code: 'M01',
            info: 'M01610006',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'リトライ回数に数字以外が設定されています。'
        },
        {
            errorNumber: '401',
            code: 'M01',
            info: 'M01620005',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'セッションタイムアウト値が0～9999の範囲外です。'
        },
        {
            errorNumber: '402',
            code: 'M01',
            info: 'M01620006',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'セッションタイムアウト値に数字以外が設定されています。'
        },
        {
            errorNumber: '403',
            code: 'M01',
            info: 'M01630010',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '取引後カード登録時、取引の会員I Dとパラメータの会員IDが一致しません。'
        },
        {
            errorNumber: '404',
            code: 'M01',
            info: 'M01640010',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '取引後カード登録時、取引のサイトIDとパラメータのサイト IDが一致しません。'
        },
        {
            errorNumber: '405',
            code: 'M01',
            info: 'M01650012',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '指定されたショップは、指定されたサイトに属していません。'
        },
        {
            errorNumber: '406',
            code: 'M01',
            info: 'M01660013',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '言語パラメータにサポートされない値が設定されています。'
        },
        {
            errorNumber: '407',
            code: 'M01',
            info: 'M01670013',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '出力エンコーディングにサポートされない値が設定されています。'
        },
        {
            errorNumber: '408',
            code: 'M01',
            info: 'M01680001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済利用フラグが設定されていません。'
        },
        {
            errorNumber: '409',
            code: 'M01',
            info: 'M01680008',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '決済利用フラグに”0”,”1”以外の値が指定されています。'
        },
        {
            errorNumber: '410',
            code: 'M01',
            info: 'M01690001',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'URL不正。リンクタイプドメインの契約がありません。'
        },
        {
            errorNumber: '411',
            code: 'M01',
            info: 'M01690002',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'URL不正。リンクタイプドメインが利用可能ではありません。'
        },
        {
            errorNumber: '412',
            code: 'M01',
            info: 'M01690003',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'URL不正。リンクタイプドメインで設定されたドメインと異なります。'
        },
        {
            errorNumber: '413',
            code: 'M01',
            info: 'M01700001',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'メールリンクのご利用契約が無いか、利用停止中です。'
        },
        {
            errorNumber: '414',
            code: 'M01',
            info: 'M01701002',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '呼び出したメールリンクデータは存在しません。'
        },
        {
            errorNumber: '415',
            code: 'M01',
            info: 'M01702003',
            state: '未決',
            billing: '－',
            content: 'リンク決済呼び出しエラー/設定を確認してください。',
            userMessage: '呼び出したメールリンクデータは有効期限切れです。'
        },
        {
            errorNumber: '416',
            code: 'M01',
            info: 'M01703001',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ユニーク文字列が指定されていません。'
        },
        {
            errorNumber: '417',
            code: 'M01',
            info: 'M01703005',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'ユニーク文字列の長さが32バイト以外です。'
        },
        {
            errorNumber: '418',
            code: 'M01',
            info: 'M01704005',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'テンプレート番号が1桁を超えています。'
        },
        {
            errorNumber: '419',
            code: 'M01',
            info: 'M01704006',
            state: '未決',
            billing: '－',
            content: 'メールリンク決済呼び出しエラー/設定を確認してください。',
            userMessage: 'テンプレート番号に数字以外が設定されています。'
        },
        {
            errorNumber: '420',
            code: 'M11',
            info: 'M11010099',
            state: '未決',
            billing: '○',
            content: '取引エラー/決済を中止して、取引が出来ない஦を通知して下さい。',
            userMessage: 'この取引は決済が終了していません。'
        },
        {
            errorNumber: '421',
            code: 'M11',
            info: 'M11010999',
            state: '未決',
            billing: '○',
            content: '取引エラー/既に取引が完了している可能性があります。',
            userMessage: '特になし'
        },
        {
            errorNumber: '422',
            code: 'M91',
            info: 'M91099999',
            state: '未決',
            billing: '－',
            content: 'システムエラー/取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。'
        },
        {
            errorNumber: '423',
            code: 'E01',
            info: 'E01144001',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'CheckStringが指定されていません。'
        },
        {
            errorNumber: '424',
            code: 'E01',
            info: 'E01144010',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: 'CheckStringが不正です。'
        },
        {
            errorNumber: '425',
            code: 'E01',
            info: 'E01220002',
            state: '未決',
            billing: '－',
            content: '入力パラメータエラー/設定を確認して下さい。',
            userMessage: '申込書再送および管理画面再入力をお願いします。'
        },
        {
            errorNumber: '426',
            code: 'E61',
            info: 'E61145002',
            state: '未決',
            billing: '－',
            content: '加盟店設定エラー/決済を中止して、問い吅わせにて LINE Pay設定状況を確認して下さい。',
            userMessage: 'LINE Pay 決済 LINE Pay連動情報の設定が正しくありません。'
        },
        {
            errorNumber: '427',
            code: 'E61',
            info: 'E61152002',
            state: '未決',
            billing: '－',
            content: '加盟店設定エラー/決済を中止して、問い吅わせにてネット銀聯設定状況を確認して下さい。',
            userMessage: 'ネット銀聯決済ネット銀聯連動情報の設定が正しくありません。'
        },
        {
            errorNumber: '428',
            code: 'E61',
            info: 'E61258001',
            state: '未決',
            billing: '－',
            content: '加盟店設定エラー/加盟店ྡ称が設定されていません。マルペイ管理画面の都度決済＞ネット銀聯＞設定画面にて加盟店ྡ称を設定してください。',
            userMessage: 'ネット銀聯決済ネット銀聯連動情報の設定が正しくありません。'
        },
        {
            errorNumber: '1',
            code: 'C01',
            info: '42C010000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '2',
            code: 'C03',
            info: '42C030000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '3',
            code: 'C12',
            info: '42C120000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '4',
            code: 'C13',
            info: '42C130000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '5',
            code: 'C14',
            info: '42C140000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '6',
            code: 'C15',
            info: '42C150000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '7',
            code: 'C50',
            info: '42C500000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '8',
            code: 'C51',
            info: '42C510000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '9',
            code: 'C53',
            info: '42C530000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '10',
            code: 'C54',
            info: '42C540000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '11',
            code: 'C55',
            info: '42C550000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '12',
            code: 'C56',
            info: '42C560000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '13',
            code: 'C57',
            info: '42C570000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '14',
            code: 'C58',
            info: '42C580000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '15',
            code: 'C60',
            info: '42C600000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '16',
            code: 'C70',
            info: '42C700000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '17',
            code: 'C71',
            info: '42C710000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '18',
            code: 'C72',
            info: '42C720000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '19',
            code: 'C73',
            info: '42C730000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '20',
            code: 'C74',
            info: '42C740000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '21',
            code: 'C75',
            info: '42C750000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '22',
            code: 'C76',
            info: '42C760000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '23',
            code: 'C77',
            info: '42C770000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '24',
            code: 'C78',
            info: '42C780000',
            state: '不明',
            billing: '○',
            content: '通信エラー(CAFISまたはカード会社障害)/カード所有者に取引失敗を表示し、問い吅わせにて状況を確認して下さい。',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '1',
            code: 'G02',
            info: '42G020000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'カード残高が不足しているために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '2',
            code: 'G03',
            info: '42G030000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'カード限度額を超えているために、決決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '3',
            code: 'G04',
            info: '42G040000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'カード残高が不足しているために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '4',
            code: 'G05',
            info: '42G050000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'カード限度額を超えているために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '5',
            code: 'G06',
            info: '42G060000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'デビットカードで口座の残高が不足しています。'
        },
        {
            errorNumber: '6',
            code: 'G12',
            info: '42G120000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '7',
            code: 'G22',
            info: '42G220000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '8',
            code: 'G30',
            info: '42G300000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '9',
            code: 'G42',
            info: '42G420000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: '暗証番号が誤っていた為に、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '10',
            code: 'G44',
            info: '42G440000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'セキュリティーコードが誤っていた為に、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '11',
            code: 'G45',
            info: '42G450000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'セキュリティーコードが入力されていない為に、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '12',
            code: 'G54',
            info: '42G540000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '13',
            code: 'G55',
            info: '42G550000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'カード限度額を超えているために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '14',
            code: 'G56',
            info: '42G560000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '15',
            code: 'G60',
            info: '42G600000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '16',
            code: 'G61',
            info: '42G610000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '17',
            code: 'G65',
            info: '42G650000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。カード番号の再入力依頼をして下さい。',
            userMessage: 'カード番号に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '18',
            code: 'G67',
            info: '42G670000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: '商品コードに誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '19',
            code: 'G68',
            info: '42G680000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: '金額に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '20',
            code: 'G69',
            info: '42G690000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: '税送料に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '21',
            code: 'G70',
            info: '42G700000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: 'ボーナス回数に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '22',
            code: 'G71',
            info: '42G710000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: 'ボーナス月に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '23',
            code: 'G72',
            info: '42G720000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: 'ボーナス額に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '24',
            code: 'G73',
            info: '42G730000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: '支払開始月に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '25',
            code: 'G74',
            info: '42G740000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: '分割回数に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '26',
            code: 'G75',
            info: '42G750000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: '分割金額に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '27',
            code: 'G76',
            info: '42G760000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はカード会社にお問い吅わせ下さい。',
            userMessage: '初回金額に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '28',
            code: 'G77',
            info: '42G770000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はお問い吅わせ下さい。',
            userMessage: '業務区分に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '29',
            code: 'G78',
            info: '42G780000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はお問い吅わせ下さい。',
            userMessage: '支払区分に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '30',
            code: 'G79',
            info: '42G790000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はお問い吅わせ下さい。',
            userMessage: '照会区分に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '31',
            code: 'G80',
            info: '42G800000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はお問い吅わせ下さい。',
            userMessage: '取消区分に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '32',
            code: 'G81',
            info: '42G810000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。詳細はお問い吅わせ下さい。',
            userMessage: '取消取扱区分に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '33',
            code: 'G83',
            info: '42G830000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: '有効期限に誤りがあるために、決済を完了する஦が出来ませんでした。'
        },
        {
            errorNumber: '34',
            code: 'G92',
            info: '42G920000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '35',
            code: 'G95',
            info: '42G950000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '36',
            code: 'G96',
            info: '42G960000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '37',
            code: 'G97',
            info: '42G970000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '38',
            code: 'G98',
            info: '42G980000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '39',
            code: 'G99',
            info: '42G990000',
            state: '未決',
            billing: '○',
            content: 'カード会社オーソリエラー/指定されたカードのオーソリが失敗した஦を通知して下さい。',
            userMessage: 'このカードでは取引をする஦が出来ません。'
        },
        {
            errorNumber: '1',
            code: 'Ｂ01',
            info: 'B01000002',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】楽天Edyセンタから発信する決済開始メールが不達となりました。不達の原因は、携帯端末側のメールアドレス変更、ドメイン拒否等が考えられます。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'Ｂ01',
            info: 'B01000003',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】楽天Edyセンタに該当の注文番号が存在しません。',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'Ｂ01',
            info: 'B01000100',
            state: '未決',
            billing: '○',
            content: '決済申込みで指定した注文番号は、既に楽天Edyセンタに登録されています。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'Ｂ01',
            info: 'B01001011',
            state: '未決',
            billing: '○',
            content: '指定したモールIDに誤りがあります(タグ自体がない)',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'Ｂ01',
            info: 'B01001012',
            state: '未決',
            billing: '○',
            content: '指定したモールIDに誤りがあります（値なし）',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'Ｂ01',
            info: 'B01001013',
            state: '未決',
            billing: '○',
            content: '指定したモールIDに誤りがあります（サイズエラー）',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'Ｂ01',
            info: 'B01001014',
            state: '未決',
            billing: '○',
            content: '指定したモールIDに誤りがあります（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'Ｂ01',
            info: 'B01001021',
            state: '未決',
            billing: '○',
            content: '指定した注文番号に誤りがあります（タグ自体がない）',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'Ｂ01',
            info: 'B01001022',
            state: '未決',
            billing: '○',
            content: '指定した注文番号に誤りがあります（値なし）',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'Ｂ01',
            info: 'B01001023',
            state: '未決',
            billing: '○',
            content: '指定した注文番号に誤りがあります（サイズエラー）',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'Ｂ01',
            info: 'B01001024',
            state: '未決',
            billing: '○',
            content: '指定した注文番号に誤りがあります（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'Ｂ01',
            info: 'B01001031',
            state: '未決',
            billing: '○',
            content: '指定した購入金額の範囲が誤っています（タグ自体がない）',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'Ｂ01',
            info: 'B01001032',
            state: '未決',
            billing: '○',
            content: '指定した購入金額の範囲が誤っています（値がない）',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'Ｂ01',
            info: 'B01001033',
            state: '未決',
            billing: '○',
            content: '指定した購入金額の範囲が誤っています（サイズエラー）',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'Ｂ01',
            info: 'B01001034',
            state: '未決',
            billing: '○',
            content: '指定した購入金額の範囲が誤っています（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'Ｂ01',
            info: 'B01001035',
            state: '未決',
            billing: '○',
            content: '指定した購入金額の範囲が誤っています（値エラー）',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'Ｂ01',
            info: 'B01001041',
            state: '未決',
            billing: '○',
            content: '指定したユーザメールアドレスの範囲が誤っています（タグ自体がない）',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'Ｂ01',
            info: 'B01001042',
            state: '未決',
            billing: '○',
            content: '指定したユーザメールアドレスの範囲が誤っています（値がない）',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'Ｂ01',
            info: 'B01001043',
            state: '未決',
            billing: '○',
            content: '指定したユーザメールアドレスの範囲が誤っています（サイズエラー）',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'Ｂ01',
            info: 'B01001044',
            state: '未決',
            billing: '○',
            content: 'To日付時刻指定（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'Ｂ01',
            info: 'B01001045',
            state: '未決',
            billing: '○',
            content: '指定したユーザメールアドレスの範囲が誤っています（値エラー）',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'Ｂ01',
            info: 'B01001055',
            state: '未決',
            billing: '○',
            content: '指定した＜検索条件＞が指定範囲を超えています',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'Ｂ01',
            info: 'B01001064',
            state: '未決',
            billing: '○',
            content: '指定した亇備に誤りがあります（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'Ｂ01',
            info: 'B01001083',
            state: '未決',
            billing: '○',
            content: '請求書メール付加の指定に誤りがあります（サイズエラー）',
            userMessage: ''
        },
        {
            errorNumber: '25',
            code: 'Ｂ01',
            info: 'B01001111',
            state: '未決',
            billing: '○',
            content: '決済終了通知の指定に誤りがあります（タグ自体がない）',
            userMessage: ''
        },
        {
            errorNumber: '26',
            code: 'Ｂ01',
            info: 'B01001112',
            state: '未決',
            billing: '○',
            content: '決済終了通知の指定に誤りがあります（値がない）',
            userMessage: ''
        },
        {
            errorNumber: '27',
            code: 'Ｂ01',
            info: 'B01001113',
            state: '未決',
            billing: '○',
            content: '決済終了通知の指定に誤りがあります（サイズエラー）',
            userMessage: ''
        },
        {
            errorNumber: '28',
            code: 'Ｂ01',
            info: 'B01001114',
            state: '未決',
            billing: '○',
            content: '決済終了通知の指定に誤りがあります（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '29',
            code: 'Ｂ01',
            info: 'B01001121',
            state: '未決',
            billing: '○',
            content: '指定した有効期限に誤りがあります（タグ自体がない）',
            userMessage: ''
        },
        {
            errorNumber: '30',
            code: 'Ｂ01',
            info: 'B01001122',
            state: '未決',
            billing: '○',
            content: '指定した有効期限に誤りがあります（値がない）',
            userMessage: ''
        },
        {
            errorNumber: '31',
            code: 'Ｂ01',
            info: 'B01001123',
            state: '未決',
            billing: '○',
            content: '指定した有効期限に誤りがあります（サイズエラー)',
            userMessage: ''
        },
        {
            errorNumber: '32',
            code: 'Ｂ01',
            info: 'B01001124',
            state: '未決',
            billing: '○',
            content: '指定した有効期限に誤りがあります（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '33',
            code: 'Ｂ01',
            info: 'B01001125',
            state: '未決',
            billing: '○',
            content: '指定した有効期限に誤りがあります（値エラー）',
            userMessage: ''
        },
        {
            errorNumber: '34',
            code: 'Ｂ01',
            info: 'B01002001',
            state: '未決',
            billing: '○',
            content: '楽天Edyセンタのサービスが停止しています',
            userMessage: ''
        },
        {
            errorNumber: '35',
            code: 'Ｂ01',
            info: 'B01002010',
            state: '未決',
            billing: '○',
            content: '指定された加盟店IDは利用できない状態です（未登録）',
            userMessage: ''
        },
        {
            errorNumber: '36',
            code: 'Ｂ01',
            info: 'B01002011',
            state: '未決',
            billing: '○',
            content: '指定された加盟店IDは利用できない状態です（閉塞状態）',
            userMessage: ''
        },
        {
            errorNumber: '37',
            code: 'Ｂ01',
            info: 'B01002012',
            state: '未決',
            billing: '○',
            content: '指定された加盟店IDは利用できない状態です（適用期間外）',
            userMessage: ''
        },
        {
            errorNumber: '38',
            code: 'Ｂ01',
            info: 'B01003001',
            state: '未決',
            billing: '○',
            content: 'システムエラー1',
            userMessage: ''
        },
        {
            errorNumber: '39',
            code: 'Ｂ01',
            info: 'B01003002',
            state: '未決',
            billing: '○',
            content: 'システムエラー2',
            userMessage: ''
        },
        {
            errorNumber: '40',
            code: 'Ｂ01',
            info: 'B01003007',
            state: '未決',
            billing: '○',
            content: 'システムエラー3',
            userMessage: ''
        },
        {
            errorNumber: '41',
            code: 'Ｂ01',
            info: 'B01003008',
            state: '未決',
            billing: '○',
            content: 'システムエラー4',
            userMessage: ''
        },
        {
            errorNumber: '42',
            code: 'Ｂ01',
            info: 'B01003009',
            state: '未決',
            billing: '○',
            content: 'システムエラー5',
            userMessage: ''
        },
        {
            errorNumber: '43',
            code: 'Ｂ01',
            info: 'B01004001',
            state: '未決',
            billing: '○',
            content: 'クライアント証明書の情報と異なる加盟店IDが指定されました',
            userMessage: ''
        },
        {
            errorNumber: '44',
            code: 'Ｂ01',
            info: 'B01007001',
            state: '未決',
            billing: '○',
            content: '決済完了URLの指定に誤りがあります（タグ自体がない）',
            userMessage: ''
        },
        {
            errorNumber: '45',
            code: 'Ｂ01',
            info: 'B01007002',
            state: '未決',
            billing: '○',
            content: '決済完了URLの指定に誤りがあります（値がない）',
            userMessage: ''
        },
        {
            errorNumber: '46',
            code: 'Ｂ01',
            info: 'B01007003',
            state: '未決',
            billing: '○',
            content: '決済完了URLの指定に誤りがあります（サイズエラー）',
            userMessage: ''
        },
        {
            errorNumber: '47',
            code: 'Ｂ01',
            info: 'B01007004',
            state: '未決',
            billing: '○',
            content: '決済完了URLの指定に誤りがあります（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '48',
            code: 'Ｂ01',
            info: 'B01007005',
            state: '未決',
            billing: '○',
            content: '決済完了URLの指定に誤りがあります（値エラー）',
            userMessage: ''
        },
        {
            errorNumber: '49',
            code: 'Ｂ01',
            info: 'B01007011',
            state: '未決',
            billing: '○',
            content: '指定したユーザメールアドレスに誤りがあります（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '50',
            code: 'Ｂ01',
            info: 'B01007021',
            state: '未決',
            billing: '○',
            content: '指定したモールメールアドレスに誤りがあります（属性エラー）',
            userMessage: ''
        },
        {
            errorNumber: '51',
            code: 'Ｂ01',
            info: 'B01009000',
            state: '未決',
            billing: '○',
            content: '【決済申込み】加盟店IDの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '52',
            code: 'Ｂ01',
            info: 'B01009001',
            state: '未決',
            billing: '○',
            content: '【決済申込み】パスワードの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '53',
            code: 'Ｂ01',
            info: 'B01009002',
            state: '未決',
            billing: '○',
            content: '【決済申込み】注文番号の指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '54',
            code: 'Ｂ01',
            info: 'B01009003',
            state: '未決',
            billing: '○',
            content: '【決済申込み】金額の指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '55',
            code: 'Ｂ01',
            info: 'B01009004',
            state: '未決',
            billing: '○',
            content: '【決済申込み】ユーザメールアドレスの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '56',
            code: 'Ｂ01',
            info: 'B01009005',
            state: '未決',
            billing: '○',
            content: '【決済申込み】加盟店様メールアドレスの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '57',
            code: 'Ｂ01',
            info: 'B01009006',
            state: '未決',
            billing: '○',
            content: '【決済申込み】亇備の指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '58',
            code: 'Ｂ01',
            info: 'B01009007',
            state: '未決',
            billing: '○',
            content: '【決済申込み】顧宠ྡの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '59',
            code: 'Ｂ01',
            info: 'B01009008',
            state: '未決',
            billing: '○',
            content: '【決済申込み】請求書メール付加情報の指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '60',
            code: 'Ｂ01',
            info: 'B01009009',
            state: '未決',
            billing: '○',
            content: '【決済申込み】決済完了メール付加情報の指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '61',
            code: 'Ｂ01',
            info: 'B01009010',
            state: '未決',
            billing: '○',
            content: '【決済申込み】店舗ྡの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '62',
            code: 'Ｂ01',
            info: 'B01009011',
            state: '未決',
            billing: '○',
            content: '【決済申込み】決済終了通知URLの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '63',
            code: 'Ｂ01',
            info: 'B01009012',
            state: '未決',
            billing: '○',
            content: '【決済申込み】有効期限の指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '64',
            code: 'Ｂ01',
            info: 'B01009013',
            state: '未決',
            billing: '○',
            content: '【決済申込み】 XML の書式に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '65',
            code: 'Ｂ01',
            info: 'B01009014',
            state: '未決',
            billing: '○',
            content: '【決済申込み】 HTML エラー楽天Edyセンタから受信した内容が想定外の内容です',
            userMessage: ''
        },
        {
            errorNumber: '66',
            code: 'Ｂ01',
            info: 'B01009050',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】加盟店IDの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '67',
            code: 'Ｂ01',
            info: 'B01009051',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】パスワードの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '68',
            code: 'Ｂ01',
            info: 'B01009052',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】注文番号の指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '69',
            code: 'Ｂ01',
            info: 'B01009053',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】From日付時刻の指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '70',
            code: 'Ｂ01',
            info: 'B01009054',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】To日付時刻の指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '71',
            code: 'Ｂ01',
            info: 'B01009055',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】検索パターンの指定に誤りがあります',
            userMessage: ''
        },
        {
            errorNumber: '72',
            code: 'Ｂ01',
            info: 'B01009056',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】XML エラー',
            userMessage: ''
        },
        {
            errorNumber: '73',
            code: 'Ｂ01',
            info: 'B01009057',
            state: '未決',
            billing: '○',
            content: '【決済結果問吅せ】HTML エラー',
            userMessage: ''
        },
        {
            errorNumber: '74',
            code: 'Ｂ01',
            info: 'B01009100',
            state: '未決',
            billing: '○',
            content: 'センタから受信した HTTPレスポンスコードが異常でした (100)HTTP-Status-Continue',
            userMessage: ''
        },
        {
            errorNumber: '75',
            code: 'Ｂ01',
            info: 'B01009101',
            state: '未決',
            billing: '○',
            content: 'センタから受信したHTTPレスポンスコードが異常でした (101)HTTP-Status-SwitchingProtoc ol',
            userMessage: ''
        },
        {
            errorNumber: '76',
            code: 'Ｂ01',
            info: 'B01009201',
            state: '未決',
            billing: '○',
            content: 'センタから受信したHTTP レスポンスコードが異常でした (201)HTTP-Status-Created',
            userMessage: ''
        },
        {
            errorNumber: '77',
            code: 'Ｂ01',
            info: 'B01009202',
            state: '未決',
            billing: '○',
            content: 'センタから受信したHTTPレスポンスコードが異常でした (202)HTTP-Status-Accepted',
            userMessage: ''
        },
        {
            errorNumber: '78',
            code: 'Ｂ01',
            info: 'B01009203',
            state: '未決',
            billing: '○',
            content: 'センタから受信したHTTP レスポンスコードが異常でした (203)HTTP-Status-NonAuthoritativ eInfomation',
            userMessage: ''
        },
        {
            errorNumber: '79',
            code: 'Ｂ01',
            info: 'B01009204',
            state: '未決',
            billing: '○',
            content: 'センタから受信したHTTP レスポンスコードが異常でした (204)HTTP-Status-NoContent',
            userMessage: ''
        },
        {
            errorNumber: '80',
            code: 'Ｂ01',
            info: 'B01009205',
            state: '未決',
            billing: '○',
            content: 'センタから受信したHTTP レスポンスコードが異常でした (205)HTTP-Status-ResetContent',
            userMessage: ''
        },
        {
            errorNumber: '81',
            code: 'Ｂ01',
            info: 'B01009206',
            state: '未決',
            billing: '○',
            content: 'センタから受信したHTTP レスポンスコードが異常でした (206)HTTP-Status-PartialContent',
            userMessage: ''
        },
        {
            errorNumber: '82',
            code: 'Ｂ01',
            info: 'B01009300',
            state: '未決',
            billing: '○',
            content: '(300)HTTP-Status-MultipleChoices',
            userMessage: ''
        },
        {
            errorNumber: '83',
            code: 'Ｂ01',
            info: 'B01009301',
            state: '未決',
            billing: '○',
            content: '(301)HTTP-Status-MovePermanent ly',
            userMessage: ''
        },
        {
            errorNumber: '84',
            code: 'Ｂ01',
            info: 'B01009302',
            state: '未決',
            billing: '○',
            content: '(302)HTTP-Status-MovedTempora rily',
            userMessage: ''
        },
        {
            errorNumber: '85',
            code: 'Ｂ01',
            info: 'B01007600',
            state: '未決',
            billing: '○',
            content: 'サーバ閉塞中です',
            userMessage: ''
        },
        {
            errorNumber: '86',
            code: 'Ｂ01',
            info: 'B01009303',
            state: '未決',
            billing: '○',
            content: '(303)HTTP-Status-SeeOther',
            userMessage: ''
        },
        {
            errorNumber: '87',
            code: 'Ｂ01',
            info: 'B01009304',
            state: '未決',
            billing: '○',
            content: '(304)HTTP-Status-NotModified',
            userMessage: ''
        },
        {
            errorNumber: '88',
            code: 'Ｂ01',
            info: 'B01009305',
            state: '未決',
            billing: '○',
            content: '(305)HTTP-Status-UseProxy',
            userMessage: ''
        },
        {
            errorNumber: '89',
            code: 'Ｂ01',
            info: 'B01009400',
            state: '未決',
            billing: '○',
            content: '(400)HTTP-Status-BadRequest',
            userMessage: ''
        },
        {
            errorNumber: '90',
            code: 'Ｂ01',
            info: 'B01009401',
            state: '未決',
            billing: '○',
            content: '(401)HTTP-Status-Unauthorized',
            userMessage: ''
        },
        {
            errorNumber: '91',
            code: 'Ｂ01',
            info: 'B01009402',
            state: '未決',
            billing: '○',
            content: '(402)HTTP-Status-PaymentRequire d',
            userMessage: ''
        },
        {
            errorNumber: '92',
            code: 'Ｂ01',
            info: 'B01009403',
            state: '未決',
            billing: '○',
            content: '(403)HTTP-Status-Forbidden',
            userMessage: ''
        },
        {
            errorNumber: '93',
            code: 'Ｂ01',
            info: 'B01009404',
            state: '未決',
            billing: '○',
            content: '(404)HTTP-Status-NotFound',
            userMessage: ''
        },
        {
            errorNumber: '94',
            code: 'Ｂ01',
            info: 'B01009405',
            state: '未決',
            billing: '○',
            content: '(405)HTTP-Status-MethodNotAllo wed',
            userMessage: ''
        },
        {
            errorNumber: '95',
            code: 'Ｂ01',
            info: 'B01009406',
            state: '未決',
            billing: '○',
            content: '(406)HTTP-Status-NotAcceptable',
            userMessage: ''
        },
        {
            errorNumber: '96',
            code: 'Ｂ01',
            info: 'B01009407',
            state: '未決',
            billing: '○',
            content: '(407)HTTP-Status-ProxyAuthenticationRequired',
            userMessage: ''
        },
        {
            errorNumber: '97',
            code: 'Ｂ01',
            info: 'B01009408',
            state: '未決',
            billing: '○',
            content: '(408)HTTP-Status-RequestTimeout',
            userMessage: ''
        },
        {
            errorNumber: '98',
            code: 'Ｂ01',
            info: 'B01009409',
            state: '未決',
            billing: '○',
            content: '(409)HTTP-Status-Conflict',
            userMessage: ''
        },
        {
            errorNumber: '99',
            code: 'Ｂ01',
            info: 'B01009410',
            state: '未決',
            billing: '○',
            content: '(410)HTTP-Status-Gone',
            userMessage: ''
        },
        {
            errorNumber: '100',
            code: 'Ｂ01',
            info: 'B01009411',
            state: '未決',
            billing: '○',
            content: '(411)HTTP-Status-LengthRequired',
            userMessage: ''
        },
        {
            errorNumber: '101',
            code: 'Ｂ01',
            info: 'B01009412',
            state: '未決',
            billing: '○',
            content: '(412)HTTP-Status-PreconditionFail ed',
            userMessage: ''
        },
        {
            errorNumber: '102',
            code: 'Ｂ01',
            info: 'B01009413',
            state: '未決',
            billing: '○',
            content: '(413)HTTP-Status-RequestEntityTo oLarge',
            userMessage: ''
        },
        {
            errorNumber: '103',
            code: 'Ｂ01',
            info: 'B01009414',
            state: '未決',
            billing: '○',
            content: '(414)HTTP-Status-RequestURITooL ong',
            userMessage: ''
        },
        {
            errorNumber: '104',
            code: 'Ｂ01',
            info: 'B01009415',
            state: '未決',
            billing: '○',
            content: '(415)HTTP-Status-UnsupportedMediaType',
            userMessage: ''
        },
        {
            errorNumber: '105',
            code: 'Ｂ01',
            info: 'B01009500',
            state: '未決',
            billing: '○',
            content: '(500)HTTP-Status-InternalServerError',
            userMessage: ''
        },
        {
            errorNumber: '106',
            code: 'Ｂ01',
            info: 'B01009501',
            state: '未決',
            billing: '○',
            content: '(501)HTTP-Status-NotInplemented',
            userMessage: ''
        },
        {
            errorNumber: '107',
            code: 'Ｂ01',
            info: 'B01009502',
            state: '未決',
            billing: '○',
            content: '(502)HTTP-Status-BadGateway',
            userMessage: ''
        },
        {
            errorNumber: '108',
            code: 'Ｂ01',
            info: 'B01009503',
            state: '未決',
            billing: '○',
            content: '(503)HTTP-Status-ServiceUnavaila ble',
            userMessage: ''
        },
        {
            errorNumber: '109',
            code: 'Ｂ01',
            info: 'B01009504',
            state: '未決',
            billing: '○',
            content: '(504)HTTP-Status-GatewayTimeou t',
            userMessage: ''
        },
        {
            errorNumber: '110',
            code: 'Ｂ01',
            info: 'B01009505',
            state: '未決',
            billing: '○',
            content: '(505)HTTP-Status-HTTPVersionNotSupported',
            userMessage: ''
        },
        {
            errorNumber: '111',
            code: 'Ｂ01',
            info: 'B01009600',
            state: '未決',
            billing: '○',
            content: 'センタとの通信開始に失敗しました',
            userMessage: ''
        },
        {
            errorNumber: '112',
            code: 'Ｂ01',
            info: 'B01009601',
            state: '未決',
            billing: '○',
            content: 'センタとの通信開始（ྡ前解決）に失敗しました',
            userMessage: ''
        },
        {
            errorNumber: '113',
            code: 'Ｂ01',
            info: 'B01009602',
            state: '未決',
            billing: '○',
            content: 'センタとの通信開始（IP Address解決）に失敗しました',
            userMessage: ''
        },
        {
            errorNumber: '114',
            code: 'Ｂ01',
            info: 'B01009603',
            state: '未決',
            billing: '○',
            content: 'センタとの通信開始（connect）に失敗しました',
            userMessage: ''
        },
        {
            errorNumber: '115',
            code: 'Ｂ01',
            info: 'B01009604',
            state: '未決',
            billing: '○',
            content: 'センタとの通信中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '116',
            code: 'Ｂ01',
            info: 'B01009605',
            state: '未決',
            billing: '○',
            content: 'センタとの通信中（受信時）にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '117',
            code: 'Ｂ01',
            info: 'B01009606',
            state: '未決',
            billing: '○',
            content: 'センタとの通信中（送信時）にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '118',
            code: 'Ｂ01',
            info: 'B01009607',
            state: '未決',
            billing: '○',
            content: 'センタからの受信内容（HTTP Heade r部）が異常でした',
            userMessage: ''
        },
        {
            errorNumber: '119',
            code: 'Ｂ01',
            info: 'B01009610',
            state: '未決',
            billing: '○',
            content: 'Proxyサーバとの通信開始に失敗しました',
            userMessage: ''
        },
        {
            errorNumber: '120',
            code: 'Ｂ01',
            info: 'B01009611',
            state: '未決',
            billing: '○',
            content: 'Proxyサーバとの通信開始（ྡ前解決）に失敗しました',
            userMessage: ''
        },
        {
            errorNumber: '121',
            code: 'Ｂ01',
            info: 'B01009612',
            state: '未決',
            billing: '○',
            content: 'Proxyサーバとの通信開始（ IP Address解決）に失敗しました',
            userMessage: ''
        },
        {
            errorNumber: '122',
            code: 'Ｂ01',
            info: 'B01009613',
            state: '未決',
            billing: '○',
            content: 'Proxyサーバとの通信開始（connect）に失敗しました',
            userMessage: ''
        },
        {
            errorNumber: '123',
            code: 'Ｂ01',
            info: 'B01009614',
            state: '未決',
            billing: '○',
            content: 'Proxyサーバとの通信中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '124',
            code: 'Ｂ01',
            info: 'B01009615',
            state: '未決',
            billing: '○',
            content: 'Proxyサーバとの通信中（受信時）にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '125',
            code: 'Ｂ01',
            info: 'B01009616',
            state: '未決',
            billing: '○',
            content: 'Proxyサーバとの通信中（送信時）にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '126',
            code: 'Ｂ01',
            info: 'B01009617',
            state: '未決',
            billing: '○',
            content: 'Proxyサーバからの受信内容が異常でした',
            userMessage: ''
        },
        {
            errorNumber: '127',
            code: 'Ｂ01',
            info: 'B01009620',
            state: '未決',
            billing: '○',
            content: 'SSL通信の初期化中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '128',
            code: 'Ｂ01',
            info: 'B01009621',
            state: '未決',
            billing: '○',
            content: 'SSL通信の初期化中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '129',
            code: 'Ｂ01',
            info: 'B01009622',
            state: '未決',
            billing: '○',
            content: 'SSL通信の初期化中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '130',
            code: 'Ｂ01',
            info: 'B01009623',
            state: '未決',
            billing: '○',
            content: 'SSL通信の初期化中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '131',
            code: 'Ｂ01',
            info: 'B01009624',
            state: '未決',
            billing: '○',
            content: 'SSL通信の初期化中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '132',
            code: 'Ｂ01',
            info: 'B01009625',
            state: '未決',
            billing: '○',
            content: 'SSL通信の初期化中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '133',
            code: 'Ｂ01',
            info: 'B01009626',
            state: '未決',
            billing: '○',
            content: 'SSL通信のハンドシェイク時にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '134',
            code: 'Ｂ01',
            info: 'B01009627',
            state: '未決',
            billing: '○',
            content: 'SSL通信のハンドシェイク時にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '135',
            code: 'Ｂ01',
            info: 'B01009628',
            state: '未決',
            billing: '○',
            content: 'SSL通信のハンドシェイク時にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '136',
            code: 'Ｂ01',
            info: 'B01009629',
            state: '未決',
            billing: '○',
            content: 'SSL通信の受信時にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '137',
            code: 'Ｂ01',
            info: 'B01009630',
            state: '未決',
            billing: '○',
            content: 'SSL通信の送信時にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '138',
            code: 'Ｂ01',
            info: 'B01009700',
            state: '未決',
            billing: '○',
            content: '定義ファイル読込み時にエラーが発生しました（socket定義ファイル）',
            userMessage: ''
        },
        {
            errorNumber: '139',
            code: 'Ｂ01',
            info: 'B01009701',
            state: '未決',
            billing: '○',
            content: '定義ファイル読込み時にエラーが発生しました（通信定義ファイル）',
            userMessage: ''
        },
        {
            errorNumber: '140',
            code: 'Ｂ01',
            info: 'B01009702',
            state: '未決',
            billing: '○',
            content: '定義ファイル読込み時にエラーが発生しました（ログ定義ファイル）',
            userMessage: ''
        },
        {
            errorNumber: '141',
            code: 'Ｂ01',
            info: 'B01009900',
            state: '未決',
            billing: '○',
            content: '楽天Edy決済プログラムの内部エラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '142',
            code: 'Ｂ01',
            info: 'B01009901',
            state: '未決',
            billing: '○',
            content: 'URLの解釈中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '143',
            code: 'Ｂ01',
            info: 'B01009902',
            state: '未決',
            billing: '○',
            content: '文字コードの変換中にエラーが発生しました',
            userMessage: ''
        },
        {
            errorNumber: '144',
            code: 'Ｂ01',
            info: 'B01009903',
            state: '未決',
            billing: '○',
            content: 'URLのプロトコルエラー',
            userMessage: ''
        },
        {
            errorNumber: '145',
            code: 'Ｂ01',
            info: 'B01009904',
            state: '未決',
            billing: '○',
            content: 'SIGTERMを受信しました',
            userMessage: ''
        },
        {
            errorNumber: '146',
            code: 'Ｂ01',
            info: 'B01009999',
            state: '未決',
            billing: '○',
            content: 'XML文字列の解釈に失敗しました',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'S01',
            info: 'S01000002',
            state: '未決',
            billing: '○',
            content: 'メール作成失敗',
            userMessage: 'モバイルSuicaアプリのネット決済一覧から決済を行ってください'
        },
        {
            errorNumber: '2',
            code: 'S01',
            info: 'S01001001',
            state: '未決',
            billing: '○',
            content: '認証情報不正',
            userMessage: '決済依頼処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '3',
            code: 'S01',
            info: 'S01001002',
            state: '未決',
            billing: '○',
            content: 'システム接続不可',
            userMessage: '決済依頼処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '4',
            code: 'S01',
            info: 'S01001006',
            state: '未決',
            billing: '○',
            content: 'データ不正',
            userMessage: 'モバイルSuica決済は利用できません。'
        },
        {
            errorNumber: '5',
            code: 'S01',
            info: 'S01001007',
            state: '未決',
            billing: '○',
            content: '非会員、または退会済会員',
            userMessage: 'モバイルSuicaの登録が終わってから、再度購入画面からやり直してください。'
        },
        {
            errorNumber: '6',
            code: 'S01',
            info: 'S01001008',
            state: '未決',
            billing: '○',
            content: '登録可能件数オーバー',
            userMessage: 'モバイルSuica決済の決済依頼件数がオーバーしています。モバイルSuicaアプリのネット決済一覧確認してから、再度購入画面からやり直してください。'
        },
        {
            errorNumber: '7',
            code: 'S01',
            info: 'S01001010',
            state: '未決',
            billing: '○',
            content: '決済依頼ID重複',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '8',
            code: 'S01',
            info: 'S01001012',
            state: '未決',
            billing: '○',
            content: '登録データなし',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'S01',
            info: 'S01001015',
            state: '未決',
            billing: '○',
            content: '一時無効会員',
            userMessage: 'モバイルSuicaの登録状況を確認した後、再度購入画面からやり直してください。'
        },
        {
            errorNumber: '10',
            code: 'S01',
            info: 'S01001016',
            state: '未決',
            billing: '○',
            content: 'XML形式不正',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '12',
            code: 'S01',
            info: 'S01009901',
            state: '未決',
            billing: '○',
            content: 'システムエラーモバイルSuicaシステムの内部エラー',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '13',
            code: 'S01',
            info: 'S01009902',
            state: '未決',
            billing: '○',
            content: 'システムメンテナンス中モバイルSuicaシステムがメンテナンス等で停止している場吅に通知されます',
            userMessage: '決済処理に失敗しました。申し訲ございませんが、しばらく時間をあけて購入画面からやり直してください。'
        },
        {
            errorNumber: '1',
            code: 'W01',
            info: 'W0100W001',
            state: '未決',
            billing: '○',
            content: 'データ種別不正',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'W01',
            info: 'W0100W002',
            state: '未決',
            billing: '○',
            content: 'UserId/Passwordが存在しない',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'W01',
            info: 'W0100W003',
            state: '未決',
            billing: '○',
            content: '収納処理企業コード/支払いコードが一致しない',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'W01',
            info: 'W0100W004',
            state: '未決',
            billing: '○',
            content: '2DBC処理஦業者番号/契約案件番号が一致しない',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'W01',
            info: 'W0100W005',
            state: '未決',
            billing: '○',
            content: '入金処理企業コード/支払いコードが一致しない',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'W01',
            info: 'W0100W090',
            state: '未決',
            billing: '○',
            content: 'キーデータ取得時エラー',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'W01',
            info: 'W0100W092',
            state: '未決',
            billing: '',
            content: '短時間の要求過多によりアクセスが制限されました。／取引失敗を表示し、再度実行して下さい。',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'W01',
            info: 'W0100W600',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 不正な値 )',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'W01',
            info: 'W0100W601',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払いコード未設定 )',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'W01',
            info: 'W0100W602',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払いコード桁不足 )',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'W01',
            info: 'W0100W603',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 受付番号未設定 )',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'W01',
            info: 'W0100W604',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 受付番号桁不足 )',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'W01',
            info: 'W0100W605',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 企業コード未設定 )',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'W01',
            info: 'W0100W606',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 企業コード桁不足 )',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'W01',
            info: 'W0100W607',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 電話番号未設定 )',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'W01',
            info: 'W0100W608',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 漢字氏ྡ未設定 )',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'W01',
            info: 'W0100W609',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払期限未設定 )',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'W01',
            info: 'W0100W610',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払期限数字以外の値 )',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'W01',
            info: 'W0100W611',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払期限桁不正 )',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'W01',
            info: 'W0100W612',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払期限日時の値不正 )',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'W01',
            info: 'W0100W613',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払期限過去日付不正 )',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'W01',
            info: 'W0100W614',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払金額未設定 )',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'W01',
            info: 'W0100W615',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払金額値不正 )',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'W01',
            info: 'W0100W616',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払金額 ≦0 )',
            userMessage: ''
        },
        {
            errorNumber: '25',
            code: 'W01',
            info: 'W0100W617',
            state: '未決',
            billing: '○',
            content: '収納処理項目チェック時エラー ( 支払金額＞ 999999 )',
            userMessage: ''
        },
        {
            errorNumber: '26',
            code: 'W01',
            info: 'W0100W640',
            state: '未決',
            billing: '○',
            content: '収納情報重複エラー',
            userMessage: ''
        },
        {
            errorNumber: '27',
            code: 'W01',
            info: 'W0100W641',
            state: '未決',
            billing: '○',
            content: '収納情報論理削除済みエラー',
            userMessage: ''
        },
        {
            errorNumber: '28',
            code: 'W01',
            info: 'W0100W642',
            state: '未決',
            billing: '○',
            content: '収納処理削除(D) 収納情報なしエラー',
            userMessage: ''
        },
        {
            errorNumber: '29',
            code: 'W01',
            info: 'W0100W643',
            state: '未決',
            billing: '○',
            content: '収納処理削除(D) 収納情報論理削除済エラー',
            userMessage: ''
        },
        {
            errorNumber: '30',
            code: 'W01',
            info: 'W0100W644',
            state: '未決',
            billing: '○',
            content: '収納処理削除収納情報変更不可エラー',
            userMessage: ''
        },
        {
            errorNumber: '31',
            code: 'W01',
            info: 'W0100W670',
            state: '未決',
            billing: '○',
            content: '収納DB OPEN時エラー',
            userMessage: ''
        },
        {
            errorNumber: '32',
            code: 'W01',
            info: 'W0100W671',
            state: '未決',
            billing: '○',
            content: '収納DB READ時エラー',
            userMessage: ''
        },
        {
            errorNumber: '33',
            code: 'W01',
            info: 'W0100W672',
            state: '未決',
            billing: '○',
            content: '収納DB INSERT時エラー',
            userMessage: ''
        },
        {
            errorNumber: '34',
            code: 'W01',
            info: 'W0100W673',
            state: '未決',
            billing: '○',
            content: '収納処理削除(D) 収納DB Open時エラー',
            userMessage: ''
        },
        {
            errorNumber: '35',
            code: 'W01',
            info: 'W0100W674',
            state: '未決',
            billing: '○',
            content: '収納処理削除(D) 収納DB Read時エラー',
            userMessage: ''
        },
        {
            errorNumber: '36',
            code: 'W01',
            info: 'W0100W675',
            state: '未決',
            billing: '○',
            content: '収納処理削除(D) 収納DB Insert時エラー',
            userMessage: ''
        },
        {
            errorNumber: '37',
            code: 'W01',
            info: 'W0100W680',
            state: '未決',
            billing: '○',
            content: 'ケータイ決済番号用シーケンスN oを取得できない',
            userMessage: ''
        },
        {
            errorNumber: '38',
            code: 'W01',
            info: 'W0100W691',
            state: '未決',
            billing: '○',
            content: '収納処理削除(D)該当の収納データは照会中のため削除できません',
            userMessage: ''
        },
        {
            errorNumber: '39',
            code: 'W01',
            info: 'W0100W700',
            state: '',
            billing: '',
            content: '入金処理項目チェックエラー（支払コード未設定）',
            userMessage: ''
        },
        {
            errorNumber: '40',
            code: 'W01',
            info: 'W0100W701',
            state: '',
            billing: '',
            content: '入金処理項目チェックエラー（企業コード未設定）',
            userMessage: ''
        },
        {
            errorNumber: '41',
            code: 'W01',
            info: 'W0100W730',
            state: '',
            billing: '',
            content: '入金処理未入金エラー',
            userMessage: ''
        },
        {
            errorNumber: '42',
            code: 'W01',
            info: 'W0100W731',
            state: '',
            billing: '',
            content: '入金処理未送信データなしエラー',
            userMessage: ''
        },
        {
            errorNumber: '43',
            code: 'W01',
            info: 'W0100W740',
            state: '',
            billing: '',
            content: '入金処理入金情報なしエラー',
            userMessage: ''
        },
        {
            errorNumber: '44',
            code: 'W01',
            info: 'W0100W741',
            state: '',
            billing: '',
            content: '入金処理入金情報論理削除済みエラー',
            userMessage: ''
        },
        {
            errorNumber: '45',
            code: 'W01',
            info: 'W0100W770',
            state: '',
            billing: '',
            content: '入金処理 READ要求入金DB OPEN時エラー',
            userMessage: ''
        },
        {
            errorNumber: '46',
            code: 'W01',
            info: 'W0100W771',
            state: '',
            billing: '',
            content: '入金処理 READ要求入金DB READ時エラー',
            userMessage: ''
        },
        {
            errorNumber: '47',
            code: 'W01',
            info: 'W0100W772',
            state: '',
            billing: '',
            content: '入金処理 READ要求入金DBUPDATE時エラー',
            userMessage: ''
        },
        {
            errorNumber: '48',
            code: 'W01',
            info: 'W0100W773',
            state: '',
            billing: '',
            content: '入金処理 SEARCH要求入金D BOPEN時エラー',
            userMessage: ''
        },
        {
            errorNumber: '49',
            code: 'W01',
            info: 'W0100W774',
            state: '',
            billing: '',
            content: '入金処理 SEARCH要求入金D BREAD時エラー',
            userMessage: ''
        },
        {
            errorNumber: '50',
            code: 'W01',
            info: 'W0100W775',
            state: '',
            billing: '',
            content: '入金処理 SEARCH要求入金D BUPDATE時エラー',
            userMessage: ''
        },
        {
            errorNumber: '51',
            code: 'W01',
            info: 'W0100W853',
            state: '',
            billing: '',
            content: 'コンビニ決済஦業者による内部エラー/お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '52',
            code: 'W01',
            info: 'W0100R156',
            state: '',
            billing: '',
            content: '支払期限切れエラー',
            userMessage: ''
        },
        {
            errorNumber: '53',
            code: 'W02',
            info: 'W02000001',
            state: '',
            billing: '',
            content: '決済要求エラー/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '54',
            code: 'W02',
            info: 'W02000002',
            state: '',
            billing: '',
            content: '支払い停止要求エラー/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '55',
            code: 'W02',
            info: 'W02000003',
            state: '',
            billing: '',
            content: '加盟店設定エラー/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '56',
            code: 'LW1',
            info: 'LW1310004',
            state: '',
            billing: '',
            content: 'ローソン・ミニストップ処理要求エラー/ユーザがLoppi操作中、または操作済のため処理に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '57',
            code: 'FM1',
            info: 'FM1999001',
            state: '',
            billing: '',
            content: 'ファミリマート・決済要求エラー/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '58',
            code: 'FM1',
            info: 'FM1999002',
            state: '',
            billing: '',
            content: 'ファミリマート・決済キャンセル要求エラー/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'D01',
            info: 'D01000001',
            state: '未決',
            billing: '○',
            content: 'システムエラー(通信)/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'D01',
            info: 'D01000002',
            state: '未決',
            billing: '○',
            content: 'システムエラー(通信)/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'D01',
            info: 'D01000099',
            state: '未決',
            billing: '○',
            content: 'システムエラー(通信)/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'SE1',
            info: 'SE1990001',
            state: '未決',
            billing: '-',
            content: 'セブンイレブン・決済要求エラー/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'SE1',
            info: 'SE1990002',
            state: '未決',
            billing: '-',
            content: 'セブンイレブン・決済キャンセル要求エラー/取引失敗を表示し、お問い吅わせ下さい。',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'P01',
            info: 'P01010202',
            state: '未決',
            billing: '－',
            content: '取引数が月間の最大数を超えています。',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'P01',
            info: 'P01010400',
            state: '未決',
            billing: '－',
            content: '注文吅計が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'P01',
            info: 'P01010401',
            state: '未決',
            billing: '－',
            content: '注文吅計が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'P01',
            info: 'P01010402',
            state: '未決',
            billing: '－',
            content: '加盟店の設定が認証オプションを使用できない契約になっています。',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'P01',
            info: 'P01010404',
            state: '未決',
            billing: '－',
            content: '戻りURLが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'P01',
            info: 'P01010405',
            state: '未決',
            billing: '－',
            content: 'キャンセル時のURLが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'P01',
            info: 'P01010406',
            state: '未決',
            billing: '－',
            content: '顧宠IDが無効です。',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'P01',
            info: 'P01010407',
            state: '未決',
            billing: '－',
            content: '顧宠のメールアドレスが無効です。',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'P01',
            info: 'P01010408',
            state: '未決',
            billing: '－',
            content: 'トークンが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'P01',
            info: 'P01010409',
            state: '未決',
            billing: '－',
            content: 'トークンが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '25',
            code: 'P01',
            info: 'P01010410',
            state: '未決',
            billing: '－',
            content: 'トークンが無効です。',
            userMessage: ''
        },
        {
            errorNumber: '26',
            code: 'P01',
            info: 'P01010411',
            state: '未決',
            billing: '－',
            content: 'トークンの有効期限が切れました。',
            userMessage: ''
        },
        {
            errorNumber: '27',
            code: 'P01',
            info: 'P01010412',
            state: '未決',
            billing: '－',
            content: '請求番号が重複しています。',
            userMessage: ''
        },
        {
            errorNumber: '28',
            code: 'P01',
            info: 'P01010413',
            state: '未決',
            billing: '－',
            content: '商品の吅計金額が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '29',
            code: 'P01',
            info: 'P01010414',
            state: '未決',
            billing: '－',
            content: '取引の金額上限を超えています。',
            userMessage: ''
        },
        {
            errorNumber: '30',
            code: 'P01',
            info: 'P01010415',
            state: '未決',
            billing: '－',
            content: '指定取引は処理済みです。',
            userMessage: ''
        },
        {
            errorNumber: '31',
            code: 'P01',
            info: 'P01010416',
            state: '未決',
            billing: '－',
            content: '再処理の最大試行回数を超えています。',
            userMessage: ''
        },
        {
            errorNumber: '32',
            code: 'P01',
            info: 'P01010417',
            state: '未決',
            billing: '－',
            content: '支払方法が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '33',
            code: 'P01',
            info: 'P01010418',
            state: '未決',
            billing: '－',
            content: '通貨コードが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '34',
            code: 'P01',
            info: 'P01010419',
            state: '未決',
            billing: '－',
            content: '顧宠IDが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '35',
            code: 'P01',
            info: 'P01010420',
            state: '未決',
            billing: '－',
            content: '支払オプションが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '36',
            code: 'P01',
            info: 'P01010421',
            state: '未決',
            billing: '－',
            content: 'トークンが無効です。',
            userMessage: ''
        },
        {
            errorNumber: '37',
            code: 'P01',
            info: 'P01010422',
            state: '未決',
            billing: '－',
            content: '顧宠の資金源が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '38',
            code: 'P01',
            info: 'P01010424',
            state: '未決',
            billing: '－',
            content: '配送先住所が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '39',
            code: 'P01',
            info: 'P01010425',
            state: '未決',
            billing: '－',
            content: '加盟店の設定がAPIを使用できない契約になっています。',
            userMessage: ''
        },
        {
            errorNumber: '40',
            code: 'P01',
            info: 'P01010426',
            state: '未決',
            billing: '－',
            content: '商品の吅計金額が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '41',
            code: 'P01',
            info: 'P01010427',
            state: '未決',
            billing: '－',
            content: '送料の吅計が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '42',
            code: 'P01',
            info: 'P01010428',
            state: '未決',
            billing: '－',
            content: '手数料の吅計が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '43',
            code: 'P01',
            info: 'P01010429',
            state: '未決',
            billing: '－',
            content: '税金の吅計が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '44',
            code: 'P01',
            info: 'P01010430',
            state: '未決',
            billing: '－',
            content: '商品金額が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '45',
            code: 'P01',
            info: 'P01010431',
            state: '未決',
            billing: '－',
            content: '商品金額が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '46',
            code: 'P01',
            info: 'P01010432',
            state: '未決',
            billing: '－',
            content: '請求番号の桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '47',
            code: 'P01',
            info: 'P01010433',
            state: '未決',
            billing: '－',
            content: '商品説明の一部が省略されました。',
            userMessage: ''
        },
        {
            errorNumber: '48',
            code: 'P01',
            info: 'P01010434',
            state: '未決',
            billing: '－',
            content: '自由項目の一部が省略されました。',
            userMessage: ''
        },
        {
            errorNumber: '49',
            code: 'P01',
            info: 'P01010435',
            state: '未決',
            billing: '－',
            content: '承認が未処理です。',
            userMessage: ''
        },
        {
            errorNumber: '50',
            code: 'P01',
            info: 'P01010436',
            state: '未決',
            billing: '－',
            content: 'ページスタイルྡの桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '51',
            code: 'P01',
            info: 'P01010437',
            state: '未決',
            billing: '－',
            content: 'ヘッダーイメージURLの桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '52',
            code: 'P01',
            info: 'P01010438',
            state: '未決',
            billing: '－',
            content: 'ヘッダーイメージURLの桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '53',
            code: 'P01',
            info: 'P01010439',
            state: '未決',
            billing: '－',
            content: 'ヘッダーイメージURLの桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '54',
            code: 'P01',
            info: 'P01010440',
            state: '未決',
            billing: '－',
            content: 'ヘッダーイメージURLの桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '55',
            code: 'P01',
            info: 'P01010441',
            state: '未決',
            billing: '－',
            content: '通知先URLの桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '56',
            code: 'P01',
            info: 'P01010442',
            state: '未決',
            billing: '－',
            content: '識別コードの桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '57',
            code: 'P01',
            info: 'P01010443',
            state: '未決',
            billing: '－',
            content: '支払オプションが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '58',
            code: 'P01',
            info: 'P01010444',
            state: '未決',
            billing: '－',
            content: '通貨コードが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '59',
            code: 'P01',
            info: 'P01010445',
            state: '未決',
            billing: '－',
            content: '指定取引の処理を続行できません。',
            userMessage: ''
        },
        {
            errorNumber: '60',
            code: 'P01',
            info: 'P01010446',
            state: '未決',
            billing: '－',
            content: '支払オプションが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '61',
            code: 'P01',
            info: 'P01010457',
            state: '未決',
            billing: '－',
            content: 'eBayのAPIの初期化に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '62',
            code: 'P01',
            info: 'P01010458',
            state: '未決',
            billing: '－',
            content: 'eBayのAPIでエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '63',
            code: 'P01',
            info: 'P01010459',
            state: '未決',
            billing: '－',
            content: 'eBayのAPIでエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '64',
            code: 'P01',
            info: 'P01010460',
            state: '未決',
            billing: '－',
            content: 'eBayの通信でエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '65',
            code: 'P01',
            info: 'P01010461',
            state: '未決',
            billing: '－',
            content: '商品数が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '66',
            code: 'P01',
            info: 'P01010462',
            state: '未決',
            billing: '－',
            content: '注文が存在しません。',
            userMessage: ''
        },
        {
            errorNumber: '67',
            code: 'P01',
            info: 'P01010463',
            state: '未決',
            billing: '－',
            content: 'eBayの接続情報が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '68',
            code: 'P01',
            info: 'P01010464',
            state: '未決',
            billing: '－',
            content: '商品番号と取引IDが不整吅です。',
            userMessage: ''
        },
        {
            errorNumber: '69',
            code: 'P01',
            info: 'P01010465',
            state: '未決',
            billing: '－',
            content: 'eBayの接続情報が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '70',
            code: 'P01',
            info: 'P01010467',
            state: '未決',
            billing: '－',
            content: '商品番号が重複しています。',
            userMessage: ''
        },
        {
            errorNumber: '71',
            code: 'P01',
            info: 'P01010468',
            state: '未決',
            billing: '－',
            content: '注文IDが重複しています。',
            userMessage: ''
        },
        {
            errorNumber: '72',
            code: 'P01',
            info: 'P01010469',
            state: '未決',
            billing: '－',
            content: '指定オプションが一時的に使用不可になっています。',
            userMessage: ''
        },
        {
            errorNumber: '73',
            code: 'P01',
            info: 'P01010470',
            state: '未決',
            billing: '－',
            content: '指定オプションが無効です。',
            userMessage: ''
        },
        {
            errorNumber: '74',
            code: 'P01',
            info: 'P01010471',
            state: '未決',
            billing: '－',
            content: '戻りURLが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '75',
            code: 'P01',
            info: 'P01010472',
            state: '未決',
            billing: '－',
            content: 'キャンセル時のURLが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '76',
            code: 'P01',
            info: 'P01010473',
            state: '未決',
            billing: '－',
            content: '指定パラメータはサポート対象外です。',
            userMessage: ''
        },
        {
            errorNumber: '77',
            code: 'P01',
            info: 'P01010474',
            state: '未決',
            billing: '－',
            content: '指定取引の処理を続行できません。',
            userMessage: ''
        },
        {
            errorNumber: '78',
            code: 'P01',
            info: 'P01010475',
            state: '未決',
            billing: '－',
            content: '支払オプションが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '79',
            code: 'P01',
            info: 'P01010476',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '80',
            code: 'P01',
            info: 'P01010477',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '81',
            code: 'P01',
            info: 'P01010478',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '82',
            code: 'P01',
            info: 'P01010479',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '83',
            code: 'P01',
            info: 'P01010480',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '84',
            code: 'P01',
            info: 'P01010481',
            state: '未決',
            billing: '－',
            content: '支払オプションが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '85',
            code: 'P01',
            info: 'P01010482',
            state: '未決',
            billing: '－',
            content: '支払オプションが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '86',
            code: 'P01',
            info: 'P01010486',
            state: '未決',
            billing: '－',
            content: '購入者の残高が不足しています。',
            userMessage: ''
        },
        {
            errorNumber: '87',
            code: 'P01',
            info: 'P01010537',
            state: '未決',
            billing: '－',
            content: 'リスク管理設定により、該当取引が拒否されました。',
            userMessage: ''
        },
        {
            errorNumber: '88',
            code: 'P01',
            info: 'P01010538',
            state: '未決',
            billing: '－',
            content: 'リスク管理設定により、該当取引が拒否されました。',
            userMessage: ''
        },
        {
            errorNumber: '89',
            code: 'P01',
            info: 'P01010539',
            state: '未決',
            billing: '－',
            content: 'リスク管理設定により、支払いが拒否されました。',
            userMessage: ''
        },
        {
            errorNumber: '90',
            code: 'P01',
            info: 'P01010600',
            state: '未決',
            billing: '－',
            content: '承認が取消されました。',
            userMessage: ''
        },
        {
            errorNumber: '91',
            code: 'P01',
            info: 'P01010601',
            state: '未決',
            billing: '－',
            content: '承認期間の有効期限が切れました。',
            userMessage: ''
        },
        {
            errorNumber: '92',
            code: 'P01',
            info: 'P01010602',
            state: '未決',
            billing: '－',
            content: '承認は既に完了しています。',
            userMessage: ''
        },
        {
            errorNumber: '93',
            code: 'P01',
            info: 'P01010603',
            state: '未決',
            billing: '－',
            content: '顧宠のアカウントに制限が掛けられています。',
            userMessage: ''
        },
        {
            errorNumber: '94',
            code: 'P01',
            info: 'P01010604',
            state: '未決',
            billing: '－',
            content: '承認処理を続行できません。',
            userMessage: ''
        },
        {
            errorNumber: '95',
            code: 'P01',
            info: 'P01010605',
            state: '未決',
            billing: '－',
            content: 'サポート対象外の通貨コードです。',
            userMessage: ''
        },
        {
            errorNumber: '96',
            code: 'P01',
            info: 'P01010606',
            state: '未決',
            billing: '－',
            content: '取引が拒否されました。',
            userMessage: ''
        },
        {
            errorNumber: '97',
            code: 'P01',
            info: 'P01010607',
            state: '未決',
            billing: '－',
            content: '承認と回収機能が使用できません。',
            userMessage: ''
        },
        {
            errorNumber: '98',
            code: 'P01',
            info: 'P01010608',
            state: '未決',
            billing: '－',
            content: '顧宠の資金源が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '99',
            code: 'P01',
            info: 'P01010609',
            state: '未決',
            billing: '－',
            content: '取引IDが無効です。',
            userMessage: ''
        },
        {
            errorNumber: '100',
            code: 'P01',
            info: 'P01010610',
            state: '未決',
            billing: '－',
            content: '指定された金額の上限を超えています。',
            userMessage: ''
        },
        {
            errorNumber: '101',
            code: 'P01',
            info: 'P01010611',
            state: '未決',
            billing: '－',
            content: '加盟店の設定が承認と回収機能を使用できない契約になっています。',
            userMessage: ''
        },
        {
            errorNumber: '102',
            code: 'P01',
            info: 'P01010612',
            state: '未決',
            billing: '－',
            content: '決済可能な最大数に達しました。',
            userMessage: ''
        },
        {
            errorNumber: '103',
            code: 'P01',
            info: 'P01010613',
            state: '未決',
            billing: '－',
            content: '通貨コードが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '104',
            code: 'P01',
            info: 'P01010614',
            state: '未決',
            billing: '－',
            content: '取消の承認番号が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '105',
            code: 'P01',
            info: 'P01010615',
            state: '未決',
            billing: '－',
            content: '再承認の指定方法が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '106',
            code: 'P01',
            info: 'P01010616',
            state: '未決',
            billing: '－',
            content: '承認に許される再承認の最大数に達しました。',
            userMessage: ''
        },
        {
            errorNumber: '107',
            code: 'P01',
            info: 'P01010617',
            state: '未決',
            billing: '－',
            content: '保証期間中に再承認が呼出されました。',
            userMessage: ''
        },
        {
            errorNumber: '108',
            code: 'P01',
            info: 'P01010618',
            state: '未決',
            billing: '－',
            content: '取引が取消、又は期限切れの状態です。',
            userMessage: ''
        },
        {
            errorNumber: '109',
            code: 'P01',
            info: 'P01010619',
            state: '未決',
            billing: '－',
            content: '請求番号の桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '110',
            code: 'P01',
            info: 'P01010620',
            state: '未決',
            billing: '－',
            content: '注文の状態が取消、期限切れ、又は完了状態です。',
            userMessage: ''
        },
        {
            errorNumber: '111',
            code: 'P01',
            info: 'P01010621',
            state: '未決',
            billing: '－',
            content: '注文の有効期限が切れました。',
            userMessage: ''
        },
        {
            errorNumber: '112',
            code: 'P01',
            info: 'P01010622',
            state: '未決',
            billing: '－',
            content: '注文が取消されました。',
            userMessage: ''
        },
        {
            errorNumber: '113',
            code: 'P01',
            info: 'P01010623',
            state: '未決',
            billing: '－',
            content: '注文に許される承認の最大数に達しました。',
            userMessage: ''
        },
        {
            errorNumber: '114',
            code: 'P01',
            info: 'P01010624',
            state: '未決',
            billing: '－',
            content: '請求番号が重複しています。',
            userMessage: ''
        },
        {
            errorNumber: '115',
            code: 'P01',
            info: 'P01010625',
            state: '未決',
            billing: '－',
            content: '取引の金額上限を超えています。',
            userMessage: ''
        },
        {
            errorNumber: '116',
            code: 'P01',
            info: 'P01010626',
            state: '未決',
            billing: '－',
            content: '取引がリスクモデルによって拒否されました。',
            userMessage: ''
        },
        {
            errorNumber: '117',
            code: 'P01',
            info: 'P01010627',
            state: '未決',
            billing: '－',
            content: 'サポート対象外のパラメータです。',
            userMessage: ''
        },
        {
            errorNumber: '118',
            code: 'P01',
            info: 'P01010628',
            state: '未決',
            billing: '－',
            content: '指定取引の処理を続行できません。',
            userMessage: ''
        },
        {
            errorNumber: '119',
            code: 'P01',
            info: 'P01010629',
            state: '未決',
            billing: '－',
            content: '再承認の指定方法が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '120',
            code: 'P01',
            info: 'P01010630',
            state: '未決',
            billing: '－',
            content: '商品金額が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '121',
            code: 'P01',
            info: 'P01010725',
            state: '未決',
            billing: '－',
            content: '配送先住所が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '122',
            code: 'P01',
            info: 'P01010726',
            state: '未決',
            billing: '－',
            content: '配送先住所が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '123',
            code: 'P01',
            info: 'P01010727',
            state: '未決',
            billing: '－',
            content: '配送先住所が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '124',
            code: 'P01',
            info: 'P01010728',
            state: '未決',
            billing: '－',
            content: '配送先住所が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '125',
            code: 'P01',
            info: 'P01010729',
            state: '未決',
            billing: '－',
            content: '配送先住所が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '126',
            code: 'P01',
            info: 'P01010730',
            state: '未決',
            billing: '－',
            content: '配送先住所が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '127',
            code: 'P01',
            info: 'P01010731',
            state: '未決',
            billing: '－',
            content: '配送先住所が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '128',
            code: 'P01',
            info: 'P01010736',
            state: '未決',
            billing: '－',
            content: '配送先住所の照会に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '129',
            code: 'P01',
            info: 'P01010800',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '130',
            code: 'P01',
            info: 'P01011001',
            state: '未決',
            billing: '－',
            content: '桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '131',
            code: 'P01',
            info: 'P01011094',
            state: '未決',
            billing: '－',
            content: '指定承認の取消、再承認、回収はできません。',
            userMessage: ''
        },
        {
            errorNumber: '132',
            code: 'P01',
            info: 'P01011547',
            state: '未決',
            billing: '－',
            content: '指定オプションが一時的に使用不可になっています。',
            userMessage: ''
        },
        {
            errorNumber: '133',
            code: 'P01',
            info: 'P01011601',
            state: '未決',
            billing: '－',
            content: '請求先住所が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '134',
            code: 'P01',
            info: 'P01011602',
            state: '未決',
            billing: '－',
            content: '請求先住所が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '135',
            code: 'P01',
            info: 'P01011610',
            state: '未決',
            billing: '－',
            content: '支払が保留されています。',
            userMessage: ''
        },
        {
            errorNumber: '136',
            code: 'P01',
            info: 'P01011611',
            state: '未決',
            billing: '－',
            content: '取引が中止されました。',
            userMessage: ''
        },
        {
            errorNumber: '137',
            code: 'P01',
            info: 'P01011612',
            state: '未決',
            billing: '－',
            content: '取引の処理を続行できません。',
            userMessage: ''
        },
        {
            errorNumber: '138',
            code: 'P01',
            info: 'P01011801',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '139',
            code: 'P01',
            info: 'P01011802',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '140',
            code: 'P01',
            info: 'P01011803',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '141',
            code: 'P01',
            info: 'P01011804',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '142',
            code: 'P01',
            info: 'P01011805',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '143',
            code: 'P01',
            info: 'P01011806',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '144',
            code: 'P01',
            info: 'P01011807',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '145',
            code: 'P01',
            info: 'P01011810',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '146',
            code: 'P01',
            info: 'P01011811',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '147',
            code: 'P01',
            info: 'P01011812',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '148',
            code: 'P01',
            info: 'P01011813',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '149',
            code: 'P01',
            info: 'P01011814',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '150',
            code: 'P01',
            info: 'P01011815',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '151',
            code: 'P01',
            info: 'P01011820',
            state: '未決',
            billing: '－',
            content: '無効なデータです。',
            userMessage: ''
        },
        {
            errorNumber: '152',
            code: 'P01',
            info: 'P01011821',
            state: '未決',
            billing: '－',
            content: '無効なオプションです。',
            userMessage: ''
        },
        {
            errorNumber: '153',
            code: 'P01',
            info: 'P01011822',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '154',
            code: 'P01',
            info: 'P01011823',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '155',
            code: 'P01',
            info: 'P01011824',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '156',
            code: 'P01',
            info: 'P01011825',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '157',
            code: 'P01',
            info: 'P01011826',
            state: '未決',
            billing: '－',
            content: '送料の吅計が無効です。',
            userMessage: ''
        },
        {
            errorNumber: '158',
            code: 'P01',
            info: 'P01011827',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '159',
            code: 'P01',
            info: 'P01011828',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '160',
            code: 'P01',
            info: 'P01011829',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '161',
            code: 'P01',
            info: 'P01011830',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '162',
            code: 'P01',
            info: 'P01011831',
            state: '未決',
            billing: '－',
            content: 'URLの桁数オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '163',
            code: 'P01',
            info: 'P01011832',
            state: '未決',
            billing: '－',
            content: '注文吅計が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '164',
            code: 'P01',
            info: 'P01012109',
            state: '未決',
            billing: '－',
            content: '無効なオプションです。',
            userMessage: ''
        },
        {
            errorNumber: '165',
            code: 'P01',
            info: 'P01012124',
            state: '未決',
            billing: '－',
            content: '無効なオプションです。',
            userMessage: ''
        },
        {
            errorNumber: '166',
            code: 'P01',
            info: 'P01012200',
            state: '未決',
            billing: '－',
            content: '顧宠IDが不正です。',
            userMessage: ''
        },
        {
            errorNumber: '167',
            code: 'P01',
            info: 'P01012201',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '168',
            code: 'P01',
            info: 'P01012202',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '169',
            code: 'P01',
            info: 'P01012203',
            state: '未決',
            billing: '－',
            content: '保留状態の為、支払が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '170',
            code: 'P01',
            info: 'P01012204',
            state: '未決',
            billing: '－',
            content: 'エラーが発生した為、取引は戻されました。',
            userMessage: ''
        },
        {
            errorNumber: '171',
            code: 'P01',
            info: 'P01012205',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '172',
            code: 'P01',
            info: 'P01012206',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '173',
            code: 'P01',
            info: 'P01012207',
            state: '未決',
            billing: '－',
            content: 'オプションの指定に誤りがあります。',
            userMessage: ''
        },
        {
            errorNumber: '174',
            code: 'P01',
            info: 'P01012208',
            state: '未決',
            billing: '－',
            content: '商品金額が一致しません。',
            userMessage: ''
        },
        {
            errorNumber: '175',
            code: 'P01',
            info: 'P01020000',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（None）',
            userMessage: ''
        },
        {
            errorNumber: '176',
            code: 'P01',
            info: 'P01020001',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Canceled-Reversal）',
            userMessage: ''
        },
        {
            errorNumber: '177',
            code: 'P01',
            info: 'P01020003',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Denied）',
            userMessage: ''
        },
        {
            errorNumber: '178',
            code: 'P01',
            info: 'P01020004',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Expired）',
            userMessage: ''
        },
        {
            errorNumber: '179',
            code: 'P01',
            info: 'P01020005',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Failed）',
            userMessage: ''
        },
        {
            errorNumber: '180',
            code: 'P01',
            info: 'P01020006',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（In-Progress）',
            userMessage: ''
        },
        {
            errorNumber: '181',
            code: 'P01',
            info: 'P01020007',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Partially-Refunded）',
            userMessage: ''
        },
        {
            errorNumber: '182',
            code: 'P01',
            info: 'P01020008',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Pending）',
            userMessage: ''
        },
        {
            errorNumber: '183',
            code: 'P01',
            info: 'P01020009',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Refunded）',
            userMessage: ''
        },
        {
            errorNumber: '184',
            code: 'P01',
            info: 'P01020010',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Reversed）',
            userMessage: ''
        },
        {
            errorNumber: '185',
            code: 'P01',
            info: 'P01020011',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Processed）',
            userMessage: ''
        },
        {
            errorNumber: '186',
            code: 'P01',
            info: 'P01020012',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。（Voided）',
            userMessage: ''
        },
        {
            errorNumber: '187',
            code: 'P01',
            info: 'P01029999',
            state: '未決',
            billing: '－',
            content: '支払状況が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '188',
            code: 'P01',
            info: 'P01081000',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。',
            userMessage: ''
        },
        {
            errorNumber: '189',
            code: 'P01',
            info: 'P01081001',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。',
            userMessage: ''
        },
        {
            errorNumber: '190',
            code: 'P01',
            info: 'P01081002',
            state: '未決',
            billing: '－',
            content: '指定メソッドはサポートされていません。',
            userMessage: ''
        },
        {
            errorNumber: '191',
            code: 'P01',
            info: 'P01081003',
            state: '未決',
            billing: '－',
            content: 'メソッドが指定されていません。',
            userMessage: ''
        },
        {
            errorNumber: '192',
            code: 'P01',
            info: 'P01081004',
            state: '未決',
            billing: '－',
            content: 'リクエストパラメータが指定されていません。',
            userMessage: ''
        },
        {
            errorNumber: '193',
            code: 'P01',
            info: 'P01081100',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Amt）',
            userMessage: ''
        },
        {
            errorNumber: '194',
            code: 'P01',
            info: 'P01081101',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（MaxAmt）',
            userMessage: ''
        },
        {
            errorNumber: '195',
            code: 'P01',
            info: 'P01081102',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ReturnURL）',
            userMessage: ''
        },
        {
            errorNumber: '196',
            code: 'P01',
            info: 'P01081103',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（NotifyURL）',
            userMessage: ''
        },
        {
            errorNumber: '197',
            code: 'P01',
            info: 'P01081104',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（CancelURL）',
            userMessage: ''
        },
        {
            errorNumber: '198',
            code: 'P01',
            info: 'P01081105',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ShipToStreet）',
            userMessage: ''
        },
        {
            errorNumber: '199',
            code: 'P01',
            info: 'P01081106',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ShipToStreet2）',
            userMessage: ''
        },
        {
            errorNumber: '200',
            code: 'P01',
            info: 'P01081107',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ShipToCity）',
            userMessage: ''
        },
        {
            errorNumber: '201',
            code: 'P01',
            info: 'P01081108',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ShipToState）',
            userMessage: ''
        },
        {
            errorNumber: '202',
            code: 'P01',
            info: 'P01081109',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ShipToZip）',
            userMessage: ''
        },
        {
            errorNumber: '203',
            code: 'P01',
            info: 'P01081110',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Country）',
            userMessage: ''
        },
        {
            errorNumber: '204',
            code: 'P01',
            info: 'P01081111',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ReqConfirmShipping）',
            userMessage: ''
        },
        {
            errorNumber: '205',
            code: 'P01',
            info: 'P01081112',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（NoShipping）',
            userMessage: ''
        },
        {
            errorNumber: '206',
            code: 'P01',
            info: 'P01081113',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（AddrOverride）',
            userMessage: ''
        },
        {
            errorNumber: '207',
            code: 'P01',
            info: 'P01081114',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（LocaleCode）',
            userMessage: ''
        },
        {
            errorNumber: '208',
            code: 'P01',
            info: 'P01081115',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（PaymentAction）',
            userMessage: ''
        },
        {
            errorNumber: '209',
            code: 'P01',
            info: 'P01081116',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Email）',
            userMessage: ''
        },
        {
            errorNumber: '210',
            code: 'P01',
            info: 'P01081117',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Token）',
            userMessage: ''
        },
        {
            errorNumber: '211',
            code: 'P01',
            info: 'P01081118',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（PayerID）',
            userMessage: ''
        },
        {
            errorNumber: '212',
            code: 'P01',
            info: 'P01081119',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ItemAmt）',
            userMessage: ''
        },
        {
            errorNumber: '213',
            code: 'P01',
            info: 'P01081120',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ShippingAmt）',
            userMessage: ''
        },
        {
            errorNumber: '214',
            code: 'P01',
            info: 'P01081121',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（HandlingAmt）',
            userMessage: ''
        },
        {
            errorNumber: '215',
            code: 'P01',
            info: 'P01081122',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（TaxAmt）',
            userMessage: ''
        },
        {
            errorNumber: '216',
            code: 'P01',
            info: 'P01081123',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（IPAddress）',
            userMessage: ''
        },
        {
            errorNumber: '217',
            code: 'P01',
            info: 'P01081124',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ShipToName）',
            userMessage: ''
        },
        {
            errorNumber: '218',
            code: 'P01',
            info: 'P01081125',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（L_Amt）',
            userMessage: ''
        },
        {
            errorNumber: '219',
            code: 'P01',
            info: 'P01081126',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Amt）',
            userMessage: ''
        },
        {
            errorNumber: '220',
            code: 'P01',
            info: 'P01081127',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（L_TaxAmt）',
            userMessage: ''
        },
        {
            errorNumber: '221',
            code: 'P01',
            info: 'P01081128',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（AuthorizationID）',
            userMessage: ''
        },
        {
            errorNumber: '222',
            code: 'P01',
            info: 'P01081129',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（CompleteType）',
            userMessage: ''
        },
        {
            errorNumber: '223',
            code: 'P01',
            info: 'P01081130',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（CurrencyCode）',
            userMessage: ''
        },
        {
            errorNumber: '224',
            code: 'P01',
            info: 'P01081131',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（TransactionID）',
            userMessage: ''
        },
        {
            errorNumber: '225',
            code: 'P01',
            info: 'P01081132',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（TransactionEntity）',
            userMessage: ''
        },
        {
            errorNumber: '226',
            code: 'P01',
            info: 'P01081133',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Acct）',
            userMessage: ''
        },
        {
            errorNumber: '227',
            code: 'P01',
            info: 'P01081134',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（ExpDate）',
            userMessage: ''
        },
        {
            errorNumber: '228',
            code: 'P01',
            info: 'P01081135',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（FirstName）',
            userMessage: ''
        },
        {
            errorNumber: '229',
            code: 'P01',
            info: 'P01081136',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（LastName）',
            userMessage: ''
        },
        {
            errorNumber: '230',
            code: 'P01',
            info: 'P01081137',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Street）',
            userMessage: ''
        },
        {
            errorNumber: '231',
            code: 'P01',
            info: 'P01081138',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Street2）',
            userMessage: ''
        },
        {
            errorNumber: '232',
            code: 'P01',
            info: 'P01081139',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（City）',
            userMessage: ''
        },
        {
            errorNumber: '233',
            code: 'P01',
            info: 'P01081140',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（State）',
            userMessage: ''
        },
        {
            errorNumber: '234',
            code: 'P01',
            info: 'P01081141',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Zip）',
            userMessage: ''
        },
        {
            errorNumber: '235',
            code: 'P01',
            info: 'P01081142',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（CountryCode）',
            userMessage: ''
        },
        {
            errorNumber: '236',
            code: 'P01',
            info: 'P01081143',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（RefundType）',
            userMessage: ''
        },
        {
            errorNumber: '237',
            code: 'P01',
            info: 'P01081144',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（StartDate）',
            userMessage: ''
        },
        {
            errorNumber: '238',
            code: 'P01',
            info: 'P01081145',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（EndDate）',
            userMessage: ''
        },
        {
            errorNumber: '239',
            code: 'P01',
            info: 'P01081146',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（MPID）',
            userMessage: ''
        },
        {
            errorNumber: '240',
            code: 'P01',
            info: 'P01081147',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（CreditCardType）',
            userMessage: ''
        },
        {
            errorNumber: '241',
            code: 'P01',
            info: 'P01081148',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（User）',
            userMessage: ''
        },
        {
            errorNumber: '242',
            code: 'P01',
            info: 'P01081149',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Pwd）',
            userMessage: ''
        },
        {
            errorNumber: '243',
            code: 'P01',
            info: 'P01081150',
            state: '未決',
            billing: '－',
            content: 'パラメータが指定されていません。（Version）',
            userMessage: ''
        },
        {
            errorNumber: '244',
            code: 'P01',
            info: 'P01081200',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（Amt）',
            userMessage: ''
        },
        {
            errorNumber: '245',
            code: 'P01',
            info: 'P01081201',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（MaxAmt）',
            userMessage: ''
        },
        {
            errorNumber: '246',
            code: 'P01',
            info: 'P01081203',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（NotifyURL）',
            userMessage: ''
        },
        {
            errorNumber: '247',
            code: 'P01',
            info: 'P01081205',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ShipToStreet）',
            userMessage: ''
        },
        {
            errorNumber: '248',
            code: 'P01',
            info: 'P01081206',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ShipToStreet2）',
            userMessage: ''
        },
        {
            errorNumber: '249',
            code: 'P01',
            info: 'P01081207',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ShipToCity）',
            userMessage: ''
        },
        {
            errorNumber: '250',
            code: 'P01',
            info: 'P01081208',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ShipToState）',
            userMessage: ''
        },
        {
            errorNumber: '251',
            code: 'P01',
            info: 'P01081209',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ShipToZip）',
            userMessage: ''
        },
        {
            errorNumber: '252',
            code: 'P01',
            info: 'P01081210',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（Country）',
            userMessage: ''
        },
        {
            errorNumber: '253',
            code: 'P01',
            info: 'P01081211',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ReqConfirmShipping）',
            userMessage: ''
        },
        {
            errorNumber: '254',
            code: 'P01',
            info: 'P01081212',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（Noshipping）',
            userMessage: ''
        },
        {
            errorNumber: '255',
            code: 'P01',
            info: 'P01081213',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（AddrOverride）',
            userMessage: ''
        },
        {
            errorNumber: '256',
            code: 'P01',
            info: 'P01081214',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（LocaleCode）',
            userMessage: ''
        },
        {
            errorNumber: '257',
            code: 'P01',
            info: 'P01081215',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（PaymentAction）',
            userMessage: ''
        },
        {
            errorNumber: '258',
            code: 'P01',
            info: 'P01081219',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ItemAmt）',
            userMessage: ''
        },
        {
            errorNumber: '259',
            code: 'P01',
            info: 'P01081220',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ShippingAmt）',
            userMessage: ''
        },
        {
            errorNumber: '260',
            code: 'P01',
            info: 'P01081221',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（HandlingTotal Amt）',
            userMessage: ''
        },
        {
            errorNumber: '261',
            code: 'P01',
            info: 'P01081222',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（TaxAmt）',
            userMessage: ''
        },
        {
            errorNumber: '262',
            code: 'P01',
            info: 'P01081223',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（IPAddress）',
            userMessage: ''
        },
        {
            errorNumber: '263',
            code: 'P01',
            info: 'P01081224',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ShipToName）',
            userMessage: ''
        },
        {
            errorNumber: '264',
            code: 'P01',
            info: 'P01081225',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（L_Amt）',
            userMessage: ''
        },
        {
            errorNumber: '265',
            code: 'P01',
            info: 'P01081226',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（Amt）',
            userMessage: ''
        },
        {
            errorNumber: '266',
            code: 'P01',
            info: 'P01081227',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（L_TaxAmt）',
            userMessage: ''
        },
        {
            errorNumber: '267',
            code: 'P01',
            info: 'P01081229',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（CompleteType）',
            userMessage: ''
        },
        {
            errorNumber: '268',
            code: 'P01',
            info: 'P01081230',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（CurrencyCode）',
            userMessage: ''
        },
        {
            errorNumber: '269',
            code: 'P01',
            info: 'P01081232',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（TransactionEntity）',
            userMessage: ''
        },
        {
            errorNumber: '270',
            code: 'P01',
            info: 'P01081234',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（ExpDate）',
            userMessage: ''
        },
        {
            errorNumber: '271',
            code: 'P01',
            info: 'P01081235',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（FirstName）',
            userMessage: ''
        },
        {
            errorNumber: '272',
            code: 'P01',
            info: 'P01081236',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（LastName）',
            userMessage: ''
        },
        {
            errorNumber: '273',
            code: 'P01',
            info: 'P01081237',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（Street）',
            userMessage: ''
        },
        {
            errorNumber: '274',
            code: 'P01',
            info: 'P01081238',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（Street2）',
            userMessage: ''
        },
        {
            errorNumber: '275',
            code: 'P01',
            info: 'P01081239',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（City）',
            userMessage: ''
        },
        {
            errorNumber: '276',
            code: 'P01',
            info: 'P01081243',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（RefundType）',
            userMessage: ''
        },
        {
            errorNumber: '277',
            code: 'P01',
            info: 'P01081244',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（StartDate）',
            userMessage: ''
        },
        {
            errorNumber: '278',
            code: 'P01',
            info: 'P01081245',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（EndDate）',
            userMessage: ''
        },
        {
            errorNumber: '279',
            code: 'P01',
            info: 'P01081247',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（CreditCardType）',
            userMessage: ''
        },
        {
            errorNumber: '280',
            code: 'P01',
            info: 'P01081248',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（Username）',
            userMessage: ''
        },
        {
            errorNumber: '281',
            code: 'P01',
            info: 'P01081249',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（Password）',
            userMessage: ''
        },
        {
            errorNumber: '282',
            code: 'P01',
            info: 'P01081250',
            state: '未決',
            billing: '－',
            content: '無効なパラメータです。（Version）',
            userMessage: ''
        },
        {
            errorNumber: '283',
            code: 'P01',
            info: 'P01081251',
            state: '未決',
            billing: '－',
            content: '内部エラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '284',
            code: 'P02',
            info: 'P02000001',
            state: '未決',
            billing: '－',
            content: 'PayPalセンターとの通信に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '285',
            code: 'P02',
            info: 'P02000002',
            state: '未決',
            billing: '－',
            content: 'PayPalセンターとの通信に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '286',
            code: 'P03',
            info: 'P03000003',
            state: '未決',
            billing: '－',
            content: 'PayPalの支払操作をユーザがキャンセルしました。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'N01',
            info: 'N01001001',
            state: '未決',
            billing: '－',
            content: '通知コードエラー',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '2',
            code: 'N01',
            info: 'N01001002',
            state: '未決',
            billing: '－',
            content: '取引存在エラー',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '3',
            code: 'N01',
            info: 'N01001003',
            state: '未決',
            billing: '－',
            content: '஧重受信エラー',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '4',
            code: 'N01',
            info: 'N01001004',
            state: '未決',
            billing: '－',
            content: '状態エラー',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '5',
            code: 'N01',
            info: 'N01001005',
            state: '未決',
            billing: '－',
            content: '利用停止エラー',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '6',
            code: 'N01',
            info: 'N01001006',
            state: '未決',
            billing: '－',
            content: '金額不一致エラー',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '7',
            code: 'N01',
            info: 'N01001007',
            state: '未決',
            billing: '－',
            content: '税送料不一致エラー',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '8',
            code: 'N01',
            info: 'N01001008',
            state: '未決',
            billing: '－',
            content: '決済処理日付エラー',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '9',
            code: 'N01',
            info: 'N01001009',
            state: '未決',
            billing: '－',
            content: '決済処理日付エラー',
            userMessage: '実行中にエラーが発生しました。処理は開始されませんでした。'
        },
        {
            errorNumber: '10',
            code: 'N10',
            info: 'N10000001',
            state: '不明',
            billing: '不明',
            content: '取引存在エラー',
            userMessage: '該当する取引がありません。'
        },
        {
            errorNumber: '11',
            code: 'N0C',
            info: 'N0C030C01',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '12',
            code: 'N0C',
            info: 'N0C030C03',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '13',
            code: 'N0C',
            info: 'N0C030C12',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '14',
            code: 'N0C',
            info: 'N0C030C13',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: 'しばらくご利用になれません。'
        },
        {
            errorNumber: '15',
            code: 'N0C',
            info: 'N0C030C14',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '16',
            code: 'N0C',
            info: 'N0C030C15',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '17',
            code: 'N0C',
            info: 'N0C030C16',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '18',
            code: 'N0C',
            info: 'N0C030C33',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '19',
            code: 'N0C',
            info: 'N0C030C34',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '20',
            code: 'N0C',
            info: 'N0C030C49',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '21',
            code: 'N0C',
            info: 'N0C030C50',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '22',
            code: 'N0C',
            info: 'N0C030C51',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'もう一度やり直してください。'
        },
        {
            errorNumber: '23',
            code: 'N0C',
            info: 'N0C030C53',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '24',
            code: 'N0C',
            info: 'N0C030C54',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '25',
            code: 'N0C',
            info: 'N0C030C55',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '26',
            code: 'N0C',
            info: 'N0C030C56',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '27',
            code: 'N0C',
            info: 'N0C030C57',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '28',
            code: 'N0C',
            info: 'N0C030C58',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '29',
            code: 'N0C',
            info: 'N0C030C60',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて受付を拒否しました。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '30',
            code: 'N0C',
            info: 'N0C030G03',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '31',
            code: 'N0C',
            info: 'N0C030G12',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '32',
            code: 'N0C',
            info: 'N0C030G30',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '33',
            code: 'N0C',
            info: 'N0C030G54',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '34',
            code: 'N0C',
            info: 'N0C030G55',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '35',
            code: 'N0C',
            info: 'N0C030G56',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '36',
            code: 'N0C',
            info: 'N0C030G60',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '37',
            code: 'N0C',
            info: 'N0C030G61',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '38',
            code: 'N0C',
            info: 'N0C030G65',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '39',
            code: 'N0C',
            info: 'N0C030G67',
            state: '未決',
            billing: '－',
            content: '商品コードの入力が誤っていた場吅です。',
            userMessage: 'しばらくしてからやり直してください。'
        },
        {
            errorNumber: '40',
            code: 'N0C',
            info: 'N0C030G83',
            state: '未決',
            billing: '－',
            content: '有効期限切れのクレジットカードが入力されて場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '41',
            code: 'N0C',
            info: 'N0C030G85',
            state: '未決',
            billing: '－',
            content: 'CAFISセンタにて契約がないカードが入力された場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '42',
            code: 'N0C',
            info: 'N0C030G95',
            state: '未決',
            billing: '－',
            content: 'クレジット会社センタの該当業務の運用が終了している場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '43',
            code: 'N0C',
            info: 'N0C030G96',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '44',
            code: 'N0C',
            info: 'N0C030G97',
            state: '未決',
            billing: '－',
            content: 'カード会社にて受付を拒否しました。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '45',
            code: 'N0C',
            info: 'N0C030G98',
            state: '未決',
            billing: '－',
            content: '接続されたクレジット会社センタの対象業務ではない場吅です。',
            userMessage: 'もう一度やり直してください。'
        },
        {
            errorNumber: '46',
            code: 'N0C',
            info: 'N0C030G99',
            state: '未決',
            billing: '－',
            content: '接続要求仕向センタに対し、受付拒否の場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '47',
            code: 'N0N',
            info: 'N0N010007',
            state: '未決',
            billing: '－',
            content: 'ネット決済サービス非対応の携帯電話の場吅です。',
            userMessage: 'お宠様の携帯電話ではサービスをご利用いただけません。'
        },
        {
            errorNumber: '48',
            code: 'N0N',
            info: 'N0N010008',
            state: '未決',
            billing: '－',
            content: 'ネット決済サービス非対応の携帯電話の場吅です。',
            userMessage: 'お宠様の携帯電話ではサービスをご利用いただけません。'
        },
        {
            errorNumber: '49',
            code: 'N0N',
            info: 'N0N010009',
            state: '未決',
            billing: '－',
            content: 'ネット決済サービス非対応の携帯電話の場吅です。',
            userMessage: 'お宠様の携帯電話ではサービスをご利用いただけません。'
        },
        {
            errorNumber: '50',
            code: 'N0N',
            info: 'N0N010013',
            state: '未決',
            billing: '－',
            content: '加盟店契約期間外の場吅です。',
            userMessage: 'しばらくご利用になれません。店舗までお問吅せください。'
        },
        {
            errorNumber: '51',
            code: 'N0N',
            info: 'N0N010024',
            state: '未決',
            billing: '－',
            content: '認証支援センタに接続できない場吅です。',
            userMessage: 'しばらくご利用になれません。店舗までお問吅せください。'
        },
        {
            errorNumber: '52',
            code: 'N0N',
            info: 'N0N010032',
            state: '未決',
            billing: '－',
            content: '加盟店ྡに絵文字が指定され、絵文字変換用文字列がバイナリ変換できない場吅です。',
            userMessage: 'しばらくご利用になれません。店舗までお問吅せください。'
        },
        {
            errorNumber: '53',
            code: 'N0N',
            info: 'N0N020014',
            state: '不明',
            billing: '不明',
            content: '処理継続期間がオーバーした場吅です。',
            userMessage: 'エラーが発生しました。店舗までお問吅せください。'
        },
        {
            errorNumber: '54',
            code: 'N0N',
            info: 'N0N020017',
            state: '未決',
            billing: '－',
            content: '有効期限切れのクレジットカードが入力された場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '55',
            code: 'N0N',
            info: 'N0N020018',
            state: '未決',
            billing: '－',
            content: 'カード会社の都吅によりお取扱できないクレジットカードが入力された場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '56',
            code: 'N0N',
            info: 'N0N020019',
            state: '未決',
            billing: '－',
            content: 'カード会社の都吅によりお取扱できないクレジットカードが入力された場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '57',
            code: 'N0N',
            info: 'N0N020020',
            state: '未決',
            billing: '－',
            content: 'カード会社の都吅によりお取扱できないクレジットカードが入力された場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '58',
            code: 'N0N',
            info: 'N0N020021',
            state: '未決',
            billing: '－',
            content: 'カード会社の都吅によりお取扱できないクレジットカードが入力された場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '59',
            code: 'N0N',
            info: 'N0N020022',
            state: '未決',
            billing: '－',
            content: 'カード会社の都吅によりお取扱できないクレジットカードが入力された場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '60',
            code: 'N0N',
            info: 'N0N020023',
            state: '未決',
            billing: '－',
            content: 'カード会社の都吅によりお取扱できないクレジットカードが入力された場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '61',
            code: 'N0N',
            info: 'N0N030038',
            state: '未決',
            billing: '－',
            content: 'お宠様が入力した暗証番号が誤っていた場吅です。',
            userMessage: '暗証番号が誤っていますので、現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '62',
            code: 'N0N',
            info: 'N0N040014',
            state: '不明',
            billing: '不明',
            content: '処理継続期間がオーバーした場吅です。',
            userMessage: 'エラーが発生しました。店舗までお問吅せください。'
        },
        {
            errorNumber: '63',
            code: 'N0K',
            info: 'N0K040026',
            state: '未決',
            billing: '－',
            content: '認証支援センタからの決済通知に対する応答が不正です。',
            userMessage: 'もう一度やり直してください。'
        },
        {
            errorNumber: '64',
            code: 'N0K',
            info: 'N0K040027',
            state: '不明',
            billing: '不明',
            content: '認証支援センタからの決済通知に対する応答が不正です。',
            userMessage: 'エラーが発生しました。店舗までお問吅せください。'
        },
        {
            errorNumber: '65',
            code: 'N0K',
            info: 'N0K040028',
            state: '不明',
            billing: '不明',
            content: '認証支援センタからの決済通知に対する応答が不正です。',
            userMessage: 'エラーが発生しました。店舗までお問吅せください。'
        },
        {
            errorNumber: '66',
            code: 'N0K',
            info: 'N0K040029',
            state: '不明',
            billing: '不明',
            content: '認証支援センタで条件付正常を受け取りました。既に決済が完了しているお取引に対して再度決済を行なった場吅です。',
            userMessage: 'エラーが発生しました。店舗までお問吅せください。'
        },
        {
            errorNumber: '67',
            code: 'N0N',
            info: 'N0N040031',
            state: '未決',
            billing: '－',
            content: '認証支援センタに接続できない場吅です。',
            userMessage: 'しばらくご利用になれません。店舗までお問吅せください。'
        },
        {
            errorNumber: '68',
            code: 'N0K',
            info: 'N0K040037',
            state: '未決',
            billing: '－',
            content: 'SSLサーバ証明書認証エラーの場吅です。',
            userMessage: 'しばらくご利用になれません。店舗までお問吅せください。'
        },
        {
            errorNumber: '69',
            code: 'N0T',
            info: 'N0T000001',
            state: '未決',
            billing: '－',
            content: 'Felica処理中にエラーが発生した場吅、または、認証支援センタに接続できない場吅、または、決済の内容を確認し、実行せずに戻るを選択した場吅です。',
            userMessage: 'もう一度やり直してください。'
        },
        {
            errorNumber: '70',
            code: 'N0T',
            info: 'N0T000002',
            state: '未決',
            billing: '－',
            content: 'iDアプリのエリア発行が完了していません。',
            userMessage: 'ご利用可能なカードが設定されていないため、お支払を継続できません。なお、 iDでお支払いただくには஦前にカードを設定いただく必要がありますｊ。'
        },
        {
            errorNumber: '71',
            code: 'N0T',
            info: 'N0T000003',
            state: '未決',
            billing: '－',
            content: 'ご利用可能なカードがありません。',
            userMessage: 'ご利用可能なカードが設定されていないため、お支払を継続できません。なお、 iDでお支払いただくには஦前にカードを設定いただく必要がありますｊ。'
        },
        {
            errorNumber: '72',
            code: 'N0T',
            info: 'N0T000004',
            state: '未決',
            billing: '－',
            content: 'パスワード入力間違いが既定回数を超えたため、iDでお支払が出来ません。',
            userMessage: 'パスワード入力間違いが規定回数を超えたため、iDでのお支払を継続できません。なお、 iDを再度ご利用いただくには、iDアプリを再度起動しリセットを実行した後、カードを設定しなおしていただく必要があります。'
        },
        {
            errorNumber: '73',
            code: 'N0T',
            info: 'N0T000005',
            state: '未決',
            billing: '－',
            content: 'ICカードロックがかかっているか、通信中に何かしらの以上が発生した可能性があります。',
            userMessage: 'ICカードロックを設定されている場吅は、一旦iDアプリを終了し、ICカードロックを解除してから再度iDアプリを起動してください。ICカードロックを解除してもご利用いただけない場吅はカード会社へお問吅せください。'
        },
        {
            errorNumber: '74',
            code: 'N0T',
            info: 'N0T000006',
            state: '不明',
            billing: '不明',
            content: '前回処理した処理番号とྠじ処理番号です。',
            userMessage: 'エラーが発生しました。店舗までお問吅せください。'
        },
        {
            errorNumber: '75',
            code: 'N0T',
            info: 'N0T000007',
            state: '未決',
            billing: '－',
            content: 'カード情報の読み込みに失敗した場吅です。',
            userMessage: 'もう一度やり直してください。'
        },
        {
            errorNumber: '76',
            code: 'N0T',
            info: 'N0T000008',
            state: '未決',
            billing: '－',
            content: 'ネット決済の処理中に他の処理でFelicaチップが更新されました。',
            userMessage: 'もう一度やり直してください。'
        },
        {
            errorNumber: '77',
            code: 'N0T',
            info: 'N0T000009',
            state: '未決',
            billing: '－',
            content: 'お取扱できないクレジットカードが選択された場吅です。',
            userMessage: '現在このカードはお取扱できません。カード会社にお問吅せください。'
        },
        {
            errorNumber: '78',
            code: 'N0T',
            info: 'N0T000010',
            state: '未決',
            billing: '－',
            content: '認証支援センタに接続できない場吅、または、 iDアプリのバージョンアップが必要な場吅です。',
            userMessage: 'もう一度やり直してください。'
        },
        {
            errorNumber: '1',
            code: 'WM1',
            info: 'WM1000001',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターとの通信パラメータでエラーが発生しました。（メッセージダイジェスト）',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'WM1',
            info: 'WM1000002',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターで許可されていない接続です。',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'WM1',
            info: 'WM1000003',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターで決済モジュールの実行に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'WM1',
            info: 'WM1000004',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターとの通信パラメータでエラーが発生しました。（受信パラメータ）',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'WM1',
            info: 'WM1000005',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターとの通信に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'WM1',
            info: 'WM1000006',
            state: '決済失敗',
            billing: '－',
            content: '【決済結果受信】後続決済センターとの通信パラメータでエラーが発生しました。（受信パラメータ）',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'WM1',
            info: 'WM1000007',
            state: '決済完了',
            billing: '－',
            content: '【決済結果受信】後続決済センターで஧重入金が発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'WM1',
            info: 'WM1000008',
            state: '不明',
            billing: '－',
            content: '【決済結果受信】内部エラーが発生しました。（遷移）',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'WM1',
            info: 'WM1000009',
            state: '決済完了',
            billing: '－',
            content: '【ユーザーキャンセル受信】入金済みの取引に対し、ユーザーの支払操作がキャンセルされた通知を受信しました。',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'WM1',
            info: 'WM1000010',
            state: '不明',
            billing: '－',
            content: '【ユーザーキャンセル受信】内部エラーが発生しました。（遷移）',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'AU1',
            info: 'AU1000001',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターとの通信に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'AU1',
            info: 'AU1000002',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターとの通信パラメータでエラーが発生しました。（受信パラメータ）',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'AU1',
            info: 'AU1000003',
            state: '不明',
            billing: '－',
            content: '【決済要求】後続決済センターで障害取消が実施されました。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'AU1',
            info: 'AU1000004',
            state: '未決',
            billing: '－',
            content: '【決済要求】 auかんたんOpenID連携解除でエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'AU1',
            info: 'AU1000005',
            state: '未決',
            billing: '－',
            content: '【操作キャンセル】 auかんたん決済でお宠様がお支払をキャンセルしました。',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'AMP',
            info: 'AMPL20003',
            state: '未決',
            billing: '－',
            content: '実行許可のないトランザクションです。',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'AMP',
            info: 'AMPL30026',
            state: '未決',
            billing: '－',
            content: '有効なユーザでありません。',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'AMP',
            info: 'AMPL40004',
            state: '未決',
            billing: '－',
            content: 'オーソリ取消が行われています。',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'AMP',
            info: 'AMPL40006',
            state: '未決',
            billing: '－',
            content: '売上取消が行われています。',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'AMP',
            info: 'AMPL40104',
            state: '未決',
            billing: '－',
            content: 'オーソリ額が限度額を超えています。',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'AMP',
            info: 'AMPL40505',
            state: '未決',
            billing: '－',
            content: '有効なクレジットカードではありません。',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'AMP',
            info: 'AMPL40506',
            state: '未決',
            billing: '－',
            content: '後続センターにてシステムエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'AMP',
            info: 'AMPL90000',
            state: '未決',
            billing: '－',
            content: '後続センターにてシステムエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'AU1',
            info: 'AU1000001',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターとの通信に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'AU1',
            info: 'AU1000002',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターとの通信パラメータでエラーが発生しました。（受信パラメータ）',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'AU1',
            info: 'AU1000003',
            state: '不明',
            billing: '－',
            content: '【決済要求】後続決済センターで処理取消が実施されました。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'AU1',
            info: 'AU1000004',
            state: '未決',
            billing: '－',
            content: '【決済要求】 auかんたんOpenID連携解除でエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'AU1',
            info: 'AU1000005',
            state: '未決',
            billing: '－',
            content: '【操作キャンセル】 auかんたん決済でお宠様がお支払をキャンセルしました。',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'AU1',
            info: 'AU1000006',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターで処理取消を実行し、取消に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'AU2',
            info: 'AU2000007',
            state: '未決',
            billing: '－',
            content: '【課金確認】有効なユーザーでありません。',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'AMP',
            info: 'AMPL35000',
            state: '未決',
            billing: '－',
            content: '有効なユーザーでありません。',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'AMP',
            info: 'AMPL40505',
            state: '未決',
            billing: '－',
            content: '有効なクレジットカードではありません。',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'AMP',
            info: 'AMPL40506',
            state: '未決',
            billing: '－',
            content: '後続センターにてシステムエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'AMP',
            info: 'AMPL90000',
            state: '未決',
            billing: '－',
            content: '後続センターにてシステムエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'AMP',
            info: 'AMPL40010',
            state: '未決',
            billing: '－',
            content: '後続センターにて処理取消エラーが発生し、有効な初回課金が残りました。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'DC1',
            info: 'DC1000001',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターで確定処理が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'DC1',
            info: 'DC1000002',
            state: '不明',
            billing: '不明',
            content: '【取消要求】後続決済センターで取消処理が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'DC1',
            info: 'DC1000003',
            state: '未決',
            billing: '－',
            content: '【決済中止】お宠様がドコモケータイ払いを中止しました。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'DC1',
            info: 'DC1000004',
            state: '未決',
            billing: '－',
            content: '【決済失敗】ドコモケータイ払いが失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'DC1',
            info: 'DC1000005',
            state: '未決',
            billing: '－',
            content: '【決済中止】お宠様がドコモ継続課金の申込を中止しました。',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'DC1',
            info: 'DC1000006',
            state: '未決',
            billing: '－',
            content: '【変更中止】お宠様がドコモ継続課金の変更を中止しました。',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'DC1',
            info: 'DC1000007',
            state: '未決',
            billing: '－',
            content: '【終了中止】お宠様がドコモ継続課金の終了を中止しました。',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'DC1',
            info: 'DC1000008',
            state: '未決',
            billing: '－',
            content: '【決済失敗】ドコモ継続課金の申込が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'DC1',
            info: 'DC1000009',
            state: '未決',
            billing: '－',
            content: '【変更失敗】ドコモ継続課金の変更が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'DC1',
            info: 'DC1000010',
            state: '未決',
            billing: '－',
            content: '【終了失敗】ドコモ継続課金の終了が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'DC1',
            info: 'DC1000011',
            state: '未決',
            billing: '－',
            content: '【増額要求】後続決済センターで増額処理が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'SB1',
            info: 'SB1000001',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターで確定処理が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'SB1',
            info: 'SB1000002',
            state: '不明',
            billing: '不明',
            content: '【取消要求、決済中止】お宠様がソフトバンクまとめて支払い(Ｂ)を中止または取消し処理が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'SB1',
            info: 'SB1000004',
            state: '未決',
            billing: '－',
            content: '【決済失敗】ソフトバンクまとめて支払い(Ｂ)が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'SB1',
            info: 'SB1000005',
            state: '未決',
            billing: '－',
            content: '【決済要求】後続決済センターとの通信に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'J01',
            info: 'J01000001',
            state: '決済失敗',
            billing: '－',
            content: '【決済失敗】後続決済センターで決済が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'J01',
            info: 'J01000002',
            state: '決済失敗',
            billing: '－',
            content: '【決済中止】お宠様がじぶん銀行決済を中止しました。',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'J01',
            info: 'J01000003',
            state: '処理結果不明',
            billing: '－',
            content: '【決済失敗】後続決済センターでྡ義不一致により決済が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'J01',
            info: 'J01100001',
            state: '決済失敗',
            billing: '－',
            content: '【決済失敗】後続決済センターで原因不明エラーにより決済が失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'J01',
            info: 'J01100002',
            state: '決済失敗',
            billing: '－',
            content: '【決済失敗】想定外のエラーコードが返却されました。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'JP1',
            info: 'JP1000001',
            state: '変更なし',
            billing: '－',
            content: '残高不足',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'JP1',
            info: 'JP1000002',
            state: '変更なし',
            billing: '－',
            content: '入金金額オーバー',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'JP1',
            info: 'JP1000003',
            state: '変更なし',
            billing: '－',
            content: '未アクティベート',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'JP1',
            info: 'JP1000004',
            state: '変更なし',
            billing: '－',
            content: '利用開始前',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'JP1',
            info: 'JP1000005',
            state: '変更なし',
            billing: '－',
            content: '認証番号エラー',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'JP1',
            info: 'JP1000006',
            state: '変更なし',
            billing: '－',
            content: '無効カード',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'JP1',
            info: 'JP1000007',
            state: '変更なし',
            billing: '－',
            content: '会員番号エラー',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'JP1',
            info: 'JP1000008',
            state: '変更なし',
            billing: '－',
            content: '有効期限エラー',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'JP1',
            info: 'JP1000009',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード：券種コードエラー',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'JP1',
            info: 'JP1000010',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード：アライアンス期間外',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'JP1',
            info: 'JP1000011',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード：アライアンス無効',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'JP1',
            info: 'JP1000012',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード：アライアンス許可取引外',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'JP1',
            info: 'JP1000013',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード：その他アライアンス取引エラー',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'JP1',
            info: 'JP1000014',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード：その他アライアンス取引エラー',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'JP1',
            info: 'JP1000015',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード：JCBセンター会社未登録エラー',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'JP1',
            info: 'JP1000016',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード：JCBPOS支店チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'JP1',
            info: 'JP1000017',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード：JCB加盟店有効エラー',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'JP1',
            info: 'JP1000018',
            state: '変更なし',
            billing: '－',
            content: 'サービス対象外カード： JET\'S端末エラー',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'JP1',
            info: 'JP1000019',
            state: '変更なし',
            billing: '－',
            content: '取消対象取引エラー：取消対象取引なし',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'JP1',
            info: 'JP1000020',
            state: '変更なし',
            billing: '－',
            content: '取消対象取引エラー：既に取消済み',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'JP1',
            info: 'JP1000021',
            state: '変更なし',
            billing: '－',
            content: '取消対象取引エラー：取消対象取引が直近ではない',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'JP1',
            info: 'JP1000022',
            state: '変更なし',
            billing: '－',
            content: '取消対象取引エラー：取消可能時間超過',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'JP1',
            info: 'JP1000023',
            state: '変更なし',
            billing: '－',
            content: '取消対象取引エラー：その他取消対象取引エラー',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'JP1',
            info: 'JP1000024',
            state: '変更なし',
            billing: '－',
            content: '取消対象取引エラー：その他取消対象取引エラー',
            userMessage: ''
        },
        {
            errorNumber: '25',
            code: 'JP1',
            info: 'JP1000025',
            state: '変更なし',
            billing: '－',
            content: '取消対象取引エラー：その他取消対象取引エラー',
            userMessage: ''
        },
        {
            errorNumber: '26',
            code: 'JP1',
            info: 'JP1000026',
            state: '変更なし',
            billing: '－',
            content: '該当自社対象業務エラー：システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '27',
            code: 'JP1',
            info: 'JP1000027',
            state: '変更なし',
            billing: '－',
            content: '該当自社対象業務エラー：システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '28',
            code: 'JP1',
            info: 'JP1000028',
            state: '変更なし',
            billing: '－',
            content: '該当自社対象業務エラー：システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '29',
            code: 'JP1',
            info: 'JP1000029',
            state: '変更なし',
            billing: '－',
            content: '該当自社対象業務エラー：システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '30',
            code: 'JP1',
            info: 'JP1000030',
            state: '変更なし',
            billing: '－',
            content: '該当自社対象業務エラー：システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '31',
            code: 'JP1',
            info: 'JP1000031',
            state: '変更なし',
            billing: '－',
            content: '該当自社対象業務エラー：システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '32',
            code: 'JP1',
            info: 'JP1000032',
            state: '変更なし',
            billing: '－',
            content: '該当自社対象業務エラー：システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '33',
            code: 'JP1',
            info: 'JP1000033',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：発行会社コードエラー',
            userMessage: ''
        },
        {
            errorNumber: '34',
            code: 'JP1',
            info: 'JP1000034',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：発行会社無効',
            userMessage: ''
        },
        {
            errorNumber: '35',
            code: 'JP1',
            info: 'JP1000035',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：有効期限区分が不正',
            userMessage: ''
        },
        {
            errorNumber: '36',
            code: 'JP1',
            info: 'JP1000036',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：リクエストバリデーションエラー',
            userMessage: ''
        },
        {
            errorNumber: '37',
            code: 'JP1',
            info: 'JP1000037',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：認証キー不一致',
            userMessage: ''
        },
        {
            errorNumber: '38',
            code: 'JP1',
            info: 'JP1000038',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：認証キーが有効時間外',
            userMessage: ''
        },
        {
            errorNumber: '39',
            code: 'JP1',
            info: 'JP1000039',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：IPアドレスエラー',
            userMessage: ''
        },
        {
            errorNumber: '40',
            code: 'JP1',
            info: 'JP1000040',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：その他接続要求エラー',
            userMessage: ''
        },
        {
            errorNumber: '41',
            code: 'JP1',
            info: 'JP1000041',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：その他接続要求エラー',
            userMessage: ''
        },
        {
            errorNumber: '42',
            code: 'JP1',
            info: 'JP1000042',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：その他接続要求エラー',
            userMessage: ''
        },
        {
            errorNumber: '43',
            code: 'JP1',
            info: 'JP1000043',
            state: '変更なし',
            billing: '－',
            content: '接続要求自社受付拒否：その他接続要求エラー',
            userMessage: ''
        },
        {
            errorNumber: '44',
            code: 'JP1',
            info: 'JP1000044',
            state: '変更なし',
            billing: '－',
            content: '障害取消対象取引エラー：障害取消対象が直近ではない',
            userMessage: ''
        },
        {
            errorNumber: '45',
            code: 'JP1',
            info: 'JP1000045',
            state: '変更なし',
            billing: '－',
            content: '障害取消対象取引エラー：障害取消可能時間超過',
            userMessage: ''
        },
        {
            errorNumber: '46',
            code: 'JP1',
            info: 'JP1000046',
            state: '変更なし',
            billing: '－',
            content: '障害取消対象取引エラー：その他障害取消対象取引エラー',
            userMessage: ''
        },
        {
            errorNumber: '47',
            code: 'JP1',
            info: 'JP1000047',
            state: '変更なし',
            billing: '－',
            content: '障害取消対象取引エラー：その他障害取消対象取引エラー',
            userMessage: ''
        },
        {
            errorNumber: '48',
            code: 'JP1',
            info: 'JP1000048',
            state: '変更なし',
            billing: '－',
            content: '亇期しないエラー',
            userMessage: ''
        },
        {
            errorNumber: '49',
            code: 'JP1',
            info: 'JP1000049',
            state: '変更なし',
            billing: '－',
            content: 'JCBプリカ決済センターとの通信失敗',
            userMessage: ''
        },
        {
            errorNumber: '50',
            code: 'JP1',
            info: 'JP1000050',
            state: '変更なし',
            billing: '－',
            content: 'JCBプリカ決済センターからの戻り値不正',
            userMessage: ''
        },
        {
            errorNumber: '51',
            code: 'JP1',
            info: 'JP1000051',
            state: '変更なし',
            billing: '－',
            content: '１日あたり利用限度額オーバー',
            userMessage: ''
        },
        {
            errorNumber: '52',
            code: 'JP1',
            info: 'JP1000052',
            state: '変更なし',
            billing: '－',
            content: '１回あたり利用限度額オーバー',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'NC1',
            info: 'NC1000001',
            state: '変更無し',
            billing: '－',
            content: '取引IDチェックエラー',
            userMessage: 'ご注文のお取引を特定できません。ご購入されたお店にご連絡ください。 (NC1000001)'
        },
        {
            errorNumber: '2',
            code: 'NC1',
            info: 'NC1000002',
            state: '変更無し',
            billing: '－',
            content: '取引の存在チェックエラー',
            userMessage: 'ご注文のお取引を特定できません。ご購入されたお店にご連絡ください。 (NC1000002)'
        },
        {
            errorNumber: '3',
            code: 'NC1',
            info: 'NC1000003',
            state: '変更無し',
            billing: '－',
            content: 'トークンチェックエラー',
            userMessage: 'ご注文のお取引を特定できません。ご購入されたお店にご連絡ください。 (NC1000003)'
        },
        {
            errorNumber: '4',
            code: 'NC1',
            info: 'NC1000004',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(入金済み)',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'NC1',
            info: 'NC1000005',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(期限切れ)',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'NC1',
            info: 'NC1000006',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー (不正な遷移)',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'NC1',
            info: 'NC1000007',
            state: '変更無し',
            billing: '－',
            content: '有効期限切れ',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'NC1',
            info: 'NC1000008',
            state: '変更無し',
            billing: '－',
            content: '状態遷移エラー',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'NC1',
            info: 'NC1000009',
            state: '変更無し',
            billing: '－',
            content: '決済NG',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'NC1',
            info: 'NC1000010',
            state: '変更無し',
            billing: '－',
            content: 'MD5チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'NC1',
            info: 'NC1000011',
            state: '変更無し',
            billing: '－',
            content: '決済情報取得エラー',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'NC1',
            info: 'NC1000012',
            state: '変更無し',
            billing: '－',
            content: '決済結果パラメータチェックエラー(決済結果に対しての決済日時の有無)',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'NC1',
            info: 'NC1000013',
            state: '変更無し',
            billing: '－',
            content: '購入情報内容チェックエラー時URLへ遷移',
            userMessage: 'ご注文のお取引を開始することができません。ご購入されたお店にご連絡ください。 (NC1000013)'
        },
        {
            errorNumber: '14',
            code: 'NC2',
            info: 'NC2000001',
            state: '変更無し',
            billing: '－',
            content: '決済の不整合(決済が失敗した取引に対しての結果通知)',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'NC2',
            info: 'NC2000002',
            state: '変更無し',
            billing: '－',
            content: 'ショップ特定不可',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'NC2',
            info: 'NC2000003',
            state: '変更無し',
            billing: '－',
            content: 'SCD未設定',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'NC2',
            info: 'NC2000005',
            state: '変更無し',
            billing: '－',
            content: '利用停止チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'NC2',
            info: 'NC2000006',
            state: '変更無し',
            billing: '－',
            content: '紐づく取引が存在しない(購入情報出力)',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'NC2',
            info: 'NC2000007',
            state: '変更無し',
            billing: '－',
            content: '紐づく取引が存在しない(決済結果通知)',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'RI1',
            info: 'RI1000001',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(不正な遷移)',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'RI1',
            info: 'RI1000002',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(期限切れ)',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'RI1',
            info: 'RI1000003',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(決済済み)',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'RI1',
            info: 'RI1000004',
            state: '変更無し',
            billing: '－',
            content: '購入情報なし',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'RI1',
            info: 'RI1000005',
            state: '変更無し',
            billing: '－',
            content: '取引IDチェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'RI1',
            info: 'RI1000006',
            state: '変更無し',
            billing: '－',
            content: '取引の存在チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'RI1',
            info: 'RI1000007',
            state: '変更無し',
            billing: '－',
            content: '決済不整吅エラー',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'RI1',
            info: 'RI1000008',
            state: '変更無し',
            billing: '－',
            content: '状態遷移エラー',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'RI1',
            info: 'RI1009999',
            state: '変更無し',
            billing: '－',
            content: 'その他エラー',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'RI1',
            info: 'RI1000009',
            state: '変更無し',
            billing: '-',
            content: 'システムエラー(※1)',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'RI2',
            info: 'RI2000100',
            state: '変更無し',
            billing: '－',
            content: 'システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'LP1',
            info: 'LP1000001',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(不正な遷移)',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'LP1',
            info: 'LP1000002',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(期限切れ)',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'LP1',
            info: 'LP1000003',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(決済済み)',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'LP1',
            info: 'LP1001163',
            state: '変更無し',
            billing: '－',
            content: '払い戻し可能日を過ぎているため、払い戻し出来ません。',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'LP1',
            info: 'LP1001177',
            state: '変更無し',
            billing: '－',
            content: '照会可能な最大取引数を超えました(100 件)。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'LP1',
            info: 'LP1001180',
            state: '変更無し',
            billing: '－',
            content: '支払の有効期限が経過しました',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'LP1',
            info: 'LP1009001',
            state: '変更無し',
            billing: '－',
            content: '加盟店の設定情報が不正です。',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'LP1',
            info: 'LP1009002',
            state: '変更無し',
            billing: '－',
            content: '利用者が選択した決済手段に不備があります。利用者にご確認ください。',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'LP1',
            info: 'LP1009003',
            state: '変更無し',
            billing: '－',
            content: '利用者情報が不正です。利用者にご確認ください。',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'LP2',
            info: 'LP2009900',
            state: '変更無し',
            billing: '－',
            content: 'LINE Payの内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'LP2',
            info: 'LP2009999',
            state: '変更無し',
            billing: '－',
            content: 'システムの内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'UP1',
            info: 'UP1000001',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(不正な遷移)',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'UP1',
            info: 'UP1000002',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(期限切れ)',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'UP1',
            info: 'UP1000003',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(決済済み)',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'UP1',
            info: 'UP1000004',
            state: '変更無し',
            billing: '－',
            content: '受信エラー（通信電文異常）',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'UP1',
            info: 'UP1000005',
            state: '変更無し',
            billing: '－',
            content: '受信エラー（処理期限超過）',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'UP1',
            info: 'UP1008000',
            state: '変更無し',
            billing: '－',
            content: '銀聯エラー（要求失敗）実売上/返品/キャンセル要求に失敗しました。銀聯の内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'UP1',
            info: 'UP1009900',
            state: '変更無し',
            billing: '－',
            content: '銀聯エラー（その他）銀聯の内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'SC1',
            info: 'SC1000001',
            state: '変更無し',
            billing: '－',
            content: '月初における課金データの作成に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'SC1',
            info: 'SC1000002',
            state: '変更無し',
            billing: '－',
            content: '課金日における課金データの確定に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'SC1',
            info: 'SC1000003',
            state: '変更無し',
            billing: '－',
            content: '課金申込時の初回課金に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'SC1',
            info: 'SC1000004',
            state: '変更無し',
            billing: '－',
            content: '取消返金要求失敗',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'SC1',
            info: 'SC1000005',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(不正な遷移)',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'SC1',
            info: 'SC1000006',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(期限切れ)',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'SC1',
            info: 'SC1000007',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(登録済み)',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'SC1',
            info: 'SC1000008',
            state: '変更無し',
            billing: '－',
            content: '購入情報無し',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'SC1',
            info: 'SC1000009',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(登録済み)',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'SC1',
            info: 'SC1000010',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(不正な遷移)',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'SC1',
            info: 'SC1000011',
            state: '変更無し',
            billing: '－',
            content: 'システムの内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'SC1',
            info: 'SC1000012',
            state: '変更無し',
            billing: '－',
            content: '購入情報無し',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'SC1',
            info: 'SC1000013',
            state: '変更無し',
            billing: '－',
            content: 'システムの内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'SC1',
            info: 'SC1000014',
            state: '変更無し',
            billing: '－',
            content: '課金申込に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'SC1',
            info: 'SC1000015',
            state: '変更無し',
            billing: '－',
            content: 'ユーザ解約のため処理に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'SC2',
            info: 'SC2000001',
            state: '変更無し',
            billing: '－',
            content: '月初における課金データの作成に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'SC2',
            info: 'SC2000002',
            state: '変更無し',
            billing: '－',
            content: '課金日における課金データの確定に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'M01',
            info: 'M01058004',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／指定された取引が無効',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'M01',
            info: 'M01055001',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／金額不正',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'M01',
            info: 'M01199001',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カード番号未指定',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'M01',
            info: 'M01199005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カード番号桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'M01',
            info: 'M01199011',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カード番号桁数範囲不正',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'M01',
            info: 'M01199006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カード番号数値以外',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'M01',
            info: 'M01200001',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カード有効期限未指定',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'M01',
            info: 'M01200005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カード有効期限桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'M01',
            info: 'M01200006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カード有効期限数値以外',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'M01',
            info: 'M01228005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／実行モード桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'M01',
            info: 'M01161008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先情報有無判定フラグ書式不正',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'M01',
            info: 'M01162005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／ユーザ ID桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'M01',
            info: 'M01163005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カードྡ義桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'M01',
            info: 'M01163008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カードྡ義書式不正',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'M01',
            info: 'M01164005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠苗字桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'M01',
            info: 'M01165005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠住所１桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'M01',
            info: 'M01166005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠住所２桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'M01',
            info: 'M01167005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠住所３桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'M01',
            info: 'M01168005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠都道府県桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'M01',
            info: 'M01169005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠郵便番号桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'M01',
            info: 'M01169008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠郵便番号書式不正',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'M01',
            info: 'M01170005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠電話番号桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'M01',
            info: 'M01170006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠電話番号数値以外',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'M01',
            info: 'M01171005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠メールアドレス桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '25',
            code: 'M01',
            info: 'M01171008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠メールアドレス書式不正',
            userMessage: ''
        },
        {
            errorNumber: '26',
            code: 'M01',
            info: 'M01172008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／エンドユーザ IPアドレス書式不正',
            userMessage: ''
        },
        {
            errorNumber: '27',
            code: 'M01',
            info: 'M01173008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／リピータフラグ書式不正',
            userMessage: ''
        },
        {
            errorNumber: '28',
            code: 'M01',
            info: 'M01174005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／ユーザ ID登録後経過日数桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '29',
            code: 'M01',
            info: 'M01174006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／ユーザ ID登録後経過日数数値以外',
            userMessage: ''
        },
        {
            errorNumber: '30',
            code: 'M01',
            info: 'M01175008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／発送先情報有無判定フラグ書式不正',
            userMessage: ''
        },
        {
            errorNumber: '31',
            code: 'M01',
            info: 'M01176005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／発送先ྡ前桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '32',
            code: 'M01',
            info: 'M01177005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／発送先苗字桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '33',
            code: 'M01',
            info: 'M01178005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／発送先住所１桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '34',
            code: 'M01',
            info: 'M01179005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／発送先住所２桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '35',
            code: 'M01',
            info: 'M01180005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／発送先住所３桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '36',
            code: 'M01',
            info: 'M01181005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／発送先都道府県桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '37',
            code: 'M01',
            info: 'M01182005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／発送先郵便番号桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '38',
            code: 'M01',
            info: 'M01182008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／発送先郵便番号書式不正',
            userMessage: ''
        },
        {
            errorNumber: '39',
            code: 'M01',
            info: 'M01183005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／加盟店ྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '40',
            code: 'M01',
            info: 'M01183008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／加盟店ྡ書式不正',
            userMessage: ''
        },
        {
            errorNumber: '41',
            code: 'M01',
            info: 'M01184005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／デバイス情報桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '42',
            code: 'M01',
            info: 'M01185005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／再購入日数桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '43',
            code: 'M01',
            info: 'M01185006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／再購入日数数値以外',
            userMessage: ''
        },
        {
            errorNumber: '44',
            code: 'M01',
            info: 'M01186005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／過去購買回数桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '45',
            code: 'M01',
            info: 'M01186006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／過去購買回数数値以外',
            userMessage: ''
        },
        {
            errorNumber: '46',
            code: 'M01',
            info: 'M01187008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／与信結果書式不正',
            userMessage: ''
        },
        {
            errorNumber: '47',
            code: 'M01',
            info: 'M01188008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／郵便局・営業所留フラグ書式不正',
            userMessage: ''
        },
        {
            errorNumber: '48',
            code: 'M01',
            info: 'M01189005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／郵便局・営業所ྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '49',
            code: 'M01',
            info: 'M01190005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／ユーザポイント残高桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '50',
            code: 'M01',
            info: 'M01190006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／ユーザポイント残高数値以外',
            userMessage: ''
        },
        {
            errorNumber: '51',
            code: 'M01',
            info: 'M01191005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カード登録変更回数桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '52',
            code: 'M01',
            info: 'M01191006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／カード登録変更回数数値以外',
            userMessage: ''
        },
        {
            errorNumber: '53',
            code: 'M01',
            info: 'M01192005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品情報繰り返し回数桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '54',
            code: 'M01',
            info: 'M01192006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品情報繰り返し回数数値以外',
            userMessage: ''
        },
        {
            errorNumber: '55',
            code: 'M01',
            info: 'M01193005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品個数桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '56',
            code: 'M01',
            info: 'M01193006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品個数数値以外',
            userMessage: ''
        },
        {
            errorNumber: '57',
            code: 'M01',
            info: 'M01194005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品識別コード桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '58',
            code: 'M01',
            info: 'M01194008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品識別コード書式不正',
            userMessage: ''
        },
        {
            errorNumber: '59',
            code: 'M01',
            info: 'M01195005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品IAN/JANコード桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '60',
            code: 'M01',
            info: 'M01195008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品IAN/JANコード書式不正',
            userMessage: ''
        },
        {
            errorNumber: '61',
            code: 'M01',
            info: 'M01196005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品カテゴリー桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '62',
            code: 'M01',
            info: 'M01197005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品単価桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '63',
            code: 'M01',
            info: 'M01197006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品単価数値以外',
            userMessage: ''
        },
        {
            errorNumber: '64',
            code: 'M01',
            info: 'M01198005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／商品ྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '65',
            code: 'M01',
            info: 'M01205005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目8桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '66',
            code: 'M01',
            info: 'M01206005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目9桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '67',
            code: 'M01',
            info: 'M01207005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目19桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '68',
            code: 'M01',
            info: 'M01208005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目20桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '69',
            code: 'M01',
            info: 'M01208006',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目20数値以外',
            userMessage: ''
        },
        {
            errorNumber: '70',
            code: 'M01',
            info: 'M01209005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目21桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '71',
            code: 'M01',
            info: 'M01210005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目22桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '72',
            code: 'M01',
            info: 'M01211005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目23桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '73',
            code: 'M01',
            info: 'M01212005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目24桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '74',
            code: 'M01',
            info: 'M01213005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／亇備項目25桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '75',
            code: 'M01',
            info: 'M01229005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／通貨コード桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '76',
            code: 'M01',
            info: 'M01229008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／通貨コード書式不正',
            userMessage: ''
        },
        {
            errorNumber: '77',
            code: 'M01',
            info: 'M01230005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠国桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '78',
            code: 'M01',
            info: 'M01230008',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／請求先顧宠国書式不正',
            userMessage: ''
        },
        {
            errorNumber: '79',
            code: 'M01',
            info: 'M01231005',
            state: '',
            billing: '－',
            content: '入力パラメータエラー／電文タイプ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'RC1',
            info: 'RC1000001',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(不正な遷移)',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'RC1',
            info: 'RC1000002',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(期限切れ)',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'RC1',
            info: 'RC1000003',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(決済済み)',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'RC1',
            info: 'RC1000005',
            state: '変更無し',
            billing: '－',
            content: '取引IDチェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'RC1',
            info: 'RC1000006',
            state: '変更無し',
            billing: '－',
            content: '取引存在チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'RC1',
            info: 'RC1000007',
            state: '変更無し',
            billing: '－',
            content: 'リクエスト改ざんチェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'RC1',
            info: 'RC1000008',
            state: '変更無し',
            billing: '－',
            content: 'リクルートかんたん支払い終了受付:状態遷移エラー',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'RC1',
            info: 'RC1000009',
            state: '変更無し',
            billing: '－',
            content: '決済失敗エラー',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'RC1',
            info: 'RC1000101',
            state: '変更無し',
            billing: '－',
            content: 'リクエストパラメータ異常後続決済センターで、リクエストパラメータが仕様と異なる場吅に返却されます。',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'RC1',
            info: 'RC1000109',
            state: '変更無し',
            billing: '－',
            content: '処理対象ステータスエラー後続決済センターで、ステータスが処理対象でない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'RC1',
            info: 'RC1000110',
            state: '変更無し',
            billing: '－',
            content: '返金処理に失敗しました。後続決済センターで、決済金額より返金する金額が大きいか、返金対象期間を過ぎてしまっている場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'RC1',
            info: 'RC1000111',
            state: '変更無し',
            billing: '－',
            content: 'ポイント全額決済エラーポイント全額決済のため、後続決済センターが処理を受け付けられない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'RC1',
            info: 'RC1000112',
            state: '変更無し',
            billing: '－',
            content: 'クレジットカードエラークレジットカードの与信取得に失敗した場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'RC2',
            info: 'RC2000001',
            state: '変更無し',
            billing: '－',
            content: 'リクルートかんたん支払い決済結果受信ステータスチェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'RC2',
            info: 'RC2000002',
            state: '変更無し',
            billing: '－',
            content: 'リクルート通信エラー',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'RC2',
            info: 'RC2000009',
            state: '変更無し',
            billing: '－',
            content: 'リクルートかんたん支払い決済結果受信入力パラメータエラー',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'RC2',
            info: 'RC2000010',
            state: '変更無し',
            billing: '－',
            content: 'リクルートかんたん支払い決済結果受信取引存在チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'RC2',
            info: 'RC2000102',
            state: '変更無し',
            billing: '－',
            content: 'APIサーバ例外後続決済センターの内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'RC2',
            info: 'RC2000103',
            state: '変更無し',
            billing: '－',
            content: 'データ無しエラー後続決済センターでリクエストパラメータと一致するデータが存在しない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'RC2',
            info: 'RC2000104',
            state: '変更無し',
            billing: '－',
            content: 'メンテナンス中後続決済センターでメンテナンス中であり、処理を受け付けられない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'RC2',
            info: 'RC2000105',
            state: '変更無し',
            billing: '－',
            content: '実行権限エラー APIを実行する権限がないため、APIが処理を受け付けることができない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'RC2',
            info: 'RC2000106',
            state: '変更無し',
            billing: '－',
            content: 'ショップIDチェックエラー後続決済センターに存在しないショップIDを受け付けた場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'RC2',
            info: 'RC2000107',
            state: '変更無し',
            billing: '－',
            content: '吅計金額範囲外エラー後続決済センターで吅計金額が有効桁数を超えた場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'RC2',
            info: 'RC2000108',
            state: '変更無し',
            billing: '－',
            content: 'オーダーIDチェックエラー後続決済センターに存在しないオーダーIDを受け付けた場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '25',
            code: 'RC2',
            info: 'RC2009999',
            state: '変更無し',
            billing: '－',
            content: 'その他システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'RC3',
            info: 'RC3000001',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(不正な遷移)',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'RC3',
            info: 'RC3000002',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(期限切れ)',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'RC3',
            info: 'RC3000003',
            state: '変更無し',
            billing: '－',
            content: '状態遷移チェックエラー(決済済み)',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'RC3',
            info: 'RC3000005',
            state: '変更無し',
            billing: '－',
            content: '取引IDチェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'RC3',
            info: 'RC3000006',
            state: '変更無し',
            billing: '－',
            content: '取引存在チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'RC3',
            info: 'RC3000007',
            state: '変更無し',
            billing: '－',
            content: 'リクエスト改ざんチェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'RC3',
            info: 'RC3000008',
            state: '変更無し',
            billing: '－',
            content: 'リクルートかんたん支払い継続課金終了受付:状態遷移エラー',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'RC3',
            info: 'RC3000009',
            state: '変更無し',
            billing: '－',
            content: '決済失敗エラー',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'RC3',
            info: 'RC3000110',
            state: '変更無し',
            billing: '－',
            content: '処理対象ステータスエラー後続決済センターで、ステータスが処理対象でない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'RC3',
            info: 'RC3000111',
            state: '変更無し',
            billing: '－',
            content: '返金処理に失敗しました。後続決済センターで、決済金額より返金する金額が大きいか、返金対象期間を過ぎてしまっている場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'RC3',
            info: 'RC3000112',
            state: '変更無し',
            billing: '－',
            content: '処理不可エラー後続決済センターで、購入者がブラックリストに入っている等、処理を受付けることができない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'RC3',
            info: 'RC3000113',
            state: '変更無し',
            billing: '－',
            content: '継続課金失敗エラー後続決済センターで、継続課金に失敗した場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'RC3',
            info: 'RC3000114',
            state: '変更無し',
            billing: '－',
            content: '継続課金失敗強制解約後続決済センターで、継続課金に失敗し強制解約した場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'RC3',
            info: 'RC3000115',
            state: '変更無し',
            billing: '－',
            content: '解約済みのため継続課金に失敗しました。',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'RC4',
            info: 'RC4000001',
            state: '変更無し',
            billing: '－',
            content: 'リクルートかんたん支払い継続課金結果受信ステータスチェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'RC4',
            info: 'RC4000002',
            state: '変更無し',
            billing: '－',
            content: 'リクルート通信エラー',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'RC4',
            info: 'RC4000003',
            state: '変更無し',
            billing: '－',
            content: 'リクルートかんたん継続課金実売上エラー',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'RC4',
            info: 'RC4000004',
            state: '変更無し',
            billing: '－',
            content: 'リクルートかんたん継続課金実売上失敗後取消エラー',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'RC4',
            info: 'RC4000010',
            state: '変更無し',
            billing: '－',
            content: 'リクルートかんたん継続課金結果受信取引存在チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'RC4',
            info: 'RC4000101',
            state: '変更無し',
            billing: '－',
            content: 'リクエストパラメータ異常後続決済センターで、リクエストパラメータが仕様と異なる場吅に返却されます。',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'RC4',
            info: 'RC4000102',
            state: '変更無し',
            billing: '－',
            content: 'APIサーバ例外後続決済センターの内部エラーです。発生時刻や呼び出しパラメータをご確認のうえ、お問い吅わせください。',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'RC4',
            info: 'RC4000103',
            state: '変更無し',
            billing: '－',
            content: 'データ無しエラー後続決済センターでリクエストパラメータと一致するデータが存在しない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'RC4',
            info: 'RC4000104',
            state: '変更無し',
            billing: '－',
            content: 'メンテナンス中後続決済センターでメンテナンス中であり、処理を受け付けられない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'RC4',
            info: 'RC4000105',
            state: '変更無し',
            billing: '－',
            content: '実行権限エラー APIを実行する権限がないため、APIが処理を受け付けることができない場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '25',
            code: 'RC4',
            info: 'RC4000106',
            state: '変更無し',
            billing: '－',
            content: 'マーチャントIDチェックエラー後続決済センターに存在しないマーチャントIDを受け付けた場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '26',
            code: 'RC4',
            info: 'RC4000107',
            state: '変更無し',
            billing: '－',
            content: '商品IDチェックエラー後続決済センターに存在しない商品 IDを受け付けた場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '27',
            code: 'RC4',
            info: 'RC4000108',
            state: '変更無し',
            billing: '－',
            content: '商品金額チェックエラー後続決済センターに存在しない商品金額を受け付けた場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '28',
            code: 'RC4',
            info: 'RC4000109',
            state: '変更無し',
            billing: '－',
            content: '注文番号、契約番号チェックエラー後続決済センターに存在しない注文番号（契約番号）を受け付けた場吅に発生します。',
            userMessage: ''
        },
        {
            errorNumber: '29',
            code: 'RC4',
            info: 'RC4009999',
            state: '変更無し',
            billing: '－',
            content: 'その他システムエラー',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'E61',
            info: 'E61214002',
            state: '変更無し',
            billing: '－',
            content: 'ショップ設定の銀行振込(バーチャル口座)部に不備があります。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'E61',
            info: 'E61214010',
            state: '変更無し',
            billing: '－',
            content: '当該機能は専有口座契約でのみ利用可能です。',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'E61',
            info: 'E61219002',
            state: '変更無し',
            billing: '－',
            content: '利用可能なバーチャル口座がありません。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'M01',
            info: 'M01215001',
            state: '変更無し',
            billing: '－',
            content: '有効期限日数必須エラー',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'M01',
            info: 'M01215005',
            state: '変更無し',
            billing: '－',
            content: '有効期限日数桁数オーバー',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'M01',
            info: 'M01215006',
            state: '変更無し',
            billing: '－',
            content: '有効期限日数フォーマットエラー',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'M01',
            info: 'M01216012',
            state: '変更無し',
            billing: '－',
            content: '取引஦由桁数オーバー',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'M01',
            info: 'M01216013',
            state: '変更無し',
            billing: '－',
            content: '取引஦由禁則文字チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'M01',
            info: 'M01217012',
            state: '変更無し',
            billing: '－',
            content: '振込依頼者氏ྡ桁数オーバー',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'M01',
            info: 'M01217013',
            state: '変更無し',
            billing: '－',
            content: '振込依頼者氏ྡ禁則文字チェックエラー',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'M01',
            info: 'M01218005',
            state: '変更無し',
            billing: '－',
            content: 'メールアドレス桁数オーバー',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'M01',
            info: 'M01218008',
            state: '変更無し',
            billing: '－',
            content: 'メールアドレスフォーマットエラー',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'M01',
            info: 'M01219004',
            state: '変更無し',
            billing: '－',
            content: '指定された口座は使用中です。（未使用状態ではありません）',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'M01',
            info: 'M01220001',
            state: '変更無し',
            billing: '－',
            content: '継続口座ID必須エラー',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'M01',
            info: 'M01220002',
            state: '変更無し',
            billing: '－',
            content: '指定された口座IDが存在しません。',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'M01',
            info: 'M01220005',
            state: '変更無し',
            billing: '－',
            content: '口座ID入力桁数オーバー',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'M01',
            info: 'M01220010',
            state: '変更無し',
            billing: '－',
            content: '継続口座状態エラー割当済みの口座を割り当て、もしく解放済みの口座を解放しようとしています。',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'M01',
            info: 'M01220013',
            state: '変更無し',
            billing: '－',
            content: '継続口座ID禁則文字エラー',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'M01',
            info: 'M01221001',
            state: '変更無し',
            billing: '－',
            content: '銀行コード必須エラー',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'M01',
            info: 'M01221005',
            state: '変更無し',
            billing: '－',
            content: '銀行コード桁数オーバー',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'M01',
            info: 'M01221006',
            state: '変更無し',
            billing: '－',
            content: '銀行コードフォーマットエラー',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'M01',
            info: 'M01222001',
            state: '変更無し',
            billing: '－',
            content: '支店コード必須エラー',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'M01',
            info: 'M01222005',
            state: '変更無し',
            billing: '－',
            content: '支店コード桁数オーバー',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'M01',
            info: 'M01222006',
            state: '変更無し',
            billing: '－',
            content: '支店コードフォーマットエラー',
            userMessage: ''
        },
        {
            errorNumber: '25',
            code: 'M01',
            info: 'M01223001',
            state: '変更無し',
            billing: '－',
            content: '科目必須エラー',
            userMessage: ''
        },
        {
            errorNumber: '26',
            code: 'M01',
            info: 'M01223011',
            state: '変更無し',
            billing: '－',
            content: '科目フォーマットエラー',
            userMessage: ''
        },
        {
            errorNumber: '27',
            code: 'M01',
            info: 'M01224001',
            state: '変更無し',
            billing: '－',
            content: '口座番号必須エラー',
            userMessage: ''
        },
        {
            errorNumber: '28',
            code: 'M01',
            info: 'M01224005',
            state: '変更無し',
            billing: '－',
            content: '口座番号桁数オーバー',
            userMessage: ''
        },
        {
            errorNumber: '29',
            code: 'M01',
            info: 'M01224006',
            state: '変更無し',
            billing: '－',
            content: '口座番号フォーマットエラー',
            userMessage: ''
        },
        {
            errorNumber: '30',
            code: 'M01',
            info: 'M01225002',
            state: '変更無し',
            billing: '－',
            content: '入金履歴存在チェックエラー入金履歴は存在しません。',
            userMessage: ''
        },
        {
            errorNumber: '31',
            code: 'M01',
            info: 'M01259010',
            state: '変更無し',
            billing: '－',
            content: '口座情報入力不正継続口座IDもしくは、口座情報 (銀行コード、支店コード、科目コード、口座番号)のいずれかを指定してください。',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'M01',
            info: 'M01290001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /実行モード未指定',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'M01',
            info: 'M01290008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /実行モード書式不正',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'M01',
            info: 'M01291001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /注文番号未指定',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'M01',
            info: 'M01291005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /注文番号桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'M01',
            info: 'M01291008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /注文番号書式不正',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'M01',
            info: 'M01291010',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /注文番号重複（すでに使用された注文番号を指定）',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'M01',
            info: 'M01292001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /商品ྡ未指定',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'M01',
            info: 'M01292005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /商品ྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'M01',
            info: 'M01292008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /商品ྡ書式不正',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'M01',
            info: 'M01293001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /通貨コード未指定',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'M01',
            info: 'M01293005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /通貨コード桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'M01',
            info: 'M01293008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /通貨コード書式不正',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'M01',
            info: 'M01294001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /購入者氏ྡ未指定',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'M01',
            info: 'M01294005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /購入者氏ྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'M01',
            info: 'M01294008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /購入者氏ྡ書式不正',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'M01',
            info: 'M01295001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /メールアドレス未指定',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'M01',
            info: 'M01295005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /メールアドレス桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'M01',
            info: 'M01296001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /テンプレートNo.未指定',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'M01',
            info: 'M01296008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー / テンプレートNo.書式不正',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'M01',
            info: 'M01297001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー / メッセージ言語No.未指定',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'M01',
            info: 'M01297008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー / メッセージ言語No.書式不正',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'M01',
            info: 'M01298011',
            state: '変更無し',
            billing: '－',
            content: ' 入力パラメータエラー / 有効日数範囲不正',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'M01',
            info: 'M01299010',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー / 通貨コードエラー・指定した通貨コードが存在しない。\n・指定した通貨コードの上限金額を超えた利用金額が指定された。\n・指定した決済手段で使用できない通貨コードが指定された',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'E61',
            info: 'E61300002',
            state: '変更無し',
            billing: '－',
            content: 'メールリンク設定が行われていない。',
            userMessage: '管理画面でメールリンク設定を入力してください。'
        },
        {
            errorNumber: '1',
            code: 'M01',
            info: 'M01330001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /振替指定日未指定',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'M01',
            info: 'M01330006',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /振替指定日書式不正',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'M01',
            info: 'M01330010',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /振替指定日書式不正',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'M01',
            info: 'M01331005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /請求内容桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'M01',
            info: 'M01331006',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /請求内容書式不正',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'M01',
            info: 'M01335005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /チェックモード不正',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'M01',
            info: 'M01332002',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー / 指定された口座は存在しません',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'M01',
            info: 'M01333002',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー / 口座振替の処理可能期間外です。',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'M01',
            info: 'M01333011',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー / 請求受付期間外',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'M01',
            info: 'M01334011',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー / 請求受付期間外',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'AC2',
            info: 'AC2000001',
            state: '変更無し',
            billing: '－',
            content: 'システムエラー /請求受付失敗',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'AC2',
            info: 'AC2000002',
            state: '変更無し',
            billing: '－',
            content: 'システムエラー /請求締切失敗',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'AC2',
            info: 'AC2000003',
            state: '変更無し',
            billing: '－',
            content: 'システムエラー /請求結果反映失敗',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'AC2',
            info: 'AC2000004',
            state: '変更無し',
            billing: '－',
            content: 'システムエラー /請求結果不整吅',
            userMessage: ''
        },
        {
            errorNumber: '1',
            code: 'PD1',
            info: 'PD1000001',
            state: '変更無し',
            billing: '－',
            content: 'Paidに取引が存在しません。',
            userMessage: ''
        },
        {
            errorNumber: '2',
            code: 'PD1',
            info: 'PD1000002',
            state: '変更無し',
            billing: '－',
            content: 'Paidからエラーコード（呼出しパラメータ不正）が返却されました。',
            userMessage: ''
        },
        {
            errorNumber: '3',
            code: 'PD1',
            info: 'PD1000003',
            state: '変更無し',
            billing: '－',
            content: 'Paid側でエラーが発生しました。',
            userMessage: ''
        },
        {
            errorNumber: '4',
            code: 'PD1',
            info: 'PD1000004',
            state: '変更無し',
            billing: '－',
            content: 'リクエスト件数の上限を超過しました。',
            userMessage: ''
        },
        {
            errorNumber: '5',
            code: 'PD1',
            info: 'PD1000005',
            state: '変更無し',
            billing: '－',
            content: 'Paidから想定外のステータスが返却されました。',
            userMessage: ''
        },
        {
            errorNumber: '6',
            code: 'PD1',
            info: 'PD1000006',
            state: '変更無し',
            billing: '－',
            content: '指定した取引先は利用不可です。',
            userMessage: ''
        },
        {
            errorNumber: '7',
            code: 'PD1',
            info: 'PD1000007',
            state: '変更無し',
            billing: '－',
            content: '指定した取引先は限度額オーバーです。',
            userMessage: ''
        },
        {
            errorNumber: '8',
            code: 'PD1',
            info: 'PD1000009',
            state: '変更無し',
            billing: '－',
            content: 'Paidからエラーコード（パラメータ不正）が返却されました。',
            userMessage: ''
        },
        {
            errorNumber: '9',
            code: 'PD1',
            info: 'PD1000010',
            state: '変更無し',
            billing: '－',
            content: 'Paidからエラーコード（パラメータ内容不備）が返却されました。',
            userMessage: ''
        },
        {
            errorNumber: '10',
            code: 'PD1',
            info: 'PD1000011',
            state: '変更無し',
            billing: '－',
            content: 'Paidからエラーコード（ Paid取引先ID登録済み）が返却されました。',
            userMessage: ''
        },
        {
            errorNumber: '11',
            code: 'PD1',
            info: 'PD1000012',
            state: '変更無し',
            billing: '－',
            content: '指定した Paid取引先IDが存在しません。',
            userMessage: ''
        },
        {
            errorNumber: '12',
            code: 'PD1',
            info: 'PD1000013',
            state: '変更無し',
            billing: '－',
            content: 'Paidからエラーコード（その他）が返却されました。',
            userMessage: ''
        },
        {
            errorNumber: '13',
            code: 'PD1',
            info: 'PD1000014',
            state: '変更無し',
            billing: '－',
            content: '指定した取引先は登録済みです。',
            userMessage: ''
        },
        {
            errorNumber: '14',
            code: 'M01',
            info: 'M01360001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /取引先 ID未指定',
            userMessage: ''
        },
        {
            errorNumber: '15',
            code: 'M01',
            info: 'M01360005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /取引先 ID桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '16',
            code: 'M01',
            info: 'M01360008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /取引先 ID書式不正',
            userMessage: ''
        },
        {
            errorNumber: '17',
            code: 'M01',
            info: 'M01361001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /会社 ྡ未指定',
            userMessage: ''
        },
        {
            errorNumber: '18',
            code: 'M01',
            info: 'M01361005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /会社 ྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '19',
            code: 'M01',
            info: 'M01362001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /会社 ྡカナ未指定',
            userMessage: ''
        },
        {
            errorNumber: '20',
            code: 'M01',
            info: 'M01362005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /会社 ྡカナ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '21',
            code: 'M01',
            info: 'M01363001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /代表者姓未指定',
            userMessage: ''
        },
        {
            errorNumber: '22',
            code: 'M01',
            info: 'M01363005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /代表者姓桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '23',
            code: 'M01',
            info: 'M01364001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /代表者 ྡ未指定',
            userMessage: ''
        },
        {
            errorNumber: '24',
            code: 'M01',
            info: 'M01364005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /代表者 ྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '25',
            code: 'M01',
            info: 'M01365001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /代表者姓カナ未指定',
            userMessage: ''
        },
        {
            errorNumber: '26',
            code: 'M01',
            info: 'M01365005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /代表者姓カナ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '27',
            code: 'M01',
            info: 'M01366001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /代表社 ྡカナ未指定',
            userMessage: ''
        },
        {
            errorNumber: '28',
            code: 'M01',
            info: 'M01366005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /代表社 ྡカナ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '29',
            code: 'M01',
            info: 'M01367001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /郵便番号未指定',
            userMessage: ''
        },
        {
            errorNumber: '30',
            code: 'M01',
            info: 'M01367008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /郵便番号書式不正',
            userMessage: ''
        },
        {
            errorNumber: '31',
            code: 'M01',
            info: 'M01368001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /都道府県未指定',
            userMessage: ''
        },
        {
            errorNumber: '32',
            code: 'M01',
            info: 'M01368005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /都道府県桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '33',
            code: 'M01',
            info: 'M01369001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /市区町村未指定',
            userMessage: ''
        },
        {
            errorNumber: '34',
            code: 'M01',
            info: 'M01369005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /市区町村桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '35',
            code: 'M01',
            info: 'M01370001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/町ྡ・番地未指定',
            userMessage: ''
        },
        {
            errorNumber: '36',
            code: 'M01',
            info: 'M01370005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/町ྡ・番地桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '37',
            code: 'M01',
            info: 'M01371005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/ビル・マンションྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '38',
            code: 'M01',
            info: 'M01372005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /部署 ྡ / 支店ྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '39',
            code: 'M01',
            info: 'M01373001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /担当者姓未指定',
            userMessage: ''
        },
        {
            errorNumber: '40',
            code: 'M01',
            info: 'M01373005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /担当者姓桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '41',
            code: 'M01',
            info: 'M01374001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /担当者 ྡ未指定',
            userMessage: ''
        },
        {
            errorNumber: '42',
            code: 'M01',
            info: 'M01374005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /担当者 ྡ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '43',
            code: 'M01',
            info: 'M01375001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /担当者姓カナ未指定',
            userMessage: ''
        },
        {
            errorNumber: '44',
            code: 'M01',
            info: 'M01375005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /担当者姓カナ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '45',
            code: 'M01',
            info: 'M01376001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /担当者 ྡカナ未指定',
            userMessage: ''
        },
        {
            errorNumber: '46',
            code: 'M01',
            info: 'M01376005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /担当者 ྡカナ桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '47',
            code: 'M01',
            info: 'M01377001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /電話番号未指定',
            userMessage: ''
        },
        {
            errorNumber: '48',
            code: 'M01',
            info: 'M01377008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /電話番号書式不正',
            userMessage: ''
        },
        {
            errorNumber: '49',
            code: 'M01',
            info: 'M01378008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /FAX番号書式不正',
            userMessage: ''
        },
        {
            errorNumber: '50',
            code: 'M01',
            info: 'M01379008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /携帯電話番号書式不正',
            userMessage: ''
        },
        {
            errorNumber: '51',
            code: 'M01',
            info: 'M01380001',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /メールアドレス未指定',
            userMessage: ''
        },
        {
            errorNumber: '52',
            code: 'M01',
            info: 'M01380005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /メールアドレス桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '53',
            code: 'M01',
            info: 'M01380008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /メールアドレス書式不正',
            userMessage: ''
        },
        {
            errorNumber: '54',
            code: 'M01',
            info: 'M01383006',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /設立年月（年）数値以外',
            userMessage: ''
        },
        {
            errorNumber: '55',
            code: 'M01',
            info: 'M01383011',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/設立年月（年）範囲外',
            userMessage: ''
        },
        {
            errorNumber: '56',
            code: 'M01',
            info: 'M01384006',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /設立年月（月）数値以外',
            userMessage: ''
        },
        {
            errorNumber: '57',
            code: 'M01',
            info: 'M01384011',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /設立年月（月）範囲外',
            userMessage: ''
        },
        {
            errorNumber: '58',
            code: 'M01',
            info: 'M01385006',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /年商数値以外',
            userMessage: ''
        },
        {
            errorNumber: '59',
            code: 'M01',
            info: 'M01385011',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /年商範囲外',
            userMessage: ''
        },
        {
            errorNumber: '60',
            code: 'M01',
            info: 'M01386006',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /業種番号数値以外',
            userMessage: ''
        },
        {
            errorNumber: '61',
            code: 'M01',
            info: 'M01386011',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /業種番号範囲外',
            userMessage: ''
        },
        {
            errorNumber: '62',
            code: 'M01',
            info: 'M01387005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /取り扱いブランド/商品桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '63',
            code: 'M01',
            info: 'M01388006',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /店舗数数値以外',
            userMessage: ''
        },
        {
            errorNumber: '64',
            code: 'M01',
            info: 'M01388011',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /店舗数範囲外',
            userMessage: ''
        },
        {
            errorNumber: '65',
            code: 'M01',
            info: 'M01389005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/URL1桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '66',
            code: 'M01',
            info: 'M01389008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/URL1書式不正',
            userMessage: ''
        },
        {
            errorNumber: '67',
            code: 'M01',
            info: 'M01390005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/URL2桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '68',
            code: 'M01',
            info: 'M01390008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/URL2書式不正',
            userMessage: ''
        },
        {
            errorNumber: '69',
            code: 'M01',
            info: 'M01391005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/URL3桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '70',
            code: 'M01',
            info: 'M01391008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/URL3書式不正',
            userMessage: ''
        },
        {
            errorNumber: '71',
            code: 'M01',
            info: 'M01392005',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /PR桁数超過',
            userMessage: ''
        },
        {
            errorNumber: '72',
            code: 'M01',
            info: 'M01381008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー/締め日書式不正',
            userMessage: ''
        },
        {
            errorNumber: '73',
            code: 'M01',
            info: 'M01382008',
            state: '変更無し',
            billing: '－',
            content: '入力パラメータエラー /お支払い方法書式不正',
            userMessage: ''
        }
    ]
};
