<template>
    <a href="#" @click="openModal()" class="text-gray-300 px-4 flex justify-end">
        Excel
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>


    </a>
    <div class="fixed z-10 inset-0 overflow-y-auto ease-out duration-400" v-if="isOpen">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <h1 class="text-xl font-bold p-6 text-center"> اختر ماذا تريد ان تستخرج من المنظام </h1>
                <hr>
                <form>
                <div class="p-4">
                    <ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg 
                    divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                        <li class="w-full">
                            <a href="#" @click="OrderOpen()"
                                class="inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
                                aria-current="page">الطلبيات</a>
                        </li>
                        <li class="w-full">
                            <a href="#" @click="UserOpen()"
                                class="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                المستخدمين</a>
                        </li>
                        <li class="w-full">
                            <a href="#" @click="DriverOpen()"
                                class="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
                                السائقين</a>
                        </li>
                    </ul>
                    <div class="tab-content py-4" id="tabs-tabContent">
                        <div class="tab-pane fade" id="tabs-profile" v-if="isOrderOpen" role="tabpanel"
                            aria-labelledby="tabs-profile-tab ">
                            <div class="flex justify-between py-4">
                                <input id="country-option-1" type="radio" name="countries" class="
                            w-4
                            h-4
                            border-gray-300
                            focus:ring-2 focus:ring-blue-300
                            dark:focus:ring-blue-600
                            dark:focus:bg-blue-600
                            dark:bg-gray-700
                            dark:border-gray-600
                          " required  />
                                <label for="country-option-1" class="
                            
                            ml-2
                            text-sm
                            text-gray-900
                            dark:text-gray-300
                          ">
                                    الطلبيات الصادرة
                                </label>
                                <input id="country-option-1" type="radio" name="countries" class="
                            w-4
                            h-4
                            border-gray-300
                            focus:ring-2 focus:ring-blue-300
                            dark:focus:ring-blue-600
                            dark:focus:bg-blue-600
                            dark:bg-gray-700
                            dark:border-gray-600
                          " required />
                                <label for="country-option-1" class="
                            
                            ml-2
                            text-sm
                            text-gray-900
                            dark:text-gray-300
                          ">
                                    الطلبيات الوارده
                                </label>
                                <input id="country-option-1" type="radio" name="countries" class="
                            w-4
                            h-4
                            border-gray-300
                            focus:ring-2 focus:ring-blue-300
                            dark:focus:ring-blue-600
                            dark:focus:bg-blue-600
                            dark:bg-gray-700
                            dark:border-gray-600
                          " required />
                                <label for="country-option-1" class="
                            
                            ml-2
                            text-sm
                            text-gray-900
                            dark:text-gray-300
                          ">
                                    كل الطلبيات
                                </label>
                            </div>


    <p>Tutorials: {{ exportAttribute }}</p>

                            <div class="grid grid-cols-3 pt-4  ">
                                <div class="col-span-1 ">
                                    <input    id="bordered-checkbox-1" type="checkbox" 
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded 
                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 
                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            v-model="exportAttribute" value="id" >
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">اسم
                                        المستلم </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox"  v-model="exportAttribute" value="delivery_description"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">اسم
                                        المرسل </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox"   v-model="exportAttribute" value="sub_total"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">رقم
                                        المستلم </label>
                                </div>
                            </div>

                            <div class="grid grid-cols-3 pt-4 ">
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">رقم
                                        المرسل </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">رقم
                                        المستلم </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">عنوان
                                        المرسل </label>
                                </div>
                            </div>


                            <div class="grid grid-cols-3 pt-4 ">
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">سعر
                                        التوصيل</label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">سعر
                                        الطلب </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">السعر
                                        الاجمالي </label>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 pt-4">
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        رقم الهاتف الثانوي</label>
                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade" id="tabs-messages" v-if="isUserOpen" role="tabpanel"
                            aria-labelledby="tabs-profile-tab">
                            <div class="flex justify-between">
                                <input id="country-option-1" type="radio" name="countries" class="
                                    w-4
                                    h-4
                                    border-gray-300
                                    focus:ring-2 focus:ring-blue-300
                                    dark:focus:ring-blue-600
                                    dark:focus:bg-blue-600
                                    dark:bg-gray-700
                                    dark:border-gray-600
                                " required />
                                <label for="country-option-1" class="
                                    
                                    ml-2
                                    text-sm
                                    text-gray-900
                                    dark:text-gray-300
                                "> المستخدمين المرسل لهم
                                </label>
                                <input id="country-option-1" type="radio" name="countries" class="
                                    w-4
                                    h-4
                                    border-gray-300
                                    focus:ring-2 focus:ring-blue-300
                                    dark:focus:ring-blue-600
                                    dark:focus:bg-blue-600
                                    dark:bg-gray-700
                                    dark:border-gray-600
                                " required />
                                <label for="country-option-1" class="
                                    
                                    ml-2
                                    text-sm
                                    text-gray-900
                                    dark:text-gray-300
                                ">المستخدمين المستلم منهم
                                </label>
                                <input id="country-option-1" type="radio" name="countries" class="
                                    w-4
                                    h-4
                                    border-gray-300
                                    focus:ring-2 focus:ring-blue-300
                                    dark:focus:ring-blue-600
                                    dark:focus:bg-blue-600
                                    dark:bg-gray-700
                                    dark:border-gray-600
                                " required />
                                <label for="country-option-1" class="
                                    
                                    ml-2
                                    text-sm
                                    text-gray-900
                                    dark:text-gray-300
                                ">كل المستخدمين
                                </label>
                            </div>
                            <div class="grid grid-cols-3 pt-4  ">
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded 
                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 
                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">اسم
                                        الزبون </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        رقم الهاتف الاساسي </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        رقم الهاتف الثانوي</label>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 pt-4  ">
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded 
                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 
                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        البريد الالكتروني </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        عدد الطلبيات الغير مستلمه </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded 
                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 
                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        عدد الطلبيات المستلمه </label>
                                </div>
                            </div>
                        </div>



                        <div class="tab-pane fade" id="tabs-messages" v-if="isDriverOpen" role="tabpanel"
                            aria-labelledby="tabs-profile-tab">
                            <div class="flex justify-between">
                                <input id="country-option-1" type="radio" name="countries" class="
                                    w-4
                                    h-4
                                    border-gray-300
                                    focus:ring-2 focus:ring-blue-300
                                    dark:focus:ring-blue-600
                                    dark:focus:bg-blue-600
                                    dark:bg-gray-700
                                    dark:border-gray-600
                                " required />
                                <label for="country-option-1" class="
                                    
                                    ml-2
                                    text-sm
                                    text-gray-900
                                    dark:text-gray-300
                                "> السائقين المفعلين
                                </label>
                                <input id="country-option-1" type="radio" name="countries" class="
                                    w-4
                                    h-4
                                    border-gray-300
                                    focus:ring-2 focus:ring-blue-300
                                    dark:focus:ring-blue-600
                                    dark:focus:bg-blue-600
                                    dark:bg-gray-700
                                    dark:border-gray-600
                                " required />
                                <label for="country-option-1" class="
                                    
                                    ml-2
                                    text-sm
                                    text-gray-900
                                    dark:text-gray-300
                                ">السائقين الغير مفعلين
                                </label>
                                <input id="country-option-1" type="radio" name="countries" class="
                                    w-4
                                    h-4
                                    border-gray-300
                                    focus:ring-2 focus:ring-blue-300
                                    dark:focus:ring-blue-600
                                    dark:focus:bg-blue-600
                                    dark:bg-gray-700
                                    dark:border-gray-600
                                " required />
                                <label for="country-option-1" class="
                                    
                                    ml-2
                                    text-sm
                                    text-gray-900
                                    dark:text-gray-300
                                ">كل السائقين
                                </label>
                            </div>
                            <div class="grid grid-cols-3 pt-4  ">
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded 
                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 
                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">اسم
                                        السائق </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        رقم الهاتف الاساسي </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        رقم الهاتف الثانوي</label>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 pt-4  ">
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded 
                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 
                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        البريد الالكتروني </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        عدد الطلبيات الغير مستلمه </label>
                                </div>
                                <div class="col-span-1 ">
                                    <input id="bordered-checkbox-1" type="checkbox" value=""
                                        class="w-4 h-4 text-blue-600 bg-gray-100 rounded 
                                            border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 
                                            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                    <label for="bordered-checkbox-1"
                                        class="p-2  w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                                        عدد الطلبيات المستلمه </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <a @click="closeModal()"   :href="`/order/export/${exportAttribute}`" class="btn bg-gray-100"
                                >
                                تحميل
                            </a>
                        </span>

                        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">

                            <button @click="closeModal()" type="button" class="btn bg-red-500">
                                تراجع
                            </button>
                        </span>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>


</template>

<script>
    import {
        useForm
    } from "@inertiajs/inertia-vue3"
    export default {
        components: {},
        props: ['data', 'errors'],

        data() {
            return {
                editMode: false,
                isOpen: false,
                isUserOpen: false,
                isOrderOpen: false,
                isDriverOpen: false,
                exportAttribute:[],
                attributeType:null,

            }
        },
        methods: {
            openModal() {
                this.isOpen = true;
            },
            UserOpen() {
                this.isUserOpen = true;
                this.isOrderOpen = false;
                this.isDriverOpen = false;
            },
            OrderOpen() {
                this.isOrderOpen = true;
                this.isUserOpen = false;
                this.isDriverOpen = false;
            },
            DriverOpen() {
                this.isOrderOpen = false;
                this.isUserOpen = false;
                this.isDriverOpen = true;

            },
            closeModal() {
                this.isOpen = false;
                this.reset();
                this.editMode = false;
            },
            backe() {

            },
            save(data) {
                if(this.exportAttribute == null){
                    console.log("empte")
                }
                else
                {
                
                }
            },
            
    
    },
    }

</script>
