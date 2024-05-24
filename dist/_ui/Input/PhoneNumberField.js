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
exports.PhoneNumberField = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var FieldContainer_1 = require("./container/FieldContainer");
var useUid_1 = require("../../hooks/useUid");
var PhoneNumberField = (0, react_1.forwardRef)(function (_a, ref) {
    var _b;
    var _c = _a.disabled, disabled = _c === void 0 ? false : _c, externalValue = _a.value, externalOnChange = _a.onChange, error = _a.error, sizes = _a.sizes, themes = _a.themes, props = __rest(_a, ["disabled", "value", "onChange", "error", "sizes", "themes"]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var id = (_b = props === null || props === void 0 ? void 0 : props.id) !== null && _b !== void 0 ? _b : (0, useUid_1.useUid)();
    var _d = (0, react_1.useState)(String(externalValue) || ""), internalValue = _d[0], setInternalValue = _d[1];
    var _e = (0, react_1.useState)(false), isFocused = _e[0], setIsFocused = _e[1];
    var handleFocus = (0, react_1.useCallback)(function () { return setIsFocused(true); }, [isFocused]);
    var handleBlur = (0, react_1.useCallback)(function () { return setIsFocused(false); }, [isFocused]);
    // 외부에서 전달된 value 값이 변경되면, 내부 state도 업데이트합니다.
    (0, react_1.useEffect)(function () {
        if (externalValue)
            setInternalValue(String(externalValue));
    }, [externalValue]);
    var handleInputChange = function (e) {
        var inputVal = e.target.value.trim().replace(/[^0-9]/g, "");
        var formattedVal = inputVal;
        if (inputVal.length === 9)
            formattedVal = inputVal.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
        else if (inputVal.length === 10)
            formattedVal = inputVal.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
        else if (inputVal.length === 11)
            formattedVal = inputVal.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
        setInternalValue(formattedVal);
        var newEvent = __assign(__assign({}, e), { target: __assign(__assign({}, e.target), { value: formattedVal }) });
        if (externalOnChange)
            externalOnChange(newEvent);
    };
    return ((0, jsx_runtime_1.jsx)(FieldContainer_1.FieldContainer, __assign({ sizes: sizes, themes: themes, events: { error: error, disabled: disabled } }, { children: (0, jsx_runtime_1.jsx)("input", __assign({ ref: ref, id: id, type: "text", autoComplete: "off", maxLength: 13, onFocus: handleFocus, onBlur: handleBlur, value: internalValue, disabled: disabled, onChange: handleInputChange }, props)) })));
});
exports.PhoneNumberField = PhoneNumberField;
