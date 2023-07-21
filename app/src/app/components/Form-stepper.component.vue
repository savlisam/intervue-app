<template>
  <v-container fluid>
    <v-stepper
        v-model="step"
        color="secondary"
        vertical
    >
      <v-stepper-step step="1">
        {{ $t("basicInfo") }}
      </v-stepper-step>
      <v-stepper-content step="1">
        <v-card-text class="px-5 py-0">
          {{ $t("messageContactInfo")}}
        </v-card-text>
        <v-col lg="3" md="4" sm="6">
          <BasicInfoForm :trigger="basicInfoTrigger" @validate="(data)=>setBasicInfo(data) "/>
        </v-col>
        <v-btn
            color="primary"
            @click="basicInfoTrigger++"
        >
          {{ $t("continue") }}
        </v-btn>
      </v-stepper-content>
      <v-stepper-step step="2">
        {{ $t("identificationInfo") }}
      </v-stepper-step>
      <v-stepper-content step="2">
        <v-card-text class="px-5 py-0">
          {{ $t("messageIdentificationInfo")}}
        </v-card-text>
        <v-col lg="3" md="4" sm="6">
          <IdentificationInfoForm :trigger="identificationInfoTrigger" @validate="(data)=>setIdentificationInfo(data) "/>
        </v-col>
        <v-btn
            class="mr-3"
            color="primary"
            @click="step--"
        >
          {{ $t("back") }}
        </v-btn>
        <v-btn
            color="primary"
            @click="identificationInfoTrigger++"
        >
          {{ $t("continue") }}
        </v-btn>
      </v-stepper-content>
      <v-stepper-step step="3">
        {{ $t("financeInfo") }}
      </v-stepper-step>
      <v-stepper-content step="3">
        <v-card-text class="px-5 py-0">
          {{ $t("messageFinanceInfo")}}
        </v-card-text>

        <v-col lg="3" md="4" sm="6">
          <FinanceInfoForm :trigger="financeInfoTrigger" @validate="(data)=>setFinanceInfo(data) " />
        </v-col>
        <v-btn
            class="mr-3"
            color="primary"
            @click="step--"
        >
          {{ $t("back") }}
        </v-btn>
        <v-btn
            color="primary"
            @click="financeInfoTrigger++"
            :loading="loading"
        >
          {{ $t("submit") }}
        </v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>

<script lang="ts">
import BasicInfoForm from "@/app/components/Basic-info-form.component.vue"
import IdentificationInfoForm from "@/app/components/Identification-info-form.component.vue"
import FinanceInfoForm from "@/app/components/Finance-info-form.component.vue"
import {defineComponent} from 'vue'
import {BasicInfo, FinanceInfo, FormInfo, IdentificationInfo} from "@/app/interfaces";
import {UserAPI} from "@/api/UserAPI"
import {createAlert} from "@/utils/services";

export default defineComponent({
  components: { IdentificationInfoForm, BasicInfoForm, FinanceInfoForm},
  name: "From-stepper.component",
  data: () => ({
    loading:false,
    step: 1,
    leaveDialog: false,
    basicInfoTrigger: 0,
    identificationInfoTrigger: 0,
    financeInfoTrigger: 0,

    basicInfo: {} as BasicInfo,
    identificationInfo: {} as IdentificationInfo,
    financeInfo:{} as FinanceInfo

  }),
  methods: {
    setBasicInfo(data: BasicInfo){
      this.basicInfo = data
      this.step++
    },
    setIdentificationInfo(data: IdentificationInfo){
      this.identificationInfo = data
      this.step++
    },
    setFinanceInfo(data: FinanceInfo){
      this.financeInfo = data
      this.submit()
    },

    getData(){
      this.basicInfoTrigger=-1
    },
    submit() {
      this.loading=true
      UserAPI.createUser(this.mergeData())
          .then(()=>{
            this.$emit("formFinished")
            createAlert('successForm','success')
          })
          .catch((e:Error)=>{
            createAlert('errorForm','error')
            console.log(e.message)
          })
          .finally(()=>{
            this.loading=false
          })
    },
    mergeData(): FormInfo {
      return {
        firstName: this.basicInfo.firstName,
        lastName: this.basicInfo.lastName,
        mail: this.basicInfo.mail,
        phoneNumber: this.basicInfo.phoneNumber,
        idNumber: this.identificationInfo.idNumber,
        personalId: this.identificationInfo.personalId,
        city: this.identificationInfo.city,
        street: this.identificationInfo.street,
        houseNumber: this.identificationInfo.houseNumber,
        PSC: this.identificationInfo.PSC,
        bankAccountNumber: this.financeInfo.bankAccountNumber,
        investingAmount: this.financeInfo.investingAmount,
      }
    },
  },
})
</script>
