import { useRef } from 'react'
import HistoryState, { Options, HistoryStock } from './historyState'

export interface useHistoryRefOptions<Raw, Serialized = Raw> extends Options<Raw, Serialized> {}

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
  const ref = useRef<any>()
  if (!ref.current) {
    ref.current = new HistoryState(options)
  }

  return ref.current
}
