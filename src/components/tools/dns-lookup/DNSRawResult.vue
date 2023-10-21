<template>
  <n-code :code="result" word-wrap></n-code>
</template>

<script setup lang="ts">
import { NCode } from "naive-ui";

defineProps({
  result: {
    type: String,
    required: true,
  },
});
</script>
