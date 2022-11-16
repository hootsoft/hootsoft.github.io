import { ChangeEventHandler, HTMLInputTypeAttribute, LegacyRef } from "react";
export interface IDateTimeInput extends Omit<IInput, "type" & {
    type: InputDateTimeType;
}> {
}
export interface IEmailInput extends Omit<IInput, "type"> {
}
export interface IFileInput extends Omit<IInput, "type"> {
}
export interface INumberInput extends Omit<IInput, "type"> {
}
export interface ICurrencyInput extends INumberInput {
    currency: CurrencyType;
}
export interface IPasswordInput extends Omit<IInput, "type"> {
}
export interface ITextInput extends Omit<IInput, "type"> {
}
export interface IInput {
    accept?: string;
    alt?: string;
    append?: string;
    autoComplete?: string;
    autoFocus?: boolean;
    capture?: boolean | "user" | "environment";
    checked?: boolean;
    className?: string;
    crossOrigin?: string;
    disabled?: boolean;
    enterKeyHint?: InputEnterKeyHintType;
    error?: string;
    form?: string;
    formAction?: string;
    formEncType?: string;
    formMethod?: string;
    formNoValidate?: boolean;
    formTarget?: string;
    height?: number | string;
    id?: string;
    label?: string;
    list?: string;
    max?: number | string;
    maxLength?: number;
    min?: number | string;
    minLength?: number;
    multiple?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    name?: string;
    pattern?: string;
    placeholder?: string;
    prepend?: string;
    readOnly?: boolean;
    ref?: LegacyRef<HTMLInputElement> | any;
    required?: boolean;
    size?: number;
    src?: string;
    step?: number | string;
    type?: HTMLInputTypeAttribute;
    value?: string | ReadonlyArray<string> | number;
    width?: number | string;
}
export interface IInputGroupItem {
    type: "append" | "prepend";
    value: string;
}
declare type InputDateTimeType = "date" | "time" | "datetime-local";
declare type InputEnterKeyHintType = "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
declare type CurrencyType = "£" | "$" | "€";
export {};
