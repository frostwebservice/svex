import{N as ce,O as Pe,Q as ae,U as X,V as L,W as Z,X as bt,M as Tt,r as d}from"./app-f6d0c162.js";function Mr(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}var mt=Array.isArray;const ie=mt;var Et=1/0,ir=ce?ce.prototype:void 0,or=ir?ir.toString:void 0;function Rr(e){if(typeof e=="string")return e;if(ie(e))return Mr(e,Rr)+"";if(Pe(e))return or?or.call(e):"";var r=e+"";return r=="0"&&1/e==-Et?"-0":r}var St="[object AsyncFunction]",_t="[object Function]",At="[object GeneratorFunction]",$t="[object Proxy]";function Pr(e){if(!ae(e))return!1;var r=X(e);return r==_t||r==At||r==St||r==$t}var Ot=L["__core-js_shared__"];const _e=Ot;var ur=function(){var e=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function jt(e){return!!ur&&ur in e}var It=Function.prototype,wt=It.toString;function K(e){if(e!=null){try{return wt.call(e)}catch{}try{return e+""}catch{}}return""}var Ct=/[\\^$.*+?()[\]{}|]/g,Ft=/^\[object .+?Constructor\]$/,Mt=Function.prototype,Rt=Object.prototype,Pt=Mt.toString,Lt=Rt.hasOwnProperty,Dt=RegExp("^"+Pt.call(Lt).replace(Ct,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Vt(e){if(!ae(e)||jt(e))return!1;var r=Pr(e)?Dt:Ft;return r.test(K(e))}function xt(e,r){return e==null?void 0:e[r]}function W(e,r){var t=xt(e,r);return Vt(t)?t:void 0}var Ut=W(L,"WeakMap");const je=Ut;var sr=Object.create,Nt=function(){function e(){}return function(r){if(!ae(r))return{};if(sr)return sr(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const Bt=Nt;function Lr(e,r){var t=-1,n=e.length;for(r||(r=Array(n));++t<n;)r[t]=e[t];return r}var Gt=function(){try{var e=W(Object,"defineProperty");return e({},"",{}),e}catch{}}();const cr=Gt;function Ht(e,r){for(var t=-1,n=e==null?0:e.length;++t<n&&r(e[t],t,e)!==!1;);return e}var zt=9007199254740991,Kt=/^(?:0|[1-9]\d*)$/;function Wt(e,r){var t=typeof e;return r=r??zt,!!r&&(t=="number"||t!="symbol"&&Kt.test(e))&&e>-1&&e%1==0&&e<r}function Dr(e,r,t){r=="__proto__"&&cr?cr(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}function Vr(e,r){return e===r||e!==e&&r!==r}var kt=Object.prototype,Yt=kt.hasOwnProperty;function xr(e,r,t){var n=e[r];(!(Yt.call(e,r)&&Vr(n,t))||t===void 0&&!(r in e))&&Dr(e,r,t)}function fe(e,r,t,n){var i=!t;t||(t={});for(var o=-1,s=r.length;++o<s;){var p=r[o],E=n?n(t[p],e[p],p,t,e):void 0;E===void 0&&(E=e[p]),i?Dr(t,p,E):xr(t,p,E)}return t}var qt=9007199254740991;function Ur(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=qt}function Nr(e){return e!=null&&Ur(e.length)&&!Pr(e)}var Xt=Object.prototype;function Le(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||Xt;return e===t}function Zt(e,r){for(var t=-1,n=Array(e);++t<e;)n[t]=r(t);return n}var Jt="[object Arguments]";function lr(e){return Z(e)&&X(e)==Jt}var Br=Object.prototype,Qt=Br.hasOwnProperty,en=Br.propertyIsEnumerable,rn=lr(function(){return arguments}())?lr:function(e){return Z(e)&&Qt.call(e,"callee")&&!en.call(e,"callee")};const tn=rn;function nn(){return!1}var Gr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,fr=Gr&&typeof module=="object"&&module&&!module.nodeType&&module,an=fr&&fr.exports===Gr,dr=an?L.Buffer:void 0,on=dr?dr.isBuffer:void 0,un=on||nn;const Hr=un;var sn="[object Arguments]",cn="[object Array]",ln="[object Boolean]",fn="[object Date]",dn="[object Error]",pn="[object Function]",hn="[object Map]",vn="[object Number]",yn="[object Object]",gn="[object RegExp]",bn="[object Set]",Tn="[object String]",mn="[object WeakMap]",En="[object ArrayBuffer]",Sn="[object DataView]",_n="[object Float32Array]",An="[object Float64Array]",$n="[object Int8Array]",On="[object Int16Array]",jn="[object Int32Array]",In="[object Uint8Array]",wn="[object Uint8ClampedArray]",Cn="[object Uint16Array]",Fn="[object Uint32Array]",m={};m[_n]=m[An]=m[$n]=m[On]=m[jn]=m[In]=m[wn]=m[Cn]=m[Fn]=!0;m[sn]=m[cn]=m[En]=m[ln]=m[Sn]=m[fn]=m[dn]=m[pn]=m[hn]=m[vn]=m[yn]=m[gn]=m[bn]=m[Tn]=m[mn]=!1;function Mn(e){return Z(e)&&Ur(e.length)&&!!m[X(e)]}function De(e){return function(r){return e(r)}}var zr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ee=zr&&typeof module=="object"&&module&&!module.nodeType&&module,Rn=ee&&ee.exports===zr,Ae=Rn&&bt.process,Pn=function(){try{var e=ee&&ee.require&&ee.require("util").types;return e||Ae&&Ae.binding&&Ae.binding("util")}catch{}}();const q=Pn;var pr=q&&q.isTypedArray,Ln=pr?De(pr):Mn;const Dn=Ln;var Vn=Object.prototype,xn=Vn.hasOwnProperty;function Kr(e,r){var t=ie(e),n=!t&&tn(e),i=!t&&!n&&Hr(e),o=!t&&!n&&!i&&Dn(e),s=t||n||i||o,p=s?Zt(e.length,String):[],E=p.length;for(var b in e)(r||xn.call(e,b))&&!(s&&(b=="length"||i&&(b=="offset"||b=="parent")||o&&(b=="buffer"||b=="byteLength"||b=="byteOffset")||Wt(b,E)))&&p.push(b);return p}function Wr(e,r){return function(t){return e(r(t))}}var Un=Wr(Object.keys,Object);const Nn=Un;var Bn=Object.prototype,Gn=Bn.hasOwnProperty;function Hn(e){if(!Le(e))return Nn(e);var r=[];for(var t in Object(e))Gn.call(e,t)&&t!="constructor"&&r.push(t);return r}function Ve(e){return Nr(e)?Kr(e):Hn(e)}function zn(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var Kn=Object.prototype,Wn=Kn.hasOwnProperty;function kn(e){if(!ae(e))return zn(e);var r=Le(e),t=[];for(var n in e)n=="constructor"&&(r||!Wn.call(e,n))||t.push(n);return t}function xe(e){return Nr(e)?Kr(e,!0):kn(e)}var Yn=W(Object,"create");const re=Yn;function qn(){this.__data__=re?re(null):{},this.size=0}function Xn(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Zn="__lodash_hash_undefined__",Jn=Object.prototype,Qn=Jn.hasOwnProperty;function ea(e){var r=this.__data__;if(re){var t=r[e];return t===Zn?void 0:t}return Qn.call(r,e)?r[e]:void 0}var ra=Object.prototype,ta=ra.hasOwnProperty;function na(e){var r=this.__data__;return re?r[e]!==void 0:ta.call(r,e)}var aa="__lodash_hash_undefined__";function ia(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=re&&r===void 0?aa:r,this}function z(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}z.prototype.clear=qn;z.prototype.delete=Xn;z.prototype.get=ea;z.prototype.has=na;z.prototype.set=ia;function oa(){this.__data__=[],this.size=0}function de(e,r){for(var t=e.length;t--;)if(Vr(e[t][0],r))return t;return-1}var ua=Array.prototype,sa=ua.splice;function ca(e){var r=this.__data__,t=de(r,e);if(t<0)return!1;var n=r.length-1;return t==n?r.pop():sa.call(r,t,1),--this.size,!0}function la(e){var r=this.__data__,t=de(r,e);return t<0?void 0:r[t][1]}function fa(e){return de(this.__data__,e)>-1}function da(e,r){var t=this.__data__,n=de(t,e);return n<0?(++this.size,t.push([e,r])):t[n][1]=r,this}function D(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}D.prototype.clear=oa;D.prototype.delete=ca;D.prototype.get=la;D.prototype.has=fa;D.prototype.set=da;var pa=W(L,"Map");const te=pa;function ha(){this.size=0,this.__data__={hash:new z,map:new(te||D),string:new z}}function va(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}function pe(e,r){var t=e.__data__;return va(r)?t[typeof r=="string"?"string":"hash"]:t.map}function ya(e){var r=pe(this,e).delete(e);return this.size-=r?1:0,r}function ga(e){return pe(this,e).get(e)}function ba(e){return pe(this,e).has(e)}function Ta(e,r){var t=pe(this,e),n=t.size;return t.set(e,r),this.size+=t.size==n?0:1,this}function U(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var n=e[r];this.set(n[0],n[1])}}U.prototype.clear=ha;U.prototype.delete=ya;U.prototype.get=ga;U.prototype.has=ba;U.prototype.set=Ta;var ma="Expected a function";function Ue(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(ma);var t=function(){var n=arguments,i=r?r.apply(this,n):n[0],o=t.cache;if(o.has(i))return o.get(i);var s=e.apply(this,n);return t.cache=o.set(i,s)||o,s};return t.cache=new(Ue.Cache||U),t}Ue.Cache=U;var Ea=500;function Sa(e){var r=Ue(e,function(n){return t.size===Ea&&t.clear(),n}),t=r.cache;return r}var _a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Aa=/\\(\\)?/g,$a=Sa(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(_a,function(t,n,i,o){r.push(i?o.replace(Aa,"$1"):n||t)}),r});const Oa=$a;function ja(e){return e==null?"":Rr(e)}var Ia=1/0;function wa(e){if(typeof e=="string"||Pe(e))return e;var r=e+"";return r=="0"&&1/e==-Ia?"-0":r}function kr(e,r){for(var t=-1,n=r.length,i=e.length;++t<n;)e[i+t]=r[t];return e}var Ca=Wr(Object.getPrototypeOf,Object);const Ne=Ca;var Fa="[object Object]",Ma=Function.prototype,Ra=Object.prototype,Yr=Ma.toString,Pa=Ra.hasOwnProperty,La=Yr.call(Object);function hr(e){if(!Z(e)||X(e)!=Fa)return!1;var r=Ne(e);if(r===null)return!0;var t=Pa.call(r,"constructor")&&r.constructor;return typeof t=="function"&&t instanceof t&&Yr.call(t)==La}function Da(){this.__data__=new D,this.size=0}function Va(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function xa(e){return this.__data__.get(e)}function Ua(e){return this.__data__.has(e)}var Na=200;function Ba(e,r){var t=this.__data__;if(t instanceof D){var n=t.__data__;if(!te||n.length<Na-1)return n.push([e,r]),this.size=++t.size,this;t=this.__data__=new U(n)}return t.set(e,r),this.size=t.size,this}function J(e){var r=this.__data__=new D(e);this.size=r.size}J.prototype.clear=Da;J.prototype.delete=Va;J.prototype.get=xa;J.prototype.has=Ua;J.prototype.set=Ba;function Ga(e,r){return e&&fe(r,Ve(r),e)}function Ha(e,r){return e&&fe(r,xe(r),e)}var qr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,vr=qr&&typeof module=="object"&&module&&!module.nodeType&&module,za=vr&&vr.exports===qr,yr=za?L.Buffer:void 0,gr=yr?yr.allocUnsafe:void 0;function Ka(e,r){if(r)return e.slice();var t=e.length,n=gr?gr(t):new e.constructor(t);return e.copy(n),n}function Wa(e,r){for(var t=-1,n=e==null?0:e.length,i=0,o=[];++t<n;){var s=e[t];r(s,t,e)&&(o[i++]=s)}return o}function Xr(){return[]}var ka=Object.prototype,Ya=ka.propertyIsEnumerable,br=Object.getOwnPropertySymbols,qa=br?function(e){return e==null?[]:(e=Object(e),Wa(br(e),function(r){return Ya.call(e,r)}))}:Xr;const Be=qa;function Xa(e,r){return fe(e,Be(e),r)}var Za=Object.getOwnPropertySymbols,Ja=Za?function(e){for(var r=[];e;)kr(r,Be(e)),e=Ne(e);return r}:Xr;const Zr=Ja;function Qa(e,r){return fe(e,Zr(e),r)}function Jr(e,r,t){var n=r(e);return ie(e)?n:kr(n,t(e))}function ei(e){return Jr(e,Ve,Be)}function ri(e){return Jr(e,xe,Zr)}var ti=W(L,"DataView");const Ie=ti;var ni=W(L,"Promise");const we=ni;var ai=W(L,"Set");const Ce=ai;var Tr="[object Map]",ii="[object Object]",mr="[object Promise]",Er="[object Set]",Sr="[object WeakMap]",_r="[object DataView]",oi=K(Ie),ui=K(te),si=K(we),ci=K(Ce),li=K(je),B=X;(Ie&&B(new Ie(new ArrayBuffer(1)))!=_r||te&&B(new te)!=Tr||we&&B(we.resolve())!=mr||Ce&&B(new Ce)!=Er||je&&B(new je)!=Sr)&&(B=function(e){var r=X(e),t=r==ii?e.constructor:void 0,n=t?K(t):"";if(n)switch(n){case oi:return _r;case ui:return Tr;case si:return mr;case ci:return Er;case li:return Sr}return r});const Ge=B;var fi=Object.prototype,di=fi.hasOwnProperty;function pi(e){var r=e.length,t=new e.constructor(r);return r&&typeof e[0]=="string"&&di.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var hi=L.Uint8Array;const Ar=hi;function He(e){var r=new e.constructor(e.byteLength);return new Ar(r).set(new Ar(e)),r}function vi(e,r){var t=r?He(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var yi=/\w*$/;function gi(e){var r=new e.constructor(e.source,yi.exec(e));return r.lastIndex=e.lastIndex,r}var $r=ce?ce.prototype:void 0,Or=$r?$r.valueOf:void 0;function bi(e){return Or?Object(Or.call(e)):{}}function Ti(e,r){var t=r?He(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var mi="[object Boolean]",Ei="[object Date]",Si="[object Map]",_i="[object Number]",Ai="[object RegExp]",$i="[object Set]",Oi="[object String]",ji="[object Symbol]",Ii="[object ArrayBuffer]",wi="[object DataView]",Ci="[object Float32Array]",Fi="[object Float64Array]",Mi="[object Int8Array]",Ri="[object Int16Array]",Pi="[object Int32Array]",Li="[object Uint8Array]",Di="[object Uint8ClampedArray]",Vi="[object Uint16Array]",xi="[object Uint32Array]";function Ui(e,r,t){var n=e.constructor;switch(r){case Ii:return He(e);case mi:case Ei:return new n(+e);case wi:return vi(e,t);case Ci:case Fi:case Mi:case Ri:case Pi:case Li:case Di:case Vi:case xi:return Ti(e,t);case Si:return new n;case _i:case Oi:return new n(e);case Ai:return gi(e);case $i:return new n;case ji:return bi(e)}}function Ni(e){return typeof e.constructor=="function"&&!Le(e)?Bt(Ne(e)):{}}var Bi="[object Map]";function Gi(e){return Z(e)&&Ge(e)==Bi}var jr=q&&q.isMap,Hi=jr?De(jr):Gi;const zi=Hi;var Ki="[object Set]";function Wi(e){return Z(e)&&Ge(e)==Ki}var Ir=q&&q.isSet,ki=Ir?De(Ir):Wi;const Yi=ki;var qi=1,Xi=2,Zi=4,Qr="[object Arguments]",Ji="[object Array]",Qi="[object Boolean]",eo="[object Date]",ro="[object Error]",et="[object Function]",to="[object GeneratorFunction]",no="[object Map]",ao="[object Number]",rt="[object Object]",io="[object RegExp]",oo="[object Set]",uo="[object String]",so="[object Symbol]",co="[object WeakMap]",lo="[object ArrayBuffer]",fo="[object DataView]",po="[object Float32Array]",ho="[object Float64Array]",vo="[object Int8Array]",yo="[object Int16Array]",go="[object Int32Array]",bo="[object Uint8Array]",To="[object Uint8ClampedArray]",mo="[object Uint16Array]",Eo="[object Uint32Array]",T={};T[Qr]=T[Ji]=T[lo]=T[fo]=T[Qi]=T[eo]=T[po]=T[ho]=T[vo]=T[yo]=T[go]=T[no]=T[ao]=T[rt]=T[io]=T[oo]=T[uo]=T[so]=T[bo]=T[To]=T[mo]=T[Eo]=!0;T[ro]=T[et]=T[co]=!1;function se(e,r,t,n,i,o){var s,p=r&qi,E=r&Xi,b=r&Zi;if(t&&(s=i?t(e,n,i,o):t(e)),s!==void 0)return s;if(!ae(e))return e;var V=ie(e);if(V){if(s=pi(e),!p)return Lr(e,s)}else{var j=Ge(e),f=j==et||j==to;if(Hr(e))return Ka(e,p);if(j==rt||j==Qr||f&&!i){if(s=E||f?{}:Ni(e),!p)return E?Qa(e,Ha(s,e)):Xa(e,Ga(s,e))}else{if(!T[j])return i?e:{};s=Ui(e,j,p)}}o||(o=new J);var O=o.get(e);if(O)return O;o.set(e,s),Yi(e)?e.forEach(function($){s.add(se($,r,t,$,e,o))}):zi(e)&&e.forEach(function($,S){s.set(S,se($,r,t,S,e,o))});var R=b?E?ri:ei:E?xe:Ve,M=V?void 0:R(e);return Ht(M||e,function($,S){M&&(S=$,$=e[S]),xr(s,S,se($,r,t,S,e,o))}),s}var So=4;function wr(e){return se(e,So)}function tt(e){return ie(e)?Mr(e,wa):Pe(e)?[e]:Lr(Oa(ja(e)))}var Cr=Array.isArray,Fr=Object.keys,_o=Object.prototype.hasOwnProperty,Ao=typeof Element<"u";function Fe(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var t=Cr(e),n=Cr(r),i,o,s;if(t&&n){if(o=e.length,o!=r.length)return!1;for(i=o;i--!==0;)if(!Fe(e[i],r[i]))return!1;return!0}if(t!=n)return!1;var p=e instanceof Date,E=r instanceof Date;if(p!=E)return!1;if(p&&E)return e.getTime()==r.getTime();var b=e instanceof RegExp,V=r instanceof RegExp;if(b!=V)return!1;if(b&&V)return e.toString()==r.toString();var j=Fr(e);if(o=j.length,o!==Fr(r).length)return!1;for(i=o;i--!==0;)if(!_o.call(r,j[i]))return!1;if(Ao&&e instanceof Element&&r instanceof Element)return e===r;for(i=o;i--!==0;)if(s=j[i],!(s==="_owner"&&e.$$typeof)&&!Fe(e[s],r[s]))return!1;return!0}return e!==e&&r!==r}var $o=function(r,t){try{return Fe(r,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const G=Tt($o);var Oo=function(r){return jo(r)&&!Io(r)};function jo(e){return!!e&&typeof e=="object"}function Io(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Fo(e)}var wo=typeof Symbol=="function"&&Symbol.for,Co=wo?Symbol.for("react.element"):60103;function Fo(e){return e.$$typeof===Co}function Mo(e){return Array.isArray(e)?[]:{}}function le(e,r){return r.clone!==!1&&r.isMergeableObject(e)?ne(Mo(e),e,r):e}function Ro(e,r,t){return e.concat(r).map(function(n){return le(n,t)})}function Po(e,r,t){var n={};return t.isMergeableObject(e)&&Object.keys(e).forEach(function(i){n[i]=le(e[i],t)}),Object.keys(r).forEach(function(i){!t.isMergeableObject(r[i])||!e[i]?n[i]=le(r[i],t):n[i]=ne(e[i],r[i],t)}),n}function ne(e,r,t){t=t||{},t.arrayMerge=t.arrayMerge||Ro,t.isMergeableObject=t.isMergeableObject||Oo;var n=Array.isArray(r),i=Array.isArray(e),o=n===i;return o?n?t.arrayMerge(e,r,t):Po(e,r,t):le(r,t)}ne.all=function(r,t){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(n,i){return ne(n,i,t)},{})};var Me=ne,Lo=!0;function Do(e,r){if(!Lo){if(e)return;var t="Warning: "+r;typeof console<"u"&&console.warn(t);try{throw Error(t)}catch{}}}function A(){return A=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},A.apply(this,arguments)}function nt(e,r){if(e==null)return{};var t={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var F=function(r){return typeof r=="function"},he=function(r){return r!==null&&typeof r=="object"},Vo=function(r){return String(Math.floor(Number(r)))===r},$e=function(r){return Object.prototype.toString.call(r)==="[object String]"},Oe=function(r){return he(r)&&F(r.then)};function w(e,r,t,n){n===void 0&&(n=0);for(var i=tt(r);e&&n<i.length;)e=e[i[n++]];return e===void 0?t:e}function H(e,r,t){for(var n=wr(e),i=n,o=0,s=tt(r);o<s.length-1;o++){var p=s[o],E=w(e,s.slice(0,o+1));if(E&&(he(E)||Array.isArray(E)))i=i[p]=wr(E);else{var b=s[o+1];i=i[p]=Vo(b)&&Number(b)>=0?[]:{}}}return(o===0?e:i)[s[o]]===t?e:(t===void 0?delete i[s[o]]:i[s[o]]=t,o===0&&t===void 0&&delete n[s[o]],n)}function at(e,r,t,n){t===void 0&&(t=new WeakMap),n===void 0&&(n={});for(var i=0,o=Object.keys(e);i<o.length;i++){var s=o[i],p=e[s];he(p)?t.get(p)||(t.set(p,!0),n[s]=Array.isArray(p)?[]:{},at(p,r,t,n[s])):n[s]=r}return n}var ve=d.createContext(void 0);ve.displayName="FormikContext";ve.Provider;ve.Consumer;function xo(){var e=d.useContext(ve);return e||Do(!1),e}function Uo(e,r){switch(r.type){case"SET_VALUES":return A({},e,{values:r.payload});case"SET_TOUCHED":return A({},e,{touched:r.payload});case"SET_ERRORS":return G(e.errors,r.payload)?e:A({},e,{errors:r.payload});case"SET_STATUS":return A({},e,{status:r.payload});case"SET_ISSUBMITTING":return A({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return A({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return A({},e,{values:H(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return A({},e,{touched:H(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return A({},e,{errors:H(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return A({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return A({},e,{touched:at(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return A({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return A({},e,{isSubmitting:!1});default:return e}}var N={},ue={};function qo(e){var r=e.validateOnChange,t=r===void 0?!0:r,n=e.validateOnBlur,i=n===void 0?!0:n,o=e.validateOnMount,s=o===void 0?!1:o,p=e.isInitialValid,E=e.enableReinitialize,b=E===void 0?!1:E,V=e.onSubmit,j=nt(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=A({validateOnChange:t,validateOnBlur:i,validateOnMount:s,onSubmit:V},j),O=d.useRef(f.initialValues),R=d.useRef(f.initialErrors||N),M=d.useRef(f.initialTouched||ue),$=d.useRef(f.initialStatus),S=d.useRef(!1),x=d.useRef({});d.useEffect(function(){return S.current=!0,function(){S.current=!1}},[]);var ze=d.useReducer(Uo,{values:f.initialValues,errors:f.initialErrors||N,touched:f.initialTouched||ue,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),g=ze[0],y=ze[1],Ke=d.useCallback(function(a,u){return new Promise(function(c,l){var h=f.validate(a,u);h==null?c(N):Oe(h)?h.then(function(v){c(v||N)},function(v){l(v)}):c(h)})},[f.validate]),ye=d.useCallback(function(a,u){var c=f.validationSchema,l=F(c)?c(u):c,h=u&&l.validateAt?l.validateAt(u,a):Bo(a,l);return new Promise(function(v,_){h.then(function(){v(N)},function(P){P.name==="ValidationError"?v(No(P)):_(P)})})},[f.validationSchema]),We=d.useCallback(function(a,u){return new Promise(function(c){return c(x.current[a].validate(u))})},[]),ke=d.useCallback(function(a){var u=Object.keys(x.current).filter(function(l){return F(x.current[l].validate)}),c=u.length>0?u.map(function(l){return We(l,w(a,l))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(c).then(function(l){return l.reduce(function(h,v,_){return v==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||v&&(h=H(h,u[_],v)),h},{})})},[We]),it=d.useCallback(function(a){return Promise.all([ke(a),f.validationSchema?ye(a):{},f.validate?Ke(a):{}]).then(function(u){var c=u[0],l=u[1],h=u[2],v=Me.all([c,l,h],{arrayMerge:Go});return v})},[f.validate,f.validationSchema,ke,Ke,ye]),C=I(function(a){return a===void 0&&(a=g.values),y({type:"SET_ISVALIDATING",payload:!0}),it(a).then(function(u){return S.current&&(y({type:"SET_ISVALIDATING",payload:!1}),y({type:"SET_ERRORS",payload:u})),u})});d.useEffect(function(){s&&S.current===!0&&G(O.current,f.initialValues)&&C(O.current)},[s,C]);var Q=d.useCallback(function(a){var u=a&&a.values?a.values:O.current,c=a&&a.errors?a.errors:R.current?R.current:f.initialErrors||{},l=a&&a.touched?a.touched:M.current?M.current:f.initialTouched||{},h=a&&a.status?a.status:$.current?$.current:f.initialStatus;O.current=u,R.current=c,M.current=l,$.current=h;var v=function(){y({type:"RESET_FORM",payload:{isSubmitting:!!a&&!!a.isSubmitting,errors:c,touched:l,status:h,values:u,isValidating:!!a&&!!a.isValidating,submitCount:a&&a.submitCount&&typeof a.submitCount=="number"?a.submitCount:0}})};if(f.onReset){var _=f.onReset(g.values,nr);Oe(_)?_.then(v):v()}else v()},[f.initialErrors,f.initialStatus,f.initialTouched]);d.useEffect(function(){S.current===!0&&!G(O.current,f.initialValues)&&(b&&(O.current=f.initialValues,Q()),s&&C(O.current))},[b,f.initialValues,Q,s,C]),d.useEffect(function(){b&&S.current===!0&&!G(R.current,f.initialErrors)&&(R.current=f.initialErrors||N,y({type:"SET_ERRORS",payload:f.initialErrors||N}))},[b,f.initialErrors]),d.useEffect(function(){b&&S.current===!0&&!G(M.current,f.initialTouched)&&(M.current=f.initialTouched||ue,y({type:"SET_TOUCHED",payload:f.initialTouched||ue}))},[b,f.initialTouched]),d.useEffect(function(){b&&S.current===!0&&!G($.current,f.initialStatus)&&($.current=f.initialStatus,y({type:"SET_STATUS",payload:f.initialStatus}))},[b,f.initialStatus,f.initialTouched]);var Ye=I(function(a){if(x.current[a]&&F(x.current[a].validate)){var u=w(g.values,a),c=x.current[a].validate(u);return Oe(c)?(y({type:"SET_ISVALIDATING",payload:!0}),c.then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:l}}),y({type:"SET_ISVALIDATING",payload:!1})})):(y({type:"SET_FIELD_ERROR",payload:{field:a,value:c}}),Promise.resolve(c))}else if(f.validationSchema)return y({type:"SET_ISVALIDATING",payload:!0}),ye(g.values,a).then(function(l){return l}).then(function(l){y({type:"SET_FIELD_ERROR",payload:{field:a,value:l[a]}}),y({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),ot=d.useCallback(function(a,u){var c=u.validate;x.current[a]={validate:c}},[]),ut=d.useCallback(function(a){delete x.current[a]},[]),qe=I(function(a,u){y({type:"SET_TOUCHED",payload:a});var c=u===void 0?i:u;return c?C(g.values):Promise.resolve()}),Xe=d.useCallback(function(a){y({type:"SET_ERRORS",payload:a})},[]),Ze=I(function(a,u){var c=F(a)?a(g.values):a;y({type:"SET_VALUES",payload:c});var l=u===void 0?t:u;return l?C(c):Promise.resolve()}),oe=d.useCallback(function(a,u){y({type:"SET_FIELD_ERROR",payload:{field:a,value:u}})},[]),k=I(function(a,u,c){y({type:"SET_FIELD_VALUE",payload:{field:a,value:u}});var l=c===void 0?t:c;return l?C(H(g.values,a,u)):Promise.resolve()}),Je=d.useCallback(function(a,u){var c=u,l=a,h;if(!$e(a)){a.persist&&a.persist();var v=a.target?a.target:a.currentTarget,_=v.type,P=v.name,Ee=v.id,Se=v.value,yt=v.checked,ko=v.outerHTML,ar=v.options,gt=v.multiple;c=u||P||Ee,l=/number|range/.test(_)?(h=parseFloat(Se),isNaN(h)?"":h):/checkbox/.test(_)?zo(w(g.values,c),yt,Se):ar&&gt?Ho(ar):Se}c&&k(c,l)},[k,g.values]),ge=I(function(a){if($e(a))return function(u){return Je(u,a)};Je(a)}),Y=I(function(a,u,c){u===void 0&&(u=!0),y({type:"SET_FIELD_TOUCHED",payload:{field:a,value:u}});var l=c===void 0?i:c;return l?C(g.values):Promise.resolve()}),Qe=d.useCallback(function(a,u){a.persist&&a.persist();var c=a.target,l=c.name,h=c.id,v=c.outerHTML,_=u||l||h;Y(_,!0)},[Y]),be=I(function(a){if($e(a))return function(u){return Qe(u,a)};Qe(a)}),er=d.useCallback(function(a){F(a)?y({type:"SET_FORMIK_STATE",payload:a}):y({type:"SET_FORMIK_STATE",payload:function(){return a}})},[]),rr=d.useCallback(function(a){y({type:"SET_STATUS",payload:a})},[]),tr=d.useCallback(function(a){y({type:"SET_ISSUBMITTING",payload:a})},[]),Te=I(function(){return y({type:"SUBMIT_ATTEMPT"}),C().then(function(a){var u=a instanceof Error,c=!u&&Object.keys(a).length===0;if(c){var l;try{if(l=ct(),l===void 0)return}catch(h){throw h}return Promise.resolve(l).then(function(h){return S.current&&y({type:"SUBMIT_SUCCESS"}),h}).catch(function(h){if(S.current)throw y({type:"SUBMIT_FAILURE"}),h})}else if(S.current&&(y({type:"SUBMIT_FAILURE"}),u))throw a})}),st=I(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),Te().catch(function(u){console.warn("Warning: An unhandled error was caught from submitForm()",u)})}),nr={resetForm:Q,validateForm:C,validateField:Ye,setErrors:Xe,setFieldError:oe,setFieldTouched:Y,setFieldValue:k,setStatus:rr,setSubmitting:tr,setTouched:qe,setValues:Ze,setFormikState:er,submitForm:Te},ct=I(function(){return V(g.values,nr)}),lt=I(function(a){a&&a.preventDefault&&F(a.preventDefault)&&a.preventDefault(),a&&a.stopPropagation&&F(a.stopPropagation)&&a.stopPropagation(),Q()}),ft=d.useCallback(function(a){return{value:w(g.values,a),error:w(g.errors,a),touched:!!w(g.touched,a),initialValue:w(O.current,a),initialTouched:!!w(M.current,a),initialError:w(R.current,a)}},[g.errors,g.touched,g.values]),dt=d.useCallback(function(a){return{setValue:function(c,l){return k(a,c,l)},setTouched:function(c,l){return Y(a,c,l)},setError:function(c){return oe(a,c)}}},[k,Y,oe]),pt=d.useCallback(function(a){var u=he(a),c=u?a.name:a,l=w(g.values,c),h={name:c,value:l,onChange:ge,onBlur:be};if(u){var v=a.type,_=a.value,P=a.as,Ee=a.multiple;v==="checkbox"?_===void 0?h.checked=!!l:(h.checked=!!(Array.isArray(l)&&~l.indexOf(_)),h.value=_):v==="radio"?(h.checked=l===_,h.value=_):P==="select"&&Ee&&(h.value=h.value||[],h.multiple=!0)}return h},[be,ge,g.values]),me=d.useMemo(function(){return!G(O.current,g.values)},[O.current,g.values]),ht=d.useMemo(function(){return typeof p<"u"?me?g.errors&&Object.keys(g.errors).length===0:p!==!1&&F(p)?p(f):p:g.errors&&Object.keys(g.errors).length===0},[p,me,g.errors,f]),vt=A({},g,{initialValues:O.current,initialErrors:R.current,initialTouched:M.current,initialStatus:$.current,handleBlur:be,handleChange:ge,handleReset:lt,handleSubmit:st,resetForm:Q,setErrors:Xe,setFormikState:er,setFieldTouched:Y,setFieldValue:k,setFieldError:oe,setStatus:rr,setSubmitting:tr,setTouched:qe,setValues:Ze,submitForm:Te,validateForm:C,validateField:Ye,isValid:ht,dirty:me,unregisterField:ut,registerField:ot,getFieldProps:pt,getFieldMeta:ft,getFieldHelpers:dt,validateOnBlur:i,validateOnChange:t,validateOnMount:s});return vt}function No(e){var r={};if(e.inner){if(e.inner.length===0)return H(r,e.path,e.message);for(var i=e.inner,t=Array.isArray(i),n=0,i=t?i:i[Symbol.iterator]();;){var o;if(t){if(n>=i.length)break;o=i[n++]}else{if(n=i.next(),n.done)break;o=n.value}var s=o;w(r,s.path)||(r=H(r,s.path,s.message))}}return r}function Bo(e,r,t,n){t===void 0&&(t=!1),n===void 0&&(n={});var i=Re(e);return r[t?"validateSync":"validate"](i,{abortEarly:!1,context:n})}function Re(e){var r=Array.isArray(e)?[]:{};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var n=String(t);Array.isArray(e[n])===!0?r[n]=e[n].map(function(i){return Array.isArray(i)===!0||hr(i)?Re(i):i!==""?i:void 0}):hr(e[n])?r[n]=Re(e[n]):r[n]=e[n]!==""?e[n]:void 0}return r}function Go(e,r,t){var n=e.slice();return r.forEach(function(o,s){if(typeof n[s]>"u"){var p=t.clone!==!1,E=p&&t.isMergeableObject(o);n[s]=E?Me(Array.isArray(o)?[]:{},o,t):o}else t.isMergeableObject(o)?n[s]=Me(e[s],o,t):e.indexOf(o)===-1&&n.push(o)}),n}function Ho(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function zo(e,r,t){if(typeof e=="boolean")return!!r;var n=[],i=!1,o=-1;if(Array.isArray(e))n=e,o=e.indexOf(t),i=o>=0;else if(!t||t=="true"||t=="false")return!!r;return r&&t&&!i?n.concat(t):i?n.slice(0,o).concat(n.slice(o+1)):n}var Ko=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?d.useLayoutEffect:d.useEffect;function I(e){var r=d.useRef(e);return Ko(function(){r.current=e}),d.useCallback(function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return r.current.apply(void 0,n)},[])}var Wo=d.forwardRef(function(e,r){var t=e.action,n=nt(e,["action"]),i=t??"#",o=xo(),s=o.handleReset,p=o.handleSubmit;return d.createElement("form",Object.assign({onSubmit:p,ref:r,onReset:s,action:i},n))});Wo.displayName="Form";export{qo as u};