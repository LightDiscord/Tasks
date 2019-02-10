import { Database } from "../../..";

export default ({ commit }, id) => {
  return Database.getItem(id)
    .then((task) => ({ ...task, done: !task.done }))
    .then((task) => {
      commit('update', task);

      return Database.setItem(id, task);
    })
}
