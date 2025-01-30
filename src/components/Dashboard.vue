<template>
  <div class="bg-gray-50 p-3 p-lg-5">
    <div class="d-flex justify-space-between mb-8">
      <h4 class="fw-bold">Dashboard</h4>
      <v-badge color="red" dot location="top right">
        <v-icon icon="mdi-bell-outline"></v-icon>
      </v-badge>
    </div>
    <div class="dashboard-cards">
      <div v-for="(item, index) in state.items" :key="index" class="ma-2 mb-8">
        <StatCard
          :message="item.message"
          :count="item.count"
          :color="item.color"
          :cardColor="item.color"
          coloredText
        />
      </div>
    </div>
    <section class="mb-8">
      <h5 class="mb-4">Active Leads</h5>
      <div class="lead-cards-orientation">
        <div v-for="(user, index) in activeLeads.users" :key="index">
          <ActiveLeadCard
            :name="user.name"
            :specialization="user.specialization"
            :availability="user.availability"
            :time="user.time"
            :location="user.location"
          />
        </div>
      </div>
    </section>
    <section>
      <h5 class="text-lg font-semibold mb-4">Today's Schedule</h5>
      <TodaysScheduleComp />
    </section>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import StatCard from "./dashboard_components/StatCard.vue";
import ActiveLeadCard from "./dashboard_components/ActiveLeadCard.vue";
import TodaysScheduleComp from "./dashboard_components/TodaysScheduleComp.vue";

const state = reactive({
  items: [
    { message: "New Leads", count: "12", color: "blue" },
    { message: "Missed Leads", count: "3", color: "red" },
    { message: "Today's Visits", count: "8", color: "green" },
    { message: "Pending", count: "3", color: "purple" },
  ],
});

const activeLeads = reactive({
  users: [
    {
      name: "Rajesh Kumar",
      specialization: "Knee Rehabilitation",
      availability: "Physio at Home",
      time: "15:00",
      location: "Indiranagar, Bangalore",
    },
    {
      name: "Anita Desai",
      specialization: "Post-Surgery Recovery",
      availability: "Online Consultation",
      time: "22:15",
      location: "Koramangala, Bangalore",
    },
  ],
});
</script>

<style>
.dashboard-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.lead-cards-orientation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.capitalize-text {
  text-transform: capitalize;
  font-family: inherit;
}
</style>
