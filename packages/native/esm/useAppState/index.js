import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
/**
 * 获取当前App前后台的状态
 * @param {*} navigation
 * @param {*} onAppStateChange
 */
export default function useAppState(onAppStateChange) {
    const handleChangeRef = useRef();
    const currentStateRef = useRef();
    handleChangeRef.current = function (nextState) {
        const prevState = currentStateRef.current;
        currentStateRef.current = AppState.currentState;
        onAppStateChange(nextState, prevState);
    };
    useEffect(() => {
        const handleAppStateChange = handleChangeRef.current;
        AppState.addEventListener('change', handleAppStateChange);
        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);
}
