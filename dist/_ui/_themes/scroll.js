"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollTheme = void 0;
function ScrollTheme(_a) {
    var scroll = _a.scroll;
    var _b = scroll !== null && scroll !== void 0 ? scroll : {}, type = _b.type, bar = _b.bar;
    return {
        overflow: type !== null && type !== void 0 ? type : 'visible',
        '::-webkit-scrollbar': {
            display: bar ? 'flex' : 'none' !== null && 'none' !== void 0 ? 'none' : 'none',
            width: '4px',
            height: '4px',
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: '#cccccc',
            borderRadius: '100px',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#e2e2e2',
        },
        '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
        },
    };
}
exports.ScrollTheme = ScrollTheme;
