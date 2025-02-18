import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import(/* webpackChunkName: "Home" */ '../views/Home.vue');
const CV = () => import(/* webpackChunkName: "CV" */ '../views/CV.vue');
const Projects = () => import(/* webpackChunkName: "Projects" */ '../views/Projects.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/cv',
        name: 'CV',
        component: CV
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;