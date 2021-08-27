import { useState, useRef } from 'react';
import isEqual from 'lodash.isequal';
import cloneDeep from 'lodash.clonedeep';
/**
 * 在每次更新时进行深比较，并返回新的值
 * 深比较比较耗性能，慎用
 */
export default function useDeepCompare(value) {
    const [state, setState] = useState({ value, isEqual: true });
    const isEqualRef = useRef(true);
    if (value && !isEqual(value, state.value)) {
        isEqualRef.current = false;
        setState({ isEqual: false, value: cloneDeep(value) });
    }
    else if (isEqualRef.current && !state.isEqual) {
        setState(prevState => ({ isEqual: true, value: prevState.value }));
    }
    return state;
}
