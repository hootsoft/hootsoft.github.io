import { ReactElement, ReactNode } from "react";
import { StatusColourType } from "../Assets";
/** Loading Gateway checks whether the page content has loading and determines whether to show it. */
declare const LoadingGateway: {
    ({ children, loading, text, type, spinnerVariant }: ILoadingGateway): ReactElement;
    displayName: string;
};
export default LoadingGateway;
export interface ILoadingGateway {
    children?: ReactNode;
    loading: boolean;
    type?: "text" | "spinner";
    text?: string;
    spinnerVariant?: StatusColourType;
}
