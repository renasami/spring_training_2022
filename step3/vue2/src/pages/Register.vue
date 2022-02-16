<template>
  <v-app id="register">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Register form</v-toolbar-title>
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
                  Register
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
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
export default Vue.extend({
  name: "Register",
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
      const url = "http://localhost:8080/user/register"
      const method = "POST"
       const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
      const json = {
        username: this.name,
        password: this.password
      }
      const body = JSON.stringify(json)
      const result = await fetch(url,{method,headers,body});
      console.log(result)
      if (result.status === 422) alert("validError");
      if(result.status === 200) this.$router.push("/login")
    },
     validLanguage: function (str:string): boolean {
      return ( str.match(/^[A-Za-z0-9]*$/) )? true : false
    },
  },
});
</script>