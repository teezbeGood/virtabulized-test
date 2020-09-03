import React from "react";
import {VirTableScroll} from "virtabulized";
import {ITableProps} from "./model";


export const View: React.FC<ITableProps> = ({ tableModel, styles}) => {
    return (
        <VirTableScroll model={tableModel} style = {styles}/>
    );
}
