<template>
  <v-container class="mb-4">
    <v-row>
      <v-col>
        <h2 class="my-4 display-1">
          Add Location
        </h2>
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
                <v-text-field label="Facility" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="Entry Point" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="Facility" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="4">
                <h3>Settings:</h3>
                <v-container>
                  <v-row>
                    <v-checkbox class="mr-4" label="Published"></v-checkbox>
                    <v-icon>mdi-help-circle-outline</v-icon>
                  </v-row>
                  <v-row>
                    <v-checkbox class="mr-4" label="Audit"></v-checkbox>
                    <v-icon>mdi-help-circle-outline</v-icon>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Organization Search</v-toolbar-title>
        </v-toolbar>

        <v-card outlined class="mb-8 pa-3">
          <v-autocomplete
            label="Orgbook Search"
            placeholder="Start typing to Search"
            prepend-icon="mdi-office-building"
            return-object
          ></v-autocomplete>
        </v-card>

        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Access Requirements</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn class="mr-4" color="primary">Test</v-btn>
          <v-btn color="primary">Export</v-btn>
        </v-toolbar>

        <v-card outlined>
          <v-card-text class="py-1">
            <v-row align="center" justify="start">
              <v-col v-if="!services.length">
                <v-alert type="info" class="mb-0">No services added</v-alert>
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
      name: "Name"
    },
    {
      id: "1",
      name: "Essential Service"
    },
    {
      id: "1",
      name: "COVID-19 Clear"
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
