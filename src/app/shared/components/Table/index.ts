import React, {useEffect, createElement} from "react";
import {View} from "./view";
import {ITableProps} from "./model";
import {RangeContent} from "virtabulized/lib/ranges";
import {CeilLeftHeader} from "../ceils/CeilLeftHeader";
import {TableModel} from "virtabulized";
import {ICeilLeftHeader} from "../ceils/CeilLeftHeader/model";


export const Table = () => {

    const colWidths = [140, 140, 140, 200, 200, 200];
    const rowHeights = [60, 60, 60, 60, 60, 60, 60, 60, 60];

    const childrenLeftColumn: RangeContent[] = [
        {
            type: "cell",
            key: "left-header/1",
            dimensions: {cols: 1, rows: 1},
            render(): React.ReactElement{
                const props: ICeilLeftHeader = {
                    title: "Head"
                }
                return createElement(CeilLeftHeader, props)
            },
        },
        {

            type: "cell",
            key: "left-header/2",
            dimensions: {cols: 1, rows: 1},
            render(): React.ReactElement {
                const props: ICeilLeftHeader = {
                    title: "Head 2"
                }
                return createElement(CeilLeftHeader, props)
            }
        },

        {
            type: "cell",
            key: "left-content/4",
            dimensions: {cols: 1, rows: 1},
            render(): React.ReactElement {
                const props: ICeilLeftHeader = {
                    title: "Head 3"
                }
                return createElement(CeilLeftHeader, props)
            }
        }
    ]
    const childrenRightColumn: RangeContent[] = [
        {
            type: "horizontal",
            key: "right-column/header",
            stuck: true,
            getChildren(): RangeContent[] {
                return [
                    {
                        type: "cell",
                        key: "right-header/1",
                        dimensions: {cols: 1, rows: 1},
                        render(): React.ReactElement {
                            const props: ICeilLeftHeader = {
                                title: "Head"
                            }
                            return createElement(CeilLeftHeader, props)
                        }
                    },
                    {
                        type: "cell",
                        key: "right-header/2",
                        dimensions: {cols: 1, rows: 1},
                        render(): React.ReactElement {
                            const props: ICeilLeftHeader = {
                                title: "Head"
                            }
                            return createElement(CeilLeftHeader, props)
                        }
                    },
                    {
                        type: "cell",
                        key: "right-header/3",
                        dimensions: {cols: 1, rows: 1},
                        render(): React.ReactElement {
                            const props: ICeilLeftHeader = {
                                title: "Head"
                            }
                            return createElement(CeilLeftHeader, props)
                        }
                    },
                ]
            }
        },
        {
            type: "horizontal",
            key: "right-column/row1",
            getChildren(): RangeContent[] {
                return [
                    {
                        type: "cell",
                        key: "right-content/1",
                        dimensions: {cols: 1, rows: 1},
                        render(): React.ReactElement {
                            const props: ICeilLeftHeader = {
                                title: "Head"
                            }
                            return createElement(CeilLeftHeader, props)
                        }
                    },
                    {
                        type: "cell",
                        key: "right-content/2",
                        dimensions: {cols: 1, rows: 1},
                        render(): React.ReactElement {
                            const props: ICeilLeftHeader = {
                                title: "Head"
                            }
                            return createElement(CeilLeftHeader, props)
                        }
                    },
                    {
                        type: "cell",
                        key: "right-content/3",
                        dimensions: {cols: 1, rows: 1},
                        render(): React.ReactElement {
                            const props: ICeilLeftHeader = {
                                title: "Head"
                            }
                            return createElement(CeilLeftHeader, props)
                        }
                    },
                ]
            }
        },
        {
            type: "horizontal",
            key: "right-column/row2",
            getChildren(): RangeContent[] {
                return [
                    {
                        type: "cell",
                        key: "right-content/4",
                        dimensions: {cols: 1, rows: 1},
                        render(): React.ReactElement {
                            const props: ICeilLeftHeader = {
                                title: "Head"
                            }
                            return createElement(CeilLeftHeader, props)
                        }
                    },
                    {
                        type: "cell",
                        key: "right-content/5",
                        dimensions: {cols: 1, rows: 1},
                        render(): React.ReactElement {
                            const props: ICeilLeftHeader = {
                                title: "Head"
                            }
                            return createElement(CeilLeftHeader, props)
                        }
                    },
                    {
                        type: "cell",
                        key: "right-content/6",
                        dimensions: {cols: 1, rows: 1},
                        render(): React.ReactElement {
                            const props: ICeilLeftHeader = {
                                title: "Head"
                            }
                            return createElement(CeilLeftHeader, props)
                        }
                    },
                ]
            }
        }
    ]

    const model: TableModel = {
        colWidths,
        rowHeights,

        content: {
            type: "horizontal",
            key: "root",
            getChildren(): RangeContent[] {
                const leftColumn: RangeContent = {
                    type: "vertical",
                    key: "root/left-column",
                    stuck: true,
                    getChildren(): RangeContent[] {
                        return childrenLeftColumn;
                    }
                }
                const rightColumn: RangeContent = {
                    type: "vertical",
                    key: "root/right-column",
                    getChildren(): RangeContent[] {
                        return childrenRightColumn;
                    }
                }

                return [leftColumn, rightColumn];
            }

        }
    };

    const props: ITableProps = {
        tableModel: model,
        styles: {
            width: "800px",
            height: "500px"
        }
    }

    return createElement(View, props)
}
