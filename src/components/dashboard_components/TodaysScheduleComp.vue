<template>
  <v-container class="mx-0">
    <v-card>
      <v-table class="rounded-lg shadow-sm overflow-x-auto">
        <thead>
          <tr class="bg-light text-left">
            <th class="py-3 px-4 font-medium">Time</th>
            <th class="py-3 px-4 font-medium">Patient &amp; Reason</th>
            <th class="py-3 px-4 font-medium">Type</th>
            <th class="py-3 px-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="appointment in appointments"
            :key="appointment.time"
            class="border-top"
          >
            <td class="py-4 px-4 font-medium">{{ appointment.time }}</td>
            <td class="py-4 px-4">
              <div>
                <span class="font-medium">{{ appointment.patient }}</span>
                <p class="text-sm text-muted">{{ appointment.reason }}</p>
              </div>
            </td>
            <td class="py-4 px-4">
              <span
                :class="`badge px-2 py-1 rounded-pill text-xs ${appointment.typeClass}`"
              >
                {{ appointment.type }}
              </span>
            </td>
            <td class="py-4 px-4">
              <v-btn variant="text" color="primary" size="small"
                >See Details →</v-btn
              >
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      appointments: [
        {
          time: "09:30 AM",
          patient: "Mrs. Sneha Patel",
          reason: "Follow-up Session - Week 3",
          type: "Home Visit",
          typeClass: "bg-light-purple text-purple",
        },
        {
          time: "11:00 AM",
          patient: "Mr. Rahul Mehta",
          reason: "Initial Assessment - Shoulder Pain",
          type: "Online Consultation",
          typeClass: "bg-success-subtle text-green",
        },
        {
          time: "2:30 PM",
          patient: "Mrs. Kavita Singh",
          reason: "Post-Surgery Consultation",
          type: "OPD Visit",
          typeClass: "bg-light-yellow text-warning",
        },
        {
          time: "4:00 PM",
          patient: "Mr. Amit Shah",
          reason: "Follow-up - Knee Rehabilitation",
          type: "Home Visit",
          typeClass: "bg-light-purple text-purple",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bg-light-purple {
  background-color: #f3e8ff;
  color: #7e22ce;
}
.bg-light-green {
  background-color: #d1fae5;
  color: #065f46;
}
.bg-light-yellow {
  background-color: #fef3c7;
  color: #b45309;
}
.text-muted {
  color: #6c757d;
}
</style>
