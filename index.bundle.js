/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/_index.js","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/_global.js":
/*!***************************!*\
  !*** ./src/js/_global.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* eslint-disable */\nwindow._$ = document.querySelector.bind(document);\nwindow._$$ = document.querySelectorAll.bind(document);\nwindow.isDesktop = window.matchMedia(\"(min-width: 75em)\").matches; // 1200px\n\n//# sourceURL=webpack:///./src/js/_global.js?");

/***/ }),

/***/ "./src/js/_index.js":
/*!**************************!*\
  !*** ./src/js/_index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./_global */ \"./src/js/_global.js\");\n\n__webpack_require__(/*! ./pageScroll */ \"./src/js/pageScroll.js\");\n\n__webpack_require__(/*! ./pageNav */ \"./src/js/pageNav.js\");\n\n__webpack_require__(/*! ./owlCarousel */ \"./src/js/owlCarousel.js\");\n\n__webpack_require__(/*! ./heroModal */ \"./src/js/heroModal.js\");\n\n__webpack_require__(/*! ./how */ \"./src/js/how.js\");\n\n__webpack_require__(/*! ./featuresTabs */ \"./src/js/featuresTabs.js\");\n\n__webpack_require__(/*! ./sample */ \"./src/js/sample.js\");\n\n__webpack_require__(/*! ./modalSample */ \"./src/js/modalSample.js\");\n\n__webpack_require__(/*! ./modalTemplates */ \"./src/js/modalTemplates.js\");\n\n__webpack_require__(/*! ./form */ \"./src/js/form.js\");\n\n__webpack_require__(/*! ./animationBgIcons */ \"./src/js/animationBgIcons.js\");\n\n//# sourceURL=webpack:///./src/js/_index.js?");

/***/ }),

/***/ "./src/js/animationBgIcons.js":
/*!************************************!*\
  !*** ./src/js/animationBgIcons.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// import { TweenLite, Power1 } from \"gsap\";\n// (() => {\n//   document.addEventListener(\"DOMContentLoaded\", () => {\n//     if (!isDesktop) return null;\n//     const bgIcons = _$$(\".bg-icon\");\n//     document.addEventListener(\"mousemove\", e => {\n//       bgIcons.forEach(icon => {\n//         const xPos = e.clientX / window.innerWidth - 0.5;\n//         const yPos = e.clientY / window.innerHeight - 0.5;\n//         TweenLite.to(icon, 1, {\n//           x: xPos * 10,\n//           y: yPos * 10,\n//           ease: Power1.easeOut,\n//         });\n//       });\n//     });\n//   });\n// })();\n// // export const mouseEventAnimation = block => {\n// //   const bgIcons = block.quertSelectorAll(\".bg-icon\");\n// // };\n\n\n//# sourceURL=webpack:///./src/js/animationBgIcons.js?");

/***/ }),

