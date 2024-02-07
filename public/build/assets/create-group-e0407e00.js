import{c as w,a as u}from"./index.esm-85d2d2f9.js";import{am as y,d as e,T as C,w as v,c as F,aS as N,x as _,r as n,cj as k,o as I,j as o,F as T,S as j,l as a,aL as p,f as h,k as s,B as m,q as G,aN as W,R}from"./app-882aa423.js";/* empty css                   */import{u as B}from"./formik.esm-61a22206.js";const g=y(t=>e(C,{InputProps:{disableUnderline:!0},...t}))(({theme:t})=>({"& .MuiFilledInput-root":{fontWeight:"regular",color:"black",overflow:"hidden",borderRadius:10,backgroundColor:t.palette.mode==="light"?"#FFFFFF":"#1A2027",border:"3px solid",borderColor:t.palette.mode==="light"?"#FaFaFa":"#2D3843",transition:t.transitions.create(["border-color","background-color","box-shadow"]),"&:hover":{backgroundColor:"transparent"},"&.Mui-focused":{backgroundColor:"transparent",borderColor:t.palette.primary.main},"&.Mui-error":{border:"3px solid",borderRadius:7,borderColor:t.palette.error.main}}})),O=t=>{F();const x=N(),l=_(),c=JSON.parse(localStorage.getItem("email"));n.useEffect(()=>{l(k({email:c}))},[l]),I();const f=w({group_name:u().max(255).required("This Field is required"),brief_group:u().max(2550).required("This Field is required")}),[d,D]=n.useState({group_name:"",brief_group:"",email:""});d.email=c;const r=B({initialValues:d,enableReinitialize:!0,validationSchema:f,onSubmit:i=>{axios.post("/api/newgroup",{group_name:i.group_name,email:i.email,brief_group:i.brief_group}).then(q=>{S(!0)})}}),[b,S]=n.useState(!1);return o(T,{children:[e(j,{title:"Dashboard: Create New Outreach Group"}),e(a,{component:"main",sx:{flexGrow:1},children:o(p,{maxWidth:x.stretch?!1:"xl",children:[e(h,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,children:e(a,{component:"form",sx:{flexGrow:1},children:e(s,{variant:"h4",sx:{mt:7,mb:0,fontSize:"32px"},children:"Create New Outreach Group"})})}),b?e(a,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,py:"80px"},children:o(p,{maxWidth:"lg",children:[e(a,{sx:{display:"flex",justifyContent:"center",mb:6},children:e(a,{alt:"Internal server error",component:"img",src:"/assets/errors/checked.png",sx:{height:"auto",maxWidth:"100%",width:145}})}),e(s,{align:"center",sx:{fontWeight:700,fontSize:28},children:"Successfully Created Outreach Group"}),e(s,{align:"center",color:"text.secondary",sx:{mt:.5,fontSize:16},children:"Now it’s time to recruit Influencers and build up this group"}),e(a,{sx:{display:"flex",justifyContent:"center",mt:2},children:e(m,{endIcon:e(G,{children:e(W,{})}),component:R,variant:"contained",href:"/dashboard/jobs/invite",children:"Invite On This Project"})})]})}):e(a,{sx:{p:.5},style:{boxShadow:"none"},children:o("form",{noValidate:!0,onSubmit:r.handleSubmit,className:"row",children:[e(h,{spacing:0,children:e("div",{className:"p-1 ",children:e(g,{variant:"filled",className:"title-inter ",style:{marginTop:11},error:!!(r.touched.group_name&&r.errors.group_name),label:"Full Name",name:"group_name",placeholder:"Name",fullWidth:!0,onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.group_name})})}),e("div",{className:"p-1 px-3  ",children:e(g,{label:"Description",className:"title-inter ",name:"brief_group",variant:"filled",placeholder:"Write your description here...",multiline:!0,inputProps:{style:{height:"100px"}},fullWidth:!0,style:{marginTop:11},error:!!(r.touched.brief_group&&r.errors.brief_group),onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.brief_group})}),e("div",{className:"p-1 px-3 d-flex  title-inter ",children:e(m,{className:"text-center  background-blue smallsize",variant:"contained",sx:{justifyContent:"center",width:"300px",minHeight:"48px",fontSize:"18px",mt:3},type:"submit",children:"Create New Outreach Group"})})]})})]})})]})},z=t=>({groups:t.outreachs.outreachs}),E=v(z)(O);export{E as default};
