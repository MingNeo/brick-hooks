import { useEffect, useState, useRef } from 'react';
/**
 *  向页面中插入一段script
 */
export default function useScript(src, onStatusChange) {
    const [status, setStatus] = useState(src ? 'loading' : '');
    const methods = useRef({ onStatusChange });
    useEffect(() => {
        if (!src) {
            setStatus('');
            return;
        }
        let script = document.querySelector(`script[src="${src}"]`);
        let changeStatusFromEvent = (event) => {
            setStatus(event.type === 'load' ? 'success' : 'error');
            methods.current.onStatusChange && methods.current.onStatusChange(event.type);
            // whenLoaded 只执行一次
            if (event.type === 'load' &&
                methods.current.whenLoaded &&
                !methods.current.whenLoaded.fired) {
                methods.current.whenLoaded.fired = true;
                methods.current.whenLoaded();
            }
        };
        if (!script) {
            script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.setAttribute('data-status', 'loading');
            document.body.appendChild(script);
            const originOnStatusChange = changeStatusFromEvent;
            changeStatusFromEvent = (event) => {
                originOnStatusChange(event);
                script.setAttribute('data-status', event.type === 'load' ? 'success' : 'error');
            };
        }
        else {
            setStatus(script.getAttribute('data-status'));
        }
        script.addEventListener('load', changeStatusFromEvent);
        script.addEventListener('error', changeStatusFromEvent);
        return () => {
            if (script) {
                script.removeEventListener('load', changeStatusFromEvent);
                script.removeEventListener('error', changeStatusFromEvent);
            }
        };
    }, [src]);
    const whenLoaded = (cb) => {
        methods.current.whenLoaded = function () {
            cb();
        };
    };
    return { status, whenLoaded };
}
