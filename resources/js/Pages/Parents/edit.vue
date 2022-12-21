<template>
  <Head title="parentsUsers : Create" />
  <h1 class="text-3xl font-bold">Create parents :</h1>
  <div class="pt-12">
    <div class="bg-white rounded-md shadow overflow-x-auto p-6">
      <div class=" ">

        <form @submit.prevent="form.post(route('parents.update', form.id))" class="w-full ">

         <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
             *main guardian name
            </label>
            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""
            v-model ="form.main_guardian_name">
           <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              *main guardian phone
            </label>
            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="09Xxxxxxxx"
                        required
                        pattern="^(091|092|094)([0-9]{7})$"
                         v-model ="form.main_guardian_phone" >
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              secondary guardian name
            </label>
            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder=""
             v-model ="form.secondary_guardian_name">
           <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              secondary guardian phone
            </label>
            <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="09Xxxxxxxx"
                        required
                        pattern="^(091|092|094)([0-9]{7})$" 
                         v-model ="form.secondary_guardian_phone">
          </div>
        </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-address">
            address
          </label>
          <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder=" address"
           v-model ="form.address">
        </div>
            
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
            Email
          </label>
          <input class="appearance-none block w-full bg-white 
          text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="email"
           v-model ="form.email">
        </div>

        
      </div>
          <div class="py-4">
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <div class="flex items-center  ">
              <loading-button :loading="form.processing" class="btn-indigo" type="submit">save</loading-button>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardLayout from '../Shared/DashboardLayout';
import { reactive } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import LoadingButton from '../Shared/LoadingButton'
import {useForm} from "@inertiajs/inertia-vue3"
export default {
  layout: DashboardLayout,
  props: {
    parents: Object,
  

  },
    components: { LoadingButton },
   setup (props) {
    const form = useForm({
      id: props.parents.data.id,
      main_guardian_name: props.parents.data.main_guardian_name,
      main_guardian_phone: props.parents.data.main_guardian_phone,
      secondary_guardian_name: props.parents.data.secondary_guardian_name,
      secondary_guardian_phone: props.parents.data.secondary_guardian_phone,
      address: props.parents.data.address,
      email: props.parents.data.email,

    })



    return { form  }
  },

};
</script>