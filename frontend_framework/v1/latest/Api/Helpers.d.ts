import { AppServices, HootsoftApp } from "./Config";
/** Gets and builds the URL for an API from the properties passed in. */
export declare function getApiUrl({ app, service, version, action, params }: IBuildApiPath): string;
export declare function handleResponse(response: ApiResponseType): Promise<any>;
export declare function fetchData(url: string): Promise<any>;
export declare function handlePostPutResponse(response: ApiResponseType): Promise<{
    result: boolean;
    response?: undefined;
} | {
    response: any;
    result: boolean;
}>;
export declare function handleDeleteResponse(response: ApiResponseType): Promise<{
    result: boolean;
}>;
export declare function postData({ url, data }: IPostData): Promise<{
    result: boolean;
    response?: undefined;
} | {
    response: any;
    result: boolean;
}>;
export declare function putData({ url, data }: IPutData): Promise<{
    result: boolean;
    response?: undefined;
} | {
    response: any;
    result: boolean;
}>;
export declare function deleteData({ url, token }: IDeleteData): Promise<{
    result: boolean;
}>;
interface IBuildApiPath {
    /** The name of the app which the API will belong to. */
    app: HootsoftApp;
    /** The service which the actions belong to. */
    service: AppServices;
    /** The version number of the service. */
    version?: number;
    /** The action name of the API called. */
    action: string;
    /** Additional Params added to the url */
    params?: ApiUrlParams;
}
export interface IFetchData {
    url: string;
    headers?: Headers;
    body?: string | object;
}
export interface IPostData {
    url: string;
    data: object;
    token?: string;
}
export interface IRequestOptions {
    method: "GET" | "POST" | "PUT" | "DELETE";
    body: string;
    headers: {
        token?: string;
        "Content-Type"?: "application/json";
    };
}
export interface IPutData {
    url: string;
    data: object;
    token?: string;
}
export interface IDeleteData {
    url: string;
    token?: string;
}
export declare type ApiResponseType = any;
export declare type ApiUrlKeyValuePair = {
    key: string;
    value: string;
};
export declare type ApiUrlParams = Array<ApiUrlKeyValuePair> | string;
export {};
