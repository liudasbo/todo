/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-family: \"Inter\", sans-serif;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n:root {\n  --bg-color: rgb(255, 255, 255);\n  --border-color: rgb(229, 231, 235);\n  --bg-color-primary: rgb(249, 250, 251);\n  --text-color: rgb(17, 24, 39);\n  --icons-color: rgb(107, 114, 128);\n  --hover-color: rgb(243, 244, 246);\n  --primary-color-btn: rgb(17, 24, 39);\n  --primary-color-btn-hover: rgb(55, 65, 81);\n  --input-bg: rgb(255, 255, 255);\n}\n\n:root.dark {\n  --bg-color: rgb(31, 41, 55);\n  --border-color: rgb(55, 65, 81);\n  --bg-color-primary: rgb(17, 24, 39);\n  --text-color: rgb(255, 255, 255);\n  --icons-color: rgb(156, 163, 175);\n  --hover-color: rgb(55, 65, 81);\n  --primary-color-btn: rgb(107, 114, 128);\n  --primary-color-btn-hover: rgb(55, 65, 81);\n  --input-bg: #d1d5db;\n}\n\nheader {\n  height: 70px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n  background-color: var(--bg-color);\n  border-bottom: 1px solid var(--border-color);\n  color: var(--text-color);\n}\nheader .logo {\n  font-size: 2rem;\n  font-weight: bold;\n  text-decoration: none;\n  color: var(--text-color);\n}\nheader .material-symbols-outlined {\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n}\nheader .material-symbols-outlined:hover {\n  background-color: var(--hover-color);\n}\n\n.menu {\n  background-color: var(--bg-color);\n  padding: 20px;\n  max-width: 350px;\n  width: 100%;\n  border-right: 1px solid var(--border-color);\n  color: var(--text-color);\n}\n.menu ul {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.menu ul li {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.menu ul li:hover {\n  background-color: var(--hover-color);\n}\n.menu .menu__default-projects {\n  border-bottom: 1px solid var(--border-color);\n  margin-bottom: 20px;\n}\n.menu .menu__user-projects h3 {\n  margin-bottom: 10px;\n  font-size: 1.25rem;\n}\n.menu .menu__user-projects .deleteProjectBtn {\n  margin-left: auto;\n}\n.menu .menu__user-projects button {\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  background-color: var(--primary-color-btn);\n  color: white;\n  font-weight: bold;\n  width: 100%;\n}\n.menu .menu__user-projects button:hover {\n  background-color: var(--primary-color-btn-hover);\n}\n.menu .active {\n  font-weight: bold;\n  background-color: var(--hover-color);\n}\n.menu .menu__form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.menu .menu__form .menu__form-buttons {\n  display: flex;\n  gap: 10px;\n}\n.menu .menu__form .menu__form-buttons button:first-child {\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  background-color: var(--primary-color-btn);\n  color: white;\n  font-weight: bold;\n  background-color: rgb(22, 101, 52);\n}\n.menu .menu__form .menu__form-buttons button:first-child:hover {\n  background-color: var(--primary-color-btn-hover);\n}\n.menu .menu__form .menu__form-buttons button:first-child:hover {\n  background-color: rgb(22, 163, 74);\n}\n.menu .menu__form .menu__form-buttons button:last-child {\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  background-color: var(--primary-color-btn);\n  color: white;\n  font-weight: bold;\n  background-color: rgb(159, 18, 57);\n}\n.menu .menu__form .menu__form-buttons button:last-child:hover {\n  background-color: var(--primary-color-btn-hover);\n}\n.menu .menu__form .menu__form-buttons button:last-child:hover {\n  background-color: rgb(225, 29, 72);\n}\n.menu .menu__form input {\n  border-radius: 5px;\n  border: 1px solid var(--border-color);\n  padding: 8px;\n  background-color: var(--input-bg);\n  outline: none;\n}\n.menu .menu__form input:focus {\n  border: 1px solid rgb(59, 130, 246);\n  outline: 1px solid rgb(59, 130, 246);\n}\n.menu .hide {\n  display: none;\n}\n\n.hide {\n  display: none;\n}\n\nmain {\n  background-color: var(--bg-color-primary);\n  min-height: calc(100vh - 70px);\n  display: flex;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n  margin: 20px;\n}\n.content button {\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  background-color: var(--primary-color-btn);\n  color: white;\n  font-weight: bold;\n}\n.content button:hover {\n  background-color: var(--primary-color-btn-hover);\n}\n.content .content__form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.content .content__form .content__inputs {\n  display: flex;\n  gap: 10px;\n}\n.content .content__form .content__inputs input {\n  border-radius: 5px;\n  border: 1px solid var(--border-color);\n  padding: 8px;\n  background-color: var(--input-bg);\n  outline: none;\n}\n.content .content__form .content__inputs input:focus {\n  border: 1px solid rgb(59, 130, 246);\n  outline: 1px solid rgb(59, 130, 246);\n}\n.content .content__form .content__inputs input[type=text] {\n  width: 100%;\n}\n.content .content__form .content__inputs input[type=date] {\n  width: 30%;\n}\n.content .content__form .content__buttons {\n  display: flex;\n  gap: 10px;\n}\n.content .content__form .content__buttons button {\n  width: 100%;\n}\n.content .content__form .content__buttons button:first-child {\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  background-color: var(--primary-color-btn);\n  color: white;\n  font-weight: bold;\n  background-color: rgb(22, 101, 52);\n}\n.content .content__form .content__buttons button:first-child:hover {\n  background-color: var(--primary-color-btn-hover);\n}\n.content .content__form .content__buttons button:first-child:hover {\n  background-color: rgb(22, 163, 74);\n}\n.content .content__form .content__buttons button:last-child {\n  border-radius: 5px;\n  padding: 10px;\n  cursor: pointer;\n  border: none;\n  background-color: var(--primary-color-btn);\n  color: white;\n  font-weight: bold;\n  background-color: rgb(159, 18, 57);\n}\n.content .content__form .content__buttons button:last-child:hover {\n  background-color: var(--primary-color-btn-hover);\n}\n.content .content__form .content__buttons button:last-child:hover {\n  background-color: rgb(225, 29, 72);\n}\n.content .hide {\n  display: none;\n}\n\n.content__task-list {\n  border-radius: 5px;\n  padding: 20px;\n  background-color: var(--bg-color);\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: fit-content;\n}\n.content__task-list h2 {\n  border-bottom: 1px solid var(--border-color);\n  padding-bottom: 20px;\n  font-size: 1.5rem;\n}\n.content__task-list ul {\n  margin-top: 20px;\n}\n.content__task-list ul li {\n  border: 1px solid var(--border-color);\n  padding: 5px;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.content__task-list ul li:hover {\n  border: 1px solid var(--text-color);\n}\n.content__task-list ul li .left__task-side, .content__task-list ul li .right__task-side {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.content__task-list ul li .left__task-side .material-symbols-outlined, .content__task-list ul li .right__task-side .material-symbols-outlined {\n  border-radius: 5px;\n  padding: 5px;\n  cursor: pointer;\n}\n.content__task-list ul li .left__task-side .material-symbols-outlined:hover, .content__task-list ul li .right__task-side .material-symbols-outlined:hover {\n  background-color: var(--hover-color);\n}\n.content__task-list ul li .right__task-side {\n  margin-left: auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _modules_themeSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/themeSettings */ \"./src/modules/themeSettings.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_addTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addTask */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_addTask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_addTask__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_addProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addProject */ \"./src/modules/addProject.js\");\n/* harmony import */ var _modules_loadProjectList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/loadProjectList */ \"./src/modules/loadProjectList.js\");\n/* harmony import */ var _modules_deleteProject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/deleteProject */ \"./src/modules/deleteProject.js\");\n\n\n\n\n\n\n\n\n\nwindow.onload = (event) => {\n    (0,_modules_loadProjectList__WEBPACK_IMPORTED_MODULE_5__.loadProjectList)();\n};  \n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addProject.js":
/*!***********************************!*\
  !*** ./src/modules/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/modules/localStorage.js\");\n\n\n// toggle project form\nconst showProjectFormButton = document.querySelector('#showProjectFormBtn');\nshowProjectFormButton.addEventListener('click', toggleProjectForm);\n\nconst cancelProjectFormButton = document.querySelector('#cancelProjectFormBtn');\ncancelProjectFormButton.addEventListener('click', toggleProjectForm);\n\nfunction toggleProjectForm(event) {\n    event.preventDefault();\n\n    const projectForm = document.querySelector('.menu__form');\n    const projectInput = document.querySelector('#projectInput');\n\n    if (projectForm.classList.contains('hide')) {\n        projectForm.classList.remove('hide');\n        showProjectFormButton.classList.add('hide');\n        projectInput.focus();\n    } else {\n        projectForm.classList.add('hide');\n        showProjectFormButton.classList.remove('hide');\n        projectInput.value = '';\n    }\n}\n\nconst addProjectButton = document.querySelector('#addProjectBtn');\naddProjectButton.addEventListener('click', addProject);\n\nfunction addProject() {\n    const projectInputValue = document.querySelector('#projectInput').value;\n    \n    if (isProjectNameValid(projectInputValue)) {\n\n        const newProject = projectInputValue;\n\n        _localStorage__WEBPACK_IMPORTED_MODULE_0__.storage.addProject(newProject);\n    } \n\n    toggleProjectForm(event);\n}\n\nconst isProjectNameValid = (projectName) => {\n    if (projectName === '') {\n        alert(\"Project name can't be empty\")\n        return false;\n    } else if (_localStorage__WEBPACK_IMPORTED_MODULE_0__.storage.getProjectsNames().includes(projectName)) {\n        alert(`Project ${projectName} already exists`)\n        return false;\n    } else if (projectName.length > 30) {\n        alert(\"Project name can't be greater than 30 characters\")\n        return false;\n    }\n\n    return true;\n}\n\n//# sourceURL=webpack://todo/./src/modules/addProject.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ (() => {

eval("// toggle task form\nconst showTaskFormButton = document.querySelector('#showTaskFromBtn');\nshowTaskFormButton.addEventListener('click', toggleTaskForm);\n\nconst cancelTaskFormBtn = document.querySelector('#cancelTaskFormBtn');\ncancelTaskFormBtn.addEventListener('click', toggleTaskForm);\n\nfunction toggleTaskForm(event) {\n    event.preventDefault()\n\n    const taskForm = document.querySelector('.content__form');\n    const taskTextInput = document.querySelector('#taskTextInput');\n    const taskDateInput = document.querySelector('#taskDateInput');\n\n    if (taskForm.classList.contains('hide')) {\n        taskForm.classList.remove('hide');\n        showTaskFormButton.classList.add('hide');\n        taskTextInput.focus();\n    } else {\n        taskForm.classList.add('hide');\n        showTaskFormButton.classList.remove('hide');\n        taskTextInput.value = '';\n        taskDateInput.value = '';\n    }\n}\n\n// add task\nconst addTaskButton = document.querySelector('#addTaskBtn');\naddTaskButton.addEventListener('click', addTask);\n\nfunction addTask() {\n    toggleTaskForm(event);\n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/deleteProject.js":
/*!**************************************!*\
  !*** ./src/modules/deleteProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/modules/localStorage.js\");\n\n\nfunction deleteProject(deleteProjectButtons) {\n    deleteProjectButtons.forEach((button) => {\n        button.addEventListener('click', () => {\n            const projectName = button.parentNode.querySelector('p').textContent;\n            _localStorage__WEBPACK_IMPORTED_MODULE_0__.storage.deleteProjectByName(projectName);\n        })\n    })\n}\n\n//# sourceURL=webpack://todo/./src/modules/deleteProject.js?");

/***/ }),

