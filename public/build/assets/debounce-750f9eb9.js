import{M as N}from"./app-28409791.js";import{_ as W,a as C,b as M,c as O}from"./isEqual-ad13762f.js";var A=W,B=function(){return A.Date.now()},F=B,R=/\s/;function D(e){for(var r=e.length;r--&&R.test(e.charAt(r)););return r}var G=D,H=G,P=/^\s+/;function U(e){return e&&e.slice(0,H(e)+1).replace(P,"")}var X=U,q=C,w=M,z="[object Symbol]";function J(e){return typeof e=="symbol"||w(e)&&q(e)==z}var K=J,Q=X,h=O,V=K,E=0/0,Y=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,ee=/^0o[0-7]+$/i,ne=parseInt;function re(e){if(typeof e=="number")return e;if(V(e))return E;if(h(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=h(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Q(e);var i=Z.test(e);return i||ee.test(e)?ne(e.slice(2),i?2:8):Y.test(e)?E:+e}var te=re,ie=O,x=F,$=te,ae="Expected a function",oe=Math.max,fe=Math.min;function se(e,r,i){var f,u,b,s,t,o,c=0,y=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(ae);r=$(r)||0,ie(i)&&(y=!!i.leading,m="maxWait"in i,b=m?oe($(i.maxWait)||0,r):b,v="trailing"in i?!!i.trailing:v);function g(n){var a=f,d=u;return f=u=void 0,c=n,s=e.apply(d,a),s}function S(n){return c=n,t=setTimeout(l,r),y?g(n):s}function k(n){var a=n-o,d=n-c,p=r-a;return m?fe(p,b-d):p}function I(n){var a=n-o,d=n-c;return o===void 0||a>=r||a<0||m&&d>=b}function l(){var n=x();if(I(n))return _(n);t=setTimeout(l,k(n))}function _(n){return t=void 0,v&&f?g(n):(f=u=void 0,s)}function j(){t!==void 0&&clearTimeout(t),c=0,f=o=u=t=void 0}function L(){return t===void 0?s:_(x())}function T(){var n=x(),a=I(n);if(f=arguments,u=this,o=n,a){if(t===void 0)return S(o);if(m)return clearTimeout(t),t=setTimeout(l,r),g(o)}return t===void 0&&(t=setTimeout(l,r)),s}return T.cancel=j,T.flush=L,T}var ue=se;const de=N(ue);export{de as d};
