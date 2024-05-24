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
exports.InputContainer = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var Column_1 = require("../../flex/Column");
var Txt_1 = require("../../typography/Txt");
function InputContainer(_a) {
    var _b, _c, _d, _e;
    var id = _a.id, children = _a.children, label = _a.label, labelSize = _a.labelSize, labelColor = _a.labelColor, minWidth = _a.minWidth, maxWidth = _a.maxWidth, error = _a.error, tolTip = _a.tolTip, important = _a.important, props = __rest(_a, ["id", "children", "label", "labelSize", "labelColor", "minWidth", "maxWidth", "error", "tolTip", "important"]);
    var LabelColor = function () {
        var _a;
        if (error === null || error === void 0 ? void 0 : error.error)
            return (_a = error === null || error === void 0 ? void 0 : error.messageColor) !== null && _a !== void 0 ? _a : "#FF6767";
        return labelColor !== null && labelColor !== void 0 ? labelColor : "#888";
    };
    return ((0, jsx_runtime_1.jsxs)(Column_1.Column, __assign({ align: "start", minWidth: minWidth, maxWidth: maxWidth }, props, { children: [label && ((0, jsx_runtime_1.jsxs)("label", __assign({ htmlFor: id, css: {
                    color: LabelColor(),
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    fontSize: labelSize !== null && labelSize !== void 0 ? labelSize : "0.813rem",
                    marginBottom: "5px",
                    "&:focus-within": { fontWeight: 500 },
                } }, { children: [label, !!important && ((0, jsx_runtime_1.jsx)("span", __assign({ css: { fontSize: 11, color: "#fa7979", fontWeight: 500 } }, { children: important !== null && important !== void 0 ? important : "*" })))] }))), children, (error === null || error === void 0 ? void 0 : error.error) && ((0, jsx_runtime_1.jsx)(Txt_1.Txt, __assign({ color: (_b = error === null || error === void 0 ? void 0 : error.messageColor) !== null && _b !== void 0 ? _b : "#FF6767", size: (_c = error === null || error === void 0 ? void 0 : error.messageSize) !== null && _c !== void 0 ? _c : 13, margin: { top: 5 } }, { children: error === null || error === void 0 ? void 0 : error.message }))), !!(tolTip === null || tolTip === void 0 ? void 0 : tolTip.description) && !(error === null || error === void 0 ? void 0 : error.error) && ((0, jsx_runtime_1.jsx)(Txt_1.Txt, __assign({ color: (_d = tolTip === null || tolTip === void 0 ? void 0 : tolTip.color) !== null && _d !== void 0 ? _d : "#939EAB", size: (_e = tolTip === null || tolTip === void 0 ? void 0 : tolTip.size) !== null && _e !== void 0 ? _e : 13, margin: { top: 5 } }, { children: tolTip === null || tolTip === void 0 ? void 0 : tolTip.description })))] })));
}
exports.InputContainer = InputContainer;
