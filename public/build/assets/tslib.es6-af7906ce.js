function y(i,a,r,t){var l=arguments.length,e=l<3?a:t===null?t=Object.getOwnPropertyDescriptor(a,r):t,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(i,a,r,t);else for(var u=i.length-1;u>=0;u--)(c=i[u])&&(e=(l<3?c(e):l>3?c(a,r,e):c(a,r))||e);return l>3&&e&&Object.defineProperty(a,r,e),e}function h(i,a,r,t){function l(e){return e instanceof r?e:new r(function(c){c(e)})}return new(r||(r=Promise))(function(e,c){function u(f){try{n(t.next(f))}catch(s){c(s)}}function o(f){try{n(t.throw(f))}catch(s){c(s)}}function n(f){f.done?e(f.value):l(f.value).then(u,o)}n((t=t.apply(i,a||[])).next())})}function b(i,a){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},t,l,e,c;return c={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function u(n){return function(f){return o([n,f])}}function o(n){if(t)throw new TypeError("Generator is already executing.");for(;c&&(c=0,n[0]&&(r=0)),r;)try{if(t=1,l&&(e=n[0]&2?l.return:n[0]?l.throw||((e=l.return)&&e.call(l),0):l.next)&&!(e=e.call(l,n[1])).done)return e;switch(l=0,e&&(n=[n[0]&2,e.value]),n[0]){case 0:case 1:e=n;break;case 4:return r.label++,{value:n[1],done:!1};case 5:r.label++,l=n[1],n=[0];continue;case 7:n=r.ops.pop(),r.trys.pop();continue;default:if(e=r.trys,!(e=e.length>0&&e[e.length-1])&&(n[0]===6||n[0]===2)){r=0;continue}if(n[0]===3&&(!e||n[1]>e[0]&&n[1]<e[3])){r.label=n[1];break}if(n[0]===6&&r.label<e[1]){r.label=e[1],e=n;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(n);break}e[2]&&r.ops.pop(),r.trys.pop();continue}n=a.call(i,r)}catch(f){n=[6,f],l=0}finally{t=e=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}function d(i,a){var r=typeof Symbol=="function"&&i[Symbol.iterator];if(!r)return i;var t=r.call(i),l,e=[],c;try{for(;(a===void 0||a-- >0)&&!(l=t.next()).done;)e.push(l.value)}catch(u){c={error:u}}finally{try{l&&!l.done&&(r=t.return)&&r.call(t)}finally{if(c)throw c.error}}return e}function p(i,a,r){if(r||arguments.length===2)for(var t=0,l=a.length,e;t<l;t++)(e||!(t in a))&&(e||(e=Array.prototype.slice.call(a,0,t)),e[t]=a[t]);return i.concat(e||Array.prototype.slice.call(a))}export{h as _,b as a,p as b,d as c,y as d};
