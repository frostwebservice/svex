import{d as e,K as $,G as J,P as v,r as c,bF as H,j as i,f as p,k as s,au as _,q as P,b_ as Y,bl as ee,bm as ne,bn as te,h as j,T as A,l as G,aZ as z,bQ as re,av as M,m as ae,bo as B,ci as O,aN as D,C as x,e as F,E as L,b2 as oe,bb as E,R as V,p as W,aO as ie,c as se,F as ce,S as le,D as de,B as q,u as he}from"./app-9c025f24.js";import{P as ue}from"./Plus-692d69b5.js";import{i as pe}from"./index-8c11a85d.js";import{D as Z}from"./DatePicker-c94d63a6.js";import{C as ge}from"./Clock-945b090f.js";import{R as ve}from"./Receipt-058f0e6e.js";import{S as me}from"./severity-pill-a9b876bc.js";import{g as be}from"./get-initials-d1c6cec7.js";import{T as N,a as Q,b as fe,c as C}from"./TableRow-41fcc70d.js";import{T as ye}from"./TablePagination-1b372e5a.js";import"./deep-copy-ee95be26.js";import"./apply-pagination-03aa54c3.js";import"./MobileDatePicker-551c2a3c.js";import"./PureDateInput-f9a27b2c.js";import"./Grid-6e0cb4b1.js";import"./createTheme-6977ac30.js";import"./DesktopWrapper-3399e7f8.js";var Ce=function(r){return e("svg",$({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},r,{children:e("path",{fill:"#fff",fillOpacity:.01,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4.44c0-.504 0-.756.098-.9486a.9.9 0 0 1 .3934-.3933C3.684 3 3.936 3 4.44 3h15.12c.504 0 .7561 0 .9486.098a.9003.9003 0 0 1 .3933.3934C21 3.684 21 3.936 21 4.44v.6024c0 .242 0 .363-.0296.4754a.9013.9013 0 0 1-.1274.2792c-.0657.096-.1571.1752-.3399.3337l-5.7562 4.9887c-.1828.1584-.2742.2376-.3399.3336a.9015.9015 0 0 0-.1274.2792c-.0296.1125-.0296.2334-.0296.4753v4.705c0 .176 0 .264-.0284.3401a.4503.4503 0 0 1-.119.1758c-.0601.0546-.1418.0873-.3052.1526l-3.06 1.224c-.3308.1324-.4962.1985-.629.1709a.45.45 0 0 1-.2835-.1919c-.0749-.1131-.0749-.2912-.0749-.6475v-5.929c0-.2419 0-.3628-.0296-.4753a.9003.9003 0 0 0-.1274-.2792c-.0657-.096-.157-.1752-.3399-.3336L3.4969 6.1306c-.1828-.1584-.2742-.2376-.3399-.3336a.9001.9001 0 0 1-.1274-.2792C3 5.4053 3 5.2844 3 5.0424V4.44Z"})}))};const we=J("div",{shouldForwardProp:a=>a!=="open"})(({theme:a,open:r})=>({flexGrow:1,overflow:"auto",paddingLeft:a.spacing(3),paddingRight:a.spacing(3),paddingTop:a.spacing(8),paddingBottom:a.spacing(8),zIndex:1,[a.breakpoints.up("lg")]:{marginLeft:-380},transition:a.transitions.create("margin",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),...r&&{[a.breakpoints.up("lg")]:{marginLeft:0},transition:a.transitions.create("margin",{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen})}})),xe=["Blind Spots Inc.","Dispatcher Inc.","ACME SRL","Novelty I.S","Beauty Clinic SRL","Division Inc."],K=a=>{const{container:r,filters:n={},group:d,onClose:u,onFiltersChange:t,onGroupChange:h,open:b,...f}=a,m=c.useRef(null),y=H(o=>o.breakpoints.up("lg")),g=c.useCallback(o=>{var l;o.preventDefault(),t==null||t({...n,query:((l=m.current)==null?void 0:l.value)||""})},[n,t]),k=c.useCallback(o=>{const l={...n,startDate:o||void 0};l.endDate&&o&&o>l.endDate&&(l.endDate=o),t==null||t(l)},[n,t]),R=c.useCallback(o=>{const l={...n,endDate:o||void 0};l.startDate&&o&&o<l.startDate&&(l.startDate=o),t==null||t(l)},[n,t]),I=c.useCallback(o=>{let l;o.target.checked?l=[...n.customers||[],o.target.value]:l=(n.customers||[]).filter(S=>S!==o.target.value),t==null||t({...n,customers:l})},[n,t]),T=c.useCallback(o=>{t==null||t({...n,status:o.target.checked?"paid":void 0})},[n,t]),w=i("div",{children:[i(p,{alignItems:"center",justifyContent:"space-between",direction:"row",sx:{p:3},children:[e(s,{variant:"h5",children:"Filters"}),!y&&e(_,{onClick:u,children:e(P,{children:e(Y,{})})})]}),i(p,{spacing:3,sx:{p:3},children:[e("form",{onSubmit:g,children:e(ee,{defaultValue:"",fullWidth:!0,inputProps:{ref:m},placeholder:"Invoice number",startAdornment:e(ne,{position:"start",children:e(P,{children:e(te,{})})})})}),i("div",{children:[e(j,{sx:{display:"block",mb:2},children:"Issue date"}),i(p,{spacing:2,children:[e(Z,{inputFormat:"dd/MM/yyyy",label:"From",onChange:k,renderInput:o=>e(A,{...o}),value:n.startDate||null}),e(Z,{inputFormat:"dd/MM/yyyy",label:"To",onChange:R,renderInput:o=>e(A,{...o}),value:n.endDate||null})]})]}),i("div",{children:[e(j,{sx:{display:"block",mb:2},children:"From customer"}),e(G,{sx:{backgroundColor:o=>o.palette.mode==="dark"?"neutral.800":"neutral.50",borderColor:"divider",borderRadius:1,borderStyle:"solid",borderWidth:1},children:e(z,{sx:{maxHeight:200},children:e(re,{sx:{py:1,px:1.5},children:xe.map(o=>{var S;const l=(S=n.customers)==null?void 0:S.includes(o);return e(M,{control:e(ae,{checked:l,onChange:I}),label:o,value:o},o)})})})})]}),e(M,{control:e(B,{checked:n.status==="paid",onChange:T}),label:"Paid only"}),e(M,{control:e(B,{checked:d,onChange:h}),label:"Group by status"})]})]});return y?e(O,{anchor:"left",open:b,PaperProps:{elevation:16,sx:{border:"none",borderRadius:2.5,overflow:"hidden",position:"relative",width:380}},SlideProps:{container:r},variant:"persistent",sx:{p:3},...f,children:w}):e(O,{anchor:"left",hideBackdrop:!0,ModalProps:{container:r,sx:{pointerEvents:"none",position:"absolute"}},onClose:u,open:b,PaperProps:{sx:{maxWidth:"100%",width:380,pointerEvents:"auto",position:"absolute"}},SlideProps:{container:r},variant:"temporary",...f,children:w})};K.propTypes={container:v.any,filters:v.object,onClose:v.func,onFiltersChange:v.func,open:v.bool};var Pe=function(r){return i("svg",$({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},r,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M4 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C6.2798 3 7.1198 3 8.8 3h6.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C20 5.2798 20 6.1198 20 7.8V21l-2.75-2-2.5 2L12 19l-2.75 2-2.5-2L4 21V7.8Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m9 10.5 2 2L15.5 8M20 21V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C17.7202 3 16.8802 3 15.2 3H8.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 5.2798 4 6.1198 4 7.8V21l2.75-2 2.5 2L12 19l2.75 2 2.5-2L20 21Z"})]}))};const ke=()=>e("div",{children:i(D,{container:!0,spacing:3,children:[e(D,{xs:12,md:6,lg:4,children:e(x,{children:e(F,{children:i(p,{alignItems:"center",direction:"row",spacing:2,children:[e(L,{sx:{height:48,width:48},children:e(ve,{})}),i("div",{children:[e(s,{color:"text.secondary",variant:"body2",children:"Total"}),e(s,{variant:"h6",children:"$5,300.00"}),e(s,{color:"text.secondary",variant:"body2",children:"from 12 invoices"})]})]})})})}),e(D,{xs:12,md:6,lg:4,children:e(x,{children:e(F,{children:i(p,{alignItems:"center",direction:"row",spacing:2,children:[e(L,{sx:{backgroundColor:"success.lightest",color:"success.main",height:48,width:48},children:e(Pe,{})}),i("div",{children:[e(s,{color:"text.secondary",variant:"body2",children:"Paid"}),e(s,{variant:"h6",children:"$1,439.60"}),e(s,{color:"text.secondary",variant:"body2",children:"from 3 invoices"})]})]})})})}),e(D,{xs:12,md:6,lg:4,children:e(x,{children:e(F,{children:i(p,{alignItems:"center",direction:"row",spacing:2,children:[e(L,{sx:{backgroundColor:"warning.lightest",color:"warning.main",height:48,width:48},children:e(ge,{})}),i("div",{children:[e(s,{color:"text.secondary",variant:"body2",children:"Pending"}),e(s,{variant:"h6",children:"$276.87"}),e(s,{color:"text.secondary",variant:"body2",children:"from 2 invoices"})]})]})})})})]})}),Ie=a=>a.reduce((r,n)=>{const{status:d}=n;return{...r,[d]:[...r[d],n]}},{canceled:[],paid:[],pending:[]}),Se={canceled:"error",paid:"success",pending:"warning"},U=a=>{const{invoice:r,...n}=a,d=Se[r.status],u=oe(r.totalAmount).format("0,0.00"),t=r.issueDate&&E(r.issueDate,"dd/MM/yyyy"),h=r.dueDate&&E(r.dueDate,"dd/MM/yyyy");return i(fe,{sx:{"&:last-child td, &:last-child th":{border:0}},...n,children:[e(C,{width:"25%",children:i(p,{alignItems:"center",direction:"row",spacing:2,component:V,href:W.dashboard.invoices.details,sx:{display:"inline-flex",textDecoration:"none",whiteSpace:"nowrap"},children:[e(L,{sx:{height:42,width:42},children:be(r.customer.name)}),i("div",{children:[e(s,{color:"text.primary",variant:"subtitle2",children:r.number}),e(s,{color:"text.secondary",variant:"body2",children:r.customer.name})]})]})}),e(C,{children:i(s,{variant:"subtitle2",children:[r.currency,u]})}),i(C,{children:[e(s,{variant:"subtitle2",children:"Issued"}),e(s,{color:"text.secondary",variant:"body2",children:t})]}),i(C,{children:[e(s,{variant:"subtitle2",children:"Due"}),e(s,{color:"text.secondary",variant:"body2",children:h})]}),e(C,{align:"right",children:e(me,{color:d,children:r.status})}),e(C,{align:"right",children:e(_,{component:V,href:W.dashboard.invoices.details,children:e(P,{children:e(ie,{})})})})]})},X=a=>{const{group:r=!1,items:n=[],count:d=0,onPageChange:u=()=>{},onRowsPerPageChange:t,page:h=0,rowsPerPage:b=0}=a;let f;if(r){const m=Ie(n),y=Object.keys(m);f=e(p,{spacing:6,children:y.map(g=>{const k=g.charAt(0).toUpperCase()+g.slice(1),R=m[g].length,I=m[g],T=I.length>0;return i(p,{spacing:2,children:[i(s,{color:"text.secondary",variant:"h6",children:[k," ","(",R,")"]}),T&&e(x,{children:e(z,{children:e(N,{sx:{minWidth:600},children:e(Q,{children:I.map(w=>e(U,{invoice:w},w.id))})})})})]},k)})})}else f=e(x,{children:e(N,{children:e(Q,{children:n.map(m=>e(U,{invoice:m},m.id))})})});return i(p,{spacing:4,children:[f,e(ye,{component:"div",count:d,onPageChange:u,onRowsPerPageChange:t,page:h,rowsPerPage:b,rowsPerPageOptions:[5,10,25]})]})};X.propTypes={count:v.number,group:v.bool,items:v.array,onPageChange:v.func,onRowsPerPageChange:v.func,page:v.number,rowsPerPage:v.number};const De=()=>{const[a,r]=c.useState({filters:{customers:[],endDate:void 0,query:"",startDate:void 0},page:0,rowsPerPage:5}),n=c.useCallback(t=>{r(h=>({...h,filters:t,page:0}))},[]),d=c.useCallback((t,h)=>{r(b=>({...b,page:h}))},[]),u=c.useCallback(t=>{r(h=>({...h,rowsPerPage:parseInt(t.target.value,10)}))},[]);return{handleFiltersChange:n,handlePageChange:d,handleRowsPerPageChange:u,state:a}},Le=a=>{const r=he(),[n,d]=c.useState({invoices:[],invoicesCount:0}),u=c.useCallback(async()=>{try{const t=await pe.getInvoices(a);r()&&d({invoices:t.data,invoicesCount:t.count})}catch(t){console.error(t)}},[a,r]);return c.useEffect(()=>{u()},[a]),{...n}},$e=()=>{const a=c.useRef(null),r=H(g=>g.breakpoints.up("lg")),n=De(),d=Le(n.state),[u,t]=c.useState(!0),[h,b]=c.useState(r);se();const f=c.useCallback(g=>{t(g.target.checked)},[]),m=c.useCallback(()=>{b(g=>!g)},[]),y=c.useCallback(()=>{b(!1)},[]);return i(ce,{children:[e(le,{title:"Dashboard: Invoice List"}),e(de,{}),e(G,{component:"main",sx:{display:"flex",flex:"1 1 auto",overflow:"hidden",position:"relative"},children:i(G,{ref:a,sx:{bottom:0,display:"flex",left:0,position:"absolute",right:0,top:0},children:[e(K,{container:a.current,filters:n.state.filters,group:u,onFiltersChange:n.handleFiltersChange,onClose:y,onGroupChange:f,open:h}),e(we,{open:h,children:i(p,{spacing:4,children:[i(p,{alignItems:"flex-start",direction:"row",justifyContent:"space-between",spacing:3,children:[e("div",{children:e(s,{variant:"h4",children:"Invoices"})}),i(p,{alignItems:"center",direction:"row",spacing:1,children:[e(q,{color:"inherit",startIcon:e(P,{children:e(Ce,{})}),onClick:m,children:"Filters"}),e(q,{startIcon:e(P,{children:e(ue,{})}),variant:"contained",children:"New"})]})]}),e(ke,{}),e(X,{count:d.invoicesCount,group:u,items:d.invoices,onPageChange:n.handlePageChange,onRowsPerPageChange:n.handleRowsPerPageChange,page:n.state.page,rowsPerPage:n.state.rowsPerPage})]})})]})})]})};export{$e as default};