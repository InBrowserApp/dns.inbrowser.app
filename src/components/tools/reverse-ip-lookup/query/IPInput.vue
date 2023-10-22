<template>
  <n-form-item label="IP" :rule="rule">
    <n-input v-model:value="ip" type="text" placeholder="8.8.8.8" />
  </n-form-item>
</template>

<script lang="ts" setup>
import { NInput, NFormItem, type FormItemRule } from "naive-ui";
import { useVModel } from "@vueuse/core";

const props = defineProps({
  ip: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:ip"]);

const ip = useVModel(props, "ip", emit);

const rule: FormItemRule = {
  trigger: ["blur", "input", "change"],
  validator: () => {
    if (!ip.value) {
      return new Error("IP address is required");
    }
    // Regex expression for validating IPv4
    const ipv4Regex =
      /(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])/;

    // Regex expression for validating IPv6
    const ipv6Regex =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9])?[0-9]))$/;

    // Check if the IP address is valid
    if (ipv4Regex.test(ip.value) || ipv6Regex.test(ip.value)) {
      return true;
    } else {
      return new Error("Invalid IP address");
    }
  },
};
</script>
