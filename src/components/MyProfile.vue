<template>
  <div class="pa-8 pb-2">
    <v-row class="justify-space-between align-start mb-4 mt-12 mt-lg-0">
      <v-col cols="12" sm="auto">
        <h1 class="h4 font-weight-bold text-dark">My Profile</h1>
        <p class="text-muted mb-0">ID: PHY2024-B1205</p>
      </v-col>
      <v-col cols="12" sm="auto" class="text-sm-right">
        <v-btn
          color="primary"
          class="mt-4 sm:mt-0 w-100 w-sm-auto"
          @click="completeVerification"
        >
          Complete Verification
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex profile-body">
      <v-col cols="8" md="8">
        <div class="d-flex flex-column">
          <PersonalDetails class="mb-4" />
          <ProfessionalDetails class="mb-4" />
          <PerformanceStatistics class="mb-4" />
        </div>
      </v-col>

      <v-col cols="4" md="4">
        <div class="d-flex flex-column">
          <VerificationStatus />
          <EarningDetails class="mt-7" />
          <AvailabilitySettings class="mt-7" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import PersonalDetails from "./my_profile_components/PersonalDetails.vue";
import ProfessionalDetails from "./my_profile_components/ProfessionalDetails.vue";
import PerformanceStatistics from "./my_profile_components/PerformanceStatistics.vue";
import VerificationStatus from "./my_profile_components/VerificationStatus.vue";
import EarningDetails from "./my_profile_components/EarningDetails.vue";
import AvailabilitySettings from "./my_profile_components/AvailabilitySettings.vue";

const completeVerification = () => {
  alert("Verification process started");
};
</script>

<style scoped>
.text-dark {
  color: #343a40;
}
.text-muted {
  color: #6c757d;
}
.capitalize-text {
  text-transform: capitalize;
  font-family: inherit;
}
</style>
