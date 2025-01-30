import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import MyProfile from "../components/MyProfile.vue";
import Appointments from "../components/Appointments.vue";
import MyPatients from "../components/MyPatients.vue";
import PatientDetails from "../components/PatientDetails.vue";

const routes = [
  { path: "/dashboard", name: "dashboard", component: Dashboard },
  { path: "/my-profile", name: "my-profile", component: MyProfile },
  { path: "/appointments", name: "appointments", component: Appointments },
  { path: "/my-patients", name: "my-patients", component: MyPatients },
  {
    path: "/my-patients/patient-details/:id",
    name: "patient-details",
    component: PatientDetails,
  },
  { path: "/", redirect: "/dashboard" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
