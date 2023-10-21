<template>
  <main>
    <n-h2 prefix="bar" align-text>Tools List</n-h2>
    <router-link to="/tools/dns-lookup" #="{ navigate, href }" custom>
      <n-button tag="a" :href="href" @click="navigate" text>
        <template #icon>
          <n-icon :component="DocumentSearch16Regular" />
        </template>
        DNS Lookup
      </n-button>
    </router-link>
  </main>
</template>

<script setup lang="ts">
import { NH2, NButton, NIcon } from "naive-ui";
import { DocumentSearch16Regular } from "@vicons/fluent";
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
