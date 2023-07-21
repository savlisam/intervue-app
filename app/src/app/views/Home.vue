<template>
  <v-container>
  <v-layout justify-space-around>
    <v-card class="px-5 py-5 mt-5">
      <v-card-text>
        {{$t('messageHome')}}
      </v-card-text>
      <v-layout justify-space-around>
        <v-btn
            @click="$router.push('/form')"
            large
            color="primary"
            class="px-10 py-5"
        >
          <h3 class="textColor--text">
            {{ $t('fillForm') }}
          </h3>
        </v-btn>
      </v-layout>

    </v-card>
  </v-layout>

  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue"

/**
 * Homepage View of Application
 * */
export default defineComponent({
name: "Title-page",
})
</script>

<style scoped>

</style>