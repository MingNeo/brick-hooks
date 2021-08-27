import { useState } from 'react';
import { getCookie, setCookie } from './cookie';
export default function useCookie(key) {
    const getItem = () => getCookie(key);
    const [item, setItem] = useState(getItem);
    const updateItem = (value, options = { days: 7, path: '/' }) => {
        setItem(value);
        setCookie(key, value, options);
    };
    const refreshItem = () => {
        const newItem = getItem();
        setItem(newItem);
    };
    return [item, updateItem, { getItem, refreshItem }];
}
