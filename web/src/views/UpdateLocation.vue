<template>
  <v-container class="mb-4">
    <v-row>
      <v-col>
        <h2 class="my-4 display-1">
          Victoria Villa
        </h2>
        <h3 class="my-4">
          Cleaners
        </h3>
        <v-btn to="/manage" class="mb-8" text
          ><v-icon>mdi-chevron-left</v-icon> Back to locations</v-btn
        >
        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Location Details</v-toolbar-title>
        </v-toolbar>

        <v-form v-model="valid">
          <v-container>
                     <v-row>
              <v-col cols="12" md="4">
                <v-label>Facility</v-label>
                <v-text-field
                  value="Victoria Villa"
                  single-line
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-label>Entry Point</v-label>
                <v-text-field
                  value="Cleaners"
                  single-line
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-label>Address</v-label>
                <v-textarea
                  value="4734 Johnson Street, Victoria, BC, V8M 3W2"
                  single-line
                  outlined
                  required
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <h3>Settings:</h3>
                <v-container>
                  <v-row>
                    <v-checkbox class="mr-4" label="Publicly Discoverable"></v-checkbox>
                    <v-icon>mdi-help-circle-outline</v-icon>
                  </v-row>
                  <v-row>
                    <v-checkbox class="mr-4" label="Audited"></v-checkbox>
                    <v-icon>mdi-help-circle-outline</v-icon>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Credentials Required for Access</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn class="mr-4" color="primary" href="https://long-term-care-facility.vonx.io/" target="_blank">Test</v-btn>
          <v-btn color="primary">Export</v-btn>
        </v-toolbar>

        <v-card outlined>
          <v-card-text class="py-1">
            <v-row align="center" justify="start">
              <v-col v-if="!services.length">
                <v-alert type="info" class="mb-0">No credentials required</v-alert>
              </v-col>
              <v-col
                v-for="(service, i) in services"
                :key="service.id"
                class="shrink"
              >
                <v-chip close @click:close="services.splice(i, 1)">
                  <v-icon left v-text="service.icon"></v-icon>
                  {{ service.name }}
                </v-chip>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider v-if="!allSelected"></v-divider>
          <v-list v-if="!allSelected">
            <template v-for="(item, i) in serviceOptions">
              <v-list-item
                v-if="!services.includes(item)"
                :key="i"
                @click="services.push(item)"
              >
                <v-list-item-avatar>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-avatar>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-action
                  ><v-icon>mdi-plus</v-icon></v-list-item-action
                >
              </v-list-item>
            </template>
          </v-list>
        </v-card>

        <div style="text-align: right" class="mt-4">
          <v-btn to="/manage" color="primary">Save and Continue</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Requirement } from "../models/location";

@Component({})
export default class RegisterOrg extends Vue {
  private serviceOptions: Requirement[] = [
    {
      id: "1",
      name: "Verified Person: Surname Only",
    },
    {
      id: "2",
      name: "Verified Person: Full Name",
    },
    {
      id: "3",
      name: "Verified Person: Possession Only",
    },
    {
      id: "4",
      name: "Essential Service Authorization: General",
    },
    {
      id: "5",
      name: "Essential Service Authorization: Location-specific",
    },
    {
      id: "6",
      name: "COVID-19 Clear",
    }
  ];
  private services: Requirement[] = [];

  private serviceIds() {
    const ids = [];
    for (const svc of this.services) {
      ids.push(svc.id);
    }
    return ids;
  }

  private allSelected = false;

  created() {
    //
  }
}
</script>
