<template>
    <a href="#" @click="openModal()" class="text-gray-300 px-4 flex justify-end">
        add user
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>

                                                    
    </a>

    <div class="fixed z-10 inset-0 overflow-y-auto ease-out duration-400" v-if="isOpen">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">


            <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <form>
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="">
                            <div class="mb-4">
                                <label for="exampleFormControlInput1" class="block text-gray-700 text-sm font-bold mb-2">name:</label>
                                    <input
                                        id="name"
                                        type="name"
                                        class="
                                            bg-gray-50
                                            border border-gray-300
                                            text-gray-900 text-sm
                                            rounded-lg
                                            focus:ring-gray-500 focus:border-blue-500
                                            block
                                            w-full
                                            p-2.5
                                            dark:bg-gray-700
                                            dark:border-gray-600
                                            dark:placeholder-gray-400
                                            dark:text-white
                                            dark:focus:ring-blue-500
                                            dark:focus:border-gray-500
                                        "
                                        required
                                        autocomplete="name"
                                        autofocus
                                        v-model="form.name"
                                        />
                            </div>
                            <div class="mb-4">
                                <label for="exampleFormControlInput1" class="block text-gray-700 text-sm font-bold mb-2">phone 1:</label>
                                    <input
                                    id="phone_1"
                                    type="text"
                                    placeholder="09Xxxxxxxx"
                                    required
                                    pattern="^(091|092|094)([0-9]{7})$"
                                    class="
                                    bg-gray-50
                                    border border-gray-300
                                    text-gray-900 text-sm
                                    rounded-lg
                                    focus:ring-blue-500 focus:border-blue-500
                                    block
                                    w-full
                                    p-2.5
                                    dark:bg-gray-700
                                    dark:border-gray-600
                                    dark:placeholder-gray-400
                                    dark:text-white
                                    dark:focus:ring-blue-500
                                    dark:focus:border-blue-500
                                    "
                                    autocomplete="phone_1"
                                    autofocus
                                    v-model="form.phone_1"
                                />
                            </div>
                               <div class="mb-4">
                                <label for="exampleFormControlInput1" class="block text-gray-700 text-sm font-bold mb-2">phone 2:</label>
                                <input
                                    id="phone_2"
                                     type="text"
                                     placeholder="09Xxxxxxxx"
                                     
                                     pattern="^(091|092|094)([0-9]{7})$"
                                     class="
                                     bg-gray-50
                                     border border-gray-300
                                     text-gray-900 text-sm
                                     rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500
                                     block
                                     w-full
                                     p-2.5
                                     dark:bg-gray-700
                                     dark:border-gray-600
                                     dark:placeholder-gray-400
                                     dark:text-white
                                     dark:focus:ring-blue-500
                                     dark:focus:border-blue-500
                                     "
                                     autocomplete="phone_2"
                                     autofocus
                                     v-model="form.phone_2"
                                 />
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <button wire:click.prevent="store()" type="button" class="btn bg-gray-100" v-show="!editMode" @click="save(form)">
                                Save
                            </button>
                        </span>
                      
                        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">

                            <button @click="closeModal()" type="button" class="btn bg-red-500">
                                Cancel
                            </button>
                        </span>
                    </div>
                </form>

            </div>
        </div>
    </div>

</template>

<script>
import {useForm} from "@inertiajs/inertia-vue3"
    export default {
        components: {},
        props: ['data', 'errors'],
        data() {
            return {
                editMode: false,
                isOpen: false,
                form: {
                   name: null,
                    phone_1: null,
                    phone_2: null,
                },
            }
        },
        methods: {
            openModal() {
                this.isOpen = true;
            },
            closeModal() {
                this.isOpen = false;
                this.reset();
                this.editMode = false;
            },
            reset() {
                this.form = {
                    title: "a",
                    body: "b",
                }
            },
            save(data) {
                this.$inertia.post('/add/contact/user', data)
                this.reset();
                this.closeModal();
                this.editMode = false;
            },
        },
    }
</script>