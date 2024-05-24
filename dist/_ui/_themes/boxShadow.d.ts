export interface ShadowType {
    shadow?: {
        x?: number;
        y?: number;
        blur?: number;
        color?: string;
    };
}
export declare const ShadowTheme: ({ shadow }: ShadowType) => {
    boxShadow: string | undefined;
};
