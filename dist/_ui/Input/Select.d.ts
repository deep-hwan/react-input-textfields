/** @jsxImportSource @emotion/react */
import React from "react";
import { Option } from "./Option";
declare const Select: React.ForwardRefExoticComponent<{
    label?: React.ReactNode;
    labelSize?: string | number | undefined;
    labelColor?: string | undefined;
    maxWidth?: number | undefined;
    minWidth?: number | undefined;
    important?: string | undefined;
    renderItem: (item: any, index?: number | undefined) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    options: any[];
    placeholder?: string | undefined;
    error?: ErrorType | undefined;
    tolTip?: TolTipType | undefined;
    selectIconColor?: string | undefined;
    selectIconSize?: number | undefined;
    sizes?: InputSizesType | undefined;
    themes?: ThemesType | undefined;
} & React.SelectHTMLAttributes<HTMLSelectElement> & React.RefAttributes<HTMLSelectElement>> & {
    Option: typeof Option;
};
export { Select };
