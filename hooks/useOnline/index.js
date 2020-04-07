import { useState, useEffect } from 'react';

const getOnlineStatus = () => (typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean' ? navigator.onLine : true);

/**
 * 获取当前是否在线状态
 */
export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(getOnlineStatus());

  useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  return isOnline;
}
