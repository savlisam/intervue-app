<template>
  <v-menu
      bottom
      offset-y
      max-width="250"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          v-bind="attrs"
          v-on="on"
          large
          text
      >
        <v-icon
            color="primary"
            large
        >
          mdi-menu
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title>
          DarkMode
        </v-list-item-title>
        <v-switch
            @click="$store.commit('toggleDarkMode')"
            color="primary"
            @click.stop=""
        />
      </v-list-item>

      <v-list-item>
        <v-list-item-title>
          Language
        </v-list-item-title>
        <v-select
            dense
            v-model="language"
            :items="languages"
            @click.stop=""
            item-color="primary"
            color="primary"
        >

        </v-select>
      </v-list-item>

    </v-list>
  </v-menu>
</template>

<script lang="ts">
import {defineComponent} from "vue";

/**
 * This component is used to control app settings for Dark mode and Language
 * */
export default defineComponent ({
  name: "SettingsMenu.component",
  data: () => ({
    languages: ['cs', 'en'],
    language: ''
  }),
  watch: {
    language(newLanguage: string){
      this.$store.commit('changeLanguage',newLanguage)
    }
  },
  /**
   * On create sets the selected language according to state
   * */
  created() {
    this.language=this.$store.getters.language
  }
})
</script>

