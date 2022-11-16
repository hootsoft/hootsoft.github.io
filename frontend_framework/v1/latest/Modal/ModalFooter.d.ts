import React, { ReactNode } from "react";
declare const ModalFooter: React.ForwardRefExoticComponent<IModalFooter & React.RefAttributes<unknown>>;
export default ModalFooter;
export interface IModalFooter {
    children?: ReactNode;
    className?: string;
    id?: string;
}
