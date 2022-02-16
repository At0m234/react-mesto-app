(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(17),r=a.n(c),s=a(7),l=(a(15),a(2)),i=a(1),u=a.p+"static/media/logo_mesto_white.ff16f24b.svg";function p(e){var t=Object(i.g)();return o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/signup"},o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),o.a.createElement("button",{className:"header__btn",onClick:function(){t.push("/signin")}},"\u0412\u043e\u0439\u0442\u0438"))),o.a.createElement(i.b,{path:"/signin"},o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),o.a.createElement("button",{className:"header__btn",onClick:function(){t.push("/signup")}},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))),o.a.createElement(i.b,{path:"/"},o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),o.a.createElement("div",{className:"header__signout"},o.a.createElement("p",{className:"header__username"},e.userdata.email),o.a.createElement("button",{className:"header__btn",onClick:e.onSignOut},"\u0412\u044b\u0439\u0442\u0438")))))}var m=o.a.createContext("");function d(e){var t=o.a.useContext(m);var a="place__trash "+"".concat(e.card.owner[0]===t._id?" ":" place__trash_invisible");return o.a.createElement("div",null,o.a.createElement("div",{className:"place",onClick:function(){e.onSelectCurrentCard(e.card)}},o.a.createElement("button",{className:a,onClick:function(){e.onDelete()},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),o.a.createElement("img",{className:"place__image",onClick:e.onSelectCard,src:e.card.link,alt:e.card.name}),o.a.createElement("div",{className:"place__info"},o.a.createElement("h2",{className:"place__name"},e.card.name))))}function g(e){var t=o.a.useContext(m);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__img-container"},o.a.createElement("img",{className:"profile__image",alt:"",id:"profileImage",style:{backgroundImage:"url(".concat(t.avatar,")")}})),o.a.createElement("div",{className:"profile__container"},o.a.createElement("div",{className:"profile__button-wrapper"},o.a.createElement("h1",{className:"profile__title"},t.name)),o.a.createElement("p",{className:"profile__profession"},t.profession)),o.a.createElement("button",{className:"profile__add-btn",onClick:e.onAddPlace,type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})),o.a.createElement("section",{className:"places"},e.cards&&e.cards.map((function(t){return o.a.createElement(d,{key:t._id,onSelectCard:e.onSelectCard,onSelectCurrentCard:e.onSelectCurrentCard,card:t,onCardLike:e.onCardLike,onDelete:e.onDelete})}))))}function _(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("div",{className:"footer__info"},o.a.createElement("span",{className:"footer__copyright"},"\xa9 2020 \u0418\u043b\u044c\u0438\u043d \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440 \u041e\u043b\u0435\u0433\u043e\u0432\u0438\u0447")))}var f=a(19),h=a(20),E=function(){function e(t){var a=t.url,n=t.authorization;Object(f.a)(this,e),this._url=a,this._token=n,this._headers={authorization:"Bearer "+this._token,"Content-Type":"application/json"}}return Object(h.a)(e,[{key:"changeToken",value:function(e){this._token=e}},{key:"_getResponseData",value:function(e,t){return fetch(this._url+e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._getResponseData("/users/me",{headers:this._headers})}},{key:"getCards",value:function(){return this._getResponseData("/cards",{headers:this._headers})}},{key:"addNewCard",value:function(e){return this._getResponseData("/cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.place})})}},{key:"removeCard",value:function(e){return this._getResponseData("/cards/"+e,{method:"DELETE",headers:this._headers})}}]),e}();function b(e){return e.isOpen?o.a.createElement("section",{className:"popup popup_img popup_opened",onClick:function(t){return function(t){t.target.classList.contains("popup")&&e.onClose()}(t)},id:"popup_img"},o.a.createElement("figure",{className:"popup__img-container",id:"img_container"},o.a.createElement("button",{className:"popup__close-icon popup__close-icon_img",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",id:"imgPopupClose"}),o.a.createElement("img",{className:"popup__big-img",src:e.chosenCard.link,alt:"loading...",name:""}),o.a.createElement("figcaption",{className:"popup__caption"},e.chosenCard.name))):""}function C(e){return o.a.createElement("section",{className:"popup popup_"+e.name+" popup_opened",onClick:function(t){return e.onOverlayClose(t)}},o.a.createElement("form",{className:"popup__container popup__container_"+e.name,onSubmit:e.onSubmit,method:"PATCH",action:"#",noValidate:!0},o.a.createElement("h3",{className:"popup__title"},e.title),o.a.createElement("button",{className:"popup__close-icon",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),e.children))}function N(e){var t=o.a.useRef(),a=o.a.useRef();return e.isOpen?o.a.createElement(C,{name:"addplace",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",onOverlayClose:function(t){t.target.classList.contains("popup")&&e.onClose()},onClose:e.onClose},o.a.createElement("input",{className:"popup__text popup__text_name",ref:t,type:"text",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30"}),o.a.createElement("span",{className:"popup__input_error"}),o.a.createElement("input",{className:"popup__text popup__text_profession",ref:a,type:"url",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"}),o.a.createElement("span",{className:"popup__input_error"}),o.a.createElement("button",{className:"popup__save popup__save_add",onClick:function(n){return function(n){n.preventDefault(),e.onAddPlace({title:t.current.value,place:a.current.value})}(n)},type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")):""}function S(e){return e.isOpen?o.a.createElement("section",{className:"popup popup_suggestion popup_opened",onClick:function(t){return function(t){t.target.classList.contains("popup")&&e.onClose()}(t)}},o.a.createElement("form",{className:"popup__container popup__container_suggestion",method:"PATCH",action:"#",noValidate:!0},o.a.createElement("span",{className:"popup__input_error"}),o.a.createElement("h3",{className:"popup__title"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"),o.a.createElement("button",{className:"popup__close-icon",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),o.a.createElement("button",{className:"popup__save",onClick:function(t){return function(t){t.preventDefault(),e.onDelete(e.selectedCard),e.onClose()}(t)},type:"submit",id:"agreeBtn"},"\u0414\u0430"))):""}var O=a(21),v=function(e){var t=e.component,a=Object(O.a)(e,["component"]);return o.a.createElement(i.b,null,(function(){return a.isLogged?o.a.createElement(t,a):o.a.createElement(i.a,{to:"/signin"})}))},j="http://localhost:4000",y=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),i=Object(l.a)(s,2),u=i[0],p=i[1];return o.a.createElement("form",{className:"entry",onSubmit:function(t){t.preventDefault(),c&&u&&function(e,t){return fetch("".concat(j,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return localStorage.setItem("jwt",e.token),{jwt:e.token}})).catch((function(e){console.log(e)}))}(c,u).then((function(t){t?(e.setUserLocalData({email:c,password:u}),localStorage.setItem("userLocalData",JSON.stringify({email:c,password:u})),e.setMyApi(new E({url:j,authorization:t.jwt})),localStorage.setItem("apiData",JSON.stringify({url:j,authorization:t.jwt})),localStorage.setItem("jwt",t.jwt),e.tokenCheck()):e.setMessage("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")})).catch((function(e){console.log(e)}))},method:"POST",action:"#",noValidate:!0},o.a.createElement("h1",{className:"entry__title"},"\u0412\u0445\u043e\u0434"),o.a.createElement("input",{className:"entry__email",onChange:function(e){r(e.target.value)},required:!0,type:"email",placeholder:"Email",minLength:"2",maxLength:"40",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451 -]{1,}"}),o.a.createElement("input",{className:"entry__password",onChange:function(e){p(e.target.value)},required:!0,type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"40",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451 -]{1,}"}),o.a.createElement("button",{className:"entry__submit",type:"submit"},"\u0412\u043e\u0439\u0442\u0438"))};function k(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),u=Object(l.a)(i,2),p=u[0],m=u[1];return o.a.createElement("form",{className:"entry",onSubmit:function(t){t.preventDefault(),function(e,t){return fetch("".concat(j,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e})).catch((function(e){console.log(e)}))}(c,p).then((function(t){400!==t.status?(e.setMessage("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),e.setInfoTooltipOpen(!0)):(e.setMessage("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),e.setInfoTooltipOpen(!0))}))},method:"POST",noValidate:!0},o.a.createElement("h1",{className:"entry__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("input",{className:"entry__email",onChange:function(e){r(e.target.value)},type:"email",required:!0,placeholder:"Email",minLength:"2",maxLength:"40",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451 -]{1,}"}),o.a.createElement("input",{className:"entry__password",onChange:function(e){m(e.target.value)},type:"password",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",minLength:"2",maxLength:"40",pattern:"[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451 -]{1,}"}),o.a.createElement("button",{className:"entry__submit",type:"submit"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),o.a.createElement("span",{className:"entry__sign-in"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",o.a.createElement(s.b,{to:"/signin",className:"entry__link"},"\u0412\u043e\u0439\u0442\u0438")))}var w=a.p+"static/media/success.48613875.svg",I=a.p+"static/media/fail.8144d973.svg";function L(e){var t=I;return"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."!==e.message&&(t=w),e.infoTooltipOpen?o.a.createElement("section",{className:"popup popup_opened",onClick:e.closeinfoTooltip},o.a.createElement("div",{className:"popup__container  popup__infoTooltip"},o.a.createElement("button",{className:"popup__close-icon",onClick:e.closeinfoTooltip,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),o.a.createElement("img",{className:"popup__infoTooltip_image",alt:e.message,src:t}),o.a.createElement("p",{className:"popup__infoTooltip_title"},e.message))):""}var D=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),s=Object(l.a)(r,2),u=s[0],d=s[1],f=Object(n.useState)(null),h=Object(l.a)(f,2),C=h[0],O=h[1],w=Object(n.useState)(!1),I=Object(l.a)(w,2),D=I[0],T=I[1],A=Object(n.useState)({name:"",profession:"",_id:"",avatar:""}),P=Object(l.a)(A,2),x=P[0],J=P[1],z=Object(n.useState)([]),U=Object(l.a)(z,2),M=U[0],R=U[1],q=Object(n.useState)(!1),B=Object(l.a)(q,2),V=(B[0],B[1]),Z=Object(n.useState)({email:"",password:""}),H=Object(l.a)(Z,2),W=H[0],G=H[1],$=Object(n.useState)(!1),F=Object(l.a)($,2),K=F[0],Q=F[1],X=Object(n.useState)(""),Y=Object(l.a)(X,2),ee=Y[0],te=Y[1],ae=Object(n.useState)({email:"",password:""}),ne=Object(l.a)(ae,2),oe=(ne[0],ne[1]),ce=Object(n.useState)(""),re=Object(l.a)(ce,2),se=(re[0],re[1]),le=Object(n.useState)(!0),ie=Object(l.a)(le,2),ue=ie[0],pe=ie[1],me=Object(n.useState)(new E({url:j,authorization:localStorage.getItem("jwt")})),de=Object(l.a)(me,2),ge=de[0],_e=de[1],fe=Object(i.g)();function he(){ge.getCards().then((function(e){e&&R(e.cards)})).catch((function(e){console.log(e)}))}function Ee(e){ge.getCards().then((function(t){t&&(R(t.cards),e.owner[0]===x._id&&(ge.removeCard(e._id),R(M.filter((function(t){return t._id!==e._id})))))})).catch((function(e){return console.log(e)}))}function be(e){ge.addNewCard(e).then((function(e){ge.getCards().then((function(e){e&&R(e.cards)})).catch((function(e){return console.log(e)})),Ce()}))}function Ce(){c(!1),d(!1),T(!1)}return Object(n.useEffect)((function(){if(ue){var e=function(e){!function(e){e.preventDefault(),(27===e.keyCode||e.target.classList.contains("popup")||e.target.classList.contains("popup__save")||e.target.classList.contains("popup__close-icon"))&&Ce()}(e)};return null!=localStorage.getItem("isLogged")&&V("true"===localStorage.getItem("isLogged")),null!=localStorage.getItem("CurrentUser")&&J(JSON.parse(localStorage.getItem("CurrentUser"))),null!=localStorage.getItem("UserData")&&G(JSON.parse(localStorage.getItem("UserData"))),null!=localStorage.getItem("userLocalData")&&oe(JSON.parse(localStorage.getItem("userLocalData"))),null!=localStorage.getItem("jwt")&&se(localStorage.getItem("jwt")),null!=localStorage.getItem("apiData")&&_e(new E(JSON.parse(localStorage.getItem("apiData")))),"true"===localStorage.getItem("isLogged")&&""!==localStorage.getItem("jwt")&&he(),pe(!1),document.addEventListener("keydown",(function(t){27===t.keyCode&&e(t)})),function(){document.removeEventListener("keydown",(function(t){e(t)}))}}})),o.a.createElement(m.Provider,{value:x},o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"page"},o.a.createElement(p,{onSignOut:function(){localStorage.clear(),_e(new E({url:j,authorization:""})),J({name:"",profession:"",_id:"",avatar:""}),oe({email:"",password:""}),se(""),V(!1),fe.push("/signin")},userdata:W}),o.a.createElement(i.d,null,o.a.createElement(v,{exact:!0,path:"/",component:g,isLogged:localStorage.getItem("isLogged"),isAddPlacePopupOpen:a,isSuggestionOpen:D,onDelete:function(){Ce(),T(!0)},onAddPlace:function(){Ce(),c(!0)},onSelectCard:function(e){O(e),d(!0)},onSelectCurrentCard:function(e){O(e)},setCards:R,cards:M,isImagePopupOpen:u,getCards:he}),o.a.createElement(i.b,{exact:!0,path:"/signup"},o.a.createElement(k,{setInfoTooltipOpen:Q,setMessage:te})),o.a.createElement(v,{component:y,exact:!0,path:"/signin",isLogged:!localStorage.getItem("isLogged"),setMyApi:_e,setUserLocalData:oe,setInfoTooltipOpen:Q,tokenCheck:function(){localStorage.getItem("jwt")&&function(e){if(localStorage.getItem("jwt"))return fetch("".concat(j,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e.user})).catch((function(e){console.log(e)}));console.log("Token \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}(localStorage.getItem("jwt")).then((function(e){e?e.email&&(G({email:e.email,_id:e._id}),J({name:e.name,profession:e.about,_id:e._id,avatar:e.avatar}),localStorage.setItem("CurrentUser",JSON.stringify({name:e.name,profession:e.about,_id:e._id,avatar:e.avatar})),localStorage.setItem("isLogged",!0),localStorage.setItem("UserData",JSON.stringify({email:e.email,password:e._id})),V(!0),fe.push("/")):(te("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),Q(!0))}))},setMessage:te}),o.a.createElement(i.b,null,localStorage.getItem("isLogged")?o.a.createElement(i.a,{to:"/"}):o.a.createElement(i.a,{to:"/signin"}))),o.a.createElement(N,{isOpen:a,onClose:Ce,onAddPlace:be,onSubmit:be}),o.a.createElement(S,{isOpen:D,onClose:Ce,selectedCard:C,onDelete:Ee,onSubmit:Ee}),o.a.createElement(L,{infoTooltipOpen:K,message:ee,closeinfoTooltip:function(){Q(!1)}}),o.a.createElement(b,{chosenCard:C,onClose:Ce,isOpen:u}),o.a.createElement(_,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s.a,null,o.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.425897ee.chunk.js.map