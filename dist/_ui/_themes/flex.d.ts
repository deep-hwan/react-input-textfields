export interface FlexType {
    flex?: number | string;
    direction?: 'horizontal' | 'vertical' | 'horizontal-reverse' | 'vertical-reverse';
    align?: 'start' | 'end' | 'center' | 'stretch';
    crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around';
    alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    basis?: number | string;
    grow?: number;
    shrink?: number;
    gap?: number;
    crossGap?: number;
}
export declare const FlexTheme: ({ flex, direction, align, crossAlign, gap, crossGap, wrap, basis, grow, shrink, }: FlexType) => {
    display: string;
    flex: string | number | undefined;
    justifyContent: "start" | "end" | "center" | "space-between" | "space-around" | undefined;
    flexDirection: "row" | "column";
    alignItems: "start" | "end" | "center" | "stretch";
    rowGap: number;
    columnGap: number;
    flexWrap: "nowrap" | "wrap" | "wrap-reverse";
    flexBasis: string | number | undefined;
    flexGrow: number | undefined;
    flexShrink: number | undefined;
};
