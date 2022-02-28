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
                    v-model="group_id"
                    name="group id"
                    label="enter group id "
                    type="text"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="join">
                  <v-icon left>mdi-account-multiple-plus</v-icon>
                  Join
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
import { generateAllRequestOptions } from "../utils/generaters"
export default Vue.extend({
    name: 'JoinGroup',
    components:{
        Header,
    },
    data(){
        return {
            group_id:null,
            error:false,
            message:""
        }
    },
    methods: {
        join: async function() {
            if (!this.group_id){
                this.message = "グループIDを入力してください"
                this.error = !this.error
                return
            }
            const data = {
                group_id:this.group_id
            }
            const {headers,method,body} = generateAllRequestOptions(this.$store.state.token,data)
            const response = await fetch(`${this.$store.state.baseUrl}group/join`,{method,body,headers})
            if (response.status === 422 ){
                this.message = "そのIDのグループは存在しません"
                this.error = !this.error
                return
            }
            const json = await response.json()
            this.$store.commit("updateGroups",json)
            this.$router.push("/")
        },
    }
})
</script>
<style scoped>

</style>