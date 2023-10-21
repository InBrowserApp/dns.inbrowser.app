<template>
  <main>
    <n-h2 prefix="bar" align-text>DNS Lookup</n-h2>
    <DNSLookup />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import DNSLookup from "@/components/tools/dns-lookup/DNSLookup.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "DNS Lookup | DNS InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Lookup DNS records. Fully runs in your browser. No server-side code.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://dns.inbrowser.app/tools/dns-lookup",
    },
  ],
});
</script>
