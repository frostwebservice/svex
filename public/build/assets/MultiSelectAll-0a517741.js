import{r as u,d as s,F as B,B as I,j as L,av as M,m as q,T as G}from"./app-828777ca.js";import{i as K}from"./isEqual-0c965ed0.js";import{d as z}from"./debounce-202edd7e.js";import{A as H,c as P}from"./Autocomplete-4e61c1a0.js";import{G as i}from"./Grid-89e4a57e.js";const U=({items:r,selectAllLabel:m,onChange:g,value:p})=>{const[c,o]=u.useState(p),[n,b]=u.useState(null),v=u.useRef(null);u.useEffect(()=>{g(c)},[c]);const x=l=>o(l),C=()=>o([]),d=l=>`${l.label}`,h=()=>{if((n==null?void 0:n.length)!==r.length){const e=n==null?void 0:n.filter(t=>!c.find(a=>a.label===t.label));return!((e==null?void 0:e.length)>0)}return r.length>0&&r.length===c.length},S=l=>{l.length>0?o(c.filter(e=>!l.find(t=>t.label===e.label))):o([])},k=l=>{let e=[];(n==null?void 0:n.length)>0&&n.length!==r.length&&(e=r.filter(t=>n.find(a=>a.label===t.label))),l?e.length>0?o([...c,...e]):o(r):S(e)},f=()=>{k(!h())},O=(l,e,t)=>{t==="clear"?C():(t==="selectOption"||t==="removeOption")&&(e.find(a=>a.value==="select-all")?(f(),r.filter(a=>a.value!=="select-all")):x(e))},A=()=>{console.log("ok"),document.getElementsByClassName("MuiAutocomplete-popupIndicator")[0].click()},F=(l,e)=>{if(e.value==="select-all")f();else if(l.target.checked){const t=[...c,e];o(t)}else{const t=c.filter(a=>a.value!==e.value);o(t)}},E=(l,e,{selected:t})=>{const a=e.value==="select-all"?{checked:h()}:{};return e.value==="OK"?s(i,{container:!0,children:s(i,{item:!0,xs:12,sx:{pl:1,pr:1},children:s("div",{className:"justify-content-end",children:s(I,{className:"text-center mx-8  multiselect-ok",variant:"contained",onClick:A,type:"submit",children:L("span",{className:"ml-2",children:[" ",e.value," "]})})})})},e.label):s(i,{container:!0,children:s(i,{item:!0,xs:12,sx:{pl:1,pr:1},children:s(M,{control:s(q,{checked:t,onChange:R=>F(R,e),...a,sx:{mr:1}},e.label),label:d(e)},e.label)})},e.label)},N=z(l=>{l&&!K(l,n)&&b(l)},1e3),T=l=>{N(l)},j=l=>s(G,{...l,label:"Category/Niche"}),y=P();return s(B,{children:s(H,{ref:v,sx:{maxHeight:"120px",overflowY:"auto",p:2},multiple:!0,size:"small",options:r,value:c,disableCloseOnSelect:!0,getOptionLabel:d,isOptionEqualToValue:(l,e)=>l.value===e.value,filterOptions:(l,e)=>{const t=y(l,e);return T(t),[{label:m,value:"select-all"},...t]},onChange:O,renderOption:E,renderInput:j})})};export{U as M};
