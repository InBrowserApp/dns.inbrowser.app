<template>
  <n-h3 prefix="bar" align-text>Query</n-h3>

  <DomainInput v-model:domain="domain" />

  <!-- in same row -->
  <n-grid cols="2" x-gap="15">
    <n-grid-item>
      <RecordTypeInput v-model:type="recordType" />
    </n-grid-item>
    <n-grid-item>
      <DOHServerSelect v-model:value="dohServer" />
    </n-grid-item>
  </n-grid>

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
import DomainInput from "./DomainInput.vue";
import DOHServerSelect from "@/components/doh/DOHServerSelect.vue";
import { NButton, NH3, NGrid, NGridItem, NIcon } from "naive-ui";
import { makeDOHQuery } from "@/utils/dns/doh";
import RecordTypeInput from "./RecordTypeInput.vue";
import { DocumentSearch16Regular } from "@vicons/fluent";

const recordType = ref("A");
const domain = ref("example.com");
const dohServer = ref("https://cloudflare-dns.com/dns-query");
const loading = ref(false);

const emit = defineEmits(["update:result"]);

async function lookup() {
  loading.value = true;
  try {
    const response = await makeDOHQuery(dohServer.value, {
      name: domain.value,
      type: recordType.value,
    });
    emit("update:result", response);
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}
</script>
