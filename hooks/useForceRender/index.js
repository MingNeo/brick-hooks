import { useState, useCallback } from 'react';

/**
 * 此hooks提供一个reRender方法，调用时可强制重新渲染组件
 */
export default function useForceRender() {
  const [, setFlag] = useState();
  const reRender = useCallback(() => {
    setFlag(Date.now());
  }, []);

  return reRender;
}
