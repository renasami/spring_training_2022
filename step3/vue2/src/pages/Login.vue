<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    id="name"
                    prepend-icon="mdi-account-circle"
                    v-model="name"
                    name="naem"
                    label="name"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="pas"
                    prepend-icon="mdi-key"
                    v-model="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">
                  <v-icon left>mdi-login</v-icon>
                  Login
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
  </v-app>
</template>

<script lang="ts">
type Data = {
  name: string;
  password: string;
  error: boolean;
};
import Vue from "vue";
import {Store} from "../type"

export default Vue.extend({
  name: "Login",
  data(): Data {
    return {
      name: "",
      password: "",
      error: false
    };
  },
  props: {
    source: String,
  },
  methods: {
    login: async function (): Promise<void> {
      if (this.name === "" || this.password === "") return;
      if (!this.validLanguage(this.name)) return;
      let store:Store 
      const key = btoa(`${this.name}:${this.password}`);
      const token = `Basic ${key}`
      const headers = {
        Authorization: token,
        accept: "application/json",
        "Content-Type":"application/json",
      };
      const url ="http://api.myj-spring-training-2022.kuroi.link/login"
      const result = await fetch("http://api.myj-spring-training-2022.kuroi.link/login",{headers});
      const json = await result.json();
      if (result.status === 500)  alert("Internal Server Error")
      if (result.status !== 200) this.error = true;
      if (result.status === 200) {
         this.$store.commit("updateStore",{
            id: json.id,
            name:json.username,
            password:this.password,
            token:token,
            key:key,
            friends:json.friends,
            groups:json.groups
         })
         this.$router.push("/")
      }
    },
     validLanguage: function (str:string): boolean {
      return ( str.match(/^[A-Za-z0-9]*$/) )? true : false
    },
    retry: function (): void {
      console.log("fa");
      this.error = false;
    },
  },
});
</script>
