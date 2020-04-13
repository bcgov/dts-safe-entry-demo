<template>
  <v-data-table
    :headers="headers"
    :items="rows"
    :items-per-page="10"
    class="elevation-1"
  >
    <template v-slot:item.services="{ value }"
      ><div v-for="(svc, idx) of value" :key="idx">
        {{ svc.name }}
      </div></template
    >
    <template v-slot:item.actions="{}"
      ><v-btn small outlined>Update</v-btn></template
    >
  </v-data-table>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee, Service } from "@/models/organization";

interface ExtEmployee extends Employee {
  actions: any;
}

const demoServices: Service[] = [
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
];

@Component
export default class EmployeesTable extends Vue {
  private headers = [
    {
      text: "Employee Name",
      sortable: true,
      value: "name"
    },
    { text: "Email Address", value: "email", sortable: true },
    { text: "Services", value: "services", sortable: false },
    { text: "Actions", value: "actions", sortable: false }
  ];

  private rows: ExtEmployee[] = [
    {
      id: "1",
      orgId: "2",
      name: "Michelle Sanches",
      email: "michelle.sanches@abccleaners.ca",
      services: demoServices,
      actions: ["update"]
    },
    {
      id: "2",
      orgId: "2",
      name: "Mary Lasater",
      email: "mary.laster@abccleaners.ca",
      services: demoServices,
      actions: ["update"]
    },
    {
      id: "3",
      orgId: "2",
      name: "Susan Zimmerman",
      email: "susan.zimmerman@abccleaners.ca",
      services: demoServices,
      actions: ["update"]
    },
    {
      id: "4",
      orgId: "2",
      name: "Robert Morgan",
      email: "robert.morgan@abccleaners.ca",
      services: demoServices,
      actions: ["update"]
    }
  ];

  created() {
    //
  }
}
</script>
