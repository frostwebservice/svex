import{r as d,_ as k,K as e,d as s,an as b,bE as M}from"./app-21956035.js";import{u as h,d as x,D as g,M as y}from"./MobileDatePicker-d8756811.js";import{D as I}from"./DesktopWrapper-f13b7820.js";import{j as _,h as K,K as j,C as w}from"./PureDateInput-533f2f08.js";const E=["onChange","PopperProps","PaperProps","ToolbarComponent","TransitionComponent","value","components","componentsProps"],Q=d.forwardRef(function(p,r){const o=h(p,"MuiDesktopDatePicker"),n=_(o)!==null,{pickerProps:a,inputProps:i,wrapperProps:P}=K(o,x),{PopperProps:t,PaperProps:l,ToolbarComponent:C=g,TransitionComponent:T,components:c,componentsProps:u}=o,m=k(o,E),D=e({},i,m,{components:c,componentsProps:u,ref:r,validationError:n});return s(I,e({},P,{DateInputProps:D,KeyboardDateInputComponent:j,PopperProps:t,PaperProps:l,TransitionComponent:T,components:c,componentsProps:u,children:s(w,e({},a,{autoFocus:!0,toolbarTitle:o.label||o.toolbarTitle,ToolbarComponent:C,DateInputProps:D,components:c,componentsProps:u},m))}))}),v=["desktopModeMediaQuery","DialogProps","PopperProps","TransitionComponent"],A=d.forwardRef(function(p,r){const o=b({props:p,name:"MuiDatePicker"}),{desktopModeMediaQuery:n="@media (pointer: fine)",DialogProps:a,PopperProps:i,TransitionComponent:P}=o,t=k(o,v);return M(n,{defaultMatches:!0})?s(Q,e({ref:r,PopperProps:i,TransitionComponent:P},t)):s(y,e({ref:r,DialogProps:a},t))});export{A as D};
