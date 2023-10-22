<script lang="ts" setup></script>
<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>Punycode Tool</n-h2>
    <PunycodeTool />
  </main>
</template>

<script setup lang="ts">
import { NH2 } from "naive-ui";
import PunycodeTool from "@/components/tools/punycode/PunycodeTool.vue";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";

useHead({
  title: "Punycode Tool | DNS InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "Punycode converter that complies to RFC 3492 and RFC 5891. Fully runs in your browser. No server-side code.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://dns.inbrowser.app/tools/punycode-tool",
    },
  ],
});
</script>
