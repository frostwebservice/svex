import{d as e,C as w,f as m,D as F,j as i,k as c,P as j,o as M,r as l,w as W,F as x,e as O,E as T,R as v,p as I,L,aN as k,B as u,q as b,c0 as z,l as B,c6 as E}from"./app-01974f4f.js";import{g as P}from"./get-initials-d1c6cec7.js";import{H as N}from"./Heart-06225fd3.js";import{M as R}from"./mail-composer-257fc70b.js";const q=h=>{const{followers:a,engagement:s,category:f,...p}=h;return e(w,{variant:"outlined",...p,children:e(m,{divider:e(F,{}),children:i(m,{alignItems:"center",direction:"row",flexWrap:"wrap",sx:{px:2,py:1.5},children:[i(m,{alignItems:"flex-start",spacing:2,direction:{xs:"column",sm:"column",md:"column"},sx:{mr:10},children:[e(c,{color:"text.primary",noWrap:!0,variant:"overline",sx:{fontSize:14,fontWeight:700},children:a}),e(c,{color:"text.secondary",noWrap:!0,sx:{fontSize:12},children:"Followers"})]}),i(m,{alignItems:"flex-start",spacing:2,direction:{xs:"column",sm:"column",md:"column"},sx:{mr:10},children:[e(c,{color:"text.primary",noWrap:!0,variant:"overline",sx:{fontSize:14,fontWeight:700},children:s}),e(c,{color:"text.secondary",noWrap:!0,sx:{fontSize:12},children:"Engagement rate"})]}),i(m,{alignItems:"flex-start",spacing:2,direction:{xs:"column",sm:"column",md:"column"},sx:{mr:10},children:[e(c,{color:"text.primary",noWrap:!0,variant:"overline",sx:{fontSize:14,fontWeight:700},children:"Categories"}),e(c,{color:"text.secondary",noWrap:!0,sx:{fontSize:12},children:f})]})]})})})},D=()=>{const h={isFullScreen:!1,isOpen:!1,message:"",subject:"",toemail:"",to:""},[a,s]=l.useState(h),f=()=>{s(t=>({...t,isOpen:!0}))},p=l.useCallback(()=>{s(h)},[]),g=l.useCallback(()=>{s(t=>({...t,isFullScreen:!0}))},[]),r=l.useCallback(()=>{s(t=>({...t,isFullScreen:!1}))},[]),S=l.useCallback(t=>{},[]),C=l.useCallback(t=>{s(d=>({...d,subject:t}))},[]),y=l.useCallback(t=>{s(d=>({...d,to:t}))},[]);return{...a,handleClose:p,handleMaximize:g,handleMessageChange:S,handleMinimize:r,handleOpen:f,handleSubjectChange:C,handleToChange:y}},J=h=>{const{influencer:a,currentTab:s,...f}=h;M();const[p,g]=l.useState(a.liked==1),r=D(),S=W();l.useEffect(()=>{g(a.liked==1)},[a]);const C=()=>{g(!0);let n={email:JSON.parse(localStorage.getItem("email")),tab:s,inf_id:a.id,liked:"1"};axios.post("/api/handle_like",n).then(o=>{o.data.status})},y=()=>{g(!1);let n={email:JSON.parse(localStorage.getItem("email")),tab:s,inf_id:a.id,liked:"0"};axios.post("/api/handle_like",n).then(o=>{o.data.status===200&&S(E({email:JSON.parse(localStorage.getItem("email"))}))})},t=n=>Number(n)<=1?Number(n).toFixed(2)+"%":_(Number(n).toFixed(1)).replace(".0","")+"%",d=[{divider:1e18,suffix:"E"},{divider:1e15,suffix:"P"},{divider:1e12,suffix:"T"},{divider:1e9,suffix:"G"},{divider:1e6,suffix:"M"},{divider:1e3,suffix:"K"}],_=n=>{for(var o=0;o<d.length;o++)if(n>=d[o].divider)return Number(n/d[o].divider).toFixed(1).toString().replace(".0","")+d[o].suffix;return n.toString()};return i(x,{children:[e(w,{...f,style:{marginTop:30,marginBottom:30},children:i(O,{children:[i(m,{alignItems:"center",direction:"row",flexWrap:"wrap",justifyContent:"space-between",sx:{px:2,py:1.5},children:[i(m,{alignItems:"flex-start",spacing:2,direction:{xs:"column",sm:"row"},children:[e(T,{component:v,href:I.dashboard.jobs.companies.details,src:a.profile_pic_url_hd?a.profile_pic_url_hd:`https://ui-avatars.com/api/?name=${a.full_name?a.full_name:""}&background=2970FF&color=fff&rounded=true`,sx:{width:74,height:74},children:P(a.full_name)}),i("div",{children:[e(L,{color:"#2970FF",component:v,href:I.dashboard.jobs.companies.details,variant:"h6",style:{fontSize:18},children:a.username}),a.verified&&a.verified==1||a.verified&&a.verified==1?e("div",{className:"verified-image"}):"",e(c,{sx:{color:"text.primary"},style:{fontSize:14},children:a.full_name}),e(c,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),e(c,{color:"primary",variant:"overline",style:{fontSize:10},children:a.city+", "+a.Country})]}),e("div",{className:"custom-reach",children:i(k,{container:!0,children:[i(k,{item:!0,sx:{color:"#2970FF",fontSize:"11px",fontWeight:300,pl:1,pr:1,pt:.5,pb:.5},children:[e("div",{children:"Reach"}),e("div",{style:{fontSize:"16px",fontWeight:700},children:_(a.follower_count?a.follower_count:a.subscribers)})]}),e(k,{item:!0,style:{display:"flex",alignItems:"center",margin:"0 auto"},children:e("div",{className:"reach-arrow"})})]})})]}),e(m,{alignItems:"center",direction:"row",className:"right-panel",spacing:2,children:p?i(x,{children:[e(u,{onClick:y,className:"right-btn",startIcon:e(b,{sx:{transform:"scale(1.8)",color:"error.main","& path":{fill:n=>n.palette.error.main,fillOpacity:1}},children:e(N,{})})}),e(u,{component:v,href:"/profile/inf/"+a.username,sx:{color:"text.primary"},size:"small",className:"right-btn",startIcon:e(x,{children:e("img",{src:"/assets/icons/icon-profile.svg"})}),variant:"outlined",children:"View Profile"}),e(u,{onClick:r.handleOpen,size:"small",className:"right-btn",startIcon:e(b,{children:e(z,{})}),variant:"contained",children:"Send Message"})]}):i(x,{children:[e(u,{onClick:C,className:"right-btn",startIcon:e(b,{sx:{transform:"scale(1.8)"},children:e(N,{})})}),e(u,{component:v,href:"/profile/inf/"+a.username,size:"small",className:"right-btn",startIcon:e(x,{children:e("img",{src:"/assets/icons/icon-profile.svg"})}),variant:"outlined",children:"View Profile"}),e(u,{onClick:r.handleOpen,size:"small",className:"right-btn",startIcon:e(b,{children:e(z,{})}),variant:"contained",children:"Send Message"})]})})]}),e(B,{sx:{mt:2},children:e(q,{engagement:t(a.engagement_rate),followers:_(a.follower_count?a.follower_count:a.subscribers),category:a.category_niche})})]})}),e(R,{maximize:r.isFullScreen,message:r.message,onClose:r.handleClose,onMessageChange:r.handleMessageChange,onMinimize:r.handleMinimize,onSubjectChange:r.handleSubjectChange,onToChange:r.handleToChange,open:r.isOpen,subject:r.subject,to:a.full_name,avatar:a.profile_pic_url_hd,toemail:a.public_email})]})};J.propTypes={influencer:j.object.isRequired};export{J as I};