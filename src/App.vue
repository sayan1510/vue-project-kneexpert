<template>
  <v-app>
    <v-btn
      variant="text"
      icon="mdi-menu"
      @click="toggleDrawer"
      aria-label="Toggle Navigation Drawer"
      :class="{ 'btn-over-drawer': smallWidth, 'btn-position': true }"
    ></v-btn>

    <v-navigation-drawer
      v-model="drawer"
      :clipped="!smallWidth"
      :temporary="smallWidth"
    >
      <div class="drawer-header">
        <img
          src="https://www.kneexpert.in/files/kneelogo.png"
          class="logo mt-3 mb-3 ms-3 me-auto"
          :height="80"
          :width="80"
        ></img>
      </div>
      <v-divider class="my-1"></v-divider>
      <div class="profile-section">
        <v-avatar size="48">
          <v-img
            src="https://t3.ftcdn.net/jpg/06/36/69/86/360_F_636698674_DroChEj5eWmZiaZOSDMnj8hcDqqw74Fp.jpg"
          ></v-img>
        </v-avatar>
        <div class="profile-text">
          <div class="profile-name">Dr. Priya Sharma</div>
          <div class="profile-role">Senior Physiotherapist</div>
        </div>
      </div>
      <v-divider class="my-1"></v-divider>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :class="{ 'active-item': item.title === selectedItem.title }"
          :prepend-icon="item.icon"
          :title="item.title"
          @click="selectItem(item)"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-light">
      <router-view></router-view>
    </v-main>

    <v-footer class="main-page__footer">
      <img
        class="footer-img ml-2"
        src="https://tiiny.host/assets/img/ad.png"
        alt="tiiny.host"
      />
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useDisplay } from "vuetify";
import { useRouter, useRoute } from "vue-router";

const drawer = ref(true);
const { mdAndDown } = useDisplay();
const smallWidth = computed(() => mdAndDown.value);
const router = useRouter();
const route = useRoute();

const items = [
  { title: "Dashboard", icon: "mdi-home", path: "/dashboard" },
  { title: "My Profile", icon: "mdi-account", path: "/my-profile" },
  { title: "Appointments", icon: "mdi-calendar", path: "/appointments" },
  { title: "My Patients", icon: "mdi-account-group", path: "/my-patients" },
];

const getStoredItem = () => {
  return JSON.parse(localStorage.getItem("selectedItem")) || items[0];
};

const selectedItem = ref(getStoredItem());

const selectItem = (item) => {
  selectedItem.value = item;
  localStorage.setItem("selectedItem", JSON.stringify(item));
  const currentPath = JSON.parse(localStorage.getItem("selectedPath"));
  const regex = /^\/([^/]+)(\/[^/]*)*\/?$/;
  if(currentPath && regex.test(currentPath) || !currentPath) {
    router.push({ path: item.path });
    localStorage.setItem(
      "selectedPath",
      JSON.stringify(item.path)
    );
  }
  
  if (smallWidth.value) drawer.value = false;
};

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

watch(
  () => route.path,
  (newPath) => {
    if (newPath.startsWith("/my-patients")) {
      selectedItem.value = items.find((item) => item.title === "My Patients");
    } else {
      const matchedItem = items.find(
        (item) => `/${item.title.toLowerCase().replace(/\s+/g, "-")}` === newPath
      );
      if (matchedItem) {
        selectedItem.value = matchedItem;
      }
    }
    localStorage.setItem("selectedItem", JSON.stringify(selectedItem.value));
  },
  { immediate: true }
);

onMounted(() => {
  const currentPath = JSON.parse(localStorage.getItem("selectedPath"));
  router.push({
    path: currentPath ? currentPath : selectedItem.value.path,
  });
});
</script>

<style scoped>
.v-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.v-main {
  flex: 1;
  padding-bottom: 56px;
}

.btn-position {
  position: absolute;
}
.btn-over-drawer {
  top: 16px;
  left: 16px;
  z-index: 1050;
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

.drawer-header {
  display: flex;
  align-items: flex-start;
}

.logo {
  width: 80px;
  height: 40px;
}

.profile-section {
  display: flex;
  align-items: center;
  padding: 16px;
}

.profile-text {
  margin-left: 12px;
}

.profile-name {
  font-weight: bold;
  font-size: 16px;
}

.profile-role {
  font-size: 14px;
  color: gray;
}

.active-item {
  background-color: #eef4ff !important;
  color: #0057ff !important;
  border-radius: 8px;
}

.main-page__footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 56px;
  text-align: center;
  background: linear-gradient(
    141deg,
    rgba(220, 137, 232, 1) 0%,
    rgba(144, 64, 204, 1) 100%
  );
  z-index: 9999;
  padding: 10px 0;
}

.footer-img {
  height: 35px !important;
  width: auto !important;
}
</style>
