const map = callback => array => array.map(callback);

export const createState = (database) => {
  const tasks = database.keys()
    .then(map(key => database.getItem(key)))
    .then(Promise.all.bind(Promise));

  return tasks.then(tasks => ({ tasks }));
};
