import{v as H,cp as J,aS as K,r as t,w as W,o as V,cv as I,c as X,j as s,F as v,d as e,S as Y,l as h,aL as Z,B as m,q as u,f,E as ee,k as b,R as P,p as q,b$ as z,bi as te,bj as ae,D as ne,u as C,x as oe}from"./app-21956035.js";import{I as se}from"./Image01-7a19c7ce.js";import{H as E}from"./Share07-f750a10f.js";import{E as ie}from"./Edit02-7fd0556e.js";import{F as re}from"./file-uploader-d83d3be7.js";import{s as w}from"./index-2d35a47d.js";import{S as ce}from"./profile-1a3445d3.js";import{b as T,S as le}from"./social-timeline-b5de62a2.js";import"./file-dropzone-31fb2fab.js";import"./tslib.es6-af7906ce.js";import"./Upload01-6d6d4e7e.js";import"./bytes-to-size-706bbf81.js";import"./deep-copy-ee95be26.js";import"./social-post-card-890cd6ee.js";import"./Clock-5f3d0549.js";import"./index-614f0049.js";import"./FaceSmile-3a3553d6.js";import"./Link01-7ef1615c.js";import"./Attachment01-5105262f.js";import"./Plus-2b54de41.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardHeader-f479f259.js";import"./CardMedia-08a232a4.js";import"./company-jobs-8c12c71c.js";import"./index-a926b7d6.js";import"./Users01-e13e0e93.js";import"./social-post-add-edc8d486.js";const de=[{label:"Overview",value:"timeline"},{label:"Jobs Posted",value:"connections"}],me=()=>{const n=C(),[i,d]=t.useState(null),r=t.useCallback(async()=>{try{const o=await w.getProfile();n()&&d(o)}catch(o){console.error(o)}},[n]);return t.useEffect(()=>{r()},[]),i},ue=()=>{const n=C(),[i,d]=t.useState([]),r=t.useCallback(async()=>{try{const o=await w.getPosts();n()&&d(o)}catch(o){console.error(o)}},[n]);return t.useEffect(()=>{r()},[]),i},pe=(n="")=>{const[i,d]=t.useState([]),r=C(),o=t.useCallback(async()=>{const a=await w.getConnections();r()&&d(a)},[r]);return t.useEffect(()=>{o()},[n]),i.filter(a=>{var c;return(c=a.name)==null?void 0:c.toLowerCase().includes(n)})},he=n=>{const i=J(),d=K(),[r,o]=t.useState("cover"),{brandinfo:a,userinfo:c}=n,g=me(),[k,_]=t.useState("timeline"),[be,y]=t.useState("not_connected"),D=ue(),[S,F]=t.useState(""),M=pe(S),[G,N]=t.useState(!1),p=W(),L=V();t.useEffect(()=>{p(I({brandID:window.location.pathname.split("/")[2].split("-")[2]}))},[p]);const[x,B]=t.useState(""),O=()=>{p(I({brandID:window.location.pathname.split("/")[2].split("-")[2]})),p(oe({email:JSON.parse(localStorage.getItem("email"))})),B(x+"a")},Q=t.useCallback(()=>{N(!0)},[]),j=t.useCallback(()=>{N(!1)},[]);X(),t.useCallback(()=>{y("pending")},[]),t.useCallback(()=>{y("not_connected")},[]);const R=t.useCallback((l,A)=>{_(A)},[]),U=t.useCallback(l=>{F(l.target.value)},[]);if(!g)return null;const $=()=>{o("avatar"),i.handleOpen()};return s(v,{children:[e(Y,{title:"Dashboard: Social Profile"}),e(h,{component:"main",sx:{flexGrow:1,py:8},children:s(Z,{maxWidth:d.stretch?!1:"xl",children:[s("div",{children:[e(h,{style:{backgroundImage:`url(${a.cover_photo?a.cover_photo:g.cover})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative"},children:c&&a&&c.id==a.id?e(m,{onClick:()=>{o("cover"),i.handleOpen()},startIcon:e(u,{children:e(se,{})}),sx:{backgroundColor:T[900],bottom:{lg:24,xs:"auto"},color:"common.white",position:"absolute",right:24,top:{lg:"auto",xs:24},"&:hover":{backgroundColor:T[900]}},variant:"contained",children:"Change Cover"}):""},x),s(f,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[s(f,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[e(ee,{onClick:$,src:a.avatar?a.avatar:`https://ui-avatars.com/api/?name=${a.companyname}&background=2970FF&color=fff&rounded=true`,sx:{height:140,width:140},style:{cursor:"pointer"}}),s("div",{className:"brand-info",children:[e(b,{color:"primary",variant:"h6",style:{fontSize:22},children:a?a.fullname:""}),s(b,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:["Established since ",a?a.companyfounded:""]}),e(b,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),e(b,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:a?a.companylocation:""})]})]}),e(h,{sx:{flexGrow:1}}),c&&a&&c.id===a.id?e(f,{alignItems:"center",direction:"row",spacing:2,className:"button-bar",sx:{display:{md:"block"}},children:e(m,{size:"small",className:"social-btn",startIcon:e(u,{children:e(ie,{})}),onClick:()=>{L("/profile/edit/"+c.id)},variant:"contained",children:"Edit Profile"})}):e(f,{alignItems:"center",direction:"row",spacing:2,className:"button-bar",sx:{display:{md:"block"}},children:G?s(v,{children:[e(m,{onClick:j,size:"small",className:"fav-btn",startIcon:e(u,{sx:{color:"error.main","& path":{fill:l=>l.palette.error.main,fillOpacity:1}},children:e(E,{})}),variant:"outlined",children:"Favorite"}),e(m,{component:P,href:q.dashboard.chat,size:"small",className:"social-btn",startIcon:e(u,{children:e(z,{})}),variant:"contained",children:"Send Message"})]}):s(v,{children:[e(m,{onClick:Q,size:"small",className:"fav-btn",startIcon:e(u,{children:e(E,{})}),variant:"outlined",children:"Favorite"}),e(m,{component:P,href:q.dashboard.chat,size:"small",className:"social-btn",startIcon:e(u,{children:e(z,{})}),variant:"contained",children:"Send Message"})]})})]})]}),e("div",{className:"quick-link-bar",children:s("div",{className:"right-quick",children:[e("div",{className:"quick-font",children:"Quick links"}),s("div",{className:"quick-links",children:[e("a",{className:"instagram-icon quick-link",href:"https://www.instagram.com",target:"_blank"}),e("a",{className:"tiktok-icon quick-link",href:"https://www.tiktok.com",target:"_blank"}),e("a",{className:"youtube-icon quick-link",href:"https://www.youtube.com",target:"_blank"}),e("a",{className:"twitter-icon quick-link",href:"https://www.twitter.com",target:"_blank"}),e("a",{className:"pinterest-icon quick-link",href:"https://www.pinterest",target:"_blank"})]})]})}),e(te,{indicatorColor:"primary",onChange:R,scrollButtons:"auto",sx:{mt:5},textColor:"primary",value:k,variant:"scrollable",className:"tab-panel",children:de.map(l=>e(ae,{className:"social-font",label:l.label,value:l.value},l.value))}),e(ne,{}),s(h,{children:[k==="timeline"&&e(le,{posts:D,profile:g}),k==="connections"&&e(ce,{connections:M,onQueryChange:U,query:S})]})]})}),e(re,{onClose:i.handleClose,open:i.open,onUpgrade:O,kind:r})]})},fe=n=>({brandinfo:n.profile.brandinfo,userinfo:n.profile.userinfo}),Ae=H(fe)(he);export{Ae as default};
