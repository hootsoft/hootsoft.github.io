/// <reference types="react" />
declare const _default: {
    Branding: {
        ({ logo, title }: import("..").IAppBarBranding): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        displayName: string;
    };
    Button: {
        ({ "aria-label": label, children, className, onClick, text }: import("..").IAppBarButton): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        displayName: string;
    };
    Container: {
        ({ children, useContainerMargins }: import("..").IAppBarContainer): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        DisplayName: string;
    };
    Divider: {
        ({ className, ...props }: import("..").IAppBarDivider): import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
        displayName: string;
    };
};
export default _default;