/***/ "./src/modules/loadProjectList.js":
/*!****************************************!*\
  !*** ./src/modules/loadProjectList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadProjectList: () => (/* binding */ loadProjectList)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _themeSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themeSettings */ \"./src/modules/themeSettings.js\");\n\n\n\nfunction loadProjectList() {\n    let projectsNames = _localStorage__WEBPACK_IMPORTED_MODULE_0__.storage.getProjectsNames();\n    const projectsList = document.querySelector('.menu__user-projects ul');\n\n    // Filter default projects\n    projectsNames = projectsNames.filter(name => name !== \"All tasks\" && name !== \"Today\" && name !== \"This week\");\n\n    projectsList.innerHTML = ''\n\n    projectsNames.forEach((projectName) => {\n        projectsList.innerHTML += `\n        <li>\n            <span class=\"material-symbols-outlined\">inventory_2</span>\n            <p>${projectName}</p>\n            <span class=\"material-symbols-outlined deleteProjectBtn\">delete</span>\n         </li>\n        `;\n    })\n\n    ;(0,_themeSettings__WEBPACK_IMPORTED_MODULE_1__.updateMenuBtnSelector)();\n}\n\n\n//# sourceURL=webpack://todo/./src/modules/loadProjectList.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveThemeToLocalStorage: () => (/* binding */ saveThemeToLocalStorage),\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _loadProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadProjectList */ \"./src/modules/loadProjectList.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\n\nfunction saveThemeToLocalStorage(theme) {\n    localStorage.setItem('theme', theme);\n}\n\nclass LocalStorageManager {\n    constructor(key) {\n        this.key = key;\n        this.data = this.loadFromLocalStorage();\n\n        // Load default projects\n        const defaultProjectsExist = this.data.some(project => ['All tasks', 'Today', 'This week'].includes(project.name));\n        if (!defaultProjectsExist) {\n            this.data.push(new _project__WEBPACK_IMPORTED_MODULE_1__.Project('All tasks'));\n            this.data.push(new _project__WEBPACK_IMPORTED_MODULE_1__.Project('Today'));\n            this.data.push(new _project__WEBPACK_IMPORTED_MODULE_1__.Project('This week'));\n            this.saveToLocalStorage();\n        }\n    }\n\n    loadFromLocalStorage() {\n        const data = localStorage.getItem(this.key);\n        return data ? JSON.parse(data) : [];\n    }\n\n    saveToLocalStorage() {\n        localStorage.setItem(this.key, JSON.stringify(this.data));\n    }\n\n    addProject(project) {\n        const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(project);\n        this.data.push(newProject);\n        this.saveToLocalStorage();\n        (0,_loadProjectList__WEBPACK_IMPORTED_MODULE_0__.loadProjectList)();\n    }\n\n    getProjectsNames() {\n        const names = this.data.map(project => project.name);\n        return names;\n    }\n\n    deleteProjectByName(name) {\n        this.data = this.data.filter(project => project.name !== name);\n        this.saveToLocalStorage();\n        (0,_loadProjectList__WEBPACK_IMPORTED_MODULE_0__.loadProjectList)();\n    }\n}\n\nconst storage = new LocalStorageManager('todoList');\n\n//# sourceURL=webpack://todo/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setTasks(tasks) {\n        this.tasks = tasks;\n    }\n\n    getTasks(tasks) {\n        return this.tasks;\n    }\n}\n\n//# sourceURL=webpack://todo/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/themeSettings.js":
