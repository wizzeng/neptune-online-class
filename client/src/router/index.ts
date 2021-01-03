import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ClientHome from '@/views/client/ClientHome.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ClientHome',
    component: ClientHome,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
