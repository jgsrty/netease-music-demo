import { createStore } from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

export default createStore({
  state,
  mutations,
  actions,
});
