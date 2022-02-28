import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import {User,Group,Store} from "@/type"

Vue.use(Vuex);
type TalkRoomInfo = {
  index: number,
  isGroup:boolean
}
export default new Vuex.Store({
  state:{
    id:0,
    name: "",
    password: "",
    token: "",
    key:"",
    friends:<User[]>[],
    groups: <Group[]>[],
    talkRoomInfo:null,
    friendsTalk: [],
    groupsTalk: [],
    test:null,
    index: 0,
    baseURL:"http://api.myj-spring-training-2022.kuroi.link/"
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
      state.groupsTalk = []
      state.friendsTalk = []
    },
    updateInfo(state,info):void {
      state.talkRoomInfo = info
    },
    resetInfo(state) {
      state.talkRoomInfo = {index:0,isGroup:false}
    },
    updateFriends(state,friends:User[]):void {
      state.friends  = friends
    },
    updateGroups(state,group:Group):void {
      state.groups.push(group)
    },
    updateFriendsTalk(state,talks){
      state.friendsTalk = talks
    },
    updateGroupsTalk(state,talks){
      state.groupsTalk = talks
    },
    updatePersonalTalk(state,obj){
      state.friendsTalk[obj.index] = obj.messages
    }
  },
  getters:{
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
