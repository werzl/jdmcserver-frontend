(this.webpackJsonpjdmcserver=this.webpackJsonpjdmcserver||[]).push([[0],{58:function(e,t,n){},62:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(0),a=n.n(c),s=n(19),i=n.n(s),o=(n(58),n(7)),u=n.n(o),j=n(10),l=n(15),d=n(21),b=(n(60),n(29)),h=n(9),O=n(80),p=n(79),x=n(77),f=n(52),v=(n(61),n.p+"static/media/logo.aeea57dc.jpg"),m=(n(62),n(13)),g=n(14),y=n(17),k=n.n(y),w=function(){function e(){Object(m.a)(this,e)}return Object(g.a)(e,null,[{key:"get",value:function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.ajax({type:"GET",url:"https://03hnoouy54.execute-api.eu-west-2.amazonaws.com/live/get-ec2-status",data:"",beforeSend:function(e){e.setRequestHeader("x-api-key",t)}}).then((function(e){return e}),(function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),S=n(82),C=n(81),N=n(34),E=n(24),T=n(25),L=(n(71),function(e){var t=e.logout;return Object(r.jsxs)(S.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(r.jsx)(S.a.Brand,{children:Object(r.jsx)(N.LinkContainer,{to:"/",children:Object(r.jsx)("img",{src:v,className:"nav-logo",alt:"logo"})})}),Object(r.jsx)(S.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(r.jsxs)(S.a.Collapse,{id:"responsive-navbar-nav",children:[Object(r.jsxs)(C.a,{className:"mr-auto",children:[Object(r.jsx)(N.LinkContainer,{to:"/Server",children:Object(r.jsx)(C.a.Link,{children:"Server"})}),Object(r.jsx)(N.LinkContainer,{to:"/Settings",children:Object(r.jsx)(C.a.Link,{children:"Settings"})})]}),Object(r.jsx)(C.a,{children:Object(r.jsxs)(C.a.Link,{onClick:t,children:[Object(r.jsx)(E.a,{icon:T.b})," Logout"]})})]})]})}),I=function(){function e(){Object(m.a)(this,e)}return Object(g.a)(e,null,[{key:"post",value:function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.ajax({type:"POST",url:"https://03hnoouy54.execute-api.eu-west-2.amazonaws.com/live/start-ec2-instance",data:"",beforeSend:function(e){e.setRequestHeader("x-api-key",t)}}).then((function(e){return e}),(function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),A=function(){function e(){Object(m.a)(this,e)}return Object(g.a)(e,null,[{key:"post",value:function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.ajax({type:"POST",url:"https://03hnoouy54.execute-api.eu-west-2.amazonaws.com/live/stop-ec2-instance",data:"",beforeSend:function(e){e.setRequestHeader("x-api-key",t)}}).then((function(e){return e}),(function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),R=function(){function e(){Object(m.a)(this,e)}return Object(g.a)(e,null,[{key:"get",value:function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.ajax({type:"GET",url:"https://03hnoouy54.execute-api.eu-west-2.amazonaws.com/live/get-instance-details",data:"",beforeSend:function(e){e.setRequestHeader("x-api-key",t)}}).then((function(e){return e}),(function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),M=function(){function e(){Object(m.a)(this,e)}return Object(g.a)(e,null,[{key:"displayErrorMessage",value:function(e){d.b.error(e)}},{key:"displaySuccessMessage",value:function(e){d.b.success(e)}},{key:"displayWarning",value:function(e){d.b.warn(e)}},{key:"displayInfo",value:function(e){d.b.info(e)}}]),e}(),D="Running",P="Stopped",H="Pending",z=n(78),F=(n(73),function(e){var t=e.serverStatus,n=e.getServerStatus,a=e.startServer,s=e.stopServer,i=e.serverDetails,o=Object(c.useState)(!0),u=Object(l.a)(o,2),j=u[0],d=u[1],b=Object(c.useState)(""),h=Object(l.a)(b,2),O=h[0],p=h[1],v=Object(c.useState)(""),m=Object(l.a)(v,2),g=m[0],y=m[1],k=Object(c.useRef)(null),w=Object(c.useCallback)((function(){var e=new Date(i.launchTime),t=(new Date).getTime()-e.getTime();y(e.toGMTString()),p(new Date(t).toLocaleTimeString()),d(!1)}),[y,p,i,d]);return Object(c.useEffect)((function(){return d(!0),t===D?k.current=setInterval((function(){return w()}),1e3):clearInterval(k.current),function(){clearInterval(k.current)}}),[p,t,w,d]),Object(r.jsx)(x.a,{children:Object(r.jsx)(f.a,{children:Object(r.jsxs)("div",{className:"inner-content",children:[Object(r.jsx)("h1",{children:Object(r.jsxs)(x.a,{children:[Object(r.jsxs)(f.a,{children:["Jdmcserver: ",t===H&&Object(r.jsx)(E.a,{icon:T.c,spin:!0}),t!==H&&Object(r.jsx)(r.Fragment,{children:t})]}),Object(r.jsx)(f.a,{children:t!==H&&Object(r.jsx)(E.a,{className:"refresh-icon",icon:T.a,onClick:n})})]})}),Object(r.jsxs)("div",{className:"server-details-content",children:[t!==H&&Object(r.jsx)(x.a,{className:"mt-5",children:Object(r.jsx)(f.a,{children:Object(r.jsx)(z.a,{borderless:!0,children:Object(r.jsx)("tbody",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{className:"launch-cell",children:Object(r.jsx)("p",{children:"Launch/Stop Server"})}),Object(r.jsx)("td",{children:Object(r.jsxs)("label",{className:"switch",children:[Object(r.jsx)("input",{type:"checkbox",checked:t===D,onClick:function(){t===P&&a(),t===D&&s()},readOnly:!0}),Object(r.jsx)("span",{className:"slider round"})]})})]})})})})}),t===D&&Object(r.jsxs)(r.Fragment,{children:[j&&Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{children:"Loading.."})}),!j&&Object(r.jsx)(x.a,{children:Object(r.jsx)(f.a,{children:Object(r.jsx)(z.a,{bordered:!0,children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Server Address"}),Object(r.jsx)("td",{children:i.publicDnsName})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"ip"}),Object(r.jsx)("td",{children:i.publicIpAddress})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Region"}),Object(r.jsx)("td",{children:i.availabilityZone})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Started"}),Object(r.jsx)("td",{children:g})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Time Running"}),Object(r.jsx)("td",{children:O})]})]})})})})]})]})]})})})}),G=function(e){var t=e.apiKey,n=Object(c.useState)(H),a=Object(l.a)(n,2),s=a[0],i=a[1],o=Object(c.useState)({}),d=Object(l.a)(o,2),b=d[0],h=d[1],O=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(H),e.next=3,I.post(t).then((function(){setTimeout((function(){return f()}),15e3)})).catch((function(e){M.displayErrorMessage("Error when starting the server."),console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(H),e.next=3,A.post(t).then((function(){setTimeout((function(){return f()}),15e3)})).catch((function(e){M.displayErrorMessage("Error when stopping the server."),console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=Object(c.useCallback)(Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.get(t).then((function(e){h(e)})).catch((function(e){M.displayErrorMessage("Couldn't get server details."),console.error(e)}));case 2:case"end":return e.stop()}}),e)}))),[t,h]),f=Object(c.useCallback)(Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(H),e.next=3,w.get(t).then((function(e){e.status===D&&(i(D),x()),e.status===P&&i(P),e.status===H&&(i(H),f())})).catch((function(e){M.displayErrorMessage("Couldn't check server status."),i("Error"),console.error(e)}));case 3:case"end":return e.stop()}}),e)}))),[t,i,x]);return Object(c.useEffect)((function(){f()}),[f]),Object(r.jsx)(F,{serverStatus:s,getServerStatus:f,startServer:O,stopServer:p,serverDetails:b})},J=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),o=i[0],m=i[1],g=Object(c.useCallback)(Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get(n).then((function(){m(!0)})).catch((function(){d.b.error("API Key Invalid.",{autoClose:2500,hideProgressBar:!0})}));case 2:case"end":return e.stop()}}),e)}))),[n,m]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{}),!o&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:v,className:"",alt:"logo"}),Object(r.jsx)("p",{children:"Jdmcserver"}),Object(r.jsxs)(O.a,{className:"w-25 mt-3 text-center",children:[Object(r.jsxs)(O.a.Group,{children:[Object(r.jsx)(O.a.Label,{children:"Enter an API Key"}),Object(r.jsx)(O.a.Control,{type:"password",placeholder:"API-Key",onChange:function(e){return a(e.target.value)}})]}),Object(r.jsx)(p.a,{variant:"outline-primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),g()}(e)},children:"Submit"})]})]})}),o&&Object(r.jsxs)(b.HashRouter,{basename:"/jdmcserver-frontend/",children:[Object(r.jsx)(x.a,{children:Object(r.jsx)(f.a,{children:Object(r.jsx)(L,{logout:function(){a(""),m(!1)}})})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(f.a,{children:Object(r.jsxs)(h.g,{children:[Object(r.jsx)(h.d,{path:"//",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:v,className:"App-logo",alt:"logo"}),Object(r.jsx)("p",{children:"Jdmcserver"}),Object(r.jsx)("a",{className:"App-link",href:"https://github.com/werzl/jdmcserver",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})}),Object(r.jsx)(h.d,{path:"/Server/",children:Object(r.jsx)(G,{apiKey:n})}),Object(r.jsx)(h.d,{path:"/Settings/",children:Object(r.jsx)(x.a,{children:Object(r.jsx)(f.a,{children:Object(r.jsx)("div",{className:"inner-content",children:Object(r.jsx)("h1",{children:"Settings"})})})})})]})})})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.264bd0b1.chunk.js.map