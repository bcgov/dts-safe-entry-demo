<template>
  <v-container class="mb-4">
    <v-row>
      <v-col>
        <h2 class="my-4 display-1">
          Update Organization
        </h2>
        <v-btn to="/manage" text
          ><v-icon>mdi-chevron-left</v-icon> Back to organizations</v-btn
        >

        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Organization Details</v-toolbar-title>
        </v-toolbar>
        <v-row>
          <v-col md="3" sm="4">Name</v-col>
          <v-col class="record-value">{{ record.name }}</v-col>
        </v-row>
        <v-row>
          <v-col md="3" sm="4">Business Number</v-col>
          <v-col class="record-value">{{ record.sourceId }}</v-col>
        </v-row>
        <v-row>
          <v-col md="3" sm="4">Status</v-col>
          <v-col class="record-value">{{ record.status }}</v-col>
        </v-row>

        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Services Offered</v-toolbar-title>
        </v-toolbar>
        <v-skeleton-loader
          boilerplate
          type="sentences"
          class="my-2"
        ></v-skeleton-loader>

        <v-toolbar dense flat class="mb-3">
          <v-toolbar-title>Registered Employees</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="primary">Add Employee</v-btn>
        </v-toolbar>

        <employees-table></employees-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.record-value {
  font-weight: 600;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Organization } from "@/models/organization";
import EmployeesTable from "./EmployeesTable.vue";

@Component({ components: { EmployeesTable } })
export default class ManageOrg extends Vue {
  private record: Organization = {
    id: "1",
    sourceId: "BC989125",
    name: "John's Cleaners",
    status: "Essential"
  };

  created() {
    //
  }
}
</script>
