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
exports.Input = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
var react_1 = require("react");
var TextField_1 = require("./TextField");
var Textarea_1 = require("./Textarea");
var PhoneNumberField_1 = require("./PhoneNumberField");
var NumbericField_1 = require("./NumbericField");
var SearchField_1 = require("./SearchField");
var InputContainer_1 = require("./container/InputContainer");
function Input(_a) {
    var _b, _c;
    var label = _a.label, labelSize = _a.labelSize, labelColor = _a.labelColor, minWidth = _a.minWidth, maxWidth = _a.maxWidth, important = _a.important, props = __rest(_a, ["label", "labelSize", "labelColor", "minWidth", "maxWidth", "important"]);
    var child = react_1.Children.only(props.children);
    var _d = (_b = child === null || child === void 0 ? void 0 : child.props) !== null && _b !== void 0 ? _b : {}, error = _d.error, tolTip = _d.tolTip;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var id = (_c = child.props.id) !== null && _c !== void 0 ? _c : (0, react_1.useId)();
    return ((0, jsx_runtime_1.jsx)(InputContainer_1.InputContainer, __assign({ important: important, id: id, label: label, labelColor: labelColor, labelSize: labelSize, maxWidth: maxWidth, minWidth: minWidth, error: error, tolTip: tolTip }, { children: (0, react_1.cloneElement)(child, __assign({ id: id }, child.props)) })));
}
exports.Input = Input;
Input.TextField = TextField_1.TextField;
Input.Textarea = Textarea_1.Textarea;
Input.PhoneNumberField = PhoneNumberField_1.PhoneNumberField;
Input.NumbericField = NumbericField_1.NumbericField;
Input.SearchField = SearchField_1.SearchField;
