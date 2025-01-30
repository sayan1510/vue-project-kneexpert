<template>
  <v-container class="bg-white rounded-lg shadow-sm pa-6">
    <h3 class="text-lg font-semibold mb-4">Patient Notes</h3>
    <v-textarea
      v-model="notes"
      class="mb-4"
      variant="outlined"
      rows="4"
      placeholder="Add notes about the patient..."
    ></v-textarea>
    <v-btn
      color="primary"
      class="w-100 w-sm-auto capitalize-text"
      @click="saveNotes"
    >
      Save Notes
    </v-btn>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const notes = ref("");

const saveNotes = () => {
  console.log("Notes saved:", notes.value);
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}
.w-sm-auto {
  width: auto;
}
</style>
