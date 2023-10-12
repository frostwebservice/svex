import{P as X}from"./Plus-2c179b67.js";import{P as d,aS as L,j as r,f as y,d as e,l as s,k as i,B as m,q as l,c1 as Z,C as h,D as u,aN as x,e as A,aZ as P,ba as k,a_ as R,b3 as z,a$ as N,bA as K,X as B,c2 as Q,bR as ee,bW as re,bX as te,a0 as D,bi as M,bj as v,aY as ae,b1 as ie,H as ne,c as se,F as oe,S as ce,aL as le,aM as o,b8 as g,b7 as I,b6 as O,bb as f}from"./app-62bf28ff.js";import{C as b}from"./CardActions-bb61ccce.js";import{C as de}from"./Calendar-5eb8f3c6.js";import{C as S}from"./CardHeader-c922d601.js";import{S as he}from"./severity-pill-db11138c.js";import{T as pe,a as me,b as ue,c as w}from"./TableRow-0ae57d6d.js";import{C as be}from"./chart-b36f2b8c.js";import{I as ve}from"./InfoCircle-a87e7239.js";import{L as ye}from"./Link01-9d97ea59.js";import{B as xe}from"./Briefcase01-85eb9996.js";import{S as ge}from"./index-1b20f6e1.js";import"./index-0009016d.js";import"./index-01867189.js";const q=t=>{const{handleDrawerOpen:n}=L();return r(y,{alignItems:"center",direction:{xs:"column",md:"row"},spacing:4,sx:{backgroundColor:a=>a.palette.mode==="dark"?"primary.darkest":"primary.lightest",borderRadius:2.5,p:4},...t,children:[e(s,{sx:{width:200,"& img":{width:"100%"}},children:e("img",{src:"/assets/person-standing.png"})}),r(s,{sx:{flexGrow:1},children:[e(i,{color:"primary.main",variant:"overline",children:"New v6 update"}),e(i,{color:"text.primary",sx:{mt:2},variant:"h6",children:"New update available!"}),e(i,{color:"text.primary",sx:{mt:1},variant:"body1",children:"Your favorite template has a new trendy look, more customization options, screens & more."}),e(s,{sx:{mt:2},children:e(m,{color:"primary",onClick:n,startIcon:e(l,{children:e(Z,{})}),variant:"contained",children:"Open App Settings"})})]})]})};q.propTypes={onDismiss:d.func};const W=t=>{const{amount:n}=t;return r(h,{children:[r(y,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:3,sx:{px:4,py:3},children:[e("div",{children:e("img",{src:"/assets/iconly/iconly-glass-tick.svg",width:48})}),r(s,{sx:{flexGrow:1},children:[e(i,{color:"text.secondary",variant:"body2",children:"Done Tasks"}),e(i,{color:"text.primary",variant:"h4",children:n})]})]}),e(u,{}),e(b,{children:e(m,{color:"inherit",endIcon:e(l,{children:e(x,{})}),size:"small",children:"See all tasks"})})]})};W.propTypes={amount:d.number.isRequired};const j=t=>{const{events:n}=t;return r(h,{children:[e(S,{title:"Upcoming events",subheader:"Based on the linked bank accounts"}),e(A,{sx:{pt:0},children:e(P,{disablePadding:!0,children:n.map(a=>{const p=k(a.createdAt,"LLL").toUpperCase(),T=k(a.createdAt,"d");return r(R,{disableGutters:!0,sx:{py:1.5},children:[e(z,{children:r(s,{sx:{p:1,backgroundColor:C=>C.palette.mode==="dark"?"neutral.800":"neutral.100",borderRadius:2,maxWidth:"fit-content"},children:[e(i,{align:"center",color:"text.primary",variant:"caption",children:p}),e(i,{align:"center",color:"text.primary",variant:"h6",children:T})]})}),r(N,{children:[e(i,{variant:"subtitle2",children:a.title}),e(i,{color:"text.secondary",variant:"body2",children:a.description})]}),e(K,{children:e(B,{color:"inherit",children:e(l,{fontSize:"small",children:e(de,{})})})})]},a.id)})})}),e(u,{}),e(b,{children:e(m,{color:"inherit",endIcon:e(l,{children:e(x,{})}),size:"small",children:"See all"})})]})};j.propTypes={events:d.array.isRequired};const G=t=>{const{messages:n}=t;return r(h,{children:[e(S,{title:"Inbox",action:e(B,{color:"inherit",children:e(l,{fontSize:"small",children:e(Q,{})})})}),e(P,{disablePadding:!0,children:n.map(a=>{const p=ee(a.createdAt,new Date,{addSuffix:!0,locale:re});return r(R,{sx:{"&:hover":{backgroundColor:"action.hover",cursor:"pointer"}},children:[e(z,{children:a.senderOnline?e(te,{anchorOrigin:{horizontal:"right",vertical:"bottom"},color:"success",variant:"dot",children:e(D,{src:a.senderAvatar})}):e(D,{src:a.senderAvatar})}),e(N,{disableTypography:!0,primary:e(i,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"subtitle2",children:a.senderName}),secondary:e(i,{color:"text.secondary",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"body2",children:a.content}),sx:{pr:2}}),e(i,{color:"text.secondary",sx:{whiteSpace:"nowrap"},variant:"caption",children:p})]},a.id)})}),e(u,{}),e(b,{children:e(m,{color:"inherit",endIcon:e(l,{children:e(x,{})}),size:"small",children:"Go to chat"})})]})};G.propTypes={messages:d.array.isRequired};const fe={confirmed:"success",on_hold:"warning",failed:"error"},H=t=>{const{transactions:n}=t;return r(h,{children:[e(S,{title:"Latest Transactions",subheader:"Based on the selected period",sx:{pb:0}}),r(M,{value:"all",sx:{px:3},children:[e(v,{label:"All",value:"all"}),e(v,{label:"Confirmed",value:"confirmed"}),e(v,{label:"Pending",value:"pending"})]}),e(u,{}),e(ae,{children:e(pe,{sx:{minWidth:600},children:e(me,{children:n.map(a=>{const p=k(a.createdAt,"LLL").toUpperCase(),T=k(a.createdAt,"d"),C=fe[a.status],_=a.type==="receive"?"Payment received":"Payment sent",$=(a.type==="receive"?"+":"-")+" "+ie(a.amount).format("$0,0.00"),E=a.type==="receive"?"success.main":"error.main";return r(ue,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(w,{width:100,children:r(s,{sx:{p:1,backgroundColor:V=>V.palette.mode==="dark"?"neutral.800":"neutral.100",borderRadius:2,maxWidth:"fit-content"},children:[e(i,{align:"center",color:"text.primary",variant:"caption",children:p}),e(i,{align:"center",color:"text.primary",variant:"h6",children:T})]})}),e(w,{children:r("div",{children:[e(i,{variant:"subtitle2",children:a.sender}),e(i,{color:"text.secondary",variant:"body2",children:_})]})}),e(w,{children:e(he,{color:C,children:a.status})}),e(w,{width:180,children:e(i,{color:E,variant:"subtitle2",children:$})})]},a.id)})})})})]})};H.propTypes={transactions:d.array.isRequired};const J=t=>{const{amount:n}=t;return r(h,{children:[r(y,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:3,sx:{px:4,py:3},children:[e("div",{children:e("img",{src:"/assets/iconly/iconly-glass-info.svg",width:48})}),r(s,{sx:{flexGrow:1},children:[e(i,{color:"text.secondary",variant:"body2",children:"Pending Issues"}),e(i,{color:"text.primary",variant:"h4",children:n})]})]}),e(u,{}),e(b,{children:e(m,{color:"inherit",endIcon:e(l,{children:e(x,{})}),size:"small",children:"See all issues"})})]})};J.propTypes={amount:d.number.isRequired};const we=()=>{const t=ne();return{chart:{background:"transparent",stacked:!0,toolbar:{show:!1}},colors:[t.palette.primary.main,t.palette.mode==="dark"?t.palette.primary.darkest:t.palette.primary.light],dataLabels:{enabled:!1},legend:{labels:{colors:t.palette.text.secondary},onItemClick:{toggleDataSeries:!1},onItemHover:{highlightDataSeries:!1}},grid:{borderColor:t.palette.divider,strokeDashArray:2},plotOptions:{bar:{borderRadius:8,columnWidth:"32px"}},theme:{mode:t.palette.mode},tooltip:{y:{formatter:n=>`${n}k events`}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],labels:{style:{colors:t.palette.text.secondary}}},yaxis:{labels:{show:!1}}}},F=t=>{const{chartSeries:n}=t,a=we();return r(h,{children:[e(S,{subheader:"Based on the selected period",title:"Subscription Usage",action:r(M,{value:"year",children:[e(v,{label:"Year",value:"year"}),e(v,{label:"Month",value:"month"}),e(v,{label:"Week",value:"week"})]})}),e(s,{sx:{height:336},children:e(be,{height:300,options:a,series:n,type:"bar"})})]})};F.propTypes={chartSeries:d.array.isRequired};const ke=t=>r(h,{...t,children:[r(A,{children:[r(s,{sx:{alignItems:"center",display:"flex"},children:[e(l,{color:"primary",children:e(ve,{})}),e(i,{color:"primary.main",sx:{pl:1},variant:"subtitle2",children:"Help Center"})]}),e(i,{sx:{mt:2},variant:"h6",children:"Need help figuring things out?"}),e(i,{color:"text.secondary",sx:{mt:1},variant:"body2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),e(u,{}),e(b,{children:e(m,{color:"inherit",endIcon:e(l,{children:e(ye,{})}),size:"small",children:"Help Center"})})]}),Ae=t=>r(h,{...t,children:[r(A,{children:[r(s,{sx:{alignItems:"center",display:"flex"},children:[e(l,{color:"primary",children:e(xe,{})}),e(i,{color:"primary.main",sx:{pl:1},variant:"subtitle2",children:"Jobs"})]}),e(i,{variant:"h6",sx:{mt:2},children:"Find your dream job"}),e(i,{color:"text.secondary",sx:{mt:1},variant:"body2",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),e(u,{}),e(b,{children:e(m,{color:"inherit",endIcon:e(l,{children:e(x,{})}),size:"small",children:"Search Jobs"})})]}),U=t=>{const{amount:n}=t;return r(h,{children:[r(y,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:3,sx:{px:4,py:3},children:[e("div",{children:e("img",{src:"/assets/iconly/iconly-glass-paper.svg",width:48})}),r(s,{sx:{flexGrow:1},children:[e(i,{color:"text.secondary",variant:"body2",children:"Open tickets"}),e(i,{color:"text.primary",variant:"h4",children:n})]})]}),e(u,{}),e(b,{children:e(m,{color:"inherit",endIcon:e(l,{children:e(x,{})}),size:"small",children:"See all tickets"})})]})};U.propTypes={amount:d.number.isRequired};const Se={arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},Y=t=>{const{sx:n,tips:a}=t;return e(h,{sx:n,children:r(A,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[e(s,{sx:{mb:6},children:e("img",{src:"/assets/next-tip.svg"})}),e(s,{sx:{flexGrow:1,"& .slick-slider":{cursor:"grab"},"& .slick-slider, & .slick-list, & .slick-track":{height:"100%"},"& .slick-dots":{top:-50,bottom:"unset",left:-10,textAlign:"left"}},children:e(ge,{...Se,children:a.map(p=>r("div",{children:[e(i,{variant:"h6",children:p.title}),e(i,{color:"text.secondary",sx:{mt:1},variant:"body1",children:p.content})]},p.title))})})]})})};Y.propTypes={sx:d.object,tips:d.array.isRequired};const c=new Date,je=()=>{const t=L();return se(),r(oe,{children:[e(ce,{title:"Dashboard: Overview"}),e(s,{component:"main",sx:{flexGrow:1,py:8},children:e(le,{maxWidth:t.stretch?!1:"xl",children:r(o,{container:!0,disableEqualOverflow:!0,spacing:{xs:3,lg:4},children:[e(o,{xs:12,children:r(y,{direction:"row",justifyContent:"space-between",spacing:4,children:[e("div",{children:e(i,{variant:"h4",children:"Overview"})}),e("div",{children:e(y,{direction:"row",spacing:4,children:e(m,{startIcon:e(l,{children:e(X,{})}),variant:"contained",children:"New Dashboard"})})})]})}),e(o,{xs:12,md:4,children:e(W,{amount:31})}),e(o,{xs:12,md:4,children:e(J,{amount:12})}),e(o,{xs:12,md:4,children:e(U,{amount:5})}),e(o,{xs:12,md:7,children:e(q,{})}),e(o,{xs:12,md:5,children:e(Y,{sx:{height:"100%"},tips:[{title:"New fresh design.",content:"Your favorite template has a new trendy look, more customization options, screens & more."},{title:"Tip 2.",content:"Tip content"},{title:"Tip 3.",content:"Tip content"}]})}),e(o,{xs:12,md:7,children:e(F,{chartSeries:[{name:"This year",data:[40,37,41,42,45,42,36,45,40,44,38,41]},{name:"Last year",data:[26,22,19,22,24,28,23,25,24,21,17,19]}]})}),e(o,{xs:12,md:5,children:e(G,{messages:[{id:"b91cbe81ee3efefba6b915a7",content:"Hello, we spoke earlier on the phone",createdAt:g(c,2),senderAvatar:"/assets/avatars/avatar-alcides-antonio.png",senderName:"Alcides Antonio",senderOnline:!0},{id:"de0eb1ac517aae1aa57c0b7e",content:"Is the job still available?",createdAt:g(c,56),senderAvatar:"/assets/avatars/avatar-marcus-finn.png",senderName:"Marcus Finn",senderOnline:!1},{id:"38e2b0942c90d0ad724e6f40",content:"What is a screening task? I’d like to",createdAt:I(g(c,23),3),senderAvatar:"/assets/avatars/avatar-carson-darrin.png",senderName:"Carson Darrin",senderOnline:!0},{id:"467505f3356f25a69f4c4890",content:"Still waiting for feedback",createdAt:I(g(c,6),8),senderAvatar:"/assets/avatars/avatar-fran-perez.png",senderName:"Fran Perez",senderOnline:!0},{id:"7e6af808e801a8361ce4cf8b",content:"Need more information about campaigns",createdAt:I(g(c,18),10),senderAvatar:"/assets/avatars/avatar-jie-yan-song.png",senderName:"Jie Yan Song",senderOnline:!1}]})}),e(o,{xs:12,md:7,children:e(H,{transactions:[{id:"d46800328cd510a668253b45",amount:25e3,createdAt:c.getTime(),currency:"usd",sender:"Devias",status:"on_hold",type:"receive"},{id:"b4b19b21656e44b487441c50",amount:6843,createdAt:O(c,1).getTime(),currency:"usd",sender:"Zimbru",status:"confirmed",type:"send"},{id:"56c09ad91f6d44cb313397db",amount:91823,createdAt:O(c,1).getTime(),currency:"usd",sender:"Vertical Jelly",status:"failed",type:"send"},{id:"aaeb96c5a131a55d9623f44d",amount:49550,createdAt:O(c,3).getTime(),currency:"usd",sender:"Devias",status:"confirmed",type:"receive"}]})}),e(o,{xs:12,md:5,children:e(j,{events:[{id:"3bfa0bc6cbc99bf747c94d51",createdAt:f(c,1),description:"17:00 to 18:00",title:"Meeting with Partners"},{id:"dd6c8ce8655ac222b01f24f9",createdAt:f(c,4),description:"17:00 to 18:00",title:"Weekly Meeting"},{id:"f274902e2bf226865b3cf947",createdAt:f(c,4),description:"17:00 to 18:00",title:"Weekly Meeting"},{id:"d2a66e24110f52acb0cd0b9f",createdAt:f(c,7),description:"17:00 to 18:00",title:"Weekly Meeting"}]})}),e(o,{xs:6,children:e(Ae,{})}),e(o,{xs:6,children:e(ke,{})})]})})})]})};export{je as default};
