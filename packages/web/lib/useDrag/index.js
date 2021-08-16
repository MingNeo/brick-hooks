"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 可以快速给一个绝对定位的节点提供自由拖拽能力
 * @param props
 * @returns
 */
function useDrag(_a) {
    var _b = _a === void 0 ? {} : _a, initialRect = _b.rect, onDragMoving = _b.onDragMoving;
    var dragInfo = react_1.useRef({
        top: Number(initialRect === null || initialRect === void 0 ? void 0 : initialRect.top),
        left: Number(initialRect === null || initialRect === void 0 ? void 0 : initialRect.left),
        disX: null,
        disY: null,
    });
    var methods = react_1.useMemo(function () {
        var getMovingPosition = function (e) {
            return {
                x: e.clientX - (dragInfo.current.disX || 0),
                y: e.clientY - (dragInfo.current.disY || 0),
            };
        };
        var dragMoving = function (event) {
            event.stopPropagation();
            event.preventDefault();
            var _a = getMovingPosition(event), x = _a.x, y = _a.y;
            if (!x && !y)
                return;
            onDragMoving({
                top: dragInfo.current.top + y,
                left: dragInfo.current.left + x,
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
            dragInfo.current.disX = e.clientX;
            dragInfo.current.disY = e.clientY;
            removeEventListeners();
            document.addEventListener('mouseup', onMouseup, { once: true });
            document.addEventListener('click', onMouseup, { once: true });
        };
        var readyDrag = function (e) {
            e.preventDefault();
            if (e.button !== 0)
                return;
            preparation(e);
            dragInfo.current.top = Number(initialRect === null || initialRect === void 0 ? void 0 : initialRect.top);
            dragInfo.current.left = Number(initialRect === null || initialRect === void 0 ? void 0 : initialRect.left);
            document.addEventListener('mousemove', dragMoving);
        };
        return {
            readyDrag: readyDrag,
            removeEventListeners: removeEventListeners,
        };
    }, []);
    react_1.useEffect(function () {
        methods.removeEventListeners();
        return function cleanup() {
            methods.removeEventListeners();
        };
    }, []);
    return {
        onMousedown: methods.readyDrag,
        readyDrag: methods.readyDrag,
        rect: dragInfo.current,
    };
}
exports.default = useDrag;
