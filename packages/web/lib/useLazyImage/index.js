"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// 判断是否在可视区域里面
function isInWindow(node) {
    var bound = node.getBoundingClientRect();
    var clientHeight = window.innerHeight;
    return bound.top <= clientHeight + 100;
}
// 加载图片
function checkImgs(querySelector, sourceAttr) {
    var imgs = document.querySelectorAll(querySelector);
    Array.from(imgs).forEach(function (node) {
        if (isInWindow(node) && !node.src) {
            var source = node.getAttribute(sourceAttr);
            node.src = source || '';
        }
    });
}
/**
 * 对图片自动判断是否在可视区域并进行懒加载
 * 图片不设置src而设置一个sourceAttr，并使用这个hook
 * @param querySelector
 * @param sourceAttr
 */
function useLazyImages(querySelector, sourceAttr) {
    if (sourceAttr === void 0) { sourceAttr = 'data-src'; }
    react_1.useEffect(function () {
        checkImgs(querySelector, sourceAttr);
        var onScroll = function () { return checkImgs(querySelector, sourceAttr); };
        window.addEventListener('scroll', onScroll);
        return function () {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
}
exports.default = useLazyImages;
