<template>
  <v-card class="pa-8 rounded-lg shadow-sm border border-gray-200">
    <v-row align="start" justify="space-between" class="mb-4">
      <v-col cols="auto">
        <h3 class="font-weight-medium text-lg">{{ name }}</h3>
        <p class="text-muted">{{ specialization }}</p>
        <v-chip
          color="blue-lighten-4"
          class="text-blue-darken-4 text-xs px-2 py-1 rounded-pill"
        >
          {{ availability }}
        </v-chip>
      </v-col>
      <div class="mt-4 mr-2">
        <v-chip
          color="red lighten-4"
          text-color="red darken-2"
          class="text-sm px-3 py-1 rounded-pill fw-medium mt-2 mt-sm-0 pulse"
          outlined
        >
          {{ time }}
        </v-chip>
      </div>
    </v-row>

    <v-row align="center" class="text-muted mb-4">
      <v-icon size="18" class="mr-2">mdi-map-marker</v-icon>
      {{ location }}
    </v-row>

    <v-row class="d-flex justify-space-between">
      <v-btn color="blue" class="text-white flex-grow-1 mx-1">Accept</v-btn>
      <v-btn color="red" class="text-white flex-grow-1 mx-1">Decline</v-btn>
      <v-btn icon color="green" class="mx-1 call-btn">
        <v-icon>mdi-phone</v-icon>
      </v-btn>
    </v-row>

    <v-btn
      variant="text"
      class="w-100 mt-3 text-blue text-sm font-weight-medium capitalize-text"
    >
      See Patient Details →
    </v-btn>
  </v-card>
</template>

<script setup>
const props = defineProps({
  name: String,
  specialization: String,
  availability: String,
  time: String,
  location: String,
});
</script>

<style scoped>
.call-btn {
  width: 48px;
  height: 36px;
  border-radius: 4px;
}

@media (min-width: 576px) {
  .mt-sm-0 {
    margin-top: 0 !important;
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.pulse {
  animation: pulse 1s ease-in-out infinite;
}
</style>
