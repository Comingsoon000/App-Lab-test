(this["webpackJsonpapp-lab-test"]=this["webpackJsonpapp-lab-test"]||[]).push([[0],{11:function(t,e,a){t.exports={header:"header_header__2T4zQ",image:"header_image__3vRfG",href:"header_href__himuH"}},12:function(t,e,a){t.exports={toDo:"toDo_toDo__1CbjH",title:"toDo_title__1o_4u",list:"toDo_list__2X9mX"}},15:function(t,e,a){t.exports={complited:"complited_complited__uscp9",title:"complited_title__YK1sX"}},17:function(t,e,a){t.exports={main:"main_main__3KH0W"}},2:function(t,e,a){t.exports={task:"task_task__10Dzb",cover:"task_cover__1zj_C",text:"task_text__2vWFv",time:"task_time__2A-Ja",wrapper:"task_wrapper__3JvmJ",checkbox:"task_checkbox__15prb",editButton:"task_editButton__3P7QB",delButton:"task_delButton__3uo_T",saveButton:"task_saveButton__axRXu",hidden:"task_hidden__3TomY"}},23:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n,c=a(0),s=a.n(c),i=a(8),r=a.n(i),o=(a(23),a(3)),u=a(10),d=a(4),l=a(18);!function(t){t.get="GET_TASKS",t.add="ADD_TASK",t.put="PUT_TASK",t.del="DELETE_TASK"}(n||(n={}));var m={tasks:[{text:"Task 1",time:"12.11.2021, 16:28:20",complited:!1},{text:"Task 2",time:"12.11.2021, 16:28:40",complited:!1},{text:"Task 3",time:"12.11.2021, 16:28:45",complited:!0}]},j=function(t,e){var a=[].concat(Object(l.a)(t.tasks),[e]);return Object(d.a)(Object(d.a)({},t),{},{tasks:a})},p=function(t,e){var a=t.tasks.map((function(t){return t.time===e.time?e:t}));return Object(d.a)(Object(d.a)({},t),{},{tasks:a})},_=function(t,e){var a=t.tasks.filter((function(t){return t.time!==e.time}));return Object(d.a)(Object(d.a)({},t),{},{tasks:a})},b=Object(u.a)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.get:return t;case n.add:return j(t,e.payload);case n.put:return p(t,e.payload);case n.del:return _(t,e.payload);default:return t}}}),x=Object(u.b)(b),f=a(11),h=a.n(f),k=a.p+"static/media/eisenhower-matrix.bb7a54f5.jpg",O=a(1),v=function(){return Object(O.jsxs)("header",{className:h.a.header,children:[Object(O.jsx)("img",{className:h.a.image,src:k,alt:"Eisenhower Matrix scheme"}),Object(O.jsx)("nav",{children:Object(O.jsx)("a",{className:h.a.href,href:"https://goal-life.com/page/method/matrix-eisenhower",children:"Want more details?"})})]})},T=a(17),N=a.n(T),g=a(6),y=o.c,w=function(t,e,a){return""!==t&&!a.filter((function(t){return t.time!==e})).find((function(e){return e.text===t}))},B=a(7),D=a.n(B),S=function(){var t=Object(o.b)(),e=y((function(t){return t.tasks})).tasks,a=Object(c.useState)(""),s=Object(g.a)(a,2),i=s[0],r=s[1];return Object(O.jsx)("section",{className:D.a.addTask,children:Object(O.jsxs)("div",{className:D.a.wrapper,children:[Object(O.jsx)("input",{className:D.a.input,type:"text",value:i,onChange:function(t){return r(t.target.value)}}),Object(O.jsx)("button",{className:D.a.button,onClick:function(){return function(){var a="".concat((new Date).toLocaleString());if(w(i,a,e)){var c={text:i,time:a,complited:!1};t({type:n.add,payload:c}),r("")}}()},children:"add task"})]})})},C=a(12),A=a.n(C),E=a(2),J=a.n(E),K=function(t){var e=t.time,a=t.text,s=t.complited,i=Object(o.b)(),r=y((function(t){return t.tasks})).tasks,u=Object(c.useState)(a),d=Object(g.a)(u,2),l=d[0],m=d[1],j=Object(c.useState)(!0),p=Object(g.a)(j,2),_=p[0],b=p[1],x=_?J.a.editButton:J.a.saveButton,f=_?J.a.cover:J.a.hidden,h=_?J.a.hidden:J.a.text;return Object(O.jsxs)("li",{className:J.a.task,children:[Object(O.jsx)("input",{type:"checkbox",className:J.a.checkbox,checked:s,onChange:function(){return function(){var t={text:a,time:e,complited:!s};i({type:n.put,payload:t})}()}}),Object(O.jsx)("div",{className:f,children:l}),Object(O.jsx)("input",{className:h,type:"text",value:l,onChange:function(t){return function(t){m(t.target.value)}(t)}}),Object(O.jsxs)("div",{className:J.a.wrapper,children:[Object(O.jsx)("p",{className:J.a.time,children:e}),Object(O.jsx)("button",{className:x,onClick:function(){return function(){if(_)b(!_);else if(w(l,e,r)){var t={text:l,time:e,complited:s};i({type:n.put,payload:t}),b(!_)}}()}}),Object(O.jsx)("button",{className:J.a.delButton,onClick:function(){return function(){var t={text:a,time:e,complited:s};i({type:n.del,payload:t})}()}})]})]},e)},H=function(){var t=y((function(t){return t.tasks})).tasks;return Object(O.jsxs)("section",{className:A.a.toDo,children:[Object(O.jsx)("h3",{className:A.a.title,children:"todo"}),Object(O.jsx)("ul",{className:A.a.list,children:t.filter((function(t){return!t.complited})).map((function(t){return Object(O.jsx)(K,{text:t.text,time:t.time,complited:t.complited},t.time)}))})]})},X=a(15),z=a.n(X),G=function(){var t=y((function(t){return t.tasks})).tasks;return Object(O.jsxs)("section",{className:z.a.complited,children:[Object(O.jsx)("h3",{className:z.a.title,children:"done"}),Object(O.jsx)("ul",{children:t.filter((function(t){return t.complited})).map((function(t){return Object(O.jsx)(K,{text:t.text,time:t.time,complited:t.complited},t.time)}))})]})},L=function(){return Object(O.jsxs)("main",{className:N.a.main,children:[Object(O.jsx)(S,{}),Object(O.jsx)(H,{}),Object(O.jsx)(G,{})]})},W=function(){return Object(O.jsxs)(o.a,{store:x,children:[Object(O.jsx)(v,{}),Object(O.jsx)(L,{})]})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(W,{})}),document.getElementById("root"))},7:function(t,e,a){t.exports={addTask:"addTask_addTask__2eLTU",title:"addTask_title__3riTw",wrapper:"addTask_wrapper__3NwcH",input:"addTask_input__GJn3n",button:"addTask_button__Ah1d2"}}},[[31,1,2]]]);
//# sourceMappingURL=main.77ca119f.chunk.js.map