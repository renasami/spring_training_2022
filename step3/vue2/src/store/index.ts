import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import {User,Group} from "@/type"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    name: "",
    token: "",
    friends:<User[]>[],
    groups: <Group[]>[],
  },
  mutations: {
    updateUser(state,user):void {
        state.name = user.name;
        state.token = user.token;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
