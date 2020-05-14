"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
/**
 * 获取当前App前后台的状态
 * @param {*} navigation
 * @param {*} onAppStateChange
 */
function useAppState(onAppStateChange, navigation) {
    var handleChangeRef = react_1.useRef();
    var currentStateRef = react_1.useRef();
    handleChangeRef.current = function (nextState) {
        var routeName = ((navigation === null || navigation === void 0 ? void 0 : navigation.state) || {}).routeName;
        var prevState = currentStateRef.current;
        currentStateRef.current = react_native_1.AppState.currentState;
        onAppStateChange(nextState, prevState, routeName);
    };
    react_1.useEffect(function () {
        var handleAppStateChange = handleChangeRef.current;
        react_native_1.AppState.addEventListener('change', handleAppStateChange);
        return function () {
            react_native_1.AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);
}
exports.default = useAppState;
