import{d as e,l,j as r,f as s,B as n,q as d,aN as w,r as i,aO as k,aE as B,aP as I,M as v,aQ as S,aR as D,c as P,F as y,S as R,aL as A}from"./app-e6e0d569.js";import{P as M}from"./previewer-36b72369.js";import{T as j}from"./Trash02-5b214668.js";import{B as z}from"./ButtonGroup-b09e85e7.js";import{C as E}from"./ClickAwayListener-f7a33e61.js";import"./CardHeader-1855acfb.js";const G=()=>e(l,{sx:{p:3},children:r(s,{spacing:3,children:[r(s,{alignItems:"center",direction:"row",spacing:3,children:[e(n,{variant:"contained",children:"Default"}),e(n,{disabled:!0,variant:"contained",children:"Disabled"})]}),r(s,{alignItems:"center",direction:"row",spacing:3,children:[e(n,{variant:"outlined",children:"Default"}),e(n,{color:"primary",disabled:!0,variant:"outlined",children:"Disabled"})]}),r(s,{alignItems:"center",direction:"row",spacing:3,children:[e(n,{children:"Default"}),e(n,{disabled:!0,children:"Disabled"})]})]})}),L=()=>e(l,{sx:{p:3},children:r(s,{alignItems:"center",direction:"row",spacing:3,children:[e(n,{color:"error",size:"small",startIcon:e(d,{children:e(j,{})}),variant:"contained",children:"Delete Account"}),e(n,{endIcon:e(d,{children:e(w,{})}),size:"small",variant:"contained",children:"Next Page"})]})}),u=["Create a merge commit","Squash and merge","Rebase and merge"],O=()=>{const t=i.useRef(null),[p,c]=i.useState(!1),[h,g]=i.useState(1),f=i.useCallback(a=>{g(a),c(!1)},[]),b=i.useCallback(()=>{c(a=>!a)},[]),C=i.useCallback(a=>{t.current&&t.current.contains(a.target)||c(!1)},[]);return r(l,{sx:{p:3},children:[r(z,{ref:t,variant:"contained",children:[e(n,{children:u[h]}),e(n,{onClick:b,size:"small",sx:{backgroundColor:"primary.dark"},children:e(d,{children:e(k,{})})})]}),e(B,{anchorEl:t.current,open:p,transition:!0,children:({TransitionProps:a,placement:x})=>e(I,{...a,style:{transformOrigin:x==="bottom"?"center top":"center bottom"},children:e(v,{children:e(E,{onClickAway:C,children:e(S,{children:u.map((m,o)=>e(D,{disabled:o===2,onClick:()=>f(o),selected:o===h,children:m},m))})})})})})]})},T=[{element:e(G,{}),title:"Simple buttons"},{element:e(L,{}),title:"Buttons with text and icon"},{element:e(O,{}),title:"Button groups"}],H=()=>(P(),r(y,{children:[e(R,{title:"Components: Buttons"}),e(l,{component:"main",sx:{flexGrow:1,py:8},children:e(A,{maxWidth:"lg",children:e(s,{spacing:8,children:T.map(t=>e(M,{title:t.title,children:t.element},t.title))})})})]}));export{H as default};
