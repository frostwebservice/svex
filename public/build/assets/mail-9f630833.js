import{j as i,K as q,d as e,P as u,r as h,cg as xe,ch as Ce,aq as ke,l as g,k as f,at as x,q as v,bZ as ne,f as y,bx as _,D as R,n as S,B as P,db as O,G as L,am as ie,F as B,T as we,bE as F,ba as E,d0 as z,cJ as re,L as Q,aD as A,c_ as H,p as T,m as G,R as Ie,bk as Se,bl as Me,bm as Ae,bh as Te,a_ as je,br as We,b9 as Le,dc as Ee,a as Pe,aZ as ze,cC as J,c as qe,S as Re}from"./app-882aa423.js";import{u as U}from"./use-search-params-8477c817.js";import{m as Be,M as De}from"./mail-composer-8121759b.js";import{A as j}from"./Attachment01-d35b3ba5.js";import{I as se}from"./Image01-d8715e44.js";import{L as oe}from"./Link01-6798b269.js";import{F as le}from"./FaceSmile-f0113b42.js";import{Q as Oe}from"./quill-editor-59d31a35.js";import{d as D}from"./deep-copy-ee95be26.js";import{R as Fe}from"./react-markdown-9d79e457.js";import{g as V}from"./get-initials-d1c6cec7.js";import{P as ce}from"./Plus-31c9aa95.js";import{S as $}from"./Star01-d09b3681.js";import{A as He}from"./AlertCircle-95513a46.js";import{S as Ge}from"./Send01-216a8242.js";import{T as Ue}from"./Trash02-e9f637a3.js";import{H as Ve}from"./Heart-830c24bc.js";import{L as X}from"./ListSubheader-4aca5df5.js";import"./isEqual-ac346df4.js";var $e=function(t){return i("svg",q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"m15 18-6-6 6-6"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m15 18-6-6 6-6"})]}))};const Ze=Be(()=>({noBorder:{border:"none"}})),Ne=`<pre>Dear [Influencer's Name],

I hope this email finds you well.I have been following your work as an influential figure in [your niche], and I am truly impressed by the value you provide to your audience.Your expertise and unique perspective have inspired me.

I am reaching out today because I believe there is a great opportunity for us to collaborate and create something meaningful together.As someone who shares a passion for [your niche], I believe our combined efforts can have a significant impact on our respective audiences.
I have an idea for a collaboration that I believe will be mutually beneficial.Here's a brief overview:
[Provide a concise description of your collaboration idea.Highlight the value it will bring to both your audience and the influencer's audience. Be specific about the type of collaboration, such as a joint blog post, podcast interview, video series, or any other creative concept.]
I truly admire your work and believe that your insights and expertise would greatly enhance the collaboration.Your unique perspective would undoubtedly resonate with our shared audience.

I understand that you are likely approached by numerous individuals, so I want to assure you that I am committed to making this collaboration as seamless and valuable as possible.I am open to discussing any ideas or modifications you may have to ensure it aligns with your goals and values.
If you are interested in exploring this collaboration further, I would be delighted to schedule a call or have a more detailed discussion via email.Please let me know your availability, and I will be happy to accommodate your schedule.
    Thank you for considering this opportunity.I look forward to the possibility of working together and creating something exceptional that will benefit both our audiences.

Warm regards,
    [Your Name][Your Email Address][Your Website or Social Media Handles][Contact Number(Optional)]</pre>`,de=a=>{const{maximize:t=!1,message:n="",onClose:r,onMaximize:c,onMessageChange:s,onMinimize:d,onSubjectChange:l,onToChange:o,open:p=!1,subject:m="",to:k=""}=a;h.useState(!1),Ze();const M=h.useCallback(b=>{l==null||l(b.target.value)},[l]),w=h.useCallback(b=>{o==null||o(b.target.value)},[o]);return p?i(xe,{children:[e(Ce,{open:t}),i(ke,{sx:{bottom:b=>`calc((${b.spacing(20)})/3)`,display:"flex",flexDirection:"column",height:b=>`calc(100% - ${b.spacing(20)})`,width:b=>`calc(100% - ${b.spacing(40)})`,outline:"none",position:"fixed",right:b=>`calc((${b.spacing(40)}) / 2)`,zIndex:1400,overflow:"hidden"},elevation:12,children:[i(g,{sx:{alignItems:"center",display:"flex",px:2,py:1},children:[e(f,{variant:"h6",children:"Default Template"}),e(g,{sx:{flexGrow:1}}),e(x,{onClick:r,children:e(v,{children:e(ne,{})})})]}),i(y,{alignItems:"center",direction:"row",spacing:1,children:[e(f,{sx:{mx:2},children:"To"}),e(_,{disableUnderline:!0,fullWidth:!0,onChange:w,sx:{pt:.5,borderBottom:1,borderColor:"divider"},value:k})]}),i(y,{alignItems:"center",direction:"row",spacing:1,children:[e(f,{sx:{mx:2},children:"Subject"}),e(_,{disableUnderline:!0,onChange:M,placeholder:"Input Subject",sx:{pt:.5,borderBottom:1,borderColor:"divider",width:"-webkit-fill-available",fontSize:18},value:" Instagram Influencer for a shopping brand - The Rock"})]}),e(Oe,{onChange:s,placeholder:"Type your text",sx:{border:"none",flexGrow:1},value:Ne}),e(R,{}),i(y,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{p:2},children:[i(y,{alignItems:"center",direction:"row",spacing:1,children:[e(S,{title:"Attach image",children:e(x,{size:"small",children:e(v,{children:e(se,{})})})}),e(S,{title:"Attach file",children:e(x,{size:"small",children:e(v,{children:e(j,{})})})}),e(x,{children:e(v,{children:e(oe,{})})}),e(x,{children:e(v,{children:e(le,{})})})]}),e("div",{children:e(P,{variant:"contained",children:"Save Template"})})]})]})]}):null};de.propTypes={maximize:u.bool,message:u.string,onClose:u.func,onMaximize:u.func,onMessageChange:u.func,onMinimize:u.func,onSubjectChange:u.func,onToChange:u.func,open:u.bool,subject:u.string,to:u.string};const W=new Date,ee=[{id:"all",name:"All Mail",type:"system"},{id:"inbox",name:"Inbox",totalCount:0,type:"system",unreadCount:1},{id:"sent",name:"Sent",totalCount:0,type:"system",unreadCount:0},{id:"favorites",name:"Favorites",totalCount:0,type:"system",unreadCount:0},{id:"template1",name:"Template A",totalCount:2,type:"template",unreadCount:1},{id:"template2",name:"Template B",totalCount:1,type:"template",unreadCount:0},{id:"work",color:"#43A048",name:"Work",totalCount:1,type:"custom",unreadCount:0},{id:"business",color:"#1E88E5",name:"Business",totalCount:2,type:"custom",unreadCount:1},{id:"personal",color:"#FB8A00",name:"Personal",totalCount:1,type:"custom",unreadCount:0}],te=[{id:"5e86bcc3e1b53b6365d71638",attachments:[{id:"945d887e97f480359d3f591f",name:"working-sketch.png",size:"128.5Kb",type:"image",url:"/assets/covers/abstract-1-4x4-small.png"},{id:"09223c93e60f815fdce487af",name:"summer-customers.pdf",size:"782.3Kb",type:"file",url:"#"},{id:"165adb24c7b6a2e9aebba766",name:"desktop-coffee.png",size:"568.2Kb",type:"image",url:"/assets/covers/minimal-1-4x4-small.png"}],createdAt:W.getTime(),folder:"inbox",from:{avatar:"/assets/avatars/avatar-marcus-finn.png",email:"marcus.finn@devias.io",name:"Marcus Finn"},isImportant:!0,isStarred:!1,isUnread:!0,labelIds:["work","business"],message:`
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Marcus Finn
    `,subject:"Website redesign. Interested in collaboration",to:[{avatar:"/assets/avatars/avatar-anika-visser.png",email:"anika.visser@devias.io",name:"Anika Visser"}]},{id:"5e86bcbd8406cd3055f2b6c8",createdAt:W.getTime(),folder:"spam",from:{avatar:"/assets/avatars/avatar-miron-vitold.png",email:"miron.vitold@devias.io",name:"Miron Vitold"},isImportant:!1,isStarred:!0,isUnread:!1,labelIds:[],message:`
Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?
    `,subject:"Amazing work",to:[{avatar:"/assets/avatars/avatar-anika-visser.png",email:"anika.visser@devias.io",name:"Anika Visser"}]},{id:"5e86bcb9fee1ec12453fa13b",createdAt:W.getTime(),folder:"inbox",from:{avatar:"/assets/avatars/avatar-penjani-inyene.png",email:"penjani.inyene@devias.io",name:"Penjani Inyene"},isImportant:!1,isStarred:!1,isUnread:!1,labelIds:["business"],message:`
Dear Anika, Your flight is coming up soon. Please don’t forget to check in for your scheduled flight.
    `,subject:"Flight reminder",to:[{avatar:"/assets/avatars/avatar-anika-visser.png",email:"anika.visser@devias.io",name:"Anika Visser"}]},{id:"5e86bcb5575181a5e527e24f",createdAt:W.getTime(),folder:"trash",from:{avatar:"/assets/avatars/avatar-carson-darrin.png",email:"carson.darrin@devias.io",name:"Carson Darrin"},isImportant:!1,isStarred:!1,isUnread:!0,labelIds:["personal"],message:`
My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis
    `,subject:"Possible candidates for the position",to:[{avatar:"/assets/avatars/avatar-anika-visser.png",email:"anika.visser@devias.io",name:"Anika Visser"}]},{id:"5e86bcb9fee1ec12453fa13p",createdAt:W.getTime(),folder:"template1",from:{avatar:"/assets/avatars/avatar-penjani-inyene.png",email:"penjani.inyene@devias.io",name:"Penjani Inyene"},isImportant:!1,isStarred:!1,isUnread:!1,labelIds:["business"],message:`
Dear Anika, Your flight is coming up soon. Please don’t forget to check in for your scheduled flight.
    `,subject:"Flight reminder",to:[{avatar:"/assets/avatars/avatar-anika-visser.png",email:"anika.visser@devias.io",name:"Anika Visser"}]}];class Ye{getLabels(t){return Promise.resolve(D(ee))}getEmails(t){const{label:n}=t;return new Promise((r,c)=>{try{const s=D(te);let d=[];const l=ee.reduce((o,p)=>(p.type==="custom"&&o.push(p.id),o),[]);if(n&&l.includes(n))d=s.filter(o=>o.labelIds.includes(n));else switch(n){case void 0:case"inbox":d=s.filter(o=>o.folder==="inbox");break;case"template1":d=s.filter(o=>o.folder==="template1");break;case"all":d=[...s];break;case"sent":case"trash":d=s.filter(o=>o.folder===n);break;case"starred":d=s.filter(o=>o.isStarred);break;case"important":d=s.filter(o=>o.isImportant);break;default:}r(d)}catch(s){console.error("[Mail Api]: ",s),c(new Error("Internal server error"))}})}getEmail(t){const{emailId:n}=t;return new Promise((r,c)=>{try{const d=D(te).find(l=>l.id===n);if(!d){c(new Error("Email not found"));return}r(d)}catch(s){console.error("[Mail Api]: ",s),c(new Error("Internal server error"))}})}}const Z=new Ye,Ke=()=>async a=>{const t=await Z.getLabels();a(O.actions.getLabels(t))},_e=a=>async t=>{const n=await Z.getEmails(a);t(O.actions.getEmails(n))},Qe=a=>async t=>{const n=await Z.getEmail(a);t(O.actions.getEmail(n))},N={getEmail:Qe,getEmails:_e,getLabels:Ke},ue=a=>{const{attachments:t=[]}=a,n=t.length;return i(y,{spacing:2,children:[i(f,{variant:"h6",children:[n," Attachments"]}),e(y,{alignItems:"flex-start",direction:"row",spacing:2,flexWrap:"wrap",children:t.map(r=>i(y,{alignItems:"center",direction:"row",spacing:1,sx:{alignItems:"center",cursor:"pointer",display:"flex"},children:[r.type==="image"&&e(L,{variant:"rounded",sx:{backgroundColor:"primary.light",borderRadius:"50%"},children:e(j,{})}),r.type==="file"&&e(L,{variant:"rounded",sx:{backgroundColor:"primary.light",borderRadius:"50%"},children:e(j,{})}),i("div",{children:[e(f,{noWrap:!0,variant:"subtitle2",children:r.name}),e(f,{color:"text.secondary",variant:"body2",children:r.size})]})]},r.id))}),e("div",{children:e(P,{color:"primary",size:"small",children:"Download all"})})]})};ue.propTypes={attachments:u.array};const Je=ie("div")(({theme:a})=>({color:a.palette.text.primary,fontFamily:a.typography.body1.fontFamily,"& > p":{fontSize:14,lineHeight:a.typography.body1.lineHeight,marginBottom:a.spacing(2)}})),he=a=>{const{message:t=""}=a;return e(Je,{children:e(Fe,{children:t})})};he.propTypes={message:u.string};const Xe=a=>{const t=h.useRef(null),[n,r]=h.useState(""),c=h.useCallback(d=>{r(d.target.value)},[]),s=h.useCallback(()=>{var d;(d=t.current)==null||d.click()},[]);return i(B,{children:[e(g,{sx:{p:3},...a,children:e(y,{alignItems:"flex-start",direction:"row",spacing:2,children:i(g,{sx:{flexGrow:1},children:[e(we,{fullWidth:!0,maxRows:7,minRows:3,multiline:!0,onChange:c,placeholder:"Type your replay",value:n,variant:"outlined"}),i(y,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{mt:2},children:[i(y,{alignItems:"center",direction:"row",spacing:1,children:[e(S,{title:"Attach image",children:e(x,{onClick:s,size:"small",children:e(v,{children:e(se,{})})})}),e(S,{title:"Attach file",children:e(x,{onClick:s,size:"small",children:e(v,{children:e(j,{})})})}),e(x,{children:e(v,{children:e(oe,{})})}),e(x,{children:e(v,{children:e(le,{})})})]}),e("div",{children:e(P,{variant:"contained",children:"Send Email"})})]})]})})}),e("input",{hidden:!0,ref:t,type:"file"})]})},me=a=>{const{backHref:t,createdAt:n,from:r,to:c,onSidebarToggle:s,currentLabelId:d}=a,l=F(m=>m.breakpoints.up("md")),o=E(n,"MMMM d yyyy, h:mm:ss a"),p=z(m=>m.mail.labels);return i("div",{children:[e(y,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:2},children:i("div",{children:[e(x,{onClick:s,children:e(v,{children:e(re,{})})}),e(f,{sx:{display:"inline",fontSize:18,fontWeight:700},children:d==null?"Inbox":p.map(m=>{if(m.id==d)return m.name})})]})}),e(R,{}),i(y,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:3},children:[i(y,{alignItems:"center",direction:"row",spacing:2,children:[e(L,{src:r.avatar||void 0,sx:{height:48,width:48},children:V(r.name)}),i("div",{children:[e(f,{component:"span",variant:"subtitle2",children:r.name})," ",e(Q,{color:"text.secondary",component:"span",variant:"body2",children:r.email}),i(f,{color:"text.secondary",variant:"subtitle2",children:["To:"," ",c.map(m=>e(Q,{color:"inherit",children:m.email},m.email))]})]})]}),e(y,{alignItems:"center",direction:"row",spacing:1,children:l&&i(B,{children:[e(A,{label:"Business",color:"info",style:{backgroundColor:"lightblue",color:"#0E7090"}}),e(A,{label:"Work",color:"info",style:{backgroundColor:"lightblue",color:"#0E7090"}}),o&&e(f,{color:"text.secondary",noWrap:!0,variant:"caption",children:o}),e(S,{title:"Reply",children:e(x,{children:e("img",{src:"/assets/icons/left.png",width:15,height:15})})}),e(S,{title:"Reply all",children:e(x,{children:e("img",{src:"/assets/icons/dleft.png",width:15,height:15})})}),e(S,{title:"Delete",children:e(x,{children:e("img",{src:"/assets/icons/trash.png",width:15,height:15})})})]})})]})]})};me.propTypes={backHref:u.string.isRequired,createdAt:u.number.isRequired,from:u.object.isRequired,to:u.array.isRequired};const et=a=>{const t=H(),n=z(r=>r.mail.emails.byId[a]);return h.useEffect(()=>{t(N.getEmail({emailId:a}))},[a]),n},pe=a=>{const{emailId:t,currentLabelId:n,onSidebarToggle:r}=a,c=et(t);if(!c)return null;const s=n&&n!=="inbox"?T.dashboard.mail+`?label=${n}`:T.dashboard.mail,d=!!c.message,l=c.attachments&&c.attachments.length>0;return i(y,{sx:{flexGrow:1,height:"100%",overflowY:"auto"},children:[e(me,{backHref:s,createdAt:c.createdAt,currentLabelId:n,from:c.from,onSidebarToggle:r,to:c.to}),i(g,{sx:{flexGrow:1,px:3,py:6},children:[e(f,{variant:"h3",children:c.subject}),i(y,{sx:{mt:2},spacing:6,children:[d&&e(he,{message:c.message}),l&&e(ue,{attachments:c.attachments})]})]}),e(Xe,{})]})};pe.propTypes={emailId:u.string.isRequired,currentLabelId:u.string};const tt=ie("div",{shouldForwardProp:a=>a!=="open"})(({theme:a,open:t})=>({flexGrow:1,overflow:"hidden",[a.breakpoints.up("md")]:{marginLeft:-280},transition:a.transitions.create("margin",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),...t&&{[a.breakpoints.up("md")]:{marginLeft:0},transition:a.transitions.create("margin",{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen})}}));var at=function(t){return e("svg",q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:e("path",{fill:"#fff",fillOpacity:.01,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C7.2798 3 8.1198 3 9.8 3h4.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C19 5.2798 19 6.1198 19 7.8V21l-7-4-7 4V7.8Z"})}))};const ge=a=>{const{email:t,onDeselect:n,onSelect:r,onCompose:c,selected:s,href:d,...l}=a,p=U().get("label")||void 0,m=h.useCallback(I=>{I.target.checked?r==null||r():n==null||n()},[r,n]),k=E(t.createdAt,"MMM dd"),M=E(t.createdAt,"MMM dd, hh:mm aa"),w=!!(t.attachments&&t.attachments.length>0),b=!!(t.attachments&&t.attachments.length>1);return i(g,{sx:{alignItems:"center",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"divider",display:"flex",p:2,...!t.isUnread&&{position:"relative","&:before":{backgroundColor:"primary.main",content:'" "',height:"100%",left:0,position:"absolute",top:0,width:4},"& $name, & $subject":{fontWeight:600}},...s&&{backgroundColor:"primary.lightest"},...!s&&{"&:hover":{backgroundColor:"action.hover"}}},...l,children:[i(g,{sx:{alignItems:"center",display:{md:"flex",xs:"none"},mr:1},children:[e(G,{checked:s,onChange:m}),e(S,{title:"Starred",children:e(x,{children:e(v,{sx:{...t.isStarred&&{color:"warning.main","& path":{fill:I=>I.palette.warning.main,fillOpacity:1}}},children:e($,{})})})})]}),i(g,{component:Ie,href:d,sx:{alignItems:"center",cursor:"pointer",display:"flex",flexGrow:1,flexWrap:{xs:"wrap",md:"wrap"},minWidth:1,textDecoration:"none"},children:[i(g,{sx:{alignItems:"center",display:"flex"},children:[e(L,{src:t.from.avatar||void 0,children:V(t.from.name)}),e(f,{color:"text.primary",sx:{width:120,ml:2,...!t.isUnread&&{fontWeight:600}},noWrap:!0,variant:"body2",children:t.from.name})]}),i(g,{sx:{ml:{xs:0,md:2},my:{xs:2,md:0},overflow:"hidden",width:"fit-content"},children:[i(g,{sx:{alignItems:"center",display:"flex",maxWidth:800,width:"100%"},children:[e(f,{color:"text.primary",sx:{fontWeight:600,minWidth:100,maxWidth:400,mr:1},noWrap:!0,variant:"body2",children:t.subject}),i(f,{color:"text.secondary",noWrap:!0,variant:"body2",children:["—",t.message]})]}),w&&i(g,{sx:{mt:1,maxWidth:800},children:[e(A,{icon:e(v,{children:e(j,{})}),label:t.attachments[0].name,size:"small"}),b&&e(A,{label:"+1",size:"small",sx:{ml:1}})]})]}),e(g,{children:e(f,{color:"text.secondary",variant:"caption",alignItems:"center",sx:{display:"block",textAlign:{xs:"left",md:"right"},whiteSpace:"nowrap",width:"100%"},children:p&&p.search("template")>=0?"Last used-"+M:k})})]})]})};ge.propTypes={email:u.object.isRequired,href:u.string.isRequired,onDeselect:u.func,onSelect:u.func,selected:u.bool.isRequired};const fe=a=>{const{email:t,onDeselect:n,onSelect:r,onCompose:c,selected:s,href:d,...l}=a,p=U().get("label")||void 0,m=h.useCallback(I=>{I.target.checked?r==null||r():n==null||n()},[r,n]),k=E(t.createdAt,"MMM dd"),M=E(t.createdAt,"MMM dd, hh:mm aa"),w=!!(t.attachments&&t.attachments.length>0),b=!!(t.attachments&&t.attachments.length>1);return i(g,{sx:{alignItems:"center",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"divider",display:"flex",p:2,...!t.isUnread&&{position:"relative","&:before":{backgroundColor:"primary.main",content:'" "',height:"100%",left:0,position:"absolute",top:0,width:4},"& $name, & $subject":{fontWeight:600}},...s&&{backgroundColor:"primary.lightest"},...!s&&{"&:hover":{backgroundColor:"action.hover"}}},...l,children:[i(g,{sx:{alignItems:"center",display:{md:"flex",xs:"none"},mr:1},children:[e(G,{checked:s,onChange:m}),e(S,{title:"Starred",children:e(x,{children:e(v,{sx:{...t.isStarred&&{color:"warning.main","& path":{fill:I=>I.palette.warning.main,fillOpacity:1}}},children:e($,{})})})})]}),i(g,{sx:{alignItems:"center",cursor:"pointer",display:"flex",flexGrow:1,flexWrap:{xs:"wrap",md:"wrap"},minWidth:1,textDecoration:"none"},children:[i(g,{sx:{alignItems:"center",display:"flex"},children:[e(L,{src:t.from.avatar||void 0,children:V(t.from.name)}),e(f,{color:"text.primary",sx:{width:120,ml:2,...!t.isUnread&&{fontWeight:600}},noWrap:!0,variant:"body2",children:t.from.name})]}),i(g,{sx:{ml:{xs:0,md:2},my:{xs:2,md:0},overflow:"hidden",width:"fit-content"},children:[i(g,{sx:{alignItems:"center",display:"flex",maxWidth:800,width:"100%"},children:[e(f,{color:"text.primary",sx:{fontWeight:600,minWidth:100,maxWidth:400,mr:1},noWrap:!0,variant:"body2",children:t.subject}),i(f,{color:"text.secondary",noWrap:!0,variant:"body2",children:["—",t.message]})]}),w&&i(g,{sx:{mt:1,maxWidth:800},children:[e(A,{icon:e(v,{children:e(j,{})}),label:t.attachments[0].name,size:"small"}),b&&e(A,{label:"+1",size:"small",sx:{ml:1}})]})]}),e(g,{children:e(f,{color:"text.secondary",variant:"caption",alignItems:"center",sx:{display:"block",textAlign:{xs:"left",md:"right"},whiteSpace:"nowrap",width:"100%"},children:p&&p.search("template")>=0?"Last used-"+M:k})})]})]})};fe.propTypes={email:u.object.isRequired,href:u.string.isRequired,onDeselect:u.func,onSelect:u.func,selected:u.bool.isRequired};const nt=a=>{const t=H(),{emails:n}=z(r=>r.mail);return h.useEffect(()=>{t(N.getEmails({label:a}))},[a]),n},it=a=>{const[t,n]=h.useState([]);h.useEffect(()=>{n([])},[a]);const r=h.useCallback(()=>{n([...a])},[a]),c=h.useCallback(l=>{n(o=>o.includes(l)?o:[...o,l])},[]),s=h.useCallback(()=>{n([])},[]),d=h.useCallback(l=>{n(o=>o.filter(p=>p!==l))},[]);return{handleDeselectAll:s,handleDeselectOne:d,handleSelectAll:r,handleSelectOne:c,selected:t}},be=a=>{const{currentLabelId:t,onSidebarToggle:n,onCompose:r,...c}=a,s=nt(t),d=z(C=>C.mail.labels),{handleDeselectAll:l,handleDeselectOne:o,handleSelectAll:p,handleSelectOne:m,selected:k}=it(s.allIds),M=h.useCallback(C=>{C.target.checked?p():l()},[p,l]),w=k.length===s.allIds.length,b=k.length>0&&k.length<s.allIds.length,I=s.allIds.length>0;return i(y,{sx:{height:"100%",overflow:"hidden"},...c,children:[e(y,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:2},children:i("div",{children:[e(x,{onClick:n,children:e(v,{children:e(re,{})})}),e(f,{sx:{display:"inline",fontSize:18,fontWeight:700},children:t==null?"Inbox":d.map(C=>{if(C.id==t)return C.name})})]})}),e(R,{}),I?i(B,{children:[i(g,{sx:{alignItems:"center",borderBottomColor:"divider",borderBottomStyle:"solid",borderBottomWidth:1,display:{xs:"none",md:"flex"},p:2},children:[e(G,{checked:w,indeterminate:b,onChange:M}),e(f,{variant:"subtitle2",children:"Select all"}),e(g,{sx:{flexGrow:1}}),i(y,{alignItems:"center",direction:"row",spacing:1,children:[t&&t.search("template")>=0?e(P,{onClick:r,startIcon:e(v,{children:e(ce,{})}),variant:"contained",children:"New Template"}):"",e(Se,{fullWidth:!0,placeholder:"Search email",size:"small",startAdornment:e(Me,{position:"start",children:e(v,{children:e(Ae,{})})}),sx:{width:200}}),i(f,{color:"text.secondary",sx:{display:{xs:"none",md:"block"},mx:2,whiteSpace:"nowrap"},variant:"body2",children:["1 - ",s.allIds.length," of ",s.allIds.length]}),e(S,{title:"Next page",children:e(x,{children:e(v,{children:e($e,{})})})}),e(S,{title:"Previous page",children:e(x,{children:e(v,{children:e(Te,{})})})})]})]}),e("div",{children:s.allIds.map(C=>{const Y=k.includes(C),K=t&&t!=="inbox"?T.dashboard.mail+`?emailId=${C}&label=${t}`:T.dashboard.mail+`?emailId=${C}`;return t&&t.search("template")>=0?e(fe,{email:s.byId[C],href:K,onCompose:r,onClick:r,onDeselect:()=>o(C),onSelect:()=>m(C),selected:Y},C):e(ge,{email:s.byId[C],href:K,onCompose:r,onDeselect:()=>o(C),onSelect:()=>m(C),selected:Y},C)})})]}):i(y,{alignItems:"center",justifyContent:"center",spacing:2,sx:{flexGrow:1,p:2},children:[e(g,{component:"img",src:"/assets/errors/error-404.png",sx:{height:"auto",maxWidth:120}}),e(f,{color:"text.secondary",variant:"h5",children:"There are no emails"})]})]})};be.propTypes={currentLabelId:u.string,onSidebarToggle:u.func};var rt=function(t){return i("svg",q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M14.7301 4H9.2699c-.9692 0-1.4538 0-1.8816.1476a2.7 2.7 0 0 0-1.0088.6235c-.3234.3166-.54.75-.9735 1.617l-1.95 3.8998c-.17.3401-.255.5102-.315.6885a2.6993 2.6993 0 0 0-.115.4866C3 11.6493 3 11.8395 3 12.2198V14.08c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943h9.36c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C21 16.3482 21 15.5921 21 14.08v-1.8602c0-.3803 0-.5705-.0261-.7568a2.6918 2.6918 0 0 0-.1149-.4866c-.0599-.1783-.145-.3484-.3151-.6885L18.594 6.388c-.4334-.8668-.6501-1.3003-.9735-1.617a2.7 2.7 0 0 0-1.0088-.6234C16.1839 4 15.6993 4 14.7301 4Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3.45 11.2h3.0438a1.628 1.628 0 0 1 1.4562.9c.2758.5516.8396.9 1.4562.9h5.1876a1.628 1.628 0 0 0 1.4562-.9 1.628 1.628 0 0 1 1.4562-.9H20.55M9.27 4h5.46c.9692 0 1.4538 0 1.8816.1476a2.7 2.7 0 0 1 1.0088.6235c.3234.3166.5401.75.9735 1.617l1.9499 3.8998c.1701.3401.2552.5102.3151.6885.0533.1583.0918.3212.1149.4866.0261.1863.0261.3765.0261.7568V14.08c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 16.3482 3 15.5921 3 14.08v-1.8602c0-.3803 0-.5705.026-.7568a2.6993 2.6993 0 0 1 .115-.4866c.06-.1783.145-.3484.315-.6885l1.95-3.8999c.4334-.8668.6501-1.3003.9735-1.617a2.7 2.7 0 0 1 1.0088-.6234C7.8161 4 8.3007 4 9.2699 4Z"})]}))},st=function(t){return i("svg",q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M2.9373 11.9373c-.346-.3459-.5189-.5189-.6426-.7207a2.0013 2.0013 0 0 1-.2394-.5781C2 10.4083 2 10.1637 2 9.6745V5.2c0-1.1201 0-1.6802.218-2.108a2 2 0 0 1 .874-.874C3.5198 2 4.08 2 5.2 2h4.4745c.4892 0 .7338 0 .964.0553.204.049.3991.1298.5781.2394.2018.1237.3748.2966.7207.6426l7.6686 7.6686c1.188 1.188 1.7821 1.7821 2.0046 2.467a2.9996 2.9996 0 0 1 0 1.8541c-.2225.685-.8166 1.2791-2.0046 2.4671l-2.2118 2.2118c-1.188 1.188-1.7821 1.7821-2.4671 2.0046a2.9996 2.9996 0 0 1-1.8541 0c-.6849-.2225-1.279-.8166-2.467-2.0046l-7.6686-7.6686Z"}),e("path",{fill:"#fff",fillOpacity:.01,d:"M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 8h.01M2 5.2v4.4745c0 .4892 0 .7338.0553.964.049.204.1298.3991.2394.5781.1237.2018.2966.3748.6426.7207l7.6686 7.6686c1.188 1.188 1.7821 1.7821 2.467 2.0046a2.9996 2.9996 0 0 0 1.8541 0c.685-.2225 1.2791-.8166 2.4671-2.0046l2.2118-2.2118c1.188-1.188 1.7821-1.7821 2.0046-2.4671a2.9996 2.9996 0 0 0 0-1.8541c-.2225-.6849-.8166-1.279-2.0046-2.467l-7.6686-7.6686c-.3459-.346-.5189-.5189-.7207-.6426a2.0013 2.0013 0 0 0-.5781-.2394C10.4083 2 10.1637 2 9.6745 2H5.2c-1.1201 0-1.6802 0-2.108.218a2 2 0 0 0-.874.874C2 3.5198 2 4.08 2 5.2ZM8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"})]}))};const ot={all:e(Le,{}),inbox:e(rt,{}),sent:e(Ge,{}),trash:e(Ue,{}),drafts:e(Ee,{}),spam:e(He,{}),starred:e($,{}),important:e(at,{}),favorites:e(Ve,{})},lt=a=>a.type==="system"?ot[a.id]:e(st,{}),ct=a=>a.type==="custom"&&a.color||"inherit",ve=a=>{const{active:t,label:n,...r}=a,c=lt(n),s=ct(n),d=!!(n.unreadCount&&n.unreadCount>0);return e(je,{disableGutters:!0,disablePadding:!0,sx:{"& + &":{mt:1}},...r,children:i(We,{sx:{borderRadius:1,color:"text.secondary",flexGrow:1,fontSize:l=>l.typography.button.fontSize,fontWeight:l=>l.typography.button.fontWeight,justifyContent:"flex-start",lineHeight:l=>l.typography.button.lineHeight,py:1,px:2,textAlign:"left","&:hover":{backgroundColor:"action.hover"},...t&&{backgroundColor:"action.selected",color:"text.primary"}},children:[e(v,{sx:{color:s,mr:1},children:c}),e(g,{sx:{flexGrow:1},children:n.name}),d&&e(f,{color:"inherit",variant:"subtitle2",children:n.unreadCount})]})})};ve.propTypes={active:u.bool,label:u.object.isRequired,onClick:u.func};const dt=a=>{const t={system:[],template:[],custom:[]};return a.forEach(n=>{n.type==="system"?t.system.push(n):n.type==="template"?t.template.push(n):t.custom.push(n)}),t},ye=a=>{const{currentLabelId:t="inbox",container:n,labels:r,onClose:c,onCompose:s,open:d,...l}=a,o=Pe(),p=F(w=>w.breakpoints.up("md")),m=h.useCallback(w=>{p||c==null||c();const b=w.id!=="inbox"?T.dashboard.mail+`?label=${w.id}`:T.dashboard.mail;o.push(b)},[o,p,c]),k=dt(r),M=i("div",{children:[i(y,{alignItems:"center",direction:"row",spacing:2,sx:{pt:2,px:2},children:[e(f,{variant:"h5",sx:{flexGrow:1},children:"Mailbox"}),!p&&e(x,{onClick:c,children:e(v,{children:e(ne,{})})})]}),e(g,{sx:{p:2},children:e(P,{fullWidth:!0,onClick:s,startIcon:e(v,{children:e(ce,{})}),sx:{mt:2},variant:"contained",children:"Compose"})}),e(g,{sx:{pb:2,px:2},children:Object.keys(k).map(w=>i(h.Fragment,{children:[w==="template"&&e(X,{disableSticky:!0,children:e(f,{color:"text.secondary",variant:"overline",children:"Templates"})}),w==="custom"&&e(X,{disableSticky:!0,children:e(f,{color:"text.secondary",variant:"overline",children:"Labels"})}),e(ze,{disablePadding:!0,children:k[w].map(b=>{const I=t===b.id;return e(ve,{active:I,label:b,onClick:()=>m(b)},b.id)})})]},w))})]});return p?e(J,{anchor:"left",open:d,PaperProps:{sx:{position:"relative",width:280}},SlideProps:{container:n},variant:"persistent",...l,children:M}):e(J,{anchor:"left",hideBackdrop:!0,ModalProps:{container:n,sx:{pointerEvents:"none",position:"absolute"}},onClose:c,open:d,PaperProps:{sx:{maxWidth:"100%",width:280,pointerEvents:"auto",position:"absolute"}},SlideProps:{container:n},variant:"temporary",...l,children:M})};ye.propTypes={container:u.any,currentLabelId:u.string,labels:u.array.isRequired,onClose:u.func,onCompose:u.func,open:u.bool};const ut=()=>{const a=H(),t=z(r=>r.mail.labels),n=h.useCallback(()=>{a(N.getLabels())},[a]);return h.useEffect(()=>{n()},[]),t},ae=()=>{const a={isFullScreen:!1,isOpen:!1,message:"",subject:"",to:""},[t,n]=h.useState(a),r=h.useCallback(()=>{n(m=>({...m,isOpen:!0}))},[]),c=h.useCallback(()=>{n(a)},[]),s=h.useCallback(()=>{n(m=>({...m,isFullScreen:!0}))},[]),d=h.useCallback(()=>{n(m=>({...m,isFullScreen:!1}))},[]),l=h.useCallback(m=>{},[]),o=h.useCallback(m=>{n(k=>({...k,subject:m}))},[]),p=h.useCallback(m=>{n(k=>({...k,to:m}))},[]);return{...t,handleClose:c,handleMaximize:s,handleMessageChange:l,handleMinimize:d,handleOpen:r,handleSubjectChange:o,handleToChange:p}},ht=()=>{const a=F(d=>d.breakpoints.up("md")),[t,n]=h.useState(a),r=h.useCallback(()=>{n(!!a)},[a]);h.useEffect(()=>{r()},[a]);const c=h.useCallback(()=>{n(d=>!d)},[]),s=h.useCallback(()=>{n(!1)},[]);return{handleToggle:c,handleClose:s,open:t}},Et=()=>{let a={time:new Date().getTime(),value:"email",expire:3e6},t=JSON.stringify(a);localStorage.setItem("time_token",t);const n=h.useRef(null),r=U(),c=r.get("emailId"),s=r.get("label")||void 0,d=ut(),l=ae(),o=ae(),p=ht();qe();const m=c?"details":"list";return i(B,{children:[e(Re,{title:"Dashboard: Mail"}),e(R,{}),e(g,{component:"main",sx:{backgroundColor:"background.paper",flex:"1 1 auto",overflow:"hidden",position:"relative"},children:i(g,{ref:n,sx:{bottom:0,display:"flex",left:0,position:"absolute",right:0,top:0},children:[e(ye,{container:n.current,currentLabelId:s,labels:d,onClose:p.handleClose,onCompose:l.handleOpen,open:p.open}),i(tt,{open:p.open,children:[m==="details"&&e(pe,{currentLabelId:s,onSidebarToggle:p.handleToggle,emailId:c}),m==="list"&&e(be,{currentLabelId:s,onSidebarToggle:p.handleToggle,onCompose:o.handleOpen})]})]})}),e(De,{maximize:l.isFullScreen,message:l.message,onClose:l.handleClose,onMessageChange:l.handleMessageChange,onMinimize:l.handleMinimize,onSubjectChange:l.handleSubjectChange,onToChange:l.handleToChange,open:l.isOpen,subject:l.subject,to:l.to}),e(de,{maximize:o.isFullScreen,message:o.message,onClose:o.handleClose,onMessageChange:o.handleMessageChange,onMinimize:o.handleMinimize,onSubjectChange:o.handleSubjectChange,onToChange:o.handleToChange,open:o.isOpen,subject:o.subject,to:o.to})]})};export{Et as default};
