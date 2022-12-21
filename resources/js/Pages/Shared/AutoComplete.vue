<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>

    <div>
      <div class="w-full relative py-1">
          <input
          class ="block  appearance-none  w-full 
                                             bg-gray-50  border border-gray-200  text-gray-700  py-3  px-4 
                                            pr-8  rounded  leading-tight  focus:outline-none focus:bg-white
                                             focus:border-gray-500"
            id="email"
            @keyup="showOptions = true"
            v-model="formData.client"
              placeholder=""
              required
            autocomplete="off"
          
          />
        </div>
        <div
          v-show="resultQuery().length && showOptions"
          class="  z-50 bg-white border 
          border-gray-300 mt-1 max-height-48 overflow-hidden overflow-y-scroll rounded-md shadow-md"
        >
          <ul class="py-1">
            <li v-for="(value, index) in resultQuery()"
              @click="setInput(value.name)"
              class="px-3 py-2 cursor-pointer hover:bg-gray-200"> 
              {{ value.name }}

            </li>
            <li>
    
              </li>
          </ul>
           
        </div>
      </div>     
 
  
</template>

<script>
export default {
 
  props: {
            data: [],
        },
          
  data() {
    return {
      
      show: false,
      formData: {
        client: "" , client_id:""},
      showOptions: false,
      
    };
  },
  methods: {
    
    setInput(value) {
      this.formData.client = value;
      this.formData.client_id = value.id;
      this.showOptions = false;
    },
    resultQuery() {
      if (this.formData.client) {
        let data = this.data.filter((item) => {
          return this.formData.client
            .split(" ")
            .every((v) => item.name.includes(v));
        });

        return data;
      } else {
        return [];
      }
    }
  }
};
</script>

