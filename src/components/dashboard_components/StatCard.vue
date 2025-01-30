<template>
  <div>
    <v-card
      :color="defaultCardCol"
      :variant="defaultCardCol ? 'tonal' : 'elevated'"
    >
      <div class="pa-6">
        <p
          class="text-sm font-medium mb-0"
          :class="
            defaultColor && defaultColoredText ? `text-${defaultColor}` : ''
          "
        >
          {{ defaultMessage }}
        </p>
        <p
          class="fs-4 fw-bold mb-0"
          :class="defaultColor ? `text-${defaultColor} fw-bold` : ''"
        >
          {{ defaultCount }}
        </p>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  message: String,
  count: String,
  color: String,
  cardColor: String,
  coloredText: Boolean,
});

const defaultMessage = computed(() => props.message || "Default Message");
const defaultCount = computed(() => props.count ?? "0");
const defaultColor = computed(() => props.color || null);
const defaultColoredText = computed(() => props.coloredText || false);
const defaultCardCol = computed(() => props.cardColor || null);
</script>

<style></style>
