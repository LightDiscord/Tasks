export default (state, id) => {
  const index = state.tasks.findIndex(task => task.id === id);

  if (index === -1) return;

  state.tasks.splice(index, 1);
};
