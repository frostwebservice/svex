import{P as p,d,r as g,t as M,o as $,j as f,F as V,S as G,l as q,L as I,R as K,q as J,A as X,k as C,C as Y,p as Q,e as Z,f as ee,m as te,i as re,B as ae,s as ne}from"./app-614b2243.js";import{c as ie,a as S,d as oe,b as se}from"./index.esm-c4a246ed.js";import{u as ce}from"./formik.esm-51609d5f.js";import{R as O}from"./TextfieldStyle-69f1c9ee.js";/* empty css             */import{C as de}from"./CardHeader-a019c546.js";var le=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function pe(a,n){if(a==null)return{};var o={},t=Object.keys(a),e,c;for(c=0;c<t.length;c++)e=t[c],!(n.indexOf(e)>=0)&&(o[e]=a[e]);return o}function k(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function he(a,n){a.prototype=Object.create(n.prototype),a.prototype.constructor=a,P(a,n)}function P(a,n){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(a,n)}var N=function(a){he(n,a);function n(){var t;return t=a.call(this)||this,t.handleExpired=t.handleExpired.bind(k(t)),t.handleErrored=t.handleErrored.bind(k(t)),t.handleChange=t.handleChange.bind(k(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(k(t)),t}var o=n.prototype;return o.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},o.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&this._widgetId!==void 0?e(this._widgetId):null},o.getWidgetId=function(){return this.props.grecaptcha&&this._widgetId!==void 0?this._widgetId:null},o.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&this._widgetId!==void 0)return e(this._widgetId);this._executeRequested=!0},o.executeAsync=function(){var e=this;return new Promise(function(c,b){e.executionResolve=c,e.executionReject=b,e.execute()})},o.reset=function(){var e=this.getCaptchaFunction("reset");e&&this._widgetId!==void 0&&e(this._widgetId)},o.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},o.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},o.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},o.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},o.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&this._widgetId===void 0){var c=document.createElement("div");this._widgetId=e(c,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(c)}this._executeRequested&&this.props.grecaptcha&&this._widgetId!==void 0&&(this._executeRequested=!1,this.execute())},o.componentDidMount=function(){this.explicitRender()},o.componentDidUpdate=function(){this.explicitRender()},o.handleRecaptchaRef=function(e){this.captcha=e},o.render=function(){var e=this.props;e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated;var c=pe(e,le);return d("div",{...c,ref:this.handleRecaptchaRef})},n}(g.Component);N.displayName="ReCAPTCHA";N.propTypes={sitekey:p.string.isRequired,onChange:p.func,grecaptcha:p.object,theme:p.oneOf(["dark","light"]),type:p.oneOf(["image","audio"]),tabindex:p.number,onExpired:p.func,onErrored:p.func,size:p.oneOf(["compact","normal","invisible"]),stoken:p.string,hl:p.string,badge:p.oneOf(["bottomright","bottomleft","inline"]),isolated:p.bool};N.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};function T(){return T=Object.assign||function(a){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t])}return a},T.apply(this,arguments)}function ue(a,n){if(a==null)return{};var o={},t=Object.keys(a),e,c;for(c=0;c<t.length;c++)e=t[c],!(n.indexOf(e)>=0)&&(o[e]=a[e]);return o}function fe(a,n){a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n}var m={},me=0;function ge(a,n){return n=n||{},function(t){var e=t.displayName||t.name||"Component",c=function(x){fe(y,x);function y(h,s){var i;return i=x.call(this,h,s)||this,i.state={},i.__scriptURL="",i}var v=y.prototype;return v.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+me++),this.__scriptLoaderID},v.setupScriptURL=function(){return this.__scriptURL=typeof a=="function"?a():a,this.__scriptURL},v.asyncScriptLoaderHandleLoad=function(s){var i=this;this.setState(s,function(){return i.props.asyncScriptOnLoad&&i.props.asyncScriptOnLoad(i.state)})},v.asyncScriptLoaderTriggerOnScriptLoaded=function(){var s=m[this.__scriptURL];if(!s||!s.loaded)throw new Error("Script is not loaded.");for(var i in s.observers)s.observers[i](s);delete window[n.callbackName]},v.componentDidMount=function(){var s=this,i=this.setupScriptURL(),r=this.asyncScriptLoaderGetScriptLoaderID(),l=n,w=l.globalName,E=l.callbackName,U=l.scriptId;if(w&&typeof window[w]<"u"&&(m[i]={loaded:!0,observers:{}}),m[i]){var L=m[i];if(L&&(L.loaded||L.errored)){this.asyncScriptLoaderHandleLoad(L);return}L.observers[r]=function(u){return s.asyncScriptLoaderHandleLoad(u)};return}var z={};z[r]=function(u){return s.asyncScriptLoaderHandleLoad(u)},m[i]={loaded:!1,observers:z};var R=document.createElement("script");R.src=i,R.async=!0;for(var F in n.attributes)R.setAttribute(F,n.attributes[F]);U&&(R.id=U);var H=function(_){if(m[i]){var W=m[i],A=W.observers;for(var D in A)_(A[D])&&delete A[D]}};E&&typeof window<"u"&&(window[E]=function(){return s.asyncScriptLoaderTriggerOnScriptLoaded()}),R.onload=function(){var u=m[i];u&&(u.loaded=!0,H(function(_){return E?!1:(_(u),!0)}))},R.onerror=function(){var u=m[i];u&&(u.errored=!0,H(function(_){return _(u),!0}))},document.body.appendChild(R)},v.componentWillUnmount=function(){var s=this.__scriptURL;if(n.removeOnUnmount===!0)for(var i=document.getElementsByTagName("script"),r=0;r<i.length;r+=1)i[r].src.indexOf(s)>-1&&i[r].parentNode&&i[r].parentNode.removeChild(i[r]);var l=m[s];l&&(delete l.observers[this.asyncScriptLoaderGetScriptLoaderID()],n.removeOnUnmount===!0&&delete m[s])},v.render=function(){var s=n.globalName,i=this.props;i.asyncScriptOnLoad;var r=i.forwardedRef,l=ue(i,["asyncScriptOnLoad","forwardedRef"]);return s&&typeof window<"u"&&(l[s]=typeof window[s]<"u"?window[s]:void 0),l.ref=r,g.createElement(t,l)},y}(g.Component),b=g.forwardRef(function(x,y){return g.createElement(c,T({},x,{forwardedRef:y}))});return b.displayName="AsyncScriptLoader("+e+")",b.propTypes={asyncScriptOnLoad:p.func},M(b,t)}}var j="onloadcallback",ve="grecaptcha";function B(){return typeof window<"u"&&window.recaptchaOptions||{}}function ye(){var a=B(),n=a.useRecaptchaNet?"recaptcha.net":"www.google.com";return a.enterprise?"https://"+n+"/recaptcha/enterprise.js?onload="+j+"&render=explicit":"https://"+n+"/recaptcha/api.js?onload="+j+"&render=explicit"}const be=ge(ye,{callbackName:j,globalName:ve,attributes:B().nonce?{nonce:B().nonce}:{}})(N),Se=()=>{const a=ie({email:S().email("Must be a valid email").max(255).required("Email is required"),name:S().max(255).required("Name is required"),password:S().required("Please enter your password").matches(/^(?=.*[a-z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"),confirmpassword:S().min(8).max(255).required("Password is required").oneOf([oe("password")],"Passwords must match"),policy:se().oneOf([!0],"This field must be checked")}),n=l=>{v(l)},o=()=>{if(y)axios.post("/api/verify-recaptcha",{recaptcha:y}).then(l=>(console.log(l.data.message),!0)).catch(l=>(console.error("Error verifying reCAPTCHA",l),!1));else return alert("Please complete the reCAPTCHA"),!1},t=$(),[e,c]=g.useState(!1),[b,x]=g.useState("Register"),[y,v]=g.useState(""),h=g.useRef(null),[s,i]=g.useState({email:"",name:"",password:"",confirmpassword:"",policy:!1}),r=ce({initialValues:s,validationSchema:a,onSubmit:l=>{if(localStorage.setItem("email",JSON.stringify(l.email)),o()==!1){alert("Please complete the reCAPTCHA"),h.current.reset();return}c(!0),x(""),axios.post("/api/user-signup",l).then(w=>{w.data.status===200&&w.data.success&&(h.current.reset(),c(!1),t("/auth/auth/SendEmail")),w.data.status==="failed"&&(x("Register"),alert(w.data.message),c(!1))})}});return f(V,{children:[d(G,{title:"Register"}),f("div",{className:"signup-page",children:[d(q,{sx:{mb:2},children:f(I,{color:"text.primary",component:K,to:"/Dashboard",sx:{alignItems:"center",display:"inline-flex"},underline:"hover",children:[d(J,{sx:{mr:1},children:d(X,{})}),d(C,{variant:"subtitle2",children:"Back"})]})}),d(C,{color:"text.primary",className:"title largesize my-4",variant:"h4",children:"Brand account creation"}),f(Y,{sx:{borderRadius:2.5},elevation:16,className:"mainCard card  px-4 pt-4 pb-3",children:[d(de,{subheader:f(C,{color:"text.secondary",variant:"body2",className:"title-inter",children:["Already have an account?  ",d(I,{onClick:()=>t(Q.auth.auth.signin),underline:"hover",variant:"subtitle2",className:"title-inter pointer",children:"Log in"})]}),sx:{pb:0},className:"title smalltitle mt-2 signup-form-title",title:"Register"}),d(Z,{className:"signup-form",children:f("form",{noValidate:!0,onSubmit:r.handleSubmit,children:[f(ee,{spacing:3,children:[d(O,{label:"Username",className:"title-inter mt-3",name:"name",variant:"filled",style:{marginTop:11},error:!!(r.touched.name&&r.errors.name),fullWidth:!0,helperText:r.touched.name&&r.errors.name,onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name}),d(O,{variant:"filled",className:"title-inter mt-3",style:{marginTop:11},error:!!(r.touched.email&&r.errors.email),fullWidth:!0,helperText:r.touched.email&&r.errors.email,label:"Email Address",name:"email",onBlur:r.handleBlur,onChange:r.handleChange,type:"email",value:r.values.email}),d(O,{variant:"filled",className:"title-inter mt-3",style:{marginTop:11},error:!!(r.touched.password&&r.errors.password),fullWidth:!0,helperText:r.touched.password&&r.errors.password,label:"Password",name:"password",autoComplete:"new password",onBlur:r.handleBlur,onChange:r.handleChange,type:"password",value:r.values.password}),d(O,{variant:"filled",className:"title-inter mt-3",style:{marginTop:11},error:!!(r.touched.confirmpassword&&r.errors.confirmpassword),fullWidth:!0,helperText:r.touched.confirmpassword&&r.errors.confirmpassword,label:"ConfirmPassword",name:"confirmpassword",onBlur:r.handleBlur,onChange:r.handleChange,type:"password",value:r.values.confirmpassword})]}),f(q,{sx:{alignItems:"center",display:"flex",ml:1,mt:1},children:[d(te,{checked:r.values.policy,name:"policy",onChange:r.handleChange}),f(C,{color:"text.secondary",variant:"body2",className:"title-inter",children:["I have read the"," ",d(I,{component:"a",href:"#",className:"title-inter",children:"Terms and Conditions"})]})]}),!!(r.touched.policy&&r.errors.policy)&&d(re,{error:!0,children:r.errors.policy}),d("div",{className:"formGroup  px-2",children:d(be,{sitekey:"6Lc7XpMoAAAAAHMk4iYPe73H2e6nfvMAeBKnhgzz",type:"image",size:"normal",ref:h,onChange:n})}),f(ae,{fullWidth:!0,size:"large",sx:{mt:2},type:"submit",variant:"contained",className:"title-inter mainButton background-blue",children:[f("span",{className:"ml-2",children:[" ",b," "]}),e?d(ne,{color:"inherit",size:"2rem"}):d("span",{})]})]})})]})]})]})};export{Se as default};