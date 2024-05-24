export interface CursorType {
    cursor?: 'default' | 'grab' | 'pointer' | 'zoom';
}
export declare const CursorTheme: ({ cursor, onClick }: CursorType & {
    onClick?: any;
}) => {
    cursor: "default" | "grab" | "pointer" | "zoom" | undefined;
    userSelect: any;
};
