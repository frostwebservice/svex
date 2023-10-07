import{P as i,r as l,Z as L,j as c,l as B,f as m,d as e,m as w,B as P,aY as O,k as D,W as x,R as v,p as I,q as f,aN as j,c as M,F as N,S as W,aL as q,C as G,u as H}from"./app-e6e0d569.js";import{D as V}from"./Download01-414539d5.js";import{P as Y}from"./Plus-9a104867.js";import{U as Z}from"./Upload01-87be7008.js";import{c as J}from"./index-da0b7fbc.js";import{u as K,C as Q}from"./customer-list-search-301c8054.js";import{E as X}from"./Edit02-8c1c6d1d.js";import{T as _,b as T,c as o,a as $}from"./TableRow-452e9e29.js";import{T as ee}from"./TableHead-6d43c548.js";import{T as te}from"./TablePagination-be231b6d.js";import"./apply-pagination-03aa54c3.js";import"./apply-sort-ec30f364.js";import"./deep-copy-ee95be26.js";import"./index-18fdd3f8.js";import"./use-update-effect-e6c0dd05.js";const R=t=>{const{count:s=0,items:d=[],onDeselectAll:r,onDeselectOne:g,onPageChange:u=()=>{},onRowsPerPageChange:h,onSelectAll:a,onSelectOne:p,page:A=0,rowsPerPage:E=0,selected:C=[]}=t;l.useEffect(()=>{U()},[]);const[ae,F]=l.useState([]),U=async()=>{try{await L.post(location.protocol+"//"+location.host+"/api/user-getuser").then(n=>{console.log(n),F(n.data)})}catch(n){console.error(n)}},S=C.length>0&&C.length<d.length,k=d.length>0&&C.length===d.length,y=C.length>0;return c(B,{sx:{position:"relative"},children:[y&&c(m,{direction:"row",spacing:2,sx:{alignItems:"center",backgroundColor:n=>n.palette.mode==="dark"?"neutral.800":"neutral.50",display:y?"flex":"none",position:"absolute",top:0,left:0,width:"100%",px:2,py:.5,zIndex:10},children:[e(w,{checked:k,indeterminate:S,onChange:n=>{n.target.checked?a==null||a():r==null||r()}}),e(P,{color:"inherit",size:"small",children:"Delete"}),e(P,{color:"inherit",size:"small",children:"Edit"})]}),e(O,{children:c(_,{sx:{minWidth:700},children:[e(ee,{children:c(T,{children:[e(o,{padding:"checkbox",children:e(w,{checked:k,indeterminate:S,onChange:n=>{n.target.checked?a==null||a():r==null||r()}})}),e(o,{children:"UserName"}),e(o,{children:"FullName"}),e(o,{children:"Email"}),e(o,{children:"Status"}),e(o,{align:"right",children:"Actions"})]})}),e($,{children:d.map(n=>{const b=C.includes(n.id);return c(T,{hover:!0,selected:b,children:[e(o,{padding:"checkbox",children:e(w,{checked:b,onChange:z=>{z.target.checked?p==null||p(n.id):g==null||g(n.id)},value:b})}),e(o,{}),e(o,{children:n.fuiiname}),e(o,{children:n.email}),e(o,{children:e(D,{variant:"subtitle2",children:n.status})}),c(o,{align:"right",children:[e(x,{component:v,href:I.dashboard.customers.edit,children:e(f,{children:e(X,{})})}),e(x,{component:v,href:I.dashboard.customers.details,children:e(f,{children:e(j,{})})})]})]},n.id)})})]})}),e(te,{component:"div",count:s,onPageChange:u,onRowsPerPageChange:h,page:A,rowsPerPage:E,rowsPerPageOptions:[5,10,25]})]})};R.propTypes={count:i.number,items:i.array,onDeselectAll:i.func,onDeselectOne:i.func,onPageChange:i.func,onRowsPerPageChange:i.func,onSelectAll:i.func,onSelectOne:i.func,page:i.number,rowsPerPage:i.number,selected:i.array};const ne=()=>{const[t,s]=l.useState({filters:{query:void 0,hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0},page:0,rowsPerPage:5,sortBy:"updatedAt",sortDir:"desc"}),d=l.useCallback(h=>{s(a=>({...a,filters:h}))},[]),r=l.useCallback(h=>{s(a=>({...a,sortBy:h.sortBy,sortDir:h.sortDir}))},[]),g=l.useCallback((h,a)=>{s(p=>({...p,page:a}))},[]),u=l.useCallback(h=>{s(a=>({...a,rowsPerPage:parseInt(h.target.value,10)}))},[]);return{handleFiltersChange:d,handleSortChange:r,handlePageChange:g,handleRowsPerPageChange:u,state:t}},re=t=>{const s=H(),[d,r]=l.useState({customers:[],customersCount:0}),g=l.useCallback(async()=>{try{const u=await J.getCustomers(t);s()&&r({customers:u.data,customersCount:u.count})}catch(u){console.error(u)}},[t,s]);return l.useEffect(()=>{g()},[t]),{...d}},se=(t=[])=>l.useMemo(()=>t.map(s=>s.id),[t]),Se=()=>{const t=ne(),s=re(t.state),d=se(s.customers),r=K(d);return M(),c(N,{children:[e(W,{title:"Dashboard: Customer List"}),e(B,{component:"main",sx:{flexGrow:1,py:8},children:e(q,{maxWidth:"xl",children:c(m,{spacing:4,children:[c(m,{direction:"row",justifyContent:"space-between",spacing:4,children:[c(m,{spacing:1,children:[e(D,{variant:"h4",children:"Customers"}),c(m,{alignItems:"center",direction:"row",spacing:1,children:[e(P,{color:"inherit",size:"small",startIcon:e(f,{children:e(Z,{})}),children:"Import"}),e(P,{color:"inherit",size:"small",startIcon:e(f,{children:e(V,{})}),children:"Export"})]})]}),e(m,{alignItems:"center",direction:"row",spacing:3,children:e(P,{startIcon:e(f,{children:e(Y,{})}),variant:"contained",children:"Add"})})]}),c(G,{children:[e(Q,{onFiltersChange:t.handleFiltersChange,onSortChange:t.handleSortChange,sortBy:t.state.sortBy,sortDir:t.state.sortDir}),e(R,{count:s.customersCount,items:s.customers,onDeselectAll:r.handleDeselectAll,onDeselectOne:r.handleDeselectOne,onPageChange:t.handlePageChange,onRowsPerPageChange:t.handleRowsPerPageChange,onSelectAll:r.handleSelectAll,onSelectOne:r.handleSelectOne,page:t.state.page,rowsPerPage:t.state.rowsPerPage,selected:r.selected})]})]})})})]})};export{Se as default};
