import{v as H,aT as U,r as s,w as $,o as K,cy as V,c as Y,j as n,F as p,d as e,S as J,l as h,aM as X,f as w,bs as Z,E as ee,k as v,n as te,B as c,q as g,R as P,p as T,c0 as q,bj as se,bk as ae,D as re,u as x}from"./app-614b2243.js";import{H as z}from"./Heart-77254f01.js";import{s as y}from"./index-6782b426.js";import"./profile-0e21d63d.js";import{I as oe}from"./inf-overview-bffe2011.js";import{G as d}from"./Grid-9e3b137d.js";import"./deep-copy-ee95be26.js";import"./social-post-card-ec75674f.js";import"./Clock-533c4c14.js";import"./Share07-053d4f33.js";import"./index-2fe066f9.js";import"./FaceSmile-26fd9035.js";import"./Link01-3350ccdb.js";import"./Attachment01-abc6769a.js";import"./Plus-60cf63de.js";import"./Image01-8729cfe2.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardHeader-a019c546.js";import"./CardMedia-356d4b4a.js";import"./company-jobs-93a9b147.js";import"./index-1710adc9.js";import"./Users01-a057c03b.js";import"./overview-tips-137f2a42.js";import"./CardActions-2ea896d6.js";import"./Calendar-e65ebbca.js";import"./severity-pill-7feae4bc.js";import"./TableRow-8967668e.js";import"./chart-e0823289.js";import"./index-197bf6e8.js";import"./index-2d452b04.js";import"./index-e28cc419.js";const ne=[{label:"Overview",value:"infoverview"}],k=[{divider:1e18,suffix:"E"},{divider:1e15,suffix:"P"},{divider:1e12,suffix:"T"},{divider:1e9,suffix:"G"},{divider:1e6,suffix:"M"},{divider:1e3,suffix:"K"}],f=r=>{for(var i=0;i<k.length;i++)if(r>=k[i].divider)return Number(r/k[i].divider).toFixed(1).toString().replace(".0","")+k[i].suffix;return r.toString()},ie=()=>{const r=x(),[i,t]=s.useState(null),u=s.useCallback(async()=>{try{const l=await y.getProfile();r()&&t(l)}catch(l){console.error(l)}},[r]);return s.useEffect(()=>{u()},[]),i},le=()=>{const r=x(),[i,t]=s.useState([]),u=s.useCallback(async()=>{try{const l=await y.getPosts();r()&&t(l)}catch(l){console.error(l)}},[r]);return s.useEffect(()=>{u()},[]),i},ce=(r="")=>{const[i,t]=s.useState([]),u=x(),l=s.useCallback(async()=>{const m=await y.getConnections();u()&&t(m)},[u]);return s.useEffect(()=>{l()},[r]),i.filter(m=>{var b;return(b=m.name)==null?void 0:b.toLowerCase().includes(r)})},ue=r=>{const i=U(),{socialinfo:t,userinfo:u}=r,l=ie(),[m,b]=s.useState("infoverview"),[de,S]=s.useState("not_connected"),M=le(),[E,G]=s.useState("");ce(E);const[R,N]=s.useState(!1),_=$();K();const[C,F]=s.useState(t.basic);let a=t[C];const j=o=>{F(o)};s.useEffect(()=>{_(V({infname:window.location.pathname.split("/")[3],socialtype:"total"}))},[_]);const I=s.useCallback(()=>{},[]),B=s.useCallback(()=>{N(!0)},[]),W=s.useCallback(()=>{N(!1)},[]);Y(),s.useCallback(()=>{S("pending")},[]),s.useCallback(()=>{S("not_connected")},[]);const L=s.useCallback((o,A)=>{b(A)},[]);if(s.useCallback(o=>{G(o.target.value)},[]),!l)return null;const D=()=>{let o=(t&&t.instagram?t.instagram.follower_count:0)+(t&&t.pinterest?t.pinterest.follower_count:0)+(t&&t.tiktok?t.tiktok.follower_count:0)+(t&&t.twitter?t.twitter.follower_count:0)+(t&&t.youtube?t.youtube.subscribers:0);return f(o)},O=()=>{let o="";return o+="Instagram followers: "+(t&&t.instagram?f(t.instagram.follower_count):0)+`
Tiktok followers: `+(t&&t.tiktok?f(t.tiktok.follower_count):0)+`
Youtube followers: `+(t&&t.youtube?f(t.youtube.subscribers):0)+`
Twitter followers: `+(t&&t.twitter?f(t.twitter.follower_count):0)+`
Pinterest followers: `+(t&&t.pinterest?f(t.pinterest.follower_count):0)+`
`,o},Q=()=>C=="tiktok"&&a&&a.external_url=="-"?"":a&&a.external_url?a.external_url:"";return n(p,{children:[e(J,{title:"Dashboard: Social Profile"}),e(h,{component:"main",sx:{flexGrow:1,py:8},children:n(X,{maxWidth:i.stretch?!1:"xl",children:[n("div",{children:[e(h,{style:{backgroundImage:`url(${l.cover})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative","&:hover":{"& button":{visibility:"visible"}}}}),n(w,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[n(w,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[e(h,{component:Z,sx:{alignItems:"center",display:"flex",borderWidth:2,borderStyle:"solid",borderColor:"divider",height:140,width:140,borderRadius:"50%"},children:e(ee,{src:a&&a.profile_pic_url_hd?a.profile_pic_url_hd:`https://ui-avatars.com/api/?name=${a&&a.full_name?a.full_name:""}&background=2970FF&color=fff&rounded=true`,sx:{height:130,width:130}})}),n("div",{className:"brand-info",children:[n(d,{container:!0,children:[n(d,{item:!0,sm:7,xs:12,children:[e(v,{color:"primary",variant:"h6",style:{fontSize:22,wordWrap:"break-word"},children:a?a.username:""}),e(v,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:a?a.full_name:""})]}),e(d,{item:!0,sm:5,xs:12,children:e(te,{title:e("div",{style:{whiteSpace:"pre-line"},children:O()}),children:e("div",{className:"custom-reach",children:n(d,{container:!0,children:[n(d,{item:!0,sx:{color:"#2970FF",fontSize:"11px",fontWeight:300,pl:1,pr:1,pt:.5,pb:.5},children:[e("div",{children:"Reach"}),e("div",{style:{fontSize:"16px",fontWeight:700},children:D()})]}),e(d,{item:!0,style:{display:"flex",alignItems:"center",margin:"0 auto"},children:e("div",{className:"reach-arrow"})})]})})})})]}),e(v,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),e(v,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:a?a.city+", "+a.Country:""})]})]}),e(h,{sx:{flexGrow:1}}),e(w,{alignItems:"center",direction:"row",spacing:2,className:"inf-button-bar",sx:{display:{md:"block"}},children:R?n(p,{children:[e(c,{onClick:W,className:"fav-btn=alone",startIcon:e(g,{sx:{transform:"scale(1.8)",color:"error.main","& path":{fill:o=>o.palette.error.main,fillOpacity:1}},children:e(z,{})})}),e(c,{className:"fav-btn-alone",startIcon:e("img",{src:"/assets/stats/users.png"})}),e(c,{onClick:I,size:"small",className:"fav-btn small-button",startIcon:e(p,{children:e("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),e(c,{component:P,href:T.dashboard.chat,size:"small",className:"social-btn small-button",startIcon:e(g,{children:e(q,{})}),variant:"contained",children:"Send Message"})]}):n(p,{children:[e(c,{onClick:B,className:"fav-btn-alone",startIcon:e(g,{sx:{transform:"scale(1.8)"},children:e(z,{})})}),e(c,{className:"fav-btn-alone",startIcon:e("img",{src:"/assets/stats/users.png"})}),e(c,{onClick:I,size:"small",className:"fav-btn small-button",startIcon:e(p,{children:e("img",{src:"/assets/icons/invite.svg"})}),variant:"outlined",children:"Invite To Project"}),e(c,{component:P,href:T.dashboard.chat,size:"small",className:"social-btn small-button",startIcon:e(g,{children:e(q,{})}),variant:"contained",children:"Send Message"})]})})]})]}),e("div",{className:"quick-link-bar",children:n("div",{className:"right-quick",children:[e("div",{className:"quick-font",children:"Quick links"}),n("div",{className:"quick-links",children:[e("a",{className:" homepage-icon",href:Q(),target:"_blank"}),e("a",{className:"instagram-icon quick-link",href:"https://www.instagram.com",target:"_blank"}),e("a",{className:"tiktok-icon quick-link",href:"https://www.tiktok.com",target:"_blank"}),e("a",{className:"youtube-icon quick-link",href:"https://www.youtube.com",target:"_blank"}),e("a",{className:"twitter-icon quick-link",href:"https://www.twitter.com",target:"_blank"}),e("a",{className:"pinterest-icon quick-link",href:"https://www.pinterest",target:"_blank"})]})]})}),e(se,{indicatorColor:"primary",onChange:L,scrollButtons:"auto",sx:{mt:5},textColor:"primary",value:m,variant:"scrollable",className:"tab-panel",children:ne.map(o=>e(ae,{className:"social-font",label:o.label,value:o.value},o.value))}),e(re,{}),e(h,{children:m==="infoverview"&&e(oe,{posts:M,profile:l,total:"total",changeStat:j})})]})})]})},me=r=>({socialinfo:r.profile.socialinfo,userinfo:r.profile.userinfo}),He=H(me)(ue);export{He as default};