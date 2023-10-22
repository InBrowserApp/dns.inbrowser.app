<template>
  <n-h3 prefix="bar" align-text>Query</n-h3>

  <IPInput v-model:ip="ip" />
  <DOHServerSelect v-model:value="dohServer" />

  <n-button @click="lookup" round :loading="loading">
    <template #icon>
      <n-icon>
        <DocumentSearch16Regular />
      </n-icon>
    </template>
    Lookup
  </n-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import IPInput from "./IPInput.vue";
import DOHServerSelect from "@/components/doh/DOHServerSelect.vue";
import { NButton, NH3, NIcon } from "naive-ui";
import { makeDOHQuery } from "@/utils/dns/doh";
import { DocumentSearch16Regular } from "@vicons/fluent";
import { ReverseIPDomain } from "@/utils/dns/common/reverse-ip-domain";

const ip = ref("2606:4700:4700::1111");
const dohServer = ref("https://cloudflare-dns.com/dns-query");
const loading = ref(false);

const emit = defineEmits(["update:result"]);

async function lookup() {
  loading.value = true;
  try {
    const reverseIPDomain = ReverseIPDomain(ip.value);
    const response = await makeDOHQuery(dohServer.value, {
      name: reverseIPDomain,
      type: "PTR",
    });
    emit("update:result", response);
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}
</script>
