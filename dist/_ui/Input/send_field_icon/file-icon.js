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
exports.FileIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var FileIcon = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "file" : _b, _c = _a.iconColor, iconColor = _c === void 0 ? "#a7afc2" : _c, props = __rest(_a, ["type", "iconColor"]);
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: [type === "file" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("g", __assign({ "clip-path": "url(#clip0_953_32)" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M12.4793 15.7414L9.76721 18.4534C8.13618 20.1414 5.44308 20.2931 3.62239 18.8138C2.52239 17.8655 1.95342 16.4241 2.12411 14.9828C2.25687 13.9207 2.74997 12.9345 3.52756 12.1948L6.25859 9.46379C6.65687 9.04655 6.65687 8.38276 6.25859 7.98448C6.06894 7.79483 5.80342 7.68103 5.51894 7.68103C5.23446 7.68103 4.9879 7.79483 4.77928 7.98448L2.10514 10.6586C0.929282 11.8155 0.208593 13.2948 0.0189375 14.8879C-0.303476 18.4534 2.33273 21.6397 5.89825 21.9621C7.83273 22.1517 9.71032 21.45 11.0758 20.0845L13.9207 17.2207C14.1103 17.031 14.2241 16.7655 14.2241 16.481C14.2241 16.1965 14.1103 15.931 13.9207 15.7414C13.5224 15.3431 12.8396 15.3431 12.4414 15.7414H12.4793Z", fill: iconColor }), (0, jsx_runtime_1.jsx)("path", { d: "M20.0844 1.83965C19.8948 1.65 19.6862 1.46034 19.4586 1.28965C16.8034 -0.663794 13.0482 -0.360346 10.7534 2.01034L8.0603 4.70345C7.66203 5.12069 7.66203 5.78448 8.0603 6.18276C8.45858 6.58103 9.14134 6.58103 9.53961 6.18276L12.2706 3.45172C13.162 2.54138 14.3379 2.06724 15.5327 2.06724C16.5 2.06724 17.4862 2.38965 18.3017 3.01552C20.1982 4.57069 20.4637 7.35862 18.9275 9.25517C18.8517 9.36896 18.7379 9.46379 18.6431 9.57759L15.7793 12.4414C15.381 12.8586 15.381 13.5034 15.7793 13.9207C16.1775 14.319 16.8603 14.319 17.2586 13.9207L20.1034 11.0569C22.6448 8.51552 22.6258 4.36207 20.1034 1.83965H20.0844Z", fill: iconColor }), (0, jsx_runtime_1.jsx)("path", { d: "M9.52063 13.9207L13.9396 9.48276C14.3379 9.06552 14.3379 8.40172 13.9396 8.00345C13.5413 7.60517 12.8586 7.60517 12.4603 8.00345L8.04132 12.4414C7.64305 12.8586 7.64305 13.5224 8.04132 13.9207C8.4396 14.319 9.10339 14.319 9.52063 13.9207Z", fill: iconColor })] })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", __assign({ id: "clip0_953_32" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "22", height: "22", fill: "white" }) })) })] })), type === "photo" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("g", __assign({ "clip-path": "url(#clip0_18_2)" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.145 11.506L21.882 18.061C21.9591 17.7125 21.9986 17.3569 22 17V14.234L15.477 9.174L13.145 11.506Z", fill: iconColor }), (0, jsx_runtime_1.jsx)("path", { d: "M0.515991 19.172C0.921748 20.0174 1.55773 20.7312 2.3509 21.2315C3.14407 21.7317 4.06225 21.9981 4.99999 22H17C17.7543 21.998 18.4983 21.8243 19.1755 21.4922C19.8528 21.1601 20.4456 20.6782 20.909 20.083L7.86499 10.3L0.515991 19.172Z", fill: iconColor }), (0, jsx_runtime_1.jsx)("path", { d: "M17 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 16.324L6.864 8.085C7.04585 7.87143 7.30242 7.7354 7.58125 7.70473C7.86007 7.67406 8.14007 7.75107 8.364 7.92L11.364 10.175L14.664 6.875C14.856 6.68529 15.1111 6.57281 15.3807 6.55898C15.6503 6.54515 15.9156 6.63094 16.126 6.8L22 11.44V5C22 3.67392 21.4732 2.40215 20.5355 1.46447C19.5979 0.526784 18.3261 0 17 0Z", fill: iconColor })] })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", __assign({ id: "clip0_18_2" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "22", height: "22", fill: "white" }) })) })] }))] })));
};
exports.FileIcon = FileIcon;
