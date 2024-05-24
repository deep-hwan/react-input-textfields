"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpaceTheme = void 0;
var SpaceTheme = function (_a) {
    var P = _a.padding, M = _a.margin;
    var p_all = P === null || P === void 0 ? void 0 : P.all;
    var p_V = P === null || P === void 0 ? void 0 : P.vertical;
    var p_H = P === null || P === void 0 ? void 0 : P.horizontal;
    var p_T = P === null || P === void 0 ? void 0 : P.top;
    var p_B = P === null || P === void 0 ? void 0 : P.bottom;
    var p_L = P === null || P === void 0 ? void 0 : P.left;
    var p_R = P === null || P === void 0 ? void 0 : P.right;
    var m_all = M === null || M === void 0 ? void 0 : M.all;
    var m_V = M === null || M === void 0 ? void 0 : M.vertical;
    var m_H = M === null || M === void 0 ? void 0 : M.horizontal;
    var m_T = M === null || M === void 0 ? void 0 : M.top;
    var m_B = M === null || M === void 0 ? void 0 : M.bottom;
    var m_L = M === null || M === void 0 ? void 0 : M.left;
    var m_R = M === null || M === void 0 ? void 0 : M.right;
    return {
        paddingTop: (p_all && p_all) || (p_V && p_V) || (p_T && p_T),
        paddingBottom: (p_all && p_all) || (p_V && p_V) || (p_B && p_B),
        paddingLeft: (p_all && p_all) || (p_H && p_H) || (p_L && p_L),
        paddingRight: (p_all && p_all) || (p_H && p_H) || (p_R && p_R),
        marginTop: (m_all && m_all) || (m_V && m_V) || (m_T && m_T),
        marginBottom: (m_all && m_all) || (m_V && m_V) || (m_B && m_B),
        marginLeft: (m_all && m_all) || (m_H && m_H) || (m_L && m_L),
        marginRight: (m_all && m_all) || (m_H && m_H) || (m_R && m_R),
    };
};
exports.SpaceTheme = SpaceTheme;
