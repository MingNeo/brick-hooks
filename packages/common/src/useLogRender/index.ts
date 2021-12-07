import { useEffect, useRef } from 'react'

/**
 * 打印当前组件/hooks中哪个参数变化了引起更新、组件渲染次数
 * 这个hooks在生产中一定要禁用掉！！
 * @param {*} props
 * @param {*} customCallback 可以通过callback自行进行打印输出
 * @returns renderTimes 组件渲染了多少次
 */
export default function useLogRender(props: Record<string, any>, customCallback: (changesObj: {}) => any) {
  const times = useRef(0)
  const previousProps = useRef<{}>()

  times.current++

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props })
      const changesObj = {}

      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changesObj[key] = {
            key,
            from: previousProps.current[key],
            to: props[key],
          }
        }
      })

      if (Object.keys(changesObj).length) {
        console.log('[why-update]', changesObj)
      }
      customCallback && customCallback(changesObj)
    }
    previousProps.current = props
  })

  return times.current
}
