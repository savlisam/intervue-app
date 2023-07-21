<template>
  <v-container class="pa-0" fluid>

    <LeaveDialog
        v-if="leaveDialog"
        :active.sync="leaveDialog"
        @confirm="nextRoute()"
    />

    <v-card class="rounded-0 background">
      <v-card-text>
        {{ $t("messageForm") }}
      </v-card-text>
      <Form key="0" @formFinished="finishForm"/>

    </v-card>
  </v-container>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Form from "../components/Form-stepper.component.vue"
import LeaveDialog from "@/app/components/Leave-dialog.component.vue"
import {NavigationGuardNext} from "vue-router";


/**
 * Form view of application for filling the required form
 * */
export default defineComponent({
  name: "home-page",
  components: {Form, LeaveDialog},
  data: () => ({
    leaveDialog: false as boolean,
    nextRoute: null as unknown as NavigationGuardNext,
    formFinished: false as boolean
  }),
  methods: {
    finishForm() {
      this.formFinished = true
      this.$router.push('/')
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.formFinished) {
      next()

    } else {
      this.leaveDialog = true
      this.nextRoute = next
    }
  }
})
</script>
