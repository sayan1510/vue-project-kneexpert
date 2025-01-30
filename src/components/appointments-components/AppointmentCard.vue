<template>
  <v-card class="patient-card" :style="borderCheck">
    <div class="card-header">
      <div>
        <p class="patient-name mb-0 text-md fw-bold">{{ name }}</p>
        <p class="patient-condition mb-0">{{ condition }}</p>
      </div>
      <v-chip density="compact" :color="color">{{ visitType }}</v-chip>
    </div>
    <div>
      <span class="view-details card-actions mr-2" @click="viewPatient(id)"
        >View Details</span
      >
      <span class="view-details card-actions mr-2" @click="callPatient"
        >Call</span
      >
      <span class="view-details card-actions mr-2" @click="addNotes"
        >Add Notes</span
      >
    </div>
  </v-card>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  name: String,
  condition: String,
  visitType: String,
  color: String,
  top: String,
  id: String,
});

const viewPatient = (id) => {
  if (id === "KX2024-P1205") {
    localStorage.setItem(
      "selectedPath",
      JSON.stringify(`/my-patients/patient-details/${id}`)
    );
    router.push(`/my-patients/patient-details/${id}`);
  } else return;
};

const borderCheck = computed(() => {
  let colorOutput = "";
  if (props.color) {
    if (props.color === "success")
      colorOutput =
        "border-left: 4px solid #007bff; background-color: #eff6ff;";
    else if (props.color === "warning")
      colorOutput =
        "border-left: 4px solid #d97706; background-color: #fffbeb;";
    else
      colorOutput =
        props.color === "purple"
          ? "border-left: 4px solid #7c3aed; background-color: #f5f3ff;"
          : "";
  }

  return props.top ? colorOutput.concat(` top: ${props.top}px;`) : colorOutput;
});

const callPatient = () => {
  alert("Calling patient...");
};
const addNotes = () => {
  alert("Adding notes...");
};
</script>

<style scoped>
.patient-card {
  position: absolute;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  top: 2rem;
  left: 1rem;
  right: 1rem;
  height: 100px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 0.5rem;
}

.patient-name {
  font-weight: 500;
}

.patient-condition {
  color: #6c757d;
  font-size: 0.875rem;
}

.card-actions {
  cursor: pointer;
}

.view-details {
  color: #007bff;
  font-size: 0.875rem;
  text-decoration: none;
}
</style>
