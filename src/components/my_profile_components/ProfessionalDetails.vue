<template>
  <v-card class="bg-white rounded-lg shadow-sm p-6">
    <v-card-title class="text-lg font-semibold mb-4"
      >Professional Details</v-card-title
    >
    <v-card-text>
      <div class="space-y-4">
        <div>
          <p class="text-gray-600 mb-1 text-muted">Primary Specialization</p>
          <p class="font-medium fw-bold">
            Sports Rehabilitation, Knee & Joint Care
          </p>
        </div>
        <div>
          <p class="text-gray-600 mb-1 text-muted">Education</p>
          <div class="space-y-2">
            <p class="font-medium fw-bold">
              MPT in Sports Medicine - Manipal University (2016)
            </p>
            <p class="font-medium fw-bold">BPT - KLE University (2014)</p>
          </div>
        </div>
        <div>
          <p class="text-gray-600 mb-1 text-muted">Certifications</p>
          <div class="d-flex flex-wrap gap-2 mt-2">
            <v-chip
              class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              color="primary"
              >Manual Therapy</v-chip
            >
            <v-chip
              class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              color="primary"
              >Sports Taping</v-chip
            >
            <v-chip
              class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              color="primary"
              >Dry Needling</v-chip
            >
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup></script>

<style scoped>
.text-muted {
  color: #6c757d;
}
</style>
