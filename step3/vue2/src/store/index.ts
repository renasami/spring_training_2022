import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import {User,Group,Store} from "@/type"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    name: "",
    token: "",
    friends:<User[]>[],
    groups: <Group[]>[],
    index:0
  },
  mutations: {
    updateStore(state,user:Store):void {
        state.name = user.name;
        state.token = user.token;
        state.friends = user.friends;
        state.groups = user.groups;
    },
    resetStore(state):void {
      state.name = ''
      state.token = ''
      state.friends = []
      state.groups = []
    },
    updateIndex(state,ind:number):void {
      state.index = ind
    },
    resetIndex(state) {
      state.index = 0
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
