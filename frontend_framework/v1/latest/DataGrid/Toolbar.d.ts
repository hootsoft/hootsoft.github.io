import { ReactElement } from "react";
declare const DataGridToolbar: ({ hasColumnsButton, hasExport, hasDensitySelector, hasFilterButton }: IDataGridToolbar) => ReactElement;
export default DataGridToolbar;
export interface IDataGridToolbar {
    hasColumnsButton?: boolean;
    hasDensitySelector?: boolean;
    hasExport?: boolean;
    hasFilterButton?: boolean;
}
