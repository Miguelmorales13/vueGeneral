<template>
  <v-app id="app" >
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue, PropSync, Watch } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from "vuex-class";
import { TypesGlobales } from './store/globales/Globales.types';
// @ is an alias to /src
@Component
export default class App extends Vue {
  
  mounted(){
    this.getTheme()
    console.log(this.theme);
    // @ts-ignore
    this.$vuetify.theme.dark = this.theme!='false'
    
  }

  @State(`theme`,{namespace:'globales'}) theme:any
  @Action(`globales/${TypesGlobales.actions.GET_THEME}`) getTheme:any
}

</script>


<style lang="scss">

</style>