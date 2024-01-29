import{r as n,j as s,C as f,d as e,f as p,a_ as O,a$ as b,b4 as y,E as C,b0 as S,k as i,F as h,aT as P,c as D,S as T,l as A,aM as _,aN as t}from"./app-7e56a116.js";import{O as j,a as I,b as k,c as E}from"./overview-tips-c0076940.js";import{O as L,a as F}from"./overview-pending-issues-1cd7552c.js";import{u as G,P as M,O as B,a as H}from"./overview-jobs-6ab307f7.js";import{C as q}from"./CardHeader-63c16028.js";import"./severity-pill-9a72b914.js";import"./chart-d6db6b28.js";import"./CardMedia-62583736.js";import"./CardActions-95d22691.js";import"./index-1fbe3bf8.js";import"./index-6ec0ef8a.js";import"./index-094bf714.js";import"./LastPage-06592a06.js";import"./InfoCircle-383e3798.js";import"./Link01-4dc23c7a.js";import"./Briefcase01-d852859d.js";const J=o=>{const[c,m]=n.useState([]),[v,u]=n.useState(!0);v&&axios.post("/api/get_announcements",{}).then(a=>{m(a.data),u(!1)});const[x,g]=n.useState(1),d=3,w=Math.ceil(c.length/d),l=G(c,d);return s(f,{children:[e(q,{title:"Announcements",action:e(p,{spacing:2,children:e(M,{count:w,page:x,variant:"outlined",shape:"rounded",onChange:(a,r)=>{g(r),l.jump(r)}})})}),e(O,{disablePadding:!0,children:l.currentData().map(a=>{const r=a.updated_at;return s(b,{alignItems:"flex-start",sx:{"&:hover":{backgroundColor:"action.hover",cursor:"pointer"}},children:[e(y,{children:e(C,{src:"/favicon-32x32.png"})}),e(S,{disableTypography:!0,primary:e(i,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"subtitle2",children:a.a_title}),secondary:s(h,{children:[e(i,{color:"text.secondary",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"wrap"},variant:"body2",children:a.a_content}),e(i,{color:"text.secondary",sx:{whiteSpace:"wrap",mt:2},variant:"subtitle2",children:[new Date(r).getMonth()+1,new Date(r).getDate(),new Date(r).getFullYear()].join("/")})]}),sx:{pr:2}})]},a.id)})})]})},ie=()=>{const o=P();return D(),s(h,{children:[e(T,{title:"Dashboard: Overview"}),e(A,{component:"main",sx:{flexGrow:1,py:8},children:e(_,{maxWidth:o.stretch?!1:"xl",children:s(t,{container:!0,disableEqualOverflow:!0,spacing:{xs:3,lg:4},children:[e(t,{xs:12,children:e(p,{direction:"row",justifyContent:"space-between",spacing:4,children:e("div",{children:e(i,{variant:"h4",children:"Overview"})})})}),e(t,{xs:12,md:4,children:e(L,{amount:31})}),e(t,{xs:12,md:4,children:e(F,{amount:12})}),e(t,{xs:12,md:4,children:e(j,{amount:5})}),e(t,{xs:12,md:7,children:e(I,{})}),e(t,{xs:12,md:5,children:e(k,{sx:{height:"100%"}})}),e(t,{xs:12,md:8,children:e(E,{})}),e(t,{xs:12,md:4,children:e(J,{})}),e(t,{xs:12,md:6,children:e(B,{})}),e(t,{xs:12,md:6,children:e(H,{})})]})})})]})};export{ie as default};
