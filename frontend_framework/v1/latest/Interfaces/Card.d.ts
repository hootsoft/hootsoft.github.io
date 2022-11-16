import { CSSProperties, ReactNode } from "react";
import { SxProps, Theme } from "@mui/material";
export interface ICardActions {
    children?: ReactNode;
    className?: string;
    disableSpacing?: boolean;
    sx?: SxProps<Theme>;
}
export interface ICardContainer {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    raised?: boolean;
    sx?: SxProps<Theme>;
}
export interface ICardContent {
    children?: ReactNode;
    className?: string;
    sx?: SxProps<Theme>;
}
export interface ICardHeader {
    className?: string;
    sx?: SxProps<Theme>;
    title?: string;
}
