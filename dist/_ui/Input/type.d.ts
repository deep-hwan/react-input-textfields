import { ChangeEvent, HTMLAttributes, InputHTMLAttributes, ReactElement, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
declare global {
    type InputTypes = {
        children: ReactElement;
        label?: ReactNode;
        labelSize?: number | string;
        labelColor?: string;
        maxWidth?: number;
        minWidth?: number;
        important?: string;
    } & HTMLAttributes<HTMLDivElement>;
    type TabType = {
        onClick?: any;
        name?: string;
        size?: number;
        color?: string;
        disabled?: boolean;
    };
    type ErrorType = {
        error?: boolean;
        message?: string;
        messageColor?: string;
        messageSize?: string | number;
    };
    type TolTipType = {
        description?: string | boolean;
        color?: string;
        size?: string | number;
    };
    type ThemeType = {
        backgroundColor?: string;
        borderColor?: string;
        txtColor?: string;
        edgeColor?: string;
        placeholderColor?: string;
    };
    type ThemesType = {
        default?: ThemeType | undefined;
        error?: ThemeType | undefined;
        disabled?: ThemeType | undefined;
        focus?: ThemeType | undefined;
    };
    type InputSizesType = {
        width?: string | number | "100%" | "50%";
        minWidth?: string | number;
        maxWidth?: string | number;
        height?: string | number | "100%";
        minHeight?: string | number;
        maxHeight?: string | number;
        borderRadius?: string | number;
        padding?: string | number;
        inputSize?: number | string;
        edgeSize?: number | string;
        borderBottom?: string;
    };
    type FieldType = {
        numberType?: "int" | "double";
        tab?: TabType;
        error?: ErrorType;
        tolTip?: TolTipType;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType;
        edge?: ReactNode;
    } & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
    type EditorType = {
        autoRaise?: boolean;
        textCountActive?: boolean;
        tab?: TabType;
        editorScroll?: boolean;
        error?: ErrorType;
        tolTip?: TolTipType;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType;
    } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">;
    type PhoneNumberType = {
        error?: ErrorType;
        tolTip?: TolTipType;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType;
    } & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
    type NumbericType = {
        error?: ErrorType;
        tolTip?: TolTipType;
        edge?: ReactNode;
        value?: string | number;
        onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType;
    } & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "onChange">;
    type SearchType = {
        tab?: TabType;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType;
    } & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
    type SelectType = {
        label?: ReactNode;
        labelSize?: number | string;
        labelColor?: string;
        maxWidth?: number;
        minWidth?: number;
        important?: string;
        renderItem: (item: any, index?: number) => ReactElement;
        options: any[];
        placeholder?: string;
        error?: ErrorType;
        tolTip?: TolTipType;
        selectIconColor?: string;
        selectIconSize?: number;
        sizes?: InputSizesType | undefined;
        themes?: ThemesType;
    } & SelectHTMLAttributes<HTMLSelectElement>;
    type ChatFieldType = {
        fileTab?: {
            loading?: boolean;
            disabled?: boolean;
            accept?: string;
            onChange: (e: any) => void;
            onClick?: () => void;
            iconColor?: string;
        };
        uploadTab?: {
            loading?: boolean;
            disabled?: boolean;
            onClick: () => void;
            iconColor?: string;
        };
        themes?: {
            backgroundColor?: string;
            borderColor?: string;
            txtColor?: string;
            placeholderColor?: string;
        };
    } & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size">;
}
