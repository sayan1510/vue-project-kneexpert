<template>
  <div class="pa-8 pb-2">
    <div class="d-flex justify-space-between mb-2">
      <h1 class="h5 mb-4 mb-sm-0 text-dark fw-bold">Appointments</h1>

      <v-btn
        color="primary"
        class="w-100 w-sm-auto capitalize-text"
        @click="newAppointment"
      >
        + New Appointment
      </v-btn>
    </div>
    <SearchField />
    <CalenderHeaderComp class="mt-4" />
    <CalenderBodyComp :appointments="appointments" class="mb-4" />
    <StatusUpdateComp />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CalenderBodyComp from "./appointments-components/CalenderBodyComp.vue";
import CalenderHeaderComp from "./appointments-components/CalenderHeaderComp.vue";
import SearchField from "./appointments-components/SearchField.vue";
import StatusUpdateComp from "./appointments-components/StatusUpdateComp.vue";

const appointments = ref([
  {
    id: "KX2024-P1205",
    name: "Rajesh Kumar",
    condition: "Knee Rehabilitation",
    visitType: "Home Visit",
    color: "success",
    top: "12",
  },
  {
    id: "2",
    name: "Priya Patel",
    condition: "Initial Assessment",
    visitType: "Online Consultation",
    color: "purple",
    top: "172",
  },
  {
    id: "3",
    name: "Amit Shah",
    condition: "Follow-up Session",
    visitType: "OPD Visit",
    color: "warning",
    top: "542",
  },
]);

const newAppointment = () => {
  alert("Book new appointment");
};
</script>

<style>
.capitalize-text {
  text-transform: capitalize;
  font-family: inherit;
}
</style>
