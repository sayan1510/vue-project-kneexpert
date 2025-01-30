<template>
  <v-card class="pa-4 shadow-sm">
    <v-card-title class="text-lg font-semibold">Session Logs</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <div class="space-y-4">
        <v-container fluid class="pa-0">
          <v-row v-for="(session, index) in sessions" :key="index">
            <v-col cols="12" class="pa-0">
              <div class="p-3">
                <v-row class="align-center">
                  <v-col cols="12" sm="8">
                    <p class="font-medium">{{ session.title }}</p>
                    <p class="text-sm text-gray-600">
                      {{ session.date }} • {{ session.type }}
                    </p>
                  </v-col>
                  <v-col cols="12" sm="4" class="text-sm text-right">
                    <v-btn variant="text" color="primary" size="small"
                      >View Details</v-btn
                    >
                  </v-col>
                </v-row>
                <p class="text-gray-600 text-sm mb-2">Procedures Performed:</p>
                <div class="d-flex">
                  <v-chip
                    v-for="(procedure, pIndex) in session.proceduresPerformed"
                    :key="pIndex"
                    color="primary"
                    density="compact"
                    class="text-xs procedure-chip"
                    :class="pIndex !== 0 ? 'ml-2' : ''"
                  >
                    {{ procedure }}
                  </v-chip>
                </div>
                <v-divider class="my-2"></v-divider>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  sessions: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.text-sm {
  font-size: 0.875rem;
}
.font-medium {
  font-weight: 500;
}
.procedure-chip {
  border-radius: 4px;
}
</style>
