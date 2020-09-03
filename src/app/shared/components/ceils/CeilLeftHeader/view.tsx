import React from "react";
import {ICeilLeftHeader} from "./model";

import styles from "./styles.module.scss"

export const View: React.FC<ICeilLeftHeader> = ({title, children}) => {
    return <div className={styles.leftHeader}>
        <h4>{title}</h4>
        {children}
    </div>
}