/***/ "./src/js/featuresTabs.js":
/*!********************************!*\
  !*** ./src/js/featuresTabs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var tabs = document.querySelectorAll(\".features-tabs_btn\");\n    var items = document.querySelectorAll(\".features-list_item\");\n    tabs.forEach(function (tab) {\n      tab.addEventListener(\"click\", function () {\n        tab.classList.add(\"is-active\");\n        items.forEach(function (item) {\n          if (item.dataset.tab === tab.value) {\n            item.classList.add(\"is-active\");\n          } else {\n            item.classList.remove(\"is-active\");\n          }\n        });\n        tabs.forEach(function (elm) {\n          if (elm !== tab && elm.classList.contains(\"is-active\")) {\n            elm.classList.remove(\"is-active\");\n          }\n        });\n      });\n    });\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/featuresTabs.js?");

/***/ }),

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _imask = __webpack_require__(/*! imask */ \"./node_modules/imask/dist/imask.esm.js\");\n\nvar _imask2 = _interopRequireDefault(_imask);\n\nvar _scrollLock = __webpack_require__(/*! scroll-lock */ \"./node_modules/scroll-lock/dist/scroll-lock.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var formFeedback = _$(\"#mainFeedbackForm\");\n\n    var modalFeedback = _$(\"#modalFeedback\");\n\n    var btnHeroOpenModal = _$(\"#js-heroBtn\");\n\n    var btnOpenModal = _$(\"#showModalForm\");\n\n    var btnCloseModal = _$(\"#modalFeedbackClose\");\n\n    var btnModalFeedbackSubmit = _$(\"#modalFormSubmit\");\n\n    var modalFeedbackForm = modalFeedback.querySelector(\"#modalForm\");\n\n    var modalOk = _$(\"#modalOk\");\n\n    var sampleBlock = _$(\".sample_blur-wrap\");\n\n    var showSuccessMessage = function showSuccessMessage() {\n      (0, _scrollLock.disablePageScroll)();\n      modalOk.style.transform = \"translateX(0)\";\n      modalOk.style.visibility = \"visible\";\n      modalOk.style.opacity = 1;\n      modalOk.style.height = \"100vh\"; // setTimeout(() => {\n      //   mainPage.style.filter = \"blur(5px)\";\n      // }, 200);\n      // document.body.style.cssText = `height: 100%; overflow: hidden; padding-right: ${scrollbarWidth}px`;\n\n      setTimeout(function () {\n        (0, _scrollLock.enablePageScroll)();\n        modalOk.style.transform = null;\n        modalOk.style.visibility = null;\n        modalOk.style.opacity = null;\n        modalOk.style.height = null; // modalFeedback.style.height = null;\n\n        modalFeedback.classList.remove(\"is-active\"); // mainPage.style.filter = null;\n\n        modalFeedback.style.right = \"-14px\";\n        document.body.style.cssText = null;\n      }, 5000);\n    }; // Открытие/закрытие модальной формы\n\n\n    [btnHeroOpenModal, btnOpenModal].forEach(function (btn) {\n      btn.addEventListener(\"click\", function () {\n        if (isDesktop) {\n          sampleBlock.classList.add(\"is-blur\");\n        }\n\n        (0, _scrollLock.disablePageScroll)();\n        modalFeedback.classList.add(\"is-active\");\n      });\n    });\n    btnCloseModal.addEventListener(\"click\", function () {\n      if (isDesktop) {\n        sampleBlock.classList.remove(\"is-blur\");\n      }\n\n      (0, _scrollLock.enablePageScroll)();\n      modalFeedback.classList.remove(\"is-active\");\n    }); // inputMask\n\n    (0, _imask2.default)(formFeedback.querySelector(\".form-feedback_phone\"), {\n      mask: \"+{7} (000) 000-00-00\"\n    });\n    (0, _imask2.default)(modalFeedback.querySelector(\".form-feedback_phone\"), {\n      mask: \"+{7} (000) 000-00-00\"\n    }); // submit forms\n\n    formFeedback.addEventListener(\"submit\", function (e) {\n      e.preventDefault();\n      var name = e.currentTarget.querySelector(\"input[name=name]\");\n      var phone = e.currentTarget.querySelector(\"input[name=phone]\");\n      var message = e.currentTarget.querySelector(\"textarea[name=message]\");\n      var agreements = e.currentTarget.querySelector(\"#feedback-agreements\");\n\n      if (name.value && phone.value.length === 18 && message.value && agreements.checked) {\n        var formData = new FormData(e.currentTarget);\n        fetch(\"/cart/registration\", {\n          method: \"POST\",\n          mode: \"no-cors\",\n          body: formData\n        }).then(function (res) {\n          if (res.ok) {\n            showSuccessMessage();\n          }\n        }).catch(function (err) {\n          console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430! \" + err);\n        });\n      }\n    });\n    btnModalFeedbackSubmit.addEventListener(\"click\", function () {\n      // e.preventDefault();\n      modalFeedback.addEventListener(\"submit\", function (e) {\n        e.preventDefault();\n      });\n      var name = modalFeedbackForm.querySelector(\"input[name=name]\");\n      var phone = modalFeedbackForm.querySelector(\"input[name=phone]\");\n      var message = modalFeedbackForm.querySelector(\"textarea[name=message]\");\n      var agreements = modalFeedbackForm.querySelector(\"#modal-feedback-agreements\");\n\n      if (phone.value.length < 18) {\n        phone.classList.add(\"error\");\n      } else {\n        phone.classList.remove(\"error\");\n      } // grecaptcha.getResponse() \n\n\n      if (name.value && phone.value.length === 18 && message.value && agreements.checked) {\n        var formData = new FormData(modalFeedbackForm);\n        fetch(\"/cart/registration\", {\n          method: \"POST\",\n          mode: \"no-cors\",\n          // headers: myHeaders,\n          body: formData\n        }).then(function (res) {\n          if (res.ok) {\n            showSuccessMessage();\n          }\n        }).catch(function (err) {\n          console.log(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430! \" + err);\n        });\n      }\n    });\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/form.js?");

/***/ }),

/***/ "./src/js/heroModal.js":
/*!*****************************!*\
  !*** ./src/js/heroModal.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function($) {\n\nvar _gsap = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _scrollLock = __webpack_require__(/*! scroll-lock */ \"./node_modules/scroll-lock/dist/scroll-lock.js\");\n\n__webpack_require__(/*! ./jquery.confetti */ \"./src/js/jquery.confetti.js\");\n\n// import { enableBodyScroll, disableBodyScroll } from \"body-scroll-lock\";\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var nav = _$(\".page-header\");\n\n    var mainHero = _$(\".hero\");\n\n    var hero = _$(\".hero_wrap\");\n\n    var modal = _$(\"#modalHero\");\n\n    var btnClose = modal.querySelector(\"#modalHeroClose\");\n\n    var btnOpen = _$(\"#showHeroModal\");\n\n    var btnsCollapse = _$$(\".modal-hero-item_btn-collapse\"); // Открытие модалки\n\n\n    btnOpen.addEventListener(\"click\", function () {\n      var tl = new _gsap.TimelineLite();\n      var top = isDesktop ? -90 : -42;\n      tl.to(hero, 0.6, {\n        autoAlpha: 0\n      }, \"first\").to(nav, 0.6, {\n        autoAlpha: 0\n      }, \"first\").to(mainHero, 0.6, {\n        y: top\n      }, \"last\").to(modal, 0.6, {\n        x: \"0%\"\n      }, \"last\");\n      (0, _scrollLock.disablePageScroll)();\n\n      if (isDesktop) {\n        $.confetti.restart();\n      }\n    }); // Закрытие модалки\n\n    btnClose.addEventListener(\"click\", function () {\n      var tl = new _gsap.TimelineLite();\n      tl.to(modal, 0.6, {\n        x: \"100%\"\n      }, \"first\").to(mainHero, 0.6, {\n        y: 0\n      }, \"first\").to(hero, 0.6, {\n        autoAlpha: 1\n      }, \"last\").to(nav, 0.6, {\n        autoAlpha: 1\n      }, \"last\");\n      (0, _scrollLock.enablePageScroll)();\n\n      if (isDesktop) {\n        $.confetti.stop();\n      }\n    }); // Раскрытие спойлеров\n\n    btnsCollapse.forEach(function (btn) {\n      btn.addEventListener(\"click\", function (e) {\n        var parent = e.currentTarget.parentElement;\n        var list = parent.querySelector(\".modal-hero-item_list\");\n\n        if (btn.classList.contains(\"is-active\")) {\n          _gsap.TweenLite.to(list, 0.4, {\n            maxHeight: 0\n          });\n        } else {\n          _gsap.TweenLite.to(list, 0.4, {\n            maxHeight: list.scrollHeight\n          });\n        }\n\n        btn.classList.toggle(\"is-active\");\n      });\n    });\n  });\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/js/heroModal.js?");

