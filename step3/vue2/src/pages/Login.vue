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
         </v-container>
      </v-content>
   </v-app>
</template>

<script lang="ts">
type Data= {
    name:string
    password:string
}
import Vue from 'vue'
export default Vue.extend({
    name: "Login",
    data():Data {
        return{
        name: "",
        password: "",
        }
    },
  props: {
    source: String,
  },
  methods:{
      login():void {
          const name = this.name
          const pass = this.password
          console.log(name, pass)
      }
  }
})
</script>
