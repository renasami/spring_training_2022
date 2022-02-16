<template>
  <v-app>
  <Header/>
  <FriendList/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";
import FriendList from "../components/FriendList.vue"
import Header from "../components/Header.vue";
export default Vue.extend({
  name: "Home",
  components:{
    Header,
    FriendList
  }
});
</script>
