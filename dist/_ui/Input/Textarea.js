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
exports.Textarea = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var TxtSpan_1 = require("../typography/TxtSpan");
var FieldContainer_1 = require("./container/FieldContainer");
var useUid_1 = require("../../hooks/useUid");
var TxtTab_1 = require("../tab/TxtTab");
var Row_1 = require("../flex/Row");
var Column_1 = require("../flex/Column");
var Textarea = (0, react_1.forwardRef)(function (props, ref) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var tab = props.tab, _j = props.rows, rows = _j === void 0 ? 1 : _j, textCountActive = props.textCountActive, error = props.error, sizes = props.sizes, themes = props.themes, value = props.value, disabled = props.disabled, autoRaise = props.autoRaise, editorScroll = props.editorScroll, rest = __rest(props, ["tab", "rows", "textCountActive", "error", "sizes", "themes", "value", "disabled", "autoRaise", "editorScroll"]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var id = (_a = props === null || props === void 0 ? void 0 : props.id) !== null && _a !== void 0 ? _a : (0, useUid_1.useUid)();
    var _k = (0, react_1.useState)(false), isFocused = _k[0], setIsFocused = _k[1];
    var handleFocus = (0, react_1.useCallback)(function () { return setIsFocused(true); }, [isFocused]);
    var handleBlur = (0, react_1.useCallback)(function () { return setIsFocused(false); }, [isFocused]);
    //
    // rasize
    (0, react_1.useEffect)(function () {
        var handleRasie = function () {
            if (value && value !== "" && ref && "current" in ref && ref.current) {
                ref.current.style.height = "auto";
                ref.current.style.height = ref.current.scrollHeight + "px";
            }
            else if (ref && "current" in ref && ref.current) {
                ref.current.style.height = "auto";
            }
        };
        if (autoRaise)
            handleRasie();
    }, [value, ref, autoRaise]);
    return ((0, jsx_runtime_1.jsxs)(Column_1.Column, __assign({ gap: 4, className: "editor-ui" }, { children: [(0, jsx_runtime_1.jsx)(FieldContainer_1.FieldContainer, __assign({ sizes: __assign(__assign({}, sizes), { maxHeight: 100 }), themes: themes, events: { error: error, disabled: disabled } }, { children: (0, jsx_runtime_1.jsxs)(Row_1.Row, __assign({ height: "100%", align: "end" }, { children: [(0, jsx_runtime_1.jsx)("textarea", __assign({ ref: ref, id: id, onFocus: handleFocus, onBlur: handleBlur, value: value, rows: rows, disabled: disabled, onKeyPress: function (e) {
                                if (e.key === "Enter" || e.key === " ") {
                                    if (!value ||
                                        (typeof value === "string" && value.trim() === ""))
                                        e.preventDefault();
                                }
                            }, css: {
                                minHeight: (sizes === null || sizes === void 0 ? void 0 : sizes.minHeight) ? sizes === null || sizes === void 0 ? void 0 : sizes.minHeight : "48px",
                                maxHeight: 90,
                                fontSize: (_b = sizes === null || sizes === void 0 ? void 0 : sizes.inputSize) !== null && _b !== void 0 ? _b : 15,
                                padding: (_c = sizes === null || sizes === void 0 ? void 0 : sizes.padding) !== null && _c !== void 0 ? _c : 13,
                                overflow: rows >= 2 ? "auto" : "visible",
                                "::-webkit-scrollbar": {
                                    display: editorScroll
                                        ? "flex"
                                        : rows >= 2
                                            ? "flex"
                                            : "none" !== null && "none" !== void 0 ? "none" : "none",
                                    width: "4px",
                                    height: "4px",
                                },
                                "::-webkit-scrollbar-track": { backgroundColor: "transparent" },
                                "::-webkit-scrollbar-thumb": {
                                    backgroundColor: "#cccccc",
                                    borderRadius: "100px",
                                },
                                "::-webkit-scrollbar-thumb:hover": { background: "#e2e2e2" },
                                "::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment": {
                                    width: 0,
                                    height: 0,
                                    backgroundColor: "transparent",
                                },
                            } }, rest)), !!tab && ((0, jsx_runtime_1.jsx)(Column_1.Column, __assign({ width: "auto", minHeight: 48, crossAlign: "center" }, { children: (0, jsx_runtime_1.jsx)(TxtTab_1.TxtTab, __assign({ onClick: function () { return tab.onClick && tab.onClick(); }, css: {
                                    fontSize: (_d = tab.size) !== null && _d !== void 0 ? _d : 14,
                                    color: (_e = tab.color) !== null && _e !== void 0 ? _e : "#4788f4",
                                    whiteSpace: "nowrap",
                                    padding: "8px 10px 8px 2px",
                                    position: "sticky",
                                }, disabled: tab.disabled }, { children: (_f = tab.name) !== null && _f !== void 0 ? _f : "확인" })) })))] })) })), textCountActive && ((0, jsx_runtime_1.jsxs)(TxtSpan_1.TxtSpan, __assign({ color: "#aaa", size: (_g = sizes === null || sizes === void 0 ? void 0 : sizes.edgeSize) !== null && _g !== void 0 ? _g : 12 }, { children: [typeof props.value === "string" ? props.value.length : 0, "/" + ((_h = props.maxLength) !== null && _h !== void 0 ? _h : "전체 길이를 전달해주세요")] })))] })));
});
exports.Textarea = Textarea;
