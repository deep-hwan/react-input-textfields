/** @jsxImportSource @emotion/react */
import React from "react";
declare const NumbericField: React.ForwardRefExoticComponent<{
    error?: ErrorType | undefined;
    tolTip?: TolTipType | undefined;
    edge?: React.ReactNode;
    value?: string | number | undefined;
    onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    sizes?: InputSizesType | undefined;
    themes?: ThemesType | undefined;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "size"> & React.RefAttributes<HTMLInputElement>>;
export { NumbericField };
