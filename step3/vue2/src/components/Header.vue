<template>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <div
        class="text-h3 mb-0"
        v-text="this.$store.state.name"
        >
        </div>
      <v-spacer></v-spacer>
       <v-btn
        to="/"
        text
      >
        <span class="mr-2">Let's Talk</span>
        <v-icon>mdi-account-voice</v-icon>
      </v-btn>
       <v-btn
        to="/add-friend"
        text
      >
        <span class="mr-2">Add Friend</span>
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-btn>
      <v-btn
        to="/join-group"
        text
      >
        <span class="mr-2">Join Group</span>
        <v-icon>mdi-account-multiple-plus</v-icon>
      </v-btn>
       <v-btn
        to="/make-group"
        text
      >
        <span class="mr-2">Make Group</span>
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn
        to="/login"
        text
      >
        <span class="mr-2">Log Out</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name:"Header",
    // data() {
    // },
    props:{
        text:String
    }
    
})
</script>
<style scoped>

</style>