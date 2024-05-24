/** @jsxImportSource @emotion/react */
import React from "react";
declare const ChatField: React.ForwardRefExoticComponent<{
    fileTab?: {
        active?: boolean | undefined;
        iconColor?: string | undefined;
        disabled?: boolean | undefined;
        accept?: string | undefined;
        onChange?: ((e: any) => void) | undefined;
    } | undefined;
    uploadTab?: {
        iconColor?: string | undefined;
        disabled?: boolean | undefined;
        onClick: () => void;
    } | undefined;
    themes?: {
        backgroundColor?: string | undefined;
        borderColor?: string | undefined;
        txtColor?: string | undefined;
        placeholderColor?: string | undefined;
    } | undefined;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & React.RefAttributes<HTMLTextAreaElement>>;
export { ChatField };
