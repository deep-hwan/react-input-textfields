"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUid = void 0;
var useUid = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.length, length = _c === void 0 ? 10 : _c;
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};
exports.useUid = useUid;
