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
exports.Select = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var Option_1 = require("./Option");
var InputContainer_1 = require("./container/InputContainer");
var FieldContainer_1 = require("./container/FieldContainer");
var useUid_1 = require("../../hooks/useUid");
var Absolute_1 = require("../flex/Absolute");
var SelectComponent = (0, react_1.forwardRef)(function (props, ref) {
    var _a, _b, _c;
    var id = props.id, label = props.label, labelSize = props.labelSize, labelColor = props.labelColor, minWidth = props.minWidth, maxWidth = props.maxWidth, important = props.important, options = props.options, renderItem = props.renderItem, error = props.error, tolTip = props.tolTip, disabled = props.disabled, placeholder = props.placeholder, themes = props.themes, sizes = props.sizes, rest = __rest(props, ["id", "label", "labelSize", "labelColor", "minWidth", "maxWidth", "important", "options", "renderItem", "error", "tolTip", "disabled", "placeholder", "themes", "sizes"]);
    var _d = (0, react_1.useState)(false), isFocused = _d[0], setIsFocused = _d[1];
    var handleFocus = (0, react_1.useCallback)(function () { return setIsFocused(true); }, [isFocused]);
    var handleBlur = (0, react_1.useCallback)(function () { return setIsFocused(false); }, [isFocused]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var idValue = (_a = props === null || props === void 0 ? void 0 : props.id) !== null && _a !== void 0 ? _a : (0, useUid_1.useUid)();
    return ((0, jsx_runtime_1.jsx)(InputContainer_1.InputContainer, __assign({ id: idValue, label: label, labelColor: labelColor, labelSize: labelSize, maxWidth: maxWidth, minWidth: minWidth, error: error, tolTip: tolTip }, { children: (0, jsx_runtime_1.jsxs)(FieldContainer_1.FieldContainer, __assign({ sizes: sizes, themes: themes, events: { error: error, disabled: disabled } }, { children: [(0, jsx_runtime_1.jsxs)("select", __assign({ ref: ref, onFocus: handleFocus, onBlur: handleBlur, id: idValue, disabled: disabled }, rest, { children: [!props.value && !!placeholder && ((0, jsx_runtime_1.jsx)("option", __assign({ value: "", disabled: true }, { children: placeholder }))), options === null || options === void 0 ? void 0 : options.map(function (item, index) { return renderItem(item, index); }).flat()] })), (0, jsx_runtime_1.jsx)(Absolute_1.Absolute, __assign({ position: { right: 10 } }, { children: (0, jsx_runtime_1.jsx)(SelectIcon, { size: (_b = props === null || props === void 0 ? void 0 : props.selectIconSize) !== null && _b !== void 0 ? _b : 11, fill: (_c = props === null || props === void 0 ? void 0 : props.selectIconColor) !== null && _c !== void 0 ? _c : "#ccc" }) }))] })) })));
});
var Select = SelectComponent;
exports.Select = Select;
Select.Option = Option_1.Option;
var SelectIcon = function (_a) {
    var fill = _a.fill, size = _a.size;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ css: { display: "flex", alignItems: "center" } }, { children: (0, jsx_runtime_1.jsx)("svg", __assign({ width: size, height: size, viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.53775 7.85469C5.2579 8.19052 4.7421 8.19052 4.46225 7.85469L0.956773 3.64813C0.576833 3.1922 0.901043 2.5 1.49453 2.5L8.50547 2.5C9.09896 2.5 9.42317 3.1922 9.04323 3.64813L5.53775 7.85469Z", fill: fill }) })) })));
};
