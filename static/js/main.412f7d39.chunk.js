(this["webpackJsonpthe-marker-hack"]=this["webpackJsonpthe-marker-hack"]||[]).push([[0],[,,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(3),i=t.n(o),c=(t(10),t(11),t(0));function s(){return console.log("nitz version: ".concat("0.1.5")),Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("p",{children:"0.1.5"})})}var l=t(5),g=(t(13),t(4)),v={USER_ID:"user_bQuPR7rEj8ZATM08WyYW6",TEMPLATE_ID:"template_3c7voko",SERVICE_ID:"service_vtgnux3"},u=function(e){console.log("i am here in email"),g.a.send(v.SERVICE_ID,v.TEMPLATE_ID,{LINK:e},v.USER_ID).then((function(e){console.log("Message Sent, We will get back to you shortly "+e.text)}),(function(e){console.log("An error occurred, Please try again "+e.text)}))};function d(){var e=Object(r.useState)(""),n=Object(l.a)(e,2),t=n[0],o=n[1],i=a.a.createRef(),s="https://www.google.com/amp/s/",g="/amp";return Object(c.jsxs)("div",{className:"center",children:[Object(c.jsx)("div",{className:"inputDiv",children:Object(c.jsx)("form",{className:"form",children:Object(c.jsx)("textarea",{ref:i,className:"inputStyle","aria-multiline":"true","aria-rowcount":51,type:"text",name:"urlLink",placeholder:"Insert The Marker URL Here"})})}),Object(c.jsx)("div",{className:"buttonDiv",children:Object(c.jsx)("button",{className:"center button",type:"button",onClick:function(){var e=i.current.value;if(console.log("nitz in a: ".concat(e)),void 0!==e&&""!==e&&" "!==e){var n=function(e){var n;try{var t=(n=new URL(e)).pathname,r=n.hostname;return[s,r,g,t].join("")}catch(a){}}(function(e){var n="https://",t=e.split(n);return console.log("nitz the sanitize Input is : ".concat(t[1]," ")),n+t[1]}(e));console.log("nitz in generateLinkAndDisplay the link is: ".concat(n)),o(n);var t=function(){console.log("inside trail");var e=!0;try{navigator.vibrate([200,30,200])}catch(r){console.log("vibrate cancel : "+r),e="vibrate cancel : "+r}console.log("inside trail 2"),console.log("nitz navigator.userAgent1: ".concat(JSON.stringify(navigator.clipboard))),console.log("nitz navigator.userAgent2: ".concat(JSON.stringify(navigator.credentials))),console.log("nitz navigator.userAgent3: ".concat(JSON.stringify(navigator.userAgent))),console.log("nitz navigator.userAgent4: ".concat(JSON.stringify(navigator.vendor))),console.log("nitz navigator.userAgent5: ".concat(JSON.stringify(navigator.serviceWorker))),console.log("nitz navigator.userAgent6: ".concat(JSON.stringify(navigator.hardwareConcurrency)));var n=navigator.userAgent,t={iPad:/iPad/.test(n),iPhone:/iPhone/.test(n),Android4:/Android 4/.test(n)};return console.log("nitz device: ".concat(JSON.stringify(t))),JSON.stringify({userAgent:navigator.userAgent,"navigator.clipboard":navigator.clipboard,"navigator.credentials":navigator.credentials,"navigator.vendor":navigator.vendor,"navigator.serviceWorker":navigator.serviceWorker,"navigator.hardwareConcurrency":navigator.hardwareConcurrency,vibrationSucceeded:e})}();void 0!==n&&""!==n&&" "!==n&&u(n+"trail info: "+t)}},children:Object(c.jsx)("span",{children:"Generate Link "})})}),Object(c.jsx)("div",{className:"linkDiv",children:Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:t,children:t})})})]})}i.a.render(Object(c.jsxs)(a.a.StrictMode,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(s,{})]}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.412f7d39.chunk.js.map