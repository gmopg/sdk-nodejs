// import * as qs from 'qs';
import * as request from 'request-promise-native';

import { DefaultTransporter, Transporter } from './transporters';

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
export type IRequestOptions = request.OptionsWithUri & {
    expectedStatusCodes: number[];
};

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
    public requestOptions: request.RequestPromiseOptions;

    constructor(options: IOptions, requestOptions?: request.RequestPromiseOptions) {
        this.options = options;

        this.requestOptions = {
            headers: {},
            method: 'GET'
        };
        if (requestOptions !== undefined) {
            this.requestOptions = { ...this.requestOptions, ...requestOptions };
        }
    }

    /**
     * Create and send request to API
     */
    public async request(options: IRequestOptions) {
        const requestOptions = {
            url: `${this.options.endpoint}${options.uri}`,
            ...this.requestOptions,
            ...options
        };

        delete (<any>requestOptions).uri;

        // create request
        const transporter =
            (this.options.transporter !== undefined) ? this.options.transporter : new DefaultTransporter(options.expectedStatusCodes);

        return transporter.request(requestOptions);
    }
}
