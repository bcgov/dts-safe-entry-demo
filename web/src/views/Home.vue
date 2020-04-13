<template>
  <v-container class="intro mb-4">
    <v-row>
      <v-col>
        <h1 class="my-4 display-1">
          Welcome to the BC Essential Services Registry
        </h1>
        <p class="title">
          Getting started? Use the links below. If you are returning to the
          service, click the Log In link at the top right corner of the page.
        </p>
        <v-skeleton-loader boilerplate type="paragraph"></v-skeleton-loader>
        <br />
        <v-skeleton-loader boilerplate type="sentences"></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card color="light-blue lighten-4" flat>
          <v-card-title>
            Business Owners/Directors
          </v-card-title>
          <v-card-text>
            <router-link class="title" to="/pre-register">
              Register your Organization
              <v-icon>mdi-arrow-right-circle-outline</v-icon></router-link
            >
          </v-card-text>
        </v-card>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.intro a {
  text-decoration: none;
  border-bottom: 1px solid transparent;
  padding-bottom: 0.2em;
  &:hover,
  &:focus {
    border-bottom-color: var(--v-anchor-base);
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
