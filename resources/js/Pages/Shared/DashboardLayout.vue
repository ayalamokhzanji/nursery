<template>

  <div x-data="setup()" x-init="$refs.loading.classList.add('hidden');">
      <div class="grid md:grid-cols-9  min-h-screen   text-gray-900 bg-purple-100 dark:bg-dark dark:text-light">
        <!-- Loading screen -->
 

        <!-- Sidebar -->
        <div class="col-span-2 "> 
          <div
            x-transition:enter="transform transition-transform duration-300"
            x-transition:enter-start="-translate-x-full"
            x-transition:enter-end="translate-x-0"
            x-transition:leave="transform transition-transform duration-300"
            x-transition:leave-start="translate-x-0"
            x-transition:leave-end="-translate-x-full"
            x-show="isSidebarOpen"
            class="fixed inset-y-0 z-10 flex w-80 "
          >
            <!-- Curvy shape -->
            <svg
              class="absolute inset-0 w-full h-full text-white "
              style="filter: drop-shadow(10px 0 10px #00000030)"
              preserveAspectRatio="none"
              viewBox="0 0 309 800"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
              />
            </svg>
            <!-- Sidebar content -->
            <div class="z-10 flex flex-col flex-1 ">
              <div class="flex items-center justify-between flex-shrink-0 w-64 p-4 ">
                <!-- Logo -->
                <a href="#">
                  <span class=" text-gray-900 text-2xl">Hanan nursery</span>
                  <svg
                    aria-hidden="true"
                    class="w-16 h-auto text-blue-600"
                    viewBox="0 0 96 53"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
              
                  </svg>
                </a>
                <!-- Close btn -->
                <button @click="isSidebarOpen = false" class="p-1 rounded-lg focus:outline-none focus:ring">
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span class="sr-only">Close sidebar</span>
                </button>
              </div>
              <nav class="flex flex-col flex-1 w-64 p-4 mt-4">
                <a href="#" class="flex items-center space-x-2">
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>Home</span>
              </a>


              <a href="/parents" class="flex items-center space-x-2">
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>parents</span>
              </a>

             <a href="/general/email" class="flex items-center space-x-2">
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>email</span>
              </a>

              </nav>
              <div class="flex-shrink-0 p-4">
                <div class="flex items-center space-x-2">
                  <svg
                    aria-hidden="true"
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                    <Link href="/logout" method="post" class="text-gray-800 flex justify-start">logout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main class='col-span-7  flex-1 px-6'>
          <div class="p-6">
            <div class="py-4">
              <div v-if="$page.props.errors.length > 0 ">
                    <div class="font-medium bg-red-400 rounded-lg  p-4 text-white">
                            <ul class=" list-disc list-inside text-xl text-white">
                                  {{ $page.props.errors }} 
                            </ul>
                      </div>
              </div>
              <div v-if="hasErrors">
                <div class="font-medium text-red-600  p-4">Whoops! Something went wrong.</div>
                    <ul class="mt-3 list-disc list-inside text-sm text-red-600">
                      <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
                    </ul>
              </div>

              <div v-if="$page.props.flash.success">
                <div class="font-medium  bg-green rounded-lg  p-4 text-white">
                        <ul class=" list-disc list-inside text-xl text-white">
                             {{ $page.props.flash.success }}
                        </ul>
                </div>
              </div>
            </div>
            <slot />
          
          </div>
        </main>
      </div>
    </div>

</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
export default {
    components: {
   },
  props: {
 
  },
   computed:
   {
      errors() {
                return this.$page.props.errors
              },

      hasErrors() {
                return Object.keys(this.errors).length > 0;
                },
    },
 
}



</script>


