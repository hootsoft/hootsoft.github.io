import { CSSProperties, ReactNode } from "react";
import { IconType } from "..";
import { StatusColourType } from "../Assets";
export interface IAlert {
    children?: ReactNode;
    /** Specifies whether the alert can be closed. If true, include items such as x associated with dismissing the alert. */
    dismissible?: boolean;
    /** Specifies whether to fill the background of the alert. */
    fill?: boolean;
    headerText?: string;
    bodyText?: string;
    /** Specifies the variant colour/type of the alert. */
    variant?: StatusColourType;
    className?: string;
    style?: CSSProperties;
    /** Specifies which icon to display at the start of the alert. If null/undefined, no icon is displayed. */
    icon?: IconType;
}
export interface IAlertContent {
    children: ReactNode;
    headerText?: string;
    bodyText?: string;
}
export interface IAlertIcon {
    icon: IconType;
}
