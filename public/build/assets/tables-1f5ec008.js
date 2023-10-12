import{b8 as l,b7 as h,b6 as n,d as e,l as u,j as r,C as b,at as g,q as d,D as k,aY as T,n as L,b1 as f,ba as M,k as p,B as te,bh as ae,f as C,E as re,bi as ne,bj as le,bk as H,bl as G,bm as F,T as D,m as w,L as N,aN as E,av as U,bn as _,c as ce,F as se,S as de,aL as oe}from"./app-21956035.js";import{P as he}from"./previewer-c9427062.js";import{D as j}from"./DotsHorizontal-ad2af84f.js";import{S as O}from"./severity-pill-96462c1b.js";import{s as c}from"./index-a926b7d6.js";import{C as S}from"./CardHeader-f479f259.js";import{T as v,b as o,c as a,a as y}from"./TableRow-23529dcc.js";import{T as A}from"./TableHead-f7e30595.js";import{T as z}from"./TableSortLabel-b5b5edc5.js";import{E as B}from"./Edit02-7fd0556e.js";import{T as I}from"./TablePagination-a61d913f.js";import{I as ue}from"./Image01-7a19c7ce.js";import{I as ie}from"./InfoCircle-daef58c9.js";const $=new Date,me=[{id:"5eff2548979e396cb4b000ba",createdAt:l(c($,10),7).getTime(),customer:{email:"ekaterina@devias.io",name:"Ekaterina Tankova"},currency:"$",items:7,number:"DEV-1042",status:"pending",totalAmount:524},{id:"5eff254e46b753a166e7d7af",createdAt:h(l(c($,50),12),2).getTime(),customer:{email:"carson.darrin@devias.io",name:"Carson Darrin"},currency:"$",items:8,number:"DEV-1041",status:"complete",totalAmount:693},{id:"5eff2553e1c551e2e28a9205",createdAt:h(l(c($,12),39),5).getTime(),customer:{email:"fran.perez@devias.io",name:"Fran Perez"},currency:"$",items:4,number:"DEV-1040",status:"rejected",totalAmount:215},{id:"5eff25590f3e28f013c39a0e",createdAt:h(l(c($,21),46),5).getTime(),customer:{email:"anje.keiser@devias.io",name:"Jie Yan Song"},currency:"$",items:1,number:"DEV-1039",status:"pending",totalAmount:25},{id:"5eff255f57499089243805d8",createdAt:h(l(c($,54),19),8).getTime(),customer:{name:"Clarke Gillebert",email:"clarke.gillebert@devias.io"},currency:"$",items:5,number:"DEV-1038",status:"complete",totalAmount:535},{id:"5eff25658d416fc5adb96a3a",createdAt:n(l(c($,12),45),1).getTime(),customer:{email:"nasimiyu.danai@devias.io",name:"Nasimiyu Danai"},currency:"$",items:2,number:"DEV-1037",status:"complete",totalAmount:56}],ge={complete:"success",pending:"warning",rejected:"error"},pe=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[e(S,{action:e(g,{children:e(d,{children:e(j,{})})}),title:"Latest Orders"}),e(k,{}),e(T,{children:r(v,{sx:{minWidth:700},children:[e(A,{children:r(o,{children:[e(a,{sortDirection:"desc",children:e(L,{enterDelay:300,title:"Sort",children:e(z,{active:!0,direction:"desc",children:"Number"})})}),e(a,{children:"Customer"}),e(a,{children:"Items"}),e(a,{children:"Total"}),e(a,{children:"Status"}),e(a,{align:"right",children:"Date"})]})}),e(y,{children:me.map(t=>{const i=f(t.totalAmount).format(`${t.currency}0,0.00`),s=ge[t.status],m=M(t.createdAt,"dd MMM, yyyy HH:mm:ss");return r(o,{hover:!0,children:[e(a,{children:e(p,{variant:"subtitle2",children:t.number})}),e(a,{children:t.customer.name}),e(a,{children:t.items}),e(a,{children:i}),e(a,{children:e(O,{color:s,children:t.status})}),e(a,{align:"right",children:m})]},t.id)})})]})}),e(u,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:e(te,{color:"inherit",endIcon:e(d,{children:e(ae,{})}),size:"small",children:"See All"})})]})}),V=new Date,be=[{id:"5eff24e675e7b3cba23e4be7",author:{avatar:"/assets/avatars/avatar-jie-yan-song.png",name:"Jie Yan Song"},budget:12500,createdAt:h(l(c(V,10),34),2).getTime(),currency:"$",technologies:["angular"],title:"Mella Full Screen Slider"},{id:"5eff24e98e2c9107e95cb827",author:{avatar:"/assets/avatars/avatar-omar-darboe.png",name:"Omar Darobe"},budget:15750,createdAt:h(l(c(V,25),56),10).getTime(),currency:"$",technologies:["sketch","html-css"],title:"Overview Design"},{id:"5eff24f0d97353e3576d3c26",author:{avatar:"/assets/avatars/avatar-siegbert-gottfried.png",name:"Siegbert Gottfried"},budget:15750,createdAt:n(l(c(V,50),30),1).getTime(),currency:"$",technologies:["react-js"],title:"Ten80 Web Design"},{id:"5eff24f737bc6b191dd9bf58",author:{avatar:"/assets/avatars/avatar-iulia-albu.png",name:"Iulia Albu"},budget:12500,createdAt:n(l(c(V,30),4),1).getTime(),currency:"$",technologies:["vue-js"],title:"Neura e-commerce UI Kit"},{id:"5eff24fb29fc5e37bdab3b2d",author:{avatar:"/assets/avatars/avatar-carson-darrin.png",name:"Carson Darrin"},budget:15750,createdAt:n(l(c(V,6),11),1).getTime(),currency:"$",technologies:["angular","figma"],title:"Administrator Overview"}],ve={"html-css":"/assets/logos/logo-html.svg","react-js":"/assets/logos/logo-react-js.svg","vue-js":"/assets/logos/logo-vue-js.svg",angular:"/assets/logos/logo-angular.svg",figma:"/assets/logos/logo-figma.svg",sketch:"/assets/logos/logo-sketch.svg"},ye=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[e(S,{action:e(g,{children:e(d,{children:e(j,{})})}),title:"Latest Projects"}),e(k,{}),e(T,{children:r(v,{sx:{minWidth:900},children:[e(A,{children:r(o,{children:[e(a,{children:"Title"}),e(a,{children:"Author"}),e(a,{children:"Budget"}),e(a,{children:"Technology"}),e(a,{align:"right",sortDirection:"desc",children:e(L,{enterDelay:300,title:"Sort",children:e(z,{active:!0,direction:"desc",children:"Created"})})})]})}),e(y,{children:be.map(t=>{const i=f(t.budget).format(`${t.currency}0,0.00`),s=M(t.createdAt,"dd MMM, yyyy");return r(o,{hover:!0,children:[e(a,{children:t.title}),e(a,{children:r(C,{alignItems:"center",direction:"row",spacing:1,children:[e(re,{src:t.author.avatar}),e(p,{variant:"subtitle2",children:t.author.name})]})}),e(a,{children:i}),e(a,{children:e(C,{direction:"row",spacing:1,children:t.technologies.map(m=>e(u,{component:"span",sx:{"& img":{height:30}},children:e("img",{alt:"Tech",src:ve[m]},m)},m))})}),e(a,{align:"right",children:s})]},t.id)})})]})}),e(u,{sx:{display:"flex",justifyContent:"flex-end",p:2},children:e(te,{color:"inherit",endIcon:e(d,{children:e(ae,{})}),size:"small",children:"See All"})})]})}),R=new Date,J=[{id:"5e887ac47eed253091be10cb",avatar:"/assets/avatars/avatar-carson-darrin.png",city:"Cleveland",country:"USA",currency:"$",email:"carson.darrin@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Carson Darrin",state:"Ohio",totalSpent:300,totalOrders:3,updatedAt:n(h(R,7),1).getTime()},{id:"5e887b209c28ac3dd97f6db5",avatar:"/assets/avatars/avatar-fran-perez.png",city:"Atlanta",country:"USA",currency:"$",email:"fran.perez@devias.io",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Fran Perez",state:"Georgia",totalSpent:0,totalOrders:0,updatedAt:n(h(R,1),2).getTime()},{id:"5e887b7602bdbc4dbb234b27",avatar:"/assets/avatars/avatar-jie-yan-song.png",city:"North Canton",country:"USA",currency:"$",email:"jie.yan.song@devias.io",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!1,name:"Jie Yan Song",state:"Ohio",totalSpent:5600,totalOrders:6,updatedAt:n(h(R,4),2).getTime()},{id:"5e86809283e28b96d2d38537",avatar:"/assets/avatars/avatar-anika-visser.png",city:"Madrid",country:"Spain",currency:"$",email:"anika.visser@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Anika Visser",state:"Madrid",totalSpent:500,totalOrders:1,updatedAt:n(h(R,11),2).getTime()},{id:"5e86805e2bafd54f66cc95c3",avatar:"/assets/avatars/avatar-miron-vitold.png",city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@devias.io",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Miron Vitold",totalSpent:0,totalOrders:0,state:"California",updatedAt:n(h(R,7),3).getTime()}],fe=[{label:"All",value:"all"},{label:"Accepts Marketing",value:"hasAcceptedMarketing"},{label:"Prospect",value:"isProspect"},{label:"Returning",value:"isReturning"}],Ae=[{label:"Last update (newest)",value:"updatedAt|desc"},{label:"Last update (oldest)",value:"updatedAt|asc"},{label:"Total orders (highest)",value:"orders|desc"},{label:"Total orders (lowest)",value:"orders|asc"}],Te=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[e(ne,{indicatorColor:"primary",scrollButtons:"auto",textColor:"primary",value:"all",sx:{px:3},variant:"scrollable",children:fe.map(t=>e(le,{label:t.label,value:t.value},t.value))}),e(k,{}),r(C,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:2,sx:{p:3},children:[e(H,{placeholder:"Search customers",startAdornment:e(G,{position:"start",children:e(d,{children:e(F,{})})}),sx:{flexGrow:1}}),e(D,{label:"Sort By",name:"sort",select:!0,SelectProps:{native:!0},children:Ae.map(t=>e("option",{value:t.value,children:t.label},t.value))})]}),e(T,{children:r(v,{sx:{minWidth:700},children:[e(A,{children:r(o,{children:[e(a,{padding:"checkbox",children:e(w,{})}),e(a,{children:"Name"}),e(a,{children:"Location"}),e(a,{children:"Orders"}),e(a,{children:"Spent"}),e(a,{align:"right",children:"Actions"})]})}),e(y,{children:J.map(t=>{const i=`${t.city}, ${t.state}, ${t.country}`,s=f(t.totalSpent).format(`${t.currency}0,0.00`);return r(o,{hover:!0,children:[e(a,{padding:"checkbox",children:e(w,{})}),e(a,{children:r(C,{alignItems:"center",direction:"row",spacing:1,children:[e(re,{src:t.avatar,sx:{height:42,width:42}}),r("div",{children:[e(N,{color:"inherit",variant:"subtitle2",children:t.name}),e(p,{color:"text.secondary",variant:"body2",children:t.email})]})]})}),e(a,{children:i}),e(a,{children:t.totalOrders}),e(a,{children:s}),r(a,{align:"right",children:[e(g,{children:e(d,{children:e(B,{})})}),e(g,{children:e(d,{children:e(E,{})})})]})]},t.id)})})]})}),e(I,{component:"div",count:J.length,onPageChange:()=>{},onRowsPerPageChange:()=>{},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})]})}),W=new Date,Y=[{id:"5ecb8a6d9f53bfae09e16115",createdAt:l(c(W,23),32).getTime(),currency:"$",customer:{email:"carson.darrin@devias.io",name:"Carson Darrin"},number:"DEV-102",paymentMethod:"CreditCard",status:"pending",totalAmount:500},{id:"5ecb8a738aa6f3e577c2b3ec",createdAt:l(c(W,51),36).getTime(),currency:"$",customer:{email:"fran.perez@devias.io",name:"Fran Perez"},number:"DEV-101",paymentMethod:"PayPal",status:"complete",totalAmount:500},{id:"5ecb8a795e53f134013eba3b",createdAt:l(c(W,55),38).getTime(),currency:"$",customer:{email:"jie.yan.song@devias.io",name:"Jie Yan Song"},number:"DEV-100",paymentMethod:"CreditCard",status:"pending",totalAmount:500},{id:"5ecb8a7f738cc572a9ce0277",createdAt:l(c(W,3),40).getTime(),currency:"$",customer:{email:"clarke.gillebert@devias.io",name:"Clarke Gillebert"},number:"DEV-99",paymentMethod:"PayPal",status:"complete",totalAmount:500},{id:"5e86805e2bafd54f66cc95c3",createdAt:l(c(W,32),45).getTime(),currency:"$",customer:{email:"miron.vitold@devias.io",name:"Miron Vitold"},number:"DEV-98",paymentMethod:"PayPal",status:"complete",totalAmount:500}],xe=t=>{const i={canceled:{color:"error",text:"Canceled"},complete:{color:"success",text:"complete"},pending:{color:"warning",text:"Pending"},rejected:{color:"error",text:"Rejected"}},{text:s,color:m}=i[t];return e(O,{color:m,children:s})},Pe=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[e(S,{action:e(g,{children:e(d,{children:e(j,{})})}),title:"Orders"}),e(k,{}),e(T,{children:r(v,{sx:{minWidth:1150},children:[e(A,{children:r(o,{children:[e(a,{padding:"checkbox",children:e(w,{})}),e(a,{children:"Number"}),e(a,{children:"Customer"}),e(a,{children:"Method"}),e(a,{children:"Total"}),e(a,{children:"Status"}),e(a,{align:"right",children:"Actions"})]})}),e(y,{children:Y.map(t=>{const i=M(t.createdAt,"dd MMM yyyy | HH:mm"),s=f(t.totalAmount).format(`${t.currency}0,0.00`),m=xe(t.status);return r(o,{hover:!0,children:[e(a,{padding:"checkbox",children:e(w,{})}),r(a,{children:[e(p,{variant:"subtitle2",children:t.number}),e(p,{color:"text.secondary",variant:"body2",children:i})]}),r(a,{children:[e(p,{variant:"subtitle2",children:t.customer.name}),e(p,{color:"text.secondary",variant:"body2",children:t.customer.email})]}),e(a,{children:t.paymentMethod}),e(a,{children:s}),e(a,{children:m}),r(a,{align:"right",children:[e(g,{children:e(d,{children:e(B,{})})}),e(g,{children:e(d,{children:e(E,{})})})]})]},t.id)})})]})}),e(I,{component:"div",count:Y.length,onPageChange:()=>{},onRowsPerPageChange:()=>{},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})]})}),x=new Date,K=[{id:"5ece2c077e39da27658aa8a9",attributes:["Cotton"],category:"dress",currency:"$",createdAt:n(x,1).getTime(),image:"/assets/products/product-1.png",inventoryType:"in_stock",isAvailable:!0,isShippable:!1,name:"Healthcare Erbology",price:23.99,quantity:85,updatedAt:h(x,6).getTime(),variants:2},{id:"5ece2c0d16f70bff2cf86cd8",attributes:["Cotton"],category:"dress",currency:"$",createdAt:n(x,3).getTime(),image:"/assets/products/product-2.png",inventoryType:"out_of_stock",isAvailable:!1,isShippable:!0,name:"Makeup Lancome Rouge",price:95,quantity:0,updatedAt:n(h(x,8),2).getTime(),variants:1},{id:"5ece2c123fad30cbbff8d060",attributes:["Variety of styles"],category:"jewelry",currency:"$",createdAt:n(x,6).getTime(),image:null,inventoryType:"in_stock",isAvailable:!0,isShippable:!1,name:"Layering Bracelets Collection",price:155,quantity:48,updatedAt:n(h(x,2),1).getTime(),variants:5},{id:"5ece2c1be7996d1549d94e34",attributes:["Polyester and Spandex"],category:"blouse",currency:"$",createdAt:n(x,12).getTime(),image:"/assets/products/product-4.png",inventoryType:"limited",isAvailable:!1,isShippable:!0,name:"Skincare Necessaire",price:17.99,quantity:5,updatedAt:n(h(x,7),1).getTime(),variants:1}],Ce=[{label:"All",value:"all"},{label:"Dress",value:"dress"},{label:"Jewelry",value:"jewelry"},{label:"Blouse",value:"blouse"},{label:"Beauty",value:"beauty"}],we=[{label:"All",value:"all"},{label:"Available",value:"available"},{label:"Unavailable",value:"unavailable"}],Se=[{label:"Last update (newest first)",value:"updatedAt|desc"},{label:"Last update (oldest first)",value:"updatedAt|asc"},{label:"Creation date (newest first)",value:"createdAt|desc"},{label:"Creation date (oldest first)",value:"createdAt|asc"}],ke=t=>{const i={in_stock:{color:"success",text:"In Stock"},limited:{color:"warning",text:"Limited"},out_of_stock:{color:"error",text:"Out of Stock"}},{text:s,color:m}=i[t];return e(O,{color:m,children:s})},$e=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[r(C,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:2,sx:{p:3},children:[e(H,{placeholder:"Search products",startAdornment:e(G,{position:"start",children:e(d,{children:e(F,{})})}),sx:{maxWidth:"100%",width:500}}),e(D,{label:"Sort By",name:"sort",select:!0,SelectProps:{native:!0},sx:{maxWidth:"100%",width:240},children:Se.map(t=>e("option",{value:t.value,children:t.label},t.value))}),e(D,{label:"Category",name:"category",select:!0,SelectProps:{native:!0},sx:{maxWidth:"100%",width:240},children:Ce.map(t=>e("option",{value:t.value,children:t.label},t.value))}),e(D,{label:"Availability",name:"availability",select:!0,SelectProps:{native:!0},sx:{maxWidth:"100%",width:240},children:we.map(t=>e("option",{value:t.value,children:t.label},t.value))}),e("div",{children:e(U,{control:e(_,{name:"inStock"}),label:"In Stock"})}),e("div",{children:e(U,{control:e(_,{name:"Shippable"}),label:"Shippable"})})]}),e(T,{children:r(v,{sx:{minWidth:1200},children:[e(A,{children:r(o,{children:[e(a,{padding:"checkbox",children:e(w,{})}),e(a,{children:"Name"}),e(a,{children:"Inventory"}),e(a,{children:"Details"}),e(a,{children:"Attributes"}),e(a,{children:"Price"}),e(a,{align:"right",children:"Actions"})]})}),e(y,{children:K.map(t=>{const i=f(t.price).format(`${t.currency}0,0.00`),s=t.variants>1;return r(o,{hover:!0,children:[e(a,{padding:"checkbox",children:e(w,{})}),e(a,{children:r(u,{sx:{alignItems:"center",display:"flex"},children:[t.image?e(u,{sx:{alignItems:"center",backgroundColor:"neutral.50",display:"flex",height:100,justifyContent:"center",overflow:"hidden",width:100,"& img":{height:"auto",width:"100%"}},children:e("img",{alt:"Product",src:t.image})}):e(u,{sx:{alignItems:"center",backgroundColor:"neutral.50",display:"flex",height:100,justifyContent:"center",width:100},children:e(d,{children:e(ue,{})})}),e(N,{color:"text.primary",underline:"none",sx:{ml:2},variant:"subtitle2",children:t.name})]})}),e(a,{children:ke(t.inventoryType)}),r(a,{children:[t.quantity," ","in stock",s&&` in ${t.variants} variants`]}),e(a,{children:t.attributes.map(m=>m)}),e(a,{children:i}),r(a,{align:"right",children:[e(g,{children:e(d,{children:e(B,{})})}),e(g,{children:e(d,{children:e(E,{})})})]})]},t.id)})})]})}),e(I,{component:"div",count:K.length,onPageChange:()=>{},onRowsPerPageChange:()=>{},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})]})}),q=new Date,Q=[{id:"5ecb868d0f437390ef3ac62c",currency:"$",customer:{email:"contact@anahenisky.io",name:"Ana Henisky"},issueDate:h(q,1).getTime(),status:"paid",totalAmount:55.5},{id:"5ecb868ada8deedee0638502",currency:"$",customer:{email:"sales@matt-jason.com",name:"Matt Jason"},issueDate:n(h(q,5),2).getTime(),status:"pending",totalAmount:19.76},{id:"5ecb868700aba84d0f1c0e48",currency:"$",customer:{email:"support@terrythomas.io",name:"Terry Thomas"},issueDate:n(h(q,4),6).getTime(),status:"canceled",totalAmount:781.5},{id:"5ecb8682038e1ddf4e868764",currency:"$",customer:{email:"contact@triv-shopper.co.uk",name:"Triv Shopper"},issueDate:n(h(q,2),15).getTime(),status:"paid",totalAmount:96.64}],De=[{label:"All",value:"all"},{label:"Paid",value:"paid"},{label:"Pending",value:"pending"},{label:"Canceled",value:"canceled"}],Me=[{label:"Newest first",value:"createdAt|desc"},{label:"Oldest first",value:"createdAt|asc"}],Oe=t=>{const i={canceled:{color:"error",text:"Canceled"},paid:{color:"success",text:"Paid"},pending:{color:"warning",text:"Pending"}},{text:s,color:m}=i[t];return e(O,{color:m,children:s})},Ie=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[r(C,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:2,sx:{p:3},children:[e(H,{fullWidth:!0,placeholder:"Search invoices",startAdornment:e(G,{position:"start",children:e(d,{children:e(F,{})})}),sx:{maxWidth:"100%",width:500}}),e(D,{fullWidth:!0,label:"Sort By",name:"sort",select:!0,SelectProps:{native:!0},sx:{maxWidth:"100%",width:240},children:Me.map(t=>e("option",{value:t.value,children:t.label},t.value))}),e(D,{fullWidth:!0,label:"Status",name:"status",select:!0,SelectProps:{native:!0},sx:{maxWidth:"100%",width:240},children:De.map(t=>e("option",{value:t.value,children:t.label},t.value))})]}),e(T,{children:r(v,{sx:{minWidth:1200},children:[e(A,{children:r(o,{children:[e(a,{padding:"checkbox",children:e(w,{})}),e(a,{children:"Customer"}),e(a,{children:"Status"}),e(a,{children:"Amount"}),e(a,{children:"ID"}),e(a,{children:"Date"}),e(a,{align:"right",children:"Actions"})]})}),e(y,{children:Q.map(t=>{const i=f(t.totalAmount).format(`${t.currency}0,0.00`),s=M(t.issueDate,"dd/MM/yyyy"),m=Oe(t.status);return r(o,{hover:!0,children:[e(a,{padding:"checkbox",children:e(w,{})}),r(a,{children:[e(N,{color:"text.primary",underline:"none",variant:"subtitle2",children:t.customer.name}),e(p,{color:"text.secondary",variant:"body2",children:t.customer.email})]}),e(a,{children:m}),e(a,{children:i}),e(a,{children:t.id}),e(a,{children:s}),r(a,{align:"right",children:[e(g,{children:e(d,{children:e(B,{})})}),e(g,{children:e(d,{children:e(E,{})})})]})]},t.id)})})]})}),e(I,{component:"div",count:Q.length,onPageChange:()=>{},onRowsPerPageChange:()=>{},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})]})}),Ve=[{bounceRate:16,uniqueVisits:8584,url:"/",visitors:95847},{bounceRate:5,uniqueVisits:648,url:"/auth/login",visitors:7500},{bounceRate:2,uniqueVisits:568,url:"/dashboard",visitors:85406},{bounceRate:12,uniqueVisits:12322,url:"/blog/top-5-react-frameworks",visitors:75050},{bounceRate:10,uniqueVisits:11645,url:"/blog/understand-programming-principles",visitors:68003},{bounceRate:8,uniqueVisits:10259,url:"/blog/design-patterns",visitors:49510}],Re=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[e(S,{action:e(L,{title:"Refresh rate is 24h",children:e(d,{children:e(ie,{})})}),title:"Most Visited Pages"}),r(v,{children:[e(A,{children:r(o,{children:[e(a,{children:"Page Name"}),e(a,{children:"Visitors"}),e(a,{children:"Unique page visits"}),e(a,{children:"Bounce rate"})]})}),e(y,{children:Ve.map(t=>{const i=f(t.visitors).format("0,0"),s=f(t.uniqueVisits).format("0,0");return r(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(a,{children:e(p,{variant:"body2",children:t.url})}),e(a,{children:i}),e(a,{children:s}),r(a,{children:[t.bounceRate,"%"]})]},t.url)})})]})]})}),We=[{flag:"/assets/flags/flag-us.svg",name:"United States",seo:40,visits:31200},{flag:"/assets/flags/flag-uk.svg",name:"United Kingdom",seo:47,visits:12700},{flag:"/assets/flags/flag-ru.svg",name:"Russia",seo:65,visits:10360},{flag:"/assets/flags/flag-ca.svg",name:"Canada",seo:23,visits:5749},{flag:"/assets/flags/flag-de.svg",name:"Germany",seo:45,visits:2932}],Ee=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[e(S,{action:e(L,{title:"Refresh rate is 24h",children:e(d,{children:e(ie,{})})}),title:"Visits by Country"}),r(v,{children:[e(A,{children:r(o,{children:[e(a,{children:"Country"}),e(a,{children:e(z,{active:!0,direction:"asc",children:"Visits"})}),e(a,{children:"SEO"})]})}),e(y,{children:We.map(t=>{const i=f(t.visits).format("0,0");return r(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(a,{children:r(C,{alignItems:"center",direction:"row",spacing:2,children:[e(u,{sx:{height:36,width:36,"& img":{height:36,width:36}},children:e("img",{alt:t.name,src:t.flag})}),e(p,{variant:"subtitle2",children:t.name})]})}),e(a,{children:i}),r(a,{children:[t.seo,"%"]})]},t.name)})})]})]})}),X=new Date,Z=[{id:"5ece2cef3e562cbd61996259",currency:"$",description:"Freelancer Subscription (12/05/2019 - 11/06/2019)",issueDate:X.getTime(),number:5345,paymentMethod:"Credit Card",status:"paid",value:5.25},{id:"5ece2cf461b9484866f2968c",currency:"$",description:"Freelancer Subscription (12/05/2019 - 11/06/2019)",issueDate:X.getTime(),number:4596,paymentMethod:"Credit Card",status:"paid",value:5.25}],je=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[e(S,{action:e(g,{children:e(d,{children:e(j,{})})}),title:"Invoices"}),e(k,{}),e(T,{children:r(v,{sx:{minWidth:1150},children:[e(A,{children:r(o,{children:[e(a,{children:"ID"}),e(a,{children:"Date"}),e(a,{children:"Description"}),e(a,{children:"Payment Method"}),e(a,{children:"Total"}),e(a,{children:"Status"}),e(a,{align:"right",children:"Actions"})]})}),e(y,{children:Z.map(t=>{const i=M(t.issueDate,"dd/MM/yyyy | HH:mm");return r(o,{children:[r(a,{children:["#",t.number]}),e(a,{children:e(p,{noWrap:!0,variant:"body2",children:i})}),e(a,{children:t.description}),e(a,{children:t.paymentMethod}),r(a,{children:[t.currency,t.value]}),e(a,{children:e(O,{color:"primary",children:t.status})}),e(a,{align:"right",children:e(g,{children:e(d,{children:e(E,{})})})})]},t.id)})})]})}),e(I,{component:"div",count:Z.length,onPageChange:()=>{},onRowsPerPageChange:()=>{},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})]})}),P=new Date,qe=[{id:"5ece2cfeb6e2ac847bba11ce",createdAt:n(l(c(P,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:200},{id:"5ece2d02510484b2952e1e05",createdAt:n(l(c(P,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:522},{id:"5ece2d08e2748e4e9788901a",createdAt:n(l(c(P,23),8),2).getTime(),description:"Cart remove",ip:"84.234.243.42",method:"DELETE",route:"/api/products/d65654e/remove",status:200},{id:"5ece2d0c47214e342c2d7f28",createdAt:n(l(c(P,54),20),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/d65654e/add",status:200},{id:"5ece2d11e4060a97b2b57623",createdAt:n(l(c(P,16),34),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f/add",status:200},{id:"5ece2d16cf6d53d8e33656af",createdAt:n(l(c(P,30),54),2).getTime(),description:"View product",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f",status:200},{id:"5ece2d1b2ec5071be9286a96",createdAt:n(l(c(P,40),56),2).getTime(),description:"Get products",ip:"84.234.243.42",method:"GET",route:"/api/products",status:200},{id:"5ece2d22e68d5498917e47bc",createdAt:n(l(c(P,5),57),2).getTime(),description:"Login",ip:"84.234.243.42",method:"POST",route:"/api/auth/login",status:200}],Le=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[e(S,{action:e(g,{children:e(d,{children:e(j,{})})}),title:"Logs"}),e(k,{}),e(T,{children:e(v,{sx:{minWidth:1150},children:e(y,{children:qe.map(t=>{const i=t.status===200?"success":"error",s=M(t.createdAt,"yyyy/MM/dd | HH:mm:ss");return r(o,{children:[e(a,{width:"100",children:e(p,{variant:"subtitle2",children:t.method})}),e(a,{width:"64",children:e(O,{color:i,children:t.status})}),e(a,{children:t.route}),e(a,{children:t.description}),e(a,{align:"right",children:t.ip}),e(a,{align:"right",children:s})]},t.id)})})})})]})}),ee=[{id:"5ecb8abbdd6dfb1f9d6bf98b",billingCycle:"monthly",currency:"$",name:"Project Points",quantity:25,unitAmount:50.25},{id:"5ecb8ac10f116d04bed990eb",billingCycle:"monthly",currency:"$",name:"Freelancer Subscription",quantity:1,unitAmount:5}],Be=()=>e(u,{sx:{backgroundColor:t=>t.palette.mode==="dark"?"neutral.800":"neutral.100",p:3},children:r(b,{children:[e(S,{title:"Order items"}),e(k,{}),e(T,{children:r(v,{sx:{minWidth:700},children:[e(A,{children:r(o,{children:[e(a,{children:"Description"}),e(a,{children:"Billing Cycle"}),e(a,{children:"Amount"})]})}),e(y,{children:ee.map(t=>{const i=f(t.unitAmount).format(`${t.currency}0,0.00`),s=`${t.quantity} x ${t.name}`;return r(o,{children:[e(a,{children:e(p,{variant:"subtitle2",children:s})}),e(a,{children:t.billingCycle}),e(a,{children:i})]},t.id)})})]})}),e(I,{component:"div",count:ee.length,onPageChange:()=>{},onRowsPerPageChange:()=>{},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})]})}),He=[{element:e(pe,{}),title:"Table 1"},{element:e(ye,{}),title:"Table 2"},{element:e(Te,{}),title:"Table 3"},{element:e(Pe,{}),title:"Table 4"},{element:e($e,{}),title:"Table 5"},{element:e(Ie,{}),title:"Table 6"},{element:e(Re,{}),title:"Table 7"},{element:e(Ee,{}),title:"Table 8"},{element:e(je,{}),title:"Table 9"},{element:e(Le,{}),title:"Table 10"},{element:e(Be,{}),title:"Table 11"}],tt=()=>(ce(),r(se,{children:[e(de,{title:"Components: Tables"}),e(u,{component:"main",sx:{flexGrow:1,py:8},children:e(oe,{maxWidth:"lg",children:e(C,{spacing:8,children:He.map(t=>e(he,{title:t.title,children:t.element},t.title))})})})]}));export{tt as default};
