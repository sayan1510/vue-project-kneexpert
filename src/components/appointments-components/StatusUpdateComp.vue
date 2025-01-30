<template>
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-3 shadow-sm">
          <p class="text-md fw-semibold text-dark">Scheduled (3)</p>
          <v-card-text class="pa-0">
            <div
              v-for="appointment in scheduled"
              :key="appointment.id"
              class="p-3 bg-light rounded mb-2 d-flex justify-content-between align-items-start"
            >
              <div>
                <p class="font-weight-bold mb-1">{{ appointment.name }}</p>
                <p class="text-muted small mb-1">
                  {{ appointment.time }} • {{ appointment.type }}
                </p>
              </div>
              <div class="d-flex gap-2">
                <v-btn icon color="primary" variant="text">
                  <v-icon>mdi-eye-outline</v-icon>
                </v-btn>
                <v-btn icon color="success" variant="text">
                  <v-icon>mdi-phone-outline</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="p-3 shadow-sm">
          <p class="text-md fw-semibold text-dark">In Progress (2)</p>
          <v-card-text class="pa-0">
            <div
              v-for="appointment in inProgress"
              :key="appointment.id"
              class="pa-3 bg-primary-lite rounded mb-2 d-flex justify-content-between align-items-start"
            >
              <div>
                <p class="font-weight-bold mb-1">{{ appointment.name }}</p>
                <p class="small">
                  Started at {{ appointment.time }} • {{ appointment.type }}
                </p>
              </div>
              <div class="d-flex align-center gap-2">
                <v-icon color="primary">mdi-eye-outline</v-icon>
                <v-btn color="primary capitalize-text" class="btn-sm"
                  >Complete</v-btn
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="p-3 shadow-sm">
          <p class="text-md fw-semibold text-dark">Completed Today (4)</p>
          <v-card-text class="pa-0">
            <div
              v-for="appointment in completed"
              :key="appointment.id"
              class="pa-3 bg-success-lite rounded mb-2 d-flex justify-content-between align-items-start"
            >
              <div>
                <p class="font-weight-bold mb-1">{{ appointment.name }}</p>
                <p class="small mb-1">
                  {{ appointment.time }} • {{ appointment.type }}
                </p>
                <p
                  v-if="appointment.notesAdded"
                  class="mb-0 small text-success"
                >
                  ✓ Notes Added
                </p>
                <p v-else class="mb-0 small text-warning">! Notes Pending</p>
              </div>
              <v-icon color="primary">mdi-eye-outline</v-icon>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const scheduled = [
  { id: 1, name: "Rahul Mehta", time: "4:30 PM", type: "Online Consultation" },
  { id: 2, name: "Sneha Gupta", time: "5:00 PM", type: "Home Visit" },
];
const inProgress = [
  { id: 3, name: "Rajesh Kumar", time: "9:30 AM", type: "Home Visit" },
  { id: 4, name: "Priya Patel", time: "11:00 AM", type: "Online" },
];
const completed = [
  {
    id: 5,
    name: "Kavita Sharma",
    time: "8:30 AM",
    type: "OPD Visit",
    notesAdded: true,
  },
  {
    id: 6,
    name: "Ravi Verma",
    time: "9:00 AM",
    type: "Online",
    notesAdded: false,
  },
];
</script>

<style scoped>
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}
.bg-primary-lite {
  background-color: #ebf8ff;
}
.bg-success-lite {
  background-color: #f0fdf4;
}
</style>