/***/ }),

/***/ "./src/js/how.js":
/*!***********************!*\
  !*** ./src/js/how.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bodyScrollLock = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js\");\n\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var isDesktop = window.matchMedia(\"(min-width: 1200px)\").matches;\n\n    var modalDesktop = function modalDesktop(item, describe) {\n      var modal = document.querySelector(\"#modalHow\");\n      var close = modal.querySelector(\".icon-close\");\n      var text = modal.querySelector(\".modal-how-describe_text\");\n      var howBlock = document.querySelector(\".how_blur-wrap\");\n      text.innerHTML = describe.innerHTML;\n      modal.classList.add(\"is-active\");\n      howBlock.classList.add(\"is-blur\");\n      (0, _bodyScrollLock.disableBodyScroll)(modal);\n      close.addEventListener(\"click\", function () {\n        modal.classList.remove(\"is-active\");\n        item.classList.remove(\"is-active\");\n        howBlock.classList.remove(\"is-blur\");\n        (0, _bodyScrollLock.enableBodyScroll)(modal);\n      });\n    };\n\n    var showDescribe = function showDescribe() {\n      var desktop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var items = document.querySelectorAll(\".how-step\");\n      items.forEach(function (item) {\n        var describe = item.querySelector(\".how-step_describe\");\n        item.addEventListener(\"click\", function () {\n          if (desktop) {\n            modalDesktop(item, describe);\n            item.classList.add(\"is-active\");\n          } else {\n            var PADDING_TOP = 25;\n            items.forEach(function (elm) {\n              if (elm !== item) {\n                elm.classList.remove(\"is-active\");\n                elm.querySelector(\".how-step_describe\").style.maxHeight = null;\n              }\n            });\n            item.classList.toggle(\"is-active\");\n\n            if (describe.style.maxHeight) {\n              describe.style.maxHeight = null;\n            } else {\n              describe.style.maxHeight = describe.scrollHeight + PADDING_TOP + \"px\";\n            }\n          }\n        });\n      });\n    };\n\n    showDescribe(isDesktop);\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/how.js?");

/***/ }),

