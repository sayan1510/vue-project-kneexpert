<template>
  <v-card class="bg-white rounded-lg shadow-sm pa-6">
    <v-card-title class="text-lg font-semibold mb-4 px-0">
      Medical History & Current Condition
    </v-card-title>
    <v-card-text class="space-y-4 px-0">
      <div>
        <p class="text-gray-600 mb-1">Primary Complaint</p>
        <p class="font-medium fw-semibold">
          {{ patient.medicalHistory.primaryComplaint }}
        </p>
      </div>
      <div>
        <p class="text-gray-600 mb-1">Surgery History</p>
        <p class="font-medium fw-semibold">
          {{
            `${patient.medicalHistory.surgeryHistory.procedure} - ${patient.medicalHistory.surgeryHistory.date}`
          }}
        </p>
      </div>
      <div>
        <p class="text-gray-600 mb-1">Other Medical Conditions</p>
        <p class="font-medium fw-semibold">
          {{ patient.medicalHistory.otherConditions }}
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  patient: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
