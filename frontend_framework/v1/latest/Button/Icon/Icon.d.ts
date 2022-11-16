import { CSSProperties, ReactElement } from "react";
import { IconType } from "../..";
declare const Icon: {
    ({ icon, text, ...props }: IButtonIcon): ReactElement;
    displayName: string;
};
export default Icon;
interface IButtonIcon {
    icon: IconType;
    text?: string;
    style?: CSSProperties;
}
