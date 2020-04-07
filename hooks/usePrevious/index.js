import { useRef, useEffect } from 'react';

export default function usePrevious(value) {
  const ref = useRef();
  // useEffect会在完成这次'渲染'之后执行
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
