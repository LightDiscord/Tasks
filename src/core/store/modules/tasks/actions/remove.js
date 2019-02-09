import { Database } from "../../..";

export default ({ commit }, id) => {
  return Database.removeItem(id)
    .then(() => commit('remove', id));
}
