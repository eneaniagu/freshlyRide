_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"1OyB":function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return n}))},"5HXA":function(e,t,r){"use strict";var n=r("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?n:n.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"7/s4":function(e,t,r){"use strict";var n,a=r("hKbo"),s=(n=a)&&n.__esModule?n:{default:n};e.exports=s.default},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("cha2")}])},Kacz:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){console.warn("[react-gtm]",e)}},cha2:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),s=r("HaE+"),c=r("rePB"),i=r("nKUr"),o=(r("zPlV"),r("ANjH")),u=r("5HXA");function l(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(a){return"function"===typeof a?a(r,n,e):t(a)}}}}var d=l();d.withExtraArgument=l;var p=d,m=r("Hse8");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={isAuthenticated:!1,loading:!0,loginLoading:!1,user:{},loginError:"",registerError:"",authError:"",userLoadedError:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.d:return f(f({},e),{},{loading:!1,isAuthenticated:!0,loginError:"",registerError:""});case m.m:return f(f({},e),{},{loading:!1,isAuthenticated:!0,loginError:"",registerError:"",user:t.payload});case m.n:return f(f({},e),{},{loading:!1,isAuthenticated:!1,userLoadedError:t.payload});case m.k:return f(f({},e),{},{loginLoading:!0});case m.f:return f(f({},e),{},{isAuthenticated:!0,loginLoading:!1});case m.e:return f(f({},e),{},{loginLoading:!1,isAuthenticated:!1,user:{},loginError:t.payload});case m.l:return f(f({},e),{},{registerLoading:!0});case m.i:return f(f({},e),{},{isAuthenticated:!0,registerLoading:!1});case m.h:return f(f({},e),{},{registerLoading:!1,isAuthenticated:!1,user:{},registerError:t.payload});case m.g:return f(f({},e),{},{isAuthenticated:!1,loading:!1,loginLoading:!1,user:{},loginError:"",registerError:"",authError:"",userLoadedError:""});case m.c:case m.j:return f(f({},e),{},{isAuthenticated:!1,loading:!1,loginLoading:!1,user:{},loginError:"",registerError:"",authError:"",userLoadedError:""})}return e},x=[],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return e};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={product:[],accepted:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.a:return O(O({},e),{},{accepted:!0,product:t.payload});default:return e}},k=Object(o.combineReducers)({alert:g,auth:j,AddProduct:y}),N=[p],E=Object(o.createStore)(k,{},Object(u.composeWithDevTools)(o.applyMiddleware.apply(void 0,N))),P=r("/MKj"),_=r("1OyB"),L=r("vuIU"),S=r("vDqi"),T=r.n(S),D=r("cvZV"),C=function(){function e(){Object(_.a)(this,e),Object(c.a)(this,"protectedRoutes",void 0),this.protectedRoutes=D.protectedRoutes}return Object(L.a)(e,[{key:"redirectOnAuthentication",value:function(){var e=Object(s.a)(a.a.mark((function e(t,r,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/sanctum/csrf-cookie");case 3:return e.next=5,T.a.get("/api/user",{headers:{Cookie:t.headers.cookie}});case 5:if(200!==e.sent.status){e.next=12;break}return r.writeHead(301,{Location:n}),r.end(),e.abrupt("return",{props:{}});case 12:return e.abrupt("return",{props:{}});case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",{props:{}});case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"authenticateUser",value:function(){var e=Object(s.a)(a.a.mark((function e(t,r,n){var s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.isNoProtectedRoute(n),e.prev=1,e.next=4,T.a.get("/sanctum/csrf-cookie");case 4:if(t.headers.cookie||s){e.next=11;break}if("/user/login"!==n){e.next=8;break}return r.end(),e.abrupt("return",{user:!1});case 8:return r.writeHead(302,{Location:"/user/login"}),r.end(),e.abrupt("return",{user:!1});case 11:return e.next=13,T.a.get("/api/user",{headers:{Cookie:t.headers.cookie}});case 13:if(200===(c=e.sent).status){e.next=17;break}return r.end(),e.abrupt("return",{user:!1});case 17:if(!(i=c.data)||"/user/register"!==n&&"/user/login"!==n){e.next=23;break}r.writeHead(302,{Location:"/dashboard"}),r.end(),e.next=27;break;case 23:if(i||s){e.next=27;break}return r.writeHead(302,{Location:"/user/login"}),r.end(),e.abrupt("return",{user:!1});case 27:return e.abrupt("return",{user:i});case 30:if(e.prev=30,e.t0=e.catch(1),!e.t0.response||401!==e.t0.response.status||s){e.next=37;break}if("/user/login"!==n){e.next=35;break}return e.abrupt("return",{user:!1});case 35:r.writeHead(302,{Location:"/user/login"}),r.end();case 37:return e.abrupt("return",{user:!1});case 38:case"end":return e.stop()}}),e,this,[[1,30]])})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"isNoProtectedRoute",value:function(e){return this.protectedRoutes.every((function(t){return!e.startsWith(t)}))}}]),e}(),R=r("q1tI"),A=r("7/s4"),M=r.n(A),B=r("Aiso"),H=r.n(B),W=r("RW2Z"),I=r("v7au"),X=r("Iu7H"),F=function(e){return Object(i.jsxs)("nav",{className:"flex justify-between items-center w-full h-[5em]  text-block relative  font-mono navbar",children:[Object(i.jsx)("div",{onClick:e.drawerClicked,className:"md:ml-[12px] ml-[12px] h-[2em] w-[2em] md:h-[3em] md:w-[3em] justify-center items-center flex rounded-full bg-white",children:Object(i.jsx)(W.b,{className:" text-[#f98a8d] w-[1em] h-[1em] md:w-[1.5em] md:h-[1.5em]"})}),Object(i.jsx)("div",{className:"absolute md:left-[10em] left-[10em]",children:Object(i.jsx)("h2",{children:"DOGIE Mall"})}),Object(i.jsxs)("div",{className:"md:mt-16 md:ml-[26em] flex md:justify-center justify-between absolute inset-y-0 mt-[70px]",children:[Object(i.jsx)("input",{placeholder:"Search for Product",className:"text-left text-sm shadow-lg broder-2 ml-[10px] rounded-full md:w-[30em] md:h-[3em] h-[3em] w-[20em] ",style:{borderRadius:"10px",outline:"none"}}),Object(i.jsx)("span",{className:"absolute inset-y-0 left-[16em] mt-4",children:Object(i.jsx)(W.d,{className:"text-[#d5d5d5]"})}),Object(i.jsx)("span",{className:"text-center  font-bold shadow-lg md:h-[3em] md:w-[3em] inset-y-0 md:left-[48em]  md:top-[14px] h-[2.9em] w-[3em]  ml-[20px] mr-3",style:{borderTopRightRadius:"10px",borderBottomRightRadius:"10px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px",outline:"none",color:"black",background:"#f98a8d"},children:Object(i.jsx)(X.a,{style:{color:"white",height:"2em",marginTop:"10px",marginLeft:"10px",width:"2em"}})})]}),Object(i.jsxs)("div",{className:"flex md:mr-[20px] mr-[1px] mt-[8px]",children:[Object(i.jsxs)("div",{className:" mt-[10px] mr-2 h-[2em] w-[2em] md:h-[2.8em] md:w-[2.8em] md:ml-6 justify-center items-center flex rounded-full bg-white",children:[Object(i.jsx)("span",{className:"text-white flex justify-center text-center text-xs absolute rounded-full w-[12px] h-[12px] mt-[-3px] ml-[10px] md:w-[13px] md:h-[13px] md:top-17px md:mt-[-6px] md:ml-[8px] bg-[#ed1a52]",children:"3"}),Object(i.jsx)(I.a,{className:"md:w-[1.9em] md:h-[1.9em] w-[1.4em] h-[1.4em] text-[#c7c0bf]"})]}),Object(i.jsx)("div",{className:"md:h-[4em] md:w-[4em] h-[4em] w-[4em]",onMouseOver:e.hover,onMouseOut:e.hoverout,children:Object(i.jsx)(H.a,{width:50,height:50,src:"/images/user.png",className:"rounded-full md:w-16 md:h-16 h-16 w-16"})})]})]})},V=function(e){return Object(i.jsxs)("nav",{className:"flex justify-between border-b-4 items-center w-full h-[5em]  text-block fixed font-mono navbar top-0",children:[Object(i.jsx)("div",{onClick:e.drawerClicked,className:"md:ml-[12px] ml-[12px] h-[2em] w-[2em] md:h-[3em] md:w-[3em] justify-center items-center flex rounded-full bg-white",children:Object(i.jsx)(W.b,{className:" text-[#f98a8d] w-[1em] h-[1em] md:w-[1.5em] md:h-[1.5em]"})}),Object(i.jsx)("div",{className:"absolute md:left-[10em] left-[10em]",children:Object(i.jsx)("h2",{children:"Abs"})}),Object(i.jsxs)("div",{className:"flex md:mr-[20px] mr-[1px] mt-[8px]",children:[Object(i.jsxs)("div",{className:" mt-[10px] mr-2 h-[2em] w-[2em] md:h-[2.8em] md:w-[2.8em] md:ml-6 justify-center items-center flex rounded-full bg-white",children:[Object(i.jsx)("span",{className:"text-white flex justify-center text-center text-xs absolute rounded-full w-[12px] h-[12px] mt-[-3px] ml-[10px] md:w-[13px] md:h-[13px] md:top-17px md:mt-[-6px] md:ml-[8px] bg-[#ed1a52]",children:"3"}),Object(i.jsx)(W.c,{className:"md:w-[1.9em] md:h-[1.9em] w-[1.4em] h-[1.4em] text-[#c7c0bf]"})]}),Object(i.jsx)("div",{className:"md:h-[4em] md:w-[4em] h-[4em] w-[4em]",onMouseOver:e.hover,onMouseOut:e.hoverout,children:Object(i.jsx)(H.a,{width:50,height:50,src:"/images/user.png",className:"rounded-full md:w-16 md:h-16 h-16 w-16"})})]})]})},K=r("33Fu"),U=r("YFqc"),z=r.n(U);var q=function(){return Object(i.jsx)("div",{className:"fixed border-t-4  h-[62px] bg-[#ffff] bot bottom-0",children:Object(i.jsxs)("div",{className:"flex  space-x-8 ml-4 mr-3 mt-3",children:[Object(i.jsx)(z.a,{href:"/dashboard",children:Object(i.jsx)(K.e,{className:"mobilemenu"})}),Object(i.jsx)(K.c,{className:"mobilemenu"}),Object(i.jsx)(K.b,{className:"mobilemenu"}),Object(i.jsx)(K.a,{className:"mobilemenu"}),Object(i.jsx)(K.d,{className:"mobilemenu"})]})})};function J(){var e=[{headline:"Links",content:[{title:"Home",link:"/"},{title:"Kiddies",link:"/docs"},{title:"Ladies",link:"/blog"},{title:"Skin service",link:"/contact"}]},{headline:"Social Media",content:[{title:"Twitter",link:"/"},{title:"facebook",link:"/"}]},{headline:"Legal",content:[{title:"Privacy",link:"/privacy"},{title:"Imprint",link:"/imprint"}]}].map((function(e){return Object(i.jsxs)("div",{className:"text-white",children:[Object(i.jsx)("h4",{className:"text-lg",children:e.headline}),e.content.map((function(e){return Object(i.jsx)(Z,{title:e.title,link:e.link},e.link)}))]},e.headline)}));return Object(i.jsx)("footer",{className:" advanced-footer w-screen py-4 px-4 bg-[#232f3e] text-white",children:Object(i.jsx)("div",{className:" container mx-auto w-full grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-28 text-white",children:e})})}function Z(e){var t=e.title,r=e.link,n=e.marginLeft;return Object(i.jsx)(z.a,{href:r,children:Object(i.jsx)("h5",{className:"hover:text-red text-white hover:underline cursor-pointer ".concat(n?"ml-4":""),children:t})})}var G=r("20a2"),Y=r("oYlB"),Q=r("k0K/");var $=Object(P.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,loading:e.auth.registerLoading}}),{logout:Y.c})((function(e){var t=Object(G.useRouter)(),r=Object(R.useState)(!1);r[0],r[1],Object(R.useEffect)((function(){e.isAuthenticated||t.push("/user/login")}),[e.isAuthenticated]);var n="sidedrawer";return e.show&&(n="sidedrawer open"),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:n,children:[Object(i.jsx)("div",{className:"h-[50px] w-full ",style:{borderBottom:"2px solid "}}),Object(i.jsx)("div",{className:"",children:Object(i.jsxs)("ul",{className:"space-y-2 ml-10  items-center mt-4 overflow-y-scroll",children:[Q.a.map((function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(z.a,{as:"/dashboard/".concat(e.link),href:"/dashboard/[pages]",children:Object(i.jsx)("li",{className:"ml-4 text-xs h-[20px] sidenavlink ",children:Object(i.jsx)("a",{children:e.cat})})})})})),Object(i.jsx)("li",{onClick:function(){e.logout()},children:"Logout"})]})})]})})}));var ee=function(e){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{onClick:e.clickBack,className:"backdrop fixed h-[100%] w-[100%]"})})};r("nfPq");var te=function(e){var t="sidebar";return e.show&&(t="sidebar open"),Object(i.jsxs)("div",{className:t,children:[Object(i.jsx)("div",{className:"h-[50px] w-full bg-red-300"}),Object(i.jsx)("div",{className:"",children:Object(i.jsx)("ul",{className:"space-y-2 ml-10  items-center mt-4 overflow-y-scroll",children:Q.b.map((function(e){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h3",{className:"text-base font-thin",children:e.title}),Object(i.jsx)("li",{className:"ml-4 text-xs h-[20px]",children:e.cat})]})}))})})]})},re=r("X13+");var ne=function(){return Object(i.jsxs)("div",{className:"flex ml-[15.5rem] md:ml-[70em] mr-4 dropdown mt-[-20px] z-40 fixed w-[10em] h-[10em]",children:[Object(i.jsx)(re.a,{className:"ml-[7.2rem] mt-[-10.0px] text-yellow-50 absolute"}),Object(i.jsx)("div",{className:"",children:Object(i.jsxs)("ul",{className:"justfy-center items-center ml-10 mt-4 space-y-4",children:[Object(i.jsxs)("li",{children:["Flavourte",Object(i.jsx)("span",{className:"text-white flex justify-center text-center text-xs absolute rounded-full w-[12px] h-[12px] mt-[-25px] ml-[65px] md:w-[13px] md:h-[13px] md:top-17px md:mt-[-30px] md:ml-[40px] bg-[#ed1a52]",children:"3"})]}),Object(i.jsx)("li",{children:"Settings"}),Object(i.jsx)("li",{children:"Sign Out"})]})})]})};function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ce(e){M.a.initialize({gtmId:"GTM-WW662TK"});var t=Object(G.useRouter)(),r=Object(G.useRouter)(),n=D.protectedRoutes.every((function(e){return!r.pathname.startsWith(e)}));Object(R.useEffect)((function(){e.user?E.dispatch({type:m.m,payload:e.user}):E.dispatch({type:m.n})}),[]);var a,s,c=Object(R.useState)(!1),o=c[0],u=c[1],l=Object(R.useState)(!1),d=l[0],p=l[1],h=function(){u(!o)},f=function(){p(!1)},b=function(){p(!0)};return o&&(s=Object(i.jsx)(ee,{clickBack:function(){u(!1)}})),d&&(a=Object(i.jsx)(ne,{})),"/user/login"===t.pathname||"/user/register"===t.pathname?Object(i.jsx)("div",{style:{height:"100%"},children:Object(i.jsxs)(P.a,{store:E,children:[Object(i.jsx)(e.Component,se({},e.pageProps)),n]})}):(console.log(t.asPath),"dashboard/home"==t.asPath?Object(i.jsx)("div",{style:{height:"100%"},children:Object(i.jsxs)(P.a,{store:E,children:[Object(i.jsx)(V,{drawerClicked:h,hover:b,hoverout:f}),Object(i.jsx)($,{show:o}),a,s,Object(i.jsx)(e.Component,se({},e.pageProps)),n&&Object(i.jsx)(J,{}),n]})}):"/dashboard"===t.pathname||"/dashboard/[pages]"==t.pathname?Object(i.jsx)("div",{style:{height:"100%"},children:Object(i.jsxs)(P.a,{store:E,children:[Object(i.jsx)(V,{drawerClicked:h,hover:b,hoverout:f}),Object(i.jsx)($,{show:o}),a,s,Object(i.jsx)(e.Component,se({},e.pageProps)),Object(i.jsx)(q,{}),n,n]})}):Object(i.jsx)("div",{style:{height:"100%"},children:Object(i.jsxs)(P.a,{store:E,children:[Object(i.jsx)(F,{drawerClicked:h,hover:b,hoverout:f}),Object(i.jsx)(te,{show:o}),a,s,Object(i.jsx)(e.Component,se({},e.pageProps)),n&&Object(i.jsx)(J,{}),n]})}))}r("cvZV"),ce.getInitialProps=function(){var e=Object(s.a)(a.a.mark((function e(t){var r,n,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.ctx,n=r.req,s=r.pathname,c=r.res,n&&s&&c){e.next=6;break}return e.abrupt("return",{});case 6:return i=new C,e.next=9,i.authenticateUser(n,c,s);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=ce},cvZV:function(e,t,r){"use strict";r.r(t),r.d(t,"protectedRoutes",(function(){return s}));var n=r("vDqi"),a=r.n(n);a.a.defaults.withCredentials=!0,a.a.defaults.baseURL="http://localhost:8000";var s=["/dashboard","/profile","/acount"]},hKbo:function(e,t,r){"use strict";var n,a=r("wWlz"),s=(n=a)&&n.__esModule?n:{default:n};var c={dataScript:function(e){var t=document.createElement("script");return t.innerHTML=e,t},gtm:function(e){var t=s.default.tags(e);return{noScript:function(){var e=document.createElement("noscript");return e.innerHTML=t.iframe,e},script:function(){var e=document.createElement("script");return e.innerHTML=t.script,e},dataScript:this.dataScript(t.dataLayerVar)}},initialize:function(e){var t=e.gtmId,r=e.events,n=void 0===r?{}:r,a=e.dataLayer,s=e.dataLayerName,c=void 0===s?"dataLayer":s,i=e.auth,o=void 0===i?"":i,u=e.preview,l=void 0===u?"":u,d=this.gtm({id:t,events:n,dataLayer:a||void 0,dataLayerName:c,auth:o,preview:l});a&&document.head.appendChild(d.dataScript),document.head.insertBefore(d.script(),document.head.childNodes[0]),document.body.insertBefore(d.noScript(),document.body.childNodes[0])},dataLayer:function(e){var t=e.dataLayer,r=e.dataLayerName,n=void 0===r?"dataLayer":r;if(window[n])return window[n].push(t);var a=s.default.dataLayer(t,n),c=this.dataScript(a);document.head.insertBefore(c,document.head.childNodes[0])}};e.exports=c},"k0K/":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=[{title:"Body Fit",cat:"Clothing"},{title:"Digital",cat:"Electronic"},{title:"kiddies",cat:"Toys"},{title:"Education",cat:"Books"},{title:"Skin Care",cat:"Creams "},{title:"Wears",cat:"Foot Wear"},{title:"Skills",cat:"Training"},{title:"Skin Care",cat:"Creams "},{title:"Wears",cat:"Foot Wear"},{title:"Skills",cat:"Training"},{title:"Body Fit",cat:"Clothing"},{title:"Digital",cat:"Electronic"},{title:"kiddies",cat:"Toys"},{title:"kiddies",cat:"Toys"},{title:"Education",cat:"Books"},{title:"Skin Care",cat:"Creams "},{title:"Wears",cat:"Foot Wear"}],a=[{title:"Pricing",cat:"Pricing",link:"pricing"},{title:"Perference",cat:"Perference",link:"settings"},{title:"Sale",cat:"Sale",link:"sale"},{title:"Orders",cat:"Orders",link:"orders"},{title:"Product",cat:"Product ",link:"product"},{title:"Supply",cat:"Supply",link:"supply"},{title:"Purchase",cat:"Purchase",link:"purchase"},{title:"Market Pricing",cat:"Market Pricing",link:"marketing"},{title:"Prices",cat:"Prices",link:"pricing"}]},oYlB:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"d",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"a",(function(){return m})),r.d(t,"e",(function(){return h})),r.d(t,"f",(function(){return f}));var n=r("o0o1"),a=r.n(n),s=r("HaE+"),c=r("vDqi"),i=r.n(c),o=r("Hse8"),u=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.get("/sanctum/csrf-cookie");case 3:return e.next=5,i.a.get("/user");case 5:if(200!==(r=e.sent).status){e.next=9;break}return t({type:o.m,payload:r.data}),e.abrupt("return",r.data);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},l=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:o.k}),r.next=4,i.a.get("/sanctum/csrf-cookie");case 4:return r.next=6,i.a.post("/login",{email:e,password:t});case 6:201===r.sent.status&&(n(u()),n({type:o.f})),r.next=19;break;case 10:if(r.prev=10,r.t0=r.catch(0),!r.t0.response||401!==r.t0.response.status){r.next=14;break}return r.abrupt("return",n({type:o.e,payload:"Email or password are incorrect."}));case 14:if(!r.t0.response||419!==r.t0.response.status){r.next=18;break}return r.abrupt("return",n({type:o.e,payload:"Application access denied."}));case 18:return r.abrupt("return",n({type:o.b,payload:"Sorry, somethig went wrong."}));case 19:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()},d=function(e,t,r,n){return function(){var c=Object(s.a)(a.a.mark((function s(c){var l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c({type:o.l}),a.next=4,i.a.get("/sanctum/csrf-cookie");case 4:return a.next=6,i.a.post("/register",{name:e,email:t,password:r,password_confirmed:n});case 6:201===a.sent.status&&c(u()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),a.t0.response&&422===a.t0.response.status?(l=a.t0.response.data.errors.email[0])&&c({type:o.h,payload:l}):c({type:o.h,payload:"Sorry, something went wrong."});case 13:case"end":return a.stop()}}),s,null,[[0,10]])})));return function(e){return c.apply(this,arguments)}}()},p=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.a.post("/logout");case 3:204===e.sent.status&&t({type:o.g}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.post("/password/email",{email:e});case 3:if(200!==(n=t.sent).status){t.next=6;break}return t.abrupt("return",{success:n.data.message,error:""});case 6:t.next=13;break;case 8:if(t.prev=8,t.t0=t.catch(0),422!==t.t0.response.status){t.next=13;break}return r({type:o.c}),t.abrupt("return",{success:"",error:"Seems like there is no account for that email."});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e,t,r){return function(){var n=Object(s.a)(a.a.mark((function n(s){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.post("/password/reset",{email:e,password:t,token:r});case 3:if(200!==(c=n.sent).status){n.next=6;break}return n.abrupt("return",{success:c.data.message,error:""});case 6:return n.abrupt("return",{success:"",error:"The given data was invalid"});case 9:return n.prev=9,n.t0=n.catch(0),s({type:o.c}),n.abrupt("return",{success:"",error:"The given data is invalid."});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},f=function(e,t,r,n){return function(){var c=Object(s.a)(a.a.mark((function s(c){var o;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,o="/email/verify/".concat(e,"/").concat(t,"?expires=").concat(r,"&signature=").concat(n),a.next=4,i.a.get(o);case 4:if(204!==a.sent.status){a.next=9;break}return a.abrupt("return",{success:!0,error:""});case 9:return a.abrupt("return",{success:!1,error:"Something went wrong"});case 10:a.next=19;break;case 12:if(a.prev=12,a.t0=a.catch(0),!a.t0.response||!a.t0.response.data){a.next=18;break}return a.abrupt("return",{success:!1,error:a.t0.response.data.message});case 18:return a.abrupt("return",{success:!1,error:"Sorry, something went wrong."});case 19:case"end":return a.stop()}}),s,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}()}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},vuIU:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}r.d(t,"a",(function(){return a}))},wWlz:function(e,t,r){"use strict";var n,a=r("Kacz"),s=(n=a)&&n.__esModule?n:{default:n};var c={tags:function(e){var t=e.id,r=e.events,n=e.dataLayer,a=e.dataLayerName,c=e.preview,i="&gtm_auth="+e.auth,o="&gtm_preview="+c;return t||(0,s.default)("GTM Id is required"),{iframe:'\n      <iframe src="https://www.googletagmanager.com/ns.html?id='+t+i+o+'&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',script:"\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', "+JSON.stringify(r).slice(1,-1)+"});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'"+i+o+"&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','"+a+"','"+t+"');",dataLayerVar:this.dataLayer(n,a)}},dataLayer:function(e,t){return"\n      window."+t+" = window."+t+" || [];\n      window."+t+".push("+JSON.stringify(e)+")"}};e.exports=c},zPlV:function(e,t,r){}},[[0,0,1,12,13,20,14,18,17,2,3,4,5,10]]]);