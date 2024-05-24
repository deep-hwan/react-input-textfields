import { OptionHTMLAttributes, ReactNode } from 'react';
interface Props extends OptionHTMLAttributes<HTMLOptionElement> {
    children: ReactNode;
}
export declare function Option({ children, ...rest }: Props): import("react/jsx-runtime").JSX.Element;
export {};
