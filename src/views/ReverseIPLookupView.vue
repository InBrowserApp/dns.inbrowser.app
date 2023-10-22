<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>Reverse IP Lookup</n-h2>
    <ReverseIPLookup />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import ReverseIPLookup from "@/components/tools/reverse-ip-lookup/ReverseIPLookup.vue";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";

useHead({
  title: "Reverse IP Lookup | DNS InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Reverse IP Lookup. Fully runs in your browser. No server-side code.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://dns.inbrowser.app/tools/reverse-ip-lookup",
    },
  ],
});
</script>
