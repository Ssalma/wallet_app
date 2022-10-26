import { createRouter, createWebHistory } from "vue-router";
import ComponentView from "../views/ComponentView.vue";
import { HomeView, ProfileView, TransactionsView, WalletHome } from "../views";
// import DashboardLayout from "../layout/Dashboard.vue";
import {
  LoginView,
  ForgetPassword,
  CheckInbox,
  OtpCreatePin,
  OtpVerification,
  ResetPassword,
  SignUp,
} from "@/views";
const DashboardLayout = () =>
  import(/* webpackChunkName: "dashboard" */ "../layout/Dashboard.vue");

const routes = [
  {
    path: "/",
    name: "wallet-home",
    component: WalletHome,
  },
  {
    path: "/dashboard/home",
    name: "home",
    component: HomeView,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard-home",
        component: HomeView,
      },
      {
        path: "/dashboard/transactions",
        name: "transactions",
        component: TransactionsView,
      },
      {
        path: "/dashboard/profile",
        name: "profile",
        component: ProfileView,
      },
    ],
  },
  {
    path: "/auth/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/auth/checkinbox",
    name: "checkinbox",
    component: CheckInbox,
  },
  {
    path: "/auth/otpcreatepin",
    name: "otpcreatepin",
    component: OtpCreatePin,
  },
  {
    path: "/auth/otpverification",
    name: "otpverification",
    component: OtpVerification,
  },
  {
    path: "/auth/resetpassword/:token",
    name: "resetpassword",
    component: ResetPassword,
  },
  {
    path: "/auth/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/auth/forgetpassword",
    name: "forgetpassword",
    component: ForgetPassword,
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
