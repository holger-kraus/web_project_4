!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n,r,o,i,a,u,c,s,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardId=t,this._profileId=n,this._imageTitle=r,this._imageLink=o,this._cardSelector=a,this._handleCardClick=u,this._handleRemoveCard=c,this._likedByList=i,this._handleLike=s,this._handleDislike=l,this._element=this._getTemplate()}var t,n,o;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setElementEventListener",value:function(){var e=this;this._element.addEventListener("click",(function(t){e._handleCardClick(e._imageTitle,e._imageLink),t.stopPropagation()}))}},{key:"_setRemoveButtonEventListener",value:function(){var e=this;this._element.querySelector(".element__remove").addEventListener("click",(function(t){t.preventDefault(),e._handleRemoveCard(e._cardId),t.stopPropagation()}))}},{key:"_setLikeButtonEventListener",value:function(){var e=this,t=this;this._element.querySelector(".element__like-button").addEventListener("click",(function(n){n.preventDefault(),n.target.classList.contains("element__like_liked")?e._handleDislike(e._cardId,t):e._handleLike(e._cardId,t),n.stopPropagation()}))}},{key:"addLike",value:function(e){this._likedByList=e;var t=this._element.querySelector(".element__like-count"),n=this._element.querySelector(".element__like-button");t.textContent=this._likedByList.length,n.classList.add("element__like_liked")}},{key:"removeLike",value:function(e){this._likedByList=e;var t=this._element.querySelector(".element__like-count"),n=this._element.querySelector(".element__like-button");t.textContent=this._likedByList.length,n.classList.remove("element__like_liked")}},{key:"generateCard",value:function(){this._setElementEventListener(),this._setRemoveButtonEventListener(),this._setLikeButtonEventListener();var e=this._element.querySelector(".element__title"),t=this._element.querySelector(".element__like-count"),n=this._element.querySelector(".element__like-button");return this._element.style.backgroundImage="url('".concat(this._imageLink,"')"),e.textContent=this._imageTitle,t.textContent=this._likedByList.length,this._likedByList.includes(this._profileId)&&n.classList.add("element__like_liked"),this._element}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=n,this._form=t}var t,n,r;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._settings.inactiveButtonClass),t.setAttribute("disabled",!0)):(t.classList.remove(this._settings.inactiveButtonClass),t.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),t=this._form.querySelector(this._settings.submitButtonSelector),n=this;e.forEach((function(r){r.addEventListener("input",(function(){n._checkInputValidity(r),n._toggleButtonState(e,t)}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&i(t.prototype,n),r&&i(t,r),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t)}var t,n,r;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&(this.close(),e.stopPropagation())}},{key:"open",value:function(){this._popup.classList.add("overlay_opened")}},{key:"close",value:function(){this._popup.classList.remove("overlay_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){e.close(),t.stopPropagation()})),this._popup.querySelector(".overlay__close-button").addEventListener("click",(function(t){e.close(),t.stopPropagation()})),this._popup.addEventListener("keydown",(function(t){e._handleEscClose(t)}))}}])&&u(t.prototype,n),r&&u(t,r),e}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(i,e);var t,n,r,o=h(i);function i(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,e)}return t=i,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".image"),r=this._popup.querySelector(".image__title");n.src=t,n.alt=e,r.textContent=e,f(y(i.prototype),"open",this).call(this)}}])&&l(t.prototype,n),r&&l(t,r),i}(c);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=L(e);if(t){var o=L(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,r,o=k(i);function i(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e))._handleFormSubmission=n,r._form=r._popup.querySelector(".form"),r._submitButton=r._popup.querySelector(".form__save"),r._submitButtonText=r._submitButton.textContent,r._submitButtonLoadingText=t,r}return t=i,(n=[{key:"_getInputValues",value:function(){return Array.from(this._form.elements).map((function(e){return e.value}))}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?this._submitButtonLoadingText:this._submitButtonText}},{key:"setEventListeners",value:function(){var e=this;b(L(i.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.renderLoading(!0),e._handleFormSubmission(e._getInputValues(),(function(){e.renderLoading(!1),e.close()}))})),this._form.addEventListener("click",(function(e){return e.stopPropagation()}))}},{key:"open",value:function(e){for(var t=Array.from(this._form.elements),n=0;n<t.length;n++)t[n].value=e[n],t[n].dispatchEvent(new Event("input"));b(L(i.prototype),"open",this).call(this)}},{key:"close",value:function(){b(L(i.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,n),r&&m(t,r),i}(c);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._aboutMe=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n,r;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,aboutMe:this._aboutMe.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._aboutMe.textContent=t}},{key:"setUserId",value:function(e){this.userId=e}},{key:"setAvatar",value:function(e){this._avatar.src=e}}])&&w(t.prototype,n),r&&w(t,r),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n),this._elementMap=new Map}var t,n,r;return t=e,(n=[{key:"setItem",value:function(e,t){this._elementMap.set(e,t),this._container.prepend(t)}},{key:"removeItem",value:function(e){this._elementMap.get(e).remove(),this._elementMap.delete(e)}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&P(t.prototype,n),r&&P(t,r),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n,r;return t=e,(n=[{key:"getProfile",value:function(){var e=this.baseUrl.concat("/users/me");return this._getResource(e)}},{key:"updateProfile",value:function(e,t){var n=this.baseUrl.concat("/users/me"),r=JSON.stringify({name:e,about:t});return this._sendRequestWithBody(n,r,"PATCH")}},{key:"updateProfilePicture",value:function(e){var t=this.baseUrl.concat("/users/me/avatar"),n=JSON.stringify({avatar:e});return this._sendRequestWithBody(t,n,"PATCH")}},{key:"getInitialCards",value:function(){var e=this.baseUrl.concat("/cards");return this._getResource(e)}},{key:"addCard",value:function(e,t){var n=this.baseUrl.concat("/cards"),r=JSON.stringify({name:e,link:t});return this._sendRequestWithBody(n,r,"POST")}},{key:"deleteCard",value:function(e){var t=this.baseUrl.concat("/cards/").concat(e);return this._sendRequestWithoutBody(t,"DELETE")}},{key:"addLike",value:function(e){var t=this.baseUrl.concat("/cards/likes/").concat(e);return this._sendRequestWithoutBody(t,"PUT")}},{key:"deleteLike",value:function(e){var t=this.baseUrl.concat("/cards/likes/").concat(e);return this._sendRequestWithoutBody(t,"DELETE")}},{key:"_getResource",value:function(e){return fetch(e,{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"_sendRequestWithoutBody",value:function(e,t){return fetch(e,{method:t,headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"_sendRequestWithBody",value:function(e,t,n){return fetch(e,{method:n,headers:this.headers,body:t}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}}])&&q(t.prototype,n),r&&q(t,r),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-1",headers:{Authorization:"cf0daf24-499f-4e4d-a691-bc6825f65b5e","Content-Type":"application/json"}}),R={formSelector:".form",inputSelector:".form__field",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_inactive",inputErrorClass:"form__field_error",errorClass:"form__field-error_active"},T=new v(".overlay_image");T.setEventListeners();var x=new O({items:[],renderer:function(){}},".elements__list"),U=document.querySelector(".profile"),A=U.querySelector(".profile__edit-button"),M=U.querySelector(".profile__add-button"),D=U.querySelector(".profile__avatar"),V=new C(".profile__name",".profile__about-me",".profile__avatar-image"),W=new E(".overlay_profile","Saving...",(function(e,t){var n=j(e,2),r=n[0],o=n[1];B.updateProfile(r,o).then((function(e){V.setUserInfo(e.name,e.about)})).catch((function(e){console.log(e)})).finally(t)}));W.setEventListeners(),new a(document.querySelector(".overlay__container_profile").querySelector(".form"),R).enableValidation();var N=new E(".overlay_avatarpic ","Saving...",(function(e,t){var n=j(e,1)[0];B.updateProfilePicture(n).then((function(e){V.setAvatar(e.avatar)})).catch((function(e){console.log(e)})).finally(t)}));N.setEventListeners(),new a(document.querySelector(".overlay__container_avatarpic").querySelector(".form"),R).enableValidation();var J=new E(".overlay_confirmation","Deleting...",(function(e,t){var n=j(e,1)[0];B.deleteCard(n).then((function(){x.removeItem(n)})).catch((function(e){console.log(e)})).finally((function(){t()}))}));J.setEventListeners();var F=function(e,t){B.addLike(e).then((function(e){var n=e.likes.map((function(e){return e._id}));t.addLike(n)})).catch((function(e){console.log(e)}))},H=function(e,t){B.deleteLike(e).then((function(e){var n=e.likes.map((function(e){return e._id}));t.removeLike(n)})).catch((function(e){console.log(e)}))},z=function(e,t,n,r){var i=new o(e,V.userId,t,n,r,"#element__template",(function(e,t){T.open(e,t)}),(function(e){J.open([e])}),F,H).generateCard();x.setItem(e,i)},$=new E(".overlay_place","Saving...",(function(e,t){var n=j(e,2),r=n[0],o=n[1];B.addCard(r,o).then((function(e){var t=e.likes.map((function(e){return e._id}));z(e._id,e.name,e.link,t)})).catch((function(e){console.log(e)})).finally(t)}));$.setEventListeners(),new a(document.querySelector(".overlay__container_place").querySelector(".form"),R).enableValidation(),A.addEventListener("click",(function(){var e=V.getUserInfo(),t=e.name,n=e.aboutMe;W.open([t,n])})),M.addEventListener("click",(function(){$.open([null,null])})),D.addEventListener("click",(function(){N.open(["",""])})),Promise.all([B.getProfile(),B.getInitialCards()]).then((function(e){var t=j(e,2),n=t[0],r=t[1];V.setUserInfo(n.name,n.about),V.setAvatar(n.avatar),V.setUserId(n._id),r.forEach((function(e){var t=e.likes.map((function(e){return e._id}));z(e._id,e.name,e.link,t)}))})).catch((function(e){console.log(e)}))}]);
//# sourceMappingURL=main.js.map