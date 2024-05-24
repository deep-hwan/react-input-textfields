/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactElement, ReactNode } from "react";
type InputTypes = {
    children: ReactElement;
    label?: ReactNode;
    labelSize?: number | string;
    labelColor?: string;
    maxWidth?: number;
    minWidth?: number;
    important?: string;
} & HTMLAttributes<HTMLDivElement>;
export declare function Input({ label, labelSize, labelColor, minWidth, maxWidth, important, ...props }: InputTypes): import("@emotion/react/jsx-runtime").JSX.Element;
export declare namespace Input {
    var TextField: React.ForwardRefExoticComponent<{
        numberType?: "double" | "int" | undefined;
        tab?: TabType | undefined;
        error?: ErrorType | undefined;
        tolTip?: TolTipType | undefined;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType | undefined;
        edge?: React.ReactNode;
    } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & React.RefAttributes<HTMLInputElement>>;
    var Textarea: React.ForwardRefExoticComponent<{
        autoRaise?: boolean | undefined;
        textCountActive?: boolean | undefined;
        tab?: TabType | undefined;
        editorScroll?: boolean | undefined;
        error?: ErrorType | undefined;
        tolTip?: TolTipType | undefined;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType | undefined;
    } & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & React.RefAttributes<HTMLTextAreaElement>>;
    var PhoneNumberField: React.ForwardRefExoticComponent<{
        error?: ErrorType | undefined;
        tolTip?: TolTipType | undefined;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType | undefined;
    } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & React.RefAttributes<HTMLInputElement>>;
    var NumbericField: React.ForwardRefExoticComponent<{
        error?: ErrorType | undefined;
        tolTip?: TolTipType | undefined;
        edge?: React.ReactNode;
        value?: string | number | undefined;
        onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType | undefined;
    } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value" | "size"> & React.RefAttributes<HTMLInputElement>>;
    var SearchField: React.ForwardRefExoticComponent<{
        tab?: TabType | undefined;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType | undefined;
    } & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & React.RefAttributes<HTMLInputElement>>;
}
export {};
