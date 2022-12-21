"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Shared_Nav_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    username: function username() {
      return this.$page.props.auth.name;
    },
    is_super_admin: function is_super_admin() {
      return this.$page.props.auth.permissions.is_super_admin;
    },
    driver_company: function driver_company() {
      return this.$page.props.auth.permissions.driver_company;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav.vue?vue&type=template&id=1f749b7c":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav.vue?vue&type=template&id=1f749b7c ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-demonBlue"
};
var _hoisted_2 = {
  "class": "container flex flex-wrap justify-between items-center mx-auto"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/logo.jpeg",
  "class": "mr-3 h-6 sm:h-9 px-2 rounded-lg",
  alt: " Logo"
}, null, -1 /* HOISTED */);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "self-center text-xl font-semibold whitespace-nowrap text-white"
}, "Hanan nursery", -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "sm:block sm:ml-6 flex space-x-4",
  id: "mobile-menu"
};
var _hoisted_6 = {
  "class": "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
};
var _hoisted_7 = {
  "class": "pt-1"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home");
var _hoisted_9 = {
  "class": "pt-1"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Contact us");
var _hoisted_11 = {
  key: 0,
  "class": "pt-1"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Admin Dashboard");
var _hoisted_13 = {
  key: 1,
  "class": "pt-1"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Driver Dashboard");
var _hoisted_15 = {
  key: 2,
  "class": "pt-1"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Dashboard");
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" This example requires Tailwind CSS v2.0+ "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    "class": "flex items-center"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3, _hoisted_4];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-white hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium", {
      'bg-gray-700 ': _ctx.$page.url == '/'
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    "class": "text-white hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1 /* STABLE */
  })]), this.$page.props.auth.name ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/admin/dashboard",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-white hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium", {
      'bg-gray-700 ': _ctx.$page.url.startsWith('/admin/dashboard')
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])], 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.is_super_admin]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), this.$page.props.auth.name ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/ordr/fetch/1",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-white hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium", {
      'bg-gray-700 ': _ctx.$page.url.startsWith('/ordr/fetch/1')
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])], 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.driver_company]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), this.$page.props.auth.name ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/create/order",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["text-white hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium", {
      'bg-gray-700 ': _ctx.$page.url.startsWith('/create/order')
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])], 512 /* NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$options.is_super_admin && !$options.driver_company]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Pages/Shared/Nav.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Shared/Nav.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Nav_vue_vue_type_template_id_1f749b7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nav.vue?vue&type=template&id=1f749b7c */ "./resources/js/Pages/Shared/Nav.vue?vue&type=template&id=1f749b7c");
/* harmony import */ var _Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/Nav.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_User_Documents_GitHub_nursery_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Documents_GitHub_nursery_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Nav_vue_vue_type_template_id_1f749b7c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/Nav.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/Nav.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Shared/Nav.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/Nav.vue?vue&type=template&id=1f749b7c":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Shared/Nav.vue?vue&type=template&id=1f749b7c ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_1f749b7c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Nav_vue_vue_type_template_id_1f749b7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Nav.vue?vue&type=template&id=1f749b7c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/Nav.vue?vue&type=template&id=1f749b7c");


/***/ })

}]);