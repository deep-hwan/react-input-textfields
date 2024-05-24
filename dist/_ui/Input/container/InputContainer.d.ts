import { ReactNode } from "react";
declare function InputContainer({ id, children, label, labelSize, labelColor, minWidth, maxWidth, error, tolTip, important, ...props }: InputTypes & {
    children: ReactNode;
    id: string | number;
    error: ErrorType;
    tolTip: TolTipType;
}): import("@emotion/react/jsx-runtime").JSX.Element;
export { InputContainer };
