<template>
  <v-dialog
      v-model="model"
      width="500"
  >
    <v-card>
      <v-card-text class="pt-5">
        {{ $t("leaveWarn") }}
      </v-card-text>
      <v-card-actions>
        <v-btn
            @click="model = false"
        >
          {{ $t("stay") }}
        </v-btn>
        <v-spacer/>
        <v-btn
            @click="$emit('confirm')"
        >
          {{ $t("leave") }}

        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import {defineComponent} from "vue";

/**
 * Component for dialog with user, checking for leaving in middle of form
 * */
export default defineComponent({
  name: "Leave-dialog.component",
  props: {
    active: {
      type: Boolean,
      default: false
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
  }
})
</script>
