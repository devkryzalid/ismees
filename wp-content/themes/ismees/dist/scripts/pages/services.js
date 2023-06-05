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

/***/ "./assets/scripts/pages/services.js":
/*!******************************************!*\
  !*** ./assets/scripts/pages/services.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_filters_autocomplete_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/filters/autocomplete-search */ \"./assets/scripts/partials/filters/autocomplete-search.js\");\n/* harmony import */ var _partials_filters_autocomplete_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_partials_filters_autocomplete_search__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://ismees/./assets/scripts/pages/services.js?");

/***/ }),

/***/ "./assets/scripts/partials/filters/autocomplete-search.js":
/*!****************************************************************!*\
  !*** ./assets/scripts/partials/filters/autocomplete-search.js ***!
  \****************************************************************/
/***/ (function() {

eval("// Search with autocomplete behavior\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    // Get DOM elements\n    const searchInput = document.getElementById('searchInput');\n    const elementsList = document.getElementById('searchResult');\n    const searchContainer = document.getElementById('searchContainer');\n\n    // Retrieve and parse the JSON data from the hidden DOM element\n    let autoCompleteData = document.getElementById('autoCompleteData');\n    let jsonData = JSON.parse(autoCompleteData.textContent);\n\n    // Default message when no results are found\n    let noResults = \"Aucun résultat pour cette recherche\";\n\n    // Function to remove accents from a string\n    const removeAccents = (str) => {\n        return str.normalize(\"NFD\").replace(/[\\u0300-\\u036f]/g, \"\");\n    }\n\n    // Event listener for when the value of the search input changes\n    const handleSearch = () => { \n        searchInput.addEventListener('input', () => {\n\n            // Get the search input value, lowercased and with accents removed\n            let searchInputValue = removeAccents(searchInput.value.toLowerCase());\n\n            // If the search input is at least 3 characters long\n            if (searchInput.value.length >= 3) {\n                // Filter the JSON data based on the search input\n                let filteredData = jsonData.filter((data) => { \n                    return removeAccents(data.title.toLowerCase()).includes(searchInputValue);\n                });\n\n                // Clear the list of search results\n                elementsList.innerHTML = '';\n\n                // If there are results, add them to the list\n                if (filteredData.length > 0) {\n                    filteredData.map((data) => {\n                        // Remove accents from the title and find the position of the search input\n                        let titleNoAccent = removeAccents(data.title);\n                        let index = titleNoAccent.toLowerCase().indexOf(searchInputValue);\n\n                        // If the search input is found in the title, highlight it\n                        if (index >= 0) {\n                            let highlightedTitle = data.title.slice(0, index) + \"<strong class='highlight'>\" + data.title.slice(index, index + searchInputValue.length) + \"</strong>\" + data.title.slice(index + searchInputValue.length);\n                            return elementsList.innerHTML += `<li class=\"result\"><a href=\"${data.url}\" target=\"_blank\">${highlightedTitle}</a></li>`;\n                        }\n                    });\n                } else {\n                    // If there are no results, display a message\n                    elementsList.innerHTML += `<p class=\"searchNoResult\">${noResults}</p>`;\n                }\n\n                // Show the list of search results\n                searchContainer.classList.add('-show');\n            } else {\n                // If the search input is less than 3 characters long, hide the list of search results and clear it\n                searchContainer.classList.remove('-show');\n                elementsList.innerHTML = '';\n            }\n        });\n    };\n\n    searchInput.addEventListener('focus', handleSearch);\n    searchInput.addEventListener('blur', () => {\n        searchContainer.classList.remove('-show');\n    });\n});\n\n//# sourceURL=webpack://ismees/./assets/scripts/partials/filters/autocomplete-search.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/scripts/pages/services.js");
/******/ 	
/******/ })()
;