(this.webpackJsonpstrangers_things=this.webpackJsonpstrangers_things||[]).push([[0],{32:function(e,t,n){"use strict";n.r(t);var r=n(4),s=n(0),a=n(14),c=n.n(a),o=n(2),i=n(9),u=n(11),j=n.n(u),h=n(15),p=n(1),b="https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT/users/",l="".concat(b,"register"),g="".concat(b,"login"),O="".concat(b,"me"),d=function(e){var t=e.action,n=e.setToken,a=e.setUserData,c=Object(s.useState)(""),u=Object(r.a)(c,2),b=u[0],d=u[1],x=Object(s.useState)(""),f=Object(r.a)(x,2),m=f[0],v=f[1],k="login"===t,y=k?"Login":"Register",S=k?"Register":"Login",w=k?"register":"login",T=k?g:l,C=Object(o.e)(),D=function(){var e=Object(h.a)(j.a.mark((function e(t){var r,s,c,o,i,u,h;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:{username:b,password:m}})});case 4:return r=e.sent,e.next=7,r.json();case 7:if(s=e.sent,c=s.data,!(o=c.token)){e.next=21;break}return n(o),e.next=14,fetch(O,{headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o)}});case 14:return i=e.sent,e.next=17,i.json();case 17:u=e.sent,h=u.data,a(h),C.push("/");case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),console.error(e.t0);case 26:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h4",{children:y}),Object(p.jsxs)("form",{onSubmit:D,children:[Object(p.jsx)("input",{type:"text",placeholder:"username",value:b,onChange:function(e){return d(e.target.value)}}),Object(p.jsx)("input",{type:"password",placeholder:"password",value:m,onChange:function(e){return v(e.target.value)}}),Object(p.jsx)("button",{type:"submit",children:y})]}),Object(p.jsx)(i.b,{to:"".concat(w),children:S})]})},x=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=(t[0],t[1]),a=Object(s.useState)({}),c=Object(r.a)(a,2),i=c[0],u=c[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Stranger's Things"}),i.username&&Object(p.jsxs)("div",{children:["Hello ",i.username]}),Object(p.jsx)(o.a,{path:"/register",children:Object(p.jsx)(d,{action:"register",setToken:n,setUserData:u})}),Object(p.jsx)(o.a,{path:"/login",children:Object(p.jsx)(d,{action:"login",setToken:n,setUserData:u})})]})};c.a.render(Object(p.jsx)(i.a,{children:Object(p.jsx)(x,{})}),document.getElementById("app"))}},[[32,1,2]]]);
//# sourceMappingURL=main.878e4f48.chunk.js.map