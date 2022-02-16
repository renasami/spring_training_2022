<template>
    <div>{{ index }} - {{ source.text }}</div>
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