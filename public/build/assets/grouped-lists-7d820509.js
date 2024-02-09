import{b7 as m,d as e,l as i,aL as S,j as r,C as d,aw as D,q as p,D as v,k as t,aZ as f,a_ as y,b3 as R,G as h,a$ as x,L as A,b1 as G,ba as B,bX as O,aY as q,n as U,bY as K,bZ as V,b_ as ee,bA as ae,bj as re,b8 as te,ap as F,P as ne,f as C,B as j,aN as ie,b6 as L,b9 as H,b$ as se,c0 as oe,e as de,bQ as ce,c as le,F as me,S as pe}from"./app-0b2379dc.js";import{P as ue}from"./previewer-78a085af.js";import{D as P}from"./DotsHorizontal-4b7159e5.js";import{s as c}from"./index-61f5b8be.js";import{C as u}from"./CardHeader-559beb53.js";import{f as M}from"./index-902f3fe3.js";import{A as he}from"./AvatarGroup-a293c715.js";import{C as ve}from"./CreditCard02-4f475609.js";import{S as be}from"./Send01-9308f82b.js";import{I as ge}from"./Image01-e0346e98.js";import{T as W,a as z,b as N,c as o}from"./TableRow-64f18a5f.js";import{f as fe}from"./index-17a9c320.js";import{C as Z}from"./CardActions-b5f5ec49.js";import{D as ye}from"./Download01-0c9002e8.js";import{S as xe}from"./severity-pill-743f9b24.js";import"./index-57545c4d.js";const k=new Date,Y=[{id:"5e89140bcc768199d1e0dc49",createdAt:c(k,23).getTime(),customer:{id:"5e887a62195cc5aef7e8ca5d",avatar:"/assets/avatars/avatar-marcus-finn.png",name:"Marcus Finn"},description:"Created account",type:"register"},{id:"5e891411b0290b175166cd32",createdAt:c(k,56).getTime(),customer:{id:"5e887ac47eed253091be10cb",avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"},description:"Subscription Purchase",type:"payment"},{id:"5e89141633dc5e52c923ef27",createdAt:m(k,2).getTime(),customer:{id:"5e887b209c28ac3dd97f6db5",avatar:"/assets/avatars/avatar-fran-perez.png",name:"Fran Perez"},description:"Submitted a ticket",type:"ticket_create"},{id:"5e89141bd975c7f33aee9f4b",createdAt:c(k,5).getTime(),customer:{id:"5e887b7602bdbc4dbb234b27",avatar:"/assets/avatars/avatar-jie-yan-song.png",name:"Jie Yan Song"},description:"Subscription Purchase",type:"payment"},{id:"5e891421d7945778863cf9ca",createdAt:c(k,5).getTime(),customer:{id:"5e86809283e28b96d2d38537",avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},description:"Subscription Purchase",type:"payment"}],ke=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:e(S,{maxWidth:"sm",children:r(d,{children:[e(u,{action:e(D,{children:e(p,{children:e(P,{})})}),title:"Activity"}),e(v,{}),r(i,{sx:{display:"flex"},children:[r(i,{sx:{p:3,flexGrow:1,"&:first-of-type":{borderRight:a=>`1px solid ${a.palette.divider}`}},children:[e(t,{align:"center",variant:"h5",children:"15,245"}),e(t,{align:"center",color:"text.secondary",component:"h4",variant:"overline",children:"Registered"})]}),r(i,{sx:{p:3,flexGrow:1,"&:first-of-type":{borderRight:a=>`1px solid ${a.palette.divider}`}},children:[e(t,{align:"center",variant:"h5",children:"357"}),e(t,{align:"center",color:"text.secondary",component:"h4",variant:"overline",children:"Online"})]})]}),e(v,{}),e(f,{disablePadding:!0,children:Y.map((a,n)=>{const s=n<Y.length-1,l=M(a.createdAt);return r(y,{divider:s,children:[e(R,{children:e(h,{src:a.customer.avatar,sx:{cursor:"pointer"}})}),e(x,{disableTypography:!0,primary:e(A,{color:"text.primary",sx:{cursor:"pointer"},underline:"none",variant:"subtitle2",children:a.customer.name}),secondary:e(t,{color:"text.secondary",variant:"body2",children:a.description})}),r(t,{color:"text.secondary",noWrap:!0,variant:"caption",children:[l," ","ago"]})]},a.id)})})]})})}),J=[{color:"#455A64",initials:"GT",name:"GitHub",value:53032},{color:"#00BCD4",initials:"TW",name:"Twitter",value:39551},{color:"#3949AB",initials:"HN",name:"Hacker News",value:23150},{color:"#F44336",initials:"SO",name:"Stack Overflow",value:14093},{color:"#E65100",initials:"RD",name:"Reddit.com",value:7251},{color:"#263238",initials:"DE",name:"Dev.to",value:5694},{color:"#0D47A1",initials:"FB",name:"Facebook",value:3643},{color:"#263238",initials:"MD",name:"Medium",value:1654}],we=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:e(S,{maxWidth:"sm",children:r(d,{sx:{display:"flex",flexDirection:"column"},children:[e(u,{action:e(D,{children:e(p,{children:e(P,{})})}),title:"Top Referrals"}),e(v,{}),e(f,{disablePadding:!0,children:J.map((a,n)=>{const s=n<J.length-1,l=G(a.value).format("0,0");return r(y,{divider:s,children:[e(R,{children:e(h,{sx:{backgroundColor:a.color,color:"common.white",fontSize:14,fontWeight:600},children:a.initials})}),e(x,{primary:a.name,primaryTypographyProps:{variant:"subtitle2"}}),e(t,{color:"text.secondary",variant:"body2",children:l})]},a.name)})})]})})}),g=new Date,_=[{id:"5eff24b501ba5281ddb5378c",deadline:B(O(g,1),1).getTime(),members:[{avatar:"/assets/avatars/avatar-marcus-finn.png",name:"Marcus Finn"},{avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"}],title:"Update the API for the project"},{id:"5eff24bb5bb3bd1beeddde78",deadline:B(O(g,1),2).getTime(),members:[{avatar:"/assets/avatars/avatar-penjani-inyene.png",name:"Penjani Inyene"},{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"},{avatar:"/assets/avatars/avatar-nasimiyu-danai.png",name:"Nasimiyu Danai"}],title:"Redesign the landing page"},{id:"5eff24c019175119993fc1ff",deadline:g.getTime(),members:[{avatar:"/assets/avatars/avatar-miron-vitold.png",name:"Miron Vitold"}],title:"Solve the bug for the showState"},{id:"5eff24c52ce9fdadffa11959",deadline:null,members:[{avatar:"/assets/avatars/avatar-marcus-finn.png",name:"Marcus Finn"},{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"}],title:"Release v1.0 Beta"},{id:"5eff24ca3ffab939b667258b",deadline:null,members:[{avatar:"/assets/avatars/avatar-jie-yan-song.png",name:"Jie Yan Song"},{avatar:"/assets/avatars/avatar-marcus-finn.png",name:"Marcus Finn"},{avatar:"/assets/avatars/avatar-anika-visser.png",name:"Anika Visser"}],title:"GDPR Compliance"},{id:"5eff24cf8740fc9faca4e463",deadline:null,members:[{avatar:"/assets/avatars/avatar-penjani-inyene.png",name:"Penjani Inyene"}],title:"Redesign Landing Page"}],Ae=a=>{let n="";if(a.deadline){const s=a.deadline;K(s,g)&&V(s,g)<3&&(n=`${V(s,g)} days remaining`)}return n},Ce=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(d,{children:[e(u,{action:e(D,{children:e(p,{children:e(P,{})})}),title:"Team Tasks"}),e(v,{}),e(q,{children:e(f,{sx:{minWidth:400},children:_.map((a,n)=>{const s=n<_.length-1,l=Ae(a);return r(y,{divider:s,children:[e(x,{primary:e(A,{color:"text.primary",noWrap:!0,sx:{cursor:"pointer"},variant:"subtitle2",children:a.title}),secondary:l}),e(he,{max:3,children:a.members.map(b=>e(U,{title:"View",children:e(h,{src:b.avatar})},b.name))})]},a.id)})})})]})}),E=[{id:"5e8883a4f7877f898c408c27",message:"to send service quotes",type:"invite",value:6},{id:"5e8883aa34190e0457a6e2b9",message:"from clients",type:"message",value:2},{id:"5e8883af168cad3e1f4fe0ae",message:"that needs your confirmation",type:"payout",value:1}],De={invite:e(be,{}),message:e(te,{}),payout:e(ve,{})},Te=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:e(d,{children:e(f,{children:E.map((a,n)=>{const s=n<E.length-1,l=De[a.type],b=`${a.value} ${a.type}s ${a.message}`;return r(y,{divider:s,children:[e(ee,{children:e(p,{children:l})}),e(x,{children:e(t,{variant:"subtitle2",children:b})}),e(ae,{children:e(U,{title:"View",children:e(D,{edge:"end",children:e(p,{children:e(re,{})})})})})]},a.id)})})})}),Ge=F("div")({height:56,width:56}),Se=F("path")(({theme:a})=>({fill:"none",stroke:a.palette.mode==="dark"?"rgba(0,0,0,0.15)":"rgba(0,0,0,0.05)",strokeWidth:4})),Re=F("path")(({theme:a})=>({animation:"$progress 1s ease-out forwards",fill:"none",stroke:a.palette.primary.main,strokeWidth:4,"@keyframes progress":{"0%":{strokeDasharray:"0 100"}}})),X=a=>{const{value:n,...s}=a;return e(Ge,{...s,children:r("svg",{viewBox:"0 0 36 36",children:[e(Se,{d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"100, 100"}),e(Re,{d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:`${n}, 100`})]})})};X.propTypes={value:ne.number.isRequired};const je=[{id:"5eff2512c6f8737d08325676",conversionRate:93,currency:"$",image:"/assets/products/product-1.png",name:"Healthcare Erbology",profit:53500,sales:13153},{id:"5eff2516247f9a6fcca9f151",conversionRate:76,currency:"$",image:"/assets/products/product-2.png",name:"Makeup Lancome Rouge",profit:45763,sales:10300},{id:"5eff251a3bb9ab7290640f18",conversionRate:60,currency:"$",image:null,name:"Lounge Puff Fabric Slipper",profit:28700,sales:5300},{id:"5eff251e297fd17f0dc18a8b",conversionRate:46,currency:"$",image:"/assets/products/product-4.png",name:"Skincare Necessaire",profit:20400,sales:1203},{id:"5eff2524ef813f061b3ea39f",conversionRate:41,currency:"$",image:"/assets/products/product-5.png",name:"Skincare Soja CO",profit:15200,sales:254}],Pe=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(d,{children:[e(u,{action:e(D,{children:e(p,{children:e(P,{})})}),title:"Profitable Products"}),e(q,{children:e(W,{sx:{minWidth:700},children:e(z,{children:je.map(a=>{const n=G(a.sales).format("0,0"),s=G(a.profit).format(`${a.currency}0,0.00`);return r(N,{hover:!0,children:[e(o,{children:r(C,{alignItems:"center",direction:"row",spacing:2,children:[a.image?e(i,{sx:{alignItems:"center",backgroundColor:"neutral.50",backgroundImage:`url(${a.image})`,backgroundPosition:"center",backgroundSize:"cover",borderRadius:1,display:"flex",height:80,justifyContent:"center",overflow:"hidden",width:80}}):e(i,{sx:{alignItems:"center",backgroundColor:"neutral.50",borderRadius:1,display:"flex",height:80,justifyContent:"center",width:80},children:e(p,{children:e(ge,{})})}),r("div",{children:[e(t,{variant:"subtitle2",children:a.name}),r(t,{color:"text.secondary",noWrap:!0,variant:"body2",children:[e(t,{color:"success.main",component:"span",variant:"subtitle2",children:n})," ","Sales"]})]})]})}),r(o,{children:[e(t,{variant:"subtitle2",children:"Profit"}),e(t,{color:"text.secondary",noWrap:!0,variant:"body2",children:s})]}),e(o,{children:r(C,{alignItems:"center",direction:"row",justifyContent:"flex-end",spacing:2,children:[r("div",{children:[r(t,{align:"right",variant:"subtitle2",children:[a.conversionRate,"%"]}),e(t,{color:"text.secondary",variant:"body2",children:"Conversion Rate"})]}),e(X,{value:a.conversionRate})]})})]},a.id)})})})}),e(i,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:e(j,{color:"inherit",endIcon:e(p,{children:e(ie,{})}),size:"small",children:"See All"})})]})}),T=new Date,Le=[{id:"d46800328cd510a668253b45",amount:25e3,currency:"usd",createdAt:T.getTime(),sender:"Devias",type:"receive"},{id:"b4b19b21656e44b487441c50",amount:6843,currency:"usd",createdAt:L(T,1).getTime(),sender:"Zimbru",type:"send"},{id:"56c09ad91f6d44cb313397db",amount:91823,currency:"usd",createdAt:L(T,1).getTime(),sender:"Vertical Jelly",type:"send"},{id:"aaeb96c5a131a55d9623f44d",amount:49550,currency:"usd",createdAt:L(T,3).getTime(),sender:"Devias",type:"receive"}],Ie=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(d,{children:[e(u,{title:"Latest Transactions"}),e(v,{}),e(W,{children:e(z,{children:Le.map(a=>{const n=H(a.createdAt,"LLL").toUpperCase(),s=H(a.createdAt,"d"),l=a.type==="receive"?"Payment received":"Payment sent",b=(a.type==="receive"?"+":"-")+" "+G(a.amount).format("$0,0.00"),Q=a.type==="receive"?"success.main":"error.main";return r(N,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(o,{width:100,children:r(i,{sx:{p:1},children:[e(t,{align:"center",color:"text.secondary",variant:"subtitle2",children:n}),e(t,{align:"center",color:"text.secondary",variant:"h6",children:s})]})}),r(o,{children:[e(t,{variant:"subtitle2",children:a.sender}),e(t,{color:"text.secondary",variant:"body2",children:l})]}),r(o,{align:"right",children:[e(t,{color:Q,variant:"subtitle2",children:b}),e(t,{color:"text.secondary",variant:"body2",children:a.currency.toUpperCase()})]})]},a.id)})})})]})}),w=new Date,$e=[{id:"b91cbe81ee3efefba6b915a7",content:"Hello, we spoke earlier on the phone",createdAt:c(w,2).getTime(),senderAvatar:"/assets/avatars/avatar-alcides-antonio.png",senderName:"Alcides Antonio",senderOnline:!0},{id:"de0eb1ac517aae1aa57c0b7e",content:"Is the job still available?",createdAt:c(w,56).getTime(),senderAvatar:"/assets/avatars/avatar-marcus-finn.png",senderName:"Marcus Finn",senderOnline:!0},{id:"38e2b0942c90d0ad724e6f40",content:"What is a screening task? I’d like to",createdAt:m(c(w,23),3).getTime(),senderAvatar:"/assets/avatars/avatar-carson-darrin.png",senderName:"Carson Darrin",senderOnline:!1},{id:"467505f3356f25a69f4c4890",content:"Still waiting for feedback",createdAt:m(c(w,6),8).getTime(),senderAvatar:"/assets/avatars/avatar-fran-perez.png",senderName:"Fran Perez",senderOnline:!0},{id:"7e6af808e801a8361ce4cf8b",content:"Need more information about current campaigns",createdAt:m(c(w,18),10).getTime(),senderAvatar:"/assets/avatars/avatar-jie-yan-song.png",senderName:"Jie Yan Song",senderOnline:!1}],Fe=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",display:"flex",justifyContent:"center",p:3},children:r(d,{sx:{maxWidth:363},children:[e(u,{title:"Inbox"}),e(f,{disablePadding:!0,children:$e.map(a=>{const n=fe(a.createdAt,new Date,{addSuffix:!0,locale:se});return r(y,{sx:{"&:hover":{backgroundColor:"action.hover",cursor:"pointer"}},children:[e(R,{children:a.senderOnline?e(oe,{anchorOrigin:{horizontal:"right",vertical:"bottom"},color:"success",variant:"dot",children:e(h,{src:a.senderAvatar})}):e(h,{src:a.senderAvatar})}),e(x,{disableTypography:!0,primary:e(t,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"subtitle2",children:a.senderName}),secondary:e(t,{color:"text.secondary",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"body2",children:a.content}),sx:{pr:2}}),e(t,{color:"text.secondary",sx:{whiteSpace:"nowrap"},variant:"caption",children:n})]},a.id)})}),e(Z,{children:e(j,{color:"inherit",size:"small",children:"Go to chat"})})]})}),Me=[{id:"5e887a62195cc5aef7e8ca5d",avatar:"/assets/avatars/avatar-marcus-finn.png",job:"Front End Developer",name:"Marcus Finn"},{id:"5e887ac47eed253091be10cb",avatar:"/assets/avatars/avatar-carson-darrin.png",job:"UX Designer",name:"Carson Darrin"},{id:"5e887b7602bdbc4dbb234b27",avatar:"/assets/avatars/avatar-jie-yan-song.png",job:"Copyright",name:"Jie Yan Song"}],We=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:e(S,{maxWidth:"sm",children:r(d,{children:[e(u,{sx:{pb:0},title:"Project members",titleTypographyProps:{variant:"overline"}}),e(de,{children:e(f,{disablePadding:!0,children:Me.map(a=>r(y,{disableGutters:!0,children:[e(R,{children:e(h,{src:a.avatar})}),e(x,{primary:e(t,{variant:"subtitle2",children:a.name}),secondary:e(t,{color:"text.secondary",variant:"body2",children:a.job})})]},a.id))})}),e(v,{}),e(Z,{sx:{justifyContent:"center"},children:e(j,{color:"inherit",size:"small",children:"Manage members"})})]})})}),I=new Date,ze=[{id:"5f0366cd843161f193ebadd4",author:{avatar:"/assets/avatars/avatar-marcus-finn.png",name:"Marcus Finn"},comment:"Great company, providing an awesome & easy to use product.",createdAt:m(I,2).getTime(),value:5},{id:"to33twsyjphcfj55y3t07261",author:{avatar:"/assets/avatars/avatar-miron-vitold.png",name:"Miron Vitold"},comment:"Not the best people managers, poor management skills, poor career development programs. Communication from corporate & leadership isn't always clear and is sometime one-sided. Low pay compared to FANG.",createdAt:m(I,2).getTime(),value:2},{id:"6z9dwxjzkqbmxuluxx2681jd",author:{avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"},comment:"I have been working with this company full-time. Great for the work life balance. Cons, decentralized decision making process across the organization.",createdAt:m(I,2).getTime(),value:4}],Ne=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:e(C,{spacing:3,children:ze.map(a=>{const n=M(a.createdAt);return r(d,{children:[e(u,{avatar:e(h,{src:a.author.avatar}),disableTypography:!0,subheader:r(i,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",mt:1},children:[r(i,{sx:{alignItems:"center",display:"flex",mr:1},children:[e(ce,{readOnly:!0,value:5}),e(t,{sx:{ml:1},variant:"subtitle2",children:a.value})]}),r(t,{color:"text.secondary",variant:"body2",children:["| For"," ",e(A,{color:"text.primary",variant:"subtitle2",children:"Low Budget"})," ","|"," ",n," ","ago"]})]}),title:e(A,{color:"text.primary",variant:"subtitle2",children:a.author.name})}),e(i,{sx:{pb:2,px:3},children:e(t,{color:"text.secondary",variant:"body1",children:a.comment})})]},a.id)})})}),$=new Date,Be=[{id:"5e8dd0828d628e6f40abdfe8",createdAt:c($,23).getTime(),description:"has uploaded a new file",subject:"Project author",type:"upload_file"},{id:"5e8dd0893a6725f2bb603617",createdAt:m($,2).getTime(),description:"joined team as a Front-End Developer",subject:"Adrian Stefan",type:"join_team"},{id:"5e8dd08f44603e3300b75cf1",createdAt:m($,9).getTime(),description:"joined team as a Full Stack Developer",subject:"Alexandru Robert",type:"join_team"}],Oe=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:e(C,{spacing:3,children:Be.map(a=>{const n=M(a.createdAt);return r(d,{sx:{alignItems:"center",display:"flex",p:2},children:[e(h,{sx:{backgroundColor:"primary.main",color:"common.white"},children:e(p,{children:e(ye,{})})}),r(t,{sx:{ml:2},variant:"body2",children:[e(A,{color:"text.primary",variant:"subtitle2",children:a.subject})," ",a.description]}),r(t,{sx:{ml:"auto"},variant:"caption",children:[n," ","ago"]})]},a.id)})})}),Ve=[{id:"4be0679f811115c9d2d28497",clickRate:6.32,conversionRate:1.05,createdAt:"Jan 23 2022",name:"Summer Active Health",platform:"Google",status:"draft",target:"Men Group"},{id:"4e1cd375bfa59e4347404e20",clickRate:7.94,conversionRate:.31,createdAt:"Feb 1 2022",name:"New prospects blog",platform:"Facebook",status:"active",target:"Woman Married Group"},{id:"6b37fdf83195ca7e36622040",clickRate:20.15,conversionRate:2.1,createdAt:"Feb 5 2022",name:"Amazon Gift Cards",platform:"Facebook",status:"stopped",target:"Young Group"},{id:"e3651f8f9565cdbe8d2e5fea",clickRate:7.94,conversionRate:.5,createdAt:"Feb 1 2022",name:"Best Marketing Course Online",platform:"Bing",status:"draft",target:"Young Group"}],He={draft:"secondary",active:"success",stopped:"error"},Ye=()=>e(i,{sx:{backgroundColor:a=>a.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(d,{children:[e(u,{title:"Campaigns Summary"}),e(v,{}),e(W,{children:e(z,{children:Ve.map(a=>{const n=He[a.status];return r(N,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[r(o,{children:[e(t,{sx:{cursor:"pointer"},variant:"subtitle2",children:a.name}),r(i,{sx:{alignItems:"center",display:"flex",mt:1},children:[e(t,{color:"text.secondary",variant:"body2",children:a.platform}),e(i,{sx:{height:4,width:4,borderRadius:4,backgroundColor:"text.secondary",mx:1}}),e(t,{color:"text.secondary",variant:"body2",children:`${a.target}, ${a.createdAt}`})]})]}),e(o,{children:e(xe,{color:n,children:a.status})}),r(o,{children:[r(t,{variant:"subtitle2",children:[a.clickRate,"%"]}),e(t,{color:"text.secondary",sx:{mt:1},variant:"body2",children:"Click Rate"})]}),r(o,{children:[r(t,{variant:"subtitle2",children:[a.conversionRate,"%"]}),e(t,{color:"text.secondary",sx:{mt:1},variant:"body2",children:"Conversions"})]}),e(o,{align:"right",children:e(j,{size:"small",variant:"outlined",children:"View"})})]},a.id)})})})]})}),Je=[{element:e(ke,{}),title:"Grouped list 1"},{element:e(we,{}),title:"Grouped list 2"},{element:e(Ce,{}),title:"Grouped list 3"},{element:e(Te,{}),title:"Grouped list 4"},{element:e(Pe,{}),title:"Grouped list 5"},{element:e(Ie,{}),title:"Grouped list 6"},{element:e(Fe,{}),title:"Grouped list 7"},{element:e(We,{}),title:"Grouped list 8"},{element:e(Ne,{}),title:"Grouped list 9"},{element:e(Oe,{}),title:"Grouped list 10"},{element:e(Ye,{}),title:"Grouped list 11"}],da=()=>(le(),r(me,{children:[e(pe,{title:"Components: Grouped Lists"}),e(i,{component:"main",sx:{flexGrow:1,py:8},children:e(S,{maxWidth:"lg",children:e(C,{spacing:8,children:Je.map(a=>e(ue,{title:a.title,children:a.element},a.title))})})})]}));export{da as default};
