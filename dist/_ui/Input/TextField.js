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
exports.TextField = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var useUid_1 = require("../../hooks/useUid");
var FieldContainer_1 = require("./container/FieldContainer");
var TextField = (0, react_1.forwardRef)(function (props, ref) {
    var _a;
    var _b = props.disabled, disabled = _b === void 0 ? false : _b, _c = props.numberType, numberType = _c === void 0 ? "int" : _c, tab = props.tab, value = props.value, error = props.error, edge = props.edge, sizes = props.sizes, themes = props.themes, rest = __rest(props, ["disabled", "numberType", "tab", "value", "error", "edge", "sizes", "themes"]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var id = (_a = props === null || props === void 0 ? void 0 : props.id) !== null && _a !== void 0 ? _a : (0, useUid_1.useUid)();
    var _d = (0, react_1.useState)(false), isFocused = _d[0], setIsFocused = _d[1];
    var handleFocus = (0, react_1.useCallback)(function () { return setIsFocused(true); }, [isFocused]);
    var handleBlur = (0, react_1.useCallback)(function () { return setIsFocused(false); }, [isFocused]);
    //
    // numberic
    var handleInput = function (event) {
        var _a;
        if (props.type === "number") {
            var value_1 = event.target.value;
            if (numberType === "int") {
                var newValue = value_1.replace(/[^0-9]/g, "");
                if (props.maxLength && newValue.length > props.maxLength)
                    event.target.value = newValue.slice(0, props.maxLength);
                else
                    event.target.value = newValue;
            }
            else if (numberType === "double") {
            }
        }
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, event);
    };
    return ((0, jsx_runtime_1.jsx)(FieldContainer_1.FieldContainer, __assign({ edge: edge, tab: tab, sizes: sizes, themes: themes, events: { error: error, disabled: disabled } }, { children: (0, jsx_runtime_1.jsx)("input", __assign({ id: id, ref: ref, onKeyPress: function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    if (!value || (typeof value === "string" && value.trim() === ""))
                        e.preventDefault();
                }
            }, onFocus: handleFocus, onBlur: handleBlur, onInput: handleInput, disabled: disabled }, rest)) })));
});
exports.TextField = TextField;
