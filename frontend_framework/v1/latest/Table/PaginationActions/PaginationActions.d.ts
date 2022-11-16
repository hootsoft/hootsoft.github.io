import { ReactElement } from "react";
import { ITablePaginationActions } from "../..";
declare const TablePaginationActions: {
    ({ count, page, rowsPerPage, onPageChange }: ITablePaginationActions): ReactElement;
    displayName: string;
};
export default TablePaginationActions;
