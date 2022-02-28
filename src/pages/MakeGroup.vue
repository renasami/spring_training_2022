<template>
    <div>
    <Header/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Make Group</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    id="name"
                    prepend-icon="mdi-account-circle"
                    v-model="name"
                    name="naem"
                    label="enter group name"
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-checkbox
                  v-model="join"
                  label="作成したグループに参加する"
                />
                <v-btn color="primary" @click="create">
                  <v-icon left>mdi-account-multiple-plus</v-icon>
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-dialog v-model="error" persistent width="360">
          <v-card align="center">
            <v-card-title> {{ message }} </v-card-title>
            <v-card-text>
              もう一度やり直してください
            </v-card-text>
            <v-btn @click="error = !error" outlined color="red lighten-2" class="mb-3"
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
import {generateAllRequestOptions} from "../utils/generaters"

export default Vue.extend({
    name: 'MakeGroup',
    components:{
        Header,
    },
    data(){
      return {
        join:true,
        name:null,
        error:false,
        message:""
      }
    },
    methods: {
      create:async function (){
        if (!this.name) {
          this.message = "グループ名を入力してください"
          this.error = !this.error
          return
        }
        const data = {
          group_name:this.name,
          join_this_group:this.join
        }
        const {headers,method,body} = generateAllRequestOptions(this.$store.state.token,data)
        const response = await fetch(`${this.$store.state.baseUrl}group/create`,{headers,method,body})
        if (response.status == 422) {
          this.message = "失敗しました。"
          this.error = !this.error
          return
        } 
        const json = await response.json()
        if (this.join === true) {
          this.$store.commit("updateGroups",json)
        }
        alert(`作成されたグループIDは${json.id}です。`)
        this.$router.push("/")
      }
    }
})
</script>
<style>
    
</style>