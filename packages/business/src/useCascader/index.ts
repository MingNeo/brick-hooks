import { useEffect, useMemo } from 'react'
import { useAsync, useDataListToTree, useMethodsImmer, useRefCallback } from 'brick-hooks'

type Id = string | number
type CascaderNode = {
  checked?: boolean
  id?: Id
  level?: number
  [x: string]: any
}

interface State {
  nodeMap: Record<string, CascaderNode>
  disabledIds: any[]
  activeIds: Id[]
}

const DEFAULT_PARENT_KEY = 'parent'

export function isNil(value: any) {
  return value === undefined || value === null
}

const reducers = {
  // 请求加载子节点数据后更新到nodeMap中
  addNodes: (
    state: State,
    payload: { nodes: any; parent: any; checked?: boolean; disabled?: boolean; parentIdKey?: string; level?: number },
  ) => {
    const { nodes, parent, checked, disabled, parentIdKey = DEFAULT_PARENT_KEY, level } = payload
    nodes?.forEach((node: CascaderNode) => {
      const { children, ...nodeInfo } = node
      state.nodeMap[node.id] = {
        ...nodeInfo,
        level,
        [parentIdKey]: node[parentIdKey] ?? parent?.id,
      }

      const nodeChecked = checked ?? parent?.checked
      if (!isNil(nodeChecked)) {
        state.nodeMap[node.id].checked = nodeChecked
      }
      const nodeDisabled = (state.disabledIds.includes(node.id) || disabled) ?? parent?.disabled
      if (!isNil(nodeDisabled)) {
        state.nodeMap[node.id].checked = nodeDisabled
      }
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
  root,
  parentIdKey = DEFAULT_PARENT_KEY,
}: {
  fetchSub: (current?: CascaderNode) => CascaderNode[] | Promise<CascaderNode[]>
  disabledIds?: Id[]
  onCheckedChange?: (checkIds: Id[]) => void
  root?: CascaderNode
  parentIdKey?: string
}) {
  const [{ nodeMap, activeIds }, api] = useMethodsImmer(reducers, {
    nodeMap: {},
    disabledIds,
    activeIds: [],
  })

  const onCheckedChangeRef = useRefCallback(onCheckedChange)
  const [fetchSubAsync, { loading }] = useAsync(fetchSub)

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

  const treeData = useDataListToTree(flatNodes, { parentId: parentIdKey })

  const loadSub = async (current: CascaderNode) => {
    const isLoaded = flatNodes.some((v) => v[parentIdKey] === current.id)
    if (isLoaded) return
    const subNodes = await fetchSubAsync(current)
    api.addNodes({
      nodes: subNodes,
      parent: current,
      checked: current.checked,
      disabled: current.disabled,
      parentIdKey,
      level: current.level + 1,
    })
  }

  const toggleChecked = async (id: Id, checked?: boolean) => api.toggleChecked({ id, checked })
  const setDisableds = async (ids: Id[], disabled: boolean) => api.setDisableds({ ids, disabled })
  const setCheckeds = async (ids: Id[], checked: boolean) => api.setCheckeds({ ids, checked })
  const clearCheckeds = async () => api.clearCheckeds()

  const setActive = (node: CascaderNode) => {
    api.toggleActive(node?.id)
  }

  useEffect(() => {
    fetchSubAsync(root).then((subtree) => {
      api.addNodes({ nodes: subtree, parent: root, checked: root?.checked, parentIdKey, level: 1 })
    })
  }, [])

  useEffect(() => {
    disabledIds && api.setDisableds({ ids: disabledIds, disabled: true })
  }, [disabledIds, api])

  useEffect(() => {
    onCheckedChangeRef && onCheckedChangeRef(checkeds)
  }, [checkeds, onCheckedChangeRef])

  return {
    loading,
    data: treeData,
    flatNodes,
    checkedIds,
    checkeds,
    activeIds,
    maxLevel,
    toggleChecked,
    setDisableds,
    setCheckeds,
    clearCheckeds,
    setActive,
    loadSub,
  }
}
