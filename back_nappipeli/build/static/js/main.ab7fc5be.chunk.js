(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,n){e.exports=n(91)},89:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(27),c=n.n(i),o=n(2),s=n.n(o),u=n(7),p=n(18),l=n(19),f=n(22),d=n(20),h=n(24),v=n(15),m=n(9),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:0,winCategory:100},t=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===t.type?Object(m.a)({},e,{count:e.count+10}):"CHANGE_WIN"===t.type?Object(m.a)({},e,{winCategory:t.data}):(t.type,e)},b=function(){return function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"DELETE_MESSAGE"});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pressed:!1,message:"",visible:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRESSED":return Object(m.a)({},e,{pressed:!0});case"INIT_WIN":return e;case"NEW_NOTIF":return Object(m.a)({},e,{message:t.notif,visible:!0});case"DELETE_MESSAGE":return Object(m.a)({},e,{message:"",visible:e.visible});case"HIDE_VISIBLE":return Object(m.a)({},e,{message:e.message,visible:!1});default:return e}},y=n(13),E=n.n(y),O={getAll:function(){return E.a.get("/api/winners").then(function(e){return e.data})},create:function(){var e=Object(u.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/winners",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:(n=e.sent).reverse(),r=n.slice(0,11),t({type:"INIT_WINNERS",winners:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{toggle:!1,winners:[]},t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION: ",t),t.type){case"INIT_WINNERS":return Object(m.a)({},e,{winners:t.winners});case"TOGGLE":return Object(m.a)({},e,{toggle:t.toggle});default:return e}},x=n(94),N=n(93),W=n(92),k=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleSubmit=function(){var e=Object(u.a)(s.a.mark(function e(t){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r={name:t.target.name.value,date:new Date},O.create(r),n.props.initiateWinners(),n.props.deleteMessage();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(""===this.props.notification.message)return null;return a.a.createElement(x.a,{style:{position:"relative",border:"solid",margin:10,padding:10,borderWidth:1,left:10,width:"300px"}},a.a.createElement("h3",null,this.props.notification.message),a.a.createElement(N.a,{class:"col s12",onSubmit:function(t){return e.handleSubmit(t)}},a.a.createElement(N.a.Group,{controlId:"name"},a.a.createElement(N.a.Control,{type:"text",placeholder:"enter name"})),a.a.createElement(W.a,{variant:"primary",type:"submit",style:{position:"relative"}},"Submit")),a.a.createElement("a",{class:"btn-floating btn-large waves-effect waves-light red",onClick:function(){return e.props.deleteMessage()}},a.a.createElement("i",{class:"material-icons"},"cancel")))}}]),t}(a.a.Component),C=Object(v.b)(function(e){return{counter:e.counter,notification:e.notification,winners:e.winners}},{deleteMessage:b,initiateWinners:j})(k),S="/api/counters/5c5aafed153cf16a0d76c6fc",T=function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(S);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put(S,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),M={getCounter:T,create:function(){var e=Object(u.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(S,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),update:_},G=(n(89),function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).componentWillMount=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.props.initCounter(),n.props.initNotification(),n.props.initiateWinners();case 3:case"end":return e.stop()}},e,this)})),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=function(){var t=Object(u.a)(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.increment();case 2:return console.log(e.props.counter.count),n={id:"5c5aafed153cf16a0d76c6fc",state:e.props.counter.count},t.next=6,M.update(n);case 6:if(e.props.counter.count%100===0||!e.props.notification.pressed){t.next=9;break}return t.next=9,e.props.changeWinCategory(100);case 9:if(e.props.counter.count%200!==0||!e.props.notification.pressed){t.next=12;break}return t.next=12,e.props.changeWinCategory(200);case 12:if(e.props.counter.count%500!==0||!e.props.notification.pressed){t.next=15;break}return t.next=15,e.props.changeWinCategory(500);case 15:e.props.notification.pressed||e.props.press(),e.props.counter.count%e.props.counter.winCategory===0&&e.props.notification.pressed&&(100===e.props.counter.winCategory&&e.props.notifyWin("You WIN a small prize!"),200===e.props.counter.winCategory&&e.props.notifyWin("You WIN a medium prize!!"),500===e.props.counter.winCategory&&e.props.notifyWin("You WIN a BIG prize!!!"));case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.initiateWinners();case 2:e.props.toggle(!e.props.winners.toggle);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",{style:{padding:10}},a.a.createElement("h2",{style:{position:"relative",padding:10}},"Nappipeli"),a.a.createElement("h2",{style:{position:"relative",padding:50}},100-this.props.counter.count%100+"..."),a.a.createElement("div",{style:{position:"relative",left:30}}," clicks until next prize "),a.a.createElement(W.a,{bsSize:"sm",bsStyle:"danger",onClick:function(){return t()}},"nappu"),a.a.createElement(C,null),a.a.createElement(W.a,{style:{margin:5},onClick:function(){return n()}},"Leaderboard"),a.a.createElement("div",null," ",this.props.winners.toggle?a.a.createElement("ul",{class:"collection"},this.props.winners.winners.map(function(e){return a.a.createElement("li",{class:"collection-item"},e.name)})):a.a.createElement("div",null)," "))}}]),t}(a.a.Component)),A=Object(v.b)(function(e){return{counter:e.counter,notification:e.notification,winners:e.winners}},{initiateWinners:j,toggle:function(e){return{type:"TOGGLE",toggle:e}},notifyWin:function(e){return function(){var t=Object(u.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"NEW_NOTIF",notif:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},initCounter:function(){return{type:"INIT"}},changeWinCategory:function(e){return function(){var t=Object(u.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CHANGE_WIN",data:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},initNotification:function(){return{type:"INIT_WIN"}},increment:function(){return function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"INCREMENT"});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},press:function(){return{type:"PRESSED"}},deleteMessage:b,hideMessage:function(){return function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"HIDE_VISIBLE"});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(G),D=n(12),L=n(46),R=n(47),z=Object(D.combineReducers)({counter:g,notification:w,winners:I}),B=Object(D.createStore)(z,Object(R.composeWithDevTools)(Object(D.applyMiddleware)(L.a)));c.a.render(a.a.createElement(v.a,{store:B},a.a.createElement(A,null)),document.getElementById("root"))}},[[49,2,1]]]);
//# sourceMappingURL=main.ab7fc5be.chunk.js.map