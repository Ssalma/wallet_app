import { createRouter, createWebHistory } from "vue-router";
import ComponentView from "../views/ComponentView.vue";
import HomeView from "../views/Home.vue";
// import DashboardLayout from "../layout/Dashboard.vue";
const DashboardLayout = () =>
  import(/* webpackChunkName: "dashboard" */ "../layout/Dashboard.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "Dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/",
        name: "dashboard-home",
        component: HomeView,
      },
      {
        path: "/transactions",
        name: "transactions",
        component: HomeView,
      },
      {
        path: "/profile",
        name: "profile",
        component: HomeView,
      },
    ],
  },
  {
    path: "/components",
    name: "components",
    component: ComponentView,
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
