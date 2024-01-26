import{a as y}from"./apply-pagination-03aa54c3.js";import{a as A}from"./apply-sort-ec30f364.js";import{d as o}from"./deep-copy-ee95be26.js";import{b7 as t,b8 as a,b9 as i}from"./app-28409791.js";import{s as n}from"./index-802391e6.js";const e=new Date,b=[{id:"5e887ac47eed253091be10cb",avatar:"/assets/avatars/avatar-carson-darrin.png",city:"Cleveland",country:"USA",currency:"$",email:"carson.darrin@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Carson Darrin",state:"Ohio",totalSpent:300,totalOrders:3,updatedAt:t(a(e,7),1).getTime()},{id:"5e887b209c28ac3dd97f6db5",avatar:"/assets/avatars/avatar-fran-perez.png",city:"Atlanta",country:"USA",currency:"$",email:"fran.perez@devias.io",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Fran Perez",state:"Georgia",totalSpent:0,totalOrders:0,updatedAt:t(a(e,1),2).getTime()},{id:"5e887b7602bdbc4dbb234b27",avatar:"/assets/avatars/avatar-jie-yan-song.png",city:"North Canton",country:"USA",currency:"$",email:"jie.yan.song@devias.io",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!1,name:"Jie Yan Song",state:"Ohio",totalSpent:5600,totalOrders:6,updatedAt:t(a(e,4),2).getTime()},{id:"5e86809283e28b96d2d38537",avatar:"/assets/avatars/avatar-anika-visser.png",city:"Madrid",country:"Spain",currency:"$",email:"anika.visser@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Anika Visser",state:"Madrid",totalSpent:500,totalOrders:1,updatedAt:t(a(e,11),2).getTime()},{id:"5e86805e2bafd54f66cc95c3",avatar:"/assets/avatars/avatar-miron-vitold.png",city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@devias.io",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Miron Vitold",totalSpent:0,totalOrders:0,state:"California",updatedAt:t(a(e,7),3).getTime()},{id:"5e887a1fbefd7938eea9c981",avatar:"/assets/avatars/avatar-penjani-inyene.png",city:"Berkeley",country:"USA",currency:"$",email:"penjani.inyene@devias.io",hasAcceptedMarketing:!1,isProspect:!0,isReturning:!1,name:"Penjani Inyene",state:"California",totalSpent:0,totalOrders:0,updatedAt:t(a(e,5),4).getTime()},{id:"5e887d0b3d090c1b8f162003",avatar:"/assets/avatars/avatar-omar-darboe.png",currency:"$",email:"omar.darobe@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!1,city:"Carson City",country:"USA",name:"Omar Darobe",state:"Nevada",totalSpent:100,totalOrders:4,updatedAt:t(a(e,15),4).getTime()},{id:"5e88792be2d4cfb4bf0971d9",avatar:"/assets/avatars/avatar-siegbert-gottfried.png",city:"Los Angeles",country:"USA",currency:"$",email:"siegbert.gottfried@devias.io",hasAcceptedMarketing:!0,isProspect:!1,isReturning:!0,name:"Siegbert Gottfried",state:"California",totalSpent:1e3,totalOrders:2,updatedAt:t(a(e,2),5).getTime()},{id:"5e8877da9a65442b11551975",avatar:"/assets/avatars/avatar-iulia-albu.png",city:"Murray",country:"USA",email:"iulia.albu@devias.io",hasAcceptedMarketing:!0,isProspect:!0,isReturning:!1,name:"Iulia Albu",state:"Utah",totalSpent:0,totalOrders:0,updatedAt:t(a(e,8),6).getTime()},{id:"5e8680e60cba5019c5ca6fda",avatar:"/assets/avatars/avatar-nasimiyu-danai.png",city:"Salt Lake City",country:"USA",currency:"$",email:"nasimiyu.danai@devias.io",hasAcceptedMarketing:!1,isProspect:!1,isReturning:!0,name:"Nasimiyu Danai",state:"Utah",totalSpent:200,totalOrders:7,updatedAt:t(a(e,1),9).getTime()}],h={id:"5e86805e2bafd54f66cc95c3",address1:"Street John Wick, no. 7",address2:"House #25",avatar:"/assets/avatars/avatar-miron-vitold.png",balance:0,city:"San Diego",country:"USA",currency:"$",email:"miron.vitold@devias.io",hasDiscount:!1,isVerified:!0,name:"Miron Vitold",phone:"+55 748 327 439",state:"New York",vatRate:19,zipCode:"240355"},S=[{id:"5ece2ce3613486d95ffaea58",createdAt:t(a(i(e,34),5),3).getTime(),description:"Order confirmation"},{id:"5ece2ce8cebf7ad1d100c0cd",createdAt:t(a(i(e,49),11),4).getTime(),description:"Order confirmation"}],T=[{id:"528651571NT",issueDate:e.getTime(),status:"paid",amount:1358.75},{id:"311658671JR",issueDate:e.getTime(),status:"unpaid",amount:1451.75}],P=[{id:"5ece2cfeb6e2ac847bba11ce",createdAt:t(i(n(e,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:200},{id:"5ece2d02510484b2952e1e05",createdAt:t(i(n(e,56),2),2).getTime(),description:"Purchase",ip:"84.234.243.42",method:"POST",route:"/api/purchase",status:522},{id:"5ece2d08e2748e4e9788901a",createdAt:t(i(n(e,23),8),2).getTime(),description:"Cart remove",ip:"84.234.243.42",method:"DELETE",route:"/api/products/d65654e/remove",status:200},{id:"5ece2d0c47214e342c2d7f28",createdAt:t(i(n(e,54),20),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/d65654e/add",status:200},{id:"5ece2d11e4060a97b2b57623",createdAt:t(i(n(e,16),34),2).getTime(),description:"Cart add",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f/add",status:200},{id:"5ece2d16cf6d53d8e33656af",createdAt:t(i(n(e,30),54),2).getTime(),description:"View product",ip:"84.234.243.42",method:"GET",route:"/api/products/c85727f",status:200},{id:"5ece2d1b2ec5071be9286a96",createdAt:t(i(n(e,40),56),2).getTime(),description:"Get products",ip:"84.234.243.42",method:"GET",route:"/api/products",status:200},{id:"5ece2d22e68d5498917e47bc",createdAt:t(i(n(e,5),57),2).getTime(),description:"Login",ip:"84.234.243.42",method:"POST",route:"/api/auth/login",status:200}];class k{getCustomers(d={}){const{filters:r,page:u,rowsPerPage:p,sortBy:l,sortDir:f}=d;let s=o(b),m=s.length;return typeof r<"u"&&(s=s.filter(c=>{if(typeof r.query<"u"&&r.query!==""){let g=!1;if(["email","name"].forEach(v=>{c[v].toLowerCase().includes(r.query.toLowerCase())&&(g=!0)}),!g)return!1}return!(typeof r.hasAcceptedMarketing<"u"&&c.hasAcceptedMarketing!==r.hasAcceptedMarketing||typeof r.isProspect<"u"&&c.isProspect!==r.isProspect||typeof r.isReturning<"u"&&c.isReturning!==r.isReturning)}),m=s.length),typeof l<"u"&&typeof f<"u"&&(s=A(s,l,f)),typeof u<"u"&&typeof p<"u"&&(s=y(s,u,p)),Promise.resolve({data:s,count:m})}getCustomer(d){return Promise.resolve(o(h))}getEmails(d){return Promise.resolve(o(S))}getInvoices(d){return Promise.resolve(o(T))}getLogs(d){return Promise.resolve(o(P))}}const E=new k;export{E as c};