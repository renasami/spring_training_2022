<template>
  <h1>Hello Chat App</h1>
  <router-link to="/login">Page1へ遷移</router-link>
  <SideBar />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../common/SideBar.vue"

export default defineComponent({
  setup() {},

});
</script>

