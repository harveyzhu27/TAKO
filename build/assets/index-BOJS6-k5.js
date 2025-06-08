(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function ST(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Cd={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function FS(){if(I_)return fl;I_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return fl.Fragment=t,fl.jsx=n,fl.jsxs=n,fl}var C_;function GS(){return C_||(C_=1,Cd.exports=FS()),Cd.exports}var lt=GS(),Dd={exports:{}},It={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function KS(){if(D_)return It;D_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.iterator;function D(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,st={};function Z(O,Q,ut){this.props=O,this.context=Q,this.refs=st,this.updater=ut||B}Z.prototype.isReactComponent={},Z.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},Z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function ot(){}ot.prototype=Z.prototype;function tt(O,Q,ut){this.props=O,this.context=Q,this.refs=st,this.updater=ut||B}var et=tt.prototype=new ot;et.constructor=tt,X(et,Z.prototype),et.isPureReactComponent=!0;var rt=Array.isArray,W={H:null,A:null,T:null,S:null,V:null},ft=Object.prototype.hasOwnProperty;function C(O,Q,ut,it,mt,Ot){return ut=Ot.ref,{$$typeof:r,type:O,key:Q,ref:ut!==void 0?ut:null,props:Ot}}function S(O,Q){return C(O.type,Q,void 0,void 0,void 0,O.props)}function w(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function N(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ut){return Q[ut]})}var V=/\/+/g;function P(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):Q.toString(36)}function I(){}function _e(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(Q){O.status==="pending"&&(O.status="fulfilled",O.value=Q)},function(Q){O.status==="pending"&&(O.status="rejected",O.reason=Q)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function te(O,Q,ut,it,mt){var Ot=typeof O;(Ot==="undefined"||Ot==="boolean")&&(O=null);var St=!1;if(O===null)St=!0;else switch(Ot){case"bigint":case"string":case"number":St=!0;break;case"object":switch(O.$$typeof){case r:case t:St=!0;break;case E:return St=O._init,te(St(O._payload),Q,ut,it,mt)}}if(St)return mt=mt(O),St=it===""?"."+P(O,0):it,rt(mt)?(ut="",St!=null&&(ut=St.replace(V,"$&/")+"/"),te(mt,Q,ut,"",function(Fn){return Fn})):mt!=null&&(w(mt)&&(mt=S(mt,ut+(mt.key==null||O&&O.key===mt.key?"":(""+mt.key).replace(V,"$&/")+"/")+St)),Q.push(mt)),1;St=0;var Ce=it===""?".":it+":";if(rt(O))for(var Jt=0;Jt<O.length;Jt++)it=O[Jt],Ot=Ce+P(it,Jt),St+=te(it,Q,ut,Ot,mt);else if(Jt=D(O),typeof Jt=="function")for(O=Jt.call(O),Jt=0;!(it=O.next()).done;)it=it.value,Ot=Ce+P(it,Jt++),St+=te(it,Q,ut,Ot,mt);else if(Ot==="object"){if(typeof O.then=="function")return te(_e(O),Q,ut,it,mt);throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return St}function F(O,Q,ut){if(O==null)return O;var it=[],mt=0;return te(O,it,"","",function(Ot){return Q.call(ut,Ot,mt++)}),it}function H(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(ut){(O._status===0||O._status===-1)&&(O._status=1,O._result=ut)},function(ut){(O._status===0||O._status===-1)&&(O._status=2,O._result=ut)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var nt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function At(){}return It.Children={map:F,forEach:function(O,Q,ut){F(O,function(){Q.apply(this,arguments)},ut)},count:function(O){var Q=0;return F(O,function(){Q++}),Q},toArray:function(O){return F(O,function(Q){return Q})||[]},only:function(O){if(!w(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},It.Component=Z,It.Fragment=n,It.Profiler=o,It.PureComponent=tt,It.StrictMode=s,It.Suspense=g,It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,It.__COMPILER_RUNTIME={__proto__:null,c:function(O){return W.H.useMemoCache(O)}},It.cache=function(O){return function(){return O.apply(null,arguments)}},It.cloneElement=function(O,Q,ut){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var it=X({},O.props),mt=O.key,Ot=void 0;if(Q!=null)for(St in Q.ref!==void 0&&(Ot=void 0),Q.key!==void 0&&(mt=""+Q.key),Q)!ft.call(Q,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&Q.ref===void 0||(it[St]=Q[St]);var St=arguments.length-2;if(St===1)it.children=ut;else if(1<St){for(var Ce=Array(St),Jt=0;Jt<St;Jt++)Ce[Jt]=arguments[Jt+2];it.children=Ce}return C(O.type,mt,void 0,void 0,Ot,it)},It.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},It.createElement=function(O,Q,ut){var it,mt={},Ot=null;if(Q!=null)for(it in Q.key!==void 0&&(Ot=""+Q.key),Q)ft.call(Q,it)&&it!=="key"&&it!=="__self"&&it!=="__source"&&(mt[it]=Q[it]);var St=arguments.length-2;if(St===1)mt.children=ut;else if(1<St){for(var Ce=Array(St),Jt=0;Jt<St;Jt++)Ce[Jt]=arguments[Jt+2];mt.children=Ce}if(O&&O.defaultProps)for(it in St=O.defaultProps,St)mt[it]===void 0&&(mt[it]=St[it]);return C(O,Ot,void 0,void 0,null,mt)},It.createRef=function(){return{current:null}},It.forwardRef=function(O){return{$$typeof:m,render:O}},It.isValidElement=w,It.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:H}},It.memo=function(O,Q){return{$$typeof:y,type:O,compare:Q===void 0?null:Q}},It.startTransition=function(O){var Q=W.T,ut={};W.T=ut;try{var it=O(),mt=W.S;mt!==null&&mt(ut,it),typeof it=="object"&&it!==null&&typeof it.then=="function"&&it.then(At,nt)}catch(Ot){nt(Ot)}finally{W.T=Q}},It.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},It.use=function(O){return W.H.use(O)},It.useActionState=function(O,Q,ut){return W.H.useActionState(O,Q,ut)},It.useCallback=function(O,Q){return W.H.useCallback(O,Q)},It.useContext=function(O){return W.H.useContext(O)},It.useDebugValue=function(){},It.useDeferredValue=function(O,Q){return W.H.useDeferredValue(O,Q)},It.useEffect=function(O,Q,ut){var it=W.H;if(typeof ut=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return it.useEffect(O,Q)},It.useId=function(){return W.H.useId()},It.useImperativeHandle=function(O,Q,ut){return W.H.useImperativeHandle(O,Q,ut)},It.useInsertionEffect=function(O,Q){return W.H.useInsertionEffect(O,Q)},It.useLayoutEffect=function(O,Q){return W.H.useLayoutEffect(O,Q)},It.useMemo=function(O,Q){return W.H.useMemo(O,Q)},It.useOptimistic=function(O,Q){return W.H.useOptimistic(O,Q)},It.useReducer=function(O,Q,ut){return W.H.useReducer(O,Q,ut)},It.useRef=function(O){return W.H.useRef(O)},It.useState=function(O){return W.H.useState(O)},It.useSyncExternalStore=function(O,Q,ut){return W.H.useSyncExternalStore(O,Q,ut)},It.useTransition=function(){return W.H.useTransition()},It.version="19.1.0",It}var O_;function Em(){return O_||(O_=1,Dd.exports=KS()),Dd.exports}var Rt=Em();const QS=ST(Rt);var Od={exports:{}},dl={},Nd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function YS(){return N_||(N_=1,function(r){function t(F,H){var nt=F.length;F.push(H);t:for(;0<nt;){var At=nt-1>>>1,O=F[At];if(0<o(O,H))F[At]=H,F[nt]=O,nt=At;else break t}}function n(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var H=F[0],nt=F.pop();if(nt!==H){F[0]=nt;t:for(var At=0,O=F.length,Q=O>>>1;At<Q;){var ut=2*(At+1)-1,it=F[ut],mt=ut+1,Ot=F[mt];if(0>o(it,nt))mt<O&&0>o(Ot,it)?(F[At]=Ot,F[mt]=nt,At=mt):(F[At]=it,F[ut]=nt,At=ut);else if(mt<O&&0>o(Ot,nt))F[At]=Ot,F[mt]=nt,At=mt;else break t}}return H}function o(F,H){var nt=F.sortIndex-H.sortIndex;return nt!==0?nt:F.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var g=[],y=[],E=1,b=null,D=3,B=!1,X=!1,st=!1,Z=!1,ot=typeof setTimeout=="function"?setTimeout:null,tt=typeof clearTimeout=="function"?clearTimeout:null,et=typeof setImmediate<"u"?setImmediate:null;function rt(F){for(var H=n(y);H!==null;){if(H.callback===null)s(y);else if(H.startTime<=F)s(y),H.sortIndex=H.expirationTime,t(g,H);else break;H=n(y)}}function W(F){if(st=!1,rt(F),!X)if(n(g)!==null)X=!0,ft||(ft=!0,P());else{var H=n(y);H!==null&&te(W,H.startTime-F)}}var ft=!1,C=-1,S=5,w=-1;function N(){return Z?!0:!(r.unstable_now()-w<S)}function V(){if(Z=!1,ft){var F=r.unstable_now();w=F;var H=!0;try{t:{X=!1,st&&(st=!1,tt(C),C=-1),B=!0;var nt=D;try{e:{for(rt(F),b=n(g);b!==null&&!(b.expirationTime>F&&N());){var At=b.callback;if(typeof At=="function"){b.callback=null,D=b.priorityLevel;var O=At(b.expirationTime<=F);if(F=r.unstable_now(),typeof O=="function"){b.callback=O,rt(F),H=!0;break e}b===n(g)&&s(g),rt(F)}else s(g);b=n(g)}if(b!==null)H=!0;else{var Q=n(y);Q!==null&&te(W,Q.startTime-F),H=!1}}break t}finally{b=null,D=nt,B=!1}H=void 0}}finally{H?P():ft=!1}}}var P;if(typeof et=="function")P=function(){et(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,_e=I.port2;I.port1.onmessage=V,P=function(){_e.postMessage(null)}}else P=function(){ot(V,0)};function te(F,H){C=ot(function(){F(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(F){F.callback=null},r.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},r.unstable_getCurrentPriorityLevel=function(){return D},r.unstable_next=function(F){switch(D){case 1:case 2:case 3:var H=3;break;default:H=D}var nt=D;D=H;try{return F()}finally{D=nt}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var nt=D;D=F;try{return H()}finally{D=nt}},r.unstable_scheduleCallback=function(F,H,nt){var At=r.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?At+nt:At):nt=At,F){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=nt+O,F={id:E++,callback:H,priorityLevel:F,startTime:nt,expirationTime:O,sortIndex:-1},nt>At?(F.sortIndex=nt,t(y,F),n(g)===null&&F===n(y)&&(st?(tt(C),C=-1):st=!0,te(W,nt-At))):(F.sortIndex=O,t(g,F),X||B||(X=!0,ft||(ft=!0,P()))),F},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(F){var H=D;return function(){var nt=D;D=H;try{return F.apply(this,arguments)}finally{D=nt}}}}(Md)),Md}var M_;function XS(){return M_||(M_=1,Nd.exports=YS()),Nd.exports}var Vd={exports:{}},Ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function $S(){if(V_)return Ge;V_=1;var r=Em();function t(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,y,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:g,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ge.createPortal=function(g,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(g,y,null,E)},Ge.flushSync=function(g){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=y,s.p=E,s.d.f()}},Ge.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},Ge.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Ge.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var E=y.as,b=m(E,y.crossOrigin),D=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:D,fetchPriority:B}):E==="script"&&s.d.X(g,{crossOrigin:b,integrity:D,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ge.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},Ge.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,b=m(E,y.crossOrigin);s.d.L(g,E,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ge.preloadModule=function(g,y){if(typeof g=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},Ge.requestFormReset=function(g){s.d.r(g)},Ge.unstable_batchedUpdates=function(g,y){return g(y)},Ge.useFormState=function(g,y,E){return f.H.useFormState(g,y,E)},Ge.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ge.version="19.1.0",Ge}var k_;function ZS(){if(k_)return Vd.exports;k_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Vd.exports=$S(),Vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function JS(){if(P_)return dl;P_=1;var r=XS(),t=Em(),n=ZS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function g(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,b=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),st=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),ot=Symbol.for("react.provider"),tt=Symbol.for("react.consumer"),et=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ft=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function P(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function _e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case Z:return"Profiler";case st:return"StrictMode";case W:return"Suspense";case ft:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case et:return(e.displayName||"Context")+".Provider";case tt:return(e._context.displayName||"Context")+".Consumer";case rt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return i=e.displayName||null,i!==null?i:_e(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return _e(e(i))}catch{}}return null}var te=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},At=[],O=-1;function Q(e){return{current:e}}function ut(e){0>O||(e.current=At[O],At[O]=null,O--)}function it(e,i){O++,At[O]=e.current,e.current=i}var mt=Q(null),Ot=Q(null),St=Q(null),Ce=Q(null);function Jt(e,i){switch(it(St,i),it(Ot,e),it(mt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?e_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=e_(i),e=n_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ut(mt),it(mt,e)}function Fn(){ut(mt),ut(Ot),ut(St)}function Xi(e){e.memoizedState!==null&&it(Ce,e);var i=mt.current,a=n_(i,e.type);i!==a&&(it(Ot,e),it(mt,a))}function gi(e){Ot.current===e&&(ut(mt),ut(Ot)),Ce.current===e&&(ut(Ce),ol._currentValue=nt)}var Gr=Object.prototype.hasOwnProperty,Kr=r.unstable_scheduleCallback,Qr=r.unstable_cancelCallback,io=r.unstable_shouldYield,Yl=r.unstable_requestPaint,vn=r.unstable_now,Ih=r.unstable_getCurrentPriorityLevel,ro=r.unstable_ImmediatePriority,Hs=r.unstable_UserBlockingPriority,Yr=r.unstable_NormalPriority,Ch=r.unstable_LowPriority,Fs=r.unstable_IdlePriority,so=r.log,Xl=r.unstable_setDisableYieldValue,se=null,Ft=null;function on(e){if(typeof so=="function"&&Xl(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(se,e)}catch{}}var He=Math.clz32?Math.clz32:Xr,$l=Math.log,Dh=Math.LN2;function Xr(e){return e>>>=0,e===0?32:31-($l(e)/Dh|0)|0}var $r=256,Zr=4194304;function kn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Gs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=kn(l):(v&=T,v!==0?h=kn(v):a||(a=T&~e,a!==0&&(h=kn(a))))):(T=l&~d,T!==0?h=kn(T):v!==0?h=kn(v):a||(a=l&~e,a!==0&&(h=kn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Jr(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ao(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oo(){var e=$r;return $r<<=1,($r&4194048)===0&&($r=256),e}function lo(){var e=Zr;return Zr<<=1,(Zr&62914560)===0&&(Zr=4194304),e}function yi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function _i(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function uo(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,R=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var G=31-He(a),Y=1<<G;T[G]=0,R[G]=-1;var z=L[G];if(z!==null)for(L[G]=null,G=0;G<z.length;G++){var j=z[G];j!==null&&(j.lane&=-536870913)}a&=~Y}l!==0&&Gn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Gn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-He(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function co(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-He(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function $i(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zi(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:E_(e.type))}function Zl(e,i){var a=H.p;try{return H.p=e,i()}finally{H.p=a}}var ee=Math.random().toString(36).slice(2),ve="__reactFiber$"+ee,de="__reactProps$"+ee,Tn="__reactContainer$"+ee,ho="__reactEvents$"+ee,Oh="__reactListeners$"+ee,Ji="__reactHandles$"+ee,Jl="__reactResources$"+ee,Wr="__reactMarker$"+ee;function Wi(e){delete e[ve],delete e[de],delete e[ho],delete e[Oh],delete e[Ji]}function vi(e){var i=e[ve];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Tn]||a[ve]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=a_(e);e!==null;){if(a=e[ve])return a;e=a_(e)}return i}e=a,a=e.parentNode}return null}function Kn(e){if(e=e[ve]||e[Tn]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Qn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function $e(e){var i=e[Jl];return i||(i=e[Jl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ue(e){e[Wr]=!0}var fo=new Set,Qs={};function Pn(e,i){Ti(e,i),Ti(e+"Capture",i)}function Ti(e,i){for(Qs[e]=i,e=0;e<i.length;e++)fo.add(i[e])}var Wl=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tu={},ts={};function eu(e){return Gr.call(ts,e)?!0:Gr.call(tu,e)?!1:Wl.test(e)?ts[e]=!0:(tu[e]=!0,!1)}function tr(e,i,a){if(eu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Yn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Pe(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var es,nu;function Ei(e){if(es===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);es=i&&i[1]||"",nu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+es+e+nu}var Ys=!1;function Xs(e,i){if(!e||Ys)return"";Ys=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(j){var z=j}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(j){z=j}e.call(Y.prototype)}}else{try{throw Error()}catch(j){z=j}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var R=v.split(`
`),L=T.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===L.length)for(l=R.length-1,h=L.length-1;1<=l&&0<=h&&R[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==L[h]){var G=`
`+R[l].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=l&&0<=h);break}}}finally{Ys=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ei(a):""}function mo(e){switch(e.tag){case 26:case 27:case 5:return Ei(e.type);case 16:return Ei("Lazy");case 13:return Ei("Suspense");case 19:return Ei("SuspenseList");case 0:case 15:return Xs(e.type,!1);case 11:return Xs(e.type.render,!1);case 1:return Xs(e.type,!0);case 31:return Ei("Activity");default:return""}}function $s(e){try{var i="";do i+=mo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function po(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Nh(e){var i=po(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Zs(e){e._valueTracker||(e._valueTracker=Nh(e))}function go(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=po(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mh=/[\n"\\]/g;function me(e){return e.replace(Mh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ln(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ze(i)):e.value!==""+Ze(i)&&(e.value=""+Ze(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?er(e,v,Ze(i)):a!=null?er(e,v,Ze(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ze(T):e.removeAttribute("name")}function is(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Ze(a):"",i=i!=null?""+Ze(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function er(e,i,a){i==="number"&&ns(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ai(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Qt(e,i,a){if(i!=null&&(i=""+Ze(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Ze(a):""}function rs(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(te(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Ze(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function En(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ss=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function iu(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||ss.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function yo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&iu(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&iu(e,d,i[d])}function _o(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Js(e){return kh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Si=null;function An(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bi=null,wi=null;function vo(e){var i=Kn(e);if(i&&(e=i.stateNode)){var a=e[de]||null;t:switch(e=i.stateNode,i.type){case"input":if(ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[de]||null;if(!h)throw Error(s(90));ln(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&go(l)}break t;case"textarea":Qt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&Ai(e,!!a.multiple,i,!1)}}}var Xn=!1;function ru(e,i,a){if(Xn)return e(i,a);Xn=!0;try{var l=e(i);return l}finally{if(Xn=!1,(bi!==null||wi!==null)&&(Zu(),bi&&(i=bi,e=wi,wi=bi=null,vo(i),e)))for(i=0;i<e.length;i++)vo(e[i])}}function as(e,i){var a=e.stateNode;if(a===null)return null;var l=a[de]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sn=!1;if(xn)try{var os={};Object.defineProperty(os,"passive",{get:function(){Sn=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{Sn=!1}var $n=null,nr=null,Ri=null;function To(){if(Ri)return Ri;var e,i=nr,a=i.length,l,h="value"in $n?$n.value:$n.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ri=h.slice(e,1<l?1-l:void 0)}function Zn(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function Eo(){return!1}function De(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Jn:Eo,this.isPropagationStopped=Eo,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),i}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ws=De(qt),ls=E({},qt,{view:0,detail:0}),su=De(ls),ta,ea,Wn,us=E({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wn&&(Wn&&e.type==="mousemove"?(ta=e.screenX-Wn.screenX,ea=e.screenY-Wn.screenY):ea=ta=0,Wn=e),ta)},movementY:function(e){return"movementY"in e?e.movementY:ea}}),bn=De(us),au=E({},us,{dataTransfer:0}),Ph=De(au),cs=E({},ls,{relatedTarget:0}),na=De(cs),Ao=E({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),ia=De(Ao),ou=E({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ra=De(ou),xh=E({},qt,{data:0}),So=De(xh),hs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=uu[e])?!!i[e]:!1}function fs(){return bo}var cu=E({},ls,{key:function(e){if(e.key){var i=hs[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(e){return e.type==="keypress"?Zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sa=De(cu),hu=E({},us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wo=De(hu),Ii=E({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),fu=De(Ii),du=E({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),mu=De(du),pu=E({},us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aa=De(pu),Je=E({},qt,{newState:0,oldState:0}),gu=De(Je),yu=[9,13,27,32],ti=xn&&"CompositionEvent"in window,c=null;xn&&"documentMode"in document&&(c=document.documentMode);var p=xn&&"TextEvent"in window&&!c,_=xn&&(!ti||c&&8<c&&11>=c),A=" ",x=!1;function q(e,i){switch(e){case"keyup":return yu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function at(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xt=!1;function Te(e,i){switch(e){case"compositionend":return at(i);case"keypress":return i.which!==32?null:(x=!0,A);case"textInput":return e=i.data,e===A&&x?null:e;default:return null}}function Ut(e,i){if(xt)return e==="compositionend"||!ti&&q(e,i)?(e=To(),Ri=nr=$n=null,xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var Oe={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ee(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Oe[e.type]:i==="textarea"}function Ci(e,i,a,l){bi?wi?wi.push(l):wi=[l]:bi=l,i=ic(i,"onChange"),0<i.length&&(a=new Ws("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var xe=null,ei=null;function Ro(e){$y(e,0)}function _u(e){var i=Qn(e);if(go(i))return e}function yp(e,i){if(e==="change")return i}var _p=!1;if(xn){var Uh;if(xn){var Lh="oninput"in document;if(!Lh){var vp=document.createElement("div");vp.setAttribute("oninput","return;"),Lh=typeof vp.oninput=="function"}Uh=Lh}else Uh=!1;_p=Uh&&(!document.documentMode||9<document.documentMode)}function Tp(){xe&&(xe.detachEvent("onpropertychange",Ep),ei=xe=null)}function Ep(e){if(e.propertyName==="value"&&_u(ei)){var i=[];Ci(i,ei,e,An(e)),ru(Ro,i)}}function TA(e,i,a){e==="focusin"?(Tp(),xe=i,ei=a,xe.attachEvent("onpropertychange",Ep)):e==="focusout"&&Tp()}function EA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _u(ei)}function AA(e,i){if(e==="click")return _u(i)}function SA(e,i){if(e==="input"||e==="change")return _u(i)}function bA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var un=typeof Object.is=="function"?Object.is:bA;function Io(e,i){if(un(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Gr.call(i,h)||!un(e[h],i[h]))return!1}return!0}function Ap(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,i){var a=Ap(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ap(a)}}function bp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?bp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function wp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ns(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ns(e.document)}return i}function zh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var wA=xn&&"documentMode"in document&&11>=document.documentMode,oa=null,jh=null,Co=null,Bh=!1;function Rp(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bh||oa==null||oa!==ns(l)||(l=oa,"selectionStart"in l&&zh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Co&&Io(Co,l)||(Co=l,l=ic(jh,"onSelect"),0<l.length&&(i=new Ws("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=oa)))}function ds(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var la={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},qh={},Ip={};xn&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete la.animationend.animation,delete la.animationiteration.animation,delete la.animationstart.animation),"TransitionEvent"in window||delete la.transitionend.transition);function ms(e){if(qh[e])return qh[e];if(!la[e])return e;var i=la[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ip)return qh[e]=i[a];return e}var Cp=ms("animationend"),Dp=ms("animationiteration"),Op=ms("animationstart"),RA=ms("transitionrun"),IA=ms("transitionstart"),CA=ms("transitioncancel"),Np=ms("transitionend"),Mp=new Map,Hh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hh.push("scrollEnd");function Un(e,i){Mp.set(e,i),Pn(i,[e])}var Vp=new WeakMap;function wn(e,i){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:$s(i)},Vp.set(e,i),i)}return{value:e,source:i,stack:$s(i)}}var Rn=[],ua=0,Fh=0;function vu(){for(var e=ua,i=Fh=ua=0;i<e;){var a=Rn[i];Rn[i++]=null;var l=Rn[i];Rn[i++]=null;var h=Rn[i];Rn[i++]=null;var d=Rn[i];if(Rn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&kp(a,h,d)}}function Tu(e,i,a,l){Rn[ua++]=e,Rn[ua++]=i,Rn[ua++]=a,Rn[ua++]=l,Fh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Gh(e,i,a,l){return Tu(e,i,a,l),Eu(e)}function ca(e,i){return Tu(e,null,null,i),Eu(e)}function kp(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-He(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Eu(e){if(50<Wo)throw Wo=0,Jf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ha={};function DA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,i,a,l){return new DA(e,i,a,l)}function Kh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Di(e,i){var a=e.alternate;return a===null?(a=cn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Au(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")Kh(e)&&(v=1);else if(typeof e=="string")v=NS(e,a,mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=cn(31,a,i,h),e.elementType=w,e.lanes=d,e;case X:return ps(a.children,h,d,i);case st:v=8,h|=24;break;case Z:return e=cn(12,a,i,h|2),e.elementType=Z,e.lanes=d,e;case W:return e=cn(13,a,i,h),e.elementType=W,e.lanes=d,e;case ft:return e=cn(19,a,i,h),e.elementType=ft,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ot:case et:v=10;break t;case tt:v=9;break t;case rt:v=11;break t;case C:v=14;break t;case S:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=cn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function ps(e,i,a,l){return e=cn(7,e,l,i),e.lanes=a,e}function Qh(e,i,a){return e=cn(6,e,null,i),e.lanes=a,e}function Yh(e,i,a){return i=cn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var fa=[],da=0,Su=null,bu=0,In=[],Cn=0,gs=null,Oi=1,Ni="";function ys(e,i){fa[da++]=bu,fa[da++]=Su,Su=e,bu=i}function xp(e,i,a){In[Cn++]=Oi,In[Cn++]=Ni,In[Cn++]=gs,gs=e;var l=Oi;e=Ni;var h=32-He(l)-1;l&=~(1<<h),a+=1;var d=32-He(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Oi=1<<32-He(i)+h|a<<h|l,Ni=d+e}else Oi=1<<d|a<<h|l,Ni=e}function Xh(e){e.return!==null&&(ys(e,1),xp(e,1,0))}function $h(e){for(;e===Su;)Su=fa[--da],fa[da]=null,bu=fa[--da],fa[da]=null;for(;e===gs;)gs=In[--Cn],In[Cn]=null,Ni=In[--Cn],In[Cn]=null,Oi=In[--Cn],In[Cn]=null}var We=null,ae=null,Bt=!1,_s=null,ni=!1,Zh=Error(s(519));function vs(e){var i=Error(s(418,""));throw No(wn(i,e)),Zh}function Up(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[ve]=e,i[de]=l,a){case"dialog":Vt("cancel",i),Vt("close",i);break;case"iframe":case"object":case"embed":Vt("load",i);break;case"video":case"audio":for(a=0;a<el.length;a++)Vt(el[a],i);break;case"source":Vt("error",i);break;case"img":case"image":case"link":Vt("error",i),Vt("load",i);break;case"details":Vt("toggle",i);break;case"input":Vt("invalid",i),is(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Zs(i);break;case"select":Vt("invalid",i);break;case"textarea":Vt("invalid",i),rs(i,l.value,l.defaultValue,l.children),Zs(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||t_(i.textContent,a)?(l.popover!=null&&(Vt("beforetoggle",i),Vt("toggle",i)),l.onScroll!=null&&Vt("scroll",i),l.onScrollEnd!=null&&Vt("scrollend",i),l.onClick!=null&&(i.onclick=rc),i=!0):i=!1,i||vs(e)}function Lp(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:We=We.return}}function Do(e){if(e!==We)return!1;if(!Bt)return Lp(e),Bt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||md(e.type,e.memoizedProps)),a=!a),a&&ae&&vs(e),Lp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){ae=zn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}ae=null}}else i===27?(i=ae,_r(e.type)?(e=_d,_d=null,ae=e):ae=i):ae=We?zn(e.stateNode.nextSibling):null;return!0}function Oo(){ae=We=null,Bt=!1}function zp(){var e=_s;return e!==null&&(nn===null?nn=e:nn.push.apply(nn,e),_s=null),e}function No(e){_s===null?_s=[e]:_s.push(e)}var Jh=Q(null),Ts=null,Mi=null;function ir(e,i,a){it(Jh,i._currentValue),i._currentValue=a}function Vi(e){e._currentValue=Jh.current,ut(Jh)}function Wh(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function tf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var R=0;R<i.length;R++)if(T.context===i[R]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),Wh(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),Wh(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Mo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;un(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===Ce.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ol):e=[ol])}h=h.return}e!==null&&tf(i,e,a,l),i.flags|=262144}function wu(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ts=e,Mi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return jp(Ts,e)}function Ru(e,i){return Ts===null&&Es(e),jp(e,i)}function jp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Mi===null){if(e===null)throw Error(s(308));Mi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Mi=Mi.next=i;return a}var OA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},NA=r.unstable_scheduleCallback,MA=r.unstable_NormalPriority,Ae={$$typeof:et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new OA,data:new Map,refCount:0}}function Vo(e){e.refCount--,e.refCount===0&&NA(MA,function(){e.controller.abort()})}var ko=null,nf=0,ma=0,pa=null;function VA(e,i){if(ko===null){var a=ko=[];nf=0,ma=sd(),pa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return nf++,i.then(Bp,Bp),i}function Bp(){if(--nf===0&&ko!==null){pa!==null&&(pa.status="fulfilled");var e=ko;ko=null,ma=0,pa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function kA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var qp=F.S;F.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&VA(e,i),qp!==null&&qp(e,i)};var As=Q(null);function rf(){var e=As.current;return e!==null?e:Wt.pooledCache}function Iu(e,i){i===null?it(As,As.current):it(As,i.pool)}function Hp(){var e=rf();return e===null?null:{parent:Ae._currentValue,pool:e}}var Po=Error(s(460)),Fp=Error(s(474)),Cu=Error(s(542)),sf={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Du(){}function Kp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Du,Du),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Yp(e),e;default:if(typeof i.status=="string")i.then(Du,Du);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Yp(e),e}throw xo=i,Po}}var xo=null;function Qp(){if(xo===null)throw Error(s(459));var e=xo;return xo=null,e}function Yp(e){if(e===Po||e===Cu)throw Error(s(483))}var rr=!1;function af(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ar(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Eu(e),kp(e,null,a),i}return Tu(e,l,i,a),Eu(e)}function Uo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,co(e,a)}}function lf(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var uf=!1;function Lo(){if(uf){var e=pa;if(e!==null)throw e}}function zo(e,i,a,l){uf=!1;var h=e.updateQueue;rr=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var R=T,L=R.next;R.next=null,v===null?d=L:v.next=L,v=R;var G=e.alternate;G!==null&&(G=G.updateQueue,T=G.lastBaseUpdate,T!==v&&(T===null?G.firstBaseUpdate=L:T.next=L,G.lastBaseUpdate=R))}if(d!==null){var Y=h.baseState;v=0,G=L=R=null,T=d;do{var z=T.lane&-536870913,j=z!==T.lane;if(j?(Lt&z)===z:(l&z)===z){z!==0&&z===ma&&(uf=!0),G!==null&&(G=G.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Et=e,gt=T;z=i;var $t=a;switch(gt.tag){case 1:if(Et=gt.payload,typeof Et=="function"){Y=Et.call($t,Y,z);break t}Y=Et;break t;case 3:Et.flags=Et.flags&-65537|128;case 0:if(Et=gt.payload,z=typeof Et=="function"?Et.call($t,Y,z):Et,z==null)break t;Y=E({},Y,z);break t;case 2:rr=!0}}z=T.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},G===null?(L=G=j,R=Y):G=G.next=j,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;j=T,T=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);G===null&&(R=Y),h.baseState=R,h.firstBaseUpdate=L,h.lastBaseUpdate=G,d===null&&(h.shared.lanes=0),mr|=v,e.lanes=v,e.memoizedState=Y}}function Xp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function $p(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Xp(a[e],i)}var ga=Q(null),Ou=Q(0);function Zp(e,i){e=ji,it(Ou,e),it(ga,i),ji=e|i.baseLanes}function cf(){it(Ou,ji),it(ga,ga.current)}function hf(){ji=Ou.current,ut(ga),ut(Ou)}var or=0,Ct=null,Yt=null,pe=null,Nu=!1,ya=!1,Ss=!1,Mu=0,jo=0,_a=null,PA=0;function ce(){throw Error(s(321))}function ff(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!un(e[a],i[a]))return!1;return!0}function df(e,i,a,l,h,d){return or=d,Ct=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?kg:Pg,Ss=!1,d=a(l,h),Ss=!1,ya&&(d=Wp(i,a,l,h)),Jp(e),d}function Jp(e){F.H=Lu;var i=Yt!==null&&Yt.next!==null;if(or=0,pe=Yt=Ct=null,Nu=!1,jo=0,_a=null,i)throw Error(s(300));e===null||Ne||(e=e.dependencies,e!==null&&wu(e)&&(Ne=!0))}function Wp(e,i,a,l){Ct=e;var h=0;do{if(ya&&(_a=null),jo=0,ya=!1,25<=h)throw Error(s(301));if(h+=1,pe=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}F.H=qA,d=i(a,l)}while(ya);return d}function xA(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?Bo(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(Ct.flags|=1024),i}function mf(){var e=Mu!==0;return Mu=0,e}function pf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function gf(e){if(Nu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Nu=!1}or=0,pe=Yt=Ct=null,ya=!1,jo=Mu=0,_a=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?Ct.memoizedState=pe=e:pe=pe.next=e,pe}function ge(){if(Yt===null){var e=Ct.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=pe===null?Ct.memoizedState:pe.next;if(i!==null)pe=i,Yt=e;else{if(e===null)throw Ct.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},pe===null?Ct.memoizedState=pe=e:pe=pe.next=e}return pe}function yf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(e){var i=jo;return jo+=1,_a===null&&(_a=[]),e=Kp(_a,e,i),i=Ct,(pe===null?i.memoizedState:pe.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?kg:Pg),e}function Vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Bo(e);if(e.$$typeof===et)return Fe(e)}throw Error(s(438,String(e)))}function _f(e){var i=null,a=Ct.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=Ct.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=yf(),Ct.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function ki(e,i){return typeof i=="function"?i(e):i}function ku(e){var i=ge();return vf(i,Yt,e)}function vf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,R=null,L=i,G=!1;do{var Y=L.lane&-536870913;if(Y!==L.lane?(Lt&Y)===Y:(or&Y)===Y){var z=L.revertLane;if(z===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Y===ma&&(G=!0);else if((or&z)===z){L=L.next,z===ma&&(G=!0);continue}else Y={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(T=R=Y,v=d):R=R.next=Y,Ct.lanes|=z,mr|=z;Y=L.action,Ss&&a(d,Y),d=L.hasEagerState?L.eagerState:a(d,Y)}else z={lane:Y,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(T=R=z,v=d):R=R.next=z,Ct.lanes|=Y,mr|=Y;L=L.next}while(L!==null&&L!==i);if(R===null?v=d:R.next=T,!un(d,e.memoizedState)&&(Ne=!0,G&&(a=pa,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Tf(e){var i=ge(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);un(d,i.memoizedState)||(Ne=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function tg(e,i,a){var l=Ct,h=ge(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!un((Yt||h).memoizedState,a);v&&(h.memoizedState=a,Ne=!0),h=h.queue;var T=ig.bind(null,l,h,e);if(qo(2048,8,T,[e]),h.getSnapshot!==i||v||pe!==null&&pe.memoizedState.tag&1){if(l.flags|=2048,va(9,Pu(),ng.bind(null,l,h,a,i),null),Wt===null)throw Error(s(349));d||(or&124)!==0||eg(l,i,a)}return a}function eg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=Ct.updateQueue,i===null?(i=yf(),Ct.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function ng(e,i,a,l){i.value=a,i.getSnapshot=l,rg(i)&&sg(e)}function ig(e,i,a){return a(function(){rg(i)&&sg(e)})}function rg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!un(e,a)}catch{return!0}}function sg(e){var i=ca(e,2);i!==null&&pn(i,e,2)}function Ef(e){var i=tn();if(typeof e=="function"){var a=e;if(e=a(),Ss){on(!0);try{a()}finally{on(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},i}function ag(e,i,a,l){return e.baseState=a,vf(e,Yt,typeof l=="function"?l:ki)}function UA(e,i,a,l,h){if(Uu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};F.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,og(i,d)):(d.next=a.next,i.pending=a.next=d)}}function og(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=F.T,v={};F.T=v;try{var T=a(h,l),R=F.S;R!==null&&R(v,T),lg(e,i,T)}catch(L){Af(e,i,L)}finally{F.T=d}}else try{d=a(h,l),lg(e,i,d)}catch(L){Af(e,i,L)}}function lg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ug(e,i,l)},function(l){return Af(e,i,l)}):ug(e,i,a)}function ug(e,i,a){i.status="fulfilled",i.value=a,cg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,og(e,a)))}function Af(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,cg(i),i=i.next;while(i!==l)}e.action=null}function cg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function hg(e,i){return i}function fg(e,i){if(Bt){var a=Wt.formState;if(a!==null){t:{var l=Ct;if(Bt){if(ae){e:{for(var h=ae,d=ni;h.nodeType!==8;){if(!d){h=null;break e}if(h=zn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ae=zn(h.nextSibling),l=h.data==="F!";break t}}vs(l)}l=!1}l&&(i=a[0])}}return a=tn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hg,lastRenderedState:i},a.queue=l,a=Ng.bind(null,Ct,l),l.dispatch=a,l=Ef(!1),d=If.bind(null,Ct,!1,l.queue),l=tn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=UA.bind(null,Ct,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function dg(e){var i=ge();return mg(i,Yt,e)}function mg(e,i,a){if(i=vf(e,i,hg)[0],e=ku(ki)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Bo(i)}catch(v){throw v===Po?Cu:v}else l=i;i=ge();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ct.flags|=2048,va(9,Pu(),LA.bind(null,h,a),null)),[l,d,e]}function LA(e,i){e.action=i}function pg(e){var i=ge(),a=Yt;if(a!==null)return mg(i,a,e);ge(),i=i.memoizedState,a=ge();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function va(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=Ct.updateQueue,i===null&&(i=yf(),Ct.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Pu(){return{destroy:void 0,resource:void 0}}function gg(){return ge().memoizedState}function xu(e,i,a,l){var h=tn();l=l===void 0?null:l,Ct.flags|=e,h.memoizedState=va(1|i,Pu(),a,l)}function qo(e,i,a,l){var h=ge();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&ff(l,Yt.memoizedState.deps)?h.memoizedState=va(i,d,a,l):(Ct.flags|=e,h.memoizedState=va(1|i,d,a,l))}function yg(e,i){xu(8390656,8,e,i)}function _g(e,i){qo(2048,8,e,i)}function vg(e,i){return qo(4,2,e,i)}function Tg(e,i){return qo(4,4,e,i)}function Eg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Ag(e,i,a){a=a!=null?a.concat([e]):null,qo(4,4,Eg.bind(null,i,e),a)}function Sf(){}function Sg(e,i){var a=ge();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&ff(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function bg(e,i){var a=ge();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&ff(i,l[1]))return l[0];if(l=e(),Ss){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l}function bf(e,i,a){return a===void 0||(or&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=Iy(),Ct.lanes|=e,mr|=e,a)}function wg(e,i,a,l){return un(a,i)?a:ga.current!==null?(e=bf(e,a,l),un(e,i)||(Ne=!0),e):(or&42)===0?(Ne=!0,e.memoizedState=a):(e=Iy(),Ct.lanes|=e,mr|=e,i)}function Rg(e,i,a,l,h){var d=H.p;H.p=d!==0&&8>d?d:8;var v=F.T,T={};F.T=T,If(e,!1,i,a);try{var R=h(),L=F.S;if(L!==null&&L(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var G=kA(R,l);Ho(e,i,G,mn(e))}else Ho(e,i,l,mn(e))}catch(Y){Ho(e,i,{then:function(){},status:"rejected",reason:Y},mn())}finally{H.p=d,F.T=v}}function zA(){}function wf(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=Ig(e).queue;Rg(e,h,i,nt,a===null?zA:function(){return Cg(e),a(l)})}function Ig(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:nt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Cg(e){var i=Ig(e).next.queue;Ho(e,i,{},mn())}function Rf(){return Fe(ol)}function Dg(){return ge().memoizedState}function Og(){return ge().memoizedState}function jA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=mn();e=sr(a);var l=ar(i,e,a);l!==null&&(pn(l,i,a),Uo(l,i,a)),i={cache:ef()},e.payload=i;return}i=i.return}}function BA(e,i,a){var l=mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Uu(e)?Mg(i,a):(a=Gh(e,i,a,l),a!==null&&(pn(a,e,l),Vg(a,i,l)))}function Ng(e,i,a){var l=mn();Ho(e,i,a,l)}function Ho(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Uu(e))Mg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,un(T,v))return Tu(e,i,h,0),Wt===null&&vu(),!1}catch{}finally{}if(a=Gh(e,i,h,l),a!==null)return pn(a,e,l),Vg(a,i,l),!0}return!1}function If(e,i,a,l){if(l={lane:2,revertLane:sd(),action:l,hasEagerState:!1,eagerState:null,next:null},Uu(e)){if(i)throw Error(s(479))}else i=Gh(e,a,l,2),i!==null&&pn(i,e,2)}function Uu(e){var i=e.alternate;return e===Ct||i!==null&&i===Ct}function Mg(e,i){ya=Nu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Vg(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,co(e,a)}}var Lu={readContext:Fe,use:Vu,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce},kg={readContext:Fe,use:Vu,useCallback:function(e,i){return tn().memoizedState=[e,i===void 0?null:i],e},useContext:Fe,useEffect:yg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,xu(4194308,4,Eg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return xu(4194308,4,e,i)},useInsertionEffect:function(e,i){xu(4,2,e,i)},useMemo:function(e,i){var a=tn();i=i===void 0?null:i;var l=e();if(Ss){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=tn();if(a!==void 0){var h=a(i);if(Ss){on(!0);try{a(i)}finally{on(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=BA.bind(null,Ct,e),[l.memoizedState,e]},useRef:function(e){var i=tn();return e={current:e},i.memoizedState=e},useState:function(e){e=Ef(e);var i=e.queue,a=Ng.bind(null,Ct,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(e,i){var a=tn();return bf(a,e,i)},useTransition:function(){var e=Ef(!1);return e=Rg.bind(null,Ct,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=Ct,h=tn();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Wt===null)throw Error(s(349));(Lt&124)!==0||eg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,yg(ig.bind(null,l,d,e),[e]),l.flags|=2048,va(9,Pu(),ng.bind(null,l,d,a,i),null),a},useId:function(){var e=tn(),i=Wt.identifierPrefix;if(Bt){var a=Ni,l=Oi;a=(l&~(1<<32-He(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=Mu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=PA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Rf,useFormState:fg,useActionState:fg,useOptimistic:function(e){var i=tn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=If.bind(null,Ct,!0,a),a.dispatch=i,[e,i]},useMemoCache:_f,useCacheRefresh:function(){return tn().memoizedState=jA.bind(null,Ct)}},Pg={readContext:Fe,use:Vu,useCallback:Sg,useContext:Fe,useEffect:_g,useImperativeHandle:Ag,useInsertionEffect:vg,useLayoutEffect:Tg,useMemo:bg,useReducer:ku,useRef:gg,useState:function(){return ku(ki)},useDebugValue:Sf,useDeferredValue:function(e,i){var a=ge();return wg(a,Yt.memoizedState,e,i)},useTransition:function(){var e=ku(ki)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Bo(e),i]},useSyncExternalStore:tg,useId:Dg,useHostTransitionStatus:Rf,useFormState:dg,useActionState:dg,useOptimistic:function(e,i){var a=ge();return ag(a,Yt,e,i)},useMemoCache:_f,useCacheRefresh:Og},qA={readContext:Fe,use:Vu,useCallback:Sg,useContext:Fe,useEffect:_g,useImperativeHandle:Ag,useInsertionEffect:vg,useLayoutEffect:Tg,useMemo:bg,useReducer:Tf,useRef:gg,useState:function(){return Tf(ki)},useDebugValue:Sf,useDeferredValue:function(e,i){var a=ge();return Yt===null?bf(a,e,i):wg(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Tf(ki)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Bo(e),i]},useSyncExternalStore:tg,useId:Dg,useHostTransitionStatus:Rf,useFormState:pg,useActionState:pg,useOptimistic:function(e,i){var a=ge();return Yt!==null?ag(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_f,useCacheRefresh:Og},Ta=null,Fo=0;function zu(e){var i=Fo;return Fo+=1,Ta===null&&(Ta=[]),Kp(Ta,e,i)}function Go(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ju(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function xg(e){var i=e._init;return i(e._payload)}function Ug(e){function i(k,M){if(e){var U=k.deletions;U===null?(k.deletions=[M],k.flags|=16):U.push(M)}}function a(k,M){if(!e)return null;for(;M!==null;)i(k,M),M=M.sibling;return null}function l(k){for(var M=new Map;k!==null;)k.key!==null?M.set(k.key,k):M.set(k.index,k),k=k.sibling;return M}function h(k,M){return k=Di(k,M),k.index=0,k.sibling=null,k}function d(k,M,U){return k.index=U,e?(U=k.alternate,U!==null?(U=U.index,U<M?(k.flags|=67108866,M):U):(k.flags|=67108866,M)):(k.flags|=1048576,M)}function v(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function T(k,M,U,K){return M===null||M.tag!==6?(M=Qh(U,k.mode,K),M.return=k,M):(M=h(M,U),M.return=k,M)}function R(k,M,U,K){var ht=U.type;return ht===X?G(k,M,U.props.children,K,U.key):M!==null&&(M.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===S&&xg(ht)===M.type)?(M=h(M,U.props),Go(M,U),M.return=k,M):(M=Au(U.type,U.key,U.props,null,k.mode,K),Go(M,U),M.return=k,M)}function L(k,M,U,K){return M===null||M.tag!==4||M.stateNode.containerInfo!==U.containerInfo||M.stateNode.implementation!==U.implementation?(M=Yh(U,k.mode,K),M.return=k,M):(M=h(M,U.children||[]),M.return=k,M)}function G(k,M,U,K,ht){return M===null||M.tag!==7?(M=ps(U,k.mode,K,ht),M.return=k,M):(M=h(M,U),M.return=k,M)}function Y(k,M,U){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Qh(""+M,k.mode,U),M.return=k,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case D:return U=Au(M.type,M.key,M.props,null,k.mode,U),Go(U,M),U.return=k,U;case B:return M=Yh(M,k.mode,U),M.return=k,M;case S:var K=M._init;return M=K(M._payload),Y(k,M,U)}if(te(M)||P(M))return M=ps(M,k.mode,U,null),M.return=k,M;if(typeof M.then=="function")return Y(k,zu(M),U);if(M.$$typeof===et)return Y(k,Ru(k,M),U);ju(k,M)}return null}function z(k,M,U,K){var ht=M!==null?M.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ht!==null?null:T(k,M,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case D:return U.key===ht?R(k,M,U,K):null;case B:return U.key===ht?L(k,M,U,K):null;case S:return ht=U._init,U=ht(U._payload),z(k,M,U,K)}if(te(U)||P(U))return ht!==null?null:G(k,M,U,K,null);if(typeof U.then=="function")return z(k,M,zu(U),K);if(U.$$typeof===et)return z(k,M,Ru(k,U),K);ju(k,U)}return null}function j(k,M,U,K,ht){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return k=k.get(U)||null,T(M,k,""+K,ht);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case D:return k=k.get(K.key===null?U:K.key)||null,R(M,k,K,ht);case B:return k=k.get(K.key===null?U:K.key)||null,L(M,k,K,ht);case S:var Nt=K._init;return K=Nt(K._payload),j(k,M,U,K,ht)}if(te(K)||P(K))return k=k.get(U)||null,G(M,k,K,ht,null);if(typeof K.then=="function")return j(k,M,U,zu(K),ht);if(K.$$typeof===et)return j(k,M,U,Ru(M,K),ht);ju(M,K)}return null}function Et(k,M,U,K){for(var ht=null,Nt=null,dt=M,_t=M=0,Ve=null;dt!==null&&_t<U.length;_t++){dt.index>_t?(Ve=dt,dt=null):Ve=dt.sibling;var jt=z(k,dt,U[_t],K);if(jt===null){dt===null&&(dt=Ve);break}e&&dt&&jt.alternate===null&&i(k,dt),M=d(jt,M,_t),Nt===null?ht=jt:Nt.sibling=jt,Nt=jt,dt=Ve}if(_t===U.length)return a(k,dt),Bt&&ys(k,_t),ht;if(dt===null){for(;_t<U.length;_t++)dt=Y(k,U[_t],K),dt!==null&&(M=d(dt,M,_t),Nt===null?ht=dt:Nt.sibling=dt,Nt=dt);return Bt&&ys(k,_t),ht}for(dt=l(dt);_t<U.length;_t++)Ve=j(dt,k,_t,U[_t],K),Ve!==null&&(e&&Ve.alternate!==null&&dt.delete(Ve.key===null?_t:Ve.key),M=d(Ve,M,_t),Nt===null?ht=Ve:Nt.sibling=Ve,Nt=Ve);return e&&dt.forEach(function(Sr){return i(k,Sr)}),Bt&&ys(k,_t),ht}function gt(k,M,U,K){if(U==null)throw Error(s(151));for(var ht=null,Nt=null,dt=M,_t=M=0,Ve=null,jt=U.next();dt!==null&&!jt.done;_t++,jt=U.next()){dt.index>_t?(Ve=dt,dt=null):Ve=dt.sibling;var Sr=z(k,dt,jt.value,K);if(Sr===null){dt===null&&(dt=Ve);break}e&&dt&&Sr.alternate===null&&i(k,dt),M=d(Sr,M,_t),Nt===null?ht=Sr:Nt.sibling=Sr,Nt=Sr,dt=Ve}if(jt.done)return a(k,dt),Bt&&ys(k,_t),ht;if(dt===null){for(;!jt.done;_t++,jt=U.next())jt=Y(k,jt.value,K),jt!==null&&(M=d(jt,M,_t),Nt===null?ht=jt:Nt.sibling=jt,Nt=jt);return Bt&&ys(k,_t),ht}for(dt=l(dt);!jt.done;_t++,jt=U.next())jt=j(dt,k,_t,jt.value,K),jt!==null&&(e&&jt.alternate!==null&&dt.delete(jt.key===null?_t:jt.key),M=d(jt,M,_t),Nt===null?ht=jt:Nt.sibling=jt,Nt=jt);return e&&dt.forEach(function(HS){return i(k,HS)}),Bt&&ys(k,_t),ht}function $t(k,M,U,K){if(typeof U=="object"&&U!==null&&U.type===X&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case D:t:{for(var ht=U.key;M!==null;){if(M.key===ht){if(ht=U.type,ht===X){if(M.tag===7){a(k,M.sibling),K=h(M,U.props.children),K.return=k,k=K;break t}}else if(M.elementType===ht||typeof ht=="object"&&ht!==null&&ht.$$typeof===S&&xg(ht)===M.type){a(k,M.sibling),K=h(M,U.props),Go(K,U),K.return=k,k=K;break t}a(k,M);break}else i(k,M);M=M.sibling}U.type===X?(K=ps(U.props.children,k.mode,K,U.key),K.return=k,k=K):(K=Au(U.type,U.key,U.props,null,k.mode,K),Go(K,U),K.return=k,k=K)}return v(k);case B:t:{for(ht=U.key;M!==null;){if(M.key===ht)if(M.tag===4&&M.stateNode.containerInfo===U.containerInfo&&M.stateNode.implementation===U.implementation){a(k,M.sibling),K=h(M,U.children||[]),K.return=k,k=K;break t}else{a(k,M);break}else i(k,M);M=M.sibling}K=Yh(U,k.mode,K),K.return=k,k=K}return v(k);case S:return ht=U._init,U=ht(U._payload),$t(k,M,U,K)}if(te(U))return Et(k,M,U,K);if(P(U)){if(ht=P(U),typeof ht!="function")throw Error(s(150));return U=ht.call(U),gt(k,M,U,K)}if(typeof U.then=="function")return $t(k,M,zu(U),K);if(U.$$typeof===et)return $t(k,M,Ru(k,U),K);ju(k,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,M!==null&&M.tag===6?(a(k,M.sibling),K=h(M,U),K.return=k,k=K):(a(k,M),K=Qh(U,k.mode,K),K.return=k,k=K),v(k)):a(k,M)}return function(k,M,U,K){try{Fo=0;var ht=$t(k,M,U,K);return Ta=null,ht}catch(dt){if(dt===Po||dt===Cu)throw dt;var Nt=cn(29,dt,null,k.mode);return Nt.lanes=K,Nt.return=k,Nt}finally{}}}var Ea=Ug(!0),Lg=Ug(!1),Dn=Q(null),ii=null;function lr(e){var i=e.alternate;it(Se,Se.current&1),it(Dn,e),ii===null&&(i===null||ga.current!==null||i.memoizedState!==null)&&(ii=e)}function zg(e){if(e.tag===22){if(it(Se,Se.current),it(Dn,e),ii===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ii=e)}}else ur()}function ur(){it(Se,Se.current),it(Dn,Dn.current)}function Pi(e){ut(Dn),ii===e&&(ii=null),ut(Se)}var Se=Q(0);function Bu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||yd(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Cf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Df={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=mn(),h=sr(l);h.payload=i,a!=null&&(h.callback=a),i=ar(e,h,l),i!==null&&(pn(i,e,l),Uo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=mn(),h=sr(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=ar(e,h,l),i!==null&&(pn(i,e,l),Uo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=mn(),l=sr(a);l.tag=2,i!=null&&(l.callback=i),i=ar(e,l,a),i!==null&&(pn(i,e,a),Uo(i,e,a))}};function jg(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Io(a,l)||!Io(h,d):!0}function Bg(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Df.enqueueReplaceState(i,i.state,null)}function bs(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var qu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function qg(e){qu(e)}function Hg(e){console.error(e)}function Fg(e){qu(e)}function Hu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Gg(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Of(e,i,a){return a=sr(a),a.tag=3,a.payload={element:null},a.callback=function(){Hu(e,i)},a}function Kg(e){return e=sr(e),e.tag=3,e}function Qg(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){Gg(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Gg(i,a,l),typeof h!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function HA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Mo(i,a,h,!0),a=Dn.current,a!==null){switch(a.tag){case 13:return ii===null?td():a.alternate===null&&oe===0&&(oe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===sf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),nd(e,l,h)),!1;case 22:return a.flags|=65536,l===sf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),nd(e,l,h)),!1}throw Error(s(435,a.tag))}return nd(e,l,h),td(),!1}if(Bt)return i=Dn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==Zh&&(e=Error(s(422),{cause:l}),No(wn(e,a)))):(l!==Zh&&(i=Error(s(423),{cause:l}),No(wn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=wn(l,a),h=Of(e.stateNode,l,h),lf(e,h),oe!==4&&(oe=2)),!1;var d=Error(s(520),{cause:l});if(d=wn(d,a),Jo===null?Jo=[d]:Jo.push(d),oe!==4&&(oe=2),i===null)return!0;l=wn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Of(a.stateNode,l,e),lf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(pr===null||!pr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Kg(h),Qg(h,e,a,l),lf(a,h),!1}a=a.return}while(a!==null);return!1}var Yg=Error(s(461)),Ne=!1;function Ue(e,i,a,l){i.child=e===null?Lg(i,null,a,l):Ea(i,e.child,a,l)}function Xg(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Es(i),l=df(e,i,a,v,d,h),T=mf(),e!==null&&!Ne?(pf(e,i,h),xi(e,i,h)):(Bt&&T&&Xh(i),i.flags|=1,Ue(e,i,l,h),i.child)}function $g(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Kh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Zg(e,i,d,l,h)):(e=Au(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Lf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(v,l)&&e.ref===i.ref)return xi(e,i,h)}return i.flags|=1,e=Di(d,l),e.ref=i.ref,e.return=i,i.child=e}function Zg(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Io(d,l)&&e.ref===i.ref)if(Ne=!1,i.pendingProps=l=d,Lf(e,h))(e.flags&131072)!==0&&(Ne=!0);else return i.lanes=e.lanes,xi(e,i,h)}return Nf(e,i,a,l,h)}function Jg(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return Wg(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Iu(i,d!==null?d.cachePool:null),d!==null?Zp(i,d):cf(),zg(i);else return i.lanes=i.childLanes=536870912,Wg(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Iu(i,d.cachePool),Zp(i,d),ur(),i.memoizedState=null):(e!==null&&Iu(i,null),cf(),ur());return Ue(e,i,h,a),i.child}function Wg(e,i,a,l){var h=rf();return h=h===null?null:{parent:Ae._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Iu(i,null),cf(),zg(i),e!==null&&Mo(e,i,l,!0),null}function Fu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Nf(e,i,a,l,h){return Es(i),a=df(e,i,a,l,void 0,h),l=mf(),e!==null&&!Ne?(pf(e,i,h),xi(e,i,h)):(Bt&&l&&Xh(i),i.flags|=1,Ue(e,i,a,h),i.child)}function ty(e,i,a,l,h,d){return Es(i),i.updateQueue=null,a=Wp(i,l,a,h),Jp(e),l=mf(),e!==null&&!Ne?(pf(e,i,d),xi(e,i,d)):(Bt&&l&&Xh(i),i.flags|=1,Ue(e,i,a,d),i.child)}function ey(e,i,a,l,h){if(Es(i),i.stateNode===null){var d=ha,v=a.contextType;typeof v=="object"&&v!==null&&(d=Fe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Df,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},af(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Fe(v):ha,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Cf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Df.enqueueReplaceState(d,d.state,null),zo(i,l,d,h),Lo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,R=bs(a,T);d.props=R;var L=d.context,G=a.contextType;v=ha,typeof G=="object"&&G!==null&&(v=Fe(G));var Y=a.getDerivedStateFromProps;G=typeof Y=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&Bg(i,d,l,v),rr=!1;var z=i.memoizedState;d.state=z,zo(i,l,d,h),Lo(),L=i.memoizedState,T||z!==L||rr?(typeof Y=="function"&&(Cf(i,a,Y,l),L=i.memoizedState),(R=rr||jg(i,a,R,l,z,L,v))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,of(e,i),v=i.memoizedProps,G=bs(a,v),d.props=G,Y=i.pendingProps,z=d.context,L=a.contextType,R=ha,typeof L=="object"&&L!==null&&(R=Fe(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Y||z!==R)&&Bg(i,d,l,R),rr=!1,z=i.memoizedState,d.state=z,zo(i,l,d,h),Lo();var j=i.memoizedState;v!==Y||z!==j||rr||e!==null&&e.dependencies!==null&&wu(e.dependencies)?(typeof T=="function"&&(Cf(i,a,T,l),j=i.memoizedState),(G=rr||jg(i,a,G,l,z,j,R)||e!==null&&e.dependencies!==null&&wu(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=R,l=G):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Fu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ea(i,e.child,null,h),i.child=Ea(i,null,a,h)):Ue(e,i,a,h),i.memoizedState=d.state,e=i.child):e=xi(e,i,h),e}function ny(e,i,a,l){return Oo(),i.flags|=256,Ue(e,i,a,l),i.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:Hp()}}function kf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=On),e}function iy(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?lr(i):ur(),Bt){var T=ae,R;if(R=T){t:{for(R=T,T=ni;R.nodeType!==8;){if(!T){T=null;break t}if(R=zn(R.nextSibling),R===null){T=null;break t}}T=R}T!==null?(i.memoizedState={dehydrated:T,treeContext:gs!==null?{id:Oi,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},R=cn(18,null,null,0),R.stateNode=T,R.return=i,i.child=R,We=i,ae=null,R=!0):R=!1}R||vs(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return yd(T)?i.lanes=32:i.lanes=536870912,null;Pi(i)}return T=l.children,l=l.fallback,h?(ur(),h=i.mode,T=Gu({mode:"hidden",children:T},h),l=ps(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Vf(a),h.childLanes=kf(e,v,a),i.memoizedState=Mf,l):(lr(i),Pf(i,T))}if(R=e.memoizedState,R!==null&&(T=R.dehydrated,T!==null)){if(d)i.flags&256?(lr(i),i.flags&=-257,i=xf(e,i,a)):i.memoizedState!==null?(ur(),i.child=e.child,i.flags|=128,i=null):(ur(),h=l.fallback,T=i.mode,l=Gu({mode:"visible",children:l.children},T),h=ps(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,Ea(i,e.child,null,a),l=i.child,l.memoizedState=Vf(a),l.childLanes=kf(e,v,a),i.memoizedState=Mf,i=h);else if(lr(i),yd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,No({value:l,source:null,stack:null}),i=xf(e,i,a)}else if(Ne||Mo(e,i,a,!1),v=(a&e.childLanes)!==0,Ne||v){if(v=Wt,v!==null&&(l=a&-a,l=(l&42)!==0?1:$i(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==R.retryLane))throw R.retryLane=l,ca(e,l),pn(v,e,l),Yg;T.data==="$?"||td(),i=xf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=R.treeContext,ae=zn(T.nextSibling),We=i,Bt=!0,_s=null,ni=!1,e!==null&&(In[Cn++]=Oi,In[Cn++]=Ni,In[Cn++]=gs,Oi=e.id,Ni=e.overflow,gs=i),i=Pf(i,l.children),i.flags|=4096);return i}return h?(ur(),h=l.fallback,T=i.mode,R=e.child,L=R.sibling,l=Di(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,L!==null?h=Di(L,h):(h=ps(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=Vf(a):(R=T.cachePool,R!==null?(L=Ae._currentValue,R=R.parent!==L?{parent:L,pool:L}:R):R=Hp(),T={baseLanes:T.baseLanes|a,cachePool:R}),h.memoizedState=T,h.childLanes=kf(e,v,a),i.memoizedState=Mf,l):(lr(i),a=e.child,e=a.sibling,a=Di(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function Pf(e,i){return i=Gu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Gu(e,i){return e=cn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xf(e,i,a){return Ea(i,e.child,null,a),e=Pf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function ry(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Wh(e.return,i,a)}function Uf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function sy(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ue(e,i,l.children,a),l=Se.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ry(e,a,i);else if(e.tag===19)ry(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(it(Se,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Bu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Uf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Bu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Uf(i,!0,a,null,d);break;case"together":Uf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function xi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),mr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Mo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Di(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Di(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Lf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&wu(e)))}function FA(e,i,a){switch(i.tag){case 3:Jt(i,i.stateNode.containerInfo),ir(i,Ae,e.memoizedState.cache),Oo();break;case 27:case 5:Xi(i);break;case 4:Jt(i,i.stateNode.containerInfo);break;case 10:ir(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(lr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?iy(e,i,a):(lr(i),e=xi(e,i,a),e!==null?e.sibling:null);lr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Mo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return sy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),it(Se,Se.current),l)break;return null;case 22:case 23:return i.lanes=0,Jg(e,i,a);case 24:ir(i,Ae,e.memoizedState.cache)}return xi(e,i,a)}function ay(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ne=!0;else{if(!Lf(e,a)&&(i.flags&128)===0)return Ne=!1,FA(e,i,a);Ne=(e.flags&131072)!==0}else Ne=!1,Bt&&(i.flags&1048576)!==0&&xp(i,bu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")Kh(l)?(e=bs(l,e),i.tag=1,i=ey(null,i,l,e,a)):(i.tag=0,i=Nf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===rt){i.tag=11,i=Xg(null,i,l,e,a);break t}else if(h===C){i.tag=14,i=$g(null,i,l,e,a);break t}}throw i=_e(l)||l,Error(s(306,i,""))}}return i;case 0:return Nf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=bs(l,i.pendingProps),ey(e,i,l,h,a);case 3:t:{if(Jt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,of(e,i),zo(i,l,null,a);var v=i.memoizedState;if(l=v.cache,ir(i,Ae,l),l!==d.cache&&tf(i,[Ae],a,!0),Lo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=ny(e,i,l,a);break t}else if(l!==h){h=wn(Error(s(424)),i),No(h),i=ny(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ae=zn(e.firstChild),We=i,Bt=!0,_s=null,ni=!0,a=Lg(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Oo(),l===h){i=xi(e,i,a);break t}Ue(e,i,l,a)}i=i.child}return i;case 26:return Fu(e,i),e===null?(a=c_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Bt||(a=i.type,e=i.pendingProps,l=sc(St.current).createElement(a),l[ve]=i,l[de]=e,ze(l,a,e),ue(l),i.stateNode=l):i.memoizedState=c_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Xi(i),e===null&&Bt&&(l=i.stateNode=o_(i.type,i.pendingProps,St.current),We=i,ni=!0,h=ae,_r(i.type)?(_d=h,ae=zn(l.firstChild)):ae=h),Ue(e,i,i.pendingProps.children,a),Fu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((h=l=ae)&&(l=_S(l,i.type,i.pendingProps,ni),l!==null?(i.stateNode=l,We=i,ae=zn(l.firstChild),ni=!1,h=!0):h=!1),h||vs(i)),Xi(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,md(h,d)?l=null:v!==null&&md(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=df(e,i,xA,null,null,a),ol._currentValue=h),Fu(e,i),Ue(e,i,l,a),i.child;case 6:return e===null&&Bt&&((e=a=ae)&&(a=vS(a,i.pendingProps,ni),a!==null?(i.stateNode=a,We=i,ae=null,e=!0):e=!1),e||vs(i)),null;case 13:return iy(e,i,a);case 4:return Jt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ea(i,null,l,a):Ue(e,i,l,a),i.child;case 11:return Xg(e,i,i.type,i.pendingProps,a);case 7:return Ue(e,i,i.pendingProps,a),i.child;case 8:return Ue(e,i,i.pendingProps.children,a),i.child;case 12:return Ue(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,ir(i,i.type,l.value),Ue(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Es(i),h=Fe(h),l=l(h),i.flags|=1,Ue(e,i,l,a),i.child;case 14:return $g(e,i,i.type,i.pendingProps,a);case 15:return Zg(e,i,i.type,i.pendingProps,a);case 19:return sy(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Gu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Di(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Jg(e,i,a);case 24:return Es(i),l=Fe(Ae),e===null?(h=rf(),h===null&&(h=Wt,d=ef(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},af(i),ir(i,Ae,h)):((e.lanes&a)!==0&&(of(e,i),zo(i,null,null,a),Lo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),ir(i,Ae,l)):(l=d.cache,ir(i,Ae,l),l!==h.cache&&tf(i,[Ae],a,!0))),Ue(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Ui(e){e.flags|=4}function oy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!p_(i)){if(i=Dn.current,i!==null&&((Lt&4194048)===Lt?ii!==null:(Lt&62914560)!==Lt&&(Lt&536870912)===0||i!==ii))throw xo=sf,Fp;e.flags|=8192}}function Ku(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?lo():536870912,e.lanes|=i,wa|=i)}function Ko(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ie(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function GA(e,i,a){var l=i.pendingProps;switch($h(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(i),null;case 1:return ie(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Vi(Ae),Fn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Do(i)?Ui(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zp())),ie(i),null;case 26:return a=i.memoizedState,e===null?(Ui(i),a!==null?(ie(i),oy(i,a)):(ie(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Ui(i),ie(i),oy(i,a)):(ie(i),i.flags&=-16777217):(e.memoizedProps!==l&&Ui(i),ie(i),i.flags&=-16777217),null;case 27:gi(i),a=St.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ui(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ie(i),null}e=mt.current,Do(i)?Up(i):(e=o_(h,l,a),i.stateNode=e,Ui(i))}return ie(i),null;case 5:if(gi(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ui(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ie(i),null}if(e=mt.current,Do(i))Up(i);else{switch(h=sc(St.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[ve]=i,e[de]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(ze(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ui(i)}}return ie(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ui(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=St.current,Do(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=We,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[ve]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||vs(i)}else e=sc(e).createTextNode(l),e[ve]=i,i.stateNode=e}return ie(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Do(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[ve]=i}else Oo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ie(i),h=!1}else h=zp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Pi(i),i):(Pi(i),null)}if(Pi(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),Ku(i,i.updateQueue),ie(i),null;case 4:return Fn(),e===null&&ud(i.stateNode.containerInfo),ie(i),null;case 10:return Vi(i.type),ie(i),null;case 19:if(ut(Se),h=i.memoizedState,h===null)return ie(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Ko(h,!1);else{if(oe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Bu(e),d!==null){for(i.flags|=128,Ko(h,!1),e=d.updateQueue,i.updateQueue=e,Ku(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Pp(a,e),a=a.sibling;return it(Se,Se.current&1|2),i.child}e=e.sibling}h.tail!==null&&vn()>Xu&&(i.flags|=128,l=!0,Ko(h,!1),i.lanes=4194304)}else{if(!l)if(e=Bu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,Ku(i,e),Ko(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Bt)return ie(i),null}else 2*vn()-h.renderingStartTime>Xu&&a!==536870912&&(i.flags|=128,l=!0,Ko(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=vn(),i.sibling=null,e=Se.current,it(Se,l?e&1|2:e&1),i):(ie(i),null);case 22:case 23:return Pi(i),hf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ie(i),i.subtreeFlags&6&&(i.flags|=8192)):ie(i),a=i.updateQueue,a!==null&&Ku(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&ut(As),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Vi(Ae),ie(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function KA(e,i){switch($h(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Vi(Ae),Fn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return gi(i),null;case 13:if(Pi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Oo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return ut(Se),null;case 4:return Fn(),null;case 10:return Vi(i.type),null;case 22:case 23:return Pi(i),hf(),e!==null&&ut(As),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Vi(Ae),null;case 25:return null;default:return null}}function ly(e,i){switch($h(i),i.tag){case 3:Vi(Ae),Fn();break;case 26:case 27:case 5:gi(i);break;case 4:Fn();break;case 13:Pi(i);break;case 19:ut(Se);break;case 10:Vi(i.type);break;case 22:case 23:Pi(i),hf(),e!==null&&ut(As);break;case 24:Vi(Ae)}}function Qo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Zt(i,i.return,T)}}function cr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var R=a,L=T;try{L()}catch(G){Zt(h,R,G)}}}l=l.next}while(l!==d)}}catch(G){Zt(i,i.return,G)}}function uy(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{$p(i,a)}catch(l){Zt(e,e.return,l)}}}function cy(e,i,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Zt(e,i,l)}}function Yo(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Zt(e,i,h)}}function ri(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Zt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Zt(e,i,h)}else a.current=null}function hy(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Zt(e,e.return,h)}}function zf(e,i,a){try{var l=e.stateNode;dS(l,e.type,a,i),l[de]=i}catch(h){Zt(e,e.return,h)}}function fy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&_r(e.type)||e.tag===4}function jf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||fy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&_r(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=rc));else if(l!==4&&(l===27&&_r(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Bf(e,i,a),e=e.sibling;e!==null;)Bf(e,i,a),e=e.sibling}function Qu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&_r(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Qu(e,i,a),e=e.sibling;e!==null;)Qu(e,i,a),e=e.sibling}function dy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);ze(i,l,a),i[ve]=e,i[de]=a}catch(d){Zt(e,e.return,d)}}var Li=!1,he=!1,qf=!1,my=typeof WeakSet=="function"?WeakSet:Set,Me=null;function QA(e,i){if(e=e.containerInfo,fd=hc,e=wp(e),zh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,R=-1,L=0,G=0,Y=e,z=null;e:for(;;){for(var j;Y!==a||h!==0&&Y.nodeType!==3||(T=v+h),Y!==d||l!==0&&Y.nodeType!==3||(R=v+l),Y.nodeType===3&&(v+=Y.nodeValue.length),(j=Y.firstChild)!==null;)z=Y,Y=j;for(;;){if(Y===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++G===l&&(R=v),(j=Y.nextSibling)!==null)break;Y=z,z=Y.parentNode}Y=j}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(dd={focusedElem:e,selectionRange:a},hc=!1,Me=i;Me!==null;)if(i=Me,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Me=e;else for(;Me!==null;){switch(i=Me,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Et=bs(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(Et,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(gt){Zt(a,a.return,gt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)gd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Me=e;break}Me=i.return}}function py(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:hr(e,a),l&4&&Qo(5,a);break;case 1:if(hr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Zt(a,a.return,v)}else{var h=bs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Zt(a,a.return,v)}}l&64&&uy(a),l&512&&Yo(a,a.return);break;case 3:if(hr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{$p(e,i)}catch(v){Zt(a,a.return,v)}}break;case 27:i===null&&l&4&&dy(a);case 26:case 5:hr(e,a),i===null&&l&4&&hy(a),l&512&&Yo(a,a.return);break;case 12:hr(e,a);break;case 13:hr(e,a),l&4&&_y(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nS.bind(null,a),TS(e,a))));break;case 22:if(l=a.memoizedState!==null||Li,!l){i=i!==null&&i.memoizedState!==null||he,h=Li;var d=he;Li=l,(he=i)&&!d?fr(e,a,(a.subtreeFlags&8772)!==0):hr(e,a),Li=h,he=d}break;case 30:break;default:hr(e,a)}}function gy(e){var i=e.alternate;i!==null&&(e.alternate=null,gy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Wi(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ne=null,en=!1;function zi(e,i,a){for(a=a.child;a!==null;)yy(e,i,a),a=a.sibling}function yy(e,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(se,a)}catch{}switch(a.tag){case 26:he||ri(a,i),zi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:he||ri(a,i);var l=ne,h=en;_r(a.type)&&(ne=a.stateNode,en=!1),zi(e,i,a),il(a.stateNode),ne=l,en=h;break;case 5:he||ri(a,i);case 6:if(l=ne,h=en,ne=null,zi(e,i,a),ne=l,en=h,ne!==null)if(en)try{(ne.nodeType===9?ne.body:ne.nodeName==="HTML"?ne.ownerDocument.body:ne).removeChild(a.stateNode)}catch(d){Zt(a,i,d)}else try{ne.removeChild(a.stateNode)}catch(d){Zt(a,i,d)}break;case 18:ne!==null&&(en?(e=ne,s_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hl(e)):s_(ne,a.stateNode));break;case 4:l=ne,h=en,ne=a.stateNode.containerInfo,en=!0,zi(e,i,a),ne=l,en=h;break;case 0:case 11:case 14:case 15:he||cr(2,a,i),he||cr(4,a,i),zi(e,i,a);break;case 1:he||(ri(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&cy(a,i,l)),zi(e,i,a);break;case 21:zi(e,i,a);break;case 22:he=(l=he)||a.memoizedState!==null,zi(e,i,a),he=l;break;default:zi(e,i,a)}}function _y(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hl(e)}catch(a){Zt(i,i.return,a)}}function YA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new my),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new my),i;default:throw Error(s(435,e.tag))}}function Hf(e,i){var a=YA(e);i.forEach(function(l){var h=iS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function hn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(_r(T.type)){ne=T.stateNode,en=!1;break t}break;case 5:ne=T.stateNode,en=!1;break t;case 3:case 4:ne=T.stateNode.containerInfo,en=!0;break t}T=T.return}if(ne===null)throw Error(s(160));yy(d,v,h),ne=null,en=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)vy(i,e),i=i.sibling}var Ln=null;function vy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(i,e),fn(e),l&4&&(cr(3,e,e.return),Qo(3,e),cr(5,e,e.return));break;case 1:hn(i,e),fn(e),l&512&&(he||a===null||ri(a,a.return)),l&64&&Li&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Ln;if(hn(i,e),fn(e),l&512&&(he||a===null||ri(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[Wr]||d[ve]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),ze(d,l,a),d[ve]=e,ue(d),l=d;break t;case"link":var v=d_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;case"meta":if(v=d_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[ve]=e,ue(d),l=d}e.stateNode=l}else m_(h,e.type,e.stateNode);else e.stateNode=f_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?m_(h,e.type,e.stateNode):f_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:hn(i,e),fn(e),l&512&&(he||a===null||ri(a,a.return)),a!==null&&l&4&&zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(hn(i,e),fn(e),l&512&&(he||a===null||ri(a,a.return)),e.flags&32){h=e.stateNode;try{En(h,"")}catch(j){Zt(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,zf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(qf=!0);break;case 6:if(hn(i,e),fn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){Zt(e,e.return,j)}}break;case 3:if(lc=null,h=Ln,Ln=ac(i.containerInfo),hn(i,e),Ln=h,fn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{hl(i.containerInfo)}catch(j){Zt(e,e.return,j)}qf&&(qf=!1,Ty(e));break;case 4:l=Ln,Ln=ac(e.stateNode.containerInfo),hn(i,e),fn(e),Ln=l;break;case 12:hn(i,e),fn(e);break;case 13:hn(i,e),fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xf=vn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hf(e,l)));break;case 22:h=e.memoizedState!==null;var R=a!==null&&a.memoizedState!==null,L=Li,G=he;if(Li=L||h,he=G||R,hn(i,e),he=G,Li=L,fn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||R||Li||he||ws(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){R=a=i;try{if(d=R.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=R.stateNode;var Y=R.memoizedProps.style,z=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){Zt(R,R.return,j)}}}else if(i.tag===6){if(a===null){R=i;try{R.stateNode.nodeValue=h?"":R.memoizedProps}catch(j){Zt(R,R.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Hf(e,a))));break;case 19:hn(i,e),fn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Hf(e,l)));break;case 30:break;case 21:break;default:hn(i,e),fn(e)}}function fn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(fy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=jf(e);Qu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(En(v,""),a.flags&=-33);var T=jf(e);Qu(e,T,v);break;case 3:case 4:var R=a.stateNode.containerInfo,L=jf(e);Bf(e,L,R);break;default:throw Error(s(161))}}catch(G){Zt(e,e.return,G)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ty(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ty(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function hr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)py(e,i.alternate,i),i=i.sibling}function ws(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:cr(4,i,i.return),ws(i);break;case 1:ri(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&cy(i,i.return,a),ws(i);break;case 27:il(i.stateNode);case 26:case 5:ri(i,i.return),ws(i);break;case 22:i.memoizedState===null&&ws(i);break;case 30:ws(i);break;default:ws(i)}e=e.sibling}}function fr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:fr(h,d,a),Qo(4,d);break;case 1:if(fr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Zt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)Xp(R[h],T)}catch(L){Zt(l,l.return,L)}}a&&v&64&&uy(d),Yo(d,d.return);break;case 27:dy(d);case 26:case 5:fr(h,d,a),a&&l===null&&v&4&&hy(d),Yo(d,d.return);break;case 12:fr(h,d,a);break;case 13:fr(h,d,a),a&&v&4&&_y(h,d);break;case 22:d.memoizedState===null&&fr(h,d,a),Yo(d,d.return);break;case 30:break;default:fr(h,d,a)}i=i.sibling}}function Ff(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vo(a))}function Gf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Vo(e))}function si(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ey(e,i,a,l),i=i.sibling}function Ey(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:si(e,i,a,l),h&2048&&Qo(9,i);break;case 1:si(e,i,a,l);break;case 3:si(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Vo(e)));break;case 12:if(h&2048){si(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Zt(i,i.return,R)}}else si(e,i,a,l);break;case 13:si(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?si(e,i,a,l):Xo(e,i):d._visibility&2?si(e,i,a,l):(d._visibility|=2,Aa(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Ff(v,i);break;case 24:si(e,i,a,l),h&2048&&Gf(i.alternate,i);break;default:si(e,i,a,l)}}function Aa(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,R=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Aa(d,v,T,R,h),Qo(8,v);break;case 23:break;case 22:var G=v.stateNode;v.memoizedState!==null?G._visibility&2?Aa(d,v,T,R,h):Xo(d,v):(G._visibility|=2,Aa(d,v,T,R,h)),h&&L&2048&&Ff(v.alternate,v);break;case 24:Aa(d,v,T,R,h),h&&L&2048&&Gf(v.alternate,v);break;default:Aa(d,v,T,R,h)}i=i.sibling}}function Xo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:Xo(a,l),h&2048&&Ff(l.alternate,l);break;case 24:Xo(a,l),h&2048&&Gf(l.alternate,l);break;default:Xo(a,l)}i=i.sibling}}var $o=8192;function Sa(e){if(e.subtreeFlags&$o)for(e=e.child;e!==null;)Ay(e),e=e.sibling}function Ay(e){switch(e.tag){case 26:Sa(e),e.flags&$o&&e.memoizedState!==null&&VS(Ln,e.memoizedState,e.memoizedProps);break;case 5:Sa(e);break;case 3:case 4:var i=Ln;Ln=ac(e.stateNode.containerInfo),Sa(e),Ln=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=$o,$o=16777216,Sa(e),$o=i):Sa(e));break;default:Sa(e)}}function Sy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Zo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Me=l,wy(l,e)}Sy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)by(e),e=e.sibling}function by(e){switch(e.tag){case 0:case 11:case 15:Zo(e),e.flags&2048&&cr(9,e,e.return);break;case 3:Zo(e);break;case 12:Zo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Yu(e)):Zo(e);break;default:Zo(e)}}function Yu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Me=l,wy(l,e)}Sy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:cr(8,i,i.return),Yu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Yu(i));break;default:Yu(i)}e=e.sibling}}function wy(e,i){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:cr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Me=l;else t:for(a=e;Me!==null;){l=Me;var h=l.sibling,d=l.return;if(gy(l),l===a){Me=null;break t}if(h!==null){h.return=d,Me=h;break t}Me=d}}}var XA={getCacheForType:function(e){var i=Fe(Ae),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},$A=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Wt=null,Mt=null,Lt=0,Kt=0,dn=null,dr=!1,ba=!1,Kf=!1,ji=0,oe=0,mr=0,Rs=0,Qf=0,On=0,wa=0,Jo=null,nn=null,Yf=!1,Xf=0,Xu=1/0,$u=null,pr=null,Le=0,gr=null,Ra=null,Ia=0,$f=0,Zf=null,Ry=null,Wo=0,Jf=null;function mn(){if((Gt&2)!==0&&Lt!==0)return Lt&-Lt;if(F.T!==null){var e=ma;return e!==0?e:sd()}return Zi()}function Iy(){On===0&&(On=(Lt&536870912)===0||Bt?oo():536870912);var e=Dn.current;return e!==null&&(e.flags|=32),On}function pn(e,i,a){(e===Wt&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(Ca(e,0),yr(e,Lt,On,!1)),_i(e,a),((Gt&2)===0||e!==Wt)&&(e===Wt&&((Gt&2)===0&&(Rs|=a),oe===4&&yr(e,Lt,On,!1)),ai(e))}function Cy(e,i,a){if((Gt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Jr(e,i),h=l?WA(e,i):ed(e,i,!0),d=l;do{if(h===0){ba&&!l&&yr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!ZA(a)){h=ed(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=Jo;var R=T.current.memoizedState.isDehydrated;if(R&&(Ca(T,v).flags|=256),v=ed(T,v,!1),v!==2){if(Kf&&!R){T.errorRecoveryDisabledLanes|=d,Rs|=d,h=4;break t}d=nn,nn=h,d!==null&&(nn===null?nn=d:nn.push.apply(nn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ca(e,0),yr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:yr(l,i,On,!dr);break t;case 2:nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Xf+300-vn(),10<h)){if(yr(l,i,On,!dr),Gs(l,0,!0)!==0)break t;l.timeoutHandle=i_(Dy.bind(null,l,a,nn,$u,Yf,i,On,Rs,wa,dr,d,2,-0,0),h);break t}Dy(l,a,nn,$u,Yf,i,On,Rs,wa,dr,d,0,-0,0)}}break}while(!0);ai(e)}function Dy(e,i,a,l,h,d,v,T,R,L,G,Y,z,j){if(e.timeoutHandle=-1,Y=i.subtreeFlags,(Y&8192||(Y&16785408)===16785408)&&(al={stylesheets:null,count:0,unsuspend:MS},Ay(i),Y=kS(),Y!==null)){e.cancelPendingCommit=Y(xy.bind(null,e,i,d,a,l,h,v,T,R,G,1,z,j)),yr(e,d,v,!L);return}xy(e,i,d,a,l,h,v,T,R)}function ZA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!un(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(e,i,a,l){i&=~Qf,i&=~Rs,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-He(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Gn(e,a,i)}function Zu(){return(Gt&6)===0?(tl(0),!1):!0}function Wf(){if(Mt!==null){if(Kt===0)var e=Mt.return;else e=Mt,Mi=Ts=null,gf(e),Ta=null,Fo=0,e=Mt;for(;e!==null;)ly(e.alternate,e),e=e.return;Mt=null}}function Ca(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,pS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wf(),Wt=e,Mt=a=Di(e.current,null),Lt=i,Kt=0,dn=null,dr=!1,ba=Jr(e,i),Kf=!1,wa=On=Qf=Rs=mr=oe=0,nn=Jo=null,Yf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-He(l),d=1<<h;i|=e[h],l&=~d}return ji=i,vu(),a}function Oy(e,i){Ct=null,F.H=Lu,i===Po||i===Cu?(i=Qp(),Kt=3):i===Fp?(i=Qp(),Kt=4):Kt=i===Yg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,dn=i,Mt===null&&(oe=1,Hu(e,wn(i,e.current)))}function Ny(){var e=F.H;return F.H=Lu,e===null?Lu:e}function My(){var e=F.A;return F.A=XA,e}function td(){oe=4,dr||(Lt&4194048)!==Lt&&Dn.current!==null||(ba=!0),(mr&134217727)===0&&(Rs&134217727)===0||Wt===null||yr(Wt,Lt,On,!1)}function ed(e,i,a){var l=Gt;Gt|=2;var h=Ny(),d=My();(Wt!==e||Lt!==i)&&($u=null,Ca(e,i)),i=!1;var v=oe;t:do try{if(Kt!==0&&Mt!==null){var T=Mt,R=dn;switch(Kt){case 8:Wf(),v=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(i=!0);var L=Kt;if(Kt=0,dn=null,Da(e,T,R,L),a&&ba){v=0;break t}break;default:L=Kt,Kt=0,dn=null,Da(e,T,R,L)}}JA(),v=oe;break}catch(G){Oy(e,G)}while(!0);return i&&e.shellSuspendCounter++,Mi=Ts=null,Gt=l,F.H=h,F.A=d,Mt===null&&(Wt=null,Lt=0,vu()),v}function JA(){for(;Mt!==null;)Vy(Mt)}function WA(e,i){var a=Gt;Gt|=2;var l=Ny(),h=My();Wt!==e||Lt!==i?($u=null,Xu=vn()+500,Ca(e,i)):ba=Jr(e,i);t:do try{if(Kt!==0&&Mt!==null){i=Mt;var d=dn;e:switch(Kt){case 1:Kt=0,dn=null,Da(e,i,d,1);break;case 2:case 9:if(Gp(d)){Kt=0,dn=null,ky(i);break}i=function(){Kt!==2&&Kt!==9||Wt!==e||(Kt=7),ai(e)},d.then(i,i);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:Gp(d)?(Kt=0,dn=null,ky(i)):(Kt=0,dn=null,Da(e,i,d,7));break;case 5:var v=null;switch(Mt.tag){case 26:v=Mt.memoizedState;case 5:case 27:var T=Mt;if(!v||p_(v)){Kt=0,dn=null;var R=T.sibling;if(R!==null)Mt=R;else{var L=T.return;L!==null?(Mt=L,Ju(L)):Mt=null}break e}}Kt=0,dn=null,Da(e,i,d,5);break;case 6:Kt=0,dn=null,Da(e,i,d,6);break;case 8:Wf(),oe=6;break t;default:throw Error(s(462))}}tS();break}catch(G){Oy(e,G)}while(!0);return Mi=Ts=null,F.H=l,F.A=h,Gt=a,Mt!==null?0:(Wt=null,Lt=0,vu(),oe)}function tS(){for(;Mt!==null&&!io();)Vy(Mt)}function Vy(e){var i=ay(e.alternate,e,ji);e.memoizedProps=e.pendingProps,i===null?Ju(e):Mt=i}function ky(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=ty(a,i,i.pendingProps,i.type,void 0,Lt);break;case 11:i=ty(a,i,i.pendingProps,i.type.render,i.ref,Lt);break;case 5:gf(i);default:ly(a,i),i=Mt=Pp(i,ji),i=ay(a,i,ji)}e.memoizedProps=e.pendingProps,i===null?Ju(e):Mt=i}function Da(e,i,a,l){Mi=Ts=null,gf(i),Ta=null,Fo=0;var h=i.return;try{if(HA(e,h,i,a,Lt)){oe=1,Hu(e,wn(a,e.current)),Mt=null;return}}catch(d){if(h!==null)throw Mt=h,d;oe=1,Hu(e,wn(a,e.current)),Mt=null;return}i.flags&32768?(Bt||l===1?e=!0:ba||(Lt&536870912)!==0?e=!1:(dr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Dn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Py(i,e)):Ju(i)}function Ju(e){var i=e;do{if((i.flags&32768)!==0){Py(i,dr);return}e=i.return;var a=GA(i.alternate,i,ji);if(a!==null){Mt=a;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=e}while(i!==null);oe===0&&(oe=5)}function Py(e,i){do{var a=KA(e.alternate,e);if(a!==null){a.flags&=32767,Mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=a}while(e!==null);oe=6,Mt=null}function xy(e,i,a,l,h,d,v,T,R){e.cancelPendingCommit=null;do Wu();while(Le!==0);if((Gt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Fh,uo(e,a,d,v,T,R),e===Wt&&(Mt=Wt=null,Lt=0),Ra=i,gr=e,Ia=a,$f=d,Zf=h,Ry=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rS(Yr,function(){return By(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=H.p,H.p=2,v=Gt,Gt|=4;try{QA(e,i,a)}finally{Gt=v,H.p=h,F.T=l}}Le=1,Uy(),Ly(),zy()}}function Uy(){if(Le===1){Le=0;var e=gr,i=Ra,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var l=H.p;H.p=2;var h=Gt;Gt|=4;try{vy(i,e);var d=dd,v=wp(e.containerInfo),T=d.focusedElem,R=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&bp(T.ownerDocument.documentElement,T)){if(R!==null&&zh(T)){var L=R.start,G=R.end;if(G===void 0&&(G=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(G,T.value.length);else{var Y=T.ownerDocument||document,z=Y&&Y.defaultView||window;if(z.getSelection){var j=z.getSelection(),Et=T.textContent.length,gt=Math.min(R.start,Et),$t=R.end===void 0?gt:Math.min(R.end,Et);!j.extend&&gt>$t&&(v=$t,$t=gt,gt=v);var k=Sp(T,gt),M=Sp(T,$t);if(k&&M&&(j.rangeCount!==1||j.anchorNode!==k.node||j.anchorOffset!==k.offset||j.focusNode!==M.node||j.focusOffset!==M.offset)){var U=Y.createRange();U.setStart(k.node,k.offset),j.removeAllRanges(),gt>$t?(j.addRange(U),j.extend(M.node,M.offset)):(U.setEnd(M.node,M.offset),j.addRange(U))}}}}for(Y=[],j=T;j=j.parentNode;)j.nodeType===1&&Y.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Y.length;T++){var K=Y[T];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}hc=!!fd,dd=fd=null}finally{Gt=h,H.p=l,F.T=a}}e.current=i,Le=2}}function Ly(){if(Le===2){Le=0;var e=gr,i=Ra,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var l=H.p;H.p=2;var h=Gt;Gt|=4;try{py(e,i.alternate,i)}finally{Gt=h,H.p=l,F.T=a}}Le=3}}function zy(){if(Le===4||Le===3){Le=0,Yl();var e=gr,i=Ra,a=Ia,l=Ry;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Le=5:(Le=0,Ra=gr=null,jy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(pr=null),Ks(a),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(se,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=H.p,H.p=2,F.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{F.T=i,H.p=h}}(Ia&3)!==0&&Wu(),ai(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===Jf?Wo++:(Wo=0,Jf=e):Wo=0,tl(0)}}function jy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Vo(i)))}function Wu(e){return Uy(),Ly(),zy(),By()}function By(){if(Le!==5)return!1;var e=gr,i=$f;$f=0;var a=Ks(Ia),l=F.T,h=H.p;try{H.p=32>a?32:a,F.T=null,a=Zf,Zf=null;var d=gr,v=Ia;if(Le=0,Ra=gr=null,Ia=0,(Gt&6)!==0)throw Error(s(331));var T=Gt;if(Gt|=4,by(d.current),Ey(d,d.current,v,a),Gt=T,tl(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(se,d)}catch{}return!0}finally{H.p=h,F.T=l,jy(e,i)}}function qy(e,i,a){i=wn(a,i),i=Of(e.stateNode,i,2),e=ar(e,i,2),e!==null&&(_i(e,2),ai(e))}function Zt(e,i,a){if(e.tag===3)qy(e,e,a);else for(;i!==null;){if(i.tag===3){qy(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pr===null||!pr.has(l))){e=wn(a,e),a=Kg(2),l=ar(i,a,2),l!==null&&(Qg(a,l,i,e),_i(l,2),ai(l));break}}i=i.return}}function nd(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new $A;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Kf=!0,h.add(a),e=eS.bind(null,e,i,a),i.then(e,e))}function eS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(Lt&a)===a&&(oe===4||oe===3&&(Lt&62914560)===Lt&&300>vn()-Xf?(Gt&2)===0&&Ca(e,0):Qf|=a,wa===Lt&&(wa=0)),ai(e)}function Hy(e,i){i===0&&(i=lo()),e=ca(e,i),e!==null&&(_i(e,i),ai(e))}function nS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),Hy(e,a)}function iS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),Hy(e,a)}function rS(e,i){return Kr(e,i)}var tc=null,Oa=null,id=!1,ec=!1,rd=!1,Is=0;function ai(e){e!==Oa&&e.next===null&&(Oa===null?tc=Oa=e:Oa=Oa.next=e),ec=!0,id||(id=!0,aS())}function tl(e,i){if(!rd&&ec){rd=!0;do for(var a=!1,l=tc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-He(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Qy(l,d))}else d=Lt,d=Gs(l,l===Wt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Jr(l,d)||(a=!0,Qy(l,d));l=l.next}while(a);rd=!1}}function sS(){Fy()}function Fy(){ec=id=!1;var e=0;Is!==0&&(mS()&&(e=Is),Is=0);for(var i=vn(),a=null,l=tc;l!==null;){var h=l.next,d=Gy(l,i);d===0?(l.next=null,a===null?tc=h:a.next=h,h===null&&(Oa=a)):(a=l,(e!==0||(d&3)!==0)&&(ec=!0)),l=h}tl(e)}function Gy(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-He(d),T=1<<v,R=h[v];R===-1?((T&a)===0||(T&l)!==0)&&(h[v]=ao(T,i)):R<=i&&(e.expiredLanes|=T),d&=~T}if(i=Wt,a=Lt,a=Gs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Qr(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Jr(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&Qr(l),Ks(a)){case 2:case 8:a=Hs;break;case 32:a=Yr;break;case 268435456:a=Fs;break;default:a=Yr}return l=Ky.bind(null,e),a=Kr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&Qr(l),e.callbackPriority=2,e.callbackNode=null,2}function Ky(e,i){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wu()&&e.callbackNode!==a)return null;var l=Lt;return l=Gs(e,e===Wt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Cy(e,l,i),Gy(e,vn()),e.callbackNode!=null&&e.callbackNode===a?Ky.bind(null,e):null)}function Qy(e,i){if(Wu())return null;Cy(e,i,!0)}function aS(){gS(function(){(Gt&6)!==0?Kr(ro,sS):Fy()})}function sd(){return Is===0&&(Is=oo()),Is}function Yy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Js(""+e)}function Xy(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function oS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=Yy((h[de]||null).action),v=l.submitter;v&&(i=(i=v[de]||null)?Yy(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new Ws("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Is!==0){var R=v?Xy(h,v):new FormData(h);wf(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=v?Xy(h,v):new FormData(h),wf(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var ad=0;ad<Hh.length;ad++){var od=Hh[ad],lS=od.toLowerCase(),uS=od[0].toUpperCase()+od.slice(1);Un(lS,"on"+uS)}Un(Cp,"onAnimationEnd"),Un(Dp,"onAnimationIteration"),Un(Op,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(RA,"onTransitionRun"),Un(IA,"onTransitionStart"),Un(CA,"onTransitionCancel"),Un(Np,"onTransitionEnd"),Ti("onMouseEnter",["mouseout","mouseover"]),Ti("onMouseLeave",["mouseout","mouseover"]),Ti("onPointerEnter",["pointerout","pointerover"]),Ti("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function $y(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],R=T.instance,L=T.currentTarget;if(T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){qu(G)}h.currentTarget=null,d=R}else for(v=0;v<l.length;v++){if(T=l[v],R=T.instance,L=T.currentTarget,T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(G){qu(G)}h.currentTarget=null,d=R}}}}function Vt(e,i){var a=i[ho];a===void 0&&(a=i[ho]=new Set);var l=e+"__bubble";a.has(l)||(Zy(i,e,2,!1),a.add(l))}function ld(e,i,a){var l=0;i&&(l|=4),Zy(a,e,l,i)}var nc="_reactListening"+Math.random().toString(36).slice(2);function ud(e){if(!e[nc]){e[nc]=!0,fo.forEach(function(a){a!=="selectionchange"&&(cS.has(a)||ld(a,!1,e),ld(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[nc]||(i[nc]=!0,ld("selectionchange",!1,i))}}function Zy(e,i,a,l){switch(E_(i)){case 2:var h=US;break;case 8:h=LS;break;default:h=Sd}a=h.bind(null,i,a,e),h=void 0,!Sn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function cd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var R=v.tag;if((R===3||R===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=vi(T),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){l=d=v;continue t}T=T.parentNode}}l=l.return}ru(function(){var L=d,G=An(a),Y=[];t:{var z=Mp.get(e);if(z!==void 0){var j=Ws,Et=e;switch(e){case"keypress":if(Zn(a)===0)break t;case"keydown":case"keyup":j=sa;break;case"focusin":Et="focus",j=na;break;case"focusout":Et="blur",j=na;break;case"beforeblur":case"afterblur":j=na;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Ph;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=fu;break;case Cp:case Dp:case Op:j=ia;break;case Np:j=mu;break;case"scroll":case"scrollend":j=su;break;case"wheel":j=aa;break;case"copy":case"cut":case"paste":j=ra;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=wo;break;case"toggle":case"beforetoggle":j=gu}var gt=(i&4)!==0,$t=!gt&&(e==="scroll"||e==="scrollend"),k=gt?z!==null?z+"Capture":null:z;gt=[];for(var M=L,U;M!==null;){var K=M;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||k===null||(K=as(M,k),K!=null&&gt.push(nl(M,K,U))),$t)break;M=M.return}0<gt.length&&(z=new j(z,Et,null,a,G),Y.push({event:z,listeners:gt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==Si&&(Et=a.relatedTarget||a.fromElement)&&(vi(Et)||Et[Tn]))break t;if((j||z)&&(z=G.window===G?G:(z=G.ownerDocument)?z.defaultView||z.parentWindow:window,j?(Et=a.relatedTarget||a.toElement,j=L,Et=Et?vi(Et):null,Et!==null&&($t=u(Et),gt=Et.tag,Et!==$t||gt!==5&&gt!==27&&gt!==6)&&(Et=null)):(j=null,Et=L),j!==Et)){if(gt=bn,K="onMouseLeave",k="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(gt=wo,K="onPointerLeave",k="onPointerEnter",M="pointer"),$t=j==null?z:Qn(j),U=Et==null?z:Qn(Et),z=new gt(K,M+"leave",j,a,G),z.target=$t,z.relatedTarget=U,K=null,vi(G)===L&&(gt=new gt(k,M+"enter",Et,a,G),gt.target=U,gt.relatedTarget=$t,K=gt),$t=K,j&&Et)e:{for(gt=j,k=Et,M=0,U=gt;U;U=Na(U))M++;for(U=0,K=k;K;K=Na(K))U++;for(;0<M-U;)gt=Na(gt),M--;for(;0<U-M;)k=Na(k),U--;for(;M--;){if(gt===k||k!==null&&gt===k.alternate)break e;gt=Na(gt),k=Na(k)}gt=null}else gt=null;j!==null&&Jy(Y,z,j,gt,!1),Et!==null&&$t!==null&&Jy(Y,$t,Et,gt,!0)}}t:{if(z=L?Qn(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var ht=yp;else if(Ee(z))if(_p)ht=SA;else{ht=EA;var Nt=TA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&_o(L.elementType)&&(ht=yp):ht=AA;if(ht&&(ht=ht(e,L))){Ci(Y,ht,a,G);break t}Nt&&Nt(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&er(z,"number",z.value)}switch(Nt=L?Qn(L):window,e){case"focusin":(Ee(Nt)||Nt.contentEditable==="true")&&(oa=Nt,jh=L,Co=null);break;case"focusout":Co=jh=oa=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Rp(Y,a,G);break;case"selectionchange":if(wA)break;case"keydown":case"keyup":Rp(Y,a,G)}var dt;if(ti)t:{switch(e){case"compositionstart":var _t="onCompositionStart";break t;case"compositionend":_t="onCompositionEnd";break t;case"compositionupdate":_t="onCompositionUpdate";break t}_t=void 0}else xt?q(e,a)&&(_t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(_&&a.locale!=="ko"&&(xt||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&xt&&(dt=To()):($n=G,nr="value"in $n?$n.value:$n.textContent,xt=!0)),Nt=ic(L,_t),0<Nt.length&&(_t=new So(_t,e,null,a,G),Y.push({event:_t,listeners:Nt}),dt?_t.data=dt:(dt=at(a),dt!==null&&(_t.data=dt)))),(dt=p?Te(e,a):Ut(e,a))&&(_t=ic(L,"onBeforeInput"),0<_t.length&&(Nt=new So("onBeforeInput","beforeinput",null,a,G),Y.push({event:Nt,listeners:_t}),Nt.data=dt)),oS(Y,e,L,a,G)}$y(Y,i)})}function nl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function ic(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=as(e,a),h!=null&&l.unshift(nl(e,h,d)),h=as(e,i),h!=null&&l.push(nl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Na(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jy(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,R=T.alternate,L=T.stateNode;if(T=T.tag,R!==null&&R===l)break;T!==5&&T!==26&&T!==27||L===null||(R=L,h?(L=as(a,d),L!=null&&v.unshift(nl(a,L,R))):h||(L=as(a,d),L!=null&&v.push(nl(a,L,R)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var hS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function Wy(e){return(typeof e=="string"?e:""+e).replace(hS,`
`).replace(fS,"")}function t_(e,i){return i=Wy(i),Wy(e)===i}function rc(){}function Xt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||En(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&En(e,""+l);break;case"className":Yn(e,"class",l);break;case"tabIndex":Yn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(e,a,l);break;case"style":yo(e,l,d);break;case"data":if(i!=="object"){Yn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Js(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xt(e,i,"name",h.name,h,null),Xt(e,i,"formEncType",h.formEncType,h,null),Xt(e,i,"formMethod",h.formMethod,h,null),Xt(e,i,"formTarget",h.formTarget,h,null)):(Xt(e,i,"encType",h.encType,h,null),Xt(e,i,"method",h.method,h,null),Xt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Js(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=rc);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Js(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Vt("beforetoggle",e),Vt("toggle",e),tr(e,"popover",l);break;case"xlinkActuate":Pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pe(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pe(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pe(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pe(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":tr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vh.get(a)||a,tr(e,a,l))}}function hd(e,i,a,l,h,d){switch(a){case"style":yo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?En(e,l):(typeof l=="number"||typeof l=="bigint")&&En(e,""+l);break;case"onScroll":l!=null&&Vt("scroll",e);break;case"onScrollEnd":l!=null&&Vt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=rc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[de]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):tr(e,a,l)}}}function ze(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Vt("error",e),Vt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,d,v,a,null)}}h&&Xt(e,i,"srcSet",a.srcSet,a,null),l&&Xt(e,i,"src",a.src,a,null);return;case"input":Vt("invalid",e);var T=d=v=h=null,R=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var G=a[l];if(G!=null)switch(l){case"name":h=G;break;case"type":v=G;break;case"checked":R=G;break;case"defaultChecked":L=G;break;case"value":d=G;break;case"defaultValue":T=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,i));break;default:Xt(e,i,l,G,a,null)}}is(e,d,T,R,L,v,h,!1),Zs(e);return;case"select":Vt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Xt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?Ai(e,!!l,i,!1):a!=null&&Ai(e,!!l,a,!0);return;case"textarea":Vt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xt(e,i,v,T,a,null)}rs(e,l,h,d),Zs(e);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xt(e,i,R,l,a,null)}return;case"dialog":Vt("beforetoggle",e),Vt("toggle",e),Vt("cancel",e),Vt("close",e);break;case"iframe":case"object":Vt("load",e);break;case"video":case"audio":for(l=0;l<el.length;l++)Vt(el[l],e);break;case"image":Vt("error",e),Vt("load",e);break;case"details":Vt("toggle",e);break;case"embed":case"source":case"link":Vt("error",e),Vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,L,l,a,null)}return;default:if(_o(i)){for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!==void 0&&hd(e,i,G,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xt(e,i,T,l,a,null))}function dS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,R=null,L=null,G=null;for(j in a){var Y=a[j];if(a.hasOwnProperty(j)&&Y!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":R=Y;default:l.hasOwnProperty(j)||Xt(e,i,j,null,l,Y)}}for(var z in l){var j=l[z];if(Y=a[z],l.hasOwnProperty(z)&&(j!=null||Y!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":G=j;break;case"value":v=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==Y&&Xt(e,i,z,j,l,Y)}}ln(e,v,T,R,L,G,d,h);return;case"select":j=v=T=z=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":j=R;default:l.hasOwnProperty(d)||Xt(e,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==R&&Xt(e,i,h,d,l,R)}i=T,a=v,l=j,z!=null?Ai(e,!!a,z,!1):!!l!=!!a&&(i!=null?Ai(e,!!a,i,!0):Ai(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xt(e,i,v,h,l,d)}Qt(e,z,j);return;case"option":for(var Et in a)if(z=a[Et],a.hasOwnProperty(Et)&&z!=null&&!l.hasOwnProperty(Et))switch(Et){case"selected":e.selected=!1;break;default:Xt(e,i,Et,null,l,z)}for(R in l)if(z=l[R],j=a[R],l.hasOwnProperty(R)&&z!==j&&(z!=null||j!=null))switch(R){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xt(e,i,R,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in a)z=a[gt],a.hasOwnProperty(gt)&&z!=null&&!l.hasOwnProperty(gt)&&Xt(e,i,gt,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xt(e,i,L,z,l,j)}return;default:if(_o(i)){for(var $t in a)z=a[$t],a.hasOwnProperty($t)&&z!==void 0&&!l.hasOwnProperty($t)&&hd(e,i,$t,void 0,l,z);for(G in l)z=l[G],j=a[G],!l.hasOwnProperty(G)||z===j||z===void 0&&j===void 0||hd(e,i,G,z,l,j);return}}for(var k in a)z=a[k],a.hasOwnProperty(k)&&z!=null&&!l.hasOwnProperty(k)&&Xt(e,i,k,null,l,z);for(Y in l)z=l[Y],j=a[Y],!l.hasOwnProperty(Y)||z===j||z==null&&j==null||Xt(e,i,Y,z,l,j)}var fd=null,dd=null;function sc(e){return e.nodeType===9?e:e.ownerDocument}function e_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function md(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pd=null;function mS(){var e=window.event;return e&&e.type==="popstate"?e===pd?!1:(pd=e,!0):(pd=null,!1)}var i_=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,r_=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof r_<"u"?function(e){return r_.resolve(null).then(e).catch(yS)}:i_;function yS(e){setTimeout(function(){throw e})}function _r(e){return e==="head"}function s_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&il(v.documentElement),a&2&&il(v.body),a&4)for(a=v.head,il(a),v=a.firstChild;v;){var T=v.nextSibling,R=v.nodeName;v[Wr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),hl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);hl(i)}function gd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gd(a),Wi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _S(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Wr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function vS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zn(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function TS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var _d=null;function a_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function o_(e,i,a){switch(i=sc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function il(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Wi(e)}var Nn=new Map,l_=new Set;function ac(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Bi=H.d;H.d={f:ES,r:AS,D:SS,C:bS,L:wS,m:RS,X:CS,S:IS,M:DS};function ES(){var e=Bi.f(),i=Zu();return e||i}function AS(e){var i=Kn(e);i!==null&&i.tag===5&&i.type==="form"?Cg(i):Bi.r(e)}var Ma=typeof document>"u"?null:document;function u_(e,i,a){var l=Ma;if(l&&typeof i=="string"&&i){var h=me(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),l_.has(h)||(l_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),ze(i,"link",e),ue(i),l.head.appendChild(i)))}}function SS(e){Bi.D(e),u_("dns-prefetch",e,null)}function bS(e,i){Bi.C(e,i),u_("preconnect",e,i)}function wS(e,i,a){Bi.L(e,i,a);var l=Ma;if(l&&e&&i){var h='link[rel="preload"][as="'+me(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+me(a.imageSizes)+'"]')):h+='[href="'+me(e)+'"]';var d=h;switch(i){case"style":d=Va(e);break;case"script":d=ka(e)}Nn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Nn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(rl(d))||i==="script"&&l.querySelector(sl(d))||(i=l.createElement("link"),ze(i,"link",e),ue(i),l.head.appendChild(i)))}}function RS(e,i){Bi.m(e,i);var a=Ma;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+me(l)+'"][href="'+me(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=ka(e)}if(!Nn.has(d)&&(e=E({rel:"modulepreload",href:e},i),Nn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(sl(d)))return}l=a.createElement("link"),ze(l,"link",e),ue(l),a.head.appendChild(l)}}}function IS(e,i,a){Bi.S(e,i,a);var l=Ma;if(l&&e){var h=$e(l).hoistableStyles,d=Va(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(rl(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Nn.get(d))&&vd(e,a);var R=v=l.createElement("link");ue(R),ze(R,"link",e),R._p=new Promise(function(L,G){R.onload=L,R.onerror=G}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,oc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function CS(e,i){Bi.X(e,i);var a=Ma;if(a&&e){var l=$e(a).hoistableScripts,h=ka(e),d=l.get(h);d||(d=a.querySelector(sl(h)),d||(e=E({src:e,async:!0},i),(i=Nn.get(h))&&Td(e,i),d=a.createElement("script"),ue(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function DS(e,i){Bi.M(e,i);var a=Ma;if(a&&e){var l=$e(a).hoistableScripts,h=ka(e),d=l.get(h);d||(d=a.querySelector(sl(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=Nn.get(h))&&Td(e,i),d=a.createElement("script"),ue(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function c_(e,i,a,l){var h=(h=St.current)?ac(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Va(a.href),a=$e(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Va(a.href);var d=$e(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(rl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Nn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Nn.set(e,a),d||OS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ka(a),a=$e(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Va(e){return'href="'+me(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function h_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function OS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ze(i,"link",a),ue(i),e.head.appendChild(i))}function ka(e){return'[src="'+me(e)+'"]'}function sl(e){return"script[async]"+e}function f_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+me(a.href)+'"]');if(l)return i.instance=l,ue(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ue(l),ze(l,"style",h),oc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Va(a.href);var d=e.querySelector(rl(h));if(d)return i.state.loading|=4,i.instance=d,ue(d),d;l=h_(a),(h=Nn.get(h))&&vd(l,h),d=(e.ownerDocument||e).createElement("link"),ue(d);var v=d;return v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),ze(d,"link",l),i.state.loading|=4,oc(d,a.precedence,e),i.instance=d;case"script":return d=ka(a.src),(h=e.querySelector(sl(d)))?(i.instance=h,ue(h),h):(l=a,(h=Nn.get(d))&&(l=E({},a),Td(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ue(h),ze(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,oc(l,a.precedence,e));return i.instance}function oc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function vd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Td(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var lc=null;function d_(e,i,a){if(lc===null){var l=new Map,h=lc=new Map;h.set(a,l)}else h=lc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[Wr]||d[ve]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function m_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function NS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function p_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var al=null;function MS(){}function VS(e,i,a){if(al===null)throw Error(s(475));var l=al;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Va(a.href),d=e.querySelector(rl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=uc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ue(d);return}d=e.ownerDocument||e,a=h_(a),(h=Nn.get(h))&&vd(a,h),d=d.createElement("link"),ue(d);var v=d;v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),ze(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=uc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function kS(){if(al===null)throw Error(s(475));var e=al;return e.stylesheets&&e.count===0&&Ed(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Ed(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function uc(){if(this.count--,this.count===0){if(this.stylesheets)Ed(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var cc=null;function Ed(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,cc=new Map,i.forEach(PS,e),cc=null,uc.call(e))}function PS(e,i){if(!(i.state.loading&4)){var a=cc.get(e);if(a)var l=a.get(null);else{a=new Map,cc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=uc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ol={$$typeof:et,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function xS(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.hiddenUpdates=yi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function g_(e,i,a,l,h,d,v,T,R,L,G,Y){return e=new xS(e,i,a,v,T,R,L,Y),i=1,d===!0&&(i|=24),d=cn(3,null,null,i),e.current=d,d.stateNode=e,i=ef(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},af(d),e}function y_(e){return e?(e=ha,e):ha}function __(e,i,a,l,h,d){h=y_(h),l.context===null?l.context=h:l.pendingContext=h,l=sr(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=ar(e,l,i),a!==null&&(pn(a,e,i),Uo(a,e,i))}function v_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Ad(e,i){v_(e,i),(e=e.alternate)&&v_(e,i)}function T_(e){if(e.tag===13){var i=ca(e,67108864);i!==null&&pn(i,e,67108864),Ad(e,67108864)}}var hc=!0;function US(e,i,a,l){var h=F.T;F.T=null;var d=H.p;try{H.p=2,Sd(e,i,a,l)}finally{H.p=d,F.T=h}}function LS(e,i,a,l){var h=F.T;F.T=null;var d=H.p;try{H.p=8,Sd(e,i,a,l)}finally{H.p=d,F.T=h}}function Sd(e,i,a,l){if(hc){var h=bd(l);if(h===null)cd(e,i,l,fc,a),A_(e,l);else if(jS(h,e,i,a,l))l.stopPropagation();else if(A_(e,l),i&4&&-1<zS.indexOf(e)){for(;h!==null;){var d=Kn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=kn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var R=1<<31-He(v);T.entanglements[1]|=R,v&=~R}ai(d),(Gt&6)===0&&(Xu=vn()+500,tl(0))}}break;case 13:T=ca(d,2),T!==null&&pn(T,d,2),Zu(),Ad(d,2)}if(d=bd(l),d===null&&cd(e,i,l,fc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else cd(e,i,l,null,a)}}function bd(e){return e=An(e),wd(e)}var fc=null;function wd(e){if(fc=null,e=vi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return fc=e,null}function E_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ih()){case ro:return 2;case Hs:return 8;case Yr:case Ch:return 32;case Fs:return 268435456;default:return 32}default:return 32}}var Rd=!1,vr=null,Tr=null,Er=null,ll=new Map,ul=new Map,Ar=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A_(e,i){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ll.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(i.pointerId)}}function cl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Kn(i),i!==null&&T_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function jS(e,i,a,l,h){switch(i){case"focusin":return vr=cl(vr,e,i,a,l,h),!0;case"dragenter":return Tr=cl(Tr,e,i,a,l,h),!0;case"mouseover":return Er=cl(Er,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return ll.set(d,cl(ll.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,ul.set(d,cl(ul.get(d)||null,e,i,a,l,h)),!0}return!1}function S_(e){var i=vi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Zl(e.priority,function(){if(a.tag===13){var l=mn();l=$i(l);var h=ca(a,l);h!==null&&pn(h,a,l),Ad(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function dc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=bd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Si=l,a.target.dispatchEvent(l),Si=null}else return i=Kn(a),i!==null&&T_(i),e.blockedOn=a,!1;i.shift()}return!0}function b_(e,i,a){dc(e)&&a.delete(i)}function BS(){Rd=!1,vr!==null&&dc(vr)&&(vr=null),Tr!==null&&dc(Tr)&&(Tr=null),Er!==null&&dc(Er)&&(Er=null),ll.forEach(b_),ul.forEach(b_)}function mc(e,i){e.blockedOn===i&&(e.blockedOn=null,Rd||(Rd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,BS)))}var pc=null;function w_(e){pc!==e&&(pc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(wd(l||a)===null)continue;break}var d=Kn(a);d!==null&&(e.splice(i,3),i-=3,wf(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function hl(e){function i(R){return mc(R,e)}vr!==null&&mc(vr,e),Tr!==null&&mc(Tr,e),Er!==null&&mc(Er,e),ll.forEach(i),ul.forEach(i);for(var a=0;a<Ar.length;a++){var l=Ar[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ar.length&&(a=Ar[0],a.blockedOn===null);)S_(a),a.blockedOn===null&&Ar.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[de]||null;if(typeof d=="function")v||w_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[de]||null)T=v.formAction;else if(wd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),w_(a)}}}function Id(e){this._internalRoot=e}gc.prototype.render=Id.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=mn();__(a,l,e,i,null,null)},gc.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;__(e.current,2,null,e,null,null),Zu(),i[Tn]=null}};function gc(e){this._internalRoot=e}gc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Zi();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Ar.length&&i!==0&&i<Ar[a].priority;a++);Ar.splice(a,0,e),a===0&&S_(e)}};var R_=t.version;if(R_!=="19.1.0")throw Error(s(527,R_,"19.1.0"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var qS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{se=yc.inject(qS),Ft=yc}catch{}}return dl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=qg,d=Hg,v=Fg,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=g_(e,1,!1,null,null,a,l,h,d,v,T,null),e[Tn]=i.current,ud(e),new Id(i)},dl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=qg,v=Hg,T=Fg,R=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=g_(e,1,!0,i,a??null,l,h,d,v,T,R,L),i.context=y_(null),a=i.current,l=mn(),l=$i(l),h=sr(l),h.callback=null,ar(a,h,l),a=l,i.current.lanes=a,_i(i,a),ai(i),e[Tn]=i.current,ud(e),new gc(i)},dl.version="19.1.0",dl}var x_;function WS(){if(x_)return Od.exports;x_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Od.exports=JS(),Od.exports}var tb=WS();const eb=ST(tb),nb=()=>{};var U_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},ib=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},wT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,g=o+2<r.length,y=g?r[o+2]:0,E=u>>2,b=(u&3)<<4|m>>4;let D=(m&15)<<2|y>>6,B=y&63;g||(B=64,f||(D=64)),s.push(n[E],n[b],n[D],n[B])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(bT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):ib(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const b=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||b==null)throw new rb;const D=u<<2|m>>4;if(s.push(D),y!==64){const B=m<<4&240|y>>2;if(s.push(B),b!==64){const X=y<<6&192|b;s.push(X)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class rb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sb=function(r){const t=bT(r);return wT.encodeByteArray(t,!0)},Pc=function(r){return sb(r).replace(/\./g,"")},RT=function(r){try{return wT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=()=>ab().__FIREBASE_DEFAULTS__,lb=()=>{if(typeof process>"u"||typeof U_>"u")return;const r=U_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ub=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&RT(r[1]);return t&&JSON.parse(t)},ih=()=>{try{return nb()||ob()||lb()||ub()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},IT=r=>{var t,n;return(n=(t=ih())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},cb=r=>{const t=IT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},CT=()=>{var r;return(r=ih())===null||r===void 0?void 0:r.config},DT=r=>{var t;return(t=ih())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(r){return r.endsWith(".cloudworkstations.dev")}async function OT(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Pc(JSON.stringify(n)),Pc(JSON.stringify(f)),""].join(".")}const Tl={};function db(){const r={prod:[],emulator:[]};for(const t of Object.keys(Tl))Tl[t]?r.emulator.push(t):r.prod.push(t);return r}function mb(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let L_=!1;function NT(r,t){if(typeof window>"u"||typeof document>"u"||!Ll(window.location.host)||Tl[r]===t||Tl[r]||L_)return;Tl[r]=t;function n(D){return`__firebase__banner__${D}`}const s="__firebase__banner",u=db().prod.length>0;function f(){const D=document.getElementById(s);D&&D.remove()}function m(D){D.style.display="flex",D.style.background="#7faaf0",D.style.position="fixed",D.style.bottom="5px",D.style.left="5px",D.style.padding=".5em",D.style.borderRadius="5px",D.style.alignItems="center"}function g(D,B){D.setAttribute("width","24"),D.setAttribute("id",B),D.setAttribute("height","24"),D.setAttribute("viewBox","0 0 24 24"),D.setAttribute("fill","none"),D.style.marginLeft="-6px"}function y(){const D=document.createElement("span");return D.style.cursor="pointer",D.style.marginLeft="16px",D.style.fontSize="24px",D.innerHTML=" &times;",D.onclick=()=>{L_=!0,f()},D}function E(D,B){D.setAttribute("id",B),D.innerText="Learn more",D.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",D.setAttribute("target","__blank"),D.style.paddingLeft="5px",D.style.textDecoration="underline"}function b(){const D=mb(s),B=n("text"),X=document.getElementById(B)||document.createElement("span"),st=n("learnmore"),Z=document.getElementById(st)||document.createElement("a"),ot=n("preprendIcon"),tt=document.getElementById(ot)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(D.created){const et=D.element;m(et),E(Z,st);const rt=y();g(tt,ot),et.append(tt,X,Z,rt),document.body.appendChild(et)}u?(X.innerText="Preview backend disconnected.",tt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(tt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,X.innerText="Preview backend running in this workspace."),X.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function gb(){var r;const t=(r=ih())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function _b(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vb(){const r=Xe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Tb(){return!gb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VT(){try{return typeof indexedDB=="object"}catch{return!1}}function kT(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}function Eb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab="FirebaseError";class Hn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Ab,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Sb(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Hn(o,m,s)}}function Sb(r,t){return r.replace(bb,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const bb=/\{\$([^}]+)}/g;function wb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function kr(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if(z_(u)&&z_(f)){if(!kr(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function z_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function ml(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function pl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function Rb(r,t){const n=new Ib(r,t);return n.subscribe.bind(n)}class Ib{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cb(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=kd),o.error===void 0&&(o.error=kd),o.complete===void 0&&(o.complete=kd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function kd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=1e3,Ob=2,Nb=4*60*60*1e3,Mb=.5;function j_(r,t=Db,n=Ob){const s=t*Math.pow(n,r),o=Math.round(Mb*s*(Math.random()-.5)*2);return Math.min(Nb,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(r){return r&&r._delegate?r._delegate:r}class Bn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new hb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Pb(t))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Cs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cs){return this.instances.has(t)}getOptions(t=Cs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Cs){return this.component?this.component.multipleInstances?t:Cs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kb(r){return r===Cs?void 0:r}function Pb(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(kt||(kt={}));const Ub={debug:kt.DEBUG,verbose:kt.VERBOSE,info:kt.INFO,warn:kt.WARN,error:kt.ERROR,silent:kt.SILENT},Lb=kt.INFO,zb={[kt.DEBUG]:"log",[kt.VERBOSE]:"log",[kt.INFO]:"info",[kt.WARN]:"warn",[kt.ERROR]:"error"},jb=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=zb[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class rh{constructor(t){this.name=t,this._logLevel=Lb,this._logHandler=jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in kt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ub[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,kt.DEBUG,...t),this._logHandler(this,kt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,kt.VERBOSE,...t),this._logHandler(this,kt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,kt.INFO,...t),this._logHandler(this,kt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,kt.WARN,...t),this._logHandler(this,kt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,kt.ERROR,...t),this._logHandler(this,kt.ERROR,...t)}}const Bb=(r,t)=>t.some(n=>r instanceof n);let B_,q_;function qb(){return B_||(B_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hb(){return q_||(q_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const PT=new WeakMap,Yd=new WeakMap,xT=new WeakMap,Pd=new WeakMap,Am=new WeakMap;function Fb(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Or(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&PT.set(n,r)}).catch(()=>{}),Am.set(t,r),t}function Gb(r){if(Yd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Yd.set(r,t)}let Xd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Yd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||xT.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Kb(r){Xd=r(Xd)}function Qb(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(xd(this),t,...n);return xT.set(s,t.sort?t.sort():[t]),Or(s)}:Hb().includes(r)?function(...t){return r.apply(xd(this),t),Or(PT.get(this))}:function(...t){return Or(r.apply(xd(this),t))}}function Yb(r){return typeof r=="function"?Qb(r):(r instanceof IDBTransaction&&Gb(r),Bb(r,qb())?new Proxy(r,Xd):r)}function Or(r){if(r instanceof IDBRequest)return Fb(r);if(Pd.has(r))return Pd.get(r);const t=Yb(r);return t!==r&&(Pd.set(r,t),Am.set(t,r)),t}const xd=r=>Am.get(r);function UT(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=Or(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Or(f.result),g.oldVersion,g.newVersion,Or(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const Xb=["get","getKey","getAll","getAllKeys","count"],$b=["put","add","delete","clear"],Ud=new Map;function H_(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Ud.get(t))return Ud.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=$b.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Xb.includes(n)))return;const u=async function(f,...m){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&g.done]))[0]};return Ud.set(t,u),u}Kb(r=>({...r,get:(t,n,s)=>H_(t,n)||r.get(t,n,s),has:(t,n)=>!!H_(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jb(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $d="@firebase/app",F_="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=new rh("@firebase/app"),Wb="@firebase/app-compat",tw="@firebase/analytics-compat",ew="@firebase/analytics",nw="@firebase/app-check-compat",iw="@firebase/app-check",rw="@firebase/auth",sw="@firebase/auth-compat",aw="@firebase/database",ow="@firebase/data-connect",lw="@firebase/database-compat",uw="@firebase/functions",cw="@firebase/functions-compat",hw="@firebase/installations",fw="@firebase/installations-compat",dw="@firebase/messaging",mw="@firebase/messaging-compat",pw="@firebase/performance",gw="@firebase/performance-compat",yw="@firebase/remote-config",_w="@firebase/remote-config-compat",vw="@firebase/storage",Tw="@firebase/storage-compat",Ew="@firebase/firestore",Aw="@firebase/ai",Sw="@firebase/firestore-compat",bw="firebase",ww="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="[DEFAULT]",Rw={[$d]:"fire-core",[Wb]:"fire-core-compat",[ew]:"fire-analytics",[tw]:"fire-analytics-compat",[iw]:"fire-app-check",[nw]:"fire-app-check-compat",[rw]:"fire-auth",[sw]:"fire-auth-compat",[aw]:"fire-rtdb",[ow]:"fire-data-connect",[lw]:"fire-rtdb-compat",[uw]:"fire-fn",[cw]:"fire-fn-compat",[hw]:"fire-iid",[fw]:"fire-iid-compat",[dw]:"fire-fcm",[mw]:"fire-fcm-compat",[pw]:"fire-perf",[gw]:"fire-perf-compat",[yw]:"fire-rc",[_w]:"fire-rc-compat",[vw]:"fire-gcs",[Tw]:"fire-gcs-compat",[Ew]:"fire-fst",[Sw]:"fire-fst-compat",[Aw]:"fire-vertex","fire-js":"fire-js",[bw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map,Iw=new Map,Jd=new Map;function G_(r,t){try{r.container.addComponent(t)}catch(n){Gi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function di(r){const t=r.name;if(Jd.has(t))return Gi.debug(`There were multiple attempts to register component ${t}.`),!1;Jd.set(t,r);for(const n of xc.values())G_(n,r);for(const n of Iw.values())G_(n,r);return!0}function zs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Mn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Ls("app","Firebase",Cw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=ww;function LT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Zd,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw Nr.create("bad-app-name",{appName:String(o)});if(n||(n=CT()),!n)throw Nr.create("no-options");const u=xc.get(o);if(u){if(kr(n,u.options)&&kr(s,u.config))return u;throw Nr.create("duplicate-app",{appName:o})}const f=new xb(o);for(const g of Jd.values())f.addComponent(g);const m=new Dw(n,s,f);return xc.set(o,m),m}function Sm(r=Zd){const t=xc.get(r);if(!t&&r===Zd&&CT())return LT();if(!t)throw Nr.create("no-app",{appName:r});return t}function Vn(r,t,n){var s;let o=(s=Rw[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gi.warn(m.join(" "));return}di(new Bn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="firebase-heartbeat-database",Nw=1,Il="firebase-heartbeat-store";let Ld=null;function zT(){return Ld||(Ld=UT(Ow,Nw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Il)}catch(n){console.warn(n)}}}}).catch(r=>{throw Nr.create("idb-open",{originalErrorMessage:r.message})})),Ld}async function Mw(r){try{const n=(await zT()).transaction(Il),s=await n.objectStore(Il).get(jT(r));return await n.done,s}catch(t){if(t instanceof Hn)Gi.warn(t.message);else{const n=Nr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gi.warn(n.message)}}}async function K_(r,t){try{const s=(await zT()).transaction(Il,"readwrite");await s.objectStore(Il).put(t,jT(r)),await s.done}catch(n){if(n instanceof Hn)Gi.warn(n.message);else{const s=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gi.warn(s.message)}}}function jT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=1024,kw=30;class Pw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Uw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Q_();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>kw){const f=Lw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Gi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Q_(),{heartbeatsToSend:s,unsentEntries:o}=xw(this._heartbeatsCache.heartbeats),u=Pc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Gi.warn(n),""}}}function Q_(){return new Date().toISOString().substring(0,10)}function xw(r,t=Vw){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),Y_(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Y_(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Uw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VT()?kT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return K_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return K_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Y_(r){return Pc(JSON.stringify({version:2,heartbeats:r})).length}function Lw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(r){di(new Bn("platform-logger",t=>new Zb(t),"PRIVATE")),di(new Bn("heartbeat",t=>new Pw(t),"PRIVATE")),Vn($d,F_,r),Vn($d,F_,"esm2017"),Vn("fire-js","")}zw("");var jw="firebase",Bw="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(jw,Bw,"app");const BT="@firebase/installations",bm="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=1e4,HT=`w:${bm}`,FT="FIS_v2",qw="https://firebaseinstallations.googleapis.com/v1",Hw=60*60*1e3,Fw="installations",Gw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ms=new Ls(Fw,Gw,Kw);function GT(r){return r instanceof Hn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT({projectId:r}){return`${qw}/projects/${r}/installations`}function QT(r){return{token:r.token,requestStatus:2,expiresIn:Yw(r.expiresIn),creationTime:Date.now()}}async function YT(r,t){const s=(await t.json()).error;return Ms.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function XT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function Qw(r,{refreshToken:t}){const n=XT(r);return n.append("Authorization",Xw(t)),n}async function $T(r){const t=await r();return t.status>=500&&t.status<600?r():t}function Yw(r){return Number(r.replace("s","000"))}function Xw(r){return`${FT} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $w({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=KT(r),o=XT(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:FT,appId:r.appId,sdkVersion:HT},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await $T(()=>fetch(s,m));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:QT(y.authToken)}}else throw await YT("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=/^[cdef][\w-]{21}$/,Wd="";function Ww(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=t1(r);return Jw.test(n)?n:Wd}catch{return Wd}}function t1(r){return Zw(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=new Map;function WT(r,t){const n=sh(r);tE(n,t),e1(n,t)}function tE(r,t){const n=JT.get(r);if(n)for(const s of n)s(t)}function e1(r,t){const n=n1();n&&n.postMessage({key:r,fid:t}),i1()}let Ds=null;function n1(){return!Ds&&"BroadcastChannel"in self&&(Ds=new BroadcastChannel("[Firebase] FID Change"),Ds.onmessage=r=>{tE(r.data.key,r.data.fid)}),Ds}function i1(){JT.size===0&&Ds&&(Ds.close(),Ds=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="firebase-installations-database",s1=1,Vs="firebase-installations-store";let zd=null;function wm(){return zd||(zd=UT(r1,s1,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Vs)}}})),zd}async function Uc(r,t){const n=sh(r),o=(await wm()).transaction(Vs,"readwrite"),u=o.objectStore(Vs),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&WT(r,t.fid),t}async function eE(r){const t=sh(r),s=(await wm()).transaction(Vs,"readwrite");await s.objectStore(Vs).delete(t),await s.done}async function ah(r,t){const n=sh(r),o=(await wm()).transaction(Vs,"readwrite"),u=o.objectStore(Vs),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&WT(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(r){let t;const n=await ah(r.appConfig,s=>{const o=a1(s),u=o1(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===Wd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function a1(r){const t=r||{fid:Ww(),registrationStatus:0};return nE(t)}function o1(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ms.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=l1(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:u1(r)}:{installationEntry:t}}async function l1(r,t){try{const n=await $w(r,t);return Uc(r.appConfig,n)}catch(n){throw GT(n)&&n.customData.serverCode===409?await eE(r.appConfig):await Uc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function u1(r){let t=await X_(r.appConfig);for(;t.registrationStatus===1;)await ZT(100),t=await X_(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Rm(r);return s||n}return t}function X_(r){return ah(r,t=>{if(!t)throw Ms.create("installation-not-found");return nE(t)})}function nE(r){return c1(r)?{fid:r.fid,registrationStatus:0}:r}function c1(r){return r.registrationStatus===1&&r.registrationTime+qT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h1({appConfig:r,heartbeatServiceProvider:t},n){const s=f1(r,n),o=Qw(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:HT,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},g=await $T(()=>fetch(s,m));if(g.ok){const y=await g.json();return QT(y)}else throw await YT("Generate Auth Token",g)}function f1(r,{fid:t}){return`${KT(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(r,t=!1){let n;const s=await ah(r.appConfig,u=>{if(!iE(u))throw Ms.create("not-registered");const f=u.authToken;if(!t&&p1(f))return u;if(f.requestStatus===1)return n=d1(r,t),u;{if(!navigator.onLine)throw Ms.create("app-offline");const m=y1(u);return n=m1(r,m),m}});return n?await n:s.authToken}async function d1(r,t){let n=await $_(r.appConfig);for(;n.authToken.requestStatus===1;)await ZT(100),n=await $_(r.appConfig);const s=n.authToken;return s.requestStatus===0?Im(r,t):s}function $_(r){return ah(r,t=>{if(!iE(t))throw Ms.create("not-registered");const n=t.authToken;return _1(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function m1(r,t){try{const n=await h1(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await Uc(r.appConfig,s),n}catch(n){if(GT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await eE(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Uc(r.appConfig,s)}throw n}}function iE(r){return r!==void 0&&r.registrationStatus===2}function p1(r){return r.requestStatus===2&&!g1(r)}function g1(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+Hw}function y1(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function _1(r){return r.requestStatus===1&&r.requestTime+qT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v1(r){const t=r,{installationEntry:n,registrationPromise:s}=await Rm(t);return s?s.catch(console.error):Im(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T1(r,t=!1){const n=r;return await E1(n),(await Im(n,t)).token}async function E1(r){const{registrationPromise:t}=await Rm(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(r){if(!r||!r.options)throw jd("App Configuration");if(!r.name)throw jd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw jd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function jd(r){return Ms.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="installations",S1="installations-internal",b1=r=>{const t=r.getProvider("app").getImmediate(),n=A1(t),s=zs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},w1=r=>{const t=r.getProvider("app").getImmediate(),n=zs(t,rE).getImmediate();return{getId:()=>v1(n),getToken:o=>T1(n,o)}};function R1(){di(new Bn(rE,b1,"PUBLIC")),di(new Bn(S1,w1,"PRIVATE"))}R1();Vn(BT,bm);Vn(BT,bm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="analytics",I1="firebase_id",C1="origin",D1=60*1e3,O1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new rh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new Ls("analytics","Analytics",N1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(r){if(!r.startsWith(Cm)){const t=yn.create("invalid-gtag-resource",{gtagURL:r});return an.warn(t.message),""}return r}function sE(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function V1(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function k1(r,t){const n=V1("firebase-js-sdk-policy",{createScriptURL:M1}),s=document.createElement("script"),o=`${Cm}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function P1(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function x1(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const g=(await sE(n)).find(y=>y.measurementId===o);g&&await t[g.appId]}}catch(m){an.error(m)}r("config",o,u)}async function U1(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await sE(n);for(const g of f){const y=m.find(b=>b.measurementId===g),E=y&&t[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){an.error(u)}}function L1(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,g]=f;await U1(r,t,n,m,g)}else if(u==="config"){const[m,g]=f;await x1(r,t,n,s,m,g)}else if(u==="consent"){const[m,g]=f;r("consent",m,g)}else if(u==="get"){const[m,g,y]=f;r("get",m,g,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){an.error(m)}}return o}function z1(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=L1(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function j1(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Cm)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=30,q1=1e3;class H1{constructor(t={},n=q1){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const aE=new H1;function F1(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function G1(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:F1(s)},u=O1.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const g=await f.json();!((t=g.error)===null||t===void 0)&&t.message&&(m=g.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function K1(r,t=aE,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw yn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw yn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new X1;return setTimeout(async()=>{m.abort()},D1),oE({appId:s,apiKey:o,measurementId:u},f,m,t)}async function oE(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=aE){var u;const{appId:f,measurementId:m}=r;try{await Q1(s,t)}catch(g){if(m)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:f,measurementId:m};throw g}try{const g=await G1(r);return o.deleteThrottleMetadata(f),g}catch(g){const y=g;if(!Y1(y)){if(o.deleteThrottleMetadata(f),m)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw g}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?j_(n,o.intervalMillis,B1):j_(n,o.intervalMillis),b={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,b),an.debug(`Calling attemptFetch again in ${E} millis`),oE(r,b,s,o)}}function Q1(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(yn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Y1(r){if(!(r instanceof Hn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class X1{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function $1(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(){if(VT())try{await kT()}catch(r){return an.warn(yn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return an.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function J1(r,t,n,s,o,u,f){var m;const g=K1(r);g.then(B=>{n[B.measurementId]=B.appId,r.options.measurementId&&B.measurementId!==r.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${B.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(B=>an.error(B)),t.push(g);const y=Z1().then(B=>{if(B)return s.getId()}),[E,b]=await Promise.all([g,y]);j1(u)||k1(u,E.measurementId),o("js",new Date);const D=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return D[C1]="firebase",D.update=!0,b!=null&&(D[I1]=b),o("config",E.measurementId,D),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(t){this.app=t}_delete(){return delete El[this.app.options.appId],Promise.resolve()}}let El={},Z_=[];const J_={};let Bd="dataLayer",tR="gtag",W_,lE,tv=!1;function eR(){const r=[];if(MT()&&r.push("This is a browser extension environment."),Eb()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:t});an.warn(n.message)}}function nR(r,t,n){eR();const s=r.options.appId;if(!s)throw yn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(El[s]!=null)throw yn.create("already-exists",{id:s});if(!tv){P1(Bd);const{wrappedGtag:u,gtagCore:f}=z1(El,Z_,J_,Bd,tR);lE=u,W_=f,tv=!0}return El[s]=J1(r,Z_,J_,t,W_,Bd,n),new W1(r)}function iR(r=Sm()){r=Ie(r);const t=zs(r,Lc);return t.isInitialized()?t.getImmediate():rR(r)}function rR(r,t={}){const n=zs(r,Lc);if(n.isInitialized()){const o=n.getImmediate();if(kr(t,n.getOptions()))return o;throw yn.create("already-initialized")}return n.initialize({options:t})}function sR(r,t,n,s){r=Ie(r),$1(lE,El[r.app.options.appId],t,n,s).catch(o=>an.error(o))}const ev="@firebase/analytics",nv="0.10.16";function aR(){di(new Bn(Lc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return nR(s,o,n)},"PUBLIC")),di(new Bn("analytics-internal",r,"PRIVATE")),Vn(ev,nv),Vn(ev,nv,"esm2017");function r(t){try{const n=t.getProvider(Lc).getImmediate();return{logEvent:(s,o,u)=>sR(n,s,o,u)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}aR();function Dm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function uE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oR=uE,cE=new Ls("auth","Firebase",uE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=new rh("@firebase/auth");function lR(r,...t){zc.logLevel<=kt.WARN&&zc.warn(`Auth (${Za}): ${r}`,...t)}function wc(r,...t){zc.logLevel<=kt.ERROR&&zc.error(`Auth (${Za}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(r,...t){throw Om(r,...t)}function li(r,...t){return Om(r,...t)}function hE(r,t,n){const s=Object.assign(Object.assign({},oR()),{[t]:n});return new Ls("auth","Firebase",s).create(t,{appName:r.name})}function Fi(r){return hE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Om(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return cE.create(r,...t)}function vt(r,t,...n){if(!r)throw Om(t,...n)}function qi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw wc(t),new Error(t)}function Ki(r,t){r||qi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function uR(){return iv()==="http:"||iv()==="https:"}function iv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uR()||MT()||"connection"in navigator)?navigator.onLine:!0}function hR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ki(n>t,"Short delay should be less than long delay!"),this.isMobile=pb()||_b()}get(){return cR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(r,t){Ki(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mR=new jl(3e4,6e4);function Br(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function qr(r,t,n,s,o={}){return dE(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=zl(Object.assign({key:r.config.apiKey},f)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:g},u);return yb()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&Ll(r.emulatorConfig.host)&&(y.credentials="include"),fE.fetch()(await mE(r,r.config.apiHost,n,m),y)})}async function dE(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},fR),t);try{const o=new gR(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw _c(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[g,y]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw _c(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw _c(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw _c(r,"user-disabled",f);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw hE(r,E,y);qn(r,E)}}catch(o){if(o instanceof Hn)throw o;qn(r,"network-request-failed",{message:String(o)})}}async function Bl(r,t,n,s,o={}){const u=await qr(r,t,n,s,o);return"mfaPendingCredential"in u&&qn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function mE(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?Nm(r.config,o):`${r.config.apiScheme}://${o}`;return dR.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function pR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(li(this.auth,"network-request-failed")),mR.get())})}}function _c(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=li(r,t,s);return o.customData._tokenResponse=n,o}function rv(r){return r!==void 0&&r.enterprise!==void 0}class yR{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return pR(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _R(r,t){return qr(r,"GET","/v2/recaptchaConfig",Br(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(r,t){return qr(r,"POST","/v1/accounts:delete",t)}async function jc(r,t){return qr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function TR(r,t=!1){const n=Ie(r),s=await n.getIdToken(t),o=Mm(s);vt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Al(qd(o.auth_time)),issuedAtTime:Al(qd(o.iat)),expirationTime:Al(qd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function qd(r){return Number(r)*1e3}function Mm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return wc("JWT malformed, contained fewer than 3 sections"),null;try{const o=RT(n);return o?JSON.parse(o):(wc("Failed to decode base64 JWT payload"),null)}catch(o){return wc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function sv(r){const t=Mm(r);return vt(t,"internal-error"),vt(typeof t.exp<"u","internal-error"),vt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Hn&&ER(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function ER({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Al(this.lastLoginAt),this.creationTime=Al(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Cl(r,jc(n,{idToken:s}));vt(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?pE(u.providerUserInfo):[],m=bR(r.providerData,f),g=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=g?y:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new em(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,b)}async function SR(r){const t=Ie(r);await Bc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function bR(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function pE(r){return r.map(t=>{var{providerId:n}=t,s=Dm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wR(r,t){const n=await dE(r,{},async()=>{const s=zl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await mE(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",fE.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RR(r,t){return qr(r,"POST","/v2/accounts:revokeToken",Br(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){vt(t.idToken,"internal-error"),vt(typeof t.idToken<"u","internal-error"),vt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):sv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){vt(t.length!==0,"internal-error");const n=sv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(vt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await wR(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new ja;return s&&(vt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(vt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(vt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ja,this.toJSON())}_performRefresh(){return qi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(r,t){vt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class jn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Dm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new em(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Cl(this,this.stsTokenManager.getToken(this.auth,t));return vt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return TR(this,t)}reload(){return SR(this)}_assign(t){this!==t&&(vt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new jn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){vt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Bc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Fi(this.auth));const t=await this.getIdToken();return await Cl(this,vR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,m,g,y,E;const b=(s=n.displayName)!==null&&s!==void 0?s:void 0,D=(o=n.email)!==null&&o!==void 0?o:void 0,B=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,X=(f=n.photoURL)!==null&&f!==void 0?f:void 0,st=(m=n.tenantId)!==null&&m!==void 0?m:void 0,Z=(g=n._redirectEventId)!==null&&g!==void 0?g:void 0,ot=(y=n.createdAt)!==null&&y!==void 0?y:void 0,tt=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:et,emailVerified:rt,isAnonymous:W,providerData:ft,stsTokenManager:C}=n;vt(et&&C,t,"internal-error");const S=ja.fromJSON(this.name,C);vt(typeof et=="string",t,"internal-error"),br(b,t.name),br(D,t.name),vt(typeof rt=="boolean",t,"internal-error"),vt(typeof W=="boolean",t,"internal-error"),br(B,t.name),br(X,t.name),br(st,t.name),br(Z,t.name),br(ot,t.name),br(tt,t.name);const w=new jn({uid:et,auth:t,email:D,emailVerified:rt,displayName:b,isAnonymous:W,photoURL:X,phoneNumber:B,tenantId:st,stsTokenManager:S,createdAt:ot,lastLoginAt:tt});return ft&&Array.isArray(ft)&&(w.providerData=ft.map(N=>Object.assign({},N))),Z&&(w._redirectEventId=Z),w}static async _fromIdTokenResponse(t,n,s=!1){const o=new ja;o.updateFromServerResponse(n);const u=new jn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Bc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];vt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?pE(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new ja;m.updateFromIdToken(s);const g=new jn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new em(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av=new Map;function Hi(r){Ki(r instanceof Function,"Expected a class definition");let t=av.get(r);return t?(Ki(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,av.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}gE.type="NONE";const ov=gE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ba{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Rc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Rc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await jc(this.auth,{idToken:t}).catch(()=>{});return n?jn._fromGetAccountInfoResponse(this.auth,n,t):null}return jn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ba(Hi(ov),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Hi(ov);const f=Rc(s,t.config.apiKey,t.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let b;if(typeof E=="string"){const D=await jc(t,{idToken:E}).catch(()=>{});if(!D)break;b=await jn._fromGetAccountInfoResponse(t,D,E)}else b=jn._fromJSON(t,E);y!==u&&(m=b),u=y;break}}catch{}const g=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Ba(u,t,s):(u=g[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Ba(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(TE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(yE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(AE(t))return"Blackberry";if(SE(t))return"Webos";if(_E(t))return"Safari";if((t.includes("chrome/")||vE(t))&&!t.includes("edge/"))return"Chrome";if(EE(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function yE(r=Xe()){return/firefox\//i.test(r)}function _E(r=Xe()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vE(r=Xe()){return/crios\//i.test(r)}function TE(r=Xe()){return/iemobile/i.test(r)}function EE(r=Xe()){return/android/i.test(r)}function AE(r=Xe()){return/blackberry/i.test(r)}function SE(r=Xe()){return/webos/i.test(r)}function Vm(r=Xe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function IR(r=Xe()){var t;return Vm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function CR(){return vb()&&document.documentMode===10}function bE(r=Xe()){return Vm(r)||EE(r)||SE(r)||AE(r)||/windows phone/i.test(r)||TE(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(r,t=[]){let n;switch(r){case"Browser":n=lv(Xe());break;case"Worker":n=`${lv(Xe())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Za}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const g=t(u);f(g)}catch(g){m(g)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(r,t={}){return qr(r,"GET","/v2/passwordPolicy",Br(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=6;class MR{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:NR,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,g),this.validatePasswordCharacterOptions(t,g),g.isValid&&(g.isValid=(n=g.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(f=g.containsNumericCharacter)!==null&&f!==void 0?f:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uv(this),this.idTokenSubscription=new uv(this),this.beforeStateQueue=new DR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Hi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ba.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await jc(this,{idToken:t}),s=await jn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Mn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(t);(!f||f===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return vt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=hR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Mn(this.app))return Promise.reject(Fi(this));const n=t?Ie(t):null;return n&&vt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&vt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Fi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Mn(this.app)?Promise.reject(Fi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await OR(this),n=new MR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ls("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await RR(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Hi(t)||this._popupRedirectResolver;vt(n,this,"argument-error"),this.redirectPersistenceManager=await Ba.create(this,[Hi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(vt(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,o);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return vt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=wE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&lR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function js(r){return Ie(r)}class uv{constructor(t){this.auth=t,this.observer=null,this.addObserver=Rb(n=>this.observer=n)}get next(){return vt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kR(r){oh=r}function RE(r){return oh.loadJS(r)}function PR(){return oh.recaptchaEnterpriseScript}function xR(){return oh.gapiScript}function UR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class LR{constructor(){this.enterprise=new zR}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class zR{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const jR="recaptcha-enterprise",IE="NO_RECAPTCHA";class BR{constructor(t){this.type=jR,this.auth=js(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{_R(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new yR(g);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(g=>{m(g)})})}function o(u,f,m){const g=window.grecaptcha;rv(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(y=>{f(y)}).catch(()=>{f(IE)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new LR().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&rv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=PR();g.length!==0&&(g+=m),RE(g).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function cv(r,t,n,s=!1,o=!1){const u=new BR(r);let f;if(o)f=IE;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const g=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const g=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function nm(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await cv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await cv(r,t,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(r,t){const n=zs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(kr(u,t??{}))return o;qn(o,"already-initialized")}return n.initialize({options:t})}function HR(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Hi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function FR(r,t,n){const s=js(r);vt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=CE(t),{host:f,port:m}=GR(t),g=m===null?"":`:${m}`,y={url:`${u}//${f}${g}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){vt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),vt(kr(y,s.config.emulator)&&kr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Ll(f)?(OT(`${u}//${f}${g}`),NT("Auth",!0)):KR()}function CE(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function GR(r){const t=CE(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:hv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:hv(f)}}}function hv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function KR(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return qi("not implemented")}_getIdTokenResponse(t){return qi("not implemented")}_linkToIdToken(t,n){return qi("not implemented")}_getReauthenticationResolver(t){return qi("not implemented")}}async function QR(r,t){return qr(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(r,t){return Bl(r,"POST","/v1/accounts:signInWithPassword",Br(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(r,t){return Bl(r,"POST","/v1/accounts:signInWithEmailLink",Br(r,t))}async function $R(r,t){return Bl(r,"POST","/v1/accounts:signInWithEmailLink",Br(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends km{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Dl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Dl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nm(t,n,"signInWithPassword",YR);case"emailLink":return XR(t,{email:this._email,oobCode:this._password});default:qn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nm(t,s,"signUpPassword",QR);case"emailLink":return $R(t,{idToken:n,email:this._email,oobCode:this._password});default:qn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(r,t){return Bl(r,"POST","/v1/accounts:signInWithIdp",Br(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="http://localhost";class ks extends km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ks(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Dm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new ks(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return qa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,qa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,qa(t,n)}buildRequest(){const t={requestUri:ZR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=zl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WR(r){const t=ml(pl(r)).link,n=t?ml(pl(t)).deep_link_id:null,s=ml(pl(r)).deep_link_id;return(s?ml(pl(s)).link:null)||s||n||t||r}class Pm{constructor(t){var n,s,o,u,f,m;const g=ml(pl(t)),y=(n=g.apiKey)!==null&&n!==void 0?n:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,b=JR((o=g.mode)!==null&&o!==void 0?o:null);vt(y&&E&&b,"argument-error"),this.apiKey=y,this.operation=b,this.code=E,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=g.lang)!==null&&f!==void 0?f:null,this.tenantId=(m=g.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const n=WR(t);try{return new Pm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.providerId=Ja.PROVIDER_ID}static credential(t,n){return Dl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=Pm.parseLink(n);return vt(s,"argument-error"),Dl._fromEmailAndCode(t,s.code,s.tenantId)}}Ja.PROVIDER_ID="password";Ja.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ja.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends DE{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ql{constructor(){super("facebook.com")}static credential(t){return ks._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return wr.credentialFromTaggedObject(t)}static credentialFromError(t){return wr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return wr.credential(t.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ks._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rr.credentialFromTaggedObject(t)}static credentialFromError(t){return Rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Rr.credential(n,s)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends ql{constructor(){super("github.com")}static credential(t){return ks._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ir.credential(t.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ql{constructor(){super("twitter.com")}static credential(t,n){return ks._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Cr.credentialFromTaggedObject(t)}static credentialFromError(t){return Cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Cr.credential(n,s)}catch{return null}}}Cr.TWITTER_SIGN_IN_METHOD="twitter.com";Cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(r,t){return Bl(r,"POST","/v1/accounts:signUp",Br(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await jn._fromIdTokenResponse(t,s,o),f=fv(s);return new Ps({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=fv(s);return new Ps({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function fv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends Hn{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,qc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new qc(t,n,s,o)}}function OE(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?qc._fromErrorAndOperation(r,u,t,s):u})}async function eI(r,t,n=!1){const s=await Cl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Ps._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(r,t,n=!1){const{auth:s}=r;if(Mn(s.app))return Promise.reject(Fi(s));const o="reauthenticate";try{const u=await Cl(r,OE(s,o,t,r),n);vt(u.idToken,s,"internal-error");const f=Mm(u.idToken);vt(f,s,"internal-error");const{sub:m}=f;return vt(r.uid===m,s,"user-mismatch"),Ps._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&qn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(r,t,n=!1){if(Mn(r.app))return Promise.reject(Fi(r));const s="signIn",o=await OE(r,s,t),u=await Ps._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function iI(r,t){return NE(js(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ME(r){const t=js(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function rI(r,t,n){if(Mn(r.app))return Promise.reject(Fi(r));const s=js(r),f=await nm(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&ME(r),g}),m=await Ps._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function sI(r,t,n){return Mn(r.app)?Promise.reject(Fi(r)):iI(Ie(r),Ja.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ME(r),s})}function aI(r,t,n,s){return Ie(r).onIdTokenChanged(t,n,s)}function oI(r,t,n){return Ie(r).beforeAuthStateChanged(t,n)}function lI(r,t,n,s){return Ie(r).onAuthStateChanged(t,n,s)}function uI(r){return Ie(r).signOut()}const Hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hc,"1"),this.storage.removeItem(Hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=1e3,hI=10;class kE extends VE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,g)=>{this.notifyListeners(f,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);CR()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,hI):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},cI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}kE.type="LOCAL";const fI=kE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE extends VE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}PE.type="SESSION";const xE=PE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new lh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),g=await dI(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,g)=>{const y=xm("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(b){const D=b;if(D.data.eventId===y)switch(D.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(D.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(){return window}function pI(r){ui().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){return typeof ui().WorkerGlobalScope<"u"&&typeof ui().importScripts=="function"}async function gI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function _I(){return UE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="firebaseLocalStorageDb",vI=1,Fc="firebaseLocalStorage",zE="fbase_key";class Hl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uh(r,t){return r.transaction([Fc],t?"readwrite":"readonly").objectStore(Fc)}function TI(){const r=indexedDB.deleteDatabase(LE);return new Hl(r).toPromise()}function im(){const r=indexedDB.open(LE,vI);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Fc,{keyPath:zE})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Fc)?t(s):(s.close(),await TI(),t(await im()))})})}async function dv(r,t,n){const s=uh(r,!0).put({[zE]:t,value:n});return new Hl(s).toPromise()}async function EI(r,t){const n=uh(r,!1).get(t),s=await new Hl(n).toPromise();return s===void 0?null:s.value}function mv(r,t){const n=uh(r,!0).delete(t);return new Hl(n).toPromise()}const AI=800,SI=3;class jE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await im(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>SI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lh._getInstance(_I()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await gI(),!this.activeServiceWorker)return;this.sender=new mI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||yI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await im();return await dv(t,Hc,"1"),await mv(t,Hc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>dv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>EI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>mv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=uh(o,!1).getAll();return new Hl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jE.type="LOCAL";const bI=jE;new jl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(r,t){return t?Hi(t):(vt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends km{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return qa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return qa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return qa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function RI(r){return NE(r.auth,new Um(r),r.bypassAuthState)}function II(r){const{auth:t,user:n}=r;return vt(n,t,"internal-error"),nI(n,new Um(r),r.bypassAuthState)}async function CI(r){const{auth:t,user:n}=r;return vt(n,t,"internal-error"),eI(n,new Um(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return RI;case"linkViaPopup":case"linkViaRedirect":return CI;case"reauthViaPopup":case"reauthViaRedirect":return II;default:qn(this.auth,"internal-error")}}resolve(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=new jl(2e3,1e4);class za extends BE{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,za.currentPopupAction&&za.currentPopupAction.cancel(),za.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return vt(t,this.auth,"internal-error"),t}async onExecution(){Ki(this.filter.length===1,"Popup operations only handle one event");const t=xm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(li(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(li(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,za.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(li(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,DI.get())};t()}}za.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="pendingRedirect",Ic=new Map;class NI extends BE{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Ic.get(this.auth._key());if(!t){try{const s=await MI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Ic.set(this.auth._key(),t)}return this.bypassAuthState||Ic.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MI(r,t){const n=PI(t),s=kI(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function VI(r,t){Ic.set(r._key(),t)}function kI(r){return Hi(r._redirectPersistence)}function PI(r){return Rc(OI,r.config.apiKey,r.name)}async function xI(r,t,n=!1){if(Mn(r.app))return Promise.reject(Fi(r));const s=js(r),o=wI(s,t),f=await new NI(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=10*60*1e3;class LI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!zI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!qE(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(li(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=UI&&this.cachedEventUids.clear(),this.cachedEventUids.has(pv(t))}saveEventToCache(t){this.cachedEventUids.add(pv(t)),this.lastProcessedEventTime=Date.now()}}function pv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function qE({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function zI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qE(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(r,t={}){return qr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qI=/^https?/;async function HI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await jI(r);for(const n of t)try{if(FI(n))return}catch{}qn(r,"unauthorized-domain")}function FI(r){const t=tm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!qI.test(n))return!1;if(BI.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=new jl(3e4,6e4);function gv(){const r=ui().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function KI(r){return new Promise((t,n)=>{var s,o,u;function f(){gv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gv(),n(li(r,"network-request-failed"))},timeout:GI.get()})}if(!((o=(s=ui().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=ui().gapi)===null||u===void 0)&&u.load)f();else{const m=UR("iframefcb");return ui()[m]=()=>{gapi.load?f():n(li(r,"network-request-failed"))},RE(`${xR()}?onload=${m}`).catch(g=>n(g))}}).catch(t=>{throw Cc=null,t})}let Cc=null;function QI(r){return Cc=Cc||KI(r),Cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new jl(5e3,15e3),XI="__/auth/iframe",$I="emulator/auth/iframe",ZI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WI(r){const t=r.config;vt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?Nm(t,$I):`https://${r.config.authDomain}/${XI}`,s={apiKey:t.apiKey,appName:r.name,v:Za},o=JI.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${zl(s).slice(1)}`}async function tC(r){const t=await QI(r),n=ui().gapi;return vt(n,r,"internal-error"),t.open({where:document.body,url:WI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZI,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=li(r,"network-request-failed"),m=ui().setTimeout(()=>{u(f)},YI.get());function g(){ui().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nC=500,iC=600,rC="_blank",sC="http://localhost";class yv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aC(r,t,n,s=nC,o=iC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},eC),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Xe().toLowerCase();n&&(m=vE(y)?rC:n),yE(y)&&(t=t||sC,g.scrollbars="yes");const E=Object.entries(g).reduce((D,[B,X])=>`${D}${B}=${X},`,"");if(IR(y)&&m!=="_self")return oC(t||"",m),new yv(null);const b=window.open(t||"",m,E);vt(b,r,"popup-blocked");try{b.focus()}catch{}return new yv(b)}function oC(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="__/auth/handler",uC="emulator/auth/handler",cC=encodeURIComponent("fac");async function _v(r,t,n,s,o,u){vt(r.config.authDomain,r,"auth-domain-config-required"),vt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Za,eventId:o};if(t instanceof DE){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",wb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,b]of Object.entries({}))f[E]=b}if(t instanceof ql){const E=t.getScopes().filter(b=>b!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const g=await r._getAppCheckToken(),y=g?`#${cC}=${encodeURIComponent(g)}`:"";return`${hC(r)}?${zl(m).slice(1)}${y}`}function hC({config:r}){return r.emulator?Nm(r,uC):`https://${r.authDomain}/${lC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="webStorageSupport";class fC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xE,this._completeRedirectFn=xI,this._overrideRedirectResult=VI}async _openPopup(t,n,s,o){var u;Ki((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await _v(t,n,s,tm(),o);return aC(t,f,xm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await _v(t,n,s,tm(),o);return pI(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Ki(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await tC(t),s=new LI(t);return n.register("authEvent",o=>(vt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Hd,{type:Hd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Hd];f!==void 0&&n(!!f),qn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return bE()||_E()||Vm()}}const dC=fC;var vv="@firebase/auth",Tv="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){vt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gC(r){di(new Bn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;vt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wE(r)},y=new VR(s,o,u,g);return HR(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),di(new Bn("auth-internal",t=>{const n=js(t.getProvider("auth").getImmediate());return(s=>new mC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(vv,Tv,pC(r)),Vn(vv,Tv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=5*60,_C=DT("authIdTokenMaxAge")||yC;let Ev=null;const vC=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>_C)return;const o=n==null?void 0:n.token;Ev!==o&&(Ev=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function TC(r=Sm()){const t=zs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=qR(r,{popupRedirectResolver:dC,persistence:[bI,fI,xE]}),s=DT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=vC(u.toString());oI(n,f,()=>f(n.currentUser)),aI(n,m=>f(m))}}const o=IT("auth");return o&&FR(n,`http://${o}`),n}function EC(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}kR({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=li("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",EC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gC("Browser");var Av=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,HE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,S){function w(){}w.prototype=S.prototype,C.D=S.prototype,C.prototype=new w,C.prototype.constructor=C,C.C=function(N,V,P){for(var I=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)I[_e-2]=arguments[_e];return S.prototype[V].apply(N,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,S,w){w||(w=0);var N=Array(16);if(typeof S=="string")for(var V=0;16>V;++V)N[V]=S.charCodeAt(w++)|S.charCodeAt(w++)<<8|S.charCodeAt(w++)<<16|S.charCodeAt(w++)<<24;else for(V=0;16>V;++V)N[V]=S[w++]|S[w++]<<8|S[w++]<<16|S[w++]<<24;S=C.g[0],w=C.g[1],V=C.g[2];var P=C.g[3],I=S+(P^w&(V^P))+N[0]+3614090360&4294967295;S=w+(I<<7&4294967295|I>>>25),I=P+(V^S&(w^V))+N[1]+3905402710&4294967295,P=S+(I<<12&4294967295|I>>>20),I=V+(w^P&(S^w))+N[2]+606105819&4294967295,V=P+(I<<17&4294967295|I>>>15),I=w+(S^V&(P^S))+N[3]+3250441966&4294967295,w=V+(I<<22&4294967295|I>>>10),I=S+(P^w&(V^P))+N[4]+4118548399&4294967295,S=w+(I<<7&4294967295|I>>>25),I=P+(V^S&(w^V))+N[5]+1200080426&4294967295,P=S+(I<<12&4294967295|I>>>20),I=V+(w^P&(S^w))+N[6]+2821735955&4294967295,V=P+(I<<17&4294967295|I>>>15),I=w+(S^V&(P^S))+N[7]+4249261313&4294967295,w=V+(I<<22&4294967295|I>>>10),I=S+(P^w&(V^P))+N[8]+1770035416&4294967295,S=w+(I<<7&4294967295|I>>>25),I=P+(V^S&(w^V))+N[9]+2336552879&4294967295,P=S+(I<<12&4294967295|I>>>20),I=V+(w^P&(S^w))+N[10]+4294925233&4294967295,V=P+(I<<17&4294967295|I>>>15),I=w+(S^V&(P^S))+N[11]+2304563134&4294967295,w=V+(I<<22&4294967295|I>>>10),I=S+(P^w&(V^P))+N[12]+1804603682&4294967295,S=w+(I<<7&4294967295|I>>>25),I=P+(V^S&(w^V))+N[13]+4254626195&4294967295,P=S+(I<<12&4294967295|I>>>20),I=V+(w^P&(S^w))+N[14]+2792965006&4294967295,V=P+(I<<17&4294967295|I>>>15),I=w+(S^V&(P^S))+N[15]+1236535329&4294967295,w=V+(I<<22&4294967295|I>>>10),I=S+(V^P&(w^V))+N[1]+4129170786&4294967295,S=w+(I<<5&4294967295|I>>>27),I=P+(w^V&(S^w))+N[6]+3225465664&4294967295,P=S+(I<<9&4294967295|I>>>23),I=V+(S^w&(P^S))+N[11]+643717713&4294967295,V=P+(I<<14&4294967295|I>>>18),I=w+(P^S&(V^P))+N[0]+3921069994&4294967295,w=V+(I<<20&4294967295|I>>>12),I=S+(V^P&(w^V))+N[5]+3593408605&4294967295,S=w+(I<<5&4294967295|I>>>27),I=P+(w^V&(S^w))+N[10]+38016083&4294967295,P=S+(I<<9&4294967295|I>>>23),I=V+(S^w&(P^S))+N[15]+3634488961&4294967295,V=P+(I<<14&4294967295|I>>>18),I=w+(P^S&(V^P))+N[4]+3889429448&4294967295,w=V+(I<<20&4294967295|I>>>12),I=S+(V^P&(w^V))+N[9]+568446438&4294967295,S=w+(I<<5&4294967295|I>>>27),I=P+(w^V&(S^w))+N[14]+3275163606&4294967295,P=S+(I<<9&4294967295|I>>>23),I=V+(S^w&(P^S))+N[3]+4107603335&4294967295,V=P+(I<<14&4294967295|I>>>18),I=w+(P^S&(V^P))+N[8]+1163531501&4294967295,w=V+(I<<20&4294967295|I>>>12),I=S+(V^P&(w^V))+N[13]+2850285829&4294967295,S=w+(I<<5&4294967295|I>>>27),I=P+(w^V&(S^w))+N[2]+4243563512&4294967295,P=S+(I<<9&4294967295|I>>>23),I=V+(S^w&(P^S))+N[7]+1735328473&4294967295,V=P+(I<<14&4294967295|I>>>18),I=w+(P^S&(V^P))+N[12]+2368359562&4294967295,w=V+(I<<20&4294967295|I>>>12),I=S+(w^V^P)+N[5]+4294588738&4294967295,S=w+(I<<4&4294967295|I>>>28),I=P+(S^w^V)+N[8]+2272392833&4294967295,P=S+(I<<11&4294967295|I>>>21),I=V+(P^S^w)+N[11]+1839030562&4294967295,V=P+(I<<16&4294967295|I>>>16),I=w+(V^P^S)+N[14]+4259657740&4294967295,w=V+(I<<23&4294967295|I>>>9),I=S+(w^V^P)+N[1]+2763975236&4294967295,S=w+(I<<4&4294967295|I>>>28),I=P+(S^w^V)+N[4]+1272893353&4294967295,P=S+(I<<11&4294967295|I>>>21),I=V+(P^S^w)+N[7]+4139469664&4294967295,V=P+(I<<16&4294967295|I>>>16),I=w+(V^P^S)+N[10]+3200236656&4294967295,w=V+(I<<23&4294967295|I>>>9),I=S+(w^V^P)+N[13]+681279174&4294967295,S=w+(I<<4&4294967295|I>>>28),I=P+(S^w^V)+N[0]+3936430074&4294967295,P=S+(I<<11&4294967295|I>>>21),I=V+(P^S^w)+N[3]+3572445317&4294967295,V=P+(I<<16&4294967295|I>>>16),I=w+(V^P^S)+N[6]+76029189&4294967295,w=V+(I<<23&4294967295|I>>>9),I=S+(w^V^P)+N[9]+3654602809&4294967295,S=w+(I<<4&4294967295|I>>>28),I=P+(S^w^V)+N[12]+3873151461&4294967295,P=S+(I<<11&4294967295|I>>>21),I=V+(P^S^w)+N[15]+530742520&4294967295,V=P+(I<<16&4294967295|I>>>16),I=w+(V^P^S)+N[2]+3299628645&4294967295,w=V+(I<<23&4294967295|I>>>9),I=S+(V^(w|~P))+N[0]+4096336452&4294967295,S=w+(I<<6&4294967295|I>>>26),I=P+(w^(S|~V))+N[7]+1126891415&4294967295,P=S+(I<<10&4294967295|I>>>22),I=V+(S^(P|~w))+N[14]+2878612391&4294967295,V=P+(I<<15&4294967295|I>>>17),I=w+(P^(V|~S))+N[5]+4237533241&4294967295,w=V+(I<<21&4294967295|I>>>11),I=S+(V^(w|~P))+N[12]+1700485571&4294967295,S=w+(I<<6&4294967295|I>>>26),I=P+(w^(S|~V))+N[3]+2399980690&4294967295,P=S+(I<<10&4294967295|I>>>22),I=V+(S^(P|~w))+N[10]+4293915773&4294967295,V=P+(I<<15&4294967295|I>>>17),I=w+(P^(V|~S))+N[1]+2240044497&4294967295,w=V+(I<<21&4294967295|I>>>11),I=S+(V^(w|~P))+N[8]+1873313359&4294967295,S=w+(I<<6&4294967295|I>>>26),I=P+(w^(S|~V))+N[15]+4264355552&4294967295,P=S+(I<<10&4294967295|I>>>22),I=V+(S^(P|~w))+N[6]+2734768916&4294967295,V=P+(I<<15&4294967295|I>>>17),I=w+(P^(V|~S))+N[13]+1309151649&4294967295,w=V+(I<<21&4294967295|I>>>11),I=S+(V^(w|~P))+N[4]+4149444226&4294967295,S=w+(I<<6&4294967295|I>>>26),I=P+(w^(S|~V))+N[11]+3174756917&4294967295,P=S+(I<<10&4294967295|I>>>22),I=V+(S^(P|~w))+N[2]+718787259&4294967295,V=P+(I<<15&4294967295|I>>>17),I=w+(P^(V|~S))+N[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(V+(I<<21&4294967295|I>>>11))&4294967295,C.g[2]=C.g[2]+V&4294967295,C.g[3]=C.g[3]+P&4294967295}s.prototype.u=function(C,S){S===void 0&&(S=C.length);for(var w=S-this.blockSize,N=this.B,V=this.h,P=0;P<S;){if(V==0)for(;P<=w;)o(this,C,P),P+=this.blockSize;if(typeof C=="string"){for(;P<S;)if(N[V++]=C.charCodeAt(P++),V==this.blockSize){o(this,N),V=0;break}}else for(;P<S;)if(N[V++]=C[P++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=S},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;var w=8*this.o;for(S=C.length-8;S<C.length;++S)C[S]=w&255,w/=256;for(this.u(C),C=Array(16),S=w=0;4>S;++S)for(var N=0;32>N;N+=8)C[w++]=this.g[S]>>>N&255;return C};function u(C,S){var w=m;return Object.prototype.hasOwnProperty.call(w,C)?w[C]:w[C]=S(C)}function f(C,S){this.h=S;for(var w=[],N=!0,V=C.length-1;0<=V;V--){var P=C[V]|0;N&&P==S||(w[V]=P,N=!1)}this.g=w}var m={};function g(C){return-128<=C&&128>C?u(C,function(S){return new f([S|0],0>S?-1:0)}):new f([C|0],0>C?-1:0)}function y(C){if(isNaN(C)||!isFinite(C))return b;if(0>C)return Z(y(-C));for(var S=[],w=1,N=0;C>=w;N++)S[N]=C/w|0,w*=4294967296;return new f(S,0)}function E(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return Z(E(C.substring(1),S));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=y(Math.pow(S,8)),N=b,V=0;V<C.length;V+=8){var P=Math.min(8,C.length-V),I=parseInt(C.substring(V,V+P),S);8>P?(P=y(Math.pow(S,P)),N=N.j(P).add(y(I))):(N=N.j(w),N=N.add(y(I)))}return N}var b=g(0),D=g(1),B=g(16777216);r=f.prototype,r.m=function(){if(st(this))return-Z(this).m();for(var C=0,S=1,w=0;w<this.g.length;w++){var N=this.i(w);C+=(0<=N?N:4294967296+N)*S,S*=4294967296}return C},r.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(X(this))return"0";if(st(this))return"-"+Z(this).toString(C);for(var S=y(Math.pow(C,6)),w=this,N="";;){var V=rt(w,S).g;w=ot(w,V.j(S));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(C);if(w=V,X(w))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},r.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function X(C){if(C.h!=0)return!1;for(var S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function st(C){return C.h==-1}r.l=function(C){return C=ot(this,C),st(C)?-1:X(C)?0:1};function Z(C){for(var S=C.g.length,w=[],N=0;N<S;N++)w[N]=~C.g[N];return new f(w,~C.h).add(D)}r.abs=function(){return st(this)?Z(this):this},r.add=function(C){for(var S=Math.max(this.g.length,C.g.length),w=[],N=0,V=0;V<=S;V++){var P=N+(this.i(V)&65535)+(C.i(V)&65535),I=(P>>>16)+(this.i(V)>>>16)+(C.i(V)>>>16);N=I>>>16,P&=65535,I&=65535,w[V]=I<<16|P}return new f(w,w[w.length-1]&-2147483648?-1:0)};function ot(C,S){return C.add(Z(S))}r.j=function(C){if(X(this)||X(C))return b;if(st(this))return st(C)?Z(this).j(Z(C)):Z(Z(this).j(C));if(st(C))return Z(this.j(Z(C)));if(0>this.l(B)&&0>C.l(B))return y(this.m()*C.m());for(var S=this.g.length+C.g.length,w=[],N=0;N<2*S;N++)w[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<C.g.length;V++){var P=this.i(N)>>>16,I=this.i(N)&65535,_e=C.i(V)>>>16,te=C.i(V)&65535;w[2*N+2*V]+=I*te,tt(w,2*N+2*V),w[2*N+2*V+1]+=P*te,tt(w,2*N+2*V+1),w[2*N+2*V+1]+=I*_e,tt(w,2*N+2*V+1),w[2*N+2*V+2]+=P*_e,tt(w,2*N+2*V+2)}for(N=0;N<S;N++)w[N]=w[2*N+1]<<16|w[2*N];for(N=S;N<2*S;N++)w[N]=0;return new f(w,0)};function tt(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function et(C,S){this.g=C,this.h=S}function rt(C,S){if(X(S))throw Error("division by zero");if(X(C))return new et(b,b);if(st(C))return S=rt(Z(C),S),new et(Z(S.g),Z(S.h));if(st(S))return S=rt(C,Z(S)),new et(Z(S.g),S.h);if(30<C.g.length){if(st(C)||st(S))throw Error("slowDivide_ only works with positive integers.");for(var w=D,N=S;0>=N.l(C);)w=W(w),N=W(N);var V=ft(w,1),P=ft(N,1);for(N=ft(N,2),w=ft(w,2);!X(N);){var I=P.add(N);0>=I.l(C)&&(V=V.add(w),P=I),N=ft(N,1),w=ft(w,1)}return S=ot(C,V.j(S)),new et(V,S)}for(V=b;0<=C.l(S);){for(w=Math.max(1,Math.floor(C.m()/S.m())),N=Math.ceil(Math.log(w)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=y(w),I=P.j(S);st(I)||0<I.l(C);)w-=N,P=y(w),I=P.j(S);X(P)&&(P=D),V=V.add(P),C=ot(C,I)}return new et(V,C)}r.A=function(C){return rt(this,C).h},r.and=function(C){for(var S=Math.max(this.g.length,C.g.length),w=[],N=0;N<S;N++)w[N]=this.i(N)&C.i(N);return new f(w,this.h&C.h)},r.or=function(C){for(var S=Math.max(this.g.length,C.g.length),w=[],N=0;N<S;N++)w[N]=this.i(N)|C.i(N);return new f(w,this.h|C.h)},r.xor=function(C){for(var S=Math.max(this.g.length,C.g.length),w=[],N=0;N<S;N++)w[N]=this.i(N)^C.i(N);return new f(w,this.h^C.h)};function W(C){for(var S=C.g.length+1,w=[],N=0;N<S;N++)w[N]=C.i(N)<<1|C.i(N-1)>>>31;return new f(w,C.h)}function ft(C,S){var w=S>>5;S%=32;for(var N=C.g.length-w,V=[],P=0;P<N;P++)V[P]=0<S?C.i(P+w)>>>S|C.i(P+w+1)<<32-S:C.i(P+w);return new f(V,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,HE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Mr=f}).apply(typeof Av<"u"?Av:typeof self<"u"?self:typeof window<"u"?window:{});var vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FE,gl,GE,Dc,rm,KE,QE,YE;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,p,_){return c==Array.prototype||c==Object.prototype||(c[p]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof vc=="object"&&vc];for(var p=0;p<c.length;++p){var _=c[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,p){if(p)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var x=c[A];if(!(x in _))break t;_=_[x]}c=c[c.length-1],A=_[c],p=p(A),p!=A&&p!=null&&t(_,c,{configurable:!0,writable:!0,value:p})}}function u(c,p){c instanceof String&&(c+="");var _=0,A=!1,x={next:function(){if(!A&&_<c.length){var q=_++;return{value:p(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}o("Array.prototype.values",function(c){return c||function(){return u(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function g(c){var p=typeof c;return p=p!="object"?p:c?Array.isArray(c)?"array":p:"null",p=="array"||p=="object"&&typeof c.length=="number"}function y(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function E(c,p,_){return c.call.apply(c.bind,arguments)}function b(c,p,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,A),c.apply(p,x)}}return function(){return c.apply(p,arguments)}}function D(c,p,_){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:b,D.apply(null,arguments)}function B(c,p){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function X(c,p){function _(){}_.prototype=p.prototype,c.aa=p.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,x,q){for(var at=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)at[xt-2]=arguments[xt];return p.prototype[x].apply(A,at)}}function st(c){const p=c.length;if(0<p){const _=Array(p);for(let A=0;A<p;A++)_[A]=c[A];return _}return[]}function Z(c,p){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(g(A)){const x=c.length||0,q=A.length||0;c.length=x+q;for(let at=0;at<q;at++)c[x+at]=A[at]}else c.push(A)}}class ot{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function tt(c){return/^[\s\xa0]*$/.test(c)}function et(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function rt(c){return rt[" "](c),c}rt[" "]=function(){};var W=et().indexOf("Gecko")!=-1&&!(et().toLowerCase().indexOf("webkit")!=-1&&et().indexOf("Edge")==-1)&&!(et().indexOf("Trident")!=-1||et().indexOf("MSIE")!=-1)&&et().indexOf("Edge")==-1;function ft(c,p,_){for(const A in c)p.call(_,c[A],A,c)}function C(c,p){for(const _ in c)p.call(void 0,c[_],_,c)}function S(c){const p={};for(const _ in c)p[_]=c[_];return p}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,p){let _,A;for(let x=1;x<arguments.length;x++){A=arguments[x];for(_ in A)c[_]=A[_];for(let q=0;q<w.length;q++)_=w[q],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function V(c){var p=1;c=c.split(":");const _=[];for(;0<p&&c.length;)_.push(c.shift()),p--;return c.length&&_.push(c.join(":")),_}function P(c){m.setTimeout(()=>{throw c},0)}function I(){var c=At;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class _e{constructor(){this.h=this.g=null}add(p,_){const A=te.get();A.set(p,_),this.h?this.h.next=A:this.g=A,this.h=A}}var te=new ot(()=>new F,c=>c.reset());class F{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let H,nt=!1,At=new _e,O=()=>{const c=m.Promise.resolve(void 0);H=()=>{c.then(Q)}};var Q=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(_){P(_)}var p=te;p.j(c),100>p.h&&(p.h++,c.next=p.g,p.g=c)}nt=!1};function ut(){this.s=this.s,this.C=this.C}ut.prototype.s=!1,ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function it(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var mt=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,p),m.removeEventListener("test",_,p)}catch{}return c}();function Ot(c,p){if(it.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget){if(W){t:{try{rt(p.nodeName);var x=!0;break t}catch{}x=!1}x||(p=null)}}else _=="mouseover"?p=c.fromElement:_=="mouseout"&&(p=c.toElement);this.relatedTarget=p,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:St[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ot.aa.h.call(this)}}X(Ot,it);var St={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ce="closure_listenable_"+(1e6*Math.random()|0),Jt=0;function Fn(c,p,_,A,x){this.listener=c,this.proxy=null,this.src=p,this.type=_,this.capture=!!A,this.ha=x,this.key=++Jt,this.da=this.fa=!1}function Xi(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function gi(c){this.src=c,this.g={},this.h=0}gi.prototype.add=function(c,p,_,A,x){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var at=Kr(c,p,A,x);return-1<at?(p=c[at],_||(p.fa=!1)):(p=new Fn(p,this.src,q,!!A,x),p.fa=_,c.push(p)),p};function Gr(c,p){var _=p.type;if(_ in c.g){var A=c.g[_],x=Array.prototype.indexOf.call(A,p,void 0),q;(q=0<=x)&&Array.prototype.splice.call(A,x,1),q&&(Xi(p),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Kr(c,p,_,A){for(var x=0;x<c.length;++x){var q=c[x];if(!q.da&&q.listener==p&&q.capture==!!_&&q.ha==A)return x}return-1}var Qr="closure_lm_"+(1e6*Math.random()|0),io={};function Yl(c,p,_,A,x){if(Array.isArray(p)){for(var q=0;q<p.length;q++)Yl(c,p[q],_,A,x);return null}return _=Xl(_),c&&c[Ce]?c.K(p,_,y(A)?!!A.capture:!1,x):vn(c,p,_,!1,A,x)}function vn(c,p,_,A,x,q){if(!p)throw Error("Invalid event type");var at=y(x)?!!x.capture:!!x,xt=Fs(c);if(xt||(c[Qr]=xt=new gi(c)),_=xt.add(p,_,A,at,q),_.proxy)return _;if(A=Ih(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)mt||(x=at),x===void 0&&(x=!1),c.addEventListener(p.toString(),A,x);else if(c.attachEvent)c.attachEvent(Yr(p.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ih(){function c(_){return p.call(c.src,c.listener,_)}const p=Ch;return c}function ro(c,p,_,A,x){if(Array.isArray(p))for(var q=0;q<p.length;q++)ro(c,p[q],_,A,x);else A=y(A)?!!A.capture:!!A,_=Xl(_),c&&c[Ce]?(c=c.i,p=String(p).toString(),p in c.g&&(q=c.g[p],_=Kr(q,_,A,x),-1<_&&(Xi(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete c.g[p],c.h--)))):c&&(c=Fs(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Kr(p,_,A,x)),(_=-1<c?p[c]:null)&&Hs(_))}function Hs(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[Ce])Gr(p.i,c);else{var _=c.type,A=c.proxy;p.removeEventListener?p.removeEventListener(_,A,c.capture):p.detachEvent?p.detachEvent(Yr(_),A):p.addListener&&p.removeListener&&p.removeListener(A),(_=Fs(p))?(Gr(_,c),_.h==0&&(_.src=null,p[Qr]=null)):Xi(c)}}}function Yr(c){return c in io?io[c]:io[c]="on"+c}function Ch(c,p){if(c.da)c=!0;else{p=new Ot(p,this);var _=c.listener,A=c.ha||c.src;c.fa&&Hs(c),c=_.call(A,p)}return c}function Fs(c){return c=c[Qr],c instanceof gi?c:null}var so="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xl(c){return typeof c=="function"?c:(c[so]||(c[so]=function(p){return c.handleEvent(p)}),c[so])}function se(){ut.call(this),this.i=new gi(this),this.M=this,this.F=null}X(se,ut),se.prototype[Ce]=!0,se.prototype.removeEventListener=function(c,p,_,A){ro(this,c,p,_,A)};function Ft(c,p){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=p.type||p,typeof p=="string")p=new it(p,c);else if(p instanceof it)p.target=p.target||c;else{var x=p;p=new it(A,c),N(p,x)}if(x=!0,_)for(var q=_.length-1;0<=q;q--){var at=p.g=_[q];x=on(at,A,!0,p)&&x}if(at=p.g=c,x=on(at,A,!0,p)&&x,x=on(at,A,!1,p)&&x,_)for(q=0;q<_.length;q++)at=p.g=_[q],x=on(at,A,!1,p)&&x}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,p;for(p in c.g){for(var _=c.g[p],A=0;A<_.length;A++)Xi(_[A]);delete c.g[p],c.h--}}this.F=null},se.prototype.K=function(c,p,_,A){return this.i.add(String(c),p,!1,_,A)},se.prototype.L=function(c,p,_,A){return this.i.add(String(c),p,!0,_,A)};function on(c,p,_,A){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();for(var x=!0,q=0;q<p.length;++q){var at=p[q];if(at&&!at.da&&at.capture==_){var xt=at.listener,Te=at.ha||at.src;at.fa&&Gr(c.i,at),x=xt.call(Te,A)!==!1&&x}}return x&&!A.defaultPrevented}function He(c,p,_){if(typeof c=="function")_&&(c=D(c,_));else if(c&&typeof c.handleEvent=="function")c=D(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:m.setTimeout(c,p||0)}function $l(c){c.g=He(()=>{c.g=null,c.i&&(c.i=!1,$l(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Dh extends ut{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:$l(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(c){ut.call(this),this.h=c,this.g={}}X(Xr,ut);var $r=[];function Zr(c){ft(c.g,function(p,_){this.g.hasOwnProperty(_)&&Hs(p)},c),c.g={}}Xr.prototype.N=function(){Xr.aa.N.call(this),Zr(this)},Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var kn=m.JSON.stringify,Gs=m.JSON.parse,Jr=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function ao(){}ao.prototype.h=null;function oo(c){return c.h||(c.h=c.i())}function lo(){}var yi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _i(){it.call(this,"d")}X(_i,it);function uo(){it.call(this,"c")}X(uo,it);var Gn={},co=null;function $i(){return co=co||new se}Gn.La="serverreachability";function Ks(c){it.call(this,Gn.La,c)}X(Ks,it);function Zi(c){const p=$i();Ft(p,new Ks(p))}Gn.STAT_EVENT="statevent";function Zl(c,p){it.call(this,Gn.STAT_EVENT,c),this.stat=p}X(Zl,it);function ee(c){const p=$i();Ft(p,new Zl(p,c))}Gn.Ma="timingevent";function ve(c,p){it.call(this,Gn.Ma,c),this.size=p}X(ve,it);function de(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},p)}function Tn(){this.g=!0}Tn.prototype.xa=function(){this.g=!1};function ho(c,p,_,A,x,q){c.info(function(){if(c.g)if(q)for(var at="",xt=q.split("&"),Te=0;Te<xt.length;Te++){var Ut=xt[Te].split("=");if(1<Ut.length){var Oe=Ut[0];Ut=Ut[1];var Ee=Oe.split("_");at=2<=Ee.length&&Ee[1]=="type"?at+(Oe+"="+Ut+"&"):at+(Oe+"=redacted&")}}else at=null;else at=q;return"XMLHTTP REQ ("+A+") [attempt "+x+"]: "+p+`
`+_+`
`+at})}function Oh(c,p,_,A,x,q,at){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+x+"]: "+p+`
`+_+`
`+q+" "+at})}function Ji(c,p,_,A){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+Wr(c,_)+(A?" "+A:"")})}function Jl(c,p){c.info(function(){return"TIMEOUT: "+p})}Tn.prototype.info=function(){};function Wr(c,p){if(!c.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var x=A[1];if(Array.isArray(x)&&!(1>x.length)){var q=x[0];if(q!="noop"&&q!="stop"&&q!="close")for(var at=1;at<x.length;at++)x[at]=""}}}}return kn(_)}catch{return p}}var Wi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kn;function Qn(){}X(Qn,ao),Qn.prototype.g=function(){return new XMLHttpRequest},Qn.prototype.i=function(){return{}},Kn=new Qn;function $e(c,p,_,A){this.j=c,this.i=p,this.l=_,this.R=A||1,this.U=new Xr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}var fo={},Qs={};function Pn(c,p,_){c.L=1,c.v=rs(ln(p)),c.m=_,c.P=!0,Ti(c,null)}function Ti(c,p){c.F=Date.now(),ts(c),c.A=ln(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),vo(_.i,"t",A),c.C=0,_=c.j.J,c.h=new ue,c.g=mu(c.j,_?p:null,!c.m),0<c.O&&(c.M=new Dh(D(c.Y,c,c.g),c.O)),p=c.U,_=c.g,A=c.ca;var x="readystatechange";Array.isArray(x)||(x&&($r[0]=x.toString()),x=$r);for(var q=0;q<x.length;q++){var at=Yl(_,x[q],A||p.handleEvent,!1,p.h||p);if(!at)break;p.g[at.key]=at}p=c.H?S(c.H):{},c.m?(c.u||(c.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,p)):(c.u="GET",c.g.ea(c.A,c.u,null,p)),Zi(),ho(c.i,c.u,c.A,c.l,c.R,c.m)}$e.prototype.ca=function(c){c=c.target;const p=this.M;p&&bn(c)==3?p.j():this.Y(c)},$e.prototype.Y=function(c){try{if(c==this.g)t:{const Ee=bn(this.g);var p=this.g.Ba();const Ci=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||au(this.g)))){this.J||Ee!=4||p==7||(p==8||0>=Ci?Zi(3):Zi(2)),tr(this);var _=this.g.Z();this.X=_;e:if(Wl(this)){var A=au(this.g);c="";var x=A.length,q=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pe(this),Yn(this);var at="";break e}this.h.i=new m.TextDecoder}for(p=0;p<x;p++)this.h.h=!0,c+=this.h.i.decode(A[p],{stream:!(q&&p==x-1)});A.length=0,this.h.g+=c,this.C=0,at=this.h.g}else at=this.g.oa();if(this.o=_==200,Oh(this.i,this.u,this.A,this.l,this.R,Ee,_),this.o){if(this.T&&!this.K){e:{if(this.g){var xt,Te=this.g;if((xt=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tt(xt)){var Ut=xt;break e}}Ut=null}if(_=Ut)Ji(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,es(this,_);else{this.o=!1,this.s=3,ee(12),Pe(this),Yn(this);break t}}if(this.P){_=!0;let xe;for(;!this.J&&this.C<at.length;)if(xe=tu(this,at),xe==Qs){Ee==4&&(this.s=4,ee(14),_=!1),Ji(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==fo){this.s=4,ee(15),Ji(this.i,this.l,at,"[Invalid Chunk]"),_=!1;break}else Ji(this.i,this.l,xe,null),es(this,xe);if(Wl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||at.length!=0||this.h.h||(this.s=1,ee(16),_=!1),this.o=this.o&&_,!_)Ji(this.i,this.l,at,"[Invalid Chunked Response]"),Pe(this),Yn(this);else if(0<at.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+at.length),fs(Oe),Oe.M=!0,ee(11))}}else Ji(this.i,this.l,at,null),es(this,at);Ee==4&&Pe(this),this.o&&!this.J&&(Ee==4?hu(this.j,this):(this.o=!1,ts(this)))}else Ph(this.g),_==400&&0<at.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),Pe(this),Yn(this)}}}catch{}finally{}};function Wl(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function tu(c,p){var _=c.C,A=p.indexOf(`
`,_);return A==-1?Qs:(_=Number(p.substring(_,A)),isNaN(_)?fo:(A+=1,A+_>p.length?Qs:(p=p.slice(A,A+_),c.C=A+_,p)))}$e.prototype.cancel=function(){this.J=!0,Pe(this)};function ts(c){c.S=Date.now()+c.I,eu(c,c.I)}function eu(c,p){if(c.B!=null)throw Error("WatchDog timer not null");c.B=de(D(c.ba,c),p)}function tr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}$e.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Jl(this.i,this.A),this.L!=2&&(Zi(),ee(17)),Pe(this),this.s=2,Yn(this)):eu(this,this.S-c)};function Yn(c){c.j.G==0||c.J||hu(c.j,c)}function Pe(c){tr(c);var p=c.M;p&&typeof p.ma=="function"&&p.ma(),c.M=null,Zr(c.U),c.g&&(p=c.g,c.g=null,p.abort(),p.ma())}function es(c,p){try{var _=c.j;if(_.G!=0&&(_.g==c||mo(_.h,c))){if(!c.K&&mo(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(p)}catch{A=null}if(Array.isArray(A)&&A.length==3){var x=A;if(x[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)sa(_),ia(_);else break t;bo(_),ee(18)}}else _.za=x[1],0<_.za-_.T&&37500>x[2]&&_.F&&_.v==0&&!_.C&&(_.C=de(D(_.Za,_),6e3));if(1>=Xs(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Ii(_,11)}else if((c.K||_.g==c)&&sa(_),!tt(p))for(x=_.Da.g.parse(p),p=0;p<x.length;p++){let Ut=x[p];if(_.T=Ut[0],Ut=Ut[1],_.G==2)if(Ut[0]=="c"){_.K=Ut[1],_.ia=Ut[2];const Oe=Ut[3];Oe!=null&&(_.la=Oe,_.j.info("VER="+_.la));const Ee=Ut[4];Ee!=null&&(_.Aa=Ee,_.j.info("SVER="+_.Aa));const Ci=Ut[5];Ci!=null&&typeof Ci=="number"&&0<Ci&&(A=1.5*Ci,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const xe=c.g;if(xe){const ei=xe.g?xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ei){var q=A.h;q.g||ei.indexOf("spdy")==-1&&ei.indexOf("quic")==-1&&ei.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&($s(q,q.h),q.h=null))}if(A.D){const Ro=xe.g?xe.g.getResponseHeader("X-HTTP-Session-Id"):null;Ro&&(A.ya=Ro,Qt(A.I,A.D,Ro))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var at=c;if(A.qa=du(A,A.J?A.ia:null,A.W),at.K){Ze(A.h,at);var xt=at,Te=A.L;Te&&(xt.I=Te),xt.B&&(tr(xt),ts(xt)),A.g=at}else uu(A);0<_.i.length&&ra(_)}else Ut[0]!="stop"&&Ut[0]!="close"||Ii(_,7);else _.G==3&&(Ut[0]=="stop"||Ut[0]=="close"?Ut[0]=="stop"?Ii(_,7):Ao(_):Ut[0]!="noop"&&_.l&&_.l.ta(Ut),_.v=0)}}Zi(4)}catch{}}var nu=class{constructor(c,p){this.g=c,this.map=p}};function Ei(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ys(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Xs(c){return c.h?1:c.g?c.g.size:0}function mo(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function $s(c,p){c.g?c.g.add(p):c.h=p}function Ze(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Ei.prototype.cancel=function(){if(this.i=po(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function po(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const _ of c.g.values())p=p.concat(_.D);return p}return st(c.i)}function Nh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(g(c)){for(var p=[],_=c.length,A=0;A<_;A++)p.push(c[A]);return p}p=[],_=0;for(A in c)p[_++]=c[A];return p}function Zs(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(g(c)||typeof c=="string"){var p=[];c=c.length;for(var _=0;_<c;_++)p.push(_);return p}p=[],_=0;for(const A in c)p[_++]=A;return p}}}function go(c,p){if(c.forEach&&typeof c.forEach=="function")c.forEach(p,void 0);else if(g(c)||typeof c=="string")Array.prototype.forEach.call(c,p,void 0);else for(var _=Zs(c),A=Nh(c),x=A.length,q=0;q<x;q++)p.call(void 0,A[q],_&&_[q],c)}var ns=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mh(c,p){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),x=null;if(0<=A){var q=c[_].substring(0,A);x=c[_].substring(A+1)}else q=c[_];p(q,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function me(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof me){this.h=c.h,is(this,c.j),this.o=c.o,this.g=c.g,er(this,c.s),this.l=c.l;var p=c.i,_=new Si;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),Ai(this,_),this.m=c.m}else c&&(p=String(c).match(ns))?(this.h=!1,is(this,p[1]||"",!0),this.o=En(p[2]||""),this.g=En(p[3]||"",!0),er(this,p[4]),this.l=En(p[5]||"",!0),Ai(this,p[6]||"",!0),this.m=En(p[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}me.prototype.toString=function(){var c=[],p=this.j;p&&c.push(ss(p,yo,!0),":");var _=this.g;return(_||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ss(p,yo,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ss(_,_.charAt(0)=="/"?Vh:_o,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ss(_,Js)),c.join("")};function ln(c){return new me(c)}function is(c,p,_){c.j=_?En(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function er(c,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);c.s=p}else c.s=null}function Ai(c,p,_){p instanceof Si?(c.i=p,ru(c.i,c.h)):(_||(p=ss(p,kh)),c.i=new Si(p,c.h))}function Qt(c,p,_){c.i.set(p,_)}function rs(c){return Qt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function En(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ss(c,p,_){return typeof c=="string"?(c=encodeURI(c).replace(p,iu),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function iu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var yo=/[#\/\?@]/g,_o=/[#\?:]/g,Vh=/[#\?]/g,kh=/[#\?@]/g,Js=/#/g;function Si(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function An(c){c.g||(c.g=new Map,c.h=0,c.i&&Mh(c.i,function(p,_){c.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}r=Si.prototype,r.add=function(c,p){An(this),this.i=null,c=Xn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(p),this.h+=1,this};function bi(c,p){An(c),p=Xn(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function wi(c,p){return An(c),p=Xn(c,p),c.g.has(p)}r.forEach=function(c,p){An(this),this.g.forEach(function(_,A){_.forEach(function(x){c.call(p,x,A,this)},this)},this)},r.na=function(){An(this);const c=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let A=0;A<p.length;A++){const x=c[A];for(let q=0;q<x.length;q++)_.push(p[A])}return _},r.V=function(c){An(this);let p=[];if(typeof c=="string")wi(this,c)&&(p=p.concat(this.g.get(Xn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)p=p.concat(c[_])}return p},r.set=function(c,p){return An(this),this.i=null,c=Xn(this,c),wi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},r.get=function(c,p){return c?(c=this.V(c),0<c.length?String(c[0]):p):p};function vo(c,p,_){bi(c,p),0<_.length&&(c.i=null,c.g.set(Xn(c,p),st(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var A=p[_];const q=encodeURIComponent(String(A)),at=this.V(A);for(A=0;A<at.length;A++){var x=q;at[A]!==""&&(x+="="+encodeURIComponent(String(at[A]))),c.push(x)}}return this.i=c.join("&")};function Xn(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function ru(c,p){p&&!c.j&&(An(c),c.i=null,c.g.forEach(function(_,A){var x=A.toLowerCase();A!=x&&(bi(this,A),vo(this,x,_))},c)),c.j=p}function as(c,p){const _=new Tn;if(m.Image){const A=new Image;A.onload=B(Sn,_,"TestLoadImage: loaded",!0,p,A),A.onerror=B(Sn,_,"TestLoadImage: error",!1,p,A),A.onabort=B(Sn,_,"TestLoadImage: abort",!1,p,A),A.ontimeout=B(Sn,_,"TestLoadImage: timeout",!1,p,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else p(!1)}function xn(c,p){const _=new Tn,A=new AbortController,x=setTimeout(()=>{A.abort(),Sn(_,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(x),q.ok?Sn(_,"TestPingServer: ok",!0,p):Sn(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(x),Sn(_,"TestPingServer: error",!1,p)})}function Sn(c,p,_,A,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),A(_)}catch{}}function os(){this.g=new Jr}function $n(c,p,_){const A=_||"";try{go(c,function(x,q){let at=x;y(x)&&(at=kn(x)),p.push(A+q+"="+encodeURIComponent(at))})}catch(x){throw p.push(A+"type="+encodeURIComponent("_badmap")),x}}function nr(c){this.l=c.Ub||null,this.j=c.eb||!1}X(nr,ao),nr.prototype.g=function(){return new Ri(this.l,this.j)},nr.prototype.i=function(c){return function(){return c}}({});function Ri(c,p){se.call(this),this.D=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}X(Ri,se),r=Ri.prototype,r.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=p,this.readyState=1,Jn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(p.body=c),(this.D||m).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zn(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;To(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function To(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Zn(this):Jn(this),this.readyState==3&&To(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,Zn(this))},r.Qa=function(c){this.g&&(this.response=c,Zn(this))},r.ga=function(){this.g&&Zn(this)};function Zn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Jn(c)}r.setRequestHeader=function(c,p){this.u.append(c,p)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=p.next();return c.join(`\r
`)};function Jn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Eo(c){let p="";return ft(c,function(_,A){p+=A,p+=":",p+=_,p+=`\r
`}),p}function De(c,p,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Eo(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Qt(c,p,_))}function qt(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}X(qt,se);var Ws=/^https?$/i,ls=["POST","PUT"];r=qt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,p,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kn.g(),this.v=this.o?oo(this.o):oo(Kn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(q){su(this,q);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var x in A)_.set(x,A[x]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),x=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(ls,p,void 0))||A||x||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,at]of _)this.g.setRequestHeader(q,at);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{us(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){su(this,q)}};function su(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.m=5,ta(c),Wn(c)}function ta(c){c.A||(c.A=!0,Ft(c,"complete"),Ft(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ft(this,"complete"),Ft(this,"abort"),Wn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wn(this,!0)),qt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?ea(this):this.bb())},r.bb=function(){ea(this)};function ea(c){if(c.h&&typeof f<"u"&&(!c.v[1]||bn(c)!=4||c.Z()!=2)){if(c.u&&bn(c)==4)He(c.Ea,0,c);else if(Ft(c,"readystatechange"),bn(c)==4){c.h=!1;try{const at=c.Z();t:switch(at){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break t;default:p=!1}var _;if(!(_=p)){var A;if(A=at===0){var x=String(c.D).match(ns)[1]||null;!x&&m.self&&m.self.location&&(x=m.self.location.protocol.slice(0,-1)),A=!Ws.test(x?x.toLowerCase():"")}_=A}if(_)Ft(c,"complete"),Ft(c,"success");else{c.m=6;try{var q=2<bn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",ta(c)}}finally{Wn(c)}}}}function Wn(c,p){if(c.g){us(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,p||Ft(c,"ready");try{_.onreadystatechange=A}catch{}}}function us(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function bn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),Gs(p)}};function au(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ph(c){const p={};c=(c.g&&2<=bn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(tt(c[A]))continue;var _=V(c[A]);const x=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=p[x]||[];p[x]=q,q.push(_)}C(p,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cs(c,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||p}function na(c){this.Aa=0,this.i=[],this.j=new Tn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cs("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cs("baseRetryDelayMs",5e3,c),this.cb=cs("retryDelaySeedMs",1e4,c),this.Wa=cs("forwardChannelMaxRetries",2,c),this.wa=cs("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ei(c&&c.concurrentRequestLimit),this.Da=new os,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=na.prototype,r.la=8,r.G=1,r.connect=function(c,p,_,A){ee(0),this.W=c,this.H=p||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=du(this,null,this.W),ra(this)};function Ao(c){if(ou(c),c.G==3){var p=c.U++,_=ln(c.I);if(Qt(_,"SID",c.K),Qt(_,"RID",p),Qt(_,"TYPE","terminate"),hs(c,_),p=new $e(c,c.j,p),p.L=2,p.v=rs(ln(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=p.v,_=!0),_||(p.g=mu(p.j,null),p.g.ea(p.v)),p.F=Date.now(),ts(p)}fu(c)}function ia(c){c.g&&(fs(c),c.g.cancel(),c.g=null)}function ou(c){ia(c),c.u&&(m.clearTimeout(c.u),c.u=null),sa(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function ra(c){if(!Ys(c.h)&&!c.s){c.s=!0;var p=c.Ga;H||O(),nt||(H(),nt=!0),At.add(p,c),c.B=0}}function xh(c,p){return Xs(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=p.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=de(D(c.Ga,c,p),wo(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const x=new $e(this,this.j,c);let q=this.o;if(this.S&&(q?(q=S(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(x.H=q,q=null),this.P)t:{for(var p=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(p+=A,4096<p){p=_;break t}if(p===4096||_===this.i.length-1){p=_+1;break t}}p=1e3}else p=1e3;p=lu(this,x,p),_=ln(this.I),Qt(_,"RID",c),Qt(_,"CVER",22),this.D&&Qt(_,"X-HTTP-Session-Id",this.D),hs(this,_),q&&(this.O?p="headers="+encodeURIComponent(String(Eo(q)))+"&"+p:this.m&&De(_,this.m,q)),$s(this.h,x),this.Ua&&Qt(_,"TYPE","init"),this.P?(Qt(_,"$req",p),Qt(_,"SID","null"),x.T=!0,Pn(x,_,null)):Pn(x,_,p),this.G=2}}else this.G==3&&(c?So(this,c):this.i.length==0||Ys(this.h)||So(this))};function So(c,p){var _;p?_=p.l:_=c.U++;const A=ln(c.I);Qt(A,"SID",c.K),Qt(A,"RID",_),Qt(A,"AID",c.T),hs(c,A),c.m&&c.o&&De(A,c.m,c.o),_=new $e(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),p&&(c.i=p.D.concat(c.i)),p=lu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),$s(c.h,_),Pn(_,A,p)}function hs(c,p){c.H&&ft(c.H,function(_,A){Qt(p,A,_)}),c.l&&go({},function(_,A){Qt(p,A,_)})}function lu(c,p,_){_=Math.min(c.i.length,_);var A=c.l?D(c.l.Na,c.l,c):null;t:{var x=c.i;let q=-1;for(;;){const at=["count="+_];q==-1?0<_?(q=x[0].g,at.push("ofs="+q)):q=0:at.push("ofs="+q);let xt=!0;for(let Te=0;Te<_;Te++){let Ut=x[Te].g;const Oe=x[Te].map;if(Ut-=q,0>Ut)q=Math.max(0,x[Te].g-100),xt=!1;else try{$n(Oe,at,"req"+Ut+"_")}catch{A&&A(Oe)}}if(xt){A=at.join("&");break t}}}return c=c.i.splice(0,_),p.D=c,A}function uu(c){if(!c.g&&!c.u){c.Y=1;var p=c.Fa;H||O(),nt||(H(),nt=!0),At.add(p,c),c.v=0}}function bo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=de(D(c.Fa,c),wo(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=de(D(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),ia(this),cu(this))};function fs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function cu(c){c.g=new $e(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var p=ln(c.qa);Qt(p,"RID","rpc"),Qt(p,"SID",c.K),Qt(p,"AID",c.T),Qt(p,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qt(p,"TO",c.ja),Qt(p,"TYPE","xmlhttp"),hs(c,p),c.m&&c.o&&De(p,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=rs(ln(p)),_.m=null,_.P=!0,Ti(_,c)}r.Za=function(){this.C!=null&&(this.C=null,ia(this),bo(this),ee(19))};function sa(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function hu(c,p){var _=null;if(c.g==p){sa(c),fs(c),c.g=null;var A=2}else if(mo(c.h,p))_=p.D,Ze(c.h,p),A=1;else return;if(c.G!=0){if(p.o)if(A==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var x=c.B;A=$i(),Ft(A,new ve(A,_)),ra(c)}else uu(c);else if(x=p.s,x==3||x==0&&0<p.X||!(A==1&&xh(c,p)||A==2&&bo(c)))switch(_&&0<_.length&&(p=c.h,p.i=p.i.concat(_)),x){case 1:Ii(c,5);break;case 4:Ii(c,10);break;case 3:Ii(c,6);break;default:Ii(c,2)}}}function wo(c,p){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*p}function Ii(c,p){if(c.j.info("Error code "+p),p==2){var _=D(c.fb,c),A=c.Xa;const x=!A;A=new me(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||is(A,"https"),rs(A),x?as(A.toString(),_):xn(A.toString(),_)}else ee(2);c.G=0,c.l&&c.l.sa(p),fu(c),ou(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function fu(c){if(c.G=0,c.ka=[],c.l){const p=po(c.h);(p.length!=0||c.i.length!=0)&&(Z(c.ka,p),Z(c.ka,c.i),c.h.i.length=0,st(c.i),c.i.length=0),c.l.ra()}}function du(c,p,_){var A=_ instanceof me?ln(_):new me(_);if(A.g!="")p&&(A.g=p+"."+A.g),er(A,A.s);else{var x=m.location;A=x.protocol,p=p?p+"."+x.hostname:x.hostname,x=+x.port;var q=new me(null);A&&is(q,A),p&&(q.g=p),x&&er(q,x),_&&(q.l=_),A=q}return _=c.D,p=c.ya,_&&p&&Qt(A,_,p),Qt(A,"VER",c.la),hs(c,A),A}function mu(c,p,_){if(p&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Ca&&!c.pa?new qt(new nr({eb:_})):new qt(c.pa),p.Ha(c.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function pu(){}r=pu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function aa(){}aa.prototype.g=function(c,p){return new Je(c,p)};function Je(c,p){se.call(this),this.g=new na(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(c?c["X-WebChannel-Client-Profile"]=p.va:c={"X-WebChannel-Client-Profile":p.va}),this.g.S=c,(c=p&&p.Sb)&&!tt(c)&&(this.g.m=c),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!tt(p)&&(this.g.D=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new ti(this)}X(Je,se),Je.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Je.prototype.close=function(){Ao(this.g)},Je.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=kn(c),c=_);p.i.push(new nu(p.Ya++,c)),p.G==3&&ra(p)},Je.prototype.N=function(){this.g.l=null,delete this.j,Ao(this.g),delete this.g,Je.aa.N.call(this)};function gu(c){_i.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){t:{for(const _ in p){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}X(gu,_i);function yu(){uo.call(this),this.status=1}X(yu,uo);function ti(c){this.g=c}X(ti,pu),ti.prototype.ua=function(){Ft(this.g,"a")},ti.prototype.ta=function(c){Ft(this.g,new gu(c))},ti.prototype.sa=function(c){Ft(this.g,new yu)},ti.prototype.ra=function(){Ft(this.g,"b")},aa.prototype.createWebChannel=aa.prototype.g,Je.prototype.send=Je.prototype.o,Je.prototype.open=Je.prototype.m,Je.prototype.close=Je.prototype.close,YE=function(){return new aa},QE=function(){return $i()},KE=Gn,rm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,Dc=Wi,vi.COMPLETE="complete",GE=vi,lo.EventType=yi,yi.OPEN="a",yi.CLOSE="b",yi.ERROR="c",yi.MESSAGE="d",se.prototype.listen=se.prototype.K,gl=lo,qt.prototype.listenOnce=qt.prototype.L,qt.prototype.getLastError=qt.prototype.Ka,qt.prototype.getLastErrorCode=qt.prototype.Ba,qt.prototype.getStatus=qt.prototype.Z,qt.prototype.getResponseJson=qt.prototype.Oa,qt.prototype.getResponseText=qt.prototype.oa,qt.prototype.send=qt.prototype.ea,qt.prototype.setWithCredentials=qt.prototype.Ha,FE=qt}).apply(typeof vc<"u"?vc:typeof self<"u"?self:typeof window<"u"?window:{});const Sv="@firebase/firestore",bv="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs=new rh("@firebase/firestore");function Pa(){return xs.logLevel}function ct(r,...t){if(xs.logLevel<=kt.DEBUG){const n=t.map(Lm);xs.debug(`Firestore (${Wa}): ${r}`,...n)}}function Qi(r,...t){if(xs.logLevel<=kt.ERROR){const n=t.map(Lm);xs.error(`Firestore (${Wa}): ${r}`,...n)}}function Fa(r,...t){if(xs.logLevel<=kt.WARN){const n=t.map(Lm);xs.warn(`Firestore (${Wa}): ${r}`,...n)}}function Lm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,XE(r,s,n)}function XE(r,t,n){let s=`FIRESTORE (${Wa}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Qi(s),new Error(s)}function Ht(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||XE(t,o,s)}function wt(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pt extends Hn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class AC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class SC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bC{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ht(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new Ns;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ns,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const g=u;t.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},m=g=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(g=>m(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ns)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ht(typeof s.accessToken=="string",31837,{l:s}),new $E(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ht(t===null||typeof t=="string",2055,{h:t}),new Qe(t)}}class wC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class RC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new wC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ht(this.o===void 0,3512);const s=u=>{u.error!=null&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,ct("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ht(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new wv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=CC(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function Dt(r,t){return r<t?-1:r>t?1:0}function sm(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return Dt(s,o);{const u=ZE(),f=DC(u.encode(Rv(r,n)),u.encode(Rv(t,n)));return f!==0?f:Dt(s,o)}}n+=s>65535?2:1}return Dt(r.length,t.length)}function Rv(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function DC(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return Dt(r[n],t[n]);return Dt(r.length,t.length)}function Ga(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=-62135596800,Cv=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(t){return we.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*Cv);return new we(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new pt(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new pt(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Iv)throw new pt(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new pt(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cv}_compareTo(t){return this.seconds===t.seconds?Dt(this.nanoseconds,t.nanoseconds):Dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Iv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{static fromTimestamp(t){return new bt(t)}static min(){return new bt(new we(0,0))}static max(){return new bt(new we(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="__name__";class oi{constructor(t,n,s){n===void 0?n=0:n>t.length&&Tt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&Tt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return oi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof oi?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=oi.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Dt(t.length,n.length)}static compareSegments(t,n){const s=oi.isNumericId(t),o=oi.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?oi.extractNumericId(t).compare(oi.extractNumericId(n)):sm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Mr.fromString(t.substring(4,t.length-2))}}class le extends oi{construct(t,n,s){return new le(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new pt(J.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new le(n)}static emptyPath(){return new le([])}}const OC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends oi{construct(t,n,s){return new Be(t,n,s)}static isValidIdentifier(t){return OC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dv}static keyField(){return new Be([Dv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new pt(J.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new pt(J.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new pt(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new pt(J.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t){this.path=t}static fromPath(t){return new yt(le.fromString(t))}static fromName(t){return new yt(le.fromString(t).popFirst(5))}static empty(){return new yt(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&le.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return le.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new yt(new le(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=-1;function NC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=bt.fromTimestamp(s===1e9?new we(n+1,0):new we(n,s));return new Pr(o,yt.empty(),t)}function MC(r){return new Pr(r.readTime,r.key,Ol)}class Pr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Pr(bt.min(),yt.empty(),Ol)}static max(){return new Pr(bt.max(),yt.empty(),Ol)}}function VC(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=yt.comparator(r.documentKey,t.documentKey),n!==0?n:Dt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(r){if(r.code!==J.FAILED_PRECONDITION||r.message!==kC)throw r;ct("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Tt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):$.reject(n)}static resolve(t){return new $((n,s)=>{n(t)})}static reject(t){return new $((n,s)=>{s(t)})}static waitFor(t){return new $((n,s)=>{let o=0,u=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},g=>s(g))}),f=!0,u===o&&n()})}static or(t){let n=$.resolve(!1);for(const s of t)n=n.next(o=>o?$.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new $((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let g=0;g<u;g++){const y=g;n(t[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(t,n){return new $((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function xC(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function eo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}ch.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=-1;function hh(r){return r==null}function Gc(r){return r===0&&1/r==-1/0}function UC(r){return typeof r=="number"&&Number.isInteger(r)&&!Gc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="";function LC(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Ov(t)),t=zC(r.get(n),t);return Ov(t)}function zC(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case WE:n+="";break;default:n+=u}}return n}function Ov(r){return r+WE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Hr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function t0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,n){this.comparator=t,this.root=n||je.EMPTY}insert(t,n){return new re(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(t){return new re(this.comparator,this.root.remove(t,this.comparator).copy(null,null,je.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tc(this.root,t,this.comparator,!0)}}class Tc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class je{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??je.RED,this.left=o??je.EMPTY,this.right=u??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new je(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return je.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Tt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Tt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw Tt(27949);return t+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw Tt(57766)}get value(){throw Tt(16141)}get color(){throw Tt(16727)}get left(){throw Tt(29726)}get right(){throw Tt(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new je(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.comparator=t,this.data=new re(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mv(this.data.getIterator())}getIteratorFrom(t){return new Mv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Re(this.comparator);return n.data=t,n}}class Mv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.fields=t,t.sort(Be.comparator)}static empty(){return new gn([])}unionWith(t){let n=new Re(Be.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new gn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ga(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new e0("Invalid base64 string: "+u):u}}(t);return new qe(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new qe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const jC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(r){if(Ht(!!r,39018),typeof r=="string"){let t=0;const n=jC.exec(r);if(Ht(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ur(r){return typeof r=="string"?qe.fromBase64String(r):qe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0="server_timestamp",i0="__type__",r0="__previous_value__",s0="__local_write_time__";function jm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[i0])===null||n===void 0?void 0:n.stringValue)===n0}function fh(r){const t=r.mapValue.fields[r0];return jm(t)?fh(t):t}function Nl(r){const t=xr(r.mapValue.fields[s0].timestampValue);return new we(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(t,n,s,o,u,f,m,g,y,E){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=E}}const Kc="(default)";class Ml{constructor(t,n){this.projectId=t,this.database=n||Kc}static empty(){return new Ml("","")}get isDefaultDatabase(){return this.database===Kc}isEqual(t){return t instanceof Ml&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="__type__",qC="__max__",Ec={mapValue:{}},o0="__vector__",Qc="value";function Lr(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?jm(r)?4:FC(r)?9007199254740991:HC(r)?10:11:Tt(28295,{value:r})}function mi(r,t){if(r===t)return!0;const n=Lr(r);if(n!==Lr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Nl(r).isEqual(Nl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=xr(o.timestampValue),m=xr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return Ur(o.bytesValue).isEqual(Ur(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return fe(o.geoPointValue.latitude)===fe(u.geoPointValue.latitude)&&fe(o.geoPointValue.longitude)===fe(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return fe(o.integerValue)===fe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=fe(o.doubleValue),m=fe(u.doubleValue);return f===m?Gc(f)===Gc(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return Ga(r.arrayValue.values||[],t.arrayValue.values||[],mi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Nv(f)!==Nv(m))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(m[g]===void 0||!mi(f[g],m[g])))return!1;return!0}(r,t);default:return Tt(52216,{left:r})}}function Vl(r,t){return(r.values||[]).find(n=>mi(n,t))!==void 0}function Ka(r,t){if(r===t)return 0;const n=Lr(r),s=Lr(t);if(n!==s)return Dt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Dt(r.booleanValue,t.booleanValue);case 2:return function(u,f){const m=fe(u.integerValue||u.doubleValue),g=fe(f.integerValue||f.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1}(r,t);case 3:return Vv(r.timestampValue,t.timestampValue);case 4:return Vv(Nl(r),Nl(t));case 5:return sm(r.stringValue,t.stringValue);case 6:return function(u,f){const m=Ur(u),g=Ur(f);return m.compareTo(g)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const m=u.split("/"),g=f.split("/");for(let y=0;y<m.length&&y<g.length;y++){const E=Dt(m[y],g[y]);if(E!==0)return E}return Dt(m.length,g.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const m=Dt(fe(u.latitude),fe(f.latitude));return m!==0?m:Dt(fe(u.longitude),fe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return kv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var m,g,y,E;const b=u.fields||{},D=f.fields||{},B=(m=b[Qc])===null||m===void 0?void 0:m.arrayValue,X=(g=D[Qc])===null||g===void 0?void 0:g.arrayValue,st=Dt(((y=B==null?void 0:B.values)===null||y===void 0?void 0:y.length)||0,((E=X==null?void 0:X.values)===null||E===void 0?void 0:E.length)||0);return st!==0?st:kv(B,X)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===Ec.mapValue&&f===Ec.mapValue)return 0;if(u===Ec.mapValue)return 1;if(f===Ec.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),y=f.fields||{},E=Object.keys(y);g.sort(),E.sort();for(let b=0;b<g.length&&b<E.length;++b){const D=sm(g[b],E[b]);if(D!==0)return D;const B=Ka(m[g[b]],y[E[b]]);if(B!==0)return B}return Dt(g.length,E.length)}(r.mapValue,t.mapValue);default:throw Tt(23264,{Pe:n})}}function Vv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Dt(r,t);const n=xr(r),s=xr(t),o=Dt(n.seconds,s.seconds);return o!==0?o:Dt(n.nanos,s.nanos)}function kv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Ka(n[o],s[o]);if(u)return u}return Dt(n.length,s.length)}function Qa(r){return am(r)}function am(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=xr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return Ur(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return yt.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=am(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${am(n.fields[f])}`;return o+"}"}(r.mapValue):Tt(61005,{value:r})}function Oc(r){switch(Lr(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=fh(r);return t?16+Oc(t):16;case 5:return 2*r.stringValue.length;case 6:return Ur(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Oc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Hr(s.fields,(u,f)=>{o+=u.length+Oc(f)}),o}(r.mapValue);default:throw Tt(13486,{value:r})}}function om(r){return!!r&&"integerValue"in r}function Bm(r){return!!r&&"arrayValue"in r}function Pv(r){return!!r&&"nullValue"in r}function xv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Nc(r){return!!r&&"mapValue"in r}function HC(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[a0])===null||n===void 0?void 0:n.stringValue)===o0}function Sl(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Hr(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Sl(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Sl(r.arrayValue.values[n]);return t}return Object.assign({},r)}function FC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===qC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.value=t}static empty(){return new sn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Nc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sl(n)}setAll(t){let n=Be.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const g=this.getFieldsMap(n);this.applyChanges(g,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Sl(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());Nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return mi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];Nc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Hr(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new sn(Sl(this.value))}}function l0(r){const t=[];return Hr(r.fields,(n,s)=>{const o=new Be([n]);if(Nc(s)){const u=l0(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new gn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new Ye(t,0,bt.min(),bt.min(),bt.min(),sn.empty(),0)}static newFoundDocument(t,n,s,o){return new Ye(t,1,n,bt.min(),s,o,0)}static newNoDocument(t,n){return new Ye(t,2,n,bt.min(),bt.min(),sn.empty(),0)}static newUnknownDocument(t,n){return new Ye(t,3,n,bt.min(),bt.min(),sn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(bt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ye&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,n){this.position=t,this.inclusive=n}}function Uv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=yt.comparator(yt.fromName(f.referenceValue),n.key):s=Ka(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lv(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!mi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,n="asc"){this.field=t,this.dir=n}}function GC(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{}class be extends u0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new QC(t,n,s):n==="array-contains"?new $C(t,s):n==="in"?new ZC(t,s):n==="not-in"?new JC(t,s):n==="array-contains-any"?new WC(t,s):new be(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new YC(t,s):new XC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ka(n,this.value)):n!==null&&Lr(this.value)===Lr(n)&&this.matchesComparison(Ka(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Tt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pi extends u0{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new pi(t,n)}matches(t){return c0(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function c0(r){return r.op==="and"}function h0(r){return KC(r)&&c0(r)}function KC(r){for(const t of r.filters)if(t instanceof pi)return!1;return!0}function lm(r){if(r instanceof be)return r.field.canonicalString()+r.op.toString()+Qa(r.value);if(h0(r))return r.filters.map(t=>lm(t)).join(",");{const t=r.filters.map(n=>lm(n)).join(",");return`${r.op}(${t})`}}function f0(r,t){return r instanceof be?function(s,o){return o instanceof be&&s.op===o.op&&s.field.isEqual(o.field)&&mi(s.value,o.value)}(r,t):r instanceof pi?function(s,o){return o instanceof pi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&f0(f,o.filters[m]),!0):!1}(r,t):void Tt(19439)}function d0(r){return r instanceof be?function(n){return`${n.field.canonicalString()} ${n.op} ${Qa(n.value)}`}(r):r instanceof pi?function(n){return n.op.toString()+" {"+n.getFilters().map(d0).join(" ,")+"}"}(r):"Filter"}class QC extends be{constructor(t,n,s){super(t,n,s),this.key=yt.fromName(s.referenceValue)}matches(t){const n=yt.comparator(t.key,this.key);return this.matchesComparison(n)}}class YC extends be{constructor(t,n){super(t,"in",n),this.keys=m0("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class XC extends be{constructor(t,n){super(t,"not-in",n),this.keys=m0("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function m0(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>yt.fromName(s.referenceValue))}class $C extends be{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Bm(n)&&Vl(n.arrayValue,this.value)}}class ZC extends be{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Vl(this.value.arrayValue,n)}}class JC extends be{constructor(t,n){super(t,"not-in",n)}matches(t){if(Vl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vl(this.value.arrayValue,n)}}class WC extends be{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Bm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vl(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Ie=null}}function zv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new t2(r,t,n,s,o,u,f)}function qm(r){const t=wt(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>lm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),hh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Qa(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Qa(s)).join(",")),t.Ie=n}return t.Ie}function Hm(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!GC(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!f0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Lv(r.startAt,t.startAt)&&Lv(r.endAt,t.endAt)}function um(r){return yt.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function e2(r,t,n,s,o,u,f,m){return new dh(r,t,n,s,o,u,f,m)}function Fm(r){return new dh(r)}function jv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function n2(r){return r.collectionGroup!==null}function bl(r){const t=wt(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Re(Be.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new Xc(u,s))}),n.has(Be.keyField().canonicalString())||t.Ee.push(new Xc(Be.keyField(),s))}return t.Ee}function ci(r){const t=wt(r);return t.de||(t.de=i2(t,bl(r))),t.de}function i2(r,t){if(r.limitType==="F")return zv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Xc(o.field,u)});const n=r.endAt?new Yc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Yc(r.startAt.position,r.startAt.inclusive):null;return zv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function cm(r,t,n){return new dh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function mh(r,t){return Hm(ci(r),ci(t))&&r.limitType===t.limitType}function p0(r){return`${qm(ci(r))}|lt:${r.limitType}`}function xa(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>d0(o)).join(", ")}]`),hh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Qa(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Qa(o)).join(",")),`Target(${s})`}(ci(r))}; limitType=${r.limitType})`}function ph(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):yt.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of bl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,g){const y=Uv(f,m,g);return f.inclusive?y<=0:y<0}(s.startAt,bl(s),o)||s.endAt&&!function(f,m,g){const y=Uv(f,m,g);return f.inclusive?y>=0:y>0}(s.endAt,bl(s),o))}(r,t)}function r2(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function g0(r){return(t,n)=>{let s=!1;for(const o of bl(r)){const u=s2(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function s2(r,t,n){const s=r.field.isKeyField()?yt.comparator(t.key,n.key):function(u,f,m){const g=f.data.field(u),y=m.data.field(u);return g!==null&&y!==null?Ka(g,y):Tt(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Tt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Hr(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return t0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=new re(yt.comparator);function Yi(){return a2}const y0=new re(yt.comparator);function yl(...r){let t=y0;for(const n of r)t=t.insert(n.key,n);return t}function _0(r){let t=y0;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Os(){return wl()}function v0(){return wl()}function wl(){return new Bs(r=>r.toString(),(r,t)=>r.isEqual(t))}const o2=new re(yt.comparator),l2=new Re(yt.comparator);function Pt(...r){let t=l2;for(const n of r)t=t.add(n);return t}const u2=new Re(Dt);function c2(){return u2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gc(t)?"-0":t}}function T0(r){return{integerValue:""+r}}function h2(r,t){return UC(t)?T0(t):Gm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(){this._=void 0}}function f2(r,t,n){return r instanceof $c?function(o,u){const f={fields:{[i0]:{stringValue:n0},[s0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&jm(u)&&(u=fh(u)),u&&(f.fields[r0]=u),{mapValue:f}}(n,t):r instanceof kl?A0(r,t):r instanceof Pl?S0(r,t):function(o,u){const f=E0(o,u),m=Bv(f)+Bv(o.Re);return om(f)&&om(o.Re)?T0(m):Gm(o.serializer,m)}(r,t)}function d2(r,t,n){return r instanceof kl?A0(r,t):r instanceof Pl?S0(r,t):n}function E0(r,t){return r instanceof Zc?function(s){return om(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class $c extends gh{}class kl extends gh{constructor(t){super(),this.elements=t}}function A0(r,t){const n=b0(t);for(const s of r.elements)n.some(o=>mi(o,s))||n.push(s);return{arrayValue:{values:n}}}class Pl extends gh{constructor(t){super(),this.elements=t}}function S0(r,t){let n=b0(t);for(const s of r.elements)n=n.filter(o=>!mi(o,s));return{arrayValue:{values:n}}}class Zc extends gh{constructor(t,n){super(),this.serializer=t,this.Re=n}}function Bv(r){return fe(r.integerValue||r.doubleValue)}function b0(r){return Bm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function m2(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof kl&&o instanceof kl||s instanceof Pl&&o instanceof Pl?Ga(s.elements,o.elements,mi):s instanceof Zc&&o instanceof Zc?mi(s.Re,o.Re):s instanceof $c&&o instanceof $c}(r.transform,t.transform)}class p2{constructor(t,n){this.version=t,this.transformResults=n}}class hi{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new hi}static exists(t){return new hi(void 0,t)}static updateTime(t){return new hi(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class yh{}function w0(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new I0(r.key,hi.none()):new Fl(r.key,r.data,hi.none());{const n=r.data,s=sn.empty();let o=new Re(Be.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Fr(r.key,s,new gn(o.toArray()),hi.none())}}function g2(r,t,n){r instanceof Fl?function(o,u,f){const m=o.value.clone(),g=Hv(o.fieldTransforms,u,f.transformResults);m.setAll(g),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,n):r instanceof Fr?function(o,u,f){if(!Mc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=Hv(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(R0(o)),g.setAll(m),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Rl(r,t,n,s){return r instanceof Fl?function(u,f,m,g){if(!Mc(u.precondition,f))return m;const y=u.value.clone(),E=Fv(u.fieldTransforms,g,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Fr?function(u,f,m,g){if(!Mc(u.precondition,f))return m;const y=Fv(u.fieldTransforms,g,f),E=f.data;return E.setAll(R0(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(b=>b.field))}(r,t,n,s):function(u,f,m){return Mc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,n)}function y2(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=E0(s.transform,o||null);u!=null&&(n===null&&(n=sn.empty()),n.set(s.field,u))}return n||null}function qv(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Ga(s,o,(u,f)=>m2(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Fl extends yh{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Fr extends yh{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function R0(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function Hv(r,t,n){const s=new Map;Ht(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,d2(f,m,n[o]))}return s}function Fv(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,f2(u,f,t))}return s}class I0 extends yh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _2 extends yh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&g2(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Rl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Rl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=v0();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const g=w0(f,m);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(bt.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pt())}isEqual(t){return this.batchId===t.batchId&&Ga(this.mutations,t.mutations,(n,s)=>qv(n,s))&&Ga(this.baseMutations,t.baseMutations,(n,s)=>qv(n,s))}}class Km{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ht(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return o2}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Km(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,zt;function A2(r){switch(r){case J.OK:return Tt(64938);case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0;default:return Tt(15467,{code:r})}}function C0(r){if(r===void 0)return Qi("GRPC error has no .code"),J.UNKNOWN;switch(r){case ye.OK:return J.OK;case ye.CANCELLED:return J.CANCELLED;case ye.UNKNOWN:return J.UNKNOWN;case ye.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case ye.INTERNAL:return J.INTERNAL;case ye.UNAVAILABLE:return J.UNAVAILABLE;case ye.UNAUTHENTICATED:return J.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case ye.NOT_FOUND:return J.NOT_FOUND;case ye.ALREADY_EXISTS:return J.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return J.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case ye.ABORTED:return J.ABORTED;case ye.OUT_OF_RANGE:return J.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return J.UNIMPLEMENTED;case ye.DATA_LOSS:return J.DATA_LOSS;default:return Tt(39323,{code:r})}}(zt=ye||(ye={}))[zt.OK=0]="OK",zt[zt.CANCELLED=1]="CANCELLED",zt[zt.UNKNOWN=2]="UNKNOWN",zt[zt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",zt[zt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",zt[zt.NOT_FOUND=5]="NOT_FOUND",zt[zt.ALREADY_EXISTS=6]="ALREADY_EXISTS",zt[zt.PERMISSION_DENIED=7]="PERMISSION_DENIED",zt[zt.UNAUTHENTICATED=16]="UNAUTHENTICATED",zt[zt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",zt[zt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",zt[zt.ABORTED=10]="ABORTED",zt[zt.OUT_OF_RANGE=11]="OUT_OF_RANGE",zt[zt.UNIMPLEMENTED=12]="UNIMPLEMENTED",zt[zt.INTERNAL=13]="INTERNAL",zt[zt.UNAVAILABLE=14]="UNAVAILABLE",zt[zt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2=new Mr([4294967295,4294967295],0);function Gv(r){const t=ZE().encode(r),n=new HE;return n.update(t),new Uint8Array(n.digest())}function Kv(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Mr([n,s],0),new Mr([o,u],0)]}class Qm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new _l(`Invalid padding: ${n}`);if(s<0)throw new _l(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new _l(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new _l(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Mr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(Mr.fromNumber(s)));return o.compare(S2)===1&&(o=new Mr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}Se(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=Gv(t),[s,o]=Kv(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);if(!this.Se(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Qm(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.pe===0)return;const n=Gv(t),[s,o]=Kv(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);this.be(f)}}be(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class _l extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Gl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new _h(bt.min(),o,new re(Dt),Yi(),Pt())}}class Gl{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Gl(s,n,Pt(),Pt(),Pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class D0{constructor(t,n){this.targetId=t,this.Ce=n}}class O0{constructor(t,n,s=qe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class Qv{constructor(){this.Fe=0,this.Me=Yv(),this.xe=qe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Pt(),n=Pt(),s=Pt();return this.Me.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:Tt(38017,{changeType:u})}}),new Gl(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=Yv()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ht(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class b2{constructor(t){this.ze=t,this.je=new Map,this.He=Yi(),this.Je=Ac(),this.Ye=Ac(),this.Ze=new re(Dt)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:Tt(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const u=o.target;if(um(u))if(s===0){const f=new yt(u.path);this.tt(n,f,Ye.newNoDocument(f,bt.min()))}else Ht(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const m=this.ct(t),g=m?this.lt(m,t,f):1;if(g!==0){this.st(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=Ur(s).toUint8Array()}catch(g){if(g instanceof e0)return Fa("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Qm(f,o,u)}catch(g){return Fa(g instanceof _l?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.pe===0?null:m}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ze.Pt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.tt(n,u,null),o++)}),o}It(t){const n=new Map;this.je.forEach((u,f)=>{const m=this._t(f);if(m){if(u.current&&um(m.target)){const g=new yt(m.target.path);this.Et(g).has(f)||this.dt(f,g)||this.tt(f,g,Ye.newNoDocument(g,t))}u.Le&&(n.set(f,u.qe()),u.Qe())}});let s=Pt();this.Ye.forEach((u,f)=>{let m=!0;f.forEachWhile(g=>{const y=this._t(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,f)=>f.setReadTime(t));const o=new _h(t,n,this.Ze,this.He,s);return this.He=Yi(),this.Je=Ac(),this.Ye=Ac(),this.Ze=new re(Dt),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new Qv,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new Re(Dt),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Re(Dt),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||ct("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new Qv),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function Ac(){return new re(yt.comparator)}function Yv(){return new re(yt.comparator)}const w2={asc:"ASCENDING",desc:"DESCENDING"},R2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},I2={and:"AND",or:"OR"};class C2{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function hm(r,t){return r.useProto3Json||hh(t)?t:{value:t}}function Jc(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function N0(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function D2(r,t){return Jc(r,t.toTimestamp())}function fi(r){return Ht(!!r,49232),bt.fromTimestamp(function(n){const s=xr(n);return new we(s.seconds,s.nanos)}(r))}function Ym(r,t){return fm(r,t).canonicalString()}function fm(r,t){const n=function(o){return new le(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function M0(r){const t=le.fromString(r);return Ht(U0(t),10190,{key:t.toString()}),t}function dm(r,t){return Ym(r.databaseId,t.path)}function Fd(r,t){const n=M0(t);if(n.get(1)!==r.databaseId.projectId)throw new pt(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new pt(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new yt(k0(n))}function V0(r,t){return Ym(r.databaseId,t)}function O2(r){const t=M0(r);return t.length===4?le.emptyPath():k0(t)}function mm(r){return new le(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function k0(r){return Ht(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Xv(r,t,n){return{name:dm(r,t),fields:n.value.mapValue.fields}}function N2(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Tt(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Ht(E===void 0||typeof E=="string",58123),qe.fromBase64String(E||"")):(Ht(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),qe.fromUint8Array(E||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const E=y.code===void 0?J.UNKNOWN:C0(y.code);return new pt(E,y.message||"")}(f);n=new O0(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Fd(r,s.document.name),u=fi(s.document.updateTime),f=s.document.createTime?fi(s.document.createTime):bt.min(),m=new sn({mapValue:{fields:s.document.fields}}),g=Ye.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new Vc(y,E,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Fd(r,s.document),u=s.readTime?fi(s.readTime):bt.min(),f=Ye.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Vc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Fd(r,s.document),u=s.removedTargetIds||[];n=new Vc([],u,o,null)}else{if(!("filter"in t))return Tt(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new E2(o,u),m=s.targetId;n=new D0(m,f)}}return n}function M2(r,t){let n;if(t instanceof Fl)n={update:Xv(r,t.key,t.value)};else if(t instanceof I0)n={delete:dm(r,t.key)};else if(t instanceof Fr)n={update:Xv(r,t.key,t.data),updateMask:B2(t.fieldMask)};else{if(!(t instanceof _2))return Tt(16599,{ft:t.type});n={verify:dm(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof $c)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof kl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Pl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Zc)return{fieldPath:f.field.canonicalString(),increment:m.Re};throw Tt(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:D2(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Tt(27497)}(r,t.precondition)),n}function V2(r,t){return r&&r.length>0?(Ht(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?fi(o.updateTime):fi(u);return f.isEqual(bt.min())&&(f=fi(u)),new p2(f,o.transformResults||[])}(n,t))):[]}function k2(r,t){return{documents:[V0(r,t.path)]}}function P2(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=V0(r,o);const u=function(y){if(y.length!==0)return x0(pi.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(D){return{field:Ua(D.field),direction:L2(D.dir)}}(E))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=hm(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{gt:n,parent:o}}function x2(r){let t=O2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ht(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(b){const D=P0(b);return D instanceof pi&&h0(D)?D.getFilters():[D]}(n.where));let f=[];n.orderBy&&(f=function(b){return b.map(D=>function(X){return new Xc(La(X.field),function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(X.direction))}(D))}(n.orderBy));let m=null;n.limit&&(m=function(b){let D;return D=typeof b=="object"?b.value:b,hh(D)?null:D}(n.limit));let g=null;n.startAt&&(g=function(b){const D=!!b.before,B=b.values||[];return new Yc(B,D)}(n.startAt));let y=null;return n.endAt&&(y=function(b){const D=!b.before,B=b.values||[];return new Yc(B,D)}(n.endAt)),e2(t,o,f,u,m,"F",g,y)}function U2(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Tt(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function P0(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=La(n.unaryFilter.field);return be.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=La(n.unaryFilter.field);return be.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=La(n.unaryFilter.field);return be.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=La(n.unaryFilter.field);return be.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Tt(61313);default:return Tt(60726)}}(r):r.fieldFilter!==void 0?function(n){return be.create(La(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Tt(58110);default:return Tt(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return pi.create(n.compositeFilter.filters.map(s=>P0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Tt(1026)}}(n.compositeFilter.op))}(r):Tt(30097,{filter:r})}function L2(r){return w2[r]}function z2(r){return R2[r]}function j2(r){return I2[r]}function Ua(r){return{fieldPath:r.canonicalString()}}function La(r){return Be.fromServerFormat(r.fieldPath)}function x0(r){return r instanceof be?function(n){if(n.op==="=="){if(xv(n.value))return{unaryFilter:{field:Ua(n.field),op:"IS_NAN"}};if(Pv(n.value))return{unaryFilter:{field:Ua(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xv(n.value))return{unaryFilter:{field:Ua(n.field),op:"IS_NOT_NAN"}};if(Pv(n.value))return{unaryFilter:{field:Ua(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ua(n.field),op:z2(n.op),value:n.value}}}(r):r instanceof pi?function(n){const s=n.getFilters().map(o=>x0(o));return s.length===1?s[0]:{compositeFilter:{op:j2(n.op),filters:s}}}(r):Tt(54877,{filter:r})}function B2(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function U0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n,s,o,u=bt.min(),f=bt.min(),m=qe.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(t){return new Dr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(t){this.wt=t}}function H2(r){const t=x2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?cm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(){this.Cn=new G2}addToCollectionParentIndex(t,n){return this.Cn.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(Pr.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(Pr.min())}updateCollectionGroup(t,n,s){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class G2{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Re(le.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Re(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},L0=41943040;class rn{static withCacheSize(t){return new rn(t,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(L0,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Ya(0)}static lr(){return new Ya(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="LruGarbageCollector",K2=1048576;function Jv([r,t],[n,s]){const o=Dt(r,n);return o===0?Dt(t,s):o}class Q2{constructor(t){this.Er=t,this.buffer=new Re(Jv),this.dr=0}Ar(){return++this.dr}Rr(t){const n=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Jv(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Y2{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){ct(Zv,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){eo(n)?ct(Zv,"Ignoring IndexedDB error during garbage collection: ",n):await to(n)}await this.mr(3e5)})}}class X2{constructor(t,n){this.gr=t,this.params=n}calculateTargetCount(t,n){return this.gr.pr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return $.resolve(ch.le);const s=new Q2(n);return this.gr.forEachTarget(t,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(t,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.gr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.gr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(ct("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve($v)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(ct("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$v):this.wr(t,n))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,n){let s,o,u,f,m,g,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ct("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o))).next(b=>(s=b,m=Date.now(),this.removeTargets(t,s,n))).next(b=>(u=b,g=Date.now(),this.removeOrphanedDocuments(t,s))).next(b=>(y=Date.now(),Pa()<=kt.DEBUG&&ct("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${b} documents in `+(y-g)+`ms
Total Duration: ${y-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b})))}}function $2(r,t){return new X2(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(){this.changes=new Bs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ye.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Rl(s.mutation,o,gn.empty(),we.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Pt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Pt()){const o=Os();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=yl();return u.forEach((m,g)=>{f=f.insert(m,g.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Os();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Pt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(t,n,s,o){let u=Yi();const f=wl(),m=function(){return wl()}();return n.forEach((g,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Fr)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Rl(E.mutation,y,E.mutation.getFieldMask(),we.now())):f.set(y.key,gn.empty())}),this.recalculateAndSaveOverlays(t,u).next(g=>(g.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var b;return m.set(y,new J2(E,(b=f.get(y))!==null&&b!==void 0?b:null))}),m))}recalculateAndSaveOverlays(t,n){const s=wl();let o=new re((f,m)=>f-m),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const m of f)m.keys().forEach(g=>{const y=n.get(g);if(y===null)return;let E=s.get(g)||gn.empty();E=m.applyToLocalView(y,E),s.set(g,E);const b=(o.get(m.batchId)||Pt()).add(g);o=o.insert(m.batchId,b)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),y=g.key,E=g.value,b=v0();E.forEach(D=>{if(!u.has(D)){const B=w0(n.get(D),s.get(D));B!==null&&b.set(D,B),u=u.add(D)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,b))}return $.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return yt.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):n2(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):$.resolve(Os());let m=Ol,g=u;return f.next(y=>$.forEach(y,(E,b)=>(m<b.largestBatchId&&(m=b.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(t,E).next(D=>{g=g.insert(E,D)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,g,y,Pt())).next(E=>({batchId:m,changes:_0(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new yt(n)).next(s=>{let o=yl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=yl();return this.indexManager.getCollectionParents(t,u).next(m=>$.forEach(m,g=>{const y=function(b,D){return new dh(D,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(E=>{E.forEach((b,D)=>{f=f.insert(b,D)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((g,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Ye.newInvalidDocument(E)))});let m=yl();return f.forEach((g,y)=>{const E=u.get(g);E!==void 0&&Rl(E.mutation,y,gn.empty(),we.now()),ph(n,y)&&(m=m.insert(g,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,n){return $.resolve(this.kr.get(n))}saveBundleMetadata(t,n){return this.kr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:fi(o.createTime)}}(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.qr.get(n))}saveNamedQuery(t,n){return this.qr.set(n.name,function(o){return{name:o.name,query:H2(o.bundledQuery),readTime:fi(o.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.overlays=new re(yt.comparator),this.Qr=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Os();return $.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.bt(t,n,u)}),$.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),$.resolve()}getOverlaysForCollection(t,n,s){const o=Os(),u=n.length+1,f=new yt(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const g=m.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new re((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Os(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Os(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return $.resolve(m)}bt(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new T2(n,s));let u=this.Qr.get(n);u===void 0&&(u=Pt(),this.Qr.set(n,u)),this.Qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.$r=new Re(ke.Ur),this.Kr=new Re(ke.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,n){const s=new ke(t,n);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.zr(new ke(t,n))}jr(t,n){t.forEach(s=>this.removeReference(s,n))}Hr(t){const n=new yt(new le([])),s=new ke(n,t),o=new ke(n,t+1),u=[];return this.Kr.forEachInRange([s,o],f=>{this.zr(f),u.push(f.key)}),u}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const n=new yt(new le([])),s=new ke(n,t),o=new ke(n,t+1);let u=Pt();return this.Kr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new ke(t,0),s=this.$r.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ke{constructor(t,n){this.key=t,this.Zr=n}static Ur(t,n){return yt.comparator(t.key,n.key)||Dt(t.Zr,n.Zr)}static Wr(t,n){return Dt(t.Zr,n.Zr)||yt.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Re(ke.Ur)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new v2(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.Xr=this.Xr.add(new ke(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return $.resolve(f)}lookupMutationBatch(t,n){return $.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.ti(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?zm:this.nr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new ke(n,0),o=new ke(n,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],f=>{const m=this.ei(f.Zr);u.push(m)}),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Re(Dt);return n.forEach(o=>{const u=new ke(o,0),f=new ke(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,f],m=>{s=s.add(m.Zr)})}),$.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;yt.isDocumentKey(u)||(u=u.child(""));const f=new ke(new yt(u),0);let m=new Re(Dt);return this.Xr.forEachWhile(g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(g.Zr)),!0)},f),$.resolve(this.ni(m))}ni(t){const n=[];return t.forEach(s=>{const o=this.ei(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Ht(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return $.forEach(n.mutations,o=>{const u=new ke(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Xr=s})}sr(t){}containsKey(t,n){const s=new ke(n,0),o=this.Xr.firstAfterOrEqual(s);return $.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}ri(t,n){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const n=this.ti(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(t){this.ii=t,this.docs=function(){return new re(yt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.ii(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(t,n){let s=Yi();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ye.newInvalidDocument(o))}),$.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=Yi();const f=n.path,m=new yt(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:y,value:{document:E}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||VC(MC(E),s)<=0||(o.has(E.key)||ph(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(t,n,s,o){Tt(9500)}si(t,n){return $.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new sD(this)}getSize(t){return $.resolve(this.size)}}class sD extends Z2{constructor(t){super(),this.Br=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.Br.addEntry(t,o)):this.Br.removeEntry(s)}),$.waitFor(n)}getFromCache(t,n){return this.Br.getEntry(t,n)}getAllFromCache(t,n){return this.Br.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(t){this.persistence=t,this.oi=new Bs(n=>qm(n),Hm),this.lastRemoteSnapshotVersion=bt.min(),this.highestTargetId=0,this._i=0,this.ai=new Xm,this.targetCount=0,this.ui=Ya.cr()}forEachTarget(t,n){return this.oi.forEach((s,o)=>n(o)),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this._i&&(this._i=n),$.resolve()}Tr(t){this.oi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ui=new Ya(n),this.highestTargetId=n),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,n){return this.Tr(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.Tr(n),$.resolve()}removeTargetData(t,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.oi.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.oi.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),$.waitFor(u).next(()=>o)}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const s=this.oi.get(n)||null;return $.resolve(s)}addMatchingKeys(t,n,s){return this.ai.Gr(n,s),$.resolve()}removeMatchingKeys(t,n,s){this.ai.jr(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),$.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.ai.Hr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ai.Yr(n);return $.resolve(s)}containsKey(t,n){return $.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(t,n){this.ci={},this.overlays={},this.li=new ch(0),this.hi=!1,this.hi=!0,this.Pi=new nD,this.referenceDelegate=t(this),this.Ti=new aD(this),this.indexManager=new F2,this.remoteDocumentCache=function(o){return new rD(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new q2(n),this.Ei=new tD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new eD,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ci[t.toKey()];return s||(s=new iD(n,this.referenceDelegate),this.ci[t.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,n,s){ct("MemoryPersistence","Starting transaction:",t);const o=new oD(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(t,n){return $.or(Object.values(this.ci).map(s=>()=>s.containsKey(t,n)))}}class oD extends PC{constructor(t){super(),this.currentSequenceNumber=t}}class $m{constructor(t){this.persistence=t,this.Vi=new Xm,this.mi=null}static fi(t){return new $m(t)}get gi(){if(this.mi)return this.mi;throw Tt(60996)}addReference(t,n,s){return this.Vi.addReference(s,n),this.gi.delete(s.toString()),$.resolve()}removeReference(t,n,s){return this.Vi.removeReference(s,n),this.gi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.gi.add(n.toString()),$.resolve()}removeTarget(t,n){this.Vi.Hr(n.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}di(){this.mi=new Set}Ai(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.gi,s=>{const o=yt.fromPath(s);return this.pi(t,o).next(u=>{u||n.removeEntry(o,bt.min())})}).next(()=>(this.mi=null,n.apply(t)))}updateLimboDocument(t,n){return this.pi(t,n).next(s=>{s?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(t){return 0}pi(t,n){return $.or([()=>$.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ri(t,n)])}}class Wc{constructor(t,n){this.persistence=t,this.yi=new Bs(s=>LC(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=$2(this,n)}static fi(t,n){return new Wc(t,n)}di(){}Ai(t){return $.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}pr(t){const n=this.Sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}Sr(t){let n=0;return this.yr(t,s=>{n++}).next(()=>n)}yr(t,n){return $.forEach(this.yi,(s,o)=>this.Dr(t,s,o).next(u=>u?$.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(t,f=>this.Dr(t,f,n).next(m=>{m||(s++,u.removeEntry(f,bt.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.yi.set(n,t.currentSequenceNumber),$.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),$.resolve()}removeReference(t,n,s){return this.yi.set(s,t.currentSequenceNumber),$.resolve()}updateLimboDocument(t,n){return this.yi.set(n,t.currentSequenceNumber),$.resolve()}Ii(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Oc(t.data.value)),n}Dr(t,n,s){return $.or([()=>this.persistence.Ri(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.yi.get(n);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.ds=s,this.As=o}static Rs(t,n){let s=Pt(),o=Pt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Zm(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Tb()?8:xC(Xe())>0?6:4}()}initialize(t,n){this.ys=t,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.ws(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.Ss(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new lD;return this.bs(t,n,f).next(m=>{if(u.result=m,this.fs)return this.Ds(t,n,f,m.size)})}).next(()=>u.result)}Ds(t,n,s,o){return s.documentReadCount<this.gs?(Pa()<=kt.DEBUG&&ct("QueryEngine","SDK will not create cache indexes for query:",xa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),$.resolve()):(Pa()<=kt.DEBUG&&ct("QueryEngine","Query:",xa(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(Pa()<=kt.DEBUG&&ct("QueryEngine","The SDK decides to create cache indexes for query:",xa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ci(n))):$.resolve())}ws(t,n){if(jv(n))return $.resolve(null);let s=ci(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=cm(n,null,"F"),s=ci(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Pt(...u);return this.ys.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(g=>{const y=this.vs(n,m);return this.Cs(n,y,f,g.readTime)?this.ws(t,cm(n,null,"F")):this.Fs(t,y,n,g)}))})))}Ss(t,n,s,o){return jv(n)||o.isEqual(bt.min())?$.resolve(null):this.ys.getDocuments(t,s).next(u=>{const f=this.vs(n,u);return this.Cs(n,f,s,o)?$.resolve(null):(Pa()<=kt.DEBUG&&ct("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),xa(n)),this.Fs(t,f,n,NC(o,Ol)).next(m=>m))})}vs(t,n){let s=new Re(g0(t));return n.forEach((o,u)=>{ph(t,u)&&(s=s.add(u))}),s}Cs(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}bs(t,n,s){return Pa()<=kt.DEBUG&&ct("QueryEngine","Using full collection scan to execute query:",xa(n)),this.ys.getDocumentsMatchingQuery(t,n,Pr.min(),s)}Fs(t,n,s,o){return this.ys.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="LocalStore",cD=3e8;class hD{constructor(t,n,s,o){this.persistence=t,this.Ms=n,this.serializer=o,this.xs=new re(Dt),this.Os=new Bs(u=>qm(u),Hm),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(s)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new W2(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.xs))}}function fD(r,t,n,s){return new hD(r,t,n,s)}async function j0(r,t){const n=wt(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Ls(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let g=Pt();for(const y of o){f.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)g=g.add(E.key)}return n.localDocuments.getDocuments(s,g).next(y=>({ks:y,removedBatchIds:f,addedBatchIds:m}))})})}function dD(r,t){const n=wt(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Bs.newChangeBuffer({trackRemovals:!0});return function(m,g,y,E){const b=y.batch,D=b.keys();let B=$.resolve();return D.forEach(X=>{B=B.next(()=>E.getEntry(g,X)).next(st=>{const Z=y.docVersions.get(X);Ht(Z!==null,48541),st.version.compareTo(Z)<0&&(b.applyToRemoteDocument(st,y),st.isValidDocument()&&(st.setReadTime(y.commitVersion),E.addEntry(st)))})}),B.next(()=>m.mutationQueue.removeMutationBatch(g,b))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let g=Pt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(g=g.add(m.batch.mutations[y].key));return g}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function B0(r){const t=wt(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ti.getLastRemoteSnapshotVersion(n))}function mD(r,t){const n=wt(r),s=t.snapshotVersion;let o=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Bs.newChangeBuffer({trackRemovals:!0});o=n.xs;const m=[];t.targetChanges.forEach((E,b)=>{const D=o.get(b);if(!D)return;m.push(n.Ti.removeMatchingKeys(u,E.removedDocuments,b).next(()=>n.Ti.addMatchingKeys(u,E.addedDocuments,b)));let B=D.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?B=B.withResumeToken(qe.EMPTY_BYTE_STRING,bt.min()).withLastLimboFreeSnapshotVersion(bt.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(b,B),function(st,Z,ot){return st.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-st.snapshotVersion.toMicroseconds()>=cD?!0:ot.addedDocuments.size+ot.modifiedDocuments.size+ot.removedDocuments.size>0}(D,B,E)&&m.push(n.Ti.updateTargetData(u,B))});let g=Yi(),y=Pt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(pD(u,f,t.documentUpdates).next(E=>{g=E.qs,y=E.Qs})),!s.isEqual(bt.min())){const E=n.Ti.getLastRemoteSnapshotVersion(u).next(b=>n.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return $.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,g,y)).next(()=>g)}).then(u=>(n.xs=o,u))}function pD(r,t,n){let s=Pt(),o=Pt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=Yi();return n.forEach((m,g)=>{const y=u.get(m);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(bt.min())?(t.removeEntry(m,g.readTime),f=f.insert(m,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(g),f=f.insert(m,g)):ct(Jm,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",g.version)}),{qs:f,Qs:o}})}function gD(r,t){const n=wt(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=zm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function yD(r,t){const n=wt(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.Ti.getTargetData(s,t).next(u=>u?(o=u,$.resolve(o)):n.Ti.allocateTargetId(s).next(f=>(o=new Dr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.xs=n.xs.insert(s.targetId,s),n.Os.set(t,s.targetId)),s})}async function pm(r,t,n){const s=wt(r),o=s.xs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!eo(f))throw f;ct(Jm,`Failed to update sequence numbers for target ${t}: ${f}`)}s.xs=s.xs.remove(t),s.Os.delete(o.target)}function Wv(r,t,n){const s=wt(r);let o=bt.min(),u=Pt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(g,y,E){const b=wt(g),D=b.Os.get(E);return D!==void 0?$.resolve(b.xs.get(D)):b.Ti.getTargetData(y,E)}(s,f,ci(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(f,m.targetId).next(g=>{u=g})}).next(()=>s.Ms.getDocumentsMatchingQuery(f,t,n?o:bt.min(),n?u:Pt())).next(m=>(_D(s,r2(t),m),{documents:m,$s:u})))}function _D(r,t,n){let s=r.Ns.get(t)||bt.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Ns.set(t,s)}class tT{constructor(){this.activeTargetIds=c2()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class vD{constructor(){this.xo=new tT,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,n,s){this.Oo[t]=n}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new tT,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="ConnectivityMonitor";class nT{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ct(eT,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){ct(eT,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc=null;function gm(){return Sc===null?Sc=function(){return 268435456+Math.round(2147483648*Math.random())}():Sc++,"0x"+Sc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="RestConnection",ED={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class AD{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+t.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Kc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(t,n,s,o,u){const f=gm(),m=this.jo(t,n.toUriEncodedString());ct(Gd,`Sending RPC '${t}' ${f}:`,m,s);const g={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(g,o,u);const{host:y}=new URL(m),E=Ll(y);return this.Jo(t,m,g,s,E).then(b=>(ct(Gd,`Received RPC '${t}' ${f}: `,b),b),b=>{throw Fa(Gd,`RPC '${t}' ${f} failed with error: `,b,"url: ",m,"request:",s),b})}Yo(t,n,s,o,u,f){return this.zo(t,n,s,o,u)}Ho(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wa}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}jo(t,n){const s=ED[t];return`${this.Ko}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class bD extends AD{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,o,u){const f=gm();return new Promise((m,g)=>{const y=new FE;y.setWithCredentials(!0),y.listenOnce(GE.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Dc.NO_ERROR:const b=y.getResponseJson();ct(Ke,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(b)),m(b);break;case Dc.TIMEOUT:ct(Ke,`RPC '${t}' ${f} timed out`),g(new pt(J.DEADLINE_EXCEEDED,"Request time out"));break;case Dc.HTTP_ERROR:const D=y.getStatus();if(ct(Ke,`RPC '${t}' ${f} failed with status:`,D,"response text:",y.getResponseText()),D>0){let B=y.getResponseJson();Array.isArray(B)&&(B=B[0]);const X=B==null?void 0:B.error;if(X&&X.status&&X.message){const st=function(ot){const tt=ot.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(tt)>=0?tt:J.UNKNOWN}(X.status);g(new pt(st,X.message))}else g(new pt(J.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new pt(J.UNAVAILABLE,"Connection failed."));break;default:Tt(9055,{l_:t,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{ct(Ke,`RPC '${t}' ${f} completed.`)}});const E=JSON.stringify(o);ct(Ke,`RPC '${t}' ${f} sending request:`,o),y.send(n,"POST",E,s,15)})}T_(t,n,s){const o=gm(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=YE(),m=QE(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Ho(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const E=u.join("");ct(Ke,`Creating RPC '${t}' stream ${o}: ${E}`,g);const b=f.createWebChannel(E,g);let D=!1,B=!1;const X=new SD({Zo:Z=>{B?ct(Ke,`Not sending because RPC '${t}' stream ${o} is closed:`,Z):(D||(ct(Ke,`Opening RPC '${t}' stream ${o} transport.`),b.open(),D=!0),ct(Ke,`RPC '${t}' stream ${o} sending:`,Z),b.send(Z))},Xo:()=>b.close()}),st=(Z,ot,tt)=>{Z.listen(ot,et=>{try{tt(et)}catch(rt){setTimeout(()=>{throw rt},0)}})};return st(b,gl.EventType.OPEN,()=>{B||(ct(Ke,`RPC '${t}' stream ${o} transport opened.`),X.__())}),st(b,gl.EventType.CLOSE,()=>{B||(B=!0,ct(Ke,`RPC '${t}' stream ${o} transport closed`),X.u_())}),st(b,gl.EventType.ERROR,Z=>{B||(B=!0,Fa(Ke,`RPC '${t}' stream ${o} transport errored. Name:`,Z.name,"Message:",Z.message),X.u_(new pt(J.UNAVAILABLE,"The operation could not be completed")))}),st(b,gl.EventType.MESSAGE,Z=>{var ot;if(!B){const tt=Z.data[0];Ht(!!tt,16349);const et=tt,rt=(et==null?void 0:et.error)||((ot=et[0])===null||ot===void 0?void 0:ot.error);if(rt){ct(Ke,`RPC '${t}' stream ${o} received error:`,rt);const W=rt.status;let ft=function(w){const N=ye[w];if(N!==void 0)return C0(N)}(W),C=rt.message;ft===void 0&&(ft=J.INTERNAL,C="Unknown error status: "+W+" with message "+rt.message),B=!0,X.u_(new pt(ft,C)),b.close()}else ct(Ke,`RPC '${t}' stream ${o} received:`,tt),X.c_(tt)}}),st(m,KE.STAT_EVENT,Z=>{Z.stat===rm.PROXY?ct(Ke,`RPC '${t}' stream ${o} detected buffering proxy`):Z.stat===rm.NOPROXY&&ct(Ke,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{X.a_()},0),X}}function Kd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(r){return new C2(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(t,n,s=1e3,o=1.5,u=6e4){this.xi=t,this.timerId=n,this.I_=s,this.E_=o,this.d_=u,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const n=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),o=Math.max(0,n-s);o>0&&ct("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="PersistentStream";class H0{constructor(t,n,s,o,u,f,m,g){this.xi=t,this.y_=s,this.w_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new q0(t,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():n&&n.code===J.RESOURCE_EXHAUSTED?(Qi(n.toString()),Qi("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.S_===n&&this.K_(s,o)},s=>{t(()=>{const o=new pt(J.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(o)})})}K_(t,n){const s=this.U_(this.S_);this.stream=this.G_(t,n),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.W_(o))}),this.stream.onMessage(o=>{s(()=>++this.v_==1?this.z_(o):this.onNext(o))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return ct(iT,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return n=>{this.xi.enqueueAndForget(()=>this.S_===t?n():(ct(iT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wD extends H0{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}G_(t,n){return this.connection.T_("Listen",t,n)}z_(t){return this.onNext(t)}onNext(t){this.C_.reset();const n=N2(this.serializer,t),s=function(u){if(!("targetChange"in u))return bt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?bt.min():f.readTime?fi(f.readTime):bt.min()}(t);return this.listener.j_(n,s)}H_(t){const n={};n.database=mm(this.serializer),n.addTarget=function(u,f){let m;const g=f.target;if(m=um(g)?{documents:k2(u,g)}:{query:P2(u,g).gt},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=N0(u,f.resumeToken);const y=hm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(bt.min())>0){m.readTime=Jc(u,f.snapshotVersion.toTimestamp());const y=hm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=U2(this.serializer,t);s&&(n.labels=s),this.L_(n)}J_(t){const n={};n.database=mm(this.serializer),n.removeTarget=t,this.L_(n)}}class RD extends H0{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(t,n){return this.connection.T_("Write",t,n)}z_(t){return Ht(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ht(!t.writeResults||t.writeResults.length===0,55816),this.listener.X_()}onNext(t){Ht(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.C_.reset();const n=V2(t.writeResults,t.commitTime),s=fi(t.commitTime);return this.listener.ea(s,n)}ta(){const t={};t.database=mm(this.serializer),this.L_(t)}Z_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>M2(this.serializer,s))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{}class CD extends ID{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.na=!1}ra(){if(this.na)throw new pt(J.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,n,s,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.zo(t,fm(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new pt(J.UNKNOWN,u.toString())})}Yo(t,n,s,o,u){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Yo(t,fm(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new pt(J.UNKNOWN,f.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class DD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Qi(n),this.oa=!1):ct("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="RemoteStore";class OD{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=u,this.Ea.No(f=>{s.enqueueAndForget(async()=>{qs(this)&&(ct(Us,"Restarting streams for network reachability change."),await async function(g){const y=wt(g);y.Ta.add(4),await Kl(y),y.da.set("Unknown"),y.Ta.delete(4),await Th(y)}(this))})}),this.da=new DD(s,o)}}async function Th(r){if(qs(r))for(const t of r.Ia)await t(!0)}async function Kl(r){for(const t of r.Ia)await t(!1)}function F0(r,t){const n=wt(r);n.Pa.has(t.targetId)||(n.Pa.set(t.targetId,t),np(n)?ep(n):no(n).M_()&&tp(n,t))}function Wm(r,t){const n=wt(r),s=no(n);n.Pa.delete(t),s.M_()&&G0(n,t),n.Pa.size===0&&(s.M_()?s.N_():qs(n)&&n.da.set("Unknown"))}function tp(r,t){if(r.Aa.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(bt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}no(r).H_(t)}function G0(r,t){r.Aa.Ke(t),no(r).J_(t)}function ep(r){r.Aa=new b2({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r.Pa.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),no(r).start(),r.da._a()}function np(r){return qs(r)&&!no(r).F_()&&r.Pa.size>0}function qs(r){return wt(r).Ta.size===0}function K0(r){r.Aa=void 0}async function ND(r){r.da.set("Online")}async function MD(r){r.Pa.forEach((t,n)=>{tp(r,t)})}async function VD(r,t){K0(r),np(r)?(r.da.ca(t),ep(r)):r.da.set("Unknown")}async function kD(r,t,n){if(r.da.set("Online"),t instanceof O0&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o.Pa.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o.Pa.delete(m),o.Aa.removeTarget(m))}(r,t)}catch(s){ct(Us,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await th(r,s)}else if(t instanceof Vc?r.Aa.Xe(t):t instanceof D0?r.Aa.ot(t):r.Aa.nt(t),!n.isEqual(bt.min()))try{const s=await B0(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.Aa.It(f);return m.targetChanges.forEach((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.Pa.get(y);E&&u.Pa.set(y,E.withResumeToken(g.resumeToken,f))}}),m.targetMismatches.forEach((g,y)=>{const E=u.Pa.get(g);if(!E)return;u.Pa.set(g,E.withResumeToken(qe.EMPTY_BYTE_STRING,E.snapshotVersion)),G0(u,g);const b=new Dr(E.target,g,y,E.sequenceNumber);tp(u,b)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){ct(Us,"Failed to raise snapshot:",s),await th(r,s)}}async function th(r,t,n){if(!eo(t))throw t;r.Ta.add(1),await Kl(r),r.da.set("Offline"),n||(n=()=>B0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ct(Us,"Retrying IndexedDB access"),await n(),r.Ta.delete(1),await Th(r)})}function Q0(r,t){return t().catch(n=>th(r,n,t))}async function Eh(r){const t=wt(r),n=zr(t);let s=t.ha.length>0?t.ha[t.ha.length-1].batchId:zm;for(;PD(t);)try{const o=await gD(t.localStore,s);if(o===null){t.ha.length===0&&n.N_();break}s=o.batchId,xD(t,o)}catch(o){await th(t,o)}Y0(t)&&X0(t)}function PD(r){return qs(r)&&r.ha.length<10}function xD(r,t){r.ha.push(t);const n=zr(r);n.M_()&&n.Y_&&n.Z_(t.mutations)}function Y0(r){return qs(r)&&!zr(r).F_()&&r.ha.length>0}function X0(r){zr(r).start()}async function UD(r){zr(r).ta()}async function LD(r){const t=zr(r);for(const n of r.ha)t.Z_(n.mutations)}async function zD(r,t,n){const s=r.ha.shift(),o=Km.from(s,t,n);await Q0(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Eh(r)}async function jD(r,t){t&&zr(r).Y_&&await async function(s,o){if(function(f){return A2(f)&&f!==J.ABORTED}(o.code)){const u=s.ha.shift();zr(s).O_(),await Q0(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Eh(s)}}(r,t),Y0(r)&&X0(r)}async function rT(r,t){const n=wt(r);n.asyncQueue.verifyOperationInProgress(),ct(Us,"RemoteStore received new credentials");const s=qs(n);n.Ta.add(3),await Kl(n),s&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ta.delete(3),await Th(n)}async function BD(r,t){const n=wt(r);t?(n.Ta.delete(2),await Th(n)):t||(n.Ta.add(2),await Kl(n),n.da.set("Unknown"))}function no(r){return r.Ra||(r.Ra=function(n,s,o){const u=wt(n);return u.ra(),new wD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:ND.bind(null,r),n_:MD.bind(null,r),i_:VD.bind(null,r),j_:kD.bind(null,r)}),r.Ia.push(async t=>{t?(r.Ra.O_(),np(r)?ep(r):r.da.set("Unknown")):(await r.Ra.stop(),K0(r))})),r.Ra}function zr(r){return r.Va||(r.Va=function(n,s,o){const u=wt(n);return u.ra(),new RD(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{e_:()=>Promise.resolve(),n_:UD.bind(null,r),i_:jD.bind(null,r),X_:LD.bind(null,r),ea:zD.bind(null,r)}),r.Ia.push(async t=>{t?(r.Va.O_(),await Eh(r)):(await r.Va.stop(),r.ha.length>0&&(ct(Us,`Stopping write stream with ${r.ha.length} pending writes`),r.ha=[]))})),r.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new ip(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pt(J.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rp(r,t){if(Qi("AsyncQueue",`${t}: ${r}`),eo(r))return new pt(J.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{static emptySet(t){return new Ha(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||yt.comparator(n.key,s.key):(n,s)=>yt.comparator(n.key,s.key),this.keyedMap=yl(),this.sortedSet=new re(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ha)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ha;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.ma=new re(yt.comparator)}track(t){const n=t.doc.key,s=this.ma.get(n);s?t.type!==0&&s.type===3?this.ma=this.ma.insert(n,t):t.type===3&&s.type!==1?this.ma=this.ma.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ma=this.ma.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ma=this.ma.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ma=this.ma.remove(n):t.type===1&&s.type===2?this.ma=this.ma.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ma=this.ma.insert(n,{type:2,doc:t.doc}):Tt(63341,{Vt:t,fa:s}):this.ma=this.ma.insert(n,t)}ga(){const t=[];return this.ma.inorderTraversal((n,s)=>{t.push(s)}),t}}class Xa{constructor(t,n,s,o,u,f,m,g,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new Xa(t,n,Ha.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(t=>t.Sa())}}class HD{constructor(){this.queries=aT(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,s){const o=wt(n),u=o.queries;o.queries=aT(),u.forEach((f,m)=>{for(const g of m.ya)g.onError(s)})})(this,new pt(J.ABORTED,"Firestore shutting down"))}}function aT(){return new Bs(r=>p0(r),mh)}async function FD(r,t){const n=wt(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.wa()&&t.Sa()&&(s=2):(u=new qD,s=t.Sa()?0:1);try{switch(s){case 0:u.pa=await n.onListen(o,!0);break;case 1:u.pa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=rp(f,`Initialization of query '${xa(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.ya.push(t),t.Da(n.onlineState),u.pa&&t.va(u.pa)&&sp(n)}async function GD(r,t){const n=wt(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.ya.indexOf(t);f>=0&&(u.ya.splice(f,1),u.ya.length===0?o=t.Sa()?0:1:!u.wa()&&t.Sa()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function KD(r,t){const n=wt(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.ya)m.va(o)&&(s=!0);f.pa=o}}s&&sp(n)}function QD(r,t,n){const s=wt(r),o=s.queries.get(t);if(o)for(const u of o.ya)u.onError(n);s.queries.delete(t)}function sp(r){r.ba.forEach(t=>{t.next()})}var ym,oT;(oT=ym||(ym={})).Ca="default",oT.Cache="cache";class YD{constructor(t,n,s){this.query=t,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Xa(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Ma?this.Oa(t)&&(this.Fa.next(t),n=!0):this.Na(t,this.onlineState)&&(this.Ba(t),n=!0),this.xa=t,n}onError(t){this.Fa.error(t)}Da(t){this.onlineState=t;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,t)&&(this.Ba(this.xa),n=!0),n}Na(t,n){if(!t.fromCache||!this.Sa())return!0;const s=n!=="Offline";return(!this.options.La||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Oa(t){if(t.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(t){t=Xa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Ma=!0,this.Fa.next(t)}Sa(){return this.options.source!==ym.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t){this.key=t}}class Z0{constructor(t){this.key=t}}class XD{constructor(t,n){this.query=t,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Pt(),this.mutatedKeys=Pt(),this.Ha=g0(t),this.Ja=new Ha(this.Ha)}get Ya(){return this.Ga}Za(t,n){const s=n?n.Xa:new sT,o=n?n.Ja:this.Ja;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,b)=>{const D=o.get(E),B=ph(this.query,b)?b:null,X=!!D&&this.mutatedKeys.has(D.key),st=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let Z=!1;D&&B?D.data.isEqual(B.data)?X!==st&&(s.track({type:3,doc:B}),Z=!0):this.eu(D,B)||(s.track({type:2,doc:B}),Z=!0,(g&&this.Ha(B,g)>0||y&&this.Ha(B,y)<0)&&(m=!0)):!D&&B?(s.track({type:0,doc:B}),Z=!0):D&&!B&&(s.track({type:1,doc:D}),Z=!0,(g||y)&&(m=!0)),Z&&(B?(f=f.add(B),u=st?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{Ja:f,Xa:s,Cs:m,mutatedKeys:u}}eu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.Ja;this.Ja=t.Ja,this.mutatedKeys=t.mutatedKeys;const f=t.Xa.ga();f.sort((E,b)=>function(B,X){const st=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tt(20277,{Vt:Z})}};return st(B)-st(X)}(E.type,b.type)||this.Ha(E.doc,b.doc)),this.tu(s),o=o!=null&&o;const m=n&&!o?this.nu():[],g=this.ja.size===0&&this.current&&!o?1:0,y=g!==this.za;return this.za=g,f.length!==0||y?{snapshot:new Xa(this.query,t.Ja,u,f,t.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:m}:{ru:m}}Da(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new sT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(t){return!this.Ga.has(t)&&!!this.Ja.has(t)&&!this.Ja.get(t).hasLocalMutations}tu(t){t&&(t.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=t.current)}nu(){if(!this.current)return[];const t=this.ja;this.ja=Pt(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const n=[];return t.forEach(s=>{this.ja.has(s)||n.push(new Z0(s))}),this.ja.forEach(s=>{t.has(s)||n.push(new $0(s))}),n}su(t){this.Ga=t.$s,this.ja=Pt();const n=this.Za(t.documents);return this.applyChanges(n,!0)}ou(){return Xa.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const ap="SyncEngine";class $D{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class ZD{constructor(t){this.key=t,this._u=!1}}class JD{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.au={},this.uu=new Bs(m=>p0(m),mh),this.cu=new Map,this.lu=new Set,this.hu=new re(yt.comparator),this.Pu=new Map,this.Tu=new Xm,this.Iu={},this.Eu=new Map,this.du=Ya.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function WD(r,t,n=!0){const s=iA(r);let o;const u=s.uu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.ou()):o=await J0(s,t,n,!0),o}async function tO(r,t){const n=iA(r);await J0(n,t,!0,!1)}async function J0(r,t,n,s){const o=await yD(r.localStore,ci(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await eO(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&F0(r.remoteStore,o),m}async function eO(r,t,n,s,o){r.Ru=(b,D,B)=>async function(st,Z,ot,tt){let et=Z.view.Za(ot);et.Cs&&(et=await Wv(st.localStore,Z.query,!1).then(({documents:C})=>Z.view.Za(C,et)));const rt=tt&&tt.targetChanges.get(Z.targetId),W=tt&&tt.targetMismatches.get(Z.targetId)!=null,ft=Z.view.applyChanges(et,st.isPrimaryClient,rt,W);return uT(st,Z.targetId,ft.ru),ft.snapshot}(r,b,D,B);const u=await Wv(r.localStore,t,!0),f=new XD(t,u.$s),m=f.Za(u.documents),g=Gl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,g);uT(r,n,y.ru);const E=new $D(t,n,f);return r.uu.set(t,E),r.cu.has(n)?r.cu.get(n).push(t):r.cu.set(n,[t]),y.snapshot}async function nO(r,t,n){const s=wt(r),o=s.uu.get(t),u=s.cu.get(o.targetId);if(u.length>1)return s.cu.set(o.targetId,u.filter(f=>!mh(f,t))),void s.uu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await pm(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&Wm(s.remoteStore,o.targetId),_m(s,o.targetId)}).catch(to)):(_m(s,o.targetId),await pm(s.localStore,o.targetId,!0))}async function iO(r,t){const n=wt(r),s=n.uu.get(t),o=n.cu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Wm(n.remoteStore,s.targetId))}async function rO(r,t,n){const s=hO(r);try{const o=await function(f,m){const g=wt(f),y=we.now(),E=m.reduce((B,X)=>B.add(X.key),Pt());let b,D;return g.persistence.runTransaction("Locally write mutations","readwrite",B=>{let X=Yi(),st=Pt();return g.Bs.getEntries(B,E).next(Z=>{X=Z,X.forEach((ot,tt)=>{tt.isValidDocument()||(st=st.add(ot))})}).next(()=>g.localDocuments.getOverlayedDocuments(B,X)).next(Z=>{b=Z;const ot=[];for(const tt of m){const et=y2(tt,b.get(tt.key).overlayedDocument);et!=null&&ot.push(new Fr(tt.key,et,l0(et.value.mapValue),hi.exists(!0)))}return g.mutationQueue.addMutationBatch(B,y,ot,m)}).next(Z=>{D=Z;const ot=Z.applyToLocalDocumentSet(b,st);return g.documentOverlayCache.saveOverlays(B,Z.batchId,ot)})}).then(()=>({batchId:D.batchId,changes:_0(b)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,g){let y=f.Iu[f.currentUser.toKey()];y||(y=new re(Dt)),y=y.insert(m,g),f.Iu[f.currentUser.toKey()]=y}(s,o.batchId,n),await Ql(s,o.changes),await Eh(s.remoteStore)}catch(o){const u=rp(o,"Failed to persist write");n.reject(u)}}async function W0(r,t){const n=wt(r);try{const s=await mD(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n.Pu.get(u);f&&(Ht(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f._u=!0:o.modifiedDocuments.size>0?Ht(f._u,14607):o.removedDocuments.size>0&&(Ht(f._u,42227),f._u=!1))}),await Ql(n,s,t)}catch(s){await to(s)}}function lT(r,t,n){const s=wt(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.uu.forEach((u,f)=>{const m=f.view.Da(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const g=wt(f);g.onlineState=m;let y=!1;g.queries.forEach((E,b)=>{for(const D of b.ya)D.Da(m)&&(y=!0)}),y&&sp(g)}(s.eventManager,t),o.length&&s.au.j_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function sO(r,t,n){const s=wt(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s.Pu.get(t),u=o&&o.key;if(u){let f=new re(yt.comparator);f=f.insert(u,Ye.newNoDocument(u,bt.min()));const m=Pt().add(u),g=new _h(bt.min(),new Map,new re(Dt),f,m);await W0(s,g),s.hu=s.hu.remove(u),s.Pu.delete(t),op(s)}else await pm(s.localStore,t,!1).then(()=>_m(s,t,n)).catch(to)}async function aO(r,t){const n=wt(r),s=t.batch.batchId;try{const o=await dD(n.localStore,t);eA(n,s,null),tA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ql(n,o)}catch(o){await to(o)}}async function oO(r,t,n){const s=wt(r);try{const o=await function(f,m){const g=wt(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return g.mutationQueue.lookupMutationBatch(y,m).next(b=>(Ht(b!==null,37113),E=b.keys(),g.mutationQueue.removeMutationBatch(y,b))).next(()=>g.mutationQueue.performConsistencyCheck(y)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>g.localDocuments.getDocuments(y,E))})}(s.localStore,t);eA(s,t,n),tA(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Ql(s,o)}catch(o){await to(o)}}function tA(r,t){(r.Eu.get(t)||[]).forEach(n=>{n.resolve()}),r.Eu.delete(t)}function eA(r,t,n){const s=wt(r);let o=s.Iu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.Iu[s.currentUser.toKey()]=o}}function _m(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.cu.get(t))r.uu.delete(s),n&&r.au.Vu(s,n);r.cu.delete(t),r.isPrimaryClient&&r.Tu.Hr(t).forEach(s=>{r.Tu.containsKey(s)||nA(r,s)})}function nA(r,t){r.lu.delete(t.path.canonicalString());const n=r.hu.get(t);n!==null&&(Wm(r.remoteStore,n),r.hu=r.hu.remove(t),r.Pu.delete(n),op(r))}function uT(r,t,n){for(const s of n)s instanceof $0?(r.Tu.addReference(s.key,t),lO(r,s)):s instanceof Z0?(ct(ap,"Document no longer in limbo: "+s.key),r.Tu.removeReference(s.key,t),r.Tu.containsKey(s.key)||nA(r,s.key)):Tt(19791,{mu:s})}function lO(r,t){const n=t.key,s=n.path.canonicalString();r.hu.get(n)||r.lu.has(s)||(ct(ap,"New document in limbo: "+n),r.lu.add(s),op(r))}function op(r){for(;r.lu.size>0&&r.hu.size<r.maxConcurrentLimboResolutions;){const t=r.lu.values().next().value;r.lu.delete(t);const n=new yt(le.fromString(t)),s=r.du.next();r.Pu.set(s,new ZD(n)),r.hu=r.hu.insert(n,s),F0(r.remoteStore,new Dr(ci(Fm(n.path)),s,"TargetPurposeLimboResolution",ch.le))}}async function Ql(r,t,n){const s=wt(r),o=[],u=[],f=[];s.uu.isEmpty()||(s.uu.forEach((m,g)=>{f.push(s.Ru(g,t,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const b=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(y){o.push(y);const b=Zm.Rs(g.targetId,y);u.push(b)}}))}),await Promise.all(f),s.au.j_(o),await async function(g,y){const E=wt(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>$.forEach(y,D=>$.forEach(D.ds,B=>E.persistence.referenceDelegate.addReference(b,D.targetId,B)).next(()=>$.forEach(D.As,B=>E.persistence.referenceDelegate.removeReference(b,D.targetId,B)))))}catch(b){if(!eo(b))throw b;ct(Jm,"Failed to update sequence numbers: "+b)}for(const b of y){const D=b.targetId;if(!b.fromCache){const B=E.xs.get(D),X=B.snapshotVersion,st=B.withLastLimboFreeSnapshotVersion(X);E.xs=E.xs.insert(D,st)}}}(s.localStore,u))}async function uO(r,t){const n=wt(r);if(!n.currentUser.isEqual(t)){ct(ap,"User change. New user:",t.toKey());const s=await j0(n.localStore,t);n.currentUser=t,function(u,f){u.Eu.forEach(m=>{m.forEach(g=>{g.reject(new pt(J.CANCELLED,f))})}),u.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Ql(n,s.ks)}}function cO(r,t){const n=wt(r),s=n.Pu.get(t);if(s&&s._u)return Pt().add(s.key);{let o=Pt();const u=n.cu.get(t);if(!u)return o;for(const f of u){const m=n.uu.get(f);o=o.unionWith(m.view.Ya)}return o}}function iA(r){const t=wt(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=W0.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=cO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sO.bind(null,t),t.au.j_=KD.bind(null,t.eventManager),t.au.Vu=QD.bind(null,t.eventManager),t}function hO(r){const t=wt(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=aO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=oO.bind(null,t),t}class eh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=vh(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,n){return null}bu(t,n){return null}wu(t){return fD(this.persistence,new uD,t.initialUser,this.serializer)}yu(t){return new z0($m.fi,this.serializer)}pu(t){return new vD}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eh.provider={build:()=>new eh};class fO extends eh{constructor(t){super(),this.cacheSizeBytes=t}Su(t,n){Ht(this.persistence.referenceDelegate instanceof Wc,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Y2(s,t.asyncQueue,n)}yu(t){const n=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new z0(s=>Wc.fi(s,n),this.serializer)}}class vm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>lT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=uO.bind(null,this.syncEngine),await BD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new HD}()}createDatastore(t){const n=vh(t.databaseInfo.databaseId),s=function(u){return new bD(u)}(t.databaseInfo);return function(u,f,m,g){return new CD(u,f,m,g)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,m){return new OD(s,o,u,f,m)}(this.localStore,this.datastore,t.asyncQueue,n=>lT(this.syncEngine,n,0),function(){return nT.C()?new nT:new TD}())}createSyncEngine(t,n){return function(o,u,f,m,g,y,E){const b=new JD(o,u,f,m,g,y);return E&&(b.Au=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=wt(o);ct(Us,"RemoteStore shutting down."),u.Ta.add(5),await Kl(u),u.Ea.shutdown(),u.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vm.provider={build:()=>new vm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.vu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.vu(this.observer.error,t):Qi("Uncaught Error in snapshot listener:",t.toString()))}Cu(){this.muted=!0}vu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr="FirestoreClient";class mO{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Qe.UNAUTHENTICATED,this.clientId=JE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{ct(jr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(ct(jr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=rp(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Qd(r,t){r.asyncQueue.verifyOperationInProgress(),ct(jr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await j0(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function cT(r,t){r.asyncQueue.verifyOperationInProgress();const n=await pO(r);ct(jr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>rT(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>rT(t.remoteStore,o)),r._onlineComponents=t}async function pO(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ct(jr,"Using user provided OfflineComponentProvider");try{await Qd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===J.FAILED_PRECONDITION||o.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Fa("Error using user provided cache. Falling back to memory cache: "+n),await Qd(r,new eh)}}else ct(jr,"Using default OfflineComponentProvider"),await Qd(r,new fO(void 0));return r._offlineComponents}async function rA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ct(jr,"Using user provided OnlineComponentProvider"),await cT(r,r._uninitializedComponentsProvider._online)):(ct(jr,"Using default OnlineComponentProvider"),await cT(r,new vm))),r._onlineComponents}function gO(r){return rA(r).then(t=>t.syncEngine)}async function hT(r){const t=await rA(r),n=t.eventManager;return n.onListen=WD.bind(null,t.syncEngine),n.onUnlisten=nO.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=tO.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=iO.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(r,t,n){if(!n)throw new pt(J.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function _O(r,t,n,s){if(t===!0&&s===!0)throw new pt(J.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function dT(r){if(!yt.isDocumentKey(r))throw new pt(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function lp(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":Tt(12329,{type:typeof r})}function Vr(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new pt(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lp(r);throw new pt(J.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="firestore.googleapis.com",mT=!0;class pT{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new pt(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aA,this.ssl=mT}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:mT;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=L0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<K2)throw new pt(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_O("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sA((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new pt(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new pt(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new pt(J.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class up{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pt(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new pt(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pT(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new AC;switch(s.type){case"firstParty":return new RC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new pt(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=fT.get(n);s&&(ct("ComponentProvider","Removing Datastore"),fT.delete(n),s.terminate())}(this),Promise.resolve()}}function vO(r,t,n,s={}){var o;r=Vr(r,up);const u=Ll(t),f=r._getSettings(),m=Object.assign(Object.assign({},f),{emulatorOptions:r._getEmulatorOptions()}),g=`${t}:${n}`;u&&(OT(`https://${g}`),NT("Firestore",!0)),f.host!==aA&&f.host!==g&&Fa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},f),{host:g,ssl:u,emulatorOptions:s});if(!kr(y,m)&&(r._setSettings(y),s.mockUserToken)){let E,b;if(typeof s.mockUserToken=="string")E=s.mockUserToken,b=Qe.MOCK_USER;else{E=fb(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new pt(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Qe(D)}r._authCredentials=new SC(new $E(E,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ah(this.firestore,t,this._query)}}class _n{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _n(this.firestore,t,this._key)}}class xl extends Ah{constructor(t,n,s){super(t,n,Fm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _n(this.firestore,null,new yt(t))}withConverter(t){return new xl(this.firestore,t,this._path)}}function gT(r,t,...n){if(r=Ie(r),arguments.length===1&&(t=JE.newId()),yO("doc","path",t),r instanceof up){const s=le.fromString(t,...n);return dT(s),new _n(r,null,new yt(s))}{if(!(r instanceof _n||r instanceof xl))throw new pt(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(le.fromString(t,...n));return dT(s),new _n(r.firestore,r instanceof xl?r.converter:null,new yt(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="AsyncQueue";class _T{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new q0(this,"async_queue_retry"),this.ec=()=>{const s=Kd();s&&ct(yT,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=t;const n=Kd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const n=Kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Ns;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!eo(t))throw t;ct(yT,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const n=this.tc.then(()=>(this.Yu=!0,t().catch(s=>{throw this.Ju=s,this.Yu=!1,Qi("INTERNAL UNHANDLED ERROR: ",vT(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=n,n}enqueueAfterDelay(t,n,s){this.nc(),this.Xu.indexOf(t)>-1&&(n=0);const o=ip.createAndSchedule(this,t,n,s,u=>this.oc(u));return this.Hu.push(o),o}nc(){this.Ju&&Tt(47125,{_c:vT(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const n of this.Hu)if(n.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const n=this.Hu.indexOf(t);this.Hu.splice(n,1)}}function vT(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(r){return function(n,s){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Ul extends up{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new _T,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new _T(t),this._firestoreClient=void 0,await t}}}function TO(r,t){const n=typeof r=="object"?r:Sm(),s=typeof r=="string"?r:Kc,o=zs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=cb("firestore");u&&vO(o,...u)}return o}function oA(r){if(r._terminated)throw new pt(J.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||EO(r),r._firestoreClient}function EO(r){var t,n,s;const o=r._freezeSettings(),u=function(m,g,y,E){return new BC(m,g,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,sA(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new mO(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $a(qe.fromBase64String(t))}catch(n){throw new pt(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new $a(qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new pt(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new pt(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new pt(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Dt(this._lat,t._lat)||Dt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=/^__.*__$/;class SO{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Fr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Fl(t,this.data,n,this.fieldTransforms)}}class lA{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Fr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function uA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tt(40011,{hc:r})}}class dp{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Pc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(t){return new dp(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Tc({path:s,Ec:!1});return o.dc(t),o}Ac(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.Tc({path:s,Ec:!1});return o.Pc(),o}Rc(t){return this.Tc({path:void 0,Ec:!0})}Vc(t){return nh(t,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let t=0;t<this.path.length;t++)this.dc(this.path.get(t))}dc(t){if(t.length===0)throw this.Vc("Document fields must not be empty");if(uA(this.hc)&&AO.test(t))throw this.Vc('Document fields cannot begin and end with "__"')}}class bO{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||vh(t)}gc(t,n,s,o=!1){return new dp({hc:t,methodName:n,fc:s,path:Be.emptyPath(),Ec:!1,mc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cA(r){const t=r._freezeSettings(),n=vh(r._databaseId);return new bO(r._databaseId,!!t.ignoreUndefinedProperties,n)}function wO(r,t,n,s,o,u={}){const f=r.gc(u.merge||u.mergeFields?2:0,t,n,o);mp("Data must be an object, but it was:",f,s);const m=hA(s,f);let g,y;if(u.merge)g=new gn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const b of u.mergeFields){const D=Tm(t,b,n);if(!f.contains(D))throw new pt(J.INVALID_ARGUMENT,`Field '${D}' is specified in your field mask but missing from your input data.`);dA(E,D)||E.push(D)}g=new gn(E),y=f.fieldTransforms.filter(b=>g.covers(b.field))}else g=null,y=f.fieldTransforms;return new SO(new sn(m),g,y)}class bh extends cp{_toFieldTransform(t){if(t.hc!==2)throw t.hc===1?t.Vc(`${this._methodName}() can only appear at the top level of your update data`):t.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof bh}}function RO(r,t,n,s){const o=r.gc(1,t,n);mp("Data must be an object, but it was:",o,s);const u=[],f=sn.empty();Hr(s,(g,y)=>{const E=pp(t,g,n);y=Ie(y);const b=o.Ac(E);if(y instanceof bh)u.push(E);else{const D=wh(y,b);D!=null&&(u.push(E),f.set(E,D))}});const m=new gn(u);return new lA(f,m,o.fieldTransforms)}function IO(r,t,n,s,o,u){const f=r.gc(1,t,n),m=[Tm(t,s,n)],g=[o];if(u.length%2!=0)throw new pt(J.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let D=0;D<u.length;D+=2)m.push(Tm(t,u[D])),g.push(u[D+1]);const y=[],E=sn.empty();for(let D=m.length-1;D>=0;--D)if(!dA(y,m[D])){const B=m[D];let X=g[D];X=Ie(X);const st=f.Ac(B);if(X instanceof bh)y.push(B);else{const Z=wh(X,st);Z!=null&&(y.push(B),E.set(B,Z))}}const b=new gn(y);return new lA(E,b,f.fieldTransforms)}function wh(r,t){if(fA(r=Ie(r)))return mp("Unsupported field value:",t,r),hA(r,t);if(r instanceof cp)return function(s,o){if(!uA(o.hc))throw o.Vc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Vc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Ec&&t.hc!==4)throw t.Vc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let g=wh(m,o.Rc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=Ie(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return h2(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=we.fromDate(s);return{timestampValue:Jc(o.serializer,u)}}if(s instanceof we){const u=new we(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Jc(o.serializer,u)}}if(s instanceof hp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof $a)return{bytesValue:N0(o.serializer,s._byteString)};if(s instanceof _n){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Vc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Ym(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof fp)return function(f,m){return{mapValue:{fields:{[a0]:{stringValue:o0},[Qc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Vc("VectorValues must only contain numeric values.");return Gm(m.serializer,y)})}}}}}}(s,o);throw o.Vc(`Unsupported field value: ${lp(s)}`)}(r,t)}function hA(r,t){const n={};return t0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Hr(r,(s,o)=>{const u=wh(o,t.Ic(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function fA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof we||r instanceof hp||r instanceof $a||r instanceof _n||r instanceof cp||r instanceof fp)}function mp(r,t,n){if(!fA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=lp(n);throw s==="an object"?t.Vc(r+" a custom object"):t.Vc(r+" "+s)}}function Tm(r,t,n){if((t=Ie(t))instanceof Sh)return t._internalPath;if(typeof t=="string")return pp(r,t);throw nh("Field path arguments must be of type string or ",r,!1,void 0,n)}const CO=new RegExp("[~\\*/\\[\\]]");function pp(r,t,n){if(t.search(CO)>=0)throw nh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Sh(...t.split("."))._internalPath}catch{throw nh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function nh(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new pt(J.INVALID_ARGUMENT,m+r+g)}function dA(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new DO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(pA("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DO extends mA{data(){return super.data()}}function pA(r,t){return typeof t=="string"?pp(r,t):t instanceof Sh?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OO(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new pt(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NO{convertValue(t,n="none"){switch(Lr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ur(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Tt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Hr(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[Qc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>fe(f.doubleValue));return new fp(u)}convertGeoPoint(t){return new hp(fe(t.latitude),fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=fh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Nl(t));default:return null}}convertTimestamp(t){const n=xr(t);return new we(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=le.fromString(t);Ht(U0(s),9688,{name:t});const o=new Ml(s.get(1),s.get(3)),u=new yt(s.popFirst(5));return o.isEqual(n)||Qi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gA extends mA{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new kc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(pA("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class kc extends gA{data(t={}){return super.data(t)}}class VO{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new vl(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new kc(this._firestore,this._userDataWriter,s.key,s,new vl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new pt(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const g=new kc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new vl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const g=new kc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new vl(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:kO(m.type),doc:g,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tt(61501,{type:r})}}class yA extends NO{constructor(t){super(),this.firestore=t}convertBytes(t){return new $a(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function PO(r,t,n){r=Vr(r,_n);const s=Vr(r.firestore,Ul),o=MO(r.converter,t);return _A(s,[wO(cA(s),"setDoc",r._key,o,r.converter!==null,n).toMutation(r._key,hi.none())])}function xO(r,t,n,...s){r=Vr(r,_n);const o=Vr(r.firestore,Ul),u=cA(o);let f;return f=typeof(t=Ie(t))=="string"||t instanceof Sh?IO(u,"updateDoc",r._key,t,n,s):RO(u,"updateDoc",r._key,t),_A(o,[f.toMutation(r._key,hi.exists(!0))])}function UO(r,...t){var n,s,o;r=Ie(r);let u={includeMetadataChanges:!1,source:"default"},f=0;typeof t[f]!="object"||TT(t[f])||(u=t[f],f++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(TT(t[f])){const b=t[f];t[f]=(n=b.next)===null||n===void 0?void 0:n.bind(b),t[f+1]=(s=b.error)===null||s===void 0?void 0:s.bind(b),t[f+2]=(o=b.complete)===null||o===void 0?void 0:o.bind(b)}let g,y,E;if(r instanceof _n)y=Vr(r.firestore,Ul),E=Fm(r._key.path),g={next:b=>{t[f]&&t[f](LO(y,r,b))},error:t[f+1],complete:t[f+2]};else{const b=Vr(r,Ah);y=Vr(b.firestore,Ul),E=b._query;const D=new yA(y);g={next:B=>{t[f]&&t[f](new VO(y,D,b,B))},error:t[f+1],complete:t[f+2]},OO(r._query)}return function(D,B,X,st){const Z=new dO(st),ot=new YD(B,Z,X);return D.asyncQueue.enqueueAndForget(async()=>FD(await hT(D),ot)),()=>{Z.Cu(),D.asyncQueue.enqueueAndForget(async()=>GD(await hT(D),ot))}}(oA(y),E,m,g)}function _A(r,t){return function(s,o){const u=new Ns;return s.asyncQueue.enqueueAndForget(async()=>rO(await gO(s),o,u)),u.promise}(oA(r),t)}function LO(r,t,n){const s=n.docs.get(t._key),o=new yA(r);return new gA(r,o,t._key,s,new vl(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(o){Wa=o})(Za),di(new Bn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new Ul(new bC(s.getProvider("auth-internal")),new IC(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pt(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ml(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Vn(Sv,bv,t),Vn(Sv,bv,"esm2017")})();const zO={apiKey:"AIzaSyAPU5Q2b1hs-73yzTsxv139GZH07T-Ez_k",authDomain:"tako-10d42.firebaseapp.com",projectId:"tako-10d42",storageBucket:"tako-10d42.firebasestorage.app",messagingSenderId:"1070598966367",appId:"1:1070598966367:web:9bed2af602664deab7dfea",measurementId:"G-QF73DQ6EY7"},gp=LT(zO);iR(gp);const bc=TC(gp),ET=TO(gp),vA=Rt.createContext();function jO({children:r}){const[t,n]=Rt.useState(null),[s,o]=Rt.useState(!0);Rt.useEffect(()=>lI(bc,E=>{n(E),o(!1)}),[]);function u(y,E){return rI(bc,y,E)}function f(y,E){return sI(bc,y,E)}function m(){return uI(bc)}const g={currentUser:t,signUp:u,signIn:f,logOut:m};return lt.jsx(vA.Provider,{value:g,children:!s&&r})}function Rh(){return Rt.useContext(vA)}function BO(){const{signUp:r}=Rh(),[t,n]=Rt.useState(""),[s,o]=Rt.useState(""),[u,f]=Rt.useState("");async function m(g){g.preventDefault(),f("");try{await r(t,s),n(""),o("")}catch(y){f(y.message)}}return lt.jsxs("form",{onSubmit:m,children:[u&&lt.jsx("p",{className:"auth-error",children:u}),lt.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:g=>n(g.target.value),required:!0}),lt.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:g=>o(g.target.value),required:!0}),lt.jsx("button",{type:"submit",children:"Sign Up"})]})}function qO(){const{signIn:r}=Rh(),[t,n]=Rt.useState(""),[s,o]=Rt.useState(""),[u,f]=Rt.useState("");async function m(g){g.preventDefault(),f("");try{await r(t,s),n(""),o("")}catch(y){f(y.message)}}return lt.jsxs("form",{onSubmit:m,children:[u&&lt.jsx("p",{className:"auth-error",children:u}),lt.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:g=>n(g.target.value),required:!0}),lt.jsx("input",{type:"password",placeholder:"Password",value:s,onChange:g=>o(g.target.value),required:!0}),lt.jsx("button",{type:"submit",children:"Sign In"})]})}function HO({projects:r,currentProject:t,setCurrentProject:n,addProject:s}){const[o,u]=Rt.useState(""),[f,m]=Rt.useState(!1);return lt.jsxs("div",{className:"project-tabs-container",children:[Object.keys(r).map(g=>lt.jsx("button",{className:g===t?"active-tab":"basic-tab",onClick:()=>{n(g),m(!1)},children:g},g)),f?lt.jsxs("form",{className:"add-button-form",onSubmit:g=>{g.preventDefault(),s(o),u(""),m(!1)},children:[lt.jsx("button",{className:"add-button-on",type:"submit",children:" Add "}),lt.jsx("input",{className:"project-name-input",value:o,onChange:g=>{u(g.target.value)}})]}):lt.jsx("button",{className:"add-button-off",onClick:()=>{m(!0),n(null)},children:"Add"})]})}function AT({subtasks:r=[],taskName:t,addSubtask:n,checkSubtask:s,deleteSubtask:o,editSubtask:u}){const[f,m]=Rt.useState(""),[g,y]=Rt.useState(""),[E,b]=Rt.useState(null),[D,B]=Rt.useState(""),[X,st]=Rt.useState("");function Z(rt,W){W.stopPropagation(),s(t,rt)}function ot(rt){const W=D.trim();if(W==="")return;if(r.some(C=>C.name.trim().toLowerCase()===W.toLowerCase()&&C.name!==rt)){alert("Another subtask with that name already exists.");return}u(t,rt,{name:W,deadline:X}),b(null)}function tt(rt){return rt===""?"":rt==="0"?"Due Today":rt==="1"?"Due Tomorrow":`Due in ${rt} days`}const et=[...r].sort((rt,W)=>{if(rt.done!==W.done)return rt.done?1:-1;const ft=rt.deadline===""?1/0:Number(rt.deadline),C=W.deadline===""?1/0:Number(W.deadline);return ft-C});return lt.jsx("div",{className:"subtask-list",children:et.map(rt=>lt.jsx("div",{className:"subtask-container",tabIndex:0,onBlur:W=>{E===rt.name&&!W.currentTarget.contains(W.relatedTarget)&&ot(rt.name)},children:lt.jsx("div",{className:"subtask-block",children:lt.jsxs("div",{className:"subtask-main",children:[lt.jsx("input",{type:"checkbox",checked:rt.done,onChange:W=>Z(rt.name,W)}),E===rt.name?lt.jsxs("div",{className:"subtask-name-deadline-edit",children:[lt.jsx("input",{className:"subtask-name-edit",value:D,autoFocus:!0,onChange:W=>B(W.target.value),onKeyDown:W=>{W.key==="Enter"&&ot(rt.name),W.key==="Escape"&&b(null)}}),lt.jsx("input",{className:"subtask-date-edit",type:"number",value:X,onChange:W=>st(W.target.value),onKeyDown:W=>{W.key==="Enter"&&ot(rt.name),W.key==="Escape"&&b(null)}}),lt.jsx("button",{className:"subtask-delete-btn",onClick:()=>{o(t,rt.name),b(null)},children:"X"})]}):lt.jsxs("div",{className:"subtask-name-deadline",children:[lt.jsx("span",{className:`subtask-name ${rt.done?"done-subtask":""}`,onClick:()=>{b(rt.name),B(rt.name),st(rt.deadline)},children:rt.name}),lt.jsx("span",{className:"subtask-deadline",children:tt(rt.deadline)})]})]})})},rt.name))})}function FO({projects:r,currentProject:t,addTask:n,checkTask:s,deleteTask:o,editTask:u,addSubtask:f,checkSubtask:m,deleteSubtask:g,editSubtask:y}){if(!t||!r[t])return null;const[E,b]=Rt.useState(""),[D,B]=Rt.useState(""),[X,st]=Rt.useState(null),[Z,ot]=Rt.useState(""),[tt,et]=Rt.useState(""),[rt,W]=Rt.useState(!1),[ft,C]=Rt.useState(""),[S,w]=Rt.useState(""),N=r[t];function V(H){H.preventDefault();const nt={name:E,deadline:D,done:!1,subtasks:[]};if(N.some(O=>O.name.trim().toLowerCase()===E.trim().toLowerCase())){alert("Task with that name already exists.");return}n(nt),b(""),B("")}function P(H){s(H)}function I(H){const nt=N.find(Q=>Q.name===H),At=Z.trim();if(At==="")return;if(N.some(Q=>Q.name.trim().toLowerCase()===At.toLowerCase()&&Q.name!==H)){alert("Another task with that name already exists.");return}if(At===H&&tt===nt.deadline){st(null);return}u(H,{name:At,deadline:tt}),st(null)}function _e(H){if(!H)return"";const nt=new Date(H),O=new Date().setHours(0,0,0,0)-nt.setHours(0,0,0,0),Q=Math.round(O/(1e3*60*60*24));return Q===0?"Done Today":Q===1?"Done Yesterday":`Done ${Q} days ago`}function te(H){return H===""?"":H==="0"?"Due Today":H==="1"?"Due Tomorrow":`Due in ${H} days`}const F=[...N].sort((H,nt)=>{if(H.done!==nt.done)return H.done?1:-1;const At=H.deadline===""?1/0:Number(H.deadline),O=nt.deadline===""?1/0:Number(nt.deadline);return At-O});return lt.jsxs("div",{className:"task-list",children:[lt.jsxs("form",{className:"task-input",onSubmit:V,children:[lt.jsx("button",{className:"add-task-button",type:"submit",children:"Add"}),lt.jsx("input",{type:"text",placeholder:"Task name",value:E,onChange:H=>b(H.target.value)}),lt.jsx("input",{type:"number",placeholder:"Due in ...",min:0,value:D,onChange:H=>B(H.target.value)})]}),F.map(H=>lt.jsxs("div",{className:"task-container",tabIndex:0,onBlur:nt=>{X===H.name&&!nt.currentTarget.contains(nt.relatedTarget)&&I(H.name)},children:[lt.jsx("div",{className:"task-block",children:lt.jsxs("div",{className:"task-main",children:[lt.jsx("input",{type:"checkbox",checked:H.done,onChange:()=>P(H.name)}),X===H.name?lt.jsxs("div",{className:"task-name-deadline-edit",children:[lt.jsx("input",{className:"task-name-edit",value:Z,autoFocus:!0,onChange:nt=>ot(nt.target.value||H.name),onKeyDown:nt=>{nt.key==="Enter"&&I(H.name),nt.key==="Escape"&&st(null)}}),lt.jsx("input",{className:"task-date-edit",type:"number",placeholder:"Due in ...",value:tt,min:0,onChange:nt=>et(nt.target.value),onKeyDown:nt=>{nt.key==="Enter"&&I(H.name),nt.key==="Escape"&&st(null)}})]}):lt.jsx("div",{children:lt.jsxs("div",{className:"task-name-deadline",children:[lt.jsx("span",{className:`task-name ${H.done?"done-task":""}`,onClick:()=>{st(H.name),ot(H.name),et(H.deadline),C(""),W(!1)},children:H.name}),lt.jsx("span",{className:"task-deadline",children:H.done?_e(H.completedAt):te(H.deadline)})]})})]})}),X!==H.name&&H.subtasks&&H.subtasks.length>0&&lt.jsx("div",{className:"subtask-list-outer",children:lt.jsx(AT,{subtasks:H.subtasks,taskName:H.name,addSubtask:f,checkSubtask:m,deleteSubtask:g,editSubtask:y})}),X===H.name&&lt.jsxs("div",{className:"task-dropdown",children:[lt.jsx(AT,{subtasks:H.subtasks||[],taskName:H.name,addSubtask:f,checkSubtask:m,deleteSubtask:g,editSubtask:y}),lt.jsxs("div",{className:"subtask-delete-row",children:[rt?lt.jsxs("div",{className:"subtask-block",onBlur:()=>{const nt=ft.trim();nt!==""&&f(H.name,{name:nt,deadline:S,done:!1}),C(""),w(""),W(!1)},children:[" ",lt.jsx("input",{className:"subtask-new-input",type:"text",value:ft,onChange:nt=>C(nt.target.value),onKeyDown:nt=>{if(nt.key==="Enter"){const At=ft.trim();At!==""&&f(H.name,{name:At,deadline:S,done:!1}),C(""),w(""),W(!1)}nt.key==="Escape"&&(W(!1),C(""),w(""))}}),lt.jsx("input",{className:"subtask-date-edit",type:"number",min:0,value:S,onChange:nt=>w(nt.target.value),onKeyDown:nt=>{if(nt.key==="Enter"){const At=ft.trim();At!==""&&f(H.name,{name:At,deadline:S,done:!1}),C(""),w(""),W(!1)}nt.key==="Escape"&&(W(!1),C(""),w(""))}})]}):lt.jsx("button",{className:"subtask-add-button",onClick:()=>W(!0),children:"+ Add Subtask"}),lt.jsx("button",{className:"task-delete-inline",onClick:()=>{window.confirm(`Delete task "${H.name}"?`)&&(o(H.name),st(null))},children:"Delete"})]})]})]},H.name))]})}function GO(){const{currentUser:r}=Rh(),[t,n]=Rt.useState(null),[s,o]=Rt.useState(!0);Rt.useEffect(()=>{if(!r){n(null),o(!1);return}o(!0);const ot=gT(ET,"users",r.uid),tt=UO(ot,et=>{if(et.exists())n(et.data()),o(!1);else{const rt={projects:{Personal:[]},currentProject:"Personal"};PO(ot,rt).then(()=>{n(rt),o(!1)}).catch(W=>{console.error("Error initializing user data:",W),o(!1)})}},et=>{console.error("Error fetching user document:",et),o(!1)});return()=>tt()},[r]);const u=Rt.useCallback(async ot=>{if(!r)return;const tt=gT(ET,"users",r.uid);try{await xO(tt,ot)}catch(et){console.error("Error updating user data:",et)}},[r]),f=Rt.useCallback(async ot=>{if(!t)return;const tt=ot.trim();if(tt===""||t.projects.hasOwnProperty(tt))return;const et={...t.projects,[tt]:[]};await u({projects:et,currentProject:tt})},[t,u]),m=Rt.useCallback(async ot=>{if(!t||!t.projects.hasOwnProperty(ot))return;let tt={...t.projects};delete tt[ot];let et=t.currentProject;if(t.currentProject===ot){const rt=Object.keys(tt);rt.length>0?et=rt[0]:(et="Personal",tt={Personal:[]})}await u({projects:tt,currentProject:et})},[t,u]),g=Rt.useCallback(async ot=>{t&&t.projects.hasOwnProperty(ot)&&await u({currentProject:ot})},[t,u]),y=Rt.useCallback(async ot=>{if(!t)return;const tt=t.currentProject;if(!tt)return;const rt=[...t.projects[tt]||[],ot],W={...t.projects,[tt]:rt};await u({projects:W})},[t,u]),E=Rt.useCallback(async ot=>{if(!t)return;const tt=t.currentProject;if(!tt)return;const rt=(t.projects[tt]||[]).filter(ft=>ft.name!==ot),W={...t.projects,[tt]:rt};await u({projects:W})},[t,u]),b=Rt.useCallback(async ot=>{if(!t)return;const tt=t.currentProject;if(!tt)return;const rt=(t.projects[tt]||[]).map(ft=>{if(ft.name===ot){const C=new Date().toISOString();if(ft.done){const{completedAt:S,...w}=ft;return{...w,done:!1}}else return{...ft,done:!0,completedAt:C}}return ft}),W={...t.projects,[tt]:rt};await u({projects:W})},[t,u]),D=Rt.useCallback(async(ot,tt)=>{if(!t)return;const et=t.currentProject;if(!et)return;const W=(t.projects[et]||[]).map(C=>C.name===ot?{...C,...tt}:C),ft={...t.projects,[et]:W};await u({projects:ft})},[t,u]),B=Rt.useCallback(async(ot,tt)=>{if(!t)return;const et=t.currentProject;if(!et)return;const W=(t.projects[et]||[]).map(C=>{if(C.name===ot){const S=C.subtasks||[];return S.some(w=>w.name.trim().toLowerCase()===tt.name.trim().toLowerCase())?C:{...C,subtasks:[...S,tt]}}return C}),ft={...t.projects,[et]:W};await u({projects:ft})},[t,u]),X=Rt.useCallback(async(ot,tt)=>{if(!t)return;const et=t.currentProject;if(!et)return;const W=(t.projects[et]||[]).map(C=>{if(C.name===ot){const w=(C.subtasks||[]).map(N=>N.name===tt?{...N,done:!N.done}:N);return{...C,subtasks:w}}return C}),ft={...t.projects,[et]:W};await u({projects:ft})},[t,u]),st=Rt.useCallback(async(ot,tt)=>{if(!t)return;const et=t.currentProject;if(!et)return;const W=(t.projects[et]||[]).map(C=>{if(C.name===ot){const S=(C.subtasks||[]).filter(w=>w.name!==tt);return{...C,subtasks:S}}return C}),ft={...t.projects,[et]:W};await u({projects:ft})},[t,u]),Z=Rt.useCallback(async(ot,tt,et)=>{if(!t)return;const rt=t.currentProject;if(!rt)return;const ft=(t.projects[rt]||[]).map(S=>{if(S.name===ot){const N=(S.subtasks||[]).map(V=>V.name===tt?{...V,...et}:V);return{...S,subtasks:N}}return S}),C={...t.projects,[rt]:ft};await u({projects:C})},[t,u]);return{projects:(t==null?void 0:t.projects)||{},currentProject:(t==null?void 0:t.currentProject)||"Personal",setCurrentProject:g,addProject:f,deleteProject:m,addTask:y,deleteTask:E,checkTask:b,editTask:D,addSubtask:B,checkSubtask:X,deleteSubtask:st,editSubtask:Z,loading:s}}function KO(){const{currentUser:r,logOut:t}=Rh();if(!r)return lt.jsxs("div",{className:"auth-container",children:[lt.jsx("h1",{className:"auth-title",children:"Welcome to TAKO"}),lt.jsxs("div",{className:"auth-forms",children:[lt.jsxs("div",{className:"auth-card",children:[lt.jsx("h2",{className:"auth-card-title",children:"Create an Account"}),lt.jsx(BO,{})]}),lt.jsx("div",{className:"auth-separator",children:"OR"}),lt.jsxs("div",{className:"auth-card",children:[lt.jsx("h2",{className:"auth-card-title",children:"Log In"}),lt.jsx(qO,{})]})]})]});const{projects:n,currentProject:s,setCurrentProject:o,addProject:u,addTask:f,deleteTask:m,checkTask:g,editTask:y,addSubtask:E,checkSubtask:b,deleteSubtask:D,editSubtask:B,loading:X}=GO();return X?lt.jsx("div",{style:{color:"white",textAlign:"center",marginTop:"2rem"},children:"Loading…"}):lt.jsx("div",{className:"app-wrapper",children:lt.jsxs("div",{className:"app-content",children:[lt.jsx("aside",{className:"sidebar",children:lt.jsx(HO,{projects:n,currentProject:s,setCurrentProject:o,addProject:u})}),lt.jsxs("div",{className:"main-section",children:[lt.jsx("header",{className:"app-header",children:lt.jsxs("div",{className:"user-info",children:["Logged in as ",lt.jsx("strong",{children:r.email}),lt.jsx("button",{className:"logout-button",onClick:t,children:"Log Out"})]})}),lt.jsx("main",{className:"task-panel",children:lt.jsx("div",{className:"task-list-container",children:lt.jsx(FO,{projects:n,currentProject:s,addTask:f,checkTask:g,deleteTask:m,editTask:y,addSubtask:E,checkSubtask:b,deleteSubtask:D,editSubtask:B})})})]})]})})}eb.createRoot(document.getElementById("root")).render(lt.jsx(QS.StrictMode,{children:lt.jsx(jO,{children:lt.jsx(KO,{})})}));
