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
  props: {
    index: {
      // index of current item
      type: Number,
    },
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    talk: function () {
      
      this.$store.commit("updateIndex", this.index);
    },
  },
  mounted(): void {
    console.log(this.source.username);
    console.log(this.index);
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