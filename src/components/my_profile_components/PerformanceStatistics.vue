<template>
  <div>
    <v-card class="p-4 shadow-sm">
      <v-card-title class="text-lg font-weight-bold mb-4">
        Performance Statistics
      </v-card-title>

      <div class="statistics-cards">
        <div v-for="(item, index) in state.items" :key="index" class="ma-2">
          <StatCard
            :message="item.message"
            :count="item.count"
            :color="item.color"
            :cardColor="item.color"
            coloredText
          />
        </div>
      </div>

      <v-list>
        <v-list-item class="py-0">
          <v-row>
            <v-col class="text-muted">Response Rate</v-col>
            <v-col class="font-weight-medium text-right">95%</v-col>
          </v-row>
        </v-list-item>
        <v-list-item class="py-0">
          <v-row>
            <v-col class="text-muted">Avg. Response Time</v-col>
            <v-col class="font-weight-medium text-right">8 minutes</v-col>
          </v-row>
        </v-list-item>
        <v-list-item class="py-0">
          <v-row>
            <v-col class="text-muted">Completed Sessions</v-col>
            <v-col class="font-weight-medium text-right">520+</v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import StatCard from "../dashboard_components/StatCard.vue";

const state = reactive({
  items: [
    { message: "Total Patients", count: "248", color: "blue" },
    { message: "Success Rate", count: "92%", color: "green" },
    { message: "Avg. Rating", count: "4.8/5", color: "purple" },
  ],
});
</script>

<style scoped>
.statistics-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1 rem;
}
</style>
