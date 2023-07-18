import{r as e,P as p,j as C,F as x,d as l,bj as y,bk as T,D as A,f as D,l as B,bl as O,bm as P,q as F,bn as w,T as R}from"./app-4b8db575.js";import{u as j}from"./use-update-effect-876f7f5c.js";const U=(c=[])=>{const[n,a]=e.useState([]);e.useEffect(()=>{a([])},[c]);const b=e.useCallback(()=>{a([...c])},[c]),h=e.useCallback(u=>{a(s=>[...s,u])},[]),i=e.useCallback(()=>{a([])},[]),v=e.useCallback(u=>{a(s=>s.filter(d=>d!==u))},[]);return{handleDeselectAll:i,handleDeselectOne:v,handleSelectAll:b,handleSelectOne:h,selected:n}},I=[{label:"All",value:"all"},{label:"Accepts Marketing",value:"hasAcceptedMarketing"},{label:"Prospect",value:"isProspect"},{label:"Returning",value:"isReturning"}],M=[{label:"Last update (newest)",value:"updatedAt|desc"},{label:"Last update (oldest)",value:"updatedAt|asc"},{label:"Total orders (highest)",value:"totalOrders|desc"},{label:"Total orders (lowest)",value:"totalOrders|asc"}],q=c=>{const{onFiltersChange:n,onSortChange:a,sortBy:b,sortDir:h}=c,i=e.useRef(null),[v,u]=e.useState("all"),[s,d]=e.useState({}),f=e.useCallback(()=>{n==null||n(s)},[s,n]);j(()=>{f()},[s,f]);const m=e.useCallback((t,r)=>{u(r),d(o=>{const g={...o,hasAcceptedMarketing:void 0,isProspect:void 0,isReturning:void 0};return r!=="all"&&(g[r]=!0),g})},[]),S=e.useCallback(t=>{t.preventDefault(),d(r=>{var o;return{...r,query:(o=i.current)==null?void 0:o.value}})},[]),k=e.useCallback(t=>{const[r,o]=t.target.value.split("|");a==null||a({sortBy:r,sortDir:o})},[a]);return C(x,{children:[l(y,{indicatorColor:"primary",onChange:m,scrollButtons:"auto",sx:{px:3},textColor:"primary",value:v,variant:"scrollable",children:I.map(t=>l(T,{label:t.label,value:t.value},t.value))}),l(A,{}),C(D,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,sx:{p:3},children:[l(B,{component:"form",onSubmit:S,sx:{flexGrow:1},children:l(O,{defaultValue:"",fullWidth:!0,inputProps:{ref:i},placeholder:"Search customers",startAdornment:l(P,{position:"start",children:l(F,{children:l(w,{})})})})}),l(R,{label:"Sort By",name:"sort",onChange:k,select:!0,SelectProps:{native:!0},value:`${b}|${h}`,children:M.map(t=>l("option",{value:t.value,children:t.label},t.value))})]})]})};q.propTypes={onFiltersChange:p.func,onSortChange:p.func,sortBy:p.string,sortDir:p.oneOf(["asc","desc"])};export{q as C,U as u};