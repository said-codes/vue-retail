import {createRouter, createWebHistory} from 'vue-router'
import ProductList from '@/components/ProductList.vue';
import OrderList from '@/components/OrderList.vue';
import CreateOrder from '@/components/CreateOrder.vue';

const routes = [
    {path : '/products', component: ProductList},
    {path : '/orders', component: OrderList},
    {path : '/create-order', component: CreateOrder},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;