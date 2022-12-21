<template>
  <div >
    <div class="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-200">
      <div class="container mx-auto flex flex-col items-center">
        <form   method="POST" action="#" @submit.prevent="handleLogin" class="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg" >
          <input type="email" placeholder="Email or Phone Number" 
          class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            v-model="formData.email"
              required
                      autocomplete="email"
                      autofocus />
          <input type="password" placeholder="password" 
          class="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500"
            required
                      autocomplete="password"
                      autofocus
                      v-model="formData.password" />
    
        
          <hr />
      <loading-button class="btn-indigo" type="submit" >Login</loading-button>
        </form>
      
      </div>
    </div>
  </div>
  
</template>

<script>
   import axios from 'axios'
import LoadingButton from "../Shared/LoadingButton";
export default {

  components: { LoadingButton },
  props: {
 
  },
    data() {
    return {
      email: Object,
      Companies: [],
      formData: {
        email: "toreilly@example.com",
        password: "password",
      },
    };
  },
  methods: {
    handleLogin() {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/login", this.formData)
          .then((response) => {
            this.getSecrets();
          })
          .catch((response) => console.log(response)); // credentials didn't match
      });
    },
    getSecrets() {
      this.$inertia.get("/home");
    },
    
  },
 
}



</script>


