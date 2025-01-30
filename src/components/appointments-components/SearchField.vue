<template>
  <v-container class="px-0">
    <v-card class="pa-3 mb-4">
      <div class="d-flex">
        <v-text-field
          v-model="searchName"
          label="Search by name or contact"
          variant="outlined"
          density="compact"
          class="mx-2"
        ></v-text-field>
        <v-text-field
          v-model="searchLocation"
          label="Search by location"
          variant="outlined"
          density="compact"
          class="mx-2"
        ></v-text-field>
        <v-select
          v-model="selectedStatus"
          :items="statusOptions"
          variant="outlined"
          density="compact"
          class="mx-2"
        ></v-select>
        <v-select
          v-model="selectedType"
          :items="typeOptions"
          variant="outlined"
          density="compact"
          class="mx-2"
        ></v-select>
      </div>
      <v-row>
        <v-col cols="12" sm="6" lg="3"> </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const searchName = ref("");
const searchLocation = ref("");
const selectedStatus = ref("All Status");
const selectedType = ref("All Types");
const statusOptions = [
  "All Status",
  "Scheduled",
  "In Progress",
  "Completed",
  "Missed",
];
const typeOptions = [
  "All Types",
  "OPD Visit",
  "Home Visit",
  "Online Consultation",
];
</script>

<style scoped>
::v-deep .v-input__details {
  display: none !important;
}
</style>
