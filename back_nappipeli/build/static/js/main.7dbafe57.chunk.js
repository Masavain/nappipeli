(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(87)},85:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(24),c=n.n(i),o=n(1),s=n.n(o),u=n(2),p=n(16),l=n(17),f=n(19),d=n(18),h=n(21),v=n(15),m=n(7),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{count:0,winCategory:100},t=arguments.length>1?arguments[1]:void 0;return"INCREMENT"===t.type?Object(m.a)({},e,{count:e.count+10}):"CHANGE_WIN"===t.type?Object(m.a)({},e,{winCategory:t.data}):(t.type,e)},b=function(){return function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"DELETE_MESSAGE"});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{pressed:!1,message:"",visible:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRESSED":return Object(m.a)({},e,{pressed:!0});case"INIT_WIN":return e;case"NEW_NOTIF":return Object(m.a)({},e,{message:t.notif,visible:!0});case"DELETE_MESSAGE":return Object(m.a)({},e,{message:"",visible:e.visible});case"HIDE_VISIBLE":return Object(m.a)({},e,{message:e.message,visible:!1});default:return e}},y=n(12),E=n.n(y),O={getAll:function(){return E.a.get("/api/winners").then(function(e){return e.data})},create:function(){var e=Object(u.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/api/winners",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(){var e=Object(u.a)(s.a.mark(function e(t){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getAll();case 2:(n=e.sent).reverse(),r=n.slice(0,11),t({type:"INIT_WINNERS",winners:r});case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{toggle:!1,winners:[]},t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION: ",t),t.type){case"INIT_WINNERS":return Object(m.a)({},e,{winners:t.winners});case"TOGGLE":return Object(m.a)({},e,{toggle:t.toggle});default:return e}},I=n(89),N=n(88),k=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleSubmit=function(){var e=Object(u.a)(s.a.mark(function e(t){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),r={name:t.target.name.value,date:new Date},O.create(r),n.props.initiateWinners(),n.props.deleteMessage();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(""===this.props.notification.message)return null;return a.a.createElement(I.a,{style:{position:"relative",border:"solid",margin:10,padding:10,borderWidth:1,left:10,width:"300px"}},a.a.createElement("h3",null,this.props.notification.message),a.a.createElement("form",{class:"col s12",onSubmit:this.handleSubmit},a.a.createElement("div",{class:"row"},a.a.createElement("input",{type:"text",name:"name"})),a.a.createElement(N.a,{style:{position:"relative"},onClick:function(){return e.handleSubmit()}},"input name")),a.a.createElement(N.a,{style:{margin:5,position:"relative"},onClick:function(){return e.props.deleteMessage()}},"X"))}}]),t}(a.a.Component),W=Object(v.b)(function(e){return{counter:e.counter,notification:e.notification,winners:e.winners}},{deleteMessage:b,initiateWinners:j})(k),C="/api/counters/5c5aafed153cf16a0d76c6fc",S=function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(C);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put(C,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),_={getCounter:S,create:function(){var e=Object(u.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(C,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),update:T},M=(n(85),function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).componentWillMount=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.props.initCounter(),n.props.initNotification(),n.props.initiateWinners();case 3:case"end":return e.stop()}},e,this)})),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=function(){var t=Object(u.a)(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.increment();case 2:return console.log(e.props.counter.count),n={id:"5c5aafed153cf16a0d76c6fc",state:e.props.counter.count},t.next=6,_.update(n);case 6:if(e.props.counter.count%100===0||!e.props.notification.pressed){t.next=9;break}return t.next=9,e.props.changeWinCategory(100);case 9:if(e.props.counter.count%200!==0||!e.props.notification.pressed){t.next=12;break}return t.next=12,e.props.changeWinCategory(200);case 12:if(e.props.counter.count%500!==0||!e.props.notification.pressed){t.next=15;break}return t.next=15,e.props.changeWinCategory(500);case 15:e.props.notification.pressed||e.props.press(),e.props.counter.count%e.props.counter.winCategory===0&&e.props.notification.pressed&&(100===e.props.counter.winCategory&&e.props.notifyWin("You WIN a small prize!"),200===e.props.counter.winCategory&&e.props.notifyWin("You WIN a medium prize!!"),500===e.props.counter.winCategory&&e.props.notifyWin("You WIN a BIG prize!!!"));case 17:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),n=function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.initiateWinners();case 2:e.props.toggle(!e.props.winners.toggle);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();return a.a.createElement("div",{style:{padding:10}},a.a.createElement("h2",{style:{position:"relative",padding:10}},"Nappipeli"),a.a.createElement("h2",{style:{position:"relative",padding:50}},100-this.props.counter.count%100+"..."),a.a.createElement("div",{style:{position:"relative",left:30}}," clicks until next prize "),a.a.createElement(N.a,{bsSize:"sm",bsStyle:"danger",onClick:function(){return t()}},"nappu"),a.a.createElement(W,null),a.a.createElement("div",null,a.a.createElement(N.a,{style:{margin:5},onClick:function(){return n()}},"Leaderboard"),a.a.createElement("div",null," ",this.props.winners.toggle?a.a.createElement("ul",{style:{border:"1px black",position:"relative"}},this.props.winners.winners.map(function(e){return a.a.createElement("li",null,e.name)})):a.a.createElement("div",null)," ")))}}]),t}(a.a.Component)),A=Object(v.b)(function(e){return{counter:e.counter,notification:e.notification,winners:e.winners}},{initiateWinners:j,toggle:function(e){return{type:"TOGGLE",toggle:e}},notifyWin:function(e){return function(){var t=Object(u.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"NEW_NOTIF",notif:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},initCounter:function(){return{type:"INIT"}},changeWinCategory:function(e){return function(){var t=Object(u.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"CHANGE_WIN",data:e});case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},initNotification:function(){return{type:"INIT_WIN"}},increment:function(){return function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"INCREMENT"});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},press:function(){return{type:"PRESSED"}},deleteMessage:b,hideMessage:function(){return function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"HIDE_VISIBLE"});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(M),D=n(11),G=n(42),L=n(43),R=Object(D.combineReducers)({counter:g,notification:w,winners:x}),z=Object(D.createStore)(R,Object(L.composeWithDevTools)(Object(D.applyMiddleware)(G.a)));c.a.render(a.a.createElement(v.a,{store:z},a.a.createElement(A,null)),document.getElementById("root"))}},[[45,2,1]]]);
//# sourceMappingURL=main.7dbafe57.chunk.js.map