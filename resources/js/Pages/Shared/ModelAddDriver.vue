<template>
<a v-show="this.$page.props.auth.permissions.driver_company" href="#" @click="openModal()" class="text-gray-300 px-2 flex ">

    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
    </svg>

</a>

<div class="fixed z-10 inset-0 overflow-y-auto ease-out duration-400" v-if="isOpen">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        ​
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <h1 class="text-xl font-bold p-6 text-center">اختر موظف من بين الموظفين العاملين لديك</h1>
            <hr>

            
            <form class="w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="text-red-300">
                       
                        <div class="w-full">
                            <input class="
                          block
                          appearance-none
                          w-full
                          bg-gray-50
                          border border-gray-200
                          text-gray-700
                          py-3
                          px-4
                          pr-8
                          rounded
                          leading-tight
                          focus:outline-none
                          focus:bg-white
                          focus:border-gray-500
                        " id="phone" @keyup="showOptions = true" v-model="formData.client" autocomplete="off" required />
                        </div>
                        <div v-show="resultQuery().length && showOptions" class="
                        z-50
                        bg-white
                        border border-gray-300
                        mt-1
                        max-height-48
                        overflow-hidden overflow-y-scroll
                        rounded-md
                        shadow-md
                      ">
                            <ul class="py-1">
                                <li v-for="(value, index) in resultQuery()" @click="setInput(value,data.id)" class="px-3 py-2 cursor-pointer hover:bg-gray-200">
                                    {{ value.phone_1 }} || {{ value.name }}
                                </li>
                                <li>
                                    <model :data="data" v-model.trim="data" @chosen="handleChosen" placeholder="Search for state..."></model>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                        <button wire:click.prevent="store()" type="button" class="btn bg-gray-100"
                         v-show="!editMode" @click="save(form)">
                            اضافة
                        </button>
                    </span>

                    <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">

                        <button @click="closeModal()" type="button" class="btn bg-red-500">
                            تراجع
                        </button>
                    </span>
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

    props: ['data', 'errors'],
    data() {
        return {
            editMode: false,
            isOpen: false,
            driver_id:null,
            order_id:null,
            users: null,

            selected: "",
            formData: {
                client: "",
                client_id: "",
            },
            showOptions: false,
        };
    },
    mounted() {
           this.user()
    },
    methods: {
        setInput(value,order_id) {
            this.formData.client = value.phone_1;
            this.formData.client_id = value.id;
            this.driver_id = value.id;
            this.order_id =order_id;
            
            this.showOptions = false;
        },
        resultQuery() {
            if (this.formData.client) {
                let data = this.users.filter((item) => {
                    return this.formData.client
                        .split(" ")
                        .every((v) => item.phone_1.includes(v));
                });

                return data;
            } else {
                return [];
            }
        },
   
        openModal() {
            this.isOpen = true;
        },
        closeModal() {
            this.isOpen = false;
            this.editMode = false;
        },
        save(data) {
            const form = {
                driver_id:this.driver_id,
                order:this.order_id,
            };
            this.$inertia.post('/add/driver/order',form)
            this.closeModal();
            this.editMode = false;
        },
        user(){
               return fetch( 'http://127.0.0.1:8000/emplye/user', {
                    method: 'GET',
                    headers: { 'Accept': 'application/json' },
                    } )
                  .then(response => response.json())
                    .then(data => {
                        this.users = data['data'];
                    })
                   
        }
    },
}
</script>
