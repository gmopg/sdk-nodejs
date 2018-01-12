import * as request from 'request-promise-native';

import { DefaultTransporter, Transporter } from './transporters';

/**
 * service constructor options
 * @export
 * @interface
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

/**
 * base service class
 * @export
 * @class Service
 */
export class Service {
    public options: IOptions;

    constructor(options: IOptions) {
        this.options = options;
    }

    /**
     * Create and send request to API
     */
    public async request(options: request.OptionsWithUri) {
        const defaultOptions = {
            headers: {},
            method: 'GET',
            resolveWithFullResponse: true,
            forever: true
        };
        options = { ...defaultOptions, ...options };

        const baseUrl = this.options.endpoint;
        const url = `${baseUrl}${options.uri}`;

        delete options.uri;

        // const querystrings = qs.stringify(options.qs);
        // url += (querystrings.length > 0) ? `?${querystrings}` : '';

        const requestOptions = {
            url: url,
            ...options
        };

        // create request (using authClient or otherwise and return request obj)
        const transporter =
            (this.options.transporter !== undefined) ? this.options.transporter : new DefaultTransporter();

        return transporter.request(requestOptions);
    }
}
