import{ah as ie,ag as oe,ap as le,br as Ae,H as V,K as F,aE as $,r as m,aq as de,_ as ce,d as e,ar as N,ai as ue,b7 as b,b6 as y,P as c,bB as Z,j as u,F as G,f as z,aG as ze,aw as R,q as x,bC as pe,aR as E,n as q,G as I,b9 as H,c2 as Te,D as Y,l as w,k as C,aM as k,cB as Se,d2 as Re,d3 as Fe,C as J,bb as Ie,aY as Be,bm as De,bn as Me,bo as We,T as Oe,e as Le,aZ as $e,a_ as He,b_ as Ve,a$ as Ge,B as he,z as je,aS as _e,c8 as re,c as Ue,S as Ne,aL as Ee,u as Ze}from"./app-0b2379dc.js";import{U as qe}from"./Upload01-b9b9b99b.js";import{d as Ye}from"./deep-copy-ee95be26.js";import{a as Je}from"./apply-pagination-03aa54c3.js";import{s as f}from"./index-61f5b8be.js";import{a as Ke}from"./apply-sort-ec30f364.js";import{F as Qe}from"./file-uploader-8e8bb63b.js";import{E as Xe}from"./Edit02-e74ca9d2.js";import{S as K}from"./Star01-99a49e88.js";import{T as ge}from"./Trash02-3f0eb25c.js";import{b as j}from"./bytes-to-size-706bbf81.js";import{P as me}from"./Plus-81cb2d08.js";import{A as Q}from"./AvatarGroup-a293c715.js";import{D as fe}from"./DotsVertical-8487a6db.js";import{a as ve}from"./file-dropzone-54527a81.js";import{L as ea}from"./Link01-38a5b1c7.js";import{b as aa,c as W,T as ta,a as ra}from"./TableRow-64f18a5f.js";import{T as sa}from"./TablePagination-d8efb43a.js";import{L as na}from"./List-b0c50e82.js";import{C as ia}from"./chart-7e741fb5.js";import{C as oa}from"./CardHeader-559beb53.js";import{C as la}from"./CardActions-b5f5ec49.js";import"./tslib.es6-af7906ce.js";import"./LastPage-de27fa04.js";function da(t){return oe("MuiToggleButton",t)}const ca=ie("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),se=ca,ua=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],pa=t=>{const{classes:a,fullWidth:r,selected:s,disabled:n,size:o,color:p}=t,i={root:["root",s&&"selected",n&&"disabled",r&&"fullWidth",`size${V(o)}`,p]};return ue(i,da,a)},ha=le(Ae,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,a[`size${V(r.size)}`]]}})(({theme:t,ownerState:a})=>{let r=a.color==="standard"?t.palette.text.primary:t.palette[a.color].main,s;return t.vars&&(r=a.color==="standard"?t.vars.palette.text.primary:t.vars.palette[a.color].main,s=a.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[a.color].mainChannel),F({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},a.fullWidth&&{width:"100%"},{[`&.${se.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:$(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${se.selected}`]:{color:r,backgroundColor:t.vars?`rgba(${s} / ${t.vars.palette.action.selectedOpacity})`:$(r,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${s} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:$(r,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${s} / ${t.vars.palette.action.selectedOpacity})`:$(r,t.palette.action.selectedOpacity)}}}},a.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},a.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),ga=m.forwardRef(function(a,r){const s=de({props:a,name:"MuiToggleButton"}),{children:n,className:o,color:p="standard",disabled:i=!1,disableFocusRipple:d=!1,fullWidth:g=!1,onChange:h,onClick:l,selected:A,size:T="medium",value:D}=s,O=ce(s,ua),M=F({},s,{color:p,disabled:i,disableFocusRipple:d,fullWidth:g,size:T}),_=pa(M),U=P=>{l&&(l(P,D),P.defaultPrevented)||h&&h(P,D)};return e(ha,F({className:N(_.root,o),disabled:i,focusRipple:!d,ref:r,onClick:U,onChange:h,value:D,ownerState:M,"aria-pressed":A},O,{children:n}))}),ne=ga;function ma(t,a){return a===void 0||t===void 0?!1:Array.isArray(a)?a.indexOf(t)>=0:t===a}function fa(t){return oe("MuiToggleButtonGroup",t)}const va=ie("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),S=va,ba=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],Ca=t=>{const{classes:a,orientation:r,fullWidth:s,disabled:n}=t,o={root:["root",r==="vertical"&&"vertical",s&&"fullWidth"],grouped:["grouped",`grouped${V(r)}`,n&&"disabled"]};return ue(o,fa,a)},ya=le("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[{[`& .${S.grouped}`]:a.grouped},{[`& .${S.grouped}`]:a[`grouped${V(r.orientation)}`]},a.root,r.orientation==="vertical"&&a.vertical,r.fullWidth&&a.fullWidth]}})(({ownerState:t,theme:a})=>F({display:"inline-flex",borderRadius:(a.vars||a).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${S.grouped}`]:F({},t.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${S.selected} + .${S.grouped}.${S.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${S.selected} + .${S.grouped}.${S.selected}`]:{borderTop:0,marginTop:0}})})),xa=m.forwardRef(function(a,r){const s=de({props:a,name:"MuiToggleButtonGroup"}),{children:n,className:o,color:p="standard",disabled:i=!1,exclusive:d=!1,fullWidth:g=!1,onChange:h,orientation:l="horizontal",size:A="medium",value:T}=s,D=ce(s,ba),O=F({},s,{disabled:i,fullWidth:g,orientation:l,size:A}),M=Ca(O),_=(P,B)=>{if(!h)return;const te=T&&T.indexOf(B);let L;T&&te>=0?(L=T.slice(),L.splice(te,1)):L=T?T.concat(B):[B],h(P,L)},U=(P,B)=>{h&&h(P,T===B?null:B)};return e(ya,F({role:"group",className:N(M.root,o),ref:r,ownerState:O},D,{children:m.Children.map(n,P=>m.isValidElement(P)?m.cloneElement(P,{className:N(M.grouped,P.props.className),onChange:d?U:_,selected:P.props.selected===void 0?ma(P.props.value,T):P.props.selected,size:P.props.size||A,fullWidth:g,color:P.props.color||p,disabled:P.props.disabled||i}):null)}))}),ka=xa,v=new Date,Pa=[{id:"719a07ce8e46dee2388d411c",author:{avatar:"/assets/avatars/avatar-alcides-antonio.png",name:"Alcides Antonio"},createdAt:f(v,15).getTime(),isFavorite:!1,isPublic:!1,items:[],itemsCount:12,name:"AWS Credentials",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},{avatar:"/assets/avatars/avatar-miron-vitold.png",name:"Miron Vitold"}],size:528381242,tags:["Business","Work","Homework","Cats","Holiday","Friends"],type:"folder",updatedAt:null},{id:"ed41ba8be80fac27d08efe3a",author:{avatar:"/assets/avatars/avatar-fran-perez.png",name:"Fran Perez"},createdAt:f(v,23).getTime(),isFavorite:!0,isPublic:!0,items:[],itemsCount:5,name:"dev 2022",shared:[],size:519090127,tags:["Friends","Business","Homework","Personal"],type:"folder",updatedAt:f(v,2).getTime()},{id:"b8bb82b90aedf81d57ccdb4d",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:b(f(v,3),4).getTime(),isFavorite:!1,isPublic:!1,items:[],itemsCount:3,name:"AI Resources",shared:[{avatar:"/assets/avatars/avatar-miron-vitold.png",name:"Miron Vitold"},{avatar:"/assets/avatars/avatar-alcides-antonio.png",name:"Alcides Antonio"},{avatar:"/assets/avatars/avatar-nasimiyu-danai.png",name:"Nasimiyu Danai"}],size:194220900,tags:["Homework","Holiday","Important","Work","Friends","Personal"],type:"folder",updatedAt:null},{id:"b33fe3f9ced7e4fa7efcbd9a",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:b(f(v,16),20).getTime(),isFavorite:!0,isPublic:!1,itemsCount:17,name:"invoices",shared:[],size:731214568,tags:["Personal","Important","Invoices"],type:"folder",updatedAt:null},{id:"dffb38de19c7e9ce0dc690cf",author:{avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"},createdAt:b(f(v,23),26).getTime(),isFavorite:!0,isPublic:!0,items:[],itemsCount:12,name:"assets",shared:[],size:103885109,tags:["Invoices","Personal","Holiday","Homework","Cats","Work"],type:"folder",updatedAt:null},{id:"c23e85a978a79a5cb53c0b0a",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,41),6),2).getTime(),extension:"pdf",isFavorite:!0,isPublic:!1,name:"Personal-cv.pdf",shared:[{avatar:"/assets/avatars/avatar-alcides-antonio.png",name:"Alcides Antonio"}],size:472262466,tags:["Invoices","Work"],type:"file",updatedAt:null},{id:"b3acfe9aa417c1f9e1cda220",author:{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"},createdAt:y(b(f(v,41),6),2).getTime(),extension:"svg",isFavorite:!0,isPublic:!1,name:"company-logo-white.svg",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},{avatar:"/assets/avatars/avatar-nasimiyu-danai.png",name:"Nasimiyu Danai"}],size:762152011,tags:["Homework"],type:"file",updatedAt:null},{id:"afa0412fe4cdb39b3c8b9ad2",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,41),6),2).getTime(),extension:"jpeg",isFavorite:!0,isPublic:!1,name:"landing_cover1.jpeg",shared:[{avatar:"/assets/avatars/avatar-iulia-albu.png",name:"Iulia Albu"}],size:746826456,tags:["Important","Personal","Invoices","Homework","Business","Cats","Holiday"],type:"file",updatedAt:null},{id:"f90e02aaa5f7f9f87ae14ad8",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,41),6),2).getTime(),extension:"svg",isFavorite:!1,isPublic:!1,name:"About-Hero_shape-xl.svg",shared:[{avatar:"/assets/avatars/avatar-nasimiyu-danai.png",name:"Nasimiyu Danai"},{avatar:"/assets/avatars/avatar-iulia-albu.png",name:"Iulia Albu"}],size:374404524,tags:[],type:"file",updatedAt:null},{id:"b74e2b767d284d4a94de5e3a",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,41),6),2).getTime(),extension:"log",isFavorite:!0,isPublic:!1,name:"api-out.log",shared:[],size:54765975,tags:["Cats"],type:"file",updatedAt:null},{id:"b929bf2753254c05d45bc9fa",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,41),6),2).getTime(),extension:"ico",isFavorite:!0,isPublic:!1,name:"investor_optical_tactics.ico",shared:[{avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"}],size:674580489,tags:["Homework","Cats","Business","Personal","Friends"],type:"file",updatedAt:null},{id:"fdbadfb4cbbd5b3ea44b1823",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,3),14),6).getTime(),extension:"dmg",isFavorite:!0,isPublic:!1,name:"rustic_driver_pike.dmg",shared:[{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"},{avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"}],size:211681809,tags:["Work","Personal","Invoices","Homework"],type:"file",updatedAt:null},{id:"edc8f7a0420fef23bfeaafed",author:{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"},createdAt:y(b(f(v,21),4),9).getTime(),extension:"7z",isFavorite:!1,isPublic:!1,name:"strategist-auto_royce.7z",shared:[],size:928256606,tags:[],type:"file",updatedAt:null},{id:"28becedd58a2fb7be2d05cf5",author:{avatar:"/assets/avatars/avatar-marcus-finn.png",name:"Marcus Finn"},createdAt:y(b(f(v,45),11),9).getTime(),extension:"msi",isFavorite:!1,isPublic:!0,name:"Graphic Driver 1.11.msi",shared:[],size:436081098,tags:["Homework","Holiday","Cats","Invoices","Important","Work","Friends"],type:"file",updatedAt:null},{id:"5affd9c3af627afb1fdc7657",author:{avatar:"/assets/avatars/avatar-marcus-finn.png",name:"Marcus Finn"},createdAt:y(b(f(v,23),3),10).getTime(),extension:"svg",isFavorite:!1,isPublic:!0,name:"icon-arrow-right.svg",shared:[],size:6273,tags:["Personal"],type:"file",updatedAt:null},{id:"3bc08f0082b7dd2bd52fee6e",author:{avatar:"/assets/avatars/avatar-omar-darboe.png",name:"Omar Darobe"},createdAt:y(b(f(v,4),2),11).getTime(),extension:"rar",isFavorite:!1,isPublic:!1,name:"animation-ai-model.py",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"}],size:785187212,tags:["Work","Cats","Invoices"],type:"file",updatedAt:null},{id:"100bcfa1faeba4c36c7b5ad3",author:{avatar:"/assets/avatars/avatar-penjani-inyene.png",name:"Penjani Inyene"},createdAt:y(b(f(v,31),6),11).getTime(),extension:"png",isFavorite:!0,isPublic:!1,name:"hybrid_vw-2023.png",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"}],size:442600692,tags:["Important","Business","Holiday","Friends","Invoices","Personal"],type:"file",updatedAt:null},{id:"6e638cfc6ab9bd1c78a28f73",author:{avatar:"/assets/avatars/avatar-jie-yan-song.png",name:"Jie Yan Song"},createdAt:y(b(f(v,11),12),11).getTime(),extension:"png",isFavorite:!0,isPublic:!0,name:"diesel_electric.png",shared:[],size:363777187,tags:["Important","Homework"],type:"file",updatedAt:null},{id:"45fb900df5e07ac0c5aeedfa",author:{avatar:"/assets/avatars/avatar-alcides-antonio.png",name:"Alcides Antonio"},createdAt:y(b(f(v,4),15),15).getTime(),extension:"mp4",isFavorite:!1,isPublic:!1,name:"christmas carols.mp4",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"}],size:841133109,tags:["Personal","Important","Invoices"],type:"file",updatedAt:null},{id:"5e9b61b7caec888a9fb53fa5",author:{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"},createdAt:y(b(f(v,31),5),17).getTime(),extension:"dmg",isFavorite:!1,isPublic:!1,name:"Bandwidth_traffic-analyzer.dmg",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"}],size:258621281,tags:["Homework","Work","Personal","Important"],type:"file",updatedAt:null},{id:"ec4754671acbd7ad74afffa6",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,11),16),18).getTime(),extension:"pkg",isFavorite:!0,isPublic:!1,name:"devias-kit.fig",shared:[{avatar:"/assets/avatars/avatar-neha-punita.png",name:"Neha Punita"}],size:528228820,tags:["Work","Holiday","Friends"],type:"file",updatedAt:null},{id:"97c43cc1e0ad50cbbf14b6ce",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,1),3),37).getTime(),extension:"exe",isFavorite:!0,isPublic:!1,name:"not_a_virus.exe",shared:[{avatar:"/assets/avatars/avatar-cao-yu.png",name:"Cao Yu"},{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"}],size:600779531,tags:["Important","Friends"],type:"file",updatedAt:null},{id:"7cfdb3fed0bac18d77b555ba",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,12),11),40).getTime(),extension:"psd",isFavorite:!0,isPublic:!1,name:"website-hero-illustration.psd",shared:[{avatar:"/assets/avatars/avatar-cao-yu.png",name:"Cao Yu"}],size:333130679,tags:["Cats","Personal","Work","Important","Friends"],type:"file",updatedAt:null},{id:"e23ee9ae093bb6e25cce9f85",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,15),23),41).getTime(),extension:"tar",isFavorite:!0,isPublic:!1,name:"ssl-certs.tar",shared:[{avatar:"/assets/avatars/avatar-neha-punita.png",name:"Neha Punita"}],size:516488635,tags:["Cats","Friends","Important","Homework","Work","Personal","Business"],type:"file",updatedAt:null},{id:"22fae356b5b7c5d13c4b4ba8",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:y(b(f(v,40),11),62).getTime(),extension:"deb",isFavorite:!0,isPublic:!1,name:"tablet-driver-adapter.deb",shared:[],size:761277264,tags:["Cats","Homework","Business","Personal"],type:"file",updatedAt:null}];class wa{getItems(a={}){const{filters:r,page:s,rowsPerPage:n,sortBy:o,sortDir:p}=a;let i=Ye(Pa),d=i.length;return typeof r<"u"&&(i=i.filter(g=>!(typeof r.query<"u"&&r.query!==""&&!g.name.toLowerCase().includes(r.query.toLowerCase()))),d=i.length),typeof o<"u"&&typeof p<"u"&&(i=Ke(i,o,p)),typeof s<"u"&&typeof n<"u"&&(i=Je(i,s,n)),Promise.resolve({data:i,count:d})}}const Aa=new wa,za=["Invoices","Work","Business","Planning","Frontend","Design"],be=t=>{const{onChange:a,tags:r=[]}=t,s=Z(),n=m.useMemo(()=>za.filter(d=>!r.includes(d)),[r]),o=m.useCallback(d=>{const g=r.filter(h=>h!==d);a==null||a(g)},[r,a]),p=m.useCallback(d=>{let g;r.find(l=>l===d)?g=r.filter(l=>l!==d):g=[...r,d],s.handleClose(),a==null||a(g)},[r,s,a]),i=n.length>0;return u(G,{children:[u(z,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:1,children:[r.map(d=>e(ze,{label:d,onDelete:()=>o(d),size:"small"},d)),e(R,{onClick:s.handleOpen,ref:s.anchorRef,disabled:!i,children:e(x,{fontSize:"small",children:e(me,{})})})]}),e(pe,{anchorEl:s.anchorRef.current,anchorOrigin:{horizontal:"right",vertical:"bottom"},onClose:s.handleClose,open:s.open,transformOrigin:{horizontal:"right",vertical:"top"},children:n.map(d=>e(E,{onClick:()=>p(d),children:d},d))})]})};be.propTypes={onChange:c.func,tags:c.arrayOf(c.string.isRequired)};var X=function(a){return u("svg",F({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M12 2c2.7 1.8 3.5305 5.6628 3.6 9-.0695 3.3372-.9 7.2-3.6 9-2.7-1.8-3.5305-5.6628-3.6-9 .0695-3.3372.9-7.2 3.6-9Z"}),e("path",{fill:"#fff",fillOpacity:.01,d:"M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"}),e("path",{fill:"#fff",fillOpacity:.01,d:"M21 11c-1.8 2.7-5.6628 3.5305-9 3.6-3.3372-.0695-7.2-.9-9-3.6 1.8-2.7 5.6628-3.5305 9-3.6 3.3372.0695 7.2.9 9 3.6Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 2c2.7 1.8 3.5305 5.6628 3.6 9-.0695 3.3372-.9 7.2-3.6 9m0-18c-2.7 1.8-3.5305 5.6628-3.6 9 .0695 3.3372.9 7.2 3.6 9m0-18c-4.9706 0-9 4.0294-9 9m9-9c4.9706 0 9 4.0294 9 9m-9 9c4.9706 0 9-4.0294 9-9m-9 9c-4.9706 0-9-4.0294-9-9m18 0c-1.8 2.7-5.6628 3.5305-9 3.6-3.3372-.0695-7.2-.9-9-3.6m18 0c-1.8-2.7-5.6628-3.5305-9-3.6-3.3372.0695-7.2.9-9 3.6"})]}))};const Ce=t=>{const{isPublic:a,shared:r}=t,s=!a&&(r||[]).length>0;return u(z,{alignItems:"center",direction:"row",spacing:1,children:[a&&e(q,{title:"Public",children:e(I,{sx:{height:32,width:32},children:e(x,{fontSize:"small",children:e(X,{})})})}),s&&e(Q,{max:3,children:r==null?void 0:r.map(n=>e(I,{src:n.avatar,sx:{height:32,width:32}},n.name))}),e(R,{children:e(x,{fontSize:"small",children:e(me,{})})})]})};Ce.propTypes={isPublic:c.bool,shared:c.array};const ye=t=>{const{item:a,onClose:r,onDelete:s,onFavorite:n,onTagsChange:o,open:p=!1}=t;let i=null;if(a){const d=j(a.size),g=a.createdAt&&H(a.createdAt,"MMM dd, yyyy HH:mm"),h=a.updatedAt&&H(a.updatedAt,"MMM dd, yyyy HH:mm");i=u("div",{children:[u(z,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:2,sx:{p:3},children:[e(R,{onClick:()=>n==null?void 0:n(a.id,!a.isFavorite),children:e(x,{fontSize:"small",sx:{color:a.isFavorite?"warning.main":"action.active"},children:e(K,{})})}),e(R,{onClick:r,children:e(x,{fontSize:"small",children:e(Te,{})})})]}),e(Y,{}),u(w,{sx:{px:3,py:2},children:[e(w,{sx:{backgroundColor:l=>l.palette.mode==="dark"?"neutral.800":"neutral.50",borderColor:l=>l.palette.mode==="dark"?"neutral.500":"neutral.300",borderRadius:1,borderStyle:"dashed",borderWidth:1,display:"flex",justifyContent:"center",mb:2,p:3},children:e(ItemIcon,{type:a.type,extension:a.extension})}),u(z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{mb:2},children:[e(C,{variant:"h6",children:a.name}),e(R,{children:e(x,{fontSize:"small",children:e(Xe,{})})})]}),u(k,{container:!0,spacing:3,children:[e(k,{xs:12,sm:4,children:e(C,{color:"text.secondary",variant:"caption",children:"Created by"})}),e(k,{xs:12,sm:8,children:a.author&&e(I,{src:a.author.avatar||void 0})}),e(k,{xs:12,sm:4,children:e(C,{color:"text.secondary",variant:"caption",children:"Size"})}),e(k,{xs:12,sm:8,children:e(C,{variant:"body2",children:d})}),e(k,{xs:12,sm:4,children:e(C,{color:"text.secondary",variant:"caption",children:"Created At"})}),e(k,{xs:12,sm:8,children:e(C,{variant:"body2",children:g})}),e(k,{xs:12,sm:4,children:e(C,{color:"text.secondary",variant:"caption",children:"Modified At"})}),e(k,{xs:12,sm:8,children:e(C,{variant:"body2",children:h})}),e(k,{xs:12,sm:4,children:e(C,{color:"text.secondary",variant:"caption",children:"Tags"})}),e(k,{xs:12,sm:8,children:e(be,{tags:a.tags,onChange:l=>o==null?void 0:o(a.id,l)})}),e(k,{xs:12,sm:4,children:e(C,{color:"text.secondary",variant:"caption",children:"Shared with"})}),e(k,{xs:12,sm:8,children:e(Ce,{isPublic:a.isPublic,shared:a.shared})}),e(k,{xs:12,sm:4,children:e(C,{color:"text.secondary",variant:"caption",children:"Actions"})}),e(k,{xs:12,sm:8,children:e(R,{onClick:()=>s==null?void 0:s(a.id),children:e(x,{fontSize:"small",children:e(ge,{})})})})]})]})]})}return e(Se,{anchor:"right",ModalProps:{sx:{[`& .${Re.root}`]:{background:"transparent !important"}}},onClose:r,open:p,PaperProps:{sx:{maxWidth:"100%",width:400}},children:i})};ye.propTypes={item:c.object,onClose:c.func,onDelete:c.func,onFavorite:c.func,onTagsChange:c.func,open:c.bool};const ee=t=>{const{type:a,extension:r}=t;return a==="folder"?e("img",{src:"/assets/icons/icon-folder.svg"}):e(ve,{extension:r})};ee.propTypes={extension:c.string,type:c.oneOf(["file","folder"]).isRequired};const ae=t=>{const{anchorEl:a,onClose:r,onDelete:s,open:n=!1}=t;return u(pe,{anchorEl:a,anchorOrigin:{horizontal:"right",vertical:"bottom"},onClose:r,open:n,sx:{[`& .${Fe.root}`]:{fontSize:14,"& svg":{mr:1}}},transformOrigin:{horizontal:"right",vertical:"top"},children:[u(E,{onClick:r,children:[e(x,{fontSize:"small",children:e(ea,{})}),"Copy Link"]}),u(E,{onClick:s,sx:{color:"error.main"},children:[e(x,{fontSize:"small",children:e(ge,{})}),"Delete"]})]})};ae.propTypes={anchorEl:c.any,onClose:c.func,onDelete:c.func,open:c.bool};const xe=t=>{var h;const{item:a,onDelete:r,onFavorite:s,onOpen:n}=t,o=Z(),p=m.useCallback(()=>{o.handleClose(),r==null||r(a.id)},[a,o,r]);let i=j(a.size);a.type==="folder"&&(i+=`• ${a.itemsCount} items`);const d=a.createdAt&&H(a.createdAt,"MMM dd, yyyy"),g=!a.isPublic&&(a.shared||[]).length>0;return u(G,{children:[u(J,{sx:{backgroundColor:"transparent",boxShadow:0,transition:l=>l.transitions.create(["background-color, box-shadow"],{easing:l.transitions.easing.easeInOut,duration:200}),"&:hover":{backgroundColor:"background.paper",boxShadow:16}},variant:"outlined",children:[u(z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{pt:2,px:2},children:[e(R,{onClick:()=>s==null?void 0:s(a.id,!a.isFavorite),children:e(x,{fontSize:"small",sx:{color:a.isFavorite?"warning.main":"action.active"},children:e(K,{})})}),e(R,{onClick:o.handleOpen,ref:o.anchorRef,children:e(x,{fontSize:"small",children:e(fe,{})})})]}),u(w,{sx:{p:2},children:[e(w,{sx:{display:"flex",mb:1},children:e(w,{onClick:()=>n==null?void 0:n(a.id),sx:{display:"inline-flex",cursor:"pointer"},children:e(ee,{type:a.type,extension:a.extension})})}),e(C,{onClick:()=>n==null?void 0:n(a.id),sx:{cursor:"pointer"},variant:"subtitle2",children:a.name}),e(Y,{sx:{my:1}}),u(z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:1,children:[e("div",{children:e(C,{color:"text.secondary",variant:"body2",children:i})}),u("div",{children:[a.isPublic&&e(q,{title:"Public",children:e(I,{sx:{height:32,width:32},children:e(x,{fontSize:"small",children:e(X,{})})})}),g&&e(Q,{max:3,children:(h=a.shared)==null?void 0:h.map(l=>e(I,{src:l.avatar,sx:{height:32,width:32}},l.name))})]})]}),u(C,{color:"text.secondary",variant:"caption",children:["Created at ",d]})]})]},a.id),e(ae,{anchorEl:o.anchorRef.current,onClose:o.handleClose,onDelete:p,open:o.open})]})};xe.propTypes={item:c.object.isRequired,onDelete:c.func,onFavorite:c.func,onOpen:c.func};const ke=t=>{var h;const{item:a,onDelete:r,onFavorite:s,onOpen:n}=t,o=Z(),p=m.useCallback(()=>{o.handleClose(),r==null||r(a.id)},[a,o,r]);let i=j(a.size);a.type==="folder"&&(i+=`• ${a.itemsCount} items`);const d=a.createdAt&&H(a.createdAt,"MMM dd, yyyy"),g=!a.isPublic&&(a.shared||[]).length>0;return u(G,{children:[u(aa,{sx:{backgroundColor:"transparent",borderRadius:1.5,boxShadow:0,transition:l=>l.transitions.create(["background-color","box-shadow"],{easing:l.transitions.easing.easeInOut,duration:200}),"&:hover":{backgroundColor:"background.paper",boxShadow:16},[`& .${Ie.root}`]:{borderBottomWidth:1,borderBottomColor:"divider",borderBottomStyle:"solid",borderTopWidth:1,borderTopColor:"divider",borderTopStyle:"solid","&:first-of-type":{borderTopLeftRadius:l=>l.shape.borderRadius*1.5,borderBottomLeftRadius:l=>l.shape.borderRadius*1.5,borderLeftWidth:1,borderLeftColor:"divider",borderLeftStyle:"solid"},"&:last-of-type":{borderTopRightRadius:l=>l.shape.borderRadius*1.5,borderBottomRightRadius:l=>l.shape.borderRadius*1.5,borderRightWidth:1,borderRightColor:"divider",borderRightStyle:"solid"}}},children:[e(W,{children:u(z,{alignItems:"center",direction:"row",spacing:2,children:[e(w,{onClick:()=>n==null?void 0:n(a.id),sx:{cursor:"pointer"},children:e(ee,{type:a.type,extension:a.extension})}),u("div",{children:[e(C,{noWrap:!0,onClick:()=>n==null?void 0:n(a.id),sx:{cursor:"pointer"},variant:"subtitle2",children:a.name}),e(C,{color:"text.secondary",noWrap:!0,variant:"body2",children:i})]})]})}),u(W,{children:[e(C,{noWrap:!0,variant:"subtitle2",children:"Created at"}),e(C,{color:"text.secondary",noWrap:!0,variant:"body2",children:d})]}),e(W,{children:u(w,{sx:{display:"flex"},children:[a.isPublic&&e(q,{title:"Public",children:e(I,{sx:{height:32,width:32},children:e(x,{fontSize:"small",children:e(X,{})})})}),g&&e(Q,{max:3,children:(h=a.shared)==null?void 0:h.map(l=>e(I,{src:l.avatar,sx:{height:32,width:32}},l.name))})]})}),e(W,{align:"right",children:e(R,{onClick:()=>s==null?void 0:s(a.id,!a.isFavorite),children:e(x,{fontSize:"small",sx:{color:a.isFavorite?"warning.main":"action.active"},children:e(K,{})})})}),e(W,{align:"right",children:e(R,{onClick:o.handleOpen,ref:o.anchorRef,children:e(x,{fontSize:"small",children:e(fe,{})})})})]},a.id),e(ae,{anchorEl:o.anchorRef.current,onClose:o.handleClose,onDelete:p,open:o.open})]})};ke.propTypes={item:c.object.isRequired,onDelete:c.func,onFavorite:c.func,onOpen:c.func};const Pe=t=>{const{count:a=0,items:r=[],onDelete:s,onFavorite:n,onOpen:o,onPageChange:p=()=>{},onRowsPerPageChange:i,page:d=0,rowsPerPage:g=0,view:h="grid"}=t;let l;return h==="grid"?l=e(w,{sx:{display:"grid",gap:3,gridTemplateColumns:"repeat(3, 1fr)"},children:r.map(A=>e(xe,{item:A,onDelete:s,onFavorite:n,onOpen:o},A.id))}):l=e(w,{sx:{m:-3},children:e(Be,{children:e(w,{sx:{p:3},children:e(ta,{sx:{minWidth:600,borderCollapse:"separate",borderSpacing:"0 8px"},children:e(ra,{children:r.map(A=>e(ke,{item:A,onDelete:s,onFavorite:n,onOpen:o},A.id))})})})})}),u(z,{spacing:4,children:[l,e(sa,{component:"div",count:a,onPageChange:p,onRowsPerPageChange:i,page:d,rowsPerPage:g,rowsPerPageOptions:[9,18]})]})};Pe.propTypes={items:c.array,count:c.number,onDelete:c.func,onFavorite:c.func,onOpen:c.func,onPageChange:c.func,onRowsPerPageChange:c.func,page:c.number,rowsPerPage:c.number,view:c.oneOf(["grid","list"])};var Ta=function(a){return u("svg",F({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M8.4 3H4.6c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v3.8c0 .56 0 .84.109 1.054.0959.1882.2489.3411.437.437C3.76 10 4.04 10 4.6 10h3.8c.56 0 .84 0 1.054-.109a1.0001 1.0001 0 0 0 .437-.437C10 9.24 10 8.96 10 8.4V4.6c0-.56 0-.84-.109-1.054a1.0001 1.0001 0 0 0-.437-.437C9.24 3 8.96 3 8.4 3Zm11 0h-3.8c-.5601 0-.8401 0-1.054.109a1 1 0 0 0-.437.437C14 3.76 14 4.04 14 4.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.2139.109.4939.109 1.054.109h3.8c.5601 0 .8401 0 1.054-.109a1 1 0 0 0 .437-.437C21 9.24 21 8.96 21 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.2401 3 19.9601 3 19.4 3Zm0 11h-3.8c-.5601 0-.8401 0-1.054.109a.9998.9998 0 0 0-.437.437C14 14.7599 14 15.0399 14 15.6v3.8c0 .5601 0 .8401.109 1.054a.9998.9998 0 0 0 .437.437c.2139.109.4939.109 1.054.109h3.8c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C21 20.2401 21 19.9601 21 19.4v-3.8c0-.5601 0-.8401-.109-1.054a.9998.9998 0 0 0-.437-.437C20.2401 14 19.9601 14 19.4 14Zm-11 0H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 14.7599 3 15.0399 3 15.6v3.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 20.2401 10 19.9601 10 19.4v-3.8c0-.5601 0-.8401-.109-1.054a1 1 0 0 0-.437-.437C9.24 14 8.96 14 8.4 14Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.4 3H4.6c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v3.8c0 .56 0 .84.109 1.054.0959.1882.2489.3411.437.437C3.76 10 4.04 10 4.6 10h3.8c.56 0 .84 0 1.054-.109a1.0001 1.0001 0 0 0 .437-.437C10 9.24 10 8.96 10 8.4V4.6c0-.56 0-.84-.109-1.054a1.0001 1.0001 0 0 0-.437-.437C9.24 3 8.96 3 8.4 3Zm11 0h-3.8c-.5601 0-.8401 0-1.054.109a1 1 0 0 0-.437.437C14 3.76 14 4.04 14 4.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.2139.109.4939.109 1.054.109h3.8c.5601 0 .8401 0 1.054-.109a1 1 0 0 0 .437-.437C21 9.24 21 8.96 21 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.2401 3 19.9601 3 19.4 3Zm0 11h-3.8c-.5601 0-.8401 0-1.054.109a.9998.9998 0 0 0-.437.437C14 14.7599 14 15.0399 14 15.6v3.8c0 .5601 0 .8401.109 1.054a.9998.9998 0 0 0 .437.437c.2139.109.4939.109 1.054.109h3.8c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C21 20.2401 21 19.9601 21 19.4v-3.8c0-.5601 0-.8401-.109-1.054a.9998.9998 0 0 0-.437-.437C20.2401 14 19.9601 14 19.4 14Zm-11 0H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 14.7599 3 15.0399 3 15.6v3.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 20.2401 10 19.9601 10 19.4v-3.8c0-.5601 0-.8401-.109-1.054a1 1 0 0 0-.437-.437C9.24 14 8.96 14 8.4 14Z"})]}))};const Sa=[{label:"Latest",value:"desc"},{label:"Oldest",value:"asc"}],we=t=>{const{onFiltersChange:a,onSortChange:r,onViewChange:s,view:n="grid",sortDir:o="asc"}=t,p=m.useRef(null),i=m.useCallback(h=>{var A;h.preventDefault();const l=((A=p.current)==null?void 0:A.value)||"";a==null||a({query:l})},[a]),d=m.useCallback(h=>{const l=h.target.value;r==null||r(l)},[r]),g=m.useCallback((h,l)=>{s==null||s(l)},[s]);return e(J,{children:u(z,{alignItems:"center",direction:"row",gap:2,sx:{p:2},children:[e(w,{component:"form",onSubmit:i,sx:{flexGrow:1},children:e(De,{defaultValue:"",fullWidth:!0,inputProps:{ref:p},name:"itemName",placeholder:"Search",startAdornment:e(Me,{position:"start",children:e(x,{children:e(We,{})})})})}),u(ka,{exclusive:!0,onChange:g,sx:{borderWidth:1,borderColor:"divider",borderStyle:"solid",[`& .${S.grouped}`]:{margin:.5,border:0,"&:not(:first-of-type)":{borderRadius:1},"&:first-of-type":{borderRadius:1}}},value:n,children:[e(ne,{value:"grid",children:e(x,{fontSize:"small",children:e(Ta,{})})}),e(ne,{value:"list",children:e(x,{fontSize:"small",children:e(na,{})})})]}),e(Oe,{label:"Sort By",name:"sort",onChange:d,select:!0,SelectProps:{native:!0},value:o,children:Sa.map(h=>e("option",{value:h.value,children:h.label},h.value))})]})})};we.propTypes={onFiltersChange:c.func,onSortChange:c.func,onViewChange:c.func,sortBy:c.string,sortDir:c.oneOf(["asc","desc"]),view:c.oneOf(["grid","list"])};var Ra=function(a){return e("svg",F({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:e("path",{fill:"#fff",fillOpacity:.01,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m12.0567 3-8.0159 9.6191c-.3139.3767-.4708.565-.4732.7241a.45.45 0 0 0 .167.3568c.1238.1.369.1.8594.1h6.5627l-.9 7.2 8.0159-9.6191c.314-.3767.4709-.565.4733-.7241a.4498.4498 0 0 0-.1671-.3568c-.1237-.1-.3689-.1-.8593-.1h-6.5628l.9-7.2Z"})}))};const Fa=t=>{const a=je();return{chart:{background:"transparent",redrawOnParentResize:!1,redrawOnWindowResize:!1},colors:[a.palette.primary.main],fill:{opacity:1,type:"solid"},grid:{padding:{bottom:0,left:0,right:0,top:0}},labels:[t],plotOptions:{radialBar:{dataLabels:{name:{color:a.palette.text.primary,fontSize:"24px",fontWeight:500,show:!0,offsetY:-15},value:{show:!1}},endAngle:90,hollow:{size:"60%"},startAngle:-90,track:{background:a.palette.mode==="dark"?a.palette.primary.dark:a.palette.primary.light,strokeWidth:"100%"}}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{lineCap:"round"},theme:{mode:a.palette.mode}}},Ia=[{extension:"mp4",itemsCount:25,label:"MP4",size:24431234531},{extension:"png",itemsCount:591,label:"PNG",size:58723843923},{extension:"pdf",itemsCount:95,label:"PDF",size:432424040},{extension:null,itemsCount:210,label:"Other",size:274128437}],Ba=()=>{const r=Fa("75 GB");return u(J,{children:[e(oa,{title:"Storage",subheader:"Upgrade before reaching it"}),u(Le,{children:[u(z,{alignItems:"center",children:[e(w,{sx:{height:260,mt:"-48px",mb:"-100px"},children:e(ia,{width:260,height:260,options:r,series:[75],type:"radialBar"})}),e(C,{variant:"h6",sx:{mb:1},children:"You’ve almost reached your limit"}),u(C,{color:"text.secondary",variant:"body2",children:["You have used ",75,"% of your available storage."]})]}),e($e,{disablePadding:!0,sx:{mt:2},children:Ia.map(n=>{const o=j(n.size);return u(He,{disableGutters:!0,children:[e(Ve,{children:e(w,{sx:{color:"primary.main"},children:e(ve,{extension:n.extension})})}),e(Ge,{primary:e(C,{variant:"caption",children:n.label}),secondary:u(C,{color:"text.secondary",variant:"body2",children:[o," • ",n.itemsCount," items"]})})]},n.extension)})})]}),e(Y,{}),e(la,{sx:{justifyContent:"flex-end"},children:e(he,{endIcon:e(x,{fontSize:"small",children:e(Ra,{})}),size:"small",variant:"contained",children:"Upgrade Plan"})})]})},Da=()=>{const[t,a]=m.useState({filters:{query:void 0},page:0,rowsPerPage:9,sortBy:"createdAt",sortDir:"desc"}),r=m.useCallback(p=>{a(i=>({...i,filters:p}))},[]),s=m.useCallback(p=>{a(i=>({...i,sortDir:p}))},[]),n=m.useCallback((p,i)=>{a(d=>({...d,page:i}))},[]),o=m.useCallback(p=>{a(i=>({...i,rowsPerPage:parseInt(p.target.value,10)}))},[]);return{handleFiltersChange:r,handleSortChange:s,handlePageChange:n,handleRowsPerPageChange:o,state:t}},Ma=t=>{const a=Ze(),[r,s]=m.useState({items:[],itemsCount:0}),n=m.useCallback(async()=>{try{const i=await Aa.getItems(t);a()&&s({items:i.data,itemsCount:i.count})}catch(i){console.error(i)}},[t,a]);m.useEffect(()=>{n()},[t]);const o=m.useCallback(i=>{s(d=>({...d,items:d.items.filter(g=>g.id!==i)}))},[]),p=m.useCallback((i,d)=>{s(g=>({...g,items:g.items.map(h=>h.id===i?{...h,isFavorite:d}:h)}))},[]);return{handleDelete:o,handleFavorite:p,...r}},Wa=(t,a)=>m.useMemo(()=>{if(a)return t.find(r=>r.id===a)},[t,a]),it=()=>{const t=_e(),a=Da(),r=Ma(a.state),[s,n]=m.useState("grid"),o=re(),p=re(),i=Wa(r.items,p.data);Ue();const d=m.useCallback(g=>{p.handleClose(),r.handleDelete(g)},[p,r]);return u(G,{children:[e(Ne,{title:"Dashboard: File Manager"}),e(w,{component:"main",sx:{flexGrow:1,py:8},children:e(Ee,{maxWidth:t.stretch?!1:"xl",children:u(k,{container:!0,spacing:{xs:3,lg:4},children:[e(k,{xs:12,children:u(z,{direction:"row",justifyContent:"space-between",spacing:4,children:[e("div",{children:e(C,{variant:"h4",children:"File Manager"})}),e(z,{alignItems:"center",direction:"row",spacing:2,children:e(he,{onClick:o.handleOpen,startIcon:e(x,{children:e(qe,{})}),variant:"contained",children:"Upload"})})]})}),e(k,{xs:12,md:8,children:u(z,{spacing:{xs:3,lg:4},children:[e(we,{onFiltersChange:a.handleFiltersChange,onSortChange:a.handleSortChange,onViewChange:n,sortBy:a.state.sortBy,sortDir:a.state.sortDir,view:s}),e(Pe,{count:r.itemsCount,items:r.items,onDelete:d,onFavorite:r.handleFavorite,onOpen:p.handleOpen,onPageChange:a.handlePageChange,onRowsPerPageChange:a.handleRowsPerPageChange,page:a.state.page,rowsPerPage:a.state.rowsPerPage,view:s})]})}),e(k,{xs:12,md:4,children:e(Ba,{})})]})})}),e(ye,{item:i,onClose:p.handleClose,onDelete:d,onFavorite:r.handleFavorite,open:p.open}),e(Qe,{onClose:o.handleClose,open:o.open})]})};export{it as default};
