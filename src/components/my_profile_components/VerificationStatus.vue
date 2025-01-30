<template>
  <v-card class="p-4 shadow-sm">
    <v-card-title class="h5 mb-3">Verification Status</v-card-title>
    <v-card-text>
      <div class="list-group">
        <div
          v-for="(item, index) in verificationItems"
          :key="index"
          class="d-flex justify-content-between align-items-center list-group-item"
        >
          <div class="d-flex align-items-center">
            <v-icon class="text-muted me-2">{{ item.icon }}</v-icon>
            <span>{{ item.label }}</span>
          </div>
          <v-icon :class="item.verified ? 'text-success' : 'text-danger'">
            {{ item.verified ? "mdi-check" : "mdi-close" }}
          </v-icon>
        </div>
      </div>
      <v-btn block color="primary" class="mt-3 capitalize-text"
        >Complete Pending Verifications</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script setup>
import { reactive } from "vue";

const verificationItems = reactive([
  { label: "Profile Photo Upload", icon: "mdi-account", verified: false },
  { label: "Mobile Number Verified", icon: "mdi-phone", verified: true },
  { label: "Email Verified", icon: "mdi-email", verified: false },
  {
    label: "Aadhar Uploaded",
    icon: "mdi-card-account-details",
    verified: false,
  },
  { label: "PAN Uploaded", icon: "mdi-card-text", verified: false },
  { label: "Bank Details Updated", icon: "mdi-bank", verified: false },
  { label: "Agreement Signed", icon: "mdi-file-document", verified: false },
]);
</script>

<style scoped>
.list-group-item {
  border: none;
  padding: 0.75rem 1rem;
}
</style>
