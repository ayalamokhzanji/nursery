<template>
  <Head title="CompanyUsers : Create" />
  <h1 class="text-3xl font-bold">Create parents :</h1>
  <div class="pt-12">
    <div class="bg-white rounded-md shadow overflow-x-auto p-6">
      <div class=" ">


        <form  @submit.prevent="form.post('/general/email')" class=" py-4 my-7 w-full">
         <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="subject">
             *Subject
            </label>
            <input class="appearance-none block w-full bg-white text-gray-700 border
             border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="subject" type="text" placeholder=""
            v-model ="form.subject">
           <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p>-->
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="content">
              *Content
            </label>

             <textarea id="content" name="content" class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"  rows="4" cols="150"  v-model ="form.content">
             </textarea>
          </div>
          
        </div>
          <div class="py-4">
            <div class="w-full md:w-1/6 px-3 mb-6 md:mb-0">
                <div class="flex items-center  ">
              <loading-button :loading="form.processing" class="btn-indigo" type="submit">Create</loading-button>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardLayout from "../Shared/DashboardLayout";
import LoadingButton from '../Shared/LoadingButton';
import { reactive } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import {useForm} from "@inertiajs/inertia-vue3"
export default {
  layout: DashboardLayout,

  components: { LoadingButton },

  props: {
    errors: Object,
    users: Array,
  },
   setup () {
    const form = useForm({
      subject: null,
      content: null,
    })
    return { form }
   },
 
};
</script>


