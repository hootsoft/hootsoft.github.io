import React, { ReactNode } from "react";
declare const ModalBody: React.ForwardRefExoticComponent<IModalBody & React.RefAttributes<unknown>>;
export default ModalBody;
export interface IModalBody {
    children?: ReactNode;
    className?: string;
    id?: string;
    text?: string;
}
