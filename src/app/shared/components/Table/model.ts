import {TableModel} from "virtabulized";
import {CSSProperties} from "react";

export interface ITableProps {
    tableModel: TableModel,
    classNames?: string,
    styles?: CSSProperties
}
