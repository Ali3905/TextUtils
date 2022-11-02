(this.webpackJsonpap=this.webpackJsonpap||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),o=n.n(s),l=(n(13),n(2)),r=(n(14),n(0));function d(e){var t={height:"30px",width:"30px"};return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg bg-".concat(e.Mode),style:{color:"dark"===e.Mode?"white":"black"},children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("a",{id:"select",className:"navbar-brand",href:"#",style:{color:"dark"===e.Mode?"white":"black"},children:"TextUtils"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",style:{color:"dark"===e.Mode?"white":"black"},children:"Home"})}),Object(r.jsx)("li",{className:"nav-item"})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary mx-1",onClick:e.primmode,style:t}),Object(r.jsx)("button",{type:"button",className:"btn btn-success mx-3",onClick:e.succmode,style:t}),Object(r.jsx)("button",{type:"button",className:"btn btn-warning mx-1",onClick:e.warnmode,style:t}),Object(r.jsxs)("div",{className:"form-check form-switch",children:[Object(r.jsx)("label",{htmlFor:"accept",id:"accept",children:Object(r.jsx)("input",{className:"form-check-input",onClick:e.darkMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"})}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function i(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],o=document.getElementById("preview"),d=document.getElementById("show"),i=document.getElementById("hide"),b={display:"none",color:"dark"===e.Mode?"white":"black"};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"mb-3",children:[Object(r.jsx)("h1",{style:{color:"dark"===e.Mode?"white":"black"},children:"Enter text below to Analyze"}),Object(r.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"8",value:a,onChange:function(e){s(e.target.value)},style:{color:"dark"===e.Mode?"white":"black",backgroundColor:"dark"===e.Mode?"grey":"white"}})]}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){var e=a.toUpperCase();s(e)},children:"Convert to upperCase"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){var e=a.toLocaleLowerCase();s(e)},children:"Convert to lowerCase"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary mx-2",id:"show",onClick:function(){o.style.display="block",d.style.display="none",i.style.display="inline"},children:"Show Preview"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary mx-2",id:"hide",onClick:function(){o.style.display="none",i.style.display="none",d.style.display="inline"},style:{display:"none",color:"white"},children:"Hide Preview"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary mx-2",onClick:function(){s("")},children:"Clear Text"}),Object(r.jsxs)("div",{style:{color:"dark"===e.Mode?"white":"black"},children:[Object(r.jsx)("h2",{children:"Text Summary"}),a.split(" ").length," Words and ",a.length," Characters"]}),Object(r.jsxs)("div",{id:"preview",style:b,children:[Object(r.jsx)("h2",{children:"Preview"}),Object(r.jsx)("p",{children:a})]})]})}function b(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-success alert-{props.alert.type} fade show",role:"alert",children:[Object(r.jsx)("strong",{children:e.alert.type}),": ",e.alert.msg]})}var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),o=Object(l.a)(s,2),u=o[0],h=o[1],m=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1900)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{Mode:n,darkMode:function(){"light"===n?(a("dark"),document.body.style.backgroundColor="#2b2a30",m("Dark Mode has been Enabled","Success"),document.title="TextUtils - Dark Mode"):"dark"===n?(a("light"),document.body.style.backgroundColor="white",m("Dark Mode has been Disabled","Success"),document.title="TextUtils - Home"):(a("dark"),document.body.style.backgroundColor="#2b2a30",m("Dark Mode has been Enabled","Success"),document.title="TextUtils - Dark Mode")},primmode:function(){"light"===n?(a("primary"),document.body.style.backgroundColor="#2a3f7e",m("Primary Mode has been Enabled","Success")):"primary"===n?(a("light"),document.body.style.backgroundColor="white",m("Primary Mode has been Disabled","Success")):(a("primary"),document.body.style.backgroundColor="#2a3f7e",m("Primary Mode has been Enabled","Success"))},succmode:function(){"light"===n?(a("success"),document.body.style.backgroundColor="rgb(25 68 50)",m("Success Mode has been Enabled","Success")):"success"===n?(a("light"),document.body.style.backgroundColor="white",m("Success Mode has been Disabled","Success")):(a("success"),document.body.style.backgroundColor="rgb(25 68 50)",m("Success Mode has been Enabled","Success"))},warnmode:function(){"light"===n?(a("warning"),document.body.style.backgroundColor="rgb(166 147 0)",m("Warn Mode has been Enabled","Success")):"warning"===n?(a("light"),document.body.style.backgroundColor="white",m("Warn Mode has been Disabled","Success")):(a("warning"),document.body.style.backgroundColor="rgb(166 147 0)",m("Success Mode has been Enabled","Success"))}}),Object(r.jsx)(b,{alert:u}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(i,{Mode:n})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))};o.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u,{})})),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.6a06352c.chunk.js.map