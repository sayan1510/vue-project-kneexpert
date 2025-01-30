<template>
  <v-container class="px-0">
    <v-card class="pa-3 mb-4">
      <div class="d-flex">
        <v-text-field
          v-model="searchName"
          label="Search by name, ID, or contact"
          variant="outlined"
          density="compact"
          class="mx-2 patient-search-box"
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
        <v-select
          v-model="selectedReferral"
          :items="referralOptions"
          variant="outlined"
          density="compact"
          class="mx-2"
        ></v-select>
        <v-select
          v-model="selectedSort"
          :items="sortingOptions"
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
const selectedStatus = ref("All Status");
const selectedType = ref("All Treatments");
const selectedReferral = ref("Referral Status");
const selectedSort = ref("Sort By");
const statusOptions = [
  "All Status",
  "Active Treatment",
  "Treatment Complete",
  "On Hold",
  "Discontinued",
];
const typeOptions = [
  "All Treatments",
  "Knee Rehabilitation",
  "Sports Injury",
  "Post-Surgery Care",
  "Joint Pain",
];
const referralOptions = [
  "Referral Status",
  "Referred To Ortho",
  "Pending Referral",
  "No Referral",
];
const sortingOptions = [
  "Sort By",
  "Recent First",
  "Name A-Z",
  "Treatment Progress",
];
</script>

<style scoped>
::v-deep .v-input__details {
  display: none !important;
}
.patient-search-box {
  min-width: 26rem;
}
</style>
