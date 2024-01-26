import{v as H,aT as U,r as s,w as $,o as K,cM as V,c as Y,j as l,F as v,d as e,S as X,l as w,aM as Z,f as T,bs as ee,E as te,k as x,n as ae,B as f,q as _,c0 as q,bj as se,bk as ne,D as ie,u as M}from"./app-f6d0c162.js";import{H as F}from"./Heart-9c6378e0.js";import{s as P}from"./index-1413a578.js";import{I as oe}from"./inf-overview-21dabaa5.js";/* empty css                */import{M as re}from"./mail-composer-d9f457ec.js";import{G as h}from"./Grid-dfb7e5dc.js";import"./deep-copy-ee95be26.js";import"./social-post-card-78419f3c.js";import"./Clock-5b06e57e.js";import"./Share07-8215f443.js";import"./index-35b123e7.js";import"./FaceSmile-590c1d1a.js";import"./Link01-944216e9.js";import"./Attachment01-7a141521.js";import"./Plus-bd19c718.js";import"./Image01-a6b007d7.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardHeader-4f66bf42.js";import"./CardMedia-8a3be4e1.js";import"./overview-tips-02cb785e.js";import"./CardActions-a4e578aa.js";import"./LastPage-6ea73a7f.js";import"./severity-pill-9b03a4b3.js";import"./chart-bbf4f4bd.js";import"./index-d3ebffc3.js";import"./index-6dce0fa3.js";import"./index-5e45aa3d.js";import"./quill-editor-7fc4a32d.js";import"./isEqual-e3290c3c.js";const le=()=>{const n={isFullScreen:!1,isOpen:!1,message:"",subject:"",toemail:"",to:""},[o,r]=s.useState(n),t=()=>{r(u=>({...u,isOpen:!0}))},c=s.useCallback(()=>{r(n)},[]),d=s.useCallback(()=>{r(u=>({...u,isFullScreen:!0}))},[]),p=s.useCallback(()=>{r(u=>({...u,isFullScreen:!1}))},[]),N=s.useCallback(u=>{},[]),z=s.useCallback(u=>{r(b=>({...b,subject:u}))},[]),S=s.useCallback(u=>{r(b=>({...b,to:u}))},[]);return{...o,handleClose:c,handleMaximize:d,handleMessageChange:N,handleMinimize:p,handleOpen:t,handleSubjectChange:z,handleToChange:S}},ce=[{label:"Overview",value:"infoverview"}],y=[{divider:1e18,suffix:"E"},{divider:1e15,suffix:"P"},{divider:1e12,suffix:"T"},{divider:1e9,suffix:"G"},{divider:1e6,suffix:"M"},{divider:1e3,suffix:"K"}],g=n=>{for(var o=0;o<y.length;o++)if(n>=y[o].divider)return Number(n/y[o].divider).toFixed(1).toString().replace(".0","")+y[o].suffix;return n.toString()},ue=()=>{const n=M(),[o,r]=s.useState(null),t=s.useCallback(async()=>{try{const c=await P.getProfile();n()&&r(c)}catch(c){console.error(c)}},[n]);return s.useEffect(()=>{t()},[]),o},me=()=>{const n=M(),[o,r]=s.useState([]),t=s.useCallback(async()=>{try{const c=await P.getPosts();n()&&r(c)}catch(c){console.error(c)}},[n]);return s.useEffect(()=>{t()},[]),o},de=(n="")=>{const[o,r]=s.useState([]),t=M(),c=s.useCallback(async()=>{const d=await P.getConnections();t()&&r(d)},[t]);return s.useEffect(()=>{c()},[n]),o.filter(d=>{var p;return(p=d.name)==null?void 0:p.toLowerCase().includes(n)})},fe=n=>{const o=U(),r=JSON.parse(localStorage.getItem("email")),{socialinfo:t,userinfo:c}=n,d=ue(),[p,N]=s.useState("infoverview"),[z,S]=s.useState("not_connected"),u=me(),[b,E]=s.useState("");de(b);const j=$();K();const[C,G]=s.useState(t.basic);let a=t[C];const m=le(),[B,I]=s.useState(!!(a&&a.liked=="1")),R=i=>{G(i)};s.useEffect(()=>{j(V({email:r,infname:window.location.pathname.split("/")[3],socialtype:"total"}))},[j]),s.useEffect(()=>{I(!!(a&&a.liked=="1"))},[a]);const O=s.useCallback(()=>{},[]),W=()=>{I(!0);let i={email:JSON.parse(localStorage.getItem("email")),tab:C,inf_id:a&&a.id?a.id:"",liked:"1"};axios.post("/api/handle_like",i).then(k=>{k.data.status})},D=()=>{I(!1);let i={email:JSON.parse(localStorage.getItem("email")),tab:C,inf_id:a&&a.id?a.id:"",liked:"0"};axios.post("/api/handle_like",i).then(k=>{k.data.status})};Y(),s.useCallback(()=>{S("pending")},[]),s.useCallback(()=>{S("not_connected")},[]);const L=s.useCallback((i,k)=>{N(k)},[]);if(s.useCallback(i=>{E(i.target.value)},[]),!d)return null;const J=()=>{let i=(t&&t.instagram?t.instagram.follower_count:0)+(t&&t.pinterest?t.pinterest.follower_count:0)+(t&&t.tiktok?t.tiktok.follower_count:0)+(t&&t.twitter?t.twitter.follower_count:0)+(t&&t.youtube?t.youtube.follower_count:0);return g(i)},Q=()=>{let i="";return i+="Instagram followers: "+(t&&t.instagram?g(t.instagram.follower_count):0)+`
Tiktok followers: `+(t&&t.tiktok?g(t.tiktok.follower_count):0)+`
Youtube followers: `+(t&&t.youtube?g(t.youtube.follower_count):0)+`
Twitter followers: `+(t&&t.twitter?g(t.twitter.follower_count):0)+`
Pinterest followers: `+(t&&t.pinterest?g(t.pinterest.follower_count):0)+`
`,i},A=()=>C=="tiktok"&&a&&a.external_url=="-"?"":a&&a.external_url?a.external_url:"";return l(v,{children:[e(X,{title:"Dashboard: Social Profile"}),e(w,{component:"main",sx:{flexGrow:1,py:8},children:l(Z,{maxWidth:o.stretch?!1:"xl",children:[l("div",{children:[e(w,{style:{backgroundImage:`url(${d.cover})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative","&:hover":{"& button":{visibility:"visible"}}}}),l(T,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[l(T,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[e(w,{component:ee,sx:{alignItems:"center",display:"flex",borderWidth:2,borderStyle:"solid",borderColor:"divider",height:140,width:140,borderRadius:"50%"},children:e(te,{src:a&&a.profile_pic_url_hd?a.profile_pic_url_hd:`https://ui-avatars.com/api/?name=${a&&a.full_name?a.full_name:""}&background=2970FF&color=fff&rounded=true`,sx:{height:130,width:130}})}),l("div",{className:"brand-info",children:[l(h,{container:!0,children:[l(h,{item:!0,sm:7,xs:12,children:[e(x,{color:"primary",variant:"h6",style:{fontSize:22,wordWrap:"break-word"},children:a?a.username:""}),e(x,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:a?a.full_name:""})]}),e(h,{item:!0,sm:5,xs:12,children:e(ae,{title:e("div",{style:{whiteSpace:"pre-line"},children:Q()}),children:e("div",{className:"custom-reach",children:l(h,{container:!0,children:[l(h,{item:!0,sx:{color:"#2970FF",fontSize:"11px",fontWeight:300,pl:1,pr:1,pt:.5,pb:.5},children:[e("div",{children:"Reach"}),e("div",{style:{fontSize:"16px",fontWeight:700},children:J()})]}),e(h,{item:!0,style:{display:"flex",alignItems:"center",margin:"0 auto"},children:e("div",{className:"reach-arrow"})})]})})})})]}),e(x,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),e(x,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:a?a.city+", "+a.Country:""})]})]}),e(w,{sx:{flexGrow:1}}),e(T,{alignItems:"center",direction:"row",spacing:2,className:"inf-button-bar",sx:{display:{md:"block"}},children:B?l(v,{children:[e(f,{onClick:D,className:"fav-btn=alone",startIcon:e(_,{sx:{transform:"scale(1.8)",color:"error.main","& path":{fill:i=>i.palette.error.main,fillOpacity:1}},children:e(F,{})})}),e(f,{className:"fav-btn-alone",startIcon:e("img",{src:"/assets/stats/users.png"})}),e(f,{onClick:O,size:"small",className:"fav-btn small-button",startIcon:e(v,{children:e("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),e(f,{onClick:m.handleOpen,size:"small",className:"social-btn small-button",startIcon:e(_,{children:e(q,{})}),variant:"contained",children:"Send Message"})]}):l(v,{children:[e(f,{onClick:W,className:"fav-btn-alone",startIcon:e(_,{sx:{transform:"scale(1.8)"},children:e(F,{})})}),e(f,{className:"fav-btn-alone",startIcon:e("img",{src:"/assets/stats/users.png"})}),e(f,{onClick:O,size:"small",className:"fav-btn small-button",startIcon:e(v,{children:e("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),e(f,{onClick:m.handleOpen,size:"small",className:"social-btn small-button",startIcon:e(_,{children:e(q,{})}),variant:"contained",children:"Send Message"})]})})]})]}),e("div",{className:"quick-link-bar",children:l("div",{className:"right-quick",children:[e("div",{className:"quick-font",children:"Quick links"}),l("div",{className:"quick-links",children:[e("a",{className:" homepage-icon",href:A(),target:"_blank"}),e("a",{className:"instagram-icon quick-link",href:"https://www.instagram.com",target:"_blank"}),e("a",{className:"tiktok-icon quick-link",href:"https://www.tiktok.com",target:"_blank"}),e("a",{className:"youtube-icon quick-link",href:"https://www.youtube.com",target:"_blank"}),e("a",{className:"twitter-icon quick-link",href:"https://www.twitter.com",target:"_blank"}),e("a",{className:"pinterest-icon quick-link",href:"https://www.pinterest",target:"_blank"})]})]})}),e(se,{indicatorColor:"primary",onChange:L,scrollButtons:"auto",sx:{mt:5},textColor:"primary",value:p,variant:"scrollable",className:"tab-panel",children:ce.map(i=>e(ne,{className:"social-font",label:i.label,value:i.value},i.value))}),e(ie,{}),e(w,{children:p==="infoverview"&&e(oe,{posts:u,profile:d,total:"total",changeStat:R})})]})}),e(re,{maximize:m.isFullScreen,message:m.message,onClose:m.handleClose,onMessageChange:m.handleMessageChange,onMinimize:m.handleMinimize,onSubjectChange:m.handleSubjectChange,onToChange:m.handleToChange,open:m.isOpen,subject:m.subject,to:a&&a.full_name?a.full_name:"",avatar:a&&a.profile_pic_url_hd?a.profile_pic_url_hd:"",toemail:a&&a.public_email?a.public_email:""})]})},pe=n=>({socialinfo:n.profile.socialinfo,userinfo:n.profile.userinfo}),He=H(pe)(fe);export{He as default};