import { createRouter, createWebHistory } from "vue-router";
import About from '../views/About'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

const router = createRouter({
    histroy: createWebHistory(process.env.BASE_URL), routes,
})