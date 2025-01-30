<template>
  <div class="pa-8 pb-2">
    <v-row class="justify-space-between align-start mb-4 mt-12 mt-lg-0">
      <v-col cols="12" sm="auto">
        <h1 class="h4 font-weight-bold text-dark">Patient Details</h1>
        <p class="text-muted mb-0">Patient ID: KX2024-P1205</p>
      </v-col>
      <v-col cols="12" sm="auto" class="text-sm-right">
        <v-btn
          color="primary"
          class="mt-4 mt-sm-0 w-100 w-sm-auto capitalize-text"
          variant="flat"
        >
          Complete Verification
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="d-flex profile-body">
      <v-col cols="8" md="8">
        <div class="d-flex flex-column">
          <PatientInfoCardComp :patient="patient" class="mb-5" />
          <MedicalhistoryComp :patient="patient" class="mb-5" />
          <SessionLogs :sessions="patient.sessions" class="mb-5" />
          <PatientNotes />
        </div>
      </v-col>

      <v-col cols="4" md="4">
        <div class="d-flex flex-column">
          <PatientLocationComp :location="patient.location" />
          <OrthopedicianReferenceComp class="mt-3" />
          <MediaUploadComp class="mt-3" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import MediaUploadComp from "./patient_details_component/mediaUploadComp.vue";
import MedicalhistoryComp from "./patient_details_component/MedicalHistoryComp.vue";
import OrthopedicianReferenceComp from "./patient_details_component/OrthopedicianReferenceComp.vue";
import PatientInfoCardComp from "./patient_details_component/PatientInfoCardComp.vue";
import PatientLocationComp from "./patient_details_component/PatientLocationComp.vue";
import PatientNotes from "./patient_details_component/PatientNotes.vue";
import SessionLogs from "./patient_details_component/SessionLogs.vue";

const patient = {
  id: "KX2024-P1205",
  name: "Rajesh Kumar",
  age: 42,
  gender: "Male",
  bloodGroup: "B+",
  status: "Active Patient",
  contact: {
    phone: "+91 98765 43210",
    email: "rajesh.kumar@gmail.com",
    emergencyContact: {
      name: "Wife",
      phone: "+91 98765 43211",
    },
  },
  occupation: "Software Engineer",
  medicalHistory: {
    primaryComplaint: "Right Knee Pain - Post ACL Surgery",
    surgeryHistory: [
      {
        procedure: "ACL Reconstruction (Right Knee)",
        date: "January 15, 2024",
      },
    ],
    otherConditions: "Hypertension (Controlled with medication)",
  },
  sessions: [
    {
      title: "Post-Surgery Assessment",
      date: "January 20, 2024",
      type: "Home Visit",
      proceduresPerformed: [
        "ROM Assessment",
        "Pain Assessment",
        "Gait Analysis",
      ],
    },
    {
      title: "Therapy Session 1",
      date: "January 23, 2024",
      type: "Home Visit",
      proceduresPerformed: [
        "Passive ROM",
        "Isometric Exercises",
        "Cryotherapy",
      ],
    },
  ],
  location: {
    address:
      "#42, Grove Apartments, 5th Cross, Indiranagar, Bangalore - 560038",
    mapSrc:
      "https://maps.google.com/maps?q=Grove%20Apartments%2C%205th%20Cross%2C%20Indiranagar%2C%20Bangalore%2C%20Karnataka%20560038&t=m&z=15&output=embed&iwloc=near",
    mapsLink:
      "https://maps.google.com?q=#42%2C%20Grove%20Apartments%2C%205th%20Cross%2C%20Indiranagar%2C%20Bangalore%2C%20Karnataka%20560038",
  },
  mediaFiles: [
    {
      name: "MRI Report.pdf",
      type: "document",
      addedOn: "January 15, 2024",
    },
    {
      name: "Exercise Progress.jpg",
      type: "image",
      addedOn: "January 23, 2024",
    },
  ],
};
</script>

<style>
.capitalize-text {
  text-transform: capitalize;
  font-family: inherit;
}
</style>
