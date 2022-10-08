;(self.webpackChunk_brick_hooks_root = self.webpackChunk_brick_hooks_root || []).push([
  [4867],
  {
    96867: function (d, l, t) {
      'use strict'
      t.r(l)
      var e = t(67294),
        n = t(36445),
        u = t(91485),
        c = e.memo((a) => {
          var r = a.demos
          return e.createElement(
            e.Fragment,
            null,
            e.createElement(
              'div',
              { className: 'markdown' },
              e.createElement(
                'h2',
                { id: 'uselistdata' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#uselistdata', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'useListData',
              ),
              e.createElement(
                'p',
                null,
                '\u5BF9[',
                '{',
                '}',
                ', ',
                '{',
                '}',
                ', ...]\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406, \u81EA\u52A8\u76D1\u542C\u53D8\u5316\u5E76\u66F4\u65B0\uFF0C\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u5904\u7406\u51FD\u6570\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\u53EF\u4EE5\u7406\u89E3\u4E3A\u9488\u5BF9\u5217\u8868\u6570\u636E\u7684\u76F8\u5173\u5904\u7406\u51FD\u6570\u53CA useMemo \u7684\u5C01\u88C5\uFF0C\u5E76\u63D0\u4F9B\u94FE\u5F0F\u7684\u5199\u6CD5',
              ),
              e.createElement(
                'h3',
                { id: '\u57FA\u672C\u7528\u6CD5' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#\u57FA\u672C\u7528\u6CD5', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u57FA\u672C\u7528\u6CD5',
              ),
              e.createElement(
                'p',
                null,
                '\u4E0D\u4F7F\u7528\u5185\u7F6E\u65B9\u6CD5\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5199\u6CD5\u4E0D\u540C\u7684 useMemo useListState \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u662F\u4E00\u4E2A\u6570\u636E\u5904\u7406\u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u4EE5\u5728\u5176\u4E2D\u5BF9\u6BCF\u6B21\u66F4\u65B0\u7684\u6570\u636E\u81EA\u52A8\u505A\u5904\u7406\u3002',
              ),
              e.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              e.createElement(u.Z, {
                code: `function useListData<T extends Record<string, any>>(
  value?: T[],
  factory?: (originData: T[], transformMethods: typeof transformsMap) => any,
  deps?: any[],
): any`,
                lang: 'typescript',
              }),
              e.createElement(u.Z, {
                code: `const initialValue = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
]

const data = useListData(initialValue, (originValue) => originValue.filter(v.id === 1))

// transform\u51FD\u6570\u4E2D\u5305\u542B\u4F9D\u8D56, \u8BBE\u7F6Edeps
const data = useListData(initialValue, (originValue) => originValue.filter(v.id === testId), [testId])`,
                lang: 'javascript',
              }),
              e.createElement(u.Z, { code: '// result: [{ id: 1, value: 0 }]', lang: 'javascript' }),
              e.createElement(
                'h3',
                { id: '\u7528\u6CD5\u5185\u7F6E\u65B9\u6CD5\u8FDB\u884C\u5904\u7406' },
                e.createElement(
                  n.AnchorLink,
                  {
                    to: '#\u7528\u6CD5\u5185\u7F6E\u65B9\u6CD5\u8FDB\u884C\u5904\u7406',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7528\u6CD5\u5185\u7F6E\u65B9\u6CD5\u8FDB\u884C\u5904\u7406',
              ),
              e.createElement(
                'p',
                null,
                'useListData \u63D0\u4F9B\u4E86\u5982\u4E0B\u82E5\u5E72\u5185\u7F6E transform \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u5BF9\u539F\u59CB\u6570\u636E\u8FDB\u884C\u81EA\u52A8\u5904\u7406',
              ),
              e.createElement(
                'h4',
                { id: 'transobj-\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#transobj-\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'transObj \u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61',
              ),
              e.createElement('p', null, '\u9ED8\u8BA4 key \u4E3A id\uFF0C\u53EF\u4E0D\u586B\u5199\u3002'),
              e.createElement(u.Z, {
                code: `const initialValue = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
]

const data = useListData(listData, (originValue, { transObj }) => transObj(originValue, { key: 'id' }))`,
                lang: 'javascript',
              }),
              e.createElement(u.Z, {
                code: `// result
{
  1: { id: 1, value: 0 },
  2: { id: 2, value: 1 }
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h4',
                { id: 'transtree-\u6570\u7EC4\u8F6C\u4E3A\u6811' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#transtree-\u6570\u7EC4\u8F6C\u4E3A\u6811', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'transTree \u6570\u7EC4\u8F6C\u4E3A\u6811',
              ),
              e.createElement(
                'h3',
                { id: '\u7C7B\u578B\u58F0\u660E-1' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#\u7C7B\u578B\u58F0\u660E-1', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u7C7B\u578B\u58F0\u660E',
              ),
              e.createElement(u.Z, {
                code: `transTree(data: Record<string, any>[], { parentId, id, children }?: {
  parentId?: string;
  id?: string;
  children?: string;
}): Record<string, any>[]`,
                lang: 'typescript',
              }),
              e.createElement(u.Z, {
                code: `const initialValue = [
  { id: 'a001', pid: 0, value: '\u5C71\u4E1C' },
  { id: 'a002', pid: 'a001', value: '\u6D4E\u5357' },
  { id: 'a003', pid: 'a001', value: '\u9752\u5C9B' },
  { id: 'a004', pid: 'a001', value: '\u70DF\u53F0' },
]

const data = useListData(initialValue, (originValue, { transTree }) => transTree(originValue))`,
                lang: 'javascript',
              }),
              e.createElement(u.Z, {
                code: `// result
;[
  {
    id: 'a001',
    pid: 0,
    value: '\u5C71\u4E1C',
    children: [
      { id: 'a002', pid: 'a001', value: '\u6D4E\u5357' },
      { id: 'a003', pid: 'a001', value: '\u9752\u5C9B' },
      { id: 'a004', pid: 'a001', value: '\u70DF\u53F0' },
    ],
  },
]`,
                lang: 'javascript',
              }),
              e.createElement(
                'h4',
                { id: 'group-\u5206\u7EC4' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#group-\u5206\u7EC4', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'group \u5206\u7EC4',
              ),
              e.createElement(u.Z, {
                code: `const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const data = useListData(initialValue, (value, { group }) => group(value, { groupKey: 'city' }))`,
                lang: 'javascript',
              }),
              e.createElement(u.Z, {
                code: `// result
{
  qingdao: [
    { id: 'q1', city: 'qingdao', value: 0 },
    { id: 'q2', city: 'qingdao', value: 1 },
  ],
  hangzhou: [
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ],
}`,
                lang: 'javascript',
              }),
              e.createElement(
                'h4',
                { id: 'partition-\u5206\u7EC4' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#partition-\u5206\u7EC4', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'partition \u5206\u7EC4',
              ),
              e.createElement(u.Z, {
                code: `const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const data = useListData(initialValue, (value, { partition }) => partition(value, { groupKey: 'city' }))`,
                lang: 'javascript',
              }),
              e.createElement(u.Z, {
                code: `// result
;[
  [
    { id: 'q1', city: 'qingdao', value: 0 },
    { id: 'q2', city: 'qingdao', value: 1 },
  ],
  [
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ],
]`,
                lang: 'javascript',
              }),
              e.createElement(
                'h4',
                { id: 'removebyid-\u6839\u636E-id-\u79FB\u9664\u6570\u636E' },
                e.createElement(
                  n.AnchorLink,
                  { to: '#removebyid-\u6839\u636E-id-\u79FB\u9664\u6570\u636E', 'aria-hidden': 'true', tabIndex: -1 },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'removeById \u6839\u636E id \u79FB\u9664\u6570\u636E',
              ),
              e.createElement(u.Z, {
                code: `const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const data = useListData(initialValue, (value, { removeById }) => removeById(value, 'q1'))`,
                lang: 'javascript',
              }),
              e.createElement(u.Z, {
                code: `// result
;[
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]`,
                lang: 'javascript',
              }),
              e.createElement(
                'h4',
                { id: 'removeindex-\u6839\u636E-index-\u79FB\u9664\u6570\u636E' },
                e.createElement(
                  n.AnchorLink,
                  {
                    to: '#removeindex-\u6839\u636E-index-\u79FB\u9664\u6570\u636E',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                'removeIndex \u6839\u636E index \u79FB\u9664\u6570\u636E',
              ),
              e.createElement(u.Z, {
                code: `const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const data = useListData(initialValue, (value, { removeIndex }) => removeIndex(value, 1))`,
                lang: 'javascript',
              }),
              e.createElement(u.Z, {
                code: `// result
;[
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]`,
                lang: 'javascript',
              }),
              e.createElement(
                'h3',
                { id: '\u94FE\u5F0F\u8BED\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406' },
                e.createElement(
                  n.AnchorLink,
                  {
                    to: '#\u94FE\u5F0F\u8BED\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406',
                    'aria-hidden': 'true',
                    tabIndex: -1,
                  },
                  e.createElement('span', { className: 'icon icon-link' }),
                ),
                '\u94FE\u5F0F\u8BED\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406',
              ),
              e.createElement(
                'p',
                null,
                '\u4F7F\u7528\u94FE\u5F0F\u8BED\u6CD5\u53EF\u4EE5\u65B9\u4FBF\u7684\u5C06\u590D\u6742\u7684\u6570\u636E\u5904\u7406\u5199\u7684\u7B80\u6D01\u6E05\u6670',
              ),
              e.createElement(u.Z, {
                code: `const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const data = useListData(initialValue, (originValue, { chain }) =>
  chain(originValue)
    .filter((v) => v.value !== 0)
    .partition({ groupKey: 'city' })
    .value(),
)`,
                lang: 'javascript',
              }),
              e.createElement(u.Z, {
                code: `// result
;[
  [{ id: 'q2', city: 'qingdao', value: 1 }],
  [
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ],
]`,
                lang: 'javascript',
              }),
              e.createElement(
                'p',
                null,
                '\u9664\u4E86\u4F7F\u7528\u5185\u7F6E\u7684\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 next \u65B9\u6CD5\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u51FD\u6570\u8FDB\u884C, \u6216\u968F\u65F6\u5BF9\u6570\u636E\u8FDB\u884C\u81EA\u7531\u5904\u7406',
              ),
              e.createElement(u.Z, {
                code: `const data = useListData(initialValue, (originValue, { chain }) =>
  chain(originValue)
    .next((value) => value.filter((v) => !v.ignore))
    .partition({ groupKey: 'pid' })
    .value(),
)

const data = useListData(initialValue, (originValue, { chain }) => {
  const listData = chain(originValue)
    .next((value) => value.filter((v) => !v.ignore))
    .partition({ groupKey: 'pid' })
    .value()
  return listData[0]
})`,
                lang: 'javascript',
              }),
              e.createElement('p', null, '\u94FE\u5F0F\u8BED\u53E5\u5185\u7F6E\u65B9\u6CD5'),
              e.createElement(u.Z, {
                code: `// \u4F7F\u7528\u81EA\u5B9A\u4E49fn\u8FDB\u884C\u5904\u7406
next: (fn: any) => this
// \u83B7\u53D6\u5904\u7406\u7ED3\u675F\u7684\u6700\u7EC8\u6570\u636E
value: () => any
// \u6DFB\u52A0\u4E00\u4E2A\u503C
add: (value: any) => this
// \u5220\u9664\u672B\u5C3E\u7684\u503C
pop: () => this
// \u540CArray.prototype.slice
slice: (start?: number, end?: number) => this
// \u540CArray.prototype.reverse
reverse: () => this
// \u540CArray.prototype.sort
sort: (callback?: (a: any, b: any) => number) => this
// \u6839\u636E\u6307\u5B9A\u7684\u5B57\u6BB5\u8FDB\u884C\u5347\u964D\u5E8F\u6392\u5E8F
sortBy: ({ field, order }: { field: string; order?: string }) => this
// \u79FB\u9664\u6307\u5B9A\u7684\u503C\uFF0C\u901A\u8FC7===\u76F4\u63A5\u6BD4\u8F83
remove: (value: any) => this
// \u540CArray.prototype.filter
filter: (callback: (v: any) => boolean) => this
// \u540CArray.prototype.map
map: (callback: MapCallback) => this
// \u540CArray.prototype.reduce
reduce: (callback: ReduceCallback, initialValue?: any) => this
// \u5C06\u6570\u636E\u8F6C\u5316\u4E3Atree\u683C\u5F0F
transTree: (options?: {
  parentId?: string
  id?: string
  children?: string
}) => this
// \u5C06\u6570\u7EC4\u8F6C\u5316\u4E3AObject
transObj: (options?: { key?: string }) => this
// \u5C06\u6570\u636E\u5206\u7EC4\u5E76\u8FD4\u56DEObject
group: (options?: { groupKey?: string }) => this
// \u5C06\u6570\u636E\u5206\u7EC4\u5E76\u8FD4\u56DE\u4E8C\u7EF4\u6570\u7EC4
partition: (options?: { groupKey?: string }) => this
// \u6839\u636Eid\u79FB\u9664\u6307\u5B9Aitem
removeById: (id: string, idKey?: string) => this
// \u6839\u636E\u4E0B\u6807\u79FB\u9664\u6307\u5B9Aitem
removeIndex: (value: number) => this`,
                lang: 'javascript',
              }),
            ),
          )
        })
      l.default = (a) => {
        var r = e.useContext(n.context),
          o = r.demos
        return (
          e.useEffect(() => {
            var i
            a != null &&
              (i = a.location) !== null &&
              i !== void 0 &&
              i.hash &&
              n.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))
          }, []),
          e.createElement(c, { demos: o })
        )
      }
    },
  },
])
