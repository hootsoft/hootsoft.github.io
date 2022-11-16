export declare function generateIdFromValue(value?: string): string | undefined;
/** Determines whether to use a ? or a & to join filters / sort options
If we have filters, it should already have a ? at the start, anything afterwards uses & to join url params */
export declare function generateStringJoinCharacter(url: string): "?" | "&";
/** A function designed to join style classes together. */
export declare function clsx(...classes: (string | undefined | boolean)[]): string;
export declare function uuid(): string;
