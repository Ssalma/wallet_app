import { createRouter, createWebHistory } from "vue-router";
import ComponentView from "../views/ComponentView.vue";
import HomeView from "../views/Home.vue";
import { DashboardModal, pagination } from "@/components";
// import DashboardLayout from "../layout/Dashboard.vue";
const DashboardLayout = () =>
  import(/* webpackChunkName: "dashboard" */ "../layout/Dashboard.vue");
const authDashboard = () =>
  import(/* webpackChunkName: "dashboard" */ "../layout/AuthScreens.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardLayout,
  },
  {
    path: "/authDashboard",
    name: "authDashboard",
    component: authDashboard,
  },
  {
    path: "/components",
    name: "components",
    component: ComponentView,
  },
  {
    path: "/pagination",
    name: "pagination",
    component: pagination,
  },
  {
    path: "/dashboardmodal",
    name: "dashboardmodal",
    component: DashboardModal,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
