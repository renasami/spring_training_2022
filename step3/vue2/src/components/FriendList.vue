<template>
  
    <div id="friends">
      <VirtualList
        id="virtual-list"
        :data-key="'uid'"
        :data-sources="items"
        :data-component="itemComponent"
      />
    </div>
  
</template>
<script lang="ts">
import Vue from "vue";
import VirtualList from 'vue-virtual-scroll-list'
import Item from "./Item.vue"
export default Vue.extend({
  name:"FriendList",
  data() {
      return { 
          itemComponent:Item,
          items: [...Array(1000)].map((_,i) => {return{
              uid:i,
              text:`item${i}`
          }})
      }
    },
    components:{
        VirtualList,
    }
});
</script>
<style>
#friends {
    height:100vh; 
    /* border:solid; */
    padding-left: 25evw;
}
#virtual-list {
    height: 100vh; 
    overflow-y: auto;
    border:1px solid;
    width: 25vw;
}
</style>