import{w as L,x as j,r as n,j as i,bM as Z,f as k,d as e,k as v,aw as ee,q as M,c2 as te,bO as ae,l as y,F as N,C as ne,B as f,cg as A,aS as se,c8 as W,o as oe,cM as ie,c as re,S as le,aL as ce,br as ue,G as de,n as me,c4 as B,bk as pe,bl as he,D as fe,u as D}from"./app-822dcc1a.js";import{H as J}from"./Heart-78af6684.js";import{s as G}from"./social-post-card-7d61e722.js";import{I as ge}from"./inf-overview-272675eb.js";/* empty css                */import{M as be}from"./mail-119d71c7.js";import{J as ke}from"./job-list-card-79d4b763.js";import{G as x}from"./Grid-0b91a245.js";import"./index-a02c7861.js";import"./Clock-dfc60c3f.js";import"./Share07-a0a468ed.js";import"./index-6a7c98ee.js";import"./index-77f12175.js";import"./index-90fc8079.js";import"./FaceSmile-c9b135ff.js";import"./Link01-6383440e.js";import"./Attachment01-082dcb54.js";import"./Plus-8f60a8cd.js";import"./Image01-cd272c29.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardHeader-d4ce752b.js";import"./CardMedia-f6b4ea46.js";import"./overview-tips-daac03ad.js";import"./severity-pill-cf846bf9.js";import"./chart-b11c9c3a.js";import"./CardActions-669acf3b.js";import"./index-681674e6.js";import"./index-eee38a33.js";import"./index-382d8e62.js";import"./overview-pending-issues-8b1262a2.js";import"./quill-editor-8db1806a.js";import"./isEqual-95f7e54c.js";import"./index-acc1be40.js";import"./file-dropzone-dce10dd5.js";import"./tslib.es6-af7906ce.js";import"./Upload01-e6d8c70d.js";import"./bytes-to-size-706bbf81.js";const ve=s=>{const{onClose:r,currentTab:l="",infID:t=0,groupID:d=0,open:h=!1,...g}=s;j();const I=JSON.parse(localStorage.getItem("email")),[b,w]=n.useState([]);console.log(b),n.useEffect(()=>{axios.post("/api/getoutreachs",{email:I}).then(p=>{w(p.data)}).catch(p=>{})},[]);const T=p=>{axios.post("/api/add_group",{group_id:p,inf_id:t,tab:l}).then(S=>{A.success("Successfuly added to outreach group."),r()}).catch(S=>{})};return i(Z,{fullWidth:!0,maxWidth:"lg",open:h,onClose:r,children:[i(k,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{px:3,py:2},children:[e(v,{variant:"h6",children:"Select a group"}),e(ee,{color:"inherit",onClick:r,children:e(M,{children:e(te,{})})})]}),e(ae,{children:e(y,{sx:{mt:2},children:b==null?void 0:b.map((p,S)=>S==0?e(N,{}):e(ne,{sx:{mb:3},children:i(k,{children:[i(k,{alignItems:"flex-start",direction:"row",flexWrap:"wrap",justifyContent:"space-between",sx:{px:2,py:1.5},children:[i(v,{variant:"subtitle1",sx:{fontSize:16},children:["Group Name: ",p[0].group_name]}),e(k,{alignItems:"center",direction:"row",spacing:2,children:e(f,{onClick:()=>T(p[0].group_id),variant:"contained",size:"small",style:{fontSize:14},children:"Add to this outreach group"})})]}),i(v,{variant:"inherit",sx:{fontSize:14,px:2},children:["Brief Description: ",p[0].brief_group]})]})}))})})]})},we=s=>({userinfo:s.profile.userinfo}),Se=L(we)(ve),Ce=()=>{const s={isFullScreen:!1,isOpen:!1,message:"",subject:"",to:"",loading:!1,data:new FormData},r=j(),[l,t]=n.useState(s),d=n.useCallback(()=>{t(o=>({...o,isOpen:!0}))},[]),h=n.useCallback(()=>{t(s)},[]),g=n.useCallback(()=>{t(o=>({...o,isFullScreen:!0}))},[]),I=n.useCallback(()=>{t(o=>({...o,isFullScreen:!1}))},[]),b=n.useCallback(o=>{t(m=>({...m,data:o}))},[]),w=n.useCallback(o=>{t(m=>({...m,message:o}))},[]),T=n.useCallback(o=>{t(m=>({...m,subject:o}))},[]),p=n.useCallback(o=>{console.log(o),t(m=>({...m,to:o}))},[]);return{...l,handleClose:h,handleMaximize:g,handleMessageChange:w,handleMinimize:I,handleSubmit:()=>{t(o=>({...o,loading:!0})),l.data.append("to",l.to),l.data.append("subject",l.subject),l.data.append("message",l.message),l.data.append("email",JSON.parse(localStorage.getItem("email"))),axios.post("/api/send_mail",l.data,{}).then(o=>{t(m=>({...m,loading:!1,subject:"",to:"",message:"",isOpen:!1,data:new FormData})),A.success("Message Sent Successfuly."),r(thunks.getEmails({label:useSearchParams().get("label")||"inbox",email:JSON.parse(localStorage.getItem("email"))}))}).catch(o=>{})},handleOpen:d,handleAttach:b,handleSubjectChange:T,handleToChange:p}},xe=[{label:"Overview",value:"infoverview"}],P=[{divider:1e18,suffix:"E"},{divider:1e15,suffix:"P"},{divider:1e12,suffix:"T"},{divider:1e9,suffix:"G"},{divider:1e6,suffix:"M"},{divider:1e3,suffix:"K"}],_=s=>{for(var r=0;r<P.length;r++)if(s>=P[r].divider)return Number(s/P[r].divider).toFixed(1).toString().replace(".0","")+P[r].suffix;return s.toString()},_e=()=>{const s=D(),[r,l]=n.useState(null),t=n.useCallback(async()=>{try{const d=await G.getProfile();s()&&l(d)}catch(d){console.error(d)}},[s]);return n.useEffect(()=>{t()},[]),r},ye=()=>{const s=D(),[r,l]=n.useState([]),t=n.useCallback(async()=>{try{const d=await G.getPosts();s()&&l(d)}catch(d){console.error(d)}},[s]);return n.useEffect(()=>{t()},[]),r},Ne=(s="")=>{const[r,l]=n.useState([]),t=D(),d=n.useCallback(async()=>{const h=await G.getConnections();t()&&l(h)},[t]);return n.useEffect(()=>{d()},[s]),r.filter(h=>{var g;return(g=h.name)==null?void 0:g.toLowerCase().includes(s)})},Ie=s=>{const r=se(),l=JSON.parse(localStorage.getItem("email")),{socialinfo:t,userinfo:d}=s,h=_e(),[g,I]=n.useState("infoverview"),[b,w]=n.useState("not_connected"),T=ye(),[p,S]=n.useState("");Ne(p);const o=W(),m=W(),F=j();oe();const[C,R]=n.useState(t.basic);let a=t[C];const u=Ce(),[$,O]=n.useState(!!(a&&a.liked=="1")),Q=c=>{R(c)};n.useEffect(()=>{F(ie({email:l,infname:window.location.pathname.split("/")[3],socialtype:"total"}))},[F]),n.useEffect(()=>{O(!!(a&&a.liked=="1"))},[a]);const q=()=>{o.handleOpen()},E=()=>{m.handleOpen()},H=()=>{O(!0);let c={email:JSON.parse(localStorage.getItem("email")),tab:C,inf_id:a&&a.id?a.id:"",liked:"1"};axios.post("/api/handle_like",c).then(z=>{z.data.status})},U=()=>{O(!1);let c={email:JSON.parse(localStorage.getItem("email")),tab:C,inf_id:a&&a.id?a.id:"",liked:"0"};axios.post("/api/handle_like",c).then(z=>{z.data.status})};re(),n.useCallback(()=>{w("pending")},[]),n.useCallback(()=>{w("not_connected")},[]);const K=n.useCallback((c,z)=>{I(z)},[]);if(n.useCallback(c=>{S(c.target.value)},[]),!h)return null;const V=()=>{let c=(t&&t.instagram?t.instagram.follower_count:0)+(t&&t.pinterest?t.pinterest.follower_count:0)+(t&&t.tiktok?t.tiktok.follower_count:0)+(t&&t.twitter?t.twitter.follower_count:0)+(t&&t.youtube?t.youtube.follower_count:0);return _(c)},X=()=>{let c="";return c+="Instagram followers: "+(t&&t.instagram?_(t.instagram.follower_count):0)+`
Tiktok followers: `+(t&&t.tiktok?_(t.tiktok.follower_count):0)+`
Youtube followers: `+(t&&t.youtube?_(t.youtube.follower_count):0)+`
Twitter followers: `+(t&&t.twitter?_(t.twitter.follower_count):0)+`
Pinterest followers: `+(t&&t.pinterest?_(t.pinterest.follower_count):0)+`
`,c},Y=()=>C=="tiktok"&&a&&a.external_url=="-"?"":a&&a.external_url?a.external_url:"";return i(N,{children:[e(le,{title:"Dashboard: Social Profile"}),e(ke,{onClose:o.handleClose,open:o.open,currentTab:C,infID:a&&a.id}),e(Se,{onClose:m.handleClose,open:m.open,currentTab:C,infID:a&&a.id}),e(y,{component:"main",sx:{flexGrow:1,py:8},children:i(ce,{maxWidth:r.stretch?!1:"xl",children:[i("div",{children:[e(y,{style:{backgroundImage:`url(${h.cover})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative","&:hover":{"& button":{visibility:"visible"}}}}),i(k,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[i(k,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[e(y,{component:ue,sx:{alignItems:"center",display:"flex",borderWidth:2,borderStyle:"solid",borderColor:"divider",height:140,width:140,borderRadius:"50%"},children:e(de,{src:a&&a.profile_pic_url_hd?a.profile_pic_url_hd:`https://ui-avatars.com/api/?name=${a&&a.full_name?a.full_name:""}&background=2970FF&color=fff&rounded=true`,sx:{height:130,width:130}})}),i("div",{className:"brand-info",children:[i(x,{container:!0,children:[i(x,{item:!0,sm:7,xs:12,children:[e(v,{color:"primary",variant:"h6",style:{fontSize:22,wordWrap:"break-word"},children:a?a.username:""}),e(v,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:a?a.full_name:""})]}),e(x,{item:!0,sm:5,xs:12,children:e(me,{title:e("div",{style:{whiteSpace:"pre-line"},children:X()}),children:e("div",{className:"custom-reach",children:i(x,{container:!0,children:[i(x,{item:!0,sx:{color:"#2970FF",fontSize:"11px",fontWeight:300,pl:1,pr:1,pt:.5,pb:.5},children:[e("div",{children:"Reach"}),e("div",{style:{fontSize:"16px",fontWeight:700},children:V()})]}),e(x,{item:!0,style:{display:"flex",alignItems:"center",margin:"0 auto"},children:e("div",{className:"reach-arrow"})})]})})})})]}),e(v,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),e(v,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:a?a.city+", "+a.Country:""})]})]}),e(y,{sx:{flexGrow:1}}),e(k,{alignItems:"center",direction:"row",spacing:2,className:"inf-button-bar",sx:{display:{md:"block"}},children:$?i(N,{children:[e(f,{onClick:U,className:"fav-btn=alone",startIcon:e(M,{sx:{transform:"scale(1.8)",color:"error.main","& path":{fill:c=>c.palette.error.main,fillOpacity:1}},children:e(J,{})})}),e(f,{className:"fav-btn-alone",startIcon:e("img",{src:"/assets/stats/users.png"}),onClick:E}),e(f,{onClick:q,size:"small",className:"fav-btn small-button",startIcon:e(N,{children:e("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),e(f,{onClick:()=>{u.handleToChange(a&&a.public_email?a.public_email:""),u.handleOpen()},size:"small",className:"social-btn small-button",startIcon:e(M,{children:e(B,{})}),variant:"contained",children:"Send Message"})]}):i(N,{children:[e(f,{onClick:H,className:"fav-btn-alone",startIcon:e(M,{sx:{transform:"scale(1.8)"},children:e(J,{})})}),e(f,{className:"fav-btn-alone",onClick:E,startIcon:e("img",{src:"/assets/stats/users.png"})}),e(f,{onClick:q,size:"small",className:"fav-btn small-button",startIcon:e(N,{children:e("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),e(f,{onClick:()=>{u.handleToChange(a&&a.public_email?a.public_email:""),u.handleOpen()},size:"small",className:"social-btn small-button",startIcon:e(M,{children:e(B,{})}),variant:"contained",children:"Send Message"})]})})]})]}),e("div",{className:"quick-link-bar",children:i("div",{className:"right-quick",children:[e("div",{className:"quick-font",children:"Quick links"}),i("div",{className:"quick-links",children:[e("a",{className:" homepage-icon",href:Y(),target:"_blank"}),e("a",{className:"instagram-icon quick-link",href:"https://www.instagram.com",target:"_blank"}),e("a",{className:"tiktok-icon quick-link",href:"https://www.tiktok.com",target:"_blank"}),e("a",{className:"youtube-icon quick-link",href:"https://www.youtube.com",target:"_blank"}),e("a",{className:"twitter-icon quick-link",href:"https://www.twitter.com",target:"_blank"}),e("a",{className:"pinterest-icon quick-link",href:"https://www.pinterest",target:"_blank"})]})]})}),e(pe,{indicatorColor:"primary",onChange:K,scrollButtons:"auto",sx:{mt:5},textColor:"primary",value:g,variant:"scrollable",className:"tab-panel",children:xe.map(c=>e(he,{className:"social-font",label:c.label,value:c.value},c.value))}),e(fe,{}),e(y,{children:g==="infoverview"&&e(ge,{posts:T,profile:h,total:"total",changeStat:Q})})]})}),e(be,{maximize:u.isFullScreen,message:u.message,onClose:u.handleClose,onMessageChange:u.handleMessageChange,onMinimize:u.handleMinimize,onSubjectChange:u.handleSubjectChange,onSubmit:u.handleSubmit,onAttach:u.handleAttach,onToChange:u.handleToChange,open:u.isOpen,subject:u.subject,loading:u.loading,to:u.to,avatar:a&&a.profile_pic_url_hd?a.profile_pic_url_hd:""})]})},Te=s=>({socialinfo:s.profile.socialinfo,userinfo:s.profile.userinfo}),pt=L(Te)(Ie);export{pt as default};
