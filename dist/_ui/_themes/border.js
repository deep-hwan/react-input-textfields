"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderTheme = void 0;
var BorderTheme = function (_a) {
    var border = _a.border;
    return {
        border: !(border === null || border === void 0 ? void 0 : border.position) || (border === null || border === void 0 ? void 0 : border.position) === 'all'
            ? "".concat(border === null || border === void 0 ? void 0 : border.solid, "px solid ").concat(border === null || border === void 0 ? void 0 : border.color)
            : undefined,
        borderBottom: (border === null || border === void 0 ? void 0 : border.position) === 'bottom' ? "".concat(border === null || border === void 0 ? void 0 : border.solid, "px solid ").concat(border === null || border === void 0 ? void 0 : border.color) : undefined,
        borderTop: (border === null || border === void 0 ? void 0 : border.position) === 'top' ? "".concat(border === null || border === void 0 ? void 0 : border.solid, "px solid ").concat(border === null || border === void 0 ? void 0 : border.color) : undefined,
        borderRight: (border === null || border === void 0 ? void 0 : border.position) === 'right' ? "".concat(border === null || border === void 0 ? void 0 : border.solid, "px solid ").concat(border === null || border === void 0 ? void 0 : border.color) : undefined,
        borderLeft: (border === null || border === void 0 ? void 0 : border.position) === 'left' ? "".concat(border === null || border === void 0 ? void 0 : border.solid, "px solid ").concat(border === null || border === void 0 ? void 0 : border.color) : undefined,
    };
};
exports.BorderTheme = BorderTheme;
