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
exports.getDateRange = void 0;
var react_1 = require("react");
var dayjs_1 = __importDefault(require("dayjs"));
var isSameOrAfter_1 = __importDefault(require("dayjs/plugin/isSameOrAfter"));
var bricks_hooks_1 = require("bricks-hooks");
var defaultKeyMap_1 = require("./defaultKeyMap");
dayjs_1.default.extend(isSameOrAfter_1.default);
function isNil(value) {
    return value !== '' && value !== undefined && value !== null;
}
var methods = {
    setState: function (state, payload) { return (__assign(__assign({}, state), payload)); },
    setDates: function (state, nextValue) { return (__assign(__assign({}, state), { dates: nextValue })); },
    setModel: function (state, nextValue) { return (__assign(__assign({}, state), { model: nextValue })); },
    setCycle: function (state, nextValue) { return (__assign(__assign({}, state), { cycle: nextValue })); },
    setRange: function (state, nextValue) { return (__assign(__assign({}, state), { dates: nextValue })); },
};
/**
 * 日期周期/区间选择，用于周期购等场景
 */
function useDateCycle(defaultData, options) {
    if (defaultData === void 0) { defaultData = {}; }
    if (options === void 0) { options = {}; }
    var _a = options.modelKeyMap, modelKeyMap = _a === void 0 ? defaultKeyMap_1.defaultModelKeyMap : _a, _b = options.cycleKeyMap, cycleKeyMap = _b === void 0 ? defaultKeyMap_1.defaultCycleKeyMap : _b, customModels = options.customModels, customCycles = options.customCycles;
    var _c = defaultData.model, defaultModel = _c === void 0 ? '' : _c, _d = defaultData.cycle, defaultCycle = _d === void 0 ? '' : _d, _e = defaultData.dates, defaultDates = _e === void 0 ? [] : _e;
    var _f = __read(bricks_hooks_1.useMethods(methods, {
        dates: defaultDates || [],
        model: defaultModel,
        cycle: defaultCycle,
        range: exports.getDateRange(defaultDates || []),
    }), 2), _g = _f[0], dates = _g.dates, model = _g.model, cycle = _g.cycle, range = _g.range, dateCycleMethods = _f[1];
    var models = customModels || [
        { label: '单次购', value: modelKeyMap.singleday },
        { label: '每日送', value: modelKeyMap.everyday },
        { label: '工作日送', value: modelKeyMap.weekday },
        { label: '单日送', value: modelKeyMap.oddday },
        { label: '双日送', value: modelKeyMap.evenday },
        { label: '三日送', value: modelKeyMap.threeday },
        { label: '周末送', value: modelKeyMap.weekend },
    ];
    var cycles = customCycles || [
        { label: '随心订', value: cycleKeyMap.custom },
        { label: '下个月', value: cycleKeyMap.nextMonth },
        { label: '下两个月', value: cycleKeyMap.nextTwoMonth },
        { label: '下三个月', value: cycleKeyMap.nextThreeMonth },
    ];
    var onChangeModel = function (newModel) {
        dateCycleMethods.setModel(newModel);
        setRangeAndDates({ cycle: cycle, model: newModel });
    };
    var onChangeCycle = function (newCycle) {
        dateCycleMethods.setCycle(newCycle);
        setRangeAndDates({ cycle: newCycle, model: model });
    };
    var onChangeDates = function (newDates) {
        // setDates(newDates);
        setRangeAndDates({ cycle: cycle, model: model, dates: newDates }, true);
    };
    var setRangeAndDates = react_1.useCallback(function (_a, setRangeBydate) {
        var _b;
        var newCycle = _a.cycle, newModel = _a.model, newDates = _a.dates;
        if (setRangeBydate === void 0) { setRangeBydate = false; }
        var currentRange = range && range.length ? range : [];
        if (isNil(newCycle) && newCycle !== cycleKeyMap.custom) {
            var current = dayjs_1.default();
            var monthNum = (_b = {},
                _b[cycleKeyMap.nextMonth] = 1,
                _b[cycleKeyMap.nextTwoMonth] = 2,
                _b[cycleKeyMap.nextThreeMonth] = 3,
                _b)[newCycle];
            currentRange = getMonthRange(current, monthNum);
            dateCycleMethods.setRange(currentRange);
        }
        else if (setRangeBydate || !range) {
            currentRange = exports.getDateRange(newDates || dates);
            dateCycleMethods.setRange(currentRange);
        }
        var dateList = getRangeDate(currentRange).filter(function (date) { return !getIsDateDisabled(date, newModel || model, modelKeyMap); });
        dateCycleMethods.setDates(dateList);
    }, [model, range, cycle, dates, modelKeyMap]);
    var prevModel = bricks_hooks_1.usePrevious(model);
    var prevCycle = bricks_hooks_1.usePrevious(cycle);
    react_1.useEffect(function () {
        dateCycleMethods.setModel(defaultData.model);
    }, [defaultData.model]);
    react_1.useEffect(function () {
        dateCycleMethods.setCycle(defaultData.cycle);
    }, [defaultData.cycle]);
    // 校验当前时间点是否可选
    var checkDateDisable = react_1.useCallback(function (current) {
        // 当前日期两天之后之前禁选
        if (current && current.isSameOrBefore(dayjs_1.default().add(2, 'd')))
            return true;
        if (!isCycleInRange(current, cycle, cycleKeyMap))
            return true;
        var isDisabled = getIsDateDisabled(current, model, modelKeyMap);
        return isDisabled;
    }, [model, cycle, modelKeyMap, cycleKeyMap]);
    return {
        dates: dates,
        onChangeDates: onChangeDates,
        model: model,
        models: models,
        cycles: cycles,
        range: range,
        setRange: dateCycleMethods.setRange,
        onChangeModel: onChangeModel,
        cycle: cycle,
        onChangeCycle: onChangeCycle,
        checkDateDisable: checkDateDisable,
    };
}
exports.default = useDateCycle;
function getIsDateDisabled(current, model, modelKeyMap) {
    var currDate = dayjs_1.default(current);
    switch (model) {
        case modelKeyMap.everyday:
            return false;
        case modelKeyMap.weekday:
            return [1, 2, 3, 4, 5].includes(currDate.day());
        case modelKeyMap.oddday:
            return currDate.date() % 2 === 0;
        case modelKeyMap.evenday:
            return currDate.date() % 2 !== 0;
        case modelKeyMap.threeday:
            return currDate.date() % 3 !== 0;
        case modelKeyMap.weekend:
            return [0, 6].includes(currDate.day());
        default:
            return false;
    }
}
function isCycleInRange(current, cycle, cycleKeyMap) {
    switch (cycle) {
        case cycleKeyMap.nextMonth:
            return isInMonthRange(current, 1);
        case cycleKeyMap.nextTwoMonth:
            return isInMonthRange(current, 2);
        case cycleKeyMap.nextThreeMonth:
            return isInMonthRange(current, 3);
        default:
            return true;
    }
}
var getMonthRange = function (current, m) {
    if (m === void 0) { m = 1; }
    return [dayjs_1.default(current).add(1, 'M').date(1), dayjs_1.default(current).add(m, 'M').endOf('month')];
};
exports.getDateRange = function (dates) {
    var sortValue = dates.sort(function (a, b) { return dayjs_1.default(a).diff(b); });
    return sortValue.length ? [dayjs_1.default(sortValue[0]), dayjs_1.default(sortValue[sortValue.length - 1])] : [];
};
/**
 *
 * @param {*} current 当前时间 moment对象
 * @param {*} m 月份间隔
 */
function isInMonthRange(current, m) {
    if (m === void 0) { m = 1; }
    var _a = __read(getMonthRange(dayjs_1.default(), m), 2), start = _a[0], end = _a[1];
    return current.isBetween(start, end, 'day', '[]');
}
// 获取连续日期内的所有时间
function getRangeDate(_a) {
    var _b = __read(_a === void 0 ? [] : _a, 2), start = _b[0], end = _b[1];
    var current = dayjs_1.default(start);
    var list = [];
    var next = true;
    while (next) {
        if (current.isSameOrBefore(end)) {
            list.push(current.format('YYYY-MM-DD'));
            current.add(1, 'd');
        }
        else {
            next = false;
        }
    }
    return list;
}
