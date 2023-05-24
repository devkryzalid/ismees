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

/***/ "./assets/scripts/pages/hub.js":
/*!*************************************!*\
  !*** ./assets/scripts/pages/hub.js ***!
  \*************************************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n    const lineCard = document.querySelectorAll(\".line-card\");\n\n    lineCard.forEach((card) => {\n        card.addEventListener('mouseover', (event) => {\n            const cardRect = card.getBoundingClientRect();\n            const xPercentage = (event.clientX - cardRect.right) / cardRect.width;\n            const image = card.querySelector('.image-ctn');\n\n            image.style.top = event.offsetY + \"px\";\n\n            const minRight = 35;\n            const maxRight = 70;\n            \n            const right = minRight + (maxRight - minRight) * xPercentage;\n            image.style.right = `${right}px`;\n        });\n    });\n});\n\n//# sourceURL=webpack://ismees/./assets/scripts/pages/hub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/scripts/pages/hub.js"]();
/******/ 	
/******/ })()
;