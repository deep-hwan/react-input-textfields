export interface ScrollType {
    scroll?: {
        type?: 'visible' | 'auto' | 'scroll' | 'hidden';
        bar?: boolean;
    };
}
export declare function ScrollTheme({ scroll }: ScrollType): {
    overflow: "auto" | "hidden" | "visible" | "scroll";
    '::-webkit-scrollbar': {
        display: string;
        width: string;
        height: string;
    };
    '::-webkit-scrollbar-track': {
        backgroundColor: string;
    };
    '::-webkit-scrollbar-thumb': {
        backgroundColor: string;
        borderRadius: string;
    };
    '::-webkit-scrollbar-thumb:hover': {
        background: string;
    };
    '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
        width: number;
        height: number;
        backgroundColor: string;
    };
};
