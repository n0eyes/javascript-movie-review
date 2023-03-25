/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/common.css':
      /*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/common.css ***!
  \*************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-size: 14px;\\n  background-color: #222222;\\n  color: #fff;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\n#app {\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n.app-container {\\n  display: flex;\\n  flex-direction: column;\\n\\n  width: 100%;\\n  height: 100%;\\n}\\n\\nmain {\\n  flex-grow: 1;\\n  width: 100%;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\n.item-view {\\n  height: 100%;\\n\\n  padding: 0 134px;\\n  margin: 0 auto;\\n}\\n\\n@media (max-width: 834px) {\\n  .item-view {\\n    padding: 0 40px;\\n  }\\n}\\n\\n@media (max-width: 420px) {\\n  .item-view {\\n    padding: 0 29px;\\n  }\\n}\\n\\n.item-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\n.item-list-layout {\\n  position: relative;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  flex-grow: 1;\\n\\n  padding: 48px 0;\\n}\\n\\n.item-list-layout > h1 {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.item-list-layout {\\n  position: relative;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  flex-grow: 1;\\n\\n  padding: 48px 0;\\n}\\n\\n.item-list-layout > h1 {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.item-list {\\n  display: grid;\\n  justify-content: space-between;\\n  grid-template-columns: repeat(auto-fit, 180px);\\n  grid-column-gap: 64px;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n@media (min-width: 820px) {\\n  .item-list {\\n    grid-template-columns: repeat(3, 180px);\\n  }\\n}\\n\\n@media (max-width: 420px) {\\n  .item-list {\\n    grid-template-columns: repeat(auto-fit, 140px);\\n    grid-column-gap: 36px;\\n  }\\n}\\n\\n@media (min-width: 1340px) {\\n  .item-list {\\n    grid-template-columns: repeat(4, 180px);\\n  }\\n}\\n\\n@media (min-width: 1820px) {\\n  .item-list {\\n    grid-template-columns: repeat(5, 180px);\\n  }\\n}\\n\\n.item--movie,\\n.item--skeleton {\\n  height: 370px;\\n\\n  margin: 24px 0;\\n}\\n\\n@media (max-width: 420px) {\\n  .item--movie,\\n  .item--skeleton {\\n    height: 300px;\\n\\n    margin: 12px 0;\\n  }\\n}\\n\\n.item--movie > a {\\n  display: flex;\\n  flex-direction: column;\\n\\n  height: 100%;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n\\n  height: 100%;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 100%;\\n  aspect-ratio: 180 / 270;\\n  background-size: contain;\\n}\\n\\n.item-title {\\n  margin-top: 16px;\\n\\n  font-size: 1.2rem;\\n  font-weight: bold;\\n\\n  overflow-x: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n.item-score {\\n  margin-top: 16px;\\n  font-size: 1.2rem;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \'loading\';\\n  content: \'loading\';\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: #f33f3f;\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\nheader {\\n  width: 100vw;\\n  height: 72px;\\n  background-color: #222;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 8px 20px;\\n  border-bottom: 1px solid white;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  cursor: pointer;\\n  user-select: none;\\n  font-size: 2rem;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n  color: #f33f3f;\\n}\\n\\nheader > .search-box {\\n  background: #fff;\\n  padding: 8px;\\n  border-radius: 4px;\\n}\\n\\n.search-input {\\n  border: 0;\\n}\\n\\n@media (max-width: 420px) {\\n  .search-input.hidden {\\n    display: none;\\n  }\\n}\\nheader .search-box > form > .search-button {\\n  width: 14px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\'./search_button.png\') transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n.movie-overview-modal-container {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n}\\n.movie-overview-modal {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n\\n  display: flex;\\n  flex-direction: column;\\n\\n  width: 66vw;\\n\\n  border-radius: 8px;\\n  background: #212122;\\n}\\n\\n@media (max-width: 1024px) {\\n  .movie-overview-modal {\\n    width: 85vw;\\n  }\\n}\\n\\n@media (max-width: 420px) {\\n  .movie-overview-modal {\\n    top: auto;\\n    left: 0;\\n    bottom: 0;\\n\\n    width: 100vw;\\n    height: 60vh;\\n\\n    transform: none;\\n\\n    padding-bottom: 36px;\\n  }\\n\\n  .movie-overview-modal__poster {\\n    display: none;\\n  }\\n}\\n\\n.modal-backdrop {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n\\n  width: 100vw;\\n  height: 100vh;\\n\\n  background: rgba(0, 0, 0, 0.6);\\n}\\n\\n.movie-overview-modal__header {\\n  position: relative;\\n\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  width: 100%;\\n  height: 60px;\\n\\n  border-bottom: 1px solid rgba(241, 241, 241, 0.25);\\n}\\n\\n@media (max-width: 420px) {\\n  .movie-overview-modal__header {\\n    padding: 0 32px;\\n  }\\n}\\n\\n.movie-overview-modal__title {\\n  width: 100%;\\n\\n  padding: 0 50px;\\n  font-size: 20px;\\n  font-weight: 600;\\n\\n  text-align: center;\\n\\n  overflow-x: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap;\\n}\\n\\n@media (max-width: 420px) {\\n  .movie-overview-modal__title {\\n    padding: 0;\\n    text-align: left;\\n  }\\n}\\n\\n.movie-overview-modal__close-btn {\\n  position: absolute;\\n  width: 36px;\\n  height: 36px;\\n\\n  right: 12px;\\n\\n  border: none;\\n  border-radius: 50%;\\n\\n  color: white;\\n  background: #383839;\\n}\\n\\n.movie-overview-modal__body {\\n  display: flex;\\n  flex-grow: 1;\\n\\n  width: 100%;\\n  padding: 36px;\\n}\\n\\n@media (max-width: 420px) {\\n  .movie-overview-modal__body {\\n    padding: 36px 0 0 0;\\n  }\\n}\\n\\n.movie-overview-modal__left-aside {\\n  width: 40%;\\n}\\n\\n@media (max-width: 420px) {\\n  .movie-overview-modal__left-aside {\\n    width: 0;\\n  }\\n}\\n\\n.movie-overview-modal__poster {\\n  width: 100%;\\n  max-height: 100%;\\n}\\n\\n.movie-overview-modal__right-aside {\\n  display: flex;\\n  flex-direction: column;\\n  width: 60%;\\n  margin-left: 36px;\\n}\\n\\n@media (max-width: 420px) {\\n  .movie-overview-modal__right-aside {\\n    width: 100%;\\n    margin: 0;\\n    padding: 0 32px;\\n  }\\n}\\n.movie-overview-modal__subInfo {\\n  display: flex;\\n  align-items: center;\\n  height: 20px;\\n}\\n\\n.movie-overview-modal__subInfo > div {\\n  display: flex;\\n  align-items: center;\\n  margin-left: 16px;\\n  gap: 5px;\\n}\\n\\n.movie-overview-modal__subInfo img {\\n  height: 20px;\\n}\\n\\n.movie-overview-modal__overview {\\n  flex-grow: 1;\\n  margin-top: 16px;\\n\\n  overflow-y: scroll;\\n}\\n\\n.movie-overview-modal__my-vote-container {\\n  display: flex;\\n  align-items: center;\\n  gap: 12px;\\n\\n  height: 64px;\\n\\n  margin-top: 16px;\\n  padding: 0 16px;\\n\\n  border-radius: 16px;\\n  background: #383839;\\n}\\n\\n.movie-overview-modal__my-vote-container > span,\\ndiv {\\n  flex-shrink: 0;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/reset.css':
      /*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/reset.css ***!
  \************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \'\';\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?'
        );

        /***/
      },

    /***/ './src/styles/common.css':
      /*!*******************************!*\
  !*** ./src/styles/common.css ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./common.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/common.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/common.css?'
        );

        /***/
      },

    /***/ './src/styles/reset.css':
      /*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./reset.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/styles/reset.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/styles/reset.css?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
        );

        /***/
      },

    /***/ './src/apis/index.ts':
      /*!***************************!*\
  !*** ./src/apis/index.ts ***!
  \***************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "fetchMovieGenres": () => (/* binding */ fetchMovieGenres),\n/* harmony export */   "fetchMoviesByKeyword": () => (/* binding */ fetchMoviesByKeyword),\n/* harmony export */   "fetchPopularMovies": () => (/* binding */ fetchPopularMovies),\n/* harmony export */   "waitFor": () => (/* binding */ waitFor)\n/* harmony export */ });\n/* harmony import */ var _domain_MovieChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/MovieChart */ "./src/domain/MovieChart.ts");\n/* harmony import */ var _validation_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/errorHandler */ "./src/validation/errorHandler.ts");\n/* harmony import */ var _validation_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/errors */ "./src/validation/errors.ts");\n\n\n\nconst REDIRECT_SERVER_HOST = \'https://ornate-swan-ce5a5e.netlify.app\';\nconst fetchQuery = async (path, init) => {\n    const url = new URL(path, REDIRECT_SERVER_HOST);\n    const response = await fetch(url, init);\n    const body = await response.json();\n    if (!response.ok)\n        throw (0,_validation_errorHandler__WEBPACK_IMPORTED_MODULE_1__.handleStatusCode)(response.status);\n    return body;\n};\nconst fetchMoviesByKeyword = (keyword, page) => {\n    return fetchQuery(`tmdb/search/movie?query=${keyword}&${page ? `page=${page}` : \'\'}&language=ko`).then((movieChart) => new _domain_MovieChart__WEBPACK_IMPORTED_MODULE_0__.MovieChart(movieChart));\n};\nconst fetchPopularMovies = (page = 1) => {\n    return fetchQuery(`tmdb/movie/popular?page=${page}&language=ko`).then((movieChart) => new _domain_MovieChart__WEBPACK_IMPORTED_MODULE_0__.MovieChart(movieChart));\n};\nconst fetchMovieGenres = () => {\n    return fetchQuery(`tmdb/genre/movie/list?`);\n};\nconst waitFor = async (promise) => {\n    try {\n        const data = await promise;\n        return [data, null];\n    }\n    catch (error) {\n        return [undefined, new _validation_errors__WEBPACK_IMPORTED_MODULE_2__.CustomError({ code: error })];\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/apis/index.ts?'
        );

        /***/
      },

    /***/ './src/apis/movieChart.ts':
      /*!********************************!*\
  !*** ./src/apis/movieChart.ts ***!
  \********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "fetchMoviesByKeyword": () => (/* binding */ fetchMoviesByKeyword),\n/* harmony export */   "fetchPopularMovies": () => (/* binding */ fetchPopularMovies),\n/* harmony export */   "waitFor": () => (/* binding */ waitFor)\n/* harmony export */ });\n/* harmony import */ var _domain_MovieChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/MovieChart */ "./src/domain/MovieChart.ts");\n/* harmony import */ var _validation_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/errorHandler */ "./src/validation/errorHandler.ts");\n/* harmony import */ var _validation_errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validation/errors */ "./src/validation/errors.ts");\n\n\n\nconst REDIRECT_SERVER_HOST = \'https://ornate-swan-ce5a5e.netlify.app\';\nconst fetchQuery = async (path, init) => {\n    const url = new URL(path, REDIRECT_SERVER_HOST);\n    const response = await fetch(url, init);\n    const body = await response.json();\n    if (!response.ok)\n        throw (0,_validation_errorHandler__WEBPACK_IMPORTED_MODULE_1__.handleStatusCode)(response.status);\n    return body;\n};\nconst fetchMoviesByKeyword = (keyword, page) => {\n    return fetchQuery(`tmdb/search/movie?query=${keyword}&${page ? `page=${page}` : \'\'}&language=ko`).then((movieChart) => new _domain_MovieChart__WEBPACK_IMPORTED_MODULE_0__.MovieChart(movieChart));\n};\nconst fetchPopularMovies = (page = 1) => {\n    return fetchQuery(`tmdb/movie/popular?page=${page}&language=ko`).then((movieChart) => new _domain_MovieChart__WEBPACK_IMPORTED_MODULE_0__.MovieChart(movieChart));\n};\nconst waitFor = async (promise, options) => {\n    try {\n        const data = await promise;\n        options?.onSuccess();\n        return [data, null];\n    }\n    catch (error) {\n        return [undefined, new _validation_errors__WEBPACK_IMPORTED_MODULE_2__.CustomError({ code: error })];\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/apis/movieChart.ts?'
        );

        /***/
      },

    /***/ './src/components/App/actions.ts':
      /*!***************************************!*\
  !*** ./src/components/App/actions.ts ***!
  \***************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent),\n/* harmony export */   "MovieChartComponent": () => (/* binding */ MovieChartComponent)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.ts");\n/* harmony import */ var _MovieChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MovieChart */ "./src/components/MovieChart/index.ts");\n\n\n\nconst AppActions = () => {\n    const HeaderComponent = (props) => {\n        (0,_core__WEBPACK_IMPORTED_MODULE_0__.absorb)(\'#Header\', (0,_Header__WEBPACK_IMPORTED_MODULE_1__.Header)(props));\n    };\n    const MovieChartComponent = (props) => {\n        (0,_core__WEBPACK_IMPORTED_MODULE_0__.absorb)(\'#MovieChart\', (0,_MovieChart__WEBPACK_IMPORTED_MODULE_2__.MovieChart)(props));\n        return ``;\n    };\n    return { HeaderComponent, MovieChartComponent };\n};\nconst { HeaderComponent, MovieChartComponent } = AppActions();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/App/actions.ts?'
        );

        /***/
      },

    /***/ './src/components/App/index.ts':
      /*!*************************************!*\
  !*** ./src/components/App/index.ts ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "App": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/components/App/actions.ts");\n\n\n\nconst App = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)(() => {\n    const [keyword, setKeyword] = (0,_core__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n    const $events = [];\n    const handleKeyword = (keyword) => {\n        setKeyword(keyword);\n    };\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(` \n      <div class="app-container">\n        <fragment id="Header">${(0,_actions__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent)({ handleKeyword })}</fragment>\n        <fragment id="MovieChart">${(0,_actions__WEBPACK_IMPORTED_MODULE_2__.MovieChartComponent)({ keyword })}</fragment>\n        <div class=\'fetch-more-line\' />    \n      </div>\n    `);\n    return [$template, $events];\n});\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/App/index.ts?'
        );

        /***/
      },

    /***/ './src/components/Header/index.ts':
      /*!****************************************!*\
  !*** ./src/components/Header/index.ts ***!
  \****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ \"./src/core/index.ts\");\n/* harmony import */ var _utils_common_formData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/common/formData */ \"./src/utils/common/formData.ts\");\n/* harmony import */ var _utils_common_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common/responsive */ \"./src/utils/common/responsive.ts\");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../utils/common/domHelper */ \"./src/utils/common/domHelper.ts\");\n\n\n\n\n\nconst Header = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)(({ handleKeyword }) => {\n    const [keyword, setKeyword] = (0,_core__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n    const $events = [\n        {\n            event: 'submit',\n            callback(e) {\n                e.preventDefault();\n                if (e.target && e.target === (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_3__.$)('.search-form') && (0,_utils_common_formData__WEBPACK_IMPORTED_MODULE_1__.isFormElement)(e.target)) {\n                    const fields = (0,_utils_common_formData__WEBPACK_IMPORTED_MODULE_1__.getFormFields)(e.target, ['keyword']);\n                    setKeyword(fields['keyword']);\n                    handleKeyword(fields['keyword']);\n                    (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_3__.$)('.search-input')?.classList.add('hidden');\n                }\n            },\n        },\n        {\n            event: 'click',\n            callback(e) {\n                if ((0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_3__.getClosest)(e.target, '.search-box')) {\n                    (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_3__.$)('.search-input')?.classList.remove('hidden');\n                    (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_3__.$)('.search-input').focus();\n                }\n            },\n        },\n    ];\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_3__.getElement)(`\n    <header>\n      <h1><a href=\"./\"><img src=\"./logo.png\" alt=\"MovieList 로고\" /></a></h1>\n      <div class=\"search-box\">\n        <form class=\"search-form\">\n          <input class='search-input hidden' type=\"text\" name=\"keyword\" placeholder=\"검색\" value=\"${keyword}\" />\n          <button type=${_utils_common_responsive__WEBPACK_IMPORTED_MODULE_2__.isMobile ? 'button' : 'submit'} class=\"search-button\">검색</button>\n        </form>\n      </div>\n    </header>\n  `);\n    return [$template, $events];\n});\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Header/index.ts?"
        );

        /***/
      },

    /***/ './src/components/Movie/index.ts':
      /*!***************************************!*\
  !*** ./src/components/Movie/index.ts ***!
  \***************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Movie": () => (/* binding */ Movie)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n\n\nconst Movie = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)((props) => {\n    const { movieInfo: { poster_path, title, vote_average, id }, } = props;\n    const [isLoading, setIsLoading] = (0,_core__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    (0,_core__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        const img = new Image();\n        img.src = `https://image.tmdb.org/t/p/w200/${poster_path}`;\n        img.onload = () => setIsLoading(false);\n    }, []);\n    const $events = [];\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(`\n      <li class="item--movie" data-id=${id}>\n        <a href="#">\n          <div class="item-card movie">\n            ${isLoading\n        ? `<div class="item-thumbnail skeleton"></div>`\n        : `<img\n                    class="item-thumbnail"\n                    src=https://image.tmdb.org/t/p/w400/${poster_path}\n                    loading="lazy"\n                    alt=${title} />`}\n            <p class="item-title">${title}</p>\n            <p class="item-score"><img src="./star_filled.png" alt="별점" />${vote_average}</p>\n          </div>\n        </a>\n      </li>\n  `);\n    return [$template, $events];\n});\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Movie/index.ts?'
        );

        /***/
      },

    /***/ './src/components/MovieChart/action.ts':
      /*!*********************************************!*\
  !*** ./src/components/MovieChart/action.ts ***!
  \*********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MovieListComponent": () => (/* binding */ MovieListComponent),\n/* harmony export */   "MovieOverviewModalComponent": () => (/* binding */ MovieOverviewModalComponent),\n/* harmony export */   "SkeletonMovieListComponent": () => (/* binding */ SkeletonMovieListComponent)\n/* harmony export */ });\n/* harmony import */ var _MovieList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MovieList */ "./src/components/MovieList/index.ts");\n/* harmony import */ var _SkeletonMovieList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SkeletonMovieList */ "./src/components/SkeletonMovieList/index.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _MovieOverviewModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MovieOverviewModal */ "./src/components/MovieOverviewModal/index.ts");\n\n\n\n\nconst MovieChartActions = () => {\n    const MovieListComponent = (props) => {\n        (0,_core__WEBPACK_IMPORTED_MODULE_2__.absorb)(\'#MovieList\', (0,_MovieList__WEBPACK_IMPORTED_MODULE_0__.MovieList)(props));\n    };\n    const SkeletonMovieListComponent = () => {\n        (0,_core__WEBPACK_IMPORTED_MODULE_2__.absorb)(\'#SkeletonList\', (0,_SkeletonMovieList__WEBPACK_IMPORTED_MODULE_1__.SkeletonMovieList)({}));\n    };\n    const MovieOverviewModalComponent = (props) => {\n        (0,_core__WEBPACK_IMPORTED_MODULE_2__.absorb)(`#MovieOverviewModal`, (0,_MovieOverviewModal__WEBPACK_IMPORTED_MODULE_3__.MovieOverviewModal)(props));\n    };\n    return { MovieListComponent, SkeletonMovieListComponent, MovieOverviewModalComponent };\n};\nconst { MovieListComponent, SkeletonMovieListComponent, MovieOverviewModalComponent } = MovieChartActions();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieChart/action.ts?'
        );

        /***/
      },

    /***/ './src/components/MovieChart/index.ts':
      /*!********************************************!*\
  !*** ./src/components/MovieChart/index.ts ***!
  \********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MovieChart": () => (/* binding */ MovieChart)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/components/MovieChart/action.ts");\n/* harmony import */ var _hooks_useMovieChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useMovieChart */ "./src/hooks/useMovieChart.ts");\n/* harmony import */ var _constants_movieChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/movieChart */ "./src/constants/movieChart.ts");\n/* harmony import */ var _utils_common_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/common/observer */ "./src/utils/common/observer.ts");\n\n\n\n\n\n\nconst MovieChart = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)(({ keyword }) => {\n    const { values: { movieChart, movieList, isLoading, focusedMovie, isOpen }, handlers: { fetchMore, closeModal, onClickMovie, setMyVote }, } = (0,_hooks_useMovieChart__WEBPACK_IMPORTED_MODULE_3__.useMovieChart)(keyword);\n    const needMoreFetch = !isLoading && movieChart?.movieChartInfo.page !== movieChart?.movieChartInfo.total_pages;\n    const noResult = !isLoading && !movieChart?.movieChartInfo.total_results;\n    (0,_utils_common_observer__WEBPACK_IMPORTED_MODULE_5__.observer)(\'.fetch-more-line\', {\n        onIntersect() {\n            if (!isLoading && needMoreFetch)\n                fetchMore(keyword);\n        },\n    });\n    const $events = [\n        {\n            event: \'click\',\n            callback: onClickMovie,\n        },\n    ];\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(`\n    <main>\n      <section class="item-view">\n        <h2>지금 인기 있는 영화</h2>\n        <div class="item-list-layout">\n          <fragment id=\'MovieList\'>\n            ${(0,_action__WEBPACK_IMPORTED_MODULE_2__.MovieListComponent)({ movieList })}\n          </fragment>\n          <fragment id=\'SkeletonList\'>\n            ${isLoading ? (0,_action__WEBPACK_IMPORTED_MODULE_2__.SkeletonMovieListComponent)() : \'\'}\n          </fragment>\n          ${noResult ? `<h1>${_constants_movieChart__WEBPACK_IMPORTED_MODULE_4__.NO_RESULT}</h1>` : \'\'}\n        </div>\n      </section>\n      <fragment id="MovieOverviewModal">\n        ${isOpen && focusedMovie\n        ? (0,_action__WEBPACK_IMPORTED_MODULE_2__.MovieOverviewModalComponent)({\n            focusedMovie,\n            closeModal,\n            setMyVote,\n        })\n        : \'\'}\n      </fragment>\n    </main>\n      `);\n    return [$template, $events];\n});\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieChart/index.ts?'
        );

        /***/
      },

    /***/ './src/components/MovieList/action.ts':
      /*!********************************************!*\
  !*** ./src/components/MovieList/action.ts ***!
  \********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MovieComponent": () => (/* binding */ MovieComponent)\n/* harmony export */ });\n/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Movie */ "./src/components/Movie/index.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n\n\nconst MovieListActions = () => {\n    const MovieComponent = (props) => {\n        (0,_core__WEBPACK_IMPORTED_MODULE_1__.absorb)(`#Movie-${props.movieInfo.id}`, (0,_Movie__WEBPACK_IMPORTED_MODULE_0__.Movie)(props));\n    };\n    return { MovieComponent };\n};\nconst { MovieComponent } = MovieListActions();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList/action.ts?'
        );

        /***/
      },

    /***/ './src/components/MovieList/index.ts':
      /*!*******************************************!*\
  !*** ./src/components/MovieList/index.ts ***!
  \*******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MovieList": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/components/MovieList/action.ts");\n\n\n\nconst MovieList = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)((props) => {\n    const { movieList } = props;\n    const $events = [];\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(`\n        <ul class="item-list">\n        ${movieList\n        .map(({ movieInfo }) => `\n          <fragment id="Movie-${movieInfo.id}">\n            ${(0,_action__WEBPACK_IMPORTED_MODULE_2__.MovieComponent)({ movieInfo })}\n          </fragment>`)\n        .join(\'\')}\n        </ul>\n  `);\n    return [$template, $events];\n});\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieList/index.ts?'
        );

        /***/
      },

    /***/ './src/components/MovieOverviewModal/index.ts':
      /*!****************************************************!*\
  !*** ./src/components/MovieOverviewModal/index.ts ***!
  \****************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieOverviewModal\": () => (/* binding */ MovieOverviewModal)\n/* harmony export */ });\n/* harmony import */ var _constants_movieChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/movieChart */ \"./src/constants/movieChart.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ \"./src/core/index.ts\");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/common/domHelper */ \"./src/utils/common/domHelper.ts\");\n\n\n\nconst MovieOverviewModal = (0,_core__WEBPACK_IMPORTED_MODULE_1__.assemble)((props) => {\n    const { focusedMovie: { id, title, overview, vote_average, my_vote, genres, poster_path }, closeModal, setMyVote, } = props;\n    const $events = [\n        {\n            event: 'click',\n            callback(e) {\n                if (e.target === (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.$)('.modal-backdrop') || e.target === (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.$)('.movie-overview-modal__close-btn'))\n                    closeModal();\n            },\n        },\n        {\n            event: 'click',\n            callback(e) {\n                const score = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.getClosest)(e.target, '.vote-star')?.dataset.score;\n                if (score) {\n                    setMyVote({ id, my_vote: Number(score) });\n                }\n            },\n        },\n    ];\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.getElement)(` \n    <div class='movie-overview-modal-container'>\n      <div class='modal-backdrop'></div>\n      <div class='movie-overview-modal'>\n        <section class='movie-overview-modal__header'>\n          <h1 class='movie-overview-modal__title'>${title}</h1>\n          <button class='movie-overview-modal__close-btn'>X</button>\n        </section>\n        <section class='movie-overview-modal__body'>\n          <aside class='movie-overview-modal__left-aside'>\n            <img src=https://image.tmdb.org/t/p/w400/${poster_path} class='movie-overview-modal__poster' alt=${title}/>\n          </aside>\n          <aside class='movie-overview-modal__right-aside'>\n            <div class='movie-overview-modal__subInfo'>\n              <span class='movie-overview__genres'>${genres.join(', ')}</span>\n              <div>\n                <img src=\"./star_filled.png\" class='movie-overview-modal__star-img' alt=\"별점\"/>\n                <span class='movie-overview-modal__vote-average'>${vote_average}</span>\n              </div>\n            </div>\n            <p class='movie-overview-modal__overview'>\n              ${overview.length ? overview : '영화 정보가 없습니다.'}\n            </p>\n            <div class='movie-overview-modal__my-vote-container'>\n              <span>내 별점</span>\n              <div>${getStarByMyVote(my_vote)}</div>\n              <span>${parseMyVote(my_vote)}</span>\n            </div>\n          </aside>\n        </section>\n      </div>\n    </div>\n      \n    `);\n    return [$template, $events];\n});\n\nconst getStarByMyVote = (my_vote) => {\n    const filled = my_vote / 2;\n    const empty = 5 - filled;\n    return Array.from(Array(5))\n        .map((_, i) => {\n        if (i < filled)\n            return `<img class='vote-star' src=\"./star_filled.png\" alt=\"별점\" data-score=${(i + 1) * 2} />`;\n        return `<img class='vote-star' src=\"./star_empty.png\" alt=\"별점\" data-score=${(i + 1) * 2} />`;\n    })\n        .join('');\n};\nconst parseMyVote = (my_vote) => {\n    switch (my_vote) {\n        case 0:\n            return _constants_movieChart__WEBPACK_IMPORTED_MODULE_0__.MY_VOTE[0];\n        case 2:\n            return _constants_movieChart__WEBPACK_IMPORTED_MODULE_0__.MY_VOTE[2];\n        case 4:\n            return _constants_movieChart__WEBPACK_IMPORTED_MODULE_0__.MY_VOTE[4];\n        case 6:\n            return _constants_movieChart__WEBPACK_IMPORTED_MODULE_0__.MY_VOTE[6];\n        case 8:\n            return _constants_movieChart__WEBPACK_IMPORTED_MODULE_0__.MY_VOTE[8];\n        case 10:\n            return _constants_movieChart__WEBPACK_IMPORTED_MODULE_0__.MY_VOTE[10];\n        default:\n            return 'Error';\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/MovieOverviewModal/index.ts?"
        );

        /***/
      },

    /***/ './src/components/SkeletonMovie/index.ts':
      /*!***********************************************!*\
  !*** ./src/components/SkeletonMovie/index.ts ***!
  \***********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "SkeletonMovie": () => (/* binding */ SkeletonMovie)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n\n\nconst SkeletonMovie = (0,_core__WEBPACK_IMPORTED_MODULE_0__.assemble)(() => {\n    const $events = [];\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_1__.getElement)(`\n      <li class="item--skeleton">\n        <a href="#">\n          <div class="item-card">\n            <div class="item-thumbnail skeleton"></div>\n            <div class="item-title skeleton"></div>\n            <div class="item-score skeleton"></div>\n          </div>\n        </a>\n      </li>\n  `);\n    return [$template, $events];\n});\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonMovie/index.ts?'
        );

        /***/
      },

    /***/ './src/components/SkeletonMovieList/action.ts':
      /*!****************************************************!*\
  !*** ./src/components/SkeletonMovieList/action.ts ***!
  \****************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "SkeletonMovieComponent": () => (/* binding */ SkeletonMovieComponent)\n/* harmony export */ });\n/* harmony import */ var _SkeletonMovie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SkeletonMovie */ "./src/components/SkeletonMovie/index.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n\n\nconst SkeletonMovieListActions = () => {\n    const SkeletonMovieComponent = (props) => {\n        (0,_core__WEBPACK_IMPORTED_MODULE_1__.absorb)(`#SkeletonMovie-${props.id}`, (0,_SkeletonMovie__WEBPACK_IMPORTED_MODULE_0__.SkeletonMovie)(props));\n    };\n    return { SkeletonMovieComponent };\n};\nconst { SkeletonMovieComponent } = SkeletonMovieListActions();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonMovieList/action.ts?'
        );

        /***/
      },

    /***/ './src/components/SkeletonMovieList/index.ts':
      /*!***************************************************!*\
  !*** ./src/components/SkeletonMovieList/index.ts ***!
  \***************************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "SkeletonMovieList": () => (/* binding */ SkeletonMovieList)\n/* harmony export */ });\n/* harmony import */ var _constants_movieChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/movieChart */ "./src/constants/movieChart.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./src/components/SkeletonMovieList/action.ts");\n\n\n\n\nconst getDummyArray = (num) => Array(num).fill(\'\').map(Number);\nconst SkeletonMovieList = (0,_core__WEBPACK_IMPORTED_MODULE_1__.assemble)(() => {\n    const $events = [];\n    const $template = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.getElement)(`\n      <ul class="item-list">\n        ${getDummyArray(_constants_movieChart__WEBPACK_IMPORTED_MODULE_0__.DUMMY_AMOUNT)\n        .map((_, id) => `\n          <fragment id="SkeletonMovie-${id}">\n            ${(0,_action__WEBPACK_IMPORTED_MODULE_3__.SkeletonMovieComponent)({ id })}\n          </fragment>\n        `)\n        .join(\'\')}\n      <ul>\n  `);\n    return [$template, $events];\n});\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/SkeletonMovieList/index.ts?'
        );

        /***/
      },

    /***/ './src/constants/errors.ts':
      /*!*********************************!*\
  !*** ./src/constants/errors.ts ***!
  \*********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ERROR_CODE\": () => (/* binding */ ERROR_CODE),\n/* harmony export */   \"ERROR_MESSAGE\": () => (/* binding */ ERROR_MESSAGE),\n/* harmony export */   \"STATUS_CODE\": () => (/* binding */ STATUS_CODE)\n/* harmony export */ });\nconst STATUS_400 = `[ERROR] 잘못된 요청입니다.`;\nconst STATUS_401 = `[ERROR] 인증되지 않은 요청입니다.`;\nconst STATUS_403 = `[ERROR] 접근이 거부되었습니다.`;\nconst STATUS_404 = `[ERROR] 서버 내부 오류가 발생했습니다.`;\nconst STATUS_500 = `[ERROR] 서버 내부 오류가 발생했습니다.`;\nconst UNEXPECTED_ERROR = `[ERROR] 알 수 없는 오류가 발생했습니다.`;\nconst STATUS_CODE = Object.freeze({\n    STATUS_400: 400,\n    STATUS_401: 401,\n    STATUS_403: 403,\n    STATUS_404: 404,\n    STATUS_500: 500,\n});\nconst ERROR_CODE = Object.freeze({\n    UNEXPECTED_ERROR: 'UNEXPECTED_ERROR',\n    STATUS_400: 'STATUS_400',\n    STATUS_401: 'STATUS_401',\n    STATUS_403: 'STATUS_403',\n    STATUS_404: 'STATUS_404',\n    STATUS_500: 'STATUS_500',\n});\nconst ERROR_MESSAGE = Object.freeze({\n    STATUS_400,\n    STATUS_401,\n    STATUS_403,\n    STATUS_404,\n    STATUS_500,\n    UNEXPECTED_ERROR,\n});\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/errors.ts?"
        );

        /***/
      },

    /***/ './src/constants/movieChart.ts':
      /*!*************************************!*\
  !*** ./src/constants/movieChart.ts ***!
  \*************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DUMMY_AMOUNT\": () => (/* binding */ DUMMY_AMOUNT),\n/* harmony export */   \"GENRES\": () => (/* binding */ GENRES),\n/* harmony export */   \"INITIAL_PAGE\": () => (/* binding */ INITIAL_PAGE),\n/* harmony export */   \"LAST_PAGE\": () => (/* binding */ LAST_PAGE),\n/* harmony export */   \"MY_VOTE\": () => (/* binding */ MY_VOTE),\n/* harmony export */   \"NO_RESULT\": () => (/* binding */ NO_RESULT),\n/* harmony export */   \"PAGE\": () => (/* binding */ PAGE),\n/* harmony export */   \"PAGINATION\": () => (/* binding */ PAGINATION)\n/* harmony export */ });\nconst INITIAL_PAGE = 1;\nconst PAGE = 1;\nconst LAST_PAGE = 500;\nconst PAGINATION = 1;\nconst DUMMY_AMOUNT = 20;\nconst NO_RESULT = '검색 결과가 없습니다';\nconst GENRES = {\n    Action: '액션',\n    Adventure: '모험',\n    Animation: '만화',\n    Comedy: '코미디',\n    Crime: '범죄',\n    Documentary: '다큐',\n    Drama: '드라마',\n    Family: '가족',\n    Fantasy: '판타지',\n    History: '역사',\n    Horror: '호러',\n    Music: '음악',\n    Mystery: '미스테리',\n    ['Science Fiction']: 'SF',\n    ['TV Movie']: 'TV 영화',\n    Thriller: '스릴러',\n    War: '전쟁',\n    Western: '서부',\n};\nconst MY_VOTE = {\n    0: '별점을 선택하세요',\n    2: '최악이예요',\n    4: '별로예요',\n    6: '보통이에요',\n    8: '재미있어요',\n    10: '명작이에요',\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/movieChart.ts?"
        );

        /***/
      },

    /***/ './src/core/index.ts':
      /*!***************************!*\
  !*** ./src/core/index.ts ***!
  \***************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "absorb": () => (/* binding */ absorb),\n/* harmony export */   "addEvent": () => (/* binding */ addEvent),\n/* harmony export */   "assemble": () => (/* binding */ assemble),\n/* harmony export */   "render": () => (/* binding */ render),\n/* harmony export */   "useEffect": () => (/* binding */ useEffect),\n/* harmony export */   "useState": () => (/* binding */ useState)\n/* harmony export */ });\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _utils_common_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common/debounce */ "./src/utils/common/debounce.ts");\n\n\n\nfunction Core() {\n    const options = {\n        currentStateKey: 0,\n        currentEffectsKey: 0,\n        states: [],\n        events: [],\n        effects: [],\n        hydrateList: [],\n        root: null,\n        rootComponent: null,\n    };\n    function useState(initialState) {\n        const { currentStateKey: key, states } = options;\n        if (states.length === key)\n            states.push(initialState);\n        const state = states[key];\n        const setState = (newState) => {\n            states[key] = newState;\n            _render();\n        };\n        options.currentStateKey += 1;\n        return [state, setState];\n    }\n    const useEffect = (callback, deps) => {\n        const { currentEffectsKey: key, effects } = options;\n        if (effects.length === key) {\n            effects.push({ deps, callback });\n            callback();\n        }\n        if (JSON.stringify(effects[key].deps) !== JSON.stringify(deps)) {\n            callback();\n            effects[key] = { deps, callback };\n        }\n        options.currentEffectsKey += 1;\n    };\n    const _render = (0,_utils_common_debounce__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => {\n        const { root, rootComponent } = options;\n        const component = rootComponent?.({});\n        if (!root || !component)\n            return;\n        root.innerHTML = \'\';\n        root.appendChild(component);\n        _hydrate();\n        options.currentStateKey = 0;\n        options.currentEffectsKey = 0;\n        options.hydrateList = [];\n        options.events = [];\n    });\n    function render(rootComponent, root) {\n        options.root = root;\n        options.rootComponent = rootComponent;\n        _render();\n    }\n    function absorb(target, component) {\n        options.hydrateList.push([target, component]);\n    }\n    function _hydrate() {\n        options.hydrateList.reverse().forEach(([target, component]) => {\n            (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_0__.replaceComponent)((0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_0__.$)(target), component);\n        });\n    }\n    const addEvent = ({ $element, event, callback }) => {\n        $element.addEventListener(event, callback);\n    };\n    const assemble = (getElement) => (props) => {\n        try {\n            const [$element, $events = []] = getElement(props);\n            if (!$element)\n                throw new Error(\'이벤트를 등록할 엘리먼트가 존재하지 않습니다.\');\n            $events.forEach(({ event, callback }) => addEvent({ $element, event, callback }));\n            return $element;\n        }\n        catch (error) {\n            return null;\n        }\n    };\n    return { useState, useEffect, render, absorb, addEvent, assemble };\n}\nconst { useState, useEffect, render, absorb, addEvent, assemble } = Core();\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/core/index.ts?'
        );

        /***/
      },

    /***/ './src/domain/Movie.ts':
      /*!*****************************!*\
  !*** ./src/domain/Movie.ts ***!
  \*****************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Movie": () => (/* binding */ Movie)\n/* harmony export */ });\n/* harmony import */ var _utils_common_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common/localStorage */ "./src/utils/common/localStorage.ts");\n\nclass Movie {\n    movieInfo;\n    constructor(movieInfo) {\n        this.movieInfo = Object.assign(movieInfo, { my_vote: getMyVote(movieInfo.id) });\n    }\n    getMovieId() {\n        return this.movieInfo.id;\n    }\n    setMovieVote(payload) {\n        setMyVote(payload);\n        this.movieInfo.my_vote = payload.my_vote;\n    }\n}\nconst getMyVote = (id) => {\n    const myVotes = (0,_utils_common_localStorage__WEBPACK_IMPORTED_MODULE_0__.getData)(\'my_votes\', []);\n    const [myVoteInfo] = myVotes.filter((my_vote) => my_vote.id === id);\n    return myVoteInfo?.my_vote ?? 0;\n};\nconst setMyVote = ({ id, my_vote }) => {\n    const myVotes = (0,_utils_common_localStorage__WEBPACK_IMPORTED_MODULE_0__.getData)(\'my_votes\', []);\n    const vote = getMyVote(id);\n    if (vote) {\n        const updatedMyVotes = myVotes.map((vote) => {\n            if (vote.id === id)\n                vote.my_vote = my_vote;\n            return vote;\n        });\n        (0,_utils_common_localStorage__WEBPACK_IMPORTED_MODULE_0__.addData)(updatedMyVotes);\n    }\n    else {\n        (0,_utils_common_localStorage__WEBPACK_IMPORTED_MODULE_0__.addData)([...myVotes, { id, my_vote }]);\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/Movie.ts?'
        );

        /***/
      },

    /***/ './src/domain/MovieChart.ts':
      /*!**********************************!*\
  !*** ./src/domain/MovieChart.ts ***!
  \**********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "MovieChart": () => (/* binding */ MovieChart)\n/* harmony export */ });\n/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie */ "./src/domain/Movie.ts");\n\nclass MovieChart {\n    movieChartInfo;\n    constructor(movieChartInfo) {\n        this.movieChartInfo = {\n            ...movieChartInfo,\n            results: movieChartInfo.results.map((movieInfo) => new _Movie__WEBPACK_IMPORTED_MODULE_0__.Movie(movieInfo)),\n        };\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/MovieChart.ts?'
        );

        /***/
      },

    /***/ './src/hooks/useModal.ts':
      /*!*******************************!*\
  !*** ./src/hooks/useModal.ts ***!
  \*******************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useModal\": () => (/* binding */ useModal)\n/* harmony export */ });\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ \"./src/core/index.ts\");\n\nfunction useModal(initial) {\n    const [isOpen, setIsOpen] = (0,_core__WEBPACK_IMPORTED_MODULE_0__.useState)(initial);\n    const onKeyDownEscape = (e) => {\n        if (e.key === 'Escape')\n            closeModal();\n    };\n    const openModal = () => {\n        setIsOpen(true);\n        document.body.style.overflowY = 'hidden';\n        window.addEventListener('keydown', onKeyDownEscape);\n    };\n    const closeModal = () => {\n        setIsOpen(false);\n        document.body.style.overflowY = 'auto';\n        window.removeEventListener('keydown', onKeyDownEscape);\n    };\n    return [isOpen, openModal, closeModal];\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/hooks/useModal.ts?"
        );

        /***/
      },

    /***/ './src/hooks/useMovieChart.ts':
      /*!************************************!*\
  !*** ./src/hooks/useMovieChart.ts ***!
  \************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "useMovieChart": () => (/* binding */ useMovieChart)\n/* harmony export */ });\n/* harmony import */ var _apis_movieChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/movieChart */ "./src/apis/movieChart.ts");\n/* harmony import */ var _constants_movieChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/movieChart */ "./src/constants/movieChart.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _useMovieOverviewModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useMovieOverviewModal */ "./src/hooks/useMovieOverviewModal.ts");\n\n\n\n\n\nlet page;\nfunction useMovieChart(keyword) {\n    const [movieChart, setMovieChart] = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [movieList, setMovieList] = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isLoading, setIsLoading] = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const { isOpen, focusedMovie, closeModal, openModal } = (0,_useMovieOverviewModal__WEBPACK_IMPORTED_MODULE_4__.useMovieOverviewModal)(false);\n    const defaultFetchAction = (callback) => async (args) => {\n        setIsLoading(true);\n        await callback(args);\n        setIsLoading(false);\n    };\n    const updateMovieData = (movieChart) => {\n        const { movieChartInfo: { results }, } = movieChart;\n        setMovieChart(movieChart);\n        page === _constants_movieChart__WEBPACK_IMPORTED_MODULE_1__.INITIAL_PAGE ? setMovieList(results) : setMovieList([...movieList, ...results]);\n        page += _constants_movieChart__WEBPACK_IMPORTED_MODULE_1__.PAGE;\n    };\n    const getPopularMovies = defaultFetchAction(async () => {\n        const [data, error] = await (0,_apis_movieChart__WEBPACK_IMPORTED_MODULE_0__.waitFor)((0,_apis_movieChart__WEBPACK_IMPORTED_MODULE_0__.fetchPopularMovies)(page));\n        if (error)\n            throw new Error(JSON.stringify(error));\n        updateMovieData(data);\n    });\n    const getMoviesByKeyword = defaultFetchAction(async (keyword) => {\n        const [data, error] = await (0,_apis_movieChart__WEBPACK_IMPORTED_MODULE_0__.waitFor)((0,_apis_movieChart__WEBPACK_IMPORTED_MODULE_0__.fetchMoviesByKeyword)(keyword, page));\n        if (error)\n            throw new Error(JSON.stringify(error));\n        updateMovieData(data);\n    });\n    const getMovieInfo = (id) => {\n        const [movie] = movieList.filter((movie) => movie.getMovieId() === id);\n        return movie ?? null;\n    };\n    const fetchMore = (keyword) => {\n        keyword ? getMoviesByKeyword(keyword) : getPopularMovies();\n    };\n    const onClickMovie = (e) => {\n        e.preventDefault();\n        const movieId = (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_3__.getClosest)(e.target, \'.item--movie\')?.dataset.id;\n        if (movieId) {\n            const focusedMovie = getMovieInfo(Number(movieId));\n            openModal(focusedMovie);\n        }\n    };\n    const setMyVote = (vote) => {\n        const updatedMovieList = movieList.map((movie) => {\n            if (movie.getMovieId() === vote.id) {\n                movie.setMovieVote(vote);\n            }\n            return movie;\n        });\n        const currentFocusedMovie = getMovieInfo(Number(focusedMovie?.id));\n        const updatedMovie = updatedMovieList.find((movie) => movie.getMovieId() === currentFocusedMovie?.getMovieId());\n        if (updatedMovie)\n            openModal(updatedMovie);\n        setMovieList(updatedMovieList);\n    };\n    (0,_core__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n        page = _constants_movieChart__WEBPACK_IMPORTED_MODULE_1__.INITIAL_PAGE;\n        fetchMore(keyword);\n    }, [keyword]);\n    (0,_core__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => { }, [movieList]);\n    return {\n        values: { movieChart, movieList, isLoading, focusedMovie, isOpen },\n        handlers: { closeModal, openModal, fetchMore, onClickMovie, setMyVote },\n    };\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/hooks/useMovieChart.ts?'
        );

        /***/
      },

    /***/ './src/hooks/useMovieOverviewModal.ts':
      /*!********************************************!*\
  !*** ./src/hooks/useMovieOverviewModal.ts ***!
  \********************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "useMovieOverviewModal": () => (/* binding */ useMovieOverviewModal)\n/* harmony export */ });\n/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis */ "./src/apis/index.ts");\n/* harmony import */ var _constants_movieChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/movieChart */ "./src/constants/movieChart.ts");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core/index.ts");\n/* harmony import */ var _useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useModal */ "./src/hooks/useModal.ts");\n\n\n\n\nfunction useMovieOverviewModal(initial) {\n    const [isOpen, open, close] = (0,_useModal__WEBPACK_IMPORTED_MODULE_3__.useModal)(initial);\n    const [genres, setGenres] = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [focusedMovie, setFocusMovie] = (0,_core__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const openModal = (movie) => {\n        focusMovie(movie);\n        open();\n    };\n    const closeModal = () => {\n        setFocusMovie(null);\n        close();\n    };\n    const parseGenres = (genre_ids) => {\n        return genres.filter(({ id }) => genre_ids.includes(id)).map(({ name }) => _constants_movieChart__WEBPACK_IMPORTED_MODULE_1__.GENRES[name]);\n    };\n    const focusMovie = (movie) => {\n        const { movieInfo: { id, genre_ids, my_vote, overview, title, poster_path, vote_average }, } = movie;\n        setFocusMovie({ genres: parseGenres(genre_ids), id, my_vote, overview, title, poster_path, vote_average });\n    };\n    const fetchGenres = async () => {\n        const [data, error] = await (0,_apis__WEBPACK_IMPORTED_MODULE_0__.waitFor)((0,_apis__WEBPACK_IMPORTED_MODULE_0__.fetchMovieGenres)());\n        if (error)\n            throw new Error(JSON.stringify(error));\n        setGenres(data.genres);\n    };\n    (0,_core__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n        fetchGenres();\n    }, []);\n    return { isOpen, focusedMovie, openModal, closeModal };\n}\n\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/hooks/useMovieOverviewModal.ts?'
        );

        /***/
      },

    /***/ './src/index.ts':
      /*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/core/index.ts");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App/index.ts");\n/* harmony import */ var _utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/common/domHelper */ "./src/utils/common/domHelper.ts");\n/* harmony import */ var _src_styles_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/styles/reset.css */ "./src/styles/reset.css");\n/* harmony import */ var _src_styles_common_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styles/common.css */ "./src/styles/common.css");\n/* harmony import */ var _src_assets_search_button_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/assets/search_button.png */ "./src/assets/search_button.png");\n/* harmony import */ var _src_assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/assets/logo.png */ "./src/assets/logo.png");\n/* harmony import */ var _src_assets_star_filled_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/assets/star_filled.png */ "./src/assets/star_filled.png");\n/* harmony import */ var _src_assets_star_empty_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/assets/star_empty.png */ "./src/assets/star_empty.png");\n\n\n\n\n\n\n\n\n\n(0,_core__WEBPACK_IMPORTED_MODULE_0__.render)(_components_App__WEBPACK_IMPORTED_MODULE_1__.App, (0,_utils_common_domHelper__WEBPACK_IMPORTED_MODULE_2__.$)(\'#app\'));\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?'
        );

        /***/
      },

    /***/ './src/utils/common/debounce.ts':
      /*!**************************************!*\
  !*** ./src/utils/common/debounce.ts ***!
  \**************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "debounce": () => (/* binding */ debounce)\n/* harmony export */ });\nconst debounce = (callback) => {\n    let id = -1;\n    return () => {\n        cancelAnimationFrame(id);\n        id = requestAnimationFrame(callback);\n        return id !== -1;\n    };\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/common/debounce.ts?'
        );

        /***/
      },

    /***/ './src/utils/common/domHelper.ts':
      /*!***************************************!*\
  !*** ./src/utils/common/domHelper.ts ***!
  \***************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "$": () => (/* binding */ $),\n/* harmony export */   "$$": () => (/* binding */ $$),\n/* harmony export */   "getClosest": () => (/* binding */ getClosest),\n/* harmony export */   "getElement": () => (/* binding */ getElement),\n/* harmony export */   "isHTMLElement": () => (/* binding */ isHTMLElement),\n/* harmony export */   "replaceComponent": () => (/* binding */ replaceComponent)\n/* harmony export */ });\nconst $ = (selector, parentNode = document) => parentNode?.querySelector(selector) ?? null;\nconst $$ = (selector, parentNode = document) => parentNode?.querySelectorAll(selector) ?? null;\nconst getElement = (template) => {\n    const root = document.createElement(\'div\');\n    root.innerHTML = template;\n    return root.firstElementChild;\n};\nconst isHTMLElement = (target) => target instanceof HTMLElement;\nconst getClosest = (target, selector) => {\n    if (!(target instanceof Element))\n        return null;\n    const parent = target.closest(selector);\n    if (!parent)\n        return null;\n    if (!isHTMLElement(parent))\n        return null;\n    return parent;\n};\nconst replaceComponent = (element, component) => {\n    if (element && component) {\n        element.replaceWith(component);\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/common/domHelper.ts?'
        );

        /***/
      },

    /***/ './src/utils/common/formData.ts':
      /*!**************************************!*\
  !*** ./src/utils/common/formData.ts ***!
  \**************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getFormFields": () => (/* binding */ getFormFields),\n/* harmony export */   "isFormElement": () => (/* binding */ isFormElement),\n/* harmony export */   "isStringFields": () => (/* binding */ isStringFields)\n/* harmony export */ });\nconst isFormElement = (target) => {\n    return target instanceof HTMLFormElement;\n};\nconst isStringFields = (target) => {\n    return typeof target === \'string\';\n};\nfunction getFormFields(form, keys) {\n    const formData = new FormData(form);\n    const fields = Object.fromEntries(formData);\n    if (Object.keys(fields).every((key) => keys.includes(key))) {\n        return Array.from(formData.entries()).reduce((formFields, [key, value]) => {\n            if (isStringFields(value))\n                return Object.assign(formFields, { [key]: value });\n            throw new Error(\'Not string value\');\n        }, {});\n    }\n    throw new Error("Don\'t have key in fields");\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/common/formData.ts?'
        );

        /***/
      },

    /***/ './src/utils/common/localStorage.ts':
      /*!******************************************!*\
  !*** ./src/utils/common/localStorage.ts ***!
  \******************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "addData": () => (/* binding */ addData),\n/* harmony export */   "getData": () => (/* binding */ getData)\n/* harmony export */ });\nfunction addData(data, id = \'my_votes\') {\n    localStorage.setItem(id, JSON.stringify(data));\n}\nfunction getData(id = \'my_votes\', defaultData) {\n    const data = localStorage.getItem(id);\n    if (!data)\n        return defaultData;\n    return JSON.parse(data);\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/common/localStorage.ts?'
        );

        /***/
      },

    /***/ './src/utils/common/observer.ts':
      /*!**************************************!*\
  !*** ./src/utils/common/observer.ts ***!
  \**************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "observer": () => (/* binding */ observer)\n/* harmony export */ });\n/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/utils/common/domHelper.ts");\n\nconst observer = (selector, { onIntersect }) => {\n    const io = new IntersectionObserver((entries) => {\n        entries.forEach((entry) => {\n            if (entry.isIntersecting)\n                onIntersect();\n        });\n    });\n    setTimeout(() => {\n        io.observe((0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.$)(selector));\n    }, 0);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/common/observer.ts?'
        );

        /***/
      },

    /***/ './src/utils/common/responsive.ts':
      /*!****************************************!*\
  !*** ./src/utils/common/responsive.ts ***!
  \****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "isMobile": () => (/* binding */ isMobile)\n/* harmony export */ });\nconst isMobile = window.innerWidth <= 420;\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/common/responsive.ts?'
        );

        /***/
      },

    /***/ './src/validation/errorHandler.ts':
      /*!****************************************!*\
  !*** ./src/validation/errorHandler.ts ***!
  \****************************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "handleStatusCode": () => (/* binding */ handleStatusCode)\n/* harmony export */ });\n/* harmony import */ var _constants_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/errors */ "./src/constants/errors.ts");\n\n\nconst { STATUS_400, STATUS_401, STATUS_403, STATUS_404, STATUS_500 } = _constants_errors__WEBPACK_IMPORTED_MODULE_0__.STATUS_CODE;\nconst handleStatusCode = (status) => {\n    switch (status) {\n        case STATUS_400:\n            return _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_CODE.STATUS_400;\n        case STATUS_401:\n            return _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_CODE.STATUS_401;\n        case STATUS_403:\n            return _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_CODE.STATUS_403;\n        case STATUS_404:\n            return _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_CODE.STATUS_404;\n        case STATUS_500:\n            return _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_CODE.STATUS_500;\n        default:\n            return _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_CODE.UNEXPECTED_ERROR;\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/validation/errorHandler.ts?'
        );

        /***/
      },

    /***/ './src/validation/errors.ts':
      /*!**********************************!*\
  !*** ./src/validation/errors.ts ***!
  \**********************************/
      /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "CustomError": () => (/* binding */ CustomError),\n/* harmony export */   "isValidErrorCode": () => (/* binding */ isValidErrorCode)\n/* harmony export */ });\n/* harmony import */ var _constants_errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/errors */ "./src/constants/errors.ts");\n\nconst isValidErrorCode = (code) => typeof code === \'string\' && _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_CODE.hasOwnProperty(code);\nconst getValueByMessageType = (target, payload = {}) => typeof target === \'function\' ? target(payload) : target;\nconst errorMessageGenerator = (code, payload = {}) => isValidErrorCode(code)\n    ? getValueByMessageType(_constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE[code], payload)\n    : _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.UNEXPECTED_ERROR;\nconst errorOptionsGenerator = (code, value) => isValidErrorCode(code) ? { cause: { code, value } } : { cause: { code: _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_CODE.UNEXPECTED_ERROR, value: code } };\nconst createErrorParams = ({ code, payload }, value) => {\n    const message = errorMessageGenerator(code, payload);\n    const options = errorOptionsGenerator(code, value);\n    return [message, options];\n};\nclass CustomError extends Error {\n    constructor(info, value) {\n        super(...createErrorParams(info, value));\n        this.name = isValidErrorCode(info.code) ? info.code : _constants_errors__WEBPACK_IMPORTED_MODULE_0__.ERROR_CODE.UNEXPECTED_ERROR;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/validation/errors.ts?'
        );

        /***/
      },

    /***/ './src/assets/logo.png':
      /*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "40422730fb09ec2b5aa5.png";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/logo.png?'
        );

        /***/
      },

    /***/ './src/assets/search_button.png':
      /*!**************************************!*\
  !*** ./src/assets/search_button.png ***!
  \**************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "8ab96eb448678796eac6.png";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/search_button.png?'
        );

        /***/
      },

    /***/ './src/assets/star_empty.png':
      /*!***********************************!*\
  !*** ./src/assets/star_empty.png ***!
  \***********************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "ffe8bd2e9c7494f6c1e3.png";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_empty.png?'
        );

        /***/
      },

    /***/ './src/assets/star_filled.png':
      /*!************************************!*\
  !*** ./src/assets/star_filled.png ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          'module.exports = __webpack_require__.p + "966d4a11f15962b42f8b.png";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/star_filled.png?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ __webpack_require__.p = '/javascript-movie-review';
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/index.ts');
  /******/
  /******/
})();
