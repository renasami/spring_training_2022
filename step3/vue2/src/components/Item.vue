<template>
    <div @click="talk">{{ index }} - {{ source.username }}</div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Item",
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      talk: function (){ 
          this.$store.commit("updateIndex",this.index);
      }
    }

})
</script>
<style scoped>
    div{
        height:10vh;
        border: 1px solid;
        width:100%;
    }
</style>