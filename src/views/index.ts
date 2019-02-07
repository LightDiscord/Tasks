import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const Router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./Home.vue'),
    },
  ],
});
