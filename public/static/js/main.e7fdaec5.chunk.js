(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{20:function(e,t,a){"use strict";var n=a(37),r=a.n(n);a.d(t,"a",function(){return c});var c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return r()({method:t,url:"".concat("http://localhost:3000").concat(e),data:a,headers:n}).catch(function(e){return console.log(e)})}},40:function(e,t,a){e.exports=a(78)},45:function(e,t,a){},47:function(e,t,a){},7:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"c",function(){return r}),a.d(t,"a",function(){return c});var n={LOGIN_SUCCESS:"LOGIN_SUCCESS",LOGIN_FAILURE:"LOGIN_FAILURE",LOGOUT:"LOGOUT",CLEAR_TOKEN:"CLEAR_TOKEN"},r={SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE"},c={FETCH_INSTANCE_SUCCESS:"FETCH_INSTANCE_SUCCESS",FETCH_INSTANCE_FAILURE:"FETCH_INSTANCE_FAILURE",FETCH_NEW_INSTANCE_SUCCESS:"FETCH_NEW_INSTANCE_SUCCESS",FETCH_NEW_INSTANCE_FAILURE:"FETCH_NEW_INSTANCE_FAILURE",DETAIL_INSTANCE:"DETAIL_INSTANCE",CHANGE_STATUS:"CHANGE_STATUS",CHANGE_USER:"CHANGE_USER",CHANGE_PASSWORD:"CHANGE_PASSWORD"}},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),o=a.n(c),s=(a(45),a(2)),l=a(3),i=a(5),u=a(4),m=a(6),h=a(87),d=a(86),p=(a(47),a(14)),E=a(17),g=a.n(E),f=a(19),b=a(7),v=a(20),N=function(e){return{type:b.b.LOGIN_SUCCESS,payload:e,message:"\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng!"}},O=function(){return{type:b.b.LOGIN_FAILURE,message:"Username ho\u1eb7c m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n b\u1ecb sai!"}},j=a(18),S=a(27),C=a.n(S);C.a.options={closeButton:!1,debug:!1,newestOnTop:!0,progressBar:!0,positionClass:"toast-bottom-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"3000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};var y=function(e,t){C.a[e](t)},w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={txtUsername:"",txtPassword:""},a._onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(j.a)({},n,r))},a._onSubmit=function(e){e.preventDefault(),a.state.txtUsername.length>=6&&a.state.txtPassword.length>=6?a.props.login(a.state.txtUsername,a.state.txtPassword):a.state.txtUsername.length<6?y("warning","Username ph\u1ea3i > 6 k\xed t\u1ef1"):y("warning","Password ph\u1ea3i > 6 k\xed t\u1ef1")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.txtUsername,a=e.txtPassword;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"form-horizontal m-t-30",onSubmit:this._onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"T\xe0i Kho\u1ea3n"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"txtUsername",value:t,onChange:this._onChange,placeholder:"khanhney ho\u1eb7c khanhney.dev@gmail.com"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userpassword"},"M\u1eadt Kh\u1ea9u"),r.a.createElement("input",{type:"password",className:"form-control",id:"userpassword",name:"txtPassword",value:a,onChange:this._onChange,placeholder:"**********"})),r.a.createElement("div",{className:"form-group row m-t-20"},r.a.createElement("div",{className:"col-6"}),r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement("button",{className:"btn btn-primary w-md waves-effect waves-light",type:"submit"},"\u0110\u0103ng Nh\u1eadp")))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"undefined"!==e.username&&void 0!==e.username&&""!==e.username&&e.username!==t.txtUsername?{txtUsername:e.username}:null}}]),t}(n.Component),_=a(82),x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"text-center m-0"},r.a.createElement(_.a,{to:"/login",className:"logo logo-admin"},r.a.createElement("img",{src:"assets/images/iotHutech.png",height:120,alt:"logo"}))),r.a.createElement("div",{className:"p-3"},r.a.createElement("h4",{className:"text-muted font-18 m-b-5 text-center"},"Welcome IoT-HUTECH."),r.a.createElement("p",{className:"text-muted text-center"},"\u0110\u0103ng Nh\u1eadp \u0111\u1ec3 ti\u1ebfp t\u1ee5c."),this.props.showForm))))}}]),t}(n.Component),U=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"m-t-40 text-center"},r.a.createElement("p",null,"B\u1ea1n Ch\u01b0a C\xf3 T\xe0i Kho\u1ea3n ? ",r.a.createElement(_.a,{to:"/sign-up",className:"text-primary"},"\u0110\u0103ng K\xfd Ngay")),r.a.createElement("p",null,"\xa9 2018 KoF. Ph\xe1t tri\u1ec3n ",r.a.createElement("i",{className:"mdi mdi-heart text-danger"})," b\u1edfi",r.a.createElement("a",{style:{marginLeft:3},href:"https://ungdungthongminh.vn"},"ungdungthongminh.vn"))))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isAuth:!1,username:""},a._onLogin=function(e,t){a.props.loginAuth(e,t,a.props.history)},a._showForm=function(){return r.a.createElement(w,{username:a.state.username,login:function(e,t){return a._onLogin(e,t)}})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t){this.state.isAuth&&this.props.history.push("/instance")}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"wrapper-page"},r.a.createElement(x,{showForm:this._showForm()}),r.a.createElement(U,null)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.auth.authenticated&&e.auth.authenticated!==t.isAuth?{isAuth:e.auth.authenticated}:void 0!==e.location.state&&e.location.state.username!==t.username?{username:e.location.state.username}:null}}]),t}(n.Component),F=Object(p.b)(function(e,t){return{auth:e.auth}},function(e,t){return{loginAuth:function(t,a,n){e(function(e,t,a){return function(){var a=Object(f.a)(g.a.mark(function a(n){var r;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(v.a)("/user/login","POST",{username_mail:e,password:t});case 3:(r=a.sent).data.error?n(O()):(localStorage.setItem("token",r.data.data.token),localStorage.setItem("user",JSON.stringify(r.data.data.infoUser)),n(N(r.data.data.infoUser))),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),n(O());case 10:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()}(t,a))}}})(A),I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"text-center m-0"},r.a.createElement(_.a,{to:"/sign-up",className:"logo logo-admin"},r.a.createElement("img",{src:"assets/images/iotHutech.png",height:120,alt:"logo"}))),r.a.createElement("div",{className:"p-3"},r.a.createElement("h4",{className:"text-muted font-18 m-b-5 text-center"},"\u0110\u0103ng K\xfd Mi\u1ec5n Ph\xed"),r.a.createElement("p",{className:"text-muted text-center"},"\u0110\u0103ng K\xfd Ngay Cloud MQTT."),this.props.showForm))))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"m-t-40 text-center"},r.a.createElement("p",null,"T\xf4i \u0111\xe3 c\xf3 t\xe0i kho\u1ea3n ? ",r.a.createElement(_.a,{to:"/login",className:"text-primary"},"\u0110\u0103ng Nh\u1eadp")),r.a.createElement("p",null,"\xa9 2018 KoF. Ph\xe1t tri\u1ec3n ",r.a.createElement("i",{className:"mdi mdi-heart text-danger"})," b\u1edfi",r.a.createElement("a",{style:{marginLeft:3},href:"https://ungdungthongminh.vn"},"ungdungthongminh.vn"))))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={txtEmail:"",txtUsername:"",txtPassword:"",txtFullname:""},a._onChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(j.a)({},n,r))},a._onSubmit=function(e){e.preventDefault();var t=a.state,n=t.txtEmail,r=t.txtUsername,c=t.txtPassword,o=t.txtFullname;n&&r.length>=6&&c.length>=6&&o?a.props.register(r,c,n,o):n?a.state.txtUsername.length<6?y("warning","Username ph\u1ea3i > 6 k\xed t\u1ef1"):y("warning","Password ph\u1ea3i > 6 k\xed t\u1ef1"):y("warning","Email kh\xf4ng t\u1ed3n t\u1ea1i!")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.txtEmail,a=e.txtUsername,c=e.txtPassword,o=e.txtFullname;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"form-horizontal m-t-30",onSubmit:this._onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"useremail"},"Email"),r.a.createElement("input",{type:"email",className:"form-control",id:"useremail",placeholder:"khanhney.dev@gmail.com",name:"txtEmail",value:t,onChange:this._onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"fullname"},"H\u1ecd T\xean"),r.a.createElement("input",{type:"text",className:"form-control",id:"fullname",placeholder:"L\xea Duy Kh\xe1nh",name:"txtFullname",value:o,onChange:this._onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"T\xe0i Kho\u1ea3n"),r.a.createElement("input",{type:"text",className:"form-control",id:"username",placeholder:"khanhney",name:"txtUsername",value:a,onChange:this._onChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"userpassword"},"M\u1eadt Kh\u1ea9u"),r.a.createElement("input",{type:"password",className:"form-control",id:"userpassword",placeholder:"************",name:"txtPassword",value:c,onChange:this._onChange})),r.a.createElement("div",{className:"form-group row m-t-20"},r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement("button",{className:"btn btn-primary w-md waves-effect waves-light",type:"submit"},"\u0110\u0103ng K\xfd")))))}}]),t}(n.Component),L=function(e){return{type:b.c.SIGN_UP_SUCCESS,payload:e,message:"B\u1ea1n \u0111\xe3 \u0111\u0103ng k\xed th\xe0nh c\xf4ng!"}},P=function(){return{type:b.c.SIGN_UP_FAILURE,message:"T\u1ea1i kho\u1ea3n \u0111\xe3 t\u1ed3n t\u1ea1i!"}},G=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={isAuth:!1},a._onRegister=function(e,t,n,r){a.props.signUpAuth({username:e,password:t,email:n,fullname:r},a.props.history)},a._showForm=function(){return r.a.createElement(k,{register:function(e,t,n,r){return a._onRegister(e,t,n,r)}})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.state.isAuth&&this.props.history.push("/instance");return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"wrapper-page"},r.a.createElement(I,{showForm:this._showForm()}),r.a.createElement(T,null)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.auth.authenticated&&e.auth.authenticated!==t.isAuth?{isAuth:e.auth.authenticated}:null}}]),t}(n.Component),H=Object(p.b)(function(e,t){return{signUp:e.signUp,auth:e.auth}},function(e,t){return{signUpAuth:function(t,a){e(function(e,t){return function(){var a=Object(f.a)(g.a.mark(function a(n){var r;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(v.a)("/user/register","POST",e);case 3:(r=a.sent).data.error?n(P()):(n(L(r.data)),t.push("/login",{username:e.username})),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),n(P());case 10:case"end":return a.stop()}},a,this,[[0,7]])}));return function(e){return a.apply(this,arguments)}}()}(t,a))}}})(G),R=Object(n.lazy)(function(){return Promise.all([a.e(0),a.e(2)]).then(a.bind(null,88))}),D=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,83))}),K=Object(n.lazy)(function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,89))}),W=[{path:"/user",exact:!0,main:function(e){var t=e.match,a=e.history;return r.a.createElement(R,{match:t,history:a})}},{path:"/instance",exact:!0,main:function(e){var t=e.match,a=e.history;return r.a.createElement(D,{match:t,history:a})}},{path:"/instance/:idInstace",exact:!0,main:function(e){var t=e.match,a=e.history;return r.a.createElement(K,{match:t,history:a})}}],B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._onLogout=function(){return a.props.logout()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"dropdown notification-list"},r.a.createElement("div",{className:"dropdown notification-list nav-pro-img"},r.a.createElement("a",{className:"dropdown-toggle nav-link arrow-none waves-effect nav-user","data-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false"},r.a.createElement("h6",null,"Xin ch\xe0o! ",this.props.auth.payload.username)),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right profile-dropdown"},r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement(_.a,{className:"dropdown-item text-danger",to:"/login",onClick:this._onLogout},r.a.createElement("i",{className:"mdi mdi-power text-danger"})," Logout")))))}}]),t}(n.Component),M=Object(p.b)(function(e,t){return{auth:e.auth}},function(e,t){return{logout:function(){e((localStorage.removeItem("token"),localStorage.removeItem("user"),{type:b.b.LOGOUT,message:"B\u1ea1n \u0111\xe3 \u0111\u0103ng xu\u1ea5t th\xe0nh c\xf4ng!"}))}}})(B),z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"topbar"},r.a.createElement("div",{className:"topbar-left"},r.a.createElement(_.a,{to:"/instance",className:"logo"},r.a.createElement("span",null,r.a.createElement("img",{src:"/assets/images/logo-hutech-light.png",alt:"",height:70})," "),r.a.createElement("i",null,r.a.createElement("img",{src:"assets/images/logo-sm.png",alt:"",height:22})))),r.a.createElement("nav",{className:"navbar-custom"},r.a.createElement("ul",{className:"navbar-right d-flex list-inline float-right mb-0"},r.a.createElement(M,null)),r.a.createElement("ul",{className:"list-inline menu-left mb-0"}))))}}]),t}(n.Component),J=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"left side-menu"},r.a.createElement("div",{className:"slimscroll-menu",id:"remove-scroll"},r.a.createElement("div",{id:"sidebar-menu"},r.a.createElement("ul",{className:"metismenu",id:"side-menu"},r.a.createElement("li",null,r.a.createElement(_.a,{to:"/user",className:"waves-effect"},r.a.createElement("i",{className:"mdi mdi-account-location"})," ",r.a.createElement("span",null,"Th\xf4ng Tin Ng\u01b0\u1eddi D\xf9ng"))),r.a.createElement("li",null,r.a.createElement(_.a,{to:"/instance",className:"waves-effect"},r.a.createElement("i",{className:"mdi mdi-format-list-bulleted-type"})," ",r.a.createElement("span",null,"Instance"))))),r.a.createElement("div",{className:"clearfix"}))))}}]),t}(n.Component),Q=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("footer",{className:"footer"},"\xa9 2018 Lexa -",r.a.createElement("span",{className:"d-none d-sm-inline-block"},"Crafted with",r.a.createElement("i",{className:"mdi mdi-heart text-danger"})," by Themesbrand"),"."))}}]),t}(n.Component),X=function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,o=new Array(c),l=0;l<c;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o))))._showRoutes=function(e){var t=null;return e.length>0&&(t=e.map(function(e,t){return r.a.createElement(d.a,{key:t,path:e.path,exact:e.exact,component:e.main})})),r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(h.a,null,t))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"wrapper"},r.a.createElement(z,null),r.a.createElement(J,null),r.a.createElement("div",{className:"content-page"},this._showRoutes(W)),r.a.createElement(Q,null)))}}]),t}(n.Component),$=a(39),q=a(84);var V=Object(p.b)(function(e){return{auth:e.auth,token:e.auth.token}},null)(function(e){var t=e.component,a=Object($.a)(e,["component"]);return r.a.createElement(d.a,Object.assign({},a,{render:function(e){return a.auth.authenticated||void 0!==a.token&&a.token?r.a.createElement(t,e):r.a.createElement(q.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),Y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(d.a,{path:"/login",component:F}),r.a.createElement(d.a,{path:"/sign-up",component:H}),r.a.createElement(V,{path:"/",component:X})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=a(38),ee=a(15),te=a(8),ae={},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.b.LOGIN_SUCCESS:return y("success",t.message),Object(te.a)({},e,{authenticated:!0},t);case b.b.LOGIN_FAILURE:return y("error",t.message),Object(te.a)({},e,{message:t.message});case b.b.LOGOUT:return y("info",t.message),Object(te.a)({},e,{authenticated:!1,user:null});default:return Object(te.a)({},e)}},re={},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.c.SIGN_UP_SUCCESS:return y("success",t.message),Object(te.a)({},e,{user:t.payload});case b.c.SIGN_UP_FAILURE:return y("error",t.message),Object(te.a)({},e,{user:t.error});default:return Object(te.a)({},e)}},oe=a(23),se=[],le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.FETCH_INSTANCE_SUCCESS:return e=Object(oe.a)(t.payload),Object(oe.a)(e);case b.a.FETCH_INSTANCE_FAILURE:return Object(te.a)({},t);default:return Object(oe.a)(e)}},ie={},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.FETCH_NEW_INSTANCE_SUCCESS:return y("success",t.message),Object(te.a)({},e,t.payload);case b.a.FETCH_NEW_INSTANCE_FAILURE:return y("warning",t.message),Object(te.a)({},t);default:return Object(te.a)({},e)}},me=[],he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.DETAIL_INSTANCE:return Object(te.a)({},t.payload);case b.a.CHANGE_STATUS:case b.a.CHANGE_USER:case b.a.CHANGE_PASSWORD:return y("info",t.message),Object(te.a)({},e,t.payload);default:return Object(te.a)({},e)}},de=Object(ee.c)({auth:ne,signUp:ce,instances:le,instance:he,newInstance:ue});var pe,Ee,ge=function(e){var t=Object(ee.a)(Z.a);return Object(ee.d)(t)(ee.e)(de,e)}(),fe=a(85),be=localStorage.getItem("token"),ve=localStorage.getItem("user");be&&void 0!==be&&"undefined"!==be&&ve&&void 0!==ve&&"underfined"!==ve&&ge.dispatch((pe=be,Ee=JSON.parse(ve),{type:b.b.LOGIN_SUCCESS,token:pe,payload:Ee,message:"\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng!"})),o.a.render(r.a.createElement(p.a,{store:ge},r.a.createElement(fe.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,6,5]]]);
//# sourceMappingURL=main.e7fdaec5.chunk.js.map