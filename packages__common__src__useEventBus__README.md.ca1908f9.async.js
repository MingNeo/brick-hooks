(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[2172],{98862:function(r,a,s){"use strict";s.r(a);var e=s(67294),u=s(36445),t=s(91485),c=e.memo(n=>{var l=n.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useeventbus"},e.createElement(u.AnchorLink,{to:"#useeventbus","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useEventBus"),e.createElement("p",null,"\u63D0\u4F9B\u4E00\u4E2A Pub/Sub \u7684 hook\uFF0C\u53EF\u7528\u4F5C\u8DE8\u7EC4\u4EF6\u901A\u4FE1\u3002"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(u.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement("h4",{id:"\u76F4\u63A5\u4F7F\u7528\u5168\u5C40-bus"},e.createElement(u.AnchorLink,{to:"#\u76F4\u63A5\u4F7F\u7528\u5168\u5C40-bus","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u76F4\u63A5\u4F7F\u7528\u5168\u5C40 bus"),e.createElement("blockquote",null,e.createElement("p",null,"\uFF01\u5168\u5C40 bus \u4E0D\u8981\u5728 server \u7AEF\u4F7F\u7528\uFF0C\u5982\u9700\u5F00\u542F ssr\uFF0C\u4F7F\u7528 createEventBus\u3002")),e.createElement("p",null,"\u4F7F\u7528 useEventBus"),e.createElement(t.Z,{code:`import { useEventBus } from 'brick-hooks'
function Component1() {
  const { useSubscribe, publish } = useEventBus();
  useSubscribe(('loginEventBus', payload) => {
    // ...
  })
}

// \u5728\u4EFB\u610F\u7EC4\u4EF6\u4E2D\u89E6\u53D1
const { publish } = useEventBus();
const handleChange = (payload) => publish('loginEventBus', payload)`,lang:"javascript"}),e.createElement("p",null,"\u8FD4\u56DE\u6307\u5B9A\u4E8B\u4EF6\u7684 useSubscribe\u3001publish"),e.createElement(t.Z,{code:`import { useEventBus } from 'brick-hooks'
function Component1() {
  const { useSubscribe, publish } = useEventBus('loginEventBus')
  useSubscribe((payload) => {
    // ...
  })
  const handleChange = (payload) => publish(payload)
}

function Component2() {
  const { publish } = useEventBus('loginEventBus')
  const handleChange = (payload) => publish(payload)
}`,lang:"javascript"}),e.createElement("p",null,"\u76F4\u63A5\u4F7F\u7528 \u5168\u5C40 useSubscribe\u3001publish"),e.createElement(t.Z,{code:`import { useSubscribe, publish } from 'brick-hooks'
function Component1() {
  useSubscribe(('loginEventBus', payload) => {
    // ...
  })

  const handleChange = (value) => publish('loginEventBus', value)
}

function Component2() {
  const handleChange = (value) => publish('loginEventBus', value)

  return <Child onClick={handleChange} />;
}`,lang:"javascript"}),e.createElement("h4",{id:"\u72EC\u7ACB-eventbus-\u5B9E\u4F8B"},e.createElement(u.AnchorLink,{to:"#\u72EC\u7ACB-eventbus-\u5B9E\u4F8B","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u72EC\u7ACB eventBus \u5B9E\u4F8B"),e.createElement("p",null,"\u901A\u8FC7 createEventBus \u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684 eventBus \u5B9E\u4F8B\uFF0C\u5373\u53EF\u4E0E\u5168\u5C40\u7684 eventBus \u9694\u79BB\u5F00\u6765\u3002"),e.createElement("p",null,"\u5982\u679C\u4F7F\u7528 ssr\uFF0C\u5219\u5FC5\u987B\u4F7F\u7528\u72EC\u7ACB eventBus \u5B9E\u4F8B\uFF0C\u63A8\u8350\u76F4\u63A5\u4F7F\u7528 createContextEventBus"),e.createElement(t.Z,{code:`import { createEventBus } from 'brick-hooks'
const { publish, useSubscribe, useEventBus } = createEventBus()`,lang:"javascript"}),e.createElement("h4",{id:"\u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684\u4E14\u4F7F\u7528-react-context-\u7684-eventbus-\u53CA\u76F8\u5173-hooks"},e.createElement(u.AnchorLink,{to:"#\u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684\u4E14\u4F7F\u7528-react-context-\u7684-eventbus-\u53CA\u76F8\u5173-hooks","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u521B\u5EFA\u4E00\u4E2A\u72EC\u7ACB\u7684\uFF0C\u4E14\u4F7F\u7528 react context \u7684 eventBus \u53CA\u76F8\u5173 hooks"),e.createElement(t.Z,{code:`import { createContextEventBus } from 'brick-hooks'
const ExampleEventBus = createContextEventBus()

function Component1() {
  const { useSubscribe, publish } = ExampleEventBus.useEventBus();
  useSubscribe(('loginEventBus', payload) => {
    // ...
  })
}

function Component2() {
  // \u4E5F\u53EF\u4EE5\u4F7F\u7528React.useContext
  const { publish } = React.useContext(ExampleEventBus);
  const handleChange = (payload) => publish('loginEventBus', payload)
}

function Parent() {
  return <ExampleEventBus.Provider>
    <Component1 />
    <Component2 />
  </ExampleEventBus.Provider>
}`,lang:"javascript"})))});a.default=n=>{var l=e.useContext(u.context),E=l.demos;return e.useEffect(()=>{var o;n!=null&&(o=n.location)!==null&&o!==void 0&&o.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))},[]),e.createElement(c,{demos:E})}}}]);
