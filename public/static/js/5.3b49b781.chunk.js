(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{77:function(e,t,a){"use strict";a.d(t,"d",function(){return u}),a.d(t,"e",function(){return m}),a.d(t,"f",function(){return f}),a.d(t,"b",function(){return g}),a.d(t,"c",function(){return b}),a.d(t,"a",function(){return N});var n=a(17),r=a.n(n),c=a(19),s=a(7),o=a(20),u=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,Object(o.a)("/instaces","GET",null,{token:a});case 4:(n=e.sent).data.error?t(i("cannot get data from headers!")):t(l(n.data.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(i("cannot get data from headers!"));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},l=function(e){return{type:s.a.FETCH_INSTANCE_SUCCESS,payload:e}},i=function(e){return{type:s.a.FETCH_INSTANCE_FAILURE,message:e}},m=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),e.next=4,Object(o.a)("/instaces","POST",null,{token:a});case 4:(n=e.sent).data.error?t(p()):t(d(n.data.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(p());case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t){return e.apply(this,arguments)}}()},d=function(e){return{type:s.a.FETCH_NEW_INSTANCE_SUCCESS,payload:e}},p=function(){return{type:s.a.FETCH_NEW_INSTANCE_FAILURE,message:"cannot get new instance!"}},f=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),t.next=4,Object(o.a)("/instaces/".concat(e),"GET",null,{token:n});case 4:(c=t.sent).data.error||a(h(c.data.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},h=function(e){return{type:s.a.DETAIL_INSTANCE,payload:e}},g=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n){var c,s;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c=localStorage.getItem("token"),a.next=4,Object(o.a)("/instaces/".concat(e,"/").concat(1===t?0:1),"GET",null,{token:c});case 4:(s=a.sent).data.error||n(E(s.data.data)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log({error:a.t0});case 11:case"end":return a.stop()}},a,this,[[0,8]])}));return function(e){return a.apply(this,arguments)}}()},E=function(e){return{type:s.a.CHANGE_STATUS,payload:e}},b=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),t.next=4,Object(o.a)("/instaces/update-user/".concat(e),"GET",null,{token:n});case 4:(c=t.sent).data.error||a(v(c.data.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log({error:t.t0});case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return{type:s.a.CHANGE_USER,payload:e}},N=function(e){return function(){var t=Object(c.a)(r.a.mark(function t(a){var n,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=localStorage.getItem("token"),t.next=4,Object(o.a)("/instaces/update-pwd/".concat(e),"GET",null,{token:n});case 4:(c=t.sent).data.error||a(w(c.data.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log({error:t.t0});case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e){return t.apply(this,arguments)}}()},w=function(e){return{type:s.a.CHANGE_PASSWORD,payload:e}}},88:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),c=a(5),s=a(4),o=a(6),u=a(0),l=a.n(u),i=a(77),m=a(78),d=a.n(m),p=a(80),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={owner:{createAt:"",email:"",fullname:"",password:"",status:"",username:"",_id:""}},a._onChangeStatus=function(e,t){a.props.changeStatus(e,t)},a._onChangeUser=function(e){a.props.changeUser(e)},a._onChangePassword=function(e){a.props.changePassword(e)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({owner:this.props.instance.owner})}},{key:"render",value:function(){var e=this,t=this.props.instance,a=this.state.owner,n=t.status;return console.log(t),l.a.createElement(u.Fragment,null,l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6  mt-100"},l.a.createElement(p.a,{to:"/dashboard/instance",className:"btn btn-outline-info"},"< Back")),l.a.createElement("div",{className:"row mt-10"},l.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},l.a.createElement("div",{className:"card border-info mb-3"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",null,"Information Instance")),l.a.createElement("div",{className:"card-body text-info"},l.a.createElement("h5",{className:"card-title"},"SERVER : ",t.server),l.a.createElement("p",{className:"card-text"},"PORT     : ",t.port," "),l.a.createElement("p",{className:"card-text"},"USER     : ",t.user,l.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm waves-effect waves-light align-button",onClick:function(){return e._onChangeUser(t._id)}},"Change")),l.a.createElement("p",{className:"card-text"},"PASSWORD : ",t.pwd,l.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm waves-effect waves-light align-button",onClick:function(){return e._onChangePassword(t._id)}},"Change")),l.a.createElement("p",{className:"card-text"},"STATUS   : ",1===t.status?l.a.createElement("span",{className:"badge badge-info"},"\u0110\xe3 ho\u1ea1t \u0111\u1ed9ng"):l.a.createElement("span",{className:"badge badge-dark"},"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng"),l.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm waves-effect waves-light align-button",onClick:function(){return e._onChangeStatus(t._id,n)}},1===n?"T\u1eaft":"B\u1eadt")),l.a.createElement("p",{className:"card-text"},"CREATE AT: ",d()(t.createAt).format("MMMM Do YYYY, h:mm:ss a")," ")))),l.a.createElement("div",{className:"col-xs-6 col-sm-6 col-md-6 col-lg-6"},l.a.createElement("div",{className:"card border-success mb-3"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",null,"Information User")),l.a.createElement("div",{className:"card-body text-success"},l.a.createElement("h5",{className:"card-title"},"Owner"),l.a.createElement("p",{className:"card-text"},"EMAIL         : ",a.email," "),l.a.createElement("p",{className:"card-text"},"FULLNAME      : ",a.fullname," "),l.a.createElement("p",{className:"card-text"},"USERNAME      : ",a.username," "),l.a.createElement("p",{className:"card-text"},"PASSWORD      : ",a.password," "),l.a.createElement("p",{className:"card-text"},"STATUS        : ",1===a.status?l.a.createElement("span",{className:"badge badge-success"},"\u0110\xe3 ho\u1ea1t \u0111\u1ed9ng"):l.a.createElement("span",{className:"badge badge-dark"},"Kh\xf4ng ho\u1ea1t \u0111\u1ed9ng")," "),l.a.createElement("p",{className:"card-text"},"CREATE AT     : ",d()(a.createAt).format("MMMM Do YYYY, h:mm:ss a")," ")))))))))}}]),t}(u.Component),h=a(13),g=0,E=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o))))._changeStatus=function(e,t){a.props.changeStatus(e,t)},a._changeUser=function(e){a.props.changeUser(e)},a._changePassword=function(e){a.props.changePassword(e)},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.match;if(e){var t=e.params;this.props.getInstance(t.idInstace)}}},{key:"render",value:function(){var e=this,t=this.props.instance;return 0===g?(g++,null):l.a.createElement(u.Fragment,null,l.a.createElement(f,{instance:t,changeStatus:function(t,a){return e._changeStatus(t,a)},changeUser:function(t){return e._changeUser(t)},changePassword:function(t){return e._changePassword(t)}}))}}]),t}(u.Component);t.default=Object(h.b)(function(e,t){return{instance:e.instance}},function(e,t){return{getInstance:function(t){e(Object(i.f)(t))},changeStatus:function(t,a){e(Object(i.b)(t,a))},changeUser:function(t){e(Object(i.c)(t))},changePassword:function(t){e(Object(i.a)(t))}}})(E)}}]);
//# sourceMappingURL=5.3b49b781.chunk.js.map