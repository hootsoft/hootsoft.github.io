import { CSSProperties, ReactElement } from "react";
declare type LogoVariant = "broken" | "default";
export interface LogoVariantProps {
    variant?: LogoVariant;
    colour?: string;
    style?: CSSProperties;
}
export declare type LogoProps = {
    className?: string;
    returnHome?: boolean;
} & LogoVariantProps;
declare const Logo: {
    ({ className, returnHome, ...variantProps }: LogoProps): ReactElement;
    displayName: string;
};
export default Logo;
