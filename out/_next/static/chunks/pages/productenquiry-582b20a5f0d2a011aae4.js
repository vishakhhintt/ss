_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{ILIK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/productenquiry",function(){return n("OTRV")}])},OTRV:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),r=n("o0o1"),c=n.n(r),s=n("HaE+"),o=n("rePB"),i=n("q1tI"),m=(n("YFqc"),n("vDqi")),l=n.n(m),p=n("FGyW");n("jDDT");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}p.a.configure(),t.default=function(){var e=Object(i.useState)({name:"",phone:"",email:"",company:""}),t=e[0],n=e[1],r=Object(i.useState)({submitted:!1}),m=r[0],d=r[1],j=function(e){return n(u(u({},t),{},Object(o.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(s.a)(c.a.mark((function e(a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d({submitted:!0}),(r=new FormData).append("name",t.name),r.append("email",t.email),r.append("phone",t.phone),r.append("company",t.company),l()({method:"post",url:"https://admin.specialistmattresssystems.com/api/home/enquirysub",data:r}).then((function(e){console.log(e.data.rs),0==e.data.rs?(p.a.error(e.data.errors.name),p.a.error(e.data.errors.email),p.a.error(e.data.errors.phone),p.a.error(e.data.errors.company),d({submitted:!1})):(p.a.success(e.data.msg),n({name:"",email:"",phone:"",company:""}),d({submitted:!1}))})).catch((function(e){console.log(e)})),a.preventDefault();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"enquire-form col-12",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("h2",{children:"Make an enquiry"})}),Object(a.jsx)("form",{className:"custom-form",onSubmit:b,children:Object(a.jsx)("div",{className:"col-12 mt-2",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-12 col-md-6",children:[Object(a.jsx)("input",{id:"name",name:"name",onChange:j,value:t.name,type:"text",className:"form-control  py-4 rounded-0",placeholder:"Name"}),Object(a.jsx)("input",{id:"email",name:"email",onChange:j,value:t.email,type:"text",className:"form-control  py-4 rounded-0",placeholder:"Email"})]}),Object(a.jsxs)("div",{className:"col-12 col-md-6",children:[Object(a.jsx)("input",{id:"phone",name:"phone",onChange:j,value:t.phone,type:"text",className:"form-control py-4 rounded-0",placeholder:"Phone"}),Object(a.jsx)("input",{id:"company",name:"company",onChange:j,value:t.company,type:"text",className:"form-control py-4 rounded-0",placeholder:"Company"}),Object(a.jsx)("span",{id:"spinner",style:{display:"none"},children:Object(a.jsx)("i",{className:"fa fa-spin fa-spinner"})}),m.submitted?Object(a.jsx)("img",{height:"100",width:"100",src:"https://admin.specialistmattresssystems.com/assets/admin/images/spinner.gif",alt:"image"}):Object(a.jsx)("button",{className:"btn btn-primary d-flex align-items-center rounded-0 px-3 send-btn",children:"SEND"})]})]})})})]})})})}}},[["ILIK",0,1,2,3,4]]]);