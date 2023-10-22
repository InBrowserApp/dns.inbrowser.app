import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DNSLookupView from "../views/DNSLookupView.vue";
import DOHServersView from "../views/DOHServersView.vue";
import DOTServersView from "../views/DOTServersView.vue";
import UDPServersView from "../views/UDPServersView.vue";
import PunycodeToolView from "../views/PunycodeToolView.vue";
import ReverseIPLookupView from "../views/ReverseIPLookupView.vue";

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
    {
      path: "/tools/dot-servers",
      name: "dot-servers",
      component: DOTServersView,
    },
    {
      path: "/tools/udp-servers",
      name: "udp-servers",
      component: UDPServersView,
    },
    {
      path: "/tools/punycode-tool",
      name: "punycode-tool",
      component: PunycodeToolView,
    },
    {
      path: "/tools/reverse-ip-lookup",
      name: "reverse-ip-lookup",
      component: ReverseIPLookupView,
    },
  ],
});

export default router;
