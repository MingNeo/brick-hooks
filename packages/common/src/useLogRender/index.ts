import { useEffect, useRef } from 'react'
import useRenderCount from '../useRenderCount'

/**
 * 打印当前组件/hooks中哪个参数变化了引起更新、组件渲染次数
 * 这个hooks在生产中一定要禁用掉！！
 * @param {*} props
 * @param {*} customCallback 可以通过callback自行进行打印输出
 * @returns renderTimes 组件渲染了多少次
 */
export default function useLogRender(props: Record<string, any> = {}, customCallback?: (changesObj: {}) => any) {
  const previousProps = useRef<{}>()
  const renderCount = useRenderCount()

  const changedMapRef = useRef<any>({})

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props })
      const changedMap = (changedMapRef.current = {})

      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changedMap[key] = {
            key,
            from: previousProps.current[key],
            to: props[key],
          }
        }
      })

      renderCount && console.log('[render count]:', renderCount)
      Object.keys(changedMap).length && console.log('[why update]:', changedMap)

      customCallback && customCallback(changedMap)
    }
    previousProps.current = props
  })

  return { renderCount, changedMap: changedMapRef.current }
}
