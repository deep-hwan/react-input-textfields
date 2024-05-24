/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes, ReactNode } from "react";
import { CursorType } from "../_themes/cursor";
import { SpaceType } from "../_themes/space";
interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">, SpaceType, CursorType {
    children: ReactNode;
    size?: number;
    color?: string;
    disabledColor?: string;
    lineHeight?: number;
    txtAlign?: "start" | "end" | "center";
    weight?: "lighter" | "normal" | "medium" | "bold";
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
    underline?: boolean;
}
export declare function TxtTab(props: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
