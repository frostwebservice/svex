import{j as t,K as B,d as r,P as W,v as J,w as P,C as f,e as _,f as o,E as D,R as g,L as O,k as n,q as m,bo as A,F as s,l as R,D as u,B as v,aO as F,cD as N}from"./app-28409791.js";import{U}from"./Users01-7f65cb24.js";import{g as V}from"./get-initials-d1c6cec7.js";var q=function(i){return t("svg",B({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},i,{children:[r("path",{fill:"#fff",fillOpacity:.01,d:"M9.763 3.8239a3.449 3.449 0 0 1-1.9626.813C6.112 4.7715 4.7716 6.112 4.6368 7.8003a3.449 3.449 0 0 1-.813 1.9626c-1.0984 1.2891-1.0984 3.1849 0 4.474a3.449 3.449 0 0 1 .813 1.9626c.1348 1.6882 1.4753 3.0289 3.1636 3.1636a3.4488 3.4488 0 0 1 1.9626.8129c1.2891 1.0985 3.1849 1.0985 4.474 0a3.449 3.449 0 0 1 1.9626-.8129c1.6882-.1347 3.0289-1.4754 3.1636-3.1636a3.449 3.449 0 0 1 .8129-1.9626c1.0985-1.2891 1.0985-3.1849 0-4.474a3.4488 3.4488 0 0 1-.8129-1.9626c-.1347-1.6883-1.4754-3.0288-3.1636-3.1636a3.449 3.449 0 0 1-1.9626-.813c-1.2891-1.0984-3.1849-1.0984-4.474 0Z"}),r("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m9.3 12 1.8 1.8 4.05-4.05M7.8004 4.6368a3.449 3.449 0 0 0 1.9626-.813c1.2891-1.0984 3.1849-1.0984 4.474 0a3.449 3.449 0 0 0 1.9626.813c1.6882.1348 3.0289 1.4753 3.1636 3.1636a3.4488 3.4488 0 0 0 .8129 1.9626c1.0985 1.2891 1.0985 3.1849 0 4.474a3.449 3.449 0 0 0-.8129 1.9626c-.1347 1.6882-1.4754 3.0289-3.1636 3.1636a3.449 3.449 0 0 0-1.9626.8129c-1.2891 1.0985-3.1849 1.0985-4.474 0a3.4488 3.4488 0 0 0-1.9626-.8129c-1.6883-.1347-3.0288-1.4754-3.1636-3.1636a3.449 3.449 0 0 0-.813-1.9626c-1.0984-1.2891-1.0984-3.1849 0-4.474a3.449 3.449 0 0 0 .813-1.9626c.1348-1.6883 1.4753-3.0288 3.1636-3.1636Z"})]}))};const x=h=>{const{job:i,active:Z,openBar:w,userinfo:a,invite:S=!1,...p}=h,C=P(),L=JSON.parse(localStorage.getItem("email"));console.log(a);const k=e=>{axios.post("/api/update_jobactivity",{jobID:e.id,isActive:e.is_active}).then(l=>{C(N(L,1))}).catch(l=>{})},I=e=>e.barter?e.barter:e.revenue?e.revenue:e.custom?e.custom:e.paid=="maxbudget"?"Max Budget":e.paid=="flexible"?"Flexible":"Budget Range",M=e=>e.barter?"Barter":e.revenue?"Revenue":e.custom?"Custom":"Paid",T=e=>{var y;let l=e==null?void 0:e.split(","),c="";for(var d=0;d<(l==null?void 0:l.length);d++)c+=((y=l[d].charAt(0))==null?void 0:y.toUpperCase())+l[d].slice(1),d!=l.length-1&&(c+=", ");return c},b=e=>{var l=Math.floor((new Date().getTime()-new Date(e).getTime())/1e3),c=l/31536e3;return c>1?Math.floor(c)+" years":(c=l/2592e3,c>1?Math.floor(c)+" months":(c=l/86400,c>1?Math.floor(c)+" days":(c=l/3600,c>1?Math.floor(c)+" hours":(c=l/60,c>1?Math.floor(c)+" minutes":Math.floor(l)+" seconds"))))},z=e=>t(s,{children:[e.ig?t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["Instagram • ",e.ig]}):r(s,{}),e.tt?t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["Tiktok • ",e.tt]}):r(s,{}),e.yt?t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["Youtube • ",e.yt]}):r(s,{}),e.tw?t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["Twitter • ",e.tw]}):r(s,{}),e.pt?t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["Pinterest • ",e.pt]}):r(s,{}),e.li?t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["LinkedIn • ",e.li]}):r(s,{}),e.bw?t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["Blog/Website • ",e.bw]}):r(s,{})]});return r(f,{...p,children:t(_,{children:[t(o,{alignItems:"flex-start",justifyContent:"space-between",spacing:2,direction:{xs:"column",sm:"row"},children:[t(o,{direction:"row",spacing:3,children:[r(D,{component:g,href:"/profile/"+(a==null?void 0:a.firstname)+"-"+(a==null?void 0:a.lastname)+"-"+(a==null?void 0:a.id),src:i.avatar,target:"_target",variant:"circle",children:V(i.firstname)}),t("div",{children:[r(O,{color:"text.primary",component:g,target:"_target",href:"/profile/"+(a==null?void 0:a.firstname)+"-"+(a==null?void 0:a.lastname)+"-"+(a==null?void 0:a.id),variant:"h6",children:i.fullname}),t(n,{variant:"body2",children:["Established since ",i.companyfounded]}),t(o,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,sx:{mt:1},children:[t(o,{alignItems:"center",spacing:1,direction:"row",children:[r(m,{color:"action",children:r(U,{})}),r(n,{color:"text.secondary",noWrap:!0,variant:"overline",children:"25 - 75"})]}),i.verification_token&&t(o,{alignItems:"center",direction:"row",spacing:.5,children:[r(m,{sx:{color:"background.paper","& path":{fill:e=>e.palette.success.main,fillOpacity:1}},children:r(q,{})}),r(n,{color:"success",noWrap:!0,variant:"overline",children:"Verified"})]})]})]})]}),w?t(o,{direction:"row",children:[r(n,{variant:"text.secondary",sx:{fontSize:16,pt:.8},children:i.is_active==1?"Open":"Close"}),r(A,{checked:!0,onChange:()=>k(i)})]}):r(s,{})]}),t(R,{sx:{mt:2},children:[r(f,{variant:"outlined",...p,children:t(o,{divider:r(u,{}),children:[t(o,{alignItems:"flex-start",direction:"row",flexWrap:"wrap",justifyContent:"space-between",sx:{px:2,py:1.5},children:[t(n,{variant:"subtitle1",sx:{fontSize:16},children:["Job Title: ",i.title]}),t(o,{alignItems:"center",direction:"row",spacing:2,children:[t(n,{color:"text.secondary",variant:"caption",style:{fontSize:12},children:[b(i.created_at)," ago"]}),r(v,{size:"small",component:g,href:"/dashboard/jobs/manage/"+i.id,style:{fontSize:14},children:"Manage"})]})]}),t(n,{variant:"inherit",sx:{fontSize:14,px:2},children:["Job Brief: ",i.brief]})]})}),r(f,{sx:{mt:1},variant:"outlined",...p,children:t(o,{divider:r(u,{}),children:[r(o,{alignItems:"center",direction:"row",flexWrap:"wrap",justifyContent:"space-between",sx:{px:2,py:1.5},children:t("div",{children:[t(n,{color:"text.secondary",variant:"caption",children:["Niche • ",i.niche]}),t(n,{color:"text.secondary",variant:"caption",style:{marginLeft:40},children:["Social media types • ",T(i.socialtypes)]}),z(i),t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["Budget • ",I(i)]}),t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["Job type • ",i.shoutoutonly=="shoutoutonly"?"Shoutout Only":"Content Creation & Shoutouts"]}),t(n,{color:"text.secondary",style:{marginLeft:40},variant:"caption",children:["Payment type • ",M(i)]})]})}),t(o,{justifyContent:"space-between",direction:{xs:"column",sm:"row"},sx:{px:2,py:1.5},children:[t(o,{alignItems:"center",direction:"row",spacing:3,children:[t(o,{children:[r("div",{style:{fontWeight:700,fontSize:14},children:"25+"}),r(n,{color:"text.secondary",variant:"caption",children:"Number of Applicants"})]}),t(o,{sx:{ml:5},children:[r("div",{style:{fontWeight:700,fontSize:14},children:"Actively Hiring"}),r(n,{color:"text.secondary",variant:"caption",children:"Status"})]})]}),S?r(o,{alignItems:"center",direction:"row",spacing:3,children:t(v,{size:"small",variant:"contained",style:{fontSize:14},children:["Invite On This Project",r(m,{fontSize:"2",children:r(F,{})})]})}):r(s,{})]})]})})]})]})})};x.propTypes={job:W.object.isRequired};const E=h=>({userinfo:h.profile.userinfo}),$=J(E)(x);export{$ as J};