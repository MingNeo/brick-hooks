"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 提供一个类似于componentDidUpdate生命周期的hooks，首次不执行，仅更新时执行方法
 * @param fn
 * @param dep
 */
function useDidUpdate(fn, dep) {
    var ref = react_1.useRef({ fn: fn, mounted: false });
    ref.current.fn = fn;
    react_1.useEffect(function () {
        // 首次渲染不执行
        if (!ref.current.mounted) {
            ref.current.mounted = true;
        }
        else {
            ref.current.fn();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dep);
}
exports.default = useDidUpdate;