/***/ "./src/js/jquery.confetti.js":
/*!***********************************!*\
  !*** ./src/js/jquery.confetti.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(jQuery) {\n\n(function ($) {\n  $.confetti = new function () {\n    // globals\n    var canvas;\n    var ctx;\n    var W;\n    var H;\n    var mp = 150; //max particles\n\n    var particles = [];\n    var angle = 0;\n    var tiltAngle = 0;\n    var confettiActive = true;\n    var animationComplete = true;\n    var deactivationTimerHandler;\n    var reactivationTimerHandler;\n    var animationHandler; // objects\n\n    var particleColors = {\n      colorOptions: [\"DodgerBlue\", \"OliveDrab\", \"Gold\", \"pink\", \"SlateBlue\", \"lightblue\", \"Violet\", \"PaleGreen\", \"SteelBlue\", \"SandyBrown\", \"Chocolate\", \"Crimson\"],\n      colorIndex: 0,\n      colorIncrementer: 0,\n      colorThreshold: 10,\n      getColor: function getColor() {\n        if (this.colorIncrementer >= 10) {\n          this.colorIncrementer = 0;\n          this.colorIndex++;\n\n          if (this.colorIndex >= this.colorOptions.length) {\n            this.colorIndex = 0;\n          }\n        }\n\n        this.colorIncrementer++;\n        return this.colorOptions[this.colorIndex];\n      }\n    };\n\n    function confettiParticle(color) {\n      this.x = Math.random() * W; // x-coordinate\n\n      this.y = Math.random() * H - H; //y-coordinate\n\n      this.r = RandomFromTo(10, 30); //radius;\n\n      this.d = Math.random() * mp + 10; //density;\n\n      this.color = color;\n      this.tilt = Math.floor(Math.random() * 10) - 10;\n      this.tiltAngleIncremental = Math.random() * 0.07 + .05;\n      this.tiltAngle = 0;\n\n      this.draw = function () {\n        ctx.beginPath();\n        ctx.lineWidth = this.r / 2;\n        ctx.strokeStyle = this.color;\n        ctx.moveTo(this.x + this.tilt + this.r / 4, this.y);\n        ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4);\n        return ctx.stroke();\n      };\n    }\n\n    function init() {\n      SetGlobals();\n      InitializeButton(); // InitializeConfetti();\n\n      $(window).resize(function () {\n        W = window.innerWidth;\n        H = window.innerHeight;\n        canvas.width = W;\n        canvas.height = H;\n      });\n    } // $(document).ready(init());\n\n\n    function InitializeButton() {\n      $('#startConfetti').click(InitializeConfetti);\n      $('#stopConfetti').click(DeactivateConfetti);\n      $('#restartConfetti').click(RestartConfetti);\n    }\n\n    function SetGlobals() {\n      $('body').append('<canvas id=\"confettiCanvas\" style=\"position:absolute;top:0;left:0;display:none;z-index:99;\"></canvas>');\n      canvas = document.getElementById(\"confettiCanvas\");\n      ctx = canvas.getContext(\"2d\");\n      W = window.innerWidth;\n      H = window.innerHeight;\n      canvas.width = W;\n      canvas.height = H;\n    }\n\n    function InitializeConfetti() {\n      canvas.style.display = 'block';\n      particles = [];\n      animationComplete = false;\n\n      for (var i = 0; i < mp; i++) {\n        var particleColor = particleColors.getColor();\n        particles.push(new confettiParticle(particleColor));\n      }\n\n      StartConfetti();\n    }\n\n    function Draw() {\n      ctx.clearRect(0, 0, W, H);\n      var results = [];\n\n      for (var i = 0; i < mp; i++) {\n        (function (j) {\n          results.push(particles[j].draw());\n        })(i);\n      }\n\n      Update();\n      return results;\n    }\n\n    function RandomFromTo(from, to) {\n      return Math.floor(Math.random() * (to - from + 1) + from);\n    }\n\n    function Update() {\n      var remainingFlakes = 0;\n      var particle;\n      angle += 0.01;\n      tiltAngle += 0.1;\n\n      for (var i = 0; i < mp; i++) {\n        particle = particles[i];\n        if (animationComplete) return;\n\n        if (!confettiActive && particle.y < -15) {\n          particle.y = H + 100;\n          continue;\n        }\n\n        stepParticle(particle, i);\n\n        if (particle.y <= H) {\n          remainingFlakes++;\n        }\n\n        CheckForReposition(particle, i);\n      }\n\n      if (remainingFlakes === 0) {\n        StopConfetti();\n      }\n    }\n\n    function CheckForReposition(particle, index) {\n      if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {\n        if (index % 5 > 0 || index % 2 == 0) //66.67% of the flakes\n          {\n            repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 10);\n          } else {\n          if (Math.sin(angle) > 0) {\n            //Enter from the left\n            repositionParticle(particle, -5, Math.random() * H, Math.floor(Math.random() * 10) - 10);\n          } else {\n            //Enter from the right\n            repositionParticle(particle, W + 5, Math.random() * H, Math.floor(Math.random() * 10) - 10);\n          }\n        }\n      }\n    }\n\n    function stepParticle(particle, particleIndex) {\n      particle.tiltAngle += particle.tiltAngleIncremental;\n      particle.y += (Math.cos(angle + particle.d) + 3 + particle.r / 2) / 2;\n      particle.x += Math.sin(angle);\n      particle.tilt = Math.sin(particle.tiltAngle - particleIndex / 3) * 15;\n    }\n\n    function repositionParticle(particle, xCoordinate, yCoordinate, tilt) {\n      particle.x = xCoordinate;\n      particle.y = yCoordinate;\n      particle.tilt = tilt;\n    }\n\n    function StartConfetti() {\n      W = window.innerWidth;\n      H = window.innerHeight;\n      canvas.width = W;\n      canvas.height = H;\n\n      (function animloop() {\n        if (animationComplete) return null;\n        animationHandler = requestAnimFrame(animloop);\n        return Draw();\n      })();\n    }\n\n    function ClearTimers() {\n      clearTimeout(reactivationTimerHandler);\n      clearTimeout(animationHandler);\n    }\n\n    function DeactivateConfetti() {\n      confettiActive = false;\n      ClearTimers();\n    }\n\n    function StopConfetti() {\n      animationComplete = true;\n      if (ctx == undefined) return;\n      ctx.clearRect(0, 0, W, H);\n      canvas.style.display = 'none';\n    }\n\n    function RestartConfetti() {\n      ClearTimers();\n      StopConfetti();\n      reactivationTimerHandler = setTimeout(function () {\n        confettiActive = true;\n        animationComplete = false;\n        InitializeConfetti();\n      }, 100);\n    }\n\n    window.requestAnimFrame = function () {\n      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n        return window.setTimeout(callback, 1000 / 60);\n      };\n    }();\n\n    this.init = init;\n    this.start = InitializeConfetti;\n    this.stop = DeactivateConfetti;\n    this.restart = RestartConfetti;\n  }();\n  $.confetti.init();\n})(jQuery);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n\n//# sourceURL=webpack:///./src/js/jquery.confetti.js?");

/***/ }),

/***/ "./src/js/modalSample.js":
/*!*******************************!*\
  !*** ./src/js/modalSample.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _simplebar = __webpack_require__(/*! simplebar */ \"./node_modules/simplebar/dist/simplebar.esm.js\");\n\nvar _simplebar2 = _interopRequireDefault(_simplebar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    // Custom scrollBar\n    if (isDesktop) {\n      Array.from(_$$(\".modal-sample_details\")).forEach(function (el) {\n        return new _simplebar2.default(el, {\n          autoHide: false\n        });\n      });\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/modalSample.js?");

/***/ }),

