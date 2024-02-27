import{r as c,j as i,C as f,d as e,f as m,aZ as O,a_ as b,b3 as S,G as y,a$ as C,k as n,F as h,aS as P,c as D,S as j,l as T,aL as _,aM as t}from"./app-4f3bf436.js";import{O as A,a as I,b as k,c as L}from"./overview-tips-787ba11f.js";import{O as E,a as G}from"./overview-pending-issues-f52250b2.js";import{u as F,P as M}from"./pagination-9ee5fb50.js";import{C as B}from"./CardHeader-92a56fa2.js";import{O as H,a as J}from"./overview-jobs-7696a2c4.js";import"./severity-pill-de65e67d.js";import"./chart-b0c60746.js";import"./CardMedia-af015ba8.js";import"./CardActions-b41734f5.js";import"./index-ca618f29.js";import"./index-2e5eca51.js";import"./index-ec26c258.js";import"./LastPage-7d6d64d5.js";import"./InfoCircle-ea8e8217.js";import"./Link01-b8ef3931.js";import"./Briefcase01-b03b9e6f.js";const q=l=>{const[s,o]=c.useState([]),[v,u]=c.useState(!0);v&&axios.post("/api/get_announcements",{}).then(a=>{o(a.data),u(!1)});const[x,g]=c.useState(1),d=3,w=Math.ceil(s.length/d),p=F(s,d);return i(f,{children:[e(B,{title:"Announcements",action:e(m,{spacing:2,children:e(M,{count:w,page:x,variant:"outlined",shape:"rounded",onChange:(a,r)=>{g(r),p.jump(r)}})})}),e(O,{disablePadding:!0,children:p.currentData().map(a=>{const r=a.updated_at;return i(b,{alignItems:"flex-start",sx:{"&:hover":{backgroundColor:"action.hover",cursor:"pointer"}},children:[e(S,{children:e(y,{src:"/favicon-32x32.png"})}),e(C,{disableTypography:!0,primary:e(n,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"subtitle2",children:a.a_title}),secondary:i(h,{children:[e(n,{color:"text.secondary",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"wrap"},variant:"body2",children:a.a_content}),e(n,{color:"text.secondary",sx:{whiteSpace:"wrap",mt:2},variant:"subtitle2",children:[new Date(r).getMonth()+1,new Date(r).getDate(),new Date(r).getFullYear()].join("/")})]}),sx:{pr:2}})]},a.id)})})]})},ne=()=>{const l=P();D();let s={time:new Date().getTime(),value:"email",expire:3e6},o=JSON.stringify(s);return localStorage.setItem("time_token",o),i(h,{children:[e(j,{title:"Dashboard: Overview"}),e(T,{component:"main",sx:{flexGrow:1,py:8},children:e(_,{maxWidth:l.stretch?!1:"xl",children:i(t,{container:!0,disableEqualOverflow:!0,spacing:{xs:3,lg:4},children:[e(t,{xs:12,children:e(m,{direction:"row",justifyContent:"space-between",spacing:4,children:e("div",{children:e(n,{variant:"h4",children:"Overview"})})})}),e(t,{xs:12,md:4,children:e(E,{amount:31})}),e(t,{xs:12,md:4,children:e(G,{amount:12})}),e(t,{xs:12,md:4,children:e(A,{amount:5})}),e(t,{xs:12,md:7,children:e(I,{})}),e(t,{xs:12,md:5,children:e(k,{sx:{height:"100%"}})}),e(t,{xs:12,md:8,children:e(L,{})}),e(t,{xs:12,md:4,children:e(q,{})}),e(t,{xs:12,md:6,children:e(H,{})}),e(t,{xs:12,md:6,children:e(J,{})})]})})})]})};export{ne as default};