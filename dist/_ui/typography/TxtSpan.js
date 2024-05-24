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
exports.TxtSpan = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var space_1 = require("../_themes/space");
var cursor_1 = require("../_themes/cursor");
function TxtSpan(props) {
    var _a = (0, react_1.useState)("window"), os = _a[0], setOs = _a[1];
    (0, react_1.useEffect)(function () {
        if (/Macintosh|iPhone|iPad|iPod/.test(navigator.userAgent))
            setOs("mac");
        else if (/Windows|Android/.test(navigator.userAgent))
            setOs("window");
        else
            setOs("window");
    }, [os]);
    var _b = props.color, color = _b === void 0 ? "#888" : _b, _c = props.size, size = _c === void 0 ? 13 : _c, weight = props.weight, cursor = props.cursor, underline = props.underline, lineHeight = props.lineHeight, _d = props.txtAlign, txtAlign = _d === void 0 ? "start" : _d, _e = props.padding, padding = _e === void 0 ? { all: 0 } : _e, _f = props.margin, margin = _f === void 0 ? { all: 0 } : _f, rest = __rest(props, ["color", "size", "weight", "cursor", "underline", "lineHeight", "txtAlign", "padding", "margin"]);
    var TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: os === "window" ? "300" : "400" },
        normal: { fontWeight: 400 },
        medium: { fontWeight: os === "window" ? "500" : "600" },
        bold: { fontWeight: os === "window" ? "700" : "700" },
    };
    var spaceT = (0, space_1.SpaceTheme)({ padding: padding, margin: margin });
    var cursorT = (0, cursor_1.CursorTheme)({ cursor: cursor, onClick: props.onClick });
    return ((0, jsx_runtime_1.jsx)("span", __assign({ css: __assign(__assign({ fontWeight: TYPOGRAPH_WEIGHT[weight !== null && weight !== void 0 ? weight : "normal"].fontWeight, fontSize: size ? "".concat(size / 16, "rem") : "0.938rem", whiteSpace: "nowrap", color: color, lineHeight: lineHeight, textAlign: txtAlign !== null && txtAlign !== void 0 ? txtAlign : "start", transition: "0.3s ease-in-out", textDecoration: underline && "underline" }, spaceT), cursorT) }, rest, { children: props.children })));
}
exports.TxtSpan = TxtSpan;
