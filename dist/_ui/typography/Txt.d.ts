/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from "react";
import { SpaceType } from "../_themes/space";
import { CursorType } from "../_themes/cursor";
interface Props extends HTMLAttributes<HTMLElement>, SpaceType, CursorType {
    children: ReactNode;
    ellipsis?: {
        ellipsis?: boolean;
        line?: number;
        width?: number;
    };
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "b" | "p";
    size?: number;
    color?: string;
    lineHeight?: number;
    txtAlign?: "start" | "end" | "center";
    weight?: "lighter" | "normal" | "medium" | "bold";
    whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
    underline?: boolean;
}
export declare function Txt(props: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
