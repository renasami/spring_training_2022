<template>
  <div>
  <Header :text="this.info"/>
    <FriendList/>
    <Chat text="fa" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";
import FriendList from "../components/FriendList.vue"
import Header from "../components/Header.vue";
import Chat from "./Chat.vue"

type Data = {
  info:any
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
      info:"fa"
    }
  },
  mounted(){
    // this.$set(self.info,this.$store.state.name)
    this.info = "fa"
    console.log(this.info)
  }
});
</script>
<style scoped>
div {
  float: left;
  height:100vh;
}
</style>