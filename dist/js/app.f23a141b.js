(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d2371d0":"47a10e52","chunk-3d7917d7":"692dd1bd","chunk-59aeb7b9":"889f74ff"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3d7917d7":1,"chunk-59aeb7b9":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2371d0":"31d6cfe0","chunk-3d7917d7":"c306d7b4","chunk-59aeb7b9":"3fee243c"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"028d":function(e,t,n){},"034f":function(e,t,n){"use strict";n("85ec")},"0f9a":function(e,t,n){"use strict";n.r(t);var r=n("a78e"),o=n.n(r);function a(){var e=o.a.get("token");return e||""}function s(){var e=o.a.get("student");return e||{}}var i={token:a(),student:s()},c={SET_TOKEN:function(e,t){e.token=t},SET_ADMIN:function(e,t){e.student=t}},u={login:function(e,t,n){var r=e.commit;r("SET_TOKEN",t),r("SET_ADMIN",n)},logout:function(e){var t=e.commit;t("SET_TOKEN",""),t("SET_ADMIN",{})}};t["default"]={namespaced:!0,state:i,mutations:c,actions:u}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5c96"),a=n.n(o),s=(n("0fae"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),i=[],c=(n("034f"),n("2877")),u={},l=Object(c["a"])(u,s,i,!1,null,null,null),d=l.exports,p=n("8c4f"),f=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-page"},[n("div",{staticClass:"login-content"},[e._m(0),n("div",{staticClass:"login-form-container"},[n("div",{staticClass:"login-title"},[e._v("LOG IN")]),n("div",{staticClass:"email-input-wrapper login-input-wrapper"},[n("el-input",{staticClass:"email-input",attrs:{placeholder:"email"},on:{input:function(t){return e.clearError("email")}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.error.email.isShow,expression:"error.email.isShow"}],staticClass:"error-notification"},[e._v(e._s(e.error.email.message))])],1),n("div",{staticClass:"password-input-wrapper login-input-wrapper"},[n("el-input",{staticClass:"password-input",attrs:{type:"password",placeholder:"password"},on:{input:function(t){return e.clearError("password")}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.error.password.isShow,expression:"error.password.isShow"}],staticClass:"error-notification"},[e._v(e._s(e.error.password.message))])],1),n("div",{staticClass:"login-button-wrapper"},[n("div",{staticClass:"login-btn",on:{click:e.login}},[e._v("Log in")])])])])])}),m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-container"},[r("img",{staticClass:"login-image",attrs:{src:n("e4e7"),alt:""}})])}],h=(n("498a"),n("b775")),v={login:function(e){return Object(h["a"])({url:"/auth/studentLogin",method:"post",data:e})},getStudentInfo:function(){return Object(h["a"])({url:"/auth/getStudentInfo",method:"get"})}},g=n("c9d9"),b=n("a78e"),w=n.n(b),_={data:function(){return{email:"",password:"",error:{email:{isShow:!1,message:"Email required"},password:{isShow:!1,message:"Password required"}}}},methods:{login:function(){var e=this,t={email:this.email,password:this.password};this.validateBeforeLogin()&&v.login(t).then((function(t){if(t.code==g["a"].RESPONSE_CODE.SUCCESS){var n=t.data.token;return w.a.set("token",n,{domain:"localhost"}),void v.getStudentInfo().then((function(t){w.a.set("student",t.data.student,{domain:"localhost"}),e.$store.dispatch("user/login",n,t.data.student),e.$router.push("/groups/index")}))}return t.code==g["a"].RESPONSE_CODE.EMAIL_NOT_EXIST?(e.error.email.message="Email not exist",void(e.error.email.isShow=!0)):t.code==g["a"].RESPONSE_CODE.ERROR_PASSWORD?(e.error.password.message="Passowrd not correct",void(e.error.password.isShow=!0)):void 0}))},validateBeforeLogin:function(){return""==this.email.trim()?(this.error.email.message="Email cannot be empty",this.error.email.isShow=!0,!1):""!=this.password||(this.error.email.message="Password cannot be empty",this.error.password.isShow=!0,!1)},clearError:function(e){this.error[e].isShow=!1}}},E=_,S=(n("ef13"),Object(c["a"])(E,f,m,!1,null,"042219e4",null)),C=S.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-wrapper"},[n("SideBar"),n("div",{staticClass:"right-panel"},[e._m(0),n("div",{staticClass:"content-wrapper"},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)])],1)},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-wrapper"},[n("div",{staticClass:"college-title"},[e._v("The university of Sydney")]),n("div",{staticClass:"user-wrapper"},[n("i",{staticClass:"el-icon-user"})])])}],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"side-bar-wrapper"},[e._m(0),n("div",{staticClass:"menu-wrapper"},[n("div",{staticClass:"home"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Home",placement:"top-start"}},[n("i",{staticClass:"el-icon-s-home menu-icon",class:{active:"/home/index"==e.currentRoute},on:{click:function(t){return e.to("/home/index")}}})])],1),n("div",{staticClass:"groups"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Group",placement:"top-start"}},[n("i",{staticClass:"el-icon-s-custom menu-icon",class:{active:"/groups/index"==e.currentRoute},on:{click:function(t){return e.to("/groups/index")}}})])],1),n("div",{staticClass:"projects"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Projects",placement:"top-start"}},[n("i",{staticClass:"el-icon-document menu-icon",class:{active:"/projects/index"==e.currentRoute},on:{click:function(t){return e.to("/projects/index")}}})])],1)]),e._m(1)])},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo-wrapper"},[r("img",{staticClass:"logo",attrs:{src:n("bcc3")}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-out-wrapper"},[n("div",{staticClass:"logout-text"},[e._v("Log Out")])])}],T={data:function(){return{}},computed:{currentRoute:function(){return this.$route.path}},methods:{to:function(e){this.$route.path!=e&&this.$router.push(e)}}},j=T,P=(n("6b87"),Object(c["a"])(j,y,k,!1,null,null,null)),N=P.exports,A={components:{SideBar:N},computed:{}},M=A,R=(n("904d"),Object(c["a"])(M,x,O,!1,null,"24278a76",null)),I=R.exports;r["default"].use(p["a"]);var L=[{path:"/",name:"Login",component:C},{path:"/home",name:"Home",component:I,redirect:"/home/index",children:[{path:"index",name:"HomeIndex",component:function(){return n.e("chunk-59aeb7b9").then(n.bind(null,"7abe"))}}]},{path:"/groups",name:"Groups",component:I,redirect:"/groups/index",children:[{path:"index",name:"HomeIndex",component:function(){return n.e("chunk-3d7917d7").then(n.bind(null,"e7e6"))}}]},{path:"/projects",name:"Projects",component:I,redirect:"/projects/index",children:[{path:"index",name:"HomeIndex",component:function(){return n.e("chunk-2d2371d0").then(n.bind(null,"fa76"))}}]}],D=new p["a"]({mode:"history",base:"/",routes:L}),$=D,B=(n("ac1f"),n("5319"),n("2f62")),H={},U=H;r["default"].use(B["a"]);var q=n("c653"),J=q.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=q(t);return e[n]=r.default,e}),{}),W=new B["a"].Store({modules:J,getters:U}),K=W,F=n("a4a1"),G=n.n(F);n("f6b9"),n("b20f"),n("f5df1");r["default"].use(a.a),r["default"].use(p["a"]),r["default"].use(G.a),new r["default"]({el:"#app",router:$,store:K,render:function(e){return e(d)}})},"58ba":function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"60px"}},"6b87":function(e,t,n){"use strict";n("58ba")},"85ec":function(e,t,n){},"8d50":function(e,t,n){},"904d":function(e,t,n){"use strict";n("028d")},b20f:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409eff",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"60px"}},b775:function(e,t,n){"use strict";n("d3b7");var r=n("bc3a"),o=n.n(r),a=n("a78e"),s=n.n(a),i=o.a.create({baseURL:"https://api.usydprojectallocation.com",timeout:5e3});i.interceptors.request.use((function(e){return s.a.get("token")&&(e.headers["token"]=s.a.get("token")),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){var t=e.data;return t})),t["a"]=i},bcc3:function(e,t,n){e.exports=n.p+"img/usyd-logo.8d2627c2.png"},c653:function(e,t,n){var r={"./app.js":"d9cd","./user.js":"0f9a"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="c653"},c9d9:function(e,t,n){"use strict";var r={MONTH_MAPPER:{1:"Jan",2:"Feb",3:"Mar",4:"Apri",5:"May",6:"June",7:"July",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},RESPONSE_CODE:{SUCCESS:2e4,EMPTY_EMAIL_PASSWORD:20002,EMAIL_NOT_EXIST:20003,ERROR_PASSWORD:20004},ADMIN_TYPE:{0:"super_admin",1:"admin"}};t["a"]=r},d9cd:function(e,t,n){"use strict";n.r(t);n("a78e");var r={},o={},a={};t["default"]={namespaced:!0,state:r,mutations:o,actions:a}},e4e7:function(e,t,n){e.exports=n.p+"img/login_bg.6ddcb7dd.jpg"},ef13:function(e,t,n){"use strict";n("8d50")}});
//# sourceMappingURL=app.f23a141b.js.map