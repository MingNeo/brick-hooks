(self.webpackChunk_brick_hooks_root=self.webpackChunk_brick_hooks_root||[]).push([[6050],{92233:function(q,k,p){"use strict";p.d(k,{Z:function(){return L}});function r(g,E,y){return E in g?Object.defineProperty(g,E,{value:y,enumerable:!0,configurable:!0,writable:!0}):g[E]=y,g}function f(g,E){var y=Object.keys(g);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(g);E&&(C=C.filter(function(N){return Object.getOwnPropertyDescriptor(g,N).enumerable})),y.push.apply(y,C)}return y}function L(g){for(var E=1;E<arguments.length;E++){var y=arguments[E]!=null?arguments[E]:{};E%2?f(Object(y),!0).forEach(function(C){r(g,C,y[C])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(y)):f(Object(y)).forEach(function(C){Object.defineProperty(g,C,Object.getOwnPropertyDescriptor(y,C))})}return g}},45331:function(q,k,p){"use strict";p.r(k),p.d(k,{default:function(){return d}});var r=p(67294),f=p(92233),L=p(6840),g=p(43083),E=p(6500),y=p.n(E),C=!!(typeof window!="undefined"&&window.document&&window.document.createElement),N=e=>e==null;function P(e){var t=e.name||e.formattedAddress;t=u(e,t);var c=e.formattedAddress+e.number,o=(0,f.Z)((0,f.Z)({},e),{},{latitude:e.latitude,longitude:e.longitude,adcode:e.adCode,name:t,address:c,city:e.city||e.cityname,cityCode:e.cityCode});return o}function u(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",c=e.province,o=c===void 0?"":c,i=e.city,l=i===void 0?"":i,s=e.district,v=s===void 0?"":s,m=o+l+v,w=t.replace(m,"");return w.length>18&&e.street&&(w=w.replace(e.street,"")),w}var a=e=>{var t=e.latitude,c=e.longitude;return new Promise((o,i)=>{if(!C)return i(new Error("must be used in web"));try{var l=window.AMap,s=()=>{l.plugin("AMap.PlaceSearch",function(){var v=new l.PlaceSearch({pageSize:5,pageIndex:1,extensions:"all"});v.searchNearBy("",[c,t],200,(m,w)=>{if(m==="complete"&&w.info==="OK"){var Z=w.poiList,j=Z===void 0?{}:Z;j.pois=(j.pois||[]).map(M=>{var U=M.location,B=U.lat,K=U.lng;return Object.assign(M,{longitude:K,latitude:B,city:M.cityname})}),o(Object.assign(j,{longitude:c,latitude:t}))}else i(new Error("get nearby pois fail"))})})};s()}catch(v){i(new Error("get nearby pois fail"))}})},S=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=t.city,o=t.address;return new Promise((i,l)=>{var s,v=(s=window)===null||s===void 0?void 0:s.AMap;v.plugin("AMap.PlaceSearch",function(){var m=new v.PlaceSearch({city:c});m.search(o,function(w,Z){if(w==="complete"&&Z.info==="OK"){var j=Z.poiList,M=j===void 0?{}:j;M.pois=(M.pois||[]).map(U=>{var B=U.location,K=B.lat,F=B.lng;return Object.assign(U,{longitude:F,latitude:K,city:U.cityname})}),i(M.pois)}})})})},b=e=>new Promise((t,c)=>{var o={name:"amap",src:e,type:"text/javascript"},i=document.querySelector("body"),l=i&&i.querySelector("[name=".concat(o.name,"]"));l?t(!0):(l=document.createElement("script"),Object.getOwnPropertyNames(o).forEach(s=>{l.setAttribute(s,o[s])}),i.appendChild(l).addEventListener("load",()=>{t(!0)},!1))}),T=function(t){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"AMap.Geocoder";return new Promise((o,i)=>{var l;if(!C)return i(new Error("must be used in browser"));var s=(l=window)===null||l===void 0?void 0:l.AMap;s?s&&!s.Map?console.error("please use plugin AMap.Geocoder"):s&&s.Map&&o(!0):t?b("//webapi.amap.com/maps?v=2.0&key=".concat(t,"&plugin=").concat(c)).then(o):console.error("please use setAmapKey to set key")})};function n(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.defaultPoi,c=e.currentLocation,o=e.services;o=o===void 0?{}:o;var i=o.getNearByPoiList,l=o.searchPoiList,s=e.onCurrentPoiChange,v=e.formatPoi,m=v===void 0?P:v,w=e.amapKey,Z=(0,r.useRef)(!1);C&&(i=i||a,l=l||S,!Z.current&&w&&(Z.current=!0,T(w)));var j=(0,r.useState)(t),M=(0,g.Z)(j,2),U=M[0],B=M[1],K=(0,r.useState)([]),F=(0,g.Z)(K,2),O=F[0],I=F[1],W=(0,r.useState)([]),V=(0,g.Z)(W,2),A=V[0],z=V[1],re=function(){var x=(0,L.Z)(y().mark(function Q($){var D,H,h,_,X,ee,Y,G;return y().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(!(!$.latitude||!$.longitude)){R.next=3;break}return B({}),R.abrupt("return");case 3:return R.next=5,m($);case 5:if(D=R.sent,!((!D.city||!D.poiId)&&i)){R.next=15;break}return R.next=9,i($);case 9:return G=R.sent,D.city=D.city||G.city||G.cityname||((H=G.pois)===null||H===void 0||(h=H[0])===null||h===void 0?void 0:h.city)||((_=G.pois)===null||_===void 0||(X=_[0])===null||X===void 0?void 0:X.cityname),D.poiId=D.poiId||G.poiId||((ee=G.pois)===null||ee===void 0||(Y=ee[0])===null||Y===void 0?void 0:Y.poiId),R.next=14,m(D);case 14:D=R.sent;case 15:if(D.city){R.next=17;break}return R.abrupt("return");case 17:return B(D),R.abrupt("return",D);case 19:case"end":return R.stop()}},Q)}));return function($){return x.apply(this,arguments)}}(),ue=function(){var x=(0,L.Z)(y().mark(function Q($){var D;return y().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,h.next=3,re($);case 3:D=h.sent,s&&s(D),h.next=10;break;case 7:h.prev=7,h.t0=h.catch(0),console.log("select poi error");case 10:case"end":return h.stop()}},Q,null,[[0,7]])}));return function($){return x.apply(this,arguments)}}(),ie=function(){var x=(0,L.Z)(y().mark(function Q($){var D;return y().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(l){h.next=2;break}throw new Error("please set service searchPoiList");case 2:return h.prev=2,h.next=5,l((0,f.Z)((0,f.Z)({},$),{},{city:$.city||(c==null?void 0:c.city)}));case 5:if(h.t0=h.sent,h.t0){h.next=8;break}h.t0=[];case 8:return D=h.t0,I(D),h.abrupt("return",D);case 13:h.prev=13,h.t1=h.catch(2),console.log(h.t1);case 16:case"end":return h.stop()}},Q,null,[[2,13]])}));return function($){return x.apply(this,arguments)}}(),se=function(){var x=(0,L.Z)(y().mark(function Q($){var D,H,h,_,X,ee,Y,G,te,R,ae;return y().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:if(H=$.current,h=$.size,_=h===void 0?5:h,X=$.formatPois,ee=X===void 0?ne=>ne.map(m):X,Y=$.showCurrent,G=Y===void 0?!1:Y,i){J.next=3;break}throw new Error("please set service getNearByPoiList");case 3:return J.next=5,i(H);case 5:if(te=J.sent,R=((D=te.pois)===null||D===void 0?void 0:D.splice(0,_).map(ne=>(0,f.Z)((0,f.Z)({},ne),{},{city:ne.city||H.city||H.cityname})))||[],!(!te.latitude||!te.longitude||!(R!=null&&R.length))){J.next=10;break}return z([]),J.abrupt("return",[]);case 10:return G&&R.unshift(H),J.next=13,ee(R);case 13:ae=J.sent,z(ae);case 15:case"end":return J.stop()}},Q)}));return function($){return x.apply(this,arguments)}}();return{currentPoi:U,pois:O,nearbyPois:A,onSelectPoi:ue,setCurrentPos:re,getNearbyPois:se,searchPois:ie}}function d(){var e=n({amapKey:"e2a0790d42bc5bfdebceb30b2b71f349"}),t=e.currentPoi,c=e.pois,o=e.nearbyPois,i=e.onSelectPoi,l=e.setCurrentPos,s=e.getNearbyPois,v=e.searchPois;return(0,r.useEffect)(()=>{l({latitude:"36.062687",longitude:"120.384599"})},[]),console.log("\u{1F680} ~ file: demo.tsx ~ line 8 ~ Demo ~ pois",c),r.createElement("div",null,r.createElement("div",null,t==null?void 0:t.city),r.createElement("div",{style:{display:"flex"}},r.createElement("ul",null,c==null?void 0:c.map((m,w)=>r.createElement("li",{key:w},m.name))),r.createElement("ul",null,o==null?void 0:o.map(m=>r.createElement("li",{key:m.id,style:{background:(t==null?void 0:t.name)===m.name?"blue":"white"},onClick:()=>i(m)},m.name)))),r.createElement("button",{onClick:()=>v({city:"\u9752\u5C9B",address:"\u4E94\u56DB\u5E7F\u573A"})},"\u641C\u7D22\u4E94\u56DB\u5E7F\u573A"),r.createElement("button",{onClick:()=>s({current:{latitude:"36.062687",longitude:"120.384599"}})},"\u83B7\u53D6\u4E94\u56DB\u5E7F\u573A\u9644\u8FD1"))}},22380:function(q,k,p){"use strict";p.r(k),p.d(k,{Demo1:function(){return C},Demo2:function(){return N},default:function(){return P}});var r=p(67294),f=p(92233),L=p(43083),g=p(7990);function E(u){var a=u.onStart,S=u.onStep,b=u.onFinished,T=u.step,n=u.format,d=n===void 0?"hh:mm:ss":n,e=u.endTime,t=u.total,c=u.autoRun,o=c===void 0?!0:c;(0,g.kG)(!!e||!!t,"endTime and total need least one"),(0,g.kG)(!e||!t,"endTime and total need only one");var i=(0,r.useRef)(null),l=(0,r.useRef)(null),s=(0,r.useRef)("idle"),v=(0,r.useRef)(typeof e=="string"?(0,g.ws)(e):e||Date.now()+(t||0)),m=(0,r.useState)({status:"idle",endTime:v.current,countdown:0}),w=(0,L.Z)(m,2),Z=w[0],j=Z.endTime,M=Z.status,U=Z.countdown,B=w[1],K=(0,r.useMemo)(()=>y(U,d),[U,d]),F=(0,r.useCallback)(()=>{(0,g.pQ)(i.current),clearTimeout(l.current),B(I=>(0,f.Z)((0,f.Z)({},I),{},{countdown:0,status:"finished"})),s.current="finished",b==null||b()},[b,B]),O=(0,r.useCallback)(()=>{(0,g.pQ)(i.current),a==null||a(),v.current=e?v.current:Date.now()+(t||0),B(A=>(0,f.Z)((0,f.Z)({},A),{},{status:"running",endTime:v.current})),s.current="running";var I=()=>{var A=Math.max(v.current-Date.now(),0),z=y(A,d);return B(re=>(0,f.Z)((0,f.Z)({},re),{},{countdown:A})),S==null||S(A,z),A===0&&F(),A},W=window.requestAnimationFrame||window.webkitRequestAnimationFrame||(A=>setTimeout(A,1e3/60)),V=T&&T>=17||!g.jU;l.current=setTimeout(()=>{var A=()=>{(0,g.pQ)(i.current),clearTimeout(l.current);var z=I();console.log("\u{1F680} ~ file: index.ts ~ line 85 ~ loop ~ progress",z,s.current),z>0&&s.current==="running"&&(i.current=V?(0,g.SQ)(I,T):W(A))};A()},0)},[e,d,a,S,T,F,t]);return(0,r.useEffect)(()=>(o&&O(),()=>{(0,g.pQ)(i.current),l.current&&clearTimeout(l.current)}),[]),(0,f.Z)((0,f.Z)({status:M,endTime:j,formatedCountdown:K,countdown:U},(0,g.hH)(U)),{},{start:O,stop:F})}function y(u,a){return typeof a=="string"?(0,g.mr)(u,a):typeof a=="function"?a(u):""}var C=()=>{var u=E({endTime:Date.now()+1e6,step:1e3}),a=u.formatedCountdown;return r.createElement("div",null,r.createElement("p",null,"\u8BBE\u7F6E\u6307\u5B9A\u65F6\u95F4\u5012\u8BA1\u65F6"),r.createElement("p",null,a,"S"))},N=()=>{var u=E({total:5e3,format:"s.SS",step:10,autoRun:!1}),a=u.formatedCountdown,S=u.start;return r.createElement("div",null,r.createElement("button",{onClick:S},"\u6BCF\u6B215\u79D2\u5012\u8BA1\u65F6"),r.createElement("p",null,a,"S"))};function P(){return r.createElement("div",null,r.createElement(C,null),r.createElement(N,null))}},60315:function(q,k,p){"use strict";p.r(k),p.d(k,{Demo1:function(){return y},Demo2:function(){return C},default:function(){return N}});var r=p(67294),f=p(4178),L=p(7990);function g(P){var u=P.onStart,a=P.onStep,S=P.onFinished,b=P.step,T=P.format,n=T===void 0?"dd hh:mm:ss.SSS":T,d=P.maxLength,e=P.autoRun,t=e===void 0?!0:e,c=P.loopWhenEnd,o=c===void 0?!1:c,i=(0,r.useRef)(null),l=(0,r.useRef)(null),s=(0,r.useRef)("idle"),v=(0,r.useRef)([]),m=(0,r.useRef)(0),w=(0,f.Z)(),Z=(0,r.useCallback)(function(F){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;m.current=F,O&&w()},[]),j=E(m.current,n),M=(0,r.useCallback)(function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;(0,L.pQ)(i.current),clearTimeout(l.current),s.current="finished",S&&S(m.current,E(m.current,n)),v.current=[],Z(F?0:m.current,!0)},[S,n]),U=(0,r.useCallback)(()=>{(0,L.pQ)(i.current),clearTimeout(l.current),s.current="idle",v.current=[],Z(0,!0)},[]),B=(0,r.useCallback)(F=>{var O=Math.max(Date.now()-F,0),I=d&&O>=d;I&&(o?(O=0,F=Date.now()):O=d);var W=E(O,n);return Z(O,!0),a&&a(O,W),I&&!o&&M(),{countup:O,formatedCountup:W}},[d,o,a,n]),K=(0,r.useCallback)(()=>{u&&u();var F=Date.now(),O=()=>B(F),I=L.jU?window.requestAnimationFrame||window.webkitRequestAnimationFrame:void 0,W=!I||b&&b>=17||typeof n=="string"&&!/S+/gi.test(n);l.current=setTimeout(()=>{s.current="running",v.current.push(O);var V=()=>{(0,L.pQ)(i.current),clearTimeout(l.current);var A=v.current.splice(0,1)[0],z=A==null?void 0:A();(o||z.countup>0)&&s.current==="running"&&(v.current.push(O),i.current=W?(0,L.SQ)(O,b):I(V))};V()},0)},[n,u,b,o,B]);return(0,r.useEffect)(()=>(t&&K(),()=>{(0,L.pQ)(i.current),l.current&&clearTimeout(l.current)}),[]),{status:s.current,formatedCountup:j,countup:m.current,start:K,stop:M,reset:U,getCurrentCountup:B}}function E(P,u){return typeof u=="string"?(0,L.mr)(P,u):typeof u=="function"?u(P):""}var y=()=>{var P=g({maxLength:1e3*60*10,format:"dd hh:mm:ss"}),u=P.formatedCountup;return r.createElement("div",null,r.createElement("p",null,"\u8BA1\u65F610\u5206\u949F"),r.createElement("p",null,u))},C=()=>{var P=g({maxLength:5e3,format:"s.SS",step:10,autoRun:!1}),u=P.formatedCountup,a=P.start;return r.createElement("div",null,r.createElement("button",{onClick:a},"\u6BCF\u6B215\u79D2\u8BA1\u65F6"),r.createElement("p",null,u,"S"))};function N(){return r.createElement("div",null,r.createElement(y,null),r.createElement(C,null))}},4178:function(q,k,p){"use strict";p.d(k,{Z:function(){return f}});var r=p(67294);function f(){return(0,r.useReducer)(L=>L+1,0)[1]}},19353:function(q,k,p){"use strict";p.r(k),p.d(k,{Demo:function(){return P}});var r=p(43083),f=p(67294);function L(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},S=(0,f.useState)(u),b=(0,r.Z)(S,2),T=b[0],n=b[1],d=(0,f.useMemo)(()=>{var e=a.min,t=e===void 0?-Infinity:e,c=a.max,o=c===void 0?Infinity:c,i=a.step,l=i===void 0?1:i,s=v=>{var m=w=>w<t?t:w>o?o:w;n(w=>m(typeof v=="function"?v(w):v))};return{set:s,inc:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l;return s(w=>w+m)},dec:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l;return s(w=>w-m)},reset:()=>n(u)}},[u,a]);return[T,d]}function g(u){return typeof u=="object"||Array.isArray(u)?JSON.parse(JSON.stringify(u)):u}function E(u){try{return JSON.parse(u)}catch(a){return u}}class y{constructor(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.source=void 0,this.last={snapshot:void 0,timestamp:0},this.undoList=[],this.redoList=[],this.max=void 0,this.dump=void 0,this.parse=void 0,this.onUpdate=void 0;var S=a.max,b=a.dump,T=b===void 0?g:b,n=a.parse,d=n===void 0?E:n,e=a.onUpdate,t=e===void 0?c=>{}:e;this.dump=T,this.parse=d,this.onUpdate=t,this.push=this.push.bind(this),this.undo=this.undo.bind(this),this.redo=this.redo.bind(this),this.clear=this.clear.bind(this),this.reset=this.reset.bind(this),this.max=S}get canUndo(){return this.undoList.length>0}get canRedo(){return this.redoList.length>0}get history(){return this.undoList}createHistoryItem(a){var S={snapshot:this.dump(a),timestamp:Date.now()};return S}undo(){if(this.canUndo){var a=this.undoList.shift();a&&this.last&&(this.redoList.unshift(this.last),this._changeState(a))}}redo(){if(this.canRedo){var a=this.redoList.shift();this.undoList.unshift(this.last),this._changeState(a)}}clear(){this.undoList=[],this.redoList=[],this.onUpdate(this.source,this.last)}push(a){var S,b,T=typeof this.source=="undefined";if(this.source=a,T){this.undoList=[],this.redoList=[];var n=this.createHistoryItem(a);this.last=n,this.onUpdate(this.source,this.last)}else this.last&&this.last.snapshot!==((S=this.undoList)===null||S===void 0||(b=S[0])===null||b===void 0?void 0:b.snapshot)&&(this.undoList.unshift(this.last),this.max&&this.undoList.length>this.max&&this.undoList.splice(this.max,Infinity),this.redoList.length&&this.redoList.splice(0,this.redoList.length),this.last=this.createHistoryItem(this.source),this._changeState(this.last))}reset(){this._changeState(this.last)}_changeState(a){var S=this.parse(a.snapshot);this.source=S,this.last=a,this.onUpdate(S,a)}getHistory(){return this.history}getUndoList(){return this.undoList}getRedoList(){return this.redoList}getCanUndo(){return this.canUndo}getCanRedo(){return this.canRedo}getSource(){return this.source}getLast(){return this.last}}function C(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=(0,f.useRef)();return a.current||(a.current=new y(u)),a.current}var N=p(4178);function P(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=u.max,S=a===void 0?10:a,b=L(0),T=(0,r.Z)(b,2),n=T[0],d=T[1].inc,e=(0,N.Z)(),t=C({max:S,onUpdate:w=>{e()}}),c=t.undo,o=t.redo,i=t.push,l=t.last,s=t.undoList,v=t.redoList,m=t.history;return(0,f.useEffect)(()=>{i(n)},[n,i]),f.createElement("div",null,f.createElement("p",null,"inputValue: ",n),f.createElement("button",{onClick:w=>d()},"inc"),f.createElement("button",{disabled:s.length<1,onClick:c},"undo ",s.length),f.createElement("button",{disabled:v.length<1,onClick:o},"redo"),f.createElement("p",null,"last: ",JSON.stringify(l)),f.createElement("p",null,"undoList: ",JSON.stringify(s)),f.createElement("p",null,"history: ",JSON.stringify(m)),f.createElement("p",null,"redoList: ",JSON.stringify(v)))}},7990:function(q,k,p){"use strict";p.d(k,{kG:function(){return f},jU:function(){return y},mr:function(){return C},hH:function(){return N},ws:function(){return a},SQ:function(){return b},pQ:function(){return T}});var r=p(43083);function f(n,d){if(!n)throw new Error(d)}function L(n){return n==null}function g(n){return typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"}function E(n){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,e=(n==null?void 0:n.length)||0;if(!e||d<1)return[];for(var t=0,c=[];t<e;)c.push(n.slice(t,t+=d));return c}var y=!!(typeof window!="undefined"&&window.document&&window.document.createElement),C=function(d){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"dd hh:mm:ss.SSS",t=e,c={"d+":Math.floor(d/1e3/60/60/24),"h+":Math.floor(d/1e3/60/60%24),"m+":Math.floor(d/1e3/60%60),"s+":Math.floor(d/1e3%60),"S+":d%1e3};return Object.entries(c).forEach(o=>{var i=(0,r.Z)(o,2),l=i[0],s=i[1],v=new RegExp("(".concat(l,")"));v.test(t)&&(t=t.replace(v,m=>l==="S+"?"".concat(s).concat(new Array(m.length).join("0")).slice(0,m.length):m.length===1?"".concat(s):"00".concat(s).substring("".concat(s).length)))}),t},N=n=>({day:Math.floor(n/1e3/60/60/24),hour:Math.floor(n/1e3/60/60%24),minutes:Math.floor(n/1e3/60%60),seconds:Math.floor(n/1e3%60),millisecond:n%1e3}),P=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=function(d){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(typeof d=="string"&&!/Z$/i.test(d)){var t=d.match(P);if(t){var c=t[2]-1||0,o=(t[7]||"0").substring(0,3);return e?new Date(Date.UTC(t[1],c,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)):new Date(t[1],c,t[3]||1,t[4]||0,t[5]||0,t[6]||0,o)}}return new Date(d)},a=function(d){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return u(d,e).getTime()};function S(n){return typeof n=="function"}function b(n,d){var e=null,t=0,c=0,o=d,i=Date.now(),l=()=>{o=d-t,n(),e=setTimeout(()=>{t=Date.now()-i-c*d,c++,l()},o)};return l(),e}function T(n){if(!!n){try{clearInterval(n)}catch(e){}try{var d=window.cancelAnimationFrame||window.webkitCancelAnimationFrame;d(n)}catch(e){}try{clearTimeout(n)}catch(e){}}}}}]);
