<template>
  <n-code :code="resultString" word-wrap language="json"></n-code>
</template>

<script setup lang="ts">
import { NCode } from "naive-ui";
import type { DNSResponse } from "@/utils/packages/dohjs";
import { computed } from "vue";

const props = defineProps<{
  result: DNSResponse;
}>();

const resultString = computed(() => JSON.stringify(props.result, null, 2));
</script>
