import{ae as A,ad as C,an as l,bs as m,r as v,ao as y,_ as b,j as d,J as u,d as r,ap as n,af as w}from"./app-7e56a116.js";function M(s){return C("MuiCardActionArea",s)}const S=A("MuiCardActionArea",["root","focusVisible","focusHighlight"]),i=S,x=["children","className","focusVisibleClassName"],H=s=>{const{classes:o}=s;return w({root:["root"],focusHighlight:["focusHighlight"]},M,o)},N=l(m,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(s,o)=>o.root})(({theme:s})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${i.focusHighlight}`]:{opacity:(s.vars||s).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${i.focusVisible} .${i.focusHighlight}`]:{opacity:(s.vars||s).palette.action.focusOpacity}})),k=l("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(s,o)=>o.focusHighlight})(({theme:s})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:s.transitions.create("opacity",{duration:s.transitions.duration.short})})),R=v.forwardRef(function(o,c){const t=y({props:o,name:"MuiCardActionArea"}),{children:h,className:p,focusVisibleClassName:f}=t,g=b(t,x),a=t,e=H(a);return d(N,u({className:n(e.root,p),focusVisibleClassName:n(f,e.focusVisible),ref:c,ownerState:a},g,{children:[h,r(k,{className:e.focusHighlight,ownerState:a})]}))}),Z=R;var j=function(o){return d("svg",u({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},o,{children:[r("path",{fill:"#fff",fillOpacity:.01,d:"M16.5 8.4c1.4912 0 2.7-1.2088 2.7-2.7S17.9912 3 16.5 3s-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7ZM5.7 14.7c1.4912 0 2.7-1.2088 2.7-2.7S7.1912 9.3 5.7 9.3 3 10.5088 3 12s1.2088 2.7 2.7 2.7ZM16.5 21c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7Z"}),r("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m8.031 13.359 6.147 3.582m-.009-9.882-6.138 3.582M19.2 5.7c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7S15.0088 3 16.5 3s2.7 1.2088 2.7 2.7ZM8.4 12c0 1.4912-1.2088 2.7-2.7 2.7S3 13.4912 3 12s1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Zm10.8 6.3c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7 1.2088-2.7 2.7-2.7 2.7 1.2088 2.7 2.7Z"})]}))};export{Z as C,j as S};
