import { useRef, useReducer } from 'react'
import HistoryState, { Options, HistoryStock } from './historyState'

export interface useHistoryRefOptions<Raw, Serialized = Raw> extends Options<Raw, Serialized> {
  renderOnChange?: boolean // 是否在数据变化时重新渲染组件
}

export interface Return<Raw, Serialized> {
  source: Raw // 原始数据
  history: HistoryStock<Serialized>[] // 历史记录列表
  last: HistoryStock<Serialized> // 最后一条历史记录
  undoList: HistoryStock<Serialized>[] // 历史记录列表，同history
  redoList: HistoryStock<Serialized>[] // 重做的历史记录列表
  canUndo: boolean // 是否可以撤销
  canRedo: boolean // 是否可以重做
  undo(): void // 撤销
  redo(): void // 重做
  clear(): void // 清空历史记录
  push(newSource: Raw): void // 创建一条新历史
  reset(): void // 重置到最近的记录
  getHistory: HistoryStock<any>[]
  getUndoList: HistoryStock<any>[]
  getRedoList: HistoryStock<any>[]
}

/**
 *
 * @param source
 * @param options
 * @returns
 */
export default function useHistoryRef<Raw, Serialized = Raw>(
  // source: Raw,
  options: useHistoryRefOptions<Raw, Serialized> = {}
): Return<Raw, Serialized> {
  const [, forceUpdate] = useReducer((prev: number) => prev + 1, 0)
  const ref = useRef<any>()
  if (!ref.current) {
    const { renderOnChange, onUpdate, ...restOptions } = options
    ref.current = new HistoryState({ ...restOptions, onUpdate: (...args) => {
      onUpdate?.(...args)
      // 历史发生变化或触发undo等操作时，强制组件更新
      renderOnChange && forceUpdate()
    }})
  }

  return ref.current
}
