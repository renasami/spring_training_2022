<template>
  <v-app>
  <Header :text="this.info"/>
  <FriendList/>
  <p>{{ info }}</p>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";
import FriendList from "../components/FriendList.vue"
import Header from "../components/Header.vue";

type Data = {
  info:any
}

export default Vue.extend({
  name: "Home",
  components:{
    Header,
    FriendList
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
