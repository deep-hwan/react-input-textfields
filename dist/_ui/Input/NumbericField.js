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
exports.NumbericField = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var FieldContainer_1 = require("./container/FieldContainer");
var useUid_1 = require("../../hooks/useUid");
var NumbericField = (0, react_1.forwardRef)(function (_a, ref) {
    var _b;
    var error = _a.error, edge = _a.edge, disabled = _a.disabled, value = _a.value, onChange = _a.onChange, sizes = _a.sizes, themes = _a.themes, props = __rest(_a, ["error", "edge", "disabled", "value", "onChange", "sizes", "themes"]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var id = (_b = props === null || props === void 0 ? void 0 : props.id) !== null && _b !== void 0 ? _b : (0, useUid_1.useUid)();
    var _c = (0, react_1.useState)(""), displayValue = _c[0], setDisplayValue = _c[1];
    var _d = (0, react_1.useState)(false), isFocused = _d[0], setIsFocused = _d[1];
    var handleFocus = (0, react_1.useCallback)(function () { return setIsFocused(true); }, [isFocused]);
    var handleBlur = (0, react_1.useCallback)(function () { return setIsFocused(false); }, [isFocused]);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        var formattedValue = "0";
        if (typeof value === "number")
            formattedValue = value.toLocaleString();
        else if (value === "")
            formattedValue = "";
        else if (/^\d*\.?\d*$/.test((_a = value === null || value === void 0 ? void 0 : value.toString()) !== null && _a !== void 0 ? _a : "")) {
            formattedValue = parseFloat((_b = value === null || value === void 0 ? void 0 : value.toString()) !== null && _b !== void 0 ? _b : "").toLocaleString();
            setDisplayValue(formattedValue);
        }
    }, [value]);
    var handleInputChange = function (e) {
        var rawValue = e.target.value.replace(/,/g, "");
        if (rawValue === "") {
            setDisplayValue("");
            onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, e), { target: __assign(__assign({}, e.target), { value: "" }) }));
        }
        else if (/^\d*\.?\d*$/.test(rawValue)) {
            setDisplayValue(rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
            onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, e), { target: __assign(__assign({}, e.target), { value: rawValue }) }));
        }
        else {
            setDisplayValue("");
            onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, e), { target: __assign(__assign({}, e.target), { value: "0" }) }));
        }
    };
    return ((0, jsx_runtime_1.jsx)(FieldContainer_1.FieldContainer, __assign({ edge: edge, sizes: sizes, themes: themes, events: { disabled: disabled } }, { children: (0, jsx_runtime_1.jsx)("input", __assign({ ref: ref, id: id, onFocus: handleFocus, onBlur: handleBlur, value: displayValue, onChange: handleInputChange, disabled: disabled, autoComplete: "off" }, props)) })));
});
exports.NumbericField = NumbericField;
