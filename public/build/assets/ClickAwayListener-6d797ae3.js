import{r as n,a4 as C,ab as T,a5 as h,d as b}from"./app-21956035.js";function v(s){return s.substring(2).toLowerCase()}function g(s,o){return o.documentElement.clientWidth<s.clientX||o.documentElement.clientHeight<s.clientY}function y(s){const{children:o,disableReactTree:R=!1,mouseEvent:u="onClick",onClickAway:L,touchEvent:a="onTouchEnd"}=s,f=n.useRef(!1),c=n.useRef(null),l=n.useRef(!1),d=n.useRef(!1);n.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const k=C(o.ref,c),i=T(e=>{const t=d.current;d.current=!1;const r=h(c.current);if(!l.current||!c.current||"clientX"in e&&g(e,r))return;if(f.current){f.current=!1;return}let E;e.composedPath?E=e.composedPath().indexOf(c.current)>-1:E=!r.documentElement.contains(e.target)||c.current.contains(e.target),!E&&(R||!t)&&L(e)}),p=e=>t=>{d.current=!0;const r=o.props[e];r&&r(t)},m={ref:k};return a!==!1&&(m[a]=p(a)),n.useEffect(()=>{if(a!==!1){const e=v(a),t=h(c.current),r=()=>{f.current=!0};return t.addEventListener(e,i),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,i),t.removeEventListener("touchmove",r)}}},[i,a]),u!==!1&&(m[u]=p(u)),n.useEffect(()=>{if(u!==!1){const e=v(u),t=h(c.current);return t.addEventListener(e,i),()=>{t.removeEventListener(e,i)}}},[i,u]),b(n.Fragment,{children:n.cloneElement(o,m)})}export{y as C};
