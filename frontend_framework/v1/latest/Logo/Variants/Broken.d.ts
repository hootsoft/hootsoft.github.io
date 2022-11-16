import { ReactElement } from "react";
import { ILogoVariant } from "../..";
/** Used to demonstrate a "broken" state. */
declare const BrokenVariant: {
    ({ colour, style: svgStyle }: ILogoVariant): ReactElement;
    displayName: string;
};
export default BrokenVariant;
