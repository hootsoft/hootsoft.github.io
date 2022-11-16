import { Dispatch, SetStateAction } from "react";
import { IDataGridColumns } from "./DataGrid";
/** Maps custom column properties and applies column defaults. */
export default function useDataGridColumns(rawColumns: IDataGridColumns[], setColumns: Dispatch<SetStateAction<IDataGridColumns[]>>): void;
