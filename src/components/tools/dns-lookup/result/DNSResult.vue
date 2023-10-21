<template>
  <n-h3 prefix="bar" align-text>Result</n-h3>

  <DNSResultMetadata :result="result" />

  <n-collapse>
    <n-collapse-item title="Raw Result" name="raw-result">
      <DNSRawResult :result="resultString" />
    </n-collapse-item>
  </n-collapse>
</template>

<script lang="ts" setup>
import { NCollapse, NCollapseItem, NH3 } from "naive-ui";
import DNSRawResult from "./DNSRawResult.vue";
import DNSResultMetadata from "./DNSResultMetadata.vue";
import type { DNSJSONResponse } from "@/utils/dns/doh";

const props = defineProps<{
  result: DNSJSONResponse;
}>();

const resultString = JSON.stringify(props.result, null, 2);
</script>
