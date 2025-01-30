<template>
  <v-card class="bg-white rounded-lg shadow-sm pa-6">
    <v-card-text class="pa-0">
      <div
        class="d-flex flex-column flex-sm-row align-sm-start justify-space-between mb-4"
      >
        <div>
          <h2 class="text-h6 fw-semibold mb-1">{{ patient.name }}</h2>
          <p class="text-grey-darken-1 mb-0">
            {{ patient.age }} years &bull; {{ patient.gender }} &bull; Blood
            Group: {{ patient.bloodGroup }}
          </p>
        </div>
        <v-chip
          class="mt-2 mt-sm-0"
          color="green lighten-4"
          text-color="green darken-2"
        >
          {{ patient.status }}
        </v-chip>
      </div>
      <v-row>
        <v-col cols="12" sm="6">
          <p class="text-grey-darken-1 mb-1">Contact Number</p>
          <p class="font-weight-medium mb-0">{{ patient.contact.phone }}</p>
        </v-col>
        <v-col cols="12" sm="6">
          <p class="text-grey-darken-1 mb-1">Email</p>
          <p class="font-weight-medium mb-0">{{ patient.contact.email }}</p>
        </v-col>
        <v-col cols="12" sm="6">
          <p class="text-grey-darken-1 mb-1">Emergency Contact</p>
          <p class="font-weight-medium mb-0">
            {{
              `${patient.contact.emergencyContact.phone} (${patient.contact.emergencyContact.name})`
            }}
          </p>
        </v-col>
        <v-col cols="12" sm="6">
          <p class="text-grey-darken-1 mb-1">Occupation</p>
          <p class="font-weight-medium mb-0">{{ patient.occupation }}</p>
        </v-col>
      </v-row>
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
