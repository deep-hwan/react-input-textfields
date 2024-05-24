"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MQ = void 0;
// ----------------------------
// -------- MediaQuery --------
// ----------------------------
var screenSize = [1440, 1080, 780, 600, 438];
exports.MQ = screenSize.map(function (bp) { return "@media (max-width: ".concat(bp, "px)"); });
