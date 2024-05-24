/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from "react";
import { CursorType } from "../_themes/cursor";
import { SpaceType } from "../_themes/space";
import { ViewportTypes } from "../_themes/viewport";
import { FlexType } from "../_themes/flex";
import { BorderType } from "../_themes/border";
interface Props extends Omit<HTMLAttributes<HTMLDivElement | HTMLLIElement | HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement>, "color" | "disabled">, ViewportTypes, FlexType, BorderType, SpaceType, CursorType {
    as?: "div" | "li" | "span" | "button" | "a";
    children: ReactNode;
    txtSize?: number;
    txtColor?: string;
    disabledColor?: string;
    touchOpacity?: number;
    backgroundColor?: string;
    borderRadius?: number;
    href?: any;
    opacity?: number;
    disabled?: boolean;
}
export declare function TouchableOpacity(props: Props): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
