<template>
 <Head title="Parents user"/>
 <div class="flex justify-between">
 <h1 class="text-2xl font-bold ">
  Parents :   
  </h1>
    <Link href="/parents/create" class="  
  px-4  py-2  font-bold  rounded-full  text-white  bg-gradient-to-r  from-candyRed 
                       via-purple-600   to-purple-700   hover:bg-gradient-to-br   focus:ring-4 
                       focus:ring-purple-300  
                        dark:focus:ring-purple-800   shadow-lg shadow-candyRed/50   dark:shadow-lg 
                        dark:shadow-purple-800/80 
                         font-medium   rounded-lg   text-sm   px-5   py-2.5   text-center   mr-2   mb-2 
                           focus:outline-none 
                         focus:shadow-outline"
      > Create Parents </Link>
 </div>
<div class="card py-10">
  <table class="table-fixed   bg-white rounded-lg border-collapse border border-slate-400">
    <thead>
      <tr class="text-left font-bold">
        <th class="border border-slate-300 pb-4 pt-6 px-6">main guardian name</th>
        <th class="border border-slate-300 pb-4 pt-6 px-6">main guardian phone </th>
        <th class="border border-slate-300 pb-4 pt-6 px-6">secondary guardian phone</th>
        <th class="border border-slate-300 pb-4 pt-6 px-6">secondary guardian name</th>
        <th class="border border-slate-300 pb-4 pt-6 px-6">email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in Parents.data" :key="Parents.data.id" 
                class="hover:bg-gray-100 focus-within:bg-gray-100"
             :class="{
                    'bg-red-400 ': user.deleted_at != NULL,
                  }">
        
        
           <!-- <div v-for="user in Parents.users " :key="Parents.users.id"> -->
        <td class="border border-slate-300 px-6 py-4">
             {{user.main_guardian_name }}
              
        </td>  
        <td class="border border-slate-300 px-6 py-4">

            {{ user.main_guardian_phone }}

        </td>
        <td class="border border-slate-300 px-6 py-4">

            {{user.secondary_guardian_phone }}

        </td> 
        <td class="border border-slate-300 px-6 py-4">

            {{user.secondary_guardian_name }}

        </td> 
         <td class="border border-slate-300 px-6 py-4">

            {{user.email }}

        </td> 
        <td class="border border-slate-300 px-6 py-4">

            <Link class="flex items-center px-4 " :href="`/emplye/user/${user.id}`" tabindex="-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0
             11-2 0 1 1 0 012 0z"></path></svg>
        </Link>
         <Link class="flex items-center px-4 " :href="`/parents/${user.id}/edit`" tabindex="-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" 
          stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 
          15H9v-2.828l8.586-8.586z"></path></svg>

        </Link>
         <Link v-show=" user.deleted_at == null" class="flex items-center px-4 " :href="`/parents/${user.id}`" 
          method="post" tabindex="-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
         </Link>
         
          <Link v-show=" user.deleted_at != NULL" class="flex items-center px-4 " 
           :href="`/parents/restore/${user.id}`"   method="get" tabindex="-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
         </Link>
        </td> 
            <!-- </div>           -->
      </tr> 
    </tbody>
   </table>
    <Pagination :links="Parents.meta.links" class="mt-6" />
</div>  
</template>
<script>
import Pagination from "../Shared/Pagination";

import DashboardLayout from '../Shared/DashboardLayout';
export default {

   layout:DashboardLayout ,
     components: { Pagination },
    props: {
      
        Parents: Object ,
    },
 
   
};
</script>
