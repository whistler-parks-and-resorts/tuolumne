<template>
  <AddAttraction :add-attraction="fakeFunction" />
</template>

<script setup lang="ts">
import dataClient from "@/data/DataClient";
import AddAttraction from "./AddAttraction.vue";
import { onMounted } from "vue";

onMounted(() => {
  const getStatus = async (): Promise<void> => {
    const result = await dataClient().attraction.getStatus(
      "1b3a3f58-ca4f-4824-ae28-85c24c983cd1",
    );

    console.log(result.status);
  };

  void getStatus();
});

const fakeFunction = (): Promise<void> => {
  return new Promise<void>(() => {
    return;
  });
};
</script>
