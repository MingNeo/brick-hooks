"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var dayjs_1 = __importDefault(require("dayjs"));
var methods = {
    everyday: function () { return false; },
    weekday: function (currentMoment) { return [1, 2, 3, 4, 5].includes(currentMoment.day()); },
    oddday: function (currentMoment) { return currentMoment.date() % 2 === 0; },
    evenday: function (currentMoment) { return currentMoment.date() % 2 !== 0; },
    threeday: function (currentMoment) { return currentMoment.date() % 3 !== 0; },
    weekend: function (currentMoment) { return [0, 6].includes(currentMoment.day()); },
};
/**
 * 日期周期/区间选择，用于周期购等场景
 */
function useDateCycle(defaultData) {
    if (defaultData === void 0) { defaultData = {}; }
    // model type everyday 每日送 weekday 工作日送 oddday 单日 evenday 双日 threeday 三日送 weekend 周末送
    var _a = __read(react_1.useState(defaultData.model || ''), 2), model = _a[0], setModel = _a[1];
    // 周期 自选、下个月、下两个月、下三个月
    var _b = __read(react_1.useState(defaultData.cycle || ''), 2), cycle = _b[0], setCycle = _b[1];
    // 校验当前时间点是否可选
    var checkDateDisable = react_1.useCallback(function (current) {
        // 当前日期两天之后之前禁选
        if (current && current.isSameOrBefore(dayjs_1.default().add(2, 'd')))
            return true;
        if (!isCycleInRange(current, cycle))
            return true;
        return methods[model] ? methods[model](current) : false;
    }, [model, cycle]);
    return {
        model: model,
        onChangeModel: setModel,
        cycle: cycle,
        onChangeCycle: setCycle,
        checkDateDisable: checkDateDisable,
    };
}
exports.default = useDateCycle;
function isCycleInRange(current, cycle) {
    switch (cycle) {
        case 'nextMonth':
            return isInMonthRange(current, 1);
        case 'nextTwoMonth':
            return isInMonthRange(current, 2);
        case 'nextThreeMonth':
            return isInMonthRange(current, 3);
        default:
            return true;
    }
}
/**
 *
 * @param {*} current 当前时间 moment对象
 * @param {*} m 月份间隔
 */
function isInMonthRange(current, m) {
    if (m === void 0) { m = 1; }
    return current.isBetween(dayjs_1.default().add(1, 'M').date(1), dayjs_1.default().add(m, 'M').endOf('month'), undefined, '[]');
}
