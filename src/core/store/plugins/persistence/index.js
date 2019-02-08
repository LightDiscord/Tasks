import { createTask } from '../../modules/tasks/mutations/create';
import { Database } from '../..';

export default (store) => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'tasks/create') {
      const task = createTask(mutation.payload);

      Database.setItem(task.id, task);
    }

    if (mutation.type === 'tasks/remove') {
      Database.removeItem(mutation.payload);
    }

    console.log('subscription', mutation, state);
  });
};
