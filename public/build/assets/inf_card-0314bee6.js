import{P as I,r as c,d as e,C,j as a,e as k,f as l,E as N,R as t,p as i,L as S,k as d,aN as h,F as n,B as r,q as o,c0 as p,l as z}from"./app-1a9c0d54.js";import{g as j}from"./get-initials-d1c6cec7.js";import{C as w}from"./card-bottom-50d2e921.js";import{H as f}from"./Heart-a56943bc.js";const F=g=>{const{company:s,...x}=g,[y,m]=c.useState(!1),v=c.useCallback(()=>{m(!0)},[]),b=c.useCallback(()=>{m(!1)},[]);return e(C,{...x,style:{marginTop:30},children:a(k,{children:[a(l,{alignItems:"center",direction:"row",flexWrap:"wrap",justifyContent:"space-between",sx:{px:2,py:1.5},children:[a(l,{alignItems:"flex-start",spacing:2,direction:{xs:"column",sm:"row"},children:[e(N,{component:t,href:i.dashboard.jobs.companies.details,src:s.logo,sx:{width:74,height:74},children:j(s.name)}),a("div",{children:[e(S,{color:"#2970FF",component:t,href:i.dashboard.jobs.companies.details,variant:"h6",style:{fontSize:18},children:s.name}),e("div",{className:"verified-image"}),e(d,{sx:{color:"text.primary"},style:{fontSize:14},children:s.shortDescription}),e(d,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),e(d,{color:"primary",variant:"overline",style:{fontSize:10},children:"This is my location"})]}),e("div",{className:"custom-reach",children:a(h,{container:!0,children:[a(h,{item:!0,sx:{color:"#2970FF",fontSize:"11px",fontWeight:300,pl:1,pr:1,pt:.5,pb:.5},children:[e("div",{children:"Reach"}),e("div",{style:{fontSize:"16px",fontWeight:700},children:"500K"})]}),e(h,{item:!0,style:{display:"flex",alignItems:"center",margin:"0 auto"},children:e("div",{className:"reach-arrow"})})]})})]}),e(l,{alignItems:"center",direction:"row",className:"right-panel",spacing:2,children:y?a(n,{children:[e(r,{onClick:b,className:"right-btn",startIcon:e(o,{sx:{transform:"scale(1.8)",color:"error.main","& path":{fill:u=>u.palette.error.main,fillOpacity:1}},children:e(f,{})})}),e(r,{sx:{color:"text.primary"},size:"small",className:"right-btn",startIcon:e(n,{children:e("img",{src:"/assets/icons/icon-profile.svg"})}),variant:"outlined",children:"View Profile"}),e(r,{component:t,href:i.dashboard.chat,size:"small",className:"right-btn",startIcon:e(o,{children:e(p,{})}),variant:"contained",children:"Send Message"})]}):a(n,{children:[e(r,{onClick:v,className:"right-btn",startIcon:e(o,{sx:{transform:"scale(1.8)"},children:e(f,{})})}),e(r,{size:"small",className:"right-btn",startIcon:e(n,{children:e("img",{src:"/assets/icons/icon-profile.svg"})}),variant:"outlined",children:"View Profile"}),e(r,{component:t,href:i.dashboard.chat,size:"small",className:"right-btn",startIcon:e(o,{children:e(p,{})}),variant:"contained",children:"Send Message"})]})})]}),e(z,{sx:{mt:2},children:e(w,{jobs:s.jobs})})]})})};F.propTypes={company:I.object.isRequired};export{F as I};
