import{af as A,ae as C,G as d,bs as v,r as m,ao as w,_ as y,j as u,K as n,d as t,ap as l,ag as b}from"./app-1b121cef.js";function H(s){return C("MuiCardActionArea",s)}const M=A("MuiCardActionArea",["root","focusVisible","focusHighlight"]),a=M,k=["children","className","focusVisibleClassName"],x=s=>{const{classes:o}=s;return b({root:["root"],focusHighlight:["focusHighlight"]},H,o)},S=d(v,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(s,o)=>o.root})(({theme:s})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${a.focusHighlight}`]:{opacity:(s.vars||s).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${a.focusVisible} .${a.focusHighlight}`]:{opacity:(s.vars||s).palette.action.focusOpacity}})),R=d("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(s,o)=>o.focusHighlight})(({theme:s})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:s.transitions.create("opacity",{duration:s.transitions.duration.short})})),N=m.forwardRef(function(o,c){const e=w({props:o,name:"MuiCardActionArea"}),{children:h,className:p,focusVisibleClassName:f}=e,g=y(e,k),r=e,i=x(r);return u(S,n({className:l(i.root,p),focusVisibleClassName:l(f,i.focusVisible),ref:c,ownerState:r},g,{children:[h,t(R,{className:i.focusHighlight,ownerState:r})]}))}),j=N;var V=function(o){return t("svg",n({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},o,{children:t("path",{fill:"#fff",fillOpacity:.01,fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.9938 4.9222c-1.7994-2.1036-4.8-2.6695-7.0546-.7432-2.2545 1.9263-2.572 5.147-.8014 7.4254 1.472 1.8942 5.927 5.8893 7.3871 7.1823.1633.1447.245.217.3403.2455a.4542.4542 0 0 0 .2573 0c.0953-.0285.1769-.1008.3403-.2455 1.4601-1.293 5.915-5.2881 7.3871-7.1823 1.7705-2.2783 1.4918-5.5193-.8015-7.4254-2.2933-1.906-5.2551-1.3604-7.0546.7432Z",clipRule:"evenodd"})}))},L=function(o){return u("svg",n({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},o,{children:[t("path",{fill:"#fff",fillOpacity:.01,d:"M16.5 8.4c1.4912 0 2.7-1.2088 2.7-2.7S17.9912 3 16.5 3s-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7ZM5.7 14.7c1.4912 0 2.7-1.2088 2.7-2.7S7.1912 9.3 5.7 9.3 3 10.5088 3 12s1.2088 2.7 2.7 2.7ZM16.5 21c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7Z"}),t("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m8.031 13.359 6.147 3.582m-.009-9.882-6.138 3.582M19.2 5.7c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7S15.0088 3 16.5 3s2.7 1.2088 2.7 2.7ZM8.4 12c0 1.4912-1.2088 2.7-2.7 2.7S3 13.4912 3 12s1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Zm10.8 6.3c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7 1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Z"})]}))};export{j as C,V as H,L as S};