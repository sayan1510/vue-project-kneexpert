<template>
  <v-container class="bg-white rounded-lg shadow-sm p-4">
    <h3 class="text-lg font-semibold mb-4">Refer to Orthopedician</h3>
    <v-form>
      <v-row class="mb-3">
        <v-col cols="12" class="py-1">
          <label class="form-label">Reason for Referral</label>
          <v-select
            v-model="reason"
            :items="reasonOptions"
            density="compact"
            label="Select reason"
            variant="outlined"
            class="w-100"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="mb-3">
        <v-col cols="12" class="py-1">
          <label class="form-label">Urgency Level</label>
          <v-select
            v-model="urgency"
            :items="urgencyOptions"
            density="compact"
            label="Select urgency"
            variant="outlined"
            class="w-100"
          ></v-select>
        </v-col>
      </v-row>

      <v-row class="mb-3">
        <v-col cols="12">
          <label class="form-label">Additional Notes</label>
          <v-textarea
            v-model="notes"
            label="Add any additional notes for the orthopedician..."
            variant="outlined"
            class="w-100"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-btn
            color="blue"
            class="w-100 text-white capitalize-text"
            @click="sendReferral"
          >
            Send Referral
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const reason = ref("");
const urgency = ref("");
const notes = ref("");

const reasonOptions = [
  "Severe Pain",
  "Meniscal Tear Suspected",
  "Limited Range of Motion",
  "No Improvement in Condition",
  "Post-Surgery Complication",
  "Other (Specify in Notes)",
];

const urgencyOptions = ["Routine", "Urgent", "Emergency"];

const sendReferral = () => {
  console.log("Referral sent:", {
    reason: reason.value,
    urgency: urgency.value,
    notes: notes.value,
  });
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}

::v-deep .v-input__details {
  display: none !important;
}
</style>
