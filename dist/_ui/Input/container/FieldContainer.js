"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldContainer = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var input_1 = require("../../_themes/input");
var react_2 = require("@emotion/react");
var TxtTab_1 = require("../../tab/TxtTab");
var Row_1 = require("../../flex/Row");
function FieldContainer(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var children = props.children, edge = props.edge, tab = props.tab, sizes = props.sizes, themes = props.themes, events = props.events;
    var disabled = (events !== null && events !== void 0 ? events : {}).disabled;
    var error = (_a = events === null || events === void 0 ? void 0 : events.error) === null || _a === void 0 ? void 0 : _a.error;
    var _r = (0, react_1.useState)(false), focus = _r[0], setFocus = _r[1];
    var handleFocus = function () {
        if (!disabled)
            setFocus(true);
    };
    var handleBlur = function () {
        if (!disabled)
            setFocus(false);
    };
    var inputEdgeColor = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (focus && !error)
            return (_b = (_a = themes === null || themes === void 0 ? void 0 : themes.focus) === null || _a === void 0 ? void 0 : _a.edgeColor) !== null && _b !== void 0 ? _b : "#999";
        if (disabled)
            return (_d = (_c = themes === null || themes === void 0 ? void 0 : themes.disabled) === null || _c === void 0 ? void 0 : _c.edgeColor) !== null && _d !== void 0 ? _d : "#999";
        if (error)
            return (_f = (_e = themes === null || themes === void 0 ? void 0 : themes.error) === null || _e === void 0 ? void 0 : _e.edgeColor) !== null && _f !== void 0 ? _f : "#999";
        return (_h = (_g = themes === null || themes === void 0 ? void 0 : themes.default) === null || _g === void 0 ? void 0 : _g.edgeColor) !== null && _h !== void 0 ? _h : "#888";
    };
    var borderColor = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (focus && !error)
            return (_b = (_a = themes === null || themes === void 0 ? void 0 : themes.focus) === null || _a === void 0 ? void 0 : _a.borderColor) !== null && _b !== void 0 ? _b : "#b9d0e4";
        if (disabled)
            return (_d = (_c = themes === null || themes === void 0 ? void 0 : themes.disabled) === null || _c === void 0 ? void 0 : _c.borderColor) !== null && _d !== void 0 ? _d : "#eee";
        if (error)
            return (_f = (_e = themes === null || themes === void 0 ? void 0 : themes.error) === null || _e === void 0 ? void 0 : _e.borderColor) !== null && _f !== void 0 ? _f : "#FF6767";
        return (_h = (_g = themes === null || themes === void 0 ? void 0 : themes.default) === null || _g === void 0 ? void 0 : _g.borderColor) !== null && _h !== void 0 ? _h : "#e0e0e0";
    };
    var backgroundColor = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (focus && !error)
            return (_b = (_a = themes === null || themes === void 0 ? void 0 : themes.focus) === null || _a === void 0 ? void 0 : _a.backgroundColor) !== null && _b !== void 0 ? _b : "#f8f9fc";
        if (disabled)
            return (_d = (_c = themes === null || themes === void 0 ? void 0 : themes.disabled) === null || _c === void 0 ? void 0 : _c.backgroundColor) !== null && _d !== void 0 ? _d : "#f5f5f5";
        if (error)
            return (_f = (_e = themes === null || themes === void 0 ? void 0 : themes.error) === null || _e === void 0 ? void 0 : _e.backgroundColor) !== null && _f !== void 0 ? _f : "#fffbfb";
        return (_h = (_g = themes === null || themes === void 0 ? void 0 : themes.default) === null || _g === void 0 ? void 0 : _g.backgroundColor) !== null && _h !== void 0 ? _h : "#fff";
    };
    var colorTheme = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (focus && !error)
            return (_b = (_a = themes === null || themes === void 0 ? void 0 : themes.focus) === null || _a === void 0 ? void 0 : _a.txtColor) !== null && _b !== void 0 ? _b : "#555";
        if (disabled)
            return (_d = (_c = themes === null || themes === void 0 ? void 0 : themes.disabled) === null || _c === void 0 ? void 0 : _c.txtColor) !== null && _d !== void 0 ? _d : "#797979";
        if (error)
            return (_f = (_e = themes === null || themes === void 0 ? void 0 : themes.error) === null || _e === void 0 ? void 0 : _e.txtColor) !== null && _f !== void 0 ? _f : "#555";
        return (_h = (_g = themes === null || themes === void 0 ? void 0 : themes.default) === null || _g === void 0 ? void 0 : _g.txtColor) !== null && _h !== void 0 ? _h : "#555";
    };
    var placeholderTheme = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (focus && !error)
            return (_b = (_a = themes === null || themes === void 0 ? void 0 : themes.focus) === null || _a === void 0 ? void 0 : _a.placeholderColor) !== null && _b !== void 0 ? _b : "#c2c2c2";
        if (disabled)
            return (_d = (_c = themes === null || themes === void 0 ? void 0 : themes.disabled) === null || _c === void 0 ? void 0 : _c.placeholderColor) !== null && _d !== void 0 ? _d : "#c2c2c2";
        if (error)
            return (_f = (_e = themes === null || themes === void 0 ? void 0 : themes.error) === null || _e === void 0 ? void 0 : _e.placeholderColor) !== null && _f !== void 0 ? _f : "#c2c2c2";
        return (_h = (_g = themes === null || themes === void 0 ? void 0 : themes.default) === null || _g === void 0 ? void 0 : _g.placeholderColor) !== null && _h !== void 0 ? _h : "#c2c2c2";
    };
    return ((0, jsx_runtime_1.jsxs)(Row_1.Row, __assign({ className: "input-field-container-theme", gap: 6, onFocus: handleFocus, onBlur: handleBlur, align: "center", css: [
            {
                width: (_b = sizes === null || sizes === void 0 ? void 0 : sizes.width) !== null && _b !== void 0 ? _b : "100%",
                minWidth: sizes === null || sizes === void 0 ? void 0 : sizes.minWidth,
                maxWidth: sizes === null || sizes === void 0 ? void 0 : sizes.maxWidth,
                height: (_c = sizes === null || sizes === void 0 ? void 0 : sizes.height) !== null && _c !== void 0 ? _c : "100%",
                minHeight: sizes === null || sizes === void 0 ? void 0 : sizes.minHeight,
                maxHeight: sizes === null || sizes === void 0 ? void 0 : sizes.maxHeight,
                borderRadius: !(sizes === null || sizes === void 0 ? void 0 : sizes.borderBottom) ? (_d = sizes === null || sizes === void 0 ? void 0 : sizes.borderRadius) !== null && _d !== void 0 ? _d : 14 : 0,
                backgroundColor: backgroundColor(),
                border: !(sizes === null || sizes === void 0 ? void 0 : sizes.borderBottom) ? "1px solid ".concat(borderColor()) : "none",
                borderBottom: sizes === null || sizes === void 0 ? void 0 : sizes.borderBottom,
                transition: "0.3s ease-in-out",
            },
            (0, react_2.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          input {\n            color: ", ";\n            font-size: ", "px;\n            padding: ", ";\n            ::placeholder {\n              color: ", ";\n              font-size: ", "px;\n            }\n            ", "\n            ", "\n          }\n\n          select {\n            cursor: pointer;\n            color: ", ";\n            font-size: ", "px;\n            padding: ", ";\n            ::placeholder {\n              color: ", ";\n              font-size: ", "px;\n            }\n            ", "\n            ", "\n          }\n\n          textarea {\n            color: ", ";\n\n            ::placeholder {\n              color: ", ";\n              font-size: ", "px;\n            }\n            ", "\n          }\n        "], ["\n          input {\n            color: ", ";\n            font-size: ", "px;\n            padding: ", ";\n            ::placeholder {\n              color: ", ";\n              font-size: ", "px;\n            }\n            ", "\n            ", "\n          }\n\n          select {\n            cursor: pointer;\n            color: ", ";\n            font-size: ", "px;\n            padding: ", ";\n            ::placeholder {\n              color: ", ";\n              font-size: ", "px;\n            }\n            ", "\n            ", "\n          }\n\n          textarea {\n            color: ", ";\n\n            ::placeholder {\n              color: ", ";\n              font-size: ", "px;\n            }\n            ", "\n          }\n        "])), colorTheme(), (_e = sizes === null || sizes === void 0 ? void 0 : sizes.inputSize) !== null && _e !== void 0 ? _e : 15, (_f = sizes === null || sizes === void 0 ? void 0 : sizes.padding) !== null && _f !== void 0 ? _f : "13px", placeholderTheme(), (_g = sizes === null || sizes === void 0 ? void 0 : sizes.inputSize) !== null && _g !== void 0 ? _g : 15, fieldThemes, (0, input_1.GlobalInputTheme)(), colorTheme(), (_h = sizes === null || sizes === void 0 ? void 0 : sizes.inputSize) !== null && _h !== void 0 ? _h : 15, (_j = sizes === null || sizes === void 0 ? void 0 : sizes.padding) !== null && _j !== void 0 ? _j : "13px", placeholderTheme(), (_k = sizes === null || sizes === void 0 ? void 0 : sizes.inputSize) !== null && _k !== void 0 ? _k : 15, fieldThemes, (0, input_1.GlobalInputTheme)(), colorTheme(), placeholderTheme(), (_l = sizes === null || sizes === void 0 ? void 0 : sizes.inputSize) !== null && _l !== void 0 ? _l : 15, fieldThemes),
        ] }, { children: [children, !!tab && ((0, jsx_runtime_1.jsx)(TxtTab_1.TxtTab, __assign({ onClick: function () { return tab.onClick && tab.onClick(); }, css: {
                    fontSize: (_m = tab.size) !== null && _m !== void 0 ? _m : 14,
                    color: (_o = tab.color) !== null && _o !== void 0 ? _o : "#4788f4",
                    whiteSpace: "nowrap",
                    padding: "8px 10px 8px",
                    position: "sticky",
                }, disabled: tab.disabled }, { children: (_p = tab.name) !== null && _p !== void 0 ? _p : "확인" }))), !!edge && ((0, jsx_runtime_1.jsx)("div", __assign({ css: {
                    padding: "8px 10px 8px",
                    fontSize: (_q = sizes === null || sizes === void 0 ? void 0 : sizes.edgeSize) !== null && _q !== void 0 ? _q : 13,
                    color: inputEdgeColor(),
                    whiteSpace: "nowrap",
                } }, { children: edge })))] })));
}
exports.FieldContainer = FieldContainer;
var fieldThemes = (0, react_2.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  outline: none;\n  border: none;\n  resize: none;\n  background-color: transparent;\n  background: transparent;\n  background-image: none;\n  background-repeat: no-repeat;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  transition: 0.3s ease-in-out;\n"], ["\n  width: 100%;\n  height: 100%;\n  outline: none;\n  border: none;\n  resize: none;\n  background-color: transparent;\n  background: transparent;\n  background-image: none;\n  background-repeat: no-repeat;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  transition: 0.3s ease-in-out;\n"])));
var templateObject_1, templateObject_2;
