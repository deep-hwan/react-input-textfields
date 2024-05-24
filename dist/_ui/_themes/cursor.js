"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursorTheme = void 0;
var CursorTheme = function (_a) {
    var cursor = _a.cursor, onClick = _a.onClick;
    return {
        cursor: onClick ? 'pointer' : cursor,
        userSelect: onClick && 'none',
    };
};
exports.CursorTheme = CursorTheme;
