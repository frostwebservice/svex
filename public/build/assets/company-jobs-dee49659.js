import{P as d,d as t,C as h,f as n,D as m,bS as u,j as r,k as a,B as x}from"./app-f6d0c162.js";const f=i=>{const{jobs:s=[],...c}=i;return t(h,{variant:"outlined",...c,children:t(n,{divider:t(m,{}),children:s.map(e=>{e.isRemote||`${e.country}${e.city}`;const o=u(e.publishedAt,new Date,{addSuffix:!0}),l=`${e.currency}${e.salaryMin} - ${e.currency}${e.salaryMax}`,p=e.jobType,y=e.paymentType;return r(n,{alignItems:"center",direction:"row",flexWrap:"wrap",justifyContent:"space-between",sx:{px:2,py:1.5},children:[r("div",{children:[t(a,{variant:"subtitle1",children:e.title}),r(a,{color:"text.secondary",variant:"caption",children:["Budget • ",l]}),r(a,{color:"text.secondary",variant:"caption",style:{marginLeft:20},children:["Job Type • ",p]}),r(a,{color:"text.secondary",style:{marginLeft:20},variant:"caption",children:["Payment Type • ",y]})]}),r(n,{alignItems:"center",direction:"row",spacing:2,children:[t(a,{color:"text.secondary",variant:"caption",style:{fontSize:12},children:o}),t(x,{size:"small",style:{fontSize:14},children:"Apply"})]})]},e.id)})})})};f.propTypes={jobs:d.array};export{f as C};
