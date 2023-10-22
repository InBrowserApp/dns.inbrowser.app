<template>
  <n-form-item label="Type">
    <n-select v-model:value="type" :options="options" />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NSelect, NFormItem } from "naive-ui";
import { useVModel } from "@vueuse/core";
import { DNSRecordTypes } from "@/utils/dns/common/record-type";
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:type"]);

const type = useVModel(props, "type", emit);

const options = computed(() => {
  return Object.entries(DNSRecordTypes).map(([label, value]) => ({
    label: `${label} / ${value}`,
    value: value,
  }));
});
</script>
