_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"1OyB":function(e,t,c){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}c.d(t,"a",(function(){return n}))},Ji7U:function(e,t,c){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}c.d(t,"a",(function(){return r}))},S4KG:function(e,t,c){"use strict";c.r(t);var n=c("nKUr"),r=c("o0o1"),s=c.n(r),i=c("HaE+"),o=c("rePB"),a=c("q1tI"),l=(c("YFqc"),c("vDqi")),d=c.n(l),u=c("FGyW");c("jDDT");function j(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function m(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?j(Object(c),!0).forEach((function(t){Object(o.a)(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):j(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}u.a.configure(),t.default=function(){var e=Object(a.useState)({name:"",phone:"",email:"",company:""}),t=e[0],c=e[1],r=Object(a.useState)({submitted:!1}),l=r[0],j=r[1],p=function(e){return c(m(m({},t),{},Object(o.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(i.a)(s.a.mark((function e(n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j({submitted:!0}),(r=new FormData).append("name",t.name),r.append("email",t.email),r.append("phone",t.phone),r.append("company",t.company),d()({method:"post",url:"https://admin.specialistmattresssystems.com/api/home/enquirysub",data:r}).then((function(e){console.log(e.data.rs),0==e.data.rs?(u.a.error(e.data.errors.name),u.a.error(e.data.errors.email),u.a.error(e.data.errors.phone),u.a.error(e.data.errors.company),j({submitted:!1})):(u.a.success(e.data.msg),c({name:"",email:"",phone:"",company:""}),j({submitted:!1}))})).catch((function(e){console.log(e)})),n.preventDefault();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("section",{className:"abt-form",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-12",children:[Object(n.jsx)("h2",{children:"Complementary Bed Audit"}),Object(n.jsxs)("p",{children:["We offer a full repair and decontamination service for all ",Object(n.jsx)("br",{}),"types of pressure mattresses."]})]}),Object(n.jsx)("form",{name:"enquiry-form",id:"enquiry-form",className:"enquiry-form",onSubmit:b,children:Object(n.jsx)("div",{className:"col-12 disp-blk mt-5",children:Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("input",{id:"name",onChange:p,value:t.name,name:"name",type:"text",className:"form-control form-control-control col-12 col-lg-3 py-4 d-flex cust-right rounded-0",placeholder:"Name"}),Object(n.jsx)("input",{id:"email",onChange:p,value:t.email,name:"email",type:"text",className:"form-control form-control-control col-12 col-lg-3 py-4 d-flex cust-marg rounded-0",placeholder:"Email"}),Object(n.jsx)("input",{id:"phone",onChange:p,value:t.phone,name:"phone",type:"text",className:"form-control form-control-control col-12 col-lg-2 py-4 d-flex cust-marg rounded-0",placeholder:"Phone"}),Object(n.jsx)("input",{id:"company",onChange:p,value:t.company,name:"company",type:"text",className:"form-control form-control-control  col-12 col-lg-2 py-4 d-flex cust-marg rounded-0",placeholder:"Company"}),Object(n.jsx)("span",{id:"spinner",style:{display:"none"},children:Object(n.jsx)("i",{className:"fa fa-spin fa-spinner"})}),l.submitted?Object(n.jsx)("img",{height:"100",width:"100",src:"https://admin.specialistmattresssystems.com/assets/admin/images/spinner.gif",alt:"image"}):Object(n.jsx)("button",{type:"submit",className:"btn btn-primary d-flex align-items-center cust-left rounded-0 px-3",children:Object(n.jsx)("i",{className:"far fa-paper-plane"})})]})})})})]})})})}},foSv:function(e,t,c){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}c.d(t,"a",(function(){return n}))},gZQa:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/emergency-pressure-care-system",function(){return c("zLGi")}])},md7G:function(e,t,c){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}c.d(t,"a",(function(){return r}))},vuIU:function(e,t,c){"use strict";function n(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,c){return t&&n(e.prototype,t),c&&n(e,c),e}c.d(t,"a",(function(){return r}))},zLGi:function(e,t,c){"use strict";c.r(t);var n=c("nKUr"),r=c("1OyB"),s=c("vuIU"),i=c("Ji7U"),o=c("md7G"),a=c("foSv"),l=c("q1tI"),d=c.n(l),u=(c("YFqc"),c("S4KG"));function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var c,n=Object(a.a)(e);if(t){var r=Object(a.a)(this).constructor;c=Reflect.construct(n,arguments,r)}else c=n.apply(this,arguments);return Object(o.a)(this,c)}}var m=function(e){Object(i.a)(c,e);var t=j(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("section",{class:"emergency-pressure-banner",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"col-12",children:[Object(n.jsxs)("h2",{class:"mb-4",children:["Emergency Pressure ",Object(n.jsx)("br",{}),"Care System"]}),Object(n.jsx)("h6",{children:"Simple & Easy - Care without Compromise"})]})})})}),Object(n.jsx)("section",{class:"freeloan-system",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsxs)("div",{class:"row d-flex align-items-center",children:[Object(n.jsx)("div",{class:"col-12 col-md-6",children:Object(n.jsx)("h5",{children:"Free Loan System Nationwide Coverage Pay as You Use System"})}),Object(n.jsx)("div",{class:"col-12 col-md-6 text-right",children:Object(n.jsx)("h6",{children:"WE OPERATE A 24/7, ALL YEAR ROUND CALL OUT SERVICE DELIVERING TO CARE HOMES NATIONWIDE"})})]})})}),Object(n.jsx)("section",{class:"pressure-system-steps",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsxs)("div",{class:"row",children:[Object(n.jsxs)("div",{class:"col-12 col-md-3 emergency-pressure-ico",children:[Object(n.jsx)("div",{class:"ico d-flex align-items-center",children:Object(n.jsx)("img",{src:"img/update-pages/degital-clock.png",alt:""})}),Object(n.jsx)("h3",{children:"A Digital clock records the hours the product has been in use"})]}),Object(n.jsxs)("div",{class:"col-12 col-md-3 emergency-pressure-ico",children:[Object(n.jsx)("div",{class:"ico d-flex align-items-center",children:Object(n.jsx)("img",{src:"img/update-pages/month-meter.png",alt:""})}),Object(n.jsx)("h3",{children:"Each month a meter reading is taken"})]}),Object(n.jsxs)("div",{class:"col-12 col-md-3 emergency-pressure-ico",children:[Object(n.jsx)("div",{class:"ico d-flex align-items-center",children:Object(n.jsx)("img",{src:"img/update-pages/invoiced.png",alt:""})}),Object(n.jsx)("h3",{children:"You are invoiced on a monthly basis for hours it has been used"})]}),Object(n.jsxs)("div",{class:"col-12 col-md-3 emergency-pressure-ico",children:[Object(n.jsx)("div",{class:"ico d-flex align-items-center",children:Object(n.jsx)("img",{src:"img/update-pages/turn-off.png",alt:""})}),Object(n.jsx)("h3",{children:"Switch off the product and no costs are incurred"})]})]})})}),Object(n.jsx)("section",{class:"emergency-pressure",children:Object(n.jsx)("div",{class:"container",children:Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-12 emergency-product-img",children:Object(n.jsx)("figure",{children:Object(n.jsx)("img",{src:"img/update-pages/emergency-system-img.jpg",class:"img-fluid",alt:""})})}),Object(n.jsx)("div",{class:"col-12 col-lg-6 d-flex mb-4",children:Object(n.jsx)("div",{class:"card card-abt-cntnt",children:Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h4",{class:"",children:"A unique pressure care system"}),Object(n.jsx)("p",{children:"SMS specialise in the supply and maintenance of Pressure Relief systems and understand the importance and urgency of looking after your patient's individual pressure care needs."}),Object(n.jsx)("p",{children:"We operate a 24 hours, 7 days a week, 365 days a year call out service delivering to care homes nationwide. Our dedicated team listens to your individual requirements and customises a solution to fit your specific needs. Enjoy security and peace of mind with our Metered System."}),Object(n.jsx)("p",{children:"This system provides you with the freedom and flexibility to always have a pressure care system available for use on demand without carrying the cost of renting or purchasing, you only pay for when you use."})]})})}),Object(n.jsx)("div",{class:"col-12 col-lg-6 d-flex mb-4",children:Object(n.jsx)("div",{class:"card card-abt-cntnt",children:Object(n.jsxs)("div",{class:"card-body",children:[Object(n.jsx)("h4",{class:"",children:"Enjoy the benefit of full control and flexibility"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"NO compromise to patient care"}),Object(n.jsx)("li",{children:"Always enjoy the security and peace of mind with our unique system"}),Object(n.jsx)("li",{children:"Always have a product for immediate use without cost in your store cupboard"}),Object(n.jsx)("li",{children:"Never be put in a position where you have to compromise continuing patient care"}),Object(n.jsx)("li",{children:"Never leave yourself open to litigation"}),Object(n.jsx)("li",{children:"Never be committed to a cost that you can\u2019t control"}),Object(n.jsx)("li",{children:"Always be in control of products and costs"}),Object(n.jsx)("li",{children:"NO cleaning / decontaminating cost"}),Object(n.jsx)("li",{children:"NO repairs"})]})]})})})]})})}),Object(n.jsx)(u.default,{})]})}}]),c}(d.a.Component);t.default=m}},[["gZQa",0,1,2,3,4]]]);