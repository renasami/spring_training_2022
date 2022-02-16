<template>
    <div id="chat-space">
        <h1>{{ this.$store.state.index }}</h1>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import FriendList from "../components/FriendList.vue"

export default Vue.extend({
    name: 'Chat',
    props:["text"]
})
</script>
<style scoped>
#chat-space {
    /* margin-left: 25vw; */
    width: 75vw;
    height: 100vh;
}
</style>