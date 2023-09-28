"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{622:function(n,e,t){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=t(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,t){var r,o={},c=null,f=null;for(r in void 0!==t&&(c=""+t),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(f=e.ref),e)u.call(e,r)&&!l.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===o[r]&&(o[r]=e[r]);return{$$typeof:i,type:n,key:c,ref:f,props:o,_owner:s.current}}e.Fragment=o,e.jsx=c,e.jsxs=c},7437:function(n,e,t){n.exports=t(622)},8202:function(n,e,t){t.d(e,{j:function(){return u}});var r=t(9492),i=t(6504);class o extends r.l{constructor(){super(),this.setup=n=>{if(!i.sk&&window.addEventListener){let e=()=>n();return window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),()=>{window.removeEventListener("visibilitychange",e),window.removeEventListener("focus",e)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var n;null==(n=this.cleanup)||n.call(this),this.cleanup=void 0}}setEventListener(n){var e;this.setup=n,null==(e=this.cleanup)||e.call(this),this.cleanup=n(n=>{"boolean"==typeof n?this.setFocused(n):this.onFocus()})}setFocused(n){let e=this.focused!==n;e&&(this.focused=n,this.onFocus())}onFocus(){this.listeners.forEach(({listener:n})=>{n()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let u=new o},7156:function(n,e,t){t.d(e,{V:function(){return i}});var r=t(6504);let i=function(){let n=[],e=0,t=n=>{n()},i=n=>{n()},o=i=>{e?n.push(i):(0,r.A4)(()=>{t(i)})},u=()=>{let e=n;n=[],e.length&&(0,r.A4)(()=>{i(()=>{e.forEach(n=>{t(n)})})})};return{batch:n=>{let t;e++;try{t=n()}finally{--e||u()}return t},batchCalls:n=>(...e)=>{o(()=>{n(...e)})},schedule:o,setNotifyFunction:n=>{t=n},setBatchNotifyFunction:n=>{i=n}}}()},3864:function(n,e,t){t.d(e,{N:function(){return s}});var r=t(9492),i=t(6504);let o=["online","offline"];class u extends r.l{constructor(){super(),this.setup=n=>{if(!i.sk&&window.addEventListener){let e=()=>n();return o.forEach(n=>{window.addEventListener(n,e,!1)}),()=>{o.forEach(n=>{window.removeEventListener(n,e)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var n;null==(n=this.cleanup)||n.call(this),this.cleanup=void 0}}setEventListener(n){var e;this.setup=n,null==(e=this.cleanup)||e.call(this),this.cleanup=n(n=>{"boolean"==typeof n?this.setOnline(n):this.onOnline()})}setOnline(n){let e=this.online!==n;e&&(this.online=n,this.onOnline())}onOnline(){this.listeners.forEach(({listener:n})=>{n()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let s=new u},3238:function(n,e,t){t.d(e,{DV:function(){return c},Kw:function(){return s},Mz:function(){return f}});var r=t(8202),i=t(3864),o=t(6504);function u(n){return Math.min(1e3*2**n,3e4)}function s(n){return(null!=n?n:"online")!=="online"||i.N.isOnline()}class l{constructor(n){this.revert=null==n?void 0:n.revert,this.silent=null==n?void 0:n.silent}}function c(n){return n instanceof l}function f(n){let e,t,c,f=!1,a=0,h=!1,d=new Promise((n,e)=>{t=n,c=e}),y=()=>!r.j.isFocused()||"always"!==n.networkMode&&!i.N.isOnline(),p=r=>{h||(h=!0,null==n.onSuccess||n.onSuccess(r),null==e||e(),t(r))},v=t=>{h||(h=!0,null==n.onError||n.onError(t),null==e||e(),c(t))},b=()=>new Promise(t=>{e=n=>{let e=h||!y();return e&&t(n),e},null==n.onPause||n.onPause()}).then(()=>{e=void 0,h||null==n.onContinue||n.onContinue()}),w=()=>{let e;if(!h){try{e=n.fn()}catch(n){e=Promise.reject(n)}Promise.resolve(e).then(p).catch(e=>{var t,r;if(h)return;let i=null!=(t=n.retry)?t:3,s=null!=(r=n.retryDelay)?r:u,l="function"==typeof s?s(a,e):s,c=!0===i||"number"==typeof i&&a<i||"function"==typeof i&&i(a,e);if(f||!c){v(e);return}a++,null==n.onFail||n.onFail(a,e),(0,o.Gh)(l).then(()=>{if(y())return b()}).then(()=>{f?v(e):w()})})}};return s(n.networkMode)?w():b().then(w),{promise:d,cancel:e=>{h||(v(new l(e)),null==n.abort||n.abort())},continue:()=>{let n=null==e?void 0:e();return n?d:Promise.resolve()},cancelRetry:()=>{f=!0},continueRetry:()=>{f=!1}}}},9492:function(n,e,t){t.d(e,{l:function(){return r}});class r{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(n){let e={listener:n};return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},6504:function(n,e,t){t.d(e,{A4:function(){return S},G9:function(){return _},Gh:function(){return O},I6:function(){return c},Kp:function(){return s},PN:function(){return u},Rm:function(){return h},SE:function(){return o},VS:function(){return v},X7:function(){return a},ZT:function(){return i},_v:function(){return l},_x:function(){return f},oE:function(){return C},sk:function(){return r},to:function(){return y},yF:function(){return d}});let r="undefined"==typeof window||"Deno"in window;function i(){}function o(n,e){return"function"==typeof n?n(e):n}function u(n){return"number"==typeof n&&n>=0&&n!==1/0}function s(n,e){return Math.max(n+(e||0)-Date.now(),0)}function l(n,e,t){return m(n)?"function"==typeof e?{...t,queryKey:n,queryFn:e}:{...e,queryKey:n}:n}function c(n,e,t){return m(n)?[{...e,queryKey:n},t]:[n||{},e]}function f(n,e){let{type:t="all",exact:r,fetchStatus:i,predicate:o,queryKey:u,stale:s}=n;if(m(u)){if(r){if(e.queryHash!==h(u,e.options))return!1}else{if(!p(e.queryKey,u))return!1}}if("all"!==t){let n=e.isActive();if("active"===t&&!n||"inactive"===t&&n)return!1}return("boolean"!=typeof s||e.isStale()===s)&&(void 0===i||i===e.state.fetchStatus)&&(!o||!!o(e))}function a(n,e){let{exact:t,fetching:r,predicate:i,mutationKey:o}=n;if(m(o)){if(!e.options.mutationKey)return!1;if(t){if(d(e.options.mutationKey)!==d(o))return!1}else{if(!p(e.options.mutationKey,o))return!1}}return("boolean"!=typeof r||"loading"===e.state.status===r)&&(!i||!!i(e))}function h(n,e){let t=(null==e?void 0:e.queryKeyHashFn)||d;return t(n)}function d(n){return JSON.stringify(n,(n,e)=>w(e)?Object.keys(e).sort().reduce((n,t)=>(n[t]=e[t],n),{}):e)}function y(n,e){return p(n,e)}function p(n,e){return n===e||typeof n==typeof e&&!!n&&!!e&&"object"==typeof n&&"object"==typeof e&&!Object.keys(e).some(t=>!p(n[t],e[t]))}function v(n,e){if(n&&!e||e&&!n)return!1;for(let t in n)if(n[t]!==e[t])return!1;return!0}function b(n){return Array.isArray(n)&&n.length===Object.keys(n).length}function w(n){if(!E(n))return!1;let e=n.constructor;if(void 0===e)return!0;let t=e.prototype;return!!(E(t)&&t.hasOwnProperty("isPrototypeOf"))}function E(n){return"[object Object]"===Object.prototype.toString.call(n)}function m(n){return Array.isArray(n)}function O(n){return new Promise(e=>{setTimeout(e,n)})}function S(n){O(0).then(n)}function _(){if("function"==typeof AbortController)return new AbortController}function C(n,e,t){return null!=t.isDataEqual&&t.isDataEqual(n,e)?n:"function"==typeof t.structuralSharing?t.structuralSharing(n,e):!1!==t.structuralSharing?function n(e,t){if(e===t)return e;let r=b(e)&&b(t);if(r||w(e)&&w(t)){let i=r?e.length:Object.keys(e).length,o=r?t:Object.keys(t),u=o.length,s=r?[]:{},l=0;for(let i=0;i<u;i++){let u=r?i:o[i];s[u]=n(e[u],t[u]),s[u]===e[u]&&l++}return i===u&&l===i?e:s}return t}(n,e):e}},165:function(n,e,t){t.d(e,{NL:function(){return s},aH:function(){return l}});var r=t(2265);let i=r.createContext(void 0),o=r.createContext(!1);function u(n,e){return n||(e&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=i),window.ReactQueryClientContext):i)}let s=({context:n}={})=>{let e=r.useContext(u(n,r.useContext(o)));if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},l=({client:n,children:e,context:t,contextSharing:i=!1})=>{r.useEffect(()=>(n.mount(),()=>{n.unmount()}),[n]);let s=u(t,i);return r.createElement(o.Provider,{value:!t&&i},r.createElement(s.Provider,{value:n},e))}}}]);