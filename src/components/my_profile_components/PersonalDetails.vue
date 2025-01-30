<template>
  <v-card class="p-4 shadow-sm">
    <v-row align="center" class="mb-4 d-flex justify-space-between">
      <v-col cols="12" sm="auto" class="d-flex align-center">
        <v-avatar size="96">
          <v-img
            src="https://t3.ftcdn.net/jpg/06/36/69/86/360_F_636698674_DroChEj5eWmZiaZOSDMnj8hcDqqw74Fp.jpg"
            alt="Profile"
          />
        </v-avatar>
        <div class="ml-4">
          <h2 class="text-h6 font-weight-bold mb-2">Dr. Priya Sharma</h2>
          <p class="text-body-2 text-muted mb-2">Senior Physiotherapist</p>
          <p class="text-body-2 text-muted mb-0">Bangalore, Karnataka</p>
          <v-btn text flat small class="px-0 capitalize-text"
            ><span class="text-primary">Change Profile Photo</span></v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" sm="auto" class="text-sm-right">
        <v-chip variant="tonal" color="success" small>
          Available for Appointments
        </v-chip>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <p class="text-muted mb-1">Phone Number</p>
        <p class="font-weight-medium">+91 98765 43210</p>
      </v-col>
      <v-col cols="12" sm="6">
        <p class="text-muted mb-1">Email</p>
        <p class="font-weight-medium">dr.priya.sharma@kneexpert.in</p>
      </v-col>
      <v-col cols="12" sm="6">
        <p class="text-muted mb-1">Languages</p>
        <p class="font-weight-medium">English, Hindi, Kannada</p>
      </v-col>
      <v-col cols="12" sm="6">
        <p class="text-muted mb-1">Experience</p>
        <p class="font-weight-medium">8+ Years</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup></script>

<style scoped>
.text-muted {
  color: #6c757d;
}

.capitalize-text {
  text-transform: capitalize;
  font-family: inherit;
}
</style>
