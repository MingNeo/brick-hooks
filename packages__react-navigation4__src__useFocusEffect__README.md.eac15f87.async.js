(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[1290],{33534:function(i,c,n){"use strict";n.r(c);var e=n(67294),t=n(36445),o=n(91485),r=e.memo(u=>{var s=u.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usefocuseffect"},e.createElement(t.AnchorLink,{to:"#usefocuseffect","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useFocusEffect"),e.createElement("p",null,"\u76F4\u63A5\u4F7F\u7528 navigation.addListener('willFocus', callback)\u4E8B\u4EF6\u7528\u8D77\u6765\u6709\u5404\u79CD\u95EE\u9898\uFF0C\u5982\u4E0D\u662F\u6BCF\u6B21\u5207\u6362\u5230\u9875\u9762\u90FD\u4F1A\u89E6\u53D1"),e.createElement("p",null,"\u57FA\u672C\u7B49\u540C\u4E8E react-navigation5 \u7684 useFocusEffect\uFF0C\u9002\u914D\u5230 react-navigation4\uFF0C\u5982\u679C react-navigation5 \u4EE5\u4E0A\u8BF7\u4F7F\u7528 ",e.createElement(t.Link,{to:"https://reactnavigation.org/docs/use-focus-effect"},"https://reactnavigation.org/docs/use-focus-effect")),e.createElement("p",null,"\u4F20\u5165\u7684 effect \u51FD\u6570\u9700\u8981\u4F7F\u7528 useCallback \u5904\u7406\uFF0C\u5426\u5219 re-render \u6BCF\u6B21\u90FD\u5C06\u89E6\u53D1"),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(o.Z,{code:`function Comp({ userId }) {
  const [user, setUser] = React.useState(null)

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = API.subscribe(userId, (user) => setUser(user))

      return () => unsubscribe()
    }, [userId]),
  )

  return <ProfileContent user={user} />
}`,lang:"javascript"})))});c.default=u=>{var s=e.useContext(t.context),l=s.demos;return e.useEffect(()=>{var a;u!=null&&(a=u.location)!==null&&a!==void 0&&a.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(r,{demos:l})}}}]);
