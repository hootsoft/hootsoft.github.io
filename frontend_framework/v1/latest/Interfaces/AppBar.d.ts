import { CSSProperties, ReactNode } from "react";
export interface IAppBarBranding {
    logo?: boolean;
    title?: string;
}
export interface IAppBarButton {
    "aria-label"?: string;
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
    text?: string;
}
export interface IAppBarContainer {
    children?: ReactNode;
    /** Specifies whether to apply the "container" page margins (if true) to the nav content or allow it to take the full screen width (if false) */
    useContainerMargins?: boolean;
}
export interface IAppBarDivider {
    className?: string;
    style?: CSSProperties;
}
