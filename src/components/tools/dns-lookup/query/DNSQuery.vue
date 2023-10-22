<template>
  <n-h3 prefix="bar" align-text>Query</n-h3>

  <DomainInput v-model:domain="domain" />

  <n-collapse>
    <template #arrow>
      <n-icon>
        <Settings16Regular />
      </n-icon>
    </template>
    <n-collapse-item title="Advanced Settings" name="advanced-settings">
      <DOHServerSelect v-model:value="dohServer" />
    </n-collapse-item>
  </n-collapse>
  <n-button @click="lookup" type="primary"> Lookup </n-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DomainInput from "./DomainInput.vue";
import DOHServerSelect from "@/components/doh/DOHServerSelect.vue";
import { NButton, NCollapse, NCollapseItem, NIcon, NH3 } from "naive-ui";
import { Settings16Regular } from "@vicons/fluent";
import { makeDOHQuery } from "@/utils/dns/doh";

const domain = ref("example.com");
const dohServer = ref("https://cloudflare-dns.com/dns-query");

const emit = defineEmits(["update:result"]);

async function lookup() {
  const response = await makeDOHQuery(dohServer.value, {
    name: domain.value,
  });
  emit("update:result", response);
}
</script>
