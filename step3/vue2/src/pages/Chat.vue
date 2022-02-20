<template>
    <div id="chat-space">
        <ul v-for="talk in talks" :key="talk.id">
            <!-- <p>{{ talk }}</p> -->
            <p>{{ talk.sender_id == myId ? myName : selectedFriend.username }}:{{ talk.message }}</p>
        </ul>
        <div id="input-space">
        <v-text-field></v-text-field>
        <v-btn>送信</v-btn>
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
        talks: [],
        myName:"",
        myId: 0,
        selectedFriend: null,
        }
    },
    beforeMount(){
        this.$store.subscribe(async (mutation,state) =>{
        if (mutation.type == 'updateIndex') {
            const selectedFriend = state.friends[state.index];
            this.myName = this.$store.state.name
            this.selectedFriend = selectedFriend
            this.myId = this.$store.state.id
            const headers = {
            Authorization: state.token,
            accept: "application/json",
            };
            const rsponse = await fetch(`http://localhost:8080/message/personal_chat_history?receiver_id=${selectedFriend.id}`,{headers})
            const text = await rsponse.text()
            this.talks = JSON.parse(text)
         }
        })
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