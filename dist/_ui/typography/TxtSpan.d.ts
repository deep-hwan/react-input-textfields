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
    size?: number;
    color?: string;
    lineHeight?: number;
    txtAlign?: "start" | "end" | "center";
    weight?: "lighter" | "normal" | "medium" | "bold";
    underline?: boolean;
}
export declare function TxtSpan(props: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
