import{P as c,j as o,l as D,f as m,d as e,m as w,B as P,aZ as F,b2 as M,E as j,L as $,R as y,p as S,k,au as T,q as f,aO as q,c as G,F as U,S as W,aM as H,C as N,r as h,u as V}from"./app-9c025f24.js";import{D as Z}from"./Download01-9f1e2c81.js";import{P as J}from"./Plus-692d69b5.js";import{U as K}from"./Upload01-5c7f5b2a.js";import{c as Q}from"./index-df4fcb29.js";import{u as X,C as Y}from"./customer-list-search-5c360e3f.js";import{E as _}from"./Edit02-e16f8855.js";import{g as ee}from"./get-initials-d1c6cec7.js";import{T as te,b as B,c as i,a as ne}from"./TableRow-41fcc70d.js";import{T as re}from"./TableHead-902068a6.js";import{T as ae}from"./TablePagination-1b372e5a.js";import"./apply-pagination-03aa54c3.js";import"./apply-sort-ec30f364.js";import"./deep-copy-ee95be26.js";import"./index-df9e0300.js";import"./use-update-effect-4e4d234d.js";const R=t=>{const{count:a=0,items:l=[],onDeselectAll:r,onDeselectOne:u,onPageChange:g=()=>{},onRowsPerPageChange:d,onSelectAll:s,onSelectOne:p,page:A=0,rowsPerPage:O=0,selected:C=[]}=t,x=C.length>0&&C.length<l.length,v=l.length>0&&C.length===l.length,I=C.length>0;return o(D,{sx:{position:"relative"},children:[I&&o(m,{direction:"row",spacing:2,sx:{alignItems:"center",backgroundColor:n=>n.palette.mode==="dark"?"neutral.800":"neutral.50",display:I?"flex":"none",position:"absolute",top:0,left:0,width:"100%",px:2,py:.5,zIndex:10},children:[e(w,{checked:v,indeterminate:x,onChange:n=>{n.target.checked?s==null||s():r==null||r()}}),e(P,{color:"inherit",size:"small",children:"Delete"}),e(P,{color:"inherit",size:"small",children:"Edit"})]}),e(F,{children:o(te,{sx:{minWidth:700},children:[e(re,{children:o(B,{children:[e(i,{padding:"checkbox",children:e(w,{checked:v,indeterminate:x,onChange:n=>{n.target.checked?s==null||s():r==null||r()}})}),e(i,{children:"Name"}),e(i,{children:"Location"}),e(i,{children:"Orders"}),e(i,{children:"Spent"}),e(i,{align:"right",children:"Actions"})]})}),e(ne,{children:l.map(n=>{const b=C.includes(n.id),E=`${n.city}, ${n.state}, ${n.country}`,L=M(n.totalSpent).format(`${n.currency}0,0.00`);return o(B,{hover:!0,selected:b,children:[e(i,{padding:"checkbox",children:e(w,{checked:b,onChange:z=>{z.target.checked?p==null||p(n.id):u==null||u(n.id)},value:b})}),e(i,{children:o(m,{alignItems:"center",direction:"row",spacing:1,children:[e(j,{src:n.avatar,sx:{height:42,width:42},children:ee(n.name)}),o("div",{children:[e($,{color:"inherit",component:y,href:S.dashboard.customers.details,variant:"subtitle2",children:n.name}),e(k,{color:"text.secondary",variant:"body2",children:n.email})]})]})}),e(i,{children:E}),e(i,{children:n.totalOrders}),e(i,{children:e(k,{variant:"subtitle2",children:L})}),o(i,{align:"right",children:[e(T,{component:y,href:S.dashboard.customers.edit,children:e(f,{children:e(_,{})})}),e(T,{component:y,href:S.dashboard.customers.details,children:e(f,{children:e(q,{})})})]})]},n.id)})})]})}),e(ae,{component:"div",count:a,onPageChange:g,onRowsPerPageChange:d,page:A,rowsPerPage:O,rowsPerPageOptions:[5,10,25]})]})};R.propTypes={count:c.number,items:c.array,onDeselectAll:c.func,onDeselectOne:c.func,onPageChange:c.func,onRowsPerPageChange:c.func,onSelectAll:c.func,onSelectOne:c.func,page:c.number,rowsPerPage:c.number,selected:c.array};const se=()=>{const[t,a]=h.useState({filters:{query:void 0,hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0},page:0,rowsPerPage:5,sortBy:"updatedAt",sortDir:"desc"}),l=h.useCallback(d=>{a(s=>({...s,filters:d}))},[]),r=h.useCallback(d=>{a(s=>({...s,sortBy:d.sortBy,sortDir:d.sortDir}))},[]),u=h.useCallback((d,s)=>{a(p=>({...p,page:s}))},[]),g=h.useCallback(d=>{a(s=>({...s,rowsPerPage:parseInt(d.target.value,10)}))},[]);return{handleFiltersChange:l,handleSortChange:r,handlePageChange:u,handleRowsPerPageChange:g,state:t}},oe=t=>{const a=V(),[l,r]=h.useState({customers:[],customersCount:0}),u=h.useCallback(async()=>{try{const g=await Q.getCustomers(t);a()&&r({customers:g.data,customersCount:g.count})}catch(g){console.error(g)}},[t,a]);return h.useEffect(()=>{u()},[t]),{...l}},ie=(t=[])=>h.useMemo(()=>t.map(a=>a.id),[t]),xe=()=>{const t=se(),a=oe(t.state),l=ie(a.customers),r=X(l);return G(),o(U,{children:[e(W,{title:"Dashboard: Customer List"}),e(D,{component:"main",sx:{flexGrow:1,py:8},children:e(H,{maxWidth:"xl",children:o(m,{spacing:4,children:[o(m,{direction:"row",justifyContent:"space-between",spacing:4,children:[o(m,{spacing:1,children:[e(k,{variant:"h4",children:"Customers"}),o(m,{alignItems:"center",direction:"row",spacing:1,children:[e(P,{color:"inherit",size:"small",startIcon:e(f,{children:e(K,{})}),children:"Import"}),e(P,{color:"inherit",size:"small",startIcon:e(f,{children:e(Z,{})}),children:"Export"})]})]}),e(m,{alignItems:"center",direction:"row",spacing:3,children:e(P,{startIcon:e(f,{children:e(J,{})}),variant:"contained",children:"Add"})})]}),o(N,{children:[e(Y,{onFiltersChange:t.handleFiltersChange,onSortChange:t.handleSortChange,sortBy:t.state.sortBy,sortDir:t.state.sortDir}),e(R,{count:a.customersCount,items:a.customers,onDeselectAll:r.handleDeselectAll,onDeselectOne:r.handleDeselectOne,onPageChange:t.handlePageChange,onRowsPerPageChange:t.handleRowsPerPageChange,onSelectAll:r.handleSelectAll,onSelectOne:r.handleSelectOne,page:t.state.page,rowsPerPage:t.state.rowsPerPage,selected:r.selected})]})]})})})]})};export{xe as default};