import{v as H,aT as U,r as s,w as $,o as K,cx as V,c as Y,j as n,F as p,d as e,S as J,l as h,aM as X,f as w,bs as Z,E as ee,k as v,n as te,B as c,q as g,R as P,p as T,c0 as q,bj as se,bk as ae,D as re,u as x}from"./app-7fd24ebd.js";import{H as z}from"./Share07-b2250979.js";import{s as y}from"./index-431c2a62.js";import"./profile-a5319d16.js";import{I as oe}from"./inf-overview-fe91dab1.js";import{G as m}from"./Grid-22264cd0.js";import"./deep-copy-ee95be26.js";import"./social-post-card-c06ee567.js";import"./Clock-e0233a1b.js";import"./index-a739c09f.js";import"./FaceSmile-59f5fabe.js";import"./Link01-81159cc1.js";import"./Attachment01-7bcdbba3.js";import"./Plus-da5271e4.js";import"./Image01-3bc20f82.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardHeader-2d62474a.js";import"./CardMedia-7a17bf7a.js";import"./company-jobs-8004a561.js";import"./index-39d90608.js";import"./Users01-42a110c0.js";import"./overview-tips-4dcb6fcb.js";import"./CardActions-7d307e11.js";import"./Calendar-386e51e0.js";import"./severity-pill-0c4c7673.js";import"./TableRow-6af88fb1.js";import"./chart-c83859c7.js";import"./index-b9693c00.js";import"./index-fc64cc03.js";import"./index-9f35e39d.js";const ne=[{label:"Overview",value:"infoverview"}],k=[{divider:1e18,suffix:"E"},{divider:1e15,suffix:"P"},{divider:1e12,suffix:"T"},{divider:1e9,suffix:"G"},{divider:1e6,suffix:"M"},{divider:1e3,suffix:"K"}],f=r=>{for(var i=0;i<k.length;i++)if(r>=k[i].divider)return Number(r/k[i].divider).toFixed(1).toString().replace(".0","")+k[i].suffix;return r.toString()},ie=()=>{const r=x(),[i,t]=s.useState(null),u=s.useCallback(async()=>{try{const l=await y.getProfile();r()&&t(l)}catch(l){console.error(l)}},[r]);return s.useEffect(()=>{u()},[]),i},le=()=>{const r=x(),[i,t]=s.useState([]),u=s.useCallback(async()=>{try{const l=await y.getPosts();r()&&t(l)}catch(l){console.error(l)}},[r]);return s.useEffect(()=>{u()},[]),i},ce=(r="")=>{const[i,t]=s.useState([]),u=x(),l=s.useCallback(async()=>{const d=await y.getConnections();u()&&t(d)},[u]);return s.useEffect(()=>{l()},[r]),i.filter(d=>{var b;return(b=d.name)==null?void 0:b.toLowerCase().includes(r)})},ue=r=>{const i=U(),{socialinfo:t,userinfo:u}=r,l=ie(),[d,b]=s.useState("infoverview"),[me,S]=s.useState("not_connected"),M=le(),[E,G]=s.useState("");ce(E);const[R,N]=s.useState(!1),_=$();K();const[C,F]=s.useState(t.basic);let a=t[C];const j=o=>{F(o)};s.useEffect(()=>{_(V({infname:window.location.pathname.split("/")[3],socialtype:"total"}))},[_]);const I=s.useCallback(()=>{},[]),B=s.useCallback(()=>{N(!0)},[]),W=s.useCallback(()=>{N(!1)},[]);Y(),s.useCallback(()=>{S("pending")},[]),s.useCallback(()=>{S("not_connected")},[]);const L=s.useCallback((o,A)=>{b(A)},[]);if(s.useCallback(o=>{G(o.target.value)},[]),!l)return null;const D=()=>{let o=(t&&t.instagram?t.instagram.follower_count:0)+(t&&t.pinterest?t.pinterest.follower_count:0)+(t&&t.tiktok?t.tiktok.follower_count:0)+(t&&t.twitter?t.twitter.follower_count:0)+(t&&t.youtube?t.youtube.subscribers:0);return f(o)},O=()=>{let o="";return o+="Instagram followers: "+(t&&t.instagram?f(t.instagram.follower_count):0)+`
Tiktok followers: `+(t&&t.tiktok?f(t.tiktok.follower_count):0)+`
Youtube followers: `+(t&&t.youtube?f(t.youtube.subscribers):0)+`
Twitter followers: `+(t&&t.twitter?f(t.twitter.follower_count):0)+`
Pinterest followers: `+(t&&t.pinterest?f(t.pinterest.follower_count):0)+`
`,o},Q=()=>C=="tiktok"&&a&&a.external_url=="-"?"":a&&a.external_url?a.external_url:"";return n(p,{children:[e(J,{title:"Dashboard: Social Profile"}),e(h,{component:"main",sx:{flexGrow:1,py:8},children:n(X,{maxWidth:i.stretch?!1:"xl",children:[n("div",{children:[e(h,{style:{backgroundImage:`url(${l.cover})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative","&:hover":{"& button":{visibility:"visible"}}}}),n(w,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[n(w,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[e(h,{component:Z,sx:{alignItems:"center",display:"flex",borderWidth:2,borderStyle:"solid",borderColor:"divider",height:140,width:140,borderRadius:"50%"},children:e(ee,{src:a&&a.profile_pic_url_hd?a.profile_pic_url_hd:`https://ui-avatars.com/api/?name=${a&&a.full_name?a.full_name:""}&background=2970FF&color=fff&rounded=true`,sx:{height:130,width:130}})}),n("div",{className:"brand-info",children:[n(m,{container:!0,children:[n(m,{item:!0,sm:7,xs:12,children:[e(v,{color:"primary",variant:"h6",style:{fontSize:22,wordWrap:"break-word"},children:a?a.username:""}),e(v,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:a?a.full_name:""})]}),e(m,{item:!0,sm:5,xs:12,children:e(te,{title:e("div",{style:{whiteSpace:"pre-line"},children:O()}),children:e("div",{className:"custom-reach",children:n(m,{container:!0,children:[n(m,{item:!0,sx:{color:"#2970FF",fontSize:"11px",fontWeight:300,pl:1,pr:1,pt:.5,pb:.5},children:[e("div",{children:"Reach"}),e("div",{style:{fontSize:"16px",fontWeight:700},children:D()})]}),e(m,{item:!0,style:{display:"flex",alignItems:"center",margin:"0 auto"},children:e("div",{className:"reach-arrow"})})]})})})})]}),e(v,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),e(v,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:a?a.city+", "+a.Country:""})]})]}),e(h,{sx:{flexGrow:1}}),e(w,{alignItems:"center",direction:"row",spacing:2,className:"inf-button-bar",sx:{display:{md:"block"}},children:R?n(p,{children:[e(c,{onClick:W,className:"fav-btn=alone",startIcon:e(g,{sx:{transform:"scale(1.8)",color:"error.main","& path":{fill:o=>o.palette.error.main,fillOpacity:1}},children:e(z,{})})}),e(c,{className:"fav-btn-alone",startIcon:e("img",{src:"/assets/stats/users.png"})}),e(c,{onClick:I,size:"small",className:"fav-btn small-button",startIcon:e(p,{children:e("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),e(c,{component:P,href:T.dashboard.chat,size:"small",className:"social-btn small-button",startIcon:e(g,{children:e(q,{})}),variant:"contained",children:"Send Message"})]}):n(p,{children:[e(c,{onClick:B,className:"fav-btn-alone",startIcon:e(g,{sx:{transform:"scale(1.8)"},children:e(z,{})})}),e(c,{className:"fav-btn-alone",startIcon:e("img",{src:"/assets/stats/users.png"})}),e(c,{onClick:I,size:"small",className:"fav-btn small-button",startIcon:e(p,{children:e("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),e(c,{component:P,href:T.dashboard.chat,size:"small",className:"social-btn small-button",startIcon:e(g,{children:e(q,{})}),variant:"contained",children:"Send Message"})]})})]})]}),e("div",{className:"quick-link-bar",children:n("div",{className:"right-quick",children:[e("div",{className:"quick-font",children:"Quick links"}),n("div",{className:"quick-links",children:[e("a",{className:" homepage-icon",href:Q(),target:"_blank"}),e("a",{className:"instagram-icon quick-link",href:"https://www.instagram.com",target:"_blank"}),e("a",{className:"tiktok-icon quick-link",href:"https://www.tiktok.com",target:"_blank"}),e("a",{className:"youtube-icon quick-link",href:"https://www.youtube.com",target:"_blank"}),e("a",{className:"twitter-icon quick-link",href:"https://www.twitter.com",target:"_blank"}),e("a",{className:"pinterest-icon quick-link",href:"https://www.pinterest",target:"_blank"})]})]})}),e(se,{indicatorColor:"primary",onChange:L,scrollButtons:"auto",sx:{mt:5},textColor:"primary",value:d,variant:"scrollable",className:"tab-panel",children:ne.map(o=>e(ae,{className:"social-font",label:o.label,value:o.value},o.value))}),e(re,{}),e(h,{children:d==="infoverview"&&e(oe,{posts:M,profile:l,total:"total",changeStat:j})})]})})]})},de=r=>({socialinfo:r.profile.socialinfo,userinfo:r.profile.userinfo}),Ae=H(de)(ue);export{Ae as default};
