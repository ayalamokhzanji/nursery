<template>
<a href="#" @click="openModal()" class="text-gray-300 px-2 flex ">

<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>

</a>

<div class="fixed z-10 inset-0 overflow-y-auto ease-out duration-400" v-if="isOpen">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        ​
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <h1 class="text-xl font-bold p-6 text-center">يمكنك التعديل في اجزاء 

           
            </h1>
            <hr>

            
            <form class="w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="text-red-300">
                       
                      <div class="grid lg:grid-cols-2">
                        <div class="col-span-1 mx-1">
                            <label
                            class="
                                block
                                uppercase
                                tracking-wide
                                text-gray-700 text-xs
                                font-bold
                                mb-2
                            "
                            for="grid-type"
                            >
                            *نوع التخفيض
                            </label>
                            <select
                            class="
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
                                focus:outline-none focus:bg-white focus:border-gray-500
                            "
                             v-model="form.offer"
                            id="grid-offer"
                            >
                                 <option
                    v-for="offer in data"
                    :key="offer.id"
                    :value="offer.id"
                  >
                    {{ offer.name }}
                  </option>
                            </select>
                        </div>
                        <div  v-show="form.offer !=1 "  class="col-span-1 mx-1">
                            <label
                            class="
                                block
                                uppercase
                                tracking-wide
                                text-gray-700 text-xs
                                font-bold
                                mb-2
                            "
                            for="grid-name"
                            >
                            *تعبئة قيمة التخفيض
                            </label>
                            <input
                            class="
                                appearance-none
                                block
                                w-full
                                bg-gray-50
                                text-gray-700
                                border
                                rounded
                                py-3
                                px-4
                                mb-3
                                leading-tight
                                focus:outline-none focus:bg-white
                            "
                            v-model="form.offerPrice"
                            id="grid-length"
                            type="text"
                            />
                        </div>
                    </div>
                     <div class="grid lg:grid-cols-2">
                        <div class="col-span-1 mx-1">
                            <label
                            class="
                                block
                                uppercase
                                tracking-wide
                                text-gray-700 text-xs
                                font-bold
                                mb-2
                            "
                            for="grid-name"
                            >
                            *اضافة وصف للطلب
                            </label>
                            <input
                            class="
                                appearance-none
                                block
                                w-full
                                bg-gray-50
                                text-gray-700
                                border
                                rounded
                                py-3
                                px-4
                                mb-3
                                leading-tight
                                focus:outline-none focus:bg-white
                            "
                               v-model="form.statuse_description"
                            id="grid-length"
                            type="text"
                            />
                        </div>
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

    props: ['data', 'id'],
    data() {
        return {
            editMode: false,
            isOpen: false,
            // statuse_description:null,
            // offerPrice:null,
            // offer:1,
            showOptions: false,
        };
    },
      setup(value) {
        const form = useForm({
            statuse_description:null,
            offerPrice:null,
            offer:1
        });

        return {
        form,
        };
    },

    mounted() {
    },
    methods: {
       
        resultQuery() {
          
        },
   
        openModal() {
            this.isOpen = true;
        },
        closeModal() {
            this.isOpen = false;
            this.editMode = false;
        },
        save(props) {
            // const form = {
            // statuse_description : this.statuse_description,
            // offerPrice : this.offerPrice,
            // offer : this.offer
            // };
            this.$inertia.post(route('order.update',this.id),this.form ,this.id)
            this.closeModal();
            this.editMode = false;
        },
        
    },
}
</script>
