import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import(/* webpackChunkName: "CreateLink" */ '../views/Home.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;