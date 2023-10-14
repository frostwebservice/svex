import{v as R,bF as Y,j as t,C as J,d as e,e as T,a_ as P,a$ as l,b4 as d,b0 as u,L as g,P as p,f as k,k as m,l as w,r as s,F as S,aN as G,bj as D,bk as Q,aT as Z,w as ee,o as te,cx as ae,c as ie,S as re,aM as se,E as ne,B as v,q as y,R as A,p as E,c0 as $,D as oe,u as L}from"./app-2f9702e8.js";import{H as C}from"./Share07-58eaf371.js";import{s as F}from"./index-7b3844a1.js";import"./profile-baab3395.js";import"./social-post-card-348923bf.js";import{C as I}from"./CardHeader-e27623d1.js";import{G as N}from"./Grid-953fee9a.js";import"./deep-copy-ee95be26.js";import"./company-jobs-a2ba6003.js";import"./index-e1b46852.js";import"./Users01-25c0e419.js";import"./get-initials-d1c6cec7.js";import"./Clock-c033adc1.js";import"./index-54020ae4.js";import"./FaceSmile-6662e00b.js";import"./Link01-8473e378.js";import"./Attachment01-beacd9c4.js";import"./Plus-7b1e3315.js";import"./Image01-43ad9429.js";import"./use-mocked-user-2f7e8148.js";import"./CardMedia-6c28f2b4.js";const ce=r=>{Y(n=>n.breakpoints.up("sm"));const{socialinfo:a}=r;return t(J,{style:{borderRadius:0,boxShadow:"none",borderLeft:"0.5px solid #F2F4F7",paddingLeft:60,paddingRight:0},children:[e(I,{title:"Niche",className:"head-font"}),e(T,{style:{padding:0},children:a&&a.category_niche?t("div",{className:"profile-niche",children:[" ",a.category_niche]},a.category_niche):""}),e(I,{title:"Social media links",className:"head-font"}),e(T,{children:t(P,{disablePadding:!0,children:[a?t(l,{disableGutters:!0,divider:!0,children:[e(d,{className:"social-icons",children:e("div",{className:"facebook-icon"})}),e(u,{primary:e(g,{color:"text.primary",component:"a",target:"_blank",sx:{cursor:"pointer"},variant:"caption",className:"social-list-font",href:"https://www.facebook.com/"+a.username,children:"www.facebook.com/"+a.username})})]}):"",a?t(l,{disableGutters:!0,divider:!0,children:[e(d,{className:"social-icons",children:e("div",{className:"instagram-icon"})}),e(u,{primary:e(g,{color:"text.primary",component:"a",target:"_blank",sx:{cursor:"pointer"},variant:"caption",className:"social-list-font",href:"https://www.instagram.com/"+a.username,children:"www.instagram.com/"+a.username})})]}):"",a?t(l,{disableGutters:!0,divider:!0,children:[e(d,{className:"social-icons",children:e("div",{className:"tiktok-icon"})}),e(u,{primary:e(g,{color:"text.primary",component:"a",target:"_blank",sx:{cursor:"pointer"},variant:"caption",className:"social-list-font",href:"https://www.tiktok.com/"+a.username,children:"www.tiktok.com/"+a.username})})]}):"",a?t(l,{disableGutters:!0,divider:!0,children:[e(d,{className:"social-icons",children:e("div",{className:"youtube-icon"})}),e(u,{primary:e(g,{color:"text.primary",component:"a",target:"_blank",sx:{cursor:"pointer"},variant:"caption",className:"social-list-font",href:"https://www.youtube.com/"+a.username,children:"www.youtube.com/"+a.username})})]}):"",a?t(l,{disableGutters:!0,divider:!0,children:[e(d,{className:"social-icons",children:e("div",{className:"twitter-icon"})}),e(u,{primary:e(g,{color:"text.primary",component:"a",target:"_blank",sx:{cursor:"pointer"},variant:"caption",className:"social-list-font",href:"https://www.twitter.com/"+a.username,children:"www.twitter.com/"+a.username})})]}):"",a?t(l,{disableGutters:!0,divider:!0,children:[e(d,{className:"social-icons",children:e("div",{className:"pinterest-icon"})}),e(u,{primary:e(g,{color:"text.primary",component:"a",target:"_blank",sx:{cursor:"pointer"},variant:"caption",className:"social-list-font",href:"https://www.pinterest.com/"+a.username,children:"www.pinterest.com/"+a.username})})]}):""]})})]})},le=r=>({socialinfo:r.profile.socialinfo}),de=R(le)(ce),W=r=>{const{currentCity:a,currentJobCompany:n,currentJobTitle:h,email:c,originCity:o,socialinfo:i,previousJobCompany:_,previousJobTitle:b,profileProgress:x,quote:z,...q}=r;return e(k,{spacing:3,...q,children:t(J,{style:{borderRadius:0,boxShadow:"none"},children:[e(I,{title:"Biography",className:"head-font"}),t(T,{style:{paddingTop:2},children:[e(m,{color:"text.secondary",sx:{mb:2},variant:"subtitle2",className:"about-content",style:{borderBottom:"0.5px solid #F2F4F7",paddingBottom:50},children:i?i.biography:""}),t(N,{container:!0,spacing:3,children:[e(N,{item:!0,xs:12,md:6,sm:6,children:t(P,{disablePadding:!0,children:[t(l,{disableGutters:!0,divider:!0,children:[e(d,{children:e("div",{className:"man-icon"})}),e(u,{disableTypography:!0,primary:e(m,{variant:"subtitle2",className:"about-list-font",children:i?i.full_name:""})})]}),t(l,{disableGutters:!0,divider:!0,children:[e(d,{children:e("div",{className:"homepage-icon"})}),e(u,{disableTypography:!0,primary:e(g,{color:"text.primary",component:"a",target:"_blank",sx:{cursor:"pointer"},variant:"caption",className:"social-list-font",href:i?i.external_url:"",children:i?i.external_url.replace(/(^\w+:|^)\/\//,""):""})})]}),t(l,{disableGutters:!0,divider:!0,children:[e(d,{children:e("div",{className:"phone-icon"})}),e(u,{disableTypography:!0,primary:e(m,{variant:"subtitle2",className:"about-list-font",children:i?"+"+i.phone_country_code+i.phone_number:""})})]}),t(l,{disableGutters:!0,divider:!0,children:[e(d,{children:e("div",{className:"home-icon"})}),e(u,{disableTypography:!0,primary:t(m,{variant:"subtitle2",className:"about-list-font",children:[i?i.city:""," "]})})]})]})}),e(N,{item:!0,xs:12,md:6,sm:6,children:t(P,{disablePadding:!0,children:[t(l,{disableGutters:!0,divider:!0,children:[e(d,{children:e("div",{className:"global-icon"})}),e(u,{disableTypography:!0,primary:e(m,{variant:"subtitle2",className:"about-list-font",children:i?"Language: "+i.language.charAt(0).toUpperCase()+i.language.slice(1):""})})]}),t(l,{disableGutters:!0,divider:!0,children:[e(d,{children:e("div",{className:"male-icon"})}),e(u,{disableTypography:!0,primary:e(m,{variant:"subtitle2",className:"about-list-font",children:i?"Gender: "+i.gender.charAt(0).toUpperCase()+i.gender.slice(1):""})})]}),t(l,{disableGutters:!0,divider:!0,children:[e(d,{children:e("div",{className:"age-icon"})}),e(u,{disableTypography:!0,primary:e(m,{variant:"subtitle2",className:"about-list-font",children:i?"Age: "+i.age:""})})]}),t(l,{disableGutters:!0,divider:!0,children:[e(d,{children:e("div",{className:"ethnicity-icon"})}),e(u,{disableTypography:!0,primary:e(m,{variant:"subtitle2",className:"about-list-font",children:i?"Ethnicity: "+i.ethnicity:""})})]})]})})]})]})]})})};W.propTypes={currentCity:p.string.isRequired,currentJobCompany:p.string.isRequired,currentJobTitle:p.string.isRequired,email:p.string.isRequired,originCity:p.string.isRequired,previousJobCompany:p.string.isRequired,previousJobTitle:p.string.isRequired,profileProgress:p.number.isRequired,quote:p.string.isRequired};const ue=r=>({socialinfo:r.profile.socialinfo}),me=R(ue)(W),pe=r=>{const{socialinfo:a,...n}=r;return e(k,{spacing:3,...n,children:e(N,{container:!0,spacing:3,children:e(N,{item:!0,xs:12,md:4,sm:4,children:e(J,{className:"stat-card",children:e(T,{style:{paddingTop:20},children:e(P,{sx:{mt:2},children:t(l,{disableGutters:!0,children:[e(d,{sx:{pr:2},children:e(w,{sx:{alignItems:"center",display:"flex",height:100,justifyContent:"center",overflow:"hidden",width:100,"& img":{width:"100%",height:"auto"}},children:e("img",{alt:"ss",src:"/assets/stats/group.png"})})}),e(u,{primary:e(m,{sx:{fontWeight:"fontWeightBold",fontSize:"16px"},variant:"subtitle2",children:"Followers Count"}),secondary:e(m,{color:"text.secondary",sx:{mt:1},variant:"body1",children:"fsdfsafd"})})]})})})})})})})},H=r=>{const a=s.useCallback((b,x)=>{h(x)},[]),[n,h]=s.useState("instagramStatistics"),{posts:c=[],profile:o,...i}=r;s.useState("instagram");const _=[{label:"Instagram Statistics",value:"instagramStatistics"}];return t(S,{children:[e("div",{...i,style:{borderBottom:"1px solid #F2F4F7"},children:t(G,{container:!0,children:[e(G,{lg:7,xs:12,children:e(me,{currentCity:o.currentCity,currentJobCompany:o.currentJobCompany,currentJobTitle:o.currentJobTitle,email:o.email,originCity:o.originCity,previousJobCompany:o.previousJobCompany,previousJobTitle:o.previousJobTitle,profileProgress:o.profileProgress,quote:o.quote})}),e(G,{lg:5,xs:12,children:e(k,{spacing:3,children:e(de,{})})})]})}),e(I,{title:"Stats",className:"head-font second-head"}),e(D,{indicatorColor:"primary",onChange:a,scrollButtons:"auto",textColor:"primary",value:n,variant:"scrollable",children:_.map(b=>e(Q,{className:"social-font",label:b.label,value:b.value},b.value))}),e(w,{children:n==="instagramStatistics"&&e(pe,{stat:"instagram"})})]})};H.propTypes={posts:p.array,profile:p.object.isRequired};const he=[{label:"Overview",value:"infoverview"}],be=()=>{const r=L(),[a,n]=s.useState(null),h=s.useCallback(async()=>{try{const c=await F.getProfile();r()&&n(c)}catch(c){console.error(c)}},[r]);return s.useEffect(()=>{h()},[]),a},fe=()=>{const r=L(),[a,n]=s.useState([]),h=s.useCallback(async()=>{try{const c=await F.getPosts();r()&&n(c)}catch(c){console.error(c)}},[r]);return s.useEffect(()=>{h()},[]),a},ge=(r="")=>{const[a,n]=s.useState([]),h=L(),c=s.useCallback(async()=>{const o=await F.getConnections();h()&&n(o)},[h]);return s.useEffect(()=>{c()},[r]),a.filter(o=>{var i;return(i=o.name)==null?void 0:i.toLowerCase().includes(r)})},ve=r=>{const a=Z(),{socialinfo:n,userinfo:h}=r,c=be(),[o,i]=s.useState("infoverview"),[_,b]=s.useState("not_connected"),x=fe(),[z,q]=s.useState("");ge(z);const[O,B]=s.useState(!1),M=ee();te(),s.useEffect(()=>{M(ae({infname:window.location.pathname.split("/")[4],socialtype:window.location.pathname.split("/")[3]}))},[M]);const j=s.useCallback(()=>{},[]),U=s.useCallback(()=>{B(!0)},[]),V=s.useCallback(()=>{B(!1)},[]);ie(),s.useCallback(()=>{b("pending")},[]),s.useCallback(()=>{b("not_connected")},[]);const K=s.useCallback((f,X)=>{i(X)},[]);return s.useCallback(f=>{q(f.target.value)},[]),c?t(S,{children:[e(re,{title:"Dashboard: Social Profile"}),e(w,{component:"main",sx:{flexGrow:1,py:8},children:t(se,{maxWidth:a.stretch?!1:"xl",children:[t("div",{children:[e(w,{style:{backgroundImage:`url(${c.cover})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative","&:hover":{"& button":{visibility:"visible"}}}}),t(k,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[t(k,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[e(ne,{src:c.avatar,sx:{height:140,width:140}}),t("div",{className:"brand-info",children:[e(m,{color:"primary",variant:"h6",style:{fontSize:22},children:n?n.username:""}),e(m,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:"Social Media Influencer"}),e(m,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),e(m,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:n?n.city+", "+n.Country:""})]})]}),e(w,{sx:{flexGrow:1}}),e(k,{alignItems:"center",direction:"row",spacing:2,className:"button-bar",sx:{display:{md:"block"}},children:O?t(S,{children:[e(v,{onClick:V,className:"fav-btn=alone",startIcon:e(y,{sx:{color:"error.main","& path":{fill:f=>f.palette.error.main,fillOpacity:1}},children:e(C,{})})}),e(v,{onClick:j,size:"small",className:"fav-btn",startIcon:e(y,{children:e(C,{})}),variant:"outlined",children:"Invite To Project"}),e(v,{component:A,href:E.dashboard.chat,size:"small",className:"social-btn",startIcon:e(y,{children:e($,{})}),variant:"contained",children:"Send Message"})]}):t(S,{children:[e(v,{onClick:U,className:"fav-btn-alone",startIcon:e(y,{children:e(C,{})})}),e(v,{onClick:j,size:"small",className:"fav-btn",startIcon:e(y,{children:e(C,{})}),variant:"outlined",children:"Invite To Project"}),e(v,{component:A,href:E.dashboard.chat,size:"small",className:"social-btn",startIcon:e(y,{children:e($,{})}),variant:"contained",children:"Send Message"})]})})]})]}),e("div",{className:"quick-link-bar",children:t("div",{className:"right-quick",children:[e("div",{className:"quick-font",children:"Quick links"}),t("div",{className:"quick-links",children:[e("a",{className:" homepage-icon",href:n?n.external_url:"",target:"_blank"}),e("a",{className:"instagram-icon quick-link",href:"https://www.instagram.com",target:"_blank"}),e("a",{className:"tiktok-icon quick-link",href:"https://www.tiktok.com",target:"_blank"}),e("a",{className:"youtube-icon quick-link",href:"https://www.youtube.com",target:"_blank"}),e("a",{className:"twitter-icon quick-link",href:"https://www.twitter.com",target:"_blank"}),e("a",{className:"pinterest-icon quick-link",href:"https://www.pinterest",target:"_blank"})]})]})}),e(D,{indicatorColor:"primary",onChange:K,scrollButtons:"auto",sx:{mt:5},textColor:"primary",value:o,variant:"scrollable",className:"tab-panel",children:he.map(f=>e(Q,{className:"social-font",label:f.label,value:f.value},f.value))}),e(oe,{}),e(w,{children:o==="infoverview"&&e(H,{posts:x,profile:c})})]})})]}):null},ye=r=>({socialinfo:r.profile.socialinfo,userinfo:r.profile.userinfo}),Ee=R(ye)(ve);export{Ee as default};
