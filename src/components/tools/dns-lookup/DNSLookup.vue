<template>
  <DomainInput v-model:value="domain" />
  <n-button @click="lookup" type="primary"> Lookup </n-button>
  <DOHServerSelect v-model:value="dohServer" />
  {{ result }}
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DomainInput from "./DomainInput.vue";
import DOHServerSelect from "@/components/doh/DOHServerSelect.vue";
import { NButton } from "naive-ui";
import doh from "@/utils/packages/dohjs";

const domain = ref("example.com");
const dohServer = ref("https://cloudflare-dns.com/dns-query");
const result = ref("");

async function lookup() {
  const resolver = new doh.DohResolver(dohServer.value);
  const response = await resolver.query(domain.value, "A", "GET");
  result.value = JSON.stringify(response, null, 2);
}
</script>
