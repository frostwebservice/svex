import{P as p,r as a,j as c,bM as b,f as k,d as o,k as v,at as C,q as F,bZ as y,bO as D}from"./app-882aa423.js";import{F as S}from"./file-dropzone-4fd14c23.js";const U=d=>{const{onClose:t,open:l=!1,onUpgrade:h,kind:m}=d,[r,n]=a.useState([]);a.useEffect(()=>{n([])},[l]);const u=a.useCallback(e=>{n(s=>[...e])},[]),f=a.useCallback(e=>{n(s=>s.filter(i=>i.path!==e.path))},[]),g=JSON.parse(localStorage.getItem("email")),x=a.useCallback(()=>{n([])},[]);return c(b,{fullWidth:!0,maxWidth:"sm",open:l,onClose:t,children:[c(k,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{px:3,py:2},children:[o(v,{variant:"h6",children:"Upload Files"}),o(C,{color:"inherit",onClick:t,children:o(F,{children:o(y,{})})})]}),o(D,{children:o(S,{accept:{"*/*":[]},caption:"Max file size is 3 MB",files:r,onDrop:u,onRemove:f,onRemoveAll:x,onUpload:()=>{const e=new FormData;e.append("file",r[0]),e.append("email",g),e.append("kind",m);let s="/api/upload_cover";axios.post(s,e,{}).then(i=>{h(),t()})}})})]})};U.propTypes={onClose:p.func,open:p.bool};export{U as F};
