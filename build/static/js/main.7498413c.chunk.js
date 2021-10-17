(this["webpackJsonpfitnesstrac.kr"]=this["webpackJsonpfitnesstrac.kr"]||[]).push([[0],{32:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(15),s=n.n(a),i=n(6),o=n(0),u=function(e){var t=e.activities;return t?Object(o.jsx)(r.a.Fragment,{children:Object(o.jsxs)("div",{className:"activities",children:[Object(o.jsx)("span",{children:"Activities:"}),t.map((function(e){return Object(o.jsx)(S,{activity:e},e.id)}))]})}):"Loading..."},l=n(9),j=n(3),h=n.n(j),b=n(8),p=n(4),d=n(2),O='"https://fitnesstrac-kr.herokuapp.com/api";',x=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),j=Object(p.a)(s,2),x=j[0],m=j[1],S=Object(c.useState)([]),w=Object(p.a)(S,2),N=w[0],C=w[1],T=Object(c.useState)(""),I=Object(p.a)(T,2),L=I[0],R=I[1],F=Object(c.useState)([]),P=Object(p.a)(F,2),A=P[0],D=P[1],E=Object(c.useState)(""),J=Object(p.a)(E,2),z=J[0],B=J[1],U=Object(d.e)(),H=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/activities"),{headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&a(n),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/routines"),{headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&C(n),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),e.t0;case 14:case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(O,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(L)}});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,c=n.username,B(c),e.abrupt("return");case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),G={activities:n,setActivities:a,loggedIn:x,setLoggedIn:m,routines:N,setRoutines:C,token:L,setToken:R,userRoutines:A,setUserRoutines:D,username:z,setUsername:B};return Object(c.useEffect)((function(){try{W(),H(),q()}catch(e){console.error(e)}}),[L]),Object(c.useEffect)((function(){var e=localStorage.getItem("token");e&&(R(e),m(!0))})),Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsxs)("header",{className:"site-header",children:[Object(o.jsx)("div",{className:"logo-container",children:Object(o.jsx)(i.b,{to:"/",className:"logo",children:Object(o.jsx)("h1",{children:"Fitness Trac.kr"})})}),Object(o.jsxs)("div",{className:"link-bar",children:[Object(o.jsx)(i.b,{to:"/",className:"nav-link ",children:"Home"}),Object(o.jsx)(i.b,{to:"/routines",className:"nav-link",children:"Routines"}),x?Object(o.jsx)(i.b,{to:"/account/routines",className:"nav-link",children:"My Routines"}):null,Object(o.jsx)(i.b,{to:"/activities",className:"nav-link",children:"Activities"}),x?Object(o.jsx)("button",{onClick:function(){R(""),m(!1),localStorage.removeItem("token"),localStorage.removeItem("username"),U.push("/")},children:"Logout"}):Object(o.jsx)(i.b,{to:"/account/login",children:"Log in"})]})]}),Object(o.jsxs)("main",{id:"content",children:[Object(o.jsx)(d.a,{exact:!0,path:"/",children:Object(o.jsx)(v,Object(l.a)({},G))}),Object(o.jsx)(d.a,{exact:!0,path:"/routines",children:Object(o.jsx)(y,Object(l.a)({},G))}),Object(o.jsx)(d.a,{exact:!0,path:"/account/routines",children:Object(o.jsx)(g,Object(l.a)({},G))}),Object(o.jsx)(d.a,{exact:!0,path:"/activities",children:Object(o.jsx)(u,Object(l.a)({},G))}),Object(o.jsx)(d.a,{exact:!0,path:"/account/login",children:Object(o.jsx)(f,Object(l.a)({},G))}),Object(o.jsx)(d.a,{exact:!0,path:"/account/register",children:Object(o.jsx)(k,Object(l.a)({},G))})]})]})},v=function(){return console.log("Help"),Object(o.jsx)(r.a.Fragment,{children:Object(o.jsx)("div",{children:"Welcome to FitnessTrac.kr"})})},f=function(e){var t=e.setLoggedIn,n=e.setToken,a=Object(c.useState)(""),s=Object(p.a)(a,2),u=s[0],l=s[1],j=Object(c.useState)(""),O=Object(p.a)(j,2),x=O[0],v=O[1],f=Object(d.e)(),m=function(){var e=Object(b.a)(h.a.mark((function e(c){var r,a,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,fetch("".concat('"https://fitnesstrac-kr.herokuapp.com/api";',"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,password:x})});case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,s=a.token,i=a.user,!s){e.next=18;break}return localStorage.setItem("token",s),localStorage.setItem("username",i.username),n(s),t(!0),l(""),v(""),f.push("./routines"),e.abrupt("return");case 18:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),console.error(e.t0);case 24:case 25:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)("h2",{children:"Login"}),Object(o.jsxs)("form",{onSubmit:m,className:"login-form",children:[Object(o.jsx)("input",{type:"text",placeholder:"enter username",onChange:function(e){return l(e.target.value)},value:u}),Object(o.jsx)("input",{type:"password",placeholder:"password",onChange:function(e){return v(e.target.value)},value:x}),Object(o.jsx)("button",{type:"submit",disabled:x<8,children:"Login"})]}),Object(o.jsxs)("span",{children:["Don't have an account? Click ",Object(o.jsx)(i.b,{to:"/account/register",children:"here"})," to register!"]})]})},m='"https://fitnesstrac-kr.herokuapp.com/api";',g=function(e){var t=e.setUserRoutines,n=e.token,a=e.username,s=e.userRoutines,i=Object(c.useState)(""),u=Object(p.a)(i,2),l=u[0],j=u[1],d=Object(c.useState)(""),O=Object(p.a)(d,2),x=O[0],v=O[1],f=Object(c.useState)(!1),g=Object(p.a)(f,2),k=g[0],y=g[1],S=function(){var e=Object(b.a)(h.a.mark((function e(){var c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a){e.next=10;break}return e.next=4,fetch("".concat(m,"/users/").concat(a,"/routines"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 4:return c=e.sent,e.next=7,c.json();case 7:r=e.sent,t(r||[]);case 10:return e.abrupt("return");case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("".concat(m,"/routines"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({name:l,goal:x,isPublic:k})});case 4:return c=e.sent,e.next=7,c.json();case 7:if(!e.sent){e.next=14;break}return j(""),v(""),y(!1),e.next=14,S();case 14:return e.abrupt("return");case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0);case 21:case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/routines/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:return e.next=5,S();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){try{S()}catch(e){console.error(e)}}),[]),Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsxs)("div",{className:"form-container",children:[Object(o.jsx)("h2",{children:"Create a new routine:"}),Object(o.jsxs)("form",{onSubmit:N,className:"login-form",children:[Object(o.jsx)("input",{type:"text",placeholder:"Name your routine!",onChange:function(e){return j(e.target.value)},value:l}),Object(o.jsx)("input",{type:"text",placeholder:"What is your goal?",onChange:function(e){return v(e.target.value)},value:x}),Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("label",{children:"Private:"}),Object(o.jsxs)("select",{name:"isPublic",placeholder:"No",value:k,onChange:function(e){return y(e.target.value)},children:[Object(o.jsx)("option",{value:"true",children:"no"}),Object(o.jsx)("option",{value:"false",children:"yes"})]})]}),Object(o.jsx)("button",{type:"submit",disabled:!l||!x,children:"Create Routine"})]})]}),s.length>0?s.map((function(e){return Object(o.jsx)(w,{routine:e,children:Object(o.jsx)("button",{onClick:function(){return C(e.id)},children:"Delete"})},e.id)})):null]})},k=function(e){var t=e.setLoggedIn,n=e.setToken,a=Object(c.useState)(""),s=Object(p.a)(a,2),u=s[0],l=s[1],j=Object(c.useState)(""),d=Object(p.a)(j,2),O=d[0],x=d[1],v=Object(c.useState)(""),f=Object(p.a)(v,2),m=f[0],g=f[1],k=Object(c.useHistory)(),y=function(){var e=Object(b.a)(h.a.mark((function e(c){var r,a,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,fetch("".concat('"https://fitnesstrac-kr.herokuapp.com/api";',"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:u,password:O})});case 4:return r=e.sent,e.next=7,r.json();case 7:a=e.sent,s=a.token,i=a.user,s&&(localStorage.setItem("token",s),localStorage.setItem("username",i.username),n(s),t(!0),l(""),x(""),k.push("/")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)("h2",{children:"Register"}),Object(o.jsxs)("form",{onSubmit:y,className:"login-form",children:[Object(o.jsx)("input",{type:"text",placeholder:"enter username",onChange:function(e){return l(e.target.value)},value:u}),Object(o.jsx)("input",{type:"password",placeholder:"enter password",onChange:function(e){return x(e.target.value)},value:O}),Object(o.jsx)("input",{type:"password",placeholder:"verify password",onChange:function(e){return g(e.target.value)},value:m}),Object(o.jsx)("button",{type:"submit",disabled:!O||!u||O.length<8||O!==m,children:"Register"})]}),Object(o.jsxs)("span",{children:["Already have an account? Click ",Object(o.jsx)(i.b,{to:"/account/login",children:"here"})," to login!"]}),O!==m&&Object(o.jsx)("span",{className:"no-match-alert",children:"Passwords must match!"}),O.length<8&&Object(o.jsx)("span",{className:"no-match-alert",children:"Passwords must contain at least 8 characters!"})]})},y=function(e){var t=e.routines;return console.log("ROUTINES: ",t),Object(o.jsx)(r.a.Fragment,{children:t?t.map((function(e){return Object(o.jsx)(w,{routine:e},e.id)})):"Loading..."})},S=function(e){var t=e.children,n=e.activity;return n?Object(o.jsxs)("div",{className:"activity-single",children:[Object(o.jsxs)("span",{children:["Name: ",n.name]}),Object(o.jsxs)("span",{children:["Description: ",n.description]}),t]}):"Loading..."},w=function(e){var t=e.children,n=e.routine;return n?Object(o.jsxs)("div",{className:"routine-single",children:[Object(o.jsx)("span",{children:Object(o.jsx)("h3",{children:n.name})}),Object(o.jsx)("span",{children:Object(o.jsxs)("h3",{className:"creator-name",children:["created by ",n.creatorName]})}),Object(o.jsxs)("span",{children:["Goal: ",n.goal]}),Object(o.jsxs)("span",{children:["Private: ",n.isPublic?"yes":"no"]}),t,n.activities.length>0&&Object(o.jsxs)("div",{className:"activities",children:[Object(o.jsx)("span",{children:"Activities:"}),Object(o.jsx)("ul",{className:"activities-list",children:n.activities.map((function(e){return Object(o.jsx)("li",{className:"activity-single",children:Object(o.jsx)(S,{activity:e,children:Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsxs)("span",{children:["Repetition: ",e.count," times"]}),Object(o.jsxs)("span",{children:["Duration: ",e.duration," minutes"]})]})})},e.id)}))})]})]}):"Loading..."};s.a.render(Object(o.jsx)(i.a,{children:Object(o.jsx)(x,{})}),document.querySelector("app"))}},[[32,1,2]]]);
//# sourceMappingURL=main.7498413c.chunk.js.map