import { CSSProperties, ReactNode } from "react";
import { StatusColourType } from "../Assets";
export interface IBadge {
    children?: ReactNode;
    text?: string;
    variant?: StatusColourType;
    className?: string;
    style?: CSSProperties;
    rounded?: boolean;
}