/*!**************************************!*\
  !*** ./src/modules/themeSettings.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateMenuBtnSelector: () => (/* binding */ updateMenuBtnSelector)\n/* harmony export */ });\n/* harmony import */ var _deleteProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteProject */ \"./src/modules/deleteProject.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/modules/localStorage.js\");\n\n\n\nconst themeButton = document.querySelector('#themeBtn');\nthemeButton.addEventListener('click', themeToggle);\n\nfunction themeToggle() {\n    const root = document.documentElement;\n    const theme = localStorage.getItem('theme');\n\n    if (theme === 'dark') {\n        root.classList.remove('dark');\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveThemeToLocalStorage)('light');\n        themeButton.textContent = 'dark_mode'\n    } else {\n        root.classList.add('dark');\n        (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveThemeToLocalStorage)('dark');\n        themeButton.textContent = 'light_mode'\n    }\n}\n\nfunction loadTheme() {\n    const root = document.documentElement;\n    const theme = localStorage.getItem('theme');\n\n    if (theme === 'dark') {\n        root.classList.add('dark');\n    } else {\n        root.classList.remove('dark');\n    }\n}\n\nloadTheme();\n\nconst closeMenuButton = document.querySelector('#closeMenuBtn');\ncloseMenuButton.addEventListener('click', toggleMenu);\n\nfunction toggleMenu() {\n    const menu = document.querySelector('.menu');\n\n    if (menu.classList.contains('hide')) {\n        menu.classList.remove('hide');\n        closeMenuButton.textContent = 'close';\n    } else {\n        menu.classList.add('hide');\n        closeMenuButton.textContent = 'menu';\n    }\n}\n\n// updates menu buttons selectors\nfunction updateMenuBtnSelector() {\n    const updatedButtons = document.querySelectorAll('.menu ul li');\n    updateMenuBtnStyle(updatedButtons);\n\n    const deleteProjectButtons = document.querySelectorAll('.deleteProjectBtn');\n    (0,_deleteProject__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(deleteProjectButtons);\n}\n\nfunction updateMenuBtnStyle(updatedButtons) {\n    const menuButtons = updatedButtons;\n    let lastButton = menuButtons[0];\n\n    menuButtons.forEach((button) => {\n        button.addEventListener('click', () => {\n            if (lastButton) {\n                lastButton.classList.remove('active');\n            }\n            button.classList.add('active');\n            lastButton = button;\n        })\n    })\n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/modules/themeSettings.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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