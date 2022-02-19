<template>
    <div id="chat-space">
        <ul v-for="talk in talks" :key="talk.id">
            <p>{{ talk }}</p>
            <p>id: {{ this }}</p>
        </ul>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import FriendList from "../components/FriendList.vue"

export default Vue.extend({
    name: 'Chat',
    data() {
        return{
        talks: []
        }
    },
    beforeMount(){
        this.$store.subscribe(async (mutation,state) =>{
        if (mutation.type === 'updateIndex') {
            const selectedFriend = state.friends[state.index];
            console.log(selectedFriend)
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
</style>