import React, { ReactNode } from "react";
import { Size } from "..";
import { IModalBusy } from "./ModalBusy";
declare const ModalContainer: React.ForwardRefExoticComponent<IModalContainer & React.RefAttributes<HTMLDivElement>>;
export default ModalContainer;
declare type OnCloseReasonType = "backdropClick" | "escapeKeyDown";
export interface IModalContainer extends IModalBusy {
    children?: ReactNode;
    className?: string;
    open: boolean;
    onClose?: (event: unknown, reason: OnCloseReasonType) => void;
    size?: Size;
}
