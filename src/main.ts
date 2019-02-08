import Vue, { VueConstructor } from 'vue';
import App from './Main.vue';
import { Router as router } from './views';
import store from './core/store';

import { Header, Content } from '@/components/sections';

import './core/service-worker';
import './main.sass';

Vue.config.productionTip = false;

const createSection = (el: string, component: {}) => new Vue({
  el,
  router,
  store,
  render: h => h(component)
})

createSection('#header', Header);
createSection('#content', Content)
