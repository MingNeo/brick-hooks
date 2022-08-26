export interface HistoryStock<T> {
  snapshot: T
  timestamp: number
}

export interface Options<Raw, Serialized = Raw> {
  max?: number // 最多保存多少条数据，默认不限制
  dump?: (source: Raw) => Serialized // 序列化数据的函数
  parse?: <Raw, Serialized = Raw>(value: Serialized) => Raw // 反序列化数据的函数
  onUpdate?: (value: Raw, dump: HistoryStock<Serialized>) => void // 更新数据的回调
}

function defaultDump<R, S>(source: R): S {
  if (typeof source === 'object' || Array.isArray(source)) {
    return JSON.parse(JSON.stringify(source)) as S
  }
  return source as unknown as S
}

function defaultParse<Raw, Serialized = Raw>(sourceDump: Serialized) {
  try {
    return JSON.parse(sourceDump as unknown as string) as Raw
  } catch (error) {
    return sourceDump as unknown as Raw
  }
}

export default class HistoryState<Raw, Serialized = Raw> {
  source: any
  last: HistoryStock<any> = {
    snapshot: undefined,
    timestamp: 0,
  }

  undoList: HistoryStock<any>[] = []
  redoList: HistoryStock<any>[] = []
  max: number
  dump: (v: Raw) => Serialized
  parse: <Raw, Serialized = Raw>(sourceDump: Serialized) => Raw
  onUpdate: (value: Raw, dump: HistoryStock<Serialized>) => void

  constructor(options: Options<Raw, Serialized> = {}) {
    const { max, dump = defaultDump, parse = defaultParse, onUpdate = (nextState: Raw) => {} } = options
    this.dump = dump
    this.parse = parse
    this.onUpdate = onUpdate
    this.push = this.push.bind(this)
    this.undo = this.undo.bind(this)
    this.redo = this.redo.bind(this)
    this.clear = this.clear.bind(this)
    this.reset = this.reset.bind(this)
    this.max = max
  }

  get canUndo() {
    return this.undoList.length > 0
  }

  get canRedo() {
    return this.redoList.length > 0
  }

  get history() {
    return this.undoList
  }

  createHistoryItem(newSource: Raw) {
    const newHistoryItem = {
      snapshot: this.dump(newSource),
      timestamp: Date.now(),
    }
    return newHistoryItem
  }

  undo() {
    if (this.canUndo) {
      const state = this.undoList.shift()
      if (state && this.last) {
        this.redoList.unshift(this.last)
        this._changeState(state)
      }
    }
  }

  redo() {
    if (this.canRedo) {
      const state = this.redoList.shift()
      this.undoList.unshift(this.last)
      this._changeState(state)
    }
  }

  clear() {
    this.undoList = []
    this.redoList = []
    this.onUpdate(this.source, this.last)
  }

  push(newSource: Raw) {
    const isFirst = typeof this.source === 'undefined'
    this.source = newSource
    if (isFirst) {
      this.undoList = []
      this.redoList = []
      const next = this.createHistoryItem(newSource)
      this.last = next
      this.onUpdate(this.source, this.last)
    } else if (this.last && this.last.snapshot !== this.undoList?.[0]?.snapshot) {
      this.undoList.unshift(this.last)
      if (this.max && this.undoList.length > this.max) this.undoList.splice(this.max, Infinity)
      if (this.redoList.length) this.redoList.splice(0, this.redoList.length)
      this.last = this.createHistoryItem(this.source)
      this._changeState(this.last)
    }
  }

  reset() {
    this._changeState(this.last)
  }

  private _changeState(record: HistoryStock<Serialized>) {
    const next = this.parse(record.snapshot) as unknown as Raw
    this.source = next
    this.last = record
    this.onUpdate(next, record)
  }

  getHistory() {
    return this.history
  }

  getUndoList() {
    return this.undoList
  }

  getRedoList() {
    return this.redoList
  }

  getCanUndo() {
    return this.canUndo
  }

  getCanRedo() {
    return this.canRedo
  }

  getSource() {
    return this.source
  }

  getLast() {
    return this.last
  }
}
