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
// import HelloWorld from "../components/HelloWorld.vue";
import FriendList from "../components/FriendList.vue"
import Header from "../components/Header.vue";
import Chat from "./Chat.vue"
import {Manager} from "socket.io-client"
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
    console.log(this.info)
    const socket = new WebSocket("ws://ren:ren1000@localhost:8080/login/ws_connect?token=token")
    console.log(this.$store.state.token)
    // this.socket = socket
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