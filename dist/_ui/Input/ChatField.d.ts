/** @jsxImportSource @emotion/react */
import React from "react";
declare const ChatField: React.ForwardRefExoticComponent<{
    fileTab?: {
        loading?: boolean | undefined;
        disabled?: boolean | undefined;
        accept?: string | undefined;
        onChange: (e: any) => void;
        onClick?: (() => void) | undefined;
        iconColor?: string | undefined;
    } | undefined;
    uploadTab?: {
        loading?: boolean | undefined;
        disabled?: boolean | undefined;
        onClick: () => void;
        iconColor?: string | undefined;
    } | undefined;
    themes?: {
        backgroundColor?: string | undefined;
        borderColor?: string | undefined;
        txtColor?: string | undefined;
        placeholderColor?: string | undefined;
    } | undefined;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & React.RefAttributes<HTMLTextAreaElement>>;
export { ChatField };
