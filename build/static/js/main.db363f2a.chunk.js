(this.webpackJsonppart1=this.webpackJsonppart1||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},20:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=(n(20),n(14)),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a," "))},m=n(3),f=n.n(m),s=function(){return f.a.get("/api/notes").then((function(t){return t.data}))},p=function(t){return f.a.post("/api/notes",t).then((function(t){return t.data}))},E=function(t,e){return f.a.put("".concat("/api/notes","/").concat(t),e).then((function(t){return t.data}))},b=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},d=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},v=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),o=n[0],c=n[1],m=Object(a.useState)(""),f=Object(i.a)(m,2),v=f[0],h=f[1],g=Object(a.useState)(!1),O=Object(i.a)(g,2),j=O[0],S=O[1],k=Object(a.useState)(null),y=Object(i.a)(k,2),w=y[0],N=y[1];Object(a.useEffect)((function(){s().then((function(t){c(t)}))}),[]);var C=j?o:o.filter((function(t){return t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(b,{message:w}),r.a.createElement("button",{onClick:function(){return S(!j)}},"show ",j?"important":"all"),r.a.createElement("ul",null,C.map((function(t,e){return r.a.createElement(l,{key:e,note:t,toggleImportance:function(){return function(t){var e=o.find((function(e){return e.id===t})),n=Object(u.a)({},e,{important:!e.important});E(t,n).then((function(e){c(o.map((function(n){return n.id!==t?n:e})))})).catch((function(n){N("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){N(null)}),5e3),c(o.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:v,date:(new Date).toISOString(),important:Math.random()>.5};p(e).then((function(t){c(o.concat(t)),h("")}))}},r.a.createElement("input",{value:v,onChange:function(t){h(t.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(d,null))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.db363f2a.chunk.js.map