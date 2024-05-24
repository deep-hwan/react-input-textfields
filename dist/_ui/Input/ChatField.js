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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatField = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var TouchableOpacity_1 = require("../tab/TouchableOpacity");
var themes_1 = require("../../themes");
var react_2 = require("@emotion/react");
var useUid_1 = require("../../hooks/useUid");
var Row_1 = require("../flex/Row");
var file_icon_1 = require("./send_field_icon/file-icon");
var send_icon_1 = require("./send_field_icon/send-icon");
var Column_1 = require("../flex/Column");
var ChatField = (0, react_1.forwardRef)(function (props, ref) {
    var _a;
    var value = props.value, disabled = props.disabled, fileTab = props.fileTab, uploadTab = props.uploadTab, themes = props.themes, rest = __rest(props, ["value", "disabled", "fileTab", "uploadTab", "themes"]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var id = (_a = props === null || props === void 0 ? void 0 : props.id) !== null && _a !== void 0 ? _a : (0, useUid_1.useUid)();
    var _b = themes !== null && themes !== void 0 ? themes : {}, _c = _b.backgroundColor, backgroundColor = _c === void 0 ? "#f8f8f8" : _c, _d = _b.borderColor, borderColor = _d === void 0 ? "#eee" : _d, _e = _b.txtColor, txtColor = _e === void 0 ? "#555" : _e, _f = _b.placeholderColor, placeholderColor = _f === void 0 ? "#c0c0c0" : _f;
    //
    // rasize
    (0, react_1.useEffect)(function () {
        var handleRasie = function () {
            if (value !== "" && ref && "current" in ref && ref.current) {
                ref.current.style.height = "auto";
                ref.current.style.height = ref.current.scrollHeight + "px";
            }
            else if (ref && "current" in ref && ref.current) {
                ref.current.style.height = "auto";
            }
        };
        handleRasie();
    }, [value, ref]);
    var SendTab = function () {
        if (uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.loading)
            return (0, jsx_runtime_1.jsx)(LoadingIcon, {});
        else
            return ((0, jsx_runtime_1.jsx)(TouchableOpacity_1.TouchableOpacity, __assign({ as: "button", disabled: disabled || (uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.disabled) || (fileTab === null || fileTab === void 0 ? void 0 : fileTab.loading), padding: { all: 8 }, onClick: function () {
                    var _a;
                    if (uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.disabled)
                        return;
                    else
                        (_a = uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.onClick) === null || _a === void 0 ? void 0 : _a.call(uploadTab);
                }, css: {
                    opacity: disabled || (uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.disabled) || (fileTab === null || fileTab === void 0 ? void 0 : fileTab.loading)
                        ? "0.3 !important"
                        : 1,
                } }, { children: (0, jsx_runtime_1.jsx)(send_icon_1.SendIcon, { iconColor: uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.iconColor }) })));
    };
    var FileTab = function () {
        var _a;
        if (fileTab === null || fileTab === void 0 ? void 0 : fileTab.loading)
            return (0, jsx_runtime_1.jsx)(LoadingIcon, {});
        else
            return ((0, jsx_runtime_1.jsxs)(TouchableOpacity_1.TouchableOpacity, __assign({ padding: { all: 8 }, css: {
                    opacity: disabled || (uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.loading) || (fileTab === null || fileTab === void 0 ? void 0 : fileTab.disabled)
                        ? "0.3 !important"
                        : 1,
                }, onClick: function () {
                    var _a;
                    if (fileTab === null || fileTab === void 0 ? void 0 : fileTab.disabled)
                        return;
                    else
                        (_a = fileTab === null || fileTab === void 0 ? void 0 : fileTab.onClick) === null || _a === void 0 ? void 0 : _a.call(fileTab);
                } }, { children: [(0, jsx_runtime_1.jsx)(file_icon_1.FileIcon, { type: "photo", iconColor: fileTab === null || fileTab === void 0 ? void 0 : fileTab.iconColor }), (0, jsx_runtime_1.jsx)("input", { type: "file", disabled: disabled || (uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.loading) || (fileTab === null || fileTab === void 0 ? void 0 : fileTab.disabled), accept: (_a = fileTab === null || fileTab === void 0 ? void 0 : fileTab.accept) !== null && _a !== void 0 ? _a : "image/png, image/jpeg, image/jpg", css: styleSheet.fileInput, onChange: function (e) { var _a; return (_a = fileTab === null || fileTab === void 0 ? void 0 : fileTab.onChange) === null || _a === void 0 ? void 0 : _a.call(fileTab, e); } })] })));
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Row_1.Row, __assign({ height: "100%", align: "end", css: {
                border: "1px solid ".concat(borderColor),
                backgroundColor: backgroundColor,
                borderRadius: 18,
            } }, { children: [(0, jsx_runtime_1.jsx)("textarea", __assign({ ref: ref, id: id, value: value, rows: 1, disabled: disabled, onKeyPress: function (e) {
                        if (e.key === "Enter" || e.key === " ") {
                            if (!value ||
                                (typeof value === "string" && value.trim() === ""))
                                e.preventDefault();
                        }
                    }, css: __assign(__assign(__assign({ color: txtColor }, styleSheet.textarea), styleSheet.globelThemes), { "::placeholder": { color: placeholderColor } }) }, rest)), (0, jsx_runtime_1.jsxs)(Row_1.Row, __assign({ width: "auto", align: "center", minHeight: 47, css: styleSheet.tabs }, { children: [(0, jsx_runtime_1.jsx)(FileTab, {}), !!value && (0, jsx_runtime_1.jsx)(SendTab, {})] }))] })) }));
});
exports.ChatField = ChatField;
var LoadingIcon = function () {
    return ((0, jsx_runtime_1.jsx)(Column_1.Column, __assign({ padding: { all: 7 }, align: "center" }, { children: (0, jsx_runtime_1.jsx)("div", { css: styleSheet.loadingSpinner }) })));
};
//
//
var styleSheet = {
    textarea: (_a = {
            maxHeight: 120,
            fontSize: 15,
            padding: 13
        },
        _a[themes_1.MQ[3]] = { fontSize: 14, padding: "11px 13px", maxHeight: 90 },
        _a),
    tabs: [
        (_b = {
                paddingRight: 4
            },
            _b[themes_1.MQ[3]] = { minHeight: 42 },
            _b),
        (0, react_2.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      svg,\n      img {\n        cursor: pointer;\n        width: 22px !important;\n        height: 22px !important;\n      }\n    "], ["\n      svg,\n      img {\n        cursor: pointer;\n        width: 22px !important;\n        height: 22px !important;\n      }\n    "]))),
    ],
    loadingSpinner: {
        width: 23,
        minWidth: 23,
        height: 23,
        minHeight: 23,
        border: "2px solid #e0e0e0",
        borderBottomColor: "transparent",
        borderRadius: "50%",
        display: "inline-block",
        boxSizing: "border-box",
        animation: "".concat((0, react_2.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {transform: rotate(0deg)}\n  100% {transform: rotate(360deg)}\n"], ["\n  0% {transform: rotate(0deg)}\n  100% {transform: rotate(360deg)}\n"]))), " 1s linear infinite"),
    },
    fileInput: {
        width: "100%",
        height: "100%",
        zIndex: 3,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0,
        cursor: "pointer",
    },
    globelThemes: {
        width: "100%",
        outline: "none",
        border: "none",
        resize: "none",
        backgroundColor: "transparent",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
        boxSizing: "border-box",
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        backgroundRepeat: "no-repeat",
        overflow: "visible",
        "::-webkit-scrollbar": {
            display: "none",
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
    },
};
var templateObject_1, templateObject_2;
