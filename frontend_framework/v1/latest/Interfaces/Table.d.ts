import { TableCellBaseProps } from "@mui/material";
import { CSSProperties, ElementType, ReactNode, MouseEvent, AriaRole } from "react";
export interface ITableBody {
    children: ReactNode;
}
export interface ITableCell {
    align?: TableAlignType;
    children?: ReactNode;
    component?: ElementType<TableCellBaseProps>;
    id?: string;
    padding?: TablePaddingType;
    scope?: TableCellBaseProps["scope"];
    style?: CSSProperties;
}
export interface ITableContainer {
    children: ReactNode;
    dense?: boolean;
}
export interface ITableFooter {
    children: ReactNode;
}
export interface ITableHeader {
    children: ReactNode;
}
export interface ITablePaginationActions {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: MouseEvent<HTMLButtonElement>, newPage: number) => void;
}
export interface ITableRow {
    children: ReactNode;
    hover?: boolean;
    onClick?: (e: MouseEvent) => void;
    style?: CSSProperties;
    role?: AriaRole;
    tabIndex?: number;
    selected?: boolean;
}
declare type TableAlignType = "inherit" | "left" | "center" | "right" | "justify";
declare type TablePaddingType = "normal" | "checkbox" | "none";
export {};
