<template>
  <v-container class="mt-4">
    <v-row
      class="align-items-center justify-content-between mb-4 mb-lg-1 mt-12 mt-lg-0"
    >
      <v-col cols="12" sm="6">
        <h1 class="h4 fw-bold text-dark mb-0">My Patients</h1>
        <p class="text-muted mb-0">Total Active Patients: 248</p>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="d-flex flex-column flex-sm-row gap-2 justify-content-sm-end"
      >
        <v-btn variant="tonal" class="w-100 w-sm-auto capitalize-text">
          Export List
        </v-btn>
        <v-btn color="primary capitalize-text" class="w-100 w-sm-auto">
          + Add Patient
        </v-btn>
      </v-col>
    </v-row>
    <PatientsSearchField />
    <div class="stats-cards mb-8">
      <div
        v-for="(item, index) in state.items"
        :key="index"
        :class="index === 0 ? '' : 'ml-2'"
      >
        <StatCard
          :message="item.message"
          :count="item.count"
          :color="item.color"
        />
      </div>
    </div>
    <PatientTable />
  </v-container>
</template>

<script setup>
import { reactive } from "vue";
import PatientsSearchField from "./my_patients_components/PatientsSearchField.vue";
import StatCard from "./dashboard_components/StatCard.vue";
import PatientTable from "./my_patients_components/PatientTable.vue";

const state = reactive({
  items: [
    { message: "Active Patients", count: "156", color: "blue" },
    { message: "Pending Reviews", count: "23", color: "black" },
    { message: "Ortho Referrals", count: "45", color: "purple" },
    { message: "Treatment Complete", count: "92", color: "green" },
  ],
});
</script>

<style>
.gap-2 {
  gap: 0.5rem;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.capitalize-text {
  text-transform: capitalize;
  font-family: inherit;
}
</style>
