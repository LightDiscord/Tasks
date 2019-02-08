import uuid from 'uuid/v1';

export const createTask = text => ({
  id: uuid(),
  creation: Date.now(),
  done: false,
  text,
});

export default (state, text) => {
  state.tasks.push(createTask(text));
};
