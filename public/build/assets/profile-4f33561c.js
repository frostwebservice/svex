import{v as H,cq as J,aT as K,r as a,w as $,o as V,cw as q,c as X,j as n,F as w,d as t,S as Y,l as m,aM as Z,B as u,q as p,f as h,aG as tt,bs as et,E as at,k as b,R as P,p as _,c0 as z,bj as ot,bk as nt,D as it,u as v,x as st}from"./app-4b8db575.js";import{I as rt}from"./Image01-47ec258e.js";import{H as T}from"./Heart-d812ef6d.js";import{E as ct}from"./Edit02-2c1c2fa7.js";import{F as lt}from"./file-uploader-6c3e58c0.js";import{C as dt}from"./Camera01-c069f2c6.js";import{s as y}from"./index-80a0e6d5.js";import{S as mt}from"./profile-f52f2943.js";import{b as E,S as pt}from"./social-timeline-4044f187.js";import"./file-dropzone-32704490.js";import"./tslib.es6-af7906ce.js";import"./Upload01-9747ac8e.js";import"./bytes-to-size-706bbf81.js";import"./deep-copy-ee95be26.js";import"./social-post-card-3b808150.js";import"./Clock-8257db91.js";import"./Share07-e07d79e7.js";import"./index-e2fed981.js";import"./FaceSmile-eaf14554.js";import"./Link01-a4a24ebe.js";import"./Attachment01-e1f91818.js";import"./Plus-6964687b.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardHeader-a8591f6b.js";import"./CardMedia-c0d6ab1d.js";import"./company-jobs-53b56a96.js";import"./index-92e4f261.js";import"./Users01-b896b251.js";import"./social-post-add-dd6fe814.js";import"./jsx-runtime_commonjs-proxy-19d8a9a8.js";const ut=[{label:"Overview",value:"timeline"},{label:"Jobs Posted",value:"connections"}],ht=()=>{const o=v(),[r,d]=a.useState(null),l=a.useCallback(async()=>{try{const i=await y.getProfile();o()&&d(i)}catch(i){console.error(i)}},[o]);return a.useEffect(()=>{l()},[]),r},kt=()=>{const o=v(),[r,d]=a.useState([]),l=a.useCallback(async()=>{try{const i=await y.getPosts();o()&&d(i)}catch(i){console.error(i)}},[o]);return a.useEffect(()=>{l()},[]),r},bt=(o="")=>{const[r,d]=a.useState([]),l=v(),i=a.useCallback(async()=>{const e=await y.getConnections();l()&&d(e)},[l]);return a.useEffect(()=>{i()},[o]),r.filter(e=>{var s;return(s=e.name)==null?void 0:s.toLowerCase().includes(o)})},ft=o=>{const r=J(),d=K(),[l,i]=a.useState("cover"),{brandinfo:e,userinfo:s}=o,f=ht(),[g,D]=a.useState("timeline"),[wt,C]=a.useState("not_connected"),F=kt(),[x,M]=a.useState(""),B=bt(x),[G,N]=a.useState(!1),k=$(),R=V();a.useEffect(()=>{k(q({brandID:window.location.pathname.split("/")[2].split("-")[2]}))},[k]);const[S,j]=a.useState(""),L=()=>{k(q({brandID:window.location.pathname.split("/")[2].split("-")[2]})),k(st({email:JSON.parse(localStorage.getItem("email"))})),j(S+"a")},O=a.useCallback(()=>{N(!0)},[]),Q=a.useCallback(()=>{N(!1)},[]);X(),a.useCallback(()=>{C("pending")},[]),a.useCallback(()=>{C("not_connected")},[]);const U=a.useCallback((c,A)=>{D(A)},[]),W=a.useCallback(c=>{M(c.target.value)},[]);if(!f)return null;const I=()=>{i("avatar"),r.handleOpen()};return n(w,{children:[t(Y,{title:"Dashboard: Social Profile"}),t(m,{component:"main",sx:{flexGrow:1,py:8},children:n(Z,{maxWidth:d.stretch?!1:"xl",children:[n("div",{children:[t(m,{style:{backgroundImage:`url(${e.cover_photo?e.cover_photo:f.cover})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative"},children:s&&e&&s.id==e.id?t(u,{onClick:()=>{i("cover"),r.handleOpen()},startIcon:t(p,{children:t(rt,{})}),sx:{backgroundColor:E[900],bottom:{lg:24,xs:"auto"},color:"common.white",position:"absolute",right:24,top:{lg:"auto",xs:24},"&:hover":{backgroundColor:E[900]}},variant:"contained",children:"Change Cover"}):""},S),n(h,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[n(h,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[n(m,{sx:{borderRadius:"50%",height:140,width:140,position:"relative"},children:[t(m,{onClick:I,sx:{alignItems:"center",backgroundColor:c=>tt(c.palette.neutral[700],.5),borderRadius:"50%",color:"common.white",cursor:"pointer",display:"flex",height:"23%",width:"23%",justifyContent:"center",right:"5px",bottom:"15px",opacity:.7,position:"absolute",zIndex:1,"&:hover":{opacity:1}},children:t(h,{alignItems:"center",direction:"row",spacing:1,children:t(p,{color:"inherit",children:t(dt,{})})})}),t(m,{component:et,sx:{alignItems:"center",display:"flex",borderWidth:2,borderStyle:"solid",borderColor:"divider",height:140,width:140,borderRadius:"50%"},children:t(at,{onClick:I,src:s.avatar?s.avatar:`https://ui-avatars.com/api/?name=${s.companyname}&background=2970FF&color=fff&rounded=true`,sx:{height:130,width:130},style:{cursor:"pointer"}})})]}),n("div",{className:"brand-info",children:[t(b,{color:"primary",variant:"h6",style:{fontSize:22},children:e?e.fullname:""}),n(b,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:["Established since ",e?e.companyfounded:""]}),t(b,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),t(b,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:e?e.companylocation:""})]})]}),t(m,{sx:{flexGrow:1}}),s&&e&&s.id===e.id?t(h,{alignItems:"center",direction:"row",spacing:2,className:"button-bar",sx:{display:{md:"block"}},children:t(u,{size:"small",className:"social-btn",startIcon:t(p,{children:t(ct,{})}),onClick:()=>{R("/profile/edit/"+s.id)},variant:"contained",children:"Edit Profile"})}):t(h,{alignItems:"center",direction:"row",spacing:2,className:"button-bar",sx:{display:{md:"block"}},children:G?n(w,{children:[t(u,{onClick:Q,size:"small",className:"fav-btn",startIcon:t(p,{sx:{color:"error.main","& path":{fill:c=>c.palette.error.main,fillOpacity:1}},children:t(T,{})}),variant:"outlined",children:"Favorite"}),t(u,{component:P,href:_.dashboard.chat,size:"small",className:"social-btn",startIcon:t(p,{children:t(z,{})}),variant:"contained",children:"Send Message"})]}):n(w,{children:[t(u,{onClick:O,size:"small",className:"fav-btn",startIcon:t(p,{children:t(T,{})}),variant:"outlined",children:"Favorite"}),t(u,{component:P,href:_.dashboard.chat,size:"small",className:"social-btn",startIcon:t(p,{children:t(z,{})}),variant:"contained",children:"Send Message"})]})})]})]}),t("div",{className:"quick-link-bar",children:n("div",{className:"right-quick",children:[t("div",{className:"quick-font",children:"Quick links"}),n("div",{className:"quick-links",children:[e&&e.facebook?t("a",{className:"facebook-icon quick-link",href:"https://"+(e?e.facebook.split("/").length>1?e.facebook:"www.facebook.com/"+e.facebook:""),target:"_blank"}):t("a",{className:"facebook-icon quick-link",href:"https://www.facebook.com",target:"_blank"}),e&&e.instagram?t("a",{className:"instagram-icon quick-link",href:"https://"+(e?e.instagram.split("/").length>1?e.instagram:"www.instagram.com/"+e.instagram:""),target:"_blank"}):t("a",{className:"instagram-icon quick-link",href:"https://www.instagram.com",target:"_blank"}),e&&e.tiktok?t("a",{className:"tiktok-icon quick-link",href:"https://"+(e?e.tiktok.split("/").length>1?e.tiktok:"www.tiktok.com/"+e.tiktok:""),target:"_blank"}):t("a",{className:"tiktok-icon quick-link",href:"https://www.tiktok.com",target:"_blank"}),e&&e.youtube?t("a",{className:"youtube-icon quick-link",href:"https://"+(e?e.youtube.split("/").length>1?e.youtube:"www.youtube.com/@"+e.youtube:""),target:"_blank"}):t("a",{className:"youtube-icon quick-link",href:"https://www.youtube.com",target:"_blank"}),e&&e.twitter?t("a",{a:!0,className:"twitter-icon quick-link",href:"https://"+(e?e.twitter.split("/").length>1?e.twitter:"www.twitter.com/"+e.twitter:""),target:"_blank"}):t("a",{className:"twitter-icon quick-link",href:"https://www.twitter.com",target:"_blank"}),e&&e.pinterest?t("a",{className:"pinterest-icon quick-link",href:"https://"+(e?e.pinterest.split("/").length>1?e.pinterest:"www.pinterest.com/"+e.pinterest:""),target:"_blank"}):t("a",{className:"pinterest-icon quick-link",href:"https://www.pinterest",target:"_blank"})]})]})}),t(ot,{indicatorColor:"primary",onChange:U,scrollButtons:"auto",sx:{mt:5},textColor:"primary",value:g,variant:"scrollable",className:"tab-panel",children:ut.map(c=>t(nt,{className:"social-font",label:c.label,value:c.value},c.value))}),t(it,{}),n(m,{children:[g==="timeline"&&t(pt,{posts:F,profile:f}),g==="connections"&&t(mt,{connections:B,onQueryChange:W,query:x})]})]})}),t(lt,{onClose:r.handleClose,open:r.open,onUpgrade:L,kind:l})]})},gt=o=>({brandinfo:o.profile.brandinfo,userinfo:o.profile.userinfo}),Xt=H(gt)(ft);export{Xt as default};