<template>
  <v-snackbar
    v-model="model"
    color="primary"
    dismissible
    :timeout="-1"
    bottom
  >
      {{$t(message)}}
    <template v-slot:action="{ attrs }">
      <v-btn
          text
          v-bind="attrs"
          @click="$emit('close')"
      >
        X
      </v-btn>
    </template>

  </v-snackbar>

</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
name: "popup-alert.component",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    message:{
      type:String,
      default: ''
    },
    type:{
      type:String,
      default:''
    }
  },
  computed: {
    model: {
      get: function (): boolean {
        return this.active;
      },
      set: function (newValue: boolean) {
        this.$emit('update:active', newValue);
      }
    }
  },
  beforeDestroy() {
    this.$emit('close')
  }
})
</script>

<style scoped>

</style>