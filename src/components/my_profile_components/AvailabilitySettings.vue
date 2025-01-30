<template>
  <v-card class="p-3 shadow-sm">
    <v-card-title class="h5 mb-3">Availability Settings</v-card-title>
    <v-card-text>
      <div class="mb-3 d-flex justify-content-between align-items-center">
        <span>Online Consultations</span>
        <v-chip color="success" small>Enabled</v-chip>
      </div>
      <div class="mb-3 d-flex justify-content-between align-items-center">
        <span>Home Visits</span>
        <v-chip color="success" small>Enabled</v-chip>
      </div>
      <div class="mb-3 d-flex justify-content-between align-items-center">
        <span>OPD Consultations</span>
        <v-chip color="danger" small>Disabled</v-chip>
      </div>
      <v-btn class="w-100 mt-2" variant="outlined" color="primary"
        >Manage Schedule</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script setup></script>

<style scoped></style>
