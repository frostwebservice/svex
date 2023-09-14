import{o as G,n as O,s as E,_ as B,co as P,r as n,x as H,y as Q,d as e,z as K,A as V,E as v,j as i,f as c,k as u,C as J,bv as Z,B as C,J as w,az as A,T as b,ba as L,a$ as R,O as F,bZ as $,c as q,F as X,S as Y,l as ee,ay as W}from"./app-51ffe495.js";import{Q as te}from"./quill-editor-d1d54b4b.js";import{M as N}from"./MobileDatePicker-bd1f817d.js";import{c as ne,d as ae,S as oe,a as re,b as ie}from"./Stepper-d26f27f7.js";import"./PureDateInput-8b832ec3.js";import"./Grid-c6cd7dbb.js";import"./createTheme-051259ec.js";function se(r){return G("MuiStepContent",r)}O("MuiStepContent",["root","last","transition"]);const le=["children","className","TransitionComponent","transitionDuration","TransitionProps"],ce=r=>{const{classes:a,last:d}=r;return V({root:["root",d&&"last"],transition:["transition"]},se,a)},de=E("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:d}=r;return[a.root,d.last&&a.last]}})(({ownerState:r,theme:a})=>B({marginLeft:12,paddingLeft:8+12,paddingRight:8,borderLeft:a.vars?`1px solid ${a.vars.palette.StepContent.border}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[600]}`},r.last&&{borderLeft:"none"})),pe=E(P,{name:"MuiStepContent",slot:"Transition",overridesResolver:(r,a)=>a.transition})({}),he=n.forwardRef(function(a,d){const p=H({props:a,name:"MuiStepContent"}),{children:o,className:l,TransitionComponent:g=P,transitionDuration:s="auto",TransitionProps:h}=p,x=Q(p,le);n.useContext(ne);const{active:y,last:T,expanded:D}=n.useContext(ae),S=B({},p,{last:T}),k=ce(S);let f=s;return s==="auto"&&!g.muiSupportAuto&&(f=void 0),e(de,B({className:K(k.root,l),ref:d,ownerState:S},x,{children:e(pe,B({as:g,in:y||D,className:k.transition,ownerState:S,timeout:f,unmountOnExit:!0},h,{children:o}))}))}),ue=he,j=[{description:"Best for small, friendly-pocket projects",title:"Freelancers",value:"freelancers"},{description:"Limited-time projects with highly experienced individuals",title:"Contractor",value:"contractor"},{description:"Unlimited term contracts",title:"Employees",value:"employees"}],U=r=>{const{onBack:a,onNext:d,...p}=r,[o,l]=n.useState(j[1].value),g=n.useCallback(s=>{l(s)},[]);return i(c,{spacing:3,...p,children:[e("div",{children:e(u,{variant:"h6",children:"I’m looking for..."})}),e(c,{spacing:2,children:j.map(s=>e(J,{sx:{alignItems:"center",cursor:"pointer",display:"flex",p:2,...o===s.value&&{backgroundColor:"primary.alpha12",boxShadow:h=>`${h.palette.primary.main} 0 0 0 1px`}},onClick:()=>g(s.value),variant:"outlined",children:i(c,{direction:"row",spacing:2,children:[e(Z,{checked:o===s.value,color:"primary"}),i("div",{children:[e(u,{variant:"subtitle1",children:s.title}),e(u,{color:"text.secondary",variant:"body2",children:s.description})]})]})},s.value))}),e("div",{children:e(C,{endIcon:e(w,{children:e(A,{})}),onClick:d,variant:"contained",children:"Continue"})})]})};U.propTypes={onBack:v.func,onNext:v.func};const z=r=>{const{onBack:a,onNext:d,...p}=r,[o,l]=n.useState(""),g=n.useCallback(s=>{l(s)},[]);return i(c,{spacing:3,...p,children:[e("div",{children:e(u,{variant:"h6",children:"How would you describe the job post?"})}),e(te,{onChange:g,placeholder:"Write something",sx:{height:400},value:o}),i(c,{alignItems:"center",direction:"row",spacing:2,children:[e(C,{endIcon:e(w,{children:e(A,{})}),onClick:d,variant:"contained",children:"Continue"}),e(C,{color:"inherit",onClick:a,children:"Back"})]})]})};z.propTypes={onBack:v.func,onNext:v.func};const I=r=>{const{onBack:a,onNext:d,...p}=r,[o,l]=n.useState(""),[g,s]=n.useState([]),[h,x]=n.useState(new Date("2022-09-22T11:41:50")),[y,T]=n.useState(new Date("2023-01-11T12:41:50")),D=n.useCallback(t=>{x(t)},[]),S=n.useCallback(t=>{T(t)},[]),k=n.useCallback(t=>{s(m=>[...m,t])},[]),f=n.useCallback(t=>{s(m=>m.filter(M=>M!==t))},[]);return i(c,{spacing:3,...p,children:[e("div",{children:e(u,{variant:"h6",children:"What is the job about?"})}),i(c,{spacing:3,children:[e(b,{fullWidth:!0,label:"Job Title",name:"jobTitle",placeholder:"e.g Salesforce Analyst"}),e(b,{fullWidth:!0,InputProps:{endAdornment:e(L,{position:"end",children:e(C,{color:"inherit",sx:{ml:2},onClick:()=>{o&&(k(o),l(""))},children:"Add"})})},label:"Tags",name:"tags",onChange:t=>l(t.target.value),value:o}),e(c,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:1,children:g.map((t,m)=>e(R,{label:t,onDelete:()=>f(t),variant:"outlined"},m))})]}),e("div",{children:e(u,{variant:"h6",children:"When is the project starting?"})}),i(c,{alignItems:"center",direction:"row",spacing:3,children:[e(N,{label:"Start Date",inputFormat:"MM/dd/yyyy",value:h,onChange:D,renderInput:t=>e(b,{...t})}),e(N,{label:"End Date",inputFormat:"MM/dd/yyyy",value:y,onChange:S,renderInput:t=>e(b,{...t})})]}),i(c,{alignItems:"center",direction:"row",spacing:2,children:[e(C,{endIcon:e(w,{children:e(A,{})}),onClick:d,variant:"contained",children:"Continue"}),e(C,{color:"inherit",onClick:a,children:"Back"})]})]})};I.propTypes={onBack:v.func,onNext:v.func};const _=r=>{const{onBack:a,onNext:d,...p}=r,[o,l]=n.useState(""),[g,s]=n.useState([]),[h,x]=n.useState(new Date("2022-09-22T11:41:50")),[y,T]=n.useState(new Date("2023-01-11T12:41:50")),D=n.useCallback(t=>{x(t)},[]),S=n.useCallback(t=>{T(t)},[]),k=n.useCallback(t=>{s(m=>[...m,t])},[]),f=n.useCallback(t=>{s(m=>m.filter(M=>M!==t))},[]);return i(c,{spacing:3,...p,children:[e("div",{children:e(u,{variant:"h6",children:"What is the job about?"})}),i(c,{spacing:3,children:[e(b,{fullWidth:!0,label:"Job Title",name:"jobTitle",placeholder:"e.g Salesforce Analyst"}),e(b,{fullWidth:!0,InputProps:{endAdornment:e(L,{position:"end",children:e(C,{color:"inherit",sx:{ml:2},onClick:()=>{o&&(k(o),l(""))},children:"Add"})})},label:"Tags",name:"tags",onChange:t=>l(t.target.value),value:o}),e(c,{alignItems:"center",direction:"row",flexWrap:"wrap",spacing:1,children:g.map((t,m)=>e(R,{label:t,onDelete:()=>f(t),variant:"outlined"},m))})]}),e("div",{children:e(u,{variant:"h6",children:"When is the project starting?"})}),i(c,{alignItems:"center",direction:"row",spacing:3,children:[e(N,{label:"Start Date",inputFormat:"MM/dd/yyyy",value:h,onChange:D,renderInput:t=>e(b,{...t})}),e(N,{label:"End Date",inputFormat:"MM/dd/yyyy",value:y,onChange:S,renderInput:t=>e(b,{...t})})]}),i(c,{alignItems:"center",direction:"row",spacing:2,children:[e(C,{endIcon:e(w,{children:e(A,{})}),onClick:d,variant:"contained",children:"Create Job"}),e(C,{color:"inherit",onClick:a,children:"Back"})]})]})};_.propTypes={onBack:v.func,onNext:v.func};const ge=()=>i(c,{spacing:2,children:[i("div",{children:[e(F,{sx:{backgroundColor:"success.main",color:"success.contrastText",height:40,width:40},children:e(w,{children:e($,{})})}),e(u,{variant:"h6",sx:{mt:2},children:"All done!"}),e(u,{color:"text.secondary",variant:"body2",children:"Here’s a preview of your newly created job"})]}),e(J,{variant:"outlined",children:i(c,{alignItems:"center",direction:"row",flexWrap:"wrap",justifyContent:"space-between",sx:{px:2,py:1.5},children:[i("div",{children:[e(u,{variant:"subtitle1",children:"Senior Backend Engineer"}),e(u,{color:"text.secondary",variant:"caption",children:"Remote possible • $150k - $210K"})]}),i(c,{alignItems:"center",direction:"row",spacing:2,children:[e(u,{color:"text.secondary",variant:"caption",children:"1 minute ago"}),e(C,{size:"small",children:"Apply"})]})]})})]}),me=r=>{const{active:a,completed:d,icon:p}=r;return e(F,{sx:{height:40,width:40,...(a||d)&&{backgroundColor:"primary.main",color:"primary.contrastText"}},variant:"rounded",children:d?e(w,{children:e($,{})}):p})},Ce=()=>{const[r,a]=n.useState(0),[d,p]=n.useState(!1),o=n.useCallback(()=>{a(h=>h+1)},[]),l=n.useCallback(()=>{a(h=>h-1)},[]),g=n.useCallback(()=>{p(!0)},[]),s=n.useMemo(()=>[{label:" Brief Summery",content:e(U,{onBack:l,onNext:o})},{label:"Social Details",content:e(I,{onBack:l,onNext:o})},{label:"Compensation Details",content:e(I,{onBack:l,onNext:o})},{label:"Shortout Instruction",content:e(z,{onBack:l,onNext:o})},{label:"Exclusions",content:e(I,{onBack:l,onNext:o})},{label:"Share",content:e(I,{onBack:l,onNext:o})},{label:"Review",content:e(_,{onBack:l,onNext:g})}],[l,o,g]);return d?e(ge,{}):e(oe,{activeStep:r,orientation:"vertical",sx:{"& .MuiStepConnector-line":{borderLeftColor:"divider",borderLeftWidth:2,ml:1}},children:s.map((h,x)=>{const y=r===x;return i(re,{children:[e(ie,{StepIconComponent:me,children:e(u,{sx:{ml:2},variant:"overline",children:h.label})}),e(ue,{sx:{borderLeftColor:"divider",borderLeftWidth:2,ml:"20px",...y&&{py:4}},children:h.content})]},h.label)})})},we=()=>(q(),i(X,{children:[e(Y,{title:"Dashboard: Job Create"}),e(ee,{component:"main",sx:{display:"flex",flexGrow:1},children:i(W,{container:!0,sx:{flexGrow:1},children:[e(W,{xs:12,sm:4,sx:{backgroundImage:"url(/assets/people-talking.png)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",display:{xs:"none",md:"block"}}}),e(W,{xs:12,md:8,sx:{p:{xs:4,sm:6,md:8}},children:i(c,{maxWidth:"sm",spacing:3,children:[e(u,{variant:"h4",children:"Create Job Ad"}),e(Ce,{})]})})]})})]}));export{we as default};
