import{r as o,d as c,F as B,B as I,j as K,aK as M,m as q,T as G}from"./app-f8174623.js";import{i as z}from"./isEqual-6c4fc5b8.js";import{d as H}from"./debounce-38ac0614.js";import{A as P,c as Y}from"./Autocomplete-d857fc60.js";import{G as d}from"./Grid-bf62f2c7.js";const V=({items:u,selectAllLabel:g,onChange:b,value:v})=>{const[s,r]=o.useState(v),[n,p]=o.useState(null),x=o.useRef(null);o.useEffect(()=>{b(s)},[s]);const C=l=>r(l),S=()=>r([]),f=l=>`${l.label}`,m=()=>{if((n==null?void 0:n.length)!==u.length){const e=n==null?void 0:n.filter(t=>!s.find(a=>a.label===t.label));return!((e==null?void 0:e.length)>0)}return u.length>0&&u.length===s.length},k=l=>{l.length>0?r(s.filter(e=>!l.find(t=>t.label===e.label))):r([])},O=l=>{let e=[];(n==null?void 0:n.length)>0&&n.length!==u.length&&(e=u.filter(t=>n.find(a=>a.label===t.label))),l?e.length>0?r([...s,...e]):r(u):k(e)},h=()=>{O(!m())},A=(l,e,t)=>{t==="clear"?S():(t==="selectOption"||t==="removeOption")&&(e.find(a=>a.value==="select-all")?(h(),u.filter(a=>a.value!=="select-all")):C(e))},F=()=>{document.getElementsByClassName("MuiAutocomplete-popupIndicator")[0].click()},E=(l,e)=>{if(e.value==="select-all")h();else if(l.target.checked){const t=[...s,e];r(t)}else{const t=s.filter(a=>a.value!==e.value);r(t)}},N=(l,e)=>{if(e.value==="select-all")h();else if(s.filter(a=>a.value==e.value).length==0){const a=[...s,e];r(a)}else{const a=s.filter(i=>i.value!==e.value);r(a)}},T=(l,e,{selected:t})=>{const a=e.value==="select-all"?{checked:m()}:{};return e.value==="OK"?c(d,{container:!0,children:c(d,{item:!0,xs:12,sx:{pl:1,pr:1},children:c("div",{className:"justify-content-end",children:c(I,{className:"text-center mx-8  multiselect-ok",variant:"contained",onClick:F,type:"submit",children:K("span",{className:"ml-2",children:[" ",e.value," "]})})})})},e.label):c(d,{container:!0,children:c(d,{item:!0,xs:12,sx:{pl:2,pr:2},children:c(M,{control:c(q,{checked:t,onChange:i=>E(i,e),...a,sx:{mr:1}},e.label),onClick:i=>N(i,e),htmlFor:e.label,label:f(e)},e.label)})},e.label)},j=H(l=>{l&&!z(l,n)&&p(l)},1e3),y=l=>{j(l)},L=l=>c(G,{...l,label:"Category/Niche"}),R=Y();return c(B,{children:c(P,{ref:x,sx:{maxHeight:"120px",overflowY:"auto",p:2},multiple:!0,size:"small",options:u,value:s,disableCloseOnSelect:!0,getOptionLabel:f,isOptionEqualToValue:(l,e)=>l.value===e.value,filterOptions:(l,e)=>{const t=R(l,e);return y(t),[{label:g,value:"select-all"},...t]},onChange:A,renderOption:T,renderInput:L})})};export{V as M};