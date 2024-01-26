import{r as n,c as x,j as a,F as y,d as e,S as I,l as w,aM as L,f as i,L as k,R as g,p as v,q as d,A as E,k as m,E as S,aI as D,B as f,aP as M,bj as T,bk as j,D as A,aN as u,u as h}from"./app-f6d0c162.js";import{E as B}from"./Edit02-2cc10169.js";import{c as p}from"./index-3f968eb1.js";import{C as G,a as P,b as V,c as F,d as R,e as q}from"./customer-logs-80e23cd6.js";import{g as z}from"./get-initials-d1c6cec7.js";import"./apply-pagination-03aa54c3.js";import"./apply-sort-ec30f364.js";import"./deep-copy-ee95be26.js";import"./index-1f81a8ca.js";import"./property-list-item-7bbaeeca.js";import"./CardHeader-4f66bf42.js";import"./CardActions-a4e578aa.js";import"./TableRow-40cc263a.js";import"./TableHead-6ac745fc.js";import"./more-menu-e7265eef.js";import"./Archive-08096d91.js";import"./DotsHorizontal-ce3b36d8.js";import"./Download01-f3e1d7e3.js";import"./FileCheck03-8bc660b6.js";import"./severity-pill-9b03a4b3.js";import"./TablePagination-a072233a.js";import"./LastPage-6ea73a7f.js";const N=[{label:"Details",value:"details"},{label:"Invoices",value:"invoices"},{label:"Logs",value:"logs"}],W=()=>{const t=h(),[o,s]=n.useState(null),c=n.useCallback(async()=>{try{const r=await p.getCustomer();t()&&s(r)}catch(r){console.error(r)}},[t]);return n.useEffect(()=>{c()},[]),o},_=()=>{const t=h(),[o,s]=n.useState([]),c=n.useCallback(async()=>{try{const r=await p.getInvoices();t()&&s(r)}catch(r){console.error(r)}},[t]);return n.useEffect(()=>{c()},[]),o},H=()=>{const t=h(),[o,s]=n.useState([]),c=n.useCallback(async()=>{try{const r=await p.getLogs();t()&&s(r)}catch(r){console.error(r)}},[t]);return n.useEffect(()=>{c()},[]),o},he=()=>{const[t,o]=n.useState("details"),s=W(),c=_(),r=H();x();const C=n.useCallback((l,b)=>{o(b)},[]);return s?a(y,{children:[e(I,{title:"Dashboard: Customer Details"}),e(w,{component:"main",sx:{flexGrow:1,py:8},children:e(L,{maxWidth:"xl",children:a(i,{spacing:4,children:[a(i,{spacing:4,children:[e("div",{children:a(k,{color:"text.primary",component:g,href:v.dashboard.customers.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[e(d,{sx:{mr:1},children:e(E,{})}),e(m,{variant:"subtitle2",children:"Customers"})]})}),a(i,{alignItems:"flex-start",direction:{xs:"column",md:"row"},justifyContent:"space-between",spacing:4,children:[a(i,{alignItems:"center",direction:"row",spacing:2,children:[e(S,{src:s.avatar,sx:{height:64,width:64},children:z(s.name)}),a(i,{spacing:1,children:[e(m,{variant:"h4",children:s.email}),a(i,{alignItems:"center",direction:"row",spacing:1,children:[e(m,{variant:"subtitle2",children:"user_id:"}),e(D,{label:s.id,size:"small"})]})]})]}),a(i,{alignItems:"center",direction:"row",spacing:2,children:[e(f,{color:"inherit",component:g,endIcon:e(d,{children:e(B,{})}),href:v.dashboard.customers.edit,children:"Edit"}),e(f,{endIcon:e(d,{children:e(M,{})}),variant:"contained",children:"Actions"})]})]}),a("div",{children:[e(T,{indicatorColor:"primary",onChange:C,scrollButtons:"auto",sx:{mt:3},textColor:"primary",value:t,variant:"scrollable",children:N.map(l=>e(j,{label:l.label,value:l.value},l.value))}),e(A,{})]})]}),t==="details"&&e("div",{children:a(u,{container:!0,spacing:4,children:[e(u,{xs:12,lg:4,children:e(G,{address1:s.address1,address2:s.address2,country:s.country,email:s.email,isVerified:!!s.isVerified,phone:s.phone,state:s.state})}),e(u,{xs:12,lg:8,children:a(i,{spacing:4,children:[e(P,{}),e(V,{}),e(F,{})]})})]})}),t==="invoices"&&e(R,{invoices:c}),t==="logs"&&e(q,{logs:r})]})})})]}):null};export{he as default};