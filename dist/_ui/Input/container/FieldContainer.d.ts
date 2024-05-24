/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";
type Types = {
    children: ReactNode;
    edge?: ReactNode;
    tab?: TabType;
    sizes?: InputSizesType;
    themes?: ThemesType;
    events?: {
        error?: ErrorType;
        disabled?: boolean;
    };
};
declare function FieldContainer(props: Types): import("@emotion/react/jsx-runtime").JSX.Element;
export { FieldContainer };
