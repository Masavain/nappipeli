(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(62)},60:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(26),i=n.n(c),o=n(1),u=n.n(o),s=n(2),p=n(10),f=n(11),l=n(13),d=n(12),h=n(14),b=n(8),v=n(4),m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:0,winCategory:100},e=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===e.type?Object(v.a)({},t,{count:t.count+10}):"CHANGE_WIN"===e.type?Object(v.a)({},t,{winCategory:e.data}):(e.type,t)},y=function(){return function(){var t=Object(s.a)(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"DELETE_MESSAGE"});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pressed:!1,message:"",visible:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"PRESSED":return Object(v.a)({},t,{pressed:!0});case"INIT_WIN":return t;case"NEW_NOTIF":return Object(v.a)({},t,{message:e.notif,visible:!0});case"DELETE_MESSAGE":return Object(v.a)({},t,{message:"",visible:t.visible});case"HIDE_VISIBLE":return Object(v.a)({},t,{message:t.message,visible:!1});default:return t}},E=n(6),O=n.n(E),g={getAll:function(){return O.a.get("/api/winners").then(function(t){return t.data})},create:function(){var t=Object(s.a)(u.a.mark(function t(e){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("/api/winners",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},j=function(t){function e(){var t,n;Object(p.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).handleSubmit=function(){var t=Object(s.a)(u.a.mark(function t(e){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),r={name:e.target.name.value,date:new Date},g.create(r),n.props.deleteMessage();case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),n}return Object(h.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){if(""===this.props.notification.message)return null;return a.a.createElement("div",{style:{border:"solid",padding:10,borderWidth:1}},this.props.notification.message,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("div",null,a.a.createElement("input",{type:"text",name:"name"})),a.a.createElement("button",null,"input name")))}}]),e}(a.a.Component),x=Object(b.b)(function(t){return{counter:t.counter,notification:t.notification}},{deleteMessage:y})(j),I="/api/counter/5c5aafed153cf16a0d76c6fc",k=function(){var t=Object(s.a)(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get(I);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(s.a)(u.a.mark(function t(e,n){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.put(I,n);case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),C={getCounter:k,create:function(){var t=Object(s.a)(u.a.mark(function t(e){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.post(I,e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),update:N},W=(n(60),function(t){function e(){var t,n;Object(p.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).componentWillMount=Object(s.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.props.initCounter(),n.props.initNotification();case 2:case"end":return t.stop()}},t,this)})),n}return Object(h.a)(e,t),Object(f.a)(e,[{key:"render",value:function(){var t=this,e=function(){var e=Object(s.a)(u.a.mark(function e(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.increment();case 2:if(n={_id:"5c5aafed153cf16a0d76c6fc",state:t.props.counter.count},C.update({counterObject:n}),t.props.counter.count%100===0||!t.props.notification.pressed){e.next=7;break}return e.next=7,t.props.changeWinCategory(100);case 7:if(t.props.counter.count%200!==0||!t.props.notification.pressed){e.next=10;break}return e.next=10,t.props.changeWinCategory(200);case 10:if(t.props.counter.count%500!==0||!t.props.notification.pressed){e.next=13;break}return e.next=13,t.props.changeWinCategory(500);case 13:t.props.notification.pressed||t.props.press(),t.props.counter.count%t.props.counter.winCategory===0&&t.props.notification.pressed&&t.props.notifyWin("You WIN ".concat(t.props.counter.winCategory));case 15:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e()}},"nappu"),a.a.createElement("div",null,100-this.props.counter.count%100),a.a.createElement(x,null),a.a.createElement("div",null,(100-this.props.counter.count%100===100&&this.props.notification.pressed,a.a.createElement("div",null))))}}]),e}(a.a.Component)),S=Object(b.b)(function(t){return{counter:t.counter,notification:t.notification}},{notifyWin:function(t){return function(){var e=Object(s.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"NEW_NOTIF",notif:t});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},initCounter:function(){return{type:"INIT"}},changeWinCategory:function(t){return function(){var e=Object(s.a)(u.a.mark(function e(n){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n({type:"CHANGE_WIN",data:t});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},initNotification:function(){return{type:"INIT_WIN"}},increment:function(){return function(){var t=Object(s.a)(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"INCREMENT"});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},press:function(){return{type:"PRESSED"}},deleteMessage:y,hideMessage:function(){return function(){var t=Object(s.a)(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"HIDE_VISIBLE"});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(W),_=n(5),M=n(28),T=n(29),D=Object(_.combineReducers)({counter:m,notification:w}),A=Object(_.createStore)(D,Object(T.composeWithDevTools)(Object(_.applyMiddleware)(M.a)));i.a.render(a.a.createElement(b.a,{store:A},a.a.createElement(S,null)),document.getElementById("root"))}},[[30,2,1]]]);
//# sourceMappingURL=main.a11e8016.chunk.js.map