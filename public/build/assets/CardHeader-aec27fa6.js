import{af as T,ae as N,G as c,K as n,r as P,ao as M,_ as w,k as i,d as l,j as C,ap as S,ag as j}from"./app-28409791.js";function A(a){return N("MuiCardHeader",a)}const U=T("MuiCardHeader",["root","avatar","action","content","title","subheader"]),v=U,_=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],$=a=>{const{classes:e}=a;return j({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},A,e)},k=c("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(a,e)=>n({[`& .${v.title}`]:e.title,[`& .${v.subheader}`]:e.subheader},e.root)})({display:"flex",alignItems:"center",padding:16}),B=c("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(a,e)=>e.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),E=c("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(a,e)=>e.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),G=c("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(a,e)=>e.content})({flex:"1 1 auto"}),I=P.forwardRef(function(e,h){const p=M({props:e,name:"MuiCardHeader"}),{action:m,avatar:d,className:b,component:y="div",disableTypography:u=!1,subheader:g,subheaderTypographyProps:f,title:H,titleTypographyProps:x}=p,R=w(p,_),r=n({},p,{component:y,disableTypography:u}),t=$(r);let s=H;s!=null&&s.type!==i&&!u&&(s=l(i,n({variant:d?"body2":"h5",className:t.title,component:"span",display:"block"},x,{children:s})));let o=g;return o!=null&&o.type!==i&&!u&&(o=l(i,n({variant:d?"body2":"body1",className:t.subheader,color:"text.secondary",component:"span",display:"block"},f,{children:o}))),C(k,n({className:S(t.root,b),as:y,ref:h,ownerState:r},R,{children:[d&&l(B,{className:t.avatar,ownerState:r,children:d}),C(G,{className:t.content,ownerState:r,children:[s,o]}),m&&l(E,{className:t.action,ownerState:r,children:m})]}))}),L=I;export{L as C};
