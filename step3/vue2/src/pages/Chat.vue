<template>
    <div v-if="isGroup && talks != []" id="chat-space">
        <ul v-for="talk in talks" :key="talk.id">
            <!-- <p>{{ talk }}</p> --> <p>{{ talk.sender_id == myId ? myName : members[talk.sender_id] }}:{{ talk.message }}</p>
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
import Vue from 'vue'
import FriendList from "../components/FriendList.vue"

export default Vue.extend({
    name: 'Chat',
    data() {
        return{
        isGroup:false,
        talks: [],
        myName:"",
        myId: 0,
        selectedItem: null,
        username: "",
        members: [],
        message:""
        }
    },
    beforeMount(){
        this.$store.subscribe((mutation,state) =>{
            if (mutation.type == 'updateInfo') {
            const index = state.talkRoomInfo.index
            this.isGroup = state.talkRoomInfo.isGroup
            if(this.isGroup){
                //扱いやすいようにid:nameのobjectに変換
                this.members = state.groupsTalk[index - state.friends.length].members.reduce(
                    (acc,cur) => {
                        acc[cur.id] = cur.username
                        return acc
                    },{}
                )
                this.talks = this.$store.state.groupsTalk[index - state.friends.length].messages;
            }else{
                this.username = state.friends[index].username
                this.talks = this.$store.state.friendsTalk[index];
            }
            this.myName = state.name
            this.myId = state.id
            this.talks = this.talks.reverse()
         }
        })
    },
    methods: {
        sendMessage: async function () {
            if (!this.selectedFriend) return
            if (!this.message) return
            const headers = {
                Authorization: `${this.$store.state.token}`,
                accept: "application/json",
                "Content-Type":"application/json",
            }
            const data = {
                datetime: Date.now(),
                receiver_id:this.selectedFriend.id,
                message:this.message
            }
            const method = "POST"
            const body = JSON.stringify(data)
            const resposnse = await fetch("http://localhost:8080/message/send_personal_chat",{method,body,headers})
            const result = await resposnse.json()
            console.log(result)
        }
    }

})
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