import { Database } from "../../..";

export default ({ commit }, task) => {
  return Database.setItem(task.id, task)
    .then(() => commit('create', task));
}
