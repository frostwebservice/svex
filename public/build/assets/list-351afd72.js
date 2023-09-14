import{E as i,r as l,Q as M,j as c,l as B,f as m,d as e,m as w,B as P,aM as O,k as D,I as y,R as v,p as I,J as f,az as j,c as L,F as G,S as N,ax as W,C as q,u as H}from"./app-51ffe495.js";import{D as J}from"./Download01-a987b9ff.js";import{P as Q}from"./Plus-b86fbfa1.js";import{U as V}from"./Upload01-4578fe98.js";import{c as K}from"./index-cf0f2fb2.js";import{u as X,C as Y}from"./customer-list-search-7f12252c.js";import{E as Z}from"./Edit02-6c35c1b9.js";import{T as _,b as T,c as o,a as $}from"./TableRow-49926fa7.js";import{T as ee}from"./TableHead-d5eeae27.js";import{T as te}from"./TablePagination-e0c99a14.js";import"./apply-pagination-03aa54c3.js";import"./apply-sort-ec30f364.js";import"./deep-copy-ee95be26.js";import"./index-882829cf.js";import"./use-update-effect-96b608a9.js";const R=t=>{const{count:s=0,items:d=[],onDeselectAll:r,onDeselectOne:g,onPageChange:u=()=>{},onRowsPerPageChange:h,onSelectAll:a,onSelectOne:p,page:E=0,rowsPerPage:A=0,selected:C=[]}=t;l.useEffect(()=>{F()},[]);const[ae,z]=l.useState([]),F=async()=>{try{await M.post(location.protocol+"//"+location.host+"/api/user-getuser").then(n=>{console.log(n),z(n.data)})}catch(n){console.error(n)}},S=C.length>0&&C.length<d.length,k=d.length>0&&C.length===d.length,x=C.length>0;return c(B,{sx:{position:"relative"},children:[x&&c(m,{direction:"row",spacing:2,sx:{alignItems:"center",backgroundColor:n=>n.palette.mode==="dark"?"neutral.800":"neutral.50",display:x?"flex":"none",position:"absolute",top:0,left:0,width:"100%",px:2,py:.5,zIndex:10},children:[e(w,{checked:k,indeterminate:S,onChange:n=>{n.target.checked?a==null||a():r==null||r()}}),e(P,{color:"inherit",size:"small",children:"Delete"}),e(P,{color:"inherit",size:"small",children:"Edit"})]}),e(O,{children:c(_,{sx:{minWidth:700},children:[e(ee,{children:c(T,{children:[e(o,{padding:"checkbox",children:e(w,{checked:k,indeterminate:S,onChange:n=>{n.target.checked?a==null||a():r==null||r()}})}),e(o,{children:"UserName"}),e(o,{children:"FullName"}),e(o,{children:"Email"}),e(o,{children:"Status"}),e(o,{align:"right",children:"Actions"})]})}),e($,{children:d.map(n=>{const b=C.includes(n.id);return c(T,{hover:!0,selected:b,children:[e(o,{padding:"checkbox",children:e(w,{checked:b,onChange:U=>{U.target.checked?p==null||p(n.id):g==null||g(n.id)},value:b})}),e(o,{}),e(o,{children:n.fuiiname}),e(o,{children:n.email}),e(o,{children:e(D,{variant:"subtitle2",children:n.status})}),c(o,{align:"right",children:[e(y,{component:v,href:I.dashboard.customers.edit,children:e(f,{children:e(Z,{})})}),e(y,{component:v,href:I.dashboard.customers.details,children:e(f,{children:e(j,{})})})]})]},n.id)})})]})}),e(te,{component:"div",count:s,onPageChange:u,onRowsPerPageChange:h,page:E,rowsPerPage:A,rowsPerPageOptions:[5,10,25]})]})};R.propTypes={count:i.number,items:i.array,onDeselectAll:i.func,onDeselectOne:i.func,onPageChange:i.func,onRowsPerPageChange:i.func,onSelectAll:i.func,onSelectOne:i.func,page:i.number,rowsPerPage:i.number,selected:i.array};const ne=()=>{const[t,s]=l.useState({filters:{query:void 0,hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0},page:0,rowsPerPage:5,sortBy:"updatedAt",sortDir:"desc"}),d=l.useCallback(h=>{s(a=>({...a,filters:h}))},[]),r=l.useCallback(h=>{s(a=>({...a,sortBy:h.sortBy,sortDir:h.sortDir}))},[]),g=l.useCallback((h,a)=>{s(p=>({...p,page:a}))},[]),u=l.useCallback(h=>{s(a=>({...a,rowsPerPage:parseInt(h.target.value,10)}))},[]);return{handleFiltersChange:d,handleSortChange:r,handlePageChange:g,handleRowsPerPageChange:u,state:t}},re=t=>{const s=H(),[d,r]=l.useState({customers:[],customersCount:0}),g=l.useCallback(async()=>{try{const u=await K.getCustomers(t);s()&&r({customers:u.data,customersCount:u.count})}catch(u){console.error(u)}},[t,s]);return l.useEffect(()=>{g()},[t]),{...d}},se=(t=[])=>l.useMemo(()=>t.map(s=>s.id),[t]),Se=()=>{const t=ne(),s=re(t.state),d=se(s.customers),r=X(d);return L(),c(G,{children:[e(N,{title:"Dashboard: Customer List"}),e(B,{component:"main",sx:{flexGrow:1,py:8},children:e(W,{maxWidth:"xl",children:c(m,{spacing:4,children:[c(m,{direction:"row",justifyContent:"space-between",spacing:4,children:[c(m,{spacing:1,children:[e(D,{variant:"h4",children:"Customers"}),c(m,{alignItems:"center",direction:"row",spacing:1,children:[e(P,{color:"inherit",size:"small",startIcon:e(f,{children:e(V,{})}),children:"Import"}),e(P,{color:"inherit",size:"small",startIcon:e(f,{children:e(J,{})}),children:"Export"})]})]}),e(m,{alignItems:"center",direction:"row",spacing:3,children:e(P,{startIcon:e(f,{children:e(Q,{})}),variant:"contained",children:"Add"})})]}),c(q,{children:[e(Y,{onFiltersChange:t.handleFiltersChange,onSortChange:t.handleSortChange,sortBy:t.state.sortBy,sortDir:t.state.sortDir}),e(R,{count:s.customersCount,items:s.customers,onDeselectAll:r.handleDeselectAll,onDeselectOne:r.handleDeselectOne,onPageChange:t.handlePageChange,onRowsPerPageChange:t.handleRowsPerPageChange,onSelectAll:r.handleSelectAll,onSelectOne:r.handleSelectOne,page:t.state.page,rowsPerPage:t.state.rowsPerPage,selected:r.selected})]})]})})})]})};export{Se as default};
