(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4673],{73602:function(r,a,n){"use strict";n.d(a,{m:function(){return e.m}});var e=n(67624),t=n(93142)},4709:function(r,a,n){"use strict";n.r(a);var e=n(67294),t=n(36445),m=n(26328),l=n(91485),s=e.memo(o=>{var u=o.demos,c=u["usegeolocation-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"usegeolocation"},e.createElement(t.AnchorLink,{to:"#usegeolocation","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useGeoLocation"),e.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528\u6D4F\u89C8\u5668 geo \u5B9A\u4F4D"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(m.default,u["usegeolocation-demo"].previewerProps,e.createElement(c,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(l.Z,{code:`interface UseGeolocationOptions {
  enableHighAccuracy?: boolean
  maximumAge?: number
  timeout?: number
  navigator?: Navigator
  watch?: boolean
}

function useGeolocation(options?: UseGeolocationOptions): {
  isSupported: boolean
  location: {
    accuracy: number
    latitude: number
    longitude: number
    altitude: any
    altitudeAccuracy: any
    heading: any
    speed: any
    [x: string]: any
  }
  timestamp: number
  error: any
  loading: boolean
  loadLocation: Exector
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(l.Z,{code:`import useAmapLocation from 'brick-hooks-web'

export default function MyComponent() {
  const { location, loadLocation, loading } = useGeoLocation()
}`,lang:"javascript"}))))});a.default=o=>{var u=e.useContext(t.context),c=u.demos;return e.useEffect(()=>{var i;o!=null&&(i=o.location)!==null&&i!==void 0&&i.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(o.location.hash.slice(1)))},[]),e.createElement(s,{demos:c})}}}]);
