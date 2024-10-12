(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8959:function(e,t,n){Promise.resolve().then(n.bind(n,3803))},4492:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,s=r.useEffect,o=r.useLayoutEffect,l=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return o(function(){i.value=n,i.getSnapshot=t,u(i)&&c({inst:i})},[e,n,t]),s(function(){return u(i)&&c({inst:i}),e(function(){u(i)&&c({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},5107:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i=n(554),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=i.useSyncExternalStore,o=r.useRef,l=r.useEffect,u=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var f=o(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;var v=s(e,(f=u(function(){function e(e){if(!l){if(l=!0,s=e,e=r(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return o=t}return o=e}if(t=o,a(s,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(s=e,o=n)}var s,o,l=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,i]))[0],f[1]);return l(function(){d.hasValue=!0,d.value=v},[v]),c(v),v}},554:function(e,t,n){"use strict";e.exports=n(4492)},5006:function(e,t,n){"use strict";e.exports=n(5107)},3803:function(e,t,n){"use strict";let r;n.r(t),n.d(t,{default:function(){return E}});var i=n(7437);n(3054);var a=n(2265),s="undefined"!=typeof window&&new class{constructor(){this.raf=e=>{requestAnimationFrame(this.raf);let t=e-this.now;this.now=e;for(let n=0;n<this.callbacks.length;n++)this.callbacks[n].callback(e,t)},this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf)}add(e,t=0){return this.callbacks.push({callback:e,priority:t}),this.callbacks.sort((e,t)=>e.priority-t.priority),()=>this.remove(e)}remove(e){this.callbacks=this.callbacks.filter(({callback:t})=>e!==t)}},o=n(8364),l=function(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=function e(t){var n,r,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t)){var a=t.length;for(n=0;n<a;n++)t[n]&&(r=e(t[n]))&&(i&&(i+=" "),i+=r)}else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(r&&(r+=" "),r+=t);return r};let u=e=>{let t;let n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>s,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},s=t=e(r,i,a);return a},c=e=>e?u(e):u;var f=n(5006);let{useDebugValue:d}=a,{useSyncExternalStoreWithSelector:v}=f,b=!1,h=e=>e,p=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?c(e):e,n=(e,n)=>(function(e,t=h,n){n&&!b&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),b=!0);let r=v(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return d(r),r})(t,e,n);return Object.assign(n,t),n};"function"==typeof SuppressedError&&SuppressedError,"undefined"!=typeof window&&(window.reactLenisVersion="0.0.47");let m=(0,a.createContext)(null),y=(r=()=>({}))?p(r):p,w=(0,a.forwardRef)((e,t)=>{var{children:n,root:r=!1,options:i={},autoRaf:u=!0,rafPriority:c=0,className:f}=e,d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["children","root","options","autoRaf","rafPriority","className"]);let v=(0,a.useRef)(null),b=(0,a.useRef)(null),[h,p]=(0,a.useState)(void 0),w=(0,a.useRef)([]),g=(0,a.useCallback)((e,t)=>{w.current.push({callback:e,priority:t}),w.current.sort((e,t)=>e.priority-t.priority)},[]),E=(0,a.useCallback)(e=>{w.current=w.current.filter(t=>t.callback!==e)},[]);(0,a.useImperativeHandle)(t,()=>({wrapper:v.current,content:b.current,lenis:h}),[h]),(0,a.useEffect)(()=>{let e=new o.Z(Object.assign(Object.assign({},i),!r&&{wrapper:v.current,content:b.current}));return p(e),()=>{e.destroy(),p(void 0)}},[r,JSON.stringify(i)]),function(e,t=0){(0,a.useEffect)(()=>{if(e)return s.add(e,t),()=>s.remove(e)},[e,t])}(e=>{u&&(null==h||h.raf(e))},c),(0,a.useEffect)(()=>{r&&h&&y.setState({lenis:h,addCallback:g,removeCallback:E})},[r,h,g,E]);let S=(0,a.useCallback)(e=>{for(let t=0;t<w.current.length;t++)w.current[t].callback(e)},[]);(0,a.useEffect)(()=>(null==h||h.on("scroll",S),()=>{null==h||h.off("scroll",S)}),[h,S]);let k=(0,a.useCallback)(()=>{v.current&&(v.current.className=l(null==h?void 0:h.className,f))},[h,f]);return(0,a.useEffect)(()=>(k(),null==h||h.on("className change",k),()=>{null==h||h.off("className change",k)}),[h,k]),a.createElement(m.Provider,{value:{lenis:h,addCallback:g,removeCallback:E}},r?n:a.createElement("div",Object.assign({ref:v,className:l(null==h?void 0:h.className,f)},d),a.createElement("div",{ref:b},n)))});var g=n(8404);function E(e){let{children:t}=e;return(0,i.jsxs)("html",{lang:"en",children:[(0,i.jsxs)("head",{children:[(0,i.jsx)("title",{children:"KLAUS"}),(0,i.jsx)("meta",{name:"description",content:"Little Fish, Big Dreams. Riding the wave into the next generation of meme tokens."})]}),(0,i.jsx)(w,{root:!0,options:{lerp:.06,duration:1.5,smoothTouch:!0},children:(0,i.jsxs)("body",{children:[(0,i.jsx)(g.Z,{}),t]})})]})}},8404:function(e,t,n){"use strict";n.d(t,{$:function(){return s}});var r=n(7437),i=n(2265),a=n(6648);let s=()=>{let[e,t]=(0,i.useState)(!0);return(0,i.useEffect)(()=>{let e=(()=>{let e=window.navigator.userAgent;return -1!==e.indexOf("Mac")?"mac":-1!==e.indexOf("Win")?"windows":"unknown"})();document.body.classList.add(e);let n=()=>{t(!1);let e=setInterval(()=>{window.scrollTo(0,0)},100);setTimeout(()=>{clearInterval(e)},1e3)};return"complete"===document.readyState?n():window.addEventListener("load",n),()=>{window.removeEventListener("load",n)}},[]),e};t.Z=()=>{let e=s();return(0,r.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-white transition-all duration-700 z-[200] ".concat(e?"pointer-events-auto":"pointer-events-none opacity-0"),children:(0,r.jsx)(a.default,{src:"/assets/images/animations/klaus-rich.gif",className:"w-24",id:"klaus-bowl-rich",width:100,height:100,alt:"KLAUS Loading"})})}},3054:function(){}},function(e){e.O(0,[141,470,971,23,744],function(){return e(e.s=8959)}),_N_E=e.O()}]);