import{P as d,d as t,C as m,f as n,D as h,j as r,k as a,B as u}from"./app-0b2379dc.js";import{f}from"./index-17a9c320.js";const x=i=>{const{jobs:s=[],...c}=i;return t(m,{variant:"outlined",...c,children:t(n,{divider:t(h,{}),children:s.map(e=>{e.isRemote||`${e.country}${e.city}`;const o=f(e.publishedAt,new Date,{addSuffix:!0}),p=`${e.currency}${e.salaryMin} - ${e.currency}${e.salaryMax}`,l=e.jobType,y=e.paymentType;return r(n,{alignItems:"center",direction:"row",flexWrap:"wrap",justifyContent:"space-between",sx:{px:2,py:1.5},children:[r("div",{children:[t(a,{variant:"subtitle1",children:e.title}),r(a,{color:"text.secondary",variant:"caption",children:["Budget • ",p]}),r(a,{color:"text.secondary",variant:"caption",style:{marginLeft:20},children:["Job Type • ",l]}),r(a,{color:"text.secondary",style:{marginLeft:20},variant:"caption",children:["Payment Type • ",y]})]}),r(n,{alignItems:"center",direction:"row",spacing:2,children:[t(a,{color:"text.secondary",variant:"caption",style:{fontSize:12},children:o}),t(u,{size:"small",style:{fontSize:14},children:"Apply"})]})]},e.id)})})})};x.propTypes={jobs:d.array};export{x as C};
