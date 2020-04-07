"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 可以快速给一个绝对定位的节点提供自由拖拽能力
 * @param props
 * @returns
 */
function useDrag(props) {
    var top;
    var left;
    var disX = null; // 初始X
    var disY = null;
    var getMovingPosition = function (e) {
        return {
            x: e.clientX - (disX || 0),
            y: e.clientY - (disY || 0),
        };
    };
    var dragMoving = function (event) {
        event.stopPropagation();
        event.preventDefault();
        var _a = getMovingPosition(event), x = _a.x, y = _a.y;
        if (!x && !y)
            return;
        props.onDragMoving({
            top: top + y,
            left: left + x,
        });
    };
    var onMouseup = function () {
        document.removeEventListener('mousemove', dragMoving);
    };
    // 移除绑定事件
    var removeEventListeners = function () {
        document.removeEventListener('mouseup', onMouseup);
        document.removeEventListener('click', onMouseup);
        document.removeEventListener('mousemove', dragMoving);
    };
    // 每次点击选择组件后初始化位置并绑定事件
    var preparation = function (e) {
        disX = e.clientX;
        disY = e.clientY;
        removeEventListeners();
        document.addEventListener('mouseup', onMouseup, { once: true });
        document.addEventListener('click', onMouseup, { once: true });
    };
    var readyDrag = function (e) {
        e.preventDefault();
        if (e.button !== 0)
            return;
        preparation(e);
        var _a = props.styles, styles = _a === void 0 ? {} : _a;
        top = parseFloat(styles.top);
        left = parseFloat(styles.left);
        document.addEventListener('mousemove', dragMoving);
    };
    react_1.useEffect(function () {
        removeEventListeners();
        return function cleanup() {
            removeEventListeners();
        };
    }, []);
    return {
        readyDrag: readyDrag,
    };
}
exports.default = useDrag;
