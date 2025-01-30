<template>
  <div>
    <v-card class="pa-2 shadow-sm">
      <v-card-title class="h5 mb-3">Earnings Overview</v-card-title>
      <v-card-text>
        <div class="mb-3">
          <div class="d-flex justify-content-between text-muted small mb-1">
            <span>This Month</span>
            <span class="fw-semibold">₹45,800</span>
          </div>
          <div class="progress" style="height: 6px">
            <div class="progress-bar bg-success" style="width: 75%"></div>
          </div>
        </div>

        <div class="mb-3">
          <div class="d-flex justify-content-between text-muted small mb-1">
            <span>Last Month</span>
            <span class="fw-semibold">₹38,400</span>
          </div>
          <div class="progress" style="height: 6px">
            <div class="progress-bar bg-primary" style="width: 60%"></div>
          </div>
        </div>

        <div class="pt-3 border-top">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="text-muted">Available Balance</span>
            <span class="h4 text-success fw-bold">₹32,450</span>
          </div>
          <v-btn color="primary capitalize-text" block>Withdraw Funds</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup></script>

<style scoped>
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}
</style>
