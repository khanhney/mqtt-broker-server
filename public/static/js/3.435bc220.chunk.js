(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{79:function(e,t,a){"use strict";a.d(t,"d",function(){return o}),a.d(t,"e",function(){return m}),a.d(t,"f",function(){return f}),a.d(t,"b",function(){return E}),a.d(t,"c",function(){return b}),a.d(t,"a",function(){return y});var n=a(17),r=a.n(n),c=a(19),s=a(7),l=a(20),o=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,Object(l.a)("/instaces","GET",null,{token:a});case 4:(n=e.sent).data.error?t(i("cannot get data from headers!")):t(u(n.data.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(i("cannot get data from headers!"));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},u=function(e){return{type:s.a.FETCH_INSTANCE_SUCCESS,payload:e}},i=function(e){return{type:s.a.FETCH_INSTANCE_FAILURE,message:e}},m=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,Object(l.a)("/instaces","POST",null,{token:a});case 4:(n=e.sent).data.error?t(p()):(t(d(n.data.data)),t(o())),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(p());case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},d=function(e){return{type:s.a.FETCH_NEW_INSTANCE_SUCCESS,payload:e,message:"Th\xeam instance th\xe0nh c\xf4ng!"}},p=function(){return{type:s.a.FETCH_NEW_INSTANCE_FAILURE,message:"S\u1ed1 l\u01b0\u1ee3ng instance c\u1ee7a b\u1ea1n \u0111\xe3 t\u1ea1o t\u1ed1i \u0111a!"}},f=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),t.next=4,Object(l.a)("/instaces/instace-detail/".concat(e),"GET",null,{token:n});case 4:(c=t.sent).data.error||a(h(c.data.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return{type:s.a.DETAIL_INSTANCE,payload:e}},E=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n){var c,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c=localStorage.getItem("token"),a.next=4,Object(l.a)("/instaces/update-status/".concat(e,"/").concat(1===t?0:1),"GET",null,{token:c});case 4:(s=a.sent).data.error||n(g(s.data.data)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log({error:a.t0});case 11:case"end":return a.stop()}},a,this,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},g=function(e){return{type:s.a.CHANGE_STATUS,payload:e,message:"Thay \u0111\u1ed5i tr\u1ea1ng th\xe1i th\xe0nh c\xf4ng!"}},b=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),t.next=4,Object(l.a)("/instaces/update-user/".concat(e),"GET",null,{token:n});case 4:(c=t.sent).data.error||a(v(c.data.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log({error:t.t0});case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return{type:s.a.CHANGE_USER,payload:e,message:"Thay \u0111\u1ed5i ng\u01b0\u1eddi d\xf9ng th\xe0nh c\xf4ng!"}},y=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),t.next=4,Object(l.a)("/instaces/update-pwd/".concat(e),"GET",null,{token:n});case 4:(c=t.sent).data.error||a(N(c.data.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log({error:t.t0});case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},N=function(e){return{type:s.a.CHANGE_PASSWORD,payload:e,message:"Thay \u0111\u1ed5i m\u1eb7t kh\u1ea9u th\xe0nh c\xf4ng!"}}},83:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(2),c=a(3),s=a(5),l=a(4),o=a(6),u=a(0),i=a.n(u),m=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(u.Fragment,null,i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row mt-100"},i.a.createElement("div",{className:"col-xs-3 col-sm-3 col-md-3 col-lg-3"},i.a.createElement("h2",null,"All Instance")),i.a.createElement("div",{className:"col-xs-3 col-sm-3 col-md-3 col-lg-3 offset-md-6"},i.a.createElement("div",{className:"alert alert-info "},i.a.createElement("strong",null,"S\u1ed1 l\u01b0\u1ee3ng:")," ",this.props.lengthInstances,"/5"))),i.a.createElement("table",{className:"table table-dark table-striped table-hover"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Server"),i.a.createElement("th",null,"Status"),i.a.createElement("th",null,"Port"),i.a.createElement("th",null,"User"),i.a.createElement("th",null,"Password"),i.a.createElement("th",null,"Owner"),i.a.createElement("th",null,"Action"))),i.a.createElement("tbody",null,this.props.allInstance))),i.a.createElement("div",{className:"container"},this.props.newInstance))))}}]),t}(u.Component),d=a(79),p=a(14),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c))))._onDetailInstance=function(e){"button"!==e.target.type&&a.props.history.push("/instance/".concat(a.props.instance._id))},a._onChangeStatus=function(e,t){a.props.changeStatus(e,t)},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.instance,n=t.index;return i.a.createElement(u.Fragment,null,i.a.createElement("tr",{onClick:this._onDetailInstance,style:{cursor:"pointer"}},i.a.createElement("td",null,n+1),i.a.createElement("td",null,a.server),i.a.createElement("td",null,1===a.status?i.a.createElement("span",{className:"badge badge-success"},"\u0110\xe3 ho\u1ea1t \u0111\u1ed9ng"):i.a.createElement("span",{className:"badge badge-dark"},"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng")),i.a.createElement("td",null,a.port),i.a.createElement("td",null,a.user.length>8?a.user.substring(0,8)+"***":a.user),i.a.createElement("td",null,a.pwd.length>8?a.pwd.substring(0,8)+"***":a.pwd),i.a.createElement("td",null,a.owner.username),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"btn btn-outline-".concat(1===a.status?"danger":"success"),onClick:function(){return e._onChangeStatus(a._id,a.status)}},1===a.status?"T\u1eaft":"B\u1eadt"))))}}]),t}(u.Component),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c))))._onCreateInstance=function(){a.props.createInstance()},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.instance;return i.a.createElement(u.Fragment,null,i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("h2",null,"Create new Instance"),i.a.createElement("button",{type:"button",className:"btn btn-outline-success",onClick:this._onCreateInstance},"Create Instance")),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},i.a.createElement("span",{className:"badge badge-info mr-50",placeholder:"Server..."},e.server),i.a.createElement("span",{className:"badge badge-info",placeholder:"Create_At..."},e.createAt)),i.a.createElement("form",null,i.a.createElement("fieldset",{disabled:!0},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Owner"),i.a.createElement("input",{type:"text",className:"form-control",defaultValue:e.owner,placeholder:"Owner..."})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Status"),i.a.createElement("input",{type:"text",className:"form-control",defaultValue:e.status,placeholder:"Status..."}))),i.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Port"),i.a.createElement("input",{type:"text",className:"form-control",defaultValue:e.port,placeholder:"Port..."})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"ID"),i.a.createElement("input",{type:"text",className:"form-control",defaultValue:e._id,placeholder:"ID..."}))),i.a.createElement("div",{className:"col-xs-4 col-sm-4 col-md-4 col-lg-4"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"User"),i.a.createElement("input",{type:"text",className:"form-control",defaultValue:e.user,placeholder:"User..."})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Password"),i.a.createElement("input",{type:"text",className:"form-control",defaultValue:e.pwd,placeholder:"Password..."})))))))))}}]),t}(u.Component),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,o=new Array(c),u=0;u<c;u++)o[u]=arguments[u];return(a=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={id:"",status:""},a._changeStatus=function(e,t){a.props.changeStatus(e,t)},a._showInstanceItem=function(e){var t=null,r=Object(n.a)(e);return""!==a.state.status&&""!==a.state.id&&e.filter(function(e,t){e._id===a.state.id&&(r[t].status=a.state.status)}),r.length>0&&(t=r.map(function(e,t){return i.a.createElement(f,{key:t,index:t,instance:e,history:a.props.history,changeStatus:function(e,t){return a._changeStatus(e,t)}})})),t},a._showNewInstance=function(e){return i.a.createElement(h,{instance:e,createInstance:a._createInstance})},a._createInstance=function(){a.props.fetchNewInstanceRequest()},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchInstancesRequest()}},{key:"render",value:function(){var e=this.props,t=e.instances,a=e.newInstance;return i.a.createElement(u.Fragment,null,i.a.createElement(m,{lengthInstances:t.length,allInstance:this._showInstanceItem(t),newInstance:this._showNewInstance(a)}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"undefined"!==e.instance.status&&void 0!==e.instance.status?{id:e.instance._id,status:e.instance.status}:null}}]),t}(u.Component);t.default=Object(p.b)(function(e,t){return{instances:e.instances,newInstance:e.newInstance,getInstanceByID:e.detailInstance,instance:e.instance}},function(e,t){return{fetchInstancesRequest:function(){e(Object(d.d)())},fetchNewInstanceRequest:function(){e(Object(d.e)())},getInstanceByIDRequest:function(t,a){e(Object(d.f)(t,a))},changeStatus:function(t,a){e(Object(d.b)(t,a))}}})(E)}}]);
//# sourceMappingURL=3.435bc220.chunk.js.map