import{b6 as t,b7 as e,cv as b}from"./app-822dcc1a.js";import{a as f}from"./apply-pagination-03aa54c3.js";import{a as g}from"./apply-sort-ec30f364.js";const n=new Date;t(e(n,4),1).getTime(),t(e(n,7),1).getTime(),t(e(n,2),2).getTime(),t(e(n,3),5).getTime(),t(e(n,1),6).getTime(),t(e(n,3),7).getTime(),t(e(n,6),8).getTime(),t(e(n,7),8).getTime(),t(e(n,6),9).getTime(),t(e(n,3),10).getTime();const A={id:"5ecb8a6879877087d4aa2690",coupon:null,createdAt:t(e(n,4),1).getTime(),currency:"$",customer:{address1:"Street John Wick, no. 7",address2:"House #25",city:"San Diego",country:"USA",email:"miron.vitold@devias.io",name:"Miron Vitold"},items:[{id:"5ecb8abbdd6dfb1f9d6bf98b",billingCycle:"monthly",currency:"$",name:"Project Points",quantity:25,unitAmount:50.25},{id:"5ecb8ac10f116d04bed990eb",billingCycle:"monthly",currency:"$",name:"Freelancer Subscription",quantity:1,unitAmount:5}],logs:[{id:"9a50be1fa5ec7317d459d5a8",createdAt:e(Date.now(),18).getTime(),message:"Stripe charge complete (Charge ID: 5ecb8a6879877087d4aa2690)"},{id:"41845b427db837502b4d6a57",createdAt:e(Date.now(),21).getTime(),message:"Order status changed from Pending payment to Completed."}],number:"DEV-103",paymentMethod:"CreditCard",promotionCode:"PROMO1",status:"pending",totalAmount:500};class p{getOrders(a={}){const{filters:o,page:r,rowsPerPage:c,sortBy:d,sortDir:u,orders:l}=a;let i=b(l),s=i.length;return typeof o<"u"&&(i=i.filter(m=>!(typeof o.query<"u"&&o.query!==""&&!(m.number||"").toLowerCase().includes(o.query.toLowerCase())||typeof o.status<"u"&&!(m.status===o.status))),s=i.length),typeof d<"u"&&typeof u<"u"&&(i=g(i,d,u)),typeof r<"u"&&typeof c<"u"&&(i=f(i,r,c)),Promise.resolve({data:i,count:s})}getOrder(a={}){return Promise.resolve(b(A))}}const $=new p;export{$ as o};
