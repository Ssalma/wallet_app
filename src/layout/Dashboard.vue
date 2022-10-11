<template>
  <main class="dashboard">
    <div class="sidebar"><p>sidebar will go here</p></div>
    <div class="container">
      <div class="navbar">
        <p>Navbar with go here</p>
      </div>
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </main>
</template>

<script>
// import { Sidebar, Navbar } from "@/components";
export default {
  name: "DashboardLayout",
  components: {},
  data: () => ({}),
  computed: {},
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: grid;
  overflow: hidden;
  height: 100vh;
  grid-template-columns: 1fr;
  .sidebar {
  }
  .container {
    overflow-x: hidden;
    max-width: unset;

    .navbar {
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 24.8rem auto;
    .sidebar {
    }
    .container {
      .navbar {
      }
    }
  }
}
// @keyframes slide-in {
//   0% {
//     opacity: 0;
//     transform: translateY(40px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// .list-enter-active {
//   animation: slide-in 0.5s;
// }
</style>
