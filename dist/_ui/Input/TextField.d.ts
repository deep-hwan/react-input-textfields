/** @jsxImportSource @emotion/react */
import React from "react";
declare const TextField: React.ForwardRefExoticComponent<{
    numberType?: "double" | "int" | undefined;
    tab?: TabType | undefined;
    error?: ErrorType | undefined;
    tolTip?: TolTipType | undefined;
    sizes?: InputSizesType | undefined;
    themes?: ThemesType | undefined;
    edge?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & React.RefAttributes<HTMLInputElement>>;
export { TextField };
