import{E as n,bB as p,r as b,j as C,F as v,d as a,B as f,J as g,aH as m,bC as x,$ as k,bh as y,m as R}from"./app-7d1d9a01.js";const w=c=>{const{label:t,onChange:l,options:u,value:o=[],...h}=c,r=p(),i=b.useCallback(e=>{let s=[...o];e.target.checked?s.push(e.target.value):s=s.filter(d=>d!==e.target.value),l==null||l(s)},[l,o]);return C(v,{children:[a(f,{color:"inherit",endIcon:a(g,{children:a(m,{})}),onClick:r.handleOpen,ref:r.anchorRef,...h,children:t}),a(x,{anchorEl:r.anchorRef.current,onClose:r.handleClose,open:r.open,PaperProps:{style:{width:250}},children:u.map(e=>a(k,{children:a(y,{control:a(R,{checked:o.includes(e.value),onChange:i,value:e.value}),label:e.label,sx:{flexGrow:1,mr:0}})},e.label))})]})};w.propTypes={label:n.string.isRequired,onChange:n.func,options:n.array.isRequired,value:n.array.isRequired};export{w as M};
