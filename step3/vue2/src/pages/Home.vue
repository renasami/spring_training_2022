<template>
  <div>
  <Header :text="this.info"/>
    <FriendList/>
    <Chat text="fa" />
    <!-- <button @click="tset">f</button> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FriendList from "../components/FriendList.vue"
import Header from "../components/Header.vue";
import Chat from "./Chat.vue"
import { getAllHistoryOfGroup, getAllHistoryOfPersonal } from "../utils/promise"

type Data = {
  info:any
  socket:any
}

export default Vue.extend({
  name: "Home",
  components:{
    Header,
    FriendList,
    Chat
  },
  data():Data{ 
    return {
      info:"fa",
      socket:null
    }
  },
  mounted(){
    this.info = "fa"
    const socket = new WebSocket(`ws://localhost:8080/login/ws_connect?basic=${this.$store.state.key}`)
    socket.onopen = function(){
      console.log("connect")
      socket.onmessage = function(msg) {
        console.log(msg.data)
      }
    }
  },
  methods: {
    addHistory: function (data) {
      const key = Object.keys(data)
      if(key[0] == "personal_message"){
          const obj = data.personal_message
          const friend = this.$store.state.friends.filter(f => f.id == obj.sender_id)
          const id = friend.id
          // const messages = this.$store.state.friendsTalk.filter
      }
    }
  },
  beforeMount: async function(){
    // const friendsTalks = this.$sto
    const friends = this.$store.state.friends.map(friend => {
      return {receiver_id:friend.id}
    })
    const groups = this.$store.state.groups.map(group => {
      return {group_id:group.id}
    })
    const personal = await getAllHistoryOfPersonal(this.$store.state.token,friends)
    const group = await getAllHistoryOfGroup(this.$store.state.token,groups)
    this.$store.commit("updateFriendsTalk",personal)
    this.$store.commit("updateGroupsTalk",group)
    console.log("before mount")
  }
});
</script>
<style scoped>
div {
  float: left;
  height:100vh;
}
</style>