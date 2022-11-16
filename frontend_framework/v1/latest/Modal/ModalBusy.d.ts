import { ReactElement } from "react";
declare const ModalBusy: ({ busy }: IModalBusy) => ReactElement | null;
export default ModalBusy;
export interface IModalBusy {
    busy?: string | boolean;
}
