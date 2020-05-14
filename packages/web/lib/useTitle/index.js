"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/**
 * 设置h5标题
 * @param title
 */
function useTitle(title) {
    react_1.useEffect(function () {
        try {
            document.title = title;
        }
        catch (e) {
            console.error(e);
        }
    }, [title]);
}
exports.default = useTitle;
