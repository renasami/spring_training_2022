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
import {User} from "../type"
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
    // const addHistory = this.addHistory()
    const self:any = this
    socket.onopen = function(){
      console.log("connect")
      socket.onmessage = function(msg) {
        // console.log(msg.data)
        self.addHistory(msg.data)
      }
    }
  },
  methods: {
    addHistory: function (data: string):void {
      const json = JSON.parse(data)
      const key = Object.keys(json)
      if(key[0] == "personal_message"){
          const obj = json.personal_message
          let friend: any
          if(obj.sender_id == this.$store.state.id){
             friend = this.$store.state.friends.filter((f,i) => f.id == obj.receiver_id )
          }else{
             friend = this.$store.state.friends.filter((f,i) => f.id == obj.sender_id)
          }
          //array.indexOf( value )でindexを検索
          const index = this.$store.state.friends.indexOf(friend[0])
          const messages = this.$store.state.friendsTalk[index]
          messages.push(obj)
          let updatableObj = this.$store.state.friendsTalk
          updatableObj[index] = messages
          this.$store.commit("updateFriendsTalk",updatableObj)
      }else{
        const obj = json.group_message
        const group = this.$store.state.groups.filter(g => g.id == obj.group_id)
        const index = this.$store.state.groups.indexOf(group[0])
        const talk = this.$store.state.groupsTalk[index]
        talk.messages.push(obj)
        let updatableObj = this.$store.state.groupsTalk
        updatableObj[index] = talk
        console.log(updatableObj)
        this.$store.commit("updateGroupsTalk",updatableObj)
        
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