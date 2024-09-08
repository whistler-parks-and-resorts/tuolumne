<template>
  <AddAttraction :add-attraction="fakeFunction" />
</template>

<script setup lang="ts">
import AddAttraction from "./AddAttraction.vue";

const fakeFunction = (): Promise<void> => {
  return new Promise<void>(() => {
    return;
  });
};
</script>
