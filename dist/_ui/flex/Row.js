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
exports.Row = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var space_1 = require("../_themes/space");
var flex_1 = require("../_themes/flex");
var scroll_1 = require("../_themes/scroll");
var border_1 = require("../_themes/border");
var boxShadow_1 = require("../_themes/boxShadow");
var cursor_1 = require("../_themes/cursor");
var Row = (0, react_1.forwardRef)(function (props, ref) {
    var zIndex = props.zIndex, width = props.width, minWidth = props.minWidth, maxWidth = props.maxWidth, height = props.height, minHeight = props.minHeight, maxHeight = props.maxHeight, backgroundColor = props.backgroundColor, borderRadius = props.borderRadius, transitionTime = props.transitionTime, flex = props.flex, direction = props.direction, align = props.align, crossAlign = props.crossAlign, wrap = props.wrap, gap = props.gap, crossGap = props.crossGap, basis = props.basis, grow = props.grow, shrink = props.shrink, padding = props.padding, margin = props.margin, scroll = props.scroll, border = props.border, shadow = props.shadow, cursor = props.cursor, rest = __rest(props, ["zIndex", "width", "minWidth", "maxWidth", "height", "minHeight", "maxHeight", "backgroundColor", "borderRadius", "transitionTime", "flex", "direction", "align", "crossAlign", "wrap", "gap", "crossGap", "basis", "grow", "shrink", "padding", "margin", "scroll", "border", "shadow", "cursor"]);
    var FlexT = (0, flex_1.FlexTheme)({
        flex: flex,
        direction: direction !== null && direction !== void 0 ? direction : "horizontal",
        align: align !== null && align !== void 0 ? align : "stretch",
        crossAlign: crossAlign,
        wrap: wrap,
        gap: gap,
        crossGap: crossGap,
        basis: basis,
        grow: grow,
        shrink: shrink,
    });
    var spaceT = (0, space_1.SpaceTheme)({ padding: padding, margin: margin });
    var scrollT = (0, scroll_1.ScrollTheme)({ scroll: scroll });
    var borderT = (0, border_1.BorderTheme)({ border: border });
    var shadowT = (0, boxShadow_1.ShadowTheme)({ shadow: shadow });
    var cursorT = (0, cursor_1.CursorTheme)({ cursor: cursor, onClick: rest.onClick });
    return ((0, jsx_runtime_1.jsx)("div", __assign({ ref: ref, css: __assign(__assign(__assign(__assign(__assign(__assign({ zIndex: zIndex, width: width !== null && width !== void 0 ? width : "100%", minWidth: minWidth, maxWidth: maxWidth, height: height, minHeight: minHeight, maxHeight: maxHeight, position: "relative", backgroundColor: backgroundColor, borderRadius: borderRadius, transition: "".concat(transitionTime !== null && transitionTime !== void 0 ? transitionTime : 0, "s ease-in-out") }, FlexT), spaceT), scrollT), borderT), shadowT), cursorT) }, rest, { children: rest.children })));
});
exports.Row = Row;
