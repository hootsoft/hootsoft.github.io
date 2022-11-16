import { CSSProperties } from "react";
export interface ILogoVariant {
    variant?: LogoVariantType;
    colour?: string;
    style?: CSSProperties;
}
export interface ILogo extends ILogoVariant {
    className?: string;
    returnHome?: boolean;
    id?: string;
}
declare type LogoVariantType = "broken" | "default";
export {};
