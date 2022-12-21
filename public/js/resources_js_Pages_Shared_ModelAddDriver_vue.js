"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Shared_ModelAddDriver_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['data', 'errors'],
  data: function data() {
    return {
      editMode: false,
      isOpen: false,
      driver_id: null,
      order_id: null,
      users: null,
      selected: "",
      formData: {
        client: "",
        client_id: ""
      },
      showOptions: false
    };
  },
  mounted: function mounted() {
    this.user();
  },
  methods: {
    setInput: function setInput(value, order_id) {
      this.formData.client = value.phone_1;
      this.formData.client_id = value.id;
      this.driver_id = value.id;
      this.order_id = order_id;
      this.showOptions = false;
    },
    resultQuery: function resultQuery() {
      var _this = this;
      if (this.formData.client) {
        var data = this.users.filter(function (item) {
          return _this.formData.client.split(" ").every(function (v) {
            return item.phone_1.includes(v);
          });
        });
        return data;
      } else {
        return [];
      }
    },
    openModal: function openModal() {
      this.isOpen = true;
    },
    closeModal: function closeModal() {
      this.isOpen = false;
      this.editMode = false;
    },
    save: function save(data) {
      var form = {
        driver_id: this.driver_id,
        order: this.order_id
      };
      this.$inertia.post('/add/driver/order', form);
      this.closeModal();
      this.editMode = false;
    },
    user: function user() {
      var _this2 = this;
      return fetch('http://127.0.0.1:8000/emplye/user', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.users = data['data'];
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=template&id=9ef0099e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=template&id=9ef0099e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-6 h-6",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
})], -1 /* HOISTED */);
var _hoisted_2 = [_hoisted_1];
var _hoisted_3 = {
  key: 0,
  "class": "fixed z-10 inset-0 overflow-y-auto ease-out duration-400"
};
var _hoisted_4 = {
  "class": "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "hidden sm:inline-block sm:align-middle sm:h-screen"
}, null, -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ​ ");
var _hoisted_7 = {
  "class": "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",
  role: "dialog",
  "aria-modal": "true",
  "aria-labelledby": "modal-headline"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "text-xl font-bold p-6 text-center"
}, "اختر موظف من بين الموظفين العاملين لديك", -1 /* HOISTED */);
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "w-full"
};
var _hoisted_11 = {
  "class": "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
};
var _hoisted_12 = {
  "class": "text-red-300"
};
var _hoisted_13 = {
  "class": "w-full"
};
var _hoisted_14 = {
  "class": "z-50 bg-white border border-gray-300 mt-1 max-height-48 overflow-hidden overflow-y-scroll rounded-md shadow-md"
};
var _hoisted_15 = {
  "class": "py-1"
};
var _hoisted_16 = ["onClick"];
var _hoisted_17 = {
  "class": "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
};
var _hoisted_18 = {
  "class": "flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto"
};
var _hoisted_19 = {
  "class": "mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_model = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("model");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "#",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.openModal();
    }),
    "class": "text-gray-300 px-2 flex"
  }, _hoisted_2, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, this.$page.props.auth.permissions.driver_company]]), $data.isOpen ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
    id: "phone",
    onKeyup: _cache[1] || (_cache[1] = function ($event) {
      return $data.showOptions = true;
    }),
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.formData.client = $event;
    }),
    autocomplete: "off",
    required: ""
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.formData.client]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_15, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.resultQuery(), function (value, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      onClick: function onClick($event) {
        return $options.setInput(value, $props.data.id);
      },
      "class": "px-3 py-2 cursor-pointer hover:bg-gray-200"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.phone_1) + " || " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(value.name), 9 /* TEXT, PROPS */, _hoisted_16);
  }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_model, {
    data: $props.data,
    modelValue: $props.data,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $props.data = $event;
    }),
    modelModifiers: {
      trim: true
    },
    onChosen: _ctx.handleChosen,
    placeholder: "Search for state..."
  }, null, 8 /* PROPS */, ["data", "modelValue", "onChosen"])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $options.resultQuery().length && $data.showOptions]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "wire:click.prevent": "store()",
    type: "button",
    "class": "btn bg-gray-100",
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.save(_ctx.form);
    })
  }, " اضافة ", 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, !$data.editMode]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[5] || (_cache[5] = function ($event) {
      return $options.closeModal();
    }),
    type: "button",
    "class": "btn bg-red-500"
  }, " تراجع ")])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Pages/Shared/ModelAddDriver.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Shared/ModelAddDriver.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModelAddDriver_vue_vue_type_template_id_9ef0099e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelAddDriver.vue?vue&type=template&id=9ef0099e */ "./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=template&id=9ef0099e");
/* harmony import */ var _ModelAddDriver_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelAddDriver.vue?vue&type=script&lang=js */ "./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_User_Documents_GitHub_nursery_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_User_Documents_GitHub_nursery_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ModelAddDriver_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ModelAddDriver_vue_vue_type_template_id_9ef0099e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Shared/ModelAddDriver.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModelAddDriver_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModelAddDriver_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModelAddDriver.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=template&id=9ef0099e":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=template&id=9ef0099e ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModelAddDriver_vue_vue_type_template_id_9ef0099e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ModelAddDriver_vue_vue_type_template_id_9ef0099e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ModelAddDriver.vue?vue&type=template&id=9ef0099e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Shared/ModelAddDriver.vue?vue&type=template&id=9ef0099e");


/***/ })

}]);