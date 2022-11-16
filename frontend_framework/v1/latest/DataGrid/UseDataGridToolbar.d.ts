import { Dispatch, SetStateAction } from "react";
import { IDataGridToolbar } from "..";
export default function useDataGridToolbar(setToolbarProps: Dispatch<SetStateAction<IDataGridToolbar>>, setShowToolbar: Dispatch<SetStateAction<boolean>>, hasColumnsButton?: boolean, hasDensitySelector?: boolean, hasExport?: boolean, hasFilterButton?: boolean): void;
