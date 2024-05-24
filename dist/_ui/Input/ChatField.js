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
var ChatField = (0, react_1.forwardRef)(function (props, ref) {
    var _a, _b;
    var _c, _d;
    var value = props.value, disabled = props.disabled, fileTab = props.fileTab, uploadTab = props.uploadTab, themes = props.themes, rows = props.rows, rest = __rest(props, ["value", "disabled", "fileTab", "uploadTab", "themes", "rows"]);
    var _e = (fileTab !== null && fileTab !== void 0 ? fileTab : {}).active, fileTabActive = _e === void 0 ? true : _e;
    var _f = themes !== null && themes !== void 0 ? themes : {}, _g = _f.backgroundColor, backgroundColor = _g === void 0 ? "#f8f8f8" : _g, _h = _f.borderColor, borderColor = _h === void 0 ? "#eee" : _h, _j = _f.txtColor, txtColor = _j === void 0 ? "#555" : _j, _k = _f.placeholderColor, placeholderColor = _k === void 0 ? "#c0c0c0" : _k;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var id = (_c = props === null || props === void 0 ? void 0 : props.id) !== null && _c !== void 0 ? _c : (0, useUid_1.useUid)();
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
    var SendTab = function () { return ((0, jsx_runtime_1.jsx)(TouchableOpacity_1.TouchableOpacity, __assign({ as: "button", disabled: uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.disabled, padding: { all: 8 }, onClick: function () {
            var _a;
            if (uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.disabled)
                return;
            else
                (_a = uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.onClick) === null || _a === void 0 ? void 0 : _a.call(uploadTab);
        }, css: {
            opacity: !!(uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.disabled) ? "0.3 !important" : 1,
            backgroundColor: "transparent",
        } }, { children: (0, jsx_runtime_1.jsx)(TabIcon, { type: "\uC804\uC1A1", iconColor: uploadTab === null || uploadTab === void 0 ? void 0 : uploadTab.iconColor }) }))); };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Row_1.Row, __assign({ height: "100%", align: "end", css: {
                border: "1px solid ".concat(borderColor),
                backgroundColor: backgroundColor,
                borderRadius: 18,
            } }, { children: [(0, jsx_runtime_1.jsx)("textarea", __assign({ ref: ref, id: id, value: value, rows: rows !== null && rows !== void 0 ? rows : 1, disabled: disabled, onKeyPress: function (e) {
                        if (e.key === "Enter" || e.key === " ") {
                            if (!value ||
                                (typeof value === "string" && value.trim() === ""))
                                e.preventDefault();
                        }
                    }, css: __assign(__assign({ maxHeight: 120, fontSize: 15, padding: 13, color: txtColor }, globelThemes), (_a = {}, _a[themes_1.MQ[3]] = { fontSize: 14, padding: "11px 13px", maxHeight: 90 }, _a["::placeholder"] = { color: placeholderColor }, _a)) }, rest)), (0, jsx_runtime_1.jsx)(Row_1.Row, __assign({ width: "auto", align: "center", minHeight: 47, css: [
                        (_b = {
                                paddingRight: 4
                            },
                            _b[themes_1.MQ[3]] = { minHeight: 42 },
                            _b),
                        (0, react_2.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                svg,\n                img {\n                  width: 23px !important;\n                  height: 23px !important;\n                }\n              "], ["\n                svg,\n                img {\n                  width: 23px !important;\n                  height: 23px !important;\n                }\n              "]))),
                    ] }, { children: fileTabActive ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: typeof value === "string" && value.trim() !== "" ? ((0, jsx_runtime_1.jsx)(SendTab, {})) : ((0, jsx_runtime_1.jsxs)(TouchableOpacity_1.TouchableOpacity, __assign({ padding: { all: 8 }, onClick: function () { } }, { children: [(0, jsx_runtime_1.jsx)(TabIcon, { type: "\uD30C\uC77C", iconColor: fileTab === null || fileTab === void 0 ? void 0 : fileTab.iconColor }), (0, jsx_runtime_1.jsx)("input", { type: "file", disabled: fileTab === null || fileTab === void 0 ? void 0 : fileTab.disabled, accept: (_d = fileTab === null || fileTab === void 0 ? void 0 : fileTab.accept) !== null && _d !== void 0 ? _d : "image/png, image/jpeg, image/jpg", css: {
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
                                    }, onChange: function (e) { var _a; return (_a = fileTab === null || fileTab === void 0 ? void 0 : fileTab.onChange) === null || _a === void 0 ? void 0 : _a.call(fileTab, e); } })] }))) })) : ((0, jsx_runtime_1.jsx)(SendTab, {})) }))] })) }));
});
exports.ChatField = ChatField;
var globelThemes = {
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
};
var TabIcon = function (_a) {
    var type = _a.type, _b = _a.iconColor, iconColor = _b === void 0 ? "#939BAD" : _b;
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", css: { cursor: "pointer" } }, { children: type === "전송" ? ((0, jsx_runtime_1.jsx)("path", { d: "M-4.80825e-07 11C-3.85727e-07 13.1756 0.645138 15.3023 1.85383 17.1113C3.06253 18.9202 4.78049 20.3301 6.79048 21.1627C8.80047 21.9952 11.0122 22.2131 13.146 21.7886C15.2798 21.3642 17.2398 20.3165 18.7782 18.7782C20.3166 17.2398 21.3642 15.2798 21.7886 13.146C22.2131 11.0122 21.9952 8.80046 21.1627 6.79048C20.3301 4.78049 18.9202 3.06252 17.1113 1.85383C15.3023 0.645131 13.1756 -6.29797e-06 11 -6.20287e-06C8.08262 -6.07535e-06 5.28472 1.15892 3.22182 3.22182C1.15892 5.28472 -6.08348e-07 8.08261 -4.80825e-07 11ZM11.486 5.92299L15.53 9.15299C15.6167 9.22803 15.6872 9.31993 15.7372 9.42307C15.7872 9.52622 15.8157 9.63847 15.821 9.75299C15.8213 9.86278 15.7994 9.9715 15.7568 10.0727C15.7142 10.1739 15.6517 10.2655 15.573 10.342C15.4227 10.4871 15.2231 10.5702 15.0142 10.5747C14.8053 10.5791 14.6024 10.5046 14.446 10.366L11.811 8.27799L11.811 15.467C11.8061 15.6789 11.7191 15.8806 11.5683 16.0295C11.4175 16.1785 11.2147 16.263 11.0027 16.2652C10.7908 16.2674 10.5863 16.1871 10.4324 16.0414C10.2785 15.8956 10.1873 15.6957 10.178 15.484L10.178 8.253L7.548 10.453C7.39517 10.5864 7.19858 10.659 6.99571 10.6568C6.79284 10.6545 6.59788 10.5777 6.448 10.441C6.29077 10.2995 6.19599 10.1015 6.18437 9.89029C6.17275 9.67909 6.24524 9.47188 6.386 9.314L6.431 9.27L10.386 5.91999C10.5382 5.78673 10.7337 5.71327 10.936 5.71327C11.1383 5.71327 11.3338 5.78673 11.486 5.91999", fill: iconColor })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("g", __assign({ "clip-path": "url(#clip0_953_32)" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.4793 15.7414L9.76721 18.4534C8.13618 20.1414 5.44308 20.2931 3.62239 18.8138C2.52239 17.8655 1.95342 16.4241 2.12411 14.9828C2.25687 13.9207 2.74997 12.9345 3.52756 12.1948L6.25859 9.46379C6.65687 9.04655 6.65687 8.38276 6.25859 7.98448C6.06894 7.79483 5.80342 7.68103 5.51894 7.68103C5.23446 7.68103 4.9879 7.79483 4.77928 7.98448L2.10514 10.6586C0.929282 11.8155 0.208593 13.2948 0.0189375 14.8879C-0.303476 18.4534 2.33273 21.6397 5.89825 21.9621C7.83273 22.1517 9.71032 21.45 11.0758 20.0845L13.9207 17.2207C14.1103 17.031 14.2241 16.7655 14.2241 16.481C14.2241 16.1965 14.1103 15.931 13.9207 15.7414C13.5224 15.3431 12.8396 15.3431 12.4414 15.7414H12.4793Z", fill: iconColor }), (0, jsx_runtime_1.jsx)("path", { d: "M20.0844 1.83965C19.8948 1.65 19.6862 1.46034 19.4586 1.28965C16.8034 -0.663794 13.0482 -0.360346 10.7534 2.01034L8.0603 4.70345C7.66203 5.12069 7.66203 5.78448 8.0603 6.18276C8.45858 6.58103 9.14134 6.58103 9.53961 6.18276L12.2706 3.45172C13.162 2.54138 14.3379 2.06724 15.5327 2.06724C16.5 2.06724 17.4862 2.38965 18.3017 3.01552C20.1982 4.57069 20.4637 7.35862 18.9275 9.25517C18.8517 9.36896 18.7379 9.46379 18.6431 9.57759L15.7793 12.4414C15.381 12.8586 15.381 13.5034 15.7793 13.9207C16.1775 14.319 16.8603 14.319 17.2586 13.9207L20.1034 11.0569C22.6448 8.51552 22.6258 4.36207 20.1034 1.83965H20.0844Z", fill: iconColor }), (0, jsx_runtime_1.jsx)("path", { d: "M9.52063 13.9207L13.9396 9.48276C14.3379 9.06552 14.3379 8.40172 13.9396 8.00345C13.5413 7.60517 12.8586 7.60517 12.4603 8.00345L8.04132 12.4414C7.64305 12.8586 7.64305 13.5224 8.04132 13.9207C8.4396 14.319 9.10339 14.319 9.52063 13.9207Z", fill: iconColor })] })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", __assign({ id: "clip0_953_32" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "22", height: "22", fill: "white" }) })) })] })) })));
};
var templateObject_1;
