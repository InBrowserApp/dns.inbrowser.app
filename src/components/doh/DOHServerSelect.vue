<template>
  <n-select v-model:value="value" :options="options" />
</template>

<script lang="ts" setup>
import { NSelect } from "naive-ui";
import { useVModel } from "@vueuse/core";
import { BUILTIN_DOH_SERVERS } from "@/utils/dns/doh";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:value"]);

const value = useVModel(props, "value", emit);

const options = BUILTIN_DOH_SERVERS.map((server) => ({
  label: server.label,
  value: server.url,
}));
</script>
