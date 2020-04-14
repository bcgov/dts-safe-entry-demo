<template>
  <v-container class="mb-4">
    <v-row>
      <v-col>
        <h2 class="my-4 display-1">
          SafeEntryBC Location Registry
        </h2>
        <v-skeleton-loader boilerplate type="paragraph"></v-skeleton-loader>
        <br />
        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Current Locations</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn class="mr-4" color="primary">Add Administrator</v-btn>
          <v-btn color="primary" to="/register">Add Location</v-btn>
        </v-toolbar>
        <v-data-table
          :headers="locHeaders"
          :items="orgs"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:item.requirements="{ value }"
            ><div v-for="(svc, idx) of value" :key="idx">
              {{ svc.name }}
            </div></template
          >

          <template v-slot:item.actions="{}"
            ><v-btn class="mr-2" small outlined>View</v-btn>
            <v-btn class="mr-2" small outlined to="/update">Update</v-btn>
            <v-btn class="mr-2" small outlined>Test</v-btn>
            <v-btn small outlined>QR Code</v-btn></template
          >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Location } from "../models/location";

interface ExtLocation extends Location {
  actions: any;
}

@Component
export default class ManageLocations extends Vue {
  private locHeaders = [
    {
      text: "Facility",
      align: "start",
      sortable: true,
      value: "name"
    },
    { text: "Entry Point", value: "entry", sortable: true },
    { text: "Requirements", value: "requirements", sortable: false },
    { text: "Actions", value: "actions", sortable: false, align: "center" }
  ];

  private orgs: ExtLocation[] = [
    {
      id: "1",
      name: "Victoria Villa",
      entry: "Cleaners",
      requirements: [
        {
          id: "1",
          name: "Name"
        },
        {
          id: "2",
          name: "Essential Service"
        },
        {
          id: "3",
          name: "COVID-19 Clear"
        }
      ],
      actions: ["update"]
    },
    {
      id: "1",
      name: "Victoria Villa",
      entry: "Sanitation Services",
      requirements: [
        {
          id: "1",
          name: "Name"
        },
        {
          id: "2",
          name: "Essential Service"
        }
      ],
      actions: ["update"]
    }
  ];

  created() {
    //
  }
}
</script>
