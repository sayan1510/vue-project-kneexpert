<template>
  <v-card class="bg-white shadow-sm p-4 rounded-lg">
    <v-card-title class="text-lg font-semibold mb-4"
      >Patient Location</v-card-title
    >
    <v-card-text>
      <div class="bg-light rounded-lg mb-4" style="height: 200px">
        <iframe
          loading="lazy"
          :src="location.mapSrc"
          title="Patient Location"
          width="100%"
          height="100%"
          frameborder="0"
          style="border: 0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="space-y-2">
        <p class="text-muted text-sm">
          {{ location.address }}
        </p>
        <a :href="location.mapsLink" target="_blank" class="d-block">
          <v-btn class="w-100 capitalize-text" color="primary" dark>
            Open in Google Maps
          </v-btn>
        </a>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  location: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.w-100 {
  width: 100%;
}
</style>
