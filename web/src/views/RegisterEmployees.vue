<template>
  <v-container class="mb-4">
    <v-row>
      <v-col>
        <h2 class="my-4 display-1">
          Manage Employees
        </h2>
        <v-btn to="/manage" text
          ><v-icon>mdi-chevron-left</v-icon> Back to {{ orgName }}</v-btn
        >
        <v-skeleton-loader
          boilerplate
          type="paragraph"
          class="mt-2"
        ></v-skeleton-loader>
        <br />

        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Find your Organization</v-toolbar-title>
        </v-toolbar>
        <v-skeleton-loader
          boilerplate
          type="sentences"
          class="mt-2"
        ></v-skeleton-loader>

        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Services Offered</v-toolbar-title>
        </v-toolbar>
        <v-skeleton-loader
          boilerplate
          type="sentences"
          class="mt-2"
        ></v-skeleton-loader>

        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Registered Employees</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary">Add Employee</v-btn>
        </v-toolbar>

        <v-data-table
          :headers="employeeHeaders"
          :items="employees"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:item.services="{ value }"
            ><div v-for="(svc, idx) of value" :key="idx">
              {{ svc }}
            </div></template
          >
          <template v-slot:item.actions="{}"
            ><v-btn small outlined>Update</v-btn></template
          >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ManageOrg extends Vue {
  private employeeHeaders = [
    {
      text: "Employee Name",
      sortable: true,
      value: "name"
    },
    { text: "Email Address", value: "email", sortable: true },
    { text: "Services", value: "services", sortable: false },
    { text: "Actions", value: "actions", sortable: false }
  ];

  private employees = [
    {
      id: "1",
      name: "Michelle Sanches",
      email: "michelle.sanches@abccleaners.ca",
      services: ["Medical Facility", "Cleaning"],
      actions: ["update"]
    },
    {
      id: "2",
      name: "Mary Lasater",
      email: "mary.laster@abccleaners.ca",
      services: ["Medical Facility", "Cleaning"],
      actions: ["update"]
    },
    {
      id: "3",
      name: "Susan Zimmerman",
      email: "susan.zimmerman@abccleaners.ca",
      services: ["Medical Facility", "Cleaning"],
      actions: ["update"]
    },
    {
      id: "4",
      name: "Robert Morgan",
      email: "robert.morgan@abccleaners.ca",
      services: ["Medical Facility", "Cleaning"],
      actions: ["update"]
    }
  ];
  private orgName = "John's Cleaners";

  created() {
    //
  }
}
</script>
