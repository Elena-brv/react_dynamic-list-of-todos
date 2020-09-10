(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(8),c=n.n(s),o=n(1),l=n.n(o),u=n(2),i=n(3),d=n(4),p=n(6),m=n(5),f=(n(16),n(17),n(9)),h=n.n(f),v=(n(18),function(e){var t=e.todos,n=e.filterTodos,r=e.selectTodos,s=e.selectUser;return a.a.createElement("div",{className:"TodoList"},a.a.createElement("h2",null,"Todos:"),a.a.createElement("input",{type:"text",className:"TodoList__search",placeholder:"Find todo by title",onChange:function(e){return n(e.target.value)}}),a.a.createElement("select",{className:"TodoList__select",onChange:function(e){return r(e.target.value)}},a.a.createElement("option",{value:"all"},"All todos"),a.a.createElement("option",{value:"active"},"Active todos"),a.a.createElement("option",{value:"completed"},"Completed todos")),a.a.createElement("div",{className:"TodoList__list-container"},a.a.createElement("ul",{className:"TodoList__list"},t.map((function(e){return a.a.createElement("li",{className:h()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),key:e.id},a.a.createElement("label",null,a.a.createElement("input",{type:"checkbox",readOnly:!0}),a.a.createElement("p",null,e.title)),a.a.createElement("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){return s(e.userId)}},"User#".concat(e.userId)))})))))}),_=(n(19),"https://mate-api.herokuapp.com"),b=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(_,"/todos"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(_,"/users/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={currentUser:{}},e.loadUser=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E(e.props.userId);case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return");case 5:e.setState((function(e){return{currentUser:n}}));case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.loadUser()}},{key:"componentDidUpdate",value:function(){this.state.currentUser.id!==this.props.userId&&this.loadUser()}},{key:"render",value:function(){var e=this.state.currentUser,t=this.props,n=t.userId,r=t.clearUser;return a.a.createElement("div",{className:"CurrentUser"},a.a.createElement("h2",{className:"CurrentUser__title"},a.a.createElement("span",null,"Selected user: ".concat(n))),a.a.createElement("h3",{className:"CurrentUser__name"},e.name),a.a.createElement("p",{className:"CurrentUser__email"},e.email),a.a.createElement("p",{className:"CurrentUser__phone"},e.phone),a.a.createElement("button",{type:"button",className:"CurrentUser__clear",onClick:function(){return r()}},"Clear user"))}}]),n}(a.a.Component),y=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],selectedUserId:0,query:"",filterOfTodos:"all"},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e.filterTodosByTitle=function(t){e.setState({query:t})},e.selectTodos=function(t){e.setState({filterOfTodos:t})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:n=t.sent,e.setState({todos:n});case 4:case"end":return t.stop()}}),t)})))()}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId,r=e.query,s=e.filterOfTodos,c=r.toLowerCase(),o=t.filter((function(e){return e.title&&e.title.toLowerCase().includes(c)})),l=o;return"completed"===s?l=o.filter((function(e){return e.completed})):"active"===s&&(l=o.filter((function(e){return!e.completed}))),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App__sidebar"},a.a.createElement(v,{todos:l,selectUser:this.selectUser,filterTodos:this.filterTodosByTitle,selectTodos:this.selectTodos})),a.a.createElement("div",{className:"App__content"},a.a.createElement("div",{className:"App__content-container"},n?a.a.createElement(U,{userId:n,clearUser:this.clearUser}):"No user selected")))}}]),n}(a.a.Component);c.a.render(a.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.41490990.chunk.js.map