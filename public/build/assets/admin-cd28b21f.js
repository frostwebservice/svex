import{P as w,aS as D,o as C,j as t,f as x,d as e,l as i,k as l,B as g,q as y,c6 as P,C as G,D as L,aN as M,r as m,F,bM as N,bO as z,aZ as re,a_ as ae,b3 as le,G as se,a$ as oe,aw as j,c2 as ce,c9 as de,e as V,T as _,aR as S,ca as pe,w as he,c as me,S as ue,aL as xe,aM as p}from"./app-f8174623.js";import{O as ge,a as ve,c as fe}from"./overview-tips-5b5dc1ad.js";import{C as E}from"./CardActions-fe88026f.js";import{R as W}from"./TextfieldStyle-0958cebe.js";import{d as we,a as ye}from"./ModeEdit-78b5f07e.js";import{u as be,P as Ce}from"./pagination-0fefb487.js";import{D as ke,a as Te}from"./DialogTitle-dc27d654.js";import{D as Ie}from"./DialogActions-7620ca40.js";import{C as B}from"./CardHeader-341894d1.js";import{O as _e,a as Se}from"./overview-jobs-716f6bc7.js";import{F as De}from"./file-dropzone-8fef6c70.js";import{S as Oe}from"./index-7a154217.js";import"./severity-pill-0e6951e9.js";import"./chart-1833aea3.js";import"./CardMedia-72d34c53.js";import"./LastPage-bc904a95.js";import"./InfoCircle-c6da18d6.js";import"./Link01-a3e0440b.js";import"./Briefcase01-40581ca5.js";import"./tslib.es6-af7906ce.js";import"./Upload01-98665f21.js";import"./bytes-to-size-706bbf81.js";import"./index-333fcf1f.js";import"./index-f619a8f8.js";const J=s=>{D();const r=C();return t(x,{alignItems:"center",direction:{xs:"column",md:"row"},spacing:4,sx:{backgroundColor:a=>a.palette.mode==="dark"?"primary.darkest":"primary.lightest",borderRadius:2.5,p:4},...s,children:[e(i,{sx:{width:200,"& img":{width:"100%"}},children:e("img",{src:"/assets/person-standing.png"})}),t(i,{sx:{flexGrow:1},children:[e(l,{color:"primary.main",variant:"overline",children:"New v6 update"}),e(l,{color:"text.primary",sx:{mt:2},variant:"h6",children:"View All Jobs"}),e(l,{color:"text.primary",sx:{mt:1},variant:"body1",children:"To view all the jobs posted, please click the below button."}),e(i,{sx:{mt:2},children:e(g,{color:"primary",onClick:()=>r("/dashboard/jobs"),startIcon:e(y,{children:e(P,{})}),variant:"contained",children:"View All Jobs"})})]})]})};J.propTypes={onDismiss:w.func};const q=s=>{D();const r=C();return t(x,{alignItems:"center",direction:{xs:"column",md:"row"},spacing:4,sx:{backgroundColor:a=>a.palette.mode==="dark"?"primary.darkest":"primary.lightest",borderRadius:2.5,p:4},...s,children:[e(i,{sx:{width:200,"& img":{width:"100%"}},children:e("img",{src:"/assets/person-standing.png"})}),t(i,{sx:{flexGrow:1},children:[e(l,{color:"primary.main",variant:"overline",children:"New v6 update"}),e(l,{color:"text.primary",sx:{mt:2},variant:"h6",children:"User Management"}),e(l,{color:"text.primary",sx:{mt:1},variant:"body1",children:"To management users, click the below button."}),e(i,{sx:{mt:2},children:e(g,{color:"primary",onClick:()=>r("/dashboard/usermanage"),startIcon:e(y,{children:e(P,{})}),variant:"contained",children:"User Management"})})]})]})};q.propTypes={onDismiss:w.func};const H=s=>{const{amount:r}=s,a=C();return t(G,{children:[t(x,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:3,sx:{px:4,py:3},children:[e("div",{children:e("img",{src:"/assets/iconly/iconly-glass-tick.svg",width:48})}),t(i,{sx:{flexGrow:1},children:[e(l,{color:"text.secondary",variant:"body2",children:"Trial Users Registered"}),e(l,{color:"text.primary",variant:"h4",children:r})]})]}),e(L,{}),e(E,{children:e(g,{color:"inherit",endIcon:e(y,{children:e(M,{})}),size:"small",onClick:()=>a("/dashboard/customers"),children:"Search All Customers"})})]})};H.propTypes={amount:w.number.isRequired};const Pe=s=>{const[r,a]=m.useState([]),[v,d]=m.useState(!0),[h,o]=m.useState({id:"",a_title:"",a_content:""});v&&axios.post("/api/get_announcements",{}).then(c=>{a(c.data),d(!1)});const[T,f]=m.useState(1),k=3,A=Math.ceil(r.length/k),I=be(r,k),n=(c,u)=>{f(u),I.jump(u)},b=c=>{axios.post("/api/delete_announcement",{id:c}).then(u=>{a(u.data),d(!1)})},[O,R]=m.useState(!1),U=()=>{R(!1)},te=(c,u,ie)=>{o({id:c,a_title:u,a_content:ie}),R(!0)},ne=()=>{axios.post("/api/update_announcement",{id:h.id,a_title:h.a_title,a_content:h.a_content}).then(c=>{a(c.data),d(!1),R(!1)})};return t(F,{children:[t(N,{open:O,onClose:U,children:[e(ke,{children:"Edit Announcement"}),t(z,{children:[e(Te,{children:"To edit announcement please enter."}),e(W,{label:"Title",className:"title-inter",name:"title",variant:"filled",onChange:c=>o(u=>({...u,a_title:c.target.value})),style:{marginTop:3},fullWidth:!0,value:h.a_title}),e(W,{label:"Content",className:"title-inter",name:"content",variant:"filled",onChange:c=>o(u=>({...u,a_content:c.target.value})),multiline:!0,style:{marginTop:3},fullWidth:!0,value:h.a_content})]}),t(Ie,{children:[e(g,{onClick:U,children:"Cancel"}),e(g,{onClick:ne,children:"Save"})]})]}),t(G,{children:[e(B,{title:"Announcements",action:e(x,{spacing:2,children:e(Ce,{count:A,page:T,variant:"outlined",shape:"rounded",onChange:n})})}),e(re,{disablePadding:!0,children:I.currentData().map(c=>{const u=c.updated_at;return t(ae,{alignItems:"flex-start",sx:{"&:hover":{backgroundColor:"action.hover",cursor:"pointer"}},children:[e(le,{children:e(se,{src:"/favicon-32x32.png"})}),e(oe,{disableTypography:!0,primary:e(l,{sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},variant:"subtitle2",children:c.a_title}),secondary:t(F,{children:[e(l,{color:"text.secondary",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"wrap"},variant:"body2",children:c.a_content}),t(x,{alignItems:"center",direction:"row",justifyContent:"space-between",flexWrap:"wrap",children:[e(x,{children:e(l,{color:"text.secondary",sx:{whiteSpace:"wrap",mt:1},variant:"subtitle2",children:[new Date(u).getMonth()+1,new Date(u).getDate(),new Date(u).getFullYear()].join("/")})}),t(x,{sx:{mt:1},direction:"row",children:[e(j,{edge:"end",onClick:()=>te(c.id,c.a_title,c.a_content),children:e(y,{fontSize:"small",children:e(we,{})})}),e(j,{edge:"end",onClick:()=>b(c.id),children:e(y,{fontSize:"small",children:e(ye,{})})})]})]})]}),sx:{pr:2}})]},c.id)})})]})]})},Y=s=>{const{amount:r}=s,a=C();return t(G,{children:[t(x,{alignItems:"center",direction:{xs:"column",sm:"row"},spacing:3,sx:{px:4,py:3},children:[e("div",{children:e("img",{src:"/assets/iconly/iconly-glass-info.svg",width:48})}),t(i,{sx:{flexGrow:1},children:[e(l,{color:"text.secondary",variant:"body2",children:"Paid Memberships"}),e(l,{color:"text.primary",variant:"h4",children:r})]})]}),e(L,{}),e(E,{children:e(g,{color:"inherit",endIcon:e(y,{children:e(M,{})}),size:"small",onClick:()=>a("/dashboard/orders"),children:"View all orders"})})]})};Y.propTypes={amount:w.number.isRequired};const $=s=>{D();const r=C();return t(x,{alignItems:"center",direction:{xs:"column",md:"row"},spacing:4,sx:{backgroundColor:a=>a.palette.mode==="dark"?"primary.darkest":"primary.lightest",borderRadius:2.5,p:4},...s,children:[e(i,{sx:{width:200,"& img":{width:"100%"}},children:e("img",{src:"/assets/person-standing.png"})}),t(i,{sx:{flexGrow:1},children:[e(l,{color:"primary.main",variant:"overline",children:"New v6 update"}),e(l,{color:"text.primary",sx:{mt:2},variant:"h6",children:"View All Orders"}),e(l,{color:"text.primary",sx:{mt:1},variant:"body1",children:"To view all orders, click the below button."}),e(i,{sx:{mt:2},children:e(g,{color:"primary",onClick:()=>r("/dashboard/orders"),startIcon:e(y,{children:e(P,{})}),variant:"contained",children:"View All Orders"})})]})]})};$.propTypes={onDismiss:w.func};const X=s=>{D();const r=C();return t(x,{alignItems:"center",direction:{xs:"column",md:"row"},spacing:4,sx:{backgroundColor:a=>a.palette.mode==="dark"?"primary.darkest":"primary.lightest",borderRadius:2.5,p:4},...s,children:[e(i,{sx:{width:200,"& img":{width:"100%"}},children:e("img",{src:"/assets/person-standing.png"})}),t(i,{sx:{flexGrow:1},children:[e(l,{color:"primary.main",variant:"overline",children:"New v6 update"}),e(l,{color:"text.primary",sx:{mt:2},variant:"h6",children:"View All Invoices"}),e(l,{color:"text.primary",sx:{mt:1},variant:"body1",children:"To view all invoices, click the below button."}),e(i,{sx:{mt:2},children:e(g,{color:"primary",onClick:()=>r("/dashboard/invoices"),startIcon:e(y,{children:e(P,{})}),variant:"contained",children:"View All Invoices"})})]})]})};X.propTypes={onDismiss:w.func};const Z=s=>{D();const r=C();return t(x,{alignItems:"center",direction:{xs:"column",md:"row"},spacing:4,sx:{backgroundColor:a=>a.palette.mode==="dark"?"primary.darkest":"primary.lightest",borderRadius:2.5,p:4},...s,children:[e(i,{sx:{width:200,"& img":{width:"100%"}},children:e("img",{src:"/assets/person-standing.png"})}),t(i,{sx:{flexGrow:1},children:[e(l,{color:"primary.main",variant:"overline",children:"New v6 update"}),e(l,{color:"text.primary",sx:{mt:2},variant:"h6",children:"Payment Gateway Settings"}),e(l,{color:"text.primary",sx:{mt:1},variant:"body1",children:"To manage payment gateway settings, click the below button."}),e(i,{sx:{mt:2},children:e(g,{color:"primary",onClick:()=>r("/dashboard/admin/payment"),startIcon:e(y,{children:e(P,{})}),variant:"contained",children:"Payment Gateway Settings"})})]})]})};Z.propTypes={onDismiss:w.func};const K=s=>{const{onClose:r,open:a=!1,onUpgrade:v,kind:d}=s,[h,o]=m.useState([]);m.useEffect(()=>{o([])},[a]);const T=m.useCallback(n=>{o(b=>[...n])},[]),f=m.useCallback(n=>{o(b=>b.filter(O=>O.path!==n.path))},[]),k=JSON.parse(localStorage.getItem("email")),A=m.useCallback(()=>{o([])},[]);return t(N,{fullWidth:!0,maxWidth:"sm",open:a,onClose:r,children:[t(x,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:3,sx:{px:3,py:2},children:[e(l,{variant:"h6",children:"Upload Files"}),e(j,{color:"inherit",onClick:r,children:e(y,{children:e(ce,{})})})]}),e(z,{children:e(De,{accept:{"*/*":[]},caption:"Max file size is 3 MB",files:h,onDrop:T,onRemove:f,onRemoveAll:A,onUpload:()=>{const n=new FormData;n.append("file",h[0]),n.append("email",k),n.append("kind",d);let b="/api/upload_csv";axios.post(b,n,{}).then(O=>{v(O.data.message),r()})}})})]})};K.propTypes={onClose:w.func,open:w.bool};const Q=s=>{const[r,a]=m.useState("instagram");C();const v=de(),d=o=>{pe.success(o)},h=o=>{a(o)};return t(G,{children:[e(B,{title:"Influencer Database Import"}),e(V,{children:e(i,{sx:{flexGrow:1},children:t(i,{children:[t(_,{id:"outlined-select-currency",fullWidth:!0,select:!0,label:"Select Social Type",defaultValue:"instagram",onChange:o=>h(o.target.value),helperText:"Please select influencer type.",children:[e(S,{value:"instagram",children:"Instagram Influencer Import"}),e(S,{value:"tiktok",children:"Tiktok Influencer Import"}),e(S,{value:"youtube",children:"Youtube Influencer Import"}),e(S,{value:"twitter",children:"Twitter Influencer Import"}),e(S,{value:"pinterest",children:"Pinterest Influencer Import"}),e(S,{value:"linkedin",children:"Linkedin Influencer Import"})]}),e(i,{sx:{display:"flex",justifyContent:"flex-end"},children:e(g,{variant:"contained",onClick:()=>v.handleOpen(),children:"Import Data"})})]})})}),e(K,{onClose:v.handleClose,open:v.open,onUpgrade:d,kind:r})]})};Q.propTypes={onDismiss:w.func};const Ge={arrows:!1,dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},ee=s=>{const{sx:r}=s,[a,v]=m.useState(!0),[d,h]=m.useState({title:"",content:""}),[o,T]=m.useState({title:"",content:""}),[f,k]=m.useState({title:"",content:""});a&&(()=>{axios.post("/api/get_tips",{}).then(n=>{n.data.length==3&&(h({title:n.data[0].tip_title,content:n.data[0].tip_content}),T({title:n.data[1].tip_title,content:n.data[1].tip_content}),k({title:n.data[2].tip_title,content:n.data[2].tip_content}),v(!1))})})();const I=n=>{n=="first"?axios.post("/api/update_tips",{id:1,tip_title:d.title,tip_content:d.content}).then(b=>{}):n=="second"?axios.post("/api/update_tips",{id:2,tip_title:o.title,tip_content:o.content}).then(b=>{}):n=="third"&&axios.post("/api/update_tips",{id:3,tip_title:f.title,tip_content:f.content}).then(b=>{})};return e(G,{sx:r,children:t(V,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[e(i,{sx:{mb:6},children:e("img",{src:"/assets/next-tip.svg"})}),e(i,{sx:{flexGrow:1,"& .slick-slider":{cursor:"grab"},"& .slick-slider, & .slick-list, & .slick-track":{height:"100%"},"& .slick-dots":{top:-50,bottom:"unset",left:-10,textAlign:"left"}},children:t(Oe,{...Ge,children:[t("div",{children:[e(i,{sx:{flexGrow:1,p:1},children:e(_,{value:d.title,onChange:n=>h({...d,title:n.target.value}),fullWidth:!0,label:"First Tip",name:"first_title",placeholder:"First Tip",InputLabelProps:{shrink:!0}})}),e(i,{sx:{flexGrow:1,p:1},children:e(_,{value:d.content,onChange:n=>h({...d,content:n.target.value}),fullWidth:!0,label:"First Tip Content",name:"first_content",placeholder:"First Tip Content",InputLabelProps:{shrink:!0}})}),e(i,{sx:{flexGrow:1,p:1},children:e(g,{size:"small",sx:{width:200},variant:"contained",onClick:()=>I("first"),children:"Save First Tip"})})]},d.title),t("div",{children:[e(i,{sx:{flexGrow:1,p:1},children:e(_,{value:o.title,onChange:n=>T({...o,title:n.target.value}),fullWidth:!0,label:"Second Tip",name:"second_title",placeholder:"Second Tip",InputLabelProps:{shrink:!0}})}),e(i,{sx:{flexGrow:1,p:1},children:e(_,{value:o.content,onChange:n=>T({...o,content:n.target.value}),fullWidth:!0,label:"Second Tip Content",name:"second_content",placeholder:"Second Tip Content",InputLabelProps:{shrink:!0}})}),e(i,{sx:{flexGrow:1,p:1},children:e(g,{size:"small",sx:{width:200},variant:"contained",onClick:()=>I("second"),children:"Save Second Tip"})})]},o.title),t("div",{children:[e(i,{sx:{flexGrow:1,p:1},children:e(_,{value:f.title,onChange:n=>k({...f,title:n.target.value}),fullWidth:!0,label:"Third Tip",name:"third_title",placeholder:"Third Tip",InputLabelProps:{shrink:!0}})}),e(i,{sx:{flexGrow:1,p:1},children:e(_,{value:f.content,onChange:n=>k({...f,content:n.target.value}),fullWidth:!0,label:"Third Tip Content",name:"third_content",placeholder:"Third Tip Content",InputLabelProps:{shrink:!0}})}),e(i,{sx:{flexGrow:1,p:1},children:e(g,{size:"small",sx:{width:200},variant:"contained",onClick:()=>I("third"),children:"Save Third Tip"})})]},f.title)]})})]})})};ee.propTypes={sx:w.object};const Ae=s=>{const{userinfo:r}=s,a=D();let v={time:new Date().getTime(),value:"email",expire:3e6},d=JSON.stringify(v);localStorage.setItem("time_token",d),me();const h=C();return m.useEffect(()=>{r.is_admin==0&&h("/dashboard")},[r]),t(F,{children:[e(ue,{title:"Dashboard: Overview"}),e(i,{component:"main",sx:{flexGrow:1,py:8},children:e(xe,{maxWidth:a.stretch?!1:"xl",children:t(p,{container:!0,disableEqualOverflow:!0,spacing:{xs:3,lg:4},children:[e(p,{xs:12,children:e(x,{direction:"row",justifyContent:"space-between",spacing:4,children:e("div",{children:e(l,{variant:"h4",children:"Overview"})})})}),e(p,{xs:12,md:4,children:e(H,{amount:31})}),e(p,{xs:12,md:4,children:e(Y,{amount:12})}),e(p,{xs:12,md:4,children:e(ge,{amount:5})}),e(p,{xs:12,md:6,children:e(ve,{})}),e(p,{xs:12,md:6,children:e(J,{})}),e(p,{xs:12,md:6,children:e(ee,{sx:{height:"100%"}})}),e(p,{xs:12,md:8,children:e(fe,{})}),e(p,{xs:12,md:4,children:e(Pe,{})}),e(p,{xs:12,md:6,children:e(q,{})}),e(p,{xs:12,md:6,children:e($,{})}),e(p,{xs:12,md:6,children:e(X,{})}),e(p,{xs:12,md:6,children:e(Z,{})}),e(p,{xs:12,md:6,children:e(Q,{})}),e(p,{xs:12,md:6,children:e(_e,{})}),e(p,{xs:12,md:6,children:e(Se,{})})]})})})]})},Re=s=>({userinfo:s.profile.userinfo}),rt=he(Re)(Ae);export{rt as default};