<template>
  <h3>Add Attraction</h3>
  <div>
    <TextInput :input="name" placeholder="Attraction Name:" />
  </div>
</template>

<script setup lang="ts">
import { TextInput, useTextInput } from "@/components";

defineProps<AddAttractionProperties>();

export interface AddAttractionProperties {
  addAttraction: (name: string) => Promise<void>;
}

const name = useTextInput();
</script>
