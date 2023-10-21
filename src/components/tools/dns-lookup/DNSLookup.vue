<template>
  <DomainInput v-model:value="domain" />
  <n-button @click="lookup" type="primary"> Lookup </n-button>
  {{ result }}
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DomainInput from "./DomainInput.vue";
import { NButton } from "naive-ui";
import doh from "@/utils/packages/dohjs";

const domain = ref("example.com");
const result = ref("");

async function lookup() {
  const resolver = new doh.DohResolver("https://cloudflare-dns.com/dns-query");
  const response = await resolver.query(domain.value, "A");
  result.value = JSON.stringify(response, null, 2);
}
</script>
