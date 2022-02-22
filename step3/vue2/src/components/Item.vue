<template>
  <v-card
  @click="talk">
    <strong>{{ source.username ? source.username : source.name }}</strong>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Item",
  props:["index","source"],
  methods: {
    talk: function () {
      console.log("talk")
      
      const isGroup = this.source.username ? false : true;
      const index = this.index;
      const data = {
        index: index,
        isGroup: isGroup
      }
      // console.log("info",this.$store.state.talkRoomInfo)
      this.$store.commit("test",data)
      this.$nextTick(this.$store.commit("updateInfo",data));
      console.log(this.$store.state.test)
    },
  },
});
</script>
<style scoped>
div {
  height: 20vh;
  width: 100%;
}
v-list-item {
  height: 20vh;
}
</style>