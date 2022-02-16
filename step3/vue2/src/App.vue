<template>
  <v-app>
    <Header/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue"
import SideBar from "./components/SideBar.vue"
export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
  components:{
    Header,
    SideBar,
  }
});
</script>
