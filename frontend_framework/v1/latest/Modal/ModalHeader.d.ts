import { ReactElement } from "react";
import { StatusColourType } from "../Assets";
declare const ModalHeader: {
    ({ title, subTitle, centerAlign, status }: IModalHeader): ReactElement | null;
    displayName: string;
};
export default ModalHeader;
export interface IModalHeader {
    title?: string;
    subTitle?: string;
    centerAlign?: boolean;
    status?: StatusColourType;
}
