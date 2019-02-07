import Vue from 'vue';
import App from './Main.vue';
import { Router as router } from './views';
import store from './core/store';

import './core/service-worker';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
