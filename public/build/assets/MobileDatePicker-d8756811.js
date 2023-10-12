import{an as k,K as p,ad as F,ae as I,G as y,k as _,r as D,_ as h,d as b,af as K}from"./app-21956035.js";import{u as M,a as L,p as T,b as O,P as R,d as U,j as E,h as N,M as S,i as W,C as j}from"./PureDateInput-533f2f08.js";const g=e=>e.length===1&&e[0]==="year",V=e=>e.length===2&&e.indexOf("month")!==-1&&e.indexOf("year")!==-1,A=(e,t)=>g(e)?{inputFormat:t.formats.year}:V(e)?{disableMaskedInput:!0,inputFormat:t.formats.monthAndYear}:{inputFormat:t.formats.keyboardDate};function Y(e,t){var r;const o=M(),a=L(),s=k({props:e,name:t}),i=(r=s.views)!=null?r:["year","day"];return p({openTo:"day",disableFuture:!1,disablePast:!1},A(i,o),s,{views:i,minDate:T(o,s.minDate,a.minDate),maxDate:T(o,s.maxDate,a.maxDate)})}const q={emptyValue:null,getTodayValue:e=>e.date(),parseInput:O,areValuesEqual:(e,t,r)=>e.isEqual(t,r)};function B(e){return F("MuiDatePickerToolbar",e)}I("MuiDatePickerToolbar",["root","title"]);const $=["parsedValue","isLandscape","isMobileKeyboardViewOpen","onChange","toggleMobileKeyboardView","toolbarFormat","toolbarPlaceholder","toolbarTitle","views"],z=e=>{const{classes:t}=e;return K({root:["root"],title:["title"]},B,t)},G=y(R,{name:"MuiDatePickerToolbar",slot:"Root",overridesResolver:(e,t)=>t.root})({}),H=y(_,{name:"MuiDatePickerToolbar",slot:"Title",overridesResolver:(e,t)=>t.title})(({ownerState:e})=>p({},e.isLandscape&&{margin:"auto 16px auto auto"})),J=D.forwardRef(function(t,r){const o=k({props:t,name:"MuiDatePickerToolbar"}),{parsedValue:a,isLandscape:s,isMobileKeyboardViewOpen:i,toggleMobileKeyboardView:P,toolbarFormat:d,toolbarPlaceholder:c="––",toolbarTitle:u,views:n}=o,m=h(o,$),l=M(),C=U(),f=z(o),w=u??C.datePickerDefaultToolbarTitle,x=D.useMemo(()=>a?d?l.formatByString(a,d):g(n)?l.format(a,"year"):V(n)?l.format(a,"month"):/en/.test(l.getCurrentLocaleCode())?l.format(a,"normalDateWithWeekday"):l.format(a,"normalDate"):c,[a,d,c,l,n]),v=o;return b(G,p({ref:r,toolbarTitle:w,isMobileKeyboardViewOpen:i,toggleMobileKeyboardView:P,isLandscape:s,className:f.root},m,{children:b(H,{variant:"h4",align:s?"left":"center",ownerState:v,className:f.title,children:x})}))}),Q=["ToolbarComponent","value","onChange","components","componentsProps"],ee=D.forwardRef(function(t,r){const o=Y(t,"MuiMobileDatePicker"),a=E(o)!==null,{pickerProps:s,inputProps:i,wrapperProps:P}=N(o,q),{ToolbarComponent:d=J,components:c,componentsProps:u}=o,n=h(o,Q),m=p({},i,n,{components:c,componentsProps:u,ref:r,validationError:a});return b(S,p({},n,P,{DateInputProps:m,PureDateInputComponent:W,components:c,componentsProps:u,children:b(j,p({},s,{autoFocus:!0,toolbarTitle:o.label||o.toolbarTitle,ToolbarComponent:d,DateInputProps:m,components:c,componentsProps:u},n))}))});export{J as D,ee as M,q as d,Y as u};
