import{P as u,r as s,j as i,cn as Ne,d as e,co as we,at as $e,l as y,k as x,aw as A,q as T,c2 as Se,f as k,bx as ye,D as ie,n as O,B as oe,G as P,R as te,cA as xe,ap as Ie,w as ke,c8 as Ge,c_ as z,F as H,cg as ae,a as me,bE as pe,b9 as q,d0 as J,s as Me,cK as Te,L as X,o as Ue,p as F,K as ue,m as ge,aG as ne,db as N,bm as _e,bn as He,bo as qe,a_ as Je,br as Ye,b8 as Ze,dc as Ke,aZ as Ve,cD as ve,c as Qe,S as Xe}from"./app-822dcc1a.js";import{u as Y}from"./use-search-params-b79903ea.js";import{m as et,D as ee,r as tt,L as at,F as nt,d as it,M as ot}from"./mail-119d71c7.js";import{A as Z}from"./Attachment01-082dcb54.js";import{I as st}from"./Image01-cd272c29.js";import{L as rt}from"./Link01-6383440e.js";import{F as lt}from"./FaceSmile-c9b135ff.js";import{Q as ct}from"./quill-editor-8db1806a.js";import{P as je}from"./Plus-8f60a8cd.js";import{S as fe}from"./Star01-a88ca6c0.js";import{g as dt}from"./get-initials-d1c6cec7.js";import{u as ht,P as mt}from"./pagination-0a55e13f.js";import{A as pt}from"./AlertCircle-e07853f4.js";import{S as ut}from"./Send01-363796fd.js";import{T as gt}from"./Trash02-d10eed9b.js";import{H as ft}from"./Heart-78af6684.js";import{L as bt}from"./ListSubheader-85095a4a.js";import"./index-acc1be40.js";import"./file-dropzone-dce10dd5.js";import"./tslib.es6-af7906ce.js";import"./Upload01-e6d8c70d.js";import"./bytes-to-size-706bbf81.js";import"./isEqual-95f7e54c.js";import"./LastPage-39484993.js";const yt=et(()=>({noBorder:{border:"none"}})),xt=`<pre>Dear [Influencer's Name],

I hope this email finds you well.I have been following your work as an influential figure in [your niche], and I am truly impressed by the value you provide to your audience.Your expertise and unique perspective have inspired me.

I am reaching out today because I believe there is a great opportunity for us to collaborate and create something meaningful together.As someone who shares a passion for [your niche], I believe our combined efforts can have a significant impact on our respective audiences.
I have an idea for a collaboration that I believe will be mutually beneficial.Here's a brief overview:
[Provide a concise description of your collaboration idea.Highlight the value it will bring to both your audience and the influencer's audience. Be specific about the type of collaboration, such as a joint blog post, podcast interview, video series, or any other creative concept.]
I truly admire your work and believe that your insights and expertise would greatly enhance the collaboration.Your unique perspective would undoubtedly resonate with our shared audience.

I understand that you are likely approached by numerous individuals, so I want to assure you that I am committed to making this collaboration as seamless and valuable as possible.I am open to discussing any ideas or modifications you may have to ensure it aligns with your goals and values.
If you are interested in exploring this collaboration further, I would be delighted to schedule a call or have a more detailed discussion via email.Please let me know your availability, and I will be happy to accommodate your schedule.
    Thank you for considering this opportunity.I look forward to the possibility of working together and creating something exceptional that will benefit both our audiences.

Warm regards,
    [Your Name][Your Email Address][Your Website or Social Media Handles][Contact Number(Optional)]</pre>`,Ae=a=>{const{maximize:t=!1,message:n="",onClose:r,onMaximize:c,onMessageChange:o,onMinimize:d,onSubjectChange:m,onToChange:g,open:C=!1,subject:p="",to:v=""}=a;s.useState(!1),yt();const S=s.useCallback(f=>{m==null||m(f.target.value)},[m]),I=s.useCallback(f=>{g==null||g(f.target.value)},[g]);return C?i(Ne,{children:[e(we,{open:t}),i($e,{sx:{bottom:f=>`calc((${f.spacing(20)})/3)`,display:"flex",flexDirection:"column",height:f=>`calc(100% - ${f.spacing(20)})`,width:f=>`calc(100% - ${f.spacing(40)})`,outline:"none",position:"fixed",right:f=>`calc((${f.spacing(40)}) / 2)`,zIndex:1400,overflow:"hidden"},elevation:12,children:[i(y,{sx:{alignItems:"center",display:"flex",px:2,py:1},children:[e(x,{variant:"h6",children:"Default Template"}),e(y,{sx:{flexGrow:1}}),e(A,{onClick:r,children:e(T,{children:e(Se,{})})})]}),i(k,{alignItems:"center",direction:"row",spacing:1,children:[e(x,{sx:{mx:2},children:"To"}),e(ye,{disableUnderline:!0,fullWidth:!0,onChange:I,sx:{pt:.5,borderBottom:1,borderColor:"divider"},value:v})]}),i(k,{alignItems:"center",direction:"row",spacing:1,children:[e(x,{sx:{mx:2},children:"Subject"}),e(ye,{disableUnderline:!0,onChange:S,placeholder:"Input Subject",sx:{pt:.5,borderBottom:1,borderColor:"divider",width:"-webkit-fill-available",fontSize:18},value:" Instagram Influencer for a shopping brand - The Rock"})]}),e(ct,{onChange:o,placeholder:"Type your text",sx:{border:"none",flexGrow:1},value:xt}),e(ie,{}),i(k,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{p:2},children:[i(k,{alignItems:"center",direction:"row",spacing:1,children:[e(O,{title:"Attach image",children:e(A,{size:"small",children:e(T,{children:e(st,{})})})}),e(O,{title:"Attach file",children:e(A,{size:"small",children:e(T,{children:e(Z,{})})})}),e(A,{children:e(T,{children:e(rt,{})})}),e(A,{children:e(T,{children:e(lt,{})})})]}),e("div",{children:e(oe,{variant:"contained",children:"Save Template"})})]})]})]}):null};Ae.propTypes={maximize:u.bool,message:u.string,onClose:u.func,onMaximize:u.func,onMessageChange:u.func,onMinimize:u.func,onSubjectChange:u.func,onToChange:u.func,open:u.bool,subject:u.string,to:u.string};const We=a=>{const{attachments:t=[]}=a,n=t.length,r=()=>{let o=xe(".download-link").length;for(let d=0;d<o;d++)xe(".download-link")[d].click()},c=(o,d=2)=>{if(!Number(o))return"0 Bytes";const m=1024,g=d<0?0:d,C=["Bytes","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],p=Math.floor(Math.log(o)/Math.log(m));return`${parseFloat((o/Math.pow(m,p)).toFixed(g))} ${C[p]}`};return console.log(t),i(k,{spacing:2,children:[i(x,{variant:"h6",children:[n," Attachments"]}),e(k,{alignItems:"flex-start",direction:"row",spacing:2,flexWrap:"wrap",children:t.map(o=>i(k,{alignItems:"center",direction:"row",spacing:1,sx:{alignItems:"center",cursor:"pointer",display:"flex"},children:[o.type.split("/")[0]=="image"&&e(P,{component:te,src:"data:image/png;base64,"+o.attachment,href:"data:"+o.type+";base64,"+o.attachment,download:o.name,variant:"rounded"}),o.type.split("/")[0]!="image"&&e(P,{variant:"rounded",sx:{backgroundColor:"primary.light",borderRadius:"50%"},component:te,href:"data:"+o.type+";base64,"+o.attachment,download:o.name,children:e(Z,{})}),i("div",{children:[e(x,{className:"download-link",noWrap:!0,variant:"subtitle2",component:te,href:"data:"+o.type+";base64,"+o.attachment,download:o.name,children:o.name}),e(x,{color:"text.secondary",variant:"body2",children:c(o.size)})]})]},o.id))}),e("div",{children:e(oe,{color:"primary",size:"small",onClick:r,children:"Download all"})})]})};We.propTypes={attachments:u.array};Ie("div")(({theme:a})=>({color:a.palette.text.primary,fontFamily:a.typography.body1.fontFamily,"& > p":{fontSize:14,lineHeight:a.typography.body1.lineHeight,marginBottom:a.spacing(2)}}));const Le=a=>{const{message:t=""}=a;return e("div",{dangerouslySetInnerHTML:{__html:t}})};Le.propTypes={message:u.string};const vt=a=>{const{from:t,to:n,subject:r,userinfo:c}=a,o=s.useRef(null),[d,m]=s.useState(ee.EditorState.createEmpty()),g=d.getCurrentContent();ee.convertToRaw(g);const C=Ge(),[p,v]=s.useState(),S=JSON.parse(localStorage.getItem("email")),[I,f]=s.useState(""),[w,l]=s.useState([]),[h,L]=s.useState(new FormData),[$,R]=s.useState(!1),G=z(),se=M=>{K(M.getCurrentContent()),m(M),v(it(ee.convertToRaw(M.getCurrentContent())))},U=Y().get("label")||"inbox";s.useEffect(()=>{f(p)},[p]),s.useEffect(()=>{I==""&&m(ee.EditorState.createEmpty())},[I]);const K=async M=>{M.getBlockMap().forEach(D=>{D.findEntityRanges(E=>{const B=E.getEntity();return B!==null&&M.getEntity(B).getType()==="IMAGE"},async(E,B)=>{const b=M.getBlockForKey(D.getKey()).getEntityAt(E),W=M.getEntity(b).getData();if(w.includes(W.src))return;let _=w;_.push(W.src),l(_),W.src.includes("blob:http")&&axios({method:"get",url:W.src,responseType:"blob"}).then(function(de){var Q=new FileReader;Q.readAsDataURL(de.data),Q.onloadend=function(){var Fe=Q.result;axios.post("/api/upload_inline",{uri:W.src.split("/")[3],data:Fe}).then(he=>{let be=w;be.push(W.src+"."+he.data),l(be),console.log(he.data)}).catch(he=>{})}})})})},re=M=>{const D={file:M,localsrc:URL.createObjectURL(M)};return new Promise((E,B)=>{E({data:{link:D.localsrc}})})},le=()=>{C.handleOpen()},V=M=>{L(M)},ce=()=>{if(c.is_admin!="1"){if(c.paid=="1"&&c.message_cnt>=50){ae.error(`You are trying to send 51th message this month.
 Please upgrade your membership. 
 `+c.time+"days left by renewal date.");return}else if(c.paid=="0"&&c.message_cnt>=5){ae.error(`Trial user cannot send over 5 messages .
 Please upgrade your membership.`);return}}if(R(!0),U=="inbox")h.append("to",t.email);else{let M="";n[0].name.map((D,E)=>{M+=E==n[0].name.length-1?D.mail:D.mail+", "}),h.append("to",M)}h.append("subject",r),h.append("message",I),h.append("email",S),h.append("inlineImgs",w),axios.post("/api/send_mail",h,{}).then(M=>{R(!1),f(""),l([]),L(new FormData),ae.success("Message Sent Successfuly."),G(thunks.getEmails({label:U,email:JSON.parse(localStorage.getItem("email"))}))}).catch(M=>{})};return i(H,{children:[e(y,{sx:{p:3},...a,children:e(k,{alignItems:"flex-start",direction:"row",spacing:2,children:i(y,{sx:{flexGrow:1},children:[e(tt.Editor,{editorState:d,wrapperClassName:"wrapper-class reply-wrapper",editorClassName:"editor-class reply-class",toolbarClassName:"toolbar-class",onEditorStateChange:se,toolbar:{options:["image","link","emoji"],link:{options:["link"]},image:{uploadCallback:re,previewImage:!0}}}),i(k,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{p:2,mb:2},children:[e(k,{alignItems:"center",direction:"row",spacing:1,sx:{ml:17},children:e(O,{title:"Attach file",children:e(A,{size:"small",onClick:le,children:e(T,{children:e(Z,{})})})})}),e("div",{children:e(at,{loading:$,loadingPosition:"center",variant:"contained",onClick:ce,children:"Reply"})})]}),e(nt,{onClose:C.handleClose,open:C.open,onUpgrade:V})]})})}),e("input",{hidden:!0,ref:o,type:"file"})]})},Ct=a=>({userinfo:a.profile.userinfo}),wt=ke(Ct)(vt),Ee=a=>{const{backHref:t,uid:n,createdAt:r,from:c,to:o,folder:d="inbox",onSidebarToggle:m,currentLabelId:g="inbox"}=a,C=me(),p=pe(l=>l.breakpoints.up("md")),v=q(new Date(r),"MMMM d yyyy, h:mm:ss a"),[S,I]=s.useState(!1),f=J(l=>l.mail.labels),w=l=>{I(!0),axios.post("/api/del_mail",{uid:l,label:d,email:JSON.parse(localStorage.getItem("email"))}).then(h=>{I(!1),g=="inbox"&&C.push("/dashboard/mail"),g=="sent"&&C.push("/dashboard/mail?label=sent"),g=="favorites"&&C.push("/dashboard/mail?label=favorites")}).catch(h=>{})};return i("div",{children:[i(k,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:2},children:[S==!0?i(y,{sx:{display:"flex",textAlign:"center"},children:[e(Me,{}),e(x,{sx:{display:"inline",fontSize:18,fontWeight:700,p:1},children:"Removing..."})]}):e(H,{}),i("div",{children:[e(A,{onClick:m,children:e(T,{children:e(Te,{})})}),e(x,{sx:{display:"inline",fontSize:18,fontWeight:700},children:g==null?"Inbox":f.map(l=>{if(l.id==g)return l.name})})]})]}),e(ie,{}),i(k,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:3},children:[d=="inbox"?i(k,{alignItems:"center",direction:"row",spacing:2,children:[e(P,{src:`https://ui-avatars.com/api/?name=${c.email}&background=2970FF&color=fff&rounded=true`}),i("div",{children:[e(x,{component:"span",variant:"subtitle2",children:c.name})," ",e(X,{color:"text.secondary",component:"span",variant:"body2",children:c.email}),i(x,{color:"text.secondary",variant:"subtitle2",children:["To:"," ",o.map(l=>e(X,{color:"inherit",children:l.email},l.email))]})]})]}):i(k,{alignItems:"center",direction:"row",spacing:2,children:[e(P,{src:`https://ui-avatars.com/api/?name=${c.email}&background=2970FF&color=fff&rounded=true`}),i("div",{children:[e(x,{component:"span",variant:"subtitle2",children:c.name})," ",e(X,{color:"text.secondary",component:"span",variant:"body2",children:c.email}),i(x,{color:"text.secondary",variant:"subtitle2",children:["To:"," ",o[0].name.map((l,h)=>e(X,{color:"inherit",children:h==o[0].name.length-1?l.mail:l.mail+", "},l.mail))]})]})]}),e(k,{alignItems:"center",direction:"row",spacing:1,children:p&&i(H,{children:[v&&e(x,{color:"text.secondary",noWrap:!0,variant:"caption",children:v}),e(O,{title:"Delete",children:e(A,{onClick:()=>w(n),children:e("img",{src:"/assets/icons/trash.png",width:15,height:15})})})]})})]})]})};Ee.propTypes={backHref:u.string.isRequired,from:u.object.isRequired,to:u.array.isRequired};const St=a=>(z(),J(n=>n.mail.emails.byId[a])),De=a=>{const{emailId:t,currentLabelId:n,onSidebarToggle:r}=a,c=St(t),o=Ue(),d=n&&n!=="inbox"?F.dashboard.mail+`?label=${n}`:F.dashboard.mail;if(!c)return o(d),null;const m=!!c.message,g=c.attachments&&c.attachments.length>0;return i(k,{sx:{flexGrow:1,height:"100%",overflowY:"auto"},children:[e(Ee,{uid:t,backHref:d,createdAt:new Date(c.createdAt),currentLabelId:n,folder:c.realfolder,from:c.from,onSidebarToggle:r,to:c.to}),i(y,{sx:{flexGrow:1,px:3,py:6},children:[e(x,{variant:"h3",children:c.subject}),i(k,{sx:{mt:2},spacing:6,children:[m&&e(Le,{message:c.message}),g&&e(We,{attachments:c.attachments})]})]}),e(wt,{from:c.from,to:c.to,subject:c.subject})]})};De.propTypes={emailId:u.string.isRequired,currentLabelId:u.string};const It=Ie("div",{shouldForwardProp:a=>a!=="open"})(({theme:a,open:t})=>({flexGrow:1,overflow:"hidden",[a.breakpoints.up("md")]:{marginLeft:-280},transition:a.transitions.create("margin",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),...t&&{[a.breakpoints.up("md")]:{marginLeft:0},transition:a.transitions.create("margin",{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen})}}));var kt=function(t){return e("svg",ue({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:e("path",{fill:"#fff",fillOpacity:.01,stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 7.8c0-1.6802 0-2.5202.327-3.162a3 3 0 0 1 1.311-1.311C7.2798 3 8.1198 3 9.8 3h4.4c1.6802 0 2.5202 0 3.162.327a2.9997 2.9997 0 0 1 1.311 1.311C19 5.2798 19 6.1198 19 7.8V21l-7-4-7 4V7.8Z"})}))};const Pe=a=>{const{email:t,onDeselect:n,onSelect:r,onCompose:c,selected:o,href:d,...m}=a,g=z(),p=Y().get("label")||void 0,v=s.useCallback(h=>{h.target.checked?r==null||r():n==null||n()},[r,n]),S=q(new Date(t.createdAt),"MMM dd"),I=q(new Date(t.createdAt),"MMM dd, hh:mm aa"),f=!!(t.attachments&&t.attachments.length>0),w=!!(t.attachments&&t.attachments.length>1);me();const l=(h,L,$,R)=>{axios.post("/api/update_fav",{uid:L,flag:h,email:JSON.parse(localStorage.getItem("email")),label:$}).then(G=>{g(N.getEmails({label:R,email:JSON.parse(localStorage.getItem("email"))}))}).catch(G=>{})};return i(y,{sx:{alignItems:"center",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"divider",display:"flex",p:2,...!t.isUnread&&{position:"relative","&:before":{backgroundColor:"primary.main",content:'" "',height:"100%",left:0,position:"absolute",top:0,width:4},"& $name, & $subject":{fontWeight:600}},...o&&{backgroundColor:"primary.lightest"},...!o&&{"&:hover":{backgroundColor:"action.hover"}}},...m,children:[i(y,{sx:{alignItems:"center",display:{md:"flex",xs:"none"},mr:1},children:[e(ge,{checked:o,onChange:v}),e(O,{title:"Starred",children:e(A,{onClick:()=>l(t.favorite,t.id,t.realfolder,t.folder),children:e(T,{sx:{...t.favorite&&{color:"warning.main","& path":{fill:h=>h.palette.warning.main,fillOpacity:1}}},children:e(fe,{})})})})]}),i(y,{component:te,href:d,sx:{alignItems:"center",cursor:"pointer",display:"contents",flexGrow:1,flexWrap:{xs:"wrap",md:"wrap"},minWidth:1,textDecoration:"none"},children:[t.realfolder=="inbox"?i(y,{sx:{alignItems:"center",display:"flex"},children:[e(P,{src:`https://ui-avatars.com/api/?name=${t.from.email}&background=2970FF&color=fff&rounded=true`}),e(x,{color:"text.primary",sx:{width:120,ml:2,...!t.isUnread&&{fontWeight:600}},noWrap:!0,variant:"body2",children:t.from.email})]}):i(y,{sx:{alignItems:"center",display:"flex"},children:[e(P,{src:`https://ui-avatars.com/api/?name=${t.to[0].name[0].mail}&background=2970FF&color=fff&rounded=true`}),e(x,{color:"text.primary",sx:{width:120,ml:2,...!t.isUnread&&{fontWeight:600}},noWrap:!0,variant:"body2",children:t.to[0].name.map(h=>h.mail)})]}),i(y,{sx:{ml:{xs:0,md:2},my:{xs:2,md:0},overflow:"hidden",width:"-webkit-fill-available"},children:[i(y,{sx:{alignItems:"center",display:"flex",maxWidth:800,width:"100%"},children:[t.isUnread.seen=="Seen"?e(x,{color:"text.primary",sx:{fontWeight:400,minWidth:100,maxWidth:400,mr:1},noWrap:!0,variant:"body2",children:t.subject}):e(x,{color:"text.primary",sx:{fontWeight:700,minWidth:100,maxWidth:400,mr:1},noWrap:!0,variant:"body2",children:t.subject}),e(x,{className:"inline-item",color:"text.secondary",noWrap:!0,variant:"body2",children:e("div",{dangerouslySetInnerHTML:{__html:t.message}})})]}),f&&i(y,{sx:{mt:1,maxWidth:800},children:[e(ne,{icon:e(T,{children:e(Z,{})}),label:t.attachments[0].name,size:"small"}),w&&e(ne,{label:"+"+(t.attachments.length-1).toString(),size:"small",sx:{ml:1}})]})]}),e(y,{sx:{margin:"auto"},children:e(x,{color:"text.secondary",variant:"caption",alignItems:"center",sx:{display:"block",textAlign:{xs:"left",md:"right"},whiteSpace:"nowrap",width:"100%"},children:p&&p.search("template")>=0?"Last used-"+I:S})})]})]})};Pe.propTypes={email:u.object.isRequired,href:u.string.isRequired,onDeselect:u.func,onSelect:u.func,selected:u.bool.isRequired};const ze=a=>{const{email:t,onDeselect:n,onSelect:r,onCompose:c,selected:o,href:d,...m}=a,C=Y().get("label")||void 0,p=s.useCallback(w=>{w.target.checked?r==null||r():n==null||n()},[r,n]),v=q(new Date(t.createdAt),"MMM dd"),S=q(new Date(t.createdAt),"MMM dd, hh:mm aa"),I=!!(t.attachments&&t.attachments.length>0),f=!!(t.attachments&&t.attachments.length>1);return i(y,{sx:{alignItems:"center",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"divider",display:"flex",p:2,...!t.isUnread&&{position:"relative","&:before":{backgroundColor:"primary.main",content:'" "',height:"100%",left:0,position:"absolute",top:0,width:4},"& $name, & $subject":{fontWeight:600}},...o&&{backgroundColor:"primary.lightest"},...!o&&{"&:hover":{backgroundColor:"action.hover"}}},...m,children:[i(y,{sx:{alignItems:"center",display:{md:"flex",xs:"none"},mr:1},children:[e(ge,{checked:o,onChange:p}),e(O,{title:"Starred",children:e(A,{children:e(T,{sx:{...t.isStarred&&{color:"warning.main","& path":{fill:w=>w.palette.warning.main,fillOpacity:1}}},children:e(fe,{})})})})]}),i(y,{sx:{alignItems:"center",cursor:"pointer",display:"flex",flexGrow:1,flexWrap:{xs:"wrap",md:"wrap"},minWidth:1,textDecoration:"none"},children:[i(y,{sx:{alignItems:"center",display:"flex"},children:[e(P,{src:t.from.avatar||void 0,children:dt(t.from.name)}),e(x,{color:"text.primary",sx:{width:120,ml:2,...!t.isUnread&&{fontWeight:600}},noWrap:!0,variant:"body2",children:t.from.name})]}),i(y,{sx:{ml:{xs:0,md:2},my:{xs:2,md:0},overflow:"hidden",width:"fit-content"},children:[i(y,{sx:{alignItems:"center",display:"flex",maxWidth:800,width:"100%"},children:[e(x,{color:"text.primary",sx:{fontWeight:600,minWidth:100,maxWidth:400,mr:1},noWrap:!0,variant:"body2",children:t.subject}),i(x,{color:"text.secondary",noWrap:!0,variant:"body2",children:["—",t.message]})]}),I&&i(y,{sx:{mt:1,maxWidth:800},children:[e(ne,{icon:e(T,{children:e(Z,{})}),label:t.attachments[0].name,size:"small"}),f&&e(ne,{label:"+1",size:"small",sx:{ml:1}})]})]}),e(y,{children:e(x,{color:"text.secondary",variant:"caption",alignItems:"center",sx:{display:"block",textAlign:{xs:"left",md:"right"},whiteSpace:"nowrap",width:"100%"},children:C&&C.search("template")>=0?"Last used-"+S:v})})]})]})};ze.propTypes={email:u.object.isRequired,href:u.string.isRequired,onDeselect:u.func,onSelect:u.func,selected:u.bool.isRequired};const Mt=a=>{const t=z(),{emails:n}=J(r=>r.mail);return s.useEffect(()=>{t(N.getEmails({label:a??"inbox",email:JSON.parse(localStorage.getItem("email"))}))},[a]),n},Tt=a=>{const[t,n]=s.useState([]);s.useEffect(()=>{n([])},[a]);const r=s.useCallback(()=>{n([...a])},[a]),c=s.useCallback(m=>{n(g=>g.includes(m)?g:[...g,m])},[]),o=s.useCallback(()=>{n([])},[]),d=s.useCallback(m=>{n(g=>g.filter(C=>C!==m))},[]);return{handleDeselectAll:o,handleDeselectOne:d,handleSelectAll:r,handleSelectOne:c,selected:t}},Re=a=>{const{currentLabelId:t,disCount:n,onSidebarToggle:r,onCompose:c,...o}=a,d=Mt(t),[m,g]=s.useState(!0),C=z(),p=J(b=>b.mail.labels),[v,S]=s.useState(0);s.useState([]),s.useState([]),s.useEffect(()=>{S(1),g(!0)},[t]);const{handleDeselectAll:I,handleDeselectOne:f,handleSelectAll:w,handleSelectOne:l,selected:h}=Tt(d.allIds),L=s.useCallback(b=>{b.target.checked?w():I()},[w,I]),$=b=>{b.isUnread.seen||axios.post("/api/unread_set",{uid:b.id,email:JSON.parse(localStorage.getItem("email"))}).then(j=>{C(N.getEmails({label:"inbox",email:JSON.parse(localStorage.getItem("email"))})),C(N.getCntEmails({label:"inbox",email:JSON.parse(localStorage.getItem("email"))}))}).catch(j=>{})},R=h.length===d.allIds.length,G=h.length>0&&h.length<d.allIds.length,se=d.allIds.length>0,[U,K]=s.useState(d.allIds);s.useEffect(()=>{v==1&&g(!1),S(v+1),v>=2&&S(0),K(d.allIds)},[d]);const[re,le]=s.useState(1),V=10,ce=Math.ceil(U.length/V),M=ht(U,V),D=(b,j)=>{le(j),M.jump(j)},E=s.useRef(null),B=s.useCallback(b=>{var _;b.preventDefault();const j=((_=E.current)==null?void 0:_.value)||"";let W=d.allIds.filter(de=>!(typeof j<"u"&&j!==""&&(console.log("called"),!(d.byId[de].subject||"").toLowerCase().includes(j.toLowerCase()))));K(W)},[d]);return i(k,{sx:{height:"100%",overflowY:"auto"},...o,children:[e(k,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:2,sx:{p:2},children:i("div",{children:[e(A,{onClick:r,children:e(T,{children:e(Te,{})})}),e(x,{sx:{display:"inline",fontSize:18,fontWeight:700},children:t==null?"Inbox":p.map(b=>{if(b.id==t)return b.name})})]})}),e(ie,{}),m==!0?i(we,{open:m,onClick:b=>b.preventDefault(),sx:{color:"#fff",zIndex:b=>b.zIndex.drawer+1},children:[e(Me,{color:"inherit"}),e(x,{sx:{display:"inline",fontSize:18,fontWeight:700,p:1},children:"Loading..."})]}):se?i(H,{children:[i(y,{sx:{alignItems:"center",borderBottomColor:"divider",borderBottomStyle:"solid",borderBottomWidth:1,display:{xs:"none",md:"flex"},p:2},children:[e(ge,{checked:R,indeterminate:G,onChange:L}),e(x,{variant:"subtitle2",children:"Select all"}),e(y,{sx:{flexGrow:1}}),i(k,{alignItems:"center",direction:"row",spacing:1,children:[t&&t.search("template")>=0?e(oe,{onClick:c,startIcon:e(T,{children:e(je,{})}),variant:"contained",children:"New Template"}):"",e(y,{component:"form",onSubmit:B,sx:{flexGrow:1},children:e(_e,{fullWidth:!0,inputProps:{ref:E},placeholder:"Search email",size:"small",startAdornment:e(He,{position:"start",children:e(T,{children:e(qe,{})})}),sx:{width:200}})}),e(mt,{count:ce,page:re,variant:"outlined",shape:"rounded",onChange:D})]})]}),e("div",{children:M.currentData().map(b=>{const j=h.includes(b),W=t&&t!=="inbox"?F.dashboard.mail+`?emailId=${b}&label=${t}`:F.dashboard.mail+`?emailId=${b}`;return t&&t.search("template")>=0?e(ze,{email:d.byId[b],href:W,onCompose:c,onClick:c,onDeselect:()=>f(b),onSelect:()=>l(b),selected:j},b):d.byId[b]&&e(Pe,{email:d.byId[b],href:W,onClick:()=>$(d.byId[b]),onCompose:c,onDeselect:()=>f(b),onSelect:()=>l(b),selected:j},b)})})]}):i(k,{alignItems:"center",justifyContent:"center",spacing:2,sx:{flexGrow:1,p:2},children:[e(y,{component:"img",src:"/assets/errors/error-404.png",sx:{height:"auto",maxWidth:120}}),e(x,{color:"text.secondary",variant:"h5",children:"There are no emails"})]})]})};Re.propTypes={currentLabelId:u.string,onSidebarToggle:u.func};var jt=function(t){return i("svg",ue({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M14.7301 4H9.2699c-.9692 0-1.4538 0-1.8816.1476a2.7 2.7 0 0 0-1.0088.6235c-.3234.3166-.54.75-.9735 1.617l-1.95 3.8998c-.17.3401-.255.5102-.315.6885a2.6993 2.6993 0 0 0-.115.4866C3 11.6493 3 11.8395 3 12.2198V14.08c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943h9.36c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C21 16.3482 21 15.5921 21 14.08v-1.8602c0-.3803 0-.5705-.0261-.7568a2.6918 2.6918 0 0 0-.1149-.4866c-.0599-.1783-.145-.3484-.3151-.6885L18.594 6.388c-.4334-.8668-.6501-1.3003-.9735-1.617a2.7 2.7 0 0 0-1.0088-.6234C16.1839 4 15.6993 4 14.7301 4Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3.45 11.2h3.0438a1.628 1.628 0 0 1 1.4562.9c.2758.5516.8396.9 1.4562.9h5.1876a1.628 1.628 0 0 0 1.4562-.9 1.628 1.628 0 0 1 1.4562-.9H20.55M9.27 4h5.46c.9692 0 1.4538 0 1.8816.1476a2.7 2.7 0 0 1 1.0088.6235c.3234.3166.5401.75.9735 1.617l1.9499 3.8998c.1701.3401.2552.5102.3151.6885.0533.1583.0918.3212.1149.4866.0261.1863.0261.3765.0261.7568V14.08c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 16.3482 3 15.5921 3 14.08v-1.8602c0-.3803 0-.5705.026-.7568a2.6993 2.6993 0 0 1 .115-.4866c.06-.1783.145-.3484.315-.6885l1.95-3.8999c.4334-.8668.6501-1.3003.9735-1.617a2.7 2.7 0 0 1 1.0088-.6234C7.8161 4 8.3007 4 9.2699 4Z"})]}))},At=function(t){return i("svg",ue({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t,{children:[e("path",{fill:"#fff",fillOpacity:.01,d:"M2.9373 11.9373c-.346-.3459-.5189-.5189-.6426-.7207a2.0013 2.0013 0 0 1-.2394-.5781C2 10.4083 2 10.1637 2 9.6745V5.2c0-1.1201 0-1.6802.218-2.108a2 2 0 0 1 .874-.874C3.5198 2 4.08 2 5.2 2h4.4745c.4892 0 .7338 0 .964.0553.204.049.3991.1298.5781.2394.2018.1237.3748.2966.7207.6426l7.6686 7.6686c1.188 1.188 1.7821 1.7821 2.0046 2.467a2.9996 2.9996 0 0 1 0 1.8541c-.2225.685-.8166 1.2791-2.0046 2.4671l-2.2118 2.2118c-1.188 1.188-1.7821 1.7821-2.4671 2.0046a2.9996 2.9996 0 0 1-1.8541 0c-.6849-.2225-1.279-.8166-2.467-2.0046l-7.6686-7.6686Z"}),e("path",{fill:"#fff",fillOpacity:.01,d:"M8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"}),e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 8h.01M2 5.2v4.4745c0 .4892 0 .7338.0553.964.049.204.1298.3991.2394.5781.1237.2018.2966.3748.6426.7207l7.6686 7.6686c1.188 1.188 1.7821 1.7821 2.467 2.0046a2.9996 2.9996 0 0 0 1.8541 0c.685-.2225 1.2791-.8166 2.4671-2.0046l2.2118-2.2118c1.188-1.188 1.7821-1.7821 2.0046-2.4671a2.9996 2.9996 0 0 0 0-1.8541c-.2225-.6849-.8166-1.279-2.0046-2.467l-7.6686-7.6686c-.3459-.346-.5189-.5189-.7207-.6426a2.0013 2.0013 0 0 0-.5781-.2394C10.4083 2 10.1637 2 9.6745 2H5.2c-1.1201 0-1.6802 0-2.108.218a2 2 0 0 0-.874.874C2 3.5198 2 4.08 2 5.2ZM8.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"})]}))};const Wt={all:e(Ze,{}),inbox:e(jt,{}),sent:e(ut,{}),trash:e(gt,{}),drafts:e(Ke,{}),spam:e(pt,{}),starred:e(fe,{}),important:e(kt,{}),favorites:e(ft,{})},Lt=a=>a.type==="system"?Wt[a.id]:e(At,{}),Et=a=>a.type==="custom"&&a.color||"inherit",Be=a=>{const{active:t,unread:n,label:r,...c}=a,o=Lt(r),d=Et(r);return r.unreadCount&&r.unreadCount>0,e(Je,{disableGutters:!0,disablePadding:!0,sx:{"& + &":{mt:1}},...c,children:i(Ye,{sx:{borderRadius:1,color:"text.secondary",flexGrow:1,fontSize:m=>m.typography.button.fontSize,fontWeight:m=>m.typography.button.fontWeight,justifyContent:"flex-start",lineHeight:m=>m.typography.button.lineHeight,py:1,px:2,textAlign:"left","&:hover":{backgroundColor:"action.hover"},...t&&{backgroundColor:"action.selected",color:"text.primary"}},children:[e(T,{sx:{color:d,mr:1},children:o}),e(y,{sx:{flexGrow:1},children:r.name}),n!=0&&r.id=="inbox"&&e(x,{color:"inherit",variant:"subtitle2",children:n})]})})};Be.propTypes={active:u.bool,label:u.object.isRequired,onClick:u.func};const Dt=a=>{const t={system:[],template:[],custom:[]};return a.forEach(n=>{n.type==="system"?t.system.push(n):n.type==="template"?t.template.push(n):t.custom.push(n)}),t},Oe=a=>{const{currentLabelId:t="inbox",container:n,labels:r,unread:c,onClose:o,onCompose:d,open:m,...g}=a,C=me(),p=pe(f=>f.breakpoints.up("md")),v=s.useCallback(f=>{p||o==null||o();const w=f.id!=="inbox"?F.dashboard.mail+`?label=${f.id}`:F.dashboard.mail;C.push(w)},[C,p,o]),S=Dt(r),I=i("div",{children:[i(k,{alignItems:"center",direction:"row",spacing:2,sx:{pt:2,px:2},children:[e(x,{variant:"h5",sx:{flexGrow:1},children:"Mailbox"}),!p&&e(A,{onClick:o,children:e(T,{children:e(Se,{})})})]}),e(y,{sx:{p:2},children:e(oe,{fullWidth:!0,onClick:d,startIcon:e(T,{children:e(je,{})}),sx:{mt:2},variant:"contained",children:"Compose"})}),e(y,{sx:{pb:2,px:2},children:Object.keys(S).map(f=>i(s.Fragment,{children:[f==="template"&&e(bt,{disableSticky:!0,children:e(x,{color:"text.secondary",variant:"overline",children:"Templates"})}),e(Ve,{disablePadding:!0,children:S[f].map(w=>{const l=t===w.id;return e(Be,{active:l,unread:c,label:w,onClick:()=>v(w)},w.id)})})]},f))})]});return p?e(ve,{anchor:"left",open:m,PaperProps:{sx:{position:"relative",width:280}},SlideProps:{container:n},variant:"persistent",...g,children:I}):e(ve,{anchor:"left",hideBackdrop:!0,ModalProps:{container:n,sx:{pointerEvents:"none",position:"absolute"}},onClose:o,open:m,PaperProps:{sx:{maxWidth:"100%",width:280,pointerEvents:"auto",position:"absolute"}},SlideProps:{container:n},variant:"temporary",...g,children:I})};Oe.propTypes={container:u.any,currentLabelId:u.string,labels:u.array.isRequired,onClose:u.func,onCompose:u.func,open:u.bool};const Pt=()=>{const a=z(),t=J(r=>r.mail.labels),n=s.useCallback(()=>{a(N.getLabels())},[a]);return s.useEffect(()=>{n()},[]),t},Ce=()=>{const a={isFullScreen:!1,isOpen:!1,message:"",subject:"",inlineImgs:[],to:"",loading:!1,data:new FormData},t=z(),[n,r]=s.useState(a),c=Y().get("label")||"inbox",o=s.useCallback(()=>{r(l=>({...l,isOpen:!0}))},[]),d=s.useCallback(()=>{r(a)},[]),m=s.useCallback(()=>{r(l=>({...l,isFullScreen:!0}))},[]),g=s.useCallback(()=>{r(l=>({...l,isFullScreen:!1}))},[]),C=s.useCallback(l=>{r(h=>({...h,data:l}))},[]),p=s.useCallback(l=>{r(h=>({...h,message:l}))},[]),v=s.useCallback(l=>{let h=n.inlineImgs;h.includes(l)||(h.push(l),r(L=>({...L,inlineImgs:h})))},[]),S=s.useCallback(()=>{r(l=>({...l,inlineImgs:[]}))},[]),I=s.useCallback(l=>{r(h=>({...h,subject:l}))},[]),f=s.useCallback(l=>{r(h=>({...h,to:l}))},[]);return{...n,handleClose:d,handleMaximize:m,handleMessageChange:p,handleMinimize:g,handleInlineImgsChange:v,handleInlineImgsInit:S,handleSubmit:()=>{r(l=>({...l,loading:!0})),n.data.append("to",n.to),n.data.append("subject",n.subject),n.data.append("message",n.message),n.data.append("email",JSON.parse(localStorage.getItem("email"))),n.data.append("inlineImgs",n.inlineImgs),axios.post("/api/send_mail",n.data,{}).then(l=>{ae.success("Message Sent Successfuly."),t(N.getEmails({label:c,email:JSON.parse(localStorage.getItem("email"))})),r(h=>({...h,loading:!1,subject:"",to:"",inlineImgs:[],message:"",isOpen:!1,data:new FormData}))}).catch(l=>{})},handleOpen:o,handleAttach:C,handleSubjectChange:I,handleToChange:f}},zt=()=>{const a=pe(d=>d.breakpoints.up("md")),[t,n]=s.useState(a),r=s.useCallback(()=>{n(!!a)},[a]);s.useEffect(()=>{r()},[a]);const c=s.useCallback(()=>{n(d=>!d)},[]),o=s.useCallback(()=>{n(!1)},[]);return{handleToggle:c,handleClose:o,open:t}},Rt=a=>{const{emails:t,cntemails:n}=a;s.useState(!1),s.useEffect(()=>{let h=0;n.allIds.map(L=>{n.byId[L].isUnread.seen||h++}),w(h)},[n]);let r={time:new Date().getTime(),value:"email",expire:3e6},c=JSON.stringify(r);localStorage.setItem("time_token",c);const o=s.useRef(null),d=Y(),m=d.get("emailId"),g=d.get("label")||void 0,C=Pt(),p=Ce(),v=Ce(),S=zt(),[I,f]=s.useState(0),w=h=>{f(h)};Qe();const l=m?"details":"list";return i(H,{children:[e(Xe,{title:"Dashboard: Mail"}),e(ie,{}),e(y,{component:"main",sx:{backgroundColor:"background.paper",flex:"1 1 auto",overflow:"hidden",position:"relative"},children:i(y,{ref:o,sx:{bottom:0,display:"flex",left:0,position:"absolute",right:0,top:0},children:[e(Oe,{container:o.current,currentLabelId:g,labels:C,unread:I,onClose:S.handleClose,onCompose:p.handleOpen,open:S.open}),i(It,{open:S.open,children:[l==="details"&&e(De,{currentLabelId:g,onSidebarToggle:S.handleToggle,emailId:m}),l==="list"&&e(Re,{currentLabelId:g,onSidebarToggle:S.handleToggle,onCompose:v.handleOpen,disCount:w})]})]})}),e(ot,{maximize:p.isFullScreen,message:p.message,onClose:p.handleClose,onMessageChange:p.handleMessageChange,onMinimize:p.handleMinimize,onSubjectChange:p.handleSubjectChange,onInlineImgsChange:p.handleInlineImgsChange,onSubmit:p.handleSubmit,onAttach:p.handleAttach,onToChange:p.handleToChange,handleInlineImgsInit:p.handleInlineImgsInit,inlineImgs:p.inlineImgs,open:p.isOpen,subject:p.subject,loading:p.loading,to:p.to}),e(Ae,{maximize:v.isFullScreen,message:v.message,onClose:v.handleClose,onMessageChange:v.handleMessageChange,onMinimize:v.handleMinimize,onSubjectChange:v.handleSubjectChange,onToChange:v.handleToChange,open:v.isOpen,subject:v.subject,to:v.to})]})},Bt=a=>({emails:a.mail.emails,cntemails:a.mail.cntemails}),la=ke(Bt)(Rt);export{la as default};
