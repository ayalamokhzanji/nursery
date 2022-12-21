"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Shared_AutoComplete_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/AutoComplete.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/AutoComplete.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    data: []
  },
  data: function data() {
    return {
      show: false,
      formData: {
        client: "",
        client_id: ""
      },
      showOptions: false
    };
  },
  methods: {
    setInput: function setInput(value) {
      this.formData.client = value;
      this.formData.client_id = value.id;
      this.showOptions = false;
    },
    resultQuery: function resultQuery() {
      var _this = this;
      if (this.formData.client) {
        var data = this.data.filter(function (item) {
          return _this.formData.client.split(" ").every(function (v) {
            return item.name.includes(v);
          });
        });
        return data;
      } else {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/AutoComplete.vue?vue&type=template&id=25c18b0e":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/AutoComplete.vue?vue&type=template&id=25c18b0e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "w-full relative py-1"
};
var _hoisted_2 = {
  "class": "z-50 bg-white border border-gray-300 mt-1 max-height-48 overflow-hidden overflow-y-scroll rounded-md shadow-md"
};
var _hoisted_3 = {
  "class": "py-1"
};
var _hoisted_4 = ["onClick"];
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "email",
    onKeyup: _cache[0] || (_cache[0] = function ($event) {
      return $data.showOptions = true;
    }),
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.formData.client = $event;
    }),
    placeholder: "",
    required: "",
    autocomplete: "off"
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.client]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.resultQuery(), function (value, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      onClick: function onClick($event) {
        return $options.setInput(value.name);
      },
      "class": "px-3 py-2 cursor-pointer hover:bg-gray-200"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.name), 9 /* TEXT, PROPS */, _hoisted_4);
  }), 256 /* UNKEYED_FRAGMENT */)), _hoisted_5])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.resultQuery().length && $data.showOptions]])]);
}

/***/ }),

/***/ "./resources/js/Pages/Shared/AutoComplete.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Shared/AutoComplete.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AutoComplete_vue_vue_type_template_id_25c18b0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoComplete.vue?vue&type=template&id=25c18b0e */ "./resources/js/Pages/Shared/AutoComplete.vue?vue&type=template&id=25c18b0e");
/* harmony import */ var _AutoComplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AutoComplete.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/AutoComplete.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_User_Documents_GitHub_nursery_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Documents_GitHub_nursery_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AutoComplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AutoComplete_vue_vue_type_template_id_25c18b0e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/AutoComplete.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/AutoComplete.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/Shared/AutoComplete.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AutoComplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AutoComplete_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AutoComplete.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/AutoComplete.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/AutoComplete.vue?vue&type=template&id=25c18b0e":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Shared/AutoComplete.vue?vue&type=template&id=25c18b0e ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AutoComplete_vue_vue_type_template_id_25c18b0e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AutoComplete_vue_vue_type_template_id_25c18b0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AutoComplete.vue?vue&type=template&id=25c18b0e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/AutoComplete.vue?vue&type=template&id=25c18b0e");


/***/ })

}]);