import { IAppendFilterString } from "../Interfaces";
/** Here we want to take the array of filters, join them together with filterName= and append them onto the current URL */
export declare function appendFilterString({ url, filterName, filterArray }: IAppendFilterString): string;
