<template>
  <main>
    <BackToHome />
    <n-h2 prefix="bar" align-text>DoT servers</n-h2>
    <n-list>
      <n-list-item v-for="server in servers" :key="server.name">
        <n-thing :title="server.name">
          <template v-if="server.about" #header-extra>
            <n-button text tag="a" :href="server.about" target="_blank">
              <template #icon>
                <n-icon><Info16Regular /></n-icon>
              </template>
            </n-button>
          </template>
          {{ server.host }}
        </n-thing>
      </n-list-item>
    </n-list>
  </main>
</template>

<script setup lang="ts">
import { NH2, NList, NListItem, NThing, NButton, NIcon } from "naive-ui";
import { useHead } from "@vueuse/head";
import BackToHome from "@/components/misc/BackToHome.vue";
import { Info16Regular } from "@vicons/fluent";

const servers = [
  {
    name: "Cloudflare",
    host: "cloudflare-dns.com",
    about: "https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-tls/",
  },
  {
    name: "Google",
    host: "dns.google",
    about: "https://developers.google.com/speed/public-dns/docs/dns-over-tls",
  },
  {
    name: "Quad9",
    host: "dns.quad9.net",
    about: "https://www.quad9.net/",
  },
  {
    name: "CleanBrowsing (Family Filter)",
    host: "family-filter-dns.cleanbrowsing.org",
    about: "https://cleanbrowsing.org/help/docs/dnsovertls/",
  },
  {
    name: "AdGuard",
    host: "dns.adguard.com",
    about: "https://adguard.com/en/blog/adguard-dns-announcement/",
  },
  {
    name: "AliDNS",
    host: "dns.alidns.com",
    about: "https://alidns.com/articles/6018321800a44d0e45e90d71",
  },
  {
    name: "DNS.SB",
    host: "dot.sb",
    about: "https://dns.sb/",
  },
];

useHead({
  title: "DoT servers | DNS InBrowser.App",
  meta: [
    {
      name: "description",
      content: "DNS over TLS (DoT) servers list.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://dns.inbrowser.app/tools/dot-servers",
    },
  ],
});
</script>
