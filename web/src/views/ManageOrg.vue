<template>
  <v-container class="mb-4">
    <v-row>
      <v-col>
        <h2 class="my-4 display-1">
          Manage your Organizations
        </h2>
        <v-skeleton-loader boilerplate type="paragraph"></v-skeleton-loader>
        <br />
        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Current Organizations</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary" to="/register">Add Organization</v-btn>
        </v-toolbar>
        <v-data-table
          :headers="orgHeaders"
          :items="orgs"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:item.services="{ value }"
            ><div v-for="(svc, idx) of value" :key="idx">
              {{ svc.name }}
            </div></template
          >

          <template v-slot:item.actions="{}"
            ><v-btn small outlined to="/update">Update</v-btn></template
          >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Organization } from "@/models/organization";

interface ExtOrganization extends Organization {
  actions: any;
}

@Component
export default class ManageOrg extends Vue {
  private orgHeaders = [
    {
      text: "Organization",
      align: "start",
      sortable: true,
      value: "name"
    },
    { text: "Status", value: "status", sortable: true },
    { text: "Services", value: "services", sortable: false },
    { text: "Registered Employees", value: "employeeCount", sortable: true },
    { text: "Last Updated", value: "updated", sortable: true },
    { text: "Pending Actions", value: "actions", sortable: false }
  ];

  private orgs: ExtOrganization[] = [
    {
      id: "1",
      name: "ABC Cleaners, Inc.",
      sourceId: "",
      status: "Essential",
      services: [
        {
          id: "1",
          name: "Medical Facility",
          icon: "mdi-medical-bag"
        },
        {
          id: "2",
          name: "Cleaning",
          icon: "mdi-broom"
        }
      ],
      employeeCount: 15,
      updated: "2020-04-09",
      actions: ["update"]
    },
    {
      id: "2",
      name: "John's Cleaners",
      sourceId: "",
      status: "Non-Essential",
      services: [
        {
          id: "2",
          name: "Cleaning",
          icon: "mdi-broom"
        }
      ],
      employeeCount: 8,
      updated: "2020-03-08",
      actions: ["update"]
    }
  ];

  created() {
    //
  }
}
</script>
