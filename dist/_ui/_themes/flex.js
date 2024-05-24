"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexTheme = void 0;
var FlexTheme = function (_a) {
    var _b, _c, _d, _e;
    var flex = _a.flex, _f = _a.direction, direction = _f === void 0 ? 'vertical' : _f, align = _a.align, crossAlign = _a.crossAlign, gap = _a.gap, crossGap = _a.crossGap, _g = _a.wrap, wrap = _g === void 0 ? 'nowrap' : _g, basis = _a.basis, grow = _a.grow, shrink = _a.shrink;
    var FLEX_VARIANTS = {
        horizontal: {
            flexDirection: 'row',
            align: align !== null && align !== void 0 ? align : 'stretch',
            rowGap: crossGap,
            columnGap: gap,
        },
        vertical: {
            flexDirection: 'column',
            align: align !== null && align !== void 0 ? align : 'start',
            rowGap: gap,
            columnGap: crossGap,
        },
        'horizontal-reverse': {
            flexDirection: 'row',
            align: align !== null && align !== void 0 ? align : 'stretch',
            rowGap: crossGap,
            columnGap: gap,
        },
        'vertical-reverse': {
            flexDirection: 'column',
            align: align !== null && align !== void 0 ? align : 'start',
            rowGap: gap,
            columnGap: crossGap,
        },
    };
    return {
        display: 'flex',
        flex: flex,
        justifyContent: crossAlign,
        flexDirection: (_b = FLEX_VARIANTS[direction].flexDirection) !== null && _b !== void 0 ? _b : 'column',
        alignItems: (_c = FLEX_VARIANTS[direction].align) !== null && _c !== void 0 ? _c : 'start',
        rowGap: (_d = FLEX_VARIANTS[direction].rowGap) !== null && _d !== void 0 ? _d : 0,
        columnGap: (_e = FLEX_VARIANTS[direction].columnGap) !== null && _e !== void 0 ? _e : 0,
        flexWrap: wrap !== null && wrap !== void 0 ? wrap : 'nowrap',
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
    };
};
exports.FlexTheme = FlexTheme;
