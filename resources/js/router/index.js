import { createRouter, createWebHistory } from "vue-router";
import invoiceIndex from '../components/invoice/invoiceIndex.vue';
import notFound from '../components/invoice/notFound.vue';

const routes=[
    {
        path:'/',
        component: invoiceIndex
    },
    {
        path:'/:pathMatch(.*)*',
        component: notFound
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes
})


export default router