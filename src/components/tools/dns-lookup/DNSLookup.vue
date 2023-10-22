<template>
  <DNSQuery @update:result="result = $event" />

  <DNSResult :result="result" v-if="result" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DNSQuery from "./query/DNSQuery.vue";
import DNSResult from "./result/DNSResult.vue";
import type { DNSResponse } from "@/utils/packages/dohjs";

const result = ref<DNSResponse | null>(null);
</script>
