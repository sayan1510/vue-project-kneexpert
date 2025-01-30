<template>
  <v-card class="rounded-top shadow-sm border-bottom">
    <v-card-text>
      <div
        class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3"
      >
        <div class="d-flex flex-column flex-sm-row gap-3 w-100 w-sm-auto">
          <button class="btn btn-primary w-100 w-sm-auto">Today</button>
          <div
            class="d-flex align-items-center justify-content-between justify-content-sm-start gap-2"
          >
            <button class="btn btn-light p-2">
              <v-icon>mdi-chevron-left</v-icon>
            </button>
            <h2 class="h5 fw-semibold mb-0">{{ currentDate }}</h2>
            <button class="btn btn-light p-2">
              <v-icon>mdi-chevron-right</v-icon>
            </button>
          </div>
        </div>
        <v-btn-toggle
          v-model="viewMode"
          color="primary"
          variant="tonal"
          mandatory
        >
          <v-btn value="day" variant="outlined">Day</v-btn>
          <v-btn value="week" variant="outlined">Week</v-btn>
          <v-btn value="month" variant="outlined">Month</v-btn>
        </v-btn-toggle>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
const currentDate = ref("January 24, 2024");
const viewMode = ref("week");
</script>
