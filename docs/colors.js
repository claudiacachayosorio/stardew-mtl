/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 3:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"text":"#3c262b","title":"#e7b012","frame":"#923e08","heart":"#d93500","bg-light":"#5edceb","bg-lighter":"#93fedb","bg-medium":"#259bfd","bg-dark":"#0261bb","bg-darker":"#023b7e","textbox":"#fdbd6f","textbox-dark":"#d8a06f","textbox-border":"#fa9305","textbox-border-inner":"#b14e05","textbox-border-outer":"#853605","soil":"#e9d65d","soil-dark":"#e5bb51","soil-darker":"#e09947","pavement":"#66797f","pavement-light":"#6c996e","road":"#485b4c","road-border":"#324135","road-marking":"#607966","grass":"#40c51b","grass-dark":"#3ea031","water":"#3c82c3","water-light":"#49ccdd","water-dark":"#37549e","tree":"#0d7e2c","tree-light":"#12a92b","tree-dark":"#09543b","wood":"#775c25","cliff":"#787843","cliff-light":"#8e8e55","cliff-dark":"#686023","cliff-darker":"#544d39","mountain":"#acbe9a","mountain-dark":"#799e88","mountain-top":"#dde0ee","mountain-top-dark":"#bdc2da","mountain-border":"#576196","clock":"#ffd787","clock-border":"#f7ba00","clock-center":"#dc7b05","clock-center-border":"#f7ba00"}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const $ = __webpack_require__(3);

function setCSSvars(data) {
	for (const [name, hex] of Object.entries(data)) {
		document.documentElement.style.setProperty(`--color-${name}`, hex);
	}
}

setCSSvars($);
})();

/******/ })()
;
//# sourceMappingURL=colors.js.map