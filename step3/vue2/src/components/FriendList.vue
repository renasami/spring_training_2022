<template>
  
    <div id="friends">
  
     <VirtualList
        id="virtual-list"
        :data-key="'id'"
        :data-sources="items"
        :data-component="itemComponent"
      />
      <VirtualList
        id="group-list"
        :data-key="'id'"
        :data-sources="groups"
        :data-component="groupComponent"
        />
      <slot></slot>
    </div>
  
</template>
<script lang="ts">
import Vue from "vue";
import VirtualList from 'vue-virtual-scroll-list'
import Item from "./Item.vue"
import GroupItem from "./GroupItem.vue"
export default Vue.extend({
  name:"FriendList",
  data() {
      return { 
          itemComponent:Item,
          groupComponent:GroupItem,
          items:[],
          groups:[],
          friends:[]
      }
    },
    components:{
        VirtualList,
    },
    beforeMount:function(){
        const reshapedGroups = this.$store.state.groups.map(group =>{
            console.log(group)
            return group
        })
        this.friends = this.$store.state.friends
        // this.groups = this.$store.state.groups
        this.items = this.$store.state.friends.concat(this.$store.state.groups)
        console.log(this.groups)
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