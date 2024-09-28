import { createRouter } from "vue-router";

import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";


const router = [
{
    path: '/',
    name: 'home',
    component: Home
},
{
    path: '/',
    name: 'login',
    component: Login
}


]