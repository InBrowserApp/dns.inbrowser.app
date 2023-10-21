import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DNSLookupView from "../views/DNSLookupView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tools/dns-lookup",
      name: "dns-lookup",
      component: DNSLookupView,
    },
  ],
});

export default router;
