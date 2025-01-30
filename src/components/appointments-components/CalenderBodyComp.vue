<template>
  <v-card>
    <v-row class="g-3 p-3">
      <v-col cols="1" class="pt-3">
        <div class="d-flex flex-column text-muted small gap-5">
          <div>9:00 AM</div>
          <div class="mt-12">10:00 AM</div>
          <div class="mt-12">11:00 AM</div>
          <div class="mt-12">12:00 PM</div>
          <div class="mt-12">1:00 PM</div>
          <div class="mt-12">2:00 PM</div>
          <div class="mt-12">3:00 PM</div>
          <div class="mt-12">4:00 PM</div>
          <div class="mt-12">5:00 PM</div>
        </div>
      </v-col>

      <v-col cols="11" class="position-relative" style="min-height: 800px">
        <AppointmentCard
          v-for="(appointment, index) in props.appointments"
          :key="index"
          :name="appointment.name"
          :condition="appointment.condition"
          :visitType="appointment.visitType"
          :color="appointment.color"
          :top="appointment.top"
          :id="appointment.id"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import AppointmentCard from "./AppointmentCard.vue";

const props = defineProps({
  appointments: Array,
});
</script>
