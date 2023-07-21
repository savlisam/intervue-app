<template>
  <v-form
      ref="form"
  >
    <v-container fluid>
      <v-text-field
        v-for="field in basicForm"
        :key="field.label"
        v-model="field.value"
        :rules="field.rules"
        :label="$t(field.label)"
        filled
        outlined
        validate-on-blur
        :hint="$t(field.hint)"
      />
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue,{defineComponent} from 'vue'
import rules from "@/utils/rules";
import {BasicInfo} from "@/app/interfaces"
import {basicFormDefinition} from "@/app/definitions/basicForm";
import {formToInfo,createBasicInfo} from "@/utils/services"

/**
 * Component for the first step of Form, receiving and validating user input
 * */
export default defineComponent({
  name: "Basic-info-form.component",
  data: () => ({
    basicForm: basicFormDefinition,
    rules: rules,
  }),
  props: {
    trigger: Number
  },
  beforeDestroy() {
    this.basicForm.forEach(form=>{
      form.value=''
    })
  },
  watch: {
    /**
     * Checks if fields are valid, then emits event to parent with given information
     * */
    trigger(): void {
      if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        this.$emit("validate", formToInfo<BasicInfo>(this.basicForm, createBasicInfo()))
      }
    }
  },
})
</script>