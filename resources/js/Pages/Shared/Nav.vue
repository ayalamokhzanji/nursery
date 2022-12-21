<template>
<!-- This example requires Tailwind CSS v2.0+ -->

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-demonBlue">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" class="flex items-center">
        <img src="/images/logo.jpeg" class="mr-3 h-6 sm:h-9 px-2  rounded-lg" alt=" Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Hanan nursery</span>
        </Link>

        <div class="sm:block sm:ml-6 flex space-x-4" id="mobile-menu">
            <div class="flex-1 flex
            items-center
            justify-center
            sm:items-stretch sm:justify-start">
                <div class="pt-1">
                    <Link href="/" class="
                  text-white
                  hover:bg-gray-500 hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                " :class="{ 'bg-gray-700 ': $page.url == '/' }">Home</Link>
                </div>
                <div class="pt-1">
                    <Link href="/" class="
                  text-white
                  hover:bg-gray-500 hover:text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                ">Contact us</Link>
                </div>

                <div class="pt-1" v-show="is_super_admin" v-if="this.$page.props.auth.name  ">
                    <Link href="/admin/dashboard" class="
                    text-white
                    hover:bg-gray-500 hover:text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  " :class="{
                    'bg-gray-700 ': $page.url.startsWith('/admin/dashboard'),
                  }">Admin Dashboard</Link>
                </div>
                <div class="pt-1" v-show="driver_company" v-if="this.$page.props.auth.name ">
                    <Link href="/ordr/fetch/1" class="
                    text-white
                    hover:bg-gray-500 hover:text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  " :class="{
                    'bg-gray-700 ': $page.url.startsWith('/ordr/fetch/1'),
                  }">Driver Dashboard</Link>
                </div>
                <div class="pt-1" v-show="!is_super_admin && !driver_company" v-if="this.$page.props.auth.name ">
                    <Link href="/create/order" class="
                    text-white
                    hover:bg-gray-500 hover:text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  " :class="{
                    'bg-gray-700 ': $page.url.startsWith('/create/order'),
                  }">Dashboard</Link>
                </div>
            </div>
        </div>
    </div>

</nav>
</template>

<script>
import {
    Link
} from "@inertiajs/inertia-vue3";
import axios from "axios";
export default {
    computed: {
        username() {
            return this.$page.props.auth.name;
        },
        is_super_admin() {
            return this.$page.props.auth.permissions.is_super_admin
        },
        driver_company() {
            return this.$page.props.auth.permissions.driver_company
        },
    },
};
</script>
