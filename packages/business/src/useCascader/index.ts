import { useCallback, useEffect, useMemo, useRef } from 'react'
import { useAsync, useDataListToTree, useMethodsImmer, useRefCallback } from 'brick-hooks'

type Id = string | number
type CascaderNode = {
  checked?: boolean
  id: Id
  level?: number
  name?: string
  [x: string]: any
}

interface State {
  nodeMap: Record<string, CascaderNode>
  disabledIds: any[]
  activeIds: Id[]
  multipleActive?: boolean
}

const DEFAULT_PARENT_KEY = 'pid'

export function isNil(value: any) {
  return value === undefined || value === null
}

const reducers = {
  // 请求加载子节点数据后更新到nodeMap中
  addNodes: (
    state: State,
    payload: { nodes: any; parentId: any; checked?: boolean; disabled?: boolean; parentIdKey?: string; level?: number },
  ) => {
    const { nodes, parentId, checked, disabled, parentIdKey = DEFAULT_PARENT_KEY, level } = payload
    nodes?.forEach((node: CascaderNode) => {
      const { children, ...nodeInfo } = node
      state.nodeMap[node.id] = {
        ...nodeInfo,
        level,
        [parentIdKey]: node[parentIdKey] ?? parentId,
      }

      const nodeChecked = checked
      if (!isNil(nodeChecked)) {
        state.nodeMap[node.id].checked = nodeChecked
      }
      const nodeDisabled = state.disabledIds.includes(node.id) || disabled
      if (!isNil(nodeDisabled)) {
        state.nodeMap[node.id].disabled = nodeDisabled
      }
    })
  },
  // 一次性更新所有节点
  setNodes: (
    state: State,
    payload: {
      nodes: {
        id: string
        name: string
        checked: boolean
        disabled: boolean
        pid: string
      }[]
      parentIdKey?: string
    },
  ) => {
    const { nodes } = payload
    state.nodeMap = {}
    nodes?.forEach((node: CascaderNode) => {
      const { children, ...nodeInfo } = node
      state.nodeMap[node.id] = nodeInfo

      const nodeDisabled = state.disabledIds.includes(node.id) || node.disabled
      if (!isNil(nodeDisabled)) {
        state.nodeMap[node.id].disabled = nodeDisabled
      }
      state.nodeMap[node.id].level = node.level ?? (node.pid ? state.nodeMap[node.pid].level + 1 : 1)
    })
  },

  // 批量更新选中的节点
  setCheckeds: (state: State, { ids, checked }: { ids: string[] | number[]; checked: boolean }) => {
    ids.forEach((v: Id) => {
      state.nodeMap[v].checked = checked
    })
  },

  // 批量更新禁用状态, 只记录禁用状态
  setDisableds: (state: State, { ids, disabled }: { ids: string[] | number[]; disabled: boolean }) => {
    ids?.forEach((v: Id) => {
      state.nodeMap[v].disabled = disabled
    })
  },

  // 清空选中节点
  clearCheckeds: (state: State) => {
    Object.keys(state.nodeMap || {}).forEach((v) => {
      state.nodeMap[v].checked = false
    })
  },

  /**
   * 更新指定节点选中状态
   */
  toggleChecked: (state: State, { id, checked }: any) => {
    if (!state.nodeMap[id]) return
    state.nodeMap[id].checked = checked ?? !state.nodeMap[id]?.checked
  },

  /**
   * 更新指定节点点选状态（展示态）
   */
  toggleActive: (state: State, id: any) => {
    const index = state.nodeMap?.[id]?.level - 1
    state.activeIds.splice(index, state.activeIds.length - index, id)
  },
}

export default function useCascader({
  fetchSub,
  disabledIds = [],
  onCheckedChange = () => {},
  parentIdKey = DEFAULT_PARENT_KEY,
  data,
  rootParentId,
}: {
  fetchSub?: (current?: CascaderNode) => CascaderNode[] | Promise<CascaderNode[]>
  data: CascaderNode[]
  disabledIds?: Id[]
  onCheckedChange?: (checkIds: Id[]) => void
  parentIdKey?: string
  multiple?: boolean
  rootParentId?: Id
}) {
  const [{ nodeMap, activeIds }, api] = useMethodsImmer(reducers, {
    nodeMap: {},
    disabledIds,
    activeIds: [],
  })

  const onCheckedChangeRef = useRefCallback(onCheckedChange)
  const [fetchDataAsync, { loading }] = useAsync(fetchSub)

  const { flatNodes, checkeds, checkedIds, maxLevel } = useMemo(() => {
    const flatNodes = Object.values(nodeMap) as CascaderNode[]
    const checkeds = flatNodes.filter((v: CascaderNode) => v.checked)
    const checkedIds = checkeds.map((v) => v.id)
    const maxLevel = flatNodes.reduce((prev, cur) => (cur.level > prev ? cur.level : prev), 0)
    return {
      flatNodes,
      checkeds,
      checkedIds,
      maxLevel,
    }
  }, [nodeMap])

  const treeData = useDataListToTree(flatNodes, { parentId: parentIdKey, rootParentId })

  const loadSub = async (current: Id) => {
    const isLoaded = flatNodes.some((v) => current && v[parentIdKey] === current)
    if (isLoaded) return
    const currentNode: CascaderNode = nodeMap[current]
    const subNodes = await fetchDataAsync(currentNode, true)
    api.addNodes({
      nodes: subNodes,
      parentId: currentNode?.id,
      checked: currentNode?.checked,
      disabled: currentNode?.disabled,
      parentIdKey,
      level: currentNode?.level + 1,
    })
  }

  const toggleChecked = async (id: Id, checked?: boolean) => api.toggleChecked({ id, checked })
  const setDisableds = async (ids: Id[], disabled: boolean) => api.setDisableds({ ids, disabled })
  const setCheckeds = async (ids: Id[], checked: boolean) => api.setCheckeds({ ids, checked })
  const clearCheckeds = async () => api.clearCheckeds()

  const setActive = useCallback((nodeId: Id) => {
    api.toggleActive(nodeId)
  }, [])

  useEffect(() => {
    api.setNodes({
      nodes: data,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    disabledIds && api.setDisableds({ ids: disabledIds, disabled: true })
  }, [disabledIds, api])

  useEffect(() => {
    onCheckedChangeRef && onCheckedChangeRef(checkeds)
  }, [checkeds, onCheckedChangeRef])

  const dataCache = useRef<any>()
  dataCache.current = {
    data: treeData,
    flatNodes,
    nodeMap,
    checkedIds,
    checkeds,
    activeIds,
    maxLevel,
  }

  const getData = useCallback(() => dataCache.current, [])

  return {
    loading,
    data: treeData,
    flatNodes,
    nodeMap,
    checkedIds,
    checkeds,
    activeIds,
    maxLevel,
    getData,
    toggleChecked,
    setDisableds,
    setCheckeds,
    clearCheckeds,
    setActive,
    loadSub,
  }
}
