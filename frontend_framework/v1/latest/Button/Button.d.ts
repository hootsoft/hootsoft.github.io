import { MouseEventHandler, ReactElement } from "react";
import { ButtonType, IconType } from "..";
import { StatusColourType } from "../Assets";
declare const Button: {
    ({ fill, icon: selectedIcon, iconOnly, text: selectedText, size, type, submit, statusColour: selectedStatusColour, ...props }: IButton): ReactElement;
    displayName: string;
};
export default Button;
export interface IButton {
    className?: string;
    disabled?: boolean;
    fill?: boolean;
    form?: string;
    icon?: IconType;
    iconOnly?: boolean;
    text?: string;
    type?: ButtonType;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    submit?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    statusColour?: StatusColourType;
}
