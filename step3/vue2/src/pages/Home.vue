<template>
  <v-app>
  <Header :text="info.username"/>
  <FriendList/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "../components/HelloWorld.vue";
import FriendList from "../components/FriendList.vue"
import Header from "../components/Header.vue";
const sample = [{
    "id": 1,
    "username": "sei",
    "friends": [
        {
            "id": 2,
            "username": "sei2"
        },
        {
            "id": 3,
            "username": "sei3"
        }
    ],
    "groups": [
        {
            "id": 1,
            "name": "group1",
            "members": [
                {
                    "id": 1,
                    "username": "sei"
                },
                {
                    "id": 2,
                    "username": "sei2"
                }
            ]
        },
        {
            "id": 2,
            "name": "group2",
            "members": [
                {
                    "id": 1,
                    "username": "sei"
                },
                {
                    "id": 3,
                    "username": "sei3"
                }
            ]
        }
    ]
}]

type Data = {
  info:any
}

export default Vue.extend({
  name: "Home",
  components:{
    Header,
    FriendList
  },
  data():Data{ 
    return {
      info:null
    }
  },
  mounted: function() {
    this.info = sample[0]
  }
});
</script>
