(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function fa(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const J={},Tt=[],Pe=()=>{},Fs=()=>!1,Ls=/^on[^a-z]/,er=e=>Ls.test(e),ca=e=>e.startsWith("onUpdate:"),ce=Object.assign,ua=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},js=Object.prototype.hasOwnProperty,Y=(e,t)=>js.call(e,t),F=Array.isArray,Nt=e=>nr(e)==="[object Map]",eo=e=>nr(e)==="[object Set]",D=e=>typeof e=="function",oe=e=>typeof e=="string",tr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",to=e=>(G(e)||D(e))&&D(e.then)&&D(e.catch),no=Object.prototype.toString,nr=e=>no.call(e),Ds=e=>nr(e).slice(8,-1),ro=e=>nr(e)==="[object Object]",da=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$n=fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},$s=/-(\w)/g,De=rr(e=>e.replace($s,(t,n)=>n?n.toUpperCase():"")),zs=/\B([A-Z])/g,zt=rr(e=>e.replace(zs,"-$1").toLowerCase()),ar=rr(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=rr(e=>e?`on${ar(e)}`:""),yt=(e,t)=>!Object.is(e,t),zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Rr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Va;const Fr=()=>Va||(Va=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ma(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=oe(r)?Ys(r):ma(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(oe(e)||G(e))return e}const Us=/;(?![^(]*\))/g,Hs=/:([^]+)/,Bs=/\/\*[^]*?\*\//g;function Ys(e){const t={};return e.replace(Bs,"").split(Us).forEach(n=>{if(n){const r=n.split(Hs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function pa(e){let t="";if(oe(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=pa(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ws="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ks=fa(Ws);function ao(e){return!!e||e===""}const Vt=e=>oe(e)?e:e==null?"":F(e)||G(e)&&(e.toString===no||!D(e.toString))?JSON.stringify(e,io,2):String(e),io=(e,t)=>t&&t.__v_isRef?io(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:eo(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!F(t)&&!ro(t)?String(t):t;let ye;class oo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function so(e){return new oo(e)}function Vs(e,t=ye){t&&t.active&&t.effects.push(e)}function lo(){return ye}function qs(e){ye&&ye.cleanups.push(e)}const ha=e=>{const t=new Set(e);return t.w=0,t.n=0,t},fo=e=>(e.w&rt)>0,co=e=>(e.n&rt)>0,Xs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=rt},Js=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];fo(a)&&!co(a)?a.delete(e):t[n++]=a,a.w&=~rt,a.n&=~rt}t.length=n}},Kn=new WeakMap;let Zt=0,rt=1;const Lr=30;let Oe;const vt=Symbol(""),jr=Symbol("");class va{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vs(this,r)}run(){if(!this.active)return this.fn();let t=Oe,n=et;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Oe,Oe=this,et=!0,rt=1<<++Zt,Zt<=Lr?Xs(this):qa(this),this.fn()}finally{Zt<=Lr&&Js(this),rt=1<<--Zt,Oe=this.parent,et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(qa(this),this.onStop&&this.onStop(),this.active=!1)}}function qa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let et=!0;const uo=[];function Ut(){uo.push(et),et=!1}function Ht(){const e=uo.pop();et=e===void 0?!0:e}function ve(e,t,n){if(et&&Oe){let r=Kn.get(e);r||Kn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ha()),mo(a)}}function mo(e,t){let n=!1;Zt<=Lr?co(e)||(e.n|=rt,n=!fo(e)):n=!e.has(Oe),n&&(e.add(Oe),Oe.deps.push(e))}function He(e,t,n,r,a,i){const o=Kn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!tr(u)&&u>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?da(n)&&s.push(o.get("length")):(s.push(o.get(vt)),Nt(e)&&s.push(o.get(jr)));break;case"delete":F(e)||(s.push(o.get(vt)),Nt(e)&&s.push(o.get(jr)));break;case"set":Nt(e)&&s.push(o.get(vt));break}if(s.length===1)s[0]&&Dr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Dr(ha(l))}}function Dr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Xa(r);for(const r of n)r.computed||Xa(r)}function Xa(e,t){(e!==Oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Zs(e,t){var n;return(n=Kn.get(e))==null?void 0:n.get(t)}const Qs=fa("__proto__,__v_isRef,__isVue"),po=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(tr)),Ja=Gs();function Gs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(W)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ut();const r=W(this)[t].apply(this,n);return Ht(),r}}),e}function el(e){const t=W(this);return ve(t,"has",e),t.hasOwnProperty(e)}class ho{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?ml:yo:i?bo:go).get(t))return t;const o=F(t);if(!a){if(o&&Y(Ja,n))return Reflect.get(Ja,n,r);if(n==="hasOwnProperty")return el}const s=Reflect.get(t,n,r);return(tr(n)?po.has(n):Qs(n))||(a||ve(t,"get",n),i)?s:re(s)?o&&da(n)?s:s.value:G(s)?a?_o(s):or(s):s}}class vo extends ho{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Lt(i)&&re(i)&&!re(r))return!1;if(!this._shallow&&(!Vn(r)&&!Lt(r)&&(i=W(i),r=W(r)),!F(t)&&re(i)&&!re(r)))return i.value=r,!0;const o=F(t)&&da(n)?Number(n)<t.length:Y(t,n),s=Reflect.set(t,n,r,a);return t===W(a)&&(o?yt(r,i)&&He(t,"set",n,r):He(t,"add",n,r)),s}deleteProperty(t,n){const r=Y(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&He(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!tr(n)||!po.has(n))&&ve(t,"has",n),r}ownKeys(t){return ve(t,"iterate",F(t)?"length":vt),Reflect.ownKeys(t)}}class tl extends ho{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const nl=new vo,rl=new tl,al=new vo(!0),ga=e=>e,ir=e=>Reflect.getPrototypeOf(e);function An(e,t,n=!1,r=!1){e=e.__v_raw;const a=W(e),i=W(t);n||(yt(t,i)&&ve(a,"get",t),ve(a,"get",i));const{has:o}=ir(a),s=r?ga:n?_a:sn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function On(e,t=!1){const n=this.__v_raw,r=W(n),a=W(e);return t||(yt(e,a)&&ve(r,"has",e),ve(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function En(e,t=!1){return e=e.__v_raw,!t&&ve(W(e),"iterate",vt),Reflect.get(e,"size",e)}function Za(e){e=W(e);const t=W(this);return ir(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function Qa(e,t){t=W(t);const n=W(this),{has:r,get:a}=ir(n);let i=r.call(n,e);i||(e=W(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?yt(t,o)&&He(n,"set",e,t):He(n,"add",e,t),this}function Ga(e){const t=W(this),{has:n,get:r}=ir(t);let a=n.call(t,e);a||(e=W(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&He(t,"delete",e,void 0),i}function ei(){const e=W(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function Sn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=W(o),l=t?ga:e?_a:sn;return!e&&ve(s,"iterate",vt),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function Pn(e,t,n){return function(...r){const a=this.__v_raw,i=W(a),o=Nt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?ga:t?_a:sn;return!t&&ve(i,"iterate",l?jr:vt),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function il(){const e={get(i){return An(this,i)},get size(){return En(this)},has:On,add:Za,set:Qa,delete:Ga,clear:ei,forEach:Sn(!1,!1)},t={get(i){return An(this,i,!1,!0)},get size(){return En(this)},has:On,add:Za,set:Qa,delete:Ga,clear:ei,forEach:Sn(!1,!0)},n={get(i){return An(this,i,!0)},get size(){return En(this,!0)},has(i){return On.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Sn(!0,!1)},r={get(i){return An(this,i,!0,!0)},get size(){return En(this,!0)},has(i){return On.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:Sn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Pn(i,!1,!1),n[i]=Pn(i,!0,!1),t[i]=Pn(i,!1,!0),r[i]=Pn(i,!0,!0)}),[e,n,t,r]}const[ol,sl,ll,fl]=il();function ba(e,t){const n=t?e?fl:ll:e?sl:ol;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Y(n,a)&&a in r?n:r,a,i)}const cl={get:ba(!1,!1)},ul={get:ba(!1,!0)},dl={get:ba(!0,!1)},go=new WeakMap,bo=new WeakMap,yo=new WeakMap,ml=new WeakMap;function pl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hl(e){return e.__v_skip||!Object.isExtensible(e)?0:pl(Ds(e))}function or(e){return Lt(e)?e:ya(e,!1,nl,cl,go)}function vl(e){return ya(e,!1,al,ul,bo)}function _o(e){return ya(e,!0,rl,dl,yo)}function ya(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=hl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function tt(e){return Lt(e)?tt(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function Vn(e){return!!(e&&e.__v_isShallow)}function xo(e){return tt(e)||Lt(e)}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function sr(e){return Wn(e,"__v_skip",!0),e}const sn=e=>G(e)?or(e):e,_a=e=>G(e)?_o(e):e;function wo(e){et&&Oe&&(e=W(e),mo(e.dep||(e.dep=ha())))}function ko(e,t){e=W(e);const n=e.dep;n&&Dr(n)}function re(e){return!!(e&&e.__v_isRef===!0)}function we(e){return gl(e,!1)}function gl(e,t){return re(e)?e:new bl(e,t)}class bl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:W(t),this._value=n?t:sn(t)}get value(){return wo(this),this._value}set value(t){const n=this.__v_isShallow||Vn(t)||Lt(t);t=n?t:W(t),yt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:sn(t),ko(this))}}function Ao(e){return re(e)?e.value:e}const yl={get:(e,t,n)=>Ao(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return re(a)&&!re(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Oo(e){return tt(e)?e:new Proxy(e,yl)}function _l(e){const t=F(e)?new Array(e.length):{};for(const n in e)t[n]=wl(e,n);return t}class xl{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Zs(W(this._object),this._key)}}function wl(e,t,n){const r=e[t];return re(r)?r:new xl(e,t,n)}class kl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new va(t,()=>{this._dirty||(this._dirty=!0,ko(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=W(this);return wo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Al(e,t,n=!1){let r,a;const i=D(e);return i?(r=e,a=Pe):(r=e.get,a=e.set),new kl(r,a,i||!a,n)}function nt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){lr(i,t,n)}return a}function Ce(e,t,n,r){if(D(e)){const i=nt(e,t,n,r);return i&&to(i)&&i.catch(o=>{lr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ce(e[i],t,n,r));return a}function lr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){nt(l,null,10,[e,o,s]);return}}Ol(e,n,a,r)}function Ol(e,t,n,r=!0){console.error(e)}let ln=!1,$r=!1;const ue=[];let Fe=0;const Mt=[];let ze=null,ut=0;const Eo=Promise.resolve();let xa=null;function So(e){const t=xa||Eo;return e?t.then(this?e.bind(this):e):t}function El(e){let t=Fe+1,n=ue.length;for(;t<n;){const r=t+n>>>1,a=ue[r],i=fn(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function wa(e){(!ue.length||!ue.includes(e,ln&&e.allowRecurse?Fe+1:Fe))&&(e.id==null?ue.push(e):ue.splice(El(e.id),0,e),Po())}function Po(){!ln&&!$r&&($r=!0,xa=Eo.then(Io))}function Sl(e){const t=ue.indexOf(e);t>Fe&&ue.splice(t,1)}function Pl(e){F(e)?Mt.push(...e):(!ze||!ze.includes(e,e.allowRecurse?ut+1:ut))&&Mt.push(e),Po()}function ti(e,t=ln?Fe+1:0){for(;t<ue.length;t++){const n=ue[t];n&&n.pre&&(ue.splice(t,1),t--,n())}}function Co(e){if(Mt.length){const t=[...new Set(Mt)];if(Mt.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>fn(n)-fn(r)),ut=0;ut<ze.length;ut++)ze[ut]();ze=null,ut=0}}const fn=e=>e.id==null?1/0:e.id,Cl=(e,t)=>{const n=fn(e)-fn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Io(e){$r=!1,ln=!0,ue.sort(Cl);const t=Pe;try{for(Fe=0;Fe<ue.length;Fe++){const n=ue[Fe];n&&n.active!==!1&&nt(n,null,14)}}finally{Fe=0,ue.length=0,Co(),ln=!1,xa=null,(ue.length||Mt.length)&&Io()}}function Il(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||J;h&&(a=n.map(w=>oe(w)?w.trim():w)),m&&(a=n.map(Rr))}let s,l=r[s=wr(t)]||r[s=wr(De(t))];!l&&i&&(l=r[s=wr(zt(t))]),l&&Ce(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(c,e,6,a)}}function To(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!D(e)){const l=c=>{const u=To(c,t,!0);u&&(s=!0,ce(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):ce(o,i),G(e)&&r.set(e,o),o)}function fr(e,t){return!e||!er(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,zt(t))||Y(e,t))}let _e=null,cr=null;function qn(e){const t=_e;return _e=e,cr=e&&e.type.__scopeId||null,t}function No(e){cr=e}function Mo(){cr=null}function Tl(e,t=_e,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&di(-1);const i=qn(t);let o;try{o=e(...a)}finally{qn(i),r._d&&di(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:w,ctx:R,inheritAttrs:S}=e;let T,y;const A=qn(e);try{if(n.shapeFlag&4){const P=a||r;T=Re(u.call(P,P,m,i,w,h,R)),y=l}else{const P=t;T=Re(P.length>1?P(i,{attrs:l,slots:s,emit:c}):P(i,null)),y=t.props?l:Nl(l)}}catch(P){nn.length=0,lr(P,e,1),T=de(_t)}let L=T;if(y&&S!==!1){const P=Object.keys(y),{shapeFlag:$}=L;P.length&&$&7&&(o&&P.some(ca)&&(y=Ml(y,o)),L=jt(L,y))}return n.dirs&&(L=jt(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),T=L,qn(A),T}const Nl=e=>{let t;for(const n in e)(n==="class"||n==="style"||er(n))&&((t||(t={}))[n]=e[n]);return t},Ml=(e,t)=>{const n={};for(const r in e)(!ca(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Rl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ni(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!fr(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ni(r,o,c):!0:!!o;return!1}function ni(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!fr(n,i))return!0}return!1}function Fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ro="components";function Ll(e,t){return Dl(Ro,e,!0,t)||e}const jl=Symbol.for("v-ndc");function Dl(e,t,n=!0,r=!1){const a=_e||le;if(a){const i=a.type;if(e===Ro){const s=Lf(i,!1);if(s&&(s===t||s===De(t)||s===ar(De(t))))return i}const o=ri(a[e]||i[e],t)||ri(a.appContext[e],t);return!o&&r?i:o}}function ri(e,t){return e&&(e[t]||e[De(t)]||e[ar(De(t))])}const $l=e=>e.__isSuspense;function zl(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Pl(e)}const Cn={};function Rt(e,t,n){return Fo(e,t,n)}function Fo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){var s;const l=lo()===((s=le)==null?void 0:s.scope)?le:null;let c,u=!1,m=!1;if(re(e)?(c=()=>e.value,u=Vn(e)):tt(e)?(c=()=>e,r=!0):F(e)?(m=!0,u=e.some(P=>tt(P)||Vn(P)),c=()=>e.map(P=>{if(re(P))return P.value;if(tt(P))return mt(P);if(D(P))return nt(P,l,2)})):D(e)?t?c=()=>nt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ce(e,l,3,[w])}:c=Pe,t&&r){const P=c;c=()=>mt(P())}let h,w=P=>{h=A.onStop=()=>{nt(P,l,4)}},R;if(dn)if(w=Pe,t?n&&Ce(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const P=zf();R=P.__watcherHandles||(P.__watcherHandles=[])}else return Pe;let S=m?new Array(e.length).fill(Cn):Cn;const T=()=>{if(A.active)if(t){const P=A.run();(r||u||(m?P.some(($,fe)=>yt($,S[fe])):yt(P,S)))&&(h&&h(),Ce(t,l,3,[P,S===Cn?void 0:m&&S[0]===Cn?[]:S,w]),S=P)}else A.run()};T.allowRecurse=!!t;let y;a==="sync"?y=T:a==="post"?y=()=>he(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),y=()=>wa(T));const A=new va(c,y);t?n?T():S=A.run():a==="post"?he(A.run.bind(A),l&&l.suspense):A.run();const L=()=>{A.stop(),l&&l.scope&&ua(l.scope.effects,A)};return R&&R.push(L),L}function Ul(e,t,n){const r=this.proxy,a=oe(e)?e.includes(".")?Lo(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const o=le;Dt(this);const s=Fo(a,i.bind(r),n);return o?Dt(o):bt(),s}function Lo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function mt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),re(e))mt(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)mt(e[n],t);else if(eo(e)||Nt(e))e.forEach(n=>{mt(n,t)});else if(ro(e))for(const n in e)mt(e[n],t);return e}function qt(e,t){const n=_e;if(n===null)return e;const r=pr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=J]=t[i];o&&(D(o)&&(o={mounted:o,updated:o}),o.deep&&mt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c}))}return e}function ft(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ut(),Ce(l,n,8,[e.el,s,e,t]),Ht())}}/*! #__NO_SIDE_EFFECTS__ */function Hl(e,t){return D(e)?(()=>ce({name:e.name},t,{setup:e}))():e}const Un=e=>!!e.type.__asyncLoader,jo=e=>e.type.__isKeepAlive;function Bl(e,t){Do(e,"a",t)}function Yl(e,t){Do(e,"da",t)}function Do(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(ur(t,r,n),n){let a=n.parent;for(;a&&a.parent;)jo(a.parent.vnode)&&Wl(r,t,n,a),a=a.parent}}function Wl(e,t,n,r){const a=ur(t,e,r,!0);$o(()=>{ua(r[t],a)},n)}function ur(e,t,n=le,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ut(),Dt(n);const s=Ce(t,n,e,o);return bt(),Ht(),s});return r?a.unshift(i):a.push(i),i}}const Ke=e=>(t,n=le)=>(!dn||e==="sp")&&ur(e,(...r)=>t(...r),n),Kl=Ke("bm"),Vl=Ke("m"),ql=Ke("bu"),Xl=Ke("u"),Jl=Ke("bum"),$o=Ke("um"),Zl=Ke("sp"),Ql=Ke("rtg"),Gl=Ke("rtc");function ef(e,t=le){ur("ec",e,t)}function tf(e,t,n,r){let a;const i=n&&n[r];if(F(e)||oe(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const zr=e=>e?Jo(e)?pr(e)||e.proxy:zr(e.parent):null,en=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>zr(e.parent),$root:e=>zr(e.root),$emit:e=>e.emit,$options:e=>ka(e),$forceUpdate:e=>e.f||(e.f=()=>wa(e.update)),$nextTick:e=>e.n||(e.n=So.bind(e.proxy)),$watch:e=>Ul.bind(e)}),Ar=(e,t)=>e!==J&&!e.__isScriptSetup&&Y(e,t),nf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Ar(r,t))return o[t]=1,r[t];if(a!==J&&Y(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&Y(c,t))return o[t]=3,i[t];if(n!==J&&Y(n,t))return o[t]=4,n[t];Ur&&(o[t]=0)}}const u=en[t];let m,h;if(u)return t==="$attrs"&&ve(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&Y(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,Y(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Ar(a,t)?(a[t]=n,!0):r!==J&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&Y(e,o)||Ar(t,o)||(s=i[0])&&Y(s,o)||Y(r,o)||Y(en,o)||Y(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ai(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ur=!0;function rf(e){const t=ka(e),n=e.proxy,r=e.ctx;Ur=!1,t.beforeCreate&&ii(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:w,updated:R,activated:S,deactivated:T,beforeDestroy:y,beforeUnmount:A,destroyed:L,unmounted:P,render:$,renderTracked:fe,renderTriggered:ee,errorCaptured:B,serverPrefetch:z,expose:ae,inheritAttrs:ge,components:Ie,directives:kt,filters:Wt}=t;if(c&&af(c,r,null),o)for(const te in o){const q=o[te];D(q)&&(r[te]=q.bind(n))}if(a){const te=a.call(n,n);G(te)&&(e.data=or(te))}if(Ur=!0,i)for(const te in i){const q=i[te],st=D(q)?q.bind(n,n):D(q.get)?q.get.bind(n,n):Pe,wn=!D(q)&&D(q.set)?q.set.bind(n):Pe,lt=Ge({get:st,set:wn});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Te=>lt.value=Te})}if(s)for(const te in s)zo(s[te],r,n,te);if(l){const te=D(l)?l.call(n):l;Reflect.ownKeys(te).forEach(q=>{uf(q,te[q])})}u&&ii(u,e,"c");function K(te,q){F(q)?q.forEach(st=>te(st.bind(n))):q&&te(q.bind(n))}if(K(Kl,m),K(Vl,h),K(ql,w),K(Xl,R),K(Bl,S),K(Yl,T),K(ef,B),K(Gl,fe),K(Ql,ee),K(Jl,A),K($o,P),K(Zl,z),F(ae))if(ae.length){const te=e.exposed||(e.exposed={});ae.forEach(q=>{Object.defineProperty(te,q,{get:()=>n[q],set:st=>n[q]=st})})}else e.exposed||(e.exposed={});$&&e.render===Pe&&(e.render=$),ge!=null&&(e.inheritAttrs=ge),Ie&&(e.components=Ie),kt&&(e.directives=kt)}function af(e,t,n=Pe){F(e)&&(e=Hr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=tn(a.from||r,a.default,!0):i=tn(a.from||r):i=tn(a),re(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function ii(e,t,n){Ce(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function zo(e,t,n,r){const a=r.includes(".")?Lo(n,r):()=>n[r];if(oe(e)){const i=t[e];D(i)&&Rt(a,i)}else if(D(e))Rt(a,e.bind(n));else if(G(e))if(F(e))e.forEach(i=>zo(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Rt(a,i,e)}}function ka(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Xn(l,c,o,!0)),Xn(l,t,o)),G(t)&&i.set(t,l),l}function Xn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Xn(e,i,n,!0),a&&a.forEach(o=>Xn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=of[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const of={data:oi,props:si,emits:si,methods:Qt,computed:Qt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:Qt,directives:Qt,watch:lf,provide:oi,inject:sf};function oi(e,t){return t?e?function(){return ce(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function sf(e,t){return Qt(Hr(e),Hr(t))}function Hr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function Qt(e,t){return e?ce(Object.create(null),e,t):t}function si(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ce(Object.create(null),ai(e),ai(t??{})):t}function lf(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function Uo(){return{app:null,config:{isNativeTag:Fs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ff=0;function cf(e,t){return function(r,a=null){D(r)||(r=ce({},r)),a!=null&&!G(a)&&(a=null);const i=Uo(),o=new WeakSet;let s=!1;const l=i.app={_uid:ff++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Uf,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...u)):D(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=de(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,pr(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){cn=l;try{return c()}finally{cn=null}}};return l}}let cn=null;function uf(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function tn(e,t,n=!1){const r=le||_e;if(r||cn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:cn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&D(t)?t.call(r&&r.proxy):t}}function df(){return!!(le||_e||cn)}function mf(e,t,n,r=!1){const a={},i={};Wn(i,mr,1),e.propsDefaults=Object.create(null),Ho(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:vl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function pf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=W(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(fr(e.emitsOptions,h))continue;const w=t[h];if(l)if(Y(i,h))w!==i[h]&&(i[h]=w,c=!0);else{const R=De(h);a[R]=Br(l,s,R,w,e,!1)}else w!==i[h]&&(i[h]=w,c=!0)}}}else{Ho(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!Y(t,m)&&((u=zt(m))===m||!Y(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Br(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!Y(t,m))&&(delete i[m],c=!0)}c&&He(e,"set","$attrs")}function Ho(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if($n(l))continue;const c=t[l];let u;a&&Y(a,u=De(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:fr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=W(n),c=s||J;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Br(a,l,m,c[m],e,!Y(c,m))}}return o}function Br(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=Y(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&D(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Dt(a),r=c[n]=l.call(null,t),bt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===zt(n))&&(r=!0))}return r}function Bo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!D(e)){const u=m=>{l=!0;const[h,w]=Bo(m,t,!0);ce(o,h),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return G(e)&&r.set(e,Tt),Tt;if(F(i))for(let u=0;u<i.length;u++){const m=De(i[u]);li(m)&&(o[m]=J)}else if(i)for(const u in i){const m=De(u);if(li(m)){const h=i[u],w=o[m]=F(h)||D(h)?{type:h}:ce({},h);if(w){const R=ui(Boolean,w.type),S=ui(String,w.type);w[0]=R>-1,w[1]=S<0||R<S,(R>-1||Y(w,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function li(e){return e[0]!=="$"}function fi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ci(e,t){return fi(e)===fi(t)}function ui(e,t){return F(t)?t.findIndex(n=>ci(n,e)):D(t)&&ci(t,e)?0:-1}const Yo=e=>e[0]==="_"||e==="$stable",Aa=e=>F(e)?e.map(Re):[Re(e)],hf=(e,t,n)=>{if(t._n)return t;const r=Tl((...a)=>Aa(t(...a)),n);return r._c=!1,r},Wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Yo(a))continue;const i=e[a];if(D(i))t[a]=hf(a,i,r);else if(i!=null){const o=Aa(i);t[a]=()=>o}}},Ko=(e,t)=>{const n=Aa(t);e.slots.default=()=>n},vf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=W(t),Wn(t,"_",n)):Wo(t,e.slots={})}else e.slots={},t&&Ko(e,t);Wn(e.slots,mr,1)},gf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ce(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Wo(t,a)),o=t}else t&&(Ko(e,t),o={default:1});if(i)for(const s in a)!Yo(s)&&o[s]==null&&delete a[s]};function Yr(e,t,n,r,a=!1){if(F(e)){e.forEach((h,w)=>Yr(h,t&&(F(t)?t[w]:t),n,r,a));return}if(Un(r)&&!a)return;const i=r.shapeFlag&4?pr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(oe(c)?(u[c]=null,Y(m,c)&&(m[c]=null)):re(c)&&(c.value=null)),D(l))nt(l,s,12,[o,u]);else{const h=oe(l),w=re(l);if(h||w){const R=()=>{if(e.f){const S=h?Y(m,l)?m[l]:u[l]:l.value;a?F(S)&&ua(S,i):F(S)?S.includes(i)||S.push(i):h?(u[l]=[i],Y(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,Y(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(u[e.k]=o))};o?(R.id=-1,he(R,n)):R()}}}const he=zl;function bf(e){return yf(e)}function yf(e,t){const n=Fr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:w=Pe,insertStaticContent:R}=e,S=(f,d,p,v=null,g=null,x=null,O=!1,_=null,k=!!d.dynamicChildren)=>{if(f===d)return;f&&!Xt(f,d)&&(v=kn(f),Te(f,g,x,!0),f=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:C}=d;switch(b){case dr:T(f,d,p,v);break;case _t:y(f,d,p,v);break;case Or:f==null&&A(d,p,v,O);break;case Ae:Ie(f,d,p,v,g,x,O,_,k);break;default:C&1?$(f,d,p,v,g,x,O,_,k):C&6?kt(f,d,p,v,g,x,O,_,k):(C&64||C&128)&&b.process(f,d,p,v,g,x,O,_,k,At)}N!=null&&g&&Yr(N,f&&f.ref,x,d||f,!d)},T=(f,d,p,v)=>{if(f==null)r(d.el=s(d.children),p,v);else{const g=d.el=f.el;d.children!==f.children&&c(g,d.children)}},y=(f,d,p,v)=>{f==null?r(d.el=l(d.children||""),p,v):d.el=f.el},A=(f,d,p,v)=>{[f.el,f.anchor]=R(f.children,d,p,v,f.el,f.anchor)},L=({el:f,anchor:d},p,v)=>{let g;for(;f&&f!==d;)g=h(f),r(f,p,v),f=g;r(d,p,v)},P=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},$=(f,d,p,v,g,x,O,_,k)=>{O=O||d.type==="svg",f==null?fe(d,p,v,g,x,O,_,k):z(f,d,g,x,O,_,k)},fe=(f,d,p,v,g,x,O,_)=>{let k,b;const{type:N,props:C,shapeFlag:M,transition:j,dirs:H}=f;if(k=f.el=o(f.type,x,C&&C.is,C),M&8?u(k,f.children):M&16&&B(f.children,k,null,v,g,x&&N!=="foreignObject",O,_),H&&ft(f,null,v,"created"),ee(k,f,f.scopeId,O,v),C){for(const V in C)V!=="value"&&!$n(V)&&i(k,V,null,C[V],x,f.children,v,g,$e);"value"in C&&i(k,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Me(b,v,f)}H&&ft(f,null,v,"beforeMount");const X=_f(g,j);X&&j.beforeEnter(k),r(k,d,p),((b=C&&C.onVnodeMounted)||X||H)&&he(()=>{b&&Me(b,v,f),X&&j.enter(k),H&&ft(f,null,v,"mounted")},g)},ee=(f,d,p,v,g)=>{if(p&&w(f,p),v)for(let x=0;x<v.length;x++)w(f,v[x]);if(g){let x=g.subTree;if(d===x){const O=g.vnode;ee(f,O,O.scopeId,O.slotScopeIds,g.parent)}}},B=(f,d,p,v,g,x,O,_,k=0)=>{for(let b=k;b<f.length;b++){const N=f[b]=_?Qe(f[b]):Re(f[b]);S(null,N,d,p,v,g,x,O,_)}},z=(f,d,p,v,g,x,O)=>{const _=d.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:N}=d;k|=f.patchFlag&16;const C=f.props||J,M=d.props||J;let j;p&&ct(p,!1),(j=M.onVnodeBeforeUpdate)&&Me(j,p,d,f),N&&ft(d,f,p,"beforeUpdate"),p&&ct(p,!0);const H=g&&d.type!=="foreignObject";if(b?ae(f.dynamicChildren,b,_,p,v,H,x):O||q(f,d,_,null,p,v,H,x,!1),k>0){if(k&16)ge(_,d,C,M,p,v,g);else if(k&2&&C.class!==M.class&&i(_,"class",null,M.class,g),k&4&&i(_,"style",C.style,M.style,g),k&8){const X=d.dynamicProps;for(let V=0;V<X.length;V++){const ie=X[V],ke=C[ie],Ot=M[ie];(Ot!==ke||ie==="value")&&i(_,ie,ke,Ot,g,f.children,p,v,$e)}}k&1&&f.children!==d.children&&u(_,d.children)}else!O&&b==null&&ge(_,d,C,M,p,v,g);((j=M.onVnodeUpdated)||N)&&he(()=>{j&&Me(j,p,d,f),N&&ft(d,f,p,"updated")},v)},ae=(f,d,p,v,g,x,O)=>{for(let _=0;_<d.length;_++){const k=f[_],b=d[_],N=k.el&&(k.type===Ae||!Xt(k,b)||k.shapeFlag&70)?m(k.el):p;S(k,b,N,null,v,g,x,O,!0)}},ge=(f,d,p,v,g,x,O)=>{if(p!==v){if(p!==J)for(const _ in p)!$n(_)&&!(_ in v)&&i(f,_,p[_],null,O,d.children,g,x,$e);for(const _ in v){if($n(_))continue;const k=v[_],b=p[_];k!==b&&_!=="value"&&i(f,_,b,k,O,d.children,g,x,$e)}"value"in v&&i(f,"value",p.value,v.value)}},Ie=(f,d,p,v,g,x,O,_,k)=>{const b=d.el=f?f.el:s(""),N=d.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:j}=d;j&&(_=_?_.concat(j):j),f==null?(r(b,p,v),r(N,p,v),B(d.children,p,N,g,x,O,_,k)):C>0&&C&64&&M&&f.dynamicChildren?(ae(f.dynamicChildren,M,p,g,x,O,_),(d.key!=null||g&&d===g.subTree)&&Vo(f,d,!0)):q(f,d,p,N,g,x,O,_,k)},kt=(f,d,p,v,g,x,O,_,k)=>{d.slotScopeIds=_,f==null?d.shapeFlag&512?g.ctx.activate(d,p,v,O,k):Wt(d,p,v,g,x,O,k):qe(f,d,k)},Wt=(f,d,p,v,g,x,O)=>{const _=f.component=Tf(f,v,g);if(jo(f)&&(_.ctx.renderer=At),Nf(_),_.asyncDep){if(g&&g.registerDep(_,K),!f.el){const k=_.subTree=de(_t);y(null,k,d,p)}return}K(_,f,d,p,g,x,O)},qe=(f,d,p)=>{const v=d.component=f.component;if(Rl(f,d,p))if(v.asyncDep&&!v.asyncResolved){te(v,d,p);return}else v.next=d,Sl(v.update),v.update();else d.el=f.el,v.vnode=d},K=(f,d,p,v,g,x,O)=>{const _=()=>{if(f.isMounted){let{next:N,bu:C,u:M,parent:j,vnode:H}=f,X=N,V;ct(f,!1),N?(N.el=H.el,te(f,N,O)):N=H,C&&zn(C),(V=N.props&&N.props.onVnodeBeforeUpdate)&&Me(V,j,N,H),ct(f,!0);const ie=kr(f),ke=f.subTree;f.subTree=ie,S(ke,ie,m(ke.el),kn(ke),f,g,x),N.el=ie.el,X===null&&Fl(f,ie.el),M&&he(M,g),(V=N.props&&N.props.onVnodeUpdated)&&he(()=>Me(V,j,N,H),g)}else{let N;const{el:C,props:M}=d,{bm:j,m:H,parent:X}=f,V=Un(d);if(ct(f,!1),j&&zn(j),!V&&(N=M&&M.onVnodeBeforeMount)&&Me(N,X,d),ct(f,!0),C&&xr){const ie=()=>{f.subTree=kr(f),xr(C,f.subTree,f,g,null)};V?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=kr(f);S(null,ie,p,v,f,g,x),d.el=ie.el}if(H&&he(H,g),!V&&(N=M&&M.onVnodeMounted)){const ie=d;he(()=>Me(N,X,ie),g)}(d.shapeFlag&256||X&&Un(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&he(f.a,g),f.isMounted=!0,d=p=v=null}},k=f.effect=new va(_,()=>wa(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,ct(f,!0),b()},te=(f,d,p)=>{d.component=f;const v=f.vnode.props;f.vnode=d,f.next=null,pf(f,d.props,v,p),gf(f,d.children,p),Ut(),ti(),Ht()},q=(f,d,p,v,g,x,O,_,k=!1)=>{const b=f&&f.children,N=f?f.shapeFlag:0,C=d.children,{patchFlag:M,shapeFlag:j}=d;if(M>0){if(M&128){wn(b,C,p,v,g,x,O,_,k);return}else if(M&256){st(b,C,p,v,g,x,O,_,k);return}}j&8?(N&16&&$e(b,g,x),C!==b&&u(p,C)):N&16?j&16?wn(b,C,p,v,g,x,O,_,k):$e(b,g,x,!0):(N&8&&u(p,""),j&16&&B(C,p,v,g,x,O,_,k))},st=(f,d,p,v,g,x,O,_,k)=>{f=f||Tt,d=d||Tt;const b=f.length,N=d.length,C=Math.min(b,N);let M;for(M=0;M<C;M++){const j=d[M]=k?Qe(d[M]):Re(d[M]);S(f[M],j,p,null,g,x,O,_,k)}b>N?$e(f,g,x,!0,!1,C):B(d,p,v,g,x,O,_,k,C)},wn=(f,d,p,v,g,x,O,_,k)=>{let b=0;const N=d.length;let C=f.length-1,M=N-1;for(;b<=C&&b<=M;){const j=f[b],H=d[b]=k?Qe(d[b]):Re(d[b]);if(Xt(j,H))S(j,H,p,null,g,x,O,_,k);else break;b++}for(;b<=C&&b<=M;){const j=f[C],H=d[M]=k?Qe(d[M]):Re(d[M]);if(Xt(j,H))S(j,H,p,null,g,x,O,_,k);else break;C--,M--}if(b>C){if(b<=M){const j=M+1,H=j<N?d[j].el:v;for(;b<=M;)S(null,d[b]=k?Qe(d[b]):Re(d[b]),p,H,g,x,O,_,k),b++}}else if(b>M)for(;b<=C;)Te(f[b],g,x,!0),b++;else{const j=b,H=b,X=new Map;for(b=H;b<=M;b++){const be=d[b]=k?Qe(d[b]):Re(d[b]);be.key!=null&&X.set(be.key,b)}let V,ie=0;const ke=M-H+1;let Ot=!1,Ya=0;const Kt=new Array(ke);for(b=0;b<ke;b++)Kt[b]=0;for(b=j;b<=C;b++){const be=f[b];if(ie>=ke){Te(be,g,x,!0);continue}let Ne;if(be.key!=null)Ne=X.get(be.key);else for(V=H;V<=M;V++)if(Kt[V-H]===0&&Xt(be,d[V])){Ne=V;break}Ne===void 0?Te(be,g,x,!0):(Kt[Ne-H]=b+1,Ne>=Ya?Ya=Ne:Ot=!0,S(be,d[Ne],p,null,g,x,O,_,k),ie++)}const Wa=Ot?xf(Kt):Tt;for(V=Wa.length-1,b=ke-1;b>=0;b--){const be=H+b,Ne=d[be],Ka=be+1<N?d[be+1].el:v;Kt[b]===0?S(null,Ne,p,Ka,g,x,O,_,k):Ot&&(V<0||b!==Wa[V]?lt(Ne,p,Ka,2):V--)}}},lt=(f,d,p,v,g=null)=>{const{el:x,type:O,transition:_,children:k,shapeFlag:b}=f;if(b&6){lt(f.component.subTree,d,p,v);return}if(b&128){f.suspense.move(d,p,v);return}if(b&64){O.move(f,d,p,At);return}if(O===Ae){r(x,d,p);for(let C=0;C<k.length;C++)lt(k[C],d,p,v);r(f.anchor,d,p);return}if(O===Or){L(f,d,p);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(x),r(x,d,p),he(()=>_.enter(x),g);else{const{leave:C,delayLeave:M,afterLeave:j}=_,H=()=>r(x,d,p),X=()=>{C(x,()=>{H(),j&&j()})};M?M(x,H,X):X()}else r(x,d,p)},Te=(f,d,p,v=!1,g=!1)=>{const{type:x,props:O,ref:_,children:k,dynamicChildren:b,shapeFlag:N,patchFlag:C,dirs:M}=f;if(_!=null&&Yr(_,null,p,f,!0),N&256){d.ctx.deactivate(f);return}const j=N&1&&M,H=!Un(f);let X;if(H&&(X=O&&O.onVnodeBeforeUnmount)&&Me(X,d,f),N&6)Rs(f.component,p,v);else{if(N&128){f.suspense.unmount(p,v);return}j&&ft(f,null,d,"beforeUnmount"),N&64?f.type.remove(f,d,p,g,At,v):b&&(x!==Ae||C>0&&C&64)?$e(b,d,p,!1,!0):(x===Ae&&C&384||!g&&N&16)&&$e(k,d,p),v&&Ha(f)}(H&&(X=O&&O.onVnodeUnmounted)||j)&&he(()=>{X&&Me(X,d,f),j&&ft(f,null,d,"unmounted")},p)},Ha=f=>{const{type:d,el:p,anchor:v,transition:g}=f;if(d===Ae){Ms(p,v);return}if(d===Or){P(f);return}const x=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:O,delayLeave:_}=g,k=()=>O(p,x);_?_(f.el,x,k):k()}else x()},Ms=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},Rs=(f,d,p)=>{const{bum:v,scope:g,update:x,subTree:O,um:_}=f;v&&zn(v),g.stop(),x&&(x.active=!1,Te(O,f,d,p)),_&&he(_,d),he(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},$e=(f,d,p,v=!1,g=!1,x=0)=>{for(let O=x;O<f.length;O++)Te(f[O],d,p,v,g)},kn=f=>f.shapeFlag&6?kn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),Ba=(f,d,p)=>{f==null?d._vnode&&Te(d._vnode,null,null,!0):S(d._vnode||null,f,d,null,null,null,p),ti(),Co(),d._vnode=f},At={p:S,um:Te,m:lt,r:Ha,mt:Wt,mc:B,pc:q,pbc:ae,n:kn,o:e};let _r,xr;return t&&([_r,xr]=t(At)),{render:Ba,hydrate:_r,createApp:cf(Ba,_r)}}function ct({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _f(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Qe(a[i]),s.el=o.el),n||Vo(o,s)),s.type===dr&&(s.el=o.el)}}function xf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const wf=e=>e.__isTeleport,Ae=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),Or=Symbol.for("v-stc"),nn=[];let Ee=null;function Le(e=!1){nn.push(Ee=e?null:[])}function kf(){nn.pop(),Ee=nn[nn.length-1]||null}let un=1;function di(e){un+=e}function qo(e){return e.dynamicChildren=un>0?Ee||Tt:null,kf(),un>0&&Ee&&Ee.push(e),e}function gt(e,t,n,r,a,i){return qo(U(e,t,n,r,a,i,!0))}function Wr(e,t,n,r,a){return qo(de(e,t,n,r,a,!0))}function Kr(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const mr="__vInternal",Xo=({key:e})=>e??null,Hn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||re(e)||D(e)?{i:_e,r:e,k:t,f:!!n}:e:null);function U(e,t=null,n=null,r=0,a=null,i=e===Ae?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xo(t),ref:t&&Hn(t),scopeId:cr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:_e};return s?(Oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=oe(n)?8:16),un>0&&!o&&Ee&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ee.push(l),l}const de=Af;function Af(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===jl)&&(e=_t),Kr(e)){const s=jt(e,t,!0);return n&&Oa(s,n),un>0&&!i&&Ee&&(s.shapeFlag&6?Ee[Ee.indexOf(e)]=s:Ee.push(s)),s.patchFlag|=-2,s}if(jf(e)&&(e=e.__vccOpts),t){t=Of(t);let{class:s,style:l}=t;s&&!oe(s)&&(t.class=pa(s)),G(l)&&(xo(l)&&!F(l)&&(l=ce({},l)),t.style=ma(l))}const o=oe(e)?1:$l(e)?128:wf(e)?64:G(e)?4:D(e)?2:0;return U(e,t,n,r,a,o,i,!0)}function Of(e){return e?xo(e)||mr in e?ce({},e):e:null}function jt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Pf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Xo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Hn(t)):[a,Hn(t)]:Hn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jt(e.ssContent),ssFallback:e.ssFallback&&jt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ef(e=" ",t=0){return de(dr,null,e,t)}function Sf(e="",t=!1){return t?(Le(),Wr(_t,null,e)):de(_t,null,e)}function Re(e){return e==null||typeof e=="boolean"?de(_t):F(e)?de(Ae,null,e.slice()):typeof e=="object"?Qe(e):de(dr,null,String(e))}function Qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jt(e)}function Oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(mr in t)?t._ctx=_e:a===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:_e},n=32):(t=String(t),r&64?(n=16,t=[Ef(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=pa([t.class,r.class]));else if(a==="style")t.style=ma([t.style,r.style]);else if(er(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Me(e,t,n,r=null){Ce(e,t,7,[n,r])}const Cf=Uo();let If=0;function Tf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Cf,i={uid:If++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new oo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bo(r,a),emitsOptions:To(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Il.bind(null,i),e.ce&&e.ce(i),i}let le=null,Ea,Et,mi="__VUE_INSTANCE_SETTERS__";(Et=Fr()[mi])||(Et=Fr()[mi]=[]),Et.push(e=>le=e),Ea=e=>{Et.length>1?Et.forEach(t=>t(e)):Et[0](e)};const Dt=e=>{Ea(e),e.scope.on()},bt=()=>{le&&le.scope.off(),Ea(null)};function Jo(e){return e.vnode.shapeFlag&4}let dn=!1;function Nf(e,t=!1){dn=t;const{props:n,children:r}=e.vnode,a=Jo(e);mf(e,n,a,t),vf(e,r);const i=a?Mf(e,t):void 0;return dn=!1,i}function Mf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=sr(new Proxy(e.ctx,nf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ff(e):null;Dt(e),Ut();const i=nt(r,e,0,[e.props,a]);if(Ht(),bt(),to(i)){if(i.then(bt,bt),t)return i.then(o=>{pi(e,o,t)}).catch(o=>{lr(o,e,0)});e.asyncDep=i}else pi(e,i,t)}else Zo(e,t)}function pi(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Oo(t)),Zo(e,n)}let hi;function Zo(e,t,n){const r=e.type;if(!e.render){if(!t&&hi&&!r.render){const a=r.template||ka(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ce(ce({isCustomElement:i,delimiters:s},o),l);r.render=hi(a,c)}}e.render=r.render||Pe}{Dt(e),Ut();try{rf(e)}finally{Ht(),bt()}}}function Rf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}}))}function Ff(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Rf(e)},slots:e.slots,emit:e.emit,expose:t}}function pr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Oo(sr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in en)return en[n](e)},has(t,n){return n in t||n in en}}))}function Lf(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function jf(e){return D(e)&&"__vccOpts"in e}const Ge=(e,t)=>Al(e,t,dn);function Df(e,t,n){const r=arguments.length;return r===2?G(t)&&!F(t)?Kr(t)?de(e,null,[t]):de(e,t):de(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Kr(n)&&(n=[n]),de(e,t,n))}const $f=Symbol.for("v-scx"),zf=()=>tn($f),Uf="3.3.8",Hf="http://www.w3.org/2000/svg",dt=typeof document<"u"?document:null,vi=dt&&dt.createElement("template"),Bf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?dt.createElementNS(Hf,e):dt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>dt.createTextNode(e),createComment:e=>dt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{vi.innerHTML=r?`<svg>${e}</svg>`:e;const s=vi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Yf=Symbol("_vtc");function Wf(e,t,n){const r=e[Yf];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Kf=Symbol("_vod");function Vf(e,t,n){const r=e.style,a=oe(n);if(n&&!a){if(t&&!oe(t))for(const i in t)n[i]==null&&Vr(r,i,"");for(const i in n)Vr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Kf in e&&(r.display=i)}}const gi=/\s*!important$/;function Vr(e,t,n){if(F(n))n.forEach(r=>Vr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=qf(e,t);gi.test(n)?e.setProperty(zt(r),n.replace(gi,""),"important"):e[r]=n}}const bi=["Webkit","Moz","ms"],Er={};function qf(e,t){const n=Er[t];if(n)return n;let r=De(t);if(r!=="filter"&&r in e)return Er[t]=r;r=ar(r);for(let a=0;a<bi.length;a++){const i=bi[a]+r;if(i in e)return Er[t]=i}return t}const yi="http://www.w3.org/1999/xlink";function Xf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(yi,t.slice(6,t.length)):e.setAttributeNS(yi,t,n);else{const i=Ks(t);n==null||i&&!ao(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Jf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ao(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Pt(e,t,n,r){e.addEventListener(t,n,r)}function Zf(e,t,n,r){e.removeEventListener(t,n,r)}const _i=Symbol("_vei");function Qf(e,t,n,r,a=null){const i=e[_i]||(e[_i]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Gf(t);if(r){const c=i[t]=nc(r,a);Pt(e,s,c,l)}else o&&(Zf(e,s,o,l),i[t]=void 0)}}const xi=/(?:Once|Passive|Capture)$/;function Gf(e){let t;if(xi.test(e)){t={};let r;for(;r=e.match(xi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):zt(e.slice(2)),t]}let Sr=0;const ec=Promise.resolve(),tc=()=>Sr||(ec.then(()=>Sr=0),Sr=Date.now());function nc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(rc(r,n.value),t,5,[r])};return n.value=e,n.attached=tc(),n}function rc(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const wi=/^on[a-z]/,ac=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Wf(e,r,a):t==="style"?Vf(e,n,r):er(t)?ca(t)||Qf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ic(e,t,r,a))?Jf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Xf(e,t,r,a))};function ic(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&wi.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||wi.test(t)&&oe(n)?!1:t in e}const ki=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>zn(t,n):t};function oc(e){e.target.composing=!0}function Ai(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Pr=Symbol("_assign"),Jt={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[Pr]=ki(a);const i=r||a.props&&a.props.type==="number";Pt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Rr(s)),e[Pr](s)}),n&&Pt(e,"change",()=>{e.value=e.value.trim()}),t||(Pt(e,"compositionstart",oc),Pt(e,"compositionend",Ai),Pt(e,"change",Ai))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[Pr]=ki(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Rr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},sc=ce({patchProp:ac},Bf);let Oi;function lc(){return Oi||(Oi=bf(sc))}const fc=(...e)=>{const t=lc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=cc(r);if(!a)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function cc(e){return oe(e)?document.querySelector(e):e}var uc=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Qo;const hr=e=>Qo=e,Go=Symbol();function qr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var rn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(rn||(rn={}));function dc(){const e=so(!0),t=e.run(()=>we({}));let n=[],r=[];const a=sr({install(i){hr(a),a._a=i,i.provide(Go,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!uc?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const es=()=>{};function Ei(e,t,n,r=es){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&lo()&&qs(a),a}function St(e,...t){e.slice().forEach(n=>{n(...t)})}const mc=e=>e();function Xr(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];qr(a)&&qr(r)&&e.hasOwnProperty(n)&&!re(r)&&!tt(r)?e[n]=Xr(a,r):e[n]=r}return e}const pc=Symbol();function hc(e){return!qr(e)||!e.hasOwnProperty(pc)}const{assign:Ze}=Object;function vc(e){return!!(re(e)&&e.effect)}function gc(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function c(){s||(n.state.value[e]=a?a():{});const u=_l(n.state.value[e]);return Ze(u,i,Object.keys(o||{}).reduce((m,h)=>(m[h]=sr(Ge(()=>{hr(n);const w=n._s.get(e);return o[h].call(w,w)})),m),{}))}return l=ts(e,c,t,n,r,!0),l}function ts(e,t,n={},r,a,i){let o;const s=Ze({actions:{}},n),l={deep:!0};let c,u,m=[],h=[],w;const R=r.state.value[e];!i&&!R&&(r.state.value[e]={}),we({});let S;function T(B){let z;c=u=!1,typeof B=="function"?(B(r.state.value[e]),z={type:rn.patchFunction,storeId:e,events:w}):(Xr(r.state.value[e],B),z={type:rn.patchObject,payload:B,storeId:e,events:w});const ae=S=Symbol();So().then(()=>{S===ae&&(c=!0)}),u=!0,St(m,z,r.state.value[e])}const y=i?function(){const{state:z}=n,ae=z?z():{};this.$patch(ge=>{Ze(ge,ae)})}:es;function A(){o.stop(),m=[],h=[],r._s.delete(e)}function L(B,z){return function(){hr(r);const ae=Array.from(arguments),ge=[],Ie=[];function kt(K){ge.push(K)}function Wt(K){Ie.push(K)}St(h,{args:ae,name:B,store:$,after:kt,onError:Wt});let qe;try{qe=z.apply(this&&this.$id===e?this:$,ae)}catch(K){throw St(Ie,K),K}return qe instanceof Promise?qe.then(K=>(St(ge,K),K)).catch(K=>(St(Ie,K),Promise.reject(K))):(St(ge,qe),qe)}}const P={_p:r,$id:e,$onAction:Ei.bind(null,h),$patch:T,$reset:y,$subscribe(B,z={}){const ae=Ei(m,B,z.detached,()=>ge()),ge=o.run(()=>Rt(()=>r.state.value[e],Ie=>{(z.flush==="sync"?u:c)&&B({storeId:e,type:rn.direct,events:w},Ie)},Ze({},l,z)));return ae},$dispose:A},$=or(P);r._s.set(e,$);const ee=(r._a&&r._a.runWithContext||mc)(()=>r._e.run(()=>(o=so()).run(t)));for(const B in ee){const z=ee[B];if(re(z)&&!vc(z)||tt(z))i||(R&&hc(z)&&(re(z)?z.value=R[B]:Xr(z,R[B])),r.state.value[e][B]=z);else if(typeof z=="function"){const ae=L(B,z);ee[B]=ae,s.actions[B]=z}}return Ze($,ee),Ze(W($),ee),Object.defineProperty($,"$state",{get:()=>r.state.value[e],set:B=>{T(z=>{Ze(z,B)})}}),r._p.forEach(B=>{Ze($,o.run(()=>B({store:$,app:r._a,pinia:r,options:s})))}),R&&i&&n.hydrate&&n.hydrate($.$state,R),c=!0,u=!0,$}function bc(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const c=df();return s=s||(c?tn(Go,null):null),s&&hr(s),s=Qo,s._s.has(r)||(i?ts(r,t,a,s):gc(r,a,s)),s._s.get(r)}return o.$id=r,o}const Sa=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},yc=["value"],_c={__name:"useButton",props:{value:String},setup(e){return(t,n)=>(Le(),gt("input",{type:"button",value:e.value},null,8,yc))}},Jr=Sa(_c,[["__scopeId","data-v-0248f9de"]]),ns=bc("EmployeeStore",()=>{const e=we([{name:"Павел",surname:"Васнецов",seniority:2,age:22,address:"Великая улица, 15"},{name:"Виктор",surname:"Петров",seniority:5,age:30,address:"Московская улица, 1Б"},{name:"Дмитрий",surname:"Сидоров",seniority:8,age:32,address:"Пушкинская улица, 18"},{name:"Василий",surname:"Соколов",seniority:6,age:36,address:"Цветочная улица, 15"}]),t=localStorage.getItem("employees");return t?e.value=JSON.parse(t):localStorage.setItem("employees",JSON.stringify(e.value)),Rt(()=>e,a=>{localStorage.setItem("employees",JSON.stringify(a.value))},{deep:!0}),{employeesStore:e,add_new_employee:a=>{e.value.push({...a})},edit_employee:(a,i)=>{e.value[i]=a}}});const bn=e=>(No("data-v-e8968b1b"),e=e(),Mo(),e),xc={key:0,class:"modal-overlay"},wc={class:"content"},kc={key:0},Ac={key:1},Oc={class:"body"},Ec={class:"name"},Sc=bn(()=>U("span",null,"Имя:",-1)),Pc={class:"surname"},Cc=bn(()=>U("span",null,"Фамилия:",-1)),Ic={class:"seniority"},Tc=bn(()=>U("span",null,"Стаж:",-1)),Nc={class:"age"},Mc=bn(()=>U("span",null,"Возраст:",-1)),Rc={class:"address"},Fc=bn(()=>U("span",null,"Адрес:",-1)),Lc={__name:"useModal",setup(e,{expose:t}){const n=ns(),r=we(!1),a=we(!1),i=we(""),o=we(""),s=we(""),l=we(""),c=we(""),u=we();function m(S,T,y){r.value=!0,S&&T?(a.value=!0,i.value=T.name,o.value=T.surname,s.value=String(T.seniority),l.value=String(T.age),c.value=T.address,u.value=y):a.value=!1}function h(){return i.value!=""&&o.value!=""&&s.value!=""&&l.value!=""&&c.value!=""?!0:alert("Вы заполнили не все поля.")}function w(){if(h()){const S={name:i.value,surname:o.value,seniority:s.value,age:l.value,address:c.value};n.add_new_employee(S),r.value=!1}}function R(){if(h()){const S={name:i.value,surname:o.value,seniority:s.value,age:l.value,address:c.value};n.edit_employee(S,u.value),r.value=!1}}return t({open:m}),(S,T)=>r.value?(Le(),gt("article",xc,[U("section",wc,[U("header",null,[a.value?(Le(),gt("h1",Ac,"Редактировать сотрудника")):(Le(),gt("h1",kc,"Добавить нового сотрудника"))]),U("section",Oc,[U("section",Ec,[Sc,qt(U("input",{type:"text","onUpdate:modelValue":T[0]||(T[0]=y=>i.value=y),placeholder:"Введите имя"},null,512),[[Jt,i.value]])]),U("section",Pc,[Cc,qt(U("input",{type:"text","onUpdate:modelValue":T[1]||(T[1]=y=>o.value=y),placeholder:"Введите фамилию"},null,512),[[Jt,o.value]])]),U("section",Ic,[Tc,qt(U("input",{type:"number","onUpdate:modelValue":T[2]||(T[2]=y=>s.value=y),placeholder:"Введите стаж"},null,512),[[Jt,s.value]])]),U("section",Nc,[Mc,qt(U("input",{type:"number","onUpdate:modelValue":T[3]||(T[3]=y=>l.value=y),placeholder:"Введите возраст"},null,512),[[Jt,l.value]])]),U("section",Rc,[Fc,qt(U("input",{type:"text","onUpdate:modelValue":T[4]||(T[4]=y=>c.value=y),placeholder:"Введите адрес"},null,512),[[Jt,c.value]])])]),a.value?(Le(),Wr(Jr,{key:1,value:"Сохранить",onClick:R})):(Le(),Wr(Jr,{key:0,value:"Добавить",onClick:w})),U("span",{class:"close",onClick:T[5]||(T[5]=y=>r.value=!1)},"+")])])):Sf("",!0)}},jc=Sa(Lc,[["__scopeId","data-v-e8968b1b"]]);const Bt=e=>(No("data-v-d44d3819"),e=e(),Mo(),e),Dc={class:"wrapper"},$c={class:"name"},zc=Bt(()=>U("span",null,"Имя:",-1)),Uc={class:"surname"},Hc=Bt(()=>U("span",null,"Фамилия:",-1)),Bc={class:"seniority"},Yc=Bt(()=>U("span",null,"Стаж:",-1)),Wc={class:"age"},Kc=Bt(()=>U("span",null,"Возраст:",-1)),Vc={class:"address"},qc=Bt(()=>U("span",null,"Адрес:",-1)),Xc={class:"controls"},Jc=Bt(()=>U("span",null,"Редактировать:",-1)),Zc={__name:"App",setup(e){const t=ns(),n=we(null);return(r,a)=>{const i=Ll("font-awesome-icon");return Le(),gt(Ae,null,[U("article",Dc,[de(Jr,{value:"Добавить нового сотрудника",onClick:a[0]||(a[0]=o=>n.value.open(!1))}),(Le(!0),gt(Ae,null,tf(Ao(t).employeesStore,(o,s)=>(Le(),gt("section",{key:o,class:"employee"},[U("section",$c,[zc,U("p",null,Vt(o.name),1)]),U("section",Uc,[Hc,U("p",null,Vt(o.surname),1)]),U("section",Bc,[Yc,U("p",null,Vt(o.seniority),1)]),U("section",Wc,[Kc,U("p",null,Vt(o.age),1)]),U("section",Vc,[qc,U("p",null,Vt(o.address),1)]),U("section",Xc,[Jc,de(i,{icon:"pen-to-square",size:"lg",onClick:l=>n.value.open(!0,o,s)},null,8,["onClick"])])]))),128))]),de(jc,{ref_key:"modal",ref:n},null,512)],64)}}},Qc=Sa(Zc,[["__scopeId","data-v-d44d3819"]]);function Si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Si(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Si(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Jn(e){"@babel/helpers - typeof";return Jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jn(e)}function Gc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function eu(e,t,n){return t&&Pi(e.prototype,t),n&&Pi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pa(e,t){return nu(e)||au(e,t)||rs(e,t)||ou()}function yn(e){return tu(e)||ru(e)||rs(e)||iu()}function tu(e){if(Array.isArray(e))return Zr(e)}function nu(e){if(Array.isArray(e))return e}function ru(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function au(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function rs(e,t){if(e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function iu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ou(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ci=function(){},Ca={},as={},is=null,os={mark:Ci,measure:Ci};try{typeof window<"u"&&(Ca=window),typeof document<"u"&&(as=document),typeof MutationObserver<"u"&&(is=MutationObserver),typeof performance<"u"&&(os=performance)}catch{}var su=Ca.navigator||{},Ii=su.userAgent,Ti=Ii===void 0?"":Ii,at=Ca,Q=as,Ni=is,In=os;at.document;var Ve=!!Q.documentElement&&!!Q.head&&typeof Q.addEventListener=="function"&&typeof Q.createElement=="function",ss=~Ti.indexOf("MSIE")||~Ti.indexOf("Trident/"),Tn,Nn,Mn,Rn,Fn,Be="___FONT_AWESOME___",Qr=16,ls="fa",fs="svg-inline--fa",xt="data-fa-i2svg",Gr="data-fa-pseudo-element",lu="data-fa-pseudo-element-pending",Ia="data-prefix",Ta="data-icon",Mi="fontawesome-i2svg",fu="async",cu=["HTML","HEAD","STYLE","SCRIPT"],cs=function(){try{return!0}catch{return!1}}(),Z="classic",ne="sharp",Na=[Z,ne];function _n(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Z]}})}var mn=_n((Tn={},se(Tn,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),se(Tn,ne,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Tn)),pn=_n((Nn={},se(Nn,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(Nn,ne,{solid:"fass",regular:"fasr",light:"fasl"}),Nn)),hn=_n((Mn={},se(Mn,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(Mn,ne,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Mn)),uu=_n((Rn={},se(Rn,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(Rn,ne,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Rn)),du=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,us="fa-layers-text",mu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,pu=_n((Fn={},se(Fn,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(Fn,ne,{900:"fass",400:"fasr",300:"fasl"}),Fn)),ds=[1,2,3,4,5,6,7,8,9,10],hu=ds.concat([11,12,13,14,15,16,17,18,19,20]),vu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vn=new Set;Object.keys(pn[Z]).map(vn.add.bind(vn));Object.keys(pn[ne]).map(vn.add.bind(vn));var gu=[].concat(Na,yn(vn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pt.GROUP,pt.SWAP_OPACITY,pt.PRIMARY,pt.SECONDARY]).concat(ds.map(function(e){return"".concat(e,"x")})).concat(hu.map(function(e){return"w-".concat(e)})),an=at.FontAwesomeConfig||{};function bu(e){var t=Q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function yu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Q&&typeof Q.querySelector=="function"){var _u=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_u.forEach(function(e){var t=Pa(e,2),n=t[0],r=t[1],a=yu(bu(n));a!=null&&(an[r]=a)})}var ms={styleDefault:"solid",familyDefault:"classic",cssPrefix:ls,replacementClass:fs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};an.familyPrefix&&(an.cssPrefix=an.familyPrefix);var $t=E(E({},ms),an);$t.autoReplaceSvg||($t.observeMutations=!1);var I={};Object.keys(ms).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){$t[e]=n,on.forEach(function(r){return r(I)})},get:function(){return $t[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){$t.cssPrefix=t,on.forEach(function(n){return n(I)})},get:function(){return $t.cssPrefix}});at.FontAwesomeConfig=I;var on=[];function xu(e){return on.push(e),function(){on.splice(on.indexOf(e),1)}}var Je=Qr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wu(e){if(!(!e||!Ve)){var t=Q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Q.head.insertBefore(t,r),e}}var ku="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){for(var e=12,t="";e-- >0;)t+=ku[Math.random()*62|0];return t}function Yt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ma(e){return e.classList?Yt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ps(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Au(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ps(e[n]),'" ')},"").trim()}function vr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ra(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function Ou(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Eu(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,a=e.height,i=a===void 0?Qr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ss?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Su=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function hs(){var e=ls,t=fs,n=I.cssPrefix,r=I.replacementClass,a=Su;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ri=!1;function Cr(){I.autoAddCss&&!Ri&&(wu(hs()),Ri=!0)}var Pu={mixout:function(){return{dom:{css:hs,insertCss:Cr}}},hooks:function(){return{beforeDOMElementCreation:function(){Cr()},beforeI2svg:function(){Cr()}}}},Ye=at||{};Ye[Be]||(Ye[Be]={});Ye[Be].styles||(Ye[Be].styles={});Ye[Be].hooks||(Ye[Be].hooks={});Ye[Be].shims||(Ye[Be].shims=[]);var Se=Ye[Be],vs=[],Cu=function e(){Q.removeEventListener("DOMContentLoaded",e),Zn=1,vs.map(function(t){return t()})},Zn=!1;Ve&&(Zn=(Q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Q.readyState),Zn||Q.addEventListener("DOMContentLoaded",Cu));function Iu(e){Ve&&(Zn?setTimeout(e,0):vs.push(e))}function xn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ps(e):"<".concat(t," ").concat(Au(r),">").concat(i.map(xn).join(""),"</").concat(t,">")}function Fi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Tu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Ir=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Tu(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function Nu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ea(e){var t=Nu(e);return t.length===1?t[0].toString(16):null}function Mu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Li(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ta(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Li(t);typeof Se.hooks.addPack=="function"&&!a?Se.hooks.addPack(e,Li(t)):Se.styles[e]=E(E({},Se.styles[e]||{}),i),e==="fas"&&ta("fa",t)}var Ln,jn,Dn,Ct=Se.styles,Ru=Se.shims,Fu=(Ln={},se(Ln,Z,Object.values(hn[Z])),se(Ln,ne,Object.values(hn[ne])),Ln),Fa=null,gs={},bs={},ys={},_s={},xs={},Lu=(jn={},se(jn,Z,Object.keys(mn[Z])),se(jn,ne,Object.keys(mn[ne])),jn);function ju(e){return~gu.indexOf(e)}function Du(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!ju(a)?a:null}var ws=function(){var t=function(i){return Ir(Ct,function(o,s,l){return o[l]=Ir(s,i,{}),o},{})};gs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),bs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),xs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ct||I.autoFetchSvg,r=Ir(Ru,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ys=r.names,_s=r.unicodes,Fa=gr(I.styleDefault,{family:I.familyDefault})};xu(function(e){Fa=gr(e.styleDefault,{family:I.familyDefault})});ws();function La(e,t){return(gs[e]||{})[t]}function $u(e,t){return(bs[e]||{})[t]}function ht(e,t){return(xs[e]||{})[t]}function ks(e){return ys[e]||{prefix:null,iconName:null}}function zu(e){var t=_s[e],n=La("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function it(){return Fa}var ja=function(){return{prefix:null,iconName:null,rest:[]}};function gr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Z:n,a=mn[r][e],i=pn[r][e]||pn[r][a],o=e in Se.styles?e:null;return i||o||null}var ji=(Dn={},se(Dn,Z,Object.keys(hn[Z])),se(Dn,ne,Object.keys(hn[ne])),Dn);function br(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},se(t,Z,"".concat(I.cssPrefix,"-").concat(Z)),se(t,ne,"".concat(I.cssPrefix,"-").concat(ne)),t),o=null,s=Z;(e.includes(i[Z])||e.some(function(c){return ji[Z].includes(c)}))&&(s=Z),(e.includes(i[ne])||e.some(function(c){return ji[ne].includes(c)}))&&(s=ne);var l=e.reduce(function(c,u){var m=Du(I.cssPrefix,u);if(Ct[u]?(u=Fu[s].includes(u)?uu[s][u]:u,o=u,c.prefix=u):Lu[s].indexOf(u)>-1?(o=u,c.prefix=gr(u,{family:s})):m?c.iconName=m:u!==I.replacementClass&&u!==i[Z]&&u!==i[ne]&&c.rest.push(u),!a&&c.prefix&&c.iconName){var h=o==="fa"?ks(c.iconName):{},w=ht(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||w||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Ct.far&&Ct.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},ja());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ne&&(Ct.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=ht(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=it()||"fas"),l}var Uu=function(){function e(){Gc(this,e),this.definitions={}}return eu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),ta(s,o[s]);var l=hn[Z][s];l&&ta(l,o[s]),ws()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Di=[],It={},Ft={},Hu=Object.keys(Ft);function Bu(e,t){var n=t.mixoutsTo;return Di=e,It={},Object.keys(Ft).forEach(function(r){Hu.indexOf(r)===-1&&delete Ft[r]}),Di.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Jn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){It[o]||(It[o]=[]),It[o].push(i[o])})}r.provides&&r.provides(Ft)}),n}function na(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=It[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function wt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=It[e]||[];a.forEach(function(i){i.apply(null,n)})}function We(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ft[e]?Ft[e].apply(null,t):void 0}function ra(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||it();if(t)return t=ht(n,t)||t,Fi(As.definitions,n,t)||Fi(Se.styles,n,t)}var As=new Uu,Yu=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,wt("noAuto")},Wu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ve?(wt("beforeI2svg",t),We("pseudoElements2svg",t),We("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Iu(function(){Vu({autoReplaceSvgRoot:n}),wt("watch",t)})}},Ku={icon:function(t){if(t===null)return null;if(Jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ht(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=gr(t[0]);return{prefix:r,iconName:ht(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(du))){var a=br(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||it(),iconName:ht(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=it();return{prefix:i,iconName:ht(i,t)||t}}}},xe={noAuto:Yu,config:I,dom:Wu,parse:Ku,library:As,findIconDefinition:ra,toHtml:xn},Vu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Q:n;(Object.keys(Se.styles).length>0||I.autoFetchSvg)&&Ve&&I.autoReplaceSvg&&xe.dom.i2svg({node:r})};function yr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return xn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ve){var r=Q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function qu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ra(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=vr(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Xu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Da(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,w=h===void 0?!1:h,R=r.found?r:n,S=R.width,T=R.height,y=a==="fak",A=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(z){return m.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(m.classes).join(" "),L={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:A,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(T)})},P=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/T*16*.0625,"em")}:{};w&&(L.attributes[xt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||gn())},children:[l]}),delete L.attributes.title);var $=E(E({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},P),m.styles)}),fe=r.found&&n.found?We("generateAbstractMask",$)||{children:[],attributes:{}}:We("generateAbstractIcon",$)||{children:[],attributes:{}},ee=fe.children,B=fe.attributes;return $.children=ee,$.attributes=B,s?Xu($):qu($)}function $i(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[xt]="");var u=E({},o.styles);Ra(a)&&(u.transform=Eu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=vr(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Ju(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=vr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Tr=Se.styles;function aa(e){var t=e[0],n=e[1],r=e.slice(4),a=Pa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Zu={found:!1,width:512,height:512};function Qu(e,t){!cs&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ia(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=it()),new Promise(function(r,a){if(We("missingIconAbstract"),n==="fa"){var i=ks(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Tr[t]&&Tr[t][e]){var o=Tr[t][e];return r(aa(o))}Qu(e,t),r(E(E({},Zu),{},{icon:I.showMissingIcons&&e?We("missingIconAbstract")||{}:{}}))})}var zi=function(){},oa=I.measurePerformance&&In&&In.mark&&In.measure?In:{mark:zi,measure:zi},Gt='FA "6.4.2"',Gu=function(t){return oa.mark("".concat(Gt," ").concat(t," begins")),function(){return Os(t)}},Os=function(t){oa.mark("".concat(Gt," ").concat(t," ends")),oa.measure("".concat(Gt," ").concat(t),"".concat(Gt," ").concat(t," begins"),"".concat(Gt," ").concat(t," ends"))},$a={begin:Gu,end:Os},Bn=function(){};function Ui(e){var t=e.getAttribute?e.getAttribute(xt):null;return typeof t=="string"}function ed(e){var t=e.getAttribute?e.getAttribute(Ia):null,n=e.getAttribute?e.getAttribute(Ta):null;return t&&n}function td(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function nd(){if(I.autoReplaceSvg===!0)return Yn.replace;var e=Yn[I.autoReplaceSvg];return e||Yn.replace}function rd(e){return Q.createElementNS("http://www.w3.org/2000/svg",e)}function ad(e){return Q.createElement(e)}function Es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?rd:ad:n;if(typeof e=="string")return Q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Es(o,{ceFn:r}))}),a}function id(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Yn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Es(a),n)}),n.getAttribute(xt)===null&&I.keepOriginalSource){var r=Q.createComment(id(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ma(n).indexOf(I.replacementClass))return Yn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return xn(s)}).join(`
`);n.setAttribute(xt,""),n.innerHTML=o}};function Hi(e){e()}function Ss(e,t){var n=typeof t=="function"?t:Bn;if(e.length===0)n();else{var r=Hi;I.mutateApproach===fu&&(r=at.requestAnimationFrame||Hi),r(function(){var a=nd(),i=$a.begin("mutate");e.map(a),i(),n()})}}var za=!1;function Ps(){za=!0}function sa(){za=!1}var Qn=null;function Bi(e){if(Ni&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Bn:t,r=e.nodeCallback,a=r===void 0?Bn:r,i=e.pseudoElementsCallback,o=i===void 0?Bn:i,s=e.observeMutationsRoot,l=s===void 0?Q:s;Qn=new Ni(function(c){if(!za){var u=it();Yt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ui(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ui(m.target)&&~vu.indexOf(m.attributeName))if(m.attributeName==="class"&&ed(m.target)){var h=br(Ma(m.target)),w=h.prefix,R=h.iconName;m.target.setAttribute(Ia,w||u),R&&m.target.setAttribute(Ta,R)}else td(m.target)&&a(m.target)})}}),Ve&&Qn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function od(){Qn&&Qn.disconnect()}function sd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ld(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=br(Ma(e));return a.prefix||(a.prefix=it()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=$u(a.prefix,e.innerText)||La(a.prefix,ea(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function fd(e){var t=Yt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||gn()):(t["aria-hidden"]="true",t.focusable="false")),t}function cd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ld(e),r=n.iconName,a=n.prefix,i=n.rest,o=fd(e),s=na("parseNodeAttributes",{},e),l=t.styleParser?sd(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ud=Se.styles;function Cs(e){var t=I.autoReplaceSvg==="nest"?Yi(e,{styleParser:!1}):Yi(e);return~t.extra.classes.indexOf(us)?We("generateLayersText",e,t):We("generateSvgReplacementMutation",e,t)}var ot=new Set;Na.map(function(e){ot.add("fa-".concat(e))});Object.keys(mn[Z]).map(ot.add.bind(ot));Object.keys(mn[ne]).map(ot.add.bind(ot));ot=yn(ot);function Wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ve)return Promise.resolve();var n=Q.documentElement.classList,r=function(m){return n.add("".concat(Mi,"-").concat(m))},a=function(m){return n.remove("".concat(Mi,"-").concat(m))},i=I.autoFetchSvg?ot:Na.map(function(u){return"fa-".concat(u)}).concat(Object.keys(ud));i.includes("fa")||i.push("fa");var o=[".".concat(us,":not([").concat(xt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(xt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Yt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=$a.begin("onTree"),c=s.reduce(function(u,m){try{var h=Cs(m);h&&u.push(h)}catch(w){cs||w.name==="MissingIcon"&&console.error(w)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){Ss(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function dd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Cs(e).then(function(n){n&&Ss([n],t)})}function md(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ra(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ra(a||{})),e(r,E(E({},n),{},{mask:a}))}}var pd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?je:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,w=n.titleId,R=w===void 0?null:w,S=n.classes,T=S===void 0?[]:S,y=n.attributes,A=y===void 0?{}:y,L=n.styles,P=L===void 0?{}:L;if(t){var $=t.prefix,fe=t.iconName,ee=t.icon;return yr(E({type:"icon"},t),function(){return wt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(h?A["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(R||gn()):(A["aria-hidden"]="true",A.focusable="false")),Da({icons:{main:aa(ee),mask:l?aa(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:$,iconName:fe,transform:E(E({},je),a),symbol:o,title:h,maskId:u,titleId:R,extra:{attributes:A,styles:P,classes:T}})})}},hd={mixout:function(){return{icon:md(pd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wi,n.nodeCallback=dd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Q:r,i=n.callback,o=i===void 0?function(){}:i;return Wi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(w,R){Promise.all([ia(a,s),u.iconName?ia(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var T=Pa(S,2),y=T[0],A=T[1];w([n,Da({icons:{main:y,mask:A},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=vr(s);l.length>0&&(a.style=l);var c;return Ra(o)&&(c=We("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},vd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return yr({type:"layer"},function(){wt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(yn(i)).join(" ")},children:o}]})}}}},gd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return yr({type:"counter",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),Ju({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(yn(s))}})})}}}},bd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?je:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,w=h===void 0?{}:h;return yr({type:"text",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:r}),$i({content:n,transform:E(E({},je),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(I.cssPrefix,"-layers-text")].concat(yn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ss){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,$i({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},yd=new RegExp('"',"ug"),Ki=[1105920,1112319];function _d(e){var t=e.replace(yd,""),n=Mu(t,0),r=n>=Ki[0]&&n<=Ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:ea(a?t[0]:t),isSecondary:r||a}}function Vi(e,t){var n="".concat(lu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Yt(e.children),o=i.filter(function(ee){return ee.getAttribute(Gr)===t})[0],s=at.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(mu),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ne:Z,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pn[h][l[2].toLowerCase()]:pu[h][c],R=_d(m),S=R.value,T=R.isSecondary,y=l[0].startsWith("FontAwesome"),A=La(w,S),L=A;if(y){var P=zu(S);P.iconName&&P.prefix&&(A=P.iconName,w=P.prefix)}if(A&&!T&&(!o||o.getAttribute(Ia)!==w||o.getAttribute(Ta)!==L)){e.setAttribute(n,L),o&&e.removeChild(o);var $=cd(),fe=$.extra;fe.attributes[Gr]=t,ia(A,w).then(function(ee){var B=Da(E(E({},$),{},{icons:{main:ee,mask:ja()},prefix:w,iconName:L,extra:fe,watchable:!0})),z=Q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=B.map(function(ae){return xn(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function xd(e){return Promise.all([Vi(e,"::before"),Vi(e,"::after")])}function wd(e){return e.parentNode!==document.head&&!~cu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Gr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function qi(e){if(Ve)return new Promise(function(t,n){var r=Yt(e.querySelectorAll("*")).filter(wd).map(xd),a=$a.begin("searchPseudoElements");Ps(),Promise.all(r).then(function(){a(),sa(),t()}).catch(function(){a(),sa(),n()})})}var kd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=qi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Q:r;I.searchPseudoElements&&qi(a)}}},Xi=!1,Ad={mixout:function(){return{dom:{unwatch:function(){Ps(),Xi=!0}}}},hooks:function(){return{bootstrap:function(){Bi(na("mutationObserverCallbacks",{}))},noAuto:function(){od()},watch:function(n){var r=n.observeMutationsRoot;Xi?sa():Bi(na("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ji=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Od={mixout:function(){return{parse:{transform:function(n){return Ji(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ji(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:h};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},Nr={x:0,y:0,width:"100%",height:"100%"};function Zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ed(e){return e.tag==="g"?e.children:[e]}var Sd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?br(a.split(" ").map(function(o){return o.trim()})):ja();return i.prefix||(i.prefix=it()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,w=Ou({transform:l,containerWidth:m,iconWidth:c}),R={tag:"rect",attributes:E(E({},Nr),{},{fill:"white"})},S=u.children?{children:u.children.map(Zi)}:{},T={tag:"g",attributes:E({},w.inner),children:[Zi(E({tag:u.tag,attributes:E(E({},u.attributes),w.path)},S))]},y={tag:"g",attributes:E({},w.outer),children:[T]},A="mask-".concat(s||gn()),L="clip-".concat(s||gn()),P={tag:"mask",attributes:E(E({},Nr),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:Ed(h)},P]};return r.push($,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(A,")")},Nr)}),{children:r,attributes:a}}}},Pd={provides:function(t){var n=!1;at.matchMedia&&(n=at.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Cd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Id=[Pu,hd,vd,gd,bd,kd,Ad,Od,Sd,Pd,Cd];Bu(Id,{mixoutsTo:xe});xe.noAuto;xe.config;var Td=xe.library;xe.dom;var la=xe.parse;xe.findIconDefinition;xe.toHtml;var Nd=xe.icon;xe.layer;xe.text;xe.counter;function Qi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qi(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gn(e){"@babel/helpers - typeof";return Gn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gn(e)}function pe(e,t,n){return t=Ld(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Md(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Rd(e,t){if(e==null)return{};var n=Md(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Fd(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ld(e){var t=Fd(e,"string");return typeof t=="symbol"?t:String(t)}var jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Is={exports:{}};(function(e){(function(t){var n=function(y,A,L){if(!c(A)||m(A)||h(A)||w(A)||l(A))return A;var P,$=0,fe=0;if(u(A))for(P=[],fe=A.length;$<fe;$++)P.push(n(y,A[$],L));else{P={};for(var ee in A)Object.prototype.hasOwnProperty.call(A,ee)&&(P[y(ee,L)]=n(y,A[ee],L))}return P},r=function(y,A){A=A||{};var L=A.separator||"_",P=A.split||/(?=[A-Z])/;return y.split(P).join(L)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(A,L){return L?L.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var A=a(y);return A.substr(0,1).toUpperCase()+A.substr(1)},o=function(y,A){return r(y,A).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},u=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},h=function(y){return s.call(y)=="[object RegExp]"},w=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},S=function(y,A){var L=A&&"process"in A?A.process:A;return typeof L!="function"?y:function(P,$){return L(P,y,$)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,A){return n(S(a,A),y)},decamelizeKeys:function(y,A){return n(S(o,A),y,A)},pascalizeKeys:function(y,A){return n(S(i,A),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(jd)})(Is);var Dd=Is.exports,$d=["class","style"];function zd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Dd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ud(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ts(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=Ud(u);break;case"style":l.style=zd(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Rd(n,$d);return Df(e.tag,Ue(Ue(Ue({},t),{},{class:a.class,style:Ue(Ue({},a.style),o)},a.attrs),s),r)}var Ns=!1;try{Ns=!0}catch{}function Hd(){if(!Ns&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Mr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function Bd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Gi(e){if(e&&Gn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(la.icon)return la.icon(e);if(e===null)return null;if(Gn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Yd=Hl({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ge(function(){return Gi(t.icon)}),i=Ge(function(){return Mr("classes",Bd(t))}),o=Ge(function(){return Mr("transform",typeof t.transform=="string"?la.transform(t.transform):t.transform)}),s=Ge(function(){return Mr("mask",Gi(t.mask))}),l=Ge(function(){return Nd(a.value,Ue(Ue(Ue(Ue({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Rt(l,function(u){if(!u)return Hd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=Ge(function(){return l.value?Ts(l.value.abstract[0],{},r):null});return function(){return c.value}}}),Wd={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]};Td.add(Wd);const Ua=fc(Qc);Ua.use(dc());Ua.component("font-awesome-icon",Yd);Ua.mount("#app");
