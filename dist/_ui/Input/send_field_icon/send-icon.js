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
exports.SendIcon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var SendIcon = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "upload" : _b, _c = _a.iconColor, iconColor = _c === void 0 ? "#a7afc2" : _c, props = __rest(_a, ["type", "iconColor"]);
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: [type === "upload" && ((0, jsx_runtime_1.jsx)("path", { d: "M-4.80825e-07 11C-3.85727e-07 13.1756 0.645138 15.3023 1.85383 17.1113C3.06253 18.9202 4.78049 20.3301 6.79048 21.1627C8.80047 21.9952 11.0122 22.2131 13.146 21.7886C15.2798 21.3642 17.2398 20.3165 18.7782 18.7782C20.3166 17.2398 21.3642 15.2798 21.7886 13.146C22.2131 11.0122 21.9952 8.80046 21.1627 6.79048C20.3301 4.78049 18.9202 3.06252 17.1113 1.85383C15.3023 0.645131 13.1756 -6.29797e-06 11 -6.20287e-06C8.08262 -6.07535e-06 5.28472 1.15892 3.22182 3.22182C1.15892 5.28472 -6.08348e-07 8.08261 -4.80825e-07 11ZM11.486 5.92299L15.53 9.15299C15.6167 9.22803 15.6872 9.31993 15.7372 9.42307C15.7872 9.52622 15.8157 9.63847 15.821 9.75299C15.8213 9.86278 15.7994 9.9715 15.7568 10.0727C15.7142 10.1739 15.6517 10.2655 15.573 10.342C15.4227 10.4871 15.2231 10.5702 15.0142 10.5747C14.8053 10.5791 14.6024 10.5046 14.446 10.366L11.811 8.27799L11.811 15.467C11.8061 15.6789 11.7191 15.8806 11.5683 16.0295C11.4175 16.1785 11.2147 16.263 11.0027 16.2652C10.7908 16.2674 10.5863 16.1871 10.4324 16.0414C10.2785 15.8956 10.1873 15.6957 10.178 15.484L10.178 8.253L7.548 10.453C7.39517 10.5864 7.19858 10.659 6.99571 10.6568C6.79284 10.6545 6.59788 10.5777 6.448 10.441C6.29077 10.2995 6.19599 10.1015 6.18437 9.89029C6.17275 9.67909 6.24524 9.47188 6.386 9.314L6.431 9.27L10.386 5.91999C10.5382 5.78673 10.7337 5.71327 10.936 5.71327C11.1383 5.71327 11.3338 5.78673 11.486 5.91999", fill: iconColor })), type === "direct" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("g", __assign({ "clip-path": "url(#clip0_960_2)" }, { children: (0, jsx_runtime_1.jsx)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.82361 12.0327L11.6818 9.44513L8.85681 13.3357L11.3719 20.3581C11.4882 20.6825 11.7036 20.9651 11.9891 21.1682C12.2746 21.3713 12.6167 21.4853 12.9698 21.4949C13.323 21.5045 13.6704 21.4093 13.9657 21.222C14.261 21.0347 14.4901 20.7642 14.6226 20.4466L21.7736 3.22504C21.8934 2.93506 21.9276 2.6181 21.8724 2.30968C21.8172 2.00125 21.6747 1.71355 21.4609 1.4788C21.2471 1.24405 20.9704 1.07152 20.6619 0.98056C20.3534 0.889594 20.0253 0.88378 19.7142 0.963769L1.23647 5.67945C0.893845 5.76701 0.587545 5.95474 0.358971 6.21728C0.130397 6.47981 -0.00942822 6.80448 -0.0416042 7.1474C-0.0737802 7.49032 0.00324625 7.83496 0.179061 8.13471C0.354877 8.43447 0.621003 8.67489 0.941466 8.82348L7.82361 12.0327Z", fill: iconColor }) })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", __assign({ id: "clip0_960_2" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "22", height: "22", fill: "white" }) })) })] }))] })));
};
exports.SendIcon = SendIcon;
