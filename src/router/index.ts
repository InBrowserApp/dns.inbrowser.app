import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DNSLookupView from "../views/DNSLookupView.vue";
import DOHServersView from "../views/DOHServersView.vue";

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
    {
      path: "/tools/doh-servers",
      name: "doh-servers",
      component: DOHServersView,
    },
  ],
});

export default router;
