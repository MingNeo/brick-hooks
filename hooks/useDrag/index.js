import { useEffect } from 'react';

export const useDrag = (props) => {
  let top;
  let left;
  let disX = null; // 初始X
  let disY = null;

  const updateElementStyle = style => {
    // 更新组件的style left/top，即可自由拖动组件
    console.log(props.id, style)
  }

  const getMovingPosition = (e) => {
    return {
      x: e.clientX - disX,
      y: e.clientY - disY,
    };
  };

  const dragMoving = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const { x, y } = getMovingPosition(event);
    if (!x && !y) return;
    updateElementStyle({
      top: top + y,
      left: left + x,
    });
  };

  const onMouseup = () => {
    document.removeEventListener('mousemove', dragMoving);
  };

  // 移除绑定事件
  const removeEventListeners = () => {
    document.removeEventListener('mouseup', onMouseup);
    document.removeEventListener('click', onMouseup);
    document.removeEventListener('mousemove', dragMoving);
  };

  // 每次点击选择组件后初始化位置并绑定事件
  const preparation = (e) => {
    disX = e.clientX;
    disY = e.clientY;
    removeEventListeners();
    document.addEventListener('mouseup', onMouseup, { once: true });
    document.addEventListener('click', onMouseup, { once: true });
  };

  const readyDrag = (e) => {
    e.preventDefault();
    if (e.button !== 0) return;
    preparation(e);
    const { styles = {} } = props;
    top = parseFloat(styles.top);
    left = parseFloat(styles.left);
    document.addEventListener('mousemove', dragMoving);
  };

  useEffect(() => {
    removeEventListeners();
    return function cleanup () {
      removeEventListeners();
    };
  }, []);

  return {
    readyDrag,
  };
};
