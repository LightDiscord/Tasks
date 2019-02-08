import tasks from './tasks';

const modules = database => Promise.all(
  [tasks].map(x => x(database)),
);

export default database => modules(database)
  .then(([tasks]) => ({ tasks }));
