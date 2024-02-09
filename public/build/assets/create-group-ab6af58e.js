import{c as C,a as p}from"./index.esm-47fe247b.js";import{ap as _,d as e,T as v,w as F,c as N,aS as k,x as I,r as s,cp as T,o as G,j as i,F as W,S as j,l as t,aL as h,f as m,k as l,B as g,q as R,aN as B,R as O,c9 as f}from"./app-0b2379dc.js";/* empty css                   */import{u as P}from"./formik.esm-ed412f0b.js";const x=_(r=>e(v,{InputProps:{disableUnderline:!0},...r}))(({theme:r})=>({"& .MuiFilledInput-root":{fontWeight:"regular",color:"black",overflow:"hidden",borderRadius:10,backgroundColor:r.palette.mode==="light"?"#FFFFFF":"#1A2027",border:"3px solid",borderColor:r.palette.mode==="light"?"#FaFaFa":"#2D3843",transition:r.transitions.create(["border-color","background-color","box-shadow"]),"&:hover":{backgroundColor:"transparent"},"&.Mui-focused":{backgroundColor:"transparent",borderColor:r.palette.primary.main},"&.Mui-error":{border:"3px solid",borderRadius:7,borderColor:r.palette.error.main}}})),z=r=>{const{userinfo:o,groups:q}=r;N();const b=k(),u=I(),c=JSON.parse(localStorage.getItem("email"));s.useEffect(()=>{u(T({email:c}))},[u]),G();const y=C({group_name:p().max(255).required("This Field is required"),brief_group:p().max(2550).required("This Field is required")}),[d,V]=s.useState({group_name:"",brief_group:"",email:""});d.email=c;const a=P({initialValues:d,enableReinitialize:!0,validationSchema:y,onSubmit:n=>{if(o.is_admin!="1"){if(o.paid=="1"&&o.group_cnt>=5){f.error(`You are trying to create 6th outreach group this month.
 Please upgrade your membership. 
 `+o.time+"days left by renewal date.");return}else if(o.paid=="0"){f.error(`Trial user cannot create a outreach group .
 Please upgrade your membership.`);return}}axios.post("/api/newgroup",{group_name:n.group_name,email:n.email,brief_group:n.brief_group}).then(M=>{S(!0)})}}),[w,S]=s.useState(!1);return i(W,{children:[e(j,{title:"Dashboard: Create New Outreach Group"}),e(t,{component:"main",sx:{flexGrow:1},children:i(h,{maxWidth:b.stretch?!1:"xl",children:[e(m,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:3,children:e(t,{component:"form",sx:{flexGrow:1},children:e(l,{variant:"h4",sx:{mt:7,mb:0,fontSize:"32px"},children:"Create New Outreach Group"})})}),w?e(t,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,py:"80px"},children:i(h,{maxWidth:"lg",children:[e(t,{sx:{display:"flex",justifyContent:"center",mb:6},children:e(t,{alt:"Internal server error",component:"img",src:"/assets/errors/checked.png",sx:{height:"auto",maxWidth:"100%",width:145}})}),e(l,{align:"center",sx:{fontWeight:700,fontSize:28},children:"Successfully Created Outreach Group"}),e(l,{align:"center",color:"text.secondary",sx:{mt:.5,fontSize:16},children:"Now it’s time to recruit Influencers and build up this group"}),e(t,{sx:{display:"flex",justifyContent:"center",mt:2},children:e(g,{endIcon:e(R,{children:e(B,{})}),component:O,variant:"contained",href:"/dashboard/jobs/invite",children:"Invite On This Project"})})]})}):e(t,{sx:{p:.5},style:{boxShadow:"none"},children:i("form",{noValidate:!0,onSubmit:a.handleSubmit,className:"row",children:[e(m,{spacing:0,children:e("div",{className:"p-1 ",children:e(x,{variant:"filled",className:"title-inter ",style:{marginTop:11},error:!!(a.touched.group_name&&a.errors.group_name),label:"Full Name",name:"group_name",placeholder:"Name",fullWidth:!0,onBlur:a.handleBlur,onChange:a.handleChange,value:a.values.group_name})})}),e("div",{className:"p-1 px-3  ",children:e(x,{label:"Description",className:"title-inter ",name:"brief_group",variant:"filled",placeholder:"Write your description here...",multiline:!0,inputProps:{style:{height:"100px"}},fullWidth:!0,style:{marginTop:11},error:!!(a.touched.brief_group&&a.errors.brief_group),onBlur:a.handleBlur,onChange:a.handleChange,value:a.values.brief_group})}),e("div",{className:"p-1 px-3 d-flex  title-inter ",children:e(g,{className:"text-center  background-blue smallsize",variant:"contained",sx:{justifyContent:"center",width:"300px",minHeight:"48px",fontSize:"18px",mt:3},type:"submit",children:"Create New Outreach Group"})})]})})]})})]})},D=r=>({groups:r.outreachs.outreachs,userinfo:r.profile.userinfo}),H=F(D)(z);export{H as default};
