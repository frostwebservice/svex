import{P as n,bC as p,r as b,j as v,F as C,d as a,B as f,q as g,aP as m,bD as x,aS as P,av as k,m as y}from"./app-4b8db575.js";const R=c=>{const{label:t,onChange:l,options:u,value:o=[],...h}=c,r=p(),i=b.useCallback(e=>{let s=[...o];e.target.checked?s.push(e.target.value):s=s.filter(d=>d!==e.target.value),l==null||l(s)},[l,o]);return v(C,{children:[a(f,{color:"inherit",endIcon:a(g,{children:a(m,{})}),onClick:r.handleOpen,ref:r.anchorRef,...h,children:t}),a(x,{anchorEl:r.anchorRef.current,onClose:r.handleClose,open:r.open,PaperProps:{style:{width:250}},children:u.map(e=>a(P,{children:a(k,{control:a(y,{checked:o.includes(e.value),onChange:i,value:e.value}),label:e.label,sx:{flexGrow:1,mr:0}})},e.label))})]})};R.propTypes={label:n.string.isRequired,onChange:n.func,options:n.array.isRequired,value:n.array.isRequired};export{R as M};