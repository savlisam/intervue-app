<template>
  <v-form
      ref="form"
  >
    <v-container fluid>
      <v-text-field
          v-for="field in firstHalf"
          :key="field.label"
          v-model="field.value"
          :rules="field.rules"
          :label="$t(field.label)"
          filled
          outlined
          validate-on-blur
          :hint="$t(field.hint)"

      />
      <v-card-title class="grey--text pb-3">
        {{ $t('address') }}
      </v-card-title>
      <v-container class="pl-3" fluid>
        <v-text-field
            v-for="field in address"
            :key="field.label"
            v-model="field.value"
            :rules="field.rules"
            :label="$t(field.label)"
            filled
            outlined
            validate-on-blur
        />
      </v-container>

    </v-container>

  </v-form>
</template>

<script lang="ts">
import Vue, {defineComponent} from 'vue'
import rules from "@/utils/rules";
import {Form, IdentificationInfo} from "@/app/interfaces"
import {identificationFormDefinition} from "@/app/definitions/identificationForm";
import {formToInfo, createIdentificationInfo} from "@/utils/services"

/**
 * Component for the third step of Form, receiving and validating user input
 * */
export default defineComponent({
  name: "Identification-info-form.component",
  data: () => ({
    rules: rules,
    identificationForm:identificationFormDefinition,
  }),
  props: {
    trigger: Number
  },
  computed:{
      firstHalf(): Array<Form>{
        return this.identificationForm.slice(0,-4)
      },
      address(): Array<Form>{
        return this.identificationForm.slice(2)
      }
  },
  beforeDestroy() {
    this.identificationForm.forEach(form=>{
      form.value=''
    })
  },
  watch: {
    /**
     * Checks if fields are valid, then emits event to parent with given information
     * */
    trigger(): void {
      if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        this.$emit("validate", formToInfo<IdentificationInfo>(this.identificationForm, createIdentificationInfo()))
      }
    }
  },
})
</script>