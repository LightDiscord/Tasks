import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: () => import('./Tasks.vue'),
    },
    {
      path: '/exchanges',
      name: 'exchanges',
      component: () => import('./Exchanges.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./Settings.vue'),
    },
  ],
});
