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
import PageNotFound from "@/components/pageNotFound/PageNotFound.vue";
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
    meta: { requiresAuth: true },
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardLayout,
    meta: { requiresAuth: true },
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
    params: true,
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
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const token = localStorage.getItem("token");
  let loggedIn = false;
  if (token) {
    // const decoded = jwt_decode(token);
    // const expiryDate = new Date(decoded.exp * 1000);
    // const now = new Date();
    // if (now < expiryDate)
    loggedIn = true;
  }
  if (to.meta.requiresAuth && !loggedIn) {
    return "/";
  }

  // return true or nothing: navigation is valid
  // return false: breaks navigation
  // return route: redirects to that route
});

export default router;
