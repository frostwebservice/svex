import{ad as g,ae as p,an as d,J as e,r as u,ao as f,_ as m,d as D,ap as x,af as A}from"./app-3b15a07b.js";function S(s){return g("MuiDialogActions",s)}p("MuiDialogActions",["root","spacing"]);const y=["className","disableSpacing"],b=s=>{const{classes:o,disableSpacing:t}=s;return A({root:["root",!t&&"spacing"]},S,o)},C=d("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:t}=s;return[o.root,!t.disableSpacing&&o.spacing]}})(({ownerState:s})=>e({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),w=u.forwardRef(function(o,t){const a=f({props:o,name:"MuiDialogActions"}),{className:n,disableSpacing:c=!1}=a,l=m(a,y),i=e({},a,{disableSpacing:c}),r=b(i);return D(C,e({className:x(r.root,n),ownerState:i,ref:t},l))}),R=w;export{R as D};
