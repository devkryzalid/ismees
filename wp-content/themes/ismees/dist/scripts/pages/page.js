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

/***/ "./assets/scripts/pages/page.js":
/*!**************************************!*\
  !*** ./assets/scripts/pages/page.js ***!
  \**************************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n\n    const url = encodeURIComponent(window.location.href);\n    const facebookBtn = document.getElementById('facebook');\n    const twitterBtn = document.getElementById('twitter');\n    const emailBtn = document.getElementById('email');\n\n    const shareFacebook = () => {\n        window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank');\n    }\n\n    const shareTwitter = () => {\n        window.open('https://twitter.com/intent/tweet?url=' + url, '_blank');\n    }\n\n    const shareEmail = () => {\n        window.location.href = 'mailto:?body=' + url;\n    }\n\n    facebookBtn.addEventListener('click', shareFacebook);\n    twitterBtn.addEventListener('click', shareTwitter);\n    emailBtn.addEventListener('click', shareEmail);\n\n});\n\n//# sourceURL=webpack://ismees/./assets/scripts/pages/page.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/scripts/pages/page.js"]();
/******/ 	
/******/ })()
;