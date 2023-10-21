<template>
  <n-input v-model:value="value" type="text" placeholder="example.com" />
</template>

<script lang="ts" setup>
import { NInput } from "naive-ui";
import { useVModel } from "@vueuse/core";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:value"]);

const value = useVModel(props, "value", emit);
</script>
