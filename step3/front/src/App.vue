<template>
  <v-theme-provider theme="light" with-background class="pa-10">
    <div id="app">
      <router-view />
    </div>
  </v-theme-provider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue';
export default defineComponent({
  name: "App",
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>