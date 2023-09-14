import{j as i,_ as h,d as t,W as d,c as g,F as u,S as x,l as a,ax as c,f as m,k as l,D as b,ay as r,C as y,R as v,J as f,p as n}from"./app-51ffe495.js";var w=function(p){return i("svg",h({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},p,{children:[t("path",{fill:"#fff",fillOpacity:.01,d:"m19 12-7 7-7-7"}),t("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 5v14m0 0 7-7m-7 7-7-7"})]}))};const k=s=>[{title:"Data Display",items:[{title:"Detail Lists",subtitle:"8 components",image:`/assets/components/detail-list-${s}.png`,path:n.components.dataDisplay.detailLists},{title:"Tables",subtitle:"11 components",image:`/assets/components/tables-${s}.png`,path:n.components.dataDisplay.tables},{title:"Quick Stats",subtitle:"8 components",image:`/assets/components/quick-stats-${s}.png`,path:n.components.dataDisplay.quickStats}]},{title:"Lists",items:[{title:"Grouped Lists",subtitle:"11 components",image:`/assets/components/grouped-lists-${s}.png`,path:n.components.lists.groupedLists},{title:"Grid Lists",subtitle:"6 components",image:`/assets/components/grid-lists-${s}.png`,path:n.components.lists.gridLists}]},{title:"Forms",items:[{title:"Forms",subtitle:"17 components",image:`/assets/components/forms-${s}.png`,path:n.components.forms}]},{title:"Overlays",items:[{title:"Modals",subtitle:"12 components",image:`/assets/components/modals-${s}.png`,path:n.components.modals}]},{title:"Charts",items:[{title:"Charts",subtitle:"12 components",image:`/assets/components/charts-${s}.png`,path:n.components.charts}]},{title:"Components",items:[{title:"Buttons",subtitle:"",image:`/assets/components/buttons-${s}.png`,path:n.components.buttons},{title:"Typography",subtitle:"",image:`/assets/components/typography-${s}.png`,path:n.components.typography},{title:"Colors",subtitle:"",image:`/assets/components/colors-${s}.png`,path:n.components.colors},{title:"Inputs",subtitle:"",image:`/assets/components/inputs-${s}.png`,path:n.components.inputs}]}],C=()=>{const s=d(),p=k(s.palette.mode);return g(),i(u,{children:[t(x,{title:"Components"}),t(a,{sx:{backgroundColor:o=>o.palette.mode==="dark"?"neutral.800":"neutral.50",py:"120px"},children:t(c,{maxWidth:"lg",children:i(m,{spacing:1,children:[t(l,{variant:"h1",children:"Browse components"}),t(l,{color:"text.secondary",variant:"body1",children:"Browse through over 100 individual components and over 35 screens"})]})})}),t(a,{component:"main",sx:{flexGrow:1,py:8},children:t(c,{maxWidth:"lg",children:t(m,{divider:t(b,{}),spacing:4,children:p.map(o=>i(r,{container:!0,spacing:4,children:[t(r,{xs:12,lg:3,children:t(l,{sx:{fontWeight:600},variant:"h5",children:o.title})}),t(r,{xs:12,lg:9,children:t(r,{container:!0,spacing:4,children:o.items.map(e=>t(r,{xs:12,sm:6,md:4,children:t(y,{component:v,href:e.path,sx:{display:"block",textDecoration:"none",gridColumn:{xs:"span 3",sm:"span 1"}},variant:"outlined",...e.newTab&&{component:"a",target:"_blank"},children:i(a,{sx:{p:2},children:[t(a,{sx:{position:"relative",pt:"calc(300 / 500 * 100%)","& img":{height:"auto",position:"absolute",top:0,width:"100%"}},children:t("img",{src:e.image})}),i(a,{sx:{alignItems:"flex-end",display:"flex",mt:2},children:[t(l,{variant:"subtitle2",children:e.title}),e.newTab&&t(f,{color:"action",sx:{ml:1.5},children:t(w,{})})]}),t(l,{color:"text.secondary",variant:"body2",children:e.subtitle})]})})},e.title))})})]},o.title))})})})]})};export{C as default};
