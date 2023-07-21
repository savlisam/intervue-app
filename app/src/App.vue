<template>
  <v-app>
    <v-app-bar app>
      <v-btn
        large
        text
        @click="$router.push('/')"
      >
        <h1 class="primary--text">
          Form App
        </h1>
      </v-btn>
      <v-spacer></v-spacer>

      <SettingsMenu/>

    </v-app-bar>

    <v-main class="background">
      <v-container fluid class="pa-0" >
        <router-view/>
      </v-container>
    </v-main>
    <popup-alert
        v-if="alert.on"
        :active="alert.on"
        :message="alert.message"
        :type="alert.type"
        @close="alert.on=false"
    />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import SettingsMenu from "@/app/components/SettingsMenu.component.vue"
import PopupAlert from "@/app/components/popup-alert.component.vue"
import {EventBus} from "@/utils/eventBus";
import {AlertInfo} from "@/app/interfaces"

export default Vue.extend({
  name: 'App',
  components: {PopupAlert, SettingsMenu},
  data: () => ({
    alert: {
      message:'',
      type:'',
      on:false
    } as AlertInfo
  }),
  created() {
    EventBus.$on('alert',(newAlert: AlertInfo)=>{
      this.alert=newAlert
    })
  }
});
</script>

