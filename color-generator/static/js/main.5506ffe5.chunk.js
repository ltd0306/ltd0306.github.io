(this["webpackJsonpcolor-generator"]=this["webpackJsonpcolor-generator"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),o=c.n(r),a=c(4),s=c.n(a),l=(c(11),c(2)),i=c(5),j=c.n(i),u=function(e){var t=e.color,c=t.rgb,o=t.weight,a=t.hex,s=(e.key,e.index);console.log(c,o,a);var i=c.join(","),j="#".concat(a),u=Object(r.useState)(!1),b=Object(l.a)(u,2),O=b[0],h=b[1];return Object(r.useEffect)((function(){var e=setTimeout((function(){h(!1)}),1500);return function(){return clearTimeout(e)}}),[]),Object(n.jsxs)("article",{className:"color ".concat(s>10&&"color-light"),style:{backgroundColor:"rgb(".concat(i,")")},onClick:function(){navigator.clipboard.writeText(j),h(!0)},children:[Object(n.jsxs)("p",{className:"percent-value",children:[o,"%"]}),Object(n.jsx)("p",{className:"color-value",children:j}),O&&Object(n.jsx)("p",{className:"alert",children:"\u5df2\u7ecf\u590d\u5236\u5230\u526a\u8d34\u677f"})]})};var b=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),c=t[0],o=t[1],a=Object(r.useState)([]),s=Object(l.a)(a,2),i=s[0],b=s[1],O=Object(r.useState)(!1),h=Object(l.a)(O,2),d=h[0],x=h[1];return console.log(i),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{className:"container",children:[Object(n.jsx)("h3",{children:"\u989c\u8272\u751f\u6210\u5668"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();try{var t=new j.a(c).all(10);b(t),x(!1)}catch(d){x(!0),console.log(d)}},children:[Object(n.jsx)("input",{type:"text",placeholder:"#f15025",onChange:function(e){return o(e.target.value)},className:"".concat(d?"error":null)}),Object(n.jsx)("button",{type:"submit",className:"btn",children:"\u63d0\u4ea4"})]})]}),Object(n.jsx)("section",{className:"colors",children:i.map((function(e,t){return Object(n.jsx)(u,{color:e,index:t},t)}))})]})};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5506ffe5.chunk.js.map