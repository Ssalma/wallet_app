<template>
  <main class="dashboard">
    <div class="sidebar"><SideBar /></div>
    <div class="container">
      <div class="navbar">
        <NavBar />
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
import { SideBar, NavBar } from "@/components";

export default {
  name: "DashboardLayout",
  data: () => ({}),
  computed: {},
  components: { SideBar, NavBar },
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
    padding: 20px 32px;
    .navbar {
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 248px auto;
    .sidebar {
      // border: 1px solid red;
    }
    .container {
      .navbar {
        // border: 1px solid green;
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
