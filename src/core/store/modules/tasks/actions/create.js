import uuid from 'uuid/v1';
import { Database } from '../../..';

export default ({ commit }, text) => {
  const task = {
    id: uuid(),
    creation: Date.now(),
    done: false,
    text
  };

  return Database.setItem(task.id, task)
    .then(() => commit('create', task));
}
