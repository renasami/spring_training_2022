<template>
  
    <div id="friends">
  
     <VirtualList
        id="virtual-list"
        :data-key="'id'"
        :data-sources="items"
        :data-component="itemComponent"
      />
      <slot></slot>
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
          }}),
          friends:[]
      }
    },
    components:{
        VirtualList,
    },
    beforeMount:function(){
        this.friends = this.$store.state.friends
        this.items = this.$store.state.friends
        console.log(this.items)
    }
});
</script>
<style>
#friends {
    height:100vh; 
    width: 25vw;
    margin:0;
    padding:0;
    background-color: whitesmoke;
    /* border:solid; */
    /* padding-left: 25evw;
    padding-right: 0;
    margin-right: 0; */
}
#virtual-list {
    height: 100vh; 
    overflow-y: auto;
    border:1px solid;
    width: 25vw;
    margin: 0;
}
</style>