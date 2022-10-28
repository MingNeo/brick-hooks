(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[4909],{73602:function(c,i,n){"use strict";n.d(i,{m:function(){return e.m}});var e=n(67624),t=n(93142)},89792:function(c,i,n){"use strict";n.r(i);var e=n(67294),t=n(36445),l=n(32295),s=n(91485),m=e.memo(u=>{var o=u.demos,a=o["useamappoi-demo"].component;return e.createElement(e.Fragment,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"markdown"},e.createElement("h2",{id:"useamappoi"},e.createElement(t.AnchorLink,{to:"#useamappoi","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"useAmapPoi"),e.createElement("p",null,"\u65B9\u4FBF\u4F7F\u7528\u9AD8\u5FB7\u5730\u56FE\u8FDB\u884C\u5173\u952E\u8BCD\u641C\u7D22 poi\u3001\u641C\u7D22\u9644\u8FD1\u7684 poi \u6D4F\u89C8\u5668\u7AEF\u4F7F\u7528\u65F6\uFF0C\u5185\u7F6E js api\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528\uFF0C\u5E76\u63D0\u4F9B\u81EA\u52A8\u52A0\u8F7D\u9AD8\u5FB7\u5730\u56FE js \u6587\u4EF6 react native \u7AEF\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u624B\u5DE5\u8BBE\u7F6E services"),e.createElement("h3",{id:"\u6F14\u793A"},e.createElement(t.AnchorLink,{to:"#\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u6F14\u793A")),e.createElement(l.default,o["useamappoi-demo"].previewerProps,e.createElement(a,null)),e.createElement("div",{className:"markdown"},e.createElement("h3",{id:"\u7C7B\u578B\u58F0\u660E"},e.createElement(t.AnchorLink,{to:"#\u7C7B\u578B\u58F0\u660E","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7C7B\u578B\u58F0\u660E"),e.createElement(s.Z,{code:`function useAmapPoi(options?: {
  defaultPoi?: Poi; // \u6307\u5B9A\u9ED8\u8BA4poi \u683C\u5F0F\u4E3A\u9AD8\u5FB7\u5730\u56FEPoi\u683C\u5F0F
  currentLocation?: { city?: string; [x:string]: any } ; // \u5F53\u524D\u5B9A\u4F4D\u4FE1\u606F\uFF0C\u901A\u5E38\u65E0\u9700\u4F20\u8FD9\u4E2A\u503C\uFF0CsearchPois\u65F6\u5982\u4E0D\u4F20city\uFF0C\u5219\u4F7F\u7528\u6B64\u5904\u5F53\u524D\u5B9A\u4F4D\u7684\u57CE\u5E02
  services?: {
    getNearByPoiList?: GetNearByInfos; // \u81EA\u884C\u5C01\u88C5\u7684\u83B7\u53D6\u9644\u8FD1\u7684poi\u5217\u8868\u7684\u670D\u52A1\u3002native\u7AEF\u5FC5\u4F20\uFF0C\u6D4F\u89C8\u5668\u7AEF\u5982\u4E0D\u4F20\u5219\u4F7F\u7528\u5185\u7F6E\u670D\u52A1
    searchPoiList?: any; // \u81EA\u884C\u5C01\u88C5\u7684\u641C\u7D22poi\u7684\u670D\u52A1\u3002native\u7AEF\u5FC5\u4F20\uFF0C\u6D4F\u89C8\u5668\u7AEF\u5982\u4E0D\u4F20\u5219\u4F7F\u7528\u5185\u7F6E\u670D\u52A1
  };
  onChange?: (poi: Poi) => void;
  formatPoi?: (poi: Poi, getNearByPoiList?: any) => Poi;
  amapKey?: string; // \u6D4F\u89C8\u5668\u7AEF\u914D\u7F6EamapKey \u5373\u53EF\u81EA\u52A8\u52A0\u8F7D\u9AD8\u5FB7\u5730\u56FEjs
}): {
  currentPoi: Poi;
  pois: any[];
  nearbyPois: any[];
  onSelectPoi: (poi: Poi) => Promise<...>;
  getNearbyPois: ({ current, size, formatPois, showCurrent }) => Promise<...>;
  searchPois: (params: any) => Promise<...>;
}`,lang:"typescript"}),e.createElement("h3",{id:"\u7528\u6CD5"},e.createElement(t.AnchorLink,{to:"#\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.createElement("span",{className:"icon icon-link"})),"\u7528\u6CD5"),e.createElement(s.Z,{code:`import React from 'react'
import useAmapPoi from '.'

export default function Demo() {
  const { currentPoi, pois, nearbyPois, onSelectPoi, getNearbyPois, searchPois } = useAmapPoi({
    amapKey: 'e2a0790d42bc5bfdebceb30b2b71f3e9', // \u5982\u4E0D\u9700\u8981\u901A\u8FC7hooks\u52A0\u8F7Djs\uFF0C\u5219\u4E0D\u9700\u8981\u4F20
  })

  return (
    <div>
      {JSON.stringify(currentPoi)}
      <div style={{ display: 'flex' }}>
        <button onClick={() => searchPois({ city: '\u9752\u5C9B', address: '\u4E94\u56DB\u5E7F\u573A' })}>\u641C\u7D22\u4E94\u56DB\u5E7F\u573A</button>
        <ul>
          {pois?.map((v, i) => (
            <li key={i}>{v.name}</li>
          ))}
        </ul>
      </div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => getNearbyPois({ current: { latitude: '36.062687', longitude: '120.384599' } })}>
          \u83B7\u53D6\u4E94\u56DB\u5E7F\u573A\u9644\u8FD1
        </button>
        <ul>
          {nearbyPois?.map((v) => (
            <li
              key={v.id}
              style={{ background: currentPoi?.name === v.name ? 'blue' : 'white' }}
              onClick={() => onSelectPoi(v)}
            >
              {v.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}`,lang:"javascript"}))))});i.default=u=>{var o=e.useContext(t.context),a=o.demos;return e.useEffect(()=>{var r;u!=null&&(r=u.location)!==null&&r!==void 0&&r.hash&&t.AnchorLink.scrollToAnchor(decodeURIComponent(u.location.hash.slice(1)))},[]),e.createElement(m,{demos:a})}}}]);
