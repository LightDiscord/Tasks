import Vue from 'vue';
import { Router as router } from './views';
import { createStore } from './core/store';
import { Header, Content } from '@/components/sections';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'

import './core/service-worker';
import './main.sass';

Vue.config.productionTip = false;

library.add(faTrashAlt, faCheckSquare, faSquare);

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
