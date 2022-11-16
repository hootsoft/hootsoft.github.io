import { ReactElement } from "react";
import { IIcon } from "..";
declare const Icon: {
    ({ type, className, ...props }: IIcon): ReactElement | null;
    displayName: string;
};
export default Icon;
