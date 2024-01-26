import { DefaultTransporter, FetchTransporter, IRequestOptions as ITransporterRequestOptions, Transporter } from './transporters';

/**
 * service constructor options
 */
export interface IOptions {
    /**
     * API endpoint
     * @example
     * http://localhost:8081
     */
    endpoint: string;
    /**
     * transporter object
     */
    transporter?: Transporter;
    useFetch: boolean;
}

// export interface IFetchOptions {
//     uri: string;
//     form?: any;
//     qs?: any;
//     method: string;
//     headers?: {
//         [key: string]: any;
//     };
//     body?: any;
//     expectedStatusCodes: number[];
// }
export type IRequestOptions = Pick<ITransporterRequestOptions, 'method' | 'form'> & {
    uri: string;
    expectedStatusCodes: number[];
    expectedResponseParams?: string[];
};
export type ICustomRequestOptions = Pick<ITransporterRequestOptions, 'timeout'>;

/**
 * base service class
 */
// export class Service {
//     public options: IOptions;

//     constructor(options: IOptions) {
//         this.options = options;
//     }

//     /**
//      * Create and send request to API
//      */
//     public async request(options: IFetchOptions) {
//         const defaultOptions = {
//             headers: {},
//             method: 'GET'
//         };
//         options = { ...defaultOptions, ...options };

//         const baseUrl = this.options.endpoint;
//         let url = `${baseUrl}${options.uri}`;

//         const querystrings = qs.stringify(options.qs);
//         url += (querystrings.length > 0) ? `?${querystrings}` : '';

//         const headers = {
//             ...{
//                 Accept: 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
//                 // 'Content-Type': 'application/json'
//             },
//             ...options.headers
//         };

//         const fetchOptions = {
//             method: options.method,
//             headers: headers,
//             // body: JSON.stringify(options.body),
//             body: qs.stringify(options.form)
//         };

//         // create request (using authClient or otherwise and return request obj)
//         const transporter =
//             (this.options.transporter !== undefined) ? this.options.transporter : new DefaultTransporter();

//         return transporter.request(url, fetchOptions);
//     }
// }

/**
 * base service class
 */
export class Service {
    public options: IOptions;
    public requestOptions: ICustomRequestOptions;

    constructor(options: IOptions, requestOptions?: ICustomRequestOptions) {
        this.options = options;
        this.requestOptions = {
            // headers: {},
            // method: 'GET'
            ...requestOptions
        };
    }

    /**
     * Create and send request to API
     */
    public async request(options: IRequestOptions) {
        const requestOptions: ITransporterRequestOptions = {
            url: `${this.options.endpoint}${options.uri}`,
            method: (typeof options.method === 'string') ? options.method : 'GET',
            form: options.form,
            ...this.requestOptions
            // ...(options.form !== undefined) ? { form: options.form } : undefined
        };

        // delete (<any>requestOptions).uri;

        const transporter = (this.options.transporter !== undefined)
            // tslint:disable-next-line:no-single-line-block-comment
            ? /* istanbul ignore next */ this.options.transporter
            : (this.options.useFetch === true)
                ? new FetchTransporter(options.expectedStatusCodes, options.expectedResponseParams)
                : new DefaultTransporter(options.expectedStatusCodes, options.expectedResponseParams);

        return transporter.request(requestOptions);
    }
}
