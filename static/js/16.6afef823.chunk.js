(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[16],{460:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(2),r=a(73),s=a(51),o=a(75),c=a(74),i=a(0),p=a.n(i),d=a(15),l=a(22),u=a(1),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(o.a)(i,t);var a=Object(c.a)(i);function i(){return Object(r.a)(this,i),a.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(n.a)({},this.props)):Object(u.jsx)(l.a,{to:"/login"})}}]),i}(p.a.Component);return Object(d.b)(j)(t)}},468:function(e,t,a){e.exports={form:"InputField_form__spXn5",input:"InputField_input__3ez0K",button:"InputField_button__33qzT"}},514:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),o=a(161),c=a(162),i=function(e){return e.auth.userId},p=function(e){return e.dialogsPage.opponents},d=function(e){return e.dialogsPage.messages},l=function(e){return e.dialogsPage.currentOpponent},u=function(e){return e.profilePage.profile},j=a(438),b=a(447),x=a(33),g=a(468),m=a.n(g),h=a(1),f=Object(b.a)((function(e){return{footerMessages:{height:"50px",width:"100%",background:e.palette.background.paper,marginBottom:"15px",borderRadius:"8px 8px 8px 8px",display:"flex",justifyContent:"space-around",alignItems:"center",margin:"10px 0px 0px 0px"}}})),O=function(e){var t=e.currentOpponent,a=f(),n=Object(s.c)();return Object(h.jsx)(x.c,{initialValues:{textarea:""},onSubmit:function(e,a){var r=a.resetForm;n(Object(o.e)(t.id,e.textarea)),r({})},children:t.id?Object(h.jsx)(x.b,{className:m.a.form,children:Object(h.jsx)(x.a,{type:"textarea",name:"textarea",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",className:m.a.input,autocomplete:"off",autoFocus:!0})}):Object(h.jsx)(j.a,{className:a.footerMessages})})},v=a(24),w=a(165),N=Object(b.a)((function(e){return{wrapper:{height:"68vh",padding:"10px 15px",backgroundColor:e.palette.background.paper,borderRadius:"8px",overflowY:"auto",overflowX:"hidden",width:"535px",position:"relative",boxShadow:e.palette.boxShadowSearch},messageWrapper:{padding:"5px",display:"flex",alignItems:"flex-start",gap:"20px"},message:{width:"370px",margin:"0",marginRight:"20px",padding:"0",overflowWrap:"break-word"},photo:{marginTop:"5px",borderRadius:"50%",verticalAlign:"middle"},senderName:{margin:"0",padding:"0",color:"#F53838",fontSize:"20px"},chooseOpponent:{color:"var(--font-grey-disactive)",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"60%"},headerMessages:{height:"50px",width:"100%",background:e.palette.background.paper,marginBottom:"15px",borderRadius:"8px 8px 8px 8px",display:"flex",alignItems:"center","& > div":{display:"flex"},"& > div > img":{borderRadius:"50%",width:"40px",height:"40px",margin:"0px 15px 0px 10px"}}}})),y=function(e){var t=e.messages,a=e.currentOpponent,r=e.authProfile;console.log(t);var s=N(),o=Object(n.useRef)(null);return Object(n.useEffect)((function(){!function(){var e;null===(e=o.current)||void 0===e||e.scrollIntoView(!0)}()}),[t]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j.a,{className:s.headerMessages,children:a.id?Object(h.jsxs)(j.a,{children:[Object(h.jsx)("img",{src:a.photos.small||w.a,alt:"\u0444\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(h.jsx)(j.a,{children:a.userName})]}):null}),Object(h.jsxs)(j.a,{className:s.wrapper,children:[a.id?t.map((function(e){return Object(h.jsxs)(j.a,{className:s.messageWrapper,children:[Object(h.jsx)(j.a,{className:s.photoWrapper,children:Object(h.jsx)(v.b,{to:"/profile/".concat(e.senderId),children:Object(h.jsx)("img",{src:a.id===e.senderId?a.photos.small||w.a:r.photos.small||w.a,alt:"\u0444\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",width:"50px",className:s.photo})})}),Object(h.jsxs)(j.a,{children:[Object(h.jsx)("p",{className:s.senderName,children:e.senderName}),Object(h.jsx)("p",{className:s.message,children:e.body})]})]},e.id)})):Object(h.jsx)(j.a,{className:s.chooseOpponent,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0430"}),Object(h.jsx)(j.a,{ref:o})]})]})},k=Object(b.a)((function(e){return{wrapper:{height:"83vh",overflowY:"auto",overflowX:"hidden","& :hover":{backgroundColor:e.palette.background.backgroundHover}},opponent:{marginBottom:"10px",display:"flex",alignItems:"center",gap:"10px",borderRadius:"8px",padding:"5px",cursor:"pointer",backgroundColor:e.palette.background.paper},name:{margin:"0"},photo:{borderRadius:"50%"}}})),I=function(e){var t=e.opponents,a=k(),n=Object(s.c)();return Object(h.jsx)("div",{className:a.wrapper,children:t.map((function(e){return Object(h.jsxs)("div",{onClick:function(){return t=e,n(Object(o.c)(t.id)),void n(o.a.setCurrentOpponent(t));var t},className:a.opponent,children:[Object(h.jsx)("img",{src:e.photos.small||w.a,alt:e.userName,className:a.photo,width:"50px"}),Object(h.jsx)("p",{className:a.name,children:e.userName})]},e.id)}))})},C=Object(b.a)((function(e){return{dialogs:{display:"flex",justifyContent:"space-between",color:"var(--font-grey)",width:"100%"},dialogList:{width:"200px",overflowY:"auto",overflowX:"hidden"},messages:{marginLeft:"10px"}}})),R=function(){var e=C(),t=Object(s.c)(),a=Object(s.d)(u),r=Object(s.d)(l),b=Object(s.d)(d),x=Object(s.d)(p),g=Object(s.d)(i);return Object(n.useEffect)((function(){t(Object(o.d)()),t(Object(c.d)(g))}),[]),Object(h.jsxs)(j.a,{className:e.dialogs,children:[Object(h.jsx)(j.a,{className:e.dialogList,children:Object(h.jsx)(I,{opponents:x})}),Object(h.jsxs)(j.a,{className:e.messages,children:[Object(h.jsx)(y,{messages:b,currentOpponent:r,authProfile:a}),Object(h.jsx)(O,{currentOpponent:r})]})]})},_=r.a.memo(R),P=a(460),F=a(23);t.default=Object(F.d)(Object(s.b)((function(e){return{dialogsPage:e.dialogsPage}})),P.a)(_)}}]);
//# sourceMappingURL=16.6afef823.chunk.js.map