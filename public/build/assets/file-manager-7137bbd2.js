import{n as ie,o as oe,s as le,bm as Te,t as H,_ as S,aQ as $,r as m,x as de,y as ce,d as e,z as _,A as ue,b2 as f,b1 as C,b0 as x,E as c,j as u,bM as Se,f as A,k as b,I as T,J as y,b_ as pe,bO as Fe,bB as N,F as G,b5 as Re,bC as he,$ as E,G as q,a1 as I,b4 as V,D as Y,l as P,aF as k,cj as Ie,cH as Be,cI as De,C as J,b7 as Me,aS as We,Z as Oe,bf as Le,bg as $e,T as Ve,e as He,aT as Ge,aU as je,bW as Ue,aV as Ze,B as ge,W as _e,aL as Ee,cr as re,c as Ne,S as qe,aE as Ye,u as Je}from"./app-7d1d9a01.js";import{U as Qe}from"./Upload01-96b277d4.js";import{d as Xe}from"./deep-copy-ee95be26.js";import{a as Ke}from"./apply-pagination-03aa54c3.js";import{a as ea}from"./apply-sort-ec30f364.js";import{F as aa,a as me}from"./file-dropzone-2f92a0c6.js";import{E as ta}from"./Edit02-b1ca9ec6.js";import{S as Q}from"./Star01-8c89ba75.js";import{T as fe}from"./Trash02-342c3bba.js";import{b as j}from"./bytes-to-size-706bbf81.js";import{P as ve}from"./Plus-44005258.js";import{A as X}from"./AvatarGroup-5da57a38.js";import{L as ra}from"./Link01-2eb8f439.js";import{b as sa,c as W,T as na,a as ia}from"./TableRow-b3e34364.js";import{T as oa}from"./TablePagination-18927ed6.js";import{L as la}from"./List-ea88a14e.js";import{C as da}from"./chart-24fd5217.js";import{C as ca}from"./CardHeader-d99a6169.js";import{C as ua}from"./CardActions-8b2239cd.js";import"./tslib.es6-af7906ce.js";function pa(t){return oe("MuiToggleButton",t)}const ha=ie("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge"]),se=ha,ga=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],ma=t=>{const{classes:a,fullWidth:r,selected:s,disabled:n,size:o,color:p}=t,i={root:["root",s&&"selected",n&&"disabled",r&&"fullWidth",`size${H(o)}`,p]};return ue(i,pa,a)},fa=le(Te,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[a.root,a[`size${H(r.size)}`]]}})(({theme:t,ownerState:a})=>{let r=a.color==="standard"?t.palette.text.primary:t.palette[a.color].main,s;return t.vars&&(r=a.color==="standard"?t.vars.palette.text.primary:t.vars.palette[a.color].main,s=a.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[a.color].mainChannel),S({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},a.fullWidth&&{width:"100%"},{[`&.${se.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:$(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${se.selected}`]:{color:r,backgroundColor:t.vars?`rgba(${s} / ${t.vars.palette.action.selectedOpacity})`:$(r,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${s} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:$(r,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${s} / ${t.vars.palette.action.selectedOpacity})`:$(r,t.palette.action.selectedOpacity)}}}},a.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},a.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),va=m.forwardRef(function(a,r){const s=de({props:a,name:"MuiToggleButton"}),{children:n,className:o,color:p="standard",disabled:i=!1,disableFocusRipple:l=!1,fullWidth:g=!1,onChange:h,onClick:d,selected:z,size:F="medium",value:D}=s,O=ce(s,ga),M=S({},s,{color:p,disabled:i,disableFocusRipple:l,fullWidth:g,size:F}),U=ma(M),Z=w=>{d&&(d(w,D),w.defaultPrevented)||h&&h(w,D)};return e(fa,S({className:_(U.root,o),disabled:i,focusRipple:!l,ref:r,onClick:Z,onChange:h,value:D,ownerState:M,"aria-pressed":z},O,{children:n}))}),ne=va;function ba(t,a){return a===void 0||t===void 0?!1:Array.isArray(a)?a.indexOf(t)>=0:t===a}function Ca(t){return oe("MuiToggleButtonGroup",t)}const ya=ie("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical"]),R=ya,xa=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],ka=t=>{const{classes:a,orientation:r,fullWidth:s,disabled:n}=t,o={root:["root",r==="vertical"&&"vertical",s&&"fullWidth"],grouped:["grouped",`grouped${H(r)}`,n&&"disabled"]};return ue(o,Ca,a)},wa=le("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:r}=t;return[{[`& .${R.grouped}`]:a.grouped},{[`& .${R.grouped}`]:a[`grouped${H(r.orientation)}`]},a.root,r.orientation==="vertical"&&a.vertical,r.fullWidth&&a.fullWidth]}})(({ownerState:t,theme:a})=>S({display:"inline-flex",borderRadius:(a.vars||a).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${R.grouped}`]:S({},t.orientation==="horizontal"?{"&:not(:first-of-type)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-of-type)":{borderTopRightRadius:0,borderBottomRightRadius:0},[`&.${R.selected} + .${R.grouped}.${R.selected}`]:{borderLeft:0,marginLeft:0}}:{"&:not(:first-of-type)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-of-type)":{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`&.${R.selected} + .${R.grouped}.${R.selected}`]:{borderTop:0,marginTop:0}})})),Aa=m.forwardRef(function(a,r){const s=de({props:a,name:"MuiToggleButtonGroup"}),{children:n,className:o,color:p="standard",disabled:i=!1,exclusive:l=!1,fullWidth:g=!1,onChange:h,orientation:d="horizontal",size:z="medium",value:F}=s,D=ce(s,xa),O=S({},s,{disabled:i,fullWidth:g,orientation:d,size:z}),M=ka(O),U=(w,B)=>{if(!h)return;const te=F&&F.indexOf(B);let L;F&&te>=0?(L=F.slice(),L.splice(te,1)):L=F?F.concat(B):[B],h(w,L)},Z=(w,B)=>{h&&h(w,F===B?null:B)};return e(wa,S({role:"group",className:_(M.root,o),ref:r,ownerState:O},D,{children:m.Children.map(n,w=>m.isValidElement(w)?m.cloneElement(w,{className:_(M.grouped,w.props.className),onChange:l?Z:U,selected:w.props.selected===void 0?ba(w.props.value,F):w.props.selected,size:w.props.size||z,fullWidth:g,color:w.props.color||p,disabled:w.props.disabled||i}):null)}))}),Pa=Aa,v=new Date,za=[{id:"719a07ce8e46dee2388d411c",author:{avatar:"/assets/avatars/avatar-alcides-antonio.png",name:"Alcides Antonio"},createdAt:f(v,15).getTime(),isFavorite:!1,isPublic:!1,items:[],itemsCount:12,name:"AWS Credentials",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},{avatar:"/assets/avatars/avatar-miron-vitold.png",name:"Miron Vitold"}],size:528381242,tags:["Business","Work","Homework","Cats","Holiday","Friends"],type:"folder",updatedAt:null},{id:"ed41ba8be80fac27d08efe3a",author:{avatar:"/assets/avatars/avatar-fran-perez.png",name:"Fran Perez"},createdAt:f(v,23).getTime(),isFavorite:!0,isPublic:!0,items:[],itemsCount:5,name:"dev 2022",shared:[],size:519090127,tags:["Friends","Business","Homework","Personal"],type:"folder",updatedAt:f(v,2).getTime()},{id:"b8bb82b90aedf81d57ccdb4d",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:C(f(v,3),4).getTime(),isFavorite:!1,isPublic:!1,items:[],itemsCount:3,name:"AI Resources",shared:[{avatar:"/assets/avatars/avatar-miron-vitold.png",name:"Miron Vitold"},{avatar:"/assets/avatars/avatar-alcides-antonio.png",name:"Alcides Antonio"},{avatar:"/assets/avatars/avatar-nasimiyu-danai.png",name:"Nasimiyu Danai"}],size:194220900,tags:["Homework","Holiday","Important","Work","Friends","Personal"],type:"folder",updatedAt:null},{id:"b33fe3f9ced7e4fa7efcbd9a",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:C(f(v,16),20).getTime(),isFavorite:!0,isPublic:!1,itemsCount:17,name:"invoices",shared:[],size:731214568,tags:["Personal","Important","Invoices"],type:"folder",updatedAt:null},{id:"dffb38de19c7e9ce0dc690cf",author:{avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"},createdAt:C(f(v,23),26).getTime(),isFavorite:!0,isPublic:!0,items:[],itemsCount:12,name:"assets",shared:[],size:103885109,tags:["Invoices","Personal","Holiday","Homework","Cats","Work"],type:"folder",updatedAt:null},{id:"c23e85a978a79a5cb53c0b0a",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,41),6),2).getTime(),extension:"pdf",isFavorite:!0,isPublic:!1,name:"Personal-cv.pdf",shared:[{avatar:"/assets/avatars/avatar-alcides-antonio.png",name:"Alcides Antonio"}],size:472262466,tags:["Invoices","Work"],type:"file",updatedAt:null},{id:"b3acfe9aa417c1f9e1cda220",author:{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"},createdAt:x(C(f(v,41),6),2).getTime(),extension:"svg",isFavorite:!0,isPublic:!1,name:"company-logo-white.svg",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},{avatar:"/assets/avatars/avatar-nasimiyu-danai.png",name:"Nasimiyu Danai"}],size:762152011,tags:["Homework"],type:"file",updatedAt:null},{id:"afa0412fe4cdb39b3c8b9ad2",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,41),6),2).getTime(),extension:"jpeg",isFavorite:!0,isPublic:!1,name:"landing_cover1.jpeg",shared:[{avatar:"/assets/avatars/avatar-iulia-albu.png",name:"Iulia Albu"}],size:746826456,tags:["Important","Personal","Invoices","Homework","Business","Cats","Holiday"],type:"file",updatedAt:null},{id:"f90e02aaa5f7f9f87ae14ad8",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,41),6),2).getTime(),extension:"svg",isFavorite:!1,isPublic:!1,name:"About-Hero_shape-xl.svg",shared:[{avatar:"/assets/avatars/avatar-nasimiyu-danai.png",name:"Nasimiyu Danai"},{avatar:"/assets/avatars/avatar-iulia-albu.png",name:"Iulia Albu"}],size:374404524,tags:[],type:"file",updatedAt:null},{id:"b74e2b767d284d4a94de5e3a",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,41),6),2).getTime(),extension:"log",isFavorite:!0,isPublic:!1,name:"api-out.log",shared:[],size:54765975,tags:["Cats"],type:"file",updatedAt:null},{id:"b929bf2753254c05d45bc9fa",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,41),6),2).getTime(),extension:"ico",isFavorite:!0,isPublic:!1,name:"investor_optical_tactics.ico",shared:[{avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"}],size:674580489,tags:["Homework","Cats","Business","Personal","Friends"],type:"file",updatedAt:null},{id:"fdbadfb4cbbd5b3ea44b1823",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,3),14),6).getTime(),extension:"dmg",isFavorite:!0,isPublic:!1,name:"rustic_driver_pike.dmg",shared:[{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"},{avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"}],size:211681809,tags:["Work","Personal","Invoices","Homework"],type:"file",updatedAt:null},{id:"edc8f7a0420fef23bfeaafed",author:{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"},createdAt:x(C(f(v,21),4),9).getTime(),extension:"7z",isFavorite:!1,isPublic:!1,name:"strategist-auto_royce.7z",shared:[],size:928256606,tags:[],type:"file",updatedAt:null},{id:"28becedd58a2fb7be2d05cf5",author:{avatar:"/assets/avatars/avatar-marcus-finn.png",name:"Marcus Finn"},createdAt:x(C(f(v,45),11),9).getTime(),extension:"msi",isFavorite:!1,isPublic:!0,name:"Graphic Driver 1.11.msi",shared:[],size:436081098,tags:["Homework","Holiday","Cats","Invoices","Important","Work","Friends"],type:"file",updatedAt:null},{id:"5affd9c3af627afb1fdc7657",author:{avatar:"/assets/avatars/avatar-marcus-finn.png",name:"Marcus Finn"},createdAt:x(C(f(v,23),3),10).getTime(),extension:"svg",isFavorite:!1,isPublic:!0,name:"icon-arrow-right.svg",shared:[],size:6273,tags:["Personal"],type:"file",updatedAt:null},{id:"3bc08f0082b7dd2bd52fee6e",author:{avatar:"/assets/avatars/avatar-omar-darboe.png",name:"Omar Darobe"},createdAt:x(C(f(v,4),2),11).getTime(),extension:"rar",isFavorite:!1,isPublic:!1,name:"animation-ai-model.py",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"}],size:785187212,tags:["Work","Cats","Invoices"],type:"file",updatedAt:null},{id:"100bcfa1faeba4c36c7b5ad3",author:{avatar:"/assets/avatars/avatar-penjani-inyene.png",name:"Penjani Inyene"},createdAt:x(C(f(v,31),6),11).getTime(),extension:"png",isFavorite:!0,isPublic:!1,name:"hybrid_vw-2023.png",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"}],size:442600692,tags:["Important","Business","Holiday","Friends","Invoices","Personal"],type:"file",updatedAt:null},{id:"6e638cfc6ab9bd1c78a28f73",author:{avatar:"/assets/avatars/avatar-jie-yan-song.png",name:"Jie Yan Song"},createdAt:x(C(f(v,11),12),11).getTime(),extension:"png",isFavorite:!0,isPublic:!0,name:"diesel_electric.png",shared:[],size:363777187,tags:["Important","Homework"],type:"file",updatedAt:null},{id:"45fb900df5e07ac0c5aeedfa",author:{avatar:"/assets/avatars/avatar-alcides-antonio.png",name:"Alcides Antonio"},createdAt:x(C(f(v,4),15),15).getTime(),extension:"mp4",isFavorite:!1,isPublic:!1,name:"christmas carols.mp4",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"}],size:841133109,tags:["Personal","Important","Invoices"],type:"file",updatedAt:null},{id:"5e9b61b7caec888a9fb53fa5",author:{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"},createdAt:x(C(f(v,31),5),17).getTime(),extension:"dmg",isFavorite:!1,isPublic:!1,name:"Bandwidth_traffic-analyzer.dmg",shared:[{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"}],size:258621281,tags:["Homework","Work","Personal","Important"],type:"file",updatedAt:null},{id:"ec4754671acbd7ad74afffa6",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,11),16),18).getTime(),extension:"pkg",isFavorite:!0,isPublic:!1,name:"devias-kit.fig",shared:[{avatar:"/assets/avatars/avatar-neha-punita.png",name:"Neha Punita"}],size:528228820,tags:["Work","Holiday","Friends"],type:"file",updatedAt:null},{id:"97c43cc1e0ad50cbbf14b6ce",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,1),3),37).getTime(),extension:"exe",isFavorite:!0,isPublic:!1,name:"not_a_virus.exe",shared:[{avatar:"/assets/avatars/avatar-cao-yu.png",name:"Cao Yu"},{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"}],size:600779531,tags:["Important","Friends"],type:"file",updatedAt:null},{id:"7cfdb3fed0bac18d77b555ba",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,12),11),40).getTime(),extension:"psd",isFavorite:!0,isPublic:!1,name:"website-hero-illustration.psd",shared:[{avatar:"/assets/avatars/avatar-cao-yu.png",name:"Cao Yu"}],size:333130679,tags:["Cats","Personal","Work","Important","Friends"],type:"file",updatedAt:null},{id:"e23ee9ae093bb6e25cce9f85",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,15),23),41).getTime(),extension:"tar",isFavorite:!0,isPublic:!1,name:"ssl-certs.tar",shared:[{avatar:"/assets/avatars/avatar-neha-punita.png",name:"Neha Punita"}],size:516488635,tags:["Cats","Friends","Important","Homework","Work","Personal","Business"],type:"file",updatedAt:null},{id:"22fae356b5b7c5d13c4b4ba8",author:{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},createdAt:x(C(f(v,40),11),62).getTime(),extension:"deb",isFavorite:!0,isPublic:!1,name:"tablet-driver-adapter.deb",shared:[],size:761277264,tags:["Cats","Homework","Business","Personal"],type:"file",updatedAt:null}];class Ta{getItems(a={}){const{filters:r,page:s,rowsPerPage:n,sortBy:o,sortDir:p}=a;let i=Xe(za),l=i.length;return typeof r<"u"&&(i=i.filter(g=>!(typeof r.query<"u"&&r.query!==""&&!g.name.toLowerCase().includes(r.query.toLowerCase()))),l=i.length),typeof o<"u"&&typeof p<"u"&&(i=ea(i,o,p)),typeof s<"u"&&typeof n<"u"&&(i=Ke(i,s,n)),Promise.resolve({data:i,count:l})}}const Sa=new Ta,be=t=>{const{onClose:a,open:r=!1}=t,[s,n]=m.useState([]);m.useEffect(()=>{n([])},[r]);const o=m.useCallback(l=>{n(g=>[...g,...l])},[]),p=m.useCallback(l=>{n(g=>g.filter(h=>h.path!==l.path))},[]),i=m.useCallback(()=>{n([])},[]);return u(Se,{fullWidth:!0,maxWidth:"sm",open:r,onClose:a,children:[u(A,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{px:3,py:2},children:[e(b,{variant:"h6",children:"Upload Files"}),e(T,{color:"inherit",onClick:a,children:e(y,{children:e(pe,{})})})]}),e(Fe,{children:e(aa,{accept:{"*/*":[]},caption:"Max file size is 3 MB",files:s,onDrop:o,onRemove:p,onRemoveAll:i,onUpload:a})})]})};be.propTypes={onClose:c.func,open:c.bool};const Fa=["Invoices","Work","Business","Planning","Frontend","Design"],Ce=t=>{const{onChange:a,tags:r=[]}=t,s=N(),n=m.useMemo(()=>Fa.filter(l=>!r.includes(l)),[r]),o=m.useCallback(l=>{const g=r.filter(h=>h!==l);a==null||a(g)},[r,a]),p=m.useCallback(l=>{let g;r.find(d=>d===l)?g=r.filter(d=>d!==l):g=[...r,l],s.handleClose(),a==null||a(g)},[r,s,a]),i=n.length>0;return u(G,{children:[u(A,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:1,children:[r.map(l=>e(Re,{label:l,onDelete:()=>o(l),size:"small"},l)),e(T,{onClick:s.handleOpen,ref:s.anchorRef,disabled:!i,children:e(y,{fontSize:"small",children:e(ve,{})})})]}),e(he,{anchorEl:s.anchorRef.current,anchorOrigin:{horizontal:"right",vertical:"bottom"},onClose:s.handleClose,open:s.open,transformOrigin:{horizontal:"right",vertical:"top"},children:n.map(l=>e(E,{onClick:()=>p(l),children:l},l))})]})};Ce.propTypes={onChange:c.func,tags:c.arrayOf(c.string.isRequired)};var K=function(a){return u("svg",S({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M12 2c2.7 1.8 3.5305 5.6628 3.6 9-.0695 3.3372-.9 7.2-3.6 9-2.7-1.8-3.5305-5.6628-3.6-9 .0695-3.3372.9-7.2 3.6-9Z"}),e("path",{fill:"#fff",fillOpacity:.01,d:"M12 20c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"}),e("path",{fill:"#fff",fillOpacity:.01,d:"M21 11c-1.8 2.7-5.6628 3.5305-9 3.6-3.3372-.0695-7.2-.9-9-3.6 1.8-2.7 5.6628-3.5305 9-3.6 3.3372.0695 7.2.9 9 3.6Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 2c2.7 1.8 3.5305 5.6628 3.6 9-.0695 3.3372-.9 7.2-3.6 9m0-18c-2.7 1.8-3.5305 5.6628-3.6 9 .0695 3.3372.9 7.2 3.6 9m0-18c-4.9706 0-9 4.0294-9 9m9-9c4.9706 0 9 4.0294 9 9m-9 9c4.9706 0 9-4.0294 9-9m-9 9c-4.9706 0-9-4.0294-9-9m18 0c-1.8 2.7-5.6628 3.5305-9 3.6-3.3372-.0695-7.2-.9-9-3.6m18 0c-1.8-2.7-5.6628-3.5305-9-3.6-3.3372.0695-7.2.9-9 3.6"})]}))};const ye=t=>{const{isPublic:a,shared:r}=t,s=!a&&(r||[]).length>0;return u(A,{alignItems:"center",direction:"row",spacing:1,children:[a&&e(q,{title:"Public",children:e(I,{sx:{height:32,width:32},children:e(y,{fontSize:"small",children:e(K,{})})})}),s&&e(X,{max:3,children:r==null?void 0:r.map(n=>e(I,{src:n.avatar,sx:{height:32,width:32}},n.name))}),e(T,{children:e(y,{fontSize:"small",children:e(ve,{})})})]})};ye.propTypes={isPublic:c.bool,shared:c.array};const xe=t=>{const{item:a,onClose:r,onDelete:s,onFavorite:n,onTagsChange:o,open:p=!1}=t;let i=null;if(a){const l=j(a.size),g=a.createdAt&&V(a.createdAt,"MMM dd, yyyy HH:mm"),h=a.updatedAt&&V(a.updatedAt,"MMM dd, yyyy HH:mm");i=u("div",{children:[u(A,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:2,sx:{p:3},children:[e(T,{onClick:()=>n==null?void 0:n(a.id,!a.isFavorite),children:e(y,{fontSize:"small",sx:{color:a.isFavorite?"warning.main":"action.active"},children:e(Q,{})})}),e(T,{onClick:r,children:e(y,{fontSize:"small",children:e(pe,{})})})]}),e(Y,{}),u(P,{sx:{px:3,py:2},children:[e(P,{sx:{backgroundColor:d=>d.palette.mode==="dark"?"neutral.800":"neutral.50",borderColor:d=>d.palette.mode==="dark"?"neutral.500":"neutral.300",borderRadius:1,borderStyle:"dashed",borderWidth:1,display:"flex",justifyContent:"center",mb:2,p:3},children:e(ItemIcon,{type:a.type,extension:a.extension})}),u(A,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{mb:2},children:[e(b,{variant:"h6",children:a.name}),e(T,{children:e(y,{fontSize:"small",children:e(ta,{})})})]}),u(k,{container:!0,spacing:3,children:[e(k,{xs:12,sm:4,children:e(b,{color:"text.secondary",variant:"caption",children:"Created by"})}),e(k,{xs:12,sm:8,children:a.author&&e(I,{src:a.author.avatar||void 0})}),e(k,{xs:12,sm:4,children:e(b,{color:"text.secondary",variant:"caption",children:"Size"})}),e(k,{xs:12,sm:8,children:e(b,{variant:"body2",children:l})}),e(k,{xs:12,sm:4,children:e(b,{color:"text.secondary",variant:"caption",children:"Created At"})}),e(k,{xs:12,sm:8,children:e(b,{variant:"body2",children:g})}),e(k,{xs:12,sm:4,children:e(b,{color:"text.secondary",variant:"caption",children:"Modified At"})}),e(k,{xs:12,sm:8,children:e(b,{variant:"body2",children:h})}),e(k,{xs:12,sm:4,children:e(b,{color:"text.secondary",variant:"caption",children:"Tags"})}),e(k,{xs:12,sm:8,children:e(Ce,{tags:a.tags,onChange:d=>o==null?void 0:o(a.id,d)})}),e(k,{xs:12,sm:4,children:e(b,{color:"text.secondary",variant:"caption",children:"Shared with"})}),e(k,{xs:12,sm:8,children:e(ye,{isPublic:a.isPublic,shared:a.shared})}),e(k,{xs:12,sm:4,children:e(b,{color:"text.secondary",variant:"caption",children:"Actions"})}),e(k,{xs:12,sm:8,children:e(T,{onClick:()=>s==null?void 0:s(a.id),children:e(y,{fontSize:"small",children:e(fe,{})})})})]})]})]})}return e(Ie,{anchor:"right",ModalProps:{sx:{[`& .${Be.root}`]:{background:"transparent !important"}}},onClose:r,open:p,PaperProps:{sx:{maxWidth:"100%",width:400}},children:i})};xe.propTypes={item:c.object,onClose:c.func,onDelete:c.func,onFavorite:c.func,onTagsChange:c.func,open:c.bool};var ke=function(a){return u("svg",S({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M12 13c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm0-7c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm0 14c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 13c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm0-7c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Zm0 14c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1Z"})]}))};const ee=t=>{const{type:a,extension:r}=t;return a==="folder"?e("img",{src:"/assets/icons/icon-folder.svg"}):e(me,{extension:r})};ee.propTypes={extension:c.string,type:c.oneOf(["file","folder"]).isRequired};const ae=t=>{const{anchorEl:a,onClose:r,onDelete:s,open:n=!1}=t;return u(he,{anchorEl:a,anchorOrigin:{horizontal:"right",vertical:"bottom"},onClose:r,open:n,sx:{[`& .${De.root}`]:{fontSize:14,"& svg":{mr:1}}},transformOrigin:{horizontal:"right",vertical:"top"},children:[u(E,{onClick:r,children:[e(y,{fontSize:"small",children:e(ra,{})}),"Copy Link"]}),u(E,{onClick:s,sx:{color:"error.main"},children:[e(y,{fontSize:"small",children:e(fe,{})}),"Delete"]})]})};ae.propTypes={anchorEl:c.any,onClose:c.func,onDelete:c.func,open:c.bool};const we=t=>{var h;const{item:a,onDelete:r,onFavorite:s,onOpen:n}=t,o=N(),p=m.useCallback(()=>{o.handleClose(),r==null||r(a.id)},[a,o,r]);let i=j(a.size);a.type==="folder"&&(i+=`• ${a.itemsCount} items`);const l=a.createdAt&&V(a.createdAt,"MMM dd, yyyy"),g=!a.isPublic&&(a.shared||[]).length>0;return u(G,{children:[u(J,{sx:{backgroundColor:"transparent",boxShadow:0,transition:d=>d.transitions.create(["background-color, box-shadow"],{easing:d.transitions.easing.easeInOut,duration:200}),"&:hover":{backgroundColor:"background.paper",boxShadow:16}},variant:"outlined",children:[u(A,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{pt:2,px:2},children:[e(T,{onClick:()=>s==null?void 0:s(a.id,!a.isFavorite),children:e(y,{fontSize:"small",sx:{color:a.isFavorite?"warning.main":"action.active"},children:e(Q,{})})}),e(T,{onClick:o.handleOpen,ref:o.anchorRef,children:e(y,{fontSize:"small",children:e(ke,{})})})]}),u(P,{sx:{p:2},children:[e(P,{sx:{display:"flex",mb:1},children:e(P,{onClick:()=>n==null?void 0:n(a.id),sx:{display:"inline-flex",cursor:"pointer"},children:e(ee,{type:a.type,extension:a.extension})})}),e(b,{onClick:()=>n==null?void 0:n(a.id),sx:{cursor:"pointer"},variant:"subtitle2",children:a.name}),e(Y,{sx:{my:1}}),u(A,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:1,children:[e("div",{children:e(b,{color:"text.secondary",variant:"body2",children:i})}),u("div",{children:[a.isPublic&&e(q,{title:"Public",children:e(I,{sx:{height:32,width:32},children:e(y,{fontSize:"small",children:e(K,{})})})}),g&&e(X,{max:3,children:(h=a.shared)==null?void 0:h.map(d=>e(I,{src:d.avatar,sx:{height:32,width:32}},d.name))})]})]}),u(b,{color:"text.secondary",variant:"caption",children:["Created at ",l]})]})]},a.id),e(ae,{anchorEl:o.anchorRef.current,onClose:o.handleClose,onDelete:p,open:o.open})]})};we.propTypes={item:c.object.isRequired,onDelete:c.func,onFavorite:c.func,onOpen:c.func};const Ae=t=>{var h;const{item:a,onDelete:r,onFavorite:s,onOpen:n}=t,o=N(),p=m.useCallback(()=>{o.handleClose(),r==null||r(a.id)},[a,o,r]);let i=j(a.size);a.type==="folder"&&(i+=`• ${a.itemsCount} items`);const l=a.createdAt&&V(a.createdAt,"MMM dd, yyyy"),g=!a.isPublic&&(a.shared||[]).length>0;return u(G,{children:[u(sa,{sx:{backgroundColor:"transparent",borderRadius:1.5,boxShadow:0,transition:d=>d.transitions.create(["background-color","box-shadow"],{easing:d.transitions.easing.easeInOut,duration:200}),"&:hover":{backgroundColor:"background.paper",boxShadow:16},[`& .${Me.root}`]:{borderBottomWidth:1,borderBottomColor:"divider",borderBottomStyle:"solid",borderTopWidth:1,borderTopColor:"divider",borderTopStyle:"solid","&:first-of-type":{borderTopLeftRadius:d=>d.shape.borderRadius*1.5,borderBottomLeftRadius:d=>d.shape.borderRadius*1.5,borderLeftWidth:1,borderLeftColor:"divider",borderLeftStyle:"solid"},"&:last-of-type":{borderTopRightRadius:d=>d.shape.borderRadius*1.5,borderBottomRightRadius:d=>d.shape.borderRadius*1.5,borderRightWidth:1,borderRightColor:"divider",borderRightStyle:"solid"}}},children:[e(W,{children:u(A,{alignItems:"center",direction:"row",spacing:2,children:[e(P,{onClick:()=>n==null?void 0:n(a.id),sx:{cursor:"pointer"},children:e(ee,{type:a.type,extension:a.extension})}),u("div",{children:[e(b,{noWrap:!0,onClick:()=>n==null?void 0:n(a.id),sx:{cursor:"pointer"},variant:"subtitle2",children:a.name}),e(b,{color:"text.secondary",noWrap:!0,variant:"body2",children:i})]})]})}),u(W,{children:[e(b,{noWrap:!0,variant:"subtitle2",children:"Created at"}),e(b,{color:"text.secondary",noWrap:!0,variant:"body2",children:l})]}),e(W,{children:u(P,{sx:{display:"flex"},children:[a.isPublic&&e(q,{title:"Public",children:e(I,{sx:{height:32,width:32},children:e(y,{fontSize:"small",children:e(K,{})})})}),g&&e(X,{max:3,children:(h=a.shared)==null?void 0:h.map(d=>e(I,{src:d.avatar,sx:{height:32,width:32}},d.name))})]})}),e(W,{align:"right",children:e(T,{onClick:()=>s==null?void 0:s(a.id,!a.isFavorite),children:e(y,{fontSize:"small",sx:{color:a.isFavorite?"warning.main":"action.active"},children:e(Q,{})})})}),e(W,{align:"right",children:e(T,{onClick:o.handleOpen,ref:o.anchorRef,children:e(y,{fontSize:"small",children:e(ke,{})})})})]},a.id),e(ae,{anchorEl:o.anchorRef.current,onClose:o.handleClose,onDelete:p,open:o.open})]})};Ae.propTypes={item:c.object.isRequired,onDelete:c.func,onFavorite:c.func,onOpen:c.func};const Pe=t=>{const{count:a=0,items:r=[],onDelete:s,onFavorite:n,onOpen:o,onPageChange:p=()=>{},onRowsPerPageChange:i,page:l=0,rowsPerPage:g=0,view:h="grid"}=t;let d;return h==="grid"?d=e(P,{sx:{display:"grid",gap:3,gridTemplateColumns:"repeat(3, 1fr)"},children:r.map(z=>e(we,{item:z,onDelete:s,onFavorite:n,onOpen:o},z.id))}):d=e(P,{sx:{m:-3},children:e(We,{children:e(P,{sx:{p:3},children:e(na,{sx:{minWidth:600,borderCollapse:"separate",borderSpacing:"0 8px"},children:e(ia,{children:r.map(z=>e(Ae,{item:z,onDelete:s,onFavorite:n,onOpen:o},z.id))})})})})}),u(A,{spacing:4,children:[d,e(oa,{component:"div",count:a,onPageChange:p,onRowsPerPageChange:i,page:l,rowsPerPage:g,rowsPerPageOptions:[9,18]})]})};Pe.propTypes={items:c.array,count:c.number,onDelete:c.func,onFavorite:c.func,onOpen:c.func,onPageChange:c.func,onRowsPerPageChange:c.func,page:c.number,rowsPerPage:c.number,view:c.oneOf(["grid","list"])};var Ra=function(a){return u("svg",S({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M8.4 3H4.6c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v3.8c0 .56 0 .84.109 1.054.0959.1882.2489.3411.437.437C3.76 10 4.04 10 4.6 10h3.8c.56 0 .84 0 1.054-.109a1.0001 1.0001 0 0 0 .437-.437C10 9.24 10 8.96 10 8.4V4.6c0-.56 0-.84-.109-1.054a1.0001 1.0001 0 0 0-.437-.437C9.24 3 8.96 3 8.4 3Zm11 0h-3.8c-.5601 0-.8401 0-1.054.109a1 1 0 0 0-.437.437C14 3.76 14 4.04 14 4.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.2139.109.4939.109 1.054.109h3.8c.5601 0 .8401 0 1.054-.109a1 1 0 0 0 .437-.437C21 9.24 21 8.96 21 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.2401 3 19.9601 3 19.4 3Zm0 11h-3.8c-.5601 0-.8401 0-1.054.109a.9998.9998 0 0 0-.437.437C14 14.7599 14 15.0399 14 15.6v3.8c0 .5601 0 .8401.109 1.054a.9998.9998 0 0 0 .437.437c.2139.109.4939.109 1.054.109h3.8c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C21 20.2401 21 19.9601 21 19.4v-3.8c0-.5601 0-.8401-.109-1.054a.9998.9998 0 0 0-.437-.437C20.2401 14 19.9601 14 19.4 14Zm-11 0H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 14.7599 3 15.0399 3 15.6v3.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 20.2401 10 19.9601 10 19.4v-3.8c0-.5601 0-.8401-.109-1.054a1 1 0 0 0-.437-.437C9.24 14 8.96 14 8.4 14Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.4 3H4.6c-.56 0-.84 0-1.054.109a1.0001 1.0001 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v3.8c0 .56 0 .84.109 1.054.0959.1882.2489.3411.437.437C3.76 10 4.04 10 4.6 10h3.8c.56 0 .84 0 1.054-.109a1.0001 1.0001 0 0 0 .437-.437C10 9.24 10 8.96 10 8.4V4.6c0-.56 0-.84-.109-1.054a1.0001 1.0001 0 0 0-.437-.437C9.24 3 8.96 3 8.4 3Zm11 0h-3.8c-.5601 0-.8401 0-1.054.109a1 1 0 0 0-.437.437C14 3.76 14 4.04 14 4.6v3.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.2139.109.4939.109 1.054.109h3.8c.5601 0 .8401 0 1.054-.109a1 1 0 0 0 .437-.437C21 9.24 21 8.96 21 8.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.2401 3 19.9601 3 19.4 3Zm0 11h-3.8c-.5601 0-.8401 0-1.054.109a.9998.9998 0 0 0-.437.437C14 14.7599 14 15.0399 14 15.6v3.8c0 .5601 0 .8401.109 1.054a.9998.9998 0 0 0 .437.437c.2139.109.4939.109 1.054.109h3.8c.5601 0 .8401 0 1.054-.109a.9998.9998 0 0 0 .437-.437C21 20.2401 21 19.9601 21 19.4v-3.8c0-.5601 0-.8401-.109-1.054a.9998.9998 0 0 0-.437-.437C20.2401 14 19.9601 14 19.4 14Zm-11 0H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 14.7599 3 15.0399 3 15.6v3.8c0 .5601 0 .8401.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21h3.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C10 20.2401 10 19.9601 10 19.4v-3.8c0-.5601 0-.8401-.109-1.054a1 1 0 0 0-.437-.437C9.24 14 8.96 14 8.4 14Z"})]}))};const Ia=[{label:"Latest",value:"desc"},{label:"Oldest",value:"asc"}],ze=t=>{const{onFiltersChange:a,onSortChange:r,onViewChange:s,view:n="grid",sortDir:o="asc"}=t,p=m.useRef(null),i=m.useCallback(h=>{var z;h.preventDefault();const d=((z=p.current)==null?void 0:z.value)||"";a==null||a({query:d})},[a]),l=m.useCallback(h=>{const d=h.target.value;r==null||r(d)},[r]),g=m.useCallback((h,d)=>{s==null||s(d)},[s]);return e(J,{children:u(A,{alignItems:"center",direction:"row",gap:2,sx:{p:2},children:[e(P,{component:"form",onSubmit:i,sx:{flexGrow:1},children:e(Oe,{defaultValue:"",fullWidth:!0,inputProps:{ref:p},name:"itemName",placeholder:"Search",startAdornment:e(Le,{position:"start",children:e(y,{children:e($e,{})})})})}),u(Pa,{exclusive:!0,onChange:g,sx:{borderWidth:1,borderColor:"divider",borderStyle:"solid",[`& .${R.grouped}`]:{margin:.5,border:0,"&:not(:first-of-type)":{borderRadius:1},"&:first-of-type":{borderRadius:1}}},value:n,children:[e(ne,{value:"grid",children:e(y,{fontSize:"small",children:e(Ra,{})})}),e(ne,{value:"list",children:e(y,{fontSize:"small",children:e(la,{})})})]}),e(Ve,{label:"Sort By",name:"sort",onChange:l,select:!0,SelectProps:{native:!0},value:o,children:Ia.map(h=>e("option",{value:h.value,children:h.label},h.value))})]})})};ze.propTypes={onFiltersChange:c.func,onSortChange:c.func,onViewChange:c.func,sortBy:c.string,sortDir:c.oneOf(["asc","desc"]),view:c.oneOf(["grid","list"])};var Ba=function(a){return e("svg",S({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},a,{children:e("path",{fill:"#fff",fillOpacity:.01,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m12.0567 3-8.0159 9.6191c-.3139.3767-.4708.565-.4732.7241a.45.45 0 0 0 .167.3568c.1238.1.369.1.8594.1h6.5627l-.9 7.2 8.0159-9.6191c.314-.3767.4709-.565.4733-.7241a.4498.4498 0 0 0-.1671-.3568c-.1237-.1-.3689-.1-.8593-.1h-6.5628l.9-7.2Z"})}))};const Da=t=>{const a=_e();return{chart:{background:"transparent",redrawOnParentResize:!1,redrawOnWindowResize:!1},colors:[a.palette.primary.main],fill:{opacity:1,type:"solid"},grid:{padding:{bottom:0,left:0,right:0,top:0}},labels:[t],plotOptions:{radialBar:{dataLabels:{name:{color:a.palette.text.primary,fontSize:"24px",fontWeight:500,show:!0,offsetY:-15},value:{show:!1}},endAngle:90,hollow:{size:"60%"},startAngle:-90,track:{background:a.palette.mode==="dark"?a.palette.primary.dark:a.palette.primary.light,strokeWidth:"100%"}}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{lineCap:"round"},theme:{mode:a.palette.mode}}},Ma=[{extension:"mp4",itemsCount:25,label:"MP4",size:24431234531},{extension:"png",itemsCount:591,label:"PNG",size:58723843923},{extension:"pdf",itemsCount:95,label:"PDF",size:432424040},{extension:null,itemsCount:210,label:"Other",size:274128437}],Wa=()=>{const r=Da("75 GB");return u(J,{children:[e(ca,{title:"Storage",subheader:"Upgrade before reaching it"}),u(He,{children:[u(A,{alignItems:"center",children:[e(P,{sx:{height:260,mt:"-48px",mb:"-100px"},children:e(da,{width:260,height:260,options:r,series:[75],type:"radialBar"})}),e(b,{variant:"h6",sx:{mb:1},children:"You’ve almost reached your limit"}),u(b,{color:"text.secondary",variant:"body2",children:["You have used ",75,"% of your available storage."]})]}),e(Ge,{disablePadding:!0,sx:{mt:2},children:Ma.map(n=>{const o=j(n.size);return u(je,{disableGutters:!0,children:[e(Ue,{children:e(P,{sx:{color:"primary.main"},children:e(me,{extension:n.extension})})}),e(Ze,{primary:e(b,{variant:"caption",children:n.label}),secondary:u(b,{color:"text.secondary",variant:"body2",children:[o," • ",n.itemsCount," items"]})})]},n.extension)})})]}),e(Y,{}),e(ua,{sx:{justifyContent:"flex-end"},children:e(ge,{endIcon:e(y,{fontSize:"small",children:e(Ba,{})}),size:"small",variant:"contained",children:"Upgrade Plan"})})]})},Oa=()=>{const[t,a]=m.useState({filters:{query:void 0},page:0,rowsPerPage:9,sortBy:"createdAt",sortDir:"desc"}),r=m.useCallback(p=>{a(i=>({...i,filters:p}))},[]),s=m.useCallback(p=>{a(i=>({...i,sortDir:p}))},[]),n=m.useCallback((p,i)=>{a(l=>({...l,page:i}))},[]),o=m.useCallback(p=>{a(i=>({...i,rowsPerPage:parseInt(p.target.value,10)}))},[]);return{handleFiltersChange:r,handleSortChange:s,handlePageChange:n,handleRowsPerPageChange:o,state:t}},La=t=>{const a=Je(),[r,s]=m.useState({items:[],itemsCount:0}),n=m.useCallback(async()=>{try{const i=await Sa.getItems(t);a()&&s({items:i.data,itemsCount:i.count})}catch(i){console.error(i)}},[t,a]);m.useEffect(()=>{n()},[t]);const o=m.useCallback(i=>{s(l=>({...l,items:l.items.filter(g=>g.id!==i)}))},[]),p=m.useCallback((i,l)=>{s(g=>({...g,items:g.items.map(h=>h.id===i?{...h,isFavorite:l}:h)}))},[]);return{handleDelete:o,handleFavorite:p,...r}},$a=(t,a)=>m.useMemo(()=>{if(a)return t.find(r=>r.id===a)},[t,a]),nt=()=>{const t=Ee(),a=Oa(),r=La(a.state),[s,n]=m.useState("grid"),o=re(),p=re(),i=$a(r.items,p.data);Ne();const l=m.useCallback(g=>{p.handleClose(),r.handleDelete(g)},[p,r]);return u(G,{children:[e(qe,{title:"Dashboard: File Manager"}),e(P,{component:"main",sx:{flexGrow:1,py:8},children:e(Ye,{maxWidth:t.stretch?!1:"xl",children:u(k,{container:!0,spacing:{xs:3,lg:4},children:[e(k,{xs:12,children:u(A,{direction:"row",justifyContent:"space-between",spacing:4,children:[e("div",{children:e(b,{variant:"h4",children:"File Manager"})}),e(A,{alignItems:"center",direction:"row",spacing:2,children:e(ge,{onClick:o.handleOpen,startIcon:e(y,{children:e(Qe,{})}),variant:"contained",children:"Upload"})})]})}),e(k,{xs:12,md:8,children:u(A,{spacing:{xs:3,lg:4},children:[e(ze,{onFiltersChange:a.handleFiltersChange,onSortChange:a.handleSortChange,onViewChange:n,sortBy:a.state.sortBy,sortDir:a.state.sortDir,view:s}),e(Pe,{count:r.itemsCount,items:r.items,onDelete:l,onFavorite:r.handleFavorite,onOpen:p.handleOpen,onPageChange:a.handlePageChange,onRowsPerPageChange:a.handleRowsPerPageChange,page:a.state.page,rowsPerPage:a.state.rowsPerPage,view:s})]})}),e(k,{xs:12,md:4,children:e(Wa,{})})]})})}),e(xe,{item:i,onClose:p.handleClose,onDelete:l,onFavorite:r.handleFavorite,open:p.open}),e(be,{onClose:o.handleClose,open:o.open})]})};export{nt as default};
