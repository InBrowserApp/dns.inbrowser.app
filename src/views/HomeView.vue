<template>
  <main>
    <n-h2 prefix="bar" align-text>Tools List</n-h2>
    <n-space vertical>
      <router-link to="/tools/dns-lookup" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="DocumentSearch16Regular" />
          </template>
          DNS Lookup
        </n-button>
      </router-link>
      <router-link to="/tools/doh-servers" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="Server20Regular" />
          </template>
          DoH servers
        </n-button>
      </router-link>
      <router-link to="/tools/dot-servers" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="Server20Regular" />
          </template>
          DoT servers
        </n-button>
      </router-link>
      <router-link to="/tools/udp-servers" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="Server20Regular" />
          </template>
          UDP servers
        </n-button>
      </router-link>
      <router-link to="/tools/punycode-tool" #="{ navigate, href }" custom>
        <n-button tag="a" :href="href" @click="navigate" text>
          <template #icon>
            <n-icon :component="LanguageOutline" />
          </template>
          Punycode Tool
        </n-button>
      </router-link>
    </n-space>
  </main>
</template>

<script setup lang="ts">
import { NH2, NButton, NIcon, NSpace } from "naive-ui";
import { DocumentSearch16Regular, Server20Regular } from "@vicons/fluent";
import { LanguageOutline } from "@vicons/ionicons5";
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
