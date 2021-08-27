import { useEffect } from 'react';
/**
 *  向页面中插入一段style
 */
export default function useStyle(styleContent, id) {
    useEffect(() => {
        let style = document.querySelector(`style#${id}`);
        if (!style) {
            style = document.createElement('style');
            style.type = 'text/css';
            style.innerText = styleContent;
            document.body.appendChild(style);
        }
    }, [id, styleContent]);
}