/***/ "./src/js/modalTemplates.js":
/*!**********************************!*\
  !*** ./src/js/modalTemplates.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _gsap = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _scrollLock = __webpack_require__(/*! scroll-lock */ \"./node_modules/scroll-lock/dist/scroll-lock.js\");\n\n// import { enableBodyScroll, disableBodyScroll } from \"body-scroll-lock\";\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var modal = _$(\"#modalTemplates\");\n\n    var modalItems = modal.querySelectorAll(\".modal-template\");\n    var modalClose = modal.querySelector(\"#modalTemplatesClose\");\n\n    var templateBtns = _$$(\".template_btn\"); // Только если десктоп\n\n\n    var templateReady = void 0;\n    var templatePersonal = void 0;\n    var btnReady = void 0;\n    var btnPersonal = void 0;\n    var divide = void 0;\n    var btnsCloseDesktop = void 0;\n\n    if (isDesktop) {\n      divide = _$(\".template-divide\");\n      btnsCloseDesktop = _$$(\".modal-template_close\");\n\n      _$$(\".template\").forEach(function (item) {\n        if (item.dataset.name === \"1\") {\n          templateReady = item;\n          btnReady = item.querySelector(\".template_btn\");\n        }\n\n        if (item.dataset.name === \"2\") {\n          templatePersonal = item;\n          btnPersonal = item.querySelector(\".template_btn\");\n        }\n      });\n    }\n\n    var openModal = function openModal(item) {\n      item.classList.add(\"is-active\");\n\n      _gsap.TweenLite.to(modal, 0.6, {\n        x: \"0%\"\n      });\n    };\n\n    var openModalDesktop = function openModalDesktop(item) {\n      var tl = new _gsap.TimelineLite();\n      var itemWrap = item.querySelector(\".modal-template_wrap\");\n      var itemClose = item.querySelector(\".modal-template_close\");\n      item.classList.add(\"is-active\");\n\n      if (item.dataset.name === \"1\") {\n        item.classList.add(\"is-active--right\");\n        tl.to(templatePersonal, 0.6, {\n          x: 100,\n          autoAlpha: 0\n        }, \"hide\").to(divide, 0.6, {\n          y: 50,\n          autoAlpha: 0\n        }, \"hide\").to(btnReady, 0.6, {\n          y: 20,\n          autoAlpha: 0\n        }, \"hide\").to(modal, 0, {\n          x: \"0%\"\n        }, \"hide\").fromTo(itemWrap, 0.8, {\n          x: -100,\n          autoAlpha: 0\n        }, {\n          x: 0,\n          autoAlpha: 1\n        }, \"-=0.3\").fromTo(itemClose, 0.6, {\n          y: 20,\n          autoAlpha: 0\n        }, {\n          y: 0,\n          autoAlpha: 1\n        }, \"-=0.4\");\n      }\n\n      if (item.dataset.name === \"2\") {\n        tl.to(templateReady, 0.6, {\n          x: -100,\n          autoAlpha: 0\n        }, \"hide\").to(divide, 0.6, {\n          y: 50,\n          autoAlpha: 0\n        }, \"hide\").to(btnPersonal, 0.6, {\n          y: 20,\n          autoAlpha: 0\n        }, \"hide\").to(modal, 0, {\n          x: \"0%\"\n        }, \"hide\").fromTo(itemWrap, 0.8, {\n          x: 100,\n          autoAlpha: 0\n        }, {\n          x: 0,\n          autoAlpha: 1\n        }, \"-=0.3\").fromTo(itemClose, 0.6, {\n          y: 20,\n          autoAlpha: 0\n        }, {\n          y: 0,\n          autoAlpha: 1\n        }, \"-=0.4\");\n      }\n    };\n\n    var closeModalDesktop = function closeModalDesktop(item) {\n      var tl = new _gsap.TimelineLite();\n      var itemWrap = item.querySelector(\".modal-template_wrap\");\n      var itemClose = item.querySelector(\".modal-template_close\");\n\n      if (item.dataset.name === \"1\") {\n        tl.fromTo(itemClose, 0.6, {\n          y: 0,\n          autoAlpha: 1\n        }, {\n          y: 20,\n          autoAlpha: 0\n        }).fromTo(itemWrap, 0.8, {\n          x: 0,\n          autoAlpha: 1\n        }, {\n          x: -100,\n          autoAlpha: 0\n        }, \"-=0.4\").to(modal, 0, {\n          x: \"100%\"\n        }, \"show\").to(btnReady, 0.6, {\n          y: 0,\n          autoAlpha: 1\n        }, \"show\").to(divide, 0.6, {\n          y: 0,\n          autoAlpha: 1\n        }, \"show\").to(templatePersonal, 0.6, {\n          x: 0,\n          autoAlpha: 1\n        }, \"show\");\n      }\n\n      if (item.dataset.name === \"2\") {\n        tl.fromTo(itemClose, 0.6, {\n          y: 0,\n          autoAlpha: 1\n        }, {\n          y: 20,\n          autoAlpha: 0\n        }).fromTo(itemWrap, 0.8, {\n          x: 0,\n          autoAlpha: 1\n        }, {\n          x: 100,\n          autoAlpha: 0\n        }, \"-=0.4\").to(modal, 0, {\n          x: \"100%\"\n        }, \"show\").to(btnPersonal, 0.6, {\n          y: 0,\n          autoAlpha: 1\n        }, \"show\").to(divide, 0.6, {\n          y: 0,\n          autoAlpha: 1\n        }, \"show\").to(templateReady, 0.6, {\n          x: 0,\n          autoAlpha: 1\n        }, \"show\");\n      }\n    }; // Открытие модалки\n\n\n    templateBtns.forEach(function (btn) {\n      btn.addEventListener(\"click\", function () {\n        var currModal = null;\n        modalItems.forEach(function (item) {\n          item.classList.remove(\"is-active\", \"is-active--right\");\n\n          if (item.dataset.name === btn.dataset.name) {\n            currModal = item;\n          }\n        });\n\n        if (isDesktop) {\n          openModalDesktop(currModal);\n        } else {\n          openModal(currModal);\n        }\n\n        (0, _scrollLock.disablePageScroll)();\n      });\n    }); // Закрытие модалки\n\n    modalClose.addEventListener(\"click\", function () {\n      _gsap.TweenLite.to(modal, 0.6, {\n        x: \"100%\"\n      });\n\n      (0, _scrollLock.enablePageScroll)();\n    });\n\n    if (isDesktop) {\n      btnsCloseDesktop.forEach(function (btn) {\n        btn.addEventListener(\"click\", function () {\n          var currModal = null;\n          modalItems.forEach(function (item) {\n            if (item.dataset.name === btn.dataset.name) {\n              currModal = item;\n            }\n          });\n\n          if (currModal) {\n            closeModalDesktop(currModal);\n          }\n        });\n      });\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/modalTemplates.js?");

/***/ }),

