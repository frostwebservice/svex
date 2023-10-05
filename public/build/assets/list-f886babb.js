import{E as c,j as o,l as D,f as u,d as e,m as w,B as P,aS as F,aX as j,a1 as M,L as $,R as S,p as y,k,I as T,J as f,aG as G,c as U,F as W,S as q,aE as H,C as J,r as h,u as N}from"./app-7d1d9a01.js";import{D as V}from"./Download01-6b37669c.js";import{P as X}from"./Plus-44005258.js";import{U as K}from"./Upload01-96b277d4.js";import{c as Q}from"./index-c6bdfffe.js";import{u as Y,C as Z}from"./customer-list-search-4039442d.js";import{E as _}from"./Edit02-b1ca9ec6.js";import{g as ee}from"./get-initials-d1c6cec7.js";import{T as te,b as B,c as i,a as ne}from"./TableRow-b3e34364.js";import{T as re}from"./TableHead-322ff43a.js";import{T as ae}from"./TablePagination-18927ed6.js";import"./apply-pagination-03aa54c3.js";import"./apply-sort-ec30f364.js";import"./deep-copy-ee95be26.js";import"./index-1eeef8a2.js";import"./use-update-effect-bf0ba2e5.js";const R=t=>{const{count:a=0,items:l=[],onDeselectAll:r,onDeselectOne:m,onPageChange:g=()=>{},onRowsPerPageChange:d,onSelectAll:s,onSelectOne:p,page:A=0,rowsPerPage:E=0,selected:C=[]}=t,x=C.length>0&&C.length<l.length,v=l.length>0&&C.length===l.length,I=C.length>0;return o(D,{sx:{position:"relative"},children:[I&&o(u,{direction:"row",spacing:2,sx:{alignItems:"center",backgroundColor:n=>n.palette.mode==="dark"?"neutral.800":"neutral.50",display:I?"flex":"none",position:"absolute",top:0,left:0,width:"100%",px:2,py:.5,zIndex:10},children:[e(w,{checked:v,indeterminate:x,onChange:n=>{n.target.checked?s==null||s():r==null||r()}}),e(P,{color:"inherit",size:"small",children:"Delete"}),e(P,{color:"inherit",size:"small",children:"Edit"})]}),e(F,{children:o(te,{sx:{minWidth:700},children:[e(re,{children:o(B,{children:[e(i,{padding:"checkbox",children:e(w,{checked:v,indeterminate:x,onChange:n=>{n.target.checked?s==null||s():r==null||r()}})}),e(i,{children:"Name"}),e(i,{children:"Location"}),e(i,{children:"Orders"}),e(i,{children:"Spent"}),e(i,{align:"right",children:"Actions"})]})}),e(ne,{children:l.map(n=>{const b=C.includes(n.id),L=`${n.city}, ${n.state}, ${n.country}`,O=j(n.totalSpent).format(`${n.currency}0,0.00`);return o(B,{hover:!0,selected:b,children:[e(i,{padding:"checkbox",children:e(w,{checked:b,onChange:z=>{z.target.checked?p==null||p(n.id):m==null||m(n.id)},value:b})}),e(i,{children:o(u,{alignItems:"center",direction:"row",spacing:1,children:[e(M,{src:n.avatar,sx:{height:42,width:42},children:ee(n.name)}),o("div",{children:[e($,{color:"inherit",component:S,href:y.dashboard.customers.details,variant:"subtitle2",children:n.name}),e(k,{color:"text.secondary",variant:"body2",children:n.email})]})]})}),e(i,{children:L}),e(i,{children:n.totalOrders}),e(i,{children:e(k,{variant:"subtitle2",children:O})}),o(i,{align:"right",children:[e(T,{component:S,href:y.dashboard.customers.edit,children:e(f,{children:e(_,{})})}),e(T,{component:S,href:y.dashboard.customers.details,children:e(f,{children:e(G,{})})})]})]},n.id)})})]})}),e(ae,{component:"div",count:a,onPageChange:g,onRowsPerPageChange:d,page:A,rowsPerPage:E,rowsPerPageOptions:[5,10,25]})]})};R.propTypes={count:c.number,items:c.array,onDeselectAll:c.func,onDeselectOne:c.func,onPageChange:c.func,onRowsPerPageChange:c.func,onSelectAll:c.func,onSelectOne:c.func,page:c.number,rowsPerPage:c.number,selected:c.array};const se=()=>{const[t,a]=h.useState({filters:{query:void 0,hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0},page:0,rowsPerPage:5,sortBy:"updatedAt",sortDir:"desc"}),l=h.useCallback(d=>{a(s=>({...s,filters:d}))},[]),r=h.useCallback(d=>{a(s=>({...s,sortBy:d.sortBy,sortDir:d.sortDir}))},[]),m=h.useCallback((d,s)=>{a(p=>({...p,page:s}))},[]),g=h.useCallback(d=>{a(s=>({...s,rowsPerPage:parseInt(d.target.value,10)}))},[]);return{handleFiltersChange:l,handleSortChange:r,handlePageChange:m,handleRowsPerPageChange:g,state:t}},oe=t=>{const a=N(),[l,r]=h.useState({customers:[],customersCount:0}),m=h.useCallback(async()=>{try{const g=await Q.getCustomers(t);a()&&r({customers:g.data,customersCount:g.count})}catch(g){console.error(g)}},[t,a]);return h.useEffect(()=>{m()},[t]),{...l}},ie=(t=[])=>h.useMemo(()=>t.map(a=>a.id),[t]),xe=()=>{const t=se(),a=oe(t.state),l=ie(a.customers),r=Y(l);return U(),o(W,{children:[e(q,{title:"Dashboard: Customer List"}),e(D,{component:"main",sx:{flexGrow:1,py:8},children:e(H,{maxWidth:"xl",children:o(u,{spacing:4,children:[o(u,{direction:"row",justifyContent:"space-between",spacing:4,children:[o(u,{spacing:1,children:[e(k,{variant:"h4",children:"Customers"}),o(u,{alignItems:"center",direction:"row",spacing:1,children:[e(P,{color:"inherit",size:"small",startIcon:e(f,{children:e(K,{})}),children:"Import"}),e(P,{color:"inherit",size:"small",startIcon:e(f,{children:e(V,{})}),children:"Export"})]})]}),e(u,{alignItems:"center",direction:"row",spacing:3,children:e(P,{startIcon:e(f,{children:e(X,{})}),variant:"contained",children:"Add"})})]}),o(J,{children:[e(Z,{onFiltersChange:t.handleFiltersChange,onSortChange:t.handleSortChange,sortBy:t.state.sortBy,sortDir:t.state.sortDir}),e(R,{count:a.customersCount,items:a.customers,onDeselectAll:r.handleDeselectAll,onDeselectOne:r.handleDeselectOne,onPageChange:t.handlePageChange,onRowsPerPageChange:t.handleRowsPerPageChange,onSelectAll:r.handleSelectAll,onSelectOne:r.handleSelectOne,page:t.state.page,rowsPerPage:t.state.rowsPerPage,selected:r.selected})]})]})})})]})};export{xe as default};
