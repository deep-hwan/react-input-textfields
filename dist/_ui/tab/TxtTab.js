"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxtTab = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var cursor_1 = require("../_themes/cursor");
var space_1 = require("../_themes/space");
function TxtTab(props) {
    var _a = (0, react_1.useState)("window"), os = _a[0], setOs = _a[1];
    (0, react_1.useEffect)(function () {
        if (/Macintosh|iPhone|iPad|iPod/.test(navigator.userAgent))
            setOs("mac");
        else if (/Windows|Android/.test(navigator.userAgent))
            setOs("window");
        else
            setOs("window");
    }, [os]);
    var cursor = props.cursor, _b = props.color, color = _b === void 0 ? "#4788f4" : _b, _c = props.size, size = _c === void 0 ? 14 : _c, padding = props.padding, margin = props.margin, _d = props.weight, weight = _d === void 0 ? "normal" : _d, disabledColor = props.disabledColor, underline = props.underline, rest = __rest(props, ["cursor", "color", "size", "padding", "margin", "weight", "disabledColor", "underline"]);
    var TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: os === "window" ? "300" : "400" },
        normal: { fontWeight: 400 },
        medium: { fontWeight: os === "window" ? "500" : "600" },
        bold: { fontWeight: os === "window" ? "600" : "700" },
    };
    var spaceT = (0, space_1.SpaceTheme)({ padding: padding, margin: margin });
    var cursorT = (0, cursor_1.CursorTheme)({ cursor: cursor, onClick: props.onClick });
    return ((0, jsx_runtime_1.jsx)("button", __assign({ type: "button", css: __assign(__assign(__assign({ whiteSpace: "nowrap", fontWeight: TYPOGRAPH_WEIGHT[weight].fontWeight, fontSize: size ? "".concat(size / 16, "rem") : "0.938rem", color: color, textDecoration: underline && "underline", transition: "0.1s ease-in-out" }, spaceT), cursorT), { "&:disabled": { color: disabledColor !== null && disabledColor !== void 0 ? disabledColor : "#ccc", cursor: "default" }, "&:active": { opacity: 0.7 } }) }, rest, { children: props.children })));
}
exports.TxtTab = TxtTab;
