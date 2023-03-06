import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import ProjectIndex from './pages/ProjectIndex.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage

        },
        {
            path: '/about-us',
            name: 'AboutUs',
            component: AboutUs

        },
        {
            path: '/projects-index',
            name: 'ProjectIndex',
            component: ProjectIndex

        },
    ]
});

export { router };

