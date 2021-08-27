"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 *  向页面中插入一段style
 */
function useStyle(styleContent, id) {
    react_1.useEffect(function () {
        var style = document.querySelector("style#" + id);
        if (!style) {
            style = document.createElement('style');
            style.type = 'text/css';
            style.innerText = styleContent;
            document.body.appendChild(style);
        }
    }, [id, styleContent]);
}
exports.default = useStyle;
