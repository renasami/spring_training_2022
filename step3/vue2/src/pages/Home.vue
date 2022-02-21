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
      socket.send("fas")
    }
    this.socket = socket
  },
  methods: {
    test: function():void{
      this.socket.send("hello")
    }
  }
});
</script>
<style scoped>
div {
  float: left;
  height:100vh;
}
</style>