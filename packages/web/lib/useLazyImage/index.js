"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// 判断是否在可视区域里面
var isInWindow = function (node) {
    var bound = node.getBoundingClientRect();
    var clientHeight = window.innerHeight;
    return bound.top <= clientHeight + 100;
};
// 加载图片
function checkImgs(querySelector, sourceAttr, checkIsInWindow) {
    var imgs = document.querySelectorAll(querySelector);
    Array.from(imgs).forEach(function (node) {
        if (checkIsInWindow(node) && !node.src) {
            var source = node.getAttribute(sourceAttr);
            node.src = source || '';
        }
    });
}
/**
 * 对图片自动判断是否在可视区域并进行懒加载
 * 图片不设置src而设置一个sourceAttr，并使用这个hook
 * @param querySelector
 * @param options.sourceAttr
 * @param options.checkIsInWindow 自定义检测是否在视口中
 */
function useLazyImages(querySelector, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.sourceAttr, sourceAttr = _c === void 0 ? 'data-src' : _c, _d = _b.checkIsInWindow, checkIsInWindow = _d === void 0 ? isInWindow : _d;
    react_1.useEffect(function () {
        checkImgs(querySelector, sourceAttr, checkIsInWindow);
        var onScroll = function () { return checkImgs(querySelector, sourceAttr, checkIsInWindow); };
        window.addEventListener('scroll', onScroll);
        return function () {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
}
exports.default = useLazyImages;
