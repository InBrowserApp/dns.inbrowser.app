<template>
  <n-space>
    <n-tag
      round
      :bordered="false"
      :type="props.result.rcode === 'NOERROR' ? 'success' : 'error'"
      size="small"
    >
      {{ props.result.rcode ?? "Unknown" }}
      <template #icon>
        <n-icon
          :component="
            props.result.rcode === 'NOERROR' ? CheckmarkCircle : CloseCircle
          "
        />
      </template>
    </n-tag>

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
import { NSpace, NTag, NIcon, NTooltip } from "naive-ui";
import { CheckmarkCircle, CloseCircle } from "@vicons/ionicons5";
import { computed } from "vue";
import type { DNSResponse } from "@/utils/packages/dohjs";

const props = defineProps<{
  result: DNSResponse;
}>();

const tagsInfo = computed(() => [
  {
    label: "TC",
    description: "Truncated Response",
    key: "TC",
    value: props.result.flag_tc,
  },
  {
    label: "RD",
    description: "Recursion Desired",
    key: "RD",
    value: props.result.flag_rd,
  },
  {
    label: "RA",
    description: "Recursion Available",
    key: "RA",
    value: props.result.flag_ra,
  },
  {
    label: "AD",
    description: "Authentic Data (DNSSEC)",
    key: "AD",
    value: props.result.flag_ad,
  },
  {
    label: "CD",
    description: "Checking Disabled (DNSSEC)",
    key: "CD",
    value: props.result.flag_cd,
  },
]);
</script>
