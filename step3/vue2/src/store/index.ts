import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import {User,Group,Store} from "@/type"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    id:0,
    name: "",
    password: "",
    token: "",
    key:"",
    friends:<User[]>[],
    groups: <Group[]>[],
    index:0,
  },
  mutations: {
    updateStore(state,user:Store):void {
        state.id = user.id;
        state.name = user.name;
        state.password = user.password;
        state.token = user.token;
        state.key = user.key;
        state.friends = user.friends;
        state.groups = user.groups;
    },
    resetStore(state):void {
      state.id = 0;
      state.name = ''
      state.password = ''
      state.token = ''
      state.key = ''
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
  getters:{
    index(state):number {return state.index}
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
