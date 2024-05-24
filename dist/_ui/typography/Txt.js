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
exports.Txt = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var space_1 = require("../_themes/space");
var cursor_1 = require("../_themes/cursor");
function Txt(props) {
    var _a;
    var _b = (0, react_1.useState)("window"), os = _b[0], setOs = _b[1];
    (0, react_1.useEffect)(function () {
        if (/Macintosh|iPhone|iPad|iPod/.test(navigator.userAgent))
            setOs("mac");
        else if (/Windows|Android/.test(navigator.userAgent))
            setOs("window");
        else
            setOs("window");
    }, [os]);
    var _c = props.as, as = _c === void 0 ? "p" : _c, _d = props.color, color = _d === void 0 ? "#444" : _d, size = props.size, weight = props.weight, _e = props.whiteSpace, whiteSpace = _e === void 0 ? "pre-line" : _e, cursor = props.cursor, underline = props.underline, _f = props.ellipsis, ellipsis = _f === void 0 ? { ellipsis: false } : _f, lineHeight = props.lineHeight, _g = props.txtAlign, txtAlign = _g === void 0 ? "start" : _g, _h = props.padding, padding = _h === void 0 ? { all: 0 } : _h, _j = props.margin, margin = _j === void 0 ? { all: 0 } : _j, rest = __rest(props, ["as", "color", "size", "weight", "whiteSpace", "cursor", "underline", "ellipsis", "lineHeight", "txtAlign", "padding", "margin"]);
    var TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: os === "window" ? "300" : "400" },
        normal: { fontWeight: 400 },
        medium: { fontWeight: os === "window" ? "500" : "600" },
        bold: { fontWeight: os === "window" ? "700" : "700" },
    };
    var spaceT = (0, space_1.SpaceTheme)({ padding: padding, margin: margin });
    var cursorT = (0, cursor_1.CursorTheme)({ cursor: cursor, onClick: props.onClick });
    var ellipsisT = {
        maxWidth: (_a = ellipsis.width) !== null && _a !== void 0 ? _a : "auto",
        display: "-webkit-box",
        overflow: "hidden",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: ellipsis.line,
    };
    var asTypeTheme = function (_a) {
        var s = _a.s, w = _a.w;
        return __assign(__assign(__assign({ fontWeight: TYPOGRAPH_WEIGHT[w].fontWeight, fontSize: s ? "".concat(s / 16, "rem") : "0.938rem", whiteSpace: ellipsis.ellipsis ? "normal" : whiteSpace, color: color, lineHeight: lineHeight, textAlign: txtAlign !== null && txtAlign !== void 0 ? txtAlign : "start", textDecoration: underline && "underline", transition: "0.3s ease-in-out" }, cursorT), (!ellipsis.ellipsis && spaceT)), (ellipsis.ellipsis && ellipsisT));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [as === "h1" && ((0, jsx_runtime_1.jsx)("h1", __assign({ css: asTypeTheme({ s: size !== null && size !== void 0 ? size : 52, w: weight !== null && weight !== void 0 ? weight : "bold" }) }, rest, { children: props.children }))), as === "h2" && ((0, jsx_runtime_1.jsx)("h2", __assign({ css: asTypeTheme({ s: size !== null && size !== void 0 ? size : 44, w: weight !== null && weight !== void 0 ? weight : "bold" }) }, rest, { children: props.children }))), as === "h3" && ((0, jsx_runtime_1.jsx)("h3", __assign({ css: asTypeTheme({ s: size !== null && size !== void 0 ? size : 36, w: weight !== null && weight !== void 0 ? weight : "bold" }) }, rest, { children: props.children }))), as === "h4" && ((0, jsx_runtime_1.jsx)("h4", __assign({ css: asTypeTheme({ s: size !== null && size !== void 0 ? size : 32, w: weight !== null && weight !== void 0 ? weight : "bold" }) }, rest, { children: props.children }))), as === "h5" && ((0, jsx_runtime_1.jsx)("h5", __assign({ css: asTypeTheme({ s: size !== null && size !== void 0 ? size : 28, w: weight !== null && weight !== void 0 ? weight : "bold" }) }, rest, { children: props.children }))), as === "h6" && ((0, jsx_runtime_1.jsx)("h6", __assign({ css: asTypeTheme({ s: size !== null && size !== void 0 ? size : 26, w: weight !== null && weight !== void 0 ? weight : "bold" }) }, rest, { children: props.children }))), as === "b" && ((0, jsx_runtime_1.jsx)("b", __assign({ css: asTypeTheme({ s: size !== null && size !== void 0 ? size : 20, w: weight !== null && weight !== void 0 ? weight : "bold" }) }, rest, { children: props.children }))), as === "strong" && ((0, jsx_runtime_1.jsx)("strong", __assign({ css: asTypeTheme({ s: size !== null && size !== void 0 ? size : 18, w: weight !== null && weight !== void 0 ? weight : "medium" }) }, rest, { children: props.children }))), as === "p" && ((0, jsx_runtime_1.jsx)("p", __assign({ css: asTypeTheme({ s: size !== null && size !== void 0 ? size : 15, w: weight !== null && weight !== void 0 ? weight : "normal" }) }, rest, { children: props.children })))] }));
}
exports.Txt = Txt;
