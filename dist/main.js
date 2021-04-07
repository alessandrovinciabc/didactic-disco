/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/DropDownMenu/DropDownMenu.js":
/*!*************************************************!*\
  !*** ./Components/DropDownMenu/DropDownMenu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DropDownMenu_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropDownMenu__button.js */ \"./Components/DropDownMenu/DropDownMenu__button.js\");\n\r\n\r\nlet initializeEverything = () => {\r\n  (0,_DropDownMenu_button_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeEverything);\r\n\n\n//# sourceURL=webpack://dynamic-practice/./Components/DropDownMenu/DropDownMenu.js?");

/***/ }),

/***/ "./Components/DropDownMenu/DropDownMenu__button.js":
/*!*********************************************************!*\
  !*** ./Components/DropDownMenu/DropDownMenu__button.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet behaviourOnClick = function (e) {\r\n  if (e.target.classList.contains('DropDownMenu__button')) {\r\n    let content = e.target.parentNode.querySelector('.DropDownMenu__content');\r\n\r\n    if (content) {\r\n      content.classList.toggle('DropDownMenu__content--visible');\r\n    }\r\n  }\r\n};\r\n\r\nlet initializeDropDownMenus = () => {\r\n  document.addEventListener('click', behaviourOnClick);\r\n\r\n  return {\r\n    eventType: 'click',\r\n    callback: behaviourOnClick,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeDropDownMenus);\r\n\n\n//# sourceURL=webpack://dynamic-practice/./Components/DropDownMenu/DropDownMenu__button.js?");

/***/ }),

/***/ "./Components/ImageSlider/ImageSlider.js":
/*!***********************************************!*\
  !*** ./Components/ImageSlider/ImageSlider.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet getNumberOfSlides = (slider) => {\r\n  return slider.querySelectorAll('.ImageSlider__slide').length;\r\n};\r\n\r\nlet getCurrentSlide = (slider) => {\r\n  let currentSlide;\r\n\r\n  currentSlide = slider.querySelector(\r\n    '.ImageSlider__slide.ImageSlider__slide--visible'\r\n  );\r\n\r\n  return currentSlide || -1;\r\n};\r\n\r\nlet generateArrowsFor = (slider) => {\r\n  let newRightArrow, newLeftArrow;\r\n\r\n  newRightArrow = document.createElement('div');\r\n  newRightArrow.classList.add('ImageSlider__right-arrow');\r\n\r\n  newLeftArrow = document.createElement('div');\r\n  newLeftArrow.classList.add('ImageSlider__left-arrow');\r\n\r\n  slider.insertBefore(newLeftArrow, null);\r\n  slider.appendChild(newRightArrow);\r\n\r\n  return [newLeftArrow, newRightArrow];\r\n};\r\n\r\nlet generateDotsFor = (slider) => {\r\n  let navigationGroup, totalSlides;\r\n  navigationGroup = document.createElement('div');\r\n  navigationGroup.classList.add('ImageSlider__navigation-group');\r\n\r\n  totalSlides = getNumberOfSlides(slider);\r\n\r\n  for (let i = 0; i < totalSlides; ++i) {\r\n    let newDot = document.createElement('div');\r\n    newDot.classList.add('ImageSlider__navigation-dot');\r\n    //data attributes with dashes get converted to camelCase\r\n    newDot.dataset.slideNumber = i;\r\n\r\n    navigationGroup.appendChild(newDot);\r\n  }\r\n\r\n  slider.appendChild(navigationGroup);\r\n\r\n  return navigationGroup;\r\n};\r\n\r\nlet setDot = (slider, number) => {\r\n  let currentDot, dots;\r\n\r\n  currentDot = slider.querySelector('.ImageSlider__navigation-dot--active');\r\n  dots = Array.from(slider.querySelectorAll('.ImageSlider__navigation-dot'));\r\n\r\n  currentDot.classList.remove('ImageSlider__navigation-dot--active');\r\n  dots[number].classList.add('ImageSlider__navigation-dot--active');\r\n};\r\n\r\nlet displaySlide = (slider, conditionCallback) => {\r\n  let slides, currentSlide, indexOfCurrentSlide;\r\n\r\n  slides = Array.from(slider.querySelectorAll('.ImageSlider__slide'));\r\n\r\n  currentSlide = slider.querySelector(\r\n    '.ImageSlider__slide.ImageSlider__slide--visible'\r\n  );\r\n  indexOfCurrentSlide = slides.indexOf(currentSlide);\r\n\r\n  let newCurrentIndex = conditionCallback(slides, indexOfCurrentSlide);\r\n\r\n  currentSlide.classList.remove('ImageSlider__slide--visible');\r\n  slides[newCurrentIndex].classList.add('ImageSlider__slide--visible');\r\n\r\n  setDot(slider, newCurrentIndex);\r\n};\r\n\r\nlet showPreviousSlide = (e) => {\r\n  let slider = e.target.parentNode;\r\n  displaySlide(slider, (slides, indexOfCurrentSlide) => {\r\n    if (indexOfCurrentSlide) {\r\n      return indexOfCurrentSlide - 1;\r\n    } else {\r\n      return slides.length - 1;\r\n    }\r\n  });\r\n};\r\n\r\nlet showNextSlide = (e) => {\r\n  let slider = e.target.parentNode;\r\n  displaySlide(slider, (slides, indexOfCurrentSlide) => {\r\n    if (indexOfCurrentSlide === slides.length - 1) {\r\n      return 0;\r\n    } else {\r\n      return indexOfCurrentSlide + 1;\r\n    }\r\n  });\r\n};\r\n\r\nlet handleNavigationDots = (e) => {\r\n  if (e.target.classList.contains('ImageSlider__navigation-dot')) {\r\n    let slider, dot, currentDot, indexOfTheDot;\r\n\r\n    dot = e.target;\r\n    currentDot = e.target.parentNode.querySelector(\r\n      '.ImageSlider__navigation-dot--active'\r\n    );\r\n\r\n    indexOfTheDot = dot.dataset.slideNumber;\r\n    slider = e.target.parentNode.parentNode;\r\n\r\n    displaySlide(slider, () => indexOfTheDot);\r\n    currentDot.classList.remove('ImageSlider__navigation-dot--active');\r\n    dot.classList.add('ImageSlider__navigation-dot--active');\r\n  }\r\n};\r\n\r\nlet initializeImageSliders = (timeInSeconds) => {\r\n  let imageSliders = document.querySelectorAll('.ImageSlider');\r\n\r\n  if (imageSliders) {\r\n    imageSliders.forEach((slider) => {\r\n      let arrows, groupOfDots;\r\n      arrows = generateArrowsFor(slider);\r\n      groupOfDots = generateDotsFor(slider);\r\n\r\n      if (getCurrentSlide(slider) === -1) {\r\n        let firstSlide = slider.querySelector('.ImageSlider__slide');\r\n        firstSlide.classList.add('ImageSlider__slide--visible');\r\n\r\n        let firstDot = slider.querySelector('.ImageSlider__navigation-dot');\r\n        firstDot.classList.add('ImageSlider__navigation-dot--active');\r\n      }\r\n\r\n      groupOfDots.addEventListener('click', handleNavigationDots);\r\n      arrows[0].addEventListener('click', showPreviousSlide);\r\n      arrows[1].addEventListener('click', showNextSlide);\r\n\r\n      if (timeInSeconds > 0) {\r\n        setInterval(() => {\r\n          showNextSlide({ target: slider });\r\n        }, timeInSeconds * 1000); //convert seconds in milliseconds\r\n      }\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeImageSliders);\r\n\n\n//# sourceURL=webpack://dynamic-practice/./Components/ImageSlider/ImageSlider.js?");

/***/ }),

