import { GridSpacing } from "@mui/material";
import { CSSProperties, ReactNode } from "react";
export interface IGrid {
    children?: ReactNode;
    className?: string;
    container?: boolean;
    spacing?: GridSpacing;
    item?: boolean;
    xs?: GridColumnInputType;
    sm?: GridColumnInputType;
    md?: GridColumnInputType;
    lg?: GridColumnInputType;
    xl?: GridColumnInputType;
    direction?: GridDirectionType;
    style?: CSSProperties;
    panel?: boolean;
    id?: string;
    rowSpacing?: GridSpacingType;
    columnSpacing?: GridSpacingType;
    alignItems?: GridAlignItemsType;
    justifyContent?: GridJustifyContentType;
}
declare const ColumnInputArray: readonly [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto", true];
declare type GridColumnInputType = typeof ColumnInputArray[number];
declare type GridDirectionType = "column" | "row";
declare type GridSpacingType = GridSpacing | Array<GridSpacing | null> | {
    [key: string]: GridSpacing | null;
};
declare type GridAlignItemsType = "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
declare type GridJustifyContentType = "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
export {};
