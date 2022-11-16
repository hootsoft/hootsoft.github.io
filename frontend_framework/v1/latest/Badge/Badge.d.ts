import { ReactElement } from "react";
import { IBadge } from "..";
declare const Badge: {
    ({ children, className, variant, text, rounded, style, ...props }: IBadge): ReactElement;
    displayName: string;
};
export default Badge;