/***/ "./Components/MobileMenu/MobileMenu.js":
/*!*********************************************!*\
  !*** ./Components/MobileMenu/MobileMenu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet isThereAMobileMenu = () => {\r\n  if (document.querySelector('.MobileMenu')) return true;\r\n  else return false;\r\n};\r\n\r\nlet getAllMenus = () => {\r\n  return document.querySelectorAll('.MobileMenu');\r\n};\r\n\r\nlet initializeMobileMenus = () => {\r\n  document.addEventListener('click', function (e) {\r\n    if (e.target.classList.contains('MobileMenu__button')) {\r\n      e.target.parentNode.classList.toggle('MobileMenu--expanded');\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeMobileMenus);\r\n\n\n//# sourceURL=webpack://dynamic-practice/./Components/MobileMenu/MobileMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_DropDownMenu_DropDownMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/DropDownMenu/DropDownMenu.js */ \"./Components/DropDownMenu/DropDownMenu.js\");\n/* harmony import */ var _Components_MobileMenu_MobileMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MobileMenu/MobileMenu.js */ \"./Components/MobileMenu/MobileMenu.js\");\n/* harmony import */ var _Components_ImageSlider_ImageSlider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/ImageSlider/ImageSlider.js */ \"./Components/ImageSlider/ImageSlider.js\");\n\r\n\r\n\r\n\r\nconst TIME_PER_SLIDE = 5;\r\n\r\n(0,_Components_DropDownMenu_DropDownMenu_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_Components_MobileMenu_MobileMenu_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n(0,_Components_ImageSlider_ImageSlider_js__WEBPACK_IMPORTED_MODULE_2__.default)(TIME_PER_SLIDE);\r\n\n\n//# sourceURL=webpack://dynamic-practice/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;