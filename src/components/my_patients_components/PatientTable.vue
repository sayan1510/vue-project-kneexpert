<template>
  <v-container class="pa-0">
    <v-card elevation="2" class="pa-0">
      <v-table>
        <thead>
          <tr class="bg-light border-bottom">
            <th class="py-3 px-4">Patient Details</th>
            <th class="py-3 px-4">Treatment Info</th>
            <th class="py-3 px-4">Recent Activity</th>
            <th class="py-3 px-4">Referral Status</th>
            <th class="py-3 px-4">Progress</th>
            <th class="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="patient in patients"
            :key="patient.id"
            class="border-bottom hover-bg-light"
          >
            <td class="py-3 px-4 d-flex align-items-center patient-name">
              <v-avatar size="40">
                <v-img :src="patient.image"></v-img>
              </v-avatar>
              <div class="ms-3">
                <p class="mb-0 fw-bold">{{ patient.name }}</p>
                <p class="mb-0 text-muted small">ID: {{ patient.id }}</p>
                <p class="mb-0 text-muted small">{{ patient.phone }}</p>
              </div>
            </td>
            <td class="py-3 px-4">
              <p class="fw-bold mb-1">{{ patient.treatment }}</p>
              <p class="text-muted small mb-1">{{ patient.details }}</p>
              <v-chip color="green" size="small">{{ patient.status }}</v-chip>
            </td>
            <td class="py-3 px-4">
              <p class="mb-1 small">Last Session: {{ patient.lastSession }}</p>
              <p class="text-muted small">{{ patient.sessionType }}</p>
              <v-btn
                variant="text"
                color="primary"
                size="small"
                class="capitalize-text"
                >View Notes</v-btn
              >
            </td>
            <td class="py-3 px-4">
              <v-chip color="purple" size="small">{{
                patient.referralStatus
              }}</v-chip>
              <p class="text-muted small mt-1">{{ patient.referredBy }}</p>
            </td>
            <td class="py-3 px-4">
              <div class="d-flex align-items-center">
                <v-progress-linear
                  :model-value="patient.progress"
                  color="green"
                  height="6"
                  class="flex-grow-1 me-2"
                ></v-progress-linear>
                <span class="small fw-bold">{{ patient.progress }}%</span>
              </div>
            </td>
            <td class="py-3 px-4">
              <div class="d-flex gap-2">
                <v-icon color="primary" @click="viewPatient(patient)"
                  >mdi-eye-outline</v-icon
                >
                <v-icon color="success">mdi-phone-outline</v-icon>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const patients = ref([
  {
    id: "KX2024-P1205",
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    image:
      "https://media.istockphoto.com/id/915227284/photo/portrait-of-a-senior-indian-man.jpg?s=612x612&w=0&k=20&c=fdmZABA1lb5S-n8CQmxXbV24gF0boWZ33EXU-R2lmBY=",
    treatment: "Knee Rehabilitation",
    details: "Post ACL Surgery",
    status: "Active",
    lastSession: "Today",
    sessionType: "Home Visit",
    referralStatus: "Referred to Ortho",
    referredBy: "Dr. Suresh Menon",
    progress: 75,
  },
]);

const viewPatient = (patient) => {
  if (patient.id === "KX2024-P1205") {
    localStorage.setItem(
      "selectedPath",
      JSON.stringify(`/my-patients/patient-details/${patient.id}`)
    );
    router.push(`/my-patients/patient-details/${patient.id}`);
  } else return;
};
</script>

<style scoped>
.patient-name {
  min-height: fit-content;
}

.hover-bg-light:hover {
  background-color: #f8f9fa !important;
}
</style>
