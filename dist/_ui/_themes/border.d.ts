export interface BorderType {
    border?: {
        solid: number;
        position?: 'all' | 'left' | 'right' | 'top' | 'bottom';
        color?: string;
    };
}
export declare const BorderTheme: ({ border }: BorderType) => {
    border: string | undefined;
    borderBottom: string | undefined;
    borderTop: string | undefined;
    borderRight: string | undefined;
    borderLeft: string | undefined;
};
