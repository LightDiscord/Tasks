import uuid from 'uuid/v1';

export default ({ dispatch }, text) => {
  const task = {
    id: uuid(),
    creation: Date.now(),
    done: false,
    text
  };

  return dispatch('add', task);
}
