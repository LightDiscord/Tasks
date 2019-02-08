import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';
import { createState } from './state';

export default database => createState(database).then(state => ({
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}));
