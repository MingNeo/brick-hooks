import { useEffect } from 'react'

interface Options {
  store?: any
  assign?: boolean
}

/**
 * 对useObjectState等自动包装成useStore的全局数据,
 * useState、useObjectState、useMethods等通用，如果已存在该store module,则对state进行合并
 */
export default function useStoreWrap<S extends Record<string, any>>(
  moduleName: string,
  state: S,
  { store, assign = true }: Options = {}
) {
  useEffect(() => {
    store?.setModuleState(moduleName, state, assign)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
}