/***/ "./src/js/owlCarousel.js":
/*!*******************************!*\
  !*** ./src/js/owlCarousel.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! owl.carousel */ \"./node_modules/owl.carousel/dist/owl.carousel.js\");\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    if (isDesktop) {\n      // Слайдер \"Преимущества\"\n      var owl = (0, _jquery2.default)(\".advantage-list\");\n      owl.addClass(\"owl-carousel\");\n      owl.owlCarousel({\n        item: 1,\n        // loop: true,\n        mouseDrag: false,\n        dots: false,\n        nav: false,\n        center: true,\n        margin: 40,\n        autoWidth: true,\n        smartSpeed: 1000,\n        // autoplay: true,\n        autoplayTimeout: 3500\n      });\n      (0, _jquery2.default)(\".advantage-btn--next\").click(function () {\n        owl.trigger(\"next.owl.carousel\");\n      });\n      (0, _jquery2.default)(\".advantage-btn--prev\").click(function () {\n        owl.trigger(\"prev.owl.carousel\");\n      });\n      var observer = new IntersectionObserver(function (entries) {\n        if (entries[0].isIntersecting === true) {\n          owl.trigger(\"play.owl.autoplay\");\n        }\n      }, {\n        threshold: [0.2]\n      });\n      observer.observe(owl[0]);\n    }\n\n    var owlClients = (0, _jquery2.default)(\".clients-slider\");\n    owlClients.owlCarousel({\n      loop: true,\n      mouseDrag: false,\n      dots: false,\n      nav: true,\n      navText: ['<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"20\" fill=\"none\"><path fill=\"#EF8B54\" fill-rule=\"evenodd\" d=\"M.41 9.87l1.414 1.414 8.228 8.228 1.414-1.414L3.238 9.87l8.228-8.228L10.052.228 1.824 8.456.408 9.87z\" clip-rule=\"evenodd\"/></svg>', '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"20\" fill=\"none\"><path fill=\"#EF8B54\" style=\"transform: translate3d(-5px, 0, 0);\" fill-rule=\"evenodd\" d=\"M19.59 9.87l-1.414 1.414-8.228 8.228-1.414-1.414 8.228-8.228-8.228-8.228L9.948.228l8.228 8.228 1.415 1.414z\" clip-rule=\"evenodd\"/></svg>'],\n      responsive: {\n        0: {\n          items: 1\n        },\n        768: {\n          items: 2\n        },\n        960: {\n          items: 3\n        },\n        1200: {\n          items: 4\n        }\n      }\n    });\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/owlCarousel.js?");

/***/ }),

/***/ "./src/js/pageNav.js":
/*!***************************!*\
  !*** ./src/js/pageNav.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var pageMenu = document.querySelector(\"#pageMenu\");\n    var btnOpenPageMenu = document.querySelector(\"#showPageMenu\");\n    var iconPageMenu = document.querySelector(\".icon-hamburger\");\n    btnOpenPageMenu.addEventListener(\"click\", function (e) {\n      iconPageMenu.classList.toggle(\"animate\");\n\n      if (iconPageMenu.classList.contains(\"animate\")) {\n        e.currentTarget.style.zIndex = 2000;\n        pageMenu.style.transform = \"none\";\n        document.body.style.cssText = \"position: fixed; width: 100%; height: 100%; overflow: hidden;\";\n      } else {\n        pageMenu.style.transform = null;\n        document.body.style.cssText = null;\n        setTimeout(function () {\n          btnOpenPageMenu.style.zIndex = null;\n        }, 300);\n      }\n    });\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/pageNav.js?");

/***/ }),

