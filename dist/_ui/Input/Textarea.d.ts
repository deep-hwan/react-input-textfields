/** @jsxImportSource @emotion/react */
import React from "react";
declare const Textarea: React.ForwardRefExoticComponent<{
    autoRaise?: boolean | undefined;
    textCountActive?: boolean | undefined;
    tab?: TabType | undefined;
    editorScroll?: boolean | undefined;
    error?: ErrorType | undefined;
    tolTip?: TolTipType | undefined;
    sizes?: InputSizesType | undefined;
    themes?: ThemesType | undefined;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
