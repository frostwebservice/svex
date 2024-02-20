import{P as c,bE as W,b9 as A,b1 as D,j as i,f as v,d as e,k as b,aY as N,T as f,B as R,r as d,aw as I,q as T,c2 as U,l as w,cB as j,ap as H,bm as z,bn as _,bo as $,R as V,aN as Q,c8 as J,aS as X,c as Y,F as K,S as Z,aL as ee,D as te,u as re}from"./app-29987d4d.js";import{o as ne}from"./index-632a5650.js";import{P as ae,a as S}from"./property-list-item-9a91151e.js";import{S as se}from"./severity-pill-84f4447a.js";import{T as M,b as O,c as y,a as E}from"./TableRow-2180c497.js";import{T as oe}from"./TableHead-43cddc2b.js";import{u as le}from"./use-update-effect-fbb20c37.js";import{T as ie}from"./TablePagination-96e30a59.js";import"./deep-copy-ee95be26.js";import"./apply-pagination-03aa54c3.js";import"./apply-sort-ec30f364.js";import"./LastPage-4f0d7573.js";const ce={canceled:"warning",complete:"success",pending:"info",rejected:"error"},B=t=>{const{onApprove:a,onEdit:l,onReject:r,order:n}=t,o=W(p=>p.breakpoints.up("lg"))?"horizontal":"vertical",u=n.items||[],h=A(Date.parse(n.createdAt),"dd/MM/yyyy HH:mm"),m=ce[n.status],C=D(n.totalAmount).format(`${n.currency}0,0.00`);return i(v,{spacing:6,children:[i(v,{spacing:3,children:[e(v,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,children:e(b,{variant:"h6",children:"Details"})}),i(ae,{children:[e(S,{align:o,disableGutters:!0,divider:!0,label:"ID",value:n.id}),e(S,{align:o,disableGutters:!0,divider:!0,label:"Number",value:n.number}),i(S,{align:o,disableGutters:!0,divider:!0,label:"Customer",children:[e(b,{color:"text.secondary",variant:"body2",children:n.customer.name}),e(b,{color:"text.secondary",variant:"body2",children:n.customer.address1})]}),e(S,{align:o,disableGutters:!0,divider:!0,label:"Date",value:h}),e(S,{align:o,disableGutters:!0,divider:!0,label:"Promotion Code",value:n.promotionCode}),e(S,{align:o,disableGutters:!0,divider:!0,label:"Total Amount",value:C}),e(S,{align:o,disableGutters:!0,divider:!0,label:"Status",children:e(se,{color:m,children:n.status})})]})]}),i(v,{spacing:3,children:[e(b,{variant:"h6",children:"Line items"}),e(N,{children:i(M,{sx:{minWidth:400},children:[e(oe,{children:i(O,{children:[e(y,{children:"Description"}),e(y,{children:"Billing Cycle"}),e(y,{children:"Amount"})]})}),e(E,{children:u.map(p=>{const g=D(p.unitAmount).format(`${p.currency}0,0.00`);return i(O,{children:[i(y,{children:[p.unitAmount=="49"?"Essential Membership":"Premium Membership"," ","x ",p.quantity]}),e(y,{children:p.billingCycle}),e(y,{children:g})]},p.id)})})]})})]})]})};B.propTypes={onApprove:c.func,onEdit:c.func,onReject:c.func,order:c.object};const de=[{label:"Canceled",value:"canceled"},{label:"Complete",value:"complete"},{label:"Pending",value:"pending"},{label:"Rejected",value:"rejected"}],G=t=>{const{onCancel:a,onSave:l,order:r}=t,n=A(r.createdAt,"dd/MM/yyyy HH:mm");return e(v,{spacing:6,children:i(v,{spacing:3,children:[e(b,{variant:"h6",children:"Details"}),i(v,{spacing:3,children:[e(f,{disabled:!0,fullWidth:!0,label:"ID",name:"id",value:r.id}),e(f,{disabled:!0,fullWidth:!0,label:"Number",name:"number",value:r.number}),e(f,{disabled:!0,fullWidth:!0,label:"Customer name",name:"customer_name",value:r.customer.name}),e(f,{disabled:!0,fullWidth:!0,label:"Date",name:"date",value:n}),e(f,{fullWidth:!0,label:"Address",name:"address",value:r.customer.address1}),e(f,{fullWidth:!0,label:"Country",name:"country",value:r.customer.country}),e(f,{fullWidth:!0,label:"State/Region",name:"state_region",value:r.customer.city}),e(f,{fullWidth:!0,label:"Total Amount",name:"amount",value:r.totalAmount}),e(f,{fullWidth:!0,label:"Status",name:"status",select:!0,SelectProps:{native:!0},value:r.status,children:de.map(s=>e("option",{value:s.value,children:s.label},s.value))})]}),i(v,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:2,children:[e(R,{color:"primary",onClick:l,size:"small",variant:"contained",children:"Save changes"}),e(R,{color:"inherit",onClick:a,size:"small",children:"Cancel"})]})]})})};G.propTypes={onCancel:c.func,onSave:c.func,order:c.object};const L=t=>{const{container:a,onClose:l,open:r,order:n}=t,[s,o]=d.useState(!1),u=W(p=>p.breakpoints.up("lg")),h=d.useCallback(()=>{o(!0)},[]),m=d.useCallback(()=>{o(!1)},[]);let C=null;return n&&(C=i("div",{children:[i(v,{alignItems:"center",direction:"row",justifyContent:"space-between",sx:{px:3,py:2},children:[e(b,{color:"inherit",variant:"h6",children:n.number}),e(I,{color:"inherit",onClick:l,children:e(T,{children:e(U,{})})})]}),e(w,{sx:{px:3,py:4},children:s?e(G,{onCancel:m,onSave:m,order:n}):e(B,{onApprove:l,onEdit:h,onReject:l,order:n})})]})),u?e(j,{anchor:"right",open:r,PaperProps:{sx:{maxWidth:"100%",width:350}},SlideProps:{container:a},variant:"persistent",children:C}):e(j,{anchor:"right",ModalProps:{container:a},onClose:l,open:r,PaperProps:{sx:{maxWidth:"100%",width:350}},SlideProps:{container:a},variant:"temporary",children:C})};L.propTypes={container:c.any,onClose:c.func,open:c.bool,order:c.object};H("div",{shouldForwardProp:t=>t!=="open"})(({theme:t,open:a})=>({flexGrow:1,overflow:"auto",zIndex:1,[t.breakpoints.up("lg")]:{marginRight:-500},transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...a&&{[t.breakpoints.up("lg")]:{marginRight:0},transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}}));const ue=[{label:"Newest",value:"desc"},{label:"Oldest",value:"asc"}],F=t=>{const{onFiltersChange:a,onSortChange:l,sortDir:r="asc"}=t,n=d.useRef(null),[s,o]=d.useState("all"),[u,h]=d.useState({query:void 0,status:void 0}),m=d.useCallback(()=>{a==null||a(u)},[u,a]);le(()=>{m()},[u,m]),d.useCallback((g,P)=>{o(P);const x=P==="all"?void 0:P;h(k=>({...k,status:x}))},[]);const C=d.useCallback(g=>{var x;g.preventDefault();const P=((x=n.current)==null?void 0:x.value)||"";h(k=>({...k,query:P}))},[]),p=d.useCallback(g=>{const P=g.target.value;l==null||l(P)},[l]);return e("div",{children:i(v,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:3,sx:{p:3},children:[e(w,{component:"form",onSubmit:C,sx:{flexGrow:1},children:e(z,{defaultValue:"",fullWidth:!0,inputProps:{ref:n},name:"orderNumber",placeholder:"Search by order number",startAdornment:e(_,{position:"start",children:e(T,{children:e($,{})})})})}),e(f,{label:"Sort By",name:"sort",onChange:p,select:!0,SelectProps:{native:!0},value:r,children:ue.map(g=>e("option",{value:g.value,children:g.label},g.value))})]})})};F.propTypes={onFiltersChange:c.func,onSortChange:c.func,sortBy:c.string,sortDir:c.oneOf(["asc","desc"])};const he={complete:"success",pending:"info",canceled:"warning",rejected:"error"},q=t=>{const{count:a=0,items:l=[],onPageChange:r=()=>{},onRowsPerPageChange:n,onSelect:s,page:o=0,rowsPerPage:u=0}=t;return i("div",{children:[e(M,{children:e(E,{children:l.map(h=>{const m=A(Date.parse(h.createdAt),"LLL").toUpperCase(),C=A(Date.parse(h.createdAt),"d"),p=D(h.totalAmount).format(`${h.currency}0,0.00`);return he[h.status],i(O,{hover:!0,onClick:()=>s==null?void 0:s(h.id),sx:{cursor:"pointer"},children:[i(y,{sx:{alignItems:"center",display:"flex"},children:[i(w,{sx:{backgroundColor:g=>g.palette.mode==="dark"?"neutral.800":"neutral.200",borderRadius:2,maxWidth:"fit-content",ml:3,p:1},children:[e(b,{align:"center",variant:"subtitle2",children:m}),e(b,{align:"center",variant:"h6",children:C})]}),i(w,{sx:{ml:2},children:[e(b,{variant:"subtitle2",children:h.number}),i(b,{color:"text.secondary",variant:"body2",children:["Total of ",p]})]})]}),e(y,{align:"right",children:i(I,{component:V,href:"/dashboard/invoices/"+h.id,children:[e(b,{variant:"subtitle2",children:"View Invoice"}),e(T,{children:e(Q,{})})]})})]},h.id)})})}),e(ie,{component:"div",count:a,onPageChange:r,onRowsPerPageChange:n,page:o,rowsPerPage:u,rowsPerPageOptions:[5,10,25]})]})};q.propTypes={count:c.number,items:c.array,onPageChange:c.func,onRowsPerPageChange:c.func,onSelect:c.func,page:c.number,rowsPerPage:c.number};const pe=()=>{const[t,a]=d.useState({filters:{query:void 0,status:void 0},page:0,rowsPerPage:5,sortBy:"createdAt",sortDir:"desc",orders:[]});d.useEffect(()=>{axios.post("/api/get_orders",{}).then(o=>{a(u=>({...u,orders:o.data}))})},[]);const l=d.useCallback(o=>{a(u=>({...u,filters:o}))},[]),r=d.useCallback(o=>{a(u=>({...u,sortDir:o}))},[]),n=d.useCallback((o,u)=>{a(h=>({...h,page:u}))},[]),s=d.useCallback(o=>{a(u=>({...u,rowsPerPage:parseInt(o.target.value,10)}))},[]);return{handleFiltersChange:l,handleSortChange:r,handlePageChange:n,handleRowsPerPageChange:s,state:t}},me=t=>{const a=re(),[l,r]=d.useState({orders:[],ordersCount:0}),n=d.useCallback(async()=>{try{const s=await ne.getOrders(t);a()&&r({orders:s.data,ordersCount:s.count})}catch(s){console.error(s)}},[t,a]);return d.useEffect(()=>{n()},[t]),{...l}},ge=(t,a)=>d.useMemo(()=>{if(a)return t.find(l=>l.id===a)},[t,a]),Oe=()=>{let t={time:new Date().getTime(),value:"email",expire:3e6},a=JSON.stringify(t);localStorage.setItem("time_token",a);const l=d.useRef(null),r=pe(),n=me(r.state),s=J(),o=ge(n.orders,s.data),u=X();Y();const h=d.useCallback(m=>{if(s.open&&s.data===m){s.handleClose();return}s.handleOpen(m)},[s]);return i(K,{children:[e(Z,{title:"Dashboard: Order List"}),e(w,{component:"main",ref:l,sx:{flexGrow:1,py:8},children:e(ee,{maxWidth:u.stretch?!1:"xl",children:e("div",{children:i(w,{ref:l,children:[e(w,{sx:{p:3},children:e(v,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:4,children:e("div",{children:e(b,{variant:"h4",children:"Orders"})})})}),e(F,{onFiltersChange:r.handleFiltersChange,onSortChange:r.handleSortChange,sortBy:r.state.sortBy,sortDir:r.state.sortDir}),e(te,{}),e(q,{count:n.ordersCount,items:n.orders,onPageChange:r.handlePageChange,onRowsPerPageChange:r.handleRowsPerPageChange,onSelect:h,page:r.state.page,rowsPerPage:r.state.rowsPerPage}),e(L,{container:l.current,onClose:s.handleClose,open:s.open,order:o})]})})})})]})};export{Oe as default};