/***/ "./src/js/pageScroll.js":
/*!******************************!*\
  !*** ./src/js/pageScroll.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _gsap = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar _fullpage = __webpack_require__(/*! fullpage.js */ \"./node_modules/fullpage.js/dist/fullpage.js\");\n\nvar _fullpage2 = _interopRequireDefault(_fullpage);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var tl = new _gsap.TimelineLite();\n\n    var heroTitle = _$(\"#js-heroTitle\");\n\n    var heroImg = _$(\"#js-heroImg\");\n\n    var heroBtn = _$(\"#js-heroBtn\"); // Анимация херо блока\n\n\n    if (isDesktop) {\n      tl.fromTo(heroTitle, 1, {\n        x: -100,\n        autoAlpha: 0\n      }, {\n        x: 0,\n        autoAlpha: 1,\n        delay: 2\n      }, \"hero\").fromTo(heroBtn, 1, {\n        x: -100,\n        autoAlpha: 0\n      }, {\n        x: 0,\n        autoAlpha: 1,\n        delay: 2\n      }, \"hero\").fromTo(heroImg, 1, {\n        x: 100,\n        autoAlpha: 0\n      }, {\n        x: 0,\n        autoAlpha: 1,\n        delay: 2\n      }, \"hero\");\n    } else {\n      tl.fromTo(heroTitle, 1, {\n        y: -25,\n        autoAlpha: 0\n      }, {\n        y: 0,\n        autoAlpha: 1,\n        delay: 2\n      }).fromTo(heroImg, 1, {\n        autoAlpha: 0\n      }, {\n        autoAlpha: 1\n      }, \"-=0.2\").fromTo(heroBtn, 1, {\n        y: 50,\n        autoAlpha: 0\n      }, {\n        y: 0,\n        autoAlpha: 1\n      }, \"-=0.2\");\n    } // FullPageScroll\n\n\n    if (isDesktop) {\n      var animated = {\n        // why: true,\n        how: true,\n        sample: true,\n        templates: true,\n        feedback: true\n      };\n\n      var howAnimated = function howAnimated() {\n        var elems = _$$(\".how-step\");\n\n        tl.from(elems[0], 0.7, {\n          x: -100,\n          autoAlpha: 0,\n          ease: _gsap.Linear.easeOut\n        }).from(elems[1], 0.7, {\n          x: -100,\n          autoAlpha: 0,\n          ease: _gsap.Linear.easeOut\n        }).from(elems[2], 0.7, {\n          x: -100,\n          autoAlpha: 0,\n          ease: _gsap.RoughEase.easeOut\n        }).from(elems[3], 0.7, {\n          x: 100,\n          autoAlpha: 0,\n          ease: _gsap.Linear.easeOut\n        }).from(elems[4], 0.7, {\n          x: 100,\n          autoAlpha: 0,\n          ease: _gsap.Linear.easeOut\n        }).from(elems[5], 0.7, {\n          x: 100,\n          autoAlpha: 0,\n          ease: _gsap.Linear.easeOut\n        });\n      };\n\n      var templatesAnimated = function templatesAnimated() {\n        var iconVs = _$(\".template-divide\");\n\n        var template1 = null;\n        var template2 = null;\n\n        _$$(\".template\").forEach(function (item) {\n          switch (item.dataset.name) {\n            case \"1\":\n              template1 = item;\n              break;\n\n            case \"2\":\n              template2 = item;\n              break;\n\n            default:\n              break;\n          }\n        });\n\n        if (template1 && template2) {\n          tl.from(template1, 1, {\n            x: -100,\n            autoAlpha: 0,\n            delay: 0.2\n          }, \"first\").from(template2, 1, {\n            x: 100,\n            autoAlpha: 0,\n            delay: 0.2\n          }, \"first\").from(iconVs, 1, {\n            y: 50,\n            autoAlpha: 0\n          }, \"-=0.2\");\n        }\n      };\n\n      var feedbackAnimated = function feedbackAnimated() {\n        new _gsap.TimelineLite().from(\".feedback_form-col\", 1.5, {\n          y: 200,\n          autoAlpha: 0,\n          ease: _gsap.RoughEase.easeInOut,\n          delay: 0.2\n        }, 0).from(\".border-top\", 1, {\n          x: -100,\n          scale: 1.5,\n          autoAlpha: 0,\n          ease: _gsap.Back.easeInOut,\n          delay: 0.2\n        }, 0).from(\".border-bottom\", 1, {\n          x: 100,\n          scale: 1.5,\n          autoAlpha: 0,\n          ease: _gsap.Back.easeInOut,\n          delay: 0.2\n        }, 0).from(\".border-left\", 1, {\n          y: 100,\n          scale: 1.5,\n          autoAlpha: 0,\n          ease: _gsap.Back.easeInOut\n        }, 1).from(\".border-right\", 1, {\n          y: -100,\n          scale: 1.5,\n          autoAlpha: 0,\n          ease: _gsap.Back.easeInOut\n        }, 1);\n      };\n\n      var eventMouseAnimation = (0, _lodash.throttle)(function (e) {\n        if (!e.currentTarget) return null;\n        var bgIcons = e.currentTarget.querySelectorAll(\".bg-icon\");\n        var xPos = e.clientX / window.innerWidth - 0.5;\n        var yPos = e.clientY / window.innerHeight - 0.5;\n        bgIcons.forEach(function (icon) {\n          _gsap.TweenLite.to(icon, 1.2, {\n            x: xPos * 15,\n            y: yPos * 15,\n            ease: _gsap.Power1.easeOut\n          });\n        });\n\n        if (e.currentTarget.id === \"sectionTemplates\") {\n          var templateIcons = e.currentTarget.querySelectorAll(\".template_bg-icon\");\n          var line = e.currentTarget.querySelector(\".template-divide_line\");\n          templateIcons.forEach(function (icon) {\n            _gsap.TweenLite.to(icon, 1.2, {\n              x: xPos * 15,\n              y: yPos * 15,\n              ease: _gsap.Power1.easeOut\n            });\n          });\n\n          _gsap.TweenLite.to(line, 1.2, {\n            x: (xPos * 15 + 50) * -1 + \"%\",\n            y: (yPos * 15 + 50) * -1 + \"%\",\n            ease: _gsap.Power1.easeOut\n          });\n        }\n      }, 100);\n      var templateTitleHover = (0, _lodash.throttle)(function (e) {\n        var temp1 = document.querySelector(\".template[data-name='1']\").querySelector(\".template_title\");\n        var temp2 = document.querySelector(\".template[data-name='2']\").querySelector(\".template_title\");\n        var posX = e.clientX;\n        var width = window.innerWidth;\n        var half = width / 2;\n\n        if (posX < half) {\n          temp1.classList.add(\"template_title--orange\");\n          temp2.classList.remove(\"template_title--orange\");\n        } else {\n          temp2.classList.add(\"template_title--orange\");\n          temp1.classList.remove(\"template_title--orange\");\n        }\n      }, 400);\n      var fullPageInstance = new _fullpage2.default(\"#fullPage\", {\n        licenseKey: \"OPEN-SOURCE-GPLV3-LICENSE\",\n        lockAnchors: false,\n        normalScrollElements: \"#modalHow, #modalSample, #modalTemplates, #modalFeedback, #modalHero\",\n        onLeave: function onLeave(origin, destination) {\n          if (destination.item.id === \"sectionHow\" && animated.how) {\n            howAnimated();\n            animated.how = false;\n          }\n\n          if (destination.item.id === \"sectionTemplates\" && animated.templates) {\n            templatesAnimated();\n            animated.templates = false;\n          }\n\n          if (destination.item.id === \"sectionFeedback\" && animated.feedback) {\n            feedbackAnimated();\n            animated.feedback = false;\n          } // Анимация на движение курсора\n          // if (origin.item.id === \"sectionAdvantage\") {\n          //   origin.item.removeEventListener(\"mousemove\", eventFn);\n          // }\n          // if (origin.item.id === \"sectionFeatures\") {\n          //   origin.item.removeEventListener(\"mousemove\", eventFn);\n          // }\n          // if (origin.item.id === \"sectionSample\") {\n          //   origin.item.removeEventListener(\"mousemove\", eventFn);\n          // }\n          // if (origin.item.id === \"sectionTemplates\") {\n          //   origin.item.removeEventListener(\"mousemove\", eventFn);\n          // }\n          // if (origin.item.id === \"sectionClients\") {\n          //   origin.item.removeEventListener(\"mousemove\", eventFn);\n          // }\n          // if (origin.item.id === \"sectionFeedback\") {\n          //   origin.item.removeEventListener(\"mousemove\", eventFn);\n          // }\n\n        },\n        afterLoad: function afterLoad(origin, destination) {\n          // Анимация на движение курсора\n          if (destination.item.id === \"sectionAdvantage\") {\n            destination.item.addEventListener(\"mousemove\", eventMouseAnimation);\n          }\n\n          if (destination.item.id === \"sectionFeatures\") {\n            destination.item.addEventListener(\"mousemove\", eventMouseAnimation);\n          }\n\n          if (destination.item.id === \"sectionSample\") {\n            destination.item.addEventListener(\"mousemove\", eventMouseAnimation);\n          }\n\n          if (destination.item.id === \"sectionTemplates\") {\n            destination.item.addEventListener(\"mousemove\", eventMouseAnimation);\n            destination.item.addEventListener(\"mousemove\", templateTitleHover);\n          }\n\n          if (destination.item.id === \"sectionClients\") {\n            destination.item.addEventListener(\"mousemove\", eventMouseAnimation);\n          }\n\n          if (destination.item.id === \"sectionFeedback\") {\n            destination.item.addEventListener(\"mousemove\", eventMouseAnimation);\n          }\n        }\n      });\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/pageScroll.js?");

