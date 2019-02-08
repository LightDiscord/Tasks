import Vue from 'vue';
import { Router as router } from './views';
import { createStore } from './core/store';

import { Header, Content } from '@/components/sections';

import './core/service-worker';
import './main.sass';

Vue.config.productionTip = false;

createStore().then((store) => {
  const createSection = (el, component) => new Vue({
    el,
    router,
    store,
    render: h => h(component),
  });

  createSection('#header', Header);
  createSection('#content', Content);

  window.store = store;
});
