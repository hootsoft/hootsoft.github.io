import { ReactElement } from "react";
import { IGrid } from "..";
declare const Grid: {
    ({ children, panel, ...props }: IGrid): ReactElement;
    displayName: string;
};
export default Grid;
