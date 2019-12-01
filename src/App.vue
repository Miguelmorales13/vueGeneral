<template>
  <v-app id="app" :dark="theme==='false'?false:true">
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync } from 'vue-property-decorator';
// @ is an alias to /src
import { MsgSuccess, MsgInfo, MsgError, MsgWarning } from "@/plugins/toastr";

@Component
export default class App extends Vue {
  theme='false'
  created(){
    MsgSuccess('hola',"si")
    MsgInfo('b dgfvbd hb',"si")
    MsgError('hjbhb ',"si")
    MsgWarning('jkbhjbhb',"si")
    console.log("si");
    
  }
}

</script>
