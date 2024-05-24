/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, ReactNode } from "react";
import { SpaceType } from "../_themes/space";
import { FlexType } from "../_themes/flex";
import { ViewportTypes } from "../_themes/viewport";
import { ScrollType } from "../_themes/scroll";
import { BorderType } from "../_themes/border";
import { ShadowType } from "../_themes/boxShadow";
import { CursorType } from "../_themes/cursor";
interface Props extends HTMLAttributes<HTMLDivElement>, ViewportTypes, FlexType, SpaceType, BorderType, ShadowType, ScrollType, CursorType {
    children?: ReactNode;
    borderRadius?: number | string;
    backgroundColor?: string;
    transitionTime?: number;
    position: {
        top?: string | number;
        bottom?: string | number;
        left?: string | number;
        right?: string | number;
    };
    order?: number;
    axis?: {
        x?: string | number;
        y?: string | number;
    };
}
declare const Absolute: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>>;
export { Absolute };
