<template>
  <v-card class="p-4 shadow-sm bg-white rounded-lg">
    <v-card-title class="text-lg font-semibold mb-4">Media Files</v-card-title>
    <v-card-text>
      <div
        class="mb-4 border-2 border-dashed border-secondary rounded-lg p-4 text-center"
      >
        <v-icon size="40" color="grey">mdi-cloud-upload</v-icon>
        <p class="mt-2 text-sm text-muted mb-0">
          Click to upload or drag and drop
        </p>
        <p class="text-xs text-muted mb-0">Documents, Images, or Videos</p>
        <input type="file" class="d-none" @change="handleFileUpload" />
      </div>

      <div>
        <p class="font-medium text-sm text-dark mb-0">Recent Files</p>
        <v-list dense class="py-0">
          <v-list-item
            v-for="file in recentFiles"
            :key="file.name"
            class="bg-light rounded-lg"
          >
            <template v-slot:prepend>
              <v-icon class="mr-2" color="grey">mdi-file</v-icon>
            </template>
            <v-list-item-title>{{ file.name }}</v-list-item-title>
            <v-list-item-subtitle class="text-muted"
              >Added {{ file.date }}</v-list-item-subtitle
            >
            <template v-slot:append>
              <v-btn icon color="primary" variant="text">
                <v-icon>mdi-download</v-icon>
              </v-btn>
            </template>
          </v-list-item>
        </v-list>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const recentFiles = ref([
  { name: "MRI Report.pdf", date: "Jan 15, 2024" },
  { name: "Exercise Progress.jpg", date: "Jan 23, 2024" },
]);

const handleFileUpload = (event) => {
  console.log("File uploaded:", event.target.files[0]);
};
</script>

<style scoped>
.text-muted {
  color: #6c757d;
}
.bg-light {
  background-color: #f8f9fa;
}
</style>
