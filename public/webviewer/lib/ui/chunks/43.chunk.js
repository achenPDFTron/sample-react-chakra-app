(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1637:function(e,t,n){var o=n(26),a=n(1638);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:function(e){const t=document.getElementsByTagName("apryse-webviewer");if(t.length>0){const n=[];for(let o=0;o<t.length;o++){const a=t[o];if(0===o)a.shadowRoot.appendChild(e),e.onload=function(){n.length>0&&n.forEach(t=>{t.innerHTML=e.innerHTML})};else{const t=e.cloneNode(!0);a.shadowRoot.appendChild(t),n.push(t)}}}else document.head.appendChild(e)},singleton:!1};o(a,r);e.exports=a.locals||{}},1638:function(e,t,n){(t=e.exports=n(27)(!1)).push([e.i,".open.SaveModal{visibility:visible}.closed.SaveModal{visibility:hidden}:host{display:inline-block;container-type:inline-size;width:100%;height:100%;overflow:hidden}@media(min-width:901px){.App:not(.is-web-component) .hide-in-desktop{display:none}}@container (min-width: 901px){.hide-in-desktop{display:none}}@media(min-width:641px)and (max-width:900px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .hide-in-tablet{display:none}}@container (min-width: 641px) and (max-width: 900px){.App.is-web-component:not(.is-in-desktop-only-mode) .hide-in-tablet{display:none}}@media(max-width:640px)and (min-width:431px){.App:not(.is-web-component) .hide-in-mobile{display:none}}@container (max-width: 640px) and (min-width: 431px){.App.is-web-component .hide-in-mobile{display:none}}@media(max-width:430px){.App:not(.is-web-component) .hide-in-small-mobile{display:none}}@container (max-width: 430px){.App.is-web-component .hide-in-small-mobile{display:none}}.always-hide{display:none}.SaveModal{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:var(--modal-negative-space)}.SaveModal .modal-container .wrapper .modal-content{padding:10px}.SaveModal .footer{display:flex;flex-direction:row;justify-content:flex-end;width:100%;margin-top:13px}.SaveModal .footer.modal-footer{padding:16px;margin:0;border-top:1px solid var(--divider)}.SaveModal .footer .modal-button{display:flex;justify-content:center;align-items:center;padding:6px 18px;margin:8px 0 0;width:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:4px;height:30px;cursor:pointer}.SaveModal .footer .modal-button.cancel{color:var(--secondary-button-text);border:1px solid var(--secondary-button-text)}.SaveModal .footer .modal-button.cancel:hover{background-color:var(--document-background-color);color:var(--secondary-button-hover);border:1px solid var(--secondary-button-hover)}.SaveModal .footer .modal-button.confirm{margin-left:4px;color:var(--primary-button-text);font-weight:600;background:var(--primary-button)}.SaveModal .footer .modal-button.confirm:hover{background:var(--primary-button-hover)}.SaveModal .footer .modal-button.confirm.disabled{background:var(--primary-button)!important;opacity:.5}.SaveModal .footer .modal-button.secondary-btn-custom{border-radius:4px;border:1px solid var(--primary-button);color:var(--primary-button);padding:2px 20px 4px;cursor:pointer;background-color:#fff}.SaveModal .footer .modal-button.secondary-btn-custom:hover{color:var(--secondary-button-hover)}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SaveModal .footer .modal-button{padding:23px 8px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SaveModal .footer .modal-button{padding:23px 8px}}.SaveModal .swipe-indicator{background:var(--divider);border-radius:2px;height:4px;width:38px;position:absolute;top:12px;margin-left:auto;margin-right:auto;left:0;right:0}@media(min-width:641px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SaveModal .swipe-indicator{display:none}}@container (min-width: 641px){.App.is-web-component:not(.is-in-desktop-only-mode) .SaveModal .swipe-indicator{display:none}}.SaveModal .container{border-radius:4px;box-shadow:0 0 3px 0 var(--document-box-shadow);background:var(--component-background);overflow-y:auto;max-height:100%}@media(max-height:500px){.App:not(.is-web-component) .SaveModal .container,.SaveModal .App:not(.is-web-component) .container{overflow:auto;max-height:100%}}@container (max-height: 500px){.App.is-web-component .SaveModal .container,.SaveModal .App.is-web-component .container{overflow:auto;max-height:100%}}@media(max-width:640px){.App:not(.is-in-desktop-only-mode):not(.is-web-component) .SaveModal .container,.SaveModal .App:not(.is-in-desktop-only-mode):not(.is-web-component) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}@container (max-width: 640px){.App.is-web-component:not(.is-in-desktop-only-mode) .SaveModal .container,.SaveModal .App.is-web-component:not(.is-in-desktop-only-mode) .container{width:100%;position:fixed;left:0;bottom:0;padding-top:4px;min-width:100px}}.SaveModal{flex-direction:column}.SaveModal .container{overflow:visible;display:flex;flex-direction:column;justify-content:space-evenly;height:auto;width:480px;padding:0;box-shadow:0 0 3px var(--document-box-shadow)}.SaveModal .container .header{border-bottom:1px solid var(--gray-5);padding:16px;height:64px;width:100%;display:flex;align-items:center;justify-content:space-between}.SaveModal .container .header .header-text{font-size:var(--font-size-large);font-weight:var(--font-weight-bold)}.SaveModal .container .header .Button{width:32px;height:32px}.SaveModal .container .modal-body{padding:16px;display:flex;flex-direction:column;font-size:var(--font-size-default);font-family:var(--font-family);grid-gap:12px;gap:12px}.SaveModal .container .modal-body .title{line-height:16px;font-weight:var(--font-weight-bold)}.SaveModal .container .modal-body .input-container{align-items:center;display:flex;grid-gap:16px;gap:16px;height:32px}.SaveModal .container .modal-body .input-container .label{min-width:60px}.SaveModal .container .modal-body .input-container input{padding:8px;height:32px;font-size:var(--font-size-default);flex:1 1 auto}.SaveModal .container .modal-body .input-container .Dropdown__wrapper{height:32px;flex:1 1 auto}.SaveModal .container .modal-body .input-container .Dropdown__wrapper .Dropdown{height:100%;width:100%!important}.SaveModal .container .modal-body .input-container .Dropdown__wrapper .Dropdown .picked-option .picked-option-text{width:auto;flex:none}.SaveModal .container .modal-body .input-container .Dropdown__wrapper .Dropdown .picked-option .arrow{flex:none}.SaveModal .container .modal-body .input-container .Dropdown__wrapper .Dropdown__items{width:100%}.SaveModal .container .modal-body .radio-container{grid-gap:8px;gap:8px;display:grid;grid-template-columns:repeat(2,1fr)}.SaveModal .container .modal-body .radio-container .ui__choice--checked .ui__choice__input__check{border-color:var(--blue-5)}.SaveModal .container .modal-body .radio-container .ui__choice__input__check{border-color:var(--gray-7)}.SaveModal .container .modal-body .radio-container .page-number-input-container.error .page-number-input{border:1px solid var(--error-border-color)}.SaveModal .container .modal-body .radio-container .page-number-input-container .page-number-input{width:calc(100% - 20px);grid-column-start:2}.SaveModal .container .modal-body .radio-container .page-number-input-container .error-text{color:var(--error-text-color)}.SaveModal .container .modal-body .checkbox-container{display:grid;grid-template-columns:repeat(2,1fr)}.SaveModal .container .footer{padding:16px;display:flex;justify-content:flex-end;border-top:1px solid var(--gray-5)}.SaveModal .container .footer button{border:none;border-radius:4px;background:var(--primary-button);width:82px;height:32px;color:var(--primary-button-text)}.SaveModal .container .footer button:disabled{opacity:.5}.SaveModal .container .footer button:hover{background:var(--primary-button-hover)}",""]),t.locals={LEFT_HEADER_WIDTH:"41px",RIGHT_HEADER_WIDTH:"41px"}},1779:function(e,t,n){"use strict";n.r(t);n(317),n(54),n(30),n(97),n(7),n(39),n(18),n(11),n(13),n(12),n(8),n(9),n(10),n(15),n(14),n(20),n(17),n(55),n(23),n(70),n(71),n(72),n(73),n(42),n(44),n(24),n(25),n(46),n(68);var o=n(0),a=n.n(o),r=n(6),i=n(3),c=n(2),l=n(366),d=n(5),p=n(21),u=n(1407),s=n(1399),f=n(1251),m=n(185),h=n(1),v=n(16),b=n.n(v),y=n(131),g=n(375),x=n(240),w=n(195),E=n(109),S=n(64),M=n(511),k=n.n(M);n(1637);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function d(e,t,n,a){var r=t&&t.prototype instanceof s?t:s,i=Object.create(r.prototype),c=new k(a||[]);return o(i,"_invoke",{value:w(e,n,c)}),i}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var u={};function s(){}function f(){}function m(){}var h={};l(h,r,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(j([])));b&&b!==t&&n.call(b,r)&&(h=b);var y=m.prototype=s.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var a;o(this,"_invoke",{value:function(o,r){function i(){return new t((function(a,i){!function o(a,r,i,c){var l=p(e[a],e,r);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==O(u)&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(u).then((function(e){d.value=e,i(d)}),(function(e){return o("throw",e,i,c)}))}c(l.arg)}(o,r,a,i)}))}return a=a?a.then(i,i):i()}})}function w(e,t,n){var o="suspendedStart";return function(a,r){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===a)throw r;return L()}for(n.method=a,n.arg=r;;){var i=n.delegate;if(i){var c=E(i,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var l=p(e,t,n);if("normal"===l.type){if(o=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o="completed",n.method="throw",n.arg=l.arg)}}}function E(e,t){var n=t.method,o=e.iterator[n];if(void 0===o)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),u;var a=p(o,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=m,o(y,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:f,configurable:!0}),f.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(x.prototype),l(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,n,o,a,r){void 0===r&&(r=Promise);var i=new x(d(t,n,o,a),r);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),l(y,c,"Generator"),l(y,r,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var o in t)n.push(o);return n.reverse(),function e(){for(;n.length;){var o=n.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return i.type="throw",i.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],i=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var c=n.call(r,"catchLoc"),l=n.call(r,"finallyLoc");if(c&&l){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=e,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),M(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var a=o.arg;M(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}function j(e,t,n,o,a,r,i){try{var c=e[r](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,a)}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,r,i,c=[],l=!0,d=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=r.call(n)).done)&&(c.push(o.value),c.length!==t);l=!0);}catch(e){d=!0,a=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(d)throw a}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var D="all",F="currentPage",N="currentView",I="specify",C={OFFICE:{label:"OFFICE (*.pptx,*.docx,*.xlsx)",extension:"office"},PDF:{label:"PDF (*.pdf)",extension:"pdf"},IMAGE:{label:"PNG (*.png)",extension:"png"},OFFICE_EDITOR:{label:"Word Document (*.docx)",extension:"office"}},P=[".ppt",".xls"],T=function(){var e=Object(r.f)(),t=Object(r.d)(),n=Object(l.a)().t,v=L(Object(r.e)((function(e){return[i.a.isElementOpen(e,d.a.SAVE_MODAL),i.a.getActiveDocumentViewerKey(e)]})),2),M=v[0],O=v[1],A=[C.PDF,C.IMAGE],T=L(Object(o.useState)(A),2),G=T[0],R=T[1],z=L(Object(o.useState)(""),2),H=z[0],V=z[1],B=L(Object(o.useState)(G[0]),2),U=B[0],W=B[1],J=L(Object(o.useState)(D),2),K=J[0],Y=J[1],$=L(Object(o.useState)(),2),q=$[0],Q=$[1],X=L(Object(o.useState)(!0),2),Z=X[0],ee=X[1],te=L(Object(o.useState)(!1),2),ne=te[0],oe=te[1],ae=L(Object(o.useState)(1),2),re=ae[0],ie=ae[1],ce=L(Object(o.useState)(""),2),le=ce[0],de=ce[1];Object(o.useEffect)((function(){var e=function(e){"Enter"===e.key&&se()};return!ve&&window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[O,ve,Z,q,ne,K,H,U]),Object(o.useEffect)((function(){var e=function(){var e,t=(e=_().mark((function e(){var t,n,o,a,r,i;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=h.a.getDocument(O))){e.next=18;break}if(W(C.PDF),R(A),n=t.getFilename(),o=n.substring(0,n.lastIndexOf("."))||n,V(o),(a=t.getType())!==S.a.OFFICE){e.next=16;break}return r=n.split("."),i=".".concat(r[r.length-1]),P.includes(i)||R([].concat(A,[C.OFFICE])),e.next=14,t.getDocumentCompletePromise();case 14:e.next=17;break;case 16:a===S.a.OFFICE_EDITOR&&(R([C.OFFICE_EDITOR,C.PDF]),W(C.OFFICE_EDITOR));case 17:ie(h.a.getTotalPages(O));case 18:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,a){var r=e.apply(t,n);function i(e){j(r,o,a,i,c,"next",e)}function c(e){j(r,o,a,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),n=function(){V(""),ie(0),R(A),W(A[0]),t(c.a.closeElement(d.a.SAVE_MODAL))};return e(),h.a.addEventListener("documentUnloaded",n,void 0,O),h.a.addEventListener("documentLoaded",e,void 0,O),function(){h.a.removeEventListener("documentUnloaded",n,O),h.a.removeEventListener("documentLoaded",e,O)}}),[O]),Object(o.useEffect)((function(){var e=h.a.getDocument(O);if(Object(E.a)()&&e){W(C.OFFICE_EDITOR);var t=e.getFilename(),n=t.substring(0,t.lastIndexOf("."))||t;V(n)}}),[M]);var pe=function(){return t(c.a.closeElement(d.a.SAVE_MODAL))},ue=function(){return de("")},se=function(){var n;H&&(n=K===I?null!=q&&q.length?q:[h.a.getCurrentPage(O)]:K===F||K===N?[h.a.getCurrentPage(O)]:k()(1,h.a.getTotalPages(O)+1,1),Object(w.a)(t,{includeAnnotations:Z,includeComments:ne,filename:H||"untitled",downloadType:U.extension,pages:n,store:e},O),pe())},fe=L(Object(o.useState)(!1),2),me=fe[0],he=fe[1],ve=(le||!me)&&K===I||!H,be="office"===U.extension||Object(E.a)();return a.a.createElement(m.a,{onSwipedUp:pe,onSwipedDown:pe,preventDefaultTouchmoveEvent:!0},a.a.createElement(u.a,{locked:M},a.a.createElement("div",{className:b()("SaveModal",{open:M,closed:!M}),"data-element":d.a.SAVE_MODAL},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"header-text"},n("saveModal.saveAs")),a.a.createElement(p.a,{className:"close-button",onClick:pe,img:"ic_close_black_24px",title:"action.close"})),a.a.createElement("div",{className:"modal-body"},a.a.createElement("div",{className:"title"},n("saveModal.general")),a.a.createElement("div",{className:"input-container"},a.a.createElement("div",{className:"label"},n("saveModal.fileName")),a.a.createElement(s.a,{type:"text","data-testid":"fileNameInput",onChange:function(e){var t;V(null==e||null===(t=e.target)||void 0===t?void 0:t.value)},value:H,fillWidth:"false",messageText:""===H?n("saveModal.fileNameCannotBeEmpty"):"",message:""===H?"warning":"default"})),a.a.createElement("div",{className:"input-container"},a.a.createElement("div",{className:"label"},n("saveModal.fileType")),a.a.createElement(y.a,{items:G.map((function(e){return e.label})),onClickItem:function(e){W(G.find((function(t){return t.label===e}))),e===C.OFFICE.label&&Y(D)},currentSelectionKey:U.label})),!be&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"title"},n("saveModal.pageRange")),a.a.createElement("form",{className:"radio-container",onChange:function(e){e.target.classList.contains("page-number-input")||(Y(e.target.value),le&&(he(!1),ue()))},onSubmit:function(e){return e.preventDefault()}},a.a.createElement(f.a,{checked:K===D,radio:!0,name:"page-range-option",label:n("saveModal.all"),value:D}),a.a.createElement(f.a,{checked:K===F,radio:!0,name:"page-range-option",label:n("saveModal.currentPage"),value:F}),a.a.createElement(f.a,{checked:K===I,radio:!0,name:"page-range-option",label:n("option.print.specifyPages"),value:I}),K===I&&a.a.createElement("div",{className:b()("page-number-input-container",{error:!!le})},a.a.createElement(g.a,{selectedPageNumbers:q,pageCount:re,onBlurHandler:Q,onSelectedPageNumbersChange:function(){me||he(!0),ue()},placeHolder:x.a,onError:function(){return de(n("saveModal.pageError")+re)}}),le&&a.a.createElement("div",{className:"error-text"},le))),a.a.createElement("div",{className:"title"},n("saveModal.properties")),a.a.createElement("div",{className:"checkbox-container"},a.a.createElement(f.a,{checked:Z,name:"include-annotation-option",label:n("saveModal.includeAnnotation"),onChange:function(){return ee(!Z)}}),a.a.createElement(f.a,{checked:ne,name:"include-comment-option",label:n("saveModal.includeComments"),onChange:function(){return oe(!ne)}})))),a.a.createElement("div",{className:"footer"},a.a.createElement(p.a,{disabled:ve,onClick:se,label:n("saveModal.save")}))))))};t.default=T}}]);
//# sourceMappingURL=43.chunk.js.map