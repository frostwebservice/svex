import{v as de,r as l,c as me,cC as he,aT as pe,w as ge,o as be,x as S,$ as d,j as i,F as fe,d as t,S as ye,l as h,aM as ve,B as v,q as B,f as p,aG as Ce,bs as ke,E as xe,k as C,C as Se,e as L,aN as n,T as o,R as Be,cM as we}from"./app-28409791.js";import{I as R}from"./Image01-62084de8.js";import{F as Te}from"./file-uploader-6aa9c9c3.js";import{C as Ie}from"./Camera01-612eb571.js";import{G as Ne,a as We}from"./minimal-4213aba3.js";import"./social-post-card-0ca0d9e5.js";import{b as V}from"./social-timeline-d8295379.js";import{M as Me}from"./MultiSelectAll-43f3ff85.js";/* empty css                */import{u as Ae}from"./formik.esm-1e77ad01.js";import{c as qe,a as c}from"./index.esm-7e958d2a.js";import{C as H}from"./CardHeader-aec27fa6.js";import{A as ze}from"./Alert-af96c0e8.js";import"./file-dropzone-4264d9e6.js";import"./tslib.es6-af7906ce.js";import"./Upload01-a210d736.js";import"./bytes-to-size-706bbf81.js";import"./Clock-d913e05a.js";import"./Heart-95faea7b.js";import"./Share07-cee1bd5c.js";import"./index-1ce55d6b.js";import"./FaceSmile-7129a273.js";import"./Link01-0f61e6e3.js";import"./Attachment01-05972069.js";import"./Plus-cc06a2e0.js";import"./use-mocked-user-2f7e8148.js";import"./get-initials-d1c6cec7.js";import"./CardMedia-1eebfc74.js";import"./social-post-add-12a0723c.js";import"./jsx-runtime_commonjs-proxy-bc3cfa4a.js";import"./isEqual-ad13762f.js";import"./debounce-750f9eb9.js";import"./Autocomplete-38ec8425.js";import"./Close-88770d8a.js";import"./ListSubheader-d36bc495.js";import"./Grid-40d0546e.js";const Fe=[{label:"Acne and Skin Care",value:"Acne and Skin Care"},{label:"Alcohol",value:"Alcohol"},{label:"Art",value:"Art"},{label:"Baby and Maternity",value:"Baby and Maternity"},{label:"Blockchain and Cryptocurrency",value:"Blockchain and Cryptocurrency"},{label:"Books and Fiction",value:"Books and Fiction"},{label:"Business and Career",value:"Business and Career"},{label:"Cameras, Photography and Videography",value:"Cameras, Photography and Videography"},{label:"Cars and Vehicles",value:"Cars and Vehicles"},{label:"Cooking and Recipes",value:"Cooking and Recipes"},{label:"Crafts and DIY",value:"Crafts and DIY"},{label:"Diet and Weight Loss",value:"Diet and Weight Loss"},{label:"Digital Marketing and Making Money Online",value:"Digital Marketing and Making Money Online"},{label:"Exercise and Fitness",value:"Exercise and Fitness"},{label:"Farming",value:"Farming"},{label:"Gardening and Lawn Care",value:"Gardening and Lawn Care"},{label:"Health",value:"Health"},{label:"Makeup and Beauty",value:"Makeup and Beauty"},{label:"Martial Arts",value:"Martial Arts"},{label:"Music and Instruments",value:"Music and Instruments"},{label:"Outdoors and Hiking",value:"Outdoors and Hiking"},{label:"Pets and Animal Care",value:"Pets and Animal Care"},{label:"Sports",value:"Sports"},{label:"Technology and Gadgets",value:"Technology and Gadgets"},{label:"Travel",value:"Travel"},{label:"Wedding",value:"Wedding"},{label:"OK",value:"OK"}],Pe=f=>{const $=JSON.parse(localStorage.getItem("email")),[w,k]=l.useState(!1),[T,u]=l.useState(!1),[I,U]=l.useState(!1),[N,J]=l.useState(""),K=qe({firstname:c().max(255).required("This field is required"),lastname:c().max(255).required("This field is required"),phonenumber:c().max(255).required("This field is required"),companyname:c().max(255).required("This field is required"),companywebsite:c().max(255).required("This field is required"),budget:c().max(255).required("This field is required"),companyfounded:c().max(255).required("This field is required"),companysize:c().max(255).required("This field is required"),aboutbusiness:c().required("This field is required")}),[s,g]=l.useState({firstname:"",lastname:"",phonenumber:"",companyname:"",companywebsite:"",companylocation:"",budget:"",companyfounded:"",companysize:"",aboutbusiness:"",instagram:"",tiktok:"",youtube:"",facebook:"",twitter:"",pinterest:"",linkedin:"",blogurl:"",email:""});s.email=$;const[W,j]=l.useState("1"),[Y,M]=l.useState(!1),[_,Q]=l.useState([]),X=()=>{M(!1)},e=Ae({initialValues:s,enableReinitialize:!0,validationSchema:K,onSubmit:r=>{r.nichecategory=G,axios.post("/api/edit-profile",r).then(m=>{m.data.status===200&&(g({firstname:"",lastname:"",phonenumber:"",companyname:"",companywebsite:"",companylocation:"",budget:"",companyfounded:"",companysize:"",aboutbusiness:"",instagram:"",tiktok:"",youtube:"",facebook:"",twitter:"",pinterest:"",linkedin:"",blogurl:""}),b(S({email:JSON.parse(localStorage.getItem("email"))})),F("/profile/"+a.firstname+"-"+a.lastname+"-"+a.id)),m.data.status==="failed"&&M(!0)})}});me();const[Ge,A]=l.useState(!1),y=he(),Z=pe(),[ee,q]=l.useState("cover"),{brandinfo:z,userinfo:a}=f,[x,ae]=l.useState(0),b=ge(),F=be();l.useEffect(()=>{b(S({email:JSON.parse(localStorage.getItem("email"))}))},[b]);const[P,te]=l.useState(""),ne=()=>{b(we({brandID:window.location.pathname.split("/")[3]})),b(S({email:JSON.parse(localStorage.getItem("email"))})),te(P+"a")},E=()=>{q("avatar"),y.handleOpen()},oe=()=>{alert("dsf")};l.useEffect(()=>{let r=document.getElementsByClassName("geoapify-autocomplete-input")[0];if(I&&s.companylocation===""&&(r.setAttribute("required",""),u(!0)),!s.companylocation&&I?u(!0):u(!1),w&&u(!1),x<5&&a){const m=JSON.parse(localStorage.getItem("app.settings")).paletteMode;if(d(".geoapify-autocomplete-input").length>0&&(m=="dark"&&(d(".geoapify-autocomplete-input").addClass("custom-multiselect"),d(".geoapify-close-button").addClass("custom-close")),m=="light"&&(d(".geoapify-autocomplete-input").removeClass("custom-multiselect"),d(".geoapify-close-button").removeClass("custom-close"))),a){let O=[];a.niches.map(D=>{O.push({value:D.niche,label:D.niche})}),Q(O),j(W+"aa")}console.log(x),console.log(a),g({...s,nichecategory:a?G:"",firstname:a?a.firstname:"",lastname:a?a.lastname:"",phonenumber:a?a.phonenumber:"",companyname:a?a.companyname:"",companywebsite:a?a.companywebsite:"",companylocation:a?a.companylocation:"",budget:a?a.budget:"",companyfounded:a?a.companyfounded:"",companysize:a?a.companysize:"",aboutbusiness:a?a.aboutbusiness:"",instagram:a?a.instagram:"",tiktok:a?a.tiktok:"",youtube:a?a.youtube:"",facebook:a?a.facebook:"",twitter:a?a.twitter:"",pinterest:a?a.pinterest:"",linkedin:a?a.linkedin:"",blogurl:a?a.blogurl:""}),a.id!=0&&ae(x+1),document.getElementsByClassName("geoapify-autocomplete-input")[0].value=a?a.companylocation:""}window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",m=>re(m.matches?"dark":"light"))});const re=r=>{setMode(r),alert(r==="dark"?"dark":"remove dark")},le=r=>{A(!0),r!=null?(g({...e.values,companylocation:r.properties.formatted}),u(!1)):(g({...e.values,companylocation:""}),u(!0),k(!1))};d(".geoapify-autocomplete-input").on("focusout",function(){(d(".geoapify-autocomplete-input")[0].value==""||d(".geoapify-autocomplete-input")[0].value==" ")&&(s.companylocation===""||!s.companylocation||s.companylocation===" ")&&(g({...e.values,companylocation:""}),u(!0),k(!1),J(N+"a")),A(!1)});const ie=r=>{k(!0),u(!1),U(!0),document.getElementsByClassName("geoapify-autocomplete-input")[0].value==""&&(document.getElementsByClassName("geoapify-autocomplete-input")[0].value=" ")},se=()=>{document.getElementsByClassName("geoapify-autocomplete-input")[0].click(),document.getElementsByClassName("geoapify-autocomplete-input")[0].focus()},[G,ce]=l.useState([]),ue=r=>{ce(r)};return i(fe,{children:[t(ye,{title:"Dashboard: Social Profile"}),t(h,{component:"main",sx:{flexGrow:1,py:8},children:i(ve,{maxWidth:Z.stretch?!1:"xl",children:[t(h,{style:{backgroundImage:`url(${a.cover_photo?a.cover_photo:"/assets/covers/abstract-1-4x3-large.png"})`},sx:{backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:1,height:421,position:"relative"},children:a&&z&&a.id==a.id?t(v,{onClick:()=>{q("cover"),y.handleOpen()},startIcon:t(B,{children:t(R,{})}),sx:{backgroundColor:V[900],bottom:{lg:24,xs:"auto"},color:"common.white",position:"absolute",right:24,top:{lg:"auto",xs:24},"&:hover":{backgroundColor:V[900]}},variant:"contained",children:"Change Cover"}):""},P),i(p,{alignItems:"center",direction:"row",className:"custom-parent",spacing:2,sx:{mt:4},children:[i(p,{alignItems:"center",direction:"row",className:"custom-avatar",spacing:2,children:[i(h,{sx:{borderRadius:"50%",height:140,width:140,position:"relative"},children:[t(h,{onClick:E,sx:{alignItems:"center",backgroundColor:r=>Ce(r.palette.neutral[700],.5),borderRadius:"50%",color:"common.white",cursor:"pointer",display:"flex",height:"23%",width:"23%",justifyContent:"center",right:"5px",bottom:"15px",opacity:.7,position:"absolute",zIndex:1,"&:hover":{opacity:1}},children:t(p,{alignItems:"center",direction:"row",spacing:1,children:t(B,{color:"inherit",children:t(Ie,{})})})}),t(h,{component:ke,sx:{alignItems:"center",display:"flex",borderWidth:2,borderStyle:"solid",borderColor:"divider",height:140,width:140,borderRadius:"50%"},children:t(xe,{onClick:E,src:a.avatar?a.avatar:`https://ui-avatars.com/api/?name=${a.companyname}&background=2970FF&color=fff&rounded=true`,sx:{height:130,width:130},style:{cursor:"pointer"}})})]}),i("div",{className:"brand-info",children:[t(C,{color:"primary",variant:"h6",style:{fontSize:22},children:a?a.fullname:""}),i(C,{color:"text.secondary",className:"font-inter",variant:"subtitle2",style:{fontSize:12,fontWeight:600,marginTop:4},children:["Established since ",a?a.companyfounded:""]}),t(C,{color:"text.secondary",className:"font-inter location-pointer",variant:"overline",style:{fontSize:12,marginTop:17}}),t(C,{color:"primary",variant:"overline",className:"font-inter",style:{fontSize:13},children:a?a.companylocation:""})]})]}),t(h,{sx:{flexGrow:1}}),a&&z&&a.id===a.id?t(p,{alignItems:"center",direction:"row",spacing:2,className:"button-bar",sx:{display:{md:"block"}},children:t(v,{size:"small",className:"social-btn",startIcon:t(B,{children:t(R,{})}),onClick:()=>{F("/profile/"+a.firstname+"-"+a.lastname+"-"+a.id)},variant:"contained",children:"View Profile"})}):""]}),t(p,{spacing:4,sx:{mt:10},children:t("form",{onSubmit:e.handleSubmit,children:i(Se,{children:[t(H,{title:"General Business Information"}),t(L,{sx:{pt:0},children:i(n,{container:!0,spacing:3,children:[t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.firstname&&e.errors.firstname),fullWidth:!0,helperText:e.touched.firstname&&e.errors.firstname,label:"First name",name:"firstname",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.firstname})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.lastname&&e.errors.lastname),fullWidth:!0,helperText:e.touched.lastname&&e.errors.lastname,label:"Last name",name:"lastname",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.lastname})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.phonenumber&&e.errors.phonenumber),fullWidth:!0,helperText:e.touched.phonenumber&&e.errors.phonenumber,label:"Phone number",name:"phonenumber",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.phonenumber})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.companyname&&e.errors.companyname),fullWidth:!0,helperText:e.touched.companyname&&e.errors.companyname,label:"Company name",name:"companyname",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.companyname})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.companywebsite&&e.errors.companywebsite),fullWidth:!0,helperText:e.touched.companywebsite&&e.errors.companywebsite,label:"Company website",name:"companywebsite",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.companywebsite})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.companyfounded&&e.errors.companyfounded),fullWidth:!0,helperText:e.touched.companyfounded&&e.errors.companyfounded,label:"Company founded",name:"companyfounded",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.companyfounded})}),t(n,{xs:12,md:6,children:t("div",{className:"p-2 location-bar",style:{position:"relative"},children:i(Ne,{apiKey:"1040c1c2e3e34b3b80b351a587232b75",children:[t(We,{placeholder:" ",onUserInput:ie,placeSelect:le,className:"sfsdf"},N),t("div",{onLoad:oe,onClick:se,className:`${w||a.companylocation&&s.companylocation!=""?"location-placeholder-top":"location-placeholder-general"} ${T?"location-placeholder-error":""}`,children:"Company Location"}),T?t("div",{className:"location-error",children:"Invalid address"}):""]})})}),i(n,{xs:12,md:6,children:[t(n,{item:!0,xs:12,sx:{p:0},children:t(Me,{sx:{maxheight:"700px"},items:Fe,selectAllLabel:"Select All",value:_,placeholder:"sss",onChange:ue},W)}),Y&&t(ze,{severity:"info",onClose:X,children:"Niche category field should not over 5 items"})]}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.budget&&e.errors.budget),fullWidth:!0,helperText:e.touched.budget&&e.errors.budget,label:"Budget",name:"budget",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.budget})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.companysize&&e.errors.companysize),fullWidth:!0,helperText:e.touched.companysize&&e.errors.companysize,label:"Company Size",name:"companysize",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.companysize})}),t(n,{xs:12,md:12,children:t(o,{label:"Bio",className:"title-inter ",name:"aboutbusiness",variant:"filled",multiline:!0,inputProps:{style:{height:"110px"}},fullWidth:!0,style:{marginTop:11},error:!!(e.touched.aboutbusiness&&e.errors.aboutbusiness),onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.aboutbusiness,helperText:"Describe your influencer marketing goals and ambitions using SocialVex"})})]})}),t(H,{title:"Social Media Handles"}),t(L,{sx:{pt:0},children:i(n,{container:!0,spacing:3,children:[t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.instagram&&e.errors.instagram),fullWidth:!0,helperText:e.touched.instagram&&e.errors.instagram,label:"Instagram handle",name:"instagram",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.instagram})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.tiktok&&e.errors.tiktok),fullWidth:!0,helperText:e.touched.tiktok&&e.errors.tiktok,label:"Tiktok handle",name:"tiktok",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.tiktok})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.youtube&&e.errors.youtube),fullWidth:!0,helperText:e.touched.youtube&&e.errors.youtube,label:"Youtube handle",name:"youtube",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.youtube})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.facebook&&e.errors.facebook),fullWidth:!0,helperText:e.touched.facebook&&e.errors.facebook,label:"Facebook handle",name:"facebook",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.facebook})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.twitter&&e.errors.twitter),fullWidth:!0,helperText:e.touched.twitter&&e.errors.twitter,label:"Twitter handle",name:"twitter",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.twitter})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.pinterest&&e.errors.pinterest),fullWidth:!0,helperText:e.touched.pinterest&&e.errors.pinterest,label:"Pinterest handle",name:"pinterest",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.pinterest})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.linkedin&&e.errors.linkedin),fullWidth:!0,helperText:e.touched.linkedin&&e.errors.linkedin,label:"Linkedin handle",name:"linkedin",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.linkedin})}),t(n,{xs:12,md:6,children:t(o,{error:!!(e.touched.blogurl&&e.errors.blogurl),fullWidth:!0,helperText:e.touched.blogurl&&e.errors.blogurl,label:"Blog URL",name:"blogurl",onBlur:e.handleBlur,onChange:e.handleChange,value:e.values.blogurl})})]})}),i(p,{direction:{xs:"column",sm:"row"},flexWrap:"wrap",spacing:3,sx:{p:3},children:[t(v,{type:"submit",variant:"contained",children:"Update"}),t(v,{color:"inherit",component:Be,href:"/profile/"+a.firstname+"-"+a.lastname+"-"+a.id,children:"Cancel"})]})]})})})]})}),t(Te,{onClose:y.handleClose,open:y.open,onUpgrade:ne,kind:ee})]})},Ee=f=>({brandinfo:f.profile.brandinfo,userinfo:f.profile.userinfo}),Ca=de(Ee)(Pe);export{Ca as default};
