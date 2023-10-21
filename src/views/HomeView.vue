<template>
  <main>
    <n-h2 prefix="bar" align-text>Tools List</n-h2>
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import { useHead } from "@vueuse/head";

useHead({
  title: "DNS InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "DNS InBrowser.App is a tool to check DNS. Fully runs in your browser. No server-side code.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://dns.inbrowser.app/",
    },
  ],
});
</script>
