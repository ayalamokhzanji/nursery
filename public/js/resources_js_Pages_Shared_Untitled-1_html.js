(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Shared_Untitled-1_html"],{

/***/ "./resources/js/Pages/Shared/Untitled-1.html":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Shared/Untitled-1.html ***!
  \***************************************************/
/***/ ((module) => {

// Module
var code = "<template>\r\n    <a href=\"#\" @click=\"openModal()\" class=\"text-gray-300 px-4 flex justify-end\">\r\n        Excel\r\n        <svg class=\"w-6 h-6\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 6v6m0 0v6m0-6h6m-6 0H6\"></path>\r\n        </svg>\r\n\r\n\r\n    </a>\r\n    <div class=\"fixed z-10 inset-0 overflow-y-auto ease-out duration-400\" v-if=\"isOpen\">\r\n        <div class=\"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0\">\r\n            <span class=\"hidden sm:inline-block sm:align-middle sm:h-screen\"></span>​\r\n            <div class=\"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full\"\r\n                role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-headline\">\r\n                <h1 class=\"text-xl font-bold p-6 text-center\"> اختر ماذا تريد ان تستخرج من المنظام </h1>\r\n                <hr>\r\n                <div class=\"p-4\">\r\n                    <ul class=\"hidden text-sm font-medium text-center text-gray-500 rounded-lg \r\n                    divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400\">\r\n                        <li class=\"w-full\">\r\n                            <a href=\"#\" @click=\"OrderOpen()\"\r\n                                class=\"inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white\"\r\n                                aria-current=\"page\">الطلبيات</a>\r\n                        </li>\r\n                        <li class=\"w-full\">\r\n                            <a href=\"#\" @click=\"UserOpen()\"\r\n                                class=\"inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700\">\r\n                                المستخدمين</a>\r\n                        </li>\r\n                        <li class=\"w-full\">\r\n                            <a href=\"#\" @click=\"DriverOpen()\"\r\n                                class=\"inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700\">\r\n                                السائقين</a>\r\n                        </li>\r\n                    </ul>\r\n                    <div class=\"tab-content py-4\" id=\"tabs-tabContent\">\r\n                        <div class=\"tab-pane fade\" id=\"tabs-profile\" v-if=\"isOrderOpen\" role=\"tabpanel\"\r\n                            aria-labelledby=\"tabs-profile-tab \">\r\n                            <div class=\"flex justify-between py-4\">\r\n                                <input id=\"country-option-1\" type=\"radio\" name=\"countries\" class=\"\r\n                            w-4\r\n                            h-4\r\n                            border-gray-300\r\n                            focus:ring-2 focus:ring-blue-300\r\n                            dark:focus:ring-blue-600\r\n                            dark:focus:bg-blue-600\r\n                            dark:bg-gray-700\r\n                            dark:border-gray-600\r\n                          \" required />\r\n                                <label for=\"country-option-1\" class=\"\r\n                            \r\n                            ml-2\r\n                            text-sm\r\n                            text-gray-900\r\n                            dark:text-gray-300\r\n                          \">\r\n                                    الطلبيات الصادرة\r\n                                </label>\r\n                                <input id=\"country-option-1\" type=\"radio\" name=\"countries\" class=\"\r\n                            w-4\r\n                            h-4\r\n                            border-gray-300\r\n                            focus:ring-2 focus:ring-blue-300\r\n                            dark:focus:ring-blue-600\r\n                            dark:focus:bg-blue-600\r\n                            dark:bg-gray-700\r\n                            dark:border-gray-600\r\n                          \" required />\r\n                                <label for=\"country-option-1\" class=\"\r\n                            \r\n                            ml-2\r\n                            text-sm\r\n                            text-gray-900\r\n                            dark:text-gray-300\r\n                          \">\r\n                                    الطلبيات الوارده\r\n                                </label>\r\n                                <input id=\"country-option-1\" type=\"radio\" name=\"countries\" class=\"\r\n                            w-4\r\n                            h-4\r\n                            border-gray-300\r\n                            focus:ring-2 focus:ring-blue-300\r\n                            dark:focus:ring-blue-600\r\n                            dark:focus:bg-blue-600\r\n                            dark:bg-gray-700\r\n                            dark:border-gray-600\r\n                          \" required />\r\n                                <label for=\"country-option-1\" class=\"\r\n                            \r\n                            ml-2\r\n                            text-sm\r\n                            text-gray-900\r\n                            dark:text-gray-300\r\n                          \">\r\n                                    كل الطلبيات\r\n                                </label>\r\n                            </div>\r\n\r\n                            <div class=\"grid grid-cols-3  \">\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded \r\n                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 \r\n                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">اسم\r\n                                        المستلم </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">اسم\r\n                                        المرسل </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">رقم\r\n                                        المستلم </label>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"grid grid-cols-3 \">\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">رقم\r\n                                        المرسل </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">رقم\r\n                                        المستلم </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">عنوان\r\n                                        المرسل </label>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"grid grid-cols-3 \">\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">سعر\r\n                                        التوصيل</label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">سعر\r\n                                        الطلب </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">السعر\r\n                                        الاجمالي </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"grid grid-cols-3\">\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        رقم الهاتف الثانوي</label>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"tabs-messages\" v-if=\"isUserOpen\" role=\"tabpanel\"\r\n                            aria-labelledby=\"tabs-profile-tab\">\r\n                            <div class=\"flex justify-between\">\r\n                                <input id=\"country-option-1\" type=\"radio\" name=\"countries\" class=\"\r\n                                    w-4\r\n                                    h-4\r\n                                    border-gray-300\r\n                                    focus:ring-2 focus:ring-blue-300\r\n                                    dark:focus:ring-blue-600\r\n                                    dark:focus:bg-blue-600\r\n                                    dark:bg-gray-700\r\n                                    dark:border-gray-600\r\n                                \" required />\r\n                                <label for=\"country-option-1\" class=\"\r\n                                    \r\n                                    ml-2\r\n                                    text-sm\r\n                                    text-gray-900\r\n                                    dark:text-gray-300\r\n                                \"> المستخدمين المرسل لهم\r\n                                </label>\r\n                                <input id=\"country-option-1\" type=\"radio\" name=\"countries\" class=\"\r\n                                    w-4\r\n                                    h-4\r\n                                    border-gray-300\r\n                                    focus:ring-2 focus:ring-blue-300\r\n                                    dark:focus:ring-blue-600\r\n                                    dark:focus:bg-blue-600\r\n                                    dark:bg-gray-700\r\n                                    dark:border-gray-600\r\n                                \" required />\r\n                                <label for=\"country-option-1\" class=\"\r\n                                    \r\n                                    ml-2\r\n                                    text-sm\r\n                                    text-gray-900\r\n                                    dark:text-gray-300\r\n                                \">المستخدمين المستلم منهم\r\n                                </label>\r\n                                <input id=\"country-option-1\" type=\"radio\" name=\"countries\" class=\"\r\n                                    w-4\r\n                                    h-4\r\n                                    border-gray-300\r\n                                    focus:ring-2 focus:ring-blue-300\r\n                                    dark:focus:ring-blue-600\r\n                                    dark:focus:bg-blue-600\r\n                                    dark:bg-gray-700\r\n                                    dark:border-gray-600\r\n                                \" required />\r\n                                <label for=\"country-option-1\" class=\"\r\n                                    \r\n                                    ml-2\r\n                                    text-sm\r\n                                    text-gray-900\r\n                                    dark:text-gray-300\r\n                                \">كل المستخدمين\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"grid grid-cols-3  \">\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded \r\n                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 \r\n                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">اسم\r\n                                        الزبون </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        رقم الهاتف الاساسي </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        رقم الهاتف الثانوي</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"grid grid-cols-3  \">\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded \r\n                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 \r\n                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        البريد الالكتروني </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        عدد الطلبيات الغير مستلمه </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded \r\n                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 \r\n                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        عدد الطلبيات المستلمه </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                        <div class=\"tab-pane fade\" id=\"tabs-messages\" v-if=\"isDriverOpen\" role=\"tabpanel\"\r\n                            aria-labelledby=\"tabs-profile-tab\">\r\n                            <div class=\"flex justify-between\">\r\n                                <input id=\"country-option-1\" type=\"radio\" name=\"countries\" class=\"\r\n                                    w-4\r\n                                    h-4\r\n                                    border-gray-300\r\n                                    focus:ring-2 focus:ring-blue-300\r\n                                    dark:focus:ring-blue-600\r\n                                    dark:focus:bg-blue-600\r\n                                    dark:bg-gray-700\r\n                                    dark:border-gray-600\r\n                                \" required />\r\n                                <label for=\"country-option-1\" class=\"\r\n                                    \r\n                                    ml-2\r\n                                    text-sm\r\n                                    text-gray-900\r\n                                    dark:text-gray-300\r\n                                \"> السائقين المفعلين\r\n                                </label>\r\n                                <input id=\"country-option-1\" type=\"radio\" name=\"countries\" class=\"\r\n                                    w-4\r\n                                    h-4\r\n                                    border-gray-300\r\n                                    focus:ring-2 focus:ring-blue-300\r\n                                    dark:focus:ring-blue-600\r\n                                    dark:focus:bg-blue-600\r\n                                    dark:bg-gray-700\r\n                                    dark:border-gray-600\r\n                                \" required />\r\n                                <label for=\"country-option-1\" class=\"\r\n                                    \r\n                                    ml-2\r\n                                    text-sm\r\n                                    text-gray-900\r\n                                    dark:text-gray-300\r\n                                \">السائقين الغير مفعلين\r\n                                </label>\r\n                                <input id=\"country-option-1\" type=\"radio\" name=\"countries\" class=\"\r\n                                    w-4\r\n                                    h-4\r\n                                    border-gray-300\r\n                                    focus:ring-2 focus:ring-blue-300\r\n                                    dark:focus:ring-blue-600\r\n                                    dark:focus:bg-blue-600\r\n                                    dark:bg-gray-700\r\n                                    dark:border-gray-600\r\n                                \" required />\r\n                                <label for=\"country-option-1\" class=\"\r\n                                    \r\n                                    ml-2\r\n                                    text-sm\r\n                                    text-gray-900\r\n                                    dark:text-gray-300\r\n                                \">كل السائقين\r\n                                </label>\r\n                            </div>\r\n                            <div class=\"grid grid-cols-3  \">\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded \r\n                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 \r\n                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">اسم\r\n                                        السائق </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        رقم الهاتف الاساسي </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        رقم الهاتف الثانوي</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"grid grid-cols-3  \">\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded \r\n                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 \r\n                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        البريد الالكتروني </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        عدد الطلبيات الغير مستلمه </label>\r\n                                </div>\r\n                                <div class=\"col-span-1 \">\r\n                                    <input id=\"bordered-checkbox-1\" type=\"checkbox\" value=\"\"\r\n                                        class=\"w-4 h-4 text-blue-600 bg-gray-100 rounded \r\n                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 \r\n                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600\">\r\n                                    <label for=\"bordered-checkbox-1\"\r\n                                        class=\"p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300\">\r\n                                        عدد الطلبيات المستلمه </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse\">\r\n                        <span class=\"flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto\">\r\n                            <button wire:click.prevent=\"store()\" type=\"button\" class=\"btn bg-gray-100\"\r\n                                v-show=\"!editMode\" @click=\"save(form)\">\r\n                                تحميل\r\n                            </button>\r\n                        </span>\r\n\r\n                        <span class=\"mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto\">\r\n\r\n                            <button @click=\"closeModal()\" type=\"button\" class=\"btn bg-red-500\">\r\n                                تراجع\r\n                            </button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</template>\r\n\r\n<script>\r\n    import {\r\n        useForm\r\n    } from \"@inertiajs/inertia-vue3\"\r\n    export default {\r\n        components: {},\r\n        props: ['data', 'errors'],\r\n        data() {\r\n            return {\r\n                editMode: false,\r\n                isOpen: false,\r\n                isUserOpen: false,\r\n                isOrderOpen: false,\r\n                isDriverOpen: false,\r\n\r\n                form: {\r\n                    //    name: null,\r\n                    //     phone_1: null,\r\n                    //     phone_2: null,\r\n                },\r\n            }\r\n        },\r\n        methods: {\r\n            openModal() {\r\n                this.isOpen = true;\r\n            },\r\n            UserOpen() {\r\n                this.isUserOpen = true;\r\n                this.isOrderOpen = false;\r\n                this.isDriverOpen = false;\r\n            },\r\n            OrderOpen() {\r\n                this.isOrderOpen = true;\r\n                this.isUserOpen = false;\r\n                this.isDriverOpen = false;\r\n            },\r\n            DriverOpen() {\r\n                this.isOrderOpen = false;\r\n                this.isUserOpen = false;\r\n                this.isDriverOpen = true;\r\n\r\n            },\r\n            closeModal() {\r\n                this.isOpen = false;\r\n                this.reset();\r\n                this.editMode = false;\r\n            },\r\n            backe() {\r\n\r\n            },\r\n            save(data) {\r\n                this.$inertia.post('/add/contact/user', data)\r\n                this.reset();\r\n                this.closeModal();\r\n                this.editMode = false;\r\n            },\r\n        },\r\n    }\r\n\r\n</script>\r\n";
// Exports
module.exports = code;

/***/ })

}]);