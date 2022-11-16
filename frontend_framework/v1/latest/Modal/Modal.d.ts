/// <reference types="react" />
declare const Modal: {
    Container: import("react").ForwardRefExoticComponent<import("./ModalContainer").IModalContainer & import("react").RefAttributes<HTMLDivElement>>;
    Footer: import("react").ForwardRefExoticComponent<import("./ModalFooter").IModalFooter & import("react").RefAttributes<unknown>>;
    Header: {
        ({ title, subTitle, centerAlign, status }: import("./ModalHeader").IModalHeader): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | null;
        displayName: string;
    };
    Body: import("react").ForwardRefExoticComponent<import("./ModalBody").IModalBody & import("react").RefAttributes<unknown>>;
};
export default Modal;
