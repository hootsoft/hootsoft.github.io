import { ReactElement } from "react";
import { Size } from "..";
import { StatusColourType } from "../Assets";
export declare type SpinnerProps = {
    center?: "margin" | "relative" | "absolute";
    className?: string;
    size?: Size;
    speed?: "slow" | "regular" | "fast";
    variant?: StatusColourType;
    /** The value applied to the width will also be applied to the height for the spinner to retain its aspect ratio  */
    width?: string;
};
declare const Spinner: {
    ({ className, center, variant, width, size, speed }: SpinnerProps): ReactElement;
    displayName: string;
};
export default Spinner;
