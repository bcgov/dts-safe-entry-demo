<style lang="scss">
.v-toolbar__content {
  border-bottom: 2px solid var(--v-secondary-base);
}

.issuer-logo {
  height: 50px;
  width: 50px;
}

.v-application .app-title {
  color: #fff;
  text-decoration: none;
}
</style>

<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Logo"
        class="shrink mr-2 issuer-logo"
        contain
        src="logo.svg"
        transition="scale-transition"
      />

      <router-link to="/" class="app-title"
        ><h1>{{ headerTitle }}</h1></router-link
      >
    </div>

    <v-spacer></v-spacer>

    <div v-if="oidcUser">
      Signed in as {{ oidcUser.given_name }} {{ oidcUser.family_name }}
      <v-btn @click="signOutOidc" text>
        <span class="mr-2">Leave</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </div>
    <div v-else>
      <v-btn outlined to="/manage">Log in</v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
import { Configuration } from "../models/appConfig";

@Component({
  computed: {
    ...mapGetters("oidcStore", ["oidcUser"])
  },
  methods: {
    ...mapActions("oidcStore", ["signOutOidc"])
  }
})
export default class Header extends Vue {
  @Prop() logoutUrl!: string;
  private headerTitle = "";

  created() {
    const appConfig = this.$store.getters[
      "configuration/getConfiguration"
    ] as Configuration;
    this.headerTitle =
      appConfig.app.layout.headerTitle || appConfig.app.layout.siteName;
  }
}
</script>
