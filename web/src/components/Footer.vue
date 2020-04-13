<style scoped lang="scss"></style>

<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>{{ siteName }}</strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Configuration } from "../models/appConfig";

@Component
export default class Footer extends Vue {
  private siteName = "";

  created() {
    const appConfig = this.$store.getters[
      "configuration/getConfiguration"
    ] as Configuration;
    this.siteName = appConfig.app.layout.siteName;
  }
}
</script>
