(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4883],{99691:function(a,i,n){"use strict";n.r(i);var e=n(62472),u=n(34019),r=n(94834),s=e.memo(t=>{var l=t.demos;return e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h1",{id:"brick-hooks-web"},e.createElement(u.AnchorLink,{to:"#brick-hooks-web","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),e.createElement("code",null,"brick-hooks-web")),e.createElement("blockquote",null,e.createElement("p",null,"\u53EF\u7528\u4E8E React web \u7AEF \u7684 React Hooks Library")),e.createElement("h2",{id:"\u7528\u6CD5"},e.createElement(u.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(r.Z,{code:"import { useCookie } from 'brick-hooks-web';",lang:"unknown"}),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useBreakpoint"},"useAnimate")," \u52A8\u753B"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useBreakpoint"},"useBreakpoint")," \u65B9\u4FBF\u5904\u7406\u4E0D\u540C\u89C6\u56FE\u5C3A\u5BF8"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useCookie"},"useCookie")," \u65B9\u4FBF\u4F7F\u7528 Cookie"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useDarkMode"},"useDarkMode")," \u4F7F\u7528\u591C\u95F4\u6A21\u5F0F"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useEventListener"},"useEventListener")," \u4F7F\u7528\u591C\u95F4\u6A21\u5F0F"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useFreeDrag"},"useFreeDrag")," \u65B9\u4FBF\u5BF9\u4E00\u4E2A\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\u6DFB\u52A0\u968F\u610F\u62D6\u52A8\u5B9A\u4F4D\u7684\u80FD\u529B"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useHover"},"useHover")," \u65B9\u4FBF\u6DFB\u52A0\u9F20\u6807\u60AC\u6D6E\u5904\u7406"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useInView"},"useInView")," \u65B9\u4FBF\u5224\u65AD\u7EC4\u4EF6\u662F\u5426\u6EDA\u52A8\u5230\u5BB9\u5668\u53EF\u89C6\u8303\u56F4\u5185"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useKey"},"useKey")," \u76D1\u542C\u952E\u76D8\u6309\u4E0B"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useLazyImage"},"useLazyImage")," \u5BF9\u56FE\u7247\u8FDB\u884C\u61D2\u52A0\u8F7D\uFF0C\u81EA\u52A8\u5224\u65AD\u662F\u5426\u5728\u89C6\u53E3\u4E2D"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useLazySequenceLoad"},"useLazySequenceLoad")," \u5BF9\u5217\u8868\u8FDB\u884C\u6309\u7EC4\u6309\u987A\u5E8F\u5206\u6279\u61D2\u52A0\u8F7D\uFF0C\u81EA\u52A8\u5224\u65AD\u662F\u5426\u5728\u89C6\u53E3\u4E2D"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useMedia"},"useMedia")," \u901A\u8FC7 js \u65B9\u4FBF\u4F7F\u7528\u5A92\u4F53\u67E5\u8BE2"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useLink"},"useLink")," \u52A8\u6001\u63D2\u5165 css link \u6807\u7B7E"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useMedia"},"useMedia")," \u901A\u8FC7 js \u65B9\u4FBF\u4F7F\u7528\u5A92\u4F53\u67E5\u8BE2"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useMediaQuery"},"useMediaQuery")," \u901A\u8FC7 js \u65B9\u4FBF\u4F7F\u7528\u5A92\u4F53\u67E5\u8BE2\u5224\u65AD\u5F53\u524D\u662F\u5426\u5339\u914D"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useOnline"},"useOnline")," \u65B9\u4FBF\u76D1\u542C\u5728\u7EBF\u79BB\u7EBF\u72B6\u6001"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useScript"},"useScript")," \u65B9\u4FBF\u5728 react \u7EC4\u4EF6\u4E2D\u52A8\u6001\u62C6\u5165\u4E00\u6BB5 js"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useScroll"},"useScroll")," \u65B9\u4FBF\u83B7\u53D6\u4E00\u4E2A scroll \u7684\u6EDA\u52A8\u503C"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useScrollFixed"},"useScrollFixed")," \u5224\u65AD\u67D0\u4E2A\u5143\u7D20\u662F\u5426\u9700\u8981\u56FA\u5B9A\u4F4D\u7F6E\u60AC\u6D6E\uFF0C\u591A\u7528\u4E8E\u6EDA\u52A8\u5230\u4E00\u5B9A\u4F4D\u7F6E\u540E\uFF0C\u60AC\u6D6E header \u7B49"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useStorage"},"useStorage")," \u65B9\u4FBF\u4F7F\u7528 localStorage\u3001sessionStorage"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useStyle"},"useStyle")," \u65B9\u4FBF\u5411\u9875\u9762\u4E2D\u63D2\u5165\u4E00\u6BB5 Style"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useTitle"},"useTitle")," \u65B9\u4FBF\u4FEE\u6539 titile"),e.createElement("p",null,e.createElement(u.Link,{to:"https://mingneo.github.io/brick-hooks/web/useTransition"},"useTransition")," \u65B9\u4FBF\u4F7F\u7528\u52A8\u753B transition \u6548\u679C")))});i.default=t=>{var l=e.useContext(u.context),c=l.demos;return e.useEffect(()=>{var o;t!=null&&(o=t.location)!==null&&o!==void 0&&o.hash&&u.AnchorLink.scrollToAnchor(decodeURIComponent(t.location.hash.slice(1)))},[]),e.createElement(s,{demos:c})}}}]);
