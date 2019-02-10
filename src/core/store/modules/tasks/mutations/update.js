import Vue from 'vue';

export default (state, task) => {
  const index = state.tasks.findIndex(x => x.id === task.id);

  if (index !== -1) {
    Vue.set(state.tasks, index, task);
  }
}
