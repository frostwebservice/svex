import{ae as U,ad as V,ap as d,d as l,G as p,aq as F,H as R,ar as h,as as z,K as a,r as Z,an as q,_ as G,at as K,j as D,ao as J,af as Q}from"./app-21956035.js";import{C as X}from"./Close-ea397638.js";function Y(o){return V("MuiAlert",o)}const oo=U("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),L=oo,to=d(l("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),so=d(l("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),lo=d(l("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),eo=d(l("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),ro=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],no=o=>{const{variant:s,color:e,severity:r,classes:t}=o,c={root:["root",`${s}${R(e||r)}`,`${s}`],icon:["icon"],message:["message"],action:["action"]};return Q(c,Y,t)},ao=p(F,{name:"MuiAlert",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[s.root,s[e.variant],s[`${e.variant}${R(e.color||e.severity)}`]]}})(({theme:o,ownerState:s})=>{const e=o.palette.mode==="light"?h:z,r=o.palette.mode==="light"?z:h,t=s.color||s.severity;return a({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},t&&s.variant==="standard"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:e(o.palette[t].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${t}StandardBg`]:r(o.palette[t].light,.9),[`& .${L.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="outlined"&&{color:o.vars?o.vars.palette.Alert[`${t}Color`]:e(o.palette[t].light,.6),border:`1px solid ${(o.vars||o).palette[t].light}`,[`& .${L.icon}`]:o.vars?{color:o.vars.palette.Alert[`${t}IconColor`]}:{color:o.palette[t].main}},t&&s.variant==="filled"&&a({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${t}FilledColor`],backgroundColor:o.vars.palette.Alert[`${t}FilledBg`]}:{backgroundColor:o.palette.mode==="dark"?o.palette[t].dark:o.palette[t].main,color:o.palette.getContrastText(o.palette[t].main)}))}),io=p("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(o,s)=>s.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),co=p("div",{name:"MuiAlert",slot:"Message",overridesResolver:(o,s)=>s.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),P=p("div",{name:"MuiAlert",slot:"Action",overridesResolver:(o,s)=>s.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),B={success:l(to,{fontSize:"inherit"}),warning:l(so,{fontSize:"inherit"}),error:l(lo,{fontSize:"inherit"}),info:l(eo,{fontSize:"inherit"})},po=Z.forwardRef(function(s,e){var r,t,c,f,A,C;const u=q({props:s,name:"MuiAlert"}),{action:g,children:b,className:_,closeText:I="Close",color:k,components:M={},componentsProps:x={},icon:$,iconMapping:O=B,onClose:m,role:N="alert",severity:v="success",slotProps:y={},slots:S={},variant:W="standard"}=u,w=G(u,ro),n=a({},u,{color:k,severity:v,variant:W}),i=no(n),E=(r=(t=S.closeButton)!=null?t:M.CloseButton)!=null?r:K,H=(c=(f=S.closeIcon)!=null?f:M.CloseIcon)!=null?c:X,j=(A=y.closeButton)!=null?A:x.closeButton,T=(C=y.closeIcon)!=null?C:x.closeIcon;return D(ao,a({role:N,elevation:0,ownerState:n,className:J(i.root,_),ref:e},w,{children:[$!==!1?l(io,{ownerState:n,className:i.icon,children:$||O[v]||B[v]}):null,l(co,{ownerState:n,className:i.message,children:b}),g!=null?l(P,{ownerState:n,className:i.action,children:g}):null,g==null&&m?l(P,{ownerState:n,className:i.action,children:l(E,a({size:"small","aria-label":I,title:I,color:"inherit",onClick:m},j,{children:l(H,a({fontSize:"small"},T))}))}):null]}))}),vo=po;export{vo as A};
