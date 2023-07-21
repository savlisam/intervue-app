<template>
 <v-text-field
    filled
    validate-on-blur
    outlined
    :label="$t(label)"
    :rules=rules
    v-model="model"
  />
</template>

<script >
import {defineComponent} from "vue";

export default defineComponent ({
name: "c-text-field",
  props:{
    label: String,
    rules: Array,
    value: String
  },
  computed:{
    model:{
      get: function (): string {
        return this.value;
      },
      set: function (newValue: string) {
        this.$emit('update:value', newValue);
      }
    }
  }
})
</script>
