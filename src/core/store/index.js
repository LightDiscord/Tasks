import Vue from 'vue';
import Vuex from 'vuex';
import localforage from 'localforage';

import modules from './modules';

Vue.use(Vuex);

export const Database = localforage.createInstance({
  name: 'tasks-database',
  driver: [
    localforage.INDEXEDDB,
  ],
});

export const createStore = () => modules(Database)
  .then(modules => new Vuex.Store({ modules }));
