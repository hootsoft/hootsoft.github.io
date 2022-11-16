import { CSSProperties, ReactElement } from "react";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { IDataGridToolbar } from "..";
export declare const defaultToolbarProps: IDataGridToolbar;
export declare const defaultShowToolbar = false;
declare const DataGrid: ({ columns, rows, pageSize, checkboxSelection, wrappingContainerStyle, loading, hasColumnsButton, hasDensitySelector, hasExport, hasFilterButton }: IDataGrid) => ReactElement;
export default DataGrid;
interface IDataGrid extends IDataGridToolbar {
    columns: GridColDef[];
    rows: object[];
    pageSize?: number;
    /** Specifies whether rows can be selected by checkbox. */
    checkboxSelection?: boolean;
    /**
     * Sets the style of the div wrapping the dataGrid.
     * For the grid to render correctly, a height and width must be set.
     * */
    wrappingContainerStyle?: CSSProperties;
    loading?: boolean;
}
export interface IDataGridColumns extends Omit<GridColDef, "field" & "headerName"> {
    /** The name of the field & column header, formatted to lowerCase. */
    fieldName: string;
    fieldLabel: string;
}
export declare type IDataGridRenderCellParams = GridRenderCellParams<unknown, any, unknown>;
