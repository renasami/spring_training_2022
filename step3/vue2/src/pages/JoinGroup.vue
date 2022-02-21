<template>
    <div>
    <Header/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Join Group</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    id="name"
                    prepend-icon="mdi-account-circle"
                    v-model="name"
                    name="naem"
                    label="enter Id "
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">
                  <v-icon left>mdi-account-multiple-plus</v-icon>
                  Join
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-dialog v-model="error" persistent width="360">
          <v-card align="center">
            <v-card-title> ユーザー名もしくはパスワードが違います </v-card-title>
            <v-card-text>
              もう一度やり直してください
            </v-card-text>
            <v-btn @click="retry" outlined color="red lighten-2" class="mb-3"
              >OK</v-btn
            >
          </v-card>
        </v-dialog>
      </v-container>
    </v-content>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from "../components/Header.vue"

export default Vue.extend({
    name: 'JoinGroup',
    components:{
        Header,
    }
})
</script>
<style scoped>

</style>