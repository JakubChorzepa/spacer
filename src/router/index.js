import { createRouter, createWebHashHistory } from 'vue-router';

import Search from '../views/Search.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
