<template>
  <button :disabled="loading" class="
  px-4  py-2  font-bold  rounded-full  text-white  bg-gradient-to-r  from-candyRed 
                       via-purple-600   to-purple-700   hover:bg-gradient-to-br   focus:ring-4 
                       focus:ring-purple-300  
                        dark:focus:ring-purple-800   shadow-lg shadow-candyRed/50   dark:shadow-lg 
                        dark:shadow-purple-800/80 
                         font-medium   rounded-lg   text-sm   px-5   py-2.5   text-center   mr-2   mb-2 
                           focus:outline-none 
                         focus:shadow-outline ">
    <div v-if="loading" class="btn-spinner mr-2" />
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
}
</script>
