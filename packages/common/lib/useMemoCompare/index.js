"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 这个hooks 返回一个memo的值，可以使用compare函数与自身的上一次值做比较
 * @param nextValue
 * @param compare
 */
function useMemoCompare(nextValue, compare) {
    var previousRef = react_1.useRef();
    var isEqual = compare(previousRef.current, nextValue);
    react_1.useEffect(function () {
        if (!isEqual) {
            previousRef.current = nextValue;
        }
    });
    return isEqual ? previousRef.current : nextValue;
}
exports.default = useMemoCompare;
