import{r as i,c as x,j as a,F as y,d as e,S as I,l as w,aL as L,f as n,L as k,R as g,p as v,q as d,A as S,k as m,G as D,aG as E,B as f,aO as G,bk as M,bl as T,D as A,aM as u,u as p}from"./app-0b2379dc.js";import{E as B}from"./Edit02-e74ca9d2.js";import{c as h}from"./index-0ad7d370.js";import{C as j,a as P,b as V,c as F,d as R,e as q}from"./customer-logs-80bf4c31.js";import{g as z}from"./get-initials-d1c6cec7.js";import"./apply-pagination-03aa54c3.js";import"./apply-sort-ec30f364.js";import"./deep-copy-ee95be26.js";import"./data-07e84e1e.js";import"./index-61f5b8be.js";import"./index-6ee77b25.js";import"./property-list-item-553d2250.js";import"./CardHeader-559beb53.js";import"./CardActions-b5f5ec49.js";import"./TableRow-64f18a5f.js";import"./TableHead-a250fbf3.js";import"./more-menu-fbb7d036.js";import"./Archive-5f8ebb52.js";import"./DotsHorizontal-4b7159e5.js";import"./Download01-0c9002e8.js";import"./FileCheck03-0100e761.js";import"./severity-pill-743f9b24.js";import"./TablePagination-d8efb43a.js";import"./LastPage-de27fa04.js";const O=[{label:"Details",value:"details"},{label:"Invoices",value:"invoices"},{label:"Logs",value:"logs"}],W=()=>{const t=p(),[o,s]=i.useState(null),c=i.useCallback(async()=>{try{const r=await h.getCustomer();t()&&s(r)}catch(r){console.error(r)}},[t]);return i.useEffect(()=>{c()},[]),o},_=()=>{const t=p(),[o,s]=i.useState([]),c=i.useCallback(async()=>{try{const r=await h.getInvoices();t()&&s(r)}catch(r){console.error(r)}},[t]);return i.useEffect(()=>{c()},[]),o},H=()=>{const t=p(),[o,s]=i.useState([]),c=i.useCallback(async()=>{try{const r=await h.getLogs();t()&&s(r)}catch(r){console.error(r)}},[t]);return i.useEffect(()=>{c()},[]),o},ge=()=>{const[t,o]=i.useState("details"),s=W(),c=_(),r=H();x();const C=i.useCallback((l,b)=>{o(b)},[]);return s?a(y,{children:[e(I,{title:"Dashboard: Customer Details"}),e(w,{component:"main",sx:{flexGrow:1,py:8},children:e(L,{maxWidth:"xl",children:a(n,{spacing:4,children:[a(n,{spacing:4,children:[e("div",{children:a(k,{color:"text.primary",component:g,href:v.dashboard.customers.index,sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[e(d,{sx:{mr:1},children:e(S,{})}),e(m,{variant:"subtitle2",children:"Customers"})]})}),a(n,{alignItems:"flex-start",direction:{xs:"column",md:"row"},justifyContent:"space-between",spacing:4,children:[a(n,{alignItems:"center",direction:"row",spacing:2,children:[e(D,{src:s.avatar,sx:{height:64,width:64},children:z(s.name)}),a(n,{spacing:1,children:[e(m,{variant:"h4",children:s.email}),a(n,{alignItems:"center",direction:"row",spacing:1,children:[e(m,{variant:"subtitle2",children:"user_id:"}),e(E,{label:s.id,size:"small"})]})]})]}),a(n,{alignItems:"center",direction:"row",spacing:2,children:[e(f,{color:"inherit",component:g,endIcon:e(d,{children:e(B,{})}),href:v.dashboard.customers.edit,children:"Edit"}),e(f,{endIcon:e(d,{children:e(G,{})}),variant:"contained",children:"Actions"})]})]}),a("div",{children:[e(M,{indicatorColor:"primary",onChange:C,scrollButtons:"auto",sx:{mt:3},textColor:"primary",value:t,variant:"scrollable",children:O.map(l=>e(T,{label:l.label,value:l.value},l.value))}),e(A,{})]})]}),t==="details"&&e("div",{children:a(u,{container:!0,spacing:4,children:[e(u,{xs:12,lg:4,children:e(j,{address1:s.address1,address2:s.address2,country:s.country,email:s.email,isVerified:!!s.isVerified,phone:s.phone,state:s.state})}),e(u,{xs:12,lg:8,children:a(n,{spacing:4,children:[e(P,{}),e(V,{}),e(F,{})]})})]})}),t==="invoices"&&e(R,{invoices:c}),t==="logs"&&e(q,{logs:r})]})})})]}):null};export{ge as default};
