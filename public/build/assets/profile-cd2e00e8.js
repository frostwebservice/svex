import{E as l,d as e,C as I,j as t,e as L,f as u,a1 as B,R as C,p as k,L as X,k as d,J as h,l as f,D as F,u as w,r as o,Q as M,aT as Y,aU as g,aZ as y,aV as v,aF as T,U as ee,cx as te,H as ie,c as ne,F as q,S as ae,aE as oe,B as b,c0 as E,bd as re,be as se}from"./app-7d1d9a01.js";import{I as ce}from"./Image01-59f62a84.js";import{H as j}from"./Share07-e2f4b07b.js";import{E as le}from"./Edit02-b1ca9ec6.js";import{S as de,s as P}from"./social-post-card-ee6aaeaf.js";import{C as ue,j as pe}from"./company-jobs-91f8dd06.js";import{U as me}from"./Users01-596f14ef.js";import{g as he}from"./get-initials-d1c6cec7.js";import{C as be}from"./CardHeader-d99a6169.js";import"./deep-copy-ee95be26.js";import"./Clock-ab9baf6e.js";import"./index-9be52e78.js";import"./FaceSmile-a17455ee.js";import"./Link01-2eb8f439.js";import"./Attachment01-6d6b8d33.js";import"./Plus-44005258.js";import"./CardMedia-c86eb0cc.js";import"./index-1eeef8a2.js";const fe={50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64"},A=fe,Q=n=>{const{company:i,...a}=n;return e(I,{...a,style:{marginTop:30},children:t(L,{children:[t(u,{alignItems:"flex-start",spacing:2,direction:{xs:"column",sm:"row"},children:[e(B,{component:C,href:k.dashboard.jobs.companies.details,src:i.logo,children:he(i.name)}),t("div",{children:[e(X,{color:"text.primary",component:C,href:k.dashboard.jobs.companies.details,variant:"h6",style:{fontSize:18},children:i.name}),e(d,{variant:"body2",style:{fontSize:14},children:i.shortDescription}),t(u,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,sx:{mt:1},children:[t(u,{alignItems:"center",spacing:1,direction:"row",children:[e(h,{color:"action",children:e(me,{})}),e(d,{color:"text.secondary",noWrap:!0,variant:"overline",style:{fontSize:12},children:i.employees})]}),i.isVerified&&t(u,{alignItems:"center",direction:"row",spacing:.5,children:[e("div",{className:"verified-icon"}),e(d,{color:"#15B79E",noWrap:!0,variant:"overline",style:{fontSize:12},children:"Verified"})]})]})]})]}),e(f,{sx:{mt:2},children:e(ue,{jobs:i.jobs})})]})})};Q.propTypes={company:l.object.isRequired};l.object;const ge=()=>{const n=w(),[i,a]=o.useState([]),s=o.useCallback(async()=>{try{const r=await pe.getCompanies();n()&&a(r)}catch(r){console.error(r)}},[n]);return o.useEffect(()=>{s()},[]),i},_=n=>{const{connections:i=[],query:a="",onQueryChange:s,...r}=n,p=ge();return t(I,{...r,style:{borderRadius:0,boxShadow:"none"},children:[e(F,{}),e(f,{sx:{p:.5},style:{boxShadow:"none"},children:p.map(c=>e(Q,{company:c},c.id))})]})};_.propTypes={connections:l.array,query:l.string,onQueryChange:l.func};const D=n=>{const{currentCity:i,currentJobCompany:a,currentJobTitle:s,email:r,originCity:p,brandinfo:c,previousJobCompany:x,previousJobTitle:J,profileProgress:N,quote:R,...S}=n;return e(u,{spacing:3,...S,children:t(I,{style:{borderRadius:0,boxShadow:"none"},children:[e(be,{title:"About",className:"head-font"}),t(L,{style:{paddingTop:2},children:[e(d,{color:"text.secondary",sx:{mb:2},variant:"subtitle2",className:"about-content",style:{borderBottom:"0.5px solid #F2F4F7",paddingBottom:50},children:c?c.aboutbusiness:""}),t(Y,{disablePadding:!0,children:[t(g,{disableGutters:!0,divider:!0,children:[e(y,{children:e("div",{className:"url-icon"})}),e(v,{disableTypography:!0,primary:e(d,{variant:"subtitle2",className:"about-list-font",children:c?c.companywebsite:""})})]}),t(g,{disableGutters:!0,divider:!0,children:[e(y,{children:e("div",{className:"phone-icon"})}),e(v,{disableTypography:!0,primary:e(d,{variant:"subtitle2",className:"about-list-font",children:c?c.phonenumber:""})})]}),t(g,{disableGutters:!0,divider:!0,children:[e(y,{children:e("div",{className:"home-icon"})}),e(v,{disableTypography:!0,primary:t(d,{variant:"subtitle2",className:"about-list-font",children:[c?c.companylocation:""," "]})})]}),t(g,{disableGutters:!0,divider:!0,children:[e(y,{children:e("div",{className:"mail-icon"})}),e(v,{primary:e(d,{variant:"subtitle2",className:"about-list-font",children:c?c.email:""})})]}),t(g,{disableGutters:!0,children:[e(y,{children:e("div",{className:"connect-icon"})}),e(v,{disableTypography:!0,primary:e(d,{variant:"subtitle2",className:"about-list-font",children:"25-75"})})]})]})]})]})})};D.propTypes={currentCity:l.string.isRequired,currentJobCompany:l.string.isRequired,currentJobTitle:l.string.isRequired,email:l.string.isRequired,originCity:l.string.isRequired,previousJobCompany:l.string.isRequired,previousJobTitle:l.string.isRequired,profileProgress:l.number.isRequired,quote:l.string.isRequired};const ye=n=>({brandinfo:n.profile.brandinfo}),ve=M(ye)(D),U=n=>{const{posts:i=[],profile:a,...s}=n;return e("div",{...s,children:t(T,{container:!0,children:[e(T,{lg:7,xs:12,children:e(ve,{currentCity:a.currentCity,currentJobCompany:a.currentJobCompany,currentJobTitle:a.currentJobTitle,email:a.email,originCity:a.originCity,previousJobCompany:a.previousJobCompany,previousJobTitle:a.previousJobTitle,profileProgress:a.profileProgress,quote:a.quote})}),e(T,{lg:5,xs:12,children:e(u,{spacing:3,children:e(de,{})})})]})})};U.propTypes={posts:l.array,profile:l.object.isRequired};const Ce=[{label:"Overview",value:"timeline"},{label:"Jobs Posted",value:"connections"}],ke=()=>{const n=w(),[i,a]=o.useState(null),s=o.useCallback(async()=>{try{const r=await P.getProfile();n()&&a(r)}catch(r){console.error(r)}},[n]);return o.useEffect(()=>{s()},[]),i},we=()=>{const n=w(),[i,a]=o.useState([]),s=o.useCallback(async()=>{try{const r=await P.getPosts();n()&&a(r)}catch(r){console.error(r)}},[n]);return o.useEffect(()=>{s()},[]),i},xe=(n="")=>{const[i,a]=o.useState([]),s=w(),r=o.useCallback(async()=>{const p=await P.getConnections();s()&&a(p)},[s]);return o.useEffect(()=>{r()},[n]),i.filter(p=>{var c;return(c=p.name)==null?void 0:c.toLowerCase().includes(n)})},Ne=n=>{const{brandinfo:i,userinfo:a}=n,s=ke(),[r,p]=o.useState("timeline"),[c,x]=o.useState("not_connected"),J=we(),[N,R]=o.useState(""),S=xe(N),[W,z]=o.useState(!1),G=ee();o.useEffect(()=>{G(te({brandID:window.location.pathname.split("/")[2].split("-")[2]}))},[G]);const $=ie(),H=o.useCallback(()=>{z(!0)},[]),V=o.useCallback(()=>{z(!1)},[]);ne(),o.useCallback(()=>{x("pending")},[]),o.useCallback(()=>{x("not_connected")},[]);const O=o.useCallback((m,K)=>{p(K)},[]),Z=o.useCallback(m=>{R(m.target.value)},[]);return s?t(q,{children:[e(ae,{title:"Dashboard: Social Profile"}),e(f,{component:"main",sx:{flexGrow:1,py:8},children:t(oe,{maxWidth:"xl",children:[t("div",{children:[e(f,{style:{backgroundImage:`url(${s.cover})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative","&:hover":{"& button":{visibility:"visible"}}},children:a.id==i.id?e(b,{startIcon:e(h,{children:e(ce,{})}),sx:{backgroundColor:A[900],bottom:{lg:24,xs:"auto"},color:"common.white",position:"absolute",right:24,top:{lg:"auto",xs:24},visibility:"hidden","&:hover":{backgroundColor:A[900]}},variant:"contained",children:"Change Cover"}):""}),t(u,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[t(u,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[e(B,{src:s.avatar,sx:{height:140,width:140}}),t("div",{className:"brand-info",children:[e(d,{color:"primary",variant:"h6",style:{fontSize:22},children:i?i.fullname:""}),t(d,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:["Established since ",i?i.companyfounded:""]}),e(d,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),e(d,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:i?i.companylocation:""})]})]}),e(f,{sx:{flexGrow:1}}),a.id===i.id?e(u,{alignItems:"center",direction:"row",spacing:2,className:"button-bar",sx:{display:{md:"block"}},children:e(b,{size:"small",className:"social-btn",startIcon:e(h,{children:e(le,{})}),onClick:()=>{$("/auth/auth/firstinfos")},variant:"contained",children:"Edit Profile"})}):e(u,{alignItems:"center",direction:"row",spacing:2,className:"button-bar",sx:{display:{md:"block"}},children:W?t(q,{children:[e(b,{onClick:V,size:"small",className:"fav-btn",startIcon:e(h,{sx:{color:"error.main","& path":{fill:m=>m.palette.error.main,fillOpacity:1}},children:e(j,{})}),variant:"outlined",children:"Favorite"}),e(b,{component:C,href:k.dashboard.chat,size:"small",className:"social-btn",startIcon:e(h,{children:e(E,{})}),variant:"contained",children:"Send Message"})]}):t(q,{children:[e(b,{onClick:H,size:"small",className:"fav-btn",startIcon:e(h,{children:e(j,{})}),variant:"outlined",children:"Favorite"}),e(b,{component:C,href:k.dashboard.chat,size:"small",className:"social-btn",startIcon:e(h,{children:e(E,{})}),variant:"contained",children:"Send Message"})]})})]})]}),e("div",{className:"quick-link-bar",children:t("div",{className:"right-quick",children:[e("div",{className:"quick-font",children:"Quick links"}),t("div",{className:"quick-links",children:[e("a",{className:"instagram-icon quick-link",href:"https://www.instagram.com",target:"_blank"}),e("a",{className:"tiktok-icon quick-link",href:"https://www.tiktok.com",target:"_blank"}),e("a",{className:"youtube-icon quick-link",href:"https://www.youtube.com",target:"_blank"}),e("a",{className:"twitter-icon quick-link",href:"https://www.twitter.com",target:"_blank"}),e("a",{className:"pinterest-icon quick-link",href:"https://www.pinterest",target:"_blank"})]})]})}),e(re,{indicatorColor:"primary",onChange:O,scrollButtons:"auto",sx:{mt:5},textColor:"primary",value:r,variant:"scrollable",className:"tab-panel",children:Ce.map(m=>e(se,{className:"social-font",label:m.label,value:m.value},m.value))}),e(F,{}),t(f,{children:[r==="timeline"&&e(U,{posts:J,profile:s}),r==="connections"&&e(_,{connections:S,onQueryChange:Z,query:N})]})]})})]}):null},Se=n=>({brandinfo:n.profile.brandinfo,userinfo:n.profile.userinfo}),Ue=M(Se)(Ne);export{Ue as default};
