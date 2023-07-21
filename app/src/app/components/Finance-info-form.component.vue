<template>
  <v-form
      ref="form"
  >
    <v-container fluid>
      <v-container
          v-for="field in financeForm "
          :key="field.label"
          fluid
      >
        <v-text-field
            v-model="field.value"
            :label="$t(field.label)"
            :rules="field.rules"
            filled
            outlined
            validate-on-blur
            :hide-details="field.label==='investAmount'"
            :suffix="field.label==='investAmount'?'Kč' : ''"
            :hint="$t(field.hint)"
        />
        <v-slider
          v-if="field.label==='investAmount'"
          v-model="field.value"
          min="10000"
          max="10000000"
          step="10000"
          hide-details
          >
        </v-slider>
      </v-container>
      <v-checkbox
          v-model="allowInformationProcessing"
          :label="$t('allowPersonalInfo')"
          :rules="[rules.trueRequirement(allowInformationProcessing)]"
          class="ma-0"
          color="primary"
      >

      </v-checkbox>
    </v-container>

  </v-form>
</template>

<script lang="ts">
import Vue, {defineComponent} from 'vue'
import rules from "@/utils/rules";
import {FinanceInfo} from "@/app/interfaces"
import {financeFormDefinition} from "@/app/definitions/financeForm"
import {createFinanceInfo, formToInfo} from "@/utils/services";

/**
 * Component for the second step of Form, receiving and validating user input
 * */
export default defineComponent({
  name: "Finance-info-form.component",
  data: () => ({
    financeForm: financeFormDefinition,
    rules: rules,
    allowInformationProcessing: false,
  }),
  props: {
    trigger: Number
  },
  beforeDestroy() {
    this.financeForm.forEach(form=>{
      form.value=''
    })
  },
  watch: {
    /**
     * Checks if fields are valid, then emits event to parent with given information
     * */
    trigger(): void {
      if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
        this.$emit("validate", formToInfo<FinanceInfo>(this.financeForm, createFinanceInfo()))
      }
    }
  },
})
</script>
