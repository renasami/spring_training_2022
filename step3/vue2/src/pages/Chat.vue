<template>
  <div v-if="isGroup && talks != []" id="chat-space">
    <ul v-for="talk in talks" :key="talk.id">
      <!-- <p>{{ talk }}</p> -->
      <p>
        {{ talk.sender_id == myId ? myName : members[talk.sender_id] }}:{{
          talk.message
        }}
      </p>
    </ul>
    <div id="input-space">
      <v-text-field v-model="message"></v-text-field>
      <v-btn @click="sendMessage">送信</v-btn>
    </div>
  </div>
  <div v-else id="chat-space">
    <ul v-for="talk in talks" :key="talk.id">
      <!-- <p>{{ talk }}</p> -->
      <p>{{ talk.sender_id == myId ? myName : username }}:{{ talk.message }}</p>
    </ul>
    <div id="input-space">
      <v-text-field v-model="message"></v-text-field>
      <v-btn @click="sendMessage">送信</v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import FriendList from "../components/FriendList.vue";
import { generateAllRequestOptions } from "../utils/generaters";

export default Vue.extend({
  name: "Chat",
  data() {
    return {
      isGroup: false,
      talks: [],
      myName: "",
      myId: 0,
      subjectId: 0,
      username: "",
      members: [],
      message: "",
    };
  },
  beforeMount() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type == "updateInfo") {
        const index = state.talkRoomInfo.index;
        this.isGroup = state.talkRoomInfo.isGroup;
        if (this.isGroup) {
          //扱いやすいようにid:nameのobjectに変換
          this.members = state.groupsTalk[
            index - state.friends.length
          ].members.reduce((acc, cur) => {
            acc[cur.id] = cur.username;
            return acc;
          }, {});
          this.username = ""
          this.subjectId = state.groups[index -state.friends.length]
          console.log(this.members)
          this.talks = this.$store.state.groupsTalk[index - state.friends.length].messages;
        } else {
          this.username = state.friends[index].username;
          this.subjectId = state.friends[index].id
          this.talks = this.$store.state.friendsTalk[index];
          console.log(this.$store.state.friendsTalk)
          this.members = []
        }
        this.myName = state.name;
        this.myId = state.id;
      }
    });
  },
  methods: {
    sendMessage: async function () {
      if (!this.username && !this.members) return;
      if (!this.message) return;
      let data = {
        datetime: Date.now(),
        message: this.message,
      };
      let param:string 
      if (this.isGroup) {
        data["group_id"] = this.subjectId.id
        param = "send_group_chat"

      }else{
        data["receiver_id"] = this.subjectId
        param = "send_personal_chat"
      }
      console.log(data)
      this.message = ""
      const { headers, method, body } = generateAllRequestOptions(this.$store.state.token,data);      
      const resp = await fetch(`${this.$store.state.baseUrl}/message/${param}`,{ headers, method, body } );
    },
  },
});
</script>
<style scoped>
#chat-space {
  /* margin-left: 25vw; */
  width: 70vw;
  height: 100vh;
}
#input-space {
  display: flex;
  position: absolute;
  width: 65vw;
  bottom: 10vh;
  /* background-color:green; */
}
</style>