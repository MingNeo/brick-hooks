import { useMemo, useState } from 'react';
function useMethods(methods, initialState) {
    const [value, setValue] = useState(initialState);
    const { boundMethods, dispatch } = useMemo(() => {
        const dispatch = (actionName, ...args) => {
            const fn = methods[actionName];
            setValue((value) => fn(value, ...args));
        };
        const boundMethods = Object.entries(methods).reduce((methods, [name, fn]) => {
            const method = (...args) => {
                setValue((value) => fn(value, ...args));
            };
            methods[name] = method;
            return methods;
        }, { dispatch });
        return {
            boundMethods,
            dispatch,
        };
    }, [methods]);
    return [value, boundMethods, dispatch];
}
export default useMethods;
