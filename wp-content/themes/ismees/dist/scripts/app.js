/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_jsBlockLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/jsBlockLink */ \"./assets/scripts/utils/jsBlockLink.js\");\n/* harmony import */ var _utils_jsBlockLink__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_jsBlockLink__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _partials_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/header */ \"./assets/scripts/partials/header.js\");\n/* harmony import */ var _partials_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partials_header__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _partials_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/form */ \"./assets/scripts/partials/form.js\");\n/* harmony import */ var _partials_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_partials_form__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//# sourceURL=webpack://ismees/./assets/scripts/main.js?");

/***/ }),

/***/ "./assets/scripts/partials/form.js":
/*!*****************************************!*\
  !*** ./assets/scripts/partials/form.js ***!
  \*****************************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', () => {\n    const patterns = {\n        name: /^[a-zA-ZÀ-ÿ]+$/,\n        surname: /^[a-zA-ZÀ-ÿ]+$/,\n        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/,\n        establishment: /^[a-zA-ZÀ-ÿ0-9\\s]+$/\n    };\n\n    function validateField(id) {\n        const input = document.getElementById(id);\n        const error = document.getElementById(id + 'Error');\n        const pattern = patterns[id];\n\n        if (!pattern.test(input.value) && input.value !== \"\") {\n            error.style.display = \"block\";\n            return false;\n        } else {\n            error.style.display = \"none\";\n            return true;\n        }\n    }\n\n    function validateForm() {\n        const nameValid = validateField('name');\n        const surnameValid = validateField('surname');\n        const emailValid = validateField('email');\n        const establishmentValid = validateField('establishment');\n\n        return nameValid && surnameValid && emailValid && establishmentValid;\n    }\n\n    async function submitForm() {\n        const formData = new FormData(document.getElementById('subscriptionForm'));\n\n        try {\n            // const response = await fetch('path/to/your/endpoint', {\n            //     method: 'POST',\n            //     body: formData\n            // });\n\n            // if (response.ok) {\n                console.log(formData);\n            // } else {\n            //     console.error('Failed to submit form.');\n            // }\n        } catch (error) {\n            console.error('Error:', error);\n        }\n    }\n\n    const form = document.getElementById('subscriptionForm');\n    const fields = ['name', 'surname', 'email', 'establishment'];\n\n    fields.forEach((fieldId) => {\n        const field = document.getElementById(fieldId);\n        field.addEventListener('blur', () => validateField(fieldId));\n    });\n\n    form.addEventListener('submit', async (event) => {\n        event.preventDefault();\n\n        if (validateForm()) {\n            await submitForm();\n        }\n    });\n\n    const openFormButton = document.querySelector(\".subscribe-button\");\n    const footerForm = document.querySelector(\".footer-form\");\n\n    openFormButton.addEventListener('click', () => {\n        footerForm.classList.toggle('-show');\n    });\n});\n\n//# sourceURL=webpack://ismees/./assets/scripts/partials/form.js?");

/***/ }),

/***/ "./assets/scripts/partials/header.js":
/*!*******************************************!*\
  !*** ./assets/scripts/partials/header.js ***!
  \*******************************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n\n    // ********* Display / Hide menu mobile ********* //\n\n    const mobileMenu = () => {\n        const menuBurger = document.querySelectorAll(\".burger-menu\");\n        const menuMobile = document.getElementById(\"header\");\n\n        menuBurger.forEach((button) => {\n            button.addEventListener(\"click\", () => {\n                menuMobile.classList.toggle(\"-open\");\n            });\n        });\n    }\n\n    mobileMenu();\n\n    // ********* Sticky Header Behavior ********* //\n\n    const header = document.getElementById('header');\n\n    previousScrollPosition = 0;\n\n    document.addEventListener('scroll', () => {\n\n        if(window.scrollY >= 50) {\n            header.classList.add(\"-sticky\");\n\n            const stickyHeader = document.querySelector('.-sticky');\n            const stickyHeaderHeight = stickyHeader.offsetHeight + 'px';\n\n            // Hide header on scroll down and show it on scroll up\n            if (window.scrollY >= previousScrollPosition) {\n                header.style.top = `-${stickyHeaderHeight}`;\n                previousScrollPosition = window.scrollY;\n            } else {\n                document.body.classList.contains('customize-support') ? header.style.top = '32px' : header.style.top = '0';\n                previousScrollPosition = window.scrollY;\n            }\n\n        } else {\n            header.classList.remove(\"-sticky\");\n        }\n    });\n\n    // ********* Set sub menu alignment with its parent ********* //\n\n    const menuMainItems = document.querySelectorAll(\"#primary-menu .menu-item-has-children.main-item\");\n\n    window.addEventListener('resize', () => {\n        menuMainItems.forEach((item) => {\n            const menuSubItems = item.querySelector(\".child-menu\");\n            let marginItems = item.getBoundingClientRect().x;\n\n            window.innerWidth > 992 ? menuSubItems.style.paddingLeft = `${marginItems}px` : menuSubItems.style.paddingLeft = '0px';    \n        });\n    });\n\n    window.dispatchEvent(new Event(\"resize\"));\n});\n\n//# sourceURL=webpack://ismees/./assets/scripts/partials/header.js?");

/***/ }),

/***/ "./assets/scripts/utils/jsBlockLink.js":
/*!*********************************************!*\
  !*** ./assets/scripts/utils/jsBlockLink.js ***!
  \*********************************************/
/***/ (function() {

eval("/*\n  Add JsBlockLink method \n  Search a href=\"\" in a block\n  Better for SEO\n*/\ndocument.querySelectorAll(\".jsBlockLink\").forEach(element => {\n  element.addEventListener('click', event => {\n    const link = event.currentTarget.querySelectorAll('a:not(.jsIgnoreBlockLink)')[0];\n\n    if (!link.classList.contains('jsIgnoreBlockLink')) {\n      if ((link.getAttribute('target') && link.getAttribute('target') === '_blank') ||\n        event.ctrlKey ||\n        event.button === 1) {\n        window.open(link.getAttribute('href'));\n      }\n      else if (event.button === 0) {\n        document.location.href = link.getAttribute('href');\n      }\n    }\n    return false;\n  })\n})\n\n//# sourceURL=webpack://ismees/./assets/scripts/utils/jsBlockLink.js?");

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://ismees/./assets/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./assets/scripts/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/styles/main.scss");
/******/ 	
/******/ })()
;