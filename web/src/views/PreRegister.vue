<template>
  <v-container class="mb-4">
    <v-row>
      <v-col>
        <h1 class="my-4 display-1">
          Contact-less identity verification for restricted areas.
        </h1>
        <p>
          Welcome to SafeEntryBC, where you can configure a contact-less
          request for identity information for controlling access to locations
          under your control.
        </p>
        <p>
          Ready to get started? Use the links below. Use the login link in the
          top right if you are returning to the service.
        </p>
        <v-skeleton-loader boilerplate type="paragraph"></v-skeleton-loader>
        <br />
        <v-skeleton-loader boilerplate type="sentences"></v-skeleton-loader>
        <br />
        <v-expansion-panels>
          <v-expansion-panel>
            <div class="num-row">
              <div class="number">1</div>
              <div class="num-body">
                <v-expansion-panel-header
                  ><h3>Get a Digital Wallet</h3></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <v-skeleton-loader
                    boilerplate
                    type="sentences"
                  ></v-skeleton-loader>
                  <v-btn
                    href="https://github.com/bcgov/identity-kit-poc/blob/master/docs/GettingApp.md"
                    target="_blank"
                    color="primary"
                    class="my-2"
                    >Instructions</v-btn
                  >
                </v-expansion-panel-content>
              </div>
            </div>
          </v-expansion-panel>
          <v-expansion-panel>
            <div class="num-row">
              <div class="number">2</div>
              <div class="num-body">
                <v-expansion-panel-header
                  ><h3>
                    Get a Government-Issued "Verified Person" Credential
                  </h3></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <v-skeleton-loader
                    boilerplate
                    type="sentences"
                  ></v-skeleton-loader>
                  <v-alert text border="left" color="secondary darken-1" icon="mdi-flag">
                    For this demo please use the <b>Unverified Person</b> button to get
                    a (very) unofficial credential. The
                    "Verified Person" link is for a limited access program that allows
                    invited participants to get a true "Verified Person" credential based
                    on data from the digital version of their BC Services Card.
                  </v-alert>
                  <v-btn
                    href="https://openvp-issuer.pathfinder.gov.bc.ca/"
                    target="_blank"
                    color="primary"
                    class="my-2 mr-2"
                    >Unverified Person</v-btn
                  ><v-btn
                    href="https://identity-kit.pathfinder.gov.bc.ca/"
                    target="_blank"
                    color="tertiary"
                    outlined
                    class="my-2"
                    >Verified Person</v-btn
                  >
                </v-expansion-panel-content>
              </div>
            </div>
          </v-expansion-panel>
          <v-expansion-panel>
            <div class="num-row">
              <div class="number">3</div>
              <div class="num-body">
                <v-expansion-panel-header
                  ><h3>
                    Create Safe Entry Points
                  </h3></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <v-skeleton-loader
                    boilerplate
                    type="paragraph"
                  ></v-skeleton-loader>
                  <v-alert text border="left" color="secondary darken-1" icon="mdi-flag">
                    Skipped in this demo but to be added between this screen and the next is a
                    request for the presentation of the user's <i>Verified Person</i> credential,
                    providing high assurance authentication.
                  </v-alert>
                  <v-btn to="/register" color="primary" class="my-2"
                    >Get Started</v-btn
                  >
                </v-expansion-panel-content>
              </div>
            </div>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.num-row {
  display: flex;
  .number {
    position: relative;
    font-size: 1.5rem;
    padding-right: 0.6em;
    padding-top: 0.25em;
    text-align: right;
    width: 2em;
    &::after {
      display: block;
      background: var(--v-accent-darken3);
      border-radius: 6px;
      content: "";
      position: absolute;
      top: 0.2em;
      bottom: 0.2em;
      right: 0;
      width: 3px;
    }
  }
  .num-body {
    flex: auto;
  }
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
