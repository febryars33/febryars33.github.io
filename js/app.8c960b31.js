(function(t){function a(a){for(var e,r,o=a[0],n=a[1],c=a[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);d&&d(a);while(m.length)m.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var t,a=0;a<l.length;a++){for(var s=l[a],e=!0,o=1;o<s.length;o++){var n=s[o];0!==i[n]&&(e=!1)}e&&(l.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},l=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=n;l.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";s("85ec")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1),s("Footer"),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.scY>300,expression:"scY > 300"}],staticClass:"fixed-bottom btn-to-up",staticStyle:{left:"auto",cursor:"pointer"},attrs:{id:"pagetop"},on:{click:t.toTop}},[s("i",{staticClass:"bi bi-arrow-up-circle-fill"})])])],1)},l=[],r=(s("ac1f"),s("1276"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top"},[s("div",{staticClass:"container"},[s("router-link",{staticClass:"navbar-brand text-dark fw-bold",attrs:{to:"/"}},[s("i",{staticClass:"bi bi-code-slash me-2"}),t._v("Febry")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-end fw-bold",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item px-2"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"nav-item px-2"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1),s("li",{staticClass:"nav-item px-2"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/skills"}},[t._v("Skills")])],1),s("li",{staticClass:"nav-item px-2"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/education"}},[t._v("Education")])],1),s("li",{staticClass:"nav-item px-2"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/blog"}},[t._v("Blog")])],1),s("li",{staticClass:"nav-item px-2"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])],1)])}),o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],n={name:"Navbar"},c=n,d=s("2877"),u=Object(d["a"])(c,r,o,!1,null,null,null),m=u.exports,v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"py-4 bg-dark text-light"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-lg-4"},[s("h4",{staticClass:"mb-3"},[t._v("Quick Links")]),s("ul",{staticClass:"quick-links"},[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),s("li",[s("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Skills")])],1),s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Education")])],1),s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Work")])],1),s("li",[s("router-link",{attrs:{to:"/"}},[t._v("Experience")])],1),s("li",[s("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])]),t._m(1)]),s("hr"),t._m(2)])])},b=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-4"},[s("h4",{staticClass:"mb-3"},[t._v("Febriansyah's Portfolio")]),s("p",[t._v(" Thank you for visiting my personal portfolio website. Connect with me over socials. ")]),s("p",[t._v(" Please wait for a while all major projects will be listed soon. Till then keep visiting. Connect with me over live chat! ")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-4"},[s("h4",{staticClass:"mb-3"},[t._v("Contact Info")]),s("ul",{staticClass:"list-unstyled"},[s("li",[s("i",{staticClass:"fa fa-phone me-2 text-warning"}),t._v(" +62 1234 1234")]),s("li",[s("i",{staticClass:"fa fa-envelope me-2 text-warning"}),t._v(" example@example.com ")]),s("li",[s("i",{staticClass:"fa fa-map-marked-alt me-2 text-warning"}),t._v(" Bandung, Jawa Barat ")])]),s("div",{staticClass:"contact-info mt-5"},[s("a",{staticClass:"me-4",attrs:{href:"https://github.com/febryars33"}},[s("i",{staticClass:"fab fa-github fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:""}},[s("i",{staticClass:"fab fa-instagram fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:""}},[s("i",{staticClass:"fab fa-twitter fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:""}},[s("i",{staticClass:"fab fa-telegram fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:""}},[s("i",{staticClass:"fab fa-youtube fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:"https://dev.to/febryars33"}},[s("i",{staticClass:"fab fa-dev fa-2x"})])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center"},[s("span",[t._v("Designed With "),s("i",{staticClass:"fa fa-heart text-danger"}),t._v(" By "),s("a",{staticClass:"text-decoration-none text-light",attrs:{href:"https://github.com/febryars33"}},[t._v("Febriansyah")])])])}],p={name:"Footer"},f=p,C=(s("760c"),Object(d["a"])(f,v,b,!1,null,null,null)),g=C.exports,h={name:"App",watch:{$route:function(t,a){var s=t.path.split("/").length,e=a.path.split("/").length;this.transitionName=s<e?"slide-right":"slide-left"}},components:{Navbar:m,Footer:g},data:function(){return{scTimer:0,scY:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=this;this.scTimer||(this.scTimer=setTimeout((function(){t.scY=window.scrollY,clearTimeout(t.scTimer),t.scTimer=0}),100))},toTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},_=h,y=(s("034f"),Object(d["a"])(_,i,l,!1,null,null,null)),x=y.exports,w=s("8c4f"),k=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"py-5 bg-light mb-5",attrs:{id:"particles"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row my-5"},[s("div",{staticClass:"col-lg-6"},[s("h1",{staticClass:"fw-bold mb-4"},[t._v("Hi There")]),t._m(0),s("vue-typed-js",{attrs:{strings:["WEB Developer","PHP Developer","From...","Bandung, Jawa Barat","Indonesia"],loop:!0,backSpeed:40,typeSpeed:50,smartBackspace:!0}},[s("h5",{staticClass:"mb-4"},[s("span",{staticClass:"typing text-danger"})])]),t._m(1),t._m(2)],1),t._m(3)])])]),t._m(4),s("div",{staticClass:"bg-indigo py-5 text-light"},[s("div",{staticClass:"container"},[t._m(5),s("div",{staticClass:"card border-0",staticStyle:{"background-color":"rgb(0 0 0 / 50%)"}},[s("div",{staticClass:"card-body"},[s("Skills")],1)])])]),t._m(6)])},S=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h1",{staticClass:"fw-bold mb-4"},[t._v(" I'm "),s("span",{staticClass:"text-primary"},[t._v("Febriansyah")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"btn btn-primary btn-lg rounded-pill",attrs:{type:"button"}},[t._v(" About Me "),s("i",{staticClass:"bi bi-arrow-down-circle-fill small hover-ml"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mt-4"},[s("a",{staticClass:"me-4",attrs:{href:"https://github.com/febryars33"}},[s("i",{staticClass:"fab fa-github fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:""}},[s("i",{staticClass:"fab fa-instagram fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:""}},[s("i",{staticClass:"fab fa-twitter fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:""}},[s("i",{staticClass:"fab fa-telegram fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:""}},[s("i",{staticClass:"fab fa-youtube fa-2x"})]),s("a",{staticClass:"me-4",attrs:{href:"https://dev.to/febryars33"}},[s("i",{staticClass:"fab fa-dev fa-2x"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-6 text-center d-none d-lg-block"},[e("img",{staticClass:"img-fluid rounded-pill",attrs:{src:s("b5e0"),width:"350px",height:"350px"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container mb-5"},[e("div",{staticClass:"text-center mb-5"},[e("h1",{staticClass:"fw-bold"},[t._v("- About "),e("span",{staticClass:"text-primary"},[t._v("Me")]),t._v(" -")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 text-center"},[e("img",{staticClass:"img-fluid rounded-pill",attrs:{src:s("b5e0"),width:"350px",height:"350px"}})]),e("div",{staticClass:"col-lg-6"},[e("h3",{staticClass:"fw-bold"},[t._v("I'm Febriansyah Riki Setiadi")]),e("p",{staticClass:"fw-bold"},[t._v("Passionate Web Developer")]),e("p",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto expedita quod minus autem accusantium culpa voluptate consequatur nemo, rem vel similique, atque numquam beatae inventore est eum ratione eligendi. Aliquam? ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("table",{staticClass:"table table-borderless"},[e("tr",[e("th",[t._v("Age")]),e("th",[t._v(":")]),e("td",[t._v("19")])]),e("tr",[e("th",[t._v("Phone")]),e("th",[t._v(":")]),e("td",[t._v("0815 1823 9123")])])])]),e("div",{staticClass:"col-lg-6"},[e("table",{staticClass:"table table-borderless"},[e("tr",[e("th",[t._v("Email")]),e("th",[t._v(":")]),e("td",[t._v("example@google.com")])]),e("tr",[e("th",[t._v("Location")]),e("th",[t._v(":")]),e("td",[t._v("Bandung, Jawa Barat")])])])])]),e("button",{staticClass:"btn btn-outline-primary rounded-pill",attrs:{type:"button"}},[t._v(" Download Resume "),e("i",{staticClass:"bi bi-cloud-download-fill small hover-ml"})])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"text-center mb-5"},[s("h1",{staticClass:"fw-bold"},[t._v(" - Skill & "),s("span",{staticClass:"text-warning"},[t._v("Abilities")]),t._v(" - ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bg-light py-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"text-center mb-5"},[e("h1",{staticClass:"fw-bold"},[t._v(" - My "),e("span",{staticClass:"text-success"},[t._v("Education")]),t._v(" - ")]),e("p",[t._v(" Education Is Not The Learning Of Facts, But The Training Of The Mind To Think. ")])]),e("div",{staticClass:"card mb-3 border-0 shadow"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-md-2"},[e("img",{staticClass:"img-fluid rounded-start",attrs:{src:s("b5e0")}})]),e("div",{staticClass:"col-md"},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title fw-bold"},[t._v("STMIK Bandung")]),e("p",{staticClass:"card-text"},[t._v("S1 - Sistem Informasi")]),e("p",{staticClass:"card-text text-muted"},[t._v("2020 - Today")])])])])]),e("div",{staticClass:"card mb-3 border-0 shadow"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-md-2"},[e("img",{staticClass:"img-fluid rounded-start",attrs:{src:s("b5e0")}})]),e("div",{staticClass:"col-md"},[e("div",{staticClass:"card-body"},[e("h2",{staticClass:"card-title fw-bold"},[t._v("SMA PGRI 1 Bandung")]),e("p",{staticClass:"card-text"},[t._v("SMA - Ilmu Pengetahuan Sosial")]),e("p",{staticClass:"card-text text-muted"},[t._v("2017 - 2020")])])])])])])])}],E=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fab fa-html5"}),t._v(" HTML "),s("span",{staticClass:"float-end"},[t._v("98%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"98%","background-color":"#f06529"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])]),s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fab fa-css3"}),t._v(" CSS "),s("span",{staticClass:"float-end"},[t._v("90%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"98%","background-color":"#2965f1"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])]),s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fab fa-js-square"}),t._v(" JS "),s("span",{staticClass:"float-end"},[t._v("80%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"80%","background-color":"#f0db4f"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])]),s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fab fa-php"}),t._v(" PHP "),s("span",{staticClass:"float-end"},[t._v("73%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"73%","background-color":"#787cb5"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])]),s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fas fa-database"}),t._v(" MySQL "),s("span",{staticClass:"float-end"},[t._v("67%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"67%","background-color":"#f29111"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])])]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fab fa-html5"}),t._v(" HTML "),s("span",{staticClass:"float-end"},[t._v("98%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"98%","background-color":"#f06529"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])]),s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fab fa-css3"}),t._v(" CSS "),s("span",{staticClass:"float-end"},[t._v("90%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"98%","background-color":"#2965f1"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])]),s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fab fa-js-square"}),t._v(" JS "),s("span",{staticClass:"float-end"},[t._v("80%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"80%","background-color":"#f0db4f"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])]),s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fab fa-php"}),t._v(" PHP "),s("span",{staticClass:"float-end"},[t._v("73%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"73%","background-color":"#787cb5"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])]),s("div",{staticClass:"card border-0 bg-dark my-3"},[s("div",{staticClass:"card-body"},[s("span",{staticClass:"fs-6"},[s("i",{staticClass:"fas fa-database"}),t._v(" MySQL "),s("span",{staticClass:"float-end"},[t._v("67%")])]),s("div",{staticClass:"progress rounded-pill"},[s("div",{staticClass:"progress-bar",staticStyle:{width:"67%","background-color":"#f29111"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])])])])])}],$={name:"Skills"},T=$,B=Object(d["a"])(T,E,q,!1,null,null,null),j=B.exports,P={name:"Home",components:{Skills:j}},M=P,A=Object(d["a"])(M,k,S,!1,null,null,null),O=A.exports,F=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"py-5 bg-light"},[e("div",{staticClass:"container py-4"},[e("div",{staticClass:"text-center mb-5"},[e("h1",{staticClass:"fw-bold"},[t._v("- About "),e("span",{staticClass:"text-primary"},[t._v("Me")]),t._v(" -")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 text-center"},[e("img",{staticClass:"img-fluid rounded-pill",attrs:{src:s("b5e0"),width:"350px",height:"350px"}})]),e("div",{staticClass:"col-lg-6"},[e("h3",{staticClass:"fw-bold"},[t._v("I'm Febriansyah Riki Setiadi")]),e("p",{staticClass:"fw-bold"},[t._v("Passionate Web Developer")]),e("p",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto expedita quod minus autem accusantium culpa voluptate consequatur nemo, rem vel similique, atque numquam beatae inventore est eum ratione eligendi. Aliquam? ")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("table",{staticClass:"table table-borderless"},[e("tr",[e("th",[t._v("Age")]),e("th",[t._v(":")]),e("td",[t._v("19")])]),e("tr",[e("th",[t._v("Phone")]),e("th",[t._v(":")]),e("td",[t._v("0815 1823 9123")])])])]),e("div",{staticClass:"col-lg-6"},[e("table",{staticClass:"table table-borderless"},[e("tr",[e("th",[t._v("Email")]),e("th",[t._v(":")]),e("td",[t._v("example@google.com")])]),e("tr",[e("th",[t._v("Location")]),e("th",[t._v(":")]),e("td",[t._v("Bandung, Jawa Barat")])])])])]),e("button",{staticClass:"btn btn-outline-primary rounded-pill",attrs:{type:"button"}},[t._v(" Download Resume "),e("i",{staticClass:"bi bi-cloud-download-fill small hover-ml"})])])])])])}],L={name:"About"},I=L,N=Object(d["a"])(I,F,H,!1,null,null,null),D=N.exports,J=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-light py-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"text-center"},[s("h1",{staticClass:"fw-bold"},[t._v(" - Get in "),s("span",{staticClass:"text-warning"},[t._v("Touch")]),t._v(" - ")])]),s("div",{staticClass:"row mt-5"},[s("div",{staticClass:"col-lg-6"},[s("h2",[t._v("Get in Touch")]),s("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in vero dicta deserunt maiores voluptatibus voluptates est quis esse, veritatis repellendus incidunt eos praesentium consectetur repellat neque aliquam dolor magnam. ")])]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"card border-0 rounded-3 shadow"},[s("div",{staticClass:"card-body"},[s("h4",[t._v("Say Something")]),s("form",{staticClass:"mt-4",attrs:{action:"",method:"post"}},[s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"name"}},[t._v("Name :")]),s("input",{staticClass:"form-control",attrs:{type:"text",name:"name",id:"name"}})]),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"email"}},[t._v("Email :")]),s("input",{staticClass:"form-control",attrs:{type:"email",name:"email",id:"email"}})]),s("div",{staticClass:"mb-3"},[s("label",{attrs:{for:"messages"}},[t._v("Messages :")]),s("textarea",{staticClass:"form-control",attrs:{name:"messages",id:"messages",rows:"6"}})]),s("div",{staticClass:"mb-3"},[s("div",{staticClass:"d-grid"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Send")])])])])])])])])])])}],W={},G=W,Y=Object(d["a"])(G,J,R,!1,null,null,null),Q=Y.exports,V=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"py-5 bg-light"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8"},t._l(t.blogs,(function(a){return s("div",{key:a.id,staticClass:"card border-0 shadow mb-5"},[s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/blog/"+a.id}},[s("img",{staticClass:"card-img-top",attrs:{src:"https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",alt:"..."}})]),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/blog/"+a.id}},[t._v(t._s(a.title))])],1),s("p",{staticClass:"card-text"},[t._v(t._s(a.body))]),t._m(0,!0)])],1)})),0),t._m(1)])])])},K=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"card-text"},[s("small",{staticClass:"text-muted"},[t._v("Kamis, 13 Januari 2022")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card border-0 mb-4",staticStyle:{"background-color":"#cff4fc"}},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"fw-bold text-info"},[t._v("Search")]),s("div",{staticClass:"mt-4 mb-3"},[s("input",{staticClass:"form-control border-0",attrs:{type:"text",id:"search",placeholder:"Search"}})]),s("div",{staticClass:"d-grid"},[s("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"}},[t._v(" Search ")])])])]),s("div",{staticClass:"card border-0 mb-4",staticStyle:{"background-color":"#cfe2ff"}},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"fw-bold text-primary"},[t._v(" Subscribe blog for latest updates ")]),s("div",{staticClass:"mt-4 mb-3"},[s("input",{staticClass:"form-control border-0",attrs:{type:"email",id:"email",placeholder:"Email address"}})]),s("div",{staticClass:"d-grid"},[s("button",{staticClass:"btn btn-danger border-0",attrs:{type:"button"}},[t._v(" Subscribe ")])])])]),s("div",{staticClass:"card border-0 shadow-sm"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"fw-bold text-danger mb-3"},[t._v("Tags")]),s("span",{staticClass:"badge rounded-pill bg-primary text-decoration-none me-2"},[t._v(" Programming ")]),s("span",{staticClass:"\n                badge\n                rounded-pill\n                bg-secondary\n                text-decoration-none\n                me-2\n              "},[t._v(" RESTful API ")]),s("span",{staticClass:"badge rounded-pill bg-info text-decoration-none me-2"},[t._v(" Tutorial ")]),s("span",{staticClass:"badge rounded-pill bg-danger text-decoration-none me-2"},[t._v(" Laravel ")]),s("span",{staticClass:"badge rounded-pill bg-success text-decoration-none me-2"},[t._v(" Vue ")]),s("span",{staticClass:"badge rounded-pill bg-info text-decoration-none me-2"},[t._v(" React ")]),s("span",{staticClass:"badge rounded-pill bg-warning text-decoration-none me-2"},[t._v(" CodeIgniter ")])])])])}],U=s("bc3a"),z=s.n(U),X={name:"Blogs",data:function(){return{blogs:[]}},methods:{setBlog:function(t){this.blogs=t}},mounted:function(){var t=this;z.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:10}}).then((function(a){t.setBlog(a.data)})).catch((function(a){t.error=a}))}},Z=X,tt=Object(d["a"])(Z,V,K,!1,null,null,null),at=tt.exports,st=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"py-5 bg-light"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-8"},[s("img",{staticClass:"img-fluid mb-5 rounded-3",attrs:{src:"https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",alt:"..."}}),s("h3",{staticClass:"fw-bold mb-3"},[t._v(t._s(t.blog.title))]),s("p",[t._v(t._s(t.blog.body))]),s("p",[t._v(" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed earum voluptatum deserunt! Modi, obcaecati fugiat, sed beatae veritatis quas reiciendis doloribus placeat tempora cum ducimus id quod unde cupiditate eos. ")]),s("p",[t._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo veniam nisi, ipsum error eum nobis quod laborum, dolores soluta pariatur excepturi cumque reiciendis aspernatur harum aliquid sed quas, culpa eveniet officiis dolorem molestiae. Dignissimos numquam aspernatur dolore blanditiis aut qui sunt. Quos esse optio, aliquam laborum architecto eveniet repellendus, quasi asperiores illum voluptatibus aliquid rerum, obcaecati qui in deserunt. Ab facilis quia corrupti quod nihil debitis quisquam suscipit quibusdam molestias? Nam repellat vitae natus quaerat, dignissimos tempore quidem culpa quae fuga. Laborum molestiae nostrum nisi eveniet voluptatem mollitia qui necessitatibus cum tempora voluptas debitis voluptate, sapiente nihil nam velit adipisci. ")]),s("p",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")]),t._m(0),s("div",{staticClass:"card border-0 shadow mt-5 rounded-3"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"fw-bold card-title"},[t._v(t._s(t.comments_count)+" Comments")]),s("hr"),t._m(1),s("div",{staticClass:"mb-5"},[s("div",{staticClass:"d-grid"},[s("button",{staticClass:"btn btn-primary border-0",attrs:{type:"button"},on:{click:function(a){return t.commentFormClicked()}}},[t._v(" Post ")])])]),t._l(t.comments,(function(a){return s("div",{key:a,staticClass:"row mb-3"},[t._m(2,!0),s("div",{staticClass:"col-lg"},[s("h5",[t._v(t._s(a.name))]),s("p",{staticClass:"small text-muted"},[t._v(" Jumat, 14 Januari 2022 | 08:00 WIB ")]),s("p",[t._v(" "+t._s(a.body)+" ")]),t._m(3,!0),t._m(4,!0)])])}))],2)])]),t._m(5)])])])},et=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",[s("li",[t._v("Blanditiis aut qui sunt.")]),s("li",[t._v("Eveniet officiis dolorem molestiae.")]),s("li",[t._v("Aborum molestiae nostrum")]),s("li",[t._v("Corrupti quod nihil debitis")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mb-3"},[s("textarea",{staticClass:"form-control",attrs:{name:"comment_form",id:"comment_form",rows:"10",placeholder:"Write comment here..."}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-2"},[s("img",{staticClass:"img-fluid rounded-3",attrs:{src:"\n                    https://via.placeholder.com/150/FF0000/FFFFFF?Text=Down.com\n                  ",alt:"Profile"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"\n                    badge\n                    rounded-pill\n                    bg-primary\n                    text-decoration-none\n                    me-2\n                  "},[s("i",{staticClass:"fa fa-thumbs-up"}),t._v(" 50 ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"\n                    badge\n                    rounded-pill\n                    bg-primary\n                    text-decoration-none\n                    me-2\n                  "},[s("i",{staticClass:"fa fa-comment"}),t._v(" 12 ")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"card border-0 mb-4",staticStyle:{"background-color":"#cff4fc"}},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"fw-bold text-info"},[t._v("Search")]),s("div",{staticClass:"mt-4 mb-3"},[s("input",{staticClass:"form-control border-0",attrs:{type:"text",id:"search",placeholder:"Search"}})]),s("div",{staticClass:"d-grid"},[s("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"}},[t._v(" Search ")])])])]),s("div",{staticClass:"card border-0 mb-4",staticStyle:{"background-color":"#cfe2ff"}},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"fw-bold text-primary"},[t._v(" Subscribe blog for latest updates ")]),s("div",{staticClass:"mt-4 mb-3"},[s("input",{staticClass:"form-control border-0",attrs:{type:"email",id:"email",placeholder:"Email address"}})]),s("div",{staticClass:"d-grid"},[s("button",{staticClass:"btn btn-danger border-0",attrs:{type:"button"}},[t._v(" Subscribe ")])])])]),s("div",{staticClass:"card border-0 shadow-sm"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"fw-bold text-danger mb-3"},[t._v("Tags")]),s("span",{staticClass:"badge rounded-pill bg-primary text-decoration-none me-2"},[t._v(" Programming ")]),s("span",{staticClass:"\n                badge\n                rounded-pill\n                bg-secondary\n                text-decoration-none\n                me-2\n              "},[t._v(" RESTful API ")]),s("span",{staticClass:"badge rounded-pill bg-info text-decoration-none me-2"},[t._v(" Tutorial ")]),s("span",{staticClass:"badge rounded-pill bg-danger text-decoration-none me-2"},[t._v(" Laravel ")]),s("span",{staticClass:"badge rounded-pill bg-success text-decoration-none me-2"},[t._v(" Vue ")]),s("span",{staticClass:"badge rounded-pill bg-info text-decoration-none me-2"},[t._v(" React ")]),s("span",{staticClass:"badge rounded-pill bg-warning text-decoration-none me-2"},[t._v(" CodeIgniter ")])])])])}],it=(s("b64b"),{name:"BlogRead",data:function(){return{blog:[],comments:[],comments_count:0}},methods:{setBlog:function(t){this.blog=t},setCountComments:function(t){this.comments_count=t},setComments:function(t){this.comments=t},commentFormClicked:function(){this.$toast.warning("This feature is under development.",{position:"top-right"})}},mounted:function(){var t=this;z.a.get("https://jsonplaceholder.typicode.com/comments",{params:{_limit:10}}).then((function(a){console.log(a.data),t.setComments(a.data),t.setCountComments(Object.keys(a.data).length)})).catch((function(a){t.$toast.error(a+" (Comments)",{position:"top-right"})})),z.a.get("https://jsonplaceholder.typicode.com/posts/"+this.$route.params.id).then((function(a){t.setBlog(a.data),document.title=a.data.title+" - febryars33"})).catch((function(a){t.$toast.error(a+" (Post)",{position:"top-right"})}))}}),lt=it,rt=Object(d["a"])(lt,st,et,!1,null,null,null),ot=rt.exports,nt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"py-5 bg-light"},[s("div",{staticClass:"container py-5"},[s("div",{staticClass:"row"},[t._m(0),s("div",{staticClass:"col-lg-6"},[s("h1",{staticClass:"display-5 fw-bold"},[t._v("This page is under maintenance")]),s("h5",[t._v("Updating and repairing blog software")]),s("p",{staticClass:"mt-4"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque atque cupiditate saepe autem modi magni at, praesentium fugit? Ea natus dolore nesciunt aspernatur quod ipsa fuga, fugit dolorem tempore vero? ")]),s("router-link",{staticClass:"btn btn-outline-primary rounded-pill",attrs:{to:"/"}},[t._v(" Back to Homepage "),s("i",{staticClass:"fa fa-undo small hover-ml"})])],1)])])])},ct=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-6"},[e("img",{staticClass:"img-fluid",attrs:{src:s("8817"),alt:"Maintenance"}})])}],dt={},ut=dt,mt=Object(d["a"])(ut,nt,ct,!1,null,null,null),vt=mt.exports,bt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"py-5 bg-light"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"container mt-5"},[s("h1",{staticClass:"display-1 fw-bold"},[t._v("404")]),s("h3",[t._v("Oops, page not be found")]),s("p",[t._v(" Sorry but the page you ware looking for does not exist, have been removed. name changed or this temporarily unavailable. ")]),s("router-link",{staticClass:"btn btn-outline-primary rounded-pill",attrs:{to:"/"}},[t._v(" Back to Homepage "),s("i",{staticClass:"fa fa-undo small hover-ml"})])],1)]),t._m(0)])])])},pt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-lg-6 order-first"},[e("img",{staticClass:"img-fluid",attrs:{src:s("9798"),alt:"Bug Hammer"}})])}],ft={},Ct=ft,gt=Object(d["a"])(Ct,bt,pt,!1,null,null,null),ht=gt.exports;e["a"].use(w["a"]);var _t=[{path:"/",name:"Home",component:O,meta:{title:"Home"}},{path:"/about",name:"About",component:D,meta:{title:"About"}},{path:"/skills",name:"Skills",component:vt,meta:{title:"Page is under Maintenance"}},{path:"/education",name:"Education",component:vt,meta:{title:"Page is under Maintenance"}},{path:"/contact",name:"Contact",component:Q,meta:{title:"Get in Touch"}},{path:"/blog",name:"Blog",component:at,meta:{title:"Blog"}},{path:"/blog/:id",name:"Blog Read",component:ot,meta:{title:"Blog"}},{path:"*",name:"NotFound",component:ht,meta:{title:"404 Page Not Found"}}],yt=new w["a"]({mode:"history",base:"/",routes:_t});yt.beforeEach((function(t,a,s){document.title="".concat(t.meta.title," - febryars33"),s()}));var xt=yt,wt=s("58ca"),kt=s("8cb8"),St=s("0284"),Et=s.n(St),qt=s("5b80"),$t=s("b079"),Tt=s.n($t);s("f9e3"),s("cd74"),s("4989"),s("15f5"),s("4238");e["a"].use(wt["a"]),e["a"].use(kt["default"]),e["a"].use(qt["a"]),e["a"].use(Et.a,{id:"UA-216923726-1",router:xt}),e["a"].use(Tt.a),e["a"].config.productionTip=!1,new e["a"]({router:xt,render:function(t){return t(x)}}).$mount("#app")},"760c":function(t,a,s){"use strict";s("c3f5")},"85ec":function(t,a,s){},8817:function(t,a,s){t.exports=s.p+"img/maintenance.cde5152b.svg"},9798:function(t,a,s){t.exports=s.p+"img/bug_hammer.eb6b8f22.svg"},b5e0:function(t,a,s){t.exports=s.p+"img/hero.fd7a3af4.png"},c3f5:function(t,a,s){}});
//# sourceMappingURL=app.8c960b31.js.map