(this["webpackJsonptaski-fir-ignat"]=this["webpackJsonptaski-fir-ignat"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={title:"HW2_title__2XK6V",deleteCallback:"HW2_deleteCallback__2eaoZ"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__2Z2BF",error:"Greeting_error__2tS0q",errorMessages:"Greeting_errorMessages__3OT9b",btn:"Greeting_btn__b10Re"}},function(e,t,n){e.exports={link:"Header_link__2kHLf",active:"Header_active__ulipB",blok:"Header_blok__1UJ7b",header:"Header_header__1Rl7H"}},function(e,t,n){e.exports={message:"Message_message__2M_CF",avatar:"Message_avatar__Xm_46",name:"Message_name__woyZa",text:"Message_text__263p5",time:"Message_time__3xDY8",blok:"Message_blok__1vwDg",corner:"Message_corner__szsCn"}},,,,function(e,t,n){e.exports={input:"SuperInputText_input__2-bPx",superInput:"SuperInputText_superInput__1BhbD",errorInput:"SuperInputText_errorInput__3pptL",error:"SuperInputText_error__2GsaM"}},,function(e,t,n){e.exports={default:"SuperButton_default__1H-kB",red:"SuperButton_red__3qfjg",btn:"SuperButton_btn__3Lh5f"}},,,function(e,t,n){e.exports={blue:"HW4_blue__QvB_i",column:"HW4_column__3nKQj",testSpanError:"HW4_testSpanError__1cuJe"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__28vfF",spanClassName:"SuperCheckbox_spanClassName__3APen"}},,,,,,function(e,t,n){e.exports={App:"App_App__ks4Aq"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__2fVce"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(26),s=n.n(c),i=(n(35),n(27)),o=n.n(i),l=n(3),j=n(12),u=n(2),b=n(0);var d=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},O=n(5),h=n(4),x=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(h.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:t},e+"-"+t)})):[];return Object(b.jsx)("select",Object(O.a)(Object(O.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},r),{},{children:c}))},m=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(h.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",onChange:s,checked:e===a,value:e,name:t}),n]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:i})},p=["x","y","z"];var v=function(){var e=Object(a.useState)(p[0]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(x,{options:p,value:n,onChangeOption:r})}),Object(b.jsx)("div",{children:Object(b.jsx)(m,{name:"radio",options:p,value:n,onChangeOption:r})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},f=function(){return Object(b.jsxs)("div",{children:["Junior",Object(b.jsx)(v,{})]})},_=function(){return Object(b.jsx)("div",{children:"JuniorPlus"})},g=n(11),k=n.n(g);var C=function(e){return Object(b.jsxs)("div",{className:k.a.message,children:[Object(b.jsx)("img",{src:e.avatar,className:k.a.avatar}),Object(b.jsx)("div",{className:k.a.corner}),Object(b.jsxs)("div",{className:k.a.blok,children:[Object(b.jsx)("div",{className:k.a.name,children:e.name}),Object(b.jsx)("div",{className:k.a.text,children:e.message}),Object(b.jsx)("div",{className:k.a.time,children:e.time})]})]})},N="https://steamuserimages-a.akamaihd.net/ugc/772863840223603020/AAAF98AA16C0AFAF36AB2D8B2F1D3FAE48FF7F71/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true",y="\u0410\u0440\u0442\u0435\u043c",S="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",w="22:00";var F=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(C,{avatar:N,name:y,message:S,time:w}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},A=n(8),H=n.n(A);var B=function(e){return Object(b.jsxs)("div",{children:[e.affair.name,Object(b.jsx)("button",{className:H.a.deleteCallback,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var M=function(e){var t=e.data.map((function(t){return Object(b.jsx)(B,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:H.a.buttonNiz,children:[t,Object(b.jsx)("button",{className:H.a.deleteCallback,onClick:function(){return e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{className:H.a.deleteCallback,onClick:function(){return e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{className:H.a.deleteCallback,onClick:function(){return e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{className:H.a.deleteCallback,onClick:function(){return e.setFilter("low")},children:"Low"})]})};var T=function(){var e=Object(a.useState)([{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"Redax",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:6,name:"html & css",priority:"middle"}]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(l.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{className:H.a.title,children:[Object(b.jsx)("hr",{}),"Homeworks 2 - Works",Object(b.jsx)(M,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{})]})},E=n(30),I=n(44),P=n(9),D=n.n(P),J=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=e.onKeyPressHandler;D.a.error?D.a.errorMessages:D.a.error;return Object(b.jsxs)("div",{className:D.a.blok,children:[Object(b.jsxs)("div",{className:D.a.input,children:[Object(b.jsx)("input",{value:t,onChange:n,onKeyDown:s}),Object(b.jsx)("button",{className:D.a.btn,onClick:a,children:"add"}),Object(b.jsx)("div",{className:D.a.total,children:c})]}),r&&Object(b.jsx)("div",{className:D.a.errorMessages,children:"Name is requred"})]})},K=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(null),j=Object(l.a)(o,2),u=j[0],d=j[1],O=function(){""!==s.trim()?(n(s),alert("Hello  ".concat(s,"!")),i("")):d("Name is requred")},h=t.length;return Object(b.jsx)(J,{name:s,setNameCallback:function(e){i(e.currentTarget.value)},addUser:O,error:u,totalUsers:h,onKeyPressHandler:function(e){d(null),"Enter"===e.key&&s&&O()}})};var W=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(K,{users:n,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};r([].concat(Object(E.a)(n),[t]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},U=n(15),q=n.n(U),G=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(h.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(q.a.error," ").concat(s||""),l="".concat(q.a.input," ").concat(c?q.a.errorInput:q.a.superInput);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(O.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:l},i)),c&&Object(b.jsx)("span",{className:o,children:c})]})},L=n(20),R=n.n(L),z=n(17),X=n.n(z),Z=function(e){e.red;var t=e.className,n=Object(h.a)(e,["red","className"]),a="".concat(X.a.btn?X.a.btn:X.a.default," ").concat(t);return Object(b.jsx)("button",Object(O.a)({className:a},n))},Q=n(21),V=n.n(Q),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(h.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(V.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(O.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(b.jsx)("span",{className:V.a.spanClassName,children:r})]})};var $=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(l.a)(i,2),j=o[0],u=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:R.a.column,children:[Object(b.jsx)(G,{value:n,onChangeText:r,onEnter:s,error:c}),Object(b.jsx)(G,{className:R.a.blue}),Object(b.jsx)(Z,{children:"default"}),Object(b.jsx)(Z,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(Z,{disabled:!0,children:"disabled"}),Object(b.jsx)(Y,{checked:j,onChangeChecked:u,children:"some text "}),Object(b.jsx)(Y,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ee=n(28),te=n.n(ee),ne=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(h.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],u=r||{},d=u.children,x=u.onDoubleClick,m=u.className,p=Object(h.a)(u,["children","onDoubleClick","className"]),v="".concat(te.a.span," ").concat(m);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(G,Object(O.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(b.jsxs)("span",Object(O.a)(Object(O.a)({onDoubleClick:function(e){j(!0),x&&x(e)},className:v},p),{},{children:["\ud83d\udd8c",d||c.value]}))})};function ae(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function re(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ae("test",{x:"A",y:1});re("test",{x:"",y:0});var ce=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)(ne,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(Z,{onClick:function(){ae("editable-span-value",n)},children:"save"}),Object(b.jsx)(Z,{onClick:function(){r(re("editable-span-value",n))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var se=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(F,{}),Object(b.jsx)(T,{}),Object(b.jsx)(W,{}),Object(b.jsx)($,{}),Object(b.jsx)(ce,{})]})},ie="/pre-junior",oe="/junior",le="/junior-plus";var je=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(u.a,{to:ie})}}),Object(b.jsx)(u.b,{path:ie,render:function(){return Object(b.jsx)(se,{})}}),Object(b.jsx)(u.b,{path:oe,render:function(){return Object(b.jsx)(f,{})}}),Object(b.jsx)(u.b,{path:le,render:function(){return Object(b.jsx)(_,{})}}),Object(b.jsx)(u.b,{render:function(){return Object(b.jsx)(d,{})}})]})})},ue=n(10),be=n.n(ue);var de=function(){return Object(b.jsxs)("div",{className:be.a.header,children:[Object(b.jsx)(j.b,{to:ie,className:be.a.link,activeClassName:be.a.active,children:"pre-junior"}),Object(b.jsx)(j.b,{to:oe,className:be.a.link,activeClassName:be.a.active,children:"junior"}),Object(b.jsx)(j.b,{to:le,className:be.a.link,activeClassName:be.a.active,children:"junior+"}),Object(b.jsx)("div",{className:be.a.blok,children:" "})]})};var Oe=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2);return t[0],t[1],Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(de,{}),Object(b.jsx)(je,{})]})})};var he=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(Oe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(he,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[42,1,2]]]);
//# sourceMappingURL=main.e9aefc41.chunk.js.map