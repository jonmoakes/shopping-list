(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[4],{100:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}},180:function(n,e,t){var r=t(181);function a(n,e){var t=e;return n.forEach((function(n){t=t.replace(n,"")})),t}function o(n,e){for(var t,r="",a=0;a<e;a+=1)r+=n[(t=n.length,Math.floor(Math.random()*t).toString())];return r}n.exports=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.length,t=void 0===e?20:e,i=n.useLetters,c=void 0===i||i,d=n.useNumbers,s=void 0===d||d,x=n.includeSymbols,p=void 0===x?[]:x,u=n.excludeSymbols,h=void 0===u?[]:u,b="abcdefghijklmnopqrstuvwxyz",l="0123456789",f=[],m=[];return c&&(h.length&&(b=a(h,b)),f=b.split("")),s&&(h.length&&(l=a(h,l)),m=l.split("")),o([].concat(r(f),r(m),r(p)),t)}},181:function(n,e,t){var r=t(182),a=t(183),o=t(184),i=t(185);n.exports=function(n){return r(n)||a(n)||o(n)||i()}},182:function(n,e,t){var r=t(100);n.exports=function(n){if(Array.isArray(n))return r(n)}},183:function(n,e){n.exports=function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}},184:function(n,e,t){var r=t(100);n.exports=function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}},185:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},190:function(n,e,t){"use strict";t.r(e);var r,a=t(101),o=t(53),i=t(9),c=t(11),d=t.n(c),s=t(51),x=t(90),p=t(1),u=t(32),h=t(31),b=t(12),l=t(30),f=t(40),m=t(97),j=t(42),g=t(96),w=t(92),O=t(86),v=t(89),y=t(18),k=t(19).b.form(r||(r=Object(y.a)(["\n  padding: 30px 30px;\n  margin: 0px auto;\n\n  label {\n    float: left;\n    font-size: 25px;\n    text-shadow: none;\n\n    @media screen and (max-width: 320px) {\n      font-size: 16px;\n    }\n  }\n\n  textarea {\n    width: 100%;\n    padding: 12px;\n    border: 2px solid black;\n    border-radius: 10px;\n    box-shadow: 2px 2px 2px black;\n    box-sizing: border-box;\n    margin-top: 6px;\n    margin-bottom: 16px;\n    font-size: 18px;\n    height: 200px;\n    outline: none;\n\n    &:focus {\n      box-shadow: 4px 4px 4px black;\n      border-color: #2099f0;\n    }\n\n    @media screen and (max-width: 450px) {\n      font-size: 16px;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    padding: 10px 10px;\n  }\n\n  @media screen and (max-width: 450px) {\n    padding: 20px 10px;\n  }\n"]))),S=t(91),z=t(98),A=t(6),T=t(180),I=Object(l.b)({entries:m.a,currentUser:j.a});e.default=Object(b.g)(Object(h.b)(I)((function(n){var e=n.history,t=n.entries,r=n.currentUser,c=T({length:20,useLetters:!1}),h=Object(p.useState)({id:c,entry:""}),b=Object(x.a)(h,2),l=b[0],m=b[1],j=Object(p.useState)(""),y=Object(x.a)(j,2),I=y[0],E=y[1],C=l.id,R=Object(u.d)(),Y=function(){window.confirm(z.a)?(R.info(z.f),e.push("/table")):R.info(z.f)};var L=function(){""!==l.entry?window.confirm(z.b)?function(){M.apply(this,arguments)}():R.info(z.f):R.error("Please Enter Some Text For The Entry")};function M(){return(M=Object(s.a)(d.a.mark((function n(){var o,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,f.c.doc("users/".concat(r.id));case 4:return o=n.sent,i=Object.assign(l),n.prev=6,n.next=9,o.update({entries:[].concat(Object(a.a)(t),[i])});case 9:""===I&&"Rose"!==l.entry?(R.success(z.d),e.push("/table")):""===I&&"Rose"===l.entry&&(R.success("More Rose?!! \ud83d\ude44\ud83d\ude44\ud83d\ude44\ud83d\ude02"),e.push("/table")),n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(6),E("Error Adding Entry ",n.t0.message),n.abrupt("return");case 16:case"end":return n.stop()}}),n,null,[[6,12]])})))).apply(this,arguments)}var U=function(){var n=Object(s.a)(d.a.mark((function n(e){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault();try{m({id:c,entry:""})}catch(t){E(t.message)}case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(A.jsx)(w.a,{children:""!==I?Object(A.jsx)(g.a,{error:I}):Object(A.jsxs)("div",{children:[Object(A.jsx)(S.e,{type:"button",onClick:function(){return L()},children:"Save"}),Object(A.jsx)(S.d,{type:"button",onClick:function(){return Y()},children:"Back"}),Object(A.jsx)(O.b,{children:Object(A.jsx)(v.a,{children:"Add An Item"})}),Object(A.jsx)(O.a,{children:Object(A.jsxs)(k,{onSubmit:U,children:[Object(A.jsx)("label",{children:"Item:"}),Object(A.jsx)("textarea",{id:C,type:"text",name:"entry",onChange:function(n){var e=n.target,t=e.name,r=e.value;m(Object(i.a)(Object(i.a)({},l),{},Object(o.a)({},t,r)))},placeholder:"Type Item Here..."})]})})]})})})))},86:function(n,e,t){"use strict";t.d(e,"b",(function(){return d})),t.d(e,"a",(function(){return s})),t.d(e,"c",(function(){return x}));var r,a,o,i=t(18),c=t(19),d=c.b.div(r||(r=Object(i.a)(["\n  margin: 0px auto 75px auto;\n  background-color: #f7cf06;\n  width: 50%;\n  border-radius: 15px;\n  padding: 20px 20px 20px 20px;\n  box-shadow: 10px 10px 10px black;\n  border: 2px solid black;\n\n  @media screen and (max-width: 1024px) {\n    box-shadow: none;\n    width: 70%;\n  }\n\n  @media screen and (max-width: 600px) {\n    margin: 0px auto 50px auto;\n  }\n\n  @media screen and (max-width: 450px) {\n    width: 85%;\n    padding: 20px 10px 20px 10px;\n  }\n"]))),s=Object(c.b)(d)(a||(a=Object(i.a)(["\n  margin: 0px auto 200px auto;\n"]))),x=Object(c.b)(d)(o||(o=Object(i.a)(["\n  margin: 75px auto 75px auto;\n  background-color: #cc1616;\n\n  p,\n  li {\n    color: whitesmoke;\n    text-shadow: 1px 1px 1px black;\n  }\n\n  @media screen and (max-width: 600px) {\n    margin: 50px auto 50px auto;\n  }\n"])))},87:function(n,e,t){"use strict";var r,a=t(9),o=t(88),i=t(18),c=t(19).b.button(r||(r=Object(i.a)(["\n  width: 400px;\n  height: 75px;\n  font-size: 18px;\n  font-weight: bolder;\n  text-shadow: 1px 1px 1px black;\n  background-color: #2099f0;\n  color: whitesmoke;\n  text-transform: capitalize;\n  cursor: pointer;\n  border-radius: 15px;\n  border: 2px solid black;\n  transition: all 0.5s ease-in-out;\n  outline: none;\n  font-family: inherit;\n\n  &:hover {\n    background-color: yellow;\n    color: black;\n    text-shadow: none;\n    transform: scale(1.05);\n    box-shadow: 12px 12px 12px black;\n\n    @media screen and (max-width: 1024px) {\n      transform: none;\n      transition: none;\n      box-shadow: none;\n    }\n  }\n\n  :active {\n    transform: translate(0, 0.5rem);\n    box-shadow: 6px 6px 6px black;\n\n    @media screen and (max-width: 1024px) {\n      transform: none;\n      box-shadow: none;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    width: 300px;\n  }\n\n  @media screen and (max-width: 450px) {\n    width: 250px;\n    height: 65px;\n  }\n\n  @media screen and (max-width: 320px) {\n    font-size: 16px;\n    width: 200px;\n    height: 60px;\n  }\n"]))),d=t(6);e.a=function(n){var e=n.children,t=Object(o.a)(n,["children"]);return Object(d.jsx)(c,Object(a.a)(Object(a.a)({},t),{},{children:e}))}},89:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r,a=t(18),o=t(19).b.h1(r||(r=Object(a.a)(["\n  font-size: 30px;\n  text-shadow: none;\n\n  @media screen and (max-width: 1024px) {\n    padding: 0px 20px;\n  }\n\n  @media screen and (max-width: 450px) {\n    font-size: 25px;\n  }\n"])))},91:function(n,e,t){"use strict";t.d(e,"a",(function(){return f})),t.d(e,"c",(function(){return m})),t.d(e,"b",(function(){return j})),t.d(e,"e",(function(){return g})),t.d(e,"d",(function(){return w}));var r,a,o,i,c,d,s,x=t(18),p=t(19),u=t(93),h=t(87),b=Object(p.c)(r||(r=Object(x.a)(["",""])),u.zoomInRight),l=Object(p.c)(a||(a=Object(x.a)(["",""])),u.pulse),f=p.b.div(o||(o=Object(x.a)(["\n  width: 100%;\n  margin: 20px auto;\n  @media screen and (max-width: 1024px) {\n    margin: -20px auto 0px auto;\n  }\n  @media screen and (max-width: 450px) {\n    margin: 0px auto 0px auto;\n  }\n"]))),m=Object(p.b)(h.a)(i||(i=Object(x.a)(["\n  background-color: #cc1616;\n  animation: 1s ",";\n  margin: 10px;\n\n  &:hover {\n    background-color: #cc1616;\n    color: whitesmoke;\n  }\n\n  @media screen and (max-width: 800px) {\n    font-size: 16px;\n  }\n\n  @media screen and (max-width: 450px) {\n    width: 85%;\n    padding: 10px;\n  }\n"])),b),j=Object(p.b)(m)(c||(c=Object(x.a)(["\n  background-color: whitesmoke;\n  color: black;\n  text-shadow: none;\n\n  &:hover {\n    background-color: whitesmoke;\n    color: black;\n  }\n"]))),g=p.b.button(d||(d=Object(x.a)(["\n  width: 70px;\n  height: 70px;\n  position: fixed;\n  right: 30px;\n  top: 150px;\n  background-color: #00ff00;\n  border: 2px solid black;\n  border-radius: 50px;\n\n  font-weight: bold;\n  z-index: 10;\n  outline: none;\n  cursor: pointer;\n  animation: infinite 1s ",";\n\n  @media screen and (max-width: 800px) {\n    right: 20px;\n  }\n\n  @media screen and (max-width: 600px) {\n    right: 10px;\n    width: 50px;\n    height: 50px;\n  }\n\n  @media screen and (max-width: 450px) {\n    font-size: 10px;\n  }\n\n  @media screen and (max-width: 320px) {\n    width: 40px;\n    height: 40px;\n  }\n"])),l),w=p.b.button(s||(s=Object(x.a)(["\n  width: 70px;\n  height: 70px;\n  position: fixed;\n  right: 30px;\n  top: 240px;\n  background-color: red;\n  border: 2px solid black;\n  border-radius: 50px;\n  color: whitesmoke;\n  font-weight: bold;\n  z-index: 10;\n  outline: none;\n  cursor: pointer;\n  animation: infinite 1s ",";\n  text-align: center;\n\n  @media screen and (max-width: 800px) {\n    right: 20px;\n  }\n\n  @media screen and (max-width: 600px) {\n    right: 10px;\n\n    width: 50px;\n    height: 50px;\n  }\n\n  @media screen and (max-width: 450px) {\n    font-size: 10px;\n  }\n\n  @media screen and (max-width: 320px) {\n    width: 40px;\n    height: 40px;\n    top: 220px;\n  }\n"])),l)},92:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r,a=t(18),o=t(19).b.div(r||(r=Object(a.a)(["\n  width: 100%;\n  margin-top: 200px;\n  margin-bottom: 300px;\n"])))},96:function(n,e,t){"use strict";var r=t(86),a=t(6);e.a=function(n){var e=n.error;return Object(a.jsxs)(r.c,{children:[Object(a.jsx)("h1",{children:" \ud83d\ude15"}),Object(a.jsx)("h2",{children:"sorry, there has been an Error"}),""!==e&&Object(a.jsx)("p",{children:e}),Object(a.jsx)("p",{children:"some things to try:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"Check Your Internet connection."}),Object(a.jsx)("li",{children:"reload the page and try again."}),Object(a.jsx)("li",{children:"you could also try clearing your browser cache, then reloading the page and trying again."})]})]})}},97:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var r=t(30),a=Object(r.a)([function(n){return n.entry}],(function(n){return n?n.entries:null}))},98:function(n,e,t){"use strict";t.d(e,"d",(function(){return r})),t.d(e,"e",(function(){return a})),t.d(e,"f",(function(){return o})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return c})),t.d(e,"a",(function(){return d}));var r="Success! Item Added.",a="Success! Item Deleted.",o="Cancelled.",i="Are You Sure You Would Like To Add This Entry?",c="Are You Sure You'd Like To Remove This Entry?",d="Cancel And Return To The Table ( No Changes Will Be Saved ) ?"}}]);
//# sourceMappingURL=4.e0112986.chunk.js.map