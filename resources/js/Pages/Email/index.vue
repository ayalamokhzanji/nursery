<template>
    <Head title="Parents user" />
    <div class="flex justify-between">
    
        <h1 class="text-2xl font-bold ">
    
            emails :
    
        </h1>
        <Link href="/general/email/create" class="  
    
      px-4  py-2  font-bold  rounded-full  text-white  bg-gradient-to-r  from-candyRed 
    
                           via-purple-600   to-purple-700   hover:bg-gradient-to-br   focus:ring-4 
    
                           focus:ring-purple-300  
    
                            dark:focus:ring-purple-800   shadow-lg shadow-candyRed/50   dark:shadow-lg 
    
                            dark:shadow-purple-800/80 
    
                             font-medium   rounded-lg   text-sm   px-5   py-2.5   text-center   mr-2   mb-2 
    
                               focus:outline-none 
    
                             focus:shadow-outline"> Create Email </Link>


                                  <Link href="/users-send-email" class="  
    
      px-4  py-2  font-bold  rounded-full  text-white  bg-gradient-to-r  from-candyRed 
    
                           via-purple-600   to-purple-700   hover:bg-gradient-to-br   focus:ring-4 
    
                           focus:ring-purple-300  
    
                            dark:focus:ring-purple-800   shadow-lg shadow-candyRed/50   dark:shadow-lg 
    
                            dark:shadow-purple-800/80 
    
                             font-medium   rounded-lg   text-sm   px-5   py-2.5   text-center   mr-2   mb-2 
    
                               focus:outline-none 
    
                             focus:shadow-outline"> Create Email for all parents</Link>
    
    </div>
    
   <div class="card py-10">
  <table class="table-fixed w-full text-center bg-white rounded-lg border-collapse border border-slate-400">
    <thead>
      <tr class="text-left font-bold">
        <th class="border border-slate-300 pb-4 pt-6 px-6">name</th>
        <th class="border border-slate-300 pb-4 pt-6 px-6">content</th>
                <th class="border border-slate-300 pb-4 pt-6 px-6">subject</th>

        <th class="border border-slate-300 pb-4 pt-6 px-6">created_at</th>
    

      </tr>
    </thead>
    
            <tbody>
    
                <tr v-for="email in emails.data" :key="emails.data.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
    
                    <!-- <div v-for="user in Parents.users " :key="Parents.users.id"> -->
                        <td class="border border-slate-300 px-6 py-4">
    
                        {{email.name }}
    
    
    
                    </td>
                    <td class="border border-slate-300 px-6 py-4">
    
                        {{email.subject }}
    
    
    
                    </td>
    
                    <td class="border border-slate-300 px-6 py-4">
    
    
    
                        {{ email.content }}
    
    
    
                    </td>
                                        <td class="border border-slate-300 px-6 py-4">
    
    
    
                        {{ email.created_at }}
    
    
    
                    </td>
    
                </tr>
    
            </tbody>
    
        </table>
    
        <Pagination :links="emails.meta.links" class="mt-6" />
    
    </div>
</template>
<script>
import Pagination from "../Shared/Pagination";

import DashboardLayout from '../Shared/DashboardLayout';
export default {

    layout: DashboardLayout,
    components: { Pagination },
    props: {

        emails: Object,
    },


};
</script>
