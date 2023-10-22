<template>
  <n-h3 prefix="bar" align-text>Query</n-h3>

  <IPInput v-model:ip="ip" />
  <DOHServerSelect v-model:value="dohServer" />

  <n-button @click="lookup" round :loading="loading">
    <template #icon>
      <n-icon>
        <DocumentSearch16Regular />
      </n-icon>
    </template>
    Lookup
  </n-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import IPInput from "./IPInput.vue";
import DOHServerSelect from "@/components/doh/DOHServerSelect.vue";
import { NButton, NH3, NIcon } from "naive-ui";
import { makeDOHQuery } from "@/utils/dns/doh";
import { DocumentSearch16Regular } from "@vicons/fluent";

const ip = ref("2606:4700:4700::1111");
const dohServer = ref("https://cloudflare-dns.com/dns-query");
const loading = ref(false);

const emit = defineEmits(["update:result"]);

async function lookup() {
  loading.value = true;
  try {
    let reverseIPDomain = "";
    if (ip.value.includes(":")) {
      reverseIPDomain = toIPv6Arpa(ip.value);
    } else {
      reverseIPDomain =
        ip.value.split(".").reverse().join(".") + ".in-addr.arpa";
    }

    const response = await makeDOHQuery(dohServer.value, {
      name: reverseIPDomain,
      type: "PTR",
    });
    emit("update:result", response);
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
}

function toIPv6Arpa(ipv6) {
  // Step 1: Expand the IPv6 address to its full form
  let expandedIPv6 = expandIPv6Address(ipv6);
  // Step 2: Remove the colons
  let noColons = expandedIPv6.replace(/:/g, "");
  // Step 3: Reverse the order of the characters
  let reversed = noColons.split("").reverse().join("");
  // Step 4: Insert dots between every character
  let dotted = reversed.split("").join(".");
  // Step 5: Append .ip6.arpa to the end
  let arpaFormat = dotted + ".ip6.arpa";

  return arpaFormat;
}

function expandIPv6Address(address) {
  let fullAddress = "";
  let segments = address.split("::");
  if (segments.length === 2) {
    let segment1 = segments[0].split(":");
    let segment2 = segments[1].split(":");
    let missingZeroes = 8 - (segment1.length + segment2.length);
    fullAddress = segment1.join(":");
    for (let i = 0; i < missingZeroes; i++) {
      fullAddress += ":0000";
    }
    fullAddress += ":" + segment2.join(":");
  } else {
    fullAddress = address;
  }
  let hextets = fullAddress.split(":");
  for (let i = 0; i < hextets.length; i++) {
    hextets[i] = ("0000" + hextets[i]).slice(-4);
  }
  return hextets.join(":");
}
</script>
