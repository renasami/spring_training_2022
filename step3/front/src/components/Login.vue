<template>
    <h1>Login Page</h1>
    <el-input v-model="input" placeholder="Please input" />
    <br>
    <el-input type="password" v-model="pass" placeholder="Please input" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'


export default defineComponent({
    setup() {
        const input = ref('')
        const pass = ref('')
        console.log(input,pass)
    },
})
</script>
<style>
el-input {
    width: 50%;
}
</style>