/***/ }),

/***/ "./src/js/sample.js":
/*!**************************!*\
  !*** ./src/js/sample.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _bodyScrollLock = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.min.js\");\n\nvar _simplebar = __webpack_require__(/*! simplebar */ \"./node_modules/simplebar/dist/simplebar.esm.js\");\n\nvar _simplebar2 = _interopRequireDefault(_simplebar);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var blurWrap = _$(\".sample_blur-wrap\");\n\n    var cards = _$$(\".sample-item\");\n\n    var modalWrap = _$(\"#modalSample\");\n\n    var modalWrapScroll = _$(\".modal-sample-wrap_scroll-wrap\");\n\n    var modalItems = _$$(\".modal-sample\");\n\n    var modalClose = _$(\"#modalSampleClose\");\n\n    var modalFullscreen = _$$(\".modal-sample_fullscreen\");\n\n    var allowHover = true;\n    cards.forEach(function (card) {\n      // При ховере на карточку (кейс)\n      // Только для десктопа\n      if (isDesktop) {\n        card.addEventListener(\"mousemove\", (0, _lodash.throttle)(function () {\n          if (!allowHover) return;\n          cards.forEach(function (item) {\n            if (card !== item) {\n              item.classList.add(\"is-blur\");\n            }\n          });\n          modalItems.forEach(function (item) {\n            if (item.dataset.name === card.dataset.name) {\n              item.classList.add(\"is-active\");\n              modalWrap.classList.add(\"is-hover--pre\");\n              modalWrap.classList.add(\"is-hover\");\n            } else {\n              item.classList.remove(\"is-active\");\n            }\n          });\n        }, 200));\n        card.addEventListener(\"mouseleave\", function () {\n          allowHover = false;\n          cards.forEach(function (item) {\n            item.classList.remove(\"is-blur\");\n          });\n          modalWrap.classList.remove(\"is-hover\");\n          setTimeout(function () {\n            allowHover = true;\n          }, 200);\n        });\n      }\n\n      card.addEventListener(\"click\", function () {\n        (0, _bodyScrollLock.disableBodyScroll)(modalWrap);\n\n        if (isDesktop) {\n          allowHover = false;\n          modalWrap.classList.remove(\"is-hover\");\n          modalWrap.classList.remove(\"is-hover--pre\");\n        }\n\n        modalItems.forEach(function (item) {\n          if (item.dataset.name === card.dataset.name) {\n            item.classList.add(\"is-active\");\n            modalWrap.classList.add(\"is-active\");\n\n            if (isDesktop) {\n              blurWrap.classList.add(\"is-blur\");\n            }\n          } else {\n            item.classList.remove(\"is-active\");\n          }\n        });\n      });\n    });\n\n    var closeModal = function closeModal() {\n      modalWrap.classList.remove(\"is-active\");\n\n      if (isDesktop) {\n        blurWrap.classList.remove(\"is-blur\");\n        setTimeout(function () {\n          allowHover = true;\n        }, 500);\n\n        if (modalWrap.classList.contains(\"is-fullscreen\")) {\n          modalWrap.classList.remove(\"is-fullscreen\");\n        }\n      }\n\n      (0, _bodyScrollLock.enableBodyScroll)(modalWrap);\n    };\n\n    modalClose.addEventListener(\"click\", closeModal);\n    modalWrap.addEventListener(\"click\", function (e) {\n      if (e.target === e.currentTarget) {\n        closeModal();\n      }\n    });\n\n    if (isDesktop) {\n      modalFullscreen.forEach(function (btn) {\n        btn.addEventListener(\"click\", function () {\n          modalWrap.classList.add(\"is-fullscreen\");\n        });\n      });\n    } // Custom scrollBar\n\n\n    if (isDesktop) {\n      // modal-sample_content\n      // new SimpleBar(modalWrapScroll, { autoHide: false });\n      new _simplebar2.default(modalWrap, {\n        autoHide: false,\n        scrollbarMinSize: 1\n      }); // Array.from(_$$(\".modal-sample_content\")).forEach(\n      //   el =>\n      //     new SimpleBar(el, {\n      //       autoHide: false,\n      //     }),\n      // );\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./src/js/sample.js?");

/***/ })

/******/ });