import{v as F,r as s,w as I,aT as y,c as k,c6 as C,j as c,F as T,d as t,S as E,l as d,aM as L,k as p,f as H,T as O}from"./app-bbc9f20b.js";/* empty css                   */import{I as W}from"./inf_card-c1a2db4d.js";import"./get-initials-d1c6cec7.js";import"./Heart-2ea87bc1.js";import"./mail-composer-6e736cf2.js";import"./Attachment01-98debbf9.js";import"./Image01-b6ee6b0d.js";import"./Link01-00afe608.js";import"./FaceSmile-fe089338.js";import"./quill-editor-f6ab4631.js";import"./isEqual-6082a5ce.js";const j=[{label:"Follower Count(High to Low)",value:"follower_order"},{label:"Engagement(High to Low)",value:"engagement_order"},{label:"Avg Likes(High to Low)",value:"avglikes_order"},{label:"Avg Comments(High to Low)",value:"avgcomments_order"}],P=m=>{const{results:g,runTab:A}=m,[l,i]=s.useState([]),f=I(),h=y(),[v,x]=s.useState(0),[n,S]=s.useState("follower_order");k();const w=JSON.parse(localStorage.getItem("email")),[u,_]=s.useState(!0),b=e=>{S(e)};return s.useEffect(()=>{f(C({email:w}))},[f]),s.useEffect(()=>{if(g.favs){let e=g.favs;i(e),x(e.length)}},[g]),s.useEffect(()=>{if(n=="follower_order"){let a=l.sort((r,o)=>o.data[0].follower_count-r.data[0].follower_count);i(a)}else if(n=="engagement_order"){let a=l.sort((r,o)=>o.data[0].engagement_rate-r.data[0].engagement_rate);i(a)}else if(n=="avglikes_order"){let a=l.sort((r,o)=>o.data[0].avg_like-r.data[0].avg_like);i(a)}else if(n=="avgcomments_order"){let a=l.sort((r,o)=>o.data[0].avg_comment-r.data[0].avg_comment);i(a)}_(!u)},[n]),c(T,{children:[t(E,{title:"Dashboard: Favorite Influencers"}),t(d,{component:"main",sx:{flexGrow:1},children:c(L,{maxWidth:h.stretch?!1:"xl",children:[t(p,{variant:"h4",sx:{mt:10,mb:7,fontSize:"32px"},children:"Favorite Influencers"}),c(H,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,children:[t(d,{component:"form",sx:{flexGrow:1},children:c(p,{color:"#00359E",sx:{mt:1,fontSize:28,fontWeight:700},variant:"body2",children:[v," Influencers found"]})}),c(d,{sx:{display:"flex"},children:[t("span",{style:{fontWeight:500,whiteSpace:"normal",marginRight:15,display:"flex",alignItems:"center",mr:5},children:"Sort by"}),t(O,{label:"Sort By",name:"sort",onChange:e=>b(e.target.value),select:!0,SelectProps:{native:!0},value:n,children:j.map(e=>t("option",{value:e.value,children:e.label},e.value))})]})]}),t(d,{sx:{p:.5},style:{boxShadow:"none"},children:l.map(e=>t(W,{influencer:e.data[0],currentTab:e.tab},e.id))},u)]})})]})},z=m=>({results:m.favs}),X=F(z)(P);export{X as default};
