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
exports.TouchableOpacity = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var cursor_1 = require("../_themes/cursor");
var space_1 = require("../_themes/space");
var flex_1 = require("../_themes/flex");
var border_1 = require("../_themes/border");
function TouchableOpacity(props) {
    var _a;
    var _b = props.as, as = _b === void 0 ? "div" : _b, width = props.width, minWidth = props.minWidth, maxWidth = props.maxWidth, height = props.height, minHeight = props.minHeight, maxHeight = props.maxHeight, flex = props.flex, _c = props.direction, direction = _c === void 0 ? "horizontal" : _c, _d = props.align, align = _d === void 0 ? "center" : _d, crossAlign = props.crossAlign, wrap = props.wrap, gap = props.gap, crossGap = props.crossGap, border = props.border, opacity = props.opacity, cursor = props.cursor, _e = props.txtColor, txtColor = _e === void 0 ? "#4788f4" : _e, _f = props.txtSize, txtSize = _f === void 0 ? 14 : _f, disabledColor = props.disabledColor, touchOpacity = props.touchOpacity, backgroundColor = props.backgroundColor, borderRadius = props.borderRadius, padding = props.padding, margin = props.margin, disabled = props.disabled, rest = __rest(props, ["as", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "flex", "direction", "align", "crossAlign", "wrap", "gap", "crossGap", "border", "opacity", "cursor", "txtColor", "txtSize", "disabledColor", "touchOpacity", "backgroundColor", "borderRadius", "padding", "margin", "disabled"]);
    var spaceT = (0, space_1.SpaceTheme)({ padding: padding, margin: margin });
    var borderT = (0, border_1.BorderTheme)({ border: border });
    var cursorT = (0, cursor_1.CursorTheme)({ cursor: cursor, onClick: props.onClick });
    var viewT = { width: width, height: height, minWidth: minWidth, maxWidth: maxWidth, minHeight: minHeight, maxHeight: maxHeight };
    var FlexT = (0, flex_1.FlexTheme)({
        flex: flex,
        direction: direction,
        align: align !== null && align !== void 0 ? align : "center",
        crossAlign: crossAlign !== null && crossAlign !== void 0 ? crossAlign : "center",
        wrap: wrap,
        gap: gap,
        crossGap: crossGap,
    });
    var active = {
        "&:disabled": { color: disabledColor !== null && disabledColor !== void 0 ? disabledColor : "#ccc", cursor: "default" },
        "&:active": { opacity: (_a = (!!props.onClick && touchOpacity)) !== null && _a !== void 0 ? _a : 0.7 },
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [as === "div" && ((0, jsx_runtime_1.jsx)("div", __assign({ css: __assign(__assign(__assign(__assign(__assign(__assign({ position: "relative", whiteSpace: "nowrap", fontSize: txtSize ? "".concat(txtSize / 16, "rem") : "0.938rem", color: txtColor, transition: "0.1s ease-in-out", backgroundColor: backgroundColor, borderRadius: borderRadius, userSelect: "none", opacity: opacity }, viewT), FlexT), spaceT), borderT), cursorT), active) }, rest, { children: props.children }))), as === "li" && ((0, jsx_runtime_1.jsx)("li", __assign({ css: __assign(__assign(__assign(__assign(__assign(__assign({ position: "relative", whiteSpace: "nowrap", fontSize: txtSize ? "".concat(txtSize / 16, "rem") : "0.938rem", color: txtColor, transition: "0.1s ease-in-out", backgroundColor: backgroundColor, borderRadius: borderRadius, userSelect: "none", opacity: opacity }, viewT), FlexT), spaceT), borderT), cursorT), active) }, rest, { children: props.children }))), as === "span" && ((0, jsx_runtime_1.jsx)("span", __assign({ css: __assign(__assign(__assign(__assign(__assign(__assign({ position: "relative", whiteSpace: "nowrap", fontSize: txtSize ? "".concat(txtSize / 16, "rem") : "0.938rem", color: txtColor, transition: "0.1s ease-in-out", backgroundColor: backgroundColor, borderRadius: borderRadius, userSelect: "none", opacity: opacity }, viewT), FlexT), spaceT), borderT), cursorT), active) }, rest, { children: props.children }))), as === "button" && ((0, jsx_runtime_1.jsx)("button", __assign({ disabled: disabled, css: __assign(__assign(__assign(__assign(__assign({ position: "relative", whiteSpace: "nowrap", fontSize: txtSize ? "".concat(txtSize / 16, "rem") : "0.938rem", color: txtColor, transition: "0.1s ease-in-out", backgroundColor: backgroundColor, borderRadius: borderRadius, userSelect: "none", opacity: opacity, border: "none" }, viewT), FlexT), spaceT), cursorT), active) }, rest, { children: props.children })))] }));
}
exports.TouchableOpacity = TouchableOpacity;
