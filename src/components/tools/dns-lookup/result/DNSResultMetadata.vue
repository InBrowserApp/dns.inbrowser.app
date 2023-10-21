<template>
  <n-space>
    <span v-for="info in tagsInfo" :key="info.key">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-tag
            round
            :bordered="false"
            :type="info.value ? 'success' : 'error'"
            size="small"
          >
            {{ info.label }}
            <template #icon>
              <n-icon :component="info.value ? CheckmarkCircle : CloseCircle" />
            </template>
          </n-tag>
        </template>
        {{ info.description }}
      </n-tooltip>
    </span>
  </n-space>
</template>

<script lang="ts" setup>
import type { DNSJSONResponse } from "@/utils/dns/doh";
import { NSpace, NTag, NIcon, NTooltip } from "naive-ui";
import { CheckmarkCircle, CloseCircle } from "@vicons/ionicons5";
import { computed } from "vue";

const props = defineProps<{
  result: DNSJSONResponse;
}>();

const tagsInfo = computed(() => [
  {
    label: "TC",
    description: "Truncated Response",
    key: "TC",
    value: props.result.TC,
  },
  {
    label: "RD",
    description: "Recursion Desired",
    key: "RD",
    value: props.result.RD,
  },
  {
    label: "RA",
    description: "Recursion Available",
    key: "RA",
    value: props.result.RA,
  },
  {
    label: "AD",
    description: "Authentic Data (DNSSEC)",
    key: "AD",
    value: props.result.AD,
  },
  {
    label: "CD",
    description: "Checking Disabled (DNSSEC)",
    key: "CD",
    value: props.result.CD,
  },
]);
</script>
