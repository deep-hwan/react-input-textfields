"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowTheme = void 0;
var ShadowTheme = function (_a) {
    var _b, _c, _d, _e;
    var shadow = _a.shadow;
    var x = (_b = shadow === null || shadow === void 0 ? void 0 : shadow.x) !== null && _b !== void 0 ? _b : 0;
    var y = (_c = shadow === null || shadow === void 0 ? void 0 : shadow.y) !== null && _c !== void 0 ? _c : 2;
    var blur = (_d = shadow === null || shadow === void 0 ? void 0 : shadow.blur) !== null && _d !== void 0 ? _d : 20;
    var color = (_e = shadow === null || shadow === void 0 ? void 0 : shadow.color) !== null && _e !== void 0 ? _e : 'rgba(0,0,0,0.08)';
    return {
        boxShadow: shadow ? "".concat(x, "px ").concat(y, "px ").concat(blur, "px ").concat(color) : undefined,
    };
};
exports.ShadowTheme = ShadowTheme;
