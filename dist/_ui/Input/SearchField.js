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
exports.SearchField = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var useUid_1 = require("../../hooks/useUid");
var FieldContainer_1 = require("./container/FieldContainer");
var Row_1 = require("../flex/Row");
var SearchField = (0, react_1.forwardRef)(function (props, ref) {
    var _a;
    var disabled = props.disabled, tab = props.tab, sizes = props.sizes, themes = props.themes, rest = __rest(props, ["disabled", "tab", "sizes", "themes"]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var id = (_a = props === null || props === void 0 ? void 0 : props.id) !== null && _a !== void 0 ? _a : (0, useUid_1.useUid)();
    var _b = (0, react_1.useState)(false), isFocused = _b[0], setIsFocused = _b[1];
    var handleFocus = (0, react_1.useCallback)(function () { return setIsFocused(true); }, [isFocused]);
    var handleBlur = (0, react_1.useCallback)(function () { return setIsFocused(false); }, [isFocused]);
    //
    // numberic
    var handleInput = function (event) {
        var _a;
        if (props.type === "number") {
            var value = event.target.value;
            var newValue = value.replace(/[^0-9]/g, "");
            if (props.maxLength && newValue.length > props.maxLength) {
                event.target.value = newValue.slice(0, props.maxLength);
            }
            else
                event.target.value = newValue;
        }
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, event);
    };
    return ((0, jsx_runtime_1.jsx)(FieldContainer_1.FieldContainer, __assign({ sizes: sizes, tab: tab, themes: themes, events: { disabled: disabled } }, { children: (0, jsx_runtime_1.jsxs)(Row_1.Row, __assign({ align: "center" }, { children: [(0, jsx_runtime_1.jsx)(Row_1.Row, __assign({ width: "auto", padding: { left: 12, right: 0 } }, { children: (0, jsx_runtime_1.jsx)(SearchIcon, {}) })), (0, jsx_runtime_1.jsx)("input", __assign({ id: id, type: "search", ref: ref, onFocus: handleFocus, onBlur: handleBlur, onInput: handleInput, disabled: disabled, onKeyDown: function (e) {
                        var _a;
                        if (e.key === "Enter") {
                            (_a = document.getElementById("".concat(id, "-button"))) === null || _a === void 0 ? void 0 : _a.click();
                        }
                    } }, rest))] })) })));
});
exports.SearchField = SearchField;
function SearchIcon() {
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: "17", height: "17", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M22.3866 21.1152C22.3466 20.9052 22.2466 20.7152 22.0966 20.5652L17.1166 15.6052L17.2966 15.3752L17.1366 15.2552L17.2866 15.3752C18.7466 13.4352 19.4066 11.0052 19.1566 8.58523C18.8966 6.16523 17.7366 3.94523 15.8966 2.34523C14.0766 0.765232 11.7066 -0.0747677 9.27655 0.00523228C6.84655 0.0952323 4.54655 1.09523 2.82655 2.81523C1.10655 4.53523 0.0965528 6.84523 0.0065528 9.26523C-0.0834472 11.6952 0.756553 14.0652 2.34655 15.9052C3.93655 17.7452 6.16655 18.9052 8.58655 19.1652C11.0066 19.4252 13.4266 18.7552 15.3766 17.3052L15.6066 17.1252L20.5666 22.1052C20.7666 22.3052 21.0366 22.4152 21.3166 22.4052H21.3266C21.5366 22.4052 21.7466 22.3352 21.9266 22.2152C22.1066 22.0952 22.2366 21.9252 22.3166 21.7352C22.3966 21.5352 22.4166 21.3252 22.3766 21.1152H22.3866ZM9.64655 17.0552C7.67655 17.0552 5.79655 16.2752 4.40655 14.8852C3.01655 13.4952 2.23655 11.6052 2.23655 9.64523C2.23655 7.68523 3.01655 5.79523 4.40655 4.40523C5.79655 3.01523 7.67655 2.23523 9.64655 2.23523C11.5866 2.27523 13.4366 3.07523 14.7966 4.45523C16.1566 5.84523 16.9166 7.70523 16.9166 9.64523C16.9166 11.5852 16.1566 13.4452 14.7966 14.8352C13.4366 16.2252 11.5866 17.0152 9.64655 17.0552Z", fill: "#999999" }) })));
}
