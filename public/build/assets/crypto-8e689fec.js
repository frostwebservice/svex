import{P as G}from"./Plus-2c179b67.js";import{P as s,j as r,l as o,d as e,k as i,_,r as T,C as f,bi as J,bj as S,e as z,T as B,X as H,q as u,B as b,b1 as x,f as l,H as w,aO as X,aZ as Z,ba as K,a_ as Q,b3 as Y,a0 as ee,a$ as re,bA as te,aN as ae,D as ie,aS as ne,c as oe,F as se,S as le,aL as ce,aM as g,b6 as k,b7 as I,b8 as A}from"./app-62bf28ff.js";import{S as de}from"./index-1b20f6e1.js";import{C as y}from"./CardHeader-c922d601.js";import{C as he,T as D,a as O}from"./TrendDown02-37e46c2a.js";import{D as pe}from"./DotsHorizontal-9e5204d9.js";import{C as j}from"./chart-b36f2b8c.js";import{C as E}from"./CardActions-bb61ccce.js";import"./index-0009016d.js";import"./index-01867189.js";const me={Mastercard:"/assets/cards/card-mastercard-1.png",VISA:"/assets/cards/card-visa.png"},ue={Mastercard:"/assets/logos/logo-mastercard.svg",VISA:"/assets/logos/logo-visa.svg"},F=n=>{const{brand:t,cardNumber:a,holderName:c,expiryDate:d,id:m,...h}=n;return r(o,{sx:{backgroundColor:"primary.main",backgroundImage:`url("${me[t]}")`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",py:6,px:4},...h,children:[r(o,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between"},children:[e("img",{src:"/assets/contactless.svg"}),e(o,{sx:{height:32,"& img":{height:"100%"}},children:e("img",{alt:"",src:ue[t]})})]}),e(o,{sx:{mt:6,mb:3},children:e(i,{sx:{background:"linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 100%)",backgroundClip:"text",fontSize:24,fontWeight:700,letterSpacing:"0.1em",lineHeight:"32px",textFillColor:"transparent"},children:a})}),r(o,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between"},children:[r("div",{children:[e(i,{color:"white",variant:"body2",children:"Card holder name"}),e(i,{color:"white",sx:{fontSize:16,fontWeight:700,lineHeight:"24px",mt:1,textShadow:"0px 1px 4px rgba(18, 109, 177, 0.58)"},children:c})]}),r(o,{sx:{ml:2},children:[e(i,{color:"white",variant:"body2",children:"Expiry date"}),e(i,{color:"white",sx:{fontSize:16,fontWeight:700,lineHeight:"24px",mt:1,textShadow:"0px 1px 4px rgba(18, 109, 177, 0.58)"},children:d})]}),e(o,{sx:{ml:2},children:e("img",{src:"/assets/sim.svg"})})]})]})};F.propTypes={id:s.string.isRequired,brand:s.string.isRequired,cardNumber:s.string.isRequired,expiryDate:s.string.isRequired,holderName:s.string.isRequired};const ge={arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},L=n=>{const{cards:t}=n;return e(o,{sx:{"& .slick-list":{borderRadius:2,boxShadow:12},"& .slick-dots":{bottom:"unset",left:a=>a.spacing(3),textAlign:"left",top:a=>a.spacing(1)},"& .slick-dots li button":{"&:before":{fontSize:10,color:"common.white"}},"& .slick-dots li.slick-active button":{"&:before":{color:"common.white"}}},children:e(de,{...ge,children:t.map(a=>e(F,{...a},a.id))})})};L.propTypes={cards:s.array.isRequired};var be=function(t){return r("svg",_({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"m13 16 4 4 4-4M3 8l4-4 4 4"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 4v16m0 0-4-4m4 4 4-4M7 20V4m0 0L3 8m4-4 4 4"})]}))};const R={BTC:"/assets/logos/logo-bitcoin.svg",ETH:"/assets/logos/logo-eth.svg"},M=n=>{const[t,a]=T.useState({from:"BTC",to:"ETH"}),c=T.useCallback(()=>{t.from==="BTC"?a({from:"ETH",to:"BTC"}):a({from:"BTC",to:"ETH"})},[t]);return r(f,{...n,children:[e(y,{title:"Operation",action:r(J,{value:"buy",children:[e(S,{label:"Buy",value:"buy"}),e(S,{label:"Sell",value:"sell"})]})}),r(z,{sx:{pt:0},children:[e(B,{label:"From",fullWidth:!0,InputProps:{startAdornment:e(o,{sx:{mr:1,mt:2.5},children:e(o,{component:"img",src:R[t.from],sx:{height:24,width:24}})})},value:"0.4567"}),e(o,{sx:{display:"flex",justifyContent:"center",my:1},children:e(H,{onClick:c,children:e(u,{fontSize:"small",children:e(be,{})})})}),e(B,{label:"To",fullWidth:!0,InputProps:{startAdornment:e(o,{sx:{mr:1,mt:2.5},children:e(o,{component:"img",src:R[t.to],sx:{height:24,width:24}})})},value:"5.9093"}),e(i,{color:"text.secondary",sx:{mt:2},variant:"body2",children:"1 BTC = $20,024.90"}),r(b,{fullWidth:!0,size:"large",sx:{mt:2},variant:"contained",children:["Buy ",t.to==="BTC"?"Bitcoin":"Ethereum"]})]})]})};M.propTypes={sx:s.object};const xe={BTC:"/assets/logos/logo-bitcoin.svg",ETH:"/assets/logos/logo-eth.svg",BNB:"/assets/logos/logo-bnb.svg"},fe=n=>{const t=w();return{chart:{background:"transparent",toolbar:{show:!1},zoom:{enabled:!1}},colors:[n],dataLabels:{enabled:!1},fill:{gradient:{opacityFrom:.5,opacityTo:0,stops:[0,100]},type:"gradient"},grid:{show:!1,padding:{bottom:0,left:0,right:0,top:0}},stroke:{width:2},theme:{mode:t.palette.mode},tooltip:{enabled:!1},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},yaxis:{show:!1}}},v=n=>{const{coinAmount:t,chartColor:a,chartSeries:c,currency:d,rate:m,usdValue:h,sx:p}=n,C=fe(a),P=x(h).format("$0,0.00"),W=xe[d],$=m<0?"error.main":"success.main",U=m<0?e(X,{}):e(he,{});return r(f,{sx:p,children:[e(y,{action:e(H,{children:e(u,{children:e(pe,{})})}),subheader:P,sx:{pb:0},title:r(i,{color:"text.secondary",sx:{mb:1},variant:"h6",children:[e(i,{color:"text.primary",component:"span",variant:"inherit",children:t})," ",d]})}),e(j,{height:140,options:C,series:c,type:"area"}),e(o,{sx:{pb:2,px:2},children:r(l,{alignItems:"center",direction:"row",spacing:2,children:[e(o,{component:"img",src:W,sx:{flex:"0 0 auto"}}),r("div",{children:[r(i,{variant:"subtitle2",children:[d,"/USD"]}),r(l,{alignItems:"center",direction:"row",sx:{color:$},spacing:.5,children:[e(u,{color:"inherit",fontSize:"small",children:U}),r(i,{color:"inherit",variant:"body2",children:[m,"%"]})]})]})]})})]})};v.propTypes={chartColor:s.string.isRequired,chartSeries:s.array.isRequired,coinAmount:s.number.isRequired,currency:s.string.isRequired,rate:s.number.isRequired,sx:s.object,usdValue:s.number.isRequired};const V=n=>{const{transactions:t}=n;return r(f,{children:[e(y,{title:"Transactions"}),e(Z,{disablePadding:!0,children:t.map(a=>{const c=a.operation==="add"?e(D,{}):e(O,{}),d=K(a.createdAt,"MM.dd.yyyy / HH:mm a"),m=(a.operation==="add"?"+":"-")+" "+a.amount+" "+a.coin,h=a.operation==="add"?"success.main":"error.main",p=x(a.balance).format("$0,0.00");return r(Q,{divider:!0,children:[e(Y,{children:e(ee,{sx:{backgroundColor:a.operation==="add"?"success.alpha4":"error.alpha4",color:a.operation==="add"?"success.main":"error.main"},children:e(u,{children:c})})}),r(re,{children:[e(i,{variant:"subtitle2",children:a.title}),e(i,{color:"text.secondary",variant:"body2",children:d})]}),r(te,{children:[e(i,{color:h,variant:"subtitle2",children:m}),e(i,{color:"text.secondary",variant:"body2",children:p})]})]},a.id)})}),e(E,{children:e(b,{color:"inherit",endIcon:e(u,{children:e(ae,{})}),size:"small",children:"See all"})})]})};V.propTypes={transactions:s.array.isRequired};const ye=n=>e(f,{...n,children:r(l,{alignItems:"center",spacing:2,sx:{p:3},children:[e(o,{sx:{width:100,"& img":{width:"100%"}},children:e("img",{src:"/assets/iconly/iconly-glass-tick.svg"})}),e(i,{align:"center",variant:"h6",children:"Upgrade your account to PRO."}),e(i,{align:"center",variant:"body2",children:"Unlock exclusive features like Test Networks, Test Swaps, and more."}),e(b,{variant:"contained",children:"Upgrade"})]})}),Ce=n=>{const t=w();return{chart:{background:"transparent"},colors:[t.palette.primary.main,t.palette.info.main,t.palette.warning.main],dataLabels:{enabled:!1},grid:{padding:{top:0,right:0,bottom:0,left:0}},labels:n,legend:{show:!1},plotOptions:{pie:{expandOnClick:!1},radialBar:{dataLabels:{show:!1},hollow:{size:"100%"}}},states:{active:{filter:{type:"none"}},hover:{filter:{type:"none"}}},stroke:{width:0},theme:{mode:t.palette.mode},tooltip:{fillSeriesColor:!1,y:{formatter(a){return x(a).format("$0,0.00")}}}}},N=n=>{const{chartSeries:t,labels:a}=n,c=Ce(a),d=t.reduce((h,p)=>h+=p,0),m=x(d).format("$0,0.00");return r(f,{children:[e(y,{title:"Current Balance",subheader:"Balance across all your accounts"}),e(z,{children:r(l,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,children:[e(o,{sx:{alignItems:"center",display:"flex",height:200,justifyContent:"center",width:200},children:e(j,{height:200,options:c,series:t,type:"donut"})}),r(l,{spacing:4,sx:{flexGrow:1},children:[r(l,{spacing:1,children:[e(i,{color:"text.secondary",variant:"overline",children:"Total balance"}),e(i,{variant:"h4",children:m})]}),r(l,{spacing:1,children:[e(i,{color:"text.secondary",variant:"overline",children:"Available currency"}),e(l,{component:"ul",spacing:1,sx:{listStyle:"none",m:0,p:0},children:t.map((h,p)=>{const C=x(h).format("$0,0.00");return r(l,{alignItems:"center",component:"li",direction:"row",spacing:2,children:[e(o,{sx:{backgroundColor:c.colors[p],borderRadius:"4px",height:16,width:16}}),e(i,{sx:{flexGrow:1},variant:"subtitle2",children:a[p]}),e(i,{color:"text.secondary",variant:"subtitle2",children:C})]},p)})})]})]})]})}),e(ie,{}),r(E,{children:[e(b,{color:"inherit",endIcon:e(u,{fontSize:"small",children:e(D,{})}),size:"small",children:"Add funds"}),e(b,{color:"inherit",endIcon:e(u,{fontSize:"small",children:e(O,{})}),size:"small",children:"Transfer funds"})]})]})};N.propTypes={chartSeries:s.array.isRequired,labels:s.array.isRequired};const q=new Date,ze=()=>{const n=ne(),t=w();return oe(),r(se,{children:[e(le,{title:"Dashboard: Crypto"}),e(o,{component:"main",sx:{flexGrow:1,py:8},children:e(ce,{maxWidth:n.stretch?!1:"xl",children:r(g,{container:!0,disableEqualOverflow:!0,spacing:{xs:3,lg:4},children:[e(g,{xs:12,children:r(l,{direction:"row",justifyContent:"space-between",spacing:4,children:[e("div",{children:e(i,{variant:"h4",children:"Crypto"})}),e(l,{alignItems:"center",direction:"row",spacing:2,children:e(b,{startIcon:e(u,{children:e(G,{})}),variant:"contained",children:"Add Wallet"})})]})}),e(g,{xs:12,md:7,children:r(l,{direction:"row",spacing:3,children:[e(v,{chartColor:t.palette.primary.main,chartSeries:[{name:"BTC",data:[56,61,64,60,63,61,60,68,66,64,77,60,65,51,72,80,74,67,77,83,94,95,89,100,94,104,101,105,104,103,107,120]}],coinAmount:.7568,currency:"BTC",rate:.56,sx:{flexBasis:"50%"},usdValue:16213.2}),e(v,{chartColor:t.palette.info.main,chartSeries:[{name:"ETH",data:[65,64,32,45,54,76,82,80,85,78,82,95,93,80,112,102,105,95,98,102,104,99,101,100,109,106,111,105,108,112,108,111]}],coinAmount:2.0435,currency:"ETH",rate:-.32,sx:{flexBasis:"50%"},usdValue:9626.8})]})}),e(g,{xs:12,md:5,children:e(L,{cards:[{id:"79f8212e4245e4c11952f2cf",brand:"Mastercard",cardNumber:"5823 4492 2385 1102",expiryDate:"05/28",holderName:"John Carter"},{id:"99f231b1c079b810ba66bef1",brand:"VISA",cardNumber:"3455 4562 7710 3507",expiryDate:"02/30",holderName:"John Carter"}]})}),e(g,{xs:12,md:8,children:r(l,{spacing:{xs:3,lg:4},children:[e(N,{chartSeries:[16213.2,9626.8,10076.81],labels:["Bitcoin","Ethereum","US Dollars"]}),e(V,{transactions:[{id:"3cc450e88286fdd4e220c719",amount:.1337,balance:4805,coin:"BTC",createdAt:k(I(A(q,43),5),3).getTime(),operation:"add",title:"Buy BTC"},{id:"6442793e96a90d4e584a19f7",amount:.2105,balance:2344,coin:"BTC",createdAt:k(I(A(q,32),54),6).getTime(),operation:"sub",title:"Sell BTC"}]})]})}),e(g,{xs:12,md:4,children:r(l,{spacing:{xs:3,lg:4},children:[e(M,{}),e(ye,{})]})})]})})})]})};export{ze as default};
