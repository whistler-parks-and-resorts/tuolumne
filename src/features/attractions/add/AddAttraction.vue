<template>
  <h3>Add Attraction</h3>
  <InputForm
    legend="Attraction Info"
    :disable-submit="false"
    :submit="handleSubmit"
  >
    <TextInput :input="name" placeholder="Attraction Name:" />
  </InputForm>
</template>

<script setup lang="ts">
import { InputForm, TextInput, useTextInput } from "@/components";

const properties = defineProps<AddAttractionProperties>();

export interface AddAttractionProperties {
  addAttraction: (name: string) => Promise<void>;
}

const name = useTextInput();

const handleSubmit = (): void => {
  void properties.addAttraction(name.state.value);
};
</script>
