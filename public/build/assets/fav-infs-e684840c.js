import{w as y,r as s,x as k,aS as C,c as T,cf as E,j as c,F as L,d as t,S as j,l as m,aL as O,k as p,f as H,T as W}from"./app-29987d4d.js";/* empty css                   */import{I as D}from"./inf_card-841b11dd.js";import"./get-initials-d1c6cec7.js";import"./Heart-ffc25cbc.js";import"./mail-composer-e72aac5d.js";import"./Attachment01-ac12719d.js";import"./Image01-4a74049d.js";import"./Link01-38e53170.js";import"./FaceSmile-9e2dd2c2.js";import"./quill-editor-0ae24e2e.js";import"./isEqual-ce88e86c.js";import"./index-c5136b0f.js";const P=[{label:"Follower Count(High to Low)",value:"follower_order"},{label:"Engagement(High to Low)",value:"engagement_order"},{label:"Avg Likes(High to Low)",value:"avglikes_order"},{label:"Avg Comments(High to Low)",value:"avgcomments_order"}],z=d=>{let h={time:new Date().getTime(),value:"email",expire:3e6},v=JSON.stringify(h);localStorage.setItem("time_token",v);const{results:g,runTab:B}=d,[l,i]=s.useState([]),f=k(),x=C(),[S,w]=s.useState(0),[n,_]=s.useState("follower_order");T();const b=JSON.parse(localStorage.getItem("email")),[u,F]=s.useState(!0),I=e=>{_(e)};return s.useEffect(()=>{f(E({email:b}))},[f]),s.useEffect(()=>{if(g.favs){let e=g.favs;i(e),w(e.length)}},[g]),s.useEffect(()=>{if(n=="follower_order"){let a=l.sort((r,o)=>o.data[0].follower_count-r.data[0].follower_count);i(a)}else if(n=="engagement_order"){let a=l.sort((r,o)=>o.data[0].engagement_rate-r.data[0].engagement_rate);i(a)}else if(n=="avglikes_order"){let a=l.sort((r,o)=>o.data[0].avg_like-r.data[0].avg_like);i(a)}else if(n=="avgcomments_order"){let a=l.sort((r,o)=>o.data[0].avg_comment-r.data[0].avg_comment);i(a)}F(!u)},[n]),c(L,{children:[t(j,{title:"Dashboard: Favorite Influencers"}),t(m,{component:"main",sx:{flexGrow:1},children:c(O,{maxWidth:x.stretch?!1:"xl",children:[t(p,{variant:"h4",sx:{mt:8,mb:4,fontSize:"32px"},children:"Favorite Influencers"}),c(H,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,children:[t(m,{component:"form",sx:{flexGrow:1},children:c(p,{color:"#00359E",sx:{mt:1,fontSize:28,fontWeight:700},variant:"body2",children:[S," Influencers found"]})}),c(m,{sx:{display:"flex"},children:[t("span",{style:{fontWeight:500,whiteSpace:"normal",marginRight:15,display:"flex",alignItems:"center",mr:5},children:"Sort by"}),t(W,{label:"Sort By",name:"sort",onChange:e=>I(e.target.value),select:!0,SelectProps:{native:!0},value:n,children:P.map(e=>t("option",{value:e.value,children:e.label},e.value))})]})]}),t(m,{sx:{p:.5},style:{boxShadow:"none"},children:l.map(e=>t(D,{influencer:e.data[0],currentTab:e.tab},e.id))},u)]})})]})},A=d=>({results:d.favs}),$=y(A)(z);export{$ as default};