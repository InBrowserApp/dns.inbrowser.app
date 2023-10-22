<template>
  <n-data-table bordered :columns="columns" :data="data" />
</template>

<script lang="ts" setup>
import { NDataTable } from "naive-ui";
import type { DNSResponse } from "@/utils/packages/dohjs";
import { computed } from "vue";

const props = defineProps<{
  result: DNSResponse;
}>();

interface DataRow {
  name: string;
  type: string;
  TTL: number;
  data: string;
}

const columns = computed(() => [
  {
    title: "Name",
    key: "name",
  },
  {
    title: "Type",
    key: "type",
  },
  {
    title: "TTL",
    key: "TTL",
  },
  {
    title: "Data",
    key: "data",
  },
]);

const data = computed<DataRow[]>(() => {
  return (props.result?.answers ?? []).map((answer) => ({
    name: answer.name,
    type: answer.type,
    TTL: answer.ttl,
    data: answer.data,
  }));
});
</script>
