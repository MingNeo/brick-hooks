import { useEffect } from 'react';

/**
 * 设置h5标题
 * @param title 
 */
export default function useTitle(title: string) {
  useEffect(() => {
    try {
      document.title = title;
    } catch (e) {
      console.error(e)
    }
  }, [title]);
}
