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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 打印当前组件/hooks中哪个参数变化了引起更新、组件渲染次数
 * 这个hooks在生产中一定要禁用掉！！
 * @param {*} props
 * @param {*} customCallback 可以通过callback自行进行打印输出
 * @returns renderTimes 组件渲染了多少次
 */
function useLogRender(props, customCallback) {
    var times = react_1.useRef(0);
    var previousProps = react_1.useRef();
    times.current++;
    react_1.useEffect(function () {
        if (previousProps.current) {
            var allKeys = Object.keys(__assign(__assign({}, previousProps.current), props));
            var changesObj_1 = {};
            allKeys.forEach(function (key) {
                if (previousProps.current[key] !== props[key]) {
                    changesObj_1[key] = {
                        key: key,
                        from: previousProps.current[key],
                        to: props[key],
                    };
                }
            });
            if (Object.keys(changesObj_1).length) {
                console.log('[why-update]', changesObj_1);
            }
            customCallback && customCallback(changesObj_1);
        }
        previousProps.current = props;
    });
    return times.current;
}
exports.default = useLogRender;
