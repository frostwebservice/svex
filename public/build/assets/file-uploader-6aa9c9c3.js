import{P as p,r as a,j as c,bN as b,f as k,d as o,k as v,au as C,q as F,b_ as y,bP as D}from"./app-28409791.js";import{F as S}from"./file-dropzone-4264d9e6.js";const U=d=>{const{onClose:l,open:r=!1,onUpgrade:h,kind:m}=d,[t,n]=a.useState([]);a.useEffect(()=>{n([])},[r]);const u=a.useCallback(e=>{n(s=>[...e])},[]),f=a.useCallback(e=>{n(s=>s.filter(i=>i.path!==e.path))},[]),g=JSON.parse(localStorage.getItem("email")),x=a.useCallback(()=>{n([])},[]);return c(b,{fullWidth:!0,maxWidth:"sm",open:r,onClose:l,children:[c(k,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{px:3,py:2},children:[o(v,{variant:"h6",children:"Upload Files"}),o(C,{color:"inherit",onClick:l,children:o(F,{children:o(y,{})})})]}),o(D,{children:o(S,{accept:{"*/*":[]},caption:"Max file size is 3 MB",files:t,onDrop:u,onRemove:f,onRemoveAll:x,onUpload:()=>{console.log(t[0]);const e=new FormData;e.append("file",t[0]),e.append("email",g),e.append("kind",m);let s="/api/upload_cover";axios.post(s,e,{}).then(i=>{h(),l()})}})})]})};U.propTypes={onClose:p.func,open:p.bool};export{U as F};
