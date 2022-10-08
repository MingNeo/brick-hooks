(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[7745],{27518:function(){},27362:function(D,h,r){"use strict";r.r(h);var e=r(67294),a=r(36445),t=r(91485),F=r(45306),g=e.memo(i=>{var v=i.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useliststate"},e.createElement(a.AnchorLink,{to:"#useliststate","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useListState"),e.createElement("p",null,"\u5BF9[","{","}",", ","{","}",", ...]\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5904\u7406, \u81EA\u52A8\u76D1\u542C\u53D8\u5316\u5E76\u66F4\u65B0\uFF0C\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u5904\u7406\u51FD\u6570\u5BF9\u6570\u636E\u8FDB\u884C\u5904\u7406\u53EF\u4EE5\u7406\u89E3\u4E3A\u9488\u5BF9\u5217\u8868\u6570\u636E\u7684\u76F8\u5173\u5904\u7406\u51FD\u6570\u7684\u5C01\u88C5\uFF0C\u5E76\u63D0\u4F9B\u94FE\u5F0F\u7684\u5199\u6CD5\u3002"),e.createElement("p",null,"\u4E0E useListData \u7C7B\u4F3C\uFF0C\u4E0D\u540C\u7684\u662F useListData \u7C7B\u4F3C\u4E8E useMemo\uFF0C\u5BF9\u4E00\u4E2A state \u8FDB\u884C\u81EA\u52A8\u5904\u7406\u751F\u6210\u65B0\u7684 getter \u7684\u503C\u3002\u800C\u8FD9\u4E2A hook \u5219\u76F4\u63A5\u63D0\u4F9B setState \u65B9\u6CD5\uFF0CsetState \u539F\u59CB\u503C\u5E76\u81EA\u52A8\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u8FDB\u884C\u5904\u7406"),e.createElement("h3",{id:"\u57FA\u7840\u7528\u6CD5"},e.createElement(a.AnchorLink,{to:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u7528\u6CD5"),e.createElement("p",null,"\u4F7F\u7528 listMethods \u66FF\u4EE3 useArray\uFF0C\u5177\u4F53\u7528\u6CD5\u89C1 useArray"),e.createElement(F.Z,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u65B9\u6CD5"),e.createElement("th",null,"\u8BF4\u660E"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"set"),e.createElement("td",null,"\u5F53\u524D\u8BBE\u7F6E\u6570\u7EC4\u7684\u503C")),e.createElement("tr",null,e.createElement("td",null,"push"),e.createElement("td",null,"\u540C Array.prototype.push")),e.createElement("tr",null,e.createElement("td",null,"slice"),e.createElement("td",null,"\u540C Array.prototype.slice")),e.createElement("tr",null,e.createElement("td",null,"pop"),e.createElement("td",null,"\u540C Array.prototype.pop")),e.createElement("tr",null,e.createElement("td",null,"clear"),e.createElement("td",null,"\u540C \u6E05\u7A7A")),e.createElement("tr",null,e.createElement("td",null,"reverse"),e.createElement("td",null,"\u540C Array.prototype.reverse")),e.createElement("tr",null,e.createElement("td",null,"concat"),e.createElement("td",null,"\u540C Array.prototype.concat")),e.createElement("tr",null,e.createElement("td",null,"sort"),e.createElement("td",null,"\u540C Array.prototype.sort")),e.createElement("tr",null,e.createElement("td",null,"sortBy"),e.createElement("td",null,"\u57FA\u4E8E\u6307\u5B9A\u5B57\u6BB5\u505A\u5347\u964D\u5E8F\u6392\u5E8F, \u9ED8\u8BA4\u4E3A ASC\uFF0C\u8BE6\u60C5\u89C1 useArray")),e.createElement("tr",null,e.createElement("td",null,"remove"),e.createElement("td",null,"\u79FB\u9664\u6307\u5B9A\u503C\uFF0C\u8BE6\u60C5\u89C1 useArray")),e.createElement("tr",null,e.createElement("td",null,"removeById"),e.createElement("td",null,"\u5F53\u6570\u636E\u683C\u5F0F\u4E3A[","{"," id: 'xxx', value, ... ","}",", ...]\u65F6\uFF0C\u6839\u636E id \u79FB\u9664\u5BF9\u5E94\u7684\u503C")),e.createElement("tr",null,e.createElement("td",null,"removeIndex"),e.createElement("td",null,"\u79FB\u9664\u6307\u5B9A index \u7684\u503C")))),e.createElement("h3",{id:"\u81EA\u5B9A\u4E49\u6570\u636E\u5904\u7406"},e.createElement(a.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u6570\u636E\u5904\u7406","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u6570\u636E\u5904\u7406"),e.createElement("p",null,"useListState \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u662F\u4E00\u4E2A\u6570\u636E\u5904\u7406\u56DE\u8C03\u51FD\u6570\uFF0C\u53EF\u4EE5\u5728\u5176\u4E2D\u5BF9\u6BCF\u6B21\u66F4\u65B0\u7684\u6570\u636E\u81EA\u52A8\u505A\u5904\u7406\u3002\u5B8C\u5168\u81EA\u7531\u5904\u7406\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F8\u5F53\u4E8E\u7EC4\u5408\u4E86 useState/useArray \u53CA useMemo"),e.createElement(t.Z,{code:`const initialValue = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
]

const [result, listMethods] = useListState(initialValue, (originValue) => originValue.filter(v.value === 1))
// result: [{id: 2, value: 1}]
listMethods.push({ id: 3, value: 1 })
// result: [{id: 2, value: 1}, {id: 3, value: 1}]`,lang:"javascript"}),e.createElement("h3",{id:"\u7528\u6CD5\u5185\u7F6E\u65B9\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406"},e.createElement(a.AnchorLink,{to:"#\u7528\u6CD5\u5185\u7F6E\u65B9\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5\u5185\u7F6E\u65B9\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406"),e.createElement("p",null,"useListState \u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u5185\u7F6E\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u81EA\u52A8\u5BF9\u6570\u636E\u8FDB\u884C\u5404\u79CD\u8F6C\u6362\u4E5F\u53EF\u4EE5\u901A\u8FC7 chain \u5BF9\u6570\u636E\u8FDB\u884C\u94FE\u5F0F\u7684\u5904\u7406"),e.createElement(F.Z,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"\u65B9\u6CD5"),e.createElement("th",null,"\u8BF4\u660E"))),e.createElement("tbody",null,e.createElement("tr",null,e.createElement("td",null,"transObj"),e.createElement("td",null,"\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61")),e.createElement("tr",null,e.createElement("td",null,"transTree"),e.createElement("td",null,"\u6570\u7EC4\u8F6C\u4E3A\u6811")),e.createElement("tr",null,e.createElement("td",null,"group"),e.createElement("td",null,"\u5206\u7EC4")),e.createElement("tr",null,e.createElement("td",null,"partition"),e.createElement("td",null,"partition \u5206\u7EC4")),e.createElement("tr",null,e.createElement("td",null,"removeById"),e.createElement("td",null,"\u6839\u636E id \u79FB\u9664\u6570\u636E")),e.createElement("tr",null,e.createElement("td",null,"removeIndex"),e.createElement("td",null,"\u6839\u636E index \u79FB\u9664\u6570\u636E")),e.createElement("tr",null,e.createElement("td",null,"chain"),e.createElement("td",null,"\u94FE\u5F0F\u8BED\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406")))),e.createElement("h4",{id:"transobj-\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61"},e.createElement(a.AnchorLink,{to:"#transobj-\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"transObj \u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61"),e.createElement(t.Z,{code:`const initialValue = [
  { id: 1, value: 0 },
  { id: 2, value: 1 },
]

const [data, listMethods] = useListState(initialValue, (originValue, { transObj }) =>
  transObj(originValue, { key: 'id' }),
)`,lang:"javascript"}),e.createElement(t.Z,{code:`// result
{
  1: { id: 1, value: 0 },
  2: { id: 2, value: 1 }
}`,lang:"javascript"}),e.createElement("h4",{id:"transtree-\u6570\u7EC4\u8F6C\u4E3A\u6811"},e.createElement(a.AnchorLink,{to:"#transtree-\u6570\u7EC4\u8F6C\u4E3A\u6811","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"transTree \u6570\u7EC4\u8F6C\u4E3A\u6811"),e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(a.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(t.Z,{code:`transTree(data: Record<string, any>[], { parentId, id, children }?: {
  parentId?: string;
  id?: string;
  children?: string;
}): Record<string, any>[]`,lang:"typescript"}),e.createElement(t.Z,{code:`const flatData = [
  { id: 'a001', pid: 0, value: '\u5C71\u4E1C' },
  { id: 'a002', pid: 'a001', value: '\u6D4E\u5357' },
  { id: 'a003', pid: 'a001', value: '\u9752\u5C9B' },
  { id: 'a004', pid: 'a001', value: '\u70DF\u53F0' },
]

const [treeData, listMethods] = useListState(flatData, (originValue, { transTree }) =>
  transTree(originValue, { id: 'id', parentId: 'pid', children: 'children' }),
)`,lang:"javascript"}),e.createElement(t.Z,{code:`// result
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
]`,lang:"javascript"}),e.createElement("h4",{id:"group-\u5206\u7EC4"},e.createElement(a.AnchorLink,{to:"#group-\u5206\u7EC4","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"group \u5206\u7EC4"),e.createElement(t.Z,{code:`const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const [data, listMethods] = useListState(initialValue, (value, { group }) => group(value, { groupKey: 'city' }))`,lang:"javascript"}),e.createElement(t.Z,{code:`// result
{
  qingdao: [
    { id: 'q1', city: 'qingdao', value: 0 },
    { id: 'q2', city: 'qingdao', value: 1 },
  ],
  hangzhou: [
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ],
}`,lang:"javascript"}),e.createElement("h4",{id:"partition-\u5206\u7EC4"},e.createElement(a.AnchorLink,{to:"#partition-\u5206\u7EC4","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"partition \u5206\u7EC4"),e.createElement(t.Z,{code:`const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const [data, listMethods] = useListState(initialValue, (value, { partition }) => partition(value, { groupKey: 'city' }))`,lang:"javascript"}),e.createElement(t.Z,{code:`// result
;[
  [
    { id: 'q1', city: 'qingdao', value: 0 },
    { id: 'q2', city: 'qingdao', value: 1 },
  ],
  [
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ],
]`,lang:"javascript"}),e.createElement("h4",{id:"removebyid-\u6839\u636E-id-\u79FB\u9664\u6570\u636E"},e.createElement(a.AnchorLink,{to:"#removebyid-\u6839\u636E-id-\u79FB\u9664\u6570\u636E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"removeById \u6839\u636E id \u79FB\u9664\u6570\u636E"),e.createElement(t.Z,{code:`const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const [data, listMethods] = useListState(initialValue, (value, { removeById }) => removeById(value, 'q1'))`,lang:"javascript"}),e.createElement(t.Z,{code:`// result
;[
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]`,lang:"javascript"}),e.createElement("h4",{id:"removeindex-\u6839\u636E-index-\u79FB\u9664\u6570\u636E"},e.createElement(a.AnchorLink,{to:"#removeindex-\u6839\u636E-index-\u79FB\u9664\u6570\u636E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"removeIndex \u6839\u636E index \u79FB\u9664\u6570\u636E"),e.createElement(t.Z,{code:`const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const [data, listMethods] = useListState(initialValue, (value, { removeIndex }) => removeIndex(value, 1))`,lang:"javascript"}),e.createElement(t.Z,{code:`// result
;[
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]`,lang:"javascript"}),e.createElement("h3",{id:"\u94FE\u5F0F\u8BED\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406"},e.createElement(a.AnchorLink,{to:"#\u94FE\u5F0F\u8BED\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u94FE\u5F0F\u8BED\u6CD5\u8FDB\u884C\u6570\u636E\u5904\u7406"),e.createElement("p",null,"\u4F7F\u7528\u94FE\u5F0F\u8BED\u6CD5\u53EF\u4EE5\u65B9\u4FBF\u7684\u5C06\u590D\u6742\u7684\u6570\u636E\u5904\u7406\u5199\u7684\u7B80\u6D01\u6E05\u6670"),e.createElement(t.Z,{code:`const initialValue = [
  { id: 'q1', city: 'qingdao', value: 0 },
  { id: 'q2', city: 'qingdao', value: 1 },
  { id: 'h1', city: 'hangzhou', value: 2 },
  { id: 'h2', city: 'hangzhou', value: 3 },
]

const [data, listMethods] = useListState(initialValue, (originValue, { chain }) =>
  chain(originValue)
    .filter((v) => v.value !== 0)
    .partition({ groupKey: 'city' })
    .value(),
)`,lang:"javascript"}),e.createElement(t.Z,{code:`// result
;[
  [{ id: 'q2', city: 'qingdao', value: 1 }],
  [
    { id: 'h1', city: 'hangzhou', value: 2 },
    { id: 'h2', city: 'hangzhou', value: 3 },
  ],
]`,lang:"javascript"}),e.createElement("p",null,"\u9664\u4E86\u4F7F\u7528\u5185\u7F6E\u7684\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7 next \u65B9\u6CD5\uFF0C\u4F7F\u7528\u81EA\u5B9A\u4E49\u51FD\u6570\u8FDB\u884C, \u6216\u968F\u65F6\u5BF9\u6570\u636E\u8FDB\u884C\u81EA\u7531\u5904\u7406"),e.createElement(t.Z,{code:`const [data, listMethods] = useListState(initialValue, (originValue, { chain }) =>
  chain(originValue)
    .next((value) => value.filter((v) => !v.ignore))
    .partition({ groupKey: 'pid' })
    .value(),
)

const [data, listMethods] = useListState(initialValue, (originValue, { chain }) => {
  const listData = chain(originValue)
    .next((value) => value.filter((v) => !v.ignore))
    .partition({ groupKey: 'pid' })
    .value()
  return listData[0]
})`,lang:"javascript"}),e.createElement("p",null,"\u94FE\u5F0F\u8BED\u53E5\u5185\u7F6E\u65B9\u6CD5"),e.createElement(t.Z,{code:`// \u4F7F\u7528\u81EA\u5B9A\u4E49fn\u8FDB\u884C\u5904\u7406
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
removeIndex: (value: number) => this`,lang:"javascript"})))});h.default=i=>{var v=e.useContext(a.context),p=v.demos;return e.useEffect(()=>{var o;i!=null&&(o=i.location)!==null&&o!==void 0&&o.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(i.location.hash.slice(1)))},[]),e.createElement(g,{demos:p})}},45306:function(D,h,r){"use strict";var e=r(67294),a=r(93096),t=r.n(a),F=r(27518),g=r.n(F);function i(u,l){return f(u)||_(u,l)||p(u,l)||v()}function v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p(u,l){if(!!u){if(typeof u=="string")return o(u,l);var n=Object.prototype.toString.call(u).slice(8,-1);if(n==="Object"&&u.constructor&&(n=u.constructor.name),n==="Map"||n==="Set")return Array.from(u);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(u,l)}}function o(u,l){(l==null||l>u.length)&&(l=u.length);for(var n=0,c=new Array(l);n<l;n++)c[n]=u[n];return c}function _(u,l){var n=u==null?null:typeof Symbol!="undefined"&&u[Symbol.iterator]||u["@@iterator"];if(n!=null){var c=[],d=!0,s=!1,C,y;try{for(n=n.call(u);!(d=(C=n.next()).done)&&(c.push(C.value),!(l&&c.length===l));d=!0);}catch(B){s=!0,y=B}finally{try{!d&&n.return!=null&&n.return()}finally{if(s)throw y}}return c}}function f(u){if(Array.isArray(u))return u}var b=function(l){var n=l.children,c=(0,e.useRef)(),d=(0,e.useState)(!1),s=i(d,2),C=s[0],y=s[1],B=(0,e.useState)(!1),A=i(B,2),L=A[0],I=A[1];return(0,e.useEffect)(function(){var E=c.current,m=t()(function(){y(E.scrollLeft>0),I(E.scrollLeft<E.scrollWidth-E.offsetWidth)},100);return m(),E.addEventListener("scroll",m),window.addEventListener("resize",m),function(){E.removeEventListener("scroll",m),window.removeEventListener("resize",m)}},[]),e.createElement("div",{className:"__dumi-default-table"},e.createElement("div",{className:"__dumi-default-table-content",ref:c,"data-left-folded":C||void 0,"data-right-folded":L||void 0},e.createElement("table",null,n)))};h.Z=b}}]